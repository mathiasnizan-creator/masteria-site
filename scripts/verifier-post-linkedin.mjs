// Vérifie qu'un post LinkedIn est bien PUBLIÉ EN ENTIER, en relisant sa page
// publique (l'API LinkedIn qu'on a est en écriture seule et refuse la relecture,
// mais la page /feed/update/<urn> est lisible sans connexion).
//
// L'incident du 22-23 juillet : un post tronqué en plein milieu. La parade ici
// est de vérifier que la CHUTE du post (sa dernière phrase de prose) est présente
// sur la page publique. Si elle manque, le post a été coupé avant la fin.
//
// Usage :  node scripts/verifier-post-linkedin.mjs <urn> <fichier-post.txt>
// Sortie (1re ligne) :
//   VERIF: OK       le post est complet en ligne
//   VERIF: ALERTE   la fin attendue est absente (troncature probable)
//   VERIF: INCONNU  page illisible (mur de connexion, réseau) — non concluant
// Codes retour : 0 = OK, 1 = ALERTE, 2 = INCONNU. Jamais bloquant côté routine.

import puppeteer from 'puppeteer';
import fs from 'fs';

const urn = process.argv[2];
const fichier = process.argv[3];

const fin = (m) => { console.log(m); };

if (!urn || !fichier || !fs.existsSync(fichier)) {
  fin('VERIF: INCONNU (usage : verifier-post-linkedin.mjs <urn> <fichier-post.txt>)');
  process.exit(2);
}

const norm = (s) => (s || '').replace(/\s+/g, ' ').trim();
const brut = fs.readFileSync(fichier, 'utf8').trim();

// Sépare une éventuelle ligne de hashtags finale : la chute en prose est un
// témoin plus fiable (LinkedIn peut rendre les hashtags avec un espacement
// différent, la prose non).
const lignes = brut.split('\n').map((l) => l.trim()).filter(Boolean);
let corps = lignes;
if (lignes.length && lignes[lignes.length - 1].startsWith('#')) corps = lignes.slice(0, -1);
const corpsNorm = norm(corps.join(' '));
const temoinProse = corpsNorm.slice(-50);          // 50 derniers signes de prose
const temoinHashtags = lignes.length && lignes[lignes.length - 1].startsWith('#')
  ? norm(lignes[lignes.length - 1]) : '';

const url = 'https://www.linkedin.com/feed/update/' + urn;
const navigateur = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
try {
  const page = await navigateur.newPage();
  await page.setUserAgent(
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 ' +
    '(KHTML, like Gecko) Chrome/126.0 Safari/537.36');
  const resp = await page.goto(url, { waitUntil: 'networkidle2', timeout: 45000 });
  await new Promise((r) => setTimeout(r, 2500));
  const finalUrl = page.url();
  const texte = await page.evaluate(
    () => (document.querySelector('main') || document.body).innerText || '');
  const texteN = norm(texte);

  const mur = /authwall|\/login|\/uas\/login|\/signup/i.test(finalUrl) || texteN.length < 200;
  const statut = resp && resp.status();
  if (mur || statut !== 200) {
    fin('VERIF: INCONNU (page non lisible' +
        (statut ? ` — HTTP ${statut}` : '') + ', vérification non concluante)');
    process.exit(2);
  }

  if (texteN.includes(temoinProse)) {
    let msg = 'VERIF: OK (post complet en ligne, chute présente';
    if (temoinHashtags) msg += texteN.includes(temoinHashtags) ? ', hashtags présents' : ', hashtags absents';
    fin(msg + ')');
    process.exit(0);
  }

  fin('VERIF: ALERTE (la fin du post est absente de la page publique — troncature probable)');
  console.log('  attendu en fin de post : …' + temoinProse);
  console.log('  page : ' + url);
  process.exit(1);
} catch (e) {
  fin('VERIF: INCONNU (' + (e && e.message ? e.message : e) + ')');
  process.exit(2);
} finally {
  await navigateur.close();
}

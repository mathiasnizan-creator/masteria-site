// Vérifie qu'un post LinkedIn est bien PUBLIÉ EN ENTIER, en relisant sa page
// publique (l'API LinkedIn qu'on a est en écriture seule et refuse la relecture,
// mais la page /feed/update/<urn> est lisible sans connexion).
//
// L'incident du 22-23 juillet : un post tronqué en plein milieu. La parade ici
// est de vérifier que la CHUTE du post (sa dernière phrase de prose) est présente
// sur la page publique. Si elle manque, le post a été coupé avant la fin.
//
// Robustesse : on déplie les « voir plus » avant de lire (LinkedIn peut replier
// un post long), et on réessaie si la page n'est pas encore lisible (propagation,
// mur de connexion intermittent) pour ne PAS crier à la troncature à tort.
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
const fin = (m) => console.log(m);

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
const pause = (ms) => new Promise((r) => setTimeout(r, ms));

// Attend que le corps du post soit réellement rendu (page JS : le DOM arrive
// avant le contenu). Sans échec dur : on lit ce qu'on a si le délai passe.
async function attendreContenu(page) {
  try {
    await page.waitForFunction(
      () => ((document.querySelector('main') || document.body).innerText || '').length > 400,
      { timeout: 20000, polling: 500 });
  } catch (e) { /* on lira quand même, le garde-fou « mur » tranchera */ }
}

// Déplie les « voir plus » / « see more » puis renvoie le texte de la page.
async function lireTexte(page) {
  await page.evaluate(() => {
    for (const b of document.querySelectorAll('button, a, span[role="button"]')) {
      const t = (b.innerText || b.textContent || '').trim().toLowerCase();
      if (/(voir plus|see more|…\s*plus|\bplus\b|\bmore\b)/.test(t) && t.length < 20) {
        try { b.click(); } catch (e) { /* ignore */ }
      }
    }
  });
  await pause(800);
  return page.evaluate(() => (document.querySelector('main') || document.body).innerText || '');
}

const MAX = 3;
let dernier = 'INCONNU (page non lisible)';
const navigateur = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
try {
  const page = await navigateur.newPage();
  await page.setUserAgent(
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 ' +
    '(KHTML, like Gecko) Chrome/126.0 Safari/537.36');

  for (let essai = 1; essai <= MAX; essai++) {
    let statut, finalUrl, texteN;
    try {
      // 'domcontentloaded' plutôt que 'networkidle2' : LinkedIn sonde le réseau
      // en continu (analytics, long-polling), la page n'est jamais « au repos »
      // et l'attente expirait, rendant la vérification aveugle (cas du 27/07).
      const resp = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
      statut = resp && resp.status();
      await attendreContenu(page);
      finalUrl = page.url();
      texteN = norm(await lireTexte(page));
    } catch (e) {
      dernier = 'INCONNU (' + (e && e.message ? e.message : e) + ')';
      await pause(5000);
      continue;
    }

    const mur = /authwall|\/login|\/uas\/login|\/signup/i.test(finalUrl) || texteN.length < 200;
    if (mur || statut !== 200) {
      dernier = 'INCONNU (page non lisible' + (statut ? ` — HTTP ${statut}` : '') + ')';
      await pause(5000);   // propagation ou mur intermittent : on réessaie
      continue;
    }

    // Page lisible : verdict définitif, pas de réessai.
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
  }

  fin('VERIF: ' + dernier + ', vérification non concluante');
  process.exit(2);
} catch (e) {
  fin('VERIF: INCONNU (' + (e && e.message ? e.message : e) + ')');
  process.exit(2);
} finally {
  await navigateur.close();
}

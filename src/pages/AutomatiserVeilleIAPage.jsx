import { Link } from 'react-router-dom'
import {
  ArrowRight, Radar, Check, Filter, Copy, Layers, List,
  Newspaper, Rss, AlertTriangle, PenLine, Globe,
  TrendingUp, Target, Swords, Scale, BookOpen, ExternalLink,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import FounderNote from '../components/FounderNote'

/**
 * AutomatiserVeilleIAPage — page pilier evergreen qui cible l'intention réelle
 * de « veille IA » : comment faire et automatiser sa veille (méthode + outils),
 * pas une publication d'actualités. La SERP de ce mot-clé est composée à 100 %
 * de guides / outils / formations, jamais de médias de veille. Cette page y
 * répond, s'appuie sur le système de veille réel de Masteria comme preuve, et
 * met la publication /veille-ia en vitrine.
 *
 * Optimisée SEO (couverture du cluster automatisation + usages, maillage,
 * données structurées) et GEO (réponses autonomes extractibles, glossaire
 * DefinedTermSet, stats attribuées, speakable, sources d'autorité citées).
 */

const SITE = 'https://www.master-ia.fr'
const SLUG = 'automatiser-sa-veille-ia'
const PUBLISHED = '2026-07-24'
const c = '#2563EB'

const wrap = { maxWidth: 1140, margin: '0 auto' }
const sectionPad = 'clamp(56px, 7.5vw, 92px) 24px'
const kicker = { fontSize: 12.5, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3.4vw, 36px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 20px', lineHeight: 1.2, letterSpacing: '-0.02em' }
const pStyle = { fontSize: 17, color: '#374151', lineHeight: 1.75, margin: '0 0 18px', maxWidth: 780 }
const thStyle = { textAlign: 'left', padding: '14px 16px', fontSize: 13.5, fontWeight: 700, color: '#0A0A0A', borderBottom: `2px solid ${c}`, whiteSpace: 'nowrap' }
const tdStyle = { padding: '14px 16px', fontSize: 15, color: '#374151', borderBottom: '1px solid #E5E7EB', verticalAlign: 'top', lineHeight: 1.55 }

// Sommaire ancré — navigation, featured snippets, sections citables par les IA.
const TOC = [
  ['definition', "C'est quoi la veille IA"],
  ['reperes', 'Le volume, en chiffres'],
  ['usages', 'À quoi elle sert'],
  ['approches', 'Les 4 approches'],
  ['methode', 'Notre méthode'],
  ['pieges', 'Les pièges'],
  ['glossaire', 'Glossaire'],
  ['faq', 'Questions fréquentes'],
]

// « En bref » — surface d'extraction pour Google et les moteurs génératifs.
const EN_BREF = [
  ['Ce qu\'est la veille IA', "Suivre en continu les sorties de modèles, la régulation et les usages, pour décider sans subir le retard."],
  ['Le vrai enjeu', "Filtrer le bruit, pas collecter davantage. Le volume d'actualités IA dépasse déjà ce qu'une équipe peut lire."],
  ['Les approches', "Quatre niveaux, de la lecture manuelle au système sur mesure. Chacun a son coût et sa limite."],
  ['Notre parti pris', "Collecte large, tri strict, analyse humaine signée. L'automatisation prépare la décision, elle ne la remplace pas."],
]

// Repères chiffrés — stats attribuées et cliquables (E-E-A-T + GEO : les moteurs
// génératifs citent volontiers un chiffre rattaché à une source nommée).
const STATS = [
  { valeur: '149', unite: 'modèles', label: "modèles de fondation publiés en 2023, plus du double de 2022", source: 'Stanford AI Index', href: 'https://hai.stanford.edu/ai-index/2025-ai-index-report' },
  { valeur: '24 000', unite: '+ / mois', label: "articles déposés sur arXiv en un seul mois fin 2024, un record porté par l'IA", source: 'arXiv', href: 'https://blog.arxiv.org/2024/11/04/arxiv-sets-new-record-for-monthly-submissions-again/' },
  { valeur: '78', unite: '%', label: "des organisations utilisaient l'IA dans au moins une fonction en 2024, contre 55 % un an plus tôt", source: 'Stanford AI Index', href: 'https://hai.stanford.edu/ai-index/2025-ai-index-report' },
]

// Trois usages — capte « veille stratégique ia », « veille concurrentielle ia »,
// « veille réglementaire », « veille ia ai act ».
const USAGES = [
  { Icon: Target, t: 'Veille stratégique', d: "Anticiper ce qui touche votre marché : nouveaux acteurs, ruptures d'outils, déplacements de valeur. Une veille stratégique relie les signaux externes à vos décisions, elle ne se contente pas de les collecter." },
  { Icon: Swords, t: 'Veille concurrentielle', d: "Suivre ce que vos concurrents annoncent, lancent et automatisent avec l'IA. L'enjeu n'est pas de tout savoir, mais de repérer tôt le mouvement qui vous obligera à réagir." },
  { Icon: Scale, t: 'Veille réglementaire', d: "Rester à jour sur l'AI Act et le cadre RGPD, dont les échéances tombent par vagues successives. Pour beaucoup d'organisations, c'est la veille IA qui a le retour sur investissement le plus immédiat." },
]

// Les 4 approches — capte « outils veille », « plateforme de veille »,
// « veille automatisée », « automatisation veille informationnelle ».
const APPROCHES = [
  {
    nom: 'Manuelle',
    detail: 'LinkedIn, sites spécialisés, newsletters lues une à une.',
    effort: 'Élevé, chaque jour',
    fraicheur: 'Bonne',
    tri: 'Dans votre tête',
    limite: 'Ne tient pas dans la durée : on décroche à la première semaine chargée.',
  },
  {
    nom: 'Agrégateurs',
    detail: 'Feedly, Google Alertes, newsletters IA regroupées.',
    effort: 'Moyen',
    fraicheur: 'Bonne',
    tri: 'Basique (mots-clés)',
    limite: 'Remonte tout, y compris le hors-sujet et le réchauffé. Le tri reste à votre charge.',
  },
  {
    nom: 'Outils IA',
    detail: 'Perplexity, NotebookLM, agents no-code (Make, n8n).',
    effort: 'Faible une fois réglé',
    fraicheur: 'Très bonne',
    tri: 'Correct, à cadrer',
    limite: 'Puissant, mais sensible au « slop » et aux hallucinations si les sources ne sont pas maîtrisées.',
  },
  {
    nom: 'Système sur mesure',
    detail: 'Pipeline dédié : collecte, tri, analyse, publication.',
    effort: 'Élevé au départ, quasi nul ensuite',
    fraicheur: 'Maximale',
    tri: 'Fin et paramétrable',
    limite: 'Demande de la conception. C\'est l\'approche que nous avons retenue pour notre propre veille.',
  },
]

// La méthode réelle de Masteria — E-E-A-T vécu, sans exposer l'implémentation.
const METHODE = [
  { Icon: Globe, t: 'Collecte large et cadrée', d: "Une quarantaine de sources suivies en continu : médias spécialisés, laboratoires, régulateurs. Trois zones tenues avec le même soin, l'Europe et la France, l'international, la Chine et l'Asie. Chaque source a un plafond, sinon une seule d'entre elles noie toutes les autres." },
  { Icon: Copy, t: 'Dédoublonnage', d: "Une même annonce reprise par dix sites ne doit apparaître qu'une fois. Mais « OpenAI lance un modèle » et « Google lance un modèle » sont deux sujets distincts : le seuil de rapprochement se règle au cas près, sinon on fusionne à tort ou on répète." },
  { Icon: Filter, t: 'Filtre anti-bruit', d: "Le publi-reportage, le contenu creux produit à la chaîne, le hors-sujet : tout cela est écarté avant la sélection. C'est l'étape que la plupart des veilles automatisées négligent, et celle qui fait toute la différence de lecture." },
  { Icon: PenLine, t: 'Analyse humaine signée', d: "Dix à quatorze actualités retenues, puis une analyse qui prend position. Agréger n'est pas analyser : la valeur d'une veille tient au tri et au point de vue, pas au nombre de liens." },
  { Icon: Newspaper, t: 'Publication quotidienne', d: "Chaque matin ouvré, une édition lisible en cinq minutes. La régularité vaut mieux que l'exhaustivité : une veille qu'on ouvre tous les jours bat une veille parfaite qu'on n'ouvre jamais." },
]

// Les pièges — morceau d'expertise que personne d'autre n'écrit aussi précisément.
const PIEGES = [
  { t: 'Le « slop » qui gonfle le volume', d: "Fermes de contenu et pages générées à la chaîne produisent une actualité creuse en quantité industrielle. En 2025, arXiv lui-même a durci ses règles de soumission face à l'afflux d'articles générés par IA. Une collecte naïve avale ce bruit et dilue le signal." },
  { t: 'Le dédoublonnage mal réglé', d: "Trop lâche, il fait passer deux sujets différents pour un seul. Trop strict, il répète la même annonce cinq fois. Le bon seuil se trouve à la main, pas par défaut." },
  { t: 'Les sources qui bloquent les robots', d: "Beaucoup de médias renvoient une erreur aux collecteurs automatiques ou changent d'adresse sans prévenir. Une veille sérieuse compose avec ces ruptures au lieu de les ignorer." },
  { t: 'Le mot-clé qui matche tout', d: "Filtrer sur « ia » attrape « média », « via », « social ». Un filtrage trop grossier laisse entrer plus de bruit qu'il n'en retire. La précision se joue sur des détails invisibles." },
  { t: 'L\'agrégation sans regard', d: "Empiler des liens n'est pas une veille. Sans sélection ni analyse, on déplace le problème : le tri retombe sur le lecteur, qui décroche." },
]

// Glossaire — DefinedTermSet. Ancrage d'entités pour les moteurs génératifs :
// chaque définition est autonome et extractible.
const GLOSSAIRE = [
  { terme: 'Veille IA', def: "Suivi organisé et continu de l'actualité de l'intelligence artificielle (modèles, outils, régulation, usages) destiné à éclairer des décisions." },
  { terme: 'Veille technologique', def: "Surveillance des innovations et évolutions techniques d'un secteur. La veille IA en est une branche spécialisée, devenue assez dense pour justifier son propre dispositif." },
  { terme: 'Veille stratégique', def: "Veille orientée décision, qui relie les signaux externes aux choix de l'entreprise plutôt que de seulement les recenser." },
  { terme: 'Slop', def: "Contenu de faible valeur produit en masse, souvent généré par IA, qui dilue le signal utile dans une veille automatisée." },
  { terme: 'Agrégateur (flux RSS)', def: "Outil ou format qui rassemble automatiquement les publications de plusieurs sources en un flux unique, base technique de la plupart des veilles automatisées." },
  { terme: 'Dédoublonnage', def: "Élimination des articles qui couvrent un même événement pour n'en conserver qu'un, étape clé pour éviter la répétition dans une veille." },
  { terme: 'GEO', def: "Generative Engine Optimization : optimisation d'un contenu pour être cité par les moteurs de réponse génératifs comme ChatGPT, Perplexity ou les AI Overviews de Google." },
]

const FAQ = [
  { q: "Comment faire une veille IA efficace ?", a: "Partez de l'usage, pas de l'outil. Définissez les décisions que votre veille doit éclairer (choix d'outils, conformité, opportunités métier), choisissez quelques sources fiables plutôt que beaucoup, et fixez un rythme tenable. L'automatisation vient ensuite, pour collecter et dédoublonner. Le tri et l'analyse, eux, gagnent à rester humains." },
  { q: "Quels outils pour automatiser sa veille IA ?", a: "Pour démarrer : un agrégateur (Feedly, Google Alertes) et un assistant de synthèse (Perplexity, NotebookLM). Pour aller plus loin : des agents no-code comme Make ou n8n qui collectent, filtrent et vous livrent un résumé. Pour un besoin exigeant, un pipeline sur mesure reste l'option la plus fine, comme celui que nous faisons tourner chaque matin." },
  { q: "Quel est le meilleur outil de veille IA ?", a: "Il n'y en a pas un seul : le bon outil dépend de votre usage. Pour une veille ponctuelle, Perplexity ou Google Alertes suffisent. Pour une veille d'équipe régulière, Feedly ou un agent Make/n8n. Pour une veille cadrée sur vos enjeux et livrée à votre format, un système sur mesure. Jugez un outil à la qualité de ce qu'il écarte, pas à sa longueur de fonctionnalités." },
  { q: "Peut-on totalement automatiser sa veille IA ?", a: "La collecte, le dédoublonnage et une première mise en forme, oui. La sélection finale et l'analyse, non, ou alors au prix de la qualité. Les moteurs génératifs se laissent piéger par le « slop » et les hallucinations. Le meilleur rapport effort/valeur combine une automatisation solide en amont et un regard humain en aval." },
  { q: "Comment faire une veille IA avec ChatGPT ou Perplexity ?", a: "Ces outils excellent pour synthétiser, pas pour collecter en continu. La bonne méthode : rassemblez vos sources avec un agrégateur ou un agent, puis demandez à l'assistant de résumer et de comparer les éléments du jour. Vérifiez toujours les sources citées : un assistant peut inventer une référence plausible. Il reste un accélérateur, pas un rédacteur en chef." },
  { q: "Combien de temps prend une veille IA quotidienne ?", a: "Sans méthode, une à deux heures par jour, vite abandonnées. Avec une chaîne automatisée qui fait le gros du travail, la lecture d'une édition bien triée tient en cinq à dix minutes. C'est tout l'intérêt d'automatiser la collecte : réserver le temps humain à ce qui compte, décider." },
  { q: "Peut-on faire une veille IA gratuite avec des flux RSS ?", a: "Oui pour démarrer. Un lecteur RSS et quelques flux de sources spécialisées couvrent l'essentiel sans rien dépenser. La limite arrive avec le volume : sans dédoublonnage ni filtre, un lecteur RSS finit saturé. Le gratuit convient à un besoin individuel ; une veille d'équipe fiable demande vite un outil dédié ou un système sur mesure." },
  { q: "Faut-il une veille IA gratuite ou payante ?", a: "Les briques gratuites (Google Alertes, RSS, versions d'essai) suffisent pour un besoin ponctuel. Pour une veille fiable, quotidienne et cadrée sur vos enjeux, comptez un outil payant ou un système dédié. Le vrai coût d'une veille n'est pas l'abonnement, c'est le temps perdu à trier du bruit." },
  { q: "Qu'est-ce que la veille concurrentielle assistée par IA ?", a: "C'est le suivi automatisé de ce que font vos concurrents (annonces, lancements, recrutements, prises de parole), où l'IA sert à collecter largement puis à résumer et repérer les signaux. Elle ne remplace pas l'analyse : elle vous fait gagner le temps de la collecte pour le réinvestir dans l'interprétation." },
  { q: "Comment éviter le bruit dans une veille automatisée ?", a: "Trois leviers : plafonner chaque source pour qu'aucune ne domine, écarter en amont le contenu creux et les doublons, et garder une sélection humaine qui tranche. Une veille se juge à ce qu'elle laisse dehors, pas à ce qu'elle ramasse." },
  { q: "Quelle différence entre veille IA et veille technologique ?", a: "La veille technologique couvre l'ensemble des innovations d'un secteur. La veille IA en est un sous-ensemble, centré sur les modèles, les outils, la régulation et les usages de l'intelligence artificielle. Vu la cadence des sorties depuis 2023, elle mérite désormais un dispositif propre." },
  { q: "Peut-on faire construire sa veille IA sur mesure ?", a: "Oui. Nous avons conçu la nôtre, nous concevons celle de nos clients : collecte sur vos sources, filtres selon vos sujets, livraison au format et au rythme voulus (e-mail, tableau de bord, canal interne). C'est une automatisation comme une autre, avec transfert de compétence à la clé." },
]

const REFERENCES = [
  { label: 'Stanford HAI — AI Index Report 2025', href: 'https://hai.stanford.edu/ai-index/2025-ai-index-report' },
  { label: 'arXiv — statistiques de soumissions mensuelles', href: 'https://arxiv.org/stats/monthly_submissions' },
  { label: 'Science — arXiv face au « AI slop »', href: 'https://www.science.org/content/article/arxiv-preprint-server-clamps-down-ai-slop' },
]

const RESSOURCES = [
  { tag: 'Outils', titre: 'Outils de veille IA', desc: "Le comparatif par familles : agrégateurs, assistants IA, agents no-code, plateformes pro, sur mesure.", href: '/outils-veille-ia', cta: 'Voir le comparatif' },
  { tag: 'Usage', titre: 'Veille concurrentielle par l\'IA', desc: "Surveiller ses concurrents avec l'IA : que suivre, comment, et dans quel cadre légal.", href: '/veille-concurrentielle-ia', cta: 'Voir l\'usage' },
  { tag: 'En accès libre', titre: 'Notre veille IA quotidienne', desc: "Chaque matin ouvré, dix à quatorze actualités triées et une analyse signée. C'est le système de cette page, en fonctionnement.", href: '/veille-ia', cta: 'Lire l\'édition du jour' },
  { tag: 'Développement', titre: 'Faire construire votre veille', desc: "Un pipeline de veille sur vos sources et vos sujets, livré à votre format, avec transfert de compétence.", href: '/agence-developpement-ia', cta: 'Voir comment' },
]

export default function AutomatiserVeilleIAPage() {
  const metaTitle = "Veille IA : comment l'automatiser (méthode + outils) | Masteria"
  const metaDescription = "Faire et automatiser sa veille IA : les 4 approches comparées, les outils, la méthode et les vrais pièges. Le système que Masteria fait tourner chaque matin."

  const jsonLd = [
    {
      '@context': 'https://schema.org', '@type': 'Article',
      '@id': `${SITE}/${SLUG}#article`,
      headline: "Veille IA : comment l'automatiser vraiment",
      description: metaDescription,
      author: { '@id': `${SITE}/#mathias-nizan` },
      editor: { '@id': `${SITE}/#mathias-nizan` },
      publisher: { '@id': `${SITE}/#organization` },
      datePublished: PUBLISHED, dateModified: PUBLISHED,
      inLanguage: 'fr-FR', isAccessibleForFree: true,
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}/${SLUG}` },
      about: ['Veille IA', 'Veille technologique', 'Veille stratégique', 'Automatisation de la veille', 'Intelligence artificielle'],
      // Speakable : les passages lisibles à voix haute (assistants, GEO).
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.veille-lede', '.veille-def'] },
      // Sources d'autorité citées par la page (signal E-E-A-T + GEO).
      citation: REFERENCES.map(r => ({ '@type': 'CreativeWork', name: r.label, url: r.href })),
    },
    {
      '@context': 'https://schema.org', '@type': 'ItemList',
      '@id': `${SITE}/${SLUG}#methode`,
      name: 'Méthode pour automatiser sa veille IA',
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      numberOfItems: METHODE.length,
      itemListElement: METHODE.map((m, i) => ({
        '@type': 'ListItem', position: i + 1, name: m.t, description: m.d,
      })),
    },
    {
      '@context': 'https://schema.org', '@type': 'DefinedTermSet',
      '@id': `${SITE}/${SLUG}#glossaire`,
      name: 'Glossaire de la veille IA',
      hasDefinedTerm: GLOSSAIRE.map(g => ({
        '@type': 'DefinedTerm', name: g.terme, description: g.def,
        inDefinedTermSet: `${SITE}/${SLUG}#glossaire`,
      })),
    },
  ]

  return (
    <>
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        slug={SLUG}
        keywords="veille ia, automatiser sa veille ia, veille automatisée, outils de veille ia, veille technologique intelligence artificielle, automatisation veille informationnelle, faire sa veille ia, plateforme de veille, veille stratégique ia, veille concurrentielle ia"
        breadcrumbs={[{ name: 'Accueil', slug: '' }, { name: 'Veille IA : l\'automatiser', slug: SLUG }]}
        faqItems={FAQ}
        datePublished={PUBLISHED}
        dateModified={PUBLISHED}
        extraJsonLd={jsonLd}
      />

      {/* ── HERO SOMBRE (famille visuelle de la Veille IA) ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(52px, 7vw, 84px) 24px clamp(56px, 8vw, 88px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#94A3B8', display: 'flex', gap: 8, marginBottom: 30, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#94A3B8' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span aria-current="page" style={{ color: '#93C5FD', fontWeight: 600 }}>Automatiser sa veille IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 24 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Radar size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>Méthode &amp; outils</span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 52px)', fontWeight: 900, lineHeight: 1.06, margin: 0, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 900 }}>
            Veille IA<br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>comment l&apos;automatiser vraiment</span>
          </h1>

          <p className="veille-lede" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.6, margin: '26px 0 30px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            La quantité d&apos;actualités IA publiées chaque jour dépasse ce qu&apos;une équipe peut lire.
            Automatiser sa veille devient nécessaire, à condition de ne pas remplacer le tri par du volume brut.
            Voici les approches, la méthode, et le système que nous faisons tourner tous les matins.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/veille-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Voir notre veille en action <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.06)', color: '#F8FAFC', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700, border: '1px solid rgba(255,255,255,0.14)' }}>
              Parler de votre veille
            </Link>
          </div>

          {/* En bref — dl citable */}
          <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 1, margin: '40px 0 0', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, overflow: 'hidden' }}>
            {EN_BREF.map(([t, d], i) => (
              <div key={i} style={{ background: '#0A0F1E', padding: '18px 20px' }}>
                <dt style={{ fontSize: 12.5, fontWeight: 700, color: '#7DA9F0', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 7 }}>{t}</dt>
                <dd style={{ margin: 0, fontSize: 14.5, color: '#CBD5E1', lineHeight: 1.55 }}>{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── SOMMAIRE ── */}
      <nav aria-label="Sommaire" style={{ background: '#F8FAFC', borderBottom: '1px solid #E5E7EB', padding: '16px 24px' }}>
        <div style={{ ...wrap, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12.5, fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            <List size={15} aria-hidden="true" /> Sur cette page
          </span>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {TOC.map(([id, label]) => (
              <a key={id} href={`#${id}`} style={{ fontSize: 13.5, fontWeight: 600, color: '#334155', background: '#fff', border: '1px solid #E5E7EB', borderRadius: 999, padding: '6px 13px', textDecoration: 'none' }}>{label}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── QU'EST-CE QUE LA VEILLE IA ── */}
      <section id="definition" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 90 }}>
        <div style={wrap}>
          <div style={kicker}>Le point de départ</div>
          <h2 style={h2Style}>Qu&apos;est-ce que la veille IA, et pourquoi elle a changé de nature</h2>
          <p className="veille-def" style={pStyle}>
            La veille IA est le suivi organisé et continu de l&apos;actualité de l&apos;intelligence artificielle :
            sorties de modèles, évolutions réglementaires comme l&apos;AI Act, nouveaux usages métier, publications
            de recherche. C&apos;est une branche de la veille technologique, mais une branche devenue si dense
            qu&apos;elle réclame désormais son propre dispositif.
          </p>
          <p style={pStyle}>
            La raison est simple. Depuis 2023, la cadence des annonces a dépassé ce qu&apos;une lecture manuelle
            peut absorber. Suivre à la main revient à choisir entre y passer une heure par jour ou accepter de
            manquer l&apos;essentiel. C&apos;est précisément le problème que l&apos;automatisation résout, à condition
            de garder en tête que collecter plus ne sert à rien si l&apos;on ne trie pas mieux.
          </p>
        </div>
      </section>

      {/* ── REPÈRES CHIFFRÉS ── */}
      <section id="reperes" style={{ padding: sectionPad, background: '#0A0F1E', color: '#F8FAFC', scrollMarginTop: 90 }}>
        <div style={wrap}>
          <div style={{ ...kicker, color: '#7DA9F0' }}>Le volume, en chiffres</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC' }}>Pourquoi la veille IA ne tient plus à la main</h2>
          <p style={{ fontSize: 17, color: '#CBD5E1', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 720 }}>
            La production d&apos;actualités et de recherche en IA a changé d&apos;échelle. Trois chiffres suffisent à
            comprendre pourquoi une veille sérieuse passe désormais par l&apos;automatisation.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {STATS.map((s, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16, padding: 26 }}>
                <TrendingUp size={20} style={{ color: '#60A5FA', marginBottom: 14 }} aria-hidden="true" />
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 40, fontWeight: 900, color: '#fff', lineHeight: 1, letterSpacing: '-0.02em' }}>
                  {s.valeur}<span style={{ fontSize: 18, color: '#7DA9F0', marginLeft: 4 }}>{s.unite}</span>
                </div>
                <p style={{ fontSize: 14.5, color: '#CBD5E1', lineHeight: 1.55, margin: '12px 0 14px' }}>{s.label}</p>
                <a href={s.href} target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 600, color: '#7DA9F0', textDecoration: 'none' }}>
                  {s.source} <ExternalLink size={12} aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── À QUOI SERT UNE VEILLE IA ── */}
      <section id="usages" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 90 }}>
        <div style={wrap}>
          <div style={kicker}>Trois usages</div>
          <h2 style={h2Style}>À quoi sert une veille IA, concrètement</h2>
          <p style={{ ...pStyle, marginBottom: 36 }}>
            « Se tenir au courant » est un objectif trop vague pour tenir. Une veille utile sert une décision.
            Dans la pratique, elle prend trois formes, souvent combinées.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {USAGES.map(({ Icon, t, d }, i) => (
              <div key={i} style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 26 }}>
                <span style={{ display: 'inline-flex', width: 44, height: 44, borderRadius: 12, background: '#DBEAFE', alignItems: 'center', justifyContent: 'center', color: c, marginBottom: 16 }}>
                  <Icon size={22} strokeWidth={2.1} aria-hidden="true" />
                </span>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 19, fontWeight: 800, color: '#0A0A0A', margin: '0 0 10px', letterSpacing: '-0.01em' }}>{t}</h3>
                <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.65, margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LES 4 APPROCHES (tableau) ── */}
      <section id="approches" style={{ padding: sectionPad, background: '#F9FAFB', borderTop: '1px solid #E5E7EB', scrollMarginTop: 90 }}>
        <div style={wrap}>
          <div style={kicker}>Comparatif</div>
          <h2 style={h2Style}>Les quatre façons de faire sa veille IA</h2>
          <p style={{ ...pStyle, marginBottom: 32 }}>
            De la lecture manuelle au système sur mesure, chaque approche a son coût et sa limite.
            La bonne n&apos;est pas la plus automatisée dans l&apos;absolu, c&apos;est celle qui tient dans votre quotidien.
          </p>
          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', borderRadius: 14, border: '1px solid #E5E7EB', background: '#fff' }}>
            <table style={{ width: '100%', minWidth: 760, borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={thStyle}>Approche</th>
                  <th style={thStyle}>Effort</th>
                  <th style={thStyle}>Fraîcheur</th>
                  <th style={thStyle}>Qualité du tri</th>
                  <th style={thStyle}>La limite à connaître</th>
                </tr>
              </thead>
              <tbody>
                {APPROCHES.map((a, i) => (
                  <tr key={i}>
                    <td style={{ ...tdStyle, minWidth: 160 }}>
                      <div style={{ fontWeight: 700, color: '#0A0A0A', fontSize: 15.5 }}>{a.nom}</div>
                      <div style={{ fontSize: 13, color: '#6B7280', marginTop: 3 }}>{a.detail}</div>
                    </td>
                    <td style={tdStyle}>{a.effort}</td>
                    <td style={tdStyle}>{a.fraicheur}</td>
                    <td style={tdStyle}>{a.tri}</td>
                    <td style={{ ...tdStyle, minWidth: 240 }}>{a.limite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── LA MÉTHODE MASTERIA ── */}
      <section id="methode" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 90 }}>
        <div style={wrap}>
          <div style={kicker}>Notre méthode</div>
          <h2 style={h2Style}>Comment nous automatisons notre propre veille</h2>
          <p style={{ ...pStyle, marginBottom: 40 }}>
            Nous publions une veille IA chaque matin ouvré. Elle repose sur une chaîne que nous avons
            construite et affinée au fil des ratés. Voici les cinq étapes, sans le code, avec ce qui compte
            vraiment à chacune.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {METHODE.map(({ Icon, t, d }, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, padding: 24, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <span style={{ flexShrink: 0, width: 42, height: 42, borderRadius: 11, background: '#DBEAFE', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: c }}>
                    <Icon size={21} strokeWidth={2.1} aria-hidden="true" />
                  </span>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#94A3B8' }}>Étape {i + 1}</div>
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 10px', letterSpacing: '-0.01em' }}>{t}</h3>
                <p style={{ fontSize: 14.5, color: '#4B5563', lineHeight: 1.65, margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VITRINE : la publication ── */}
      <section style={{ padding: sectionPad, background: '#0A0F1E', color: '#F8FAFC' }}>
        <div style={{ ...wrap, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40, alignItems: 'center' }}>
          <div>
            <div style={{ ...kicker, color: '#7DA9F0' }}>La preuve, en accès libre</div>
            <h2 style={{ ...h2Style, color: '#F8FAFC' }}>Cette méthode produit une vraie veille, chaque jour</h2>
            <p style={{ fontSize: 17, color: '#CBD5E1', lineHeight: 1.7, margin: '0 0 24px', maxWidth: 560 }}>
              Nous ne décrivons pas une théorie. La chaîne décrite ci-dessus alimente notre veille IA
              quotidienne, ouverte à tous : dix à quatorze actualités triées, sourcées, suivies d&apos;une analyse
              qui prend position. Le meilleur moyen de juger une méthode, c&apos;est d&apos;en lire le résultat.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link to="/veille-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '13px 24px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
                Lire l&apos;édition du jour <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
              </Link>
              <a href="/veille.xml" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.06)', color: '#F8FAFC', padding: '13px 24px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700, border: '1px solid rgba(255,255,255,0.14)' }}>
                <Rss size={16} aria-hidden="true" /> S&apos;abonner au flux
              </a>
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 18, padding: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <Newspaper size={20} style={{ color: '#60A5FA' }} aria-hidden="true" />
              <span style={{ fontWeight: 700, fontSize: 15 }}>Veille IA Masteria</span>
            </div>
            {['Europe et France, international, Chine et Asie', 'Sources vérifiées, doublons écartés', 'Une analyse signée, pas un simple fil de liens', 'Publiée chaque matin ouvré, lisible en 5 minutes'].map((t, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 12 }}>
                <Check size={17} style={{ color: '#60A5FA', flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                <span style={{ fontSize: 14.5, color: '#CBD5E1', lineHeight: 1.5 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LES PIÈGES ── */}
      <section id="pieges" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 90 }}>
        <div style={wrap}>
          <div style={kicker}>Ce que personne ne dit</div>
          <h2 style={h2Style}>Les pièges d&apos;une veille IA automatisée</h2>
          <p style={{ ...pStyle, marginBottom: 36 }}>
            Automatiser sa veille est tentant, et facile à mal faire. Voici les écueils que nous avons
            rencontrés en construisant la nôtre, ceux qui séparent une veille utile d&apos;un flux de bruit.
          </p>
          <div style={{ display: 'grid', gap: 16 }}>
            {PIEGES.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 14px 14px 0', padding: '20px 24px' }}>
                <AlertTriangle size={20} style={{ color: c, flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                <div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px' }}>{p.t}</h3>
                  <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.65, margin: 0 }}>{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GLOSSAIRE (DefinedTermSet, GEO) ── */}
      <section id="glossaire" style={{ padding: sectionPad, background: '#F9FAFB', borderTop: '1px solid #E5E7EB', scrollMarginTop: 90 }}>
        <div style={wrap}>
          <div style={{ ...kicker, display: 'inline-flex', alignItems: 'center', gap: 8 }}><BookOpen size={15} aria-hidden="true" /> Glossaire</div>
          <h2 style={h2Style}>Les mots de la veille IA, définis</h2>
          <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, margin: 0 }}>
            {GLOSSAIRE.map((g, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 14, padding: '20px 22px' }}>
                <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16.5, fontWeight: 800, color: '#0A0A0A', marginBottom: 8 }}>{g.terme}</dt>
                <dd style={{ margin: 0, fontSize: 14.5, color: '#4B5563', lineHeight: 1.6 }}>{g.def}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── FOUNDER NOTE (E-E-A-T) ── */}
      <FounderNote bg="#fff" />

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 90 }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ ...kicker, textAlign: 'center' }}>Questions fréquentes</div>
          <h2 style={{ ...h2Style, textAlign: 'center', marginBottom: 36 }}>Veille IA : ce qu&apos;on nous demande le plus</h2>
          {FAQ.map((item, i) => (
            <details key={i} style={{ borderBottom: '1px solid #E5E7EB', padding: '20px 0' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 700, fontSize: 17, color: '#0A0A0A', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                <span>{item.q}</span>
                <span style={{ flexShrink: 0, color: c }} aria-hidden="true">+</span>
              </summary>
              <p style={{ marginTop: 12, color: '#374151', lineHeight: 1.7, fontSize: 16 }}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── SOURCES / RÉFÉRENCES (E-E-A-T + GEO) ── */}
      <section style={{ padding: '40px 24px', background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
        <div style={wrap}>
          <div style={{ fontSize: 12.5, fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14 }}>Sources</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {REFERENCES.map((r, i) => (
              <li key={i}>
                <a href={r.href} target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#334155', fontSize: 14.5, fontWeight: 600, textDecoration: 'none' }}>
                  <ExternalLink size={14} style={{ color: c }} aria-hidden="true" /> {r.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── RESSOURCES / MAILLAGE ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={kicker}>Aller plus loin</div>
          <h2 style={{ ...h2Style, marginBottom: 32 }}>Lire, faire construire, ou se former</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {RESSOURCES.map((r, i) => (
              <Link key={i} to={r.href} style={{ display: 'flex', flexDirection: 'column', background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 26, textDecoration: 'none' }}>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: c, marginBottom: 12 }}>{r.tag}</span>
                <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 19, fontWeight: 800, color: '#0A0A0A', marginBottom: 8, letterSpacing: '-0.01em' }}>{r.titre}</span>
                <span style={{ fontSize: 14.5, color: '#4B5563', lineHeight: 1.6, marginBottom: 18, flex: 1 }}>{r.desc}</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: c, fontWeight: 700, fontSize: 14.5 }}>
                  {r.cta} <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{ padding: 'clamp(60px, 8vw, 90px) 24px', background: '#0A0A0A', color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <Layers size={30} style={{ color: '#60A5FA', marginBottom: 18 }} aria-hidden="true" />
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 'clamp(26px, 4vw, 38px)', marginBottom: 16, lineHeight: 1.2 }}>
            On a construit notre veille. On peut construire la vôtre.
          </h2>
          <p style={{ fontSize: 17, color: '#D1D5DB', marginBottom: 30, lineHeight: 1.6 }}>
            Un système de veille sur vos sources et vos sujets, livré à votre format, avec transfert de
            compétence. Parlons de ce que vous avez besoin de suivre.
          </p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#fff', color: '#0A0A0A', padding: '16px 32px', borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
            Demander un échange <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}

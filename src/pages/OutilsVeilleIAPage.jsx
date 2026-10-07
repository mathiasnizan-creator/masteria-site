import { Link } from 'react-router-dom'
import {
  ArrowRight, Wrench, Check, Rss, Sparkles, Workflow, Building2, Boxes,
  Newspaper, AlertTriangle, Coins, ShieldAlert, Lock, Clock, CalendarCheck,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'

/**
 * OutilsVeilleIAPage : page sœur de /automatiser-sa-veille-ia (cluster veille).
 * Cible l'intention « choisir un outil » : outil de veille (590/mois),
 * outils veille (260), logiciel de veille (320), plateforme de veille (260).
 * Divergence volontaire avec la page pilier : ici un comparatif d'outils par
 * FAMILLES (nommées), là un comparatif de 4 APPROCHES. Aucune cannibalisation.
 */

const SITE = 'https://www.master-ia.fr'
const SLUG = 'outils-veille-ia'
const PUBLISHED = '2026-07-24'
const MODIFIED = '2026-10-07'
const RDV = '/contact?type=projet&rdv=30'
const c = '#2563EB'

const wrap = { maxWidth: 1140, margin: '0 auto' }
const sectionPad = 'clamp(56px, 7.5vw, 92px) 24px'
const kicker = { fontSize: 12.5, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3.4vw, 36px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 20px', lineHeight: 1.2, letterSpacing: '-0.02em' }
const pStyle = { fontSize: 17, color: '#374151', lineHeight: 1.75, margin: '0 0 18px', maxWidth: 780 }

const EN_BREF = [
  ['La question à poser', "Quel usage la veille doit-elle servir : suivre un marché, préparer une note, surveiller trois concurrents ? Le bon outil découle de la réponse."],
  ['Cinq familles', "Du lecteur de flux gratuit au système construit pour vous, chaque famille couvre une étape différente de la chaîne."],
  ['Le piège classique', "Payer une plateforme d'entreprise pour un besoin qu'un lecteur de flux couvre, ou tenir à la main une veille qui méritait un outil."],
  ['Notre position', "Masteria a construit son propre système pour sa veille quotidienne. Beaucoup de besoins se règlent très bien avec un outil du marché."],
]

// Cinq familles d'outils, du plus léger au plus lourd. Fiches factuelles, sans
// classement ni prix inventé ; les faits volatils sont datés (relevé du 07/10/2026,
// fiche FAITS-OUTILS et pages /veille-ia).
const FAMILLES = [
  {
    Icon: Rss, nom: 'Agrégateurs et alertes',
    exemples: 'Feedly, Inoreader, Google Alertes',
    role: "Réunir dans un seul fil les nouveautés de dizaines de sites, de blogs et de recherches enregistrées.",
    pour: 'Une première veille, tenue par une personne ou par une petite équipe.',
    prix: 'Offre gratuite, puis abonnement',
    limite: "Ils remontent tout ce qui paraît : trier, dédoublonner et résumer reste votre travail.",
  },
  {
    Icon: Sparkles, nom: 'Assistants IA',
    exemples: 'Perplexity, ChatGPT, Claude, Vibe, Gemini Notebook (anciennement NotebookLM)',
    role: "Interroger le web ou un corpus de documents en français courant, puis résumer et comparer.",
    pour: 'Synthétiser vite, creuser une question, préparer une note de veille.',
    prix: 'Version gratuite, offres payantes',
    limite: "Ils analysent bien et collectent mal en continu ; une source citée se vérifie toujours.",
    fait: "Gemini Notebook accepte jusqu'à 300 sources par carnet sur Google Workspace Business Standard et Plus, 100 sur Business Starter. Chez OpenAI, le retrait des GPTs personnalisés est fixé au 11 décembre 2026 : un « GPT de veille » doit devenir un plugin d'ici là.",
  },
  {
    Icon: Workflow, nom: 'Flux automatisés sans code',
    exemples: 'Make, n8n, Zapier, Workspace Studio, Copilot Cowork',
    role: "Enchaîner les étapes sans programmer : relever les sources, filtrer, faire résumer, envoyer.",
    pour: "Une veille d'équipe qui doit arriver seule, chaque semaine ou chaque matin.",
    prix: 'Abonnement, souvent selon le volume',
    limite: "Mal réglés, ils produisent du bruit à la chaîne : le filtre se règle avant d'automatiser.",
    fait: "Google décrit Workspace Studio comme un outil de flux rédigés en langage naturel ; ses plafonds d'usage s'appliquent à partir du 1er novembre 2026. Copilot Cowork, chez Microsoft, accepte des tâches planifiées ou déclenchées par un mail ou un message Teams, facturées selon la consommation, au-delà du prix de la licence Microsoft Copilot.",
  },
  {
    Icon: Building2, nom: 'Plateformes professionnelles',
    exemples: 'Digimind, Meltwater, Talkwalker, Sindup',
    role: "Une veille d'entreprise livrée clé en main : collecte large, tableaux de bord, alertes, accompagnement.",
    pour: 'Les grandes organisations qui suivent leur réputation et leurs concurrents sur de nombreux marchés.',
    prix: 'Sur devis',
    limite: "Périmètre et prix dépassent souvent un besoin ciblé ; demandez une démonstration sur vos propres sujets.",
  },
  {
    Icon: Boxes, nom: 'Système sur mesure',
    exemples: 'Chaîne construite pour vos sources (celle de Masteria en est une)',
    role: "Collecte, tri, analyse et publication conçus autour de vos sources et de vos sujets.",
    pour: "Un besoin précis qu'aucun produit du marché ne couvre.",
    prix: 'Développement, puis faible coût de fonctionnement',
    limite: "Il faut le concevoir avant d'en profiter ; il devient ensuite l'option la plus précise.",
    fait: "La veille IA de Masteria fonctionne ainsi : 38 flux dépouillés chaque jour ouvré, une douzaine d'actualités retenues et reliées à leur source, une analyse signée, et depuis août 2026 une version anglaise baptisée AI Watch.",
  },
]

// Critères de choix : capte « comment choisir un outil de veille ».
const CRITERES = [
  { t: "L'usage visé", d: "Rassembler des publications, produire une note de synthèse ou surveiller vingt concurrents sur dix marchés ne réclament pas les mêmes outils. Écrivez d'abord la décision que la veille doit nourrir, puis comparez." },
  { t: 'Le temps de réglage', d: "Un outil qui demande une heure de paramétrage par semaine tombera dans l'oubli si personne n'a cette heure. Retenez celui que l'équipe ouvrira sans qu'on le lui rappelle." },
  { t: 'Le contrôle des sources', d: "Plus l'outil choisit seul ce qu'il vous montre, plus vous risquez les angles morts et les textes creux produits en masse. Gardez la liste des sources entre vos mains." },
  { t: 'Le coût complet', d: "L'abonnement n'est qu'une ligne du budget. Ajoutez le temps de configuration, d'apprentissage et de tri : un outil gratuit mal réglé se paie en attention." },
]

const PIEGES = [
  { Icon: Coins, t: 'Le surdimensionnement', d: "Signer pour une plateforme d'entreprise quand un lecteur de flux suffirait. Le travers inverse existe aussi : tenir à la main, faute d'outil, une veille qui en méritait un." },
  { Icon: ShieldAlert, t: 'Le « slop » automatisé', d: "Le « slop » désigne les textes creux que des IA produisent en masse. Plus un outil ramasse large, plus il en remonte ; sans filtre, l'automatisation fabrique surtout du bruit, plus vite." },
  { Icon: Lock, t: 'La confidentialité des données', d: "Coller une information sensible dans un assistant grand public revient à la confier à un tiers, et certaines offres individuelles s'en servent pour entraîner leurs modèles tant que l'option reste active. Pour une veille interne, vérifiez l'hébergement, la durée de conservation et ce réglage." },
  { Icon: Clock, t: "L'assistant en fin de vie", d: "Une veille bâtie sur un GPT personnalisé ou sur un Gem vit ses derniers mois. Les GPTs disparaissent le 11 décembre 2026 ; Google remplace les Gems par des compétences, et les comptes professionnels ne pourront plus s'en servir à partir du 1er mars 2027 au plus tôt." },
]

const FAQ = [
  { q: "Existe-t-il un meilleur outil de veille IA ?", a: "Aucun outil ne l'emporte sur tous les usages. Pour une veille personnelle, Google Alertes et un assistant comme Perplexity suffisent souvent. Une équipe qui veut recevoir sa veille sans y penser se tournera vers un flux Make ou n8n. Une grande organisation qui suit sa réputation sur plusieurs marchés regardera les plateformes professionnelles, et un besoin très particulier justifie un système sur mesure. Partez de la décision que la veille doit éclairer ; la liste des fonctionnalités vient après." },
  { q: "Logiciel de veille ou agrégateur : quelle différence ?", a: "Un agrégateur (Feedly, Inoreader) rassemble des flux et vous laisse faire le tri. Un logiciel ou une plateforme de veille (Digimind, Meltwater) ajoute l'analyse, les tableaux de bord, le suivi de réputation et un accompagnement, pour un budget d'un autre ordre. Le premier sert une personne ; la seconde, une organisation qui a structuré sa veille." },
  { q: "Une veille IA sans budget, est-ce possible ?", a: "Pour commencer seul, oui : un lecteur de flux dans sa version gratuite, Google Alertes et un assistant IA sans abonnement couvrent un besoin individuel. Le volume finit par poser problème. Sans dédoublonnage ni filtre, le fil déborde en quelques semaines, et une veille partagée par une équipe réclame alors un abonnement ou un système conçu pour elle." },
  { q: "Perplexity ou Gemini Notebook pour la veille ?", a: "Perplexity interroge le web au moment de la question : il convient pour vérifier une actualité ou faire le tour d'un sujet récent. Gemini Notebook travaille sur les documents que vous lui confiez, jusqu'à 300 sources par carnet sur Business Standard au 7 octobre 2026, et répond en citant ces sources. Aucun des deux ne collecte en continu sans aide : placez-les derrière un agrégateur ou un flux automatisé." },
  { q: "Make, n8n ou Zapier : faut-il un outil d'automatisation ?", a: "Oui, dès que la veille devient régulière et doit arriver seule, par exemple un résumé chaque matin dans un canal d'équipe ou dans une boîte mail. Ces outils enchaînent collecte, filtre, résumé et envoi sans programmer ; n8n peut en plus s'installer sur vos propres serveurs. Prévoyez du temps de réglage, et contrôlez la qualité du filtre avant de laisser tourner le flux." },
  { q: "Une plateforme de veille professionnelle vaut-elle son prix ?", a: "Pour une grande organisation qui suit sa réputation, ses concurrents et ses marchés à grande échelle, souvent : l'historique, les tableaux de bord et l'accompagnement ont une valeur. Pour une PME ou un besoin ciblé, le contrat dépasse généralement l'usage, et un flux automatisé ou un système léger fait le travail pour moins cher." },
  { q: "Quand construire un système de veille sur mesure ?", a: "Quand aucun produit ne couvre exactement vos sources, vos filtres et votre format, ou quand vous voulez maîtriser tout ce qui entre et tout ce qui sort. Le système demande un développement au départ, puis coûte peu à faire tourner. Masteria a fait ce choix pour sa propre veille IA, publiée chaque jour ouvré, et en conçoit pour des clients ; le prix, forfaitaire, se décide une fois le cadrage fait." },
  { q: "GPTs et Gems de veille : que faire avant leur retrait ?", a: "OpenAI retire les GPTs personnalisés le 11 décembre 2026 pour toutes les offres. Un GPT migré devient un plugin : ses instructions deviennent une compétence, mais ses actions personnalisées ne suivent pas. Google, de son côté, a commencé le 5 octobre 2026 à installer dans Workspace les compétences qui succèdent aux Gems ; un compte professionnel gardera ses Gems jusqu'au 1er mars 2027 au moins. Une veille bâtie sur l'un de ces assistants se reconstruit donc dès maintenant." },
  { q: "Comment protéger ses données avec un outil de veille IA ?", a: "N'entrez pas d'information confidentielle dans un assistant grand public. Pour une veille interne, choisissez une offre professionnelle dont l'hébergement et la durée de conservation sont écrits, et vérifiez que vos échanges ne nourrissent pas l'entraînement des modèles. Sur ChatGPT Business, Claude Team ou Gemini dans Google Workspace, cet entraînement est exclu par défaut ; sur les offres individuelles, il faut souvent le désactiver soi-même." },
]

const RESSOURCES = [
  { tag: 'Méthode', titre: 'Automatiser sa veille IA', desc: "Les approches possibles, de la plus légère à la plus outillée, et une méthode en cinq étapes pour monter la vôtre.", href: '/automatiser-sa-veille-ia', cta: 'Lire le guide' },
  { tag: 'Usage', titre: "Veille concurrentielle par l'IA", desc: "Six signaux à suivre chez vos concurrents, une méthode en cinq temps et la limite légale à respecter.", href: '/veille-concurrentielle-ia', cta: 'Ouvrir la page' },
  { tag: 'En accès libre', titre: 'La Veille IA de Masteria', desc: "Une douzaine d'actualités de l'IA chaque jour ouvré, chacune reliée à sa source, suivies d'une analyse signée.", href: '/veille-ia', cta: "Lire l'édition du jour" },
]

export default function OutilsVeilleIAPage() {
  const metaTitle = "Outils de veille IA : le comparatif pour choisir | Masteria"
  const metaDescription = "Outils de veille IA : cinq familles comparées (agrégateurs, assistants, flux automatisés, plateformes, sur-mesure), avec forces, limites et faits datés."

  const jsonLd = [
    {
      '@context': 'https://schema.org', '@type': 'Article',
      '@id': `${SITE}/${SLUG}#article`,
      headline: "Outils de veille IA : le comparatif pour choisir",
      description: metaDescription,
      author: { '@id': `${SITE}/#mathias-nizan` },
      editor: { '@id': `${SITE}/#mathias-nizan` },
      publisher: { '@id': `${SITE}/#organization` },
      datePublished: PUBLISHED, dateModified: MODIFIED,
      inLanguage: 'fr-FR', isAccessibleForFree: true,
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}/${SLUG}` },
      about: ['Outils de veille', 'Logiciel de veille', 'Veille IA', 'Plateforme de veille'],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.veille-lede'] },
    },
    {
      '@context': 'https://schema.org', '@type': 'ItemList',
      '@id': `${SITE}/${SLUG}#familles`,
      name: 'Familles d\'outils de veille IA',
      numberOfItems: FAMILLES.length,
      itemListElement: FAMILLES.map((f, i) => ({
        '@type': 'ListItem', position: i + 1, name: f.nom, description: f.role,
      })),
    },
  ]

  return (
    <>
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        slug={SLUG}
        keywords="outils de veille ia, outil de veille, logiciel de veille, plateforme de veille, outils veille, veille ia, feedly, perplexity, make n8n veille"
        breadcrumbs={[{ name: 'Accueil', slug: '' }, { name: 'Outils de veille IA', slug: SLUG }]}
        faqItems={FAQ}
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        extraJsonLd={jsonLd}
      />

      {/* ── HERO SOMBRE ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(52px, 7vw, 84px) 24px clamp(56px, 8vw, 88px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#94A3B8', display: 'flex', gap: 8, marginBottom: 30, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#94A3B8' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span aria-current="page" style={{ color: '#93C5FD', fontWeight: 600 }}>Outils de veille IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 24 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Wrench size={17} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>Comparatif</span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 52px)', fontWeight: 900, lineHeight: 1.06, margin: 0, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 900 }}>
            Outils de veille IA<br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>lequel choisir, pour quel usage</span>
          </h1>

          <p className="veille-lede" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.6, margin: '26px 0 30px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Un outil de veille se choisit pour un usage précis. Cette comparaison range le marché en cinq
            familles, dit ce que chacune fait bien et ce qu&apos;elle laisse de côté, avec des faits relevés le
            7 octobre 2026, puis aide à choisir sans payer pour des fonctions inutiles.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#familles" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Voir le comparatif <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </a>
            <Link to="/automatiser-sa-veille-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.06)', color: '#F8FAFC', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700, border: '1px solid rgba(255,255,255,0.14)' }}>
              La méthode complète
            </Link>
          </div>

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

      {/* ── DÉFINITION ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={kicker}>Avant de comparer</div>
          <h2 style={h2Style}>À quoi sert un outil de veille IA</h2>
          <p style={pStyle}>
            Un outil de veille IA prend en charge tout ou partie d&apos;une chaîne en quatre maillons :
            collecter les publications, écarter les doublons et le bruit, résumer, livrer le résultat à ceux
            qui en ont besoin. Aucun produit n&apos;excelle sur les quatre maillons réunis, si bien qu&apos;une
            comparaison ne vaut que rapportée à un usage.
          </p>
          <p style={pStyle}>
            Les cinq familles présentées plus bas diffèrent par le maillon où elles brillent et par le public
            qu&apos;elles visent. Votre choix se fait au croisement de trois données : l&apos;usage, le temps dont
            vous disposez et le budget.
          </p>
        </div>
      </section>

      {/* ── LES 5 FAMILLES ── */}
      <section id="familles" style={{ padding: sectionPad, background: '#F9FAFB', borderTop: '1px solid #E5E7EB', scrollMarginTop: 90 }}>
        <div style={wrap}>
          <div style={kicker}>Le comparatif</div>
          <h2 style={h2Style}>Les cinq familles d&apos;outils de veille</h2>
          <p style={{ ...pStyle, marginBottom: 36 }}>
            Les familles vont de la plus légère à la plus lourde. Chacune a sa place ; l&apos;erreur consiste à
            prendre la plus grosse par réflexe, ou la plus petite par économie mal calculée.
          </p>
          <div style={{ display: 'grid', gap: 18 }}>
            {FAMILLES.map(({ Icon, nom, exemples, role, pour, prix, limite, fait }, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, padding: 26, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16, flexWrap: 'wrap' }}>
                  <span style={{ flexShrink: 0, width: 46, height: 46, borderRadius: 12, background: '#DBEAFE', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: c }}>
                    <Icon size={22} strokeWidth={2.1} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 20, fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }}>{nom}</h3>
                    <div style={{ fontSize: 13.5, color: '#6B7280', marginTop: 2 }}>{exemples}</div>
                  </div>
                  <span style={{ marginLeft: 'auto', fontSize: 12.5, fontWeight: 700, color: c, background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 999, padding: '5px 12px', whiteSpace: 'nowrap' }}>{prix}</span>
                </div>
                <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.6, margin: '0 0 14px' }}>{role}</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
                  <div style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                    <Check size={16} style={{ color: '#16A34A', flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                    <span style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.5 }}><strong style={{ color: '#0A0A0A' }}>Pour qui : </strong>{pour}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                    <AlertTriangle size={16} style={{ color: '#D97706', flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                    <span style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.5 }}><strong style={{ color: '#0A0A0A' }}>La limite : </strong>{limite}</span>
                  </div>
                </div>
                {fait && (
                  <div style={{ display: 'flex', gap: 9, alignItems: 'flex-start', marginTop: 14, padding: '12px 14px', background: '#F9FAFB', borderRadius: 10 }}>
                    <CalendarCheck size={16} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                    <span style={{ fontSize: 13.5, color: '#4B5563', lineHeight: 1.55 }}><strong style={{ color: '#0A0A0A' }}>Au 7 octobre 2026 : </strong>{fait}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMENT CHOISIR ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={kicker}>La bonne décision</div>
          <h2 style={h2Style}>Comment choisir votre outil de veille IA</h2>
          <p style={{ ...pStyle, marginBottom: 36 }}>
            Quatre critères tranchent la plupart des choix. Passez-les dans l&apos;ordre : l&apos;usage d&apos;abord,
            le prix en dernier.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
            {CRITERES.map((cr, i) => (
              <div key={i} style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 14px 14px 0', padding: '20px 22px' }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: c, marginBottom: 8 }}>{`0${i + 1}`}</div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>{cr.t}</h3>
                <p style={{ fontSize: 14.5, color: '#4B5563', lineHeight: 1.6, margin: 0 }}>{cr.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LES PIÈGES ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
        <div style={wrap}>
          <div style={kicker}>À éviter</div>
          <h2 style={h2Style}>Quatre pièges au moment de choisir</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
            {PIEGES.map(({ Icon, t, d }, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, padding: 24 }}>
                <Icon size={22} style={{ color: c, marginBottom: 14 }} aria-hidden="true" />
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>{t}</h3>
                <p style={{ fontSize: 14.5, color: '#4B5563', lineHeight: 1.6, margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VITRINE ── */}
      <section style={{ padding: sectionPad, background: '#0A0F1E', color: '#F8FAFC' }}>
        <div style={{ ...wrap, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40, alignItems: 'center' }}>
          <div>
            <div style={{ ...kicker, color: '#7DA9F0' }}>Un exemple concret</div>
            <h2 style={{ ...h2Style, color: '#F8FAFC' }}>À quoi ressemble une veille faite sur mesure</h2>
            <p style={{ fontSize: 17, color: '#CBD5E1', lineHeight: 1.7, margin: '0 0 24px', maxWidth: 560 }}>
              Pour suivre l&apos;actualité de l&apos;IA, Masteria a préféré construire son propre système plutôt
              qu&apos;empiler des abonnements. Chaque jour ouvré, il dépouille 38 flux, retient une douzaine
              d&apos;actualités reliées à leur source, puis la rédaction ajoute une analyse signée. L&apos;édition du
              jour est en accès libre et montre ce que permet un outil conçu sur mesure.
            </p>
            <Link to="/veille-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '13px 24px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Lire notre veille <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 18, padding: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <Newspaper size={20} style={{ color: '#60A5FA' }} aria-hidden="true" />
              <span style={{ fontWeight: 700, fontSize: 15 }}>Système sur mesure</span>
            </div>
            {['Vos sources, choisies une par une', 'Des filtres réglés sur vos sujets', 'Le format et le rythme que vous fixez', 'Un système qui vous appartient'].map((t, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 12 }}>
                <Check size={17} style={{ color: '#60A5FA', flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                <span style={{ fontSize: 14.5, color: '#CBD5E1', lineHeight: 1.5 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNATURE (remplace le bloc fondateur commun) ── */}
      <section style={{ padding: 'clamp(36px, 5vw, 56px) 24px', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', borderLeft: `3px solid ${c}`, paddingLeft: 22 }}>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
            Mathias Nizan, fondateur de Masteria, a écrit ce comparatif en s&apos;appuyant sur la veille que le
            cabinet produit chaque jour ouvré et sur les outils qu&apos;il installe chez ses clients. Les faits
            datés ont été relevés le 7 octobre 2026 ; son itinéraire professionnel est retracé sur{' '}
            <Link to="/mathias-nizan" style={{ color: c, fontWeight: 600 }}>sa page</Link>.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ ...kicker, textAlign: 'center' }}>Vos questions</div>
          <h2 style={{ ...h2Style, textAlign: 'center', marginBottom: 36 }}>Choisir un outil de veille IA : les réponses courtes</h2>
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

      {/* ── RESSOURCES ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={kicker}>Pour aller plus loin</div>
          <h2 style={{ ...h2Style, marginBottom: 32 }}>Trois pages pour compléter ce comparatif</h2>
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
          <Boxes size={30} style={{ color: '#60A5FA', marginBottom: 18 }} aria-hidden="true" />
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 'clamp(26px, 4vw, 38px)', marginBottom: 16, lineHeight: 1.2 }}>
            Aucun outil ne colle à votre besoin ? Masteria le construit.
          </h2>
          <p style={{ fontSize: 17, color: '#D1D5DB', marginBottom: 30, lineHeight: 1.6 }}>
            Quand le marché ne répond pas, un système conçu pour vous prend le relais : vos sources, vos
            filtres, votre format de livraison. Le système est chiffré au forfait, sur devis, et le premier
            cadrage de 30 minutes vous est offert.
          </p>
          <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#fff', color: '#0A0A0A', padding: '16px 32px', borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
            Réserver 30 minutes de cadrage <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}

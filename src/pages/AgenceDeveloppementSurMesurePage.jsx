import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, Blocks, CheckCircle2, ClipboardList, Code2, FileSignature, GitBranch, Layers, Rocket, Scale, ShieldCheck, Wrench, XCircle } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { useIsDesktop } from '../hooks/useMediaQuery'
import { Paras, Rangees, Reperes } from '../components/Aere'

/*
 * Page « Agence de développement sur mesure » (créée le 23/10/2026).
 * Cluster développement (docs/strategie-cluster-developpement-web.md), spoke de
 * /agence-developpement-web. Requêtes : agence de développement sur mesure,
 * agence developpement sur mesure, entreprise de développement logiciel,
 * entreprise de développement, développement logiciel sur mesure, application
 * métier sur mesure.
 * Angle : faire développer un logiciel qui épouse vos processus plutôt que
 * plier vos processus à un progiciel. Thèse : le sur mesure se justifie quand
 * le processus vous différencie ou quand plusieurs outils doivent se parler ;
 * sinon un SaaS paramétré suffit.
 * Anti-cannibalisation : la version « outil IA » vit sur /outils-ia-sur-mesure ;
 * ici le logiciel métier en général, l'IA en option.
 * Droit vérifié sur Légifrance le 23/10/2026 : CPI art. L113-9 (logiciel créé
 * par un salarié) et L131-3 (cession écrite, droit par droit). RGPD art. 28
 * (CNIL). Data Act applicable depuis le 12/09/2025 (Commission européenne).
 * Accent bleu #2563EB.
 */

const SITE = 'https://www.master-ia.fr'
const SLUG = 'agence-developpement-sur-mesure'
const FULL_URL = `${SITE}/${SLUG}`
const c = '#2563EB'
const cLight = '#DBEAFE'
const DATE_PUBLISHED = '2026-10-23'
const DATE_MODIFIED = '2026-10-23'
const RDV_URL = '/contact?type=projet&rdv=30'

const URL_L113_9 = 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278890'
const URL_L131_3 = 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958'
const URL_RGPD_28 = 'https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4#Article28'
const URL_DATA_ACT = 'https://digital-strategy.ec.europa.eu/fr/policies/data-act'

const META_TITLE = 'Agence de développement sur mesure, logiciel métier | Masteria'
const META_DESC = "Agence de développement sur mesure : un logiciel métier qui suit vos processus. Comparatif SaaS, ERP, no-code, coût total et propriété du code."
const KEYWORDS = 'agence de développement sur mesure, agence developpement sur mesure, entreprise de développement logiciel, entreprise de développement, développement logiciel sur mesure, application métier sur mesure, logiciel métier sur mesure, logiciel sur mesure ou saas, cession droits code source, coût total de possession logiciel'

/* ── Design system local (aligné sur les pages money) ── */
const SECTION_PAD = 'clamp(64px, 9vw, 110px) 24px'
const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.01em', lineHeight: 1.2, margin: '0 0 18px' }
const leadStyle = { fontSize: 'clamp(16.5px, 2vw, 18px)', color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }
const mutedStyle = { fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 40px', maxWidth: 740 }
const calloutStyle = { background: '#fff', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.75, color: '#0A0A0A', margin: '0 0 14px', maxWidth: 880 }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 28 }
const iconBoxStyle = { width: 44, height: 44, background: cLight, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }
const tableWrapStyle = { overflowX: 'auto', background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const thStyle = { background: '#F9FAFB', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #E5E7EB', whiteSpace: 'nowrap' }
const srOnlyStyle = { position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' }

const EN_BREF = [
  ['Ce que l\'on fait développer', "Un logiciel ou une application métier écrit pour votre façon de travailler : gestion des dossiers, devis, planification, suivi qualité, portail client, connecteurs entre vos outils."],
  ['Quand le choisir', "Quand votre processus vous distingue de vos concurrents, ou quand plusieurs logiciels doivent échanger des données sans ressaisie. Pour un besoin standard, un SaaS bien paramétré coûte moins cher."],
  ['Ce qu\'il coûte au total', "Le développement initial, puis chaque année la maintenance, l'hébergement et les évolutions. Le calcul se fait sur trois à cinq ans d'usage, face aux abonnements par utilisateur."],
  ['La propriété du code', "Un prestataire reste titulaire des droits sur le code tant qu'aucune cession écrite ne les transfère, droit par droit (article L131-3 du code de la propriété intellectuelle)."],
  ['L\'IA', "En option, branchée là où elle sert : lecture de documents, rédaction de réponses, classement. Le logiciel reste utile sans elle."],
  ['Chez Masteria', "Forfait fixé après cadrage ou développeurs détachés en régie. Un prototype démarre autour de 8 000 € HT. Code et documentation remis."],
]

/* Tableau à insight : quatre façons d'équiper un processus, six critères */
const OPTIONS = ['Sur mesure', 'SaaS du marché', 'Progiciel paramétré (ERP type Odoo)', 'No-code ou low-code']
const COMPARATIF = [
  {
    critere: 'Coût initial',
    vals: [
      "Le plus élevé : conception, développement, tests et reprise des données existantes.",
      "Faible : un abonnement, quelques réglages, parfois une courte prestation de démarrage.",
      "Moyen à élevé : licences, paramétrage par un intégrateur, reprise des données, éventuels modules spécifiques.",
      "Faible à moyen : quelques semaines de construction par une personne formée à la plateforme.",
    ],
  },
  {
    critere: 'Coût dans la durée',
    vals: [
      "Maintenance, hébergement et évolutions. Aucune redevance par utilisateur : ajouter dix personnes ne change presque rien.",
      "Abonnement par utilisateur qui grossit avec l'équipe et suit les hausses de tarif décidées par l'éditeur.",
      "Abonnement ou maintenance de l'éditeur, plus la remise à niveau des développements spécifiques à chaque nouvelle version.",
      "Abonnement à la plateforme, souvent calculé sur le nombre d'utilisateurs ou d'exécutions.",
    ],
  },
  {
    critere: 'Adaptation au processus',
    vals: [
      "Complète : chaque écran, chaque règle de calcul et chaque validation suivent votre façon de travailler.",
      "Vous adoptez le processus prévu par l'éditeur, dans la limite des réglages proposés.",
      "Large à l'intérieur des modules ; chaque écart au standard devient un développement spécifique à maintenir.",
      "Bonne sur un flux simple ; la construction se complique dès que les règles métier se multiplient.",
    ],
  },
  {
    critere: 'Propriété du code et des données',
    vals: [
      "Le code et les données vous appartiennent, à condition que la cession des droits soit écrite au contrat.",
      "Vous louez un droit d'usage. Les données sortent dans les formats d'export que l'éditeur a prévus.",
      "Odoo Community est sous licence libre, l'édition Enterprise sous licence propriétaire. Les données restent chez vous si vous hébergez la base.",
      "La logique de l'application reste enfermée dans la plateforme ; seules les données s'exportent.",
    ],
  },
  {
    critere: 'Dépendance à un éditeur',
    vals: [
      "Faible si le code est documenté et écrit avec une technologie courante : un autre développeur peut le reprendre.",
      "Forte : le prix, la feuille de route et la durée de vie du produit se décident chez l'éditeur.",
      "Moyenne : plusieurs intégrateurs peuvent intervenir, mais les versions et leur calendrier viennent de l'éditeur.",
      "Forte : l'application ne fonctionne que sur la plateforme qui l'héberge.",
    ],
  },
  {
    critere: "Capacité à intégrer l'IA",
    vals: [
      "Libre : vous choisissez le modèle, l'endroit où il tourne et les données qu'il a le droit de lire.",
      "Celle que l'éditeur ajoute, à son rythme, souvent dans une offre plus chère.",
      "Fonctions d'IA de l'éditeur, ou développement spécifique branché sur l'ERP par son API.",
      "Blocs d'IA prêts à l'emploi, commodes pour un prototype, limités dès que l'usage devient exigeant.",
    ],
  },
]

/* Grille de décision */
const JUSTIFIE = [
  "Votre façon de traiter un dossier, de chiffrer ou de planifier fait partie de ce que vos clients achètent, et aucun logiciel du marché ne la reproduit sans détour.",
  "Trois ou quatre outils (CRM, ERP, messagerie, tableur partagé) contiennent chacun une partie de l'information, et vos équipes recopient de l'un à l'autre.",
  "Le nombre d'utilisateurs va grandir, et l'abonnement par personne finirait par coûter plus cher qu'un logiciel à vous.",
  "Vos données sont sensibles et doivent rester sur un hébergement que vous choisissez.",
  "Vous voulez ajouter de l'IA à un processus précis, avec un modèle et des règles que vous maîtrisez.",
]
const PAS_JUSTIFIE = [
  "Le besoin est standard : comptabilité, paie, messagerie, gestion des congés. Des éditeurs y consacrent des équipes entières, et leurs produits suivent la réglementation.",
  "Le processus n'est pas encore stabilisé. Mieux vaut le roder quelques mois sur un tableur ou un outil no-code, puis coder ce qui a tenu.",
  "Personne chez vous ne pourra suivre le projet quelques heures par semaine : décrire les règles, tester, trancher.",
  "Le budget couvre le développement mais aucune ligne de maintenance n'est prévue pour les années suivantes.",
  "Un SaaS couvre déjà l'essentiel de votre besoin, et ce qui manque se règle avec un connecteur ou une automatisation.",
]

/* Coût total de possession : les postes qui suivent la livraison */
const POSTES_TCO = [
  { icon: Code2, titre: 'Le développement initial', texte: "Cadrage, conception des écrans, code, tests, reprise des données existantes et formation des utilisateurs. C'est le seul poste que la plupart des devis affichent." },
  { icon: Wrench, titre: 'La maintenance corrective et technique', texte: "Corriger les anomalies remontées par les utilisateurs, appliquer les mises à jour de sécurité des bibliothèques, suivre les nouvelles versions du langage et du framework." },
  { icon: Layers, titre: "L'hébergement et l'exploitation", texte: "Serveurs ou plateforme cloud, base de données, sauvegardes, supervision, nom de domaine, certificats. Le montant dépend du nombre d'utilisateurs et du volume de données." },
  { icon: GitBranch, titre: 'Les évolutions', texte: "Un logiciel métier qui sert finit par recevoir des demandes : un nouvel écran, une règle qui change, un outil de plus à connecter. Prévoyez un budget annuel pour les traiter." },
]

/* Déroulé d'un projet */
const ETAPES = [
  { icon: ClipboardList, title: 'Décrire le processus tel qu\'il se pratique', body: "Avec les personnes qui font le travail, nous suivons un dossier du début à la fin : qui saisit quoi, dans quel outil, qui valide, où l'information se perd. Ce relevé sert de base au périmètre et au chiffrage." },
  { icon: Blocks, title: 'Arbitrer entre développer, acheter et connecter', body: "Pour chaque partie du processus, nous indiquons ce qu'un logiciel existant fait déjà bien et ce qui mérite d'être écrit. Vous recevez un périmètre, une architecture et un prix au forfait." },
  { icon: Rocket, title: 'Livrer par versions utilisables', body: "Une première version couvre le cœur du processus et part chez quelques utilisateurs. Les suivantes ajoutent les écrans, les connecteurs et les automatisations, avec un point chaque semaine." },
  { icon: ShieldCheck, title: 'Tester, documenter, remettre', body: "Tests automatisés sur les règles de calcul, documentation technique et guide utilisateur, dépôt de code transféré sur votre compte, accès d'hébergement à votre nom." },
  { icon: Wrench, title: 'Maintenir et faire évoluer', body: "Un contrat de maintenance fixe ce qui est corrigé, sous quel délai et à quel prix, et comment les évolutions sont chiffrées. Vous pouvez aussi confier la suite à votre propre équipe." },
]

const FAQ = [
  {
    q: "Qu'est-ce qu'une agence de développement sur mesure ?",
    a: "Une agence de développement sur mesure conçoit et code un logiciel pour un client donné, à partir de son processus, plutôt que de vendre un produit identique pour tous. Elle cadre le besoin, dessine les écrans, écrit le code, le teste, le met en service et en assure la maintenance. À la fin, le client possède son logiciel, à condition que le contrat lui cède les droits sur le code.",
  },
  {
    q: "Entreprise de développement logiciel ou éditeur : qui fait quoi ?",
    a: "Un éditeur développe un produit et le vend à de nombreux clients sous forme de licence ou d'abonnement ; il garde la propriété du code et décide de son évolution. Une entreprise de développement logiciel travaille à la commande : elle écrit un logiciel pour un client précis, qui en devient propriétaire par contrat. Certaines entreprises font les deux ; demandez dans quel cadre s'inscrit votre projet.",
  },
  {
    q: 'Développement logiciel sur mesure ou SaaS : comment trancher ?',
    a: "Posez deux questions. Votre processus fait-il partie de ce qui vous distingue de vos concurrents ? Vos équipes recopient-elles des données entre plusieurs outils ? Si les deux réponses sont négatives, un SaaS paramétré coûtera moins cher et vous libérera de la maintenance. Si l'une est positive, comparez le coût total sur trois à cinq ans, abonnements par utilisateur compris.",
  },
  {
    q: 'Combien coûte une application métier sur mesure ?',
    a: "Chez Masteria, un prototype démarre autour de 8 000 € HT. Une application métier en production, avec plusieurs profils d'utilisateurs et des connecteurs vers vos logiciels, se chiffre en dizaines de milliers d'euros. Un système qui remplace plusieurs outils pour une grande équipe dépasse 100 000 € et peut atteindre plusieurs centaines de milliers. Le prix exact se fixe au forfait après le cadrage.",
  },
  {
    q: 'Que faut-il prévoir comme budget après la livraison ?',
    a: "Trois postes reviennent chaque année : la maintenance (corrections et mises à jour de sécurité), l'hébergement et les évolutions demandées par les utilisateurs. Leur montant dépend de la taille du logiciel, du nombre d'utilisateurs et du rythme des changements. Demandez à votre prestataire de les chiffrer dès le devis initial, pour comparer avec les abonnements d'un logiciel du marché.",
  },
  {
    q: "À qui appartient le code d'un logiciel développé par un prestataire ?",
    a: "Au prestataire, tant qu'un contrat écrit ne vous cède pas ses droits patrimoniaux. Le code de la propriété intellectuelle attribue à l'employeur les logiciels créés par ses salariés (article L113-9), mais cette règle ne joue pas pour un prestataire extérieur. L'article L131-3 impose que chaque droit cédé soit mentionné et que la cession précise son étendue, sa destination, son territoire et sa durée.",
  },
  {
    q: "Peut-on garder Odoo et faire développer autour ?",
    a: "Oui, et c'est souvent la voie la plus économique. L'ERP garde la comptabilité, les stocks et la facturation, et une application sur mesure couvre la partie propre à votre métier : portail client, calcul de devis, planification. Les deux échangent leurs données par l'API d'Odoo. Cette architecture évite de surcharger l'ERP de modules spécifiques qu'il faudrait remettre à niveau à chaque version.",
  },
  {
    q: 'Le no-code peut-il remplacer un développement sur mesure ?',
    a: "Pour un premier outil, un formulaire, une base partagée ou une automatisation simple, souvent. Il permet de tester un processus vite et à moindre coût. Ses limites apparaissent quand les règles métier se multiplient, quand le volume de données grossit ou quand l'outil doit sortir de la plateforme. Beaucoup de logiciels sur mesure commencent par un prototype no-code qui a fait ses preuves.",
  },
  {
    q: 'Combien de temps faut-il pour développer un logiciel métier ?',
    a: "Le délai se fixe au cadrage, selon le nombre d'écrans, de règles et de connecteurs. Un prototype se compte en semaines, un logiciel complet en mois. Livrer par versions permet à vos équipes d'utiliser le cœur du logiciel bien avant la fin du projet, et de corriger le tir sur ce qu'elles constatent.",
  },
  {
    q: "Peut-on ajouter de l'IA à un logiciel sur mesure plus tard ?",
    a: "Oui, et c'est l'un des intérêts du sur mesure : vous choisissez le modèle, l'endroit où il tourne et les données qu'il peut lire. Une fonction qui lit un document reçu, propose une réponse ou classe une demande se branche sur un logiciel existant. Si l'IA est le cœur du besoin, notre page sur les outils IA sur mesure détaille cette démarche.",
  },
  {
    q: 'Le développement sur mesure est-il finançable par l\'OPCO ?',
    a: "Non. Les OPCO financent la formation des salariés ; le développement d'un logiciel sort de leur champ. La formation de vos équipes à l'outil livré, ou à l'IA plus largement, peut en revanche être prise en charge selon les règles de votre branche : Masteria est certifié Qualiopi et la journée de formation démarre à 1 980 € HT.",
  },
  {
    q: 'Que se passe-t-il si nous voulons changer de prestataire ?',
    a: "Si la cession des droits est écrite, que le code est dans un dépôt à votre nom et que la documentation est à jour, un autre développeur peut reprendre le logiciel. Vérifiez ces trois points avant de signer. Côté données personnelles, l'article 28 du RGPD impose au prestataire de vous les rendre ou de les supprimer à la fin du contrat, selon votre choix.",
  },
]

const SOURCES = [
  { name: 'Code de la propriété intellectuelle, article L113-9 (Légifrance)', note: "les droits sur un logiciel créé par des salariés dans l'exercice de leurs fonctions reviennent à l'employeur.", url: URL_L113_9 },
  { name: 'Code de la propriété intellectuelle, article L131-3 (Légifrance)', note: 'chaque droit cédé doit faire l\'objet d\'une mention distincte, avec son étendue, sa destination, son lieu et sa durée.', url: URL_L131_3 },
  { name: "RGPD, article 28 sur le site de la CNIL", note: 'le contrat écrit entre le client et le prestataire qui traite des données personnelles pour son compte, et le sort des données en fin de contrat.', url: URL_RGPD_28 },
  { name: 'Commission européenne, le règlement sur les données (Data Act)', note: 'applicable depuis le 12 septembre 2025, il encadre le changement de fournisseur de services cloud.', url: URL_DATA_ACT },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${FULL_URL}#service`,
  name: 'Développement de logiciels et d\'applications métier sur mesure',
  serviceType: 'Développement logiciel sur mesure',
  provider: { '@id': `${SITE}/#organization` },
  areaServed: ['France', 'Europe', 'États-Unis', 'Inde'],
  description: "Logiciels et applications métier conçus pour le processus du client, connectés à ses outils (CRM, ERP, messagerie) et prêts à accueillir l'IA. Forfait fixé après cadrage ou développeurs détachés en régie. Code, documentation et droits patrimoniaux remis au client.",
  url: FULL_URL,
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: '8000',
    description: 'Prototype à partir d\'environ 8 000 € HT ; logiciel en production chiffré au forfait après cadrage.',
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${FULL_URL}#article`,
  headline: 'Agence de développement sur mesure : des logiciels métier qui suivent vos processus',
  description: META_DESC,
  author: { '@id': `${SITE}/#mathias-nizan` },
  editor: { '@id': `${SITE}/#mathias-nizan` },
  publisher: { '@id': `${SITE}/#organization` },
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': `${FULL_URL}#webpage` },
  about: ['Développement logiciel sur mesure', 'Application métier', 'Coût total de possession', 'Propriété intellectuelle du logiciel'],
  mentions: ['SaaS', 'ERP', 'Odoo', 'No-code', 'Low-code', 'Code de la propriété intellectuelle', 'RGPD', 'Data Act'],
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '#definition', 'h2'] },
  citation: SOURCES.map(s => s.url),
}

/* Liste verticale pleine largeur (plus de cartes de texte côte à côte) : picto, sur-titre, titre, texte, pied */
function Lignes({ items, sombre = false, as: Liste = 'ol' }) {
  const t = sombre
    ? { bord: '#1E293B', titre: '#F8FAFC', texte: '#CBD5E1', pastille: 'rgba(37,99,235,0.16)', picto: '#60A5FA' }
    : { bord: '#E5E7EB', titre: '#0A0A0A', texte: '#4B5563', pastille: '#EFF4FF', picto: c }
  return (
    <Liste style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: `1px solid ${t.bord}` }}>
      {items.map(({ icon: Icon, kicker, titre, texte, pied }) => (
        <li key={titre} style={{ display: 'flex', gap: 18, alignItems: 'flex-start', padding: '24px 0', borderBottom: `1px solid ${t.bord}` }}>
          <span aria-hidden="true" style={{ flexShrink: 0, width: 34, height: 34, borderRadius: 99, background: t.pastille, color: t.picto, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginTop: -2 }}>
            <Icon size={17} strokeWidth={1.75} />
          </span>
          <div style={{ minWidth: 0, maxWidth: 720 }}>
            {kicker && <span style={{ display: 'block', fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: t.picto, marginBottom: 4 }}>{kicker}</span>}
            <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: t.titre, margin: '0 0 8px', lineHeight: 1.35 }}>{titre}</h3>
            <Paras texte={texte} max={2} budget={320} style={{ fontSize: 15.5, color: t.texte, lineHeight: 1.7, margin: 0 }} />
            {pied}
          </div>
        </li>
      ))}
    </Liste>
  )
}

function FAQItem({ q, a, color }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '20px 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}
        aria-expanded={open}
      >
        <span style={{ fontWeight: 700, fontSize: 16, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif' }}>{q}</span>
        <span aria-hidden="true" style={{ fontSize: 22, color, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      {/* Réponse toujours dans le DOM (prérendu citable), repliée en CSS */}
      <div aria-hidden={!open} style={{ maxHeight: open ? 1400 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <div style={{ padding: '0 0 20px' }}>
          <Paras texte={a} style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: 0 }} />
        </div>
      </div>
    </div>
  )
}

export default function AgenceDeveloppementSurMesurePage() {
  const isDesktop = useIsDesktop()
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop ? { position: 'sticky', top: 130, alignSelf: 'start' } : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Développement web', slug: 'agence-developpement-web' },
    { name: 'Développement sur mesure', slug: SLUG },
  ]

  return (
    <>
      <SEOHead
        title={META_TITLE}
        description={META_DESC}
        slug={SLUG}
        keywords={KEYWORDS}
        breadcrumbs={breadcrumbs}
        faqItems={FAQ}
        datePublished={DATE_PUBLISHED}
        dateModified={DATE_MODIFIED}
        citations={SOURCES.map(s => ({ name: s.name, url: s.url }))}
        author
        extraJsonLd={[serviceJsonLd, articleJsonLd]}
      />

      {/* ── HERO sombre premium ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#94A3B8', display: 'flex', gap: 8, marginBottom: 30, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#94A3B8' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/agence-developpement-web" style={{ color: '#94A3B8' }}>Développement web</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }} aria-current="page">Développement sur mesure</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 22 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Blocks size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Logiciel et application métier
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.7vw, 48px)', fontWeight: 900, lineHeight: 1.06, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.03em', maxWidth: 860 }}>
            Agence de développement sur mesure
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>des logiciels métier qui suivent vos processus</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria, qui pilote nos développeurs · mise à jour le 23 octobre 2026
          </p>

          {/* GEO : réponse directe citable (accroche, puis la phrase suivante en texte courant) */}
          <div id="definition" style={{ margin: '0 0 26px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 12px' }}>
              <strong style={{ color: '#fff', fontWeight: 700 }}>Une agence de développement sur mesure écrit un logiciel pour un seul client, à partir de la façon dont son équipe travaille</strong>, là où un progiciel impose le processus prévu par son éditeur.
            </p>
            <p style={{ fontSize: 16, color: '#CBD5E1', lineHeight: 1.65, margin: 0 }}>
              Le client en devient propriétaire par contrat et en finance ensuite la maintenance, l'hébergement et les évolutions.
            </p>
          </div>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 34px', maxWidth: 680 }}>
            Faire développer coûte plus cher au départ qu'un abonnement. L'investissement se défend dans deux situations précises, que nous détaillons plus bas ; en dehors d'elles, nous vous orientons vers un logiciel du marché, et ce conseil fait partie du cadrage.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 40 }}>
            <Link to={RDV_URL} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Parler de votre logiciel en 30 minutes
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#comparatif" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Comparer sur mesure, SaaS, ERP et no-code
            </a>
          </div>

          <Reperes sombre titre="En bref" items={EN_BREF.map(([label, detail]) => ({ label, detail }))} colonnes={3} style={{ margin: 0, maxWidth: 1000 }} />
        </div>
      </section>

      {/* ── SOMMAIRE ancré ── */}
      <nav aria-label="Sur cette page" style={{ background: '#fff', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 4, overflowX: 'auto', whiteSpace: 'nowrap' }}>
          <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#9CA3AF', paddingRight: 8, flexShrink: 0 }}>Sur cette page</span>
          {[
            ['#these', 'Quand développer'],
            ['#comparatif', 'Comparatif'],
            ['#grille', 'Grille de décision'],
            ['#cout-total', 'Coût total'],
            ['#propriete', 'Propriété du code'],
            ['#deroule', 'Déroulé'],
            ['#prix', 'Prix'],
            ['#faq', 'FAQ'],
          ].map(([href, label]) => (
            <a key={href} href={href} style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 700, color: '#374151', textDecoration: 'none', padding: '13px 12px', flexShrink: 0 }}>{label}</a>
          ))}
        </div>
      </nav>

      {/* ── THÈSE ── */}
      <section id="these" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Notre lecture</div>
          <h2 style={h2Style}>Le sur mesure se justifie dans deux situations, et seulement dans celles-là</h2>
          <p style={{ ...calloutStyle, background: '#F9FAFB' }}>
            <strong>Faites développer quand votre processus fait partie de ce que vos clients achètent, ou quand plusieurs logiciels doivent enfin partager les mêmes données.</strong>{' '}
            Pour tout le reste, un SaaS bien paramétré revient moins cher et vous décharge de la maintenance.
          </p>
          {/* Les deux situations en rangées pleine largeur (plus de cartes côte à côte) */}
          <Rangees style={{ marginTop: 36 }} items={[
            { titre: 'Votre processus vous différencie', texte: "Un bureau d'études qui chiffre un chantier selon sa propre méthode, un distributeur qui calcule ses remises selon l'historique de chaque client, un organisme qui suit un dossier en douze étapes réglementées. Un progiciel les oblige à contourner l'outil par des tableurs annexes. Un logiciel écrit pour eux grave leur savoir-faire dans l'outil, et chaque nouvel arrivant l'applique dès le premier jour." },
            { titre: 'Vos outils ne se parlent pas', texte: "Le client est saisi dans le CRM, puis dans l'ERP, puis dans un tableur de planification, et chaque copie peut diverger. Une couche sur mesure relie ces logiciels par leurs API (les portes d'entrée qu'ils ouvrent aux autres programmes), garde une seule version de chaque information et laisse chaque outil faire ce qu'il fait bien." },
          ]} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: '32px 0 0', maxWidth: 860 }}>
            Masteria applique ce raisonnement à ses propres outils. Notre gestion des formations et des clients tourne sur une plateforme développée en interne avec Next.js et Supabase : elle relie dans un même outil les dossiers, les devis et les exigences qualité de la certification Qualiopi. Pour la messagerie, nous utilisons un logiciel du marché.
          </p>
        </div>
      </section>

      {/* ── COMPARATIF (tableau à insight) ── */}
      <section id="comparatif" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={kickerStyle}>Quatre façons d'équiper un processus</div>
          <h2 style={h2Style}>Sur mesure, SaaS, ERP paramétré ou no-code : où part l'argent, qui garde la main</h2>
          <p style={{ ...calloutStyle }}>
            <strong>Chaque option place la dépense à un moment différent de la vie du logiciel.</strong>{' '}
            Le sur mesure concentre l'effort au départ puis coûte peu à chaque utilisateur ajouté ; le SaaS démarre presque gratuitement et facture chaque personne, chaque année. La ligne « dépendance » pèse souvent plus lourd que la ligne « coût initial » au bout de cinq ans.
          </p>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Les quatre options se combinent : un ERP pour la gestion, un SaaS pour la messagerie, un développement pour la partie qui vous est propre.
          </p>

          <div style={tableWrapStyle}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 1000 }}>
              <caption style={srOnlyStyle}>Logiciel sur mesure, SaaS du marché, progiciel paramétré de type Odoo et no-code comparés sur le coût initial, le coût dans la durée, l'adaptation au processus, la propriété du code et des données, la dépendance à un éditeur et l'intégration de l'IA</caption>
              <thead>
                <tr>
                  <th scope="col" style={thStyle}>Critère</th>
                  {OPTIONS.map((o, i) => (
                    <th key={o} scope="col" style={{ ...thStyle, whiteSpace: 'normal', color: i === 0 ? c : '#374151', background: i === 0 ? 'rgba(37,99,235,0.08)' : '#F9FAFB' }}>{o}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARATIF.map((row, i) => {
                  const td = { padding: '16px 18px', verticalAlign: 'top', fontSize: 13.5, color: '#374151', lineHeight: 1.6, borderTop: i === 0 ? 'none' : '1px solid #E5E7EB', minWidth: 200 }
                  return (
                    <tr key={row.critere}>
                      <th scope="row" style={{ ...td, fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, color: '#0A0A0A', textAlign: 'left', minWidth: 150 }}>{row.critere}</th>
                      {row.vals.map((v, j) => (
                        <td key={j} style={{ ...td, background: j === 0 ? 'rgba(37,99,235,0.05)' : undefined }}>{v}</td>
                      ))}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            <strong>À retenir sur l'IA :</strong> dans un SaaS, vous attendez que l'éditeur ajoute la fonction et vous payez l'option. Dans un logiciel à vous, une fonction qui lit les pièces jointes ou prépare une réponse se branche quand le besoin apparaît.
          </p>
          <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: '12px 0 0', maxWidth: 880 }}>
            Si l'IA constitue le cœur de votre projet, nos{' '}
            <Link to="/outils-ia-sur-mesure" style={{ color: c, fontWeight: 600 }}>outils IA sur mesure</Link> et notre{' '}
            <Link to="/agence-developpement-ia" style={{ color: c, fontWeight: 600 }}>agence de développement IA</Link> traitent ce cas en détail.
          </p>
        </div>
      </section>

      {/* ── GRILLE DE DÉCISION ── */}
      <section id="grille" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Grille de décision</div>
          <h2 style={h2Style}>Faut-il faire développer votre logiciel ? Dix signaux pour trancher</h2>
          <p style={mutedStyle}>
            Cochez honnêtement chaque colonne. Deux signaux à gauche et aucun à droite : le développement mérite un chiffrage. Un seul signal à droite suffit à remettre le projet en question.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: 20 }}>
            <div style={{ ...cardStyle, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                <div style={iconBoxStyle}><CheckCircle2 size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" /></div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 19, fontWeight: 800, color: '#0A0A0A', margin: 0 }}>Le sur mesure se justifie quand</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
                {JUSTIFIE.map(t => (
                  <li key={t} style={{ display: 'flex', gap: 10, fontSize: 14.5, color: '#374151', lineHeight: 1.65 }}>
                    <CheckCircle2 size={17} strokeWidth={2.2} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ ...cardStyle, borderTop: '3px solid #9CA3AF' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                <div style={{ ...iconBoxStyle, background: '#F3F4F6' }}><XCircle size={22} strokeWidth={2} style={{ color: '#6B7280' }} aria-hidden="true" /></div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 19, fontWeight: 800, color: '#0A0A0A', margin: 0 }}>Il ne se justifie pas quand</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
                {PAS_JUSTIFIE.map(t => (
                  <li key={t} style={{ display: 'flex', gap: 10, fontSize: 14.5, color: '#374151', lineHeight: 1.65 }}>
                    <XCircle size={17} strokeWidth={2.2} style={{ color: '#9CA3AF', flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p style={{ fontSize: 14.5, color: '#4B5563', lineHeight: 1.75, margin: '32px 0 0', maxWidth: 820, fontStyle: 'italic' }}>
            « Quand un abonnement à quelques dizaines d'euros par mois fait le travail, nous le disons au premier rendez-vous. Le développement que nous déconseillons nous coûte un projet ; celui que nous livrons sans raison coûterait davantage au client. »{' '}
            <Link to="/mathias-nizan" style={{ color: c, fontWeight: 600, fontStyle: 'normal' }}>Mathias Nizan</Link>, fondateur de Masteria
          </p>
        </div>
      </section>

      {/* ── COÛT TOTAL DE POSSESSION (ancre sombre) ── */}
      <section id="cout-total" style={{ scrollMarginTop: 96, position: 'relative', padding: SECTION_PAD, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Coût total de possession</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC' }}>Le prix d'un logiciel sur mesure se lit sur cinq ans</h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 14px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Le devis de développement ne couvre que la première année.</strong>{' '}
            Le coût total de possession additionne ce développement, la maintenance, l'hébergement et les évolutions sur toute la durée d'usage. C'est ce total qu'il faut opposer à cinq ans d'abonnements multipliés par le nombre d'utilisateurs.
          </p>
          <p style={{ fontSize: 15, color: '#B4C0D3', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Un prestataire sérieux chiffre les quatre postes dès sa proposition. S'il n'en chiffre qu'un, demandez les trois autres avant de comparer.
          </p>

          {/* Un poste par rangée, en pleine largeur */}
          <Rangees sombre items={POSTES_TCO.map(p => ({ titre: p.titre, texte: p.texte, icon: p.icon }))} />

          {/* L'énumération des trois choix passe en liste */}
          <p style={{ fontSize: 14.5, color: '#CBD5E1', lineHeight: 1.75, margin: '32px 0 12px', maxWidth: 880 }}>
            Trois choix font baisser ce total sans rogner sur le logiciel :
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10, maxWidth: 880 }}>
            {[
              'Une technologie répandue, que beaucoup de développeurs savent reprendre',
              'Des tests automatisés sur les règles de calcul, qui rendent chaque mise à jour moins risquée',
              "Une documentation tenue à jour, qui évite de payer un nouveau prestataire pour comprendre l'existant",
            ].map(t => (
              <li key={t} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14.5, color: '#CBD5E1', lineHeight: 1.65 }}>
                <CheckCircle2 size={16} strokeWidth={1.75} style={{ color: '#60A5FA', flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── PROPRIÉTÉ INTELLECTUELLE ── */}
      <section id="propriete" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={iconBoxStyle}><Scale size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" /></div>
                <div style={{ ...kickerStyle, margin: 0 }}>Propriété intellectuelle</div>
              </div>
              <h2 style={{ ...h2Style, marginBottom: 14 }}>Le code vous appartient seulement si le contrat le dit</h2>
              <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Payer le développement ne suffit pas à devenir propriétaire. Le droit français distingue le salarié du prestataire, et la cession au profit d'un client obéit à une forme précise.
              </p>
            </div>
            <div style={{ display: 'grid', gap: 16 }}>
              <div style={cardStyle}>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>Vos salariés : les droits vont à l'employeur</h3>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>
                  L'article <a href={URL_L113_9} target="_blank" rel="noopener noreferrer" style={{ color: c, fontWeight: 600 }}>L113-9 du code de la propriété intellectuelle</a> attribue à l'employeur les droits patrimoniaux (exploiter, modifier, diffuser) sur les logiciels et leur documentation créés par ses salariés dans l'exercice de leurs fonctions, sauf clause contraire.
                </p>
              </div>
              <div style={cardStyle}>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>Un prestataire : il faut une cession écrite</h3>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>
                  Cette règle ne couvre pas une agence ni un freelance. Sans clause, l'auteur du code garde ses droits et vous n'obtenez qu'un droit d'utilisation, parfois discuté. L'article <a href={URL_L131_3} target="_blank" rel="noopener noreferrer" style={{ color: c, fontWeight: 600 }}>L131-3</a> exige que chaque droit cédé fasse l'objet d'une mention distincte et que la cession précise son étendue, sa destination, son lieu et sa durée.
                </p>
              </div>
              <div style={{ ...cardStyle, background: '#F9FAFB' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <FileSignature size={20} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', margin: 0 }}>Ce que votre contrat doit contenir</h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
                  {[
                    "La liste des droits cédés : reproduction, modification, adaptation, distribution, avec le territoire et la durée.",
                    "Le sort des briques réutilisées : bibliothèques libres sous leur propre licence, composants que le prestataire garde et vous concède en licence.",
                    "La remise du code source dans un dépôt à votre nom, et la documentation qui permet à un autre développeur de le reprendre.",
                    "Pour les données personnelles, le contrat de sous-traitance prévu par l'article 28 du RGPD, avec la restitution ou la suppression des données en fin de mission.",
                  ].map(t => (
                    <li key={t} style={{ display: 'flex', gap: 10, fontSize: 14.5, color: '#374151', lineHeight: 1.65 }}>
                      <BadgeCheck size={16} strokeWidth={2.3} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: '6px 0 0' }}>
                Chez Masteria, le code développé pour vous et sa documentation vous sont remis ; la cession des droits et le transfert du dépôt de code et des accès d'hébergement s'écrivent dans la proposition.
              </p>
              <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                Pour un SaaS, le <a href={URL_DATA_ACT} target="_blank" rel="noopener noreferrer" style={{ color: c, fontWeight: 600 }}>règlement européen sur les données</a>, applicable depuis le 12 septembre 2025, facilite désormais le changement de fournisseur cloud ; il ne vous rend pas pour autant propriétaire du logiciel loué.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DÉROULÉ ── */}
      <section id="deroule" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Comment nous travaillons</div>
          <h2 style={h2Style}>Du processus observé au logiciel en service, en cinq temps</h2>
          <p style={leadStyle}>
            Un logiciel métier réussit quand il part du travail tel qu'il se fait, avec ses exceptions et ses contournements. Le premier temps du projet se passe donc avec vos équipes, avant toute ligne de code.
          </p>
          <p style={mutedStyle}>
            Le détail des jalons, des validations et des livrables figure sur notre page <Link to="/methode-projet-ia" style={{ color: c, fontWeight: 600 }}>méthode de projet</Link>.
          </p>

          {/* Un temps par rangée, en pleine largeur */}
          <Lignes items={ETAPES.map((e, i) => ({ icon: e.icon, kicker: `Temps ${i + 1}`, titre: e.title, texte: e.body }))} />

          <div style={{ ...cardStyle, marginTop: 28, display: 'flex', gap: 18, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={iconBoxStyle}><Code2 size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" /></div>
            <div style={{ flex: '1 1 400px' }}>
              <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>Des technologies que d'autres sauront reprendre</h3>
              <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: '0 0 10px' }}>
                Nos développeurs écrivent en TypeScript et en Python, avec React et Next.js pour les écrans, Node.js côté serveur, PostgreSQL (souvent via Supabase) pour les données, et un hébergement chez Vercel ou chez l'hébergeur de votre choix. Ils connectent CRM, ERP comme Odoo et messageries par API, et automatisent avec n8n quand un flux simple suffit.
              </p>
              <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>
                Pour une application destinée au navigateur ou au téléphone, notre page <Link to="/agence-developpement-application-web" style={{ color: c, fontWeight: 600 }}>agence de développement d'application web</Link> compare les options techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRIX ── */}
      <section id="prix" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Budget</div>
          <h2 style={h2Style}>Ce que coûte un développement logiciel sur mesure chez Masteria</h2>
          <p style={{ ...calloutStyle, background: '#F9FAFB' }}>
            <strong>Un prototype démarre autour de 8 000 € HT ; une application métier en production se chiffre en dizaines de milliers d'euros ; un système qui remplace plusieurs outils pour une grande organisation dépasse 100 000 € et peut atteindre plusieurs centaines de milliers.</strong>
          </p>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Ces fourchettes restent larges parce qu'un logiciel de trois écrans et un système de trente écrans connecté à quatre outils portent le même nom. Le prix précis se fixe après le cadrage.
          </p>
          <Rangees numeros={false} items={[
              { titre: 'Au forfait', texte: "Un prix global, fixé après le cadrage, pour un périmètre écrit et un livrable défini. Masteria s'engage sur le livrable décrit ; une demande nouvelle en cours de route se chiffre à part." },
              { titre: 'En régie', texte: "Des développeurs détachés dans votre équipe, sur site ou à distance, facturés au taux journalier. Vous pilotez les priorités au quotidien. Notre taux se communique sur devis." },
              { titre: 'Après la livraison', texte: "La maintenance et les évolutions se discutent dès la proposition, pour que vous puissiez estimer le coût total sur plusieurs années." },
          ]} />
          <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            Le développement d'un logiciel n'est pas finançable par l'OPCO ; la formation de vos équipes à l'outil livré peut l'être. Les ordres de grandeur par type de projet figurent sur notre page <Link to="/prix-projet-ia" style={{ color: c, fontWeight: 600 }}>prix d'un projet IA</Link>, et la page <Link to="/agence-developpement-web" style={{ color: c, fontWeight: 600 }}>agence de développement web</Link> présente l'ensemble de nos développements.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>FAQ</div>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Questions fréquentes sur le développement sur mesure</h2>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: '0 0 16px' }}>Votre situation appelle une réponse plus précise ?</p>
              <Link to={RDV_URL} style={{ color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, textDecoration: 'none' }}>
                Réservez 30 minutes avec nous
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
            <div>
              {FAQ.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} color={c} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{ background: '#fff', padding: SECTION_PAD }}>
        <div style={{ position: 'relative', overflow: 'hidden', maxWidth: 1080, margin: '0 auto', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Votre projet</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Développer, acheter ou connecter : tranchons sur votre processus
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 620, marginLeft: 'auto', marginRight: 'auto' }}>
              Décrivez le processus qui vous ralentit et les logiciels que vous utilisez déjà. En 30 minutes, nous vous disons si un développement se justifie, et sinon quel logiciel du marché regarder.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 24 }}>
              <Link to={RDV_URL} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 30px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 700 }}>
                Réserver 30 minutes de cadrage
                <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
              </Link>
              <Link to="/methode-projet-ia" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 600, border: '1px solid #2A3650' }}>
                Lire notre méthode
              </Link>
            </div>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Échange en visio offert, créneau proposé sous 24 heures · Forfait ou régie · Code et documentation remis
            </p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : qui construit ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Qui construit votre logiciel</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Une équipe composée pour votre projet, sous la responsabilité de Mathias Nizan
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: '0 0 12px' }}>
              Masteria, fondée à Lyon en 2022, réunit environ cinq développeurs web et IA indépendants, une dizaine de consultants et une vingtaine de formateurs. Mathias Nizan retient les profils selon la technologie et le métier du client, et répond du résultat.
            </p>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Nous exploitons nous-mêmes ce que nous savons construire : le site master-ia.fr, en React avec des pages prérendues pour le référencement, et notre plateforme de gestion des formations et des clients, en Next.js et Supabase.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['≈ 5', 'développeurs web et IA'],
              ['Forfait ou régie', 'sur site ou à distance'],
              ['Droits cédés', 'code et documentation remis'],
              ['Lyon, 2022', 'France · Europe · États-Unis · Inde'],
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 28px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{k}</div>
                <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 4 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOURCES ── */}
      <section aria-labelledby="sources-sur-mesure" style={{ padding: '56px 24px', background: '#FAFAF7', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 id="sources-sur-mesure" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>
            Sources et textes de référence
          </h2>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.6, margin: '0 0 20px' }}>
            Textes consultés le 23 octobre 2026. Ils donnent le cadre général ; pour un contrat précis, faites relire les clauses de cession par votre juriste.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            {SOURCES.map(s => (
              <li key={s.url} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 15, lineHeight: 1.6 }}>
                <ShieldCheck size={16} strokeWidth={2.2} style={{ color: c, flexShrink: 0, marginTop: 4 }} aria-hidden="true" />
                <span>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: c, fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>{s.name}</a>
                  <span style={{ color: '#6B7280' }}> : {s.note}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

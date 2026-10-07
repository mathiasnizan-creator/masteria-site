import { Link } from 'react-router-dom'
import {
  ArrowRight, BarChart3, BookOpen, Bot, Boxes, Building2, Check, CheckCircle2, Compass,
  Cpu, ExternalLink, Factory, GraduationCap, Landmark, LineChart, Scale, Search,
  ShieldCheck, Sparkles, Sun, Target, Users, Workflow,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { FAQSection } from '../components/screens2'
import { useIsDesktop } from '../hooks/useMediaQuery'

/* ───────── Jetons de style (charte cabinet) ───────── */

const BLUE = '#2563EB'
const BLUE_SOFT = '#DBEAFE'
const INK = '#0A0A0A'
const GREY_700 = '#374151'
const GREY_500 = '#6B7280'
const BORDER = '#E5E7EB'
const BG_SOFT = '#F9FAFB'
const SECTION_PAD = 'clamp(64px, 9vw, 110px) clamp(20px, 4vw, 32px)'

const kickerStyle = {
  fontSize: 12, fontWeight: 700, letterSpacing: '0.1em',
  textTransform: 'uppercase', color: BLUE, marginBottom: 14,
}
const h2Style = {
  fontFamily: 'Nunito, sans-serif',
  fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900,
  color: INK, lineHeight: 1.15, letterSpacing: '-0.02em',
  marginBottom: 18,
}
const cardStyle = {
  background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 16,
  boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 30,
}
const iconTileStyle = {
  width: 44, height: 44, borderRadius: 12, background: BLUE_SOFT,
  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
}
const linkStyle = { color: BLUE, fontWeight: 700, textDecoration: 'none' }

/* ───────── Données locales ───────── */
/* Texte propre à cette page (07/10/2026) : aucun bloc partagé, aucun chiffre
   hors des dossiers de mission (src/data/etudes-de-cas.js) et des sources
   citées dans la section « Repères ». */

const SERVICES = [
  {
    Icon: Compass,
    title: 'Audit et diagnostic IA',
    desc: "Nous observons les tâches au moment où elles s'exécutent, flux par flux, pour repérer où partent les heures et quelles tâches une IA peut préparer sous le contrôle d'une personne.",
    deliverables: [
      'Carte des flux de travail et des logiciels en place',
      'Gisements de temps notés sur leur impact et leur faisabilité',
      'Niveau de maturité mesuré sur six axes, des usages à la sécurité',
      "Recommandations assorties d'un responsable, d'une échéance et d'un critère de succès",
    ],
  },
  {
    Icon: Target,
    title: 'Feuille de route et gouvernance',
    desc: "L'état des lieux devient une suite de décisions : quels chantiers ouvrir, dans quel ordre, pour quel budget et sous quelles règles d'usage.",
    deliverables: [
      'Feuille de route datée, chantier par chantier',
      "Charte d'usage signée avant le premier déploiement",
      'Référent IA interne et point de suivi mensuel',
      'Position RGPD et AI Act établie usage par usage',
    ],
  },
  {
    Icon: Workflow,
    title: 'Conception des outils retenus',
    desc: "Assistants, agents et automatisations se construisent sur vos fichiers et se branchent sur vos logiciels, et une personne relit chaque résultat avant qu'il parte chez un client ou serve à décider.",
    deliverables: [
      'Assistants et agents construits sur vos documents',
      'Connexion à l’ERP, au CRM ou à la messagerie',
      'Données de démonstration remplacées avant la production',
      'Documentation et propriétaire nommé pour chaque outil',
    ],
  },
  {
    Icon: GraduationCap,
    title: 'Formation et adoption',
    desc: "Les équipes s'exercent sur leurs propres dossiers, puis des référents internes prennent le relais pour faire évoluer les outils une fois la mission terminée.",
    deliverables: [
      'Sessions par métier, construites sur vos cas',
      'Référents formés pour diffuser en interne',
      'Supports consultables après chaque session',
      'Indicateurs relevés au démarrage puis revus à J+30',
    ],
  },
]

const MISSIONS = [
  {
    Icon: Search,
    strong: "L'état des lieux :",
    text: "rencontres avec ceux qui exécutent les tâches au quotidien, relevé des logiciels et des fichiers, repérage des usages d'IA déjà apparus hors de tout cadre, souvent sur des comptes personnels.",
  },
  {
    Icon: Target,
    strong: 'Les priorités :',
    text: "chaque tâche candidate reçoit un volume de temps déclaré, une difficulté et ses dépendances ; les cas écartés sont consignés avec leur motif, pour que personne ne les rouvre par erreur.",
  },
  {
    Icon: Workflow,
    strong: 'La mise en œuvre :',
    text: "choix de l'outil entre ChatGPT, Claude, Gemini, Microsoft Copilot (anciennement Microsoft 365 Copilot) ou Vibe de Mistral AI, puis construction des assistants à partir des documents maison.",
  },
  {
    Icon: Scale,
    strong: 'Le cadre :',
    text: "charte d'usage, référent interne, liste des données qui ne sortent pas et, pour chaque usage retenu, ce qu'en disent le RGPD comme l'AI Act.",
  },
  {
    Icon: GraduationCap,
    strong: "L'adoption :",
    text: "formation par métier sur les dossiers de chacun, mesure de la situation initiale au cours de la session, bilan un mois plus tard pour décider de la suite.",
  },
]

const BRIDGES = [
  { Icon: Cpu, title: 'Agence de développement IA', desc: "Applications et agents IA écrits par nos développeurs, éprouvés sur vos données puis documentés pour votre service informatique.", href: '/agence-developpement-ia', cta: "Voir l'agence de développement IA" },
  { Icon: Boxes, title: 'Outils IA sur mesure', desc: "Un assistant qui répond d'après vos procédures, un copilote de devis, un tableau de bord commenté : chaque outil sert un métier précis, le vôtre.", href: '/outils-ia-sur-mesure', cta: 'Découvrir les outils sur mesure' },
  { Icon: Workflow, title: 'Automatisation des processus', desc: "Mails à trier, documents à ressaisir, rapports à compiler chaque lundi : ces tâches passent dans des flux automatisés, sur les logiciels que vous avez déjà.", href: '/agence-automatisation-ia', cta: "Voir l'automatisation IA" },
]

const METHODO = [
  {
    n: '01',
    title: 'Comprendre',
    desc: "Entretiens avec la direction puis avec les équipes de terrain, lecture des fichiers du quotidien, liste des outils utilisés et des comptes que chacun a déjà ouverts.",
    livrable: 'Carte des flux',
  },
  {
    n: '02',
    title: 'Prioriser',
    desc: "Chaque tâche candidate reçoit deux notes, l'effet attendu et la difficulté de mise en œuvre sur un horizon de trois mois. Les cas écartés restent écrits, avec la raison de leur mise de côté.",
    livrable: 'Matrice validée par la direction',
  },
  {
    n: '03',
    title: 'Construire',
    desc: "Les premiers assistants sont conçus sur vos documents. Les données de démonstration laissent place aux vôtres avant la production, et une personne contrôle chaque résultat destiné à sortir de la maison.",
    livrable: 'Outils testés sur vos dossiers',
  },
  {
    n: '04',
    title: 'Déployer et mesurer',
    desc: "Formation par métier, charte et référent en place, situation de départ chiffrée pendant la séance, puis bilan un mois après pour lancer ou ajuster la vague suivante.",
    livrable: 'Bilan à J+30',
  },
]

const COMPARATIF = [
  {
    critere: 'Spécialisation',
    cabinet: "L'IA comme unique métier depuis 2022 : veille publiée chaque jour, méthode rodée en mission, textes européens (RGPD, AI Act) lus à travers vos usages.",
    esn: "Un domaine parmi beaucoup d'autres ; l'équipe affectée dépend des disponibilités du moment.",
    freelance: "Une expertise souvent fine, qui s'arrête au parcours d'une seule personne.",
  },
  {
    critere: 'Transfert de compétence',
    cabinet: "Prévu dès le devis : référents formés, supports remis, formation certifiée Qualiopi quand l'équipe doit monter en compétence.",
    esn: "Rarement écrit dans le contrat ; l'entreprise reste dépendante du prestataire après la livraison.",
    freelance: "Dépend de la disponibilité de l'intervenant et de son goût pour la pédagogie.",
  },
  {
    critere: 'Budget type',
    cabinet: "Forfait fixé après le cadrage, en fourchettes larges selon le périmètre ; la formation, facturée 1 980 € HT par jour, reste éligible au financement de votre OPCO.",
    esn: "Contrats longs, équipes nombreuses, coût de coordination élevé.",
    freelance: "Tarif journalier souvent bas ; cadrage, règles d'usage et continuité restent à votre charge.",
  },
  {
    critere: 'Pour qui',
    cabinet: "PME, ETI, grands groupes et directions métier qui veulent des priorités chiffrées et des équipes capables de continuer seules.",
    esn: "Grands comptes à qui il manque de la capacité de développement sur plusieurs années.",
    freelance: "Besoin ponctuel, au périmètre étroit et stable.",
  },
]

const POUR_QUI = [
  {
    Icon: Building2,
    title: 'PME & ETI',
    desc: "Vous voulez des priorités nettes et un premier outil utile, sans financer des prototypes que personne n'ouvrira plus après la démonstration.",
  },
  {
    Icon: LineChart,
    title: 'Grandes entreprises',
    desc: "Vous cherchez un regard extérieur qui travaille avec votre DSI, teste un déploiement par paliers et le corrige avant de l'étendre à tous les sites.",
  },
  {
    Icon: Users,
    title: 'Directions métier',
    desc: "Commerce, finance, RH, juridique, opérations : vous voulez outiller votre service sur ses dossiers, dans les limites que pose la direction générale.",
  },
]

const DIFFERENCIATEURS = [
  {
    Icon: Sparkles,
    title: 'Conseil et développement liés',
    desc: "L'équipe qui recommande un outil est celle qui le construit, puis qui forme ses utilisateurs. Aucun cahier des charges ne part chez un intégrateur qui n'a jamais rencontré vos équipes.",
  },
  {
    Icon: Compass,
    title: 'Indépendant des éditeurs',
    desc: "Le choix entre ChatGPT, Claude, Gemini, Microsoft Copilot ou un modèle à poids ouverts (que l'on peut héberger chez soi) suit vos données, vos logiciels et votre budget.",
  },
  {
    Icon: ShieldCheck,
    title: "Le cadre avant l'outil",
    desc: "Charte d'usage, référent, données exclues et lecture RGPD et AI Act sont posés avant la première formation. L'équipe se sert de l'IA sans craindre de mal faire.",
  },
  {
    Icon: CheckCircle2,
    title: 'Des gains relevés, jamais promis',
    desc: "Les indicateurs se choisissent au cadrage, se mesurent une première fois en séance, puis à J+30. Un gain que personne n'a mesuré garde le statut de cible.",
  },
]

/* Quatre études de cas, racontées ici sous l'angle du métier de conseil.
   Faits vérifiés dans src/data/etudes-de-cas.js (révision du 05/10/2026). */
const CASE_LESSONS = [
  {
    id: 'photovoltaique',
    Icon: Sun,
    label: 'PME photovoltaïque · trois personnes',
    title: 'Un diagnostic suit le travail, de la demande de devis à l’encaissement',
    text: "Trois entretiens ont suffi pour décrire quatre flux, de la vente au pilotage en passant par la livraison et l'encaissement, et repérer douze gisements de temps autour de l'ERP Odoo. En septembre 2026, la direction a reçu trois chantiers confiés chacun à une personne nommée, des règles d'usage à signer et des objectifs posés avant la formation sur site d'octobre.",
  },
  {
    id: 'distribution',
    Icon: Bot,
    label: 'Distribution IT B2B · 58 salariés',
    title: 'Des référents internes font vivre les outils après la mission',
    text: "La direction a choisi avec nous les tâches à outiller d'abord : les cotations, les relances de devis, la rédaction des réponses à un cahier des charges, la prospection et le suivi des stocks. Dix référents ont passé deux jours en formation en juin 2026, et onze compétences Claude ont été construites avec eux, puis validées par la direction ; les autres collaborateurs en profiteront entre octobre et décembre 2026, avec ces référents pour relais.",
  },
  {
    id: 'conseil-financier',
    Icon: Landmark,
    label: 'Conseil financier public · vingt consultants environ',
    title: "Un bon assistant interroge le consultant avant d'écrire",
    text: "Pour ce cabinet qui répond à des appels d'offres publics, nous avons dessiné quatre assistants, un pour chaque famille de marchés publics, mis au point avec les consultants au fil de quatre ateliers de deux heures. Chaque assistant puise dans les mémoires techniques les mieux classés par les jurys, et demande le contexte du client, les références et l'équipe avant de rédiger.",
  },
  {
    id: 'industrie',
    Icon: Factory,
    label: 'Industrie · groupe international du packaging',
    title: 'Un déploiement par paliers se corrige avant la généralisation',
    text: "Deux sessions pilotes ont formé 24 managers sur treize ateliers bâtis avec les fichiers du groupe, et trois ajustements ont séparé la première de la seconde. Le comité de direction a ensuite travaillé une matinée, en anglais, sur les décisions à prendre avant la phase internationale. Cinq sessions ont eu lieu entre juillet et septembre 2026, deux d'entre elles en anglais ; le dispositif doit gagner les équipes américaines et mexicaines en octobre 2026, puis indiennes en décembre.",
  },
]

const TEAM_STATS = [
  ['2022', 'création à Lyon, IA uniquement'],
  ['≈ 10', 'consultants IA indépendants'],
  ['≈ 5', 'développeurs IA du réseau'],
  ['≈ 20', 'formateurs, mobilisés selon le projet'],
]

const FAQ_CONSEIL = [
  {
    q: "Que fait un cabinet de conseil en intelligence artificielle ?",
    a: "Il aide une entreprise à décider où l'IA lui rend du temps, puis à organiser la mise en œuvre. Son travail couvre cinq sujets : l'état des lieux des flux de travail, le choix des priorités, le choix et la construction des outils, les règles d'emploi au regard des textes européens, puis l'apprentissage des utilisateurs. Chez Masteria, une même équipe tient ces cinq sujets, du premier entretien au bilan mesuré.",
  },
  {
    q: "En quoi Masteria se distingue d'un cabinet de conseil classique ?",
    a: "Masteria construit ce qu'elle recommande. Ses développeurs réalisent les assistants, agents et automatisations inscrits dans la feuille de route, puis ses formateurs forment ceux qui s'en servent. Vous gardez un seul responsable, Mathias Nizan, du premier rendez-vous jusqu'à la mise en service, et aucun intégrateur ne repart de zéro à partir d'un rapport.",
  },
  {
    q: "Combien coûte un cabinet de conseil en IA ?",
    a: "Le conseil se facture au forfait. Le devis arrive après le cadrage, quand le périmètre est connu, et les ordres de grandeur restent larges : un petit périmètre ou un prototype démarre à quelques milliers d'euros, un projet mis en production se chiffre en dizaines de milliers, et un déploiement de groupe sur plusieurs pays va au-delà de 100 000 €, et certains se comptent en centaines de milliers. Le conseil comme le développement ne sont pas finançables par votre OPCO ; il peut en revanche financer la formation, facturée 1 980 € HT chaque jour de session, dans la limite des règles et des fonds de votre branche. Les 30 minutes de cadrage sont offertes.",
  },
  {
    q: "Faut-il un expert en conseil IA externe ou recruter en interne ?",
    a: "Un recrutement se justifie quand les projets d'IA deviennent permanents et nombreux ; le profil reste rare et long à trouver. Un cabinet externe apporte tout de suite l'expérience de missions variées et forme vos équipes pendant qu'il travaille. Beaucoup d'entreprises font les deux, dans cet ordre : un cabinet pour cadrer et lancer les premiers chantiers, puis un référent interne qui reprend la main une fois les outils en service.",
  },
  {
    q: "Cabinet de conseil IA ou agence IA : quelle différence ?",
    a: "Une agence IA construit : elle développe des applications, des agents ou des intégrations à partir d'un besoin déjà défini. Un cabinet de conseil IA définit ce besoin : il examine l'existant, compare les outils sans parti pris, pose les règles d'usage et forme les équipes. Masteria fait les deux, ce qui évite de perdre de l'information entre celui qui recommande et celui qui réalise.",
  },
  {
    q: "Pourquoi choisir un cabinet spécialisé plutôt qu'un généraliste ?",
    a: "L'IA change chaque mois : nouveaux modèles, nouveaux prix, nouvelles règles. Un cabinet dont c'est l'unique sujet suit ces changements au jour le jour (Masteria publie une veille IA quotidienne) et les confronte en mission aux contraintes de ses clients. Ses recommandations reposent sur ce qu'il a vu fonctionner, dans une PME où travaillent trois personnes comme dans un groupe industriel présent sur trois continents.",
  },
  {
    q: "Travaillez-vous avec des petites structures ?",
    a: "Oui. L'une de nos études de cas porte sur une équipe de trois personnes, une autre sur un industriel international qui compte des milliers de salariés. Pour une petite structure, la mission se resserre : moins d'entretiens, un ou deux chantiers, un outil commun, une charte, puis une formation sur site.",
  },
  {
    q: "Sur quels outils IA travaillez-vous ?",
    a: "Sur ceux qui conviennent à votre contexte : ChatGPT, Claude, Gemini, Microsoft Copilot, Vibe de Mistral AI, ainsi que des modèles ouverts, téléchargeables et installables sur vos propres serveurs. Votre suite bureautique, le degré de confidentialité de vos dossiers et le coût par utilisateur orientent le choix. Indépendant des éditeurs, Masteria compare ces options sans préférence de marque.",
  },
  {
    q: "Comment garantissez-vous la sécurité des données ?",
    a: "Chaque mission commence par lister les informations qu'aucun assistant ne doit recevoir. Nous recommandons des comptes d'entreprise administrés et exclus de l'entraînement des modèles, en remplacement des comptes privés. Les équipes apprennent ensuite à anonymiser un document et à reconnaître ce qu'il ne faut jamais confier à un assistant.",
  },
  {
    q: "Puis-je combiner conseil et formation ?",
    a: "Oui, et nos quatre études de cas associent les deux : un diagnostic ou un audit, puis une formation par métier construite sur les chantiers retenus. La partie formation, certifiée Qualiopi, peut recevoir un financement de votre OPCO ; vous réglez le conseil vous-même. Le devis présente les deux parties sur des lignes séparées.",
  },
  {
    q: "Quels livrables concrets remettez-vous à la fin d'un audit IA ?",
    a: "Une carte des flux de travail, la liste des gisements de temps notés sur leur impact et leur faisabilité, une mesure de maturité, des recommandations qui désignent chacune un responsable, une échéance et un critère de succès, des règles d'usage écrites, une feuille de route datée et une restitution devant la direction. Vos équipes reçoivent des fichiers qu'elles peuvent modifier.",
  },
  {
    q: "Quels secteurs d'activité accompagnez-vous ?",
    a: "Nos études de cas couvrent la distribution, l'industrie, le conseil financier et le photovoltaïque. Nos missions de formation récentes concernent aussi un éditeur de logiciels, un groupe immobilier, un cabinet de géomètres-experts, une interprofession agricole et un réseau de franchise. La méthode reste la même ; les règles du secteur, la sensibilité des données et les logiciels en place font varier le contenu.",
  },
  {
    q: "Audit IA ou stratégie IA : qu'est-ce qui les sépare ?",
    a: "L'audit regarde ce qui existe : flux de travail, outils, données, compétences, usages déjà installés. La stratégie décide de ce qui vient : ambition, ordre des chantiers, budget, règles et indicateurs. Le premier nourrit la seconde, et une mission bien menée enchaîne les deux.",
  },
  {
    q: "Comment calculez-vous ce que rapporte un projet d'IA ?",
    a: "Tâche par tâche. Pour chaque chantier, nous choisissons au cadrage deux ou trois indicateurs simples (délai d'un devis, temps passé sur une relance, nombre de ressaisies), mesurons la situation initiale pendant la formation et refaisons le calcul un mois après. La direction convertit ensuite le temps rendu en euros, avec ses propres coûts horaires.",
  },
  {
    q: "Combien de temps faut-il prévoir pour une mission de conseil IA ?",
    a: "La durée se fixe au cadrage, selon le périmètre. Dans nos études de cas, une PME a reçu son diagnostic en septembre, ses deux jours de formation sont prévus en octobre et le premier bilan des gains tombe 90 jours après la décision ; un déploiement de groupe s'étale de juillet à décembre 2026, pays par pays. Le travail avance toujours par étapes utilisables, chacune validée avant la suivante.",
  },
  {
    q: "Quand faut-il faire appel à un cabinet de conseil en IA ?",
    a: "Trois situations s'y prêtent : les équipes utilisent l'IA chacune de leur côté, souvent sur des comptes personnels ; des abonnements sont payés sans que personne ne sache ce qu'ils rapportent ; un prototype prometteur reste à l'état d'essai. Un investissement lourd à arbitrer ou une échéance réglementaire justifient aussi un regard extérieur. Un cadrage mené tôt coûte moins cher qu'un chantier construit sur la mauvaise priorité.",
  },
  {
    q: "Faut-il préparer ses données avant de lancer un projet d'IA ?",
    a: "Seulement celles dont le premier cas d'usage a besoin. Un assistant qui répond d'après vos documents, ou un agent qui prépare un devis, n'est fiable que si ses sources le sont : à jour, accessibles, avec des droits d'accès définis. Nous partons d'une tâche prioritaire et ne remettons en ordre que les données qu'elle exige ; un grand chantier préalable retarderait les premiers résultats. Notre page de conseil data et IA détaille cette approche.",
  },
]

/* ───────── Repères datés et sourcés (citables) ───────── */
/* Chiffres de marché : memory/reference_chiffres_geo_2026.md (vérifiés le 30/09/2026).
   AI Act : règlement 2024/1689 et Omnibus 2026/1744 (EUR-Lex). Jamais Gartner. */

const MARKET_STATS = [
  {
    Icon: Users,
    stat: '48 %',
    label: "des personnes de 12 ans et plus, en France, utilisaient l'IA générative en juin 2025, contre 20 % en 2023 : près d'une sur deux",
    source: 'Crédoc, Baromètre du numérique 2026 (février 2026)',
  },
  {
    Icon: BarChart3,
    stat: '1,2 milliard',
    label: "d'utilisateurs de ChatGPT chaque semaine fin septembre 2026, trois fois plus qu'en février 2025",
    source: 'OpenAI, DevDay du 29 septembre 2026, rapporté par Engadget',
  },
  {
    Icon: Scale,
    stat: '2 août 2026',
    label: "l'AI Act rend applicable son article 50, sur la transparence ; l'obligation de culture IA de l'article 4 court, elle, depuis le 2 février 2025",
    source: 'Règlement (UE) 2024/1689, EUR-Lex',
  },
  {
    Icon: ShieldCheck,
    stat: 'Décembre 2027',
    label: "nouvelle date d'application, fixée par l'Omnibus sur l'IA, pour les systèmes « haut risque » listés à l'annexe III",
    source: 'Règlement (UE) 2026/1744 du 8 juillet 2026',
  },
]

/* ───────── Définitions clés (ancrage d'entités pour la recherche générative) ───────── */

const GLOSSARY = [
  {
    term: 'Cabinet de conseil en IA',
    def: "Prestataire extérieur qui aide une entreprise à choisir ses usages d'IA, à les encadrer et à les mettre en service, de l'état des lieux jusqu'à la formation des utilisateurs.",
  },
  {
    term: 'Audit IA',
    def: "Examen des flux de travail, des logiciels, des données et des compétences, qui débouche sur une liste de chantiers notés sur leur impact et leur faisabilité.",
  },
  {
    term: 'Gouvernance IA',
    def: "Règles et rôles qui encadrent l'IA dans l'entreprise : charte d'usage, données exclues, référent, registre, relecture humaine des contenus qui engagent la société.",
  },
  {
    term: 'AI Act',
    def: "Règlement (UE) 2024/1689, qui répartit les usages de l'IA entre quatre degrés de risque, de l'interdit au minimal, et proportionne les obligations à chacun.",
  },
  {
    term: 'ROI IA',
    def: "Ce que rapporte un projet d'IA comparé à ce qu'il coûte : temps rendu aux équipes, erreurs évitées, travaux devenus possibles. Il se calcule à partir d'un point de départ relevé avant l'outil.",
  },
]

/* ───────── Sources de référence (liens d'autorité, suivis) ───────── */

const REFERENCES = [
  { label: "Version officielle du règlement 2024/1689, dit AI Act, consultable sur EUR-Lex", url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1689' },
  { label: "Omnibus sur l'IA du 8 juillet 2026, qui décale plusieurs échéances, texte paru au Journal officiel européen", url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj/fra' },
  { label: "Page de la Commission européenne sur la réglementation de l'IA", url: 'https://digital-strategy.ec.europa.eu/fr/policies/regulatory-framework-ai' },
  { label: "Dossier de la CNIL consacré à l'intelligence artificielle et aux données personnelles", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
]

/* ───────── Meta ───────── */

const META_DESC = "Cabinet conseil IA à Lyon : audit des usages, feuille de route, cadre RGPD et AI Act, outils développés jusqu'à la production. 30 min de cadrage offertes."
const KEYWORDS = "conseil ia, cabinet conseil ia, cabinet de conseil ia, cabinet de conseil en intelligence artificielle, conseil en intelligence artificielle, conseil en ia, conseil intelligence artificielle, cabinet de conseil intelligence artificielle, conseil stratégie ia, accompagnement ia entreprise, expert conseil ia"

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://www.master-ia.fr/conseil-intelligence-artificielle#service',
  name: 'Conseil en intelligence artificielle',
  description: "Audit des usages, feuille de route, gouvernance RGPD et AI Act, conception des outils IA retenus et formation des équipes, pilotés par la même équipe jusqu'à la mise en service.",
  url: 'https://www.master-ia.fr/conseil-intelligence-artificielle',
  serviceType: ['Audit IA', 'Feuille de route IA', 'Gouvernance IA', 'Outils IA sur mesure', 'Accompagnement IA'],
  areaServed: ['France', 'Europe', 'États-Unis', 'Inde'],
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/conseil-intelligence-artificielle#article',
  headline: "Cabinet de conseil en intelligence artificielle : de l'audit à l'outil en production",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-04-21',
  dateModified: '2026-10-07',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/conseil-intelligence-artificielle#webpage' },
  about: ['Conseil en intelligence artificielle', 'Audit IA', 'Accompagnement IA', "Gouvernance de l'IA"],
  // GEO : passages lus/cités en priorité par les assistants vocaux et génératifs.
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
  citation: [
    'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=OJ:L_202401689',
    'https://eur-lex.europa.eu/eli/reg/2026/1744/oj/fra',
  ],
}

/* ───────── Composant ───────── */

const answerStyle = {
  background: BG_SOFT, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${BLUE}`,
  borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7,
  color: INK, margin: '0 0 24px', maxWidth: 880,
}
const h3EditorialStyle = {
  fontFamily: 'Nunito, sans-serif',
  fontSize: 22, fontWeight: 800,
  color: INK, marginTop: 36, marginBottom: 14, letterSpacing: '-0.01em',
}

export default function ConseilIAPage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  return (
    <>
      <SEOHead
        title="Cabinet conseil IA&nbsp;: de l'audit à la production | Masteria"
        description={META_DESC}
        slug="conseil-intelligence-artificielle"
        keywords={KEYWORDS}
        breadcrumbs={[
          { name: 'Accueil', slug: '' },
          { name: 'Agence IA', slug: 'agence-ia' },
          { name: 'Conseil IA', slug: 'conseil-intelligence-artificielle' },
        ]}
        faqItems={FAQ_CONSEIL}
        datePublished="2026-04-21"
        dateModified="2026-10-07"
        extraJsonLd={[serviceJsonLd, articleJsonLd]}
      />

      {/* ── HERO sombre premium ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        {/* filet d'accent en haut */}
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: BLUE }} />
        {/* trame de points */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        {/* halo d'accent */}
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 920, margin: '0 auto', position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/agence-ia" style={{ color: '#5B6679' }}>Agence IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }} aria-current="page">Conseil IA</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Compass size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Cabinet de conseil IA
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            Cabinet de conseil en intelligence artificielle&nbsp;:
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>de l'audit à l'outil en production</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, qui pilote les missions de conseil de Masteria · Page revue le 7 octobre 2026
          </p>

          {/* GEO : réponse directe citable, accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${BLUE}` }}>
            <strong style={{ color: '#fff', fontWeight: 700 }}>Fondée à Lyon en 2022, Masteria aide les PME, les ETI et les grands groupes à choisir où l'IA leur rend du temps, à en encadrer l'usage, puis à mettre les outils en service, pour des équipes basées en France comme dans le reste de l'Europe, aux États-Unis ou en Inde.</strong>
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            Un rapport seul ne change pas le travail d'une équipe. Une fois la recommandation validée, nos développeurs construisent les assistants et les agents retenus, puis nos formateurs entraînent vos équipes à les utiliser.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact?type=projet&rdv=30" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: BLUE, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#services" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir nos services
            </a>
          </div>
        </div>
      </section>

      {/* ── SOMMAIRE ancré (SEO/GEO : jump-to links + cibles d'ancre pour sitelinks) ── */}
      <nav aria-label="Sur cette page" style={{ background: '#fff', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 4, overflowX: 'auto', whiteSpace: 'nowrap' }}>
          <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#9CA3AF', paddingRight: 8, flexShrink: 0 }}>Sur cette page</span>
          {[
            ['#services', 'Nos services'],
            ['#deroulement', "Déroulé d'une mission"],
            ['#choisir', 'Cabinet, ESN ou freelance'],
            ['#pourquoi', 'Pourquoi un cabinet'],
            ['#chiffres', 'Repères 2026'],
            ['#etudes-de-cas', 'Quatre missions'],
          ].map(([href, label]) => (
            <a key={href} href={href} style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 700, color: INK, textDecoration: 'none', padding: '13px 12px', flexShrink: 0 }}>{label}</a>
          ))}
        </div>
      </nav>

      {/* QUE FAIT UN CABINET DE CONSEIL EN IA : réponse directe (éditorial asymétrique) */}
      <section style={{ background: '#fff', padding: SECTION_PAD }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>Le rôle du cabinet</div>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Que fait un cabinet de conseil en IA&nbsp;?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: 0 }}>
                <strong style={{ color: INK }}>Le cabinet de conseil en IA observe comment votre entreprise travaille, repère les tâches où l'intelligence artificielle rend des heures pour un risque maîtrisé, puis organise leur mise en œuvre&nbsp;: outil, règles d'usage, formation et mesure. Son travail se juge sur ce que les équipes font encore avec l'outil trois mois plus tard.</strong>
              </p>
            </div>

            <div style={{ color: GREY_700, fontSize: 16, lineHeight: 1.75 }}>
              <p style={{ marginTop: 0, marginBottom: 22 }}>
                Une mission de conseil IA traite cinq sujets, à peu près dans cet ordre&nbsp;:
              </p>
              <ul style={{ margin: '0 0 26px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
                {MISSIONS.map((m, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <m.Icon size={18} color={BLUE} strokeWidth={2} aria-hidden="true" style={{ flexShrink: 0, marginTop: 4 }} />
                    <span>
                      <strong style={{ color: INK }}>{m.strong}</strong> {m.text}
                    </span>
                  </li>
                ))}
              </ul>
              <p style={{ marginBottom: 0 }}>
                Masteria prend en charge ces cinq sujets et va au-delà de la recommandation, puisque ses développeurs construisent les outils choisis. Si votre question porte d'abord sur les choix de direction (où investir, dans quel ordre, pour quel budget), la page <Link to="/conseil-strategie-ia" style={linkStyle}>conseil stratégie IA</Link> détaille ce volet. Si l'outil est déjà identifié, passez par notre <Link to="/agence-developpement-ia" style={linkStyle}>agence de développement IA</Link>. Chaque pôle est présenté plus bas, dans <a href="#services" style={linkStyle}>nos services</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PASSER DU CONSEIL À LA SOLUTION : pont vers le développement sur mesure (cartes filet supérieur) */}
      <section style={{ background: BG_SOFT, padding: SECTION_PAD, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Du conseil à la mise en œuvre</div>
          <h2 style={{ ...h2Style, marginBottom: 16 }}>
            La recommandation devient un outil en service
          </h2>
          <p style={{ fontSize: 16, color: GREY_700, lineHeight: 1.75, maxWidth: 820, marginBottom: 36 }}>
            <strong style={{ color: INK }}>Une recommandation rangée dans un document ne rend d'heure à personne. Chez Masteria, le consultant qui a cadré le besoin suit la construction de l'outil jusqu'à sa mise en service.</strong>{' '}
            Une fois la feuille de route validée, l'équipe de développement prend les chantiers retenus&nbsp;: assistant documentaire, agent qui prépare un devis, connexion à votre ERP, automatisation d'un reporting. Le consultant garde la main sur le périmètre décidé, et les développeurs livrent par étapes utilisables, avec un point chaque semaine.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 36 }}>
            {BRIDGES.map((b, i) => (
              <Link key={i} to={b.href} style={{ textDecoration: 'none' }}>
                <div style={{
                  ...cardStyle, borderTop: `3px solid ${BLUE}`,
                  padding: 28, height: '100%', boxSizing: 'border-box',
                  display: 'flex', flexDirection: 'column', transition: 'border-color 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = BLUE }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER }}
                >
                  <div style={{ ...iconTileStyle, marginBottom: 18 }}>
                    <b.Icon size={22} color={BLUE} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: INK, marginBottom: 10, letterSpacing: '-0.01em' }}>{b.title}</h3>
                  <p style={{ fontSize: 14, color: GREY_700, lineHeight: 1.7, margin: '0 0 16px' }}>{b.desc}</p>
                  <span style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, color: BLUE, fontWeight: 700 }}>
                    {b.cta} <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <p style={{ fontSize: 13.5, color: GREY_500, lineHeight: 1.65, margin: 0, maxWidth: 820 }}>
            Conseil et développement se chiffrent au forfait après le cadrage, et votre OPCO ne peut pas les financer. La formation des utilisateurs, elle, peut l'être, car la certification Qualiopi délivrée à Masteria couvre la catégorie «&nbsp;actions de formation&nbsp;».
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ scrollMarginTop: 96, background: BG_SOFT, padding: SECTION_PAD, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={kickerStyle}>Nos expertises</div>
            <h2 style={{ ...h2Style, marginBottom: 16 }}>
              Quatre pôles s'enchaînent, de l'état des lieux aux équipes autonomes
            </h2>
            <p style={{ fontSize: 16, color: GREY_500, maxWidth: 660, margin: '0 auto', lineHeight: 1.7 }}>
              Chaque pôle remet un document ou un outil que votre comité valide avant de passer au suivant. Une mission peut démarrer par n'importe lequel, selon ce que vous savez déjà de vos besoins.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
          }}>
            {SERVICES.map((s, i) => (
              <div key={i} style={{ ...cardStyle, display: 'flex', flexDirection: 'column' }}>
                <div style={{ ...iconTileStyle, marginBottom: 20 }}>
                  <s.Icon size={22} color={BLUE} strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 style={{
                  fontFamily: 'Nunito, sans-serif', fontSize: 19, fontWeight: 800,
                  color: INK, marginBottom: 12, letterSpacing: '-0.01em',
                }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, color: GREY_700, lineHeight: 1.7, marginBottom: 18 }}>
                  {s.desc}
                </p>
                <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 16, marginTop: 'auto' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: GREY_500, marginBottom: 10 }}>
                    Livrables
                  </div>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
                    {s.deliverables.map((d, j) => (
                      <li key={j} style={{ fontSize: 13, color: GREY_700, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                        <Check size={16} color={BLUE} strokeWidth={2.5} aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }} />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA DIAGNOSTIC : pont vers l'offre d'entrée (durée et forfait fixés au cadrage) */}
      <section style={{ background: '#fff', padding: 'clamp(40px, 6vw, 64px) clamp(20px, 4vw, 32px)' }}>
        <div style={{
          maxWidth: 1120, margin: '0 auto',
          background: BLUE_SOFT, border: '1px solid #BFDBFE', borderRadius: 16,
          padding: 'clamp(24px, 4vw, 40px)',
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24,
        }}>
          <div style={{ flex: '1 1 440px' }}>
            <div style={kickerStyle}>Par où commencer</div>
            <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)', marginBottom: 10 }}>
              Commencez par un diagnostic IA
            </h2>
            <p style={{ fontSize: 15, color: GREY_700, lineHeight: 1.7, margin: 0, maxWidth: 700 }}>
              Quand vous ne savez pas encore par quelle porte entrer, le diagnostic IA donne une première lecture&nbsp;: où en sont vos équipes, quelles tâches méritent un outil, quelle décision prendre d'abord. C'est une intervention courte, menée au contact des équipes. Nous fixons avec vous sa durée et son forfait au moment du cadrage (30 minutes offertes), d'après la taille de votre périmètre.
            </p>
          </div>
          <Link to="/diagnostic-ia" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: BLUE, color: '#fff', padding: '14px 26px', borderRadius: 12,
            textDecoration: 'none', fontSize: 15, fontWeight: 700, whiteSpace: 'nowrap',
          }}>
            Découvrir le diagnostic IA <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* MÉTHODOLOGIE (timeline à rail) */}
      <section style={{ background: '#fff', padding: SECTION_PAD }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={kickerStyle}>Notre méthodologie</div>
            <h2 id="deroulement" style={{ ...h2Style, scrollMarginTop: 96, marginBottom: 18 }}>
              Comment avance une mission de conseil IA&nbsp;?
            </h2>
            <p style={{ fontSize: 16, color: GREY_700, maxWidth: 720, margin: '0 auto', lineHeight: 1.7 }}>
              <strong style={{ color: INK }}>Une mission Masteria avance en quatre étapes, et chacune se termine par une décision de votre part&nbsp;: comprendre le travail, choisir les priorités, construire sur vos fichiers, puis déployer et mesurer.</strong>{' '}
              Le calendrier se fixe au cadrage, car un diagnostic pour une équipe de trois personnes ne suit pas le rythme d'un groupe présent sur trois continents.
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: BORDER }} />
            {METHODO.map((m, i) => (
              <div key={i} style={{
                display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative',
                padding: i === 0 ? '0 0 18px' : (i === METHODO.length - 1 ? '18px 0 0' : '18px 0'),
              }}>
                <div aria-hidden="true" style={{
                  width: 44, height: 44, borderRadius: 99, background: BLUE_SOFT,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  position: 'relative', zIndex: 1,
                  fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: BLUE,
                }}>
                  {m.n}
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 8 }}>
                    <h3 style={{
                      fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800,
                      color: INK, margin: 0, letterSpacing: '-0.01em',
                    }}>
                      {m.title}
                    </h3>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      fontSize: 12.5, fontWeight: 600, color: GREY_700,
                      background: BG_SOFT, border: `1px solid ${BORDER}`,
                      padding: '4px 12px', borderRadius: 99,
                    }}>
                      <CheckCircle2 size={13} color={BLUE} strokeWidth={2.2} aria-hidden="true" /> {m.livrable}
                    </span>
                  </div>
                  <p style={{ fontSize: 14.5, color: GREY_700, lineHeight: 1.7, margin: 0, maxWidth: 700 }}>
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARATIF cabinet / ESN / freelance (ancre sombre, pivot preuve) */}
      <section style={{ position: 'relative', background: '#0A0F1E', padding: SECTION_PAD, overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: BLUE }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Bien choisir son partenaire</div>
          <h2 id="choisir" style={{ ...h2Style, scrollMarginTop: 96, color: '#F8FAFC' }}>
            Cabinet de conseil IA, ESN généraliste ou freelance&nbsp;: que choisir&nbsp;?
          </h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${BLUE}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Le bon partenaire dépend de la question posée. Un cabinet spécialisé en IA décide avec vous quoi faire et dans quel ordre, puis rend vos équipes autonomes&nbsp;; une ESN généraliste apporte des bras sur un projet long&nbsp;; un freelance règle un problème précis, déjà bien délimité.</strong>{' '}
            Quand plusieurs services sont concernés et que le choix d'un outil engage des licences pour tout le personnel, le cabinet spécialisé évite de bâtir sur la mauvaise priorité.
          </p>

          <div style={{ overflowX: 'auto', border: '1px solid #1E293B', borderRadius: 16 }}>
            <table aria-label="Comparatif entre un cabinet de conseil IA spécialisé, une ESN généraliste et un freelance IA" style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 760 }}>
              <thead>
                <tr>
                  {['Critère', 'Cabinet de conseil IA spécialisé', 'ESN généraliste', 'Freelance IA'].map((h, i) => (
                    <th key={i} scope="col" style={{
                      background: i === 1 ? 'rgba(37,99,235,0.12)' : 'rgba(255,255,255,0.05)', textAlign: 'left',
                      padding: '14px 18px', borderBottom: '1px solid #1E293B',
                      fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 13.5,
                      color: i === 1 ? '#60A5FA' : '#E2E8F0', whiteSpace: 'nowrap',
                    }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARATIF.map((row, i) => {
                  const cell = {
                    padding: '16px 18px',
                    borderTop: i === 0 ? 'none' : '1px solid #1E293B',
                    color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top',
                  }
                  return (
                    <tr key={i}>
                      <th scope="row" style={{
                        ...cell, textAlign: 'left',
                        fontFamily: 'Nunito, sans-serif', fontWeight: 700,
                        color: '#F8FAFC', fontSize: 13.5, whiteSpace: 'nowrap',
                      }}>
                        {row.critere}
                      </th>
                      <td style={{ ...cell, color: '#fff', fontWeight: 500, background: 'rgba(37,99,235,0.10)' }}>{row.cabinet}</td>
                      <td style={cell}>{row.esn}</td>
                      <td style={cell}>{row.freelance}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 13.5, color: '#B4C0D3', lineHeight: 1.65, marginTop: 16, marginBottom: 0 }}>
            Masteria complète ce modèle de cabinet par ses propres développeurs, qui construisent ce qui a été recommandé, et par sa certification Qualiopi, qui rend la formation des utilisateurs éligible au financement de votre OPCO.
          </p>
        </div>
      </section>

      {/* POUR QUI */}
      <section style={{ background: '#fff', padding: SECTION_PAD }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={kickerStyle}>Pour qui</div>
            <h2 style={{ ...h2Style, marginBottom: 18 }}>
              À qui s'adresse notre cabinet de conseil IA&nbsp;?
            </h2>
            <p style={{ fontSize: 16, color: GREY_700, maxWidth: 740, margin: '0 auto', lineHeight: 1.7 }}>
              <strong style={{ color: INK }}>Nos missions de conseil vont d'une équipe de trois personnes à un groupe industriel de plusieurs milliers de salariés, avec la même méthode et un format ajusté à chaque taille.</strong>{' '}
              Un distributeur photovoltaïque, une filiale de distribution informatique, un cabinet de conseil financier et un groupe international du packaging figurent parmi nos études de cas.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 24,
          }}>
            {POUR_QUI.map((p, i) => (
              <div key={i} style={{ ...cardStyle, padding: 28 }}>
                <div style={{ ...iconTileStyle, marginBottom: 18 }}>
                  <p.Icon size={22} color={BLUE} strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: INK, marginBottom: 10, letterSpacing: '-0.01em' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 14, color: GREY_700, lineHeight: 1.7, margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFÉRENCIATEURS */}
      <section style={{ background: BG_SOFT, padding: SECTION_PAD, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={kickerStyle}>Notre différence</div>
            <h2 style={{ ...h2Style, marginBottom: 18 }}>
              Pourquoi Masteria&nbsp;?
            </h2>
            <p style={{ fontSize: 16, color: GREY_700, maxWidth: 740, margin: '0 auto', lineHeight: 1.7 }}>
              <strong style={{ color: INK }}>Masteria réunit sous un même pilotage trois métiers que les entreprises achètent d'ordinaire séparément&nbsp;: le conseil, le développement et la formation.</strong>{' '}
              Mathias Nizan pilote chaque mission, et les consultants, développeurs et formateurs du réseau interviennent selon le projet.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 24,
          }}>
            {DIFFERENCIATEURS.map((d, i) => (
              <div key={i} style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${BLUE}` }}>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: INK, marginBottom: 8, letterSpacing: '-0.01em' }}>
                  {d.title}
                </h3>
                <p style={{ fontSize: 13.5, color: GREY_700, lineHeight: 1.7, margin: 0 }}>
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENU ÉDITORIAL : densité SEO sur "conseil IA entreprise" (éditorial asymétrique) */}
      <section style={{ background: '#fff', padding: SECTION_PAD }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>Comprendre l'enjeu</div>
              <h2 id="pourquoi" style={{ ...h2Style, scrollMarginTop: 96, marginBottom: 18 }}>
                Pourquoi recourir à un cabinet de conseil en intelligence artificielle&nbsp;?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: 0 }}>
                <strong style={{ color: INK }}>Faire appel à un cabinet spécialisé sert à décider où investir avant de dépenser, à poser les règles d'usage qu'exigent les textes européens sur les données et sur l'IA, et à mesurer ce que rapporte chaque outil. Indépendant des éditeurs, le cabinet compare les solutions sans avoir intérêt à vendre l'une plutôt que l'autre.</strong>
              </p>
            </div>

            <div style={{ color: GREY_700, fontSize: 16, lineHeight: 1.75 }}>
              <p style={{ marginTop: 0, marginBottom: 20 }}>
                Les grands assistants (ChatGPT, Claude, Gemini, Microsoft Copilot, Vibe de Mistral AI) sont à la portée de toutes les entreprises. Un siège ChatGPT Business affiche 21 € par mois en France, Microsoft Copilot Business 18,20 € HT en engagement annuel (grilles relevées début octobre 2026), et Gemini fait partie des forfaits Google Workspace. L'abonnement n'est donc plus l'obstacle. Ce qui manque presque partout, c'est la place de l'outil dans le travail&nbsp;: quelle tâche, quelles données, qui relit. Une mission de conseil répond à ces trois questions avant de <Link to="/ia-generative-entreprise" style={linkStyle}>déployer l'IA générative dans toute l'entreprise</Link>.
              </p>

              <h3 style={h3EditorialStyle}>
                L'IA est entrée dans vos bureaux avant toute règle
              </h3>
              <p style={{ marginBottom: 20 }}>
                Selon le Baromètre du numérique 2026 du Crédoc, 48 % des personnes de 12 ans et plus utilisaient l'IA générative en juin 2025, contre 20 % en 2023. Une bonne partie de vos collaborateurs a donc déjà ses habitudes&nbsp;: comptes personnels, documents clients collés dans des outils que personne n'administre, autant de méthodes que de personnes. Un audit remet de l'ordre. Il recense ces usages, classe les tâches candidates d'après les heures qu'elles mobilisent, leur faisabilité et leur risque (données personnelles, secret des affaires, AI Act), puis propose une trajectoire que <strong style={{ color: INK }}>la direction arbitre en connaissant les coûts</strong>.
              </p>

              <h3 style={h3EditorialStyle}>
                Ce que l'AI Act demande à une entreprise qui utilise l'IA, au 7 octobre 2026
              </h3>
              <p style={{ marginBottom: 20 }}>
                Le règlement (UE) 2024/1689, ou AI Act, en vigueur depuis le 1er août 2024, s'applique morceau par morceau. Son article 4 a pris effet le 2 février 2025, et l'Omnibus l'a réécrit en juillet 2026. Il attend désormais des entreprises qu'elles agissent pour faire progresser la culture IA de leurs équipes et des personnes qui utilisent ces outils pour leur compte. Aucun seuil individuel ni certificat n'est requis&nbsp;; garder trace des formations suivies dans un registre interne suffit. L'article 50 produit ses effets depuis le 2 août 2026 et oblige à prévenir le public qu'il converse avec un assistant automatique, ou qu'un contenu diffusé sort d'une IA. Les obligations qui visent les systèmes classés à haut risque par l'annexe III, par exemple le tri automatisé de candidatures, attendront décembre 2027&nbsp;: l'Omnibus sur l'IA, règlement (UE) 2026/1744, les a reportées. Rédiger un mail avec Copilot relève du risque minimal et n'entraîne aucune obligation propre à l'AI Act&nbsp;; le RGPD, lui, s'applique dès qu'une donnée personnelle passe dans l'outil. Nos missions posent donc <strong style={{ color: INK }}>une charte d'usage, la liste des données exclues, un référent et une relecture humaine</strong> des contenus envoyés à l'extérieur. Le détail figure sur notre page <Link to="/gouvernance-ia" style={linkStyle}>gouvernance de l'IA et conformité à l'AI Act</Link>.
              </p>

              <h3 style={h3EditorialStyle}>
                Le même responsable, de la recommandation à l'outil utilisé
              </h3>
              <p style={{ marginBottom: 20 }}>
                Quand une mission de conseil s'arrête à la remise du rapport, le chantier repart chez un intégrateur qui n'a assisté à aucun entretien, et une partie du besoin se perd en route. Chez Masteria, les développeurs de notre <Link to="/agence-developpement-ia" style={linkStyle}>agence de développement IA</Link> construisent les outils retenus, puis les formateurs du réseau forment ceux qui s'en servent, du comité de direction (avec la <Link to="/formation-ia-dirigeants" style={linkStyle}>formation IA pour dirigeants</Link>) aux équipes de terrain. <strong style={{ color: INK }}>Le consultant qui a mené le diagnostic reste présent jusqu'au bilan.</strong> Conseil et développement se facturent au forfait&nbsp;; votre OPCO ne peut financer que la formation.
              </p>

              <h3 style={h3EditorialStyle}>
                Choisir un modèle sans s'enfermer chez un éditeur
              </h3>
              <p style={{ marginBottom: 20 }}>
                L'offre bouge tous les mois. OpenAI, Anthropic, Google et Microsoft proposent des modèles propriétaires, accessibles seulement par leurs services&nbsp;; Mistral AI diffuse en plus des modèles à poids ouverts, que l'on peut installer sur ses propres machines&nbsp;; et chaque offre a ses règles d'hébergement des données. Le bon choix dépend de vos logiciels (Microsoft 365, Google Workspace, ERP, CRM), de la sensibilité de vos dossiers et du coût par utilisateur. Nous pesons ces critères <strong style={{ color: INK }}>sans préférence de marque</strong>. Quand la décision mène à un développement, nos développeurs écrivent les <Link to="/outils-ia-sur-mesure" style={linkStyle}>outils IA sur mesure</Link>&nbsp;; pour les tâches répétitives, notre <Link to="/agence-automatisation-ia" style={linkStyle}>agence d'automatisation IA</Link> monte les flux. Le consultant vérifie que ce qui est livré correspond à ce qui a été décidé.
              </p>

              <h3 style={h3EditorialStyle}>
                Quels résultats une mission de conseil IA doit-elle laisser&nbsp;?
              </h3>
              <p style={{ marginBottom: 20 }}>
                Une mission réussie laisse trois traces que l'on peut vérifier&nbsp;: des outils en service sur les tâches choisies, des personnes capables de les utiliser et de les faire évoluer, des indicateurs suivis par la direction. Les objectifs s'écrivent par tâche avant la formation (délai pour chiffrer une demande de prix, heures consacrées aux transporteurs, ressaisies évitées), la situation initiale se chiffre pendant la séance et le bilan arrive un mois plus tard. Les <a href="#etudes-de-cas" style={linkStyle}>quatre missions présentées plus bas</a> montrent ce déroulé, d'une équipe de trois personnes à un industriel de plusieurs milliers de salariés.
              </p>

              <p style={{ marginBottom: 0 }}>
                Plusieurs portes d'entrée existent selon votre situation. Le <Link to="/diagnostic-ia" style={linkStyle}>diagnostic IA</Link> donne une première lecture, courte, de votre maturité et de vos premiers chantiers. L'<Link to="/audit-ia" style={linkStyle}>audit IA complet</Link> s'adresse à la direction qui veut tout examiner avant d'investir&nbsp;: données, conformité, feuille de route chiffrée. L'<Link to="/accompagnement-ia" style={linkStyle}>accompagnement IA dans la durée</Link> suit le déploiement jusqu'aux habitudes prises, avec l'<Link to="/acculturation-ia" style={linkStyle}>acculturation des équipes</Link>. Pour les décisions de comité de direction, le <Link to="/conseil-strategie-ia" style={linkStyle}>conseil en stratégie IA</Link> produit une feuille de route que l'on peut arbitrer. Côté données, le <Link to="/conseil-data-ia" style={linkStyle}>conseil data et IA</Link> ne prépare que ce que vos cas d'usage exigent. Pour estimer un budget, partez des fourchettes de notre page <Link to="/prix-projet-ia" style={linkStyle}>prix d'un projet IA</Link>. Pour comparer les prestataires, lisez nos guides des <Link to="/prestataire-ia" style={linkStyle}>familles de prestataires IA</Link>, du <Link to="/meilleur-cabinet-conseil-ia" style={linkStyle}>meilleur cabinet de conseil IA</Link> et de la <Link to="/meilleure-agence-ia" style={linkStyle}>meilleure agence IA</Link>. Enfin, les <Link to="/ia-secteurs" style={linkStyle}>usages de l'IA classés par secteur</Link> donnent des exemples propres à votre métier.
              </p>

              <p style={{ marginBottom: 0, fontStyle: 'italic', color: GREY_700, borderLeft: `3px solid ${BLUE}`, paddingLeft: 16, marginTop: 32 }}>
                Un projet se dessine dans votre entreprise&nbsp;? <Link to="/contact?type=projet&rdv=30" style={linkStyle}>Réservez 30 minutes de cadrage</Link>&nbsp;: nous regarderons ensemble la tâche à outiller en premier et la porte d'entrée qui vous convient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REPÈRES, DÉFINITIONS & SOURCES (SEO + GEO) */}
      <section style={{ background: BG_SOFT, padding: SECTION_PAD, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <div style={kickerStyle}>Repères du marché</div>
          <h2 id="chiffres" style={{ ...h2Style, scrollMarginTop: 96 }}>
            Quatre repères datés pour situer un projet d'IA en octobre 2026
          </h2>
          <p style={{ fontSize: 16, color: GREY_700, lineHeight: 1.75, maxWidth: 820, marginBottom: 32 }}>
            <strong style={{ color: INK }}>Les outils se sont répandus plus vite que les règles qui les encadrent.</strong>{' '}
            Ces quatre repères, vérifiés à la source, servent à poser le sujet devant un comité de direction&nbsp;: l'ampleur des usages d'un côté, le calendrier européen de l'autre.
          </p>

          {/* Repères chiffrés sourcés */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 18, marginBottom: 40 }}>
            {MARKET_STATS.map((s, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24 }}>
                <div style={{ ...iconTileStyle, marginBottom: 14 }}>
                  <s.Icon size={22} color={BLUE} strokeWidth={2} aria-hidden="true" />
                </div>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 26, fontWeight: 900, color: INK, lineHeight: 1.1, marginBottom: 8, letterSpacing: '-0.02em' }}>{s.stat}</div>
                <p style={{ fontSize: 13.5, color: GREY_700, lineHeight: 1.6, margin: '0 0 10px' }}>{s.label}</p>
                <p style={{ fontSize: 12, color: GREY_500, margin: 0, fontWeight: 600 }}>Source&nbsp;: {s.source}</p>
              </div>
            ))}
          </div>

          {/* Définitions clés */}
          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: INK, letterSpacing: '-0.01em', margin: '0 0 18px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <BookOpen size={20} color={BLUE} strokeWidth={2.2} aria-hidden="true" /> Cinq termes à connaître avant une mission
          </h3>
          <dl style={{ margin: 0, display: 'grid', gap: 16 }}>
            {GLOSSARY.map((g, i) => (
              <div key={i} style={{ borderLeft: `3px solid ${BLUE_SOFT}`, paddingLeft: 16 }}>
                <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: INK, marginBottom: 4 }}>{g.term}</dt>
                <dd style={{ margin: 0, fontSize: 14.5, color: GREY_700, lineHeight: 1.65 }}>{g.def}</dd>
              </div>
            ))}
          </dl>

          {/* Sources de référence */}
          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: INK, letterSpacing: '-0.01em', margin: '44px 0 16px' }}>
            Où vérifier ces repères
          </h3>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
            {REFERENCES.map((r, i) => (
              <li key={i}>
                <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: BLUE, fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 14.5 }}>
                  <ExternalLink size={15} strokeWidth={2.2} aria-hidden="true" /> {r.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── ÉTUDES DE CAS : ce que chaque mission montre du métier de conseil ── */}
      <section id="etudes-de-cas" style={{ scrollMarginTop: 96, padding: 'clamp(64px, 9vw, 110px) 24px', background: '#fff', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={{ ...kickerStyle, fontFamily: 'Nunito, sans-serif', fontSize: 12.5 }}>Études de cas</div>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: INK, margin: '0 0 18px', lineHeight: 1.25, letterSpacing: '-0.01em', maxWidth: 880 }}>
            Ce que quatre missions apprennent sur le métier de conseil
          </h2>
          <p style={{ fontSize: 15.5, color: GREY_700, lineHeight: 1.75, margin: '0 0 28px', maxWidth: 820 }}>
            Chaque carte retient une leçon de méthode, illustrée par les faits d'une mission. Les entreprises ne sont pas nommées, à leur demande&nbsp;; secteur, taille et chiffres proviennent des dossiers de mission.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 20 }}>
            {CASE_LESSONS.map(k => (
              <article key={k.id} style={{ ...cardStyle, borderTop: `3px solid ${BLUE}`, padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span aria-hidden="true" style={{ width: 36, height: 36, borderRadius: 10, background: BLUE_SOFT, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <k.Icon size={18} strokeWidth={2.2} style={{ color: BLUE }} />
                  </span>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: BLUE, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{k.label}</span>
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: INK, margin: 0, lineHeight: 1.3, letterSpacing: '-0.01em' }}>{k.title}</h3>
                <p style={{ fontSize: 14.5, color: GREY_700, lineHeight: 1.7, margin: 0, flex: 1 }}>{k.text}</p>
                <Link to={`/etudes-de-cas-ia#${k.id}`} style={{ fontSize: 13.5, color: BLUE, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none', marginTop: 4 }}>
                  Lire ce cas en entier
                  <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
          <p style={{ fontSize: 14, color: GREY_500, lineHeight: 1.7, margin: '24px 0 0', maxWidth: 880 }}>
            Chaque mission est racontée en entier, méthode et résultats compris, sur notre page <Link to="/etudes-de-cas-ia" style={{ color: BLUE, fontWeight: 600 }}>études de cas IA</Link>. Si vous souhaitez échanger avec l'un de ces clients, nous pouvons organiser un appel confidentiel.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={FAQ_CONSEIL} title="Vos questions sur le conseil en IA, et nos réponses" bg="#F9FAFB" />

      {/* FORMATION : offre secondaire, pour ancrer les usages */}
      <section style={{ background: '#fff', padding: '56px clamp(20px, 4vw, 32px)' }}>
        <div style={{
          maxWidth: 1120, margin: '0 auto',
          background: BG_SOFT, border: `1px solid ${BORDER}`, borderRadius: 16,
          padding: 'clamp(28px, 4vw, 40px)',
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24,
        }}>
          <div style={{ flex: '1 1 420px' }}>
            <div style={kickerStyle}>Pour ancrer les usages</div>
            <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)', marginBottom: 10 }}>
              Et la formation des équipes&nbsp;?
            </h2>
            <p style={{ fontSize: 15, color: GREY_700, lineHeight: 1.7, margin: 0, maxWidth: 680 }}>
              Un outil ne sert que si chacun sait quand s'y fier et quand le contredire. Nous formons soit un groupe de votre entreprise, jusqu'à 12 participants, soit une personne seule&nbsp;; chaque journée est à 1 980 € HT, et un financement par l'OPCO dont vous dépendez reste possible, selon ses règles et ses fonds. Plus de 100 programmes figurent au catalogue, et nous les adaptons aux outils déployés pendant la mission.
            </p>
          </div>
          <Link to="/formation-intelligence-artificielle" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fff', color: INK, border: `1px solid ${BORDER}`,
            padding: '14px 24px', borderRadius: 12,
            textDecoration: 'none', fontSize: 14.5, fontWeight: 700, whiteSpace: 'nowrap',
          }}>
            Voir les formations IA <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ── E-E-A-T : qui intervient (fondateur + réseau d'indépendants) ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Qui intervient</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Une équipe composée pour chaque mission, pilotée par son fondateur
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Masteria est l'entreprise individuelle de Mathias Nizan, créée à Lyon en 2022 pour ne traiter que d'intelligence artificielle. Pour chaque mission, il réunit les profils utiles dans un réseau d'indépendants (consultants, développeurs, formateurs) et reste votre interlocuteur du cadrage au bilan, pour un site lyonnais comme pour une filiale européenne ou des équipes installées en Inde ou aux États-Unis. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link>, où figure un article des Échos, montrent ce travail de près.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {TEAM_STATS.map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{k}</div>
                <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 4 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE du fondateur, propre à cette page */}
      <section style={{ background: '#fff', padding: 'clamp(40px, 6vw, 56px) 24px 0' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', borderLeft: `3px solid ${BLUE}`, paddingLeft: 20 }}>
          <p style={{ fontSize: 16.5, color: INK, lineHeight: 1.7, margin: '0 0 10px' }}>
            Je pilote moi-même chaque mission de conseil, du premier entretien au bilan à un mois. Si vous hésitez sur la première tâche à confier à l'IA, apportez-la à nos 30 minutes de cadrage&nbsp;: c'est par elle que nous commencerons.
          </p>
          <p style={{ fontSize: 14, color: GREY_500, margin: 0 }}>
            <Link to="/mathias-nizan" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>Mathias Nizan</Link>, fondateur de Masteria
          </p>
        </div>
      </section>

      {/* CTA FINAL (charte sombre unique #0A0F1E) */}
      <section style={{ background: '#fff', padding: SECTION_PAD }}>
        <div style={{
          position: 'relative', overflow: 'hidden',
          maxWidth: 1120, margin: '0 auto',
          background: '#0A0F1E', color: '#fff',
          borderRadius: 16,
          padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)',
          textAlign: 'center',
        }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: BLUE }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <h2 style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(28px, 3.6vw, 44px)', fontWeight: 900,
              lineHeight: 1.15, letterSpacing: '-0.02em',
              marginBottom: 18, color: '#fff',
            }}>
              Quelle tâche confierez-vous à l'IA en premier&nbsp;?
            </h2>
            <p style={{ fontSize: 16, color: '#CBD5E1', lineHeight: 1.7, maxWidth: 640, margin: '0 auto 36px' }}>
              Décrivez-la pendant 30 minutes de cadrage offertes. Vous repartez avec une première lecture du chantier, la porte d'entrée adaptée (diagnostic, audit, outil sur mesure ou formation) et, à votre demande, une proposition chiffrée.
            </p>
            <Link to="/contact?type=projet&rdv=30" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: BLUE, color: '#fff',
              padding: '16px 32px', borderRadius: 12,
              textDecoration: 'none', fontSize: 15, fontWeight: 800,
            }}>
              Réserver 30 minutes de cadrage <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', marginTop: 24, marginBottom: 0 }}>
              Conseil, développement et formation en IA, depuis Lyon, pour la France, l'Europe, les États-Unis et l'Inde
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

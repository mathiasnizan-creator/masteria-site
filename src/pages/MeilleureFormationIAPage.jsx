import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, GraduationCap, ShieldCheck, Target, AlertTriangle, BookOpen } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page « Meilleure formation IA » : guide de choix 2026, angle TRANSMETTRE.
 * Thèse de la page (valeur réelle + positionnement) : la plupart des formations
 * IA se terminent sans rien changer au travail réel, faute de cadre, de contenu
 * sur mesure ou de suivi après la session. La meilleure formation IA est celle
 * qui réunit les trois : le cadre (Qualiopi, financement), le contenu (construit
 * sur le poste réel), le suivi (ancrage de la pratique). Masteria tient les
 * trois. Troisième volet du trio avec /meilleur-cabinet-conseil-ia (penser) et
 * /meilleure-agence-ia (construire) ; distincte du catalogue
 * /formation-intelligence-artificielle (offre, non superlatif). Intégrité :
 * aucun classement nominatif, aucun chiffre ni cas client inventé. Accent bleu
 * #2563EB. Comparatif d'acteurs réels du marché à faire valider par Mathias
 * avant mise en prod (exactitude des noms).
 */

const SITE = 'https://www.master-ia.fr'
const SLUG = 'meilleure-formation-ia'
const FULL_URL = `${SITE}/${SLUG}`
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = 'Meilleure formation IA : comment choisir en 2026 | Masteria'
const META_DESC = "Meilleure formation IA en 2026 : trois exigences à vérifier, le panorama des organismes, les tarifs par format et une méthode pour choisir en une semaine."
const KEYWORDS = 'meilleure formation ia, meilleures formations ia, meilleure formation intelligence artificielle, formation ia entreprise, organisme de formation ia, formation ia qualiopi, formation ia opco, comparatif formation ia, formation ia lyon'

/* ── Design system local (aligné sur les pages money) ── */
const SECTION_PAD = 'clamp(64px, 9vw, 110px) 24px'
const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.01em', lineHeight: 1.2, margin: '0 0 18px' }
const leadStyle = { fontSize: 'clamp(16.5px, 2vw, 18px)', color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }
const answerStyle = { fontSize: 16, color: '#374151', lineHeight: 1.75, margin: '0 0 14px', maxWidth: 780 }
const mutedStyle = { fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 40px', maxWidth: 740 }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 28 }
const iconBoxStyle = { width: 44, height: 44, background: cLight, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }
const tableWrapStyle = { overflowX: 'auto', background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const thStyle = { background: '#F9FAFB', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #E5E7EB', whiteSpace: 'nowrap' }
const srOnlyStyle = { position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' }

/* Les trois exigences : le cœur de la page (valeur + positionnement) */
const PILLARS = [
  {
    icon: ShieldCheck,
    tag: 'Le cadre',
    title: 'Qualiopi ouvre le financement et laisse le contenu hors de son audit',
    body: "Qualiopi est la certification qualité que l'État exige d'un organisme pour que votre OPCO, ou le budget formation de l'entreprise passé par le plan de compétences, paie la session. Un certificateur accrédité la délivre après avoir audité des procédures : la façon de recueillir vos besoins, de choisir les formateurs, d'évaluer les acquis, de traiter une réclamation. L'auditeur n'assiste à aucune séance et ne note pas la pédagogie. Un organisme certifié peut donc animer une journée médiocre, et un organisme sans certificat une excellente journée que vous paierez seul. Le certificat conditionne l'accès aux fonds ; la valeur de la session se vérifie avec d'autres questions.",
    masteria: "Chez Masteria : organisme certifié Qualiopi au titre des actions de formation. L'OPCO de votre branche peut prendre la session en charge si ses règles et ses fonds le permettent, et chaque session commence par un recueil écrit de vos besoins.",
  },
  {
    icon: Target,
    tag: 'Le contenu',
    title: "Le programme part des dossiers que l'équipe traite cette semaine",
    body: "Un programme générique montre ce que sait faire un assistant IA. Un programme utile montre à une assistante comment préparer le prochain comité de direction, ou à un contrôleur de gestion comment commenter l'écart budgétaire du mois. L'écart se mesure au retour au poste. Quand l'exercice portait sur un dossier du participant, le geste est déjà rodé et il le refait le lundi. Quand il portait sur un exemple de démonstration, il faut tout transposer à son métier, et la plupart des gens ne le font jamais.",
    masteria: "Chez Masteria : un questionnaire de positionnement avant la session, des ateliers bâtis sur les documents et les outils de vos équipes, et un formateur qui se sert de ces outils dans son propre métier.",
  },
  {
    icon: GraduationCap,
    tag: 'Le suivi',
    title: 'Le mois qui suit la session décide de ce qui reste',
    body: "Après une bonne journée, l'élan tient quelques jours. Les vieilles habitudes reprennent ensuite leur place, faute d'un rendez-vous qui oblige à rouvrir l'outil. Un organisme sérieux fixe ce rendez-vous dans le devis : un point un mois plus tard, des supports que l'on rouvre sans le formateur, une adresse où envoyer la question qui bloque sur un cas précis. Sans ce point, personne ne sait si la formation a servi.",
    masteria: "Chez Masteria : prompts, gabarits et supports consultables après la session, puis un point à J+30 sur les indicateurs relevés pendant la formation.",
  },
]

/* Paysage des organismes : qui couvre laquelle des trois exigences (meter 3 niveaux) */
const LANDSCAPE = [
  { type: 'MOOC et plateforme e-learning', cadre: 1, contenu: 1, suivi: 1, when: 'Découvrir seul, à budget minimal, sans contrainte de calendrier.' },
  { type: 'Bootcamp reconversion data / IA', cadre: 2, contenu: 1, suivi: 2, when: 'Changer complètement de métier vers la data ou le développement.' },
  { type: 'Executive education (grande école)', cadre: 2, contenu: 2, suivi: 1, when: "Donner à un comité de direction une vision stratégique de l'IA." },
  { type: 'Organisme généraliste multi-thématique', cadre: 3, contenu: 1, suivi: 1, when: 'Ajouter un module IA à un catalogue déjà référencé chez un grand compte.' },
  { type: 'Organisme spécialisé IA en entreprise', cadre: 3, contenu: 3, suivi: 3, highlight: true, when: 'Faire changer une pratique métier dès la semaine suivant la session.' },
]

/* Comparatif factuel d'acteurs du marché (panorama, PAS un classement). Neutre,
 * descriptif, sans jugement de valeur : conforme au cadre de la publicité comparative
 * et au parti pris d'intégrité (aucune note, aucune hiérarchie). À valider avant prod. */
const MARKET_ACTORS = [
  { cat: 'MOOC et plateformes e-learning', names: 'OpenClassrooms, Coursera, LinkedIn Learning', best: 'Modules de découverte à bas coût, grands catalogues accessibles seul.', fit: 'Sensibilisation individuelle, budget serré.' },
  { cat: 'Bootcamps reconversion data / IA', names: 'Jedha, DataScientest, Le Wagon', best: 'Parcours longs et certifiants vers un métier data, IA ou développement.', fit: 'Reconversion professionnelle complète.' },
  { cat: 'Executive education (grandes écoles)', names: 'HEC Executive Education, CentraleSupélec Exed, Mines Paris PSL Executive Education', best: "Lecture stratégique de l'IA destinée aux comités de direction, réseau académique.", fit: 'Programmes dirigeants, budgets de formation cadre.' },
  { cat: 'Organismes de formation généralistes', names: 'Cegos, Orsys, M2i, Comundi', best: 'Larges catalogues multi-thématiques incluant des modules IA, logistique inter-entreprise rodée.', fit: 'Grands comptes avec un fournisseur déjà référencé.' },
  { cat: 'Organismes spécialisés IA en entreprise', names: "Organismes indépendants centrés sur l'IA au travail, dont Masteria", best: 'Recueil des besoins, ateliers taillés pour chaque métier, formateur en activité, point de suivi après la session.', fit: 'PME, ETI et directions métier qui veulent voir une pratique changer.' },
]

/* Les 4 étapes pour choisir, du cadrage à la décision. Section à valeur ajoutée
 * (méthode concrète) qui répond à la thèse de la page. */
const PROCESS = [
  { step: 'Cadrer le besoin', goal: "Identifier le métier ou l'équipe à former et ce que « ça a marché » voudrait dire trois mois après.", deliver: "La liste des situations de travail à couvrir, remontée par les équipes elles-mêmes.", duration: '2 à 3 jours', watch: "Un programme écrit avec la seule direction, sans entendre les personnes à former, manque presque toujours sa cible." },
  { step: 'Présélectionner 2 à 3 organismes', goal: "Situer votre besoin dans l'une des cinq familles d'organismes, puis contacter deux ou trois acteurs de celle-ci.", deliver: 'Une courte liste argumentée, avec pour chaque organisme un programme reçu et un formateur désigné par son nom.', duration: '1 semaine', watch: 'Un organisme qui refuse de nommer le formateur avant la signature mérite une question de plus.' },
  { step: 'Demander des preuves vérifiables', goal: "Contrôler ce que l'organisme avance : certificat Qualiopi en cours de validité, client joignable dans un secteur proche, exemple de supports remis à la fin d'une session.", deliver: 'Un certificat Qualiopi consulté, un client de référence appelé.', duration: '2 à 3 jours', watch: "Une plaquette commerciale ne remplace jamais un exemple déjà livré à une entreprise comparable." },
  { step: 'Décider et prévoir le suivi', goal: "Signer en inscrivant dans le devis un point à un mois, qui vérifie ce que l'équipe a vraiment repris.", deliver: "Convention de formation, programme détaillé, date du point de suivi fixée d'avance.", duration: '1 à 2 jours', watch: "Un devis muet sur l'après-formation laisse vos équipes seules face au travail d'adoption." },
]

const BUDGETS = [
  { mission: 'MOOC ou plateforme e-learning (par mois)', range: 'Gratuit à 50 €', note: 'Accès à un catalogue de vidéos, formateur non inclus.' },
  { mission: 'Bootcamp reconversion data / IA (parcours complet)', range: '3 000 à 8 000 €', note: 'Par personne, sur plusieurs semaines ; le CPF peut entrer en jeu quand le parcours débouche sur un titre enregistré au RNCP.' },
  { mission: 'Executive education dirigeants (programme court)', range: '3 000 à 12 000 €', note: 'Par personne, sur 2 à 5 jours, selon la grande école.' },
  { mission: 'Organisme généraliste, module IA (par jour, inter-entreprise)', range: '400 à 1 200 €', note: 'Par personne, catalogue multi-thématique.' },
  { mission: "Formation intra Masteria (une journée, jusqu'à 12 participants)", range: '1 980 € HT', note: "Prix de la journée pour tout le groupe, et deux journées pour 3 960 € HT. Votre OPCO de branche peut contribuer, à hauteur de ce que prévoient ses règles et ses fonds." },
  { mission: 'Formation individuelle Masteria (une journée)', range: '1 980 € HT', note: "Même prix qu'une journée en intra, avec un programme réglé sur le poste de la personne formée." },
]

/* ── Repères citables (GEO) : stats sourcées, glossaire d'entités, références ── */
const MARKET_STATS = [
  { value: '1er janvier 2022', label: "date depuis laquelle seuls les organismes titulaires de Qualiopi voient leurs formations payées par un OPCO ou par de l'argent public.", source: 'Ministère du Travail', url: 'https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation' },
  { value: '2 février 2025', label: "jour où l'article 4 du texte européen sur l'IA, adopté en 2024, a commencé à s'appliquer. Il vise la compréhension de l'IA chez les salariés des entreprises qui s'en servent.", source: 'EUR-Lex', url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=OJ:L_202401689' },
  { value: '27 juillet 2026', label: "date d'effet de l'Omnibus numérique, publié sous le numéro 2026/1744. Il récrit l'article 4 : chaque entreprise agit, par des moyens qu'elle choisit, pour faire progresser la culture IA de ses salariés, sans niveau ni certificat imposés.", source: 'EUR-Lex', url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
  { value: '25 mai 2018', label: "application du RGPD, qui s'impose dès qu'un participant colle des données personnelles dans un assistant IA, en formation comme au quotidien.", source: 'CNIL', url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
]

const GLOSSARY = [
  { term: 'Qualiopi', def: "Marque de certification qualité délivrée à un organisme de formation, jamais à un stagiaire. Un certificateur accrédité audite ses procédures selon un référentiel national. Le certificat précise les catégories d'actions couvertes (pour Masteria, les actions de formation) et donne accès aux fonds des OPCO et aux fonds publics." },
  { term: 'OPCO', def: "Sigle d'« opérateur de compétences ». Chaque OPCO, agréé par l'État, couvre une ou plusieurs branches professionnelles et finance des formations pour les entreprises de sa branche, selon ses propres règles et dans la limite de ses fonds, à condition que l'organisme retenu soit certifié Qualiopi." },
  { term: "Maîtrise de l'IA, au sens de l'article 4", def: "Savoir-faire et connaissances qui permettent de se servir d'un outil d'IA en mesurant ce qu'il fait bien et ce qu'il risque. La version de l'article 4 en vigueur au 27 juillet 2026 demande aux fournisseurs et aux entreprises utilisatrices d'agir pour la faire grandir chez leurs salariés. L'obligation porte sur les moyens ; aucun certificat n'est à produire." },
  { term: 'Formation intra-entreprise', def: "Session réservée aux salariés d'une seule entreprise, construite sur ses documents et ses outils. L'inter-entreprises réunit au contraire des personnes de plusieurs structures autour d'un programme commun ; Masteria n'en organise plus et forme en intra ou en individuel." },
]

const REFERENCES = [
  { label: 'Qualiopi, Ministère du Travail', url: 'https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation' },
  { label: 'Ministère du Travail : le rôle des OPCO', url: 'https://travail-emploi.gouv.fr/les-operateurs-de-competences-opco' },
  { label: 'Texte européen sur l’IA de 2024, version EUR-Lex', url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=OJ:L_202401689' },
  { label: 'Omnibus numérique de 2026, publié au Journal officiel de l’UE', url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
  { label: 'CNIL, dossier intelligence artificielle', url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
  { label: 'France Compétences, répertoires RNCP et RS', url: 'https://www.francecompetences.fr/' },
]

const FAQ = [
  {
    q: "À quoi reconnaît-on une bonne formation IA en entreprise ?",
    a: "À ce que les participants font autrement le mois suivant. Une bonne formation réunit trois conditions : un organisme certifié Qualiopi, pour que votre OPCO puisse la financer ; des exercices taillés dans les dossiers de l'équipe ; un rendez-vous de suivi fixé avant la session. Qu'une seule manque, et l'effet s'efface en quelques semaines.",
  },
  {
    q: 'Quelle est la meilleure formation IA en 2026 ?',
    a: "Personne ne décerne ce titre. Aucun organisme public ne classe les formations IA, et les palmarès qui circulent sur le web sont rédigés par les organismes eux-mêmes ou payés comme de la publicité. La meilleure formation pour vous est celle qui remplit les trois conditions sur votre métier. Retenez deux ou trois organismes de la bonne famille, puis demandez à chacun le nom du formateur et un exemple de supports remis à une équipe comparable.",
  },
  {
    q: 'Formation, cabinet de conseil ou agence IA : qui fait quoi ?',
    a: "La formation fait monter vos équipes en compétence sur les outils qu'elles utilisent. Le cabinet de conseil aide la direction à fixer ses priorités, ses règles et son calendrier. L'agence construit l'outil lui-même, par exemple un assistant relié à vos fichiers ou une automatisation. Beaucoup d'entreprises commencent par former, puis repèrent en séance ce qui mérite un outil sur mesure. Pour ces deux autres besoins, deux guides du site comparent les cabinets de conseil et les agences.",
  },
  {
    q: "Former ses salariés à l'IA est-il une obligation légale ?",
    a: "Oui, au sens d'une obligation de moyens. L'article 4 du texte européen sur l'intelligence artificielle traite de la compréhension de l'IA par les salariés depuis février 2025. L'Omnibus numérique l'a récrit, avec effet au 27 juillet 2026 : toute entreprise qui se sert d'outils d'IA doit agir pour que ses équipes les comprennent, sans résultat chiffré à atteindre. Le texte n'impose ni format ni certificat ; une formation adaptée aux postes, dont vous gardez la trace écrite, montre l'effort accompli.",
  },
  {
    q: 'Quel budget prévoir pour une formation IA ?',
    a: "Les fourchettes indicatives du marché français vont de la gratuité d'un MOOC à 3 000 à 12 000 € par personne pour un bootcamp de reconversion ou un programme dirigeants de grande école. Un module IA dans le catalogue d'un organisme généraliste se paie souvent quelques centaines d'euros par jour et par personne. Chez Masteria, la journée revient à 1 980 € HT, que la salle compte douze stagiaires ou un seul, et votre OPCO de branche décide de sa participation d'après ses règles et l'état de ses fonds.",
  },
  {
    q: 'Un MOOC gratuit suffit-il pour former une équipe ?',
    a: "Pour découvrir seul, à son rythme, oui. Pour changer la manière dont une équipe travaille, rarement : personne ne corrige vos demandes à l'assistant, et les exemples parlent d'un autre métier que le vôtre. Gardez le MOOC comme lecture préalable et réservez le temps d'un formateur aux cas de l'équipe.",
  },
  {
    q: 'Le compte personnel de formation (CPF) entre-t-il en jeu ?',
    a: "Seulement si la formation prépare un titre du RNCP ou une certification du Répertoire spécifique, tous deux tenus par France Compétences. Les formations courtes à l'usage des outils en ont rarement une ; les bootcamps longs de reconversion vers la data ou le développement, plus souvent. Si un organisme vous promet le CPF, cherchez le numéro de la certification sur le site de France Compétences avant de signer.",
  },
  {
    q: 'Intra ou individuel : quel format choisir ?',
    a: "Une session intra rassemble au plus douze collègues autour des dossiers de leur service et leur donne une méthode commune. Le format individuel sert le dirigeant, la personne seule sur sa fonction, ou le salarié pressé de travailler sur ses propres fichiers. Chez Masteria, le prix de la journée ne change pas d'un format à l'autre : 1 980 € HT.",
  },
  {
    q: "Combien de jours faut-il à une équipe pour prendre l'IA en main ?",
    a: "Une journée installe les bases sur un outil : une façon structurée de rédiger ses requêtes, les règles de confidentialité, quelques cas du métier traités de bout en bout. Deux jours donnent l'occasion de bâtir des assistants réutilisables ou de comparer plusieurs outils. Au-delà, espacez les journées de quelques semaines pour que chacun pratique entre deux sessions.",
  },
  {
    q: "Faut-il former toute l'entreprise d'un coup ?",
    a: "Un groupe pilote d'abord, presque toujours. Il révèle les besoins propres à votre organisation, produit les premiers exemples internes et forme des relais pour la suite. Chez un distributeur de matériel informatique de 58 salariés, dix référents ont été formés pendant deux jours, en juin 2026 ; ce sont eux qui formeront les quelque cinquante salariés restants, un déploiement programmé d'octobre à décembre 2026.",
  },
  {
    q: "Comment chiffrer ce qu'une formation IA a rapporté ?",
    a: "Choisissez avant la session deux ou trois indicateurs que l'équipe relève elle-même : le temps passé sur une tâche répétitive, le délai de réponse à un client, le nombre de personnes qui ouvrent encore l'outil chaque semaine. Relevez le point de départ en séance, puis la même mesure un mois plus tard. Le gain se lit d'abord en heures ; la direction peut ensuite le traduire en euros. Le calculateur de ROI de l'IA, sur ce site, aide à poser un ordre de grandeur avant de signer.",
  },
  {
    q: 'Un seul outil ou plusieurs dans la même formation ?',
    a: "Partez de l'outil déjà installé sur les postes. Si vos équipes vivent dans Microsoft 365 avec la licence Microsoft Copilot, ou dans Google Workspace, dont les éditions professionnelles intègrent Gemini, une formation centrée sur cet outil s'applique dès le lendemain. Si rien n'est décidé, une journée multi-outils confronte ChatGPT, Copilot, Gemini, Claude ainsi que Vibe, chez Mistral AI, à vos documents, et aide à trancher.",
  },
  {
    q: 'PME ou grand groupe : les critères changent-ils ?',
    a: "Les trois conditions restent les mêmes ; l'organisation change. Une PME a besoin d'un interlocuteur qui cadre vite et forme une petite équipe sur ses dossiers. Un grand groupe cherche un organisme capable d'animer plusieurs sessions en parallèle, dans plusieurs langues si besoin, au sein de son plan de formation et de ses règles de confidentialité. Masteria a formé les managers pilotes d'un industriel de l'emballage présent sur plusieurs continents en cinq sessions, de juillet à septembre 2026 ; deux de ces sessions se sont déroulées en anglais.",
  },
  {
    q: 'Peut-on se former à distance, ou faut-il venir à Lyon ?',
    a: "Les deux formats fonctionnent. Le présentiel aide quand l'équipe doit construire ensemble ; la visioconférence convient aux personnes réparties sur plusieurs sites et aux journées bien découpées. Masteria a son siège à Lyon et forme des équipes sur quatre zones, la France, le reste de l'Europe, les États-Unis et l'Inde, chez elles ou en visioconférence.",
  },
]

/* ───────── JSON-LD ───────── */

/* Course : représente l'offre de formation Masteria elle-même (contrairement aux
 * pages /meilleur-cabinet-conseil-ia et /meilleure-agence-ia, qui excluent courseData
 * : le conseil et le build ne sont pas des formations, celle-ci en est une). */
const courseData = {
  name: 'Formations IA en entreprise de Masteria',
  description: "Formation aux assistants d'IA générative (ChatGPT, Copilot, Gemini, Claude, Vibe), bâtie sur les tâches de chaque métier formé.",
  price: '1980',
  audience: 'Professionnels en entreprise',
  level: 'Tous niveaux',
  about: "Choix et usage des outils d'intelligence artificielle générative en entreprise",
}

const definedTermSetJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'Glossaire du financement et du choix d\'une formation IA',
  hasDefinedTerm: GLOSSARY.map(g => ({ '@type': 'DefinedTerm', name: g.term, description: g.def })),
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${FULL_URL}#article`,
  headline: 'Meilleure formation IA : comment choisir en 2026',
  description: META_DESC,
  author: { '@id': `${SITE}/#mathias-nizan` },
  editor: { '@id': `${SITE}/#mathias-nizan` },
  publisher: { '@id': `${SITE}/#organization` },
  datePublished: '2026-07-30',
  dateModified: '2026-10-07',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': `${FULL_URL}#webpage` },
  about: ['Formation IA en entreprise', 'Qualiopi', 'Financement de la formation professionnelle'],
  // GEO : passages lus/cités en priorité par les assistants vocaux et génératifs.
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
  citation: [
    'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=OJ:L_202401689',
    'https://eur-lex.europa.eu/eli/reg/2026/1744/oj',
    'https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation',
  ],
}

/* ItemList : séquence citable des 4 étapes (GEO). HowTo proscrit (Google l'a retiré). */
const processJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Les 4 étapes pour choisir une formation IA en entreprise',
  itemListElement: PROCESS.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.step, description: p.goal })),
}

function CoverMeter({ level, label }) {
  // level: 3 = maîtrisée, 2 = partielle, 1 = secondaire
  return (
    <span role="img" aria-label={`${label} : ${level === 3 ? 'maîtrisée' : level === 2 ? 'partielle' : 'secondaire'}`} style={{ display: 'inline-flex', gap: 4 }}>
      {[1, 2, 3].map(i => (
        <span key={i} aria-hidden="true" style={{ width: 9, height: 9, borderRadius: '50%', background: i <= level ? c : '#D1D5DB', display: 'inline-block' }} />
      ))}
    </span>
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
      <div aria-hidden={!open} style={{ maxHeight: open ? 1200 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, padding: '0 0 20px', margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

function SectionHeader({ icon: Icon, kicker, title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18, marginBottom: 18 }}>
      <div style={{ ...iconBoxStyle, marginTop: 4 }}>
        <Icon size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
      </div>
      <div>
        <div style={{ ...kickerStyle, marginBottom: 8 }}>{kicker}</div>
        <h2 style={{ ...h2Style, margin: 0 }}>{title}</h2>
      </div>
    </div>
  )
}

export default function MeilleureFormationIAPage() {
  const isDesktop = useIsDesktop()
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop ? { position: 'sticky', top: 130, alignSelf: 'start' } : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Formation IA en entreprise', slug: 'formation-intelligence-artificielle' },
    { name: 'Meilleure formation IA', slug: SLUG },
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
        courseData={courseData}
        extraJsonLd={[definedTermSetJsonLd, articleJsonLd, processJsonLd]}
        dateModified="2026-10-07"
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
            <Link to="/formation-intelligence-artificielle" style={{ color: '#94A3B8' }}>Formation IA en entreprise</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }} aria-current="page">Meilleure formation IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 22 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <GraduationCap size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Guide de choix · 2026
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.7vw, 48px)', fontWeight: 900, lineHeight: 1.06, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.03em', maxWidth: 860 }}>
            Meilleure formation IA en 2026
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>celle qui change votre pratique dès le lundi</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Guide écrit par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, qui dirige Masteria · mis à jour le 7 octobre 2026
          </p>

          {/* GEO : réponse directe citable, la thèse de la page */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 26px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Il existe des centaines de formations IA en France, et la plupart partagent le même angle mort : la session se termine, l'enthousiasme retombe, et le lundi suivant personne n'a changé sa façon de travailler. <strong style={{ color: '#fff', fontWeight: 700 }}>La meilleure formation IA se reconnaît à son effet sur le terrain, un changement de pratique mesurable</strong> sur le poste réel de chacun. Le nombre de modules et le prix n'en disent rien.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 34px', maxWidth: 680 }}>
            Ce guide pose les trois exigences à tenir, dresse un panorama des organismes du marché, donne les tarifs 2026 et propose une méthode pour trancher en une semaine. Les listes de « la meilleure formation intelligence artificielle » ou des « meilleures formations IA » qui circulent en ligne sont écrites par les organismes ou achetées comme de la publicité ; le panorama ci-dessous range les organismes par famille et n'en note aucun.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 40 }}>
            <a href="#exigences" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Les 3 exigences non négociables
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </a>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Parler de votre besoin
            </Link>
          </div>

          {/* En bref (GEO) : dl citable */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 14, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 760 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 16 }}>En bref</div>
            <dl style={{ margin: 0, display: 'grid', gap: 14 }}>
              {[
                ['Le critère qui compte', "Ce que les participants font autrement un mois après la session. La longueur du programme n'en dit rien."],
                ['Existe-t-il un classement ?', "Aucun classement officiel n'existe en France. Les palmarès du web sont rédigés par les organismes ou payés comme de la publicité."],
                ["Ce que dit l'AI Act", "L'article 4 vise toute entreprise utilisatrice depuis février 2025. Récrit par l'Omnibus avec effet au 27 juillet 2026, il lui demande d'agir pour que ses salariés comprennent les outils d'IA qu'ils emploient."],
                ['Tarifs au 7 octobre 2026', "Chez Masteria, une journée se facture 1 980 € HT, pour une équipe de douze au plus comme pour une personne seule. Ailleurs, de la gratuité d'un MOOC jusqu'à 12 000 € par personne pour un programme dirigeants."],
                ['Et Masteria ?', "Un organisme certifié Qualiopi, centré sur l'IA, qui bâtit chaque journée à partir des dossiers de vos équipes."],
              ].map(([k, v], i) => (
                <div key={k} style={{ paddingTop: i === 0 ? 0 : 14, borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', marginBottom: 4 }}>{k}</dt>
                  <dd style={{ margin: 0, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── SOMMAIRE ancré (SEO/GEO : jump-to links + cibles d'ancre pour sitelinks) ── */}
      <nav aria-label="Sur cette page" style={{ background: '#fff', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 4, overflowX: 'auto', whiteSpace: 'nowrap' }}>
          <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#9CA3AF', paddingRight: 8, flexShrink: 0 }}>Sur cette page</span>
          {[
            ['#exigences', 'Les 3 exigences'],
            ['#paysage', 'Paysage des organismes'],
            ['#methode', 'Méthode'],
            ['#tarifs', 'Tarifs 2026'],
            ['#faq', 'FAQ'],
          ].map(([href, label]) => (
            <a key={href} href={href} style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 700, color: '#374151', textDecoration: 'none', padding: '13px 12px', flexShrink: 0 }}>{label}</a>
          ))}
        </div>
      </nav>

      {/* ── LE VRAI PROBLÈME (POV) ── */}
      <section id="probleme" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeader icon={AlertTriangle} kicker="Le vrai problème" title="Pourquoi tant de formations IA ne changent rien au travail réel" />
          <p style={leadStyle}>
            Préparer et animer une session prend quelques jours. La difficulté commence ensuite : chacun retourne à son poste, l'élan retombe, et aucune contrainte n'oblige à quitter une habitude vieille de plusieurs années.
          </p>
          <p style={answerStyle}>
            Trois pièges expliquent l'essentiel des sessions sans effet. Le programme reste générique et parle d'un cas d'usage abstrait plutôt que du travail réel de l'équipe formée. Le format choisi favorise le confort du calendrier plutôt que la pratique : une vidéo asynchrone regardée seul laisse peu de place à l'entraînement. Et rien n'est prévu après la session pour vérifier que les nouveaux réflexes tiennent au-delà de la première semaine.
          </p>
          <p style={mutedStyle}>
            Jugez donc un organisme sur sa façon d'éviter ces trois pièges, avant d'ouvrir son catalogue ou de comparer les prix. Les trois exigences qui suivent y répondent une par une.
          </p>
        </div>
      </section>

      {/* ── LES TROIS EXIGENCES (le cœur) ── */}
      <section id="exigences" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Trois exigences</div>
          <h2 style={h2Style}>Les trois exigences qu'une formation IA doit réunir</h2>
          <p style={leadStyle}>
            La plupart des organismes en respectent une, parfois deux. Les équipes qui appliquent encore leurs acquis un mois après la session ont presque toujours été formées par un organisme qui tenait les trois.
          </p>
          <p style={mutedStyle}>
            Le cadre, le contenu et le suivi se tiennent : retirez-en un, et les deux autres perdent leur effet.
          </p>

          <div style={{ display: 'grid', gap: 22 }}>
            {PILLARS.map((p, i) => {
              const Icon = p.icon
              return (
                <div key={p.tag} style={{ ...cardStyle, padding: 'clamp(24px, 3vw, 34px)', display: 'grid', gridTemplateColumns: isDesktop ? '52px 1fr' : '1fr', gap: isDesktop ? 24 : 16, borderTop: `3px solid ${c}` }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={26} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap', marginBottom: 10 }}>
                      <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: c }}>{`0${i + 1} · ${p.tag}`}</span>
                      <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(18px, 2.2vw, 22px)', fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }}>{p.title}</h3>
                    </div>
                    <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 14px' }}>{p.body}</p>
                    <p style={{ fontSize: 14.5, color: '#0A0A0A', lineHeight: 1.7, margin: 0, background: '#F9FAFB', borderLeft: `3px solid ${c}`, borderRadius: '0 10px 10px 0', padding: '12px 16px' }}>
                      <BadgeCheck size={15} strokeWidth={2.4} style={{ color: c, verticalAlign: '-2px', marginRight: 6 }} aria-hidden="true" />
                      {p.masteria}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── LE PAYSAGE : QUI COUVRE QUOI (tableau meter, snippet magnet) ── */}
      <section id="paysage" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={kickerStyle}>Le paysage des organismes</div>
          <h2 style={h2Style}>Qui couvre quoi : MOOC, bootcamp, executive education, organisme généraliste</h2>
          <p style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.75, color: '#0A0A0A', margin: '0 0 14px', maxWidth: 880 }}>
            <strong>Cinq familles d'organismes se partagent le marché de la formation IA, et chacune répond à un objectif différent.</strong>{' '}
            Mettre un MOOC gratuit et un organisme spécialisé dans la même grille fausse la comparaison, puisqu'ils servent deux besoins distincts. Commencez par repérer la famille qui correspond à votre situation.
          </p>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Chaque ligne situe une famille sur les trois exigences (cadre administratif, contenu taillé pour le poste, suivi après la session) et précise dans quelle situation elle mérite votre attention.
          </p>

          <div style={tableWrapStyle}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 860 }}>
              <caption style={srOnlyStyle}>
                Cinq familles d'organismes de formation IA notées sur le cadre, le contenu et le suivi, avec la situation où chacune convient
              </caption>
              <thead>
                <tr>
                  <th scope="col" style={thStyle}>Famille d'organisme</th>
                  <th scope="col" style={{ ...thStyle, textAlign: 'center' }}>Cadre</th>
                  <th scope="col" style={{ ...thStyle, textAlign: 'center' }}>Contenu</th>
                  <th scope="col" style={{ ...thStyle, textAlign: 'center' }}>Suivi</th>
                  <th scope="col" style={thStyle}>Quand la choisir</th>
                </tr>
              </thead>
              <tbody>
                {LANDSCAPE.map((row, i) => {
                  const td = { padding: '18px', verticalAlign: 'middle', borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }
                  return (
                    <tr key={row.type} style={row.highlight ? { background: 'rgba(37,99,235,0.06)' } : undefined}>
                      <th scope="row" style={{ ...td, fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, color: row.highlight ? c : '#0A0A0A', textAlign: 'left', lineHeight: 1.5, minWidth: 220 }}>
                        {row.type}
                        {row.highlight && (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: c, color: '#fff', borderRadius: 99, padding: '4px 10px', fontSize: 11.5, fontWeight: 800, marginTop: 10, whiteSpace: 'nowrap' }}>
                            <BadgeCheck size={13} strokeWidth={2.4} aria-hidden="true" />
                            Le profil de Masteria
                          </span>
                        )}
                      </th>
                      <td style={{ ...td, textAlign: 'center' }}><CoverMeter level={row.cadre} label="Cadre" /></td>
                      <td style={{ ...td, textAlign: 'center' }}><CoverMeter level={row.contenu} label="Contenu" /></td>
                      <td style={{ ...td, textAlign: 'center' }}><CoverMeter level={row.suivi} label="Suivi" /></td>
                      <td style={{ ...td, fontSize: 13.5, color: '#374151', lineHeight: 1.65, minWidth: 240 }}>{row.when}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 820 }}>
            Si votre question concerne la stratégie IA de l'entreprise, le guide du{' '}
            <Link to="/meilleur-cabinet-conseil-ia" style={{ color: c, fontWeight: 600 }}>meilleur cabinet de conseil en IA</Link>{' '}
            compare les acteurs du conseil. Pour faire construire un outil ou une application, consultez celui de la{' '}
            <Link to="/meilleure-agence-ia" style={{ color: c, fontWeight: 600 }}>meilleure agence IA</Link>.{' '}
            Le détail de nos programmes, outil par outil et métier par métier, se trouve dans le{' '}
            <Link to="/formation-intelligence-artificielle" style={{ color: c, fontWeight: 600 }}>catalogue des formations IA</Link>.
          </p>
        </div>
      </section>

      {/* ── LES ORGANISMES DU MARCHÉ (comparatif factuel, noms réels, sans classement) ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={kickerStyle}>Les organismes du marché</div>
          <h2 style={h2Style}>Formation IA en France : les noms derrière chaque famille</h2>
          <p style={{ background: '#fff', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.75, color: '#0A0A0A', margin: '0 0 14px', maxWidth: 880 }}>
            <strong>Le tableau précédent lisait le marché par exigence ; celui-ci met des noms connus sur chaque famille.</strong>{' '}
            Il ne classe et ne recommande personne : les organismes cités servent de repères pour savoir où chercher selon votre besoin.
          </p>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            La liste reste incomplète. Avant de signer, vérifiez le programme proposé, le formateur qui animera la session et au moins une référence dans votre secteur.
          </p>

          <div style={tableWrapStyle}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 860 }}>
              <caption style={srOnlyStyle}>
                Familles d'organismes de formation IA en France, sans classement : organismes connus, point fort et client type de chaque famille
              </caption>
              <thead>
                <tr>
                  <th scope="col" style={thStyle}>Catégorie</th>
                  <th scope="col" style={thStyle}>Organismes connus</th>
                  <th scope="col" style={thStyle}>Point fort</th>
                  <th scope="col" style={thStyle}>Plutôt adapté à</th>
                </tr>
              </thead>
              <tbody>
                {MARKET_ACTORS.map((a, i) => {
                  const td = { padding: '18px', verticalAlign: 'top', fontSize: 13.5, color: '#374151', lineHeight: 1.65, borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }
                  const last = i === MARKET_ACTORS.length - 1
                  return (
                    <tr key={a.cat} style={last ? { background: 'rgba(37,99,235,0.06)' } : undefined}>
                      <th scope="row" style={{ padding: '18px', verticalAlign: 'top', borderTop: i === 0 ? 'none' : '1px solid #E5E7EB', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, color: last ? c : '#0A0A0A', textAlign: 'left', lineHeight: 1.5, minWidth: 180 }}>{a.cat}</th>
                      <td style={{ ...td, minWidth: 200, color: last ? c : '#374151', fontWeight: last ? 600 : 400 }}>{a.names}</td>
                      <td style={{ ...td, minWidth: 220 }}>{a.best}</td>
                      <td style={{ ...td, minWidth: 180 }}>{a.fit}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            <strong>Masteria</strong> se range dans la dernière famille : un organisme centré sur l'IA, qui construit chaque session sur le métier des participants. Il forme aussi bien une petite équipe de PME que les managers d'un groupe implanté sur plusieurs continents, et règle le format sur le niveau de départ de chaque groupe.
          </p>
        </div>
      </section>

      {/* ── COMMENT CHOISIR EN PRATIQUE : LES 4 ÉTAPES (timeline) ── */}
      <section id="methode" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={kickerStyle}>La méthode</div>
          <h2 style={h2Style}>Comment choisir en pratique : 4 étapes pour trancher en une semaine</h2>
          <p style={leadStyle}>
            Un appel d'offres est rarement nécessaire pour choisir une formation IA. Le chemin qui suit permet de comparer les bons organismes et de décider dans la semaine, sans attendre le trimestre suivant.
          </p>
          <p style={mutedStyle}>
            Les durées sont indicatives. Beaucoup d'entreprises sautent l'étape 2, et c'est l'oubli qui coûte le plus cher.
          </p>

          <div style={{ position: 'relative' }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 19, top: 18, bottom: 18, width: 2, background: '#E5E7EB' }} />
            <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 22 }}>
              {PROCESS.map((p, i) => (
                <li key={p.step} style={{ position: 'relative', paddingLeft: 60 }}>
                  <span aria-hidden="true" style={{ position: 'absolute', left: 0, top: 0, width: 40, height: 40, borderRadius: '50%', background: c, color: '#fff', fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>{i + 1}</span>
                  <div style={{ ...cardStyle, padding: 24 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', marginBottom: 10 }}>
                      <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(17px, 2vw, 21px)', fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }}>{p.step}</h3>
                      <span style={{ fontSize: 12.5, fontWeight: 700, color: c, background: cLight, borderRadius: 99, padding: '4px 11px', whiteSpace: 'nowrap' }}>{p.duration}</span>
                    </div>
                    <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: '0 0 12px' }}>{p.goal}</p>
                    <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.6, margin: '0 0 8px' }}><strong style={{ color: '#0A0A0A' }}>Livrable : </strong>{p.deliver}</p>
                    <p style={{ fontSize: 13.5, lineHeight: 1.6, margin: 0, background: '#F9FAFB', borderLeft: `3px solid ${c}`, borderRadius: '0 8px 8px 0', padding: '10px 14px' }}><strong style={{ color: c }}>Point de vigilance : </strong><span style={{ color: '#374151' }}>{p.watch}</span></p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── TARIFS 2026 (ancre sombre) ── */}
      <section id="tarifs" style={{ scrollMarginTop: 96, position: 'relative', padding: SECTION_PAD, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Tarifs 2026</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC' }}>Combien coûte une formation IA en 2026 (par format) ?</h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 14px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Un MOOC coûte entre zéro et cinquante euros par mois, un bootcamp certifiant de 3 000 à 8 000 € par personne, et une journée chez Masteria 1 980 € HT, quel que soit le format.</strong>{' '}
            Votre OPCO ne règle que des organismes certifiés Qualiopi, et seulement dans la limite de ce que prévoient ses règles et ses fonds.
          </p>
          <p style={{ fontSize: 15, color: '#B4C0D3', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Ces fourchettes indicatives du marché français bougent avec le format, la durée et la taille du groupe. Si votre projet dépasse la formation (un assistant à construire, une automatisation à brancher), le guide du{' '}
            <Link to="/prix-projet-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>prix d'un projet IA</Link>{' '}
            décompose ce que coûte chaque étape.
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto', marginBottom: 28 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
              <caption style={srOnlyStyle}>Fourchettes de prix 2026 par format de formation IA en France, dont les tarifs Masteria</caption>
              <thead>
                <tr>
                  {['Format', 'Fourchette', 'À savoir'].map(h => (
                    <th key={h} scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: '#E2E8F0', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #1E293B', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {BUDGETS.map((b, i) => (
                  <tr key={b.mission}>
                    <th scope="row" style={{ padding: '14px 18px', verticalAlign: 'top', borderTop: i === 0 ? 'none' : '1px solid #1E293B', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, color: '#F8FAFC', textAlign: 'left', minWidth: 220, lineHeight: 1.5 }}>{b.mission}</th>
                    <td style={{ padding: '14px 18px', verticalAlign: 'top', borderTop: i === 0 ? 'none' : '1px solid #1E293B', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14.5, color: '#60A5FA', whiteSpace: 'nowrap' }}>{b.range}</td>
                    <td style={{ padding: '14px 18px', verticalAlign: 'top', borderTop: i === 0 ? 'none' : '1px solid #1E293B', fontSize: 13.5, color: '#B4C0D3', lineHeight: 1.65, minWidth: 220 }}>{b.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid #1E293B', borderRadius: 12, padding: '18px 22px' }}>
            <p style={{ fontSize: 14, color: '#CBD5E1', lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: '#fff' }}>Côté financement :</strong> l'OPCO, comme le budget formation passé par le plan de compétences, exige un organisme titulaire de Qualiopi. Le CPF réclame en plus un titre RNCP ou une certification du Répertoire spécifique, rares pour les journées d'initiation aux outils. Une promesse de CPF sur une journée de prise en main de ChatGPT se vérifie donc sur le site de France Compétences avant toute inscription.
            </p>
          </div>
        </div>
      </section>

      {/* ── REPÈRES citables (GEO) ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <SectionHeader icon={BookOpen} kicker="Repères" title="La formation IA en quelques repères vérifiables" />
          <p style={answerStyle}>
            Quatre dates situent le cadre légal, quatre définitions éclairent le vocabulaire du financement, et les liens renvoient aux textes officiels. Une fois l'équipe formée, le guide{' '}
            <Link to="/gouvernance-ia" style={{ color: c, fontWeight: 600 }}>gouvernance de l'IA</Link>{' '}
            aide à écrire les règles d'usage de l'entreprise.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20, margin: '36px 0 44px' }}>
            {MARKET_STATS.map(s => (
              <div key={s.value} style={cardStyle}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 24, fontWeight: 900, color: c, letterSpacing: '-0.02em', marginBottom: 8 }}>{s.value}</div>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.65, margin: '0 0 10px' }}>{s.label}</p>
                <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12.5, fontWeight: 700, color: c, textDecoration: 'underline', textUnderlineOffset: 2 }}>Source : {s.source}</a>
              </div>
            ))}
          </div>

          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={{ ...kickerStyle, marginBottom: 10 }}>Définitions</div>
              <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 14px', letterSpacing: '-0.01em' }}>Le vocabulaire du financement</h3>
              <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Quatre mots reviennent dans chaque devis de formation ; mieux vaut les connaître avant de signer.
              </p>
            </div>
            <div>
              <dl style={{ margin: 0, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, overflow: 'hidden' }}>
                {GLOSSARY.map((g, i) => (
                  <div key={g.term} style={{ padding: '20px 24px', borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }}>
                    <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', marginBottom: 6 }}>{g.term}</dt>
                    <dd style={{ margin: 0, fontSize: 14.5, color: '#374151', lineHeight: 1.7 }}>{g.def}</dd>
                  </div>
                ))}
              </dl>
              <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: '24px 0 12px', fontWeight: 700 }}>Textes et sites officiels à consulter</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
                {REFERENCES.map(r => (
                  <li key={r.url} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <ShieldCheck size={16} strokeWidth={2.2} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                    <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: c, fontWeight: 600, fontSize: 14.5, textDecoration: 'underline', textUnderlineOffset: 2, lineHeight: 1.6 }}>{r.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── MASTERIA : le profil construit pour ce résultat ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>Notre positionnement</div>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>Pourquoi Masteria est construit pour ce résultat</h2>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: cLight, color: c, padding: '5px 12px', borderRadius: 99, fontSize: 13, fontWeight: 700, marginBottom: 18 }}>
                <BadgeCheck size={15} strokeWidth={2.2} aria-hidden="true" />
                Qualiopi · Ateliers sur vos dossiers · Point à J+30
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Vous hésitez encore entre les assistants eux-mêmes ? Le comparatif{' '}
                <Link to="/quelle-est-la-meilleure-ia" style={{ color: c, fontWeight: 600 }}>quelle est la meilleure IA</Link>{' '}
                met les principaux modèles face à face.
              </p>
            </div>

            <div>
              <div style={{ ...cardStyle, padding: 32, borderTop: `3px solid ${c}` }}>
                <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.8, margin: '0 0 16px' }}>
                  Depuis 2022, année où Mathias Nizan l'a créé à Lyon, Masteria apprend à des équipes à se servir de l'IA. Chaque session se prépare autour d'une seule question : que feront les participants autrement le lundi suivant ?
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'grid', gap: 14 }}>
                  {[
                    ['Le cadre', "une certification Qualiopi obtenue au titre des actions de formation, et environ 20 formateurs indépendants choisis pour leur usage de l'IA dans leur propre métier."],
                    ['Le contenu', "un catalogue qui dépasse cent programmes, adaptés à chaque client à partir de ses documents, de ses outils et du questionnaire rempli par les stagiaires."],
                    ['Le suivi', "des supports en ligne que chaque stagiaire garde après la formation, et un bilan un mois plus tard avec la personne qui a commandé la formation."],
                  ].map(([t, d]) => (
                    <li key={t} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <BadgeCheck size={18} strokeWidth={2.4} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                      <span style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7 }}><strong style={{ color: '#0A0A0A' }}>{t} : </strong>{d}</span>
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.8, margin: '0 0 16px' }}>
                  Masteria ne perçoit aucune commission d'un éditeur : quand nous conseillons Copilot plutôt que Gemini, c'est que l'entreprise travaille déjà dans Microsoft 365. Nos formateurs interviennent sur place ou en visioconférence, en France, chez nos voisins européens, aux États-Unis et en Inde. Les Échos ont interrogé Mathias Nizan sur la façon de choisir{' '}
                  <a href="https://www.lesechos.fr/travailler-mieux/travailler-avec-lia/si-vous-choisissez-un-modele-pas-adapte-les-gens-vont-chercher-de-leur-cote-chatgpt-claude-copilot-gemini-mistral-comment-choisir-lia-la-plus-adaptee-a-son-metier-2236741" target="_blank" rel="noopener noreferrer" style={{ color: c, fontWeight: 600 }}>un modèle d'IA adapté à son métier</a>.
                </p>
                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.8, margin: 0 }}>
                  Deux missions publiées montrent le suivi à l'œuvre. Chez un industriel international de l'emballage, la session pilote a donné lieu à un bilan à chaud et à trois ajustements avant le groupe de managers suivant ({' '}
                  <Link to="/etudes-de-cas-ia#industrie" style={{ color: c, fontWeight: 600 }}>lire le cas</Link>). Chez un éditeur de logiciels B2B, une assistante de direction est repartie de sa journée individuelle avec un plan d'action à 30 jours et une mesure du gain prévue à un mois ({' '}
                  <Link to="/etudes-de-cas-ia#mission-assistanat-direction" style={{ color: c, fontWeight: 600 }}>voir la mission</Link>). Le{' '}
                  <Link to="/formation-intelligence-artificielle" style={{ color: c, fontWeight: 600 }}>catalogue de formations IA</Link>{' '}
                  détaille les programmes, et la page{' '}
                  <Link to="/financement-formation-ia" style={{ color: c, fontWeight: 600 }}>financement</Link>{' '}
                  explique comment monter le dossier avec votre OPCO.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SIGNATURE (E-E-A-T) : remplace le bloc fondateur commun ── */}
      <section style={{ padding: 'clamp(40px, 6vw, 64px) 24px', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', borderLeft: `3px solid ${c}`, paddingLeft: 22 }}>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.8, margin: 0 }}>
            Mathias Nizan a écrit ce guide à partir des demandes qu'il reçoit chaque semaine d'entreprises qui comparent plusieurs organismes. Il l'a actualisé le 7 octobre 2026, pour tenir compte de l'article 4 de l'AI Act tel que l'Omnibus l'a réécrit. Pour connaître son parcours, voyez{' '}
            <Link to="/mathias-nizan" style={{ color: c, fontWeight: 600 }}>la page qui lui est consacrée</Link>.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>FAQ</div>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Vos questions avant de choisir une formation IA</h2>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: '0 0 16px' }}>Votre cas sort de ces quatorze réponses ?</p>
              <Link to="/contact" style={{ color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, textDecoration: 'none' }}>
                Décrivez-le en deux lignes
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

      {/* ── CTA FINALE SOMBRE ── */}
      <section style={{ background: '#F9FAFB', padding: SECTION_PAD }}>
        <div style={{ position: 'relative', overflow: 'hidden', maxWidth: 1080, margin: '0 auto', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Votre projet de formation</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Décrivez votre équipe, on vous propose un format
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 580, marginLeft: 'auto', marginRight: 'auto' }}>
              Dites-nous quel métier former, sur quel outil, et ce qui devrait changer dans le travail. Nous répondons avec un format, un programme et un prix, ou avec le type d'organisme à consulter si votre besoin relève plutôt d'un bootcamp ou d'une grande école.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 700, marginBottom: 24 }}>
              Présenter votre équipe
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Journée à 1 980 € HT · douze participants au plus, ou une personne seule · organisme certifié Qualiopi
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

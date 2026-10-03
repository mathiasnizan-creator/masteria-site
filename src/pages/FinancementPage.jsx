import { Link } from 'react-router-dom'
import {
  ArrowRight, BadgeCheck, Users, Building2, CheckCircle, XCircle,
  AlertCircle, FileText, Calculator, Shield, Sparkles, FileCheck,
  MailCheck, Zap, Lightbulb, Landmark, Percent, Compass, Info,
  Receipt, Scale, CalendarClock, UserRound, MapPin,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'

/* ══════════════════════════════════════════════════════════════════
 * CHARTE COULEURS
 *   Bleu principal : #2563EB
 *   Bleu foncé     : #1E40AF
 *   Bleu clair bg  : #EFF6FF / #DBEAFE
 *   Vert succès    : #16A34A (utilisé avec parcimonie)
 *   Gris neutre    : #6B7280
 *   Texte sombre   : #0A0A0A
 * ══════════════════════════════════════════════════════════════════ */

const BLUE = '#2563EB'
const BLUE_DARK = '#1E40AF'
const BLUE_LIGHT_BG = '#EFF6FF'
const GREEN = '#16A34A'
const GREEN_BG = '#F0FDF4'
const NEUTRAL = '#6B7280'

const TITLE_GRADIENT = {
  background: `linear-gradient(135deg, ${BLUE} 0%, ${BLUE_DARK} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

const H2 = {
  fontFamily: 'Nunito, sans-serif', fontWeight: 800,
  fontSize: 'clamp(26px, 3.8vw, 34px)', color: '#0A0A0A',
  marginBottom: 8, letterSpacing: '-0.01em',
}
const H2_CENTRE = { ...H2, textAlign: 'center' }
const SOUS_TITRE = {
  textAlign: 'center', color: NEUTRAL, fontSize: 16, lineHeight: 1.6,
  maxWidth: 720, margin: '0 auto 40px',
}
const KICKER = {
  display: 'inline-flex', alignItems: 'center', gap: 8,
  background: BLUE_LIGHT_BG, padding: '6px 14px', borderRadius: 999,
  fontSize: 12.5, fontWeight: 700, color: BLUE_DARK, marginBottom: 16,
  border: `1px solid ${BLUE}25`,
}
const LIEN = { color: BLUE_DARK, fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: 2 }

/* Espaces insécables dans les montants et devant €, %, HT, TTC (affichage seulement :
 * les données passées au JSON-LD gardent des espaces simples). */
const nb = s => s
  .replace(/(\d) (?=\d)/g, '$1\u00a0')
  .replace(/ (€|%)/g, '\u00a0$1')
  .replace(/€ (HT|TTC)\b/g, '€\u00a0$1')
  .replace(/n° /g, 'n°\u00a0')

/* ══════════════════════════════════════════════════════════════════
 * DATES ET SOURCES
 * Règles de financement vérifiées le 03/10/2026 sur les sites officiels
 * listés dans SOURCE_GROUPS (administration, Code du travail, OPCO).
 * Les mêmes sources partent en JSON-LD (WebPage.citation) via SEOHead.
 * ══════════════════════════════════════════════════════════════════ */

const DATE_PUBLICATION = '2026-05-11'
const DATE_MISE_A_JOUR = '2026-10-03'
const MOIS_FR = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
const LIBELLE_MISE_A_JOUR = `${MOIS_FR[Number(DATE_MISE_A_JOUR.slice(5, 7)) - 1]} ${DATE_MISE_A_JOUR.slice(0, 4)}`

const SOURCE_GROUPS = [
  {
    titre: 'Réforme de la TVA et circuit de paiement',
    items: [
      { name: "Opco Atlas, FAQ « Réforme de la TVA »", url: 'https://www.opco-atlas.fr/faq/reforme-de-la-tva.html', note: 'subrogation ou remboursement, TVA, exemple de facturation en deux parts' },
      { name: "Opco Atlas, « Réforme de la TVA : ce qui change pour le financement de vos formations » (1er octobre 2026)", url: 'https://www.opco-atlas.fr/actualites/reforme-de-la-tva-ce-qui-change-pour-le-financement-de-vos-formations.html', note: "date d'application et exceptions" },
      { name: 'Opco Atlas, conditions de règlement pour les entreprises', url: 'https://www.opco-atlas.fr/entreprise/conditions-reglement.html', note: 'demande de remboursement et pièces à joindre' },
      { name: 'OPCO EP, réforme de la TVA (24 juillet 2026)', url: 'https://www.opcoep.fr/actualites/reforme-de-la-tva-ce-qui-change-pour-vos-demandes-de-prise-en-charge-de-formation-hors-contrat-d', note: "facture réglée TTC par l'entreprise, remboursement hors taxes, récupération de la TVA" },
      { name: 'Afdas, réforme de la TVA applicable aux Opco', url: 'https://www.afdas.com/entreprise/reforme-de-la-tva-applicable-aux-opco.html', note: 'paiement direct maintenu pour le plan des moins de 50 salariés financé sur cette seule enveloppe' },
    ],
  },
  {
    titre: 'OPCO et plan de développement des compétences',
    items: [
      { name: 'Ministère du Travail, les opérateurs de compétences (OPCO)', url: 'https://travail-emploi.gouv.fr/les-operateurs-de-competences-opco', note: 'missions et liste des 11 OPCO, page mise à jour le 30 septembre 2026' },
      { name: 'Ministère du Travail, le plan de développement des compétences', url: 'https://travail-emploi.gouv.fr/le-plan-de-developpement-des-competences', note: "formations décidées par l'employeur, coût à la charge de l'entreprise" },
      { name: 'Code du travail, article L6332-17', url: 'https://code.travail.gouv.fr/code-du-travail/l6332-17', note: "ce que l'OPCO finance pour les entreprises de moins de 50 salariés" },
      { name: 'OPCO 2i, plan de développement des compétences des entreprises de 50 salariés et plus', url: 'https://www.opco2i.fr/formation-et-financement/plan-developpement-competences-entreprises-50-salaries/', note: 'plus de fonds mutualisés au-delà de 50 salariés depuis 2019' },
      { name: 'Opco Atlas, conditions générales (février 2026)', url: 'https://www.opco-atlas.fr/conditions-generales.html', note: "dépôt par l'entreprise, plafonds décidés en cours d'année, certification exigée" },
      { name: 'France compétences, le soutien au plan de développement des compétences des entreprises (26 février 2026)', url: 'https://www.francecompetences.fr/fiche-ruf/le-soutien-au-plan-de-developpement-des-competences-des-entreprises/', note: 'coût moyen et reste à charge en 2024' },
      { name: "France compétences, outil « Quel est mon OPCO »", url: 'https://quel-est-mon-opco.francecompetences.fr/', note: 'recherche par SIRET ou par IDCC' },
    ],
  },
  {
    titre: 'Qualiopi et convention de formation',
    items: [
      { name: 'Ministère du Travail, Qualiopi', url: 'https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation', note: 'obligation de certification depuis le 1er janvier 2022' },
      { name: 'Ministère du Travail, référentiel national qualité et guide de lecture', url: 'https://travail-emploi.gouv.fr/referentiel-national-qualite-guide-de-lecture-qualiopi', note: 'sept critères, durée de la certification, audits' },
      { name: 'Code du travail, article L6316-1', url: 'https://code.travail.gouv.fr/code-du-travail/l6316-1', note: 'financeurs qui exigent la certification' },
      { name: 'Code du travail, article L6353-1', url: 'https://code.travail.gouv.fr/code-du-travail/l6353-1', note: "convention entre l'acheteur et l'organisme de formation" },
      { name: 'Liste publique des organismes de formation (data.gouv.fr)', url: 'https://www.data.gouv.fr/datasets/liste-publique-des-organismes-de-formation-l-6351-7-1-du-code-du-travail', note: "vérifier la certification d'un organisme" },
    ],
  },
  {
    titre: 'CPF, indépendants et dispositifs fermés',
    items: [
      { name: 'Service-public.gouv.fr, compte personnel de formation (CPF)', url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F10705', note: 'formations éligibles' },
      { name: 'Entreprendre.service-public.gouv.fr, contribution à la formation professionnelle des entrepreneurs individuels', url: 'https://entreprendre.service-public.gouv.fr/vosdroits/F23459', note: 'Agefice, FAFCEA, FIF PL' },
      { name: "Entreprendre.service-public.gouv.fr, crédit d'impôt pour la formation des dirigeants", url: 'https://entreprendre.service-public.gouv.fr/vosdroits/F23460', note: 'supprimé pour les formations suivies depuis le 1er janvier 2025' },
      { name: 'Annexe au projet de loi de finances pour 2026, formation professionnelle', url: 'https://www.assemblee-nationale.fr/dyn/dyn/contenu/visualisation/1089989/file/7-Jaune2026_Formation_Professionnelle.pdf', note: 'FNE-Formation suspendu en 2025, rétablissement non prévu en 2026' },
    ],
  },
  {
    titre: 'Conseil et développement IA',
    items: [
      { name: 'France Num', url: 'https://www.francenum.gouv.fr/', note: 'portail public de la transition numérique des TPE et PME' },
      { name: "Economie.gouv.fr, crédit d'impôt innovation (CII)", url: 'https://www.economie.gouv.fr/entreprises/les-aides-et-financements-pour-developper-son-entreprise/votre-entreprise-peut-elle-0', note: "prolongé jusqu'au 31 décembre 2027, taux de 20 % en métropole" },
      { name: "Entreprendre.service-public.gouv.fr, crédit d'impôt recherche (CIR)", url: 'https://entreprendre.service-public.gouv.fr/vosdroits/F23533', note: 'dépenses de recherche et développement' },
    ],
  },
]

const CITATIONS = SOURCE_GROUPS.flatMap(g => g.items.map(({ name, url }) => ({ name, url })))

/* ══════════════════════════════════════════════════════════════════
 * DONNÉES
 * ══════════════════════════════════════════════════════════════════ */

/* Champs officiels publiés par le ministère du Travail (page OPCO, 30/09/2026) ;
 * périmètre d'OPCO Santé repris de son propre site. */
const OPCO_LIST = [
  { name: 'Afdas', secteur: 'Culture, médias, loisirs, sports.' },
  { name: 'Akto', secteur: "Entreprises à forte intensité de main-d'œuvre." },
  { name: 'Atlas', secteur: 'Services financiers et conseil.' },
  { name: 'Constructys', secteur: 'Construction.' },
  { name: 'Ocapiat', secteur: 'Agriculture, pêche, agroalimentaire.' },
  { name: 'OPCO 2i', secteur: 'Interindustriel.' },
  { name: 'Opcommerce', secteur: 'Commerce.' },
  { name: 'OPCO EP', secteur: 'Artisanat, professions libérales, services de proximité.' },
  { name: 'OPCO Mobilités', secteur: 'Transports, voyages, distribution.' },
  { name: 'OPCO Santé', secteur: 'Secteur privé de la santé : sanitaire, social et médico-social non lucratif, hospitalisation privée, santé au travail.' },
  { name: 'Uniformation', secteur: 'Cohésion sociale.' },
]

const SOMMAIRE = [
  ['Réforme du 1er octobre', '#reforme-tva'],
  ['Tarifs', '#tarifs'],
  ['Mise en situation', '#mise-en-situation'],
  ['Dispositifs', '#dispositifs'],
  ['Trouver son OPCO', '#quel-opco'],
  ['Questions fréquentes', '#faq'],
  ['Sources', '#sources-officielles'],
]

const FAQ = [
  {
    q: "Combien coûte une formation IA chez Masteria, et quelle part l'OPCO peut-il financer ?",
    a: "Masteria facture 1 980 € HT la journée, en intra pour un groupe de 12 participants au plus comme en accompagnement individuel, plus une TVA de 20 %. La part financée dépend des critères de votre branche et du budget de votre OPCO : elle peut aller jusqu'à 100 % du coût hors taxes, et seul l'accord écrit de l'OPCO l'engage. Pour situer, France compétences mesure en 2024 un reste à charge moyen de 38 % sur les formations de salariés appuyées par des fonds publics ou mutualisés, et de 67 % au-delà de 50 salariés.",
  },
  {
    q: "Qu'est-ce qui a changé au 1er octobre 2026 pour le financement des formations par les OPCO ?",
    a: "Les règles de TVA applicables aux OPCO ont changé, et tous les OPCO sont concernés. Le paiement de l'organisme de formation par l'OPCO à la place de l'entreprise, appelé subrogation, devient l'exception. Dans le cas général, l'organisme facture l'entreprise toutes taxes comprises, l'entreprise règle la facture, puis l'OPCO lui rembourse la part hors taxes dans la limite de son accord. Chez Atlas, la subrogation reste possible pour le plan de développement des compétences des moins de 50 salariés, campusAtlas (son offre de formations à tarifs négociés), l'apprentissage et, à partir du 19 octobre, les dossiers FSE+ (Fonds social européen plus). Le courrier d'accord indique le mode retenu.",
  },
  {
    q: "L'OPCO rembourse-t-il la TVA d'une formation IA ?",
    a: "En remboursement, non : Atlas comme OPCO EP ne remboursent que la part hors taxes, et la TVA reste à la charge de l'entreprise, qui la récupère si sa situation fiscale le permet. En subrogation, Atlas règle la facture toutes taxes comprises, dans la limite de son accord. Masteria n'est pas exonéré de TVA : ses factures de formation portent une TVA de 20 %.",
  },
  {
    q: "Une entreprise de 50 salariés ou plus peut-elle faire financer une formation IA par son OPCO ?",
    a: "Oui, par deux voies seulement. Depuis 2019 et la loi Avenir professionnel, les fonds mutualisés légaux de l'OPCO financent le plan de développement des compétences des seules entreprises de moins de 50 salariés. Une entreprise plus grande peut mobiliser les budgets que certaines branches financent par une contribution conventionnelle, ou confier des versements volontaires à son OPCO. Chez Atlas, ces dossiers passent en remboursement depuis le 1er octobre 2026 : l'entreprise paie Masteria, puis demande le remboursement de la part hors taxes.",
  },
  {
    q: "Qui dépose la demande de prise en charge d'une formation IA auprès de l'OPCO ?",
    a: "L'entreprise, avant la session, depuis l'espace en ligne de son OPCO (myAtlas chez Atlas). Masteria lui fournit le programme, qui énonce l'objectif professionnel et le contenu de la formation, et la convention de formation que le Code du travail impose entre l'acheteur et l'organisme. Après la session, Masteria remet la facture et le certificat de réalisation, les deux pièces que l'OPCO demande pour payer ou rembourser.",
  },
  {
    q: "Une formation IA Masteria est-elle finançable par le CPF ?",
    a: "Non. Le compte personnel de formation finance, à l'initiative du salarié, des formations certifiantes, la validation des acquis de l'expérience, le bilan de compétences ou certains permis de conduire, choisis sur Mon Compte Formation. Masteria n'est pas éligible au CPF. Une formation Masteria se finance par le plan de développement des compétences de l'entreprise, avec l'appui de son OPCO.",
  },
  {
    q: "Le FNE-Formation peut-il financer une formation IA en 2026 ?",
    a: "Non. Cette aide de l'État, gérée par les OPCO, a été suspendue en 2025. L'annexe du projet de loi de finances pour 2026 consacrée à la formation professionnelle écarte son rétablissement en 2026 : le projet de budget ne prévoit que 16,88 millions d'euros de restes à payer sur les anciennes conventions.",
  },
  {
    q: "Un entrepreneur individuel peut-il faire financer sa formation IA ?",
    a: "Il peut s'adresser au fonds d'assurance formation de son activité. L'entrepreneur individuel, micro-entrepreneur compris, paie chaque année la contribution à la formation professionnelle, qui lui ouvre un droit à la formation. Le fonds compétent est l'Agefice pour les commerçants, le FAFCEA pour les artisans et le FIF PL pour les professions libérales. Le crédit d'impôt pour la formation des dirigeants, encore souvent cité, ne s'applique plus aux formations suivies depuis le 1er janvier 2025.",
  },
  {
    q: "Pourquoi la certification Qualiopi compte-t-elle pour financer une formation IA ?",
    a: "La loi l'impose : depuis le 1er janvier 2022, un organisme doit être certifié pour être financé par un OPCO, l'État, une région, la Caisse des dépôts, France Travail ou l'Agefiph (article L6316-1 du Code du travail). Atlas n'accorde de prise en charge qu'aux organismes inscrits sur la liste publique des certifiés. Masteria est certifié Qualiopi au titre des actions de formation : certificat n° 725311-1, délivré par Certifopac, valable du 29 janvier 2026 au 28 janvier 2029.",
  },
  {
    q: "Comment savoir de quel OPCO dépend mon entreprise ?",
    a: "Par le SIRET ou par la convention collective. L'outil « Quel est mon OPCO » de France compétences donne l'OPCO d'un établissement à partir de son numéro SIRET à 14 chiffres. Vous pouvez aussi relever l'IDCC, le code à quatre chiffres de la convention collective, que la fiche de paie mentionne en général, et le chercher dans la table de correspondance publiée par le ministère du Travail.",
  },
  {
    q: "Que se passe-t-il si l'OPCO ne finance qu'une partie de la formation IA ?",
    a: "L'entreprise paie le solde. Avec la subrogation, l'organisme émet deux factures, l'une à l'OPCO pour la part accordée, l'autre à l'entreprise pour le reste, chacune avec sa TVA. Sans subrogation, l'entreprise règle la facture entière et l'OPCO lui rembourse la part hors taxes accordée. Les heures d'absence restent à la charge de l'entreprise : Atlas rembourse au prorata des heures suivies.",
  },
  {
    q: "Le conseil ou le développement IA sur mesure peuvent-ils être financés par l'OPCO ?",
    a: "Non. L'article L6332-17 du Code du travail liste ce que l'OPCO peut payer pour les entreprises de moins de 50 salariés, dont les coûts des formations, la rémunération des salariés formés et des diagnostics en vue de former ; la conception d'un agent ou d'un outil IA n'y figure pas. Un projet de conseil ou de développement relève du budget de l'entreprise. Selon sa nature, le crédit d'impôt innovation, réservé aux PME, ou le crédit d'impôt recherche peuvent s'appliquer : votre expert-comptable tranche.",
  },
  {
    q: "Combien coûte un projet de conseil ou de développement IA chez Masteria ?",
    a: "Il se chiffre sur devis, après un cadrage du périmètre : nombre de cas d'usage, données à mobiliser, intégration à votre système d'information. La proposition détaille ce qui est livré et à quel prix, avant tout engagement.",
  },
]

/* Réforme de la TVA des OPCO : règles d'Atlas (FAQ et conditions de règlement, 03/10/2026). */
const ATLAS_SUBROGATION = [
  "Plan de développement des compétences des entreprises de moins de 50 salariés, financé sur les fonds mutualisés légaux, si l'entreprise demande la subrogation",
  "campusAtlas, l'offre de formations à tarifs négociés d'Atlas, et cap compétence par campusAtlas",
  "Contrats d'apprentissage",
  'Dossiers FSE+ (Fonds social européen plus), à partir du 19 octobre 2026',
]
const ATLAS_REMBOURSEMENT = [
  'Entreprises de 50 salariés et plus, pour leur plan de développement des compétences',
  'Entreprises de moins de 50 salariés, au-delà des fonds légaux ou sur les fonds conventionnels de la branche',
  'Contrat de professionnalisation, parcours stratégique, périodes de reconversion, cofinancements',
]
const POINTS_REFORME = [
  {
    icon: Receipt,
    texte: "En subrogation, Atlas règle la facture toutes taxes comprises, dans la limite de son accord. Si l'accord ne couvre pas tout, l'organisme facture le solde à l'entreprise : deux factures, chacune avec sa TVA.",
  },
  {
    icon: FileCheck,
    texte: "En remboursement, l'entreprise dépose sa demande sur myAtlas avec la facture, acquittée ou non, et le certificat de réalisation. Atlas vise un paiement sous 15 jours environ, sur la seule part hors taxes, et ne rembourse pas les acomptes.",
  },
  {
    icon: CalendarClock,
    texte: "Un dossier engagé en subrogation avant le 1er octobre garde ce mode. La date qui compte est celle du premier courrier d'accord.",
  },
]

/* Mise en situation : entreprises et accord fictifs, prix Masteria réels,
 * règles d'Atlas au 03/10/2026. 2 jours x 1 980 € HT = 3 960 € HT ; TVA 792 € ; TTC 4 752 €. */
const SCENARIOS = [
  {
    titre: 'Cabinet de 30 salariés',
    sousTitre: 'Plan de développement des compétences, enveloppe légale, subrogation demandée',
    lignes: [
      { label: 'Facture de Masteria à Atlas', val: '2 400 € TTC', detail: '2 000 € HT + 400 € de TVA' },
      { label: 'Facture de Masteria au cabinet', val: '2 352 € TTC', detail: '1 960 € HT + 392 € de TVA' },
      { label: "Remboursement d'Atlas au cabinet", val: 'Aucun', detail: 'Atlas a réglé Masteria' },
      { label: 'Somme avancée par le cabinet', val: '2 352 €' },
      { label: 'Coût final, TVA récupérée', val: '1 960 €', fort: true },
      { label: 'Coût final, TVA non récupérée', val: '2 352 €' },
    ],
  },
  {
    titre: 'Cabinet de 80 salariés',
    sousTitre: 'Plan de développement des compétences, remboursement',
    lignes: [
      { label: 'Facture de Masteria à Atlas', val: 'Aucune' },
      { label: 'Facture de Masteria au cabinet', val: '4 752 € TTC', detail: '3 960 € HT + 792 € de TVA' },
      { label: "Remboursement d'Atlas au cabinet", val: '2 000 €', detail: 'la part hors taxes accordée' },
      { label: 'Somme avancée par le cabinet', val: '4 752 €' },
      { label: 'Coût final, TVA récupérée', val: '1 960 €', fort: true },
      { label: 'Coût final, TVA non récupérée', val: '2 752 €' },
    ],
  },
]

/* France compétences, rapport sur l'usage des fonds 2025, fiche du 26/02/2026 (données 2024). */
const STATS_FRANCE_COMPETENCES = [
  { lbl: 'Formations lancées en 2024', val: '4,554 millions', note: 'plus de 12 000 par jour' },
  { lbl: 'Durée moyenne', val: '19 heures' },
  { lbl: 'Coût moyen', val: '568 €', note: 'dont 270 € de coûts pédagogiques' },
  { lbl: "Reste à charge moyen de l'entreprise", val: '38 %', note: '67 % au-delà de 50 salariés' },
]

/* Dispositifs POSSIBLES pour le conseil et le développement IA.
 * Honnêteté stricte : ce sont des prestations de service (forfait/devis),
 * NON finançables par l'OPCO. Aucun taux ni prise en charge promis.
 * Consigne : aucun dispositif d'audit subventionné nommé sur le site. */
const DISPOSITIFS_PROJET = [
  {
    icon: Compass,
    name: 'France Num',
    desc: "Le portail public de la transition numérique des TPE et PME recense les aides financières : subventions, prêts, aides des régions. Il propose aussi des ressources pour comprendre et tester l'intelligence artificielle.",
  },
  {
    icon: Percent,
    name: "Crédit d'impôt innovation (CII)",
    desc: "Réservé aux PME, il porte sur la conception d'un prototype ou d'une installation pilote d'un produit nouveau. La loi de finances pour 2025 l'a prolongé jusqu'au 31 décembre 2027 et a ramené son taux de 30 % à 20 % en métropole.",
  },
  {
    icon: Landmark,
    name: "Crédit d'impôt recherche (CIR)",
    desc: "Il encourage les activités de recherche et développement. Un développement IA n'y ouvre droit que s'il comporte des travaux de recherche au sens fiscal, ce qui relève d'une appréciation technique.",
  },
]

const ETAPES = [
  {
    n: '1', t: 'Analyse du besoin et programme', icon: FileText,
    d: "Masteria analyse les besoins de votre équipe et rédige le programme. Atlas, par exemple, exige un programme qui énonce l'objectif professionnel de la formation et en décrit le contenu.",
  },
  {
    n: '2', t: 'Convention de formation', icon: FileCheck,
    d: "Masteria établit la convention que le Code du travail impose entre l'acheteur de la formation et l'organisme qui la dispense (article L6353-1).",
  },
  {
    n: '3', t: 'Demande de prise en charge, avant la session', icon: MailCheck,
    d: "L'entreprise dépose sa demande sur l'espace en ligne de son OPCO. Le courrier d'accord fixe le montant pris en charge et dit si la subrogation s'applique ; les accords sont donnés dans la limite des fonds disponibles.",
  },
  {
    n: '4', t: 'Session et émargement', icon: Sparkles,
    d: "La formation a lieu dans vos locaux ou à distance, et chaque participant émarge. Les heures d'absence ne sont pas financées : Atlas rembourse au prorata des heures suivies.",
  },
  {
    n: '5', t: 'Facture, certificat de réalisation, paiement', icon: BadgeCheck,
    d: "Masteria émet sa facture, avec 20 % de TVA, et le certificat de réalisation. En subrogation, l'OPCO règle Masteria ; sinon, l'entreprise règle la facture et demande le remboursement de la part hors taxes avec ces deux pièces.",
  },
]

/* ══════════════════════════════════════════════════════════════════
 * SOUS-COMPOSANTS
 * ══════════════════════════════════════════════════════════════════ */

function CarteDispositif({ ok, icon: Icon, titre, badge, children }) {
  return (
    <div style={{
      background: ok ? '#fff' : '#FAFAF7',
      border: ok ? `1.5px solid ${GREEN}40` : '1.5px solid #E5E7EB',
      borderRadius: 14, padding: 'clamp(22px, 3vw, 28px) clamp(20px, 3vw, 32px)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10, flexWrap: 'wrap' }}>
        <Icon size={22} color={ok ? GREEN : NEUTRAL} />
        <h3 style={{ fontWeight: 800, fontSize: 19, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif', margin: 0 }}>
          {titre}
        </h3>
        <span style={{
          marginLeft: 'auto', background: ok ? GREEN_BG : '#F3F4F6', color: ok ? GREEN : '#4B5563',
          fontSize: 11, fontWeight: 800, padding: '3px 10px', borderRadius: 999,
          textTransform: 'uppercase', letterSpacing: '0.04em',
        }}>
          {badge}
        </span>
      </div>
      {children}
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════════
 * COMPOSANT
 * ══════════════════════════════════════════════════════════════════ */

export default function FinancementPage() {
  return (
    <>
      <SEOHead
        title="Financement formation IA : OPCO et TVA en 2026 | Masteria"
        description="Financer une formation IA avec votre OPCO en 2026 : Qualiopi, fonds des moins de 50 salariés, TVA de 20 %, remboursement hors taxes depuis le 1er octobre."
        slug="financement-formation-ia"
        keywords="financement formation ia, formation ia opco, prise en charge opco formation ia, réforme tva opco 2026, subrogation opco, formation ia qualiopi, formation ia cpf"
        breadcrumbs={[
          { name: 'Accueil', slug: '' },
          { name: 'Financer sa formation IA', slug: 'financement-formation-ia' },
        ]}
        faqItems={FAQ}
        datePublished={DATE_PUBLICATION}
        dateModified={DATE_MISE_A_JOUR}
        speakable={['#financement-resume', '#faq']}
        citations={CITATIONS}
      />

      {/* ═══════════════════════════════════════════════════════════
       * HERO : fond bleu doux, titre dégradé bleu, signature datée
       * ═══════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 60%, #DBEAFE 100%)',
        padding: 'clamp(80px, 12vw, 120px) 24px 72px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: 920, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fff', padding: '8px 16px', borderRadius: 999,
            fontSize: 13, fontWeight: 700, color: BLUE_DARK, marginBottom: 24,
            border: `1px solid ${BLUE}30`,
            boxShadow: '0 2px 8px rgba(37, 99, 235, 0.08)',
          }}>
            <CalendarClock size={16} color={BLUE} /> Règles de financement au 1er octobre 2026
          </div>

          <h1 style={{
            fontFamily: 'Nunito, sans-serif', fontWeight: 900,
            fontSize: 'clamp(34px, 5.5vw, 56px)', lineHeight: 1.08,
            color: '#0A0A0A', marginBottom: 18, letterSpacing: '-0.02em',
          }}>
            Financer votre formation IA <br />
            <span style={TITLE_GRADIENT}>avec votre OPCO, en 2026</span>
          </h1>

          {/* Signature E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: NEUTRAL, margin: '0 0 22px' }}>
            Par <Link to="/mathias-nizan" style={{ color: '#0A0A0A', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mis à jour en {LIBELLE_MISE_A_JOUR}
          </p>

          <p id="financement-resume" style={{
            fontSize: 'clamp(16.5px, 2.1vw, 19px)', color: '#3F3F46',
            lineHeight: 1.65, maxWidth: 800, margin: '0 auto 16px',
          }}>
            L'OPCO de votre entreprise, l'opérateur de compétences de sa branche, peut financer la formation
            IA de vos salariés si l'organisme qui la dispense est <strong>certifié Qualiopi</strong>, la
            certification qualité que la loi exige pour ce financement. Masteria est certifié au titre des actions de formation
            et forme à ChatGPT, Claude, Microsoft Copilot, Google Gemini et Mistral AI.
            La prise en charge peut aller <strong>jusqu'à 100&nbsp;% du coût hors taxes</strong> selon les critères
            de votre branche, et seul l'accord écrit de l'OPCO l'engage. Depuis le 1er octobre 2026, hors
            exceptions, l'entreprise règle la facture toutes taxes comprises, puis l'OPCO lui rembourse
            la part hors taxes.
          </p>

          {/* 3 repères vérifiés */}
          <div style={{
            display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap',
            margin: '32px 0 36px',
          }}>
            {[
              { value: '1er oct. 2026', label: "l'OPCO rembourse hors taxes, sauf exceptions" },
              { value: '50 salariés', label: "seuil des fonds mutualisés de l'OPCO" },
              { value: '38 %', label: 'reste à charge moyen en 2024 (France compétences)' },
            ].map(({ value, label }) => (
              <div key={label} style={{
                background: '#fff', padding: '14px 22px', borderRadius: 12,
                border: `1px solid ${BLUE}25`, minWidth: 200, maxWidth: 260,
                boxShadow: '0 4px 16px rgba(37, 99, 235, 0.06)',
              }}>
                <div style={{ ...TITLE_GRADIENT, fontFamily: 'Nunito, sans-serif', fontSize: 28, fontWeight: 900, lineHeight: 1.1 }}>
                  {nb(value)}
                </div>
                <div style={{ fontSize: 12.5, color: NEUTRAL, marginTop: 6, fontWeight: 600, lineHeight: 1.4 }}>
                  {nb(label)}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#0A0A0A', color: '#fff', padding: '16px 28px',
              borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.18)',
            }}>
              Demander un programme et un devis <ArrowRight size={18} />
            </Link>
            <a href="#tarifs" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#fff', color: '#0A0A0A', padding: '14px 26px',
              borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none',
              border: `2px solid ${BLUE}`,
            }}>
              Voir les tarifs
            </a>
          </div>

          {/* Sommaire ancré */}
          <nav aria-label="Sur cette page" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginTop: 28 }}>
            {SOMMAIRE.map(([label, href]) => (
              <a key={href} href={href} style={{
                fontSize: 13, fontWeight: 600, color: BLUE_DARK, textDecoration: 'none',
                background: '#fff', border: `1px solid ${BLUE}25`, borderRadius: 999, padding: '6px 12px',
              }}>
                {label}
              </a>
            ))}
          </nav>

          <div style={{
            marginTop: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 20, flexWrap: 'wrap',
          }}>
            <picture>
              <source type="image/webp" srcSet="/assets/qualiopi-logo.webp" />
              <img
                src="/assets/qualiopi-logo.png"
                alt="Logo Qualiopi, certification qualité de Masteria au titre des actions de formation"
                width={842}
                height={509}
                loading="lazy"
                style={{
                  height: 'auto', width: 'clamp(150px, 20vw, 200px)',
                  aspectRatio: '842 / 509',
                  display: 'block',
                }}
              />
            </picture>
            <div style={{ fontSize: 13, color: BLUE_DARK, fontWeight: 600, textAlign: 'left', maxWidth: 360, lineHeight: 1.5 }}>
              <BadgeCheck size={14} color={BLUE} style={{ verticalAlign: 'middle', marginRight: 6 }} />
              Masteria, certifié Qualiopi · certificat n°&nbsp;725311-1
              <div style={{ fontWeight: 500, color: '#374151', marginTop: 4 }}>
                La certification qualité a été délivrée au titre de la catégorie d'action suivante : actions de formation.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
       * TROIS TEMPS
       * ═══════════════════════════════════════════════════════════ */}
      <section style={{ padding: '72px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <h2 style={H2_CENTRE}>Le financement se décide avant la session</h2>
          <p style={SOUS_TITRE}>
            Masteria prépare les pièces et votre entreprise dépose la demande. L'OPCO décide ensuite, puis paie
            l'organisme ou rembourse l'entreprise.
          </p>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16,
          }}>
            {[
              {
                step: '1', icon: FileText, title: 'Masteria prépare le programme et la convention',
                desc: "Après l'analyse de votre besoin, Masteria rédige le programme, avec l'objectif professionnel et le contenu de la formation, puis la convention de formation que le Code du travail impose entre l'acheteur et l'organisme.",
              },
              {
                step: '2', icon: MailCheck, title: 'Votre entreprise dépose la demande avant la session',
                desc: "La demande se fait au nom de l'entreprise, sur l'espace en ligne de son OPCO, programme joint. Chez Atlas, une formation de l'année doit être demandée avant le 31 décembre de cette même année.",
              },
              {
                step: '3', icon: Receipt, title: "L'OPCO décide, puis paie ou rembourse",
                desc: "Le courrier d'accord fixe le montant et le mode de paiement. Soit l'OPCO règle Masteria à la place de l'entreprise (la subrogation), soit l'entreprise paie la facture et demande le remboursement de la part hors taxes, avec le certificat de réalisation qui atteste la formation.",
              },
            ].map(({ step, icon: Icon, title, desc }) => (
              <div key={title} style={{
                background: '#fff', borderRadius: 16, padding: 28,
                border: '1px solid #E5E7EB',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12, background: BLUE_LIGHT_BG,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Icon size={24} color={BLUE} strokeWidth={2.2} />
                  </div>
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 28, color: BLUE, lineHeight: 1 }}>
                    {step}
                  </div>
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 18, color: '#0A0A0A', marginTop: 0, marginBottom: 8 }}>
                  {title}
                </h3>
                <div style={{ color: '#4B5563', lineHeight: 1.6, fontSize: 14.5 }}>
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
       * RÉFORME DE LA TVA DES OPCO (1er octobre 2026)
       * ═══════════════════════════════════════════════════════════ */}
      <section id="reforme-tva" style={{ padding: '80px 24px', background: '#F9FAFB', borderTop: '1px solid #E5E7EB', scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <div style={KICKER}>
            <Scale size={15} color={BLUE} /> Réforme de la TVA des OPCO
          </div>
          <h2 style={H2}>Depuis le 1er octobre 2026, l'entreprise paie et l'OPCO rembourse</h2>
          <p style={{ color: '#374151', fontSize: 16, lineHeight: 1.7, maxWidth: 860, margin: '12px 0 32px' }}>
            Les règles de TVA applicables aux OPCO ont changé le 1er octobre 2026. Jusque-là, l'OPCO réglait
            souvent l'organisme de formation à la place de l'entreprise : c'est la subrogation de paiement.
            Elle devient l'exception. Tous les OPCO sont concernés, chacun avec ses modalités, et le courrier
            d'accord de prise en charge indique celle qui s'applique à votre dossier. Voyons le cas d'Atlas,
            l'OPCO des services financiers et du conseil, dont la FAQ détaille chaque situation.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 28 }}>
            <div style={{ background: '#fff', border: `1.5px solid ${GREEN}40`, borderRadius: 14, padding: '24px 26px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <CheckCircle size={20} color={GREEN} />
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 17, color: '#0A0A0A', margin: 0, lineHeight: 1.3 }}>
                  Atlas règle lui-même l'organisme dans quatre cas
                </h3>
              </div>
              <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {ATLAS_SUBROGATION.map(t => (
                  <li key={t} style={{ color: '#374151', fontSize: 14.5, lineHeight: 1.55 }}>{t}</li>
                ))}
              </ul>
            </div>
            <div style={{ background: '#fff', border: '1.5px solid #E5E7EB', borderRadius: 14, padding: '24px 26px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <Receipt size={20} color={BLUE} />
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 17, color: '#0A0A0A', margin: 0, lineHeight: 1.3 }}>
                  Dans les autres cas, l'entreprise paie puis se fait rembourser
                </h3>
              </div>
              <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {ATLAS_REMBOURSEMENT.map(t => (
                  <li key={t} style={{ color: '#374151', fontSize: 14.5, lineHeight: 1.55 }}>{t}</li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
            {POINTS_REFORME.map(({ icon: Icon, texte }) => (
              <div key={texte} style={{
                display: 'flex', gap: 14, alignItems: 'flex-start',
                background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12, padding: '16px 20px',
              }}>
                <Icon size={20} color={BLUE} style={{ flexShrink: 0, marginTop: 2 }} />
                <p style={{ margin: 0, color: '#374151', fontSize: 15, lineHeight: 1.65 }}>{nb(texte)}</p>
              </div>
            ))}
          </div>

          <div style={{
            padding: '18px 24px', background: BLUE_LIGHT_BG, borderRadius: 12,
            border: `1px solid ${BLUE}30`,
            display: 'flex', alignItems: 'flex-start', gap: 14,
          }}>
            <Info size={20} color={BLUE} style={{ flexShrink: 0, marginTop: 2 }} />
            <div style={{ color: '#374151', fontSize: 14.5, lineHeight: 1.65 }}>
              <strong style={{ color: '#0A0A0A' }}>Les autres OPCO appliquent la réforme avec leurs nuances.</strong>{' '}
              OPCO EP rembourse la part hors taxes et précise que la TVA reste à la charge de l'entreprise,
              qui peut la récupérer selon la réglementation fiscale qui lui est applicable. L'Afdas garde le paiement
              direct pour le plan des moins de 50 salariés quand la prise en charge repose sur cette seule
              enveloppe. Les règles de votre OPCO figurent sur son site et dans votre courrier d'accord.
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
       * TARIFS
       * ═══════════════════════════════════════════════════════════ */}
      <section id="tarifs" style={{ padding: '80px 24px', background: '#fff', borderTop: '1px solid #E5E7EB', scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <h2 style={H2_CENTRE}>Une journée de formation coûte 1&nbsp;980&nbsp;€&nbsp;HT, en groupe comme en individuel</h2>
          <p style={SOUS_TITRE}>
            Prix hors taxes, avant toute prise en charge. Masteria n'est pas exonéré de TVA : ses factures
            de formation portent une TVA de 20&nbsp;%.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 20 }}>
            {/* INDIVIDUEL */}
            <div style={{ background: '#fff', borderRadius: 16, padding: 32, border: '1.5px solid #E5E7EB' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: BLUE_LIGHT_BG, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <UserRound size={20} color={BLUE} />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 19, color: '#0A0A0A', margin: 0 }}>
                  Accompagnement individuel
                </h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6, flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 38, fontWeight: 900, color: '#0A0A0A' }}>1&nbsp;980&nbsp;€</span>
                <span style={{ color: NEUTRAL, fontSize: 14, fontWeight: 600 }}>HT / jour</span>
              </div>
              <p style={{ color: '#4B5563', lineHeight: 1.6, fontSize: 14.5, marginBottom: 16 }}>
                Une journée en tête-à-tête avec un formateur, pour un dirigeant, un expert métier ou un
                profil clé, sur ses propres dossiers.
              </p>
              <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['1 participant', 'Programme construit pour la personne', 'Présentiel ou distanciel'].map(t => (
                  <li key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#374151' }}>
                    <CheckCircle size={15} color={BLUE} /> {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* INTRA */}
            <div style={{
              background: 'linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 100%)',
              borderRadius: 16, padding: 32, border: `2px solid ${BLUE}`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Building2 size={20} color={BLUE} />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 19, color: '#0A0A0A', margin: 0 }}>
                  Intra entreprise
                </h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6, flexWrap: 'wrap' }}>
                <span style={{ ...TITLE_GRADIENT, fontFamily: 'Nunito, sans-serif', fontSize: 38, fontWeight: 900 }}>1&nbsp;980&nbsp;€</span>
                <span style={{ color: BLUE_DARK, fontSize: 14, fontWeight: 600 }}>HT / jour / groupe</span>
              </div>
              <p style={{ color: '#3F3F46', lineHeight: 1.6, fontSize: 14.5, marginBottom: 16 }}>
                Une session réservée à votre équipe, dans vos locaux ou à distance, sur les cas d'usage de
                vos métiers. Pour un groupe de 12, la journée revient à 165&nbsp;€&nbsp;HT par participant.
              </p>
              <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {["Jusqu'à 12 participants", "Programme construit sur vos cas d'usage", 'Présentiel ou distanciel'].map(t => (
                  <li key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#3F3F46' }}>
                    <CheckCircle size={15} color={BLUE} /> {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* SPRINT */}
            <div style={{ background: '#fff', borderRadius: 16, padding: 32, border: '1.5px solid #E5E7EB' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: BLUE_LIGHT_BG, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Zap size={20} color={BLUE} strokeWidth={2.4} />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 19, color: '#0A0A0A', margin: 0 }}>
                  Ateliers Sprint IA
                </h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6, flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 38, fontWeight: 900, color: '#0A0A0A' }}>Sur devis</span>
              </div>
              <p style={{ color: '#4B5563', lineHeight: 1.6, fontSize: 14.5, marginBottom: 16 }}>
                Un atelier de trois heures sur un sujet ciblé, pour lancer une équipe sur un usage précis.{' '}
                <Link to="/formation-sprint-ia" style={LIEN}>Voir les ateliers</Link>
              </p>
              <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['3 heures', 'Présentiel ou distanciel', 'Tarif établi sur devis'].map(t => (
                  <li key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#374151' }}>
                    <CheckCircle size={15} color={BLUE} /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Ce que l'OPCO prend en charge */}
          <div style={{
            marginTop: 32, padding: '20px 24px', background: '#F9FAFB', borderRadius: 12,
            border: `1px solid ${BLUE}25`, display: 'flex', alignItems: 'flex-start', gap: 14,
          }}>
            <Shield size={22} color={BLUE} style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontWeight: 700, color: '#0A0A0A', marginBottom: 4 }}>
                La part prise en charge dépend de votre branche
              </div>
              <div style={{ color: '#374151', fontSize: 14, lineHeight: 1.65 }}>
                Le conseil d'administration de chaque OPCO définit ce qu'il prend en charge (article L6332-17
                du Code du travail). Chez Atlas, il fixe des forfaits ou des plafonds par dispositif et les révise
                tout au long de l'année ; la règle applicable est celle en vigueur le jour où la demande arrive,
                et les accords sont donnés dans la limite des fonds disponibles. Une journée à 1&nbsp;980&nbsp;€&nbsp;HT peut
                donc être couverte en tout ou en partie : seul l'accord écrit de l'OPCO le dit.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
       * MISE EN SITUATION (chiffres fictifs pour l'accord, règles Atlas)
       * ═══════════════════════════════════════════════════════════ */}
      <section id="mise-en-situation" style={{ padding: '80px 24px', background: '#F9FAFB', borderTop: '1px solid #E5E7EB', scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <div style={KICKER}>
            <Calculator size={14} color={BLUE} /> Mise en situation
          </div>
          <h2 style={H2}>Deux jours de formation, deux circuits de paiement : le calcul complet</h2>
          <p style={{ color: '#374151', lineHeight: 1.7, fontSize: 16, maxWidth: 860, margin: '12px 0 28px' }}>
            Deux cabinets de conseil adhérents d'Atlas, l'un de 30 salariés, l'autre de 80, forment chacun huit
            personnes à l'IA pendant deux jours, en intra : 2 × 1&nbsp;980&nbsp;€ = 3&nbsp;960&nbsp;€&nbsp;HT, soit 4&nbsp;752&nbsp;€ avec la TVA
            de 20&nbsp;%. Supposons pour chacun un accord de prise en charge de 2&nbsp;000&nbsp;€&nbsp;HT. Ce montant est fictif :
            seul votre OPCO fixe le vrai, selon votre branche. Pour le cabinet de 80 salariés, il viendrait de
            fonds de branche ou de versements volontaires.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 16 }}>
            {SCENARIOS.map(({ titre, sousTitre, lignes }) => (
              <div key={titre} style={{ background: '#fff', borderRadius: 14, border: `1px solid ${BLUE}20`, overflow: 'hidden' }}>
                <div style={{ padding: '18px 20px', borderBottom: '1px solid #F3F4F6' }}>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 18, color: '#0A0A0A', margin: 0 }}>{titre}</h3>
                  <div style={{ fontSize: 13, color: NEUTRAL, marginTop: 4, lineHeight: 1.45 }}>{sousTitre}</div>
                </div>
                {lignes.map(({ label, val, detail, fort }, i) => (
                  <div key={label} style={{
                    display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'flex-start', flexWrap: 'wrap',
                    padding: '12px 20px',
                    borderBottom: i < lignes.length - 1 ? '1px solid #F3F4F6' : 'none',
                    background: fort ? BLUE_LIGHT_BG : 'transparent',
                  }}>
                    <span style={{ fontSize: 13.5, color: NEUTRAL, fontWeight: 600, flex: '1 1 140px' }}>{label}</span>
                    <span style={{ textAlign: 'right', flex: '0 1 auto' }}>
                      <span style={{
                        display: 'block', fontSize: fort ? 16 : 14.5, fontWeight: fort ? 800 : 700,
                        color: fort ? BLUE_DARK : '#0A0A0A', fontFamily: fort ? 'Nunito, sans-serif' : 'inherit',
                      }}>
                        {nb(val)}
                      </span>
                      {detail && <span style={{ display: 'block', fontSize: 12.5, color: NEUTRAL }}>{nb(detail)}</span>}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <p style={{ color: '#374151', lineHeight: 1.7, fontSize: 15.5, maxWidth: 860, margin: '24px 0 10px' }}>
            Pour une entreprise qui récupère la TVA, le coût final reste de 1&nbsp;960&nbsp;€ dans les deux cas. La
            trésorerie, elle, change : le cabinet de 80 salariés avance 4&nbsp;752&nbsp;€, deux fois plus que l'autre, puis
            attend le remboursement. Pour une structure qui ne récupère pas la TVA, les 400&nbsp;€ de TVA sur la part
            financée deviennent un coût.
          </p>
          <p style={{ color: BLUE_DARK, fontSize: 13.5, fontWeight: 600, lineHeight: 1.6, margin: 0 }}>
            Entreprises et accord fictifs, prix Masteria réels, règles d'Atlas au 3 octobre 2026. Les autres OPCO
            ont leurs propres modalités : lisez votre courrier d'accord.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
       * DISPOSITIFS DE FINANCEMENT
       * ═══════════════════════════════════════════════════════════ */}
      <section id="dispositifs" style={{ padding: '80px 24px', background: '#fff', borderTop: '1px solid #E5E7EB', scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <h2 style={H2_CENTRE}>Deux dispositifs financent une formation IA en 2026, trois sont à écarter</h2>
          <p style={SOUS_TITRE}>
            Chaque règle ci-dessous a été vérifiée le 3 octobre 2026 sur les sites de l'administration et des
            OPCO, listés en bas de page.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            <CarteDispositif ok icon={CheckCircle} titre="Le plan de développement des compétences, avec votre OPCO" badge="Voie principale">
              <p style={{ color: '#374151', lineHeight: 1.65, margin: '0 0 12px' }}>
                Le plan de développement des compétences regroupe les formations que l'employeur décide pour
                ses salariés. Toute entreprise peut en avoir un, quelle que soit sa taille. La formation a lieu
                en principe sur le temps de travail, avec maintien du salaire, et son coût reste à la charge de
                l'entreprise, hors la part que finance l'OPCO.
              </p>
              <p style={{ color: '#374151', lineHeight: 1.65, margin: '0 0 16px' }}>
                Pour les entreprises de <strong>moins de 50 salariés</strong>, l'OPCO dispose de fonds mutualisés,
                issus des contributions formation que versent les employeurs : la loi lui permet de payer les
                coûts de formation, la rémunération des salariés formés et leurs frais annexes, et son conseil
                d'administration fixe ce qu'il prend en charge. Depuis 2019, les
                entreprises de <strong>50 salariés et plus</strong> n'ont plus accès à ces fonds ; il leur reste les
                budgets que certaines branches financent par une contribution conventionnelle, et les
                versements volontaires à l'OPCO.
              </p>
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 14,
                background: BLUE_LIGHT_BG, padding: 16, borderRadius: 10, marginBottom: 8,
              }}>
                {STATS_FRANCE_COMPETENCES.map(({ lbl, val, note }) => (
                  <div key={lbl}>
                    <div style={{ fontSize: 11.5, color: BLUE_DARK, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{lbl}</div>
                    <div style={{ fontSize: 17, color: '#0A0A0A', fontWeight: 800, marginTop: 2 }}>{nb(val)}</div>
                    {note && <div style={{ fontSize: 12.5, color: '#4B5563', marginTop: 2 }}>{nb(note)}</div>}
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 12.5, color: NEUTRAL, lineHeight: 1.5, margin: '0 0 14px' }}>
                Formations de salariés appuyées par des fonds publics ou mutualisés, gérés pour l'essentiel par
                les OPCO. Source : France compétences, rapport sur l'usage des fonds 2025, fiche publiée le
                26 février 2026.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {OPCO_LIST.map(o => (
                  <span key={o.name} style={{
                    background: BLUE_LIGHT_BG, border: `1px solid ${BLUE}25`, borderRadius: 8,
                    padding: '4px 10px', fontSize: 12.5, fontWeight: 600, color: BLUE_DARK,
                  }}>{o.name}</span>
                ))}
              </div>
            </CarteDispositif>

            <CarteDispositif ok icon={CheckCircle} titre="Entrepreneur individuel : votre fonds d'assurance formation" badge="Indépendants">
              <p style={{ color: '#374151', lineHeight: 1.65, margin: 0 }}>
                L'entrepreneur individuel, micro-entrepreneur compris, paie chaque année la contribution à la
                formation professionnelle, qui lui ouvre un droit à la formation. Le fonds compétent dépend de
                son activité : l'<strong>Agefice</strong> pour les commerçants, le <strong>FAFCEA</strong> pour
                les artisans, le <strong>FIF PL</strong> pour les professions libérales.
              </p>
            </CarteDispositif>

            <CarteDispositif icon={XCircle} titre="CPF : non applicable aux formations Masteria" badge="Non éligible">
              <p style={{ color: '#374151', lineHeight: 1.65, margin: 0 }}>
                Le compte personnel de formation sert, à l'initiative du salarié, à suivre des formations
                certifiantes, une validation des acquis de l'expérience, un bilan de compétences ou certains
                permis de conduire, proposés sur Mon Compte Formation. <strong>Masteria n'est pas éligible au CPF.</strong>
              </p>
            </CarteDispositif>

            <CarteDispositif icon={XCircle} titre="FNE-Formation : suspendu depuis 2025" badge="Fermé">
              <p style={{ color: '#374151', lineHeight: 1.65, margin: 0 }}>
                Cette aide de l'État, gérée par les OPCO, a financé jusqu'en 2024 des formations liées aux
                transitions écologique et numérique. Elle a été suspendue en 2025, et l'annexe au projet de loi
                de finances pour 2026 consacrée à la formation professionnelle écarte son rétablissement en 2026.
              </p>
            </CarteDispositif>

            <CarteDispositif icon={AlertCircle} titre="Crédit d'impôt pour la formation des dirigeants : supprimé" badge="Supprimé">
              <p style={{ color: '#374151', lineHeight: 1.65, margin: 0 }}>
                Il ne s'applique plus aux formations suivies depuis le 1er janvier 2025. Un guide qui le
                présente encore comme ouvert n'est plus à jour.
              </p>
            </CarteDispositif>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
       * FINANCER UN PROJET DE CONSEIL OU DE DÉVELOPPEMENT IA
       * ═══════════════════════════════════════════════════════════ */}
      <section id="conseil-developpement" style={{ padding: '80px 24px', background: '#F9FAFB', borderTop: '1px solid #E5E7EB', scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <div style={KICKER}>
            <Lightbulb size={15} color={BLUE} /> Conseil et développement IA
          </div>
          <h2 style={H2}>Un projet de conseil ou de développement IA se finance hors OPCO</h2>

          {/* Réponse directe citable */}
          <p style={{
            fontSize: 16.5, color: '#0A0A0A', lineHeight: 1.7, maxWidth: 860,
            margin: '12px 0 24px', fontWeight: 500,
            background: '#fff', border: '1px solid #E5E7EB',
            borderLeft: `3px solid ${BLUE}`, borderRadius: '0 12px 12px 0',
            padding: '20px 24px',
          }}>
            L'OPCO finance la formation des salariés. Pour les entreprises de moins de 50 salariés, l'article
            L6332-17 du Code du travail liste ce qu'il peut payer, dont les coûts des formations, la
            rémunération des salariés formés et des diagnostics en vue de former ; la conception d'un agent ou
            d'un outil IA ne figure pas dans cette liste. Un projet de conseil ou de développement relève du
            budget de l'entreprise, que certains dispositifs publics peuvent alléger selon sa nature.
          </p>

          <p style={{ color: '#374151', fontSize: 15.5, lineHeight: 1.7, maxWidth: 860, marginBottom: 32 }}>
            Masteria cite ces dispositifs par transparence. Aucun taux ni aucune prise en charge n'est promis :
            l'éligibilité se vérifie auprès de chaque organisme et, pour les crédits d'impôt, avec votre
            expert-comptable.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 16, marginBottom: 28 }}>
            {DISPOSITIFS_PROJET.map(({ icon: Icon, name, desc }) => (
              <div key={name} style={{ background: '#fff', borderRadius: 14, padding: '24px 26px', border: '1px solid #E5E7EB' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 10, background: BLUE_LIGHT_BG,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Icon size={21} color={BLUE} strokeWidth={2.2} />
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 16.5, color: '#0A0A0A', margin: 0, lineHeight: 1.25 }}>
                    {name}
                  </h3>
                </div>
                <p style={{ color: '#374151', fontSize: 14, lineHeight: 1.65, margin: 0 }}>
                  {nb(desc)}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            padding: '18px 24px', background: '#fff', borderRadius: 12, border: '1px solid #E5E7EB',
            display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 28,
          }}>
            <Info size={20} color={NEUTRAL} style={{ flexShrink: 0, marginTop: 2 }} />
            <div style={{ color: '#374151', fontSize: 14, lineHeight: 1.6 }}>
              Masteria n'instruit pas ces dispositifs et ne garantit aucune éligibilité. Masteria fournit le
              devis détaillé et la description du projet ; la décision revient à l'organisme financeur, et à
              votre expert-comptable pour les crédits d'impôt.
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/diagnostic-ia" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: BLUE, color: '#fff', padding: '14px 26px',
              borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none',
            }}>
              Cadrer mon projet avec un diagnostic IA <ArrowRight size={17} />
            </Link>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#fff', color: '#0A0A0A', padding: '12px 24px',
              borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none',
              border: `2px solid ${BLUE}`,
            }}>
              Demander un devis projet
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
       * QUEL OPCO POUR MOI
       * ═══════════════════════════════════════════════════════════ */}
      <section id="quel-opco" style={{ padding: '80px 24px', background: '#fff', scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 920, margin: '0 auto' }}>
          <h2 style={H2_CENTRE}>Votre convention collective désigne votre OPCO</h2>
          <p style={SOUS_TITRE}>
            Près de 329 branches professionnelles se répartissent entre 11 OPCO. Le champ de chacun figure
            ci-dessous, d'après le ministère du Travail et les sites des OPCO.{' '}
            Pour un résultat immédiat, utilisez notre <Link to="/quel-opco" style={{ color: BLUE, fontWeight: 600 }}>simulateur « Quel est mon OPCO ? »</Link>.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12 }}>
            {OPCO_LIST.map(o => (
              <div key={o.name} style={{
                background: '#FAFAF7', borderRadius: 12, padding: '18px 22px',
                border: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column', gap: 8,
              }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 18, color: '#0A0A0A' }}>
                  {o.name}
                </div>
                <div style={{ fontSize: 13.5, color: '#4B5563', lineHeight: 1.5 }}>
                  {o.secteur}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 32, padding: '20px 28px', background: BLUE_LIGHT_BG, borderRadius: 12,
            border: `1px solid ${BLUE}30`, display: 'flex', alignItems: 'flex-start', gap: 14,
          }}>
            <AlertCircle size={22} color={BLUE} style={{ flexShrink: 0, marginTop: 2 }} />
            <div style={{ color: '#374151', fontSize: 14.5, lineHeight: 1.65 }}>
              <strong style={{ color: '#0A0A0A' }}>Vous ne savez pas de quel OPCO vous dépendez ?</strong>{' '}
              Saisissez le SIRET de l'établissement dans l'outil{' '}
              <a href="https://quel-est-mon-opco.francecompetences.fr/" target="_blank" rel="noopener noreferrer" style={LIEN}>« Quel est mon OPCO » de France compétences</a>,
              ou relevez l'IDCC, le code à quatre chiffres de votre convention collective, sur une fiche de paie.
              Le champ d'activité ne sert de repère que si l'entreprise n'applique aucune convention collective.
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
       * 5 ÉTAPES
       * ═══════════════════════════════════════════════════════════ */}
      <section id="etapes" style={{ padding: '80px 24px', background: '#F9FAFB', borderTop: '1px solid #E5E7EB', scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={H2_CENTRE}>De la demande au paiement, un dossier passe par cinq étapes</h2>
          <p style={SOUS_TITRE}>
            Masteria prépare les pièces ; l'entreprise, employeur des participants, porte la demande.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {ETAPES.map(({ n, t, d, icon: Icon }) => (
              <div key={n} style={{
                display: 'flex', gap: 18, alignItems: 'flex-start',
                background: '#fff', borderRadius: 14, padding: '20px 24px', border: '1px solid #E5E7EB',
              }}>
                <div style={{
                  flexShrink: 0, width: 48, height: 48, borderRadius: 12,
                  background: BLUE_LIGHT_BG, color: BLUE,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
                }}>
                  <Icon size={22} strokeWidth={2.2} />
                  <span style={{
                    position: 'absolute', top: -6, right: -6, width: 22, height: 22, borderRadius: '50%',
                    background: '#0A0A0A', color: '#fff', fontSize: 11, fontWeight: 800, fontFamily: 'Nunito, sans-serif',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {n}
                  </span>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, color: '#0A0A0A', marginBottom: 4, fontSize: 17 }}>{t}</div>
                  <div style={{ color: '#4B5563', lineHeight: 1.6, fontSize: 14.5 }}>{nb(d)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
       * QUALIOPI
       * ═══════════════════════════════════════════════════════════ */}
      <section id="qualiopi" style={{ padding: '60px 24px', background: '#fff', scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{
            background: 'linear-gradient(135deg, #0F172A 0%, #1E40AF 100%)',
            borderRadius: 20, padding: 'clamp(28px, 4vw, 44px)', color: '#fff',
            display: 'flex', flexWrap: 'wrap', gap: 28, alignItems: 'center',
          }}>
            <div style={{
              background: '#fff', borderRadius: 20, padding: 18,
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
              flexShrink: 0, maxWidth: 220,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
            }}>
              <picture>
                <source type="image/webp" srcSet="/assets/qualiopi-logo.webp" />
                <img
                  src="/assets/qualiopi-logo.png"
                  alt="Logo Qualiopi, certification qualité de Masteria au titre des actions de formation"
                  width={842}
                  height={509}
                  loading="lazy"
                  style={{
                    height: 'auto', width: 'clamp(140px, 16vw, 170px)',
                    aspectRatio: '842 / 509', display: 'block',
                  }}
                />
              </picture>
              <div style={{ fontSize: 11.5, color: '#374151', lineHeight: 1.4, textAlign: 'center' }}>
                La certification qualité a été délivrée au titre de la catégorie d'action suivante : actions de formation.
              </div>
            </div>
            <div style={{ flex: '1 1 320px', minWidth: 0 }}>
              <div style={{
                display: 'inline-block', background: '#fff', color: BLUE_DARK,
                fontSize: 11, fontWeight: 800, padding: '3px 10px', borderRadius: 999,
                textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10,
              }}>
                Certification qualité
              </div>
              <h2 style={{
                fontFamily: 'Nunito, sans-serif', fontWeight: 800,
                fontSize: 'clamp(20px, 2.6vw, 26px)', marginBottom: 10, color: '#fff',
              }}>
                Qualiopi conditionne le financement par l'OPCO
              </h2>
              <p style={{ color: '#CBD5E1', lineHeight: 1.65, fontSize: 15, margin: '0 0 10px' }}>
                Depuis le 1er janvier 2022, un organisme doit être certifié Qualiopi pour être financé par un
                OPCO, l'État, une région, la Caisse des dépôts, France Travail ou l'Agefiph (article L6316-1 du
                Code du travail). La certification atteste la qualité du processus, évaluée sur les sept critères
                du référentiel national qualité. Elle vaut trois ans, avec un audit de surveillance entre le
                14e et le 22e mois.
              </p>
              <p style={{ color: '#CBD5E1', lineHeight: 1.65, fontSize: 15, margin: '0 0 10px' }}>
                Masteria est certifié au titre des actions de formation : certificat n°&nbsp;725311-1 délivré par
                Certifopac, valable du 29 janvier 2026 au 28 janvier 2029. Déclaration d'activité enregistrée
                sous le numéro 84&nbsp;69&nbsp;23218&nbsp;69 auprès du préfet de la région Auvergne-Rhône-Alpes. Cet
                enregistrement ne vaut pas agrément de l'État.
              </p>
              <p style={{ color: '#CBD5E1', lineHeight: 1.65, fontSize: 14, margin: 0 }}>
                Toute certification se vérifie sur la{' '}
                <a href="https://www.data.gouv.fr/datasets/liste-publique-des-organismes-de-formation-l-6351-7-1-du-code-du-travail" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: 2 }}>
                  liste publique des organismes de formation
                </a>{' '}
                publiée sur data.gouv.fr.
              </p>
              <a
                href="/assets/qualiopi-certificat-masteria.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  color: '#fff', fontWeight: 700, fontSize: 14, textDecoration: 'none',
                  marginTop: 16, background: 'rgba(255, 255, 255, 0.12)',
                  border: '1px solid rgba(255, 255, 255, 0.3)', padding: '10px 16px', borderRadius: 10,
                }}
              >
                Voir le certificat Qualiopi de Masteria (PDF) <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
       * FAQ
       * ═══════════════════════════════════════════════════════════ */}
      <section id="faq" style={{ padding: '80px 24px', background: '#F9FAFB', borderTop: '1px solid #E5E7EB', scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={{ ...H2_CENTRE, fontSize: 'clamp(28px, 4vw, 36px)' }}>
            Questions fréquentes sur le financement d'une formation IA
          </h2>
          <p style={{ textAlign: 'center', color: NEUTRAL, fontSize: 16, marginBottom: 32, lineHeight: 1.6 }}>
            Les questions que posent les directions et les services RH, avec des réponses vérifiées sur les
            sources officielles.
          </p>
          {FAQ.map((item) => (
            <details key={item.q} style={{ borderBottom: '1px solid #E5E7EB', padding: '20px 0' }}>
              <summary style={{
                cursor: 'pointer', fontWeight: 700, fontSize: 16.5,
                color: '#0A0A0A', listStyle: 'none', display: 'flex',
                justifyContent: 'space-between', alignItems: 'flex-start', gap: 12,
                fontFamily: 'Nunito, sans-serif',
              }}>
                <span>{nb(item.q)}</span>
                <span style={{ flexShrink: 0, color: BLUE, fontWeight: 800, fontSize: 22, lineHeight: 1 }}>+</span>
              </summary>
              <p style={{ marginTop: 12, color: '#374151', lineHeight: 1.7, fontSize: 15.5 }}>
                {nb(item.a)}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
       * CTA FINAL
       * ═══════════════════════════════════════════════════════════ */}
      <section style={{
        padding: '80px 24px',
        background: 'linear-gradient(135deg, #0A0A0A 0%, #1E40AF 100%)',
        color: '#fff', textAlign: 'center',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <BadgeCheck size={44} color="#fff" style={{ marginBottom: 16 }} />
          <h2 style={{
            fontFamily: 'Nunito, sans-serif', fontWeight: 800,
            fontSize: 'clamp(28px, 4vw, 38px)', marginBottom: 16, letterSpacing: '-0.01em',
          }}>
            Masteria prépare le programme et la convention de votre formation IA
          </h2>
          <p style={{ fontSize: 17, color: '#D1D5DB', marginBottom: 8, lineHeight: 1.6 }}>
            Votre entreprise dépose ensuite la demande auprès de son OPCO, avant la session.
          </p>
          <p style={{ fontSize: 15, color: '#9CA3AF', marginBottom: 32, lineHeight: 1.6 }}>
            Le courrier d'accord dira qui règle Masteria et ce qui vous sera remboursé. Lisez-le avant la
            session : depuis le 1er octobre, c'est lui qui indique le circuit de paiement.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#fff', color: BLUE_DARK, padding: '16px 32px',
              borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
            }}>
              Demander un devis <ArrowRight size={18} />
            </Link>
            <Link to="/formation-intelligence-artificielle" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'transparent', color: '#fff', padding: '14px 30px',
              borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none',
              border: '2px solid #fff',
            }}>
              Voir le catalogue
            </Link>
          </div>
          <div style={{ marginTop: 32, display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap', fontSize: 13.5, color: '#CBD5E1' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Shield size={14} color="#fff" /> Certifié Qualiopi, actions de formation
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <MapPin size={14} color="#fff" /> Cabinet fondé à Lyon en 2022
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Users size={14} color="#fff" /> Présentiel ou distanciel
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
       * SOURCES OFFICIELLES (mêmes URL que WebPage.citation)
       * ═══════════════════════════════════════════════════════════ */}
      <section id="sources-officielles" aria-labelledby="sources-officielles-titre" style={{ padding: '56px 24px', background: '#FAFAF7', borderTop: '1px solid #E5E7EB', scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 id="sources-officielles-titre" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>
            Sources officielles
          </h2>
          <p style={{ color: NEUTRAL, fontSize: 15, lineHeight: 1.6, margin: '0 0 24px' }}>
            Chaque règle de cette page a été vérifiée le 3 octobre 2026 sur les sites de l'administration et
            des OPCO ci-dessous. Les modalités des OPCO évoluent en cours d'année : leur site et votre courrier
            d'accord font foi.
          </p>
          <div style={{ display: 'grid', gap: 24 }}>
            {SOURCE_GROUPS.map(({ titre, items }) => (
              <div key={titre}>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 10px' }}>
                  {titre}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8, fontSize: 14.5, lineHeight: 1.55 }}>
                  {items.map(({ name, url, note }) => (
                    <li key={url}>
                      <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#1A62FF', textDecoration: 'underline', textUnderlineOffset: '2px', fontWeight: 600 }}>
                        {name}
                      </a>
                      {note && <span style={{ color: NEUTRAL }}> : {nb(note)}.</span>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

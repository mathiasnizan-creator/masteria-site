import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, Bot, CalendarCheck, EyeOff, FileSearch, FileText, GitBranch, Handshake, KeyRound, MessageSquare, PackageCheck, Scale, ShieldCheck, Workflow } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page « Sous-traitance développement web » (créée le 23/10/2026).
 * Cluster développement, spoke de /agence-developpement-web.
 * Lecteur : agence web ou de communication, ESN, éditeur de logiciel, ou
 * entreprise qui confie une partie de son développement.
 * Thèse : une sous-traitance réussie se joue sur trois écrits signés avant la
 * première ligne de code (périmètre, propriété du code, confidentialité vis-à-vis
 * du client final).
 * Tableau à insight : marque blanche / co-traitance visible / régie / forfait,
 * comparés sur relation client final, pilotage, responsabilité, facturation,
 * propriété du code.
 * Cadre légal vérifié le 23/10/2026 sur Légifrance (loi 75-1334, CPI L113-9 et
 * L131-3), code.travail.gouv.fr (L8222-1, L8241-1), service-public (F31422,
 * vérifiée le 06/07/2026) et cnil.fr (RGPD art. 28). Texte pédagogique, sans
 * conseil juridique personnalisé.
 * Prix : fourchettes Masteria autorisées uniquement, TJM non publié.
 * Accent bleu #2563EB.
 */

const SITE = 'https://www.master-ia.fr'
const SLUG = 'sous-traitance-developpement-web'
const FULL_URL = `${SITE}/${SLUG}`
const c = '#2563EB'
const cLight = '#DBEAFE'
const DATE_PUBLISHED = '2026-10-23'
const DATE_MODIFIED = '2026-10-23'
const RDV_URL = '/contact?type=projet&rdv=30'

const URL_LOI_1975 = 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000889241'
const URL_CPI_L131_3 = 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958'
const URL_CPI_L113_9 = 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278890'
const URL_VIGILANCE = 'https://entreprendre.service-public.gouv.fr/vosdroits/F31422'
const URL_L8222_1 = 'https://code.travail.gouv.fr/code-du-travail/l8222-1'
const URL_L8241_1 = 'https://code.travail.gouv.fr/code-du-travail/l8241-1'
const URL_RGPD_28 = 'https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4#Article28'
const URL_AI_ACT = 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=OJ:L_202401689'

const META_TITLE = 'Sous-traitance développement web, marque blanche | Masteria'
const META_DESC = "Sous-traitance développement web et IA pour agences et ESN : marque blanche, régie ou forfait, propriété du code, confidentialité, loi de 1975."
const KEYWORDS = 'sous-traitance développement web, sous traitance developpement web, sous-traitant développement web, développement web en marque blanche, marque blanche développement, renfort développeur, régie développeur, sous-traiter le développement d\'un site, sous-traiter une application, sous-traitance développement IA, développeur IA en marque blanche, loi 1975 sous-traitance, attestation de vigilance'

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
const linkStyle = { color: c, fontWeight: 600 }
const darkLinkStyle = { color: '#93C5FD', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }

const EN_BREF = [
  ['Ce que l\'on confie', "Un lot de code (un module, une intégration, une application entière) ou des jours de développeur, pour le compte d'une agence, d'une ESN, d'un éditeur ou d'une entreprise qui garde la relation avec son propre client."],
  ['Quatre formats', 'Marque blanche, co-traitance visible, régie avec un développeur intégré à votre équipe, ou forfait sur un lot délimité.'],
  ['Trois écrits avant de coder', 'Le périmètre du lot, la cession des droits sur le code, les règles de confidentialité vis-à-vis de votre client final.'],
  ['Textes à connaître', 'Loi n° 75-1334 du 31 décembre 1975, attestation de vigilance URSSAF dès 5 000 € HT, article 28 du RGPD, articles L113-9 et L131-3 du code de la propriété intellectuelle.'],
  ['Les briques IA', "Assistant, recherche dans des documents (RAG), agent, automatisation : la partie qu'une agence confie souvent à un spécialiste en gardant le design et le client."],
  ['Avec Masteria', 'Environ cinq développeurs indépendants (IA et web), au forfait ou en régie, sous votre nom si vous le décidez. Code et documentation vous sont remis.'],
]

/* Les trois écrits qui précèdent le code */
const ECRITS = [
  {
    icon: FileText,
    title: 'Le périmètre du lot',
    body: "Il liste ce que le lot livre et ce qu'il exclut, qui fournit quoi (maquettes, contenus, accès aux serveurs, comptes chez le fournisseur du modèle d'IA), le critère de recette et la personne qui la prononce. Une ligne sur l'après-livraison tranche la question qui fâche le plus souvent : qui corrige un défaut découvert trois mois plus tard, et à quel prix.",
    items: ['Livrables et exclusions', 'Dépendances et dates de fourniture', 'Critère et responsable de recette', 'Garantie et maintenance'],
  },
  {
    icon: KeyRound,
    title: 'La propriété du code',
    body: "La loi attribue à l'employeur les droits sur un logiciel écrit par ses salariés (article L113-9 du code de la propriété intellectuelle). Un sous-traitant, société ou indépendant, conserve les siens tant qu'un acte ne les cède pas. La chaîne doit donc courir sans maillon manquant : du sous-traitant vers vous, de vous vers votre client.",
    items: ['Droits nommés un par un', 'Étendue, destination, lieu, durée', 'Date du transfert (recette ou paiement)', 'Composants open source et réutilisés listés à part'],
  },
  {
    icon: EyeOff,
    title: 'La confidentialité vis-à-vis du client final',
    body: "L'écrit dit si le sous-traitant peut être nommé, s'il parle à votre client et sous quelle identité, s'il peut citer le projet parmi ses références. Il fixe une non-sollicitation dans les deux sens et les règles sur les données de votre client : lieu d'hébergement, personnes qui y accèdent, date d'effacement.",
    items: ['Visibilité et identité du sous-traitant', 'Non-sollicitation réciproque', 'Droit de citer le projet', 'Accès, hébergement et effacement des données'],
  },
]

/* Tableau à insight : quatre formats de sous-traitance */
const FORMATS = [
  {
    format: 'Marque blanche',
    relation: 'Vous seul. Le sous-traitant reste invisible, ou se présente sous votre nom et votre adresse.',
    pilotage: 'Vous, avec un interlocuteur unique chez le sous-traitant.',
    resp: 'Entière devant votre client ; le sous-traitant répond devant vous, dans les limites de votre contrat.',
    factu: 'Le sous-traitant vous facture ; vous facturez votre client, marge comprise.',
    code: 'Deux cessions à aligner : sous-traitant vers vous, puis vous vers votre client.',
    highlight: true,
  },
  {
    format: 'Co-traitance visible',
    relation: 'Les deux prestataires sont connus du client et souvent présents aux mêmes réunions.',
    pilotage: 'Partagé ; un mandataire coordonne le groupement.',
    resp: 'Chacun sur son lot, solidaire si le contrat de groupement le prévoit.',
    factu: 'Chaque cotraitant facture sa part au client.',
    code: 'Chaque prestataire cède directement au client le code qu\'il a écrit.',
  },
  {
    format: 'Régie (renfort intégré à votre équipe)',
    relation: 'Vous ; le développeur peut assister aux réunions client sous votre bannière.',
    pilotage: 'Vous fixez les priorités ; le prestataire garde l\'encadrement de son développeur.',
    resp: 'Le prestataire s\'engage sur la compétence et la présence (obligation de moyens) ; le résultat du projet reste à votre charge.',
    factu: 'Au jour travaillé, sur relevé mensuel.',
    code: 'Cession prévue au contrat-cadre pour tout ce qui est produit pendant la mission.',
    highlight: true,
  },
  {
    format: 'Forfait sur un lot',
    relation: 'Vous, ou le sous-traitant présenté comme partenaire technique, selon votre choix.',
    pilotage: 'Le sous-traitant, dans un périmètre et un calendrier écrits.',
    resp: 'Le sous-traitant s\'engage sur le livrable et sa recette (obligation de résultat).',
    factu: 'Prix global fixé d\'avance, souvent réglé par jalons.',
    code: 'Cession à la recette ou au paiement complet, date à écrire noir sur blanc.',
    highlight: true,
  },
]

/* Briques IA qu'une agence sous-traite le plus souvent */
const BRIQUES = [
  { icon: MessageSquare, title: 'Assistant conversationnel', livre: "Le moteur de dialogue, les consignes données au modèle, le branchement sur le site ou l'application de votre client.", garde: "L'interface, le ton de la marque, la validation des réponses types avec le client." },
  { icon: FileSearch, title: 'Recherche dans des documents (RAG)', livre: "L'indexation des documents du client, la recherche des passages utiles, la citation des sources dans la réponse.", garde: 'Le choix des documents autorisés, avec le client, et leur mise à jour.' },
  { icon: Bot, title: 'Agent IA', livre: "Un programme qui choisit lui-même les actions à mener (chercher, rédiger, créer une fiche dans le CRM) dans des droits limités.", garde: 'La définition de ce que l\'agent a le droit de faire, signée par le client.' },
  { icon: Workflow, title: 'Automatisation', livre: 'Des enchaînements entre logiciels, sous n8n ou en code, avec un modèle de langage aux étapes qui demandent de lire ou de rédiger.', garde: 'La cartographie des tâches à automatiser et la recette avec les utilisateurs.' },
]

const POINTS_IA = [
  ['Compte et clés d\'API', "Ouverts au nom de votre client final chez le fournisseur du modèle (Anthropic, OpenAI, Google, Mistral), pour qu'il garde la main sur la facture, les réglages de conservation des données et la suite du projet."],
  ['Coût par requête', 'Estimé avant la recette, avec un plafond mensuel et une alerte. Une brique d\'IA consomme à chaque utilisation, ce que ne fait pas une page web.'],
  ['Jeu de tests', "Une liste de cas avec la réponse attendue pour chacun, livrée avec le code et relancée dès qu'un prompt ou un modèle change. Elle sert de critère de recette."],
  ['Fournisseur du modèle', "S'il reçoit des données personnelles, il devient un sous-traitant ultérieur au sens de l'article 28 du RGPD : votre client doit l'autoriser par écrit."],
  ['Information des utilisateurs', "L'article 50 de l'AI Act impose de signaler aux personnes qu'elles échangent avec une IA. Le message se prévoit dès les maquettes."],
]

/* Déroulé d'un renfort Masteria */
const ETAPES = [
  { icon: CalendarCheck, title: 'Trente minutes pour qualifier le lot', body: "Vous décrivez le projet vendu, la technologie, l'échéance et ce que votre client sait de l'intervention d'un tiers. Nous vous disons si le besoin relève du forfait ou de la régie, et quel profil de notre réseau y répond." },
  { icon: FileText, title: 'Les trois écrits, avant tout code', body: "Périmètre, cession des droits, règles de confidentialité, et accord RGPD si des données personnelles circulent. Nous partons de vos propres modèles de contrat quand vous en avez." },
  { icon: GitBranch, title: 'Le travail dans vos outils', body: 'Le développeur travaille dans votre dépôt Git, votre outil de tickets et votre messagerie d\'équipe, avec les conventions de code que vous fixez. En marque blanche, il utilise l\'identité que vous lui attribuez.' },
  { icon: Handshake, title: 'Des livraisons utilisables et un point hebdomadaire', body: 'Chaque livraison se teste dans votre environnement de recette. Une fois par semaine, un point fait le compte de ce qui est terminé, de ce qui bloque et de ce qui suit.' },
  { icon: PackageCheck, title: 'La remise complète', body: 'Code, documentation, jeu de tests pour les briques d\'IA, accès rendus. Votre équipe peut reprendre le module et le faire évoluer sans nous.' },
]

/* Cadre légal, vérifié sur sources officielles le 23/10/2026 */
const CADRE = [
  {
    title: 'Loi n° 75-1334 du 31 décembre 1975 relative à la sous-traitance',
    url: URL_LOI_1975,
    linkLabel: 'Texte sur Légifrance',
    paras: [
      "Son article 1 définit la sous-traitance comme l'opération par laquelle un entrepreneur confie, sous sa responsabilité, tout ou partie de l'exécution d'un contrat d'entreprise ou d'un marché public à un sous-traitant. Une commande de développement relève en principe du contrat d'entreprise.",
      "L'article 3 oblige l'entrepreneur principal à faire accepter chaque sous-traitant par son client, le maître de l'ouvrage, et à faire agréer ses conditions de paiement. Accepté et agréé, le sous-traitant dispose d'une action directe contre ce client si l'entrepreneur principal ne le paie pas un mois après une mise en demeure (article 12). Sans acceptation, l'entrepreneur principal reste tenu envers son sous-traitant mais ne peut pas lui opposer le contrat de sous-traitance.",
      "Une marque blanche totale, où le client ignore l'existence du sous-traitant, se place donc en dehors de cette procédure d'acceptation. Le choix mérite d'être fait en connaissance de cause, et d'être vérifié contre le contrat signé avec le client final, qui interdit parfois toute sous-traitance.",
    ],
  },
  {
    title: 'Obligation de vigilance du donneur d\'ordre',
    url: URL_VIGILANCE,
    linkLabel: 'Fiche service-public.gouv.fr',
    paras: [
      "Pour tout contrat d'au moins 5 000 € HT, montant apprécié sur la prestation globale même payée ou facturée en plusieurs fois, vous réclamez à votre sous-traitant son attestation de vigilance URSSAF à la signature. L'attestation n'est valable que six mois : vous la redemandez tous les six mois jusqu'à la fin de la prestation (article L8222-1 du code du travail).",
      "Faute de vérification, le donneur d'ordre s'expose à la solidarité financière prévue aux articles L8222-1 à L8222-7 du code du travail si son cocontractant a recours au travail dissimulé. Service-public annonce l'extension de l'obligation à l'ensemble des sous-traitants d'une chaîne, en attente d'un décret à paraître au plus tard le 27 décembre 2026.",
    ],
  },
  {
    title: 'RGPD, article 28 : le contrat de sous-traitance de données',
    url: URL_RGPD_28,
    linkLabel: 'Texte sur cnil.fr',
    paras: [
      "Dès que le développeur accède à des données personnelles pour le compte de votre client (comptes utilisateurs, formulaires, historique des conversations d'un assistant), un contrat écrit doit fixer l'objet et la durée du traitement, sa nature, sa finalité, les types de données et les catégories de personnes concernées.",
      "Ce contrat oblige le sous-traitant à n'agir que sur instruction documentée, à garantir la confidentialité et la sécurité, à aider le responsable de traitement, à supprimer ou restituer les données en fin de prestation et à accepter les audits. Il ne peut faire appel à un autre sous-traitant (un hébergeur, un fournisseur de modèle d'IA) qu'avec une autorisation écrite préalable.",
    ],
  },
  {
    title: 'Code de la propriété intellectuelle : la cession écrite des droits',
    url: URL_CPI_L131_3,
    linkLabel: 'Article L131-3 sur Légifrance',
    paras: [
      "L'article L113-9 donne à l'employeur les droits patrimoniaux sur les logiciels et leur documentation créés par ses employés dans l'exercice de leurs fonctions. Ce mécanisme ne joue pas pour un prestataire extérieur : son code ne change de mains que par une cession.",
      "L'article L131-3 exige que chacun des droits cédés fasse l'objet d'une mention distincte dans l'acte, et que le domaine d'exploitation soit délimité quant à son étendue, sa destination, son lieu et sa durée. Une clause vague du type « le client devient propriétaire de tout » expose à une contestation.",
    ],
  },
  {
    title: 'Régie et prêt de main-d\'œuvre',
    url: URL_L8241_1,
    linkLabel: 'Article L8241-1 du code du travail',
    paras: [
      "L'article L8241-1 du code du travail interdit toute opération à but lucratif ayant pour objet exclusif le prêt de main-d'œuvre, hors travail temporaire et quelques exceptions. Une régie se décrit donc comme une prestation : une compétence, des tâches, des livrables, le prestataire gardant l'encadrement de son intervenant. Vous fixez les priorités du projet ; le lien hiérarchique reste chez le prestataire.",
    ],
  },
]

const SOURCES = [
  { name: 'Loi n° 75-1334 du 31 décembre 1975 relative à la sous-traitance (Légifrance)', note: 'définition, acceptation du sous-traitant, action directe.', url: URL_LOI_1975 },
  { name: 'Service-public.gouv.fr, « Comment obtenir une attestation de vigilance ? »', note: 'seuil de 5 000 € HT, validité de six mois, extension annoncée à toute la chaîne (page vérifiée le 6 juillet 2026).', url: URL_VIGILANCE },
  { name: 'Code du travail, article L8222-1', note: 'vérification à la conclusion du contrat puis périodiquement jusqu\'à son terme.', url: URL_L8222_1 },
  { name: 'Code du travail, article L8241-1', note: 'interdiction du prêt de main-d\'œuvre à but lucratif.', url: URL_L8241_1 },
  { name: 'RGPD, article 28, sur le site de la CNIL', note: 'clauses obligatoires du contrat entre responsable de traitement et sous-traitant.', url: URL_RGPD_28 },
  { name: 'Code de la propriété intellectuelle, article L113-9 (Légifrance)', note: 'dévolution à l\'employeur des droits sur les logiciels de ses employés.', url: URL_CPI_L113_9 },
  { name: 'Code de la propriété intellectuelle, article L131-3 (Légifrance)', note: 'mention distincte de chaque droit cédé et délimitation du domaine d\'exploitation.', url: URL_CPI_L131_3 },
  { name: "Règlement (UE) 2024/1689 sur l'intelligence artificielle (EUR-Lex)", note: 'obligation d\'informer les personnes qui échangent avec une IA (article 50).', url: URL_AI_ACT },
]

const FAQ = [
  {
    q: "Qu'est-ce que la sous-traitance en développement web ?",
    a: "C'est le fait, pour une agence, une ESN ou un éditeur qui a vendu un site ou une application, de confier tout ou partie du code à une autre entreprise. L'entreprise qui a signé avec le client final reste responsable devant lui ; le sous-traitant répond devant elle. En France, la loi n° 75-1334 du 31 décembre 1975 en donne le cadre général, et le contrat de sous-traitance en fixe le périmètre, le prix, la propriété du code et la confidentialité.",
  },
  {
    q: 'Comment fonctionne le développement web en marque blanche ?',
    a: "Le sous-traitant écrit le code, vous le présentez et le facturez comme le vôtre. Votre client n'a qu'un interlocuteur, vous. Pour que le montage tienne, trois points s'écrivent : l'identité sous laquelle le développeur apparaît s'il doit apparaître, la cession des droits sur le code jusqu'à votre client, et l'interdiction pour le sous-traitant de démarcher ce client. Vérifiez aussi que votre contrat avec le client n'interdit pas la sous-traitance.",
  },
  {
    q: 'Faut-il déclarer un sous-traitant développement web au client final ?',
    a: "L'article 3 de la loi de 1975 demande à l'entrepreneur principal de faire accepter chaque sous-traitant par son client et de faire agréer ses conditions de paiement. Cette acceptation ouvre au sous-traitant une action directe contre le client en cas d'impayé. Beaucoup d'agences travaillent en marque blanche sans déclaration ; c'est un choix qui a des conséquences sur la protection du sous-traitant et sur ce que vous pouvez lui opposer. Faites-le valider par votre conseil.",
  },
  {
    q: 'À qui appartient le code écrit par un sous-traitant ?',
    a: "Au sous-traitant, tant qu'il ne l'a pas cédé par écrit. Le transfert automatique à l'employeur prévu par l'article L113-9 du code de la propriété intellectuelle concerne les seuls salariés. La cession doit nommer chaque droit (reproduire, modifier, distribuer, adapter) et délimiter son étendue, sa destination, son lieu et sa durée, comme l'exige l'article L131-3. Les bibliothèques open source et les composants que le sous-traitant réutilise d'un projet à l'autre se listent à part, avec leur licence.",
  },
  {
    q: 'Quels documents demander à un sous-traitant développeur ?',
    a: "Pour un contrat d'au moins 5 000 € HT : son attestation de vigilance URSSAF à la signature, puis tous les six mois jusqu'à la fin de la mission. Si des données personnelles de votre client passent entre ses mains, un contrat conforme à l'article 28 du RGPD. Ajoutez son attestation d'assurance de responsabilité civile professionnelle et, pour un indépendant, la preuve de son immatriculation.",
  },
  {
    q: 'Régie ou forfait : quel format pour un renfort développeur ?',
    a: "La régie convient quand votre équipe pilote déjà le projet et qu'il lui manque des bras ou une compétence : le développeur s'intègre à vos rituels et suit vos priorités, et vous payez au jour travaillé. Le forfait convient quand vous pouvez isoler un lot avec un début, une fin et un critère de recette : le sous-traitant s'engage sur le résultat pour un prix fixé d'avance. Un même projet peut combiner les deux.",
  },
  {
    q: "Peut-on sous-traiter seulement la partie IA d'un projet web ?",
    a: "Oui, et c'est souvent le découpage le plus sain : votre agence garde le design, l'intégration et la relation avec le client, le sous-traitant livre l'assistant, la recherche dans les documents ou l'agent, par une interface documentée. Ajoutez au périmètre ce qu'un lot web ne demande pas : le titulaire du compte chez le fournisseur du modèle, le plafond de consommation et le jeu de tests qui servira de recette.",
  },
  {
    q: 'Comment protéger la relation avec mon client quand je sous-traite ?',
    a: "Par une clause de non-sollicitation qui interdit au sous-traitant de démarcher votre client pendant la mission et pendant une durée fixée après, et par une règle écrite sur les échanges directs : autorisés ou non, sous quelle identité, avec copie à qui. Le droit de citer le projet en référence se règle dans la même clause.",
  },
  {
    q: "Combien coûte la sous-traitance du développement d'un site ou d'une application ?",
    a: "Au forfait, le prix dépend du lot et se fixe une fois le périmètre écrit. En régie, vous payez un taux journalier convenu au contrat. Chez Masteria, un prototype de brique d'IA démarre autour de 8 000 € HT, un module en production se chiffre en dizaines de milliers d'euros, et un gros déploiement peut dépasser 100 000 €. Votre propre marge s'ajoute dans la facture à votre client.",
  },
  {
    q: 'Un sous-traitant peut-il lui-même sous-traiter mon projet ?',
    a: "Seulement si votre contrat l'autorise. Écrivez-le : sous-traitance en cascade interdite, ou soumise à votre accord préalable. Pour les données personnelles, l'article 28 du RGPD impose de toute façon une autorisation écrite du responsable de traitement avant de faire intervenir un autre sous-traitant, et service-public annonce l'extension de l'obligation de vigilance à toute la chaîne.",
  },
  {
    q: 'Masteria travaille-t-il en marque blanche pour des agences et des ESN ?',
    a: "Oui. Masteria met à disposition des développeurs indépendants de son réseau (IA et web), au forfait sur un lot ou en régie au sein de votre équipe, dans vos locaux ou en télétravail, sous votre nom si vous le décidez. Mathias Nizan répond du travail devant vous. À la remise, vous recevez le code, sa documentation et la cession des droits prévue au contrat. Un appel de 30 minutes suffit pour savoir si le lot nous correspond, sans engagement.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${FULL_URL}#service`,
  name: 'Sous-traitance de développement web et IA en marque blanche ou en régie',
  serviceType: 'Sous-traitance de développement web',
  provider: { '@id': `${SITE}/#organization` },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Place', name: 'Europe' },
    { '@type': 'Country', name: 'États-Unis' },
    { '@type': 'Country', name: 'Inde' },
  ],
  audience: { '@type': 'BusinessAudience', audienceType: 'Agences web, agences de communication, ESN, éditeurs de logiciels' },
  description: "Développeurs indépendants (IA et web) pilotés par Masteria pour des agences, ESN et éditeurs : lots au forfait après cadrage ou renfort en régie, en marque blanche si besoin, notamment sur les briques d'IA (assistant, RAG, agent, automatisation). Code et documentation remis.",
  url: FULL_URL,
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: '8000',
    // Pas de highPrice : plafond ouvert, prix au forfait après cadrage, régie au TJM non publié.
    availability: 'https://schema.org/InStock',
    seller: { '@id': `${SITE}/#organization` },
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${FULL_URL}#article`,
  headline: 'Sous-traitance développement web : réussir un renfort en marque blanche, en régie ou au forfait',
  description: META_DESC,
  author: { '@id': `${SITE}/#mathias-nizan` },
  editor: { '@id': `${SITE}/#mathias-nizan` },
  publisher: { '@id': `${SITE}/#organization` },
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': `${FULL_URL}#webpage` },
  about: [{ '@id': `${FULL_URL}#service` }, 'Sous-traitance informatique', 'Développement web en marque blanche'],
  mentions: ['Loi n° 75-1334 du 31 décembre 1975', 'Attestation de vigilance URSSAF', 'RGPD article 28', 'Code de la propriété intellectuelle', 'RAG', 'Agent IA'],
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '#definition', 'h2'] },
  citation: SOURCES.map(s => s.url),
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
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, padding: '0 0 20px', margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

export default function SousTraitanceDeveloppementWebPage() {
  const isDesktop = useIsDesktop()
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop ? { position: 'sticky', top: 130, alignSelf: 'start' } : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Développement web', slug: 'agence-developpement-web' },
    { name: 'Sous-traitance', slug: SLUG },
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }} aria-current="page">Sous-traitance</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 22 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Handshake size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Pour les agences, ESN et éditeurs
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.7vw, 48px)', fontWeight: 900, lineHeight: 1.06, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.03em', maxWidth: 860 }}>
            Sous-traitance développement web
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>réussir un renfort en marque blanche, en régie ou au forfait</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria, qui place des développeurs IA et web chez des agences et des ESN · mise à jour le 23 octobre 2026
          </p>

          {/* GEO : réponse directe citable */}
          <p id="definition" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 26px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            <strong style={{ color: '#fff', fontWeight: 700 }}>La sous-traitance de développement web consiste à confier à une autre entreprise tout ou partie du code d'un site ou d'une application que vous avez vendu à votre client</strong>. Vous restez responsable devant ce client, le sous-traitant répond devant vous. La loi du 31 décembre 1975 en pose le cadre ; trois écrits signés avant de coder en font une réussite.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 34px', maxWidth: 680 }}>
            Agences web, ESN et éditeurs y recourent pour absorber un pic de charge, tenir un délai ou livrer une technologie qu'ils ne pratiquent pas encore. Une partie de ces renforts porte désormais sur l'IA : un assistant à intégrer au site d'un client, un agent branché sur son CRM, une automatisation entre ses logiciels.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 40 }}>
            <Link to={RDV_URL} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Parler de votre lot en 30 minutes
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#formats" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Comparer les quatre formats
            </a>
          </div>

          {/* En bref (GEO) */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 14, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 760 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 16 }}>En bref</div>
            <dl style={{ margin: 0, display: 'grid', gap: 14 }}>
              {EN_BREF.map(([k, v], i) => (
                <div key={k} style={{ paddingTop: i === 0 ? 0 : 14, borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', marginBottom: 4 }}>{k}</dt>
                  <dd style={{ margin: 0, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── SOMMAIRE ancré ── */}
      <nav aria-label="Sur cette page" style={{ background: '#fff', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 4, overflowX: 'auto', whiteSpace: 'nowrap' }}>
          <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#9CA3AF', paddingRight: 8, flexShrink: 0 }}>Sur cette page</span>
          {[
            ['#trois-ecrits', 'Trois écrits'],
            ['#formats', 'Quatre formats'],
            ['#briques-ia', 'Briques IA'],
            ['#deroule', 'Déroulé'],
            ['#cadre-legal', 'Cadre légal'],
            ['#prix', 'Prix'],
            ['#faq', 'FAQ'],
          ].map(([href, label]) => (
            <a key={href} href={href} style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 700, color: '#374151', textDecoration: 'none', padding: '13px 12px', flexShrink: 0 }}>{label}</a>
          ))}
        </div>
      </nav>

      {/* ── THÈSE : trois écrits ── */}
      <section id="trois-ecrits" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={kickerStyle}>Avant la première ligne de code</div>
          <h2 style={h2Style}>Une sous-traitance réussie se joue sur trois écrits signés avant de coder</h2>
          <p style={{ ...calloutStyle, background: '#F9FAFB' }}>
            <strong>Les sous-traitances qui tournent mal butent rarement sur la technique.</strong>{' '}
            Elles butent sur une question restée sans réponse écrite : ce que le lot comprend, à qui appartient le code, ce que l'on peut dire au client final. Chacune de ces questions finit par se poser, le plus souvent au pire moment, pendant la recette ou au premier impayé.
          </p>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Les trois écrits tiennent souvent en quelques pages annexées au contrat-cadre. Les rédiger demande une demi-journée ; les reconstituer au milieu d'un désaccord coûte bien davantage.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
            {ECRITS.map((e, i) => {
              const Icon = e.icon
              return (
                <article key={e.title} style={{ ...cardStyle, borderTop: `3px solid ${c}`, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                    <div style={iconBoxStyle}>
                      <Icon size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                    </div>
                    <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: c }}>{`Écrit ${i + 1}`}</span>
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(17px, 2vw, 20px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 10px', letterSpacing: '-0.01em' }}>{e.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: '0 0 16px' }}>{e.body}</p>
                  <ul style={{ listStyle: 'none', padding: '14px 0 0', margin: 'auto 0 0', borderTop: '1px solid #E5E7EB', display: 'grid', gap: 8 }}>
                    {e.items.map(it => (
                      <li key={it} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: 13.5, color: '#374151', lineHeight: 1.5 }}>
                        <BadgeCheck size={15} strokeWidth={2.4} style={{ color: c, flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── TABLEAU À INSIGHT : quatre formats ── */}
      <section id="formats" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={kickerStyle}>Choisir le format</div>
          <h2 style={h2Style}>Marque blanche, co-traitance, régie ou forfait : quatre façons de sous-traiter</h2>
          <p style={calloutStyle}>
            <strong>Le format décide de qui répond devant votre client et du nombre de cessions de droits à signer.</strong>{' '}
            Dans les quatre cas, le code écrit par un prestataire extérieur ne vous appartient qu'à partir du jour où un acte vous le cède. La marque blanche demande le plus de rigueur : deux cessions à aligner, et un sous-traitant que votre client ignore.
          </p>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Les lignes marquées correspondent aux formats que Masteria pratique avec les agences et les ESN.
          </p>

          <div style={tableWrapStyle}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 1040 }}>
              <caption style={srOnlyStyle}>Quatre formats de sous-traitance de développement web comparés sur la relation avec le client final, le pilotage, la responsabilité, la facturation et la propriété du code</caption>
              <thead>
                <tr>
                  <th scope="col" style={thStyle}>Format</th>
                  <th scope="col" style={thStyle}>Relation avec le client final</th>
                  <th scope="col" style={thStyle}>Pilotage</th>
                  <th scope="col" style={thStyle}>Responsabilité</th>
                  <th scope="col" style={thStyle}>Facturation</th>
                  <th scope="col" style={thStyle}>Propriété du code</th>
                </tr>
              </thead>
              <tbody>
                {FORMATS.map((f, i) => {
                  const td = { padding: '16px 18px', verticalAlign: 'top', fontSize: 13.5, color: '#374151', lineHeight: 1.6, borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }
                  return (
                    <tr key={f.format} style={f.highlight ? { background: 'rgba(37,99,235,0.06)' } : undefined}>
                      <th scope="row" style={{ ...td, fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, color: f.highlight ? c : '#0A0A0A', textAlign: 'left', minWidth: 160, lineHeight: 1.45 }}>
                        {f.format}
                        {f.highlight && (
                          <span style={{ display: 'flex', width: 'fit-content', alignItems: 'center', gap: 6, background: c, color: '#fff', borderRadius: 99, padding: '4px 10px', fontSize: 11.5, fontWeight: 800, marginTop: 10, whiteSpace: 'nowrap' }}>
                            <BadgeCheck size={13} strokeWidth={2.4} aria-hidden="true" />
                            Pratiqué par Masteria
                          </span>
                        )}
                      </th>
                      <td style={{ ...td, minWidth: 190 }}>{f.relation}</td>
                      <td style={{ ...td, minWidth: 160 }}>{f.pilotage}</td>
                      <td style={{ ...td, minWidth: 190 }}>{f.resp}</td>
                      <td style={{ ...td, minWidth: 150 }}>{f.factu}</td>
                      <td style={{ ...td, minWidth: 190 }}>{f.code}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            <strong>Une voie médiane existe :</strong> la sous-traitance déclarée. Votre client sait qu'un spécialiste intervient et l'accepte, sans contrat direct avec lui. C'est le schéma que décrit la loi de 1975, et celui qui protège le mieux le sous-traitant en cas d'impayé (voir le <a href="#cadre-legal" style={linkStyle}>cadre légal</a>). Pour un renfort d'une seule personne sur une longue durée, la fiche <Link to="/developpeur-ia" style={linkStyle}>développeur IA</Link> compare aussi le freelance et le poste interne.
          </p>
        </div>
      </section>

      {/* ── BRIQUES IA ── */}
      <section id="briques-ia" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={kickerStyle}>Le cas des briques d'IA</div>
          <h2 style={h2Style}>Sous-traiter la partie IA d'un projet web : ce que le contrat doit prévoir en plus</h2>
          <p style={{ ...calloutStyle, background: '#F9FAFB' }}>
            <strong>Une brique d'IA pose trois questions qu'un lot web classique ignore : qui détient le compte chez le fournisseur du modèle, qui paie la consommation, et comment prouver que les réponses sont justes.</strong>{' '}
            Une agence qui sait livrer un site mais pas encore un assistant peut confier cette brique à un spécialiste et garder tout le reste.
          </p>
          <p style={mutedStyle}>
            Pour chaque brique, voici ce que livre le sous-traitant et ce que votre agence a intérêt à garder.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: 20, marginBottom: 'clamp(44px, 6vw, 64px)' }}>
            {BRIQUES.map(b => {
              const Icon = b.icon
              return (
                <article key={b.title} style={cardStyle}>
                  <div style={{ ...iconBoxStyle, marginBottom: 14 }}>
                    <Icon size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', margin: '0 0 12px' }}>{b.title}</h3>
                  <p style={{ fontSize: 13, fontWeight: 800, color: c, textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 4px', fontFamily: 'Nunito, sans-serif' }}>Le sous-traitant livre</p>
                  <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.65, margin: '0 0 12px' }}>{b.livre}</p>
                  <p style={{ fontSize: 13, fontWeight: 800, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 4px', fontFamily: 'Nunito, sans-serif' }}>Votre agence garde</p>
                  <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.65, margin: 0 }}>{b.garde}</p>
                </article>
              )
            })}
          </div>

          <div style={editorialGrid}>
            <div style={editorialAside}>
              <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 14px', letterSpacing: '-0.01em' }}>Cinq lignes à ajouter au périmètre d'un lot IA</h3>
              <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Elles évitent les deux surprises les plus fréquentes après la mise en ligne : une facture de consommation que personne n'attendait, et un client qui découvre qu'il ne contrôle pas le compte de son propre assistant.
              </p>
            </div>
            <dl style={{ margin: 0, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, overflow: 'hidden' }}>
              {POINTS_IA.map(([t, d], i) => (
                <div key={t} style={{ padding: '20px 24px', borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }}>
                  <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', marginBottom: 6 }}>{t}</dt>
                  <dd style={{ margin: 0, fontSize: 14.5, color: '#374151', lineHeight: 1.7 }}>{d}</dd>
                </div>
              ))}
            </dl>
          </div>

          <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: '40px 0 0', maxWidth: 880 }}>
            Le fonctionnement de ces briques, leurs choix techniques et leurs limites sont détaillés sur notre page <Link to="/agence-developpement-ia" style={linkStyle}>agence de développement IA</Link>. Les étapes d'un projet complet, du cadrage à la mise en service, figurent dans notre <Link to="/methode-projet-ia" style={linkStyle}>méthode de projet IA</Link>.
          </p>
        </div>
      </section>

      {/* ── DÉROULÉ ── */}
      <section id="deroule" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Travailler avec Masteria</div>
          <h2 style={h2Style}>Comment se déroule un renfort de développeurs Masteria dans votre agence</h2>
          <p style={leadStyle}>
            Nos développeurs s'insèrent dans votre organisation : vos outils, vos conventions, votre calendrier de livraison au client. Ce qui change pour vous tient surtout aux premiers jours, consacrés aux écrits.
          </p>
          <p style={mutedStyle}>
            Les cinq étapes valent pour le forfait comme pour la régie ; seul le pilotage du quotidien change de mains.
          </p>

          <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
            {ETAPES.map((e, i) => {
              const Icon = e.icon
              return (
                <li key={e.title} style={{ ...cardStyle, borderTop: `3px solid ${c}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 11, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={21} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                    </div>
                    <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: c }}>{`Étape ${i + 1}`}</span>
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(16.5px, 2vw, 19px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{e.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>{e.body}</p>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      {/* ── CADRE LÉGAL (ancre sombre) ── */}
      <section id="cadre-legal" style={{ scrollMarginTop: 96, position: 'relative', padding: SECTION_PAD, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <Scale size={20} strokeWidth={2.2} style={{ color: '#60A5FA' }} aria-hidden="true" />
            <span style={{ ...kickerStyle, color: '#60A5FA', margin: 0 }}>Droit français et européen</span>
          </div>
          <h2 style={{ ...h2Style, color: '#F8FAFC' }}>Le cadre légal d'une sous-traitance de développement web</h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 14px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Quatre textes encadrent une sous-traitance de développement en France : la loi de 1975, l'obligation de vigilance du code du travail, l'article 28 du RGPD et le code de la propriété intellectuelle.</strong>{' '}
            Une cinquième règle concerne la régie.
          </p>
          <p style={{ fontSize: 15, color: '#B4C0D3', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Ce résumé, relu sur les textes officiels le 23 octobre 2026, vous aide à poser les bonnes questions. Il ne remplace pas l'avis d'un avocat sur votre contrat.
          </p>

          <div style={{ display: 'grid', gap: 18 }}>
            {CADRE.map((b, i) => (
              <article key={b.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(22px, 3vw, 30px)' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13, fontWeight: 900, color: '#60A5FA' }}>{String(i + 1).padStart(2, '0')}</span>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(17px, 2vw, 20px)', fontWeight: 800, color: '#F8FAFC', margin: 0, letterSpacing: '-0.01em' }}>{b.title}</h3>
                </div>
                {b.paras.map(p => (
                  <p key={p.slice(0, 40)} style={{ fontSize: 14.5, color: '#CBD5E1', lineHeight: 1.75, margin: '0 0 12px', maxWidth: 900 }}>{p}</p>
                ))}
                <a href={b.url} target="_blank" rel="noopener noreferrer" style={{ ...darkLinkStyle, fontSize: 13 }}>{b.linkLabel}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRIX ── */}
      <section id="prix" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>Budget</div>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Combien coûte une sous-traitance de développement web</h2>
              <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Le prix suit le format : un forfait se chiffre sur un périmètre écrit, une régie se paie à la journée. Votre marge s'ajoute ensuite dans la facture à votre client.
              </p>
            </div>
            <div>
              <div style={{ display: 'grid', gap: 14, marginBottom: 24 }}>
                {[
                  ['Un prototype de brique d\'IA', 'À partir d\'environ 8 000 € HT', 'Un assistant ou un agent qui fonctionne sur un échantillon de documents ou de cas, pour convaincre votre client avant d\'engager la suite.'],
                  ['Un module ou un outil en production', 'Plusieurs dizaines de milliers d\'euros HT', 'Branché sur les logiciels du client, testé, sécurisé, documenté et remis.'],
                  ['Un déploiement important', 'Au-delà de 100 000 € HT', 'Plusieurs briques, plusieurs équipes ou plusieurs pays ; le budget peut atteindre plusieurs centaines de milliers d\'euros.'],
                  ['Un renfort en régie', 'Taux journalier fixé au contrat', 'Nous ne publions pas notre taux : il dépend du profil, de la durée et du lieu d\'intervention.'],
                ].map(([t, m, d]) => (
                  <div key={t} style={{ ...cardStyle, padding: 22, display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 220px' }}>
                      <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', marginBottom: 4 }}>{t}</div>
                      <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.65, margin: 0 }}>{d}</p>
                    </div>
                    <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 900, color: c, flex: '0 1 220px' }}>{m}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: '0 0 12px' }}>
                Le prix d'un forfait se fixe après le cadrage, une fois les trois écrits posés. Les ordres de grandeur par type d'outil figurent sur notre page <Link to="/prix-projet-ia" style={linkStyle}>prix d'un projet IA</Link>.
              </p>
              <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                Le développement n'ouvre pas droit à une prise en charge par l'OPCO. La formation de vos propres développeurs, elle, peut en bénéficier : nos formations sont certifiées Qualiopi, à 1 980 € HT la journée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>FAQ</div>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Onze questions d'agences et d'ESN sur la sous-traitance du développement</h2>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: '0 0 16px' }}>Votre contrat client pose un cas particulier ?</p>
              <Link to="/contact" style={{ color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, textDecoration: 'none' }}>
                Décrivez-le-nous
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

      {/* ── CTA FINALE ── */}
      <section style={{ background: '#fff', padding: SECTION_PAD }}>
        <div style={{ position: 'relative', overflow: 'hidden', maxWidth: 1080, margin: '0 auto', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Votre lot</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Un projet vendu, une brique qui manque à votre équipe
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 620, marginLeft: 'auto', marginRight: 'auto' }}>
              Dites-nous ce que vous avez promis à votre client, pour quand, et ce qu'il sait de l'intervention d'un tiers. En une demi-heure, vous savez quel format retenir et quel développeur peut tenir le lot.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 24 }}>
              <Link to={RDV_URL} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 30px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 700 }}>
                Prendre 30 minutes pour cadrer le renfort
                <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
              </Link>
              <Link to="/agence-developpement-web" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 600, border: '1px solid #2A3650' }}>
                Nos développements web
              </Link>
            </div>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Visio, avec une proposition de créneau sous 24 heures · Forfait ou régie, en marque blanche si vous le souhaitez
            </p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : qui construit ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 280 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Qui code pour vous</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Des développeurs indépendants choisis lot par lot, dont Mathias Nizan répond devant vous
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Ils pratiquent React, Next.js, TypeScript, Node.js et Python, Supabase et PostgreSQL, Vercel, les API des CRM et des ERP comme Odoo, n8n et les modèles Claude, GPT, Gemini et Mistral. Masteria construit et exploite avec eux ses propres outils : ce site, aux pages prérendues pour le référencement, et la plateforme qui gère ses formations et ses clients, sous Next.js et Supabase. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>missions IA documentées</Link> montrent la façon de travailler.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['≈ 5', 'développeurs IA et web indépendants'],
              ['Marque blanche', 'si votre client ne doit voir que vous'],
              ['Code cédé', 'avec sa documentation'],
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
      <section aria-labelledby="sources-sous-traitance" style={{ padding: '56px 24px', background: '#FAFAF7', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 id="sources-sous-traitance" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>
            Textes officiels cités
          </h2>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.6, margin: '0 0 20px' }}>
            Consultés le 23 octobre 2026. Les textes évoluent : reportez-vous à leur version en vigueur avant de signer.
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

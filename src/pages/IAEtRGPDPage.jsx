import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, ShieldCheck, Scale, Filter, Info, UserCheck, Clock, Lock,
  ScrollText, FileSearch, Landmark, ExternalLink, GraduationCap,
  BookOpen,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { PressMention } from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page money « IA et RGPD » (slug /ia-et-rgpd). Cible : « ia et rgpd », « ia rgpd »,
 * « rgpd et ia », « rgpd ia », « outil ia conforme rgpd », « cnil ia », « aipd ia ».
 *
 * ANGLE PROPRE (07/10/2026) : les données personnelles. Articles du RGPD appliqués aux
 * usages d'IA, AIPD, contrat de traitement, transferts, garanties des éditeurs, CNIL.
 * Les rôles sont sur /gouvernance-ia, le document de charte sur /charte-ia-entreprise,
 * l'éthique sur /ia-responsable, la formation au règlement IA sur /formation-ai-act.
 *
 * Réécrite le 07/10/2026 (texte propre à la page) : plus de CaseStudyCards, de
 * FounderNote ni d'OfficialSources. Tableau des éditeurs mis à jour d'après la fiche de
 * faits du 07/10/2026 (Mistral Vibe Team : entraînement actif par défaut, coupé par
 * l'administrateur ; Copilot : EU Data Boundary sauf modèles Anthropic et SpaceXAI ;
 * Anthropic : pas de région européenne en direct). Liens CNIL vérifiés le 07/10/2026 :
 * Q&R IA générative (18/07/2024), recommandations finalisées (22/07/2025), contrôles
 * 2026 (03/04/2026), Q&R règlement IA (mise à jour du 17/08/2026), page AIPD, registre,
 * texte du RGPD par chapitre (ancres #ArticleN).
 */

const SLUG = 'ia-et-rgpd'
const c = '#2563EB'
const cLight = '#DBEAFE'
const RDV = '/contact?type=projet&rdv=30'

const RGPD = 'https://www.cnil.fr/fr/reglement-europeen-protection-donnees'

const META_TITLE = "IA et RGPD : conformité des usages et outils IA | Masteria"
const META_DESC = "IA et RGPD : articles 5, 6, 22, 28 et 35 appliqués à vos assistants, AIPD, garanties de 5 éditeurs relevées au 7 octobre 2026, repères de la CNIL."
const KEYWORDS = "ia et rgpd, ia rgpd, rgpd et ia, rgpd ia, intelligence artificielle et rgpd, outil ia conforme rgpd, outils ia conformes rgpd, cnil ia, aipd ia, rgpd intelligence artificielle, dpa intelligence artificielle, conformité rgpd ia, chatgpt rgpd, copilot rgpd, gemini rgpd, claude rgpd, mistral rgpd, article 22 rgpd ia"

const SITE = 'https://www.master-ia.fr'
const FULL_URL = `${SITE}/${SLUG}`

const PAGE_CITATIONS = [
  { name: "RGPD, règlement (UE) 2016/679 : version officielle sur EUR-Lex", url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj' },
  { name: "Le texte du RGPD article par article, sur le site de la CNIL", url: RGPD },
  { name: "CNIL, recours à un système d'IA générative : la foire aux questions de juillet 2024", url: 'https://www.cnil.fr/fr/les-questions-reponses-de-la-cnil-sur-lutilisation-dun-systeme-dia-generative' },
  { name: "CNIL, page de référence sur l'analyse d'impact (AIPD)", url: 'https://www.cnil.fr/fr/RGPD-analyse-impact-protection-des-donnees-aipd' },
  { name: "CNIL, tenir le registre des activités de traitement", url: 'https://www.cnil.fr/fr/RGDP-le-registre-des-activites-de-traitement' },
  { name: "CNIL, programme de contrôles 2026 (annonce du 3 avril)", url: 'https://www.cnil.fr/fr/controles-prioritaires-2026' },
  { name: "CNIL, articulation entre règlement IA et RGPD (page revue le 17 août 2026)", url: 'https://www.cnil.fr/fr/entree-en-vigueur-du-reglement-europeen-sur-lia-les-premieres-questions-reponses-de-la-cnil' },
]

/* ───────── Styles partagés ───────── */

const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1140, margin: '0 auto' }

const kickerStyle = { fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 18px', lineHeight: 1.25, letterSpacing: '-0.01em' }
const h3Style = { fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }
const aStyle = { color: c, fontWeight: 600 }

const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const answerStyle = { background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#0A0A0A', margin: '0 0 28px', maxWidth: 880 }

function Kicker({ children }) {
  return <div style={kickerStyle}>{children}</div>
}

function IconTile({ icon: Icon }) {
  return (
    <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <Icon size={22} strokeWidth={2} style={{ color: c }} />
    </div>
  )
}

const HERO_BADGES = [
  { icon: Scale,      label: 'Articles du RGPD appliqués' },
  { icon: FileSearch, label: 'AIPD (article 35)' },
  { icon: ScrollText, label: 'Contrat de traitement (article 28)' },
  { icon: Landmark,   label: 'Repères CNIL 2024-2026' },
]

/* ───────── En bref (synthèse citable, GEO) ───────── */

const EN_BREF = [
  { label: 'Le principe', value: "Dès qu'une IA reçoit une donnée personnelle, le RGPD (règlement (UE) 2016/679) s'applique : base légale, finalité, minimisation, information des personnes, sécurité" },
  { label: 'Le levier', value: "L'offre choisie (grand public ou professionnelle), le contrat de traitement signé avec l'éditeur (article 28) et les réglages de l'espace font la conformité" },
  { label: 'AIPD', value: "Exigée quand l'usage fait peser un risque élevé sur les personnes (article 35) ; tri de candidatures et évaluation de salariés en tête de liste" },
  { label: 'Notre rôle', value: "Conseil data & IA : cartographie des flux, qualification, AIPD, choix des offres. Prestation de conseil, pas finançable par votre OPCO. Côté formation, nos journées certifiées Qualiopi ouvrent droit à un financement de l'OPCO, sur demande" },
  { label: 'Repères', value: "CNIL : questions-réponses sur l'IA générative (juillet 2024), recommandations finalisées (juillet 2025), contrôles 2026 sur le recrutement" },
  { label: 'Zones', value: "France, Europe · États-Unis · Inde ; transferts hors Union examinés outil par outil" },
]

/* ───────── Principes RGPD appliqués à l'IA (6 cartes, article cité) ───────── */

const PRINCIPES = [
  {
    icon: Scale,
    title: 'Base légale et finalité déclarée',
    ref: 'Articles 5 et 6',
    refUrl: `${RGPD}/chapitre2#Article6`,
    desc: "Chaque usage d'IA qui touche des données personnelles s'appuie sur l'une des six bases de l'article 6 (contrat, intérêt légitime, consentement, obligation légale…) et sert une finalité déterminée. Un assistant ouvert « pour tout faire » n'en a aucune : le registre précise qui l'utilise, pour quoi, sur quelles données.",
  },
  {
    icon: Filter,
    title: 'Le minimum de données',
    ref: 'Article 5, paragraphe 1, c',
    refUrl: `${RGPD}/chapitre2#Article5`,
    desc: "Seules les données nécessaires à la tâche entrent dans l'outil. Un extrait anonymisé remplace le fichier client complet ; les catégories particulières de l'article 9 (santé, opinions, origine, entre autres) restent hors des outils qui n'ont pas été validés pour elles.",
  },
  {
    icon: Info,
    title: 'L’information des personnes',
    ref: 'Articles 13 et 14',
    refUrl: `${RGPD}/chapitre3#Article13`,
    desc: "Clients, salariés et candidats dont les données passent par une IA en sont avertis : mentions d'information, politique de confidentialité, note interne. Le texte indique la finalité, la base légale et les destinataires, éditeur de l'outil compris.",
  },
  {
    icon: UserCheck,
    title: 'Des droits jusqu’à la décision automatisée',
    ref: 'Articles 15 à 22',
    refUrl: `${RGPD}/chapitre3#Article22`,
    desc: "Accès, rectification, effacement, opposition : la personne garde ses droits sur ce que l'IA a traité, même quand les données ont transité par un outil tiers. Une décision qui la touche de manière significative, prise sans aucune intervention humaine, tombe sous l'article 22, qui l'encadre strictement et ouvre le droit d'obtenir l'intervention d'une personne puis de contester la décision.",
  },
  {
    icon: Clock,
    title: 'Une durée de conservation',
    ref: 'Article 5, paragraphe 1, e',
    refUrl: `${RGPD}/chapitre2#Article5`,
    desc: "Historique des conversations, journaux, fichiers déposés : tout ce qui part vers l'outil a une durée de vie à fixer. Les réglages de rétention des offres professionnelles servent à la maîtriser ; ils font partie du paramétrage de conformité.",
  },
  {
    icon: Lock,
    title: 'La sécurité, réglée par défaut',
    ref: 'Articles 25 et 32',
    refUrl: `${RGPD}/chapitre4#Article32`,
    desc: "Comptes nominatifs, droits d'accès, espaces cloisonnés, chiffrement : la sécurité couvre les données qui partent vers l'outil comme celles qui en reviennent. L'article 25 demande en plus que les réglages les plus protecteurs soient ceux appliqués d'emblée.",
  },
]

/* ───────── Tableau des éditeurs (factuel, sans classement, relevé au 07/10/2026) ───────── */

const OUTILS_TABLE = [
  {
    outil: 'ChatGPT (OpenAI)',
    forts: "Offres Business et Enterprise : par défaut, OpenAI n'apprend rien de vos conversations ; contrat de traitement et réglages d'administration fournis. Stockage au repos en Europe en cours d'ouverture pour Business ; résidence plus complète pour Enterprise.",
    verifier: "L'offre utilisée par vos équipes : les comptes Free, Go, Plus et Pro alimentent l'entraînement des modèles jusqu'à ce que chacun coupe l'option. La signature du contrat et la région de stockage retenue.",
    lienLabel: 'Engagements entreprise (OpenAI)',
    lienUrl: 'https://openai.com/enterprise-privacy/',
  },
  {
    outil: 'Microsoft Copilot',
    forts: "Licence Microsoft Copilot, ex-Microsoft 365 Copilot, et Copilot Chat inclus : dès que l'utilisateur se connecte avec son compte Entra, prompts et réponses bénéficient des engagements qui protègent déjà les mails et fichiers du tenant. Pour un utilisateur situé en Europe, les requêtes restent traitées à l'intérieur de l'EU Data Boundary.",
    verifier: "Les droits de partage SharePoint et OneDrive, puisque Copilot accède à chaque document que la personne a le droit d'ouvrir : un audit des permissions précède le déploiement. Les modèles d'Anthropic et de SpaceXAI échappent à cette frontière européenne, et Claude y est désactivé par défaut pour les clients de l'Union.",
    lienLabel: 'Centre de gestion de la confidentialité Microsoft',
    lienUrl: 'https://www.microsoft.com/fr-fr/trust-center',
  },
  {
    outil: 'Google Gemini',
    forts: "Dans Google Workspace, Google s'engage à ne pas faire relire vos contenus par des personnes et à ne pas s'en servir pour entraîner des modèles au-delà de votre domaine, sauf accord de votre part. Même règle pour l'appli Gemini et pour Gemini Notebook, à condition de passer par un compte de l'entreprise.",
    verifier: "Le compte utilisé : l'application grand public ne porte pas ces garanties. Gemini Notebook n'obéit pas aux réglages de région de données définis dans Workspace.",
    lienLabel: 'Sécurité et confidentialité de Google Workspace',
    lienUrl: 'https://workspace.google.com/security/',
  },
  {
    outil: 'Claude (Anthropic)',
    forts: "Team et Enterprise : Anthropic n'entraîne pas ses modèles sur ces espaces, sauf choix contraire du client, et fournit un contrat de traitement et une console d'administration centralisée.",
    verifier: "Anthropic ne vend pas d'hébergement européen en direct : pour garder les données en Europe, il faut passer par Amazon Bedrock ou Google Vertex AI. Sur Free, Pro et Max, l'entraînement dépend du réglage choisi par chaque utilisateur.",
    lienLabel: 'Trust Center (Anthropic)',
    lienUrl: 'https://trust.anthropic.com',
  },
  {
    outil: 'Mistral AI (Vibe)',
    forts: "Hébergement dans l'Union par défaut, aux États-Unis seulement si l'on choisit ce point d'accès pour l'API. Vibe Enterprise : entraînement désactivé d'office, que seul l'administrateur peut rallumer ; déploiement possible sur site ou en cloud privé.",
    verifier: "Sur Vibe Team, l'entraînement est actif à l'ouverture de l'espace : l'administrateur doit le désactiver pour toute l'organisation depuis son panneau. Certaines fonctions provoquent des transferts temporaires hors Union, listés parmi les sous-traitants.",
    lienLabel: 'Conditions et contrat de traitement (Mistral AI)',
    lienUrl: 'https://mistral.ai/terms',
  },
]

/* ───────── Méthode de mise en conformité (5 étapes) ───────── */

const ETAPES = [
  {
    num: '01',
    title: 'Cartographier les flux',
    desc: "Recensez les outils d'IA en service, ceux ouverts par les équipes hors du cadre compris, et les données qui y passent : clients, salariés, candidats, partenaires. Cette carte des flux fait souvent apparaître des usages dont la direction n'avait pas connaissance.",
  },
  {
    num: '02',
    title: 'Qualifier chaque traitement',
    desc: "Pour chaque usage : base légale, finalité, catégories de données, destinataires, durée de conservation, transfert éventuel hors Union. Les usages à risque élevé déclenchent une AIPD. Le tout rejoint le registre des activités de traitement de l'article 30.",
  },
  {
    num: '03',
    title: 'Choisir l’offre et régler l’espace',
    desc: "Retenez une offre professionnelle dès que des données personnelles circulent, signez le contrat de traitement, puis réglez la rétention, les accès, le partage et l'entraînement. C'est cette étape qui rend l'outil compatible avec vos usages.",
  },
  {
    num: '04',
    title: 'Écrire les consignes',
    desc: "La charte IA dit à chacun ce qu'il peut confier à quel outil ; la politique de données fixe les règles de circulation vers les fournisseurs. Les salariés savent quoi faire et la conformité tient au quotidien.",
  },
  {
    num: '05',
    title: 'Tenir le dossier à jour',
    desc: "Registre actualisé, AIPD archivées, mentions d'information vérifiables. Les conditions des éditeurs changent souvent : une revue trimestrielle intègre les outils arrivés, les usages étendus et les contrats modifiés.",
  },
]

/* ───────── Ce qu'a publié la CNIL (4 cartes sourcées) ───────── */

const CNIL_CARDS = [
  {
    icon: Landmark,
    title: 'Recourir à une IA générative (juillet 2024)',
    desc: "Publiées le 18 juillet 2024, ces questions-réponses conseillent de choisir le mode de déploiement selon la sensibilité des données, de fixer par écrit les usages permis et proscrits, d'encadrer l'éditeur par contrat et d'apprendre aux utilisateurs où l'outil se trompe.",
    source: 'CNIL, IA générative',
    sourceUrl: 'https://www.cnil.fr/fr/les-questions-reponses-de-la-cnil-sur-lutilisation-dun-systeme-dia-generative',
  },
  {
    icon: ShieldCheck,
    title: 'Développer un système d’IA (juillet 2025)',
    desc: "Le 22 juillet 2025, la CNIL a bouclé ses recommandations sur le développement : RGPD et modèles entraînés sur des données personnelles, annotation, sécurité. Elles visent surtout les entreprises qui construisent ou ajustent un modèle.",
    source: 'CNIL, recommandations finalisées',
    sourceUrl: 'https://www.cnil.fr/fr/ia-finalisation-recommandations-developpement-des-systemes-ia',
  },
  {
    icon: FileSearch,
    title: 'Contrôles 2026 : le recrutement',
    desc: "Parmi les thèmes retenus pour 2026, annoncés le 3 avril, la CNIL vérifie dans le recrutement l'usage des systèmes de décision automatisée, ce que l'on dit aux candidats et combien de temps on garde leurs données. Les grands employeurs et les cabinets spécialisés passent en premier.",
    source: 'CNIL, contrôles 2026',
    sourceUrl: 'https://www.cnil.fr/fr/controles-prioritaires-2026',
  },
  {
    icon: Scale,
    title: 'Deux règlements qui s’additionnent',
    desc: "Mise à jour le 17 août 2026, la page de questions-réponses de la CNIL consacrée au règlement IA rappelle que les deux textes ne visent pas les mêmes objets et peuvent s'appliquer ensemble au même système dès qu'il traite des données personnelles.",
    source: 'CNIL, règlement IA et RGPD',
    sourceUrl: 'https://www.cnil.fr/fr/entree-en-vigueur-du-reglement-europeen-sur-lia-les-premieres-questions-reponses-de-la-cnil',
  },
]

/* ───────── Définitions clés (ancrage d'entités, aligné sur le DefinedTermSet) ───────── */

const GLOSSARY = [
  {
    term: 'RGPD',
    def: "Règlement (UE) 2016/679, appliqué depuis le 25 mai 2018. Il régit toute opération sur des données personnelles dans l'Union, qu'un humain, un logiciel ou une IA l'effectue.",
  },
  {
    term: 'AIPD',
    def: "Analyse d'impact relative à la protection des données, que prévoit l'article 35. Elle précède les traitements qui font peser un risque élevé sur les personnes et documente les mesures qui le réduisent.",
  },
  {
    term: 'Contrat de traitement (DPA)',
    def: "Accord exigé par l'article 28 entre le responsable de traitement et son sous-traitant. Avec un éditeur d'IA, il fixe ce que l'éditeur peut faire des données, la sécurité, les sous-traitants ultérieurs et le sort des données en fin de contrat.",
  },
  {
    term: 'Base légale',
    def: "Fondement qui rend un traitement licite au sens de l'article 6 : consentement, contrat, obligation légale, intérêts vitaux, mission d'intérêt public, intérêt légitime.",
  },
  {
    term: 'Minimisation',
    def: "Règle de l'article 5 qui limite les données traitées à ce qu'exige la finalité. Pour une IA : le prompt ne contient que ce dont la tâche a besoin.",
  },
  {
    term: 'Décision automatisée',
    def: "Décision fondée exclusivement sur un calcul automatique, sans intervention humaine, qui produit des effets juridiques sur une personne ou l'affecte de manière significative. L'article 22 en limite les cas et garantit l'intervention humaine.",
  },
]

/* ───────── Études de cas citées (faits de src/data/etudes-de-cas.js) ───────── */

const CAS = [
  {
    id: 'conseil-financier',
    titre: 'Des dossiers de marchés publics dans un espace fermé',
    texte: "Un cabinet qui conseille collectivités et syndicats mixtes a bâti ses assistants d'appels d'offres dans un espace professionnel réglé pour que l'éditeur ne s'entraîne pas sur les dossiers. La journée de formation collective, à Paris et à Lyon, comprenait les règles de confidentialité et de RGPD.",
  },
  {
    id: 'photovoltaique',
    titre: 'Une PME tourne la page des comptes personnels',
    texte: "Le diagnostic remis en septembre 2026 à un distributeur photovoltaïque de trois personnes prévoit d'abandonner les comptes personnels au profit de comptes d'équipe gérés par un administrateur, réglés pour que les échanges n'entraînent pas le modèle, et d'inscrire l'outil commun au registre RGPD.",
  },
  {
    id: 'industrie',
    titre: 'Un groupe fixe ce que Copilot peut lire',
    texte: "Avant de former ses managers, un groupe international du packaging a délimité ce que Copilot pourrait lire : les fichiers de OneDrive et de SharePoint, à l'exclusion des serveurs partagés. Son comité de direction doit encore trancher deux points liés : quelles données exclure, comment auditer les accès.",
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: 'ChatGPT est-il conforme au RGPD ?',
    a: "Tout dépend de l'offre et des réglages. Sur ChatGPT Business et Enterprise, OpenAI signe un contrat de traitement et s'interdit par défaut d'utiliser vos échanges pour entraîner ses modèles ; bien paramétrée, l'offre se prête à des traitements qualifiés. Les comptes personnels (Free, Go, Plus, Pro) laissent l'entraînement activé jusqu'à ce que l'utilisateur le coupe : ils conviennent à des contenus sans donnée personnelle ni information confidentielle. La vraie question porte sur vos équipes : quelle offre utilisent-elles, avec quels réglages, pour quelles données ?",
  },
  {
    q: 'Peut-on confier des données clients à une IA ?',
    a: "Oui, à trois conditions. Le traitement est qualifié : base légale, finalité, clients informés. L'outil relève d'une offre professionnelle couverte par un contrat de traitement. Le prompt se limite à ce que la tâche exige. Coller un fichier client complet dans une version grand public, à l'inverse, prive l'entreprise de toute garantie sur ce que deviendront ces données. La charte IA traduit ces conditions en règles, outil par outil.",
  },
  {
    q: "Faut-il prévenir les salariés quand l'entreprise déploie une IA ?",
    a: "Oui, à plusieurs titres. Quand l'outil traite leurs données (messagerie, dossiers RH, évaluation), les articles 13 et 14 du RGPD imposent de leur dire pourquoi, sur quelle base et avec quels droits. Le Code du travail ajoute qu'aucune information les concernant ne peut être collectée par un dispositif qui ne leur a pas été présenté au préalable (article L1222-4). Dans une entreprise de cinquante salariés ou plus, les élus du CSE sont informés et consultés avant l'introduction d'une technologie nouvelle (article L2312-8). Quand l'IA sert à évaluer ou à surveiller, ces exigences se renforcent.",
  },
  {
    q: "Qu'est-ce qu'un contrat de traitement avec un éditeur d'IA ?",
    a: "C'est le contrat que l'article 28 du RGPD impose entre le responsable de traitement (votre organisation) et son sous-traitant (l'éditeur). Il dit ce que l'éditeur peut faire des données envoyées à l'outil : finalités permises, mesures de sécurité, sous-traitants ultérieurs, transferts hors Union, sort des données en fin de contrat, engagement sur l'entraînement. Les cinq grands éditeurs en proposent un pour leurs offres professionnelles. Avant tout usage sur des données personnelles, vérifiez qu'il est signé et qu'il couvre ce que vous faites.",
  },
  {
    q: "Une AIPD est-elle obligatoire pour chaque projet d'IA ?",
    a: "Non. L'article 35 la réserve aux traitements qui font peser un risque élevé sur les droits et libertés des personnes. Les lignes directrices européennes retiennent neuf critères (données sensibles, grande échelle, évaluation ou notation, décision automatisée, croisement de fichiers, personnes vulnérables, entre autres) ; en réunir deux suffit en général. Un assistant qui reformule des notes internes anonymes reste sous le seuil ; un outil qui trie des candidatures le dépasse presque toujours. Dans le doute, faites l'analyse : elle documente votre démarche et protège le projet.",
  },
  {
    q: "Quel rôle pour le DPO dans un projet d'IA ?",
    a: "Le DPO entre dans le projet dès le cadrage : il qualifie les traitements, conduit les AIPD, relit les contrats des éditeurs et tient le registre. Sur l'IA, sa mission se prolonge dans le temps, parce que les conditions des éditeurs bougent et que l'AI Act ajoute ses propres exigences. Sa désignation est obligatoire pour les organismes publics et pour les entreprises dont l'activité de base implique un suivi régulier et systématique de personnes à grande échelle, ou le traitement à grande échelle de données sensibles (article 37) ; ailleurs, ces tâches reviennent au responsable de traitement. Notre conseil data & IA travaille avec le DPO quand il existe.",
  },
  {
    q: 'Peut-on utiliser un éditeur américain ?',
    a: "Oui, sous conditions. Les transferts hors Union relèvent des articles 44 à 49 du RGPD. Vers les États-Unis, ils s'appuient aujourd'hui sur le cadre de protection des données UE-États-Unis (Data Privacy Framework) : sa décision d'adéquation du 10 juillet 2023 a été validée par le Tribunal de l'Union le 3 septembre 2025, et un pourvoi reste à juger par la Cour de justice. Vérifiez que l'éditeur y adhère ou propose des clauses contractuelles types, et préférez une région européenne quand l'offre en propose une. Le contrat de traitement doit dire où partent les données.",
  },
]

/* ───────── JSON-LD ───────── */

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${FULL_URL}#article`,
  headline: "IA et RGPD : vos données personnelles face aux outils d'intelligence artificielle",
  description: META_DESC,
  author: { '@id': `${SITE}/#mathias-nizan` },
  editor: { '@id': `${SITE}/#mathias-nizan` },
  publisher: { '@id': `${SITE}/#organization` },
  datePublished: '2026-07-02',
  dateModified: '2026-10-07',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': `${FULL_URL}#webpage` },
  about: ['RGPD', 'Intelligence artificielle', 'AIPD', "Conformité des outils d'IA", 'CNIL'],
}

const definedTermSetJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: "Glossaire IA et RGPD",
  hasDefinedTerm: GLOSSARY.map(g => ({
    '@type': 'DefinedTerm',
    name: g.term,
    description: g.def,
  })),
}

/* ───────── Composants ───────── */

function FAQItem({ q, a, color }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: '100%', textAlign: 'left', background: 'none', border: 'none',
          padding: '20px 0', cursor: 'pointer', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center', gap: 16,
        }}
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

export default function IAEtRGPDPage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable (sections Principes / FAQ)
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: "Gouvernance de l'IA", slug: 'gouvernance-ia' },
    { name: 'IA et RGPD', slug: SLUG },
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
        citations={PAGE_CITATIONS}
        datePublished="2026-07-02"
        dateModified="2026-10-07"
        extraJsonLd={[articleJsonLd, definedTermSetJsonLd]}
      />

      {/* ── HERO sombre premium ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        {/* filet d'accent en haut */}
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        {/* trame de points */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        {/* halo d'accent */}
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#94A3B8', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#94A3B8' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/gouvernance-ia" style={{ color: '#94A3B8' }}>Gouvernance de l'IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span aria-current="page" style={{ color: '#93C5FD', fontWeight: 600 }}>IA et RGPD</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Données personnelles et outils d'IA
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            IA et RGPD
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>ce que vos données deviennent dans un outil d'IA</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, qui cartographie les flux de données des clients de Masteria · garanties des éditeurs relevées le 7 octobre 2026
          </p>

          {/* GEO : réponse directe citable (accroche) */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Le RGPD entre en jeu au moment où une donnée personnelle arrive dans un outil d'IA : il demande une base légale, une finalité, le minimum de données et des garanties écrites avec l'éditeur. La conformité se joue dans l'offre souscrite, le contrat de traitement et les réglages. <strong style={{ color: '#fff', fontWeight: 700 }}>Masteria cartographie vos flux et met chaque usage en règle.</strong>
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            Copilote bureautique, assistant conversationnel, agent branché sur le CRM : chacun envoie des données vers un fournisseur, parfois hors de l'Union. Cette page prend le sujet par les données personnelles : les articles du RGPD qui s'appliquent à vos usages, l'analyse d'impact, les garanties de cinq éditeurs relevées au 7 octobre 2026 et la méthode de mise en conformité, avec les publications de la CNIL qui les éclairent.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#outils" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Comparer les garanties des éditeurs
            </a>
          </div>

          {/* tags de compétences */}
          <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap', marginBottom: 40 }}>
            {HERO_BADGES.map(({ icon: Icon, label }) => (
              <span
                key={label}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', border: '1px solid #2A3650', borderRadius: 99, padding: '7px 14px' }}
              >
                <Icon size={14} strokeWidth={2.2} style={{ color: '#60A5FA' }} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          {/* En bref : synthèse citable (GEO), carte sombre */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>En bref</div>
            <dl style={{ margin: 0 }}>
              {EN_BREF.map((row, i) => (
                <div key={row.label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ flex: '0 0 132px', fontWeight: 800, fontSize: 13.5, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{row.label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── PRINCIPES RGPD APPLIQUÉS À L'IA (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Le RGPD article par article</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Utiliser l'IA est-il compatible avec le RGPD ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Oui, si chaque usage d'IA est traité comme ce qu'il est : un traitement de données. Dès qu'un assistant reçoit des informations sur des clients, des salariés ou des candidats, le RGPD demande une base légale, une finalité déterminée et des garanties de sécurité à la mesure du risque.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Six principes du règlement suffisent à juger un usage d'IA. Chaque carte renvoie à l'article concerné, dans le texte publié par la CNIL ; ils valent pour le copilote bureautique comme pour l'agent relié à vos systèmes, chez vous comme chez vos sous-traitants.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {PRINCIPES.map((item, i) => (
                  <div key={i} style={{ ...cardStyle, padding: 24, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconTile icon={item.icon} />
                    </div>
                    <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: '0 0 12px', flex: 1 }}>{item.desc}</p>
                    <a href={item.refUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12.5, color: c, fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                      RGPD, {item.ref}
                      <ExternalLink size={12} strokeWidth={2.2} aria-hidden="true" />
                    </a>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0' }}>
                Notre <Link to="/conseil-data-ia" style={aStyle}>conseil data & IA</Link> applique ces six principes à vos flux, usage par usage ; la <Link to="/charte-ia-entreprise" style={aStyle}>charte IA d'entreprise</Link> les traduit ensuite en consignes que les salariés retiennent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── AIPD ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <Kicker>Analyse d'impact</Kicker>
          <h2 style={h2Style}>
            Quand faut-il une AIPD pour un projet d'IA ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>L'article 35 du RGPD impose une analyse d'impact (AIPD) avant tout traitement qui menace fortement les droits et libertés des personnes. Un projet d'IA franchit vite ce seuil : données sensibles ou massives, évaluation ou notation de personnes, décision automatisée, croisement de fichiers.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 18px' }}>
            Les lignes directrices européennes retiennent neuf critères ; deux réunis rendent en général l'analyse obligatoire, et la CNIL publie la liste des traitements pour lesquels elle est toujours exigée, sur sa <a href="https://www.cnil.fr/fr/RGPD-analyse-impact-protection-des-donnees-aipd" target="_blank" rel="noopener noreferrer" style={aStyle}>page consacrée à l'AIPD</a>. Un assistant qui reformule des notes internes sans données personnelles reste sous le seuil ; un outil qui trie des candidatures ou note des clients le dépasse presque toujours. L'AIPD décrit le traitement, en pèse la nécessité, recense les risques pour les personnes et fixe les mesures qui les réduisent. Conduite tôt avec le DPO, elle évite de découvrir un blocage après le lancement.
          </p>

          <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
            Le recrutement mérite une vigilance particulière. La CNIL a placé ce domaine en tête de ses <a href="https://www.cnil.fr/fr/controles-prioritaires-2026" target="_blank" rel="noopener noreferrer" style={aStyle}>contrôles annoncés le 3 avril 2026</a>, et les outils qui trient ou évaluent des candidats entreront le 2 décembre 2027 dans le régime le plus exigeant de l'AI Act, celui du haut risque. Une AIPD menée maintenant sert les deux textes ; nos audits de flux la préparent, traitement par traitement.
          </p>
        </div>
      </section>

      {/* ── OUTILS IA CONFORMES RGPD (ancre sombre pivot, la seule de la page) ── */}
      <section id="outils" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Outils IA conformes RGPD</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Quel outil d'IA est conforme au RGPD ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>La conformité d'un outil d'IA au RGPD se décide dans trois choix qui vous reviennent : l'offre souscrite, le contrat de traitement signé avec l'éditeur et les réglages de l'espace. Les cinq grands éditeurs proposent une offre professionnelle sous contrat ; leurs réglages par défaut diffèrent, et les écarts naissent de ces réglages.</strong>
          </p>

          <p style={{ color: '#B4C0D3', fontSize: 15, marginBottom: 28, lineHeight: 1.7, maxWidth: 880 }}>
            Pour chaque outil, le tableau donne ce que l'offre professionnelle garantit, les points à contrôler avant de déployer et la page de l'éditeur où le faire. Il ne classe personne : à ce niveau, les cinq répondent au RGPD dès que l'offre, le contrat et les réglages suivent.
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Garanties des cinq grands outils d'IA en offre professionnelle, relevées au 7 octobre 2026" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 860 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '16%' }}>Outil</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '32%' }}>Ce que garantit l'offre professionnelle</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '32%' }}>À vérifier avant de déployer</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '20%' }}>Page de l'éditeur</th>
                </tr>
              </thead>
              <tbody>
                {OUTILS_TABLE.map((row, i) => (
                  <tr key={row.outil} style={{ borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                    <th scope="row" style={{ padding: '14px 18px', fontSize: 14, color: '#F8FAFC', fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.5 }}>{row.outil}</th>
                    <td style={{ padding: '14px 18px', fontSize: 14, color: '#E2E8F0', lineHeight: 1.65, verticalAlign: 'top', background: 'rgba(37,99,235,0.10)' }}>{row.forts}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.verifier}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14, lineHeight: 1.65, verticalAlign: 'top' }}>
                      <a href={row.lienUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#60A5FA', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'flex-start', gap: 6 }}>
                        <ExternalLink size={14} strokeWidth={2.2} style={{ flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                        {row.lienLabel}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ color: '#94A3B8', fontSize: 13.5, lineHeight: 1.7, margin: '18px 0 0', maxWidth: 880 }}>
            Relevé du 7 octobre 2026 dans la documentation des éditeurs. Leurs conditions changent souvent : le contrat que vous signez fait foi.
          </p>

          <p style={{ color: '#B4C0D3', fontSize: 15, lineHeight: 1.7, margin: '22px 0 0', maxWidth: 880 }}>
            Trois des cinq éditeurs sont américains. Les transferts hors Union relèvent du chapitre V du RGPD (<a href={`${RGPD}/chapitre5`} target="_blank" rel="noopener noreferrer" style={{ color: '#93C5FD', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>articles 44 à 49</a>) ; vers les États-Unis, ils reposent aujourd'hui sur le Data Privacy Framework, dont la décision d'adéquation du 10 juillet 2023 a été validée par le Tribunal de l'Union le 3 septembre 2025, un pourvoi restant à juger. Le contrat de traitement doit dire où partent vos données.
          </p>
        </div>
      </section>

      {/* ── MÉTHODE DE MISE EN CONFORMITÉ (timeline à rail) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Kicker>Méthode</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Comment mettre vos usages d'IA en conformité RGPD ?
          </h2>

          <p style={answerStyle}>
            <strong>La mise en conformité RGPD des usages d'IA suit cinq étapes : cartographier les flux, qualifier chaque traitement (avec une AIPD si le risque est élevé), choisir l'offre et régler l'espace, écrire les consignes pour les équipes, puis tenir le dossier à jour.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 36, lineHeight: 1.7 }}>
            L'offre se choisit après la qualification, jamais avant : on ne sait pas quel contrat signer tant qu'on ignore quelles données vont circuler.
          </p>

          <div style={{ position: 'relative' }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#E5E7EB' }} />
            {ETAPES.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative',
                  padding: i === 0 ? '0 0 18px' : (i === ETAPES.length - 1 ? '18px 0 0' : '18px 0'),
                }}
              >
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: 15, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{step.num}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                  <h3 style={{ ...h3Style, fontSize: 17, marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, maxWidth: 700 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '36px 0 0' }}>
            Masteria conduit ces étapes dans son <Link to="/conseil-data-ia" style={aStyle}>conseil data & IA</Link>. Le <Link to="/diagnostic-ia" style={aStyle}>diagnostic IA</Link> situe d'abord votre maturité, données comprises ; les rôles et le comité qui tiennent le tout dans la durée relèvent de la <Link to="/gouvernance-ia" style={aStyle}>gouvernance de l'IA</Link>. Pour tenir le registre, la CNIL détaille les attentes sur sa page <a href="https://www.cnil.fr/fr/RGDP-le-registre-des-activites-de-traitement" target="_blank" rel="noopener noreferrer" style={aStyle}>registre des activités de traitement</a>.
          </p>
        </div>
      </section>

      {/* ── CE QU'A PUBLIÉ LA CNIL (cartes sourcées + définitions clés) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <Kicker>Repères CNIL</Kicker>
          <h2 style={h2Style}>
            Ce que la CNIL a publié sur l'IA, de 2024 à 2026
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>La CNIL éclaire l'application du RGPD à l'IA par des questions-réponses, des recommandations et ses priorités de contrôle. Quatre publications comptent pour une organisation qui utilise des assistants : juillet 2024, juillet 2025, avril 2026 et août 2026.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 18, margin: '0 0 40px' }}>
            {CNIL_CARDS.map((card, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24 }}>
                <div style={{ marginBottom: 14 }}>
                  <IconTile icon={card.icon} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 15.5, marginBottom: 8 }}>{card.title}</h3>
                <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.65, margin: '0 0 10px' }}>{card.desc}</p>
                <p style={{ fontSize: 12, color: '#6B7280', margin: 0, fontWeight: 600 }}>
                  Source : <a href={card.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#6B7280', textDecoration: 'underline', textUnderlineOffset: 2 }}>{card.source}</a>
                </p>
              </div>
            ))}
          </div>

          {/* Définitions clés : ancrage d'entités (aligné sur le DefinedTermSet JSON-LD) */}
          <h3 style={{ ...h3Style, fontSize: 20, margin: '8px 0 18px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <BookOpen size={20} color={c} strokeWidth={2.2} aria-hidden="true" /> Six notions à maîtriser
          </h3>
          <dl style={{ margin: 0, display: 'grid', gap: 16 }}>
            {GLOSSARY.map((g, i) => (
              <div key={i} style={{ borderLeft: `3px solid ${cLight}`, paddingLeft: 16 }}>
                <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', marginBottom: 4 }}>{g.term}</dt>
                <dd style={{ margin: 0, fontSize: 14.5, color: '#374151', lineHeight: 1.65 }}>{g.def}</dd>
              </div>
            ))}
          </dl>

          {/* Sources consultées : liens d'autorité suivis (SEO + GEO) */}
          <h3 style={{ ...h3Style, fontSize: 20, margin: '44px 0 16px' }}>
            Textes et pages officielles consultés le 7 octobre 2026
          </h3>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
            {PAGE_CITATIONS.map(r => (
              <li key={r.url}>
                <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: c, fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'flex-start', gap: 7, fontSize: 14.5 }}>
                  <ExternalLink size={15} strokeWidth={2.2} style={{ flexShrink: 0, marginTop: 4 }} aria-hidden="true" /> {r.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SUR LE TERRAIN (cas anonymisés, remplace CaseStudyCards) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Sur le terrain</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Trois missions où les données ont fixé le cadre
          </h2>
          <p style={{ color: '#374151', fontSize: 15, marginBottom: 32, lineHeight: 1.7, maxWidth: 880 }}>
            Dans chacune, la question des données a été posée avant le premier prompt. Les récits complets figurent dans nos études de cas anonymisées.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
            {CAS.map(cas => (
              <div key={cas.id} style={{ ...cardStyle, padding: 26, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <h3 style={{ ...h3Style, fontSize: 16 }}>{cas.titre}</h3>
                <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.7, margin: 0, flex: 1 }}>{cas.texte}</p>
                <Link to={`/etudes-de-cas-ia#${cas.id}`} style={{ ...aStyle, fontSize: 13.5, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
                  Voir la mission
                  <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                IA et RGPD : les questions des DPO et des directions
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Un outil précis, un transfert hors Union, une AIPD à cadrer ?
              </p>
              <Link to={RDV} style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Posez-la pendant le cadrage offert
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

      {/* ── BANDEAU : conseil (hors OPCO) + formations (Qualiopi) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <GraduationCap size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Conseil et formation</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Mettre les flux en règle, puis apprendre aux équipes à les y garder
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                La mise en conformité décrite sur cette page relève de notre conseil data & IA : cartographie des flux, qualification des traitements, AIPD, choix des offres et réglages. Elle se règle au forfait après le cadrage et reste hors du financement de l'OPCO. Les équipes, elles, apprennent les bons réflexes en formation : la formation AI Act pour le cadre réglementaire, les formations aux outils pour des usages quotidiens respectueux des données. Facturées 1 980 € HT la journée, ces formations sont proposées par un organisme certifié Qualiopi.
              </p>
              <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                <Link to="/conseil-data-ia" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                  Le conseil data & IA
                  <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                </Link>
                <Link to="/formation-ai-act" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                  La formation AI Act
                  <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAILLAGE INTERNE ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Ressources</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Pour aller plus loin sur les données
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Des pages voisines, chacune sur un pan du sujet : contrat, consignes, gouvernance, sécurité d'un outil, formation.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Conseil data & IA', href: '/conseil-data-ia', tag: 'Conseil', desc: "Cartographie des flux, qualification des traitements et réglages des outils, menés avec votre DPO." },
              { label: "Gouvernance de l'IA", href: '/gouvernance-ia', tag: 'Rôles', desc: "Registre des usages relié au registre RGPD, comité et référent IA, calendrier de l'AI Act." },
              { label: 'Charte IA en entreprise', href: '/charte-ia-entreprise', tag: 'Consignes', desc: "La rubrique données d'une charte, avec une formulation prête à discuter en atelier." },
              { label: 'Sécurité de Claude en entreprise', href: '/securite-claude-entreprise', tag: 'Outils', desc: "Un cas d'école : contrats, rétention, régions et réglages d'un assistant passés au crible." },
              { label: 'Sécurité de l’IA et RGPD : le guide', href: '/blog/securite-ia-entreprise-rgpd', tag: 'Article', desc: "Les risques concrets d'une fuite par prompt et les parades qui fonctionnent." },
              { label: 'Formation AI Act', href: '/formation-ai-act', tag: 'Formation', desc: "Comprendre comment le règlement IA s'ajoute au RGPD, et classer vos usages." },
            ].map(rel => (
              <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                <div
                  style={{ ...cardStyle, padding: 26, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = c}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E7EB'}
                >
                  <div style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>
                    {rel.tag}
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', letterSpacing: '-0.01em' }}>
                    {rel.label}
                  </h3>
                  <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: '0 0 12px' }}>{rel.desc}</p>
                  <ArrowRight size={15} strokeWidth={2.4} style={{ color: c }} aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNATURE (E-E-A-T, remplace FounderNote) ── */}
      <section style={{ padding: 'clamp(40px, 6vw, 56px) 24px', background: '#fff' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
            Mathias Nizan relit lui-même les contrats de traitement et les réglages des outils avant chaque recommandation. Le tableau des éditeurs et les liens vers la CNIL ont été vérifiés le 7 octobre 2026. Pour connaître son parcours, voyez <Link to="/mathias-nizan" style={aStyle}>sa page de fondateur</Link>.
          </p>
          <PressMention />
        </div>
      </section>

      {/* ── CTA FINALE SOMBRE (charte sombre unique #0A0F1E) ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>30 minutes de cadrage offertes</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Sachez où partent les données que vos équipes confient à l'IA
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Listez-nous les outils d'IA en place et les données qu'ils touchent. En une demi-heure, nous repérons les offres à vérifier, les traitements à qualifier et les AIPD probables, puis l'ordre dans lequel les traiter. Cette première lecture vous reste, quelle que soit la suite.
            </p>
            <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Cartographie des flux · AIPD · contrats de traitement · RGPD et AI Act · France et international
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

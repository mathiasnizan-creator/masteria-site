import { useParams, Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Clock, Users, Wallet, BookOpen } from 'lucide-react'
import SEOHead from '../components/SEOHead'

// Pages éditoriales transversales pour positionnement SEO sur des requêtes informationnelles
// à fort volume identifiées via Search Console / nexa.
// Chaque entrée = 1 page autonome avec sa propre config (title, H1, contenu, FAQ).
// Texte propre à chaque page (réécrit le 07/10/2026) : bandeau de réassurance, titre de FAQ,
// libellé du second bouton et CTA final sont propres au sujet, pour qu'aucune phrase ne soit
// partagée avec les autres pages du site.

const MODIFIED = '2026-10-07'

const TOPICS = {
  // Catalogue des formats courts (créé le 23/10/2026) : sept intitulés du catalogue de Mathias,
  // chacun relié à sa page détaillée. Mots clés : « formation ia courte », « formation utilisation ia ».
  'formation-ia-courte': {
    badge: 'Trois heures, une journée ou deux',
    h1: "Formation IA courte : sept formats pour utiliser l'IA au travail",
    metaTitle: "Formation IA courte : 3 h, 1 ou 2 jours | Masteria",
    metaDescription: "Formations IA courtes pour salariés : Copilot dans Excel, PowerPoint et Microsoft 365, écrits, données, productivité, pédagogie. Dès 1 980 € HT.",
    dateModified: '2026-10-23',
    intro: "Une séance de trois heures pour un geste précis dans PowerPoint ou Excel, une journée pour changer sa façon de travailler, deux jours pour analyser des données ou refaire un module de formation. Ces sept programmes partent des outils que votre entreprise possède déjà et des fichiers que vos équipes ouvrent chaque semaine.",
    catalogueLabel: "Voir toutes nos formations",
    formationsTitre: "Les sept formations, de la plus courte à la plus longue",
    formations: [
      {
        titre: "3 h chrono pour apprendre à utiliser Copilot dans Excel",
        duree: '3 heures',
        pour: "Gestionnaires, acheteurs, assistants, contrôleurs",
        desc: "Formules proposées dès le signe égal, tableaux croisés décrits en une phrase, lignes mises en évidence, graphique propre, puis trois contrôles avant d'envoyer un chiffre.",
        href: '/formation-sprint-ia-excel',
      },
      {
        titre: "3 h chrono pour apprendre à utiliser Copilot dans PowerPoint",
        duree: '3 heures',
        pour: "Toute personne qui présente en réunion ou devant un client",
        desc: "Une présentation tirée d'un document Word, reprise dans le modèle de l'entreprise, résumée, traduite et dotée de notes pour l'orateur, chaque diapositive relue avant la réunion.",
        href: '/formation-copilot-powerpoint',
      },
      {
        titre: "Utiliser l'IA pour développer son efficacité et sa productivité au travail",
        duree: '1 jour',
        pour: "Tous métiers, quel que soit l'assistant fourni",
        desc: "La messagerie, les réunions, les documents longs et la semaine à organiser : chacun repart avec ses consignes réutilisables et ses règles sur les données.",
        href: '/formation-ia-productivite',
      },
      {
        titre: "Optimiser ses écrits professionnels grâce à l'IA",
        duree: '1 jour',
        pour: "Cadres, assistants, commerciaux, RH",
        desc: "Mails délicats, comptes rendus, notes et propositions rédigés avec l'IA dans votre ton, avec une méthode de relecture qui repère les tournures toutes faites.",
        href: '/formation-ia-ecrits-pro',
      },
      {
        titre: "Utiliser Copilot dans Microsoft 365",
        duree: '1 jour',
        pour: "Équipes équipées de Copilot Chat ou de la licence Microsoft Copilot",
        desc: "Outlook, Teams, Word, Excel et PowerPoint en une journée, avec ce que change la licence. La page détaillée présente aussi le programme complet sur deux jours.",
        href: '/formation-microsoft-copilot',
      },
      {
        titre: "Utiliser l'IA pour concevoir, animer et évaluer une formation",
        duree: '1 ou 2 jours',
        pour: "Formateurs, ingénieurs pédagogiques, responsables formation",
        desc: "Scénario pédagogique, supports, exercices et quiz construits avec l'IA, puis l'évaluation des acquis et le respect des droits sur les contenus réutilisés.",
        href: '/formation-ia-pedagogique',
      },
      {
        titre: "Analyser vos données grâce à l'intelligence artificielle",
        duree: '2 jours',
        pour: "Profils métier qui vivent dans des tableaux, sans être analystes",
        desc: "Nettoyer un export, croiser des fichiers, faire calculer l'IA par du code qu'elle exécute, vérifier chaque résultat et rédiger la note qui l'explique.",
        href: '/formation-ia-analyse-donnees',
      },
    ],
    sections: [
      {
        h2: "Choisir la durée d'après le geste à installer",
        body: "Trois heures suffisent quand l'équipe utilise déjà le logiciel et veut y ajouter l'IA : le tableur pour l'un, l'outil de présentation pour l'autre. Une journée convient à une compétence qui touche toute la semaine, comme écrire, organiser ses réunions ou tirer parti de Copilot dans chaque application. Deux jours deviennent utiles quand le travail demande une méthode complète et des vérifications, ce qui est le cas de l'analyse de données et, souvent, de la refonte d'un module de formation. En cas d'hésitation, décrivez-nous la tâche la plus longue de la semaine de l'équipe : nous vous dirons le format qui lui correspond.",
      },
      {
        h2: "Un format court fonctionne quand chacun travaille sur ses propres fichiers",
        body: "Dans une séance courte, le temps manque pour des exemples génériques. Avant la date, le formateur demande à chaque participant un fichier type et la tâche qu'il voudrait accélérer, puis vérifie avec votre service informatique que l'outil prévu est bien ouvert sur les comptes. Le jour venu, on travaille sur une copie de ces fichiers, et chacun repart avec un résultat qu'il réutilisera le lendemain. Ce travail en amont est chiffré à part sur le devis, en plus du prix de la séance ou de la journée.",
      },
      {
        h2: "Enchaîner plusieurs formats pour une même équipe",
        body: "Les sept programmes se combinent. Un service commercial peut suivre la journée sur les écrits professionnels, puis la séance de trois heures sur PowerPoint quelques semaines plus tard, une fois les premiers réflexes en place. Une direction financière commence souvent par la séance Excel et poursuit avec les deux jours d'analyse de données. Espacer les sessions laisse le temps d'essayer au poste de travail et de revenir avec des questions précises, que le formateur reprend en ouverture de la séance suivante.",
      },
      {
        h2: "Prix et financement d'une formation courte",
        body: "Chaque format part de 1 980 € HT : la séance de trois heures, la journée, ou chacun des deux jours. Le prix vaut pour un groupe de votre entreprise, douze personnes au plus, comme pour une personne seule, dans vos locaux ou en visioconférence. Masteria a obtenu la certification Qualiopi pour ses actions de formation : votre entreprise peut donc adresser la demande à son OPCO, qui fixe la part prise en charge d'après les règles de sa branche. Aucun de ces programmes ne prépare une certification enregistrée : le compte personnel de formation ne peut donc pas les payer.",
      },
    ],
    reassurance: [
      { t: 'Qualiopi', s: 'Demande à votre OPCO possible' },
      { t: 'Dès 1 980 € HT', s: 'La séance de 3 h ou la journée' },
      { t: '3 h, 1 jour ou 2 jours', s: 'Selon la tâche visée' },
      { t: 'Douze au plus', s: 'Ou une personne seule' },
    ],
    faqTitre: "Questions fréquentes sur nos formations IA courtes",
    faq: [
      { q: "Peut-on apprendre à utiliser l'IA en trois heures ?", a: "On peut apprendre à s'en servir dans un logiciel précis, à condition de savoir déjà l'utiliser. La séance sur Excel suppose de savoir trier et filtrer ; celle sur PowerPoint, de savoir monter une présentation simple. Pour découvrir l'IA générative à partir de zéro, une journée laisse le temps de poser la méthode et les règles sur les données." },
      { q: "Faut-il la licence Microsoft Copilot pour les formats sur Excel, PowerPoint et Microsoft 365 ?", a: "Pas toujours. Copilot Chat est compris dans les abonnements professionnels de Microsoft 365 et donne déjà accès à une partie des fonctions dans les applications. La licence payante Microsoft Copilot ajoute la lecture des mails, des réunions et des fichiers de chaque salarié. Le formateur adapte les exercices à ce que vos comptes ouvrent réellement, après vérification avec votre service informatique." },
      { q: "Les formations se font-elles à distance ?", a: "Oui, chaque format existe en classe virtuelle comme en salle chez vous. À distance, nous conseillons deux écrans par participant, ou un grand écran, pour suivre le formateur et travailler sur son fichier en même temps." },
      { q: "Combien de personnes par session ?", a: "Douze au plus pour un groupe intra. En dessous de six, le formateur peut regarder le travail de chacun à plusieurs reprises. En individuel, le programme se construit autour des dossiers d'une seule personne, souvent un dirigeant ou une assistante de direction." },
      { q: "Avec quel assistant d'IA les participants travaillent-ils ?", a: "Avec celui que l'entreprise leur fournit. Les séances sur Excel, PowerPoint et Microsoft 365 se déroulent dans Copilot. La journée sur la productivité, celle sur les écrits et les deux jours d'analyse fonctionnent aussi avec ChatGPT, Claude, Gemini ou Vibe de Mistral ; si plusieurs outils cohabitent chez vous, le formateur montre les mêmes gestes dans chacun." },
      { q: "Ces formations sont-elles éligibles au CPF ?", a: "Non. Elles ne mènent à aucune certification inscrite au Répertoire national ou au Répertoire spécifique. Leur financement passe par votre OPCO, par le plan de développement des compétences ou par l'entreprise directement. Un dirigeant non salarié se tourne vers son fonds de formation, AGEFICE ou FIF-PL selon son activité." },
    ],
    cta: {
      titre: "Dites-nous quelle tâche vous voulez accélérer",
      texte: "Indiquez le nombre de participants, leurs fonctions et les logiciels de l'entreprise. Vous recevez le format conseillé, le programme et un devis à joindre à votre demande de financement.",
    },
  },

  'formation-intelligence-artificielle-cpf': {
    badge: "CPF et financement d'une formation IA",
    h1: "Formation intelligence artificielle CPF : nos réponses",
    metaTitle: "Formation intelligence artificielle CPF | Masteria",
    metaDescription: "Formation IA et CPF : pourquoi nos formations courtes ne sont pas éligibles au CPF, et comment les financer par l'OPCO ou le plan de formation.",
    intro: "Vous cherchez une formation en intelligence artificielle payée par votre compte personnel de formation ? Le CPF ne finance que des parcours qui mènent à une certification enregistrée, ce qui écarte la plupart des formations courtes à l'usage de ChatGPT, de Copilot ou de Claude. Voici ce qu'il permet, ce qu'il ne permet pas, et les autres voies de financement pour un salarié comme pour une entreprise.",
    catalogueLabel: "Parcourir nos programmes",
    sections: [
      {
        h2: "Ce que le CPF finance en matière d'IA",
        body: "Le compte personnel de formation ne paie que des formations qui préparent une certification inscrite au RNCP (le Répertoire national des certifications professionnelles) ou au Répertoire spécifique, deux registres que gère France Compétences. Une prise en main de ChatGPT, de Copilot ou de Claude en quelques jours débouche rarement sur un tel titre. Quand une offre annonce un financement par le CPF pour quelques jours de prise en main, cherchez l'intitulé du titre visé et son numéro d'enregistrement dans l'annuaire officiel des certifications : il s'agit souvent d'un cursus long de data science ou de développement.",
      },
      {
        h2: "Pourquoi nos formations ne passent pas par le CPF",
        body: "Masteria forme en une ou deux journées, en intra pour une équipe d'au plus douze personnes ou en individuel, sur les dossiers et les outils de l'entreprise. Ce format sur mesure ne prépare aucune certification enregistrée : il vise l'usage dès le lendemain de la session. Nos clients, entreprises et organismes publics, financent la formation de leurs équipes par leur OPCO ou par leur budget de formation, et attendent un programme construit sur leurs cas plutôt qu'un référentiel national.",
      },
      {
        h2: "Les autres voies : OPCO, plan de développement des compétences, budget de l'entreprise",
        body: "Trois voies financent une formation Masteria sans toucher à votre compte. L'OPCO de votre branche (par exemple Atlas pour le conseil, le numérique et les services financiers, OPCO 2i pour l'industrie, Afdas pour la culture et les médias) peut en couvrir tout ou partie, d'après des critères propres à chaque branche qui tiennent compte de l'effectif. Le plan de développement des compétences, tenu par votre service RH, peut l'inscrire au budget de l'année. L'entreprise peut enfin la régler directement. Parce que Masteria est certifié Qualiopi pour ses actions de formation, ces fonds mutualisés vous restent accessibles ; nous montons avec vous le dossier à déposer : devis, programme et convention.",
      },
    ],
    reassurance: [
      { t: 'Qualiopi', s: 'Au titre des actions de formation' },
      { t: 'OPCO de branche', s: 'Critères propres à chaque branche' },
      { t: 'Une ou deux journées', s: 'Dès 1 980 € HT la journée' },
      { t: 'Douze personnes au plus', s: 'En intra, ou en individuel' },
    ],
    faqTitre: "Vos questions sur le CPF et la formation IA",
    faq: [
      { q: "Mon CPF peut-il payer une formation Masteria ?", a: "Non. Nos formations d'une ou deux journées ne mènent pas à une certification enregistrée au RNCP ou au Répertoire spécifique, condition pour mobiliser le CPF. Leur prise en charge passe par votre OPCO, par le plan de formation que tient votre service RH ou directement par votre employeur." },
      { q: "Quelles formations en IA le CPF finance-t-il ?", a: "Surtout des parcours longs, de plusieurs mois, en data science, en apprentissage automatique ou en développement, qui préparent un titre enregistré. Ils s'adressent plutôt aux personnes en reconversion qu'aux salariés qui veulent se servir d'un assistant d'IA dans leur poste. Avant de vous inscrire, consultez la fiche de la certification sur le site de France Compétences." },
      { q: "Mon employeur doit-il payer ma formation en IA ?", a: "Quand la formation est demandée par l'employeur, elle entre dans le plan de développement des compétences et l'entreprise la finance, avec l'aide éventuelle de son OPCO. Quand l'idée vient de vous, présentez-la à votre responsable ou au service RH en précisant les tâches qu'elle doit faciliter : une demande reliée à votre poste a plus de chances d'aboutir." },
      { q: "Combien coûte une formation IA chez Masteria ?", a: "Comptez à partir de 1 980 € HT la journée, qu'il s'agisse d'un groupe de douze salariés maximum ou d'un accompagnement individuel, soit 3 960 € HT les deux jours. Une session adaptée à vos dossiers demande un temps de préparation, chiffré à part sur la proposition. Une journée suffit pour prendre en main un outil ; deux jours permettent d'aller plus loin ou de comparer plusieurs outils." },
      { q: "L'OPCO prend-il en charge toute la formation ?", a: "Cela dépend de votre OPCO : chaque branche fixe ses règles, ses plafonds et ses fonds disponibles, en fonction de la convention collective et de la taille de l'entreprise. Nous regardons avec vous les conditions de votre branche avant de déposer la demande." },
      { q: "À quel moment solliciter l'OPCO ?", a: "Bien avant la session : la demande doit être acceptée avant son démarrage. Le délai de réponse varie d'un OPCO à l'autre ; nous vous transmettons le devis, le programme détaillé et la convention dès que le projet est validé, pour que la demande parte au plus tôt." },
    ],
    cta: {
      titre: "Financer votre formation IA sans le CPF",
      texte: "Dites-nous combien de personnes vous voulez former et à quel outil. Vous recevez sous 24 heures un devis et un programme prêts à joindre à votre demande auprès de l'OPCO.",
    },
  },

  'formation-intelligence-artificielle-distanciel': {
    badge: 'Formation à distance, en classe virtuelle',
    h1: "Formation intelligence artificielle à distance",
    metaTitle: "Formation IA à distance | Visio · Qualiopi | Masteria",
    metaDescription: "Formation IA à distance en classe virtuelle, formateur en direct, exercices sur vos dossiers. Certifié Qualiopi, finançable par votre OPCO. Devis sous 24h.",
    intro: "Vos équipes sont réparties entre plusieurs sites, ou travaillent souvent de chez elles ? La formation à distance de Masteria se déroule en classe virtuelle, animée en direct par un formateur, et chaque participant travaille sur ses propres dossiers dans l'outil d'IA qu'il utilise déjà.",
    catalogueLabel: "Voir les programmes disponibles",
    sections: [
      {
        h2: "Comment se déroule une formation IA à distance",
        body: "La session a lieu en classe virtuelle synchrone, sur Teams, Zoom ou Google Meet selon l'outil de votre entreprise, et un formateur Masteria l'anime en direct. Le programme suit celui de la salle : sept heures par journée, des apports courts suivis d'exercices sur les cas de chaque participant. Chacun travaille dans son propre outil d'IA (ChatGPT, Microsoft Copilot, Gemini, Claude ou Vibe de Mistral) et partage son écran quand le groupe a besoin de voir un résultat.",
      },
      {
        h2: "À distance ou en salle : comment choisir",
        body: "La classe virtuelle convient aux équipes dispersées, aux salariés en télétravail et aux petits groupes, jusqu'à six personnes environ. Pour un groupe de huit à douze participants, ou quand la formation doit aussi souder une équipe autour d'un projet, la salle reste préférable. Le prix de la journée est le même dans les deux formats. Une formule mixte fonctionne bien : une première journée en salle pour lancer le projet, une seconde à distance pour approfondir sur les dossiers de chacun.",
      },
      {
        h2: "Ce qu'il faut prévoir : matériel, comptes, connexion",
        body: "Rien à installer : la session passe par votre outil de visioconférence habituel. Chaque participant a besoin d'un ordinateur, d'une connexion stable, d'un casque et d'un compte sur l'outil d'IA étudié. Nous vérifions avec vous, avant la session, les comptes et les droits de chacun, pour que personne ne passe la première heure à se connecter. Le lien de la classe virtuelle part 48 heures avant le début.",
      },
    ],
    reassurance: [
      { t: 'Formateur en direct', s: 'Aucune vidéo enregistrée' },
      { t: 'Sept heures par journée', s: 'Le programme de la salle' },
      { t: 'Teams, Zoom ou Meet', s: 'Votre outil habituel' },
      { t: 'Qualiopi et OPCO', s: 'Financement selon votre branche' },
    ],
    faqTitre: "Questions sur la formation IA à distance",
    faq: [
      { q: "Une formation IA à distance vaut-elle une formation en salle ?", a: "Oui, si le formateur est présent en direct et si chacun travaille sur ses propres cas. En classe virtuelle, les questions se posent au moment où elles viennent, les écrans se partagent et le formateur commente les prompts de chaque participant." },
      { q: "Combien de participants accepte une classe virtuelle ?", a: "Douze au plus, pour que le formateur puisse suivre ce que chacun produit. Au-delà, nous organisons plusieurs sessions à la suite." },
      { q: "Le distanciel coûte-t-il moins cher ?", a: "La journée garde le même prix de départ, 1 980 € HT en intra jusqu'à douze participants comme en accompagnement individuel. La différence tient aux frais de déplacement du formateur, qui disparaissent de la proposition." },
      { q: "Une formation à distance est-elle finançable par l'OPCO ?", a: "Oui, comme en salle. Masteria est certifié Qualiopi au titre des actions de formation, qu'elles se déroulent sur place ou à distance, et l'OPCO de votre branche peut financer la session selon ses règles et ses fonds." },
      { q: "Peut-on suivre la formation à son rythme, en vidéo ?", a: "Nous ne proposons que des sessions en direct. Les exercices sur vos dossiers et les corrections du formateur demandent un échange en temps réel, qu'une vidéo enregistrée ne remplace pas." },
      { q: "Quel outil de visioconférence utilisez-vous ?", a: "Celui de votre entreprise : Microsoft Teams, Zoom, Google Meet ou Webex. Le formateur s'y adapte, et le lien vous parvient deux jours avant la session." },
    ],
    cta: {
      titre: "Former une équipe dispersée à l'IA",
      texte: "Indiquez-nous le nombre de participants, leurs sites et l'outil d'IA qu'ils utilisent. Vous recevez sous 24 heures un programme pensé pour la classe virtuelle, avec son devis.",
    },
  },

  'formation-intelligence-artificielle-generative': {
    badge: 'IA générative en entreprise',
    h1: "Formation intelligence artificielle générative",
    metaTitle: "Formation IA générative en entreprise | Masteria",
    metaDescription: "Formation IA générative pour vos équipes : ChatGPT, Claude, Copilot, Gemini et Vibe de Mistral sur vos cas de travail. Certifié Qualiopi. Devis sous 24h.",
    intro: "ChatGPT, Claude, Gemini, Microsoft Copilot, Vibe de Mistral : ces outils d'IA générative rédigent, résument et analysent dans tous les métiers de bureau. Notre formation apprend à vos équipes à s'en servir sur leurs propres dossiers, avec les bons réflexes de vérification et de confidentialité.",
    catalogueLabel: "Découvrir les programmes par outil",
    sections: [
      {
        h2: "Ce que fait l'IA générative",
        body: "L'IA générative désigne des modèles capables de produire un contenu nouveau (un texte, une image, du code, une voix) à partir d'une consigne écrite en langage courant. En entreprise, les outils les plus répandus sont ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google), Microsoft Copilot et Vibe, l'assistant de Mistral. Ils servent à rédiger un mail ou une note, à résumer un long document, à analyser un tableau, à préparer une présentation, à traduire ou à écrire du code.",
      },
      {
        h2: "Quel outil d'IA générative choisir pour son entreprise",
        body: "Trois questions orientent le choix. La première porte sur votre environnement : Microsoft Copilot s'intègre à Microsoft 365, Gemini à Google Workspace. La deuxième porte sur les usages, car lire de longs documents, rédiger, analyser des données ou écrire du code n'appellent pas tous le même outil. La troisième porte sur vos données : les offres professionnelles (ChatGPT Business et Enterprise, Claude Team et Enterprise, Microsoft Copilot avec un compte professionnel, Gemini dans Workspace) n'entraînent pas leurs modèles sur vos échanges par défaut. Vibe héberge ses données dans l'Union européenne, mais sur l'offre Team l'entraînement reste actif tant qu'un administrateur ne l'a pas coupé.",
      },
      {
        h2: "Comment former ses équipes à l'IA générative",
        body: "Une formation utile se déroule en trois temps. D'abord comprendre comment fonctionne un modèle, pourquoi il peut inventer une réponse et comment la vérifier. Ensuite apprendre à écrire une consigne : le contexte, la tâche, le format attendu, puis les allers-retours qui améliorent le résultat. Enfin travailler sur les dossiers du métier, car un juriste et un commercial n'ont pas les mêmes cas. Chez Masteria, le programme part de votre secteur et de vos outils, et l'équipe repart avec ses propres prompts, testés pendant la session.",
      },
    ],
    reassurance: [
      { t: 'Cinq outils', s: 'ChatGPT, Claude, Copilot, Gemini, Vibe' },
      { t: 'Vos dossiers', s: 'Exercices sur vos cas de travail' },
      { t: 'Certifié Qualiopi', s: 'Finançable par votre OPCO' },
      { t: 'Intra ou individuel', s: "Jusqu'à douze participants" },
    ],
    faqTitre: "Questions sur la formation à l'IA générative",
    faq: [
      { q: "Quelle différence entre l'IA et l'IA générative ?", a: "L'IA générative est une branche de l'intelligence artificielle : elle produit un contenu nouveau (texte, image, code) au lieu de classer ou de prédire. Elle s'est diffusée auprès du grand public avec ChatGPT, fin 2022, et touche aujourd'hui l'ensemble des métiers de bureau." },
      { q: "Faut-il des connaissances techniques pour suivre la formation ?", a: "Non. Les outils d'IA générative se pilotent en langage courant. La formation s'adresse à tous les profils, du marketing aux RH, de la finance au juridique et à la direction, sans prérequis technique." },
      { q: "Peut-on se fier à l'IA générative dans son travail ?", a: "Oui, à condition d'en connaître les limites : une réponse inventée qui a l'air juste, des biais, des connaissances arrêtées à une date. Une partie de la formation apprend à vérifier une production avant de la diffuser, en exigeant des sources et en relisant les chiffres." },
      { q: "Comment protéger les données de l'entreprise ?", a: "Par trois mesures. Utilisez une offre professionnelle, qui n'entraîne pas les modèles sur vos échanges par défaut. Choisissez l'hébergement en fonction de vos données, dans l'Union européenne quand c'est nécessaire. Formez les équipes à ne jamais coller les données personnelles d'un client dans un outil grand public." },
      { q: "Combien de temps faut-il pour former une équipe ?", a: "Une journée suffit pour une prise en main solide d'un outil, sur cinq cas de travail environ. Deux jours permettent de comparer plusieurs outils et d'approfondir l'écriture des consignes. La journée démarre à 1 980 € HT, les deux jours à 3 960 € HT." },
      { q: "Quels métiers profitent le plus de l'IA générative ?", a: "Tous les métiers de bureau en profitent, et les effets se voient vite en marketing, en communication, en RH, au juridique, dans la vente et en finance. Le temps gagné dépend des tâches choisies ; nous le relevons avec vous avant et après la formation." },
    ],
    cta: {
      titre: "Former vos équipes à l'IA générative",
      texte: "Dites-nous quels métiers vous voulez former et quels outils ils utilisent. Vous recevez sous 24 heures un programme construit sur leurs cas, accompagné de son devis.",
    },
  },
}

// Pictogrammes du bandeau de réassurance, dans l'ordre des quatre libellés de chaque sujet
const REASSURANCE_ICONS = [ShieldCheck, Wallet, Clock, Users]

export default function TopicLandingPage() {
  const { '*': rest } = useParams()
  // Le slug arrive directement via la route : on l'extrait depuis location
  const slug = typeof window !== 'undefined'
    ? window.location.pathname.replace(/^\/|\/$/g, '')
    : (rest || '')

  const topic = TOPICS[slug]
  if (!topic) return null

  return (
    <>
      <SEOHead
        title={topic.metaTitle}
        description={topic.metaDescription}
        slug={slug}
        breadcrumbs={[
          { name: 'Accueil', slug: '' },
          { name: topic.h1, slug },
        ]}
        faqItems={topic.faq}
        dateModified={topic.dateModified || MODIFIED}
      />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
        padding: 'clamp(80px, 12vw, 120px) 24px 80px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fff', padding: '8px 16px', borderRadius: 999,
            fontSize: 13, fontWeight: 700, color: '#1d4ed8', marginBottom: 24,
            border: '1px solid #BFDBFE',
          }}>
            <BookOpen size={16} /> {topic.badge}
          </div>
          <h1 style={{
            fontFamily: 'Nunito, sans-serif', fontWeight: 900,
            fontSize: 'clamp(34px, 5.5vw, 54px)', lineHeight: 1.1,
            color: '#0A0A0A', marginBottom: 20,
          }}>
            {topic.h1}
          </h1>
          <p style={{
            fontSize: 'clamp(17px, 2.2vw, 20px)', color: '#4B5563',
            lineHeight: 1.6, maxWidth: 740, margin: '0 auto 36px',
          }}>
            {topic.intro}
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#0A0A0A', color: '#fff', padding: '16px 28px',
              borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none',
            }}>
              Demander un devis <ArrowRight size={18} />
            </Link>
            <Link to="/formation-intelligence-artificielle" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#fff', color: '#0A0A0A', padding: '16px 28px',
              borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none',
              border: '1px solid #E5E7EB',
            }}>
              {topic.catalogueLabel}
            </Link>
          </div>
        </div>
      </section>

      {/* FORMATIONS DU SUJET (optionnel) : une carte par programme, reliée à sa page */}
      {topic.formations && (
        <section style={{ padding: '80px 24px 0', background: '#fff' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Nunito, sans-serif', fontWeight: 800,
              fontSize: 'clamp(24px, 3.4vw, 32px)', color: '#0A0A0A',
              marginBottom: 32, lineHeight: 1.25, textAlign: 'center',
            }}>
              {topic.formationsTitre}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
              {topic.formations.map(f => (
                <Link key={f.href} to={f.href} style={{
                  display: 'flex', flexDirection: 'column', gap: 10,
                  padding: 24, borderRadius: 16, border: '1px solid #E5E7EB',
                  background: '#fff', textDecoration: 'none', color: 'inherit',
                }}>
                  <span style={{
                    alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: 6,
                    background: '#EFF6FF', color: '#1d4ed8', borderRadius: 999,
                    padding: '4px 12px', fontSize: 13, fontWeight: 700,
                  }}>
                    <Clock size={14} /> {f.duree}
                  </span>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 19, color: '#0A0A0A', lineHeight: 1.3, margin: 0 }}>
                    {f.titre}
                  </h3>
                  <p style={{ fontSize: 14, color: '#1d4ed8', fontWeight: 600, margin: 0 }}>{f.pour}</p>
                  <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.6, margin: 0, flexGrow: 1 }}>{f.desc}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontWeight: 700, color: '#0A0A0A', fontSize: 15 }}>
                    Voir le programme <ArrowRight size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTIONS ÉDITORIALES */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          {topic.sections.map((s, i) => (
            <div key={i} style={{ marginBottom: 56 }}>
              <h2 style={{
                fontFamily: 'Nunito, sans-serif', fontWeight: 800,
                fontSize: 'clamp(24px, 3.4vw, 32px)', color: '#0A0A0A',
                marginBottom: 16, lineHeight: 1.25,
              }}>
                {s.h2}
              </h2>
              <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.7 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* RÉASSURANCE */}
      <section style={{ padding: '60px 24px', background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
          {topic.reassurance.map(({ t, s }, i) => {
            const Icon = REASSURANCE_ICONS[i % REASSURANCE_ICONS.length]
            return (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 10, background: '#fff', border: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1d4ed8' }}>
                  <Icon size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#0A0A0A', marginBottom: 2 }}>{t}</div>
                  <div style={{ fontSize: 14, color: '#6B7280' }}>{s}</div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Nunito, sans-serif', fontWeight: 800,
            fontSize: 'clamp(28px, 4vw, 36px)', color: '#0A0A0A',
            marginBottom: 32, textAlign: 'center',
          }}>
            {topic.faqTitre}
          </h2>
          {topic.faq.map((item, i) => (
            <details key={i} style={{
              borderBottom: '1px solid #E5E7EB',
              padding: '20px 0',
            }}>
              <summary style={{
                cursor: 'pointer', fontWeight: 700, fontSize: 17,
                color: '#0A0A0A', listStyle: 'none', display: 'flex',
                justifyContent: 'space-between', alignItems: 'center', gap: 12,
              }}>
                <span>{item.q}</span>
                <span style={{ flexShrink: 0, color: '#1d4ed8' }}>+</span>
              </summary>
              <p style={{ marginTop: 12, color: '#374151', lineHeight: 1.7, fontSize: 16 }}>
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: '80px 24px', background: '#0A0A0A', color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Nunito, sans-serif', fontWeight: 800,
            fontSize: 'clamp(28px, 4vw, 38px)', marginBottom: 16,
          }}>
            {topic.cta.titre}
          </h2>
          <p style={{ fontSize: 17, color: '#D1D5DB', marginBottom: 32, lineHeight: 1.6 }}>
            {topic.cta.texte}
          </p>
          <Link to="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: '#fff', color: '#0A0A0A', padding: '16px 32px',
            borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none',
          }}>
            Demander un devis <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}

export const TOPIC_SLUGS = Object.keys(TOPICS)

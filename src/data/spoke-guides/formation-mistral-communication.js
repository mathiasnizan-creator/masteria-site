// Texte propre de /formation-mistral-communication (mode page propre, rendu par SpokePage). Réécrit le 07/10/2026.
// Faits Mistral : FAITS-OUTILS-2026-10-07, documentation Vibe relue le 07/10/2026 (recherche web avec l'AFP et AP,
// tâches planifiées, instructions, compétences, connecteur Slack, génération d'images), page tarifs.
// AI Act : article 50 applicable depuis le 02/08/2026 (brief commun et fiche de faits). RappelConso : arrêté du 20/01/2021.
export default {
  slug: 'formation-mistral-communication',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: "Formation Mistral AI communication : veille, communiqués et crise avec Vibe",
  metaTitle: 'Formation Mistral AI communication avec Vibe | Masteria',
  metaDesc: "Vibe pour la communication : veille programmée avec les dépêches AFP, communiqués dans votre ton, messages par public, kit de crise, AI Act article 50.",
  keywords: "formation Mistral communication, formation Vibe communication, Mistral AI relations presse, veille AFP Vibe, communication de crise IA",
  resume: "La formation Mistral AI communication apprend à une direction de la communication à programmer dans Vibe une revue de presse quotidienne nourrie par les dépêches de l'Agence France-Presse et d'AP, à écrire des communiqués dans la voix de votre maison et à préparer un kit de crise à partir des seuls faits confirmés. Le programme se déroule sur deux jours de sept heures chacun, sur place ou à distance, à 1 980 € HT par jour de formation, de deux à douze participants, ou en individuel pour un attaché de presse. Les actions de formation de Masteria sont certifiées Qualiopi, et l'OPCO de votre secteur arbitre le financement selon son règlement et ses disponibilités.",
  enBref: [
    { label: 'Formation', value: "Vibe au service des relations presse, de la communication externe et interne, et de la gestion de crise" },
    { label: 'Durée', value: "Deux journées de sept heures, avec un exercice de crise joué en temps limité le second jour" },
    { label: 'Formats', value: "Sur place ou en visioconférence ; l'équipe entière jusqu'à douze personnes, ou un attaché de presse seul" },
    { label: 'Tarif', value: "1 980 € HT la journée, que l'on forme une personne ou douze ; abonnements Vibe en sus, chez Mistral" },
    { label: 'Financement', value: "Qualiopi (actions de formation) ; votre OPCO statue sur la demande, règles et fonds à l'appui" },
    { label: 'Prérequis', value: "Rédiger des contenus pour l'entreprise ; un compte Vibe Pro ou Team pour programmer plus de cinq tâches et régler la confidentialité" },
  ],
  prerequis: "Rédiger des contenus pour l'entreprise ; un compte Vibe Pro ou Team pour programmer plus de cinq tâches et régler la confidentialité",
  intro: "Une direction de la communication vit au rythme de la revue de presse du matin, des communiqués et des éléments de langage, avec la crise toujours possible en arrière-plan. Vibe, ainsi renommé le 28 mai 2026 (c'était Le Chat de Mistral AI), a deux atouts pour ce métier : sa recherche web puise dans les dépêches de l'Agence France-Presse et de l'Associated Press, et ses tâches planifiées lancent la veille avant que vous arriviez au bureau. Ce guide, relu le 7 octobre 2026, accompagne une cellule de crise pendant ses quatre-vingt-dix premières minutes et précise quand un contenu généré doit être signalé comme tel.",
  guide: {
    kicker: "Guide terrain",
    h2: "Vibe lit l'actualité à heure fixe et adapte un message validé à chaque public",
    lead: "En communication, un assistant rend deux services : il lit vite ce qui se dit dehors, et il réécrit pour chaque public un message que la direction a validé. Le risque du métier reste entier. Une citation inventée ou un fait non confirmé qui sort dans un communiqué engage la signature de l'entreprise, et une dépêche peut le reprendre dans l'heure. La formation place donc la relecture humaine aux deux endroits où elle compte : avant la diffusion d'une veille, et avant la publication d'un texte.",
    sections: [
      {
        h3: "La revue de presse est prête avant votre arrivée, à 7 h 30",
        paras: [
          "La recherche web s'active par le bouton + ou la touche /, rubrique Outils. Les dépêches de deux agences, l'AFP et AP, alimentent ces résultats ; une petite icône de journal s'ajoute alors au globe, et le bouton Sources liste chaque article utilisé. L'ouverture d'URL complète le dispositif : collez l'adresse d'un article précis, et Vibe lit cette page seule.",
          "Une tâche planifiée relance tous les jours, à l'heure dite, la consigne que vous avez écrite, avec la recherche web, vos bibliothèques et vos compétences. Elle se crée depuis la page Tâches, onglet Planifiées, ou en demandant dans la conversation de programmer la demande. La revue arrive dans la barre latérale avec une pastille de nouveauté, et l'on peut l'interroger ensuite. La compétence /research-synthesis, livrée par Mistral, range plusieurs sources en une note structurée. L'offre gratuite plafonne à cinq tâches simultanées ; Pro et Team n'imposent pas de limite.",
        ],
        list: [
          "Les mentions de l'entreprise et de ses dirigeants depuis la veille, avec la date et le titre du média.",
          "Les sujets de votre secteur qui montent, classés selon le risque qu'ils font courir à la marque.",
          "Les prises de parole des concurrents et des fédérations professionnelles.",
        ],
      },
      {
        h3: "Une bibliothèque éditoriale et des instructions tiennent la voix de la maison",
        paras: [
          "Une bibliothèque indexe vos documents et renvoie à chacun par une note numérotée. Celle d'une direction de la communication réunit la charte éditoriale, les communiqués des deux dernières années, les biographies validées des porte-parole, les questions-réponses déjà approuvées et les éléments de langage en vigueur. Partagée avec le service, avec un simple droit de lecture, elle devient la référence commune.",
          "Le ton se règle ailleurs, dans Contexte puis Instructions : vous y décrivez le vouvoiement, la longueur d'un chapeau ou les mots que la marque s'interdit. Ces consignes valent pour toutes les nouvelles demandes. Votre gabarit de communiqué mérite une compétence (Skill) à part : titre, chapeau, corps, citation à recueillir, paragraphe « à propos », contact presse. Quand cette compétence est appelée, ses règles l'emportent sur les préférences individuelles, et tout le service écrit dans la même forme.",
        ],
      },
      {
        h3: "Un message validé se décline par public, et le fond ne bouge pas",
        paras: [
          "Deux compétences de Mistral servent ce travail. /stakeholder-translator reformule un contenu pour un autre lectorat : direction, équipes, partenaires, distributeurs. /internal-comms produit points d'étape, messages à la direction, foires aux questions et comptes rendus d'incident. Partez toujours du texte validé par la direction et demandez des déclinaisons : l'outil retravaille la forme, le fond reste le vôtre.",
          "Le connecteur Slack cherche des messages, lit des canaux et en publie. Vibe s'arrête avant de poster et propose trois boutons : Continuer, Toujours autoriser, Refuser. En période de crise, la seule réponse raisonnable reste la première, message par message.",
        ],
      },
      {
        h3: "Depuis le 2 août 2026, certains textes générés se signalent au public",
        paras: [
          "Le texte européen sur l'intelligence artificielle demande, dans son article 50, de signaler un écrit produit ou retouché par une IA dès lors qu'on le publie pour informer le public d'une question qui touche l'intérêt général. Cette règle cède dans un cas : un humain a relu ou contrôlé le texte, et une personne, physique ou morale, en répond comme éditeur. Le communiqué que la direction relit, corrige puis signe relève de cette exception ; celui que l'on publie tel que l'outil l'a livré, non.",
          "Le même article traite des hypertrucages, ces images, sons ou vidéos fabriqués qui imitent une personne, un endroit ou une scène existante au point de tromper. Vibe génère ses images grâce à Black Forest Labs, fournisseur de ses modèles d'image. Un visuel abstrait ne soulève aucune question ; un cliché qu'on croirait pris dans votre usine, ou montrant votre dirigeant, appelle une mention.",
        ],
      },
    ],
    table: {
      caption: "Ce que fait une direction de la communication, et ce que Vibe lui apporte à chaque étape",
      headers: ["Travail", "Outil de Vibe", "Le contrôle à garder"],
      rows: [
        ["Revue de presse du matin", "Tâche planifiée quotidienne, recherche web avec l'AFP et AP, /research-synthesis", "Presse payante et réseaux fermés restent hors de portée"],
        ["Lire l'article qu'un journaliste vous signale", "Ouverture d'URL", "Une page par adresse, aucun contenu réservé aux abonnés"],
        ["Écrire un communiqué", "Bibliothèque éditoriale et compétence maison", "Aucune citation que la personne n'ait prononcée ou validée"],
        ["Adapter un message à chaque public", "Compétence /stakeholder-translator", "Chaque version relue face au message source"],
        ["Informer les salariés d'un incident", "Compétence /internal-comms, connecteur Slack", "Publication soumise à votre accord, message par message"],
        ["Illustrer une publication", "Génération d'images", "Une mention pour toute image qui imite une vraie photo"],
      ],
    },
    cas: {
      h3: "Cas pratique : quatre-vingt-dix minutes après la décision de rappeler une bouilloire",
      contexte: "Imaginons la directrice communication d'un fabricant français de petit électroménager. La direction qualité vient de décider le rappel d'une bouilloire dont l'interrupteur peut surchauffer sur certains lots. Depuis le 1er avril 2021, tout rappel de produit se déclare sur le site public RappelConso. La cellule de crise se réunit dans une heure et demie et attend un premier kit de communication.",
      etapes: [
        "Ouvrez le projet « Crise » préparé à froid, qui contient la procédure, la charte et les communiqués passés dans une bibliothèque attachée.",
        "Collez les faits confirmés par la direction qualité, et ceux-là seulement, puis le prompt ci-dessous.",
        "Relisez la déclaration d'attente dans le Canvas, corrigez-la à la main et faites-la valider par le dirigeant avant toute diffusion.",
        "Lancez /stakeholder-translator pour la version destinée aux distributeurs, puis /internal-comms pour la note aux salariés.",
        "Si la note part sur Slack, laissez Vibe préparer le message et validez vous-même la publication lorsqu'il demande votre accord.",
      ],
      prompt: "Notre entreprise conçoit et fabrique du petit électroménager. Notre direction qualité vient de décider le rappel de la bouilloire « Alto 1,7 L » vendue depuis février : sur certains lots, l'interrupteur peut surchauffer. Aucun incident ne nous a été signalé à ce jour. Le rappel sera déclaré aujourd'hui sur RappelConso. Les clients peuvent rapporter l'appareil en magasin pour un échange ou un remboursement.\n\nCe sont les seuls faits confirmés. N'en ajoute aucun.\n\nPrépare un premier kit pour la cellule de crise.\n\n1. Une déclaration d'attente de cinq phrases au plus, publiable sur notre site, qui dit ce qui se passe, ce que les clients doivent faire et où trouver l'information. Ton sobre, sans minimiser ni dramatiser.\n2. Dix questions que poseront les clients et les journalistes, avec une réponse courte à chacune. Si les faits confirmés ne permettent pas de répondre, écris « à confirmer par la direction qualité ».\n3. Cinq éléments de langage pour le porte-parole, dans le vocabulaire de nos communiqués de la bibliothèque.\n4. La liste de ce que nous ne devons pas dire tant que l'enquête qualité n'est pas close.\n\nN'écris aucune citation au nom du dirigeant. Laisse un emplacement signalé « citation à recueillir ».",
      resultat: "Vous obtenez une déclaration d'attente courte, dix questions-réponses dont plusieurs marquées « à confirmer », des éléments de langage dans le vocabulaire de la maison ainsi que les phrases à bannir. Les mentions « à confirmer » dressent la liste des points à trancher en cellule avec la direction qualité. Vérifiez la cohérence entre la déclaration, la fiche RappelConso et les consignes données en magasin : trois textes qui se contredisent font plus de dégâts que le rappel.",
    },
    pieges: [
      {
        titre: "Une citation du dirigeant apparaît sans avoir été prononcée",
        texte: "En rédigeant un communiqué, l'assistant glisse volontiers une citation du président, plausible et fausse. Interdisez-le dans le prompt comme dans votre compétence de communiqué. Une citation se recueille auprès de la personne et se fait valider par écrit.",
      },
      {
        titre: "Un fait non confirmé entre dans la déclaration",
        texte: "En crise, Vibe comble les trous avec des hypothèses raisonnables. Donnez-lui les seuls faits confirmés, interdisez-lui d'en ajouter et demandez-lui de signaler ce qui manque. La mention « à confirmer » vaut mieux qu'une phrase fausse reprise par une dépêche.",
      },
      {
        titre: "La veille ignore la presse réservée aux abonnés",
        texte: "Selon la documentation de Mistral, les pages derrière un identifiant ou un paywall restent fermées, et un résultat peut être ancien. Un article de quotidien réservé aux abonnés n'entrera pas dans la revue du matin : gardez votre outil de veille média pour la couverture complète.",
      },
    ],
  },
  audience: [
    {
      title: "Directions et responsables de la communication",
      desc: "La ligne éditoriale, les circuits de validation et la préparation de crise sont votre affaire. La formation vous apprend à encadrer l'usage de Vibe dans l'équipe et à repérer les publications qu'il faut signaler comme générées.",
    },
    {
      title: "Attachés de presse et responsables des relations médias",
      desc: "Communiqués, suivi des retombées et réponses aux journalistes remplissent vos journées. Vibe programme la veille et écrit dans la ligne de vos communiqués passés, sous votre relecture.",
    },
    {
      title: "Chargés de communication interne",
      desc: "Vous informez les salariés et vous outillez les managers qui relaient. Vous apprenez à décliner un message validé pour chaque public et à préparer les foires aux questions internes.",
    },
  ],
  useCases: [
    {
      icon: '📰',
      title: "Revue de presse programmée",
      desc: "Une tâche planifiée lance chaque matin une veille sur le web et les fils d'agence, sources listées.",
    },
    {
      icon: '📝',
      title: "Communiqué dans la ligne maison",
      desc: "Un communiqué qui reprend le plan et les mots de vos communiqués passés, sans citation non validée.",
    },
    {
      icon: '🗣',
      title: "Éléments de langage par public",
      desc: "Le message validé par la direction, réécrit pour chaque public avec la compétence /stakeholder-translator.",
    },
    {
      icon: '🚨',
      title: "Kit de crise",
      desc: "Déclaration d'attente, questions-réponses et phrases à proscrire, tirées des seuls faits confirmés.",
    },
    {
      icon: '💬',
      title: "Communication interne",
      desc: "Points d'étape, foires aux questions et comptes rendus d'incident avec /internal-comms, publiés sur Slack après votre accord.",
    },
    {
      icon: '⚖',
      title: "Mention IA des publications",
      desc: "Repérer les textes et les images qui doivent être signalés comme générés, d'après l'article 50 du règlement européen.",
    },
  ],
  modules: [
    {
      day: 1,
      title: "Module 1 · Régler Vibe pour une direction de la communication",
      duration: "1h30",
      description: "Fixer le ton, la confidentialité et les accords avant de produire le premier texte.",
      items: [
        "Free, Pro, Team ou Enterprise : qui décide si vos échanges entraînent les modèles de Mistral",
        "Ton et règles d'écriture dans Contexte, puis Instructions",
        "Fichiers de journalistes et contacts presse : des données personnelles, triées au regard du RGPD",
        "Un projet par dossier (lancement, événement, scénario de crise) et l'accord manuel avant toute publication",
      ],
      exercise: "Vous rédigez les instructions de ton de votre direction en partant de votre charte éditoriale.",
    },
    {
      day: 1,
      title: "Module 2 · Programmer une veille que l'on vérifie source par source",
      duration: "2h",
      description: "Recevoir chaque matin une revue dont chaque ligne renvoie à un article.",
      items: [
        "Recherche web, dépêches d'agence (AFP, AP), pictogramme d'actualité et bouton Sources",
        "Ouverture d'URL pour un article précis, une page par adresse",
        "Tâche planifiée quotidienne, /research-synthesis et questions de suivi",
        "Limites : presse payante, pages protégées, résultats datés",
      ],
      exercise: "Vous programmez la revue du matin sur vos propres sujets et vous la comparez à celle de votre outil actuel.",
    },
    {
      day: 1,
      title: "Module 3 · Écrire un communiqué qui ressemble aux vôtres",
      duration: "2h",
      description: "Produire un communiqué fidèle à la maison et limité aux faits vérifiés.",
      items: [
        "Bibliothèque éditoriale : charte, communiqués passés, biographies des porte-parole",
        "Structure : titre, chapeau, corps, citation, paragraphe « à propos », contact presse",
        "Citations jamais générées : un emplacement signalé, à recueillir",
        "Compétence de communiqué partagée avec toute l'équipe",
      ],
      exercise: "Vous rédigez un communiqué sur une actualité de votre entreprise en vous appuyant sur vos communiqués passés.",
    },
    {
      day: 1,
      title: "Module 4 · Décliner un message validé pour chaque public",
      duration: "1h30",
      description: "Changer la forme d'un message sans toucher à son fond.",
      items: [
        "/stakeholder-translator pour la direction, les équipes, les partenaires et les distributeurs",
        "/internal-comms pour les points d'étape et les foires aux questions internes",
        "Relecture de chaque version face au message source",
        "Kit de relais pour les managers",
      ],
      exercise: "Vous déclinez un message validé de votre entreprise pour trois publics, puis vous contrôlez chaque version.",
    },
    {
      day: 2,
      title: "Module 5 · Préparer la crise avant qu'elle n'arrive",
      duration: "1h30",
      description: "Rédiger au calme ce qui n'attendra pas la crise.",
      items: [
        "Projet « Crise » : procédure, annuaire de la cellule, précédents du secteur",
        "Scénarios propres à votre activité",
        "Modèle de déclaration d'attente et circuit de validation",
        "Questions-réponses déjà approuvées, rangées dans la bibliothèque",
      ],
      exercise: "Vous montez le projet de crise de votre entreprise avec vos procédures et deux scénarios plausibles pour votre secteur.",
    },
    {
      day: 2,
      title: "Module 6 · Tenir les premières heures d'une crise",
      duration: "2h",
      description: "Produire un kit utile à partir des seuls faits confirmés.",
      items: [
        "La consigne « n'ajoute aucun fait » et la mention « à confirmer »",
        "Déclaration d'attente, questions-réponses, éléments de langage du porte-parole",
        "Ce qui ne se dit pas avant la fin de l'enquête",
        "Cohérence avec les déclarations officielles, une fiche RappelConso par exemple",
      ],
      exercise: "Vous jouez un scénario de crise tiré de votre secteur et vous produisez le kit en temps limité.",
    },
    {
      day: 2,
      title: "Module 7 · Illustrer et signaler ce qui est généré",
      duration: "2h",
      description: "Produire des visuels et savoir quand une mention s'impose.",
      items: [
        "Images générées par Vibe (technologie Black Forest Labs), petits textes à reprendre à la main",
        "Graphiques chiffrés confiés à l'interpréteur de code plutôt qu'au générateur d'images",
        "Règlement européen, article 50 : texte d'intérêt général, exception de la relecture humaine signée",
        "Hypertrucages : les images qui pourraient passer pour de vraies photos",
      ],
      exercise: "Vous classez vos dernières publications selon l'obligation de mention, puis vous illustrez l'une d'elles.",
    },
    {
      day: 2,
      title: "Module 8 · Écrire la charte éditoriale de l'IA dans le service",
      duration: "1h30",
      description: "Écrire qui valide, qui publie, et ce que l'outil ne produit jamais.",
      items: [
        "Charte d'usage de Vibe : circuit de validation par type de contenu, citations toujours recueillies",
        "Publication par connecteur : accord manuel conservé, bibliothèque tenue à jour",
        "Maîtrise de l'IA (AI Act, art. 4) : qui a été formé, qui répond aux questions du service",
        "Plan à 30 jours : la revue du matin en service, une compétence de communiqué, un bilan au bout d'un mois",
      ],
      exercise: "Vous écrivez les règles d'emploi de Vibe propres à votre service, puis votre plan pour les trente jours qui suivent.",
    },
  ],
  objectives: [
    "Le participant programme une revue de presse quotidienne et contrôle la date et l'origine de chaque information.",
    "Le participant rédige un communiqué conforme à la ligne éditoriale en s'appuyant sur une bibliothèque.",
    "Le participant décline un message validé pour trois publics sans en modifier le fond.",
    "Le participant produit un premier kit de crise à partir des seuls faits confirmés.",
    "Le participant classe un texte ou une image avant publication (mention obligatoire ou non) en appliquant l'article 50 du règlement européen sur l'IA.",
  ],
  faq: [
    {
      q: "Vibe donne-t-il accès aux dépêches de l'AFP ?",
      a: "Oui, à travers sa recherche web. Mistral travaille avec l'Agence France-Presse et l'Associated Press, et un pictogramme d'actualité signale les réponses qui s'appuient sur leurs dépêches ; le bouton Sources en donne la liste. Vous n'accédez pas au fil complet de l'agence : Vibe cite les dépêches qui répondent à votre question. Pour une veille exhaustive de la presse quotidienne et régionale, votre outil de veille média reste nécessaire.",
    },
    {
      q: "Peut-on recevoir une revue de presse chaque matin sans rien lancer soi-même ?",
      a: "Oui, avec une tâche planifiée quotidienne qui relance votre consigne de veille tous les jours à heure fixe. Elle mobilise la recherche web, vos bibliothèques et vos compétences ; le résultat arrive dans la barre latérale, signalé comme non lu, et se prolonge par vos questions. D'après la grille de Mistral au 7 octobre 2026, l'offre gratuite autorise cinq tâches en même temps, tandis que Pro, Team et Enterprise n'en limitent pas le nombre.",
    },
    {
      q: "Un communiqué préparé avec Vibe doit-il porter une mention ?",
      a: "Non, dès lors qu'il a été relu et qu'une personne en répond. Une règle européenne en vigueur depuis le 2 août 2026 (AI Act, article 50) exige de signaler un texte généré mis en ligne pour informer les citoyens d'une affaire d'intérêt général. Une exception est prévue : un humain a relu ou contrôlé le texte, et quelqu'un, salarié ou entreprise, en endosse la responsabilité d'éditeur. Le communiqué que votre direction relit, corrige et signe sort donc du champ de l'obligation ; un texte mis en ligne sans relecture y entre.",
    },
    {
      q: "Les visuels créés par Vibe sont-ils utilisables en communication ?",
      a: "Pour illustrer, oui, avec deux précautions. Ses images sortent de modèles conçus par Black Forest Labs, et Mistral signale qu'une retouche peut abîmer les petits caractères et les motifs fins : un logo ou un slogan se reprend à la main. Pour un graphique tiré de chiffres, l'éditeur recommande l'interpréteur de code. Une image que l'on pourrait prendre pour un vrai cliché (un salarié, un site, une scène) doit être signalée comme générée, l'AI Act le demande.",
    },
    {
      q: "Comment faire respecter notre charte éditoriale par tout le service ?",
      a: "En combinant trois réglages. Les instructions personnelles, dans Contexte puis Instructions, posent le ton de chacun. Une bibliothèque partagée met la charte, les communiqués passés et les éléments de langage sous les yeux de Vibe, avec des renvois numérotés. Une compétence de communiqué, enfin, fixe la structure : quand elle est appelée, ses règles l'emportent sur les préférences individuelles. La formation fait écrire cette compétence par l'équipe, à partir de ses propres communiqués.",
    },
    {
      q: "Vibe peut-il publier sur Slack ou envoyer un communiqué aux journalistes ?",
      a: "Il peut publier sur Slack et envoyer des mails par le connecteur Outlook, toujours après votre accord, action par action ou pour toute la session. Nous déconseillons l'envoi automatique à une liste de journalistes : leurs coordonnées sont des données personnelles soumises au RGPD, et un communiqué parti avec une erreur ne se rattrape pas. Vibe prépare le message et la liste ; l'attaché de presse relit et envoie depuis son outil habituel.",
    },
    {
      q: "Quel budget pour cinq communicants, et quel financement ?",
      a: "Le prix ne dépend pas du nombre de stagiaires : 1 980 € HT par jour, d'un participant à douze. Pour cinq personnes et deux jours, comptez 3 960 € HT, ou 792 € HT par tête. Grâce à Qualiopi, que Masteria détient pour ses actions de formation, l'OPCO de votre secteur peut participer d'après ses propres critères et ses moyens ; le dossier se monte avec nous. Les abonnements Vibe se souscrivent à part, auprès de Mistral.",
    },
  ],
  tarifs: {
    titre: "Le prix pour une direction de la communication",
    paras: [
      "Le forfait comprend une préparation sur vos textes : avant la session, le formateur reprend avec vous la charte éditoriale, trois communiqués récents, votre procédure de crise et la liste de vos sujets de veille. Les exercices partent de cette matière, et le service repart avec sa revue du matin programmée, sa compétence de communiqué et un projet « Crise » déjà rempli.",
      "Cinq communicants formés deux jours en intra : la facture atteint 3 960 € HT, 792 € HT pour chacun d'eux. Un attaché de presse suivi en individuel paie 1 980 € HT par jour. Côté financement, l'OPCO de votre secteur examine la demande à la lumière de ses règles et de son budget, sur la base du programme et du projet de convention fournis par Masteria. Les abonnements Vibe ne sont pas compris.",
    ],
  },
  apres: {
    titre: "Après la formation, une veille et un circuit de validation outillés",
    texte: "Une équipe formée demande souvent l'étape suivante : une veille qui croise vos abonnements presse et les dépêches d'agence dans un seul tableau, un assistant chargé des questions des journalistes, nourri de vos seules questions-réponses validées, ou un circuit qui fait passer chaque texte généré par la bonne signature avant publication. Masteria cadre ce projet avec vous et votre DSI, puis le réalise au forfait avec ses développeurs. Ce chantier de développement, distinct de la formation, n'est pas finançable par votre OPCO.",
  },
  cta: {
    milieu: "Envoyez-nous votre procédure de crise : l'exercice du second jour partira de votre propre scénario.",
    fin: {
      titre: "Construisons la session à partir de vos communiqués",
      texte: "Dites-nous combien de personnes compte la direction de la communication, quels sujets vous suivez en veille et la formule Vibe souscrite. Vous recevez un programme calé sur vos textes et des dates possibles.",
    },
  },
  terrain: {
    titre: "Sur le terrain : un ton de marque fixé par écrit, en septembre 2026",
    texte: "Une interprofession agricole et son syndicat de producteurs ont fait former seize salariés par Masteria en septembre 2026, dont l'équipe de promotion et de communication, sur trois jours. Vibe faisait partie des six assistants mis à l'épreuve le premier jour, sur des textes que la filière publie. Le lendemain, l'atelier communication a fixé par écrit le ton de la marque, l'a confié à un seul assistant partagé par le service, puis l'a mis au travail : calendrier éditorial, contenus traduits en anglais, visuels, veille.",
    lien: '/etudes-de-cas-ia#mission-interprofession-agricole',
  },
  liensAssocies: [
    { label: "Formation IA communication : les mêmes métiers, d'autres assistants", href: '/formation-ia-communication' },
    { label: "Formation à la veille avec l'IA, du sourcing à la note", href: '/formation-ia-veille' },
    { label: "Formation AI Act : obligations de transparence et maîtrise de l'IA", href: '/formation-ai-act' },
    { label: "Formation Claude pour les équipes de communication", href: '/formation-claude-communication' },
    { label: "Toutes les formations Mistral AI et le programme commun", href: '/formation-mistral-ai' },
  ],
  sources: [
    { name: "Documentation Mistral, recherche web de Vibe et accords avec l'AFP et AP", url: "https://docs.mistral.ai/vibe/work/web-search-open-url" },
    { name: "Documentation Mistral, programmer une tâche (fréquences, résultats, accords)", url: "https://docs.mistral.ai/vibe/work/scheduled-tasks" },
    { name: "Documentation Mistral, compétences /research-synthesis, /stakeholder-translator et /internal-comms", url: "https://docs.mistral.ai/vibe/work/skills" },
    { name: "Documentation Mistral, instructions personnalisées et leur priorité", url: "https://docs.mistral.ai/vibe/work/custom-instructions" },
    { name: "Documentation Mistral, génération d'images avec Black Forest Labs", url: "https://docs.mistral.ai/vibe/work/image-generation" },
    { name: "Grille Mistral : nombre de tâches planifiées selon l'offre", url: "https://mistral.ai/pricing" },
    { name: "Commission européenne, service d'assistance AI Act : texte de l'article 50", url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50" },
    { name: "Ministère de l'Économie : déclaration des rappels sur RappelConso", url: "https://www.economie.gouv.fr/entreprises/rappels-produits-rappel-conso" },
    { name: "Légifrance : arrêté pris le 20 janvier 2021 pour la déclaration des rappels", url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043038659" },
  ],
}

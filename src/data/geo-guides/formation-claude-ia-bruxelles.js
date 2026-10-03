// Contenu propre à /formation-claude-ia-bruxelles (guide terrain). Rendu par GeoPage.
// Vérifié le 03/10/2026 : fonctions Claude sur support.claude.com (fichiers, recherche web, Recherche, offre Team), privacy.claude.com, platform.claude.com (résidence) ; registre de transparence de l'UE (statistiques du 18/09/2026) ; rapport 2024 du Commissaire bruxellois à l'Europe ; commission.europa.eu et digital-strategy.ec.europa.eu.
export default {
  slug: 'formation-claude-ia-bruxelles',
  dateModified: '2026-10-03',
  metaDesc: "Formation Claude IA Bruxelles : lire l'AI Act et les actes délégués, recherche web avec citations, notes en français et en anglais. Cabinets, fédérations.",
  intro: "À Bruxelles, les cabinets d'affaires publiques et les fédérations travaillent sur des textes qu'ils n'écrivent pas : règlements, projets d'actes délégués, lignes directrices de la Commission, souvent lus en anglais avant d'être expliqués en français. Claude lit ces documents longs, cherche sur le web en citant ses sources et rédige dans les deux langues. Nos sessions en français partent des dossiers européens que votre cabinet ou votre fédération suit cette saison, dans vos locaux du quartier européen ou en ligne.",
  guide: {
    kicker: "Guide terrain Bruxelles",
    h2: "Claude à Bruxelles : lire le texte européen à la source et citer chaque page",
    lead: "Le registre de transparence de l'Union comptait 17 982 organisations inscrites au 18 septembre 2026, dont 3 973 déclarent leur siège en Belgique. Le Commissaire bruxellois à l'Europe estime entre 10 000 et 14 000 le nombre d'emplois de lobbyistes dans la Région. Leur travail quotidien repose sur des textes officiels longs et sur des notes qui doivent tenir face à un fonctionnaire de la Commission. Claude aide à lire et à comparer ces textes, à condition d'exiger l'article et la page, et de garder hors de l'outil les positions que vos membres n'ont pas encore arrêtées.",
    sections: [
      {
        h3: "Un règlement entier tient dans une conversation, ses tableaux pas toujours",
        paras: [
          "Une conversation Claude accepte jusqu'à 20 fichiers, de 500 Mo chacun au plus, et des PDF jusqu'à 1 000 pages. Pour un juriste, le seuil qui compte se situe à 100 pages : en deçà, Claude lit aussi les tableaux, les schémas et les autres éléments visuels ; de 101 à 1 000 pages, il ne lit que le texte. Un règlement publié avec ses annexes dépasse vite ce seuil. Découpez le PDF pour traiter à part l'annexe qui contient des tableaux, et Claude en lira la mise en forme.",
          "Anthropic donne un conseil utile pour les textes officiels : renvoyer aux numéros de page affichés par votre lecteur PDF plutôt qu'à ceux imprimés sur le document. Sur un rapport qui s'ouvre par une page de garde et un sommaire, l'écart atteint vite plusieurs pages. Exigez dans chaque demande l'article, le paragraphe et la page du PDF, et contrôlez trois citations au hasard avant d'utiliser la note. Dans un projet, chaque fichier est limité à 30 Mo : le texte de référence y trouve sa place, les dossiers volumineux restent dans la conversation.",
        ],
      },
      {
        h3: "La recherche web cite ses sources, une fois que le propriétaire l'a ouverte",
        paras: [
          "Sur les offres Team et Enterprise, un propriétaire doit d'abord activer la recherche web pour toute l'organisation ; chaque membre l'allume ensuite dans sa conversation, et la nouvelle interface de Claude cherche d'elle-même quand c'est utile. Chaque réponse comporte alors des citations vers ses sources. Avec la même option, Claude lit une page dont vous lui donnez l'adresse : une consultation, le communiqué d'une direction générale, la fiche d'une procédure au Parlement. Il peut aussi tenir compte de votre position, déduite de l'adresse IP : depuis Bruxelles, précisez si vous attendez des sources belges ou européennes.",
          "Le mode Recherche, réservé aux offres payantes Pro, Max, Team et Enterprise, va plus loin. Claude enchaîne plusieurs recherches qui s'appuient les unes sur les autres et rend en quelques minutes une réponse argumentée, citations à l'appui. Il exige que la recherche web soit active, et il puise aussi dans Gmail, Google Agenda et Google Docs quand ces connecteurs sont branchés. Ces sessions consomment plus vite les limites d'usage. Pour une veille européenne, le prompt fixe l'ordre des sources : textes officiels de l'Union d'abord, presse spécialisée ensuite, séparés dans la réponse.",
        ],
      },
      {
        h3: "Les actes délégués laissent quatre semaines pour réagir",
        paras: [
          "La Commission publie sur son portail « Have your say » les projets d'actes délégués et d'actes d'exécution importants, ouverts aux retours du public pendant quatre semaines. L'acte adopté s'accompagne ensuite d'un exposé qui résume les retours reçus et la façon dont ils ont été utilisés. Pour une fédération, la fenêtre impose un rythme : lire le projet, consulter les membres, arrêter une position, la rédiger en anglais. Claude raccourcit la lecture et la rédaction. La consultation des membres et l'arbitrage restent l'affaire du bureau de la fédération.",
          "Le règlement sur l'IA illustre ce rythme. Modifié en juillet 2026 par le règlement (UE) 2026/1744, il impose ses règles de transparence depuis août 2026, et la Commission a publié le 20 juillet 2026 des lignes directrices pratiques sur ces obligations. Un cabinet qui suit ce dossier compare des versions successives d'un même texte et des documents d'interprétation qui s'empilent. C'est l'exercice où un assistant qui cite l'article et la page fait gagner le plus de temps, et où une citation non vérifiée coûte le plus cher.",
        ],
      },
      {
        h3: "Les positions des membres restent hors de l'outil jusqu'à leur validation",
        paras: [
          "Par défaut, Anthropic n'utilise pas les échanges de ses offres commerciales, dont Team et Enterprise, pour entraîner ses modèles. Une exception mérite d'être connue : une évaluation envoyée avec les boutons pouce en l'air ou pouce en bas fait partir la conversation entière chez Anthropic, qui peut la garder cinq ans et s'en servir pour l'entraînement. Un propriétaire Team ou Enterprise peut retirer ce bouton à toute l'organisation avec le réglage « Rate chats », dans les paramètres de données et de confidentialité. Sur un dossier client, ce réglage se fait avant la première session.",
          "Le lieu de traitement est l'autre question. En octobre 2026, la documentation d'Anthropic ne prévoit aucune région européenne : les modèles tournent dans n'importe quelle géographie disponible, ou aux seuls États-Unis sur option, et les espaces de travail de l'API stockent leurs données aux États-Unis. Pour un cabinet bruxellois, une règle de travail en découle. Les textes publiés, les contributions rendues publiques et vos notes déjà diffusées entrent dans Claude. La position qu'un membre vous confie avant arbitrage, ou une information de négociation, attend sa validation et son anonymisation.",
        ],
      },
    ],
    table: {
      caption: "Textes européens : ce que Claude en fait dans un cabinet d'affaires publiques ou une fédération",
      headers: ["Texte ou source", "Usage de Claude", "Point de vigilance"],
      rows: [
        ["Règlement publié sur EUR-Lex, avec ses annexes", "PDF dans la conversation, extraction article par article avec la page", "Au-delà de 100 pages, les tableaux ne sont plus analysés comme des images"],
        ["Projet d'acte délégué publié sur « Have your say »", "Lecture de la page par son adresse, rapprochement avec l'article du règlement qui l'autorise", "Quatre semaines pour réagir à compter de la publication"],
        ["Lignes directrices de la Commission", "Résumé en français pour les membres, citations conservées en anglais", "Guide pratique : le préciser dans la note"],
        ["Amendements du Parlement et orientation du Conseil", "Tableau des écarts entre versions, article par article", "Chaque écart vérifié dans le document source"],
        ["Contributions publiées à une consultation", "Synthèse des positions par catégorie d'acteurs", "Seules les contributions publiques ; auteur cité pour chaque position"],
        ["Note de position de la fédération", "Rédaction en anglais et en français à partir des décisions du bureau", "Position non arrêtée tenue hors de l'outil ; bouton de retour retiré"],
      ],
    },
    cas: {
      h3: "Cas pratique : préparer la réaction d'une fédération à un projet d'acte d'exécution",
      contexte: "Prenons une consultante d'un cabinet d'affaires publiques du quartier européen. Une fédération sectorielle cliente lui demande une note bilingue, en anglais pour son bureau européen et en français pour ses membres belges, sur un projet d'acte d'exécution pris en application du règlement sur l'IA, que la Commission vient d'ouvrir à quatre semaines de retours. Elle dispose du projet, du règlement modifié et de la position générale de la fédération, déjà publiée.",
      etapes: [
        "Vérifier avec le propriétaire de l'espace Team que la recherche web est activée et que le bouton de retour est retiré pour l'organisation.",
        "Créer un projet privé pour la fédération, y déposer le règlement et la position publiée, puis joindre le projet d'acte à la conversation.",
        "Lancer le prompt ci-dessous, puis ouvrir chaque citation pour contrôler l'article et la page.",
        "Transmettre aux membres la liste des questions, recueillir leurs réponses hors de l'outil et faire arrêter la position par le bureau de la fédération.",
        "Revenir dans Claude avec la position validée pour rédiger la contribution en anglais, puis la déposer sur le portail avant la date limite.",
      ],
      prompt: "Tu travailles pour un cabinet d'affaires publiques à Bruxelles. La conversation contient un projet d'acte d'exécution publié par la Commission européenne pour quatre semaines de retours, le règlement sur l'IA dans sa version modifiée et la position publique de la fédération cliente.\n\nPremière tâche : résume le projet d'acte en dix points au plus. Pour chaque point, cite l'article et le numéro de page du PDF tel qu'il s'affiche dans le lecteur.\n\nDeuxième tâche : rattache chaque article du projet à l'article du règlement qui l'autorise. Signale tout point qui semble aller au-delà de cette habilitation, en citant les deux textes.\n\nTroisième tâche : utilise la recherche web pour trouver, sur les sites officiels de l'Union, les documents liés à ce projet (consultation, lignes directrices, questions-réponses). Donne l'adresse de chaque source.\n\nQuatrième tâche : confronte le projet à la position publique de la fédération et liste les questions à poser aux membres.\n\nRédige la note en anglais, puis en français. Si une information manque dans les documents ou les sources, écris-le. N'invente aucune position de membre.",
      resultat: "Vous obtenez un résumé référencé, une analyse de l'habilitation, la liste des documents officiels liés et les questions à poser aux membres, dans les deux langues de travail. La conversation ne contient que des textes publics et une position déjà diffusée. Contrôlez au moins trois citations dans le PDF : dans une contribution officielle, un renvoi faux entame la crédibilité de toute la note auprès des services de la Commission.",
    },
    pieges: [
      { titre: "Renvoyer à la page imprimée plutôt qu'à la page du PDF", texte: "Anthropic recommande d'indiquer les numéros de page tels qu'ils apparaissent dans le lecteur PDF. Exigez ce format dans le prompt, puis retrouvez vous-même la page imprimée si la note doit la citer." },
      { titre: "Travailler sur une version périmée du règlement", texte: "Le règlement (UE) 2026/1744 a modifié le règlement sur l'IA, y compris la rédaction de son article 4. Un PDF téléchargé en 2025 donne des réponses exactes sur un texte dépassé. Chargez la version consolidée la plus récente, ou le texte initial accompagné du règlement modificatif, et datez le nom du fichier." },
      { titre: "Compter sur une recherche web que personne n'a activée", texte: "Sur Team et Enterprise, la recherche web reste inactive tant qu'un propriétaire ne l'a pas ouverte, et le mode Recherche en dépend. Faites vérifier ce réglage avant la formation : sans lui, les exercices de veille tombent à plat." },
      { titre: "Laisser le pouce de retour actif sur un dossier client", texte: "Un clic sur le pouce envoie l'échange complet chez Anthropic ; il y reste stocké jusqu'à cinq ans et peut alimenter l'entraînement des modèles. Retirez ce bouton au niveau de l'organisation avec le réglage « Rate chats »." },
      { titre: "S'en tenir à une seule version linguistique", texte: "Une nuance de traduction entre la version anglaise et la version française d'un texte de l'Union peut changer la lecture d'une obligation. Quand un point est disputé, chargez les deux versions et demandez à Claude de les citer côte à côte, avec leur page." },
    ],
  },
  faq: [
    { q: "Claude peut-il analyser un règlement européen complet comme le règlement sur l'IA ?", a: "Oui, dans les limites de fichiers fixées par Anthropic : jusqu'à 20 fichiers par conversation, 500 Mo par fichier et des PDF de 1 000 pages au plus. Les tableaux et les schémas ne sont lus comme des images que si le PDF compte 100 pages ou moins. Pour un règlement long avec annexes, découpez le document et demandez l'article et la page du PDF pour chaque information." },
    { q: "La recherche web de Claude cite-t-elle ses sources pour une veille sur les affaires européennes ?", a: "Chaque réponse fondée sur la recherche web comporte des citations et des liens vers les pages consultées. Sur Team et Enterprise, un propriétaire doit d'abord activer la recherche web pour l'organisation. Le mode Recherche, sur les offres payantes, enchaîne plusieurs recherches et livre en quelques minutes une réponse citée. Demandez dans le prompt de séparer les sources officielles de l'Union et la presse spécialisée." },
    { q: "Où sont traitées les données qu'un cabinet bruxellois confie à Claude ?", a: "En octobre 2026, Anthropic ne propose pas de traitement localisé en Europe : le calcul se fait dans la géographie disponible, ou aux États-Unis pour qui le demande. Sur Team et Enterprise, Anthropic n'emploie pas vos échanges pour l'entraînement, sauf évaluation envoyée par le bouton pouce, que le propriétaire peut retirer. Réservez l'outil aux textes publics et aux positions déjà validées ; les informations de négociation restent dehors." },
    { q: "Claude Pro ou Team : quelle offre pour un cabinet d'affaires publiques ou une fédération à Bruxelles ?", a: "Pro est un abonnement individuel régi par les conditions grand public d'Anthropic. Team, de deux à 150 sièges, place les échanges sous les conditions commerciales et ajoute l'authentification unique, des permissions par rôle et des connecteurs vers Google Drive, Microsoft 365 ou Slack. Anthropic affiche 20 dollars par membre et par mois pour un siège Standard payé à l'année, prix américain hors taxes qui varie selon la région." },
    { q: "Claude travaille-t-il en français et en anglais sur les textes de l'Union européenne ?", a: "Oui. Il lit un texte en anglais et rédige la note en français, ou l'inverse, dans la même conversation. Pour un texte juridique, faites-lui citer le passage original avec sa page plutôt qu'une paraphrase traduite, et chargez les deux versions linguistiques quand une nuance compte. Un juriste bilingue relit la note avant toute contribution officielle." },
    { q: "Comment se déroule une formation Claude pour une équipe bruxelloise ?", a: "Le formateur, Mathias Nizan ou un indépendant de son réseau, vient dans vos bureaux pour une douzaine de participants au maximum, ou anime une classe virtuelle, toujours en français. Les exercices portent sur un texte que votre équipe suit déjà. Une semaine avant, le propriétaire de l'espace Team vérifie trois réglages : recherche web active, bouton de retour retiré, projets créés. Le trajet du formateur est chiffré à part sur le devis." },
    { q: "Combien coûte une formation Claude à Bruxelles, et quels financements belges existent ?", a: "Masteria facture 1 980 € HT la journée, en intra pour une douzaine de personnes au plus comme en accompagnement individuel. Aucun OPCO n'existe côté belge, et le cabinet ou la fédération règle la formation sur son budget. Une entreprise relevant de la commission paritaire 200 peut ensuite réclamer à Cefora une prime partielle, et la journée compte parmi les cinq jours annuels dus à chaque salarié des entreprises de 20 travailleurs ou plus." },
  ],
  sources: [
    { name: "Registre de transparence de l'UE : statistiques (inscrits au 18 septembre 2026, répartition par pays)", url: "https://transparency-register.europa.eu/find-out-more/statistics_en" },
    { name: "Brussels Commissioner for Europe and International Organisations : Annual report 2024 (emplois de lobbyistes)", url: "https://admin.be.brussels/sites/default/files/2025-05/CEIO%20-%20Annual%20Report%202024%20-%20EN_0.pdf" },
    { name: "Claude Help Center : Upload files to Claude", url: "https://support.claude.com/en/articles/8241126-upload-files-to-claude" },
    { name: "Claude Help Center : Enabling and using web search", url: "https://support.claude.com/en/articles/10684626-enabling-and-using-web-search" },
    { name: "Claude Help Center : Using Research on Claude", url: "https://support.claude.com/en/articles/11088861-using-research-on-claude" },
    { name: "Claude Help Center : offre Team (sièges, prix, connecteurs)", url: "https://support.claude.com/en/articles/9266767-what-is-the-team-plan" },
    { name: "Anthropic Privacy Center : Is my data used for model training? (offres commerciales)", url: "https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training" },
    { name: "Claude Platform : Data residency", url: "https://platform.claude.com/docs/en/manage-claude/data-residency" },
    { name: "Commission européenne : implementing and delegated acts", url: "https://commission.europa.eu/law/law-making-process/adopting-eu-law/implementing-and-delegated-acts_en" },
    { name: "Commission européenne : lignes directrices sur les obligations de transparence (20 juillet 2026)", url: "https://digital-strategy.ec.europa.eu/en/library/guidelines-transparency-obligations-providers-and-deployers-ai-systems" },
  ],
}

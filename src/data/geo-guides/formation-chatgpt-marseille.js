// Contenu propre à /formation-chatgpt-marseille (guide terrain). Rendu par GeoPage.
// Fonctions ChatGPT vérifiées sur help.openai.com le 03/10/2026 (analyse de données, limites de fichiers, recherche approfondie, Business). Règles maritimes : Commission européenne et OMI. Chiffres : bilan 2025 du port de Marseille Fos.
export default {
  slug: 'formation-chatgpt-marseille',
  dateModified: '2026-10-03',
  metaDesc: "Formation ChatGPT Marseille : analyse de vos exports Excel et CSV de transport, graphiques, recherche approfondie sur ETS et FuelEU. Intra, Qualiopi, OPCO.",
  intro: "En 2025, le port de Marseille Fos a traité l'équivalent de 1,45 million de conteneurs de vingt pieds, et chaque conteneur laisse une ligne dans un fichier. ChatGPT sait lire ces exports Excel ou CSV, calculer des délais et tracer des graphiques, à condition de recevoir un fichier propre et de voir ses calculs contrôlés. Masteria, certifié Qualiopi, intervient dans vos bureaux marseillais ou en classe virtuelle et fait travailler vos équipes de logistique et de transport sur leurs propres exports.",
  guide: {
    kicker: "Guide terrain Marseille",
    h2: "ChatGPT pour la logistique marseillaise : calculer sur vos exports, sourcer votre veille maritime",
    lead: "Le bilan 2025 du port de Marseille Fos, publié le 20 janvier 2026, compte 1,45 million d'EVP (l'unité qui mesure les conteneurs en équivalent vingt pieds), 245 194 remorques et 225 548 véhicules neufs, soit environ 13 % des immatriculations françaises. Ces flux vivent dans des exports de logiciels de suivi, des fichiers de facturation et des tableaux de bord. Ils obéissent aussi à des règles européennes qui changent chaque année, du quota carbone des navires à la teneur en soufre de leur carburant. ChatGPT aide sur ces deux terrains avec deux fonctions distinctes : l'analyse de données et la recherche approfondie.",
    sections: [
      {
        h3: "L'analyse de données lit vos exports Excel et CSV et montre ses calculs",
        paras: [
          "ChatGPT accepte les fichiers .xls, .xlsx et .csv, ainsi que les PDF et les fichiers .json ou .xml que produisent certains logiciels de transport. Quand l'app correspondante est activée, il ouvre aussi un fichier depuis Google Drive, OneDrive ou SharePoint. Pour calculer, il écrit et exécute du code Python (un langage de programmation courant en analyse de données) dans un environnement isolé, et peut afficher le résultat sous forme de tableau interactif. Le code reste consultable : c'est lui que l'on relit quand un chiffre surprend.",
          "Les limites comptent pour un fichier logistique. Un tableur ou un CSV ne doit pas dépasser environ 50 Mo, selon la taille des lignes, et tout fichier plafonne à 512 Mo ; un utilisateur peut charger jusqu'à 80 fichiers toutes les 3 heures. L'environnement Python ne peut ni naviguer sur le web ni appeler une API : il ne récupère ni la position d'un navire ni l'état d'un terminal. Un PDF scanné ou un tableau enregistré comme image se lit mal ; demandez à votre logiciel un export CSV plutôt qu'un rapport mis en page.",
          "La qualité du résultat dépend d'abord du fichier. OpenAI recommande des en-têtes de colonnes en première ligne, un enregistrement par ligne, une seule table par feuille et aucune ligne vide qui coupe les données. Pour un transitaire, cela veut dire un conteneur par ligne, avec ses dates de déchargement, de sortie du terminal et de restitution du vide dans des colonnes séparées. Précisez aussi dans la demande les colonnes à utiliser, les regroupements voulus et le type de graphique : le premier essai ne correspond pas toujours à l'intention.",
        ],
      },
      {
        h3: "Les graphiques montrent les retards, les volumes et les parts modales",
        paras: [
          "ChatGPT produit des graphiques en image, et certains basculent en version interactive avec le bouton « Switch to interactive chart » (passer au graphique interactif) : barres, courbes, secteurs et nuages de points. Un exploitant compare ainsi en barres le temps moyen passé au terminal par ligne maritime, suit en courbe les volumes hebdomadaires, ou place en nuage de points la durée de séjour face au montant facturé. Les autres types de graphiques restent des images fixes.",
          "Les chiffres du port donnent un repère pour ces analyses. En 2025, le rail a représenté 16 % de la part modale des conteneurs et le fleuve 5 %, d'après le bilan du port : un peu moins d'un conteneur sur six a donc pris le train. Un commissionnaire qui calcule sa propre part modale à partir de ses dossiers peut se situer face à cette moyenne, ligne par ligne et mois par mois. ChatGPT fait le calcul et le graphique ; comprendre si l'écart vient d'un client, d'une destination ou d'une saison reste le travail de l'exploitant.",
        ],
      },
      {
        h3: "La recherche approfondie prépare une veille réglementaire dont chaque affirmation renvoie à sa source",
        paras: [
          "La recherche approfondie (deep research) se lance en tapant « /Deepresearch », depuis le menu + ou depuis la barre latérale. ChatGPT propose d'abord un plan de recherche que vous pouvez modifier avant le départ ; vous suivez ensuite l'avancement et pouvez l'interrompre pour recentrer. Le rapport final comporte des citations ou des liens vers les sources, une table des matières, une section des sources utilisées et l'historique de la recherche. Il se télécharge en Markdown, Word ou PDF. Les limites d'usage varient selon l'offre, et la disponibilité dépend du pays.",
          "Le réglage décisif se trouve dans « Sites », puis « Manage sites » : vous limitez la recherche aux domaines indiqués, ou vous les placez en priorité en gardant le reste du web. Pour une veille réglementaire maritime, restreignez-la aux sites officiels : eur-lex.europa.eu, climate.ec.europa.eu, transport.ec.europa.eu, emsa.europa.eu et imo.org. La recherche peut aussi lire vos fichiers et vos apps connectées, en lecture seule : elle n'utilise jamais les actions d'écriture des apps.",
        ],
      },
      {
        h3: "Les règles carbone et soufre des navires se répercutent dans les devis des transitaires",
        paras: [
          "Depuis janvier 2024, le système européen d'échange de quotas d'émission (ETS) couvre les navires de 5 000 tonneaux de jauge brute et plus. Les compagnies restituent en 2025 des quotas pour 40 % des émissions de 2024, en 2026 pour 70 % de celles de 2025, puis pour la totalité à partir de 2027. Le système couvre 50 % des émissions des voyages dont le départ ou l'arrivée se situe hors de l'Union, et la totalité des émissions entre deux ports européens. Le méthane et le protoxyde d'azote entrent dans le calcul en 2026.",
          "FuelEU Maritime s'applique depuis le 1er janvier 2025 aux navires de plus de 5 000 tonneaux en escale dans l'Union. L'intensité en gaz à effet de serre de l'énergie utilisée à bord doit baisser de 2 % en 2025, de 6 % en 2030 et de 80 % en 2050 par rapport à 2020. À partir de 2030, porte-conteneurs et navires à passagers devront se brancher à quai, ou utiliser une technologie zéro émission équivalente, dans les ports concernés. La Méditerranée est aussi une zone de contrôle des émissions de soufre depuis le 1er mai 2025 : 0,10 % de soufre dans le carburant, contre 0,50 % ailleurs.",
          "Ces règles arrivent dans les devis sous forme de surcharges que les clients demandent à comprendre. Le port de Marseille Fos s'y prépare : 86 % des escales connectables vers la Corse et le Maghreb ont été branchées à quai en 2025, selon son bilan. Une note de veille mensuelle, produite par la recherche approfondie sur les sites officiels puis relue par la personne qui la signe, permet au service commercial d'expliquer une surcharge carbone avec la référence du texte.",
        ],
      },
    ],
    table: {
      caption: "Exports logistiques et veille maritime à Marseille : ce que fait ChatGPT, sur quel fichier, avec quelle vérification",
      headers: ["Métier", "Fichier ou question", "Fonction ChatGPT", "Vérification"],
      rows: [
        ["Transitaire, commissionnaire de transport", "Export CSV des conteneurs du mois, avec dates de déchargement et de sortie", "Analyse de données, tableau des dépassements de franchise", "Trois conteneurs recalculés à la main"],
        ["Exploitant de plateforme logistique", "Export des entrées et sorties de camions par créneau", "Graphique en courbes par heure et par jour", "Lignes écartées par le calcul listées et justifiées"],
        ["Commercial d'un armement", "Fichier Excel des cotations et des réservations confirmées", "Tableau par destination, graphique en barres du taux de transformation", "Total comparé à celui du fichier source"],
        ["Responsable conformité environnementale", "« Que change FuelEU Maritime pour nos escales d'ici 2030 ? »", "Recherche approfondie limitée aux sites officiels", "Chaque citation ouverte dans le texte européen"],
        ["Transport de remorques vers le Maghreb et la Turquie", "Fichier des traversées et des remorques par ligne", "Analyse de saisonnalité, graphique en courbes", "Noms et plaques des chauffeurs retirés avant l'envoi"],
        ["Direction d'une PME logistique", "Note de veille mensuelle sur le carbone et le soufre", "Recherche approfondie, export Word", "Relecture par la personne qui signe la note"],
      ],
    },
    cas: {
      h3: "Cas pratique : mesurer les dépassements de franchise d'un mois de conteneurs",
      contexte: "Prenons un responsable d'exploitation d'un commissionnaire de transport installé à Arenc. Chaque mois, son logiciel de suivi exporte un fichier CSV d'environ 3 000 lignes, une par conteneur importé, avec la ligne maritime, le bassin (Fos ou Marseille) et les dates. Il veut savoir quels conteneurs ont dépassé la franchise, cette période gratuite accordée par l'armateur avant la facturation de frais de stationnement au terminal, et sur quelles lignes le problème se concentre.",
      etapes: [
        "Exporter le mois en CSV, une ligne par conteneur et les en-têtes en première ligne, puis remplacer les noms des clients par un code.",
        "Préparer à part un petit fichier Excel des franchises par ligne maritime, en nombre de jours, repris des contrats.",
        "Charger les deux fichiers dans une conversation, ou dans un projet si l'analyse revient chaque mois, puis lancer le prompt ci-dessous.",
        "Ouvrir le code produit et vérifier la règle de calcul des jours : jours calendaires, jour de déchargement compté ou non.",
        "Recalculer trois conteneurs à la main, puis passer le graphique en version interactive pour la réunion d'exploitation.",
      ],
      prompt: "Tu analyses deux fichiers joints. Le premier, conteneurs_septembre.csv, contient une ligne par conteneur importé en septembre 2026 : numéro de conteneur, code client, ligne maritime, bassin (Fos ou Marseille), date de déchargement, date de sortie du terminal. Le second, franchises.xlsx, donne pour chaque ligne maritime le nombre de jours de franchise.\n\nAvant tout calcul, décris le premier fichier : nombre de lignes lues, colonnes, dates manquantes ou incohérentes, comme une sortie antérieure au déchargement. Ne corrige rien sans me le signaler.\n\nCalcule ensuite pour chaque conteneur le nombre de jours passés au terminal, en jours calendaires, jour de déchargement compris, puis le dépassement par rapport à la franchise de sa ligne.\n\nPrésente trois résultats : un tableau des conteneurs en dépassement, trié du plus long au plus court ; un récapitulatif par ligne maritime et par bassin, avec le nombre de conteneurs, le dépassement moyen et le dépassement maximal ; un graphique en barres du dépassement moyen par ligne.\n\nAffiche le code utilisé et liste toutes tes hypothèses.",
      resultat: "Vous obtenez la liste des conteneurs hors franchise, un récapitulatif par ligne et par bassin, un graphique et le code du calcul. Le montant en euros n'est pas calculé : les barèmes de frais changent d'un contrat à l'autre, et un chiffre faux dans une réclamation à l'armateur coûte plus que le temps gagné. Le mois suivant, le même prompt dans le même projet refait l'analyse sur le nouvel export.",
    },
    pieges: [
      { titre: "Envoyer un rapport PDF au lieu de l'export", texte: "Un PDF mis en page ou scanné se lit mal, et les valeurs extraites d'un tableau enregistré comme image ne sont pas fiables. Demandez à votre logiciel de suivi un export CSV ou Excel, une ligne par conteneur." },
      { titre: "Laisser ChatGPT choisir la règle de calcul des jours", texte: "Jours calendaires ou ouvrés, jour d'arrivée compté ou non : chaque contrat a sa règle. Écrivez-la dans le prompt et vérifiez-la dans le code affiché, faute de quoi un écart d'un jour se répète sur trois mille lignes." },
      { titre: "Croire que l'analyse va chercher les données en ligne", texte: "L'environnement de calcul ne peut ni naviguer ni appeler une API. Pour croiser vos dossiers avec des horaires de navires ou des tarifs publiés, exportez ces données et joignez-les à la conversation." },
      { titre: "Reprendre un taux réglementaire avant d'avoir ouvert sa source", texte: "Les taux de l'ETS et de FuelEU évoluent par étapes. Ouvrez chaque citation dans le texte officiel, et limitez la recherche aux sites européens et à celui de l'OMI, l'Organisation maritime internationale." },
      { titre: "Dépasser la taille admise pour un tableur", texte: "Au-delà d'environ 50 Mo, un CSV risque de ne pas être analysé en entier. Découpez l'export par mois ou par bassin, et demandez à ChatGPT de confirmer le nombre de lignes lues avant tout calcul." },
    ],
  },
  faq: [
    { q: "Que peut faire ChatGPT pour un transitaire ou un commissionnaire de transport marseillais ?", a: "ChatGPT lit les exports de votre logiciel de suivi, calcule des délais, repère les conteneurs hors franchise et trace les graphiques d'une réunion d'exploitation, avec le code du calcul à l'appui. La recherche approfondie prépare en plus une veille sourcée sur les règles carbone et soufre qui pèsent sur vos devis. La formation travaille sur vos propres exports, nettoyés des noms de clients, et sur les questions réglementaires que reçoivent vos commerciaux." },
    { q: "Quelle taille de fichier Excel ou CSV ChatGPT peut-il analyser ?", a: "Un tableur ou un CSV ne doit pas dépasser environ 50 Mo, selon la taille de chaque ligne, et tout fichier chargé plafonne à 512 Mo. Un utilisateur peut charger jusqu'à 80 fichiers toutes les 3 heures, et un projet accepte jusqu'à 40 fichiers sur les offres Business et Enterprise. Pour un export annuel volumineux, découpez par mois ou par bassin, et demandez à ChatGPT de confirmer le nombre de lignes lues." },
    { q: "ChatGPT peut-il suivre la réglementation maritime européenne, comme l'ETS ou FuelEU Maritime ?", a: "Oui, avec la recherche approfondie. Vous limitez la recherche aux sites officiels, comme eur-lex.europa.eu, climate.ec.europa.eu et imo.org, vous validez le plan proposé, puis ChatGPT livre un rapport avec ses citations, téléchargeable en Word ou en PDF. La relecture reste indispensable : un taux de restitution ou une date d'application se vérifie dans le texte avant de figurer dans un devis ou une note client." },
    { q: "Quelles données logistiques ne faut-il pas mettre dans ChatGPT ?", a: "Retirez de vos exports les noms de clients, les valeurs déclarées en douane et les données personnelles des chauffeurs, comme les noms et les plaques, sauf règle interne écrite qui l'autorise. Sur Business et Enterprise, les données de l'espace de travail ne servent pas, par défaut, à entraîner les modèles d'OpenAI. Un fichier chargé suit la durée de conservation de la conversation ; après suppression de la conversation, OpenAI efface le fichier de ses systèmes sous 30 jours, sauf obligation de sécurité ou obligation légale." },
    { q: "ChatGPT Business ou Enterprise : quelle offre pour une entreprise de transport à Marseille ?", a: "Pour 2 à 200 utilisateurs qui achètent en ligne, Business inclut les projets, les apps et la recherche approfondie. Enterprise devient utile pour un groupe qui veut acheter sur bon de commande, attribuer des rôles par service, utiliser la plateforme de conformité ou, comme nouveau client, stocker ses données en Europe. Un commissionnaire de transport de quelques personnes peut démarrer sur Business et changer d'offre si ces besoins apparaissent." },
    { q: "Comment se passe une formation ChatGPT pour des équipes réparties entre Marseille et Fos ?", a: "Les équipes du siège marseillais se forment sur place, jusqu'à 12 personnes par groupe, chacune avec son ordinateur et son accès ChatGPT de l'entreprise. Les collègues de Fos rejoignent la session en classe virtuelle et travaillent sur les mêmes exports. Pour l'exploitation en horaires décalés, la date se cale sur le roulement de l'équipe ; un Sprint IA de 3 heures peut ouvrir le déploiement auprès d'un grand effectif." },
    { q: "Combien coûte une formation ChatGPT à Marseille et quel OPCO la finance ?", a: "Pour une équipe d'exploitation ou un service commercial marseillais, la journée intra coûte 1 980 € HT, que le groupe compte 4 ou 12 personnes. Un responsable qui veut travailler seul sur ses exports choisit l'accompagnement individuel, au même tarif journalier ; le Sprint IA de 3 heures et le déplacement du formateur se chiffrent au devis. Côté financement, l'OPCO Mobilités couvre la manutention portuaire, le transport maritime et le transport routier ; Masteria étant certifié Qualiopi, la session est finançable selon votre branche et vos fonds." },
  ],
  sources: [
    { name: "Port de Marseille Fos : dossier de presse, résultats 2025 (20 janvier 2026)", url: "https://www.marseille-port.fr/sites/default/files/2026-01/DP_RESULTATS_2025_200126_FR.pdf" },
    { name: "OpenAI Help Center : Data analysis with ChatGPT", url: "https://help.openai.com/en/articles/8437071-data-analysis-with-chatgpt" },
    { name: "OpenAI Help Center : File Uploads FAQ", url: "https://help.openai.com/en/articles/8555545-file-uploads-faq" },
    { name: "OpenAI Help Center : Deep research in ChatGPT", url: "https://help.openai.com/en/articles/10500283-deep-research-in-chatgpt" },
    { name: "OpenAI Help Center : ChatGPT Business, Overview", url: "https://help.openai.com/en/articles/8792828-chatgpt-business-overview" },
    { name: "OpenAI Help Center : Data residency and inference residency for ChatGPT", url: "https://help.openai.com/en/articles/9903489-data-residency-and-inference-residency-for-chatgpt" },
    { name: "Commission européenne : réduire les émissions du transport maritime (ETS maritime)", url: "https://climate.ec.europa.eu/eu-action/transport-decarbonisation/reducing-emissions-shipping-sector_en" },
    { name: "Commission européenne : FuelEU Maritime", url: "https://transport.ec.europa.eu/transport-modes/maritime/decarbonising-maritime-transport-fueleu-maritime_en" },
    { name: "Organisation maritime internationale : entrée en vigueur de la zone de contrôle des émissions de soufre en Méditerranée", url: "https://www.imo.org/en/mediacentre/pages/whatsnew-2254.aspx" },
    { name: "OPCO Mobilités : branches et secteurs professionnels", url: "https://www.opcomobilites.fr/branches-et-secteurs-professionnels/" },
  ],
}

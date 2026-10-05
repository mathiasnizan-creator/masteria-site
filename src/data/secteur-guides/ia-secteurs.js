// Contenu propre au hub /ia-secteurs. Lu par SecteursHubPage.jsx, qui masque ses blocs communs quand ce fichier existe.
// Vérifié le 03/10/2026 : Insee Première n° 2120 (21 juillet 2026), Banque de France (discours de Denis Beau du 9 septembre 2026), EUR-Lex (règlements (UE) 2024/1689, 2026/1744, 2022/2554, 2024/2847 et 1169/2011), Légifrance (code de la santé publique art. L. 1111-8), cnb.avocat.fr (guide IAG de septembre 2024), guides.ia.numerique.gouv.fr (guide d'usage de l'IA des agents de l'État) ; retour de mission : étude de cas « photovoltaique ».
export default {
  slug: 'ia-secteurs',
  dateModified: '2026-10-03',
  intro: "Le secteur d'activité décide de trois choses dans un projet d'IA : le texte qui encadre l'outil, les données qu'il a le droit de lire et le premier cas d'usage qui rapporte. Une banque commence par ses réclamations sous le regard de l'ACPR, un ministère par ses pièces de marché selon la doctrine de l'État, un cabinet d'avocats par des dossiers pseudonymisés. Masteria, cabinet IA lyonnais, applique cette lecture aux douze secteurs qu'il couvre et développe dans chacun l'outil que ces règles autorisent.",

  guide: {
    kicker: "Comparatif des secteurs",
    h2: "Le secteur fixe les règles du projet, le flux de travail en désigne le premier chantier",
    lead: "D'après l'enquête de l'Insee, 18 % des entreprises françaises de dix salariés ou plus se servaient d'au moins une technologie d'IA en 2025, trois fois plus qu'en 2023. L'écart entre secteurs est considérable : 59 % dans l'information et la communication, 33 % dans les activités spécialisées, scientifiques et techniques, 9 % dans les transports et l'entreposage. Parmi les entreprises qui utilisent déjà l'IA, 42 % se disent freinées par un manque de clarté juridique. Le frein tient moins à la sévérité des textes qu'à leur lecture : dans la finance, l'un des secteurs les plus encadrés, presque chaque banque et chaque assureur fait déjà tourner l'IA en production.",
    sections: [
      {
        h3: "La finance montre qu'un cadre strict n'empêche pas d'avancer",
        paras: [
          "Les banques et les assureurs travaillent sous le règlement DORA, sous la supervision de l'ACPR et, à partir du 2 décembre 2027, sous les obligations du règlement européen sur l'IA pour la notation de crédit des particuliers et la tarification en assurance vie et maladie. L'ACPR a pourtant relevé, dans son enquête de 2025, des cas d'usage en production chez la quasi-totalité d'entre eux. Le secteur ne figure pas dans l'enquête de l'Insee, qui exclut la finance et l'assurance de son champ.",
          "L'explication tient à la forme de leurs règles. Un registre des prestataires, un délai de réponse aux réclamations, une liste de systèmes à haut risque : chaque exigence se traduit en clause de contrat, en champ de base de données ou en contrôle. Un secteur dont les règles se lisent ainsi peut cadrer un projet texte par texte avec sa conformité. Notre travail de conseil consiste à faire cette traduction là où personne ne l'a encore faite.",
        ],
      },
      {
        h3: "Le secret professionnel et la donnée de santé décident de l'hébergement",
        paras: [
          "Dans le droit, le guide du Conseil national des barreaux de septembre 2024 exclut la transmission à une IA générative de toute donnée couverte par le secret professionnel, et recommande de pseudonymiser avant toute requête. En santé, l'article L. 1111-8 du code de la santé publique impose un hébergeur certifié à tout prestataire qui héberge, pour le compte d'un établissement ou d'un patient, des données de santé recueillies lors d'activités de prévention, de diagnostic, de soins ou de suivi médico-social. Dans ces deux secteurs, la question de l'hébergement précède celle du modèle.",
          "Le secteur public y ajoute la souveraineté. Le guide de la DINUM destiné aux agents de l'État n'admet un outil commercial que sur des informations publiables, et seulement si l'administration l'a explicitement permis. Un même assistant de recherche documentaire se construit donc sur trois architectures selon qu'il sert un cabinet d'avocats, un hôpital ou un ministère : des pièces pseudonymisées, un hébergeur certifié pour les données de santé, les outils fournis par l'administration.",
        ],
      },
      {
        h3: "Dans l'industrie, l'agroalimentaire et le commerce, le produit et le client fixent la contrainte",
        paras: [
          "Pour un industriel, l'actif à protéger est le savoir-faire : plans, gammes, formulations, historiques de maintenance. Les fabricants de produits comportant des éléments numériques doivent en plus signaler, depuis le 11 septembre 2026, les vulnérabilités activement exploitées de leurs produits, en vertu du règlement européen sur la cyberrésilience (règlement 2024/2847). L'agroalimentaire répond d'un étiquetage encadré par le règlement (UE) n° 1169/2011, dont l'annexe II liste les substances allergènes à déclarer : un outil qui prépare une étiquette prépare un document qui engage l'entreprise.",
          "Le commerce et le tourisme vivent de la relation client. Depuis le 2 août 2026, l'article 50 du règlement européen sur l'IA impose d'informer une personne qu'elle échange avec un système d'IA, sauf si c'est évident. Un assistant de service client ou de réservation se conçoit donc avec un message d'accueil explicite, une sortie vers un humain et des réponses tirées des conditions de vente et des disponibilités réelles, jamais de la mémoire générale du modèle.",
        ],
      },
      {
        h3: "Le premier projet rentable naît d'un document qui revient chaque jour",
        paras: [
          "D'un secteur à l'autre, les premiers projets qui rapportent se ressemblent par leur forme. Ils traitent un document qui revient chaque jour : la réclamation en banque, le dossier de consultation dans une administration, le contrat fournisseur en direction juridique, la facture du transporteur en logistique, la fiche technique dans l'agroalimentaire. Ce document a déjà un circuit, un responsable et un délai, ce qui rend le gain mesurable avant le lancement puis après.",
          "Mesurer suppose un point de départ. Avant la mise en service, on relève le délai, le volume et les erreurs du flux choisi ; après, on relève les mêmes chiffres sur une période comparable. Un gain sans point de départ ne se prouve pas, et une cible reste une cible tant que la mesure n'est pas faite. Les indicateurs les plus solides sont ceux que l'entreprise suit déjà : délai de réponse, taux d'erreur, heures de saisie.",
        ],
      },
    ],
    table: {
      caption: "Douze secteurs comparés deux à deux : le texte, les données, le premier projet, le piège",
      headers: ["Secteurs", "Texte qui encadre l'outil", "Données lues", "Premier projet rentable", "Piège typique"],
      rows: [
        ["Banque et assurance · Tech et éditeurs SaaS", "DORA (règlement 2022/2554) et annexe III du règlement sur l'IA ; l'éditeur qui vend aux banques accepte les exigences contractuelles de DORA", "Contrats et courriers clients ; tickets de support et code pour l'éditeur", "Réponse aux réclamations ; support technique sur l'historique des tickets", "Un contrat de modèle signé sans les mentions exigées par DORA"],
        ["Juridique · Services et conseil", "Secret professionnel de l'avocat, guide du CNB de septembre 2024 ; RGPD pour les données traitées pour un client", "Pièces de dossier et contrats ; livrables de mission et mémoires techniques", "Revue de contrats contre une grille ; réponse aux appels d'offres", "Une base unique qui mélange les clients"],
        ["Santé et pharma · Agroalimentaire", "Hébergeur certifié pour les données de santé confiées à un tiers (code de la santé publique, art. L. 1111-8) ; étiquetage selon le règlement (UE) n° 1169/2011", "Données de santé et protocoles ; recettes, spécifications, étiquettes", "Recherche dans les protocoles et procédures qualité ; contrôle de cohérence entre recette et étiquette", "Laisser l'outil valider seul une mention réglementaire"],
        ["Secteur public · Immobilier et BTP", "Doctrine d'usage de l'IA de l'État (guide de la DINUM) ; code de la commande publique, côté acheteur comme côté entreprise de travaux", "Dossiers de consultation et courriers d'usagers ; annonces, baux, DCE (dossiers de consultation des entreprises)", "Contrôle de cohérence d'un dossier de consultation avant sa mise en ligne ; dépouillement d'un DCE côté entreprise", "Un courrier préparé par l'IA envoyé sans relecture ni mention"],
        ["Industrie · Logistique et transport", "Protection du savoir-faire ; règlement 2024/2847 pour les produits comportant des éléments numériques", "Plans, gammes, historiques de maintenance ; factures de transporteurs, lettres de voiture", "Recherche dans la documentation technique ; rapprochement des factures de transporteurs", "Une saisie automatisée sans contrôle des totaux"],
        ["Commerce et e-commerce · Tourisme et hôtellerie", "Règlement sur l'IA, article 50, depuis le 2 août 2026 ; RGPD pour les données clients", "Catalogue et attributs produits, avis clients, réservations", "Fiches produits à partir des attributs ; réponses multilingues avant le séjour", "Un assistant client qui ne dit pas qu'il est une IA"],
      ],
    },
    cas: {
      h3: "Retour de mission : un diagnostic par flux chez un distributeur photovoltaïque",
      contexte: "Un distributeur de solutions photovoltaïques emploie trois personnes, exploite trois entrepôts en France et vend à l'export. Tout passe par Odoo, son ERP (progiciel de gestion intégré), et par deux dirigeants qui se remplacent l'un l'autre. La direction voulait vendre plus sans recruter, à une condition : l'IA n'étant pas une vérité absolue, chaque assistant devait comporter des contrôles. Son quotidien relève de deux de nos pages sectorielles, le commerce et la logistique.",
      etapes: [
        "Mener trois entretiens en visioconférence, avec la direction, le commercial et les opérations, sur une grille qui suit le travail : qui fait quoi, avec quel outil, à quel rythme.",
        "Décrire quatre flux étape par étape (vendre, livrer et encaisser, développer, piloter) et relever douze gisements de temps avec leur volume déclaré.",
        "Positionner chaque gisement selon son impact et sa faisabilité à trois mois, puis retenir trois chantiers, chacun avec un porteur.",
        "Définir trois assistants, à construire en une journée avant la formation : consultation des transporteurs avant livraison, conversion des fichiers d'entrepôt en import Odoo avec contrôle des totaux, transformation des demandes entrantes en lignes de devis.",
        "Poser une charte d'usage, désigner un référent et fixer quelques indicateurs à revoir un mois après la formation.",
      ],
      resultat: "Le diagnostic a été présenté en septembre 2026, et la direction dispose de trois décisions : le socle, les chantiers, la charte. Les objectifs, dont des devis plus rapides et la fin des ressaisies, sont fixés avant la formation d'octobre 2026 ; ce sont des cibles, que le bilan d'un mois confrontera aux mesures. Le flux a désigné les chantiers, et le cadre (charte, référent, ligne au registre RGPD) en a fixé les garde-fous.",
      lien: { href: "/etudes-de-cas-ia#photovoltaique", label: "Lire l'étude de cas complète" },
    },
    pieges: [
      { titre: "Choisir le modèle avant de connaître le régime des données", texte: "Dans la santé, le droit ou le secteur public, le régime des données fixe l'hébergement, et l'hébergement réduit la liste des modèles possibles. Commencer par le modèle oblige à refaire le choix au premier contrôle." },
      { titre: "Copier le projet d'un autre secteur", texte: "Un assistant de réponse client qui convient à un site marchand devient fragile dans une banque, où chaque réponse doit citer le contrat et mentionner le médiateur. Le même outil change de cahier des charges en changeant de secteur." },
      { titre: "Lancer un agent sur un flux mal connu", texte: "Un agent qui agit dans la messagerie ou dans l'ERP reproduit les défauts du processus qu'il automatise. Le flux se cartographie d'abord ; l'agent vient ensuite, avec des droits limités à sa tâche et une trace de chaque action." },
      { titre: "Attendre que tous les textes soient limpides", texte: "Selon l'Insee, 42 % des entreprises qui utilisent l'IA se disent freinées par un manque de clarté juridique. La plupart des textes sectoriels sont pourtant écrits et datés, et le cadrage les traduit en exigences de projet." },
    ],
  },

  faq: [
    {
      q: "Quel secteur est le plus encadré pour l'IA ?",
      a: "Tous les secteurs relèvent du RGPD et du règlement européen sur l'IA. Trois ajoutent des textes propres : la finance (DORA, supervision de l'ACPR, score de crédit à haut risque), la santé (hébergement certifié des données de santé) et le droit (secret professionnel). Le secteur public y ajoute la commande publique et la doctrine d'usage de l'État. Chaque page sectorielle détaille ces textes et leurs conséquences sur l'outil.",
    },
    {
      q: "Mon secteur n'a pas de page dédiée : pouvez-vous intervenir ?",
      a: "Oui. La méthode reste la même : identifier le texte qui encadre l'outil, les données qu'il peut lire et le document répété qui offre le premier gain mesurable. Nous posons ces points pour votre activité au cours des 30 minutes de cadrage offertes, avec le responsable du besoin. Un Diagnostic IA payant les approfondit ensuite si le périmètre le demande.",
    },
    {
      q: "Le règlement européen sur l'IA classe-t-il des secteurs entiers à haut risque ?",
      a: "Il classe des usages. Dans la finance, le score de crédit d'un particulier et la tarification en assurance vie ou maladie ; dans le public, l'accès aux prestations sociales essentielles ; dans la justice, l'aide au juge ou à l'arbitre ; dans tous les secteurs, le tri des candidatures. Ces obligations prennent effet le 2 décembre 2027. Un assistant de rédaction ou de recherche documentaire n'entre dans aucune de ces catégories.",
    },
    {
      q: "Par quel projet commencer dans mon secteur ?",
      a: "Par un document répété qui a déjà un circuit et un délai dans votre métier. Le premier projet se choisit sur sa fréquence et sur la facilité à mesurer son gain, avant l'ambition technique. Chaque page sectorielle propose l'exemple propre au secteur, et le cadrage le confirme ou le remplace à partir de vos chiffres.",
    },
    {
      q: "Avez-vous des références dans mon secteur ?",
      a: "Nos études de cas publiées couvrent un distributeur informatique B2B, un groupe industriel du packaging, un cabinet de conseil financier qui répond aux marchés publics et un distributeur photovoltaïque. Elles sont anonymisées à la demande des clients. Pour les autres secteurs, nos pages présentent des mises en situation construites et signalées comme telles ; le cadrage permet ensuite d'en discuter sur vos propres flux.",
    },
    {
      q: "Intervenez-vous en Suisse et en Belgique ?",
      a: "Oui. Nous intervenons depuis Lyon, sur site pour le cadrage, l'observation des processus et la passation, à distance pour le développement et le suivi. Hors de France, la formation ne relève pas des OPCO, et le traitement de la TVA est précisé dans le devis.",
    },
    {
      q: "Combien coûte un projet IA sectoriel ?",
      a: "Le prix dépend moins du secteur que du périmètre : nombre de flux, systèmes à connecter, régime des données, hébergement. Un premier outil limité à un flux pèse peu dans un budget informatique, alors qu'un déploiement sur plusieurs systèmes passe la barre des 100 000 € et se chiffre parfois en centaines de milliers d'euros. Chaque proposition est forfaitaire, écrite avant signature, et le code vous est livré.",
    },
    {
      q: "Peut-on financer le conseil et le développement ?",
      a: "Par un OPCO, non : seule la formation l'est, grâce à la certification Qualiopi que Masteria détient pour ses formations, avec une journée intra à 1 980 € HT. Selon votre taille, votre secteur et votre région, des dispositifs publics de soutien au conseil peuvent s'appliquer ; nous en faisons le tour pendant le cadrage.",
    },
  ],

  cartes: {
    'ia-banque-assurance': "Le premier projet passe par les réclamations, dont l'ACPR fixe déjà les délais ; le contrat du fournisseur de modèle, lui, entre dans le registre DORA de la banque ou de l'assureur.",
    'ia-industrie': "Les bureaux qui entourent la ligne gagnent les premiers : achats, qualité, méthodes, maintenance. Plans, gammes et historiques d'intervention restent sous votre contrôle, sur site ou en hébergement maîtrisé.",
    'ia-sante-pharma': "Une donnée de santé confiée à un prestataire exige un hébergeur certifié ; la documentation qualité et la pharmacovigilance passent avant toute aide à la décision, avec une validation humaine à chaque sortie.",
    'ia-juridique': "Avocat, notaire, juriste d'entreprise : chacun relève d'un régime de secret distinct, et l'outil de revue ou de rédaction se construit d'abord autour de ce régime.",
    'ia-retail-ecommerce': "Les attributs du catalogue nourrissent les fiches produits à l'échelle, et l'assistant client annonce qu'il est une IA, comme l'exige le règlement européen depuis le 2 août 2026.",
    'ia-logistique-transport': "Avant paiement, chaque facture de transporteur est confrontée à la commande et à la preuve de livraison : l'IA signale les écarts, l'exploitant tranche les réserves et les litiges.",
    'ia-immobilier-btp': "L'annonce, le dossier du candidat locataire et la consultation d'un marché de travaux se vérifient d'abord contre les obligations légales, avant que l'IA ne rédige quoi que ce soit.",
    'ia-secteur-public': "Un projet public s'achète selon le code de la commande publique et se déploie selon le guide d'usage de l'État ; une décision individuelle appuyée sur un algorithme porte une mention explicite.",
    'ia-services-conseil': "Les mémoires gagnants et les livrables passés forment la matière première du cabinet : capitalisés par famille de besoin et cloisonnés par client, ils nourrissent les réponses aux appels d'offres.",
    'ia-tourisme-hotellerie': "Les demandes avant séjour arrivent dans toutes les langues et à toute heure ; l'assistant répond sur les disponibilités réelles du logiciel de réservation et passe la main à la réception.",
    'ia-agroalimentaire': "Spécification fournisseur, recette et épreuve d'étiquette se comparent entre elles pour qu'un allergène oublié ne parte pas en rayon ; le responsable qualité signe chaque mention réglementaire.",
    'ia-tech-saas': "Embarquer l'IA dans un produit pose des questions de coût par requête, d'évaluation et de contrats clients ; l'éditeur qui vend aux banques accepte en plus les clauses imposées par DORA.",
  },

  sources: [
    { name: "Insee Première n° 2120 : les technologies de l'information et de la communication dans les entreprises en 2025 (21 juillet 2026)", url: "https://www.insee.fr/fr/statistiques/9025878" },
    { name: "Banque de France : discours de Denis Beau, « Intelligence artificielle : les nouvelles frontières du risque » (9 septembre 2026)", url: "https://www.banque-france.fr/system/files/2026-09/Discours-D-Beau_2026-09-09_ADB-Conference-IA.pdf" },
    { name: "EUR-Lex : règlement (UE) 2024/1689 sur l'intelligence artificielle (article 50, annexe III)", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32024R1689" },
    { name: "EUR-Lex : règlement (UE) 2026/1744, train de mesures omnibus numérique sur l'IA", url: "https://eur-lex.europa.eu/eli/reg/2026/1744/oj/fra" },
    { name: "EUR-Lex : règlement (UE) 2022/2554 sur la résilience opérationnelle numérique du secteur financier (DORA)", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32022R2554" },
    { name: "EUR-Lex : règlement (UE) 2024/2847 sur la cyberrésilience (article 71, dates d'application)", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32024R2847" },
    { name: "EUR-Lex : règlement (UE) n° 1169/2011 concernant l'information des consommateurs sur les denrées alimentaires (annexe II)", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32011R1169" },
    { name: "Légifrance : code de la santé publique, article L. 1111-8 (hébergement des données de santé)", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049577902" },
    { name: "Conseil national des barreaux : guide pratique, utilisation des systèmes d'intelligence artificielle générative (septembre 2024)", url: "https://cnb.avocat.fr/medias/cnb-guidepratique-utilisation-systemes-iag-2024-68f7b1d86e4570.98487114.pdf" },
    { name: "DINUM : guide d'usage de l'IA pour les agents publics de l'État, partie 3 « les 5 principes fondamentaux »", url: "https://guides.ia.numerique.gouv.fr/guides/guide-dusage-de-lia-pour-les-agents-publics-de-letat/partie-3-les-5-principes-fondamentaux" },
  ],
}

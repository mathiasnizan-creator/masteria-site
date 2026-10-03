// Contenu propre à /formation-claude-ia-lyon (guide terrain). Rendu par GeoPage.
// Compétences (Agent Skills), provisionnement, fenêtre de contexte, création de fichiers et entraînement vérifiés sur support.claude.com et privacy.claude.com le 03/10/2026 ; IVDR et règlement 2024/1860 sur EUR-Lex ; bioMérieux, Lyonbiopôle et Insee n° 188 consultés le même jour.
export default {
  slug: 'formation-claude-ia-lyon',
  dateModified: '2026-10-03',
  metaDesc: "Formation Claude IA Lyon : compétences et projets pour standardiser les dossiers réglementaires du diagnostic, de la biotech et de la pharma. Qualiopi, OPCO.",
  intro: "Le diagnostic in vitro lyonnais avance vers une échéance : les dispositifs de classe B déclarés conformes sous l'ancienne directive, qui passent sous le contrôle d'un organisme notifié (organisme habilité à certifier les dispositifs), doivent avoir déposé leur demande avant le 26 mai 2027. Derrière cette date, des dossiers techniques entiers à reprendre, comparer, réécrire. Claude lit ces dossiers longs d'une traite, et ses compétences fixent la méthode de rédaction de toute une équipe. Masteria, organisme de formation lyonnais, entraîne vos équipes réglementaires et qualité à ces usages, sur vos propres dossiers.",
  guide: {
    kicker: "Guide terrain Lyon",
    h2: "Claude pour le diagnostic et la biotech lyonnais : des dossiers longs, une méthode écrite une fois pour toute l'équipe",
    lead: "Le diagnostic a une histoire lyonnaise. Selon l'Insee, Marcel Mérieux, élève de Louis Pasteur, ouvre à Lyon en 1897 un laboratoire d'analyses médicales ; bioMérieux explore le diagnostic in vitro depuis 1963 et compte des équipes dans 45 pays. Le pôle Lyonbiopôle Auvergne-Rhône-Alpes accompagne aujourd'hui plus de 235 membres, entreprises, acteurs académiques et hôpitaux. Leurs équipes réglementaires rédigent des documents longs et normés, sous le calendrier du règlement européen sur le diagnostic in vitro (IVDR) jusqu'en 2029. Claude leur apporte une lecture qui embrasse un dossier entier et des compétences qui écrivent une méthode de rédaction partagée.",
    sections: [
      {
        h3: "Une compétence Claude écrit la méthode de rédaction réglementaire",
        paras: [
          "Une compétence (Agent Skill, format ouvert créé par Anthropic) est un dossier qui contient un fichier SKILL.md, avec un nom de 64 caractères au plus et une description de 200 caractères au plus. Claude parcourt les descriptions des compétences disponibles et charge celle qui correspond à la tâche. La description décide donc du déclenchement : « Relit une partie de documentation technique IVDR selon le plan de l'annexe II » guidera Claude bien mieux qu'« aide réglementaire ».",
          "Le corps de la compétence porte la méthode : plan imposé, formulations proscrites, façon de citer une norme, niveau de preuve attendu. Des fichiers annexes s'ajoutent quand le sujet déborde, par exemple un fichier de référence sur les règles de classification ou un gabarit de tableau de traçabilité, et Claude ne les ouvre que si la tâche l'exige. Les compétences reposent sur l'exécution de code, que le propriétaire d'une organisation Team ou Enterprise active ou coupe pour tous.",
          "Anthropic distingue les deux briques. Un projet fournit un savoir de fond, chargé dans chaque conversation du projet : le dossier du produit, ses rapports, ses versions successives. Une compétence fournit une procédure qui s'active à la demande, dans n'importe quelle conversation. Pour une équipe réglementaire lyonnaise, le projet contient le dossier du réactif ; la compétence contient la façon de l'écrire et de le relire.",
        ],
      },
      {
        h3: "Le circuit de publication d'une compétence ressemble à celui d'une procédure qualité",
        paras: [
          "Sur Team et Enterprise, un propriétaire d'organisation installe une compétence pour tous les membres depuis les paramètres de l'organisation, rubrique Plugins & skills. Elle apparaît activée chez chacun, qui peut la désactiver pour lui-même sans la supprimer. Sur Enterprise, une compétence peut viser un seul groupe, par exemple l'équipe des affaires réglementaires : on la range dans un plugin (un ensemble de compétences distribué d'un bloc) attribué à ce groupe, et les autres salariés ne la voient pas.",
          "Les membres peuvent aussi soumettre leurs propres compétences à la bibliothèque de l'organisation. Avec le réglage « Requires review », un propriétaire approuve chaque soumission ; il examine la version figée, chacun de ses fichiers et, pour une mise à jour, ce qui a changé. Une version approuvée remplace la précédente chez tous les utilisateurs, et l'inventaire conserve l'historique des versions. Depuis le 2 octobre 2026, les organisations qui n'avaient choisi aucun réglage de publication sont passées en « Requires review ».",
          "Un responsable assurance qualité reconnaît ce circuit : rédaction, revue, approbation, diffusion de la version en vigueur. La compétence reste pour autant un outil d'aide à la rédaction, extérieur au système qualité validé de l'entreprise. Présentez-la comme telle en audit, et gardez la procédure de référence dans votre gestion documentaire. Le jour où la procédure change, la compétence est mise à jour à son tour et repasse par la même revue avant d'atteindre les utilisateurs.",
        ],
      },
      {
        h3: "Un dossier entier tient dans la conversation, à condition de le découper",
        paras: [
          "Sur les offres payantes, les modèles récents de Claude, dont Claude Opus 5.5 et Claude Sonnet 5.5, disposent d'une fenêtre de contexte, la quantité de texte que le modèle garde en tête, d'un million de tokens (fragments de mots) en conversation. Anthropic estime qu'une fenêtre de 200 000 tokens correspond à environ 500 pages de texte : un million représente de l'ordre de 2 500 pages, de quoi lire deux versions d'une documentation technique et le texte de l'annexe II côte à côte.",
          "Deux réserves s'imposent. Quand une conversation approche la limite, Claude résume les échanges anciens pour faire de la place, et une citation exacte du début peut s'y perdre. Quand la base d'un projet devient volumineuse, Claude n'en charge que les passages qu'il juge pertinents. Pour une comparaison de versions, la méthode la plus sûre reste une conversation neuve par partie du dossier, avec les deux versions jointes.",
          "Claude livre le résultat dans un fichier Word, Excel, PowerPoint ou PDF téléchargeable, jusqu'à 30 Mo par fichier. Un tableau des écarts entre deux versions d'une procédure arrive dans le format de l'équipe, prêt à être annoté par le responsable du dossier puis archivé avec la version qu'il décrit. Un PDF plus lourd est traité dans l'environnement de calcul de Claude, sans passer par sa fenêtre de contexte.",
        ],
      },
      {
        h3: "L'IVDR fixe le calendrier des dossiers lyonnais jusqu'en 2029",
        paras: [
          "Le règlement (UE) 2024/1860 a prolongé la transition des dispositifs de diagnostic in vitro qui passent sous le contrôle d'un organisme notifié. Ceux de classe D peuvent rester sur le marché jusqu'au 31 décembre 2027, ceux de classe C jusqu'au 31 décembre 2028, ceux de classe B et les dispositifs stériles de classe A jusqu'au 31 décembre 2029. Chaque délai suppose une demande déposée à temps : le 26 mai 2026 pour la classe C, le 26 mai 2027 pour la classe B. Une proposition de révision de la Commission, publiée en 2025, reste en discussion.",
          "La documentation technique exigée par l'annexe II du règlement (UE) 2017/746 se découpe en six parties, de la description du dispositif à la vérification et à la validation du produit. Le terrain convient à une compétence : le plan ne change pas, les exigences de chaque partie sont écrites, et le travail consiste souvent à vérifier qu'une version couvre ce que l'annexe demande. Les données de performance, les résultats d'essais et la classification restent l'affaire de l'équipe ; Claude signale les manques et les incohérences, l'équipe les comble avec ses propres données.",
        ],
      },
    ],
    table: {
      caption: "Santé lyonnaise : le dossier va dans le projet, la méthode dans la compétence",
      headers: ["Document", "Contenu du projet", "Méthode portée par la compétence", "Vigilance"],
      rows: [
        ["Documentation technique IVDR (annexe II)", "Les deux versions du dossier, le texte de l'annexe II", "Plan en six parties, grille de couverture des exigences", "Classification et données de performance validées par l'équipe"],
        ["Rapport d'évaluation des performances", "Protocoles, résultats d'études, littérature", "Structure du rapport, règles de citation des sources", "Chaque chiffre renvoie à un résultat d'essai identifié"],
        ["Procédure opératoire révisée", "Version en vigueur et projet de révision", "Tableau des changements avec motif et impact", "La version approuvée vit dans le système qualité"],
        ["Synthèse de littérature scientifique", "Articles en PDF, question de recherche", "Grille de lecture, niveau de preuve, format de citation", "Chaque référence se vérifie dans la source"],
        ["Réponse à une question d'organisme notifié", "Question reçue, parties citées du dossier", "Structure question-réponse, renvois aux pages", "Aucun engagement nouveau sans accord de la direction réglementaire"],
        ["Dossier de financement d'une biotech", "Appel à projets, données du projet", "Plan imposé par le financeur, longueur par partie", "Résultats non publiés traités sur le compte Team ou Enterprise de l'entreprise"],
      ],
    },
    cas: {
      h3: "Cas pratique : comparer deux versions de la documentation technique d'un réactif avant le dépôt",
      contexte: "Prenons la directrice réglementaire d'une PME lyonnaise du diagnostic. Un réactif de classe B, déclaré conforme sous l'ancienne directive, doit passer devant un organisme notifié, et la demande doit partir avant le 26 mai 2027. L'équipe a repris la documentation technique en deux ans, à plusieurs mains. La directrice veut savoir ce qui a changé, et ce qui manque encore.",
      etapes: [
        "Créer un projet privé « Réactif B, dossier IVDR » et y joindre la version de 2025, la version de travail et le texte de l'annexe II du règlement (UE) 2017/746.",
        "Activer la compétence « revue-annexe-ii » mise à disposition par l'organisation, qui porte le plan en six parties et la grille de couverture.",
        "Ouvrir une conversation neuve par partie du dossier et lancer le prompt ci-dessous, partie après partie.",
        "Demander le tableau des écarts au format Excel, puis le relire avec le responsable des études de performance.",
        "Reporter les corrections dans le dossier officiel, hors de Claude, et archiver chaque tableau avec la version qu'il décrit.",
      ],
      prompt: "Tu relis la partie 3 de la documentation technique d'un dispositif de diagnostic in vitro de classe B, « Informations sur la conception et la fabrication ». Le projet contient la version de 2025, la version de travail actuelle et le texte de l'annexe II du règlement (UE) 2017/746.\n\nPremière tâche : compare les deux versions de cette partie. Pour chaque modification, indique la section, le texte avant, le texte après, la nature du changement (ajout, suppression, reformulation, donnée modifiée) et la page dans chaque version.\n\nDeuxième tâche : confronte la version de travail aux exigences de l'annexe II pour cette partie. Pour chaque exigence, indique si elle est couverte, couverte en partie ou absente, avec la page où se trouve la preuve.\n\nTroisième tâche : liste les incohérences entre cette partie et les autres parties du dossier présentes dans le projet, par exemple une référence de composant ou un site de fabrication qui ne concorde pas.\n\nCite toujours la page. Ne complète aucune donnée manquante et ne propose aucune valeur de performance. Si un passage est ambigu, écris la question que l'équipe devra trancher.",
      resultat: "Vous obtenez, partie par partie, un tableau des changements entre versions, une grille de couverture des exigences de l'annexe II et une liste d'incohérences à trancher. Le dossier officiel reste la seule référence, et l'équipe y fait chaque correction. Vérifiez trois renvois de page au hasard dans chaque partie : une page erronée dans un dossier déposé se paie en questions de l'organisme notifié.",
    },
    pieges: [
      { titre: "Écrire une description de compétence trop vague", texte: "Claude choisit une compétence d'après sa description, limitée à 200 caractères. Une description comme « aide réglementaire » risque de ne pas se déclencher au bon moment ; nommez la tâche, le document et le texte de référence." },
      { titre: "Laisser le bouton de retour d'avis actif", texte: "Un pouce levé ou baissé transmet toute la conversation à Anthropic, qui la conserve jusqu'à cinq ans et peut s'en servir pour entraîner ses modèles. Sur Team et Enterprise, le propriétaire désactive cette option dans Organization settings, rubrique Data and Privacy." },
      { titre: "Ouvrir l'accès réseau dans un environnement sensible", texte: "Les compétences exécutent du code dans un environnement isolé. Anthropic conseille de démarrer sans accès réseau et de l'ouvrir pas à pas. Les connecteurs MCP (Model Context Protocol, qui relient Claude à d'autres logiciels) restent une voie de sortie à évaluer à part." },
      { titre: "Filmer une compétence avec des données confidentielles à l'écran", texte: "Sur Pro, Max et Team, Claude pour Mac peut construire une compétence à partir d'un enregistrement d'écran dans Cowork, l'espace de tâches de l'application. Tout ce qui s'affiche est capté : fermez les dossiers de patients et les résultats non publiés avant de lancer l'enregistrement." },
      { titre: "Compter sur la mémoire d'une conversation interminable", texte: "Près de la limite de contexte, Claude résume les échanges anciens. Pour comparer deux versions d'un dossier, repartez d'une conversation neuve à chaque partie et joignez de nouveau les deux fichiers." },
    ],
  },
  faq: [
    { q: "Claude peut-il rédiger la documentation technique IVDR d'un fabricant de diagnostic lyonnais ?", a: "Claude peut la structurer, la relire et comparer ses versions selon le plan en six parties de l'annexe II du règlement (UE) 2017/746. Les données de performance, la classification et les résultats d'essais restent produits et validés par votre équipe. Une compétence d'organisation fixe la même méthode de relecture pour tous les rédacteurs du dossier, du chef de projet au stagiaire." },
    { q: "Quelles données d'une biotech ou d'un fabricant de diagnostic lyonnais peut-on confier à Claude ?", a: "Sur Team ou Enterprise, Anthropic n'utilise pas vos conversations pour entraîner ses modèles par défaut, sauf retour d'avis volontaire par le pouce, conservé jusqu'à cinq ans et désactivable par le propriétaire. Les dossiers techniques et les procédures peuvent y entrer selon la politique de votre entreprise. Les données de patients identifiantes et les résultats non publiés sensibles relèvent d'une décision de la direction, prise avant la formation." },
    { q: "Claude Team ou Claude Enterprise pour une entreprise de santé à Lyon ?", a: "Team permet déjà à un propriétaire de diffuser une compétence à toute l'organisation et de faire valider les compétences proposées par les membres. Enterprise ajoute le ciblage par groupe, utile pour réserver une compétence à l'équipe réglementaire, les rôles personnalisés et l'analyse automatique des compétences téléversées pour détecter un contenu malveillant. Une PME du diagnostic peut démarrer sur Team ; un groupe pharmaceutique regarde Enterprise." },
    { q: "Comment Claude compare-t-il deux versions d'une procédure ou d'un dossier réglementaire ?", a: "Joignez les deux versions dans une conversation neuve et demandez un tableau des écarts : section, texte avant, texte après, nature du changement, page. Claude peut livrer ce tableau en fichier Excel ou Word. Sur un gros dossier, travaillez partie par partie, car près de la limite de contexte Claude résume les échanges anciens et une citation exacte peut se perdre." },
    { q: "Qui valide une compétence Claude dans une entreprise de santé lyonnaise ?", a: "Quand la publication est réglée sur « Requires review », un propriétaire de l'organisation, ou une personne dont le rôle gère les bibliothèques, examine chaque compétence soumise. Il voit la version figée, ses fichiers et les changements depuis la version publiée, et personne ne peut approuver sa propre soumission. Une fois approuvée, la nouvelle version s'applique chez tous les utilisateurs." },
    { q: "Où se déroule une formation Claude à Lyon, et pour combien de personnes ?", a: "Sur votre site, de Gerland à Marcy-l'Étoile, ou en classe virtuelle ; un groupe réunit jusqu'à douze participants. Pour une équipe réglementaire, nous construisons les exercices sur un dossier choisi avec vous, anonymisé si besoin. Les dirigeants et les experts peuvent suivre un accompagnement individuel dans nos bureaux des Terreaux, rue d'Algérie." },
    { q: "Quel budget prévoir pour une formation Claude à Lyon, et qui peut la financer ?", a: "Le prix est de 1 980 € HT par jour, pour un groupe intra comme pour un accompagnement individuel. Masteria est certifié Qualiopi : la prise en charge se demande à l'OPCO de votre branche, OPCO 2i pour l'industrie pharmaceutique par exemple, selon vos fonds. Le devis vous parvient sous 24 h ouvrées avec le programme ; prévoyez trois à quatre semaines si un financement est sollicité." },
  ],
  sources: [
    { name: "Claude Help Center : What are skills?", url: "https://support.claude.com/en/articles/12512176-what-are-skills" },
    { name: "Claude Help Center : How to create custom skills", url: "https://support.claude.com/en/articles/12512198-how-to-create-custom-skills" },
    { name: "Claude Help Center : Provision and manage skills for your organization", url: "https://support.claude.com/en/articles/13119606-provision-and-manage-skills-for-your-organization" },
    { name: "Claude Help Center : How large is the context window on paid Claude plans?", url: "https://support.claude.com/en/articles/8606394-how-large-is-the-context-window-on-paid-claude-plans" },
    { name: "Anthropic Privacy Center : Is my data used for model training? (offres commerciales)", url: "https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training" },
    { name: "EUR-Lex : règlement (UE) 2024/1860 (transition IVDR)", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32024R1860" },
    { name: "EUR-Lex : règlement (UE) 2017/746 (IVDR), version consolidée, annexe II", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:02017R0746-20250110" },
    { name: "Insee Analyses Auvergne-Rhône-Alpes n° 188 : industrie pharmaceutique (décembre 2024)", url: "https://www.insee.fr/fr/statistiques/8314066" },
    { name: "bioMérieux : qui sommes-nous", url: "https://www.biomerieux.com/corp/fr/qui-nous-sommes.html" },
    { name: "Lyonbiopôle Auvergne-Rhône-Alpes", url: "https://www.lyonbiopole.com/" },
  ],
}

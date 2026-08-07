// Bibliothèque de prompts par métier — matière issue des formations Masteria.
//
// Chaque prompt suit la structure enseignée en formation (rôle, contexte, tâche,
// format, garde-fou) et vient avec sa raison d'être : c'est ce « pourquoi ça
// marche » qui distingue ce recueil des listes de prompts recopiées partout.
//
// RÈGLE DE FOND : aucun prompt ne promet un résultat chiffré, et tous supposent
// que l'utilisateur fournit SES documents. Un prompt générique donne un résultat
// générique ; la valeur naît du croisement avec la matière réelle de l'entreprise.

export const PROMPT_METIERS = [
  {
    slug: 'marketing',
    label: 'Marketing',
    hub: '/formation-ia-marketing',
    intro: "Production de contenu, analyse de campagnes, positionnement : les prompts marketing les plus rentables sont ceux qui partent de vos contenus existants plutôt que d'une page blanche.",
    prompts: [
      {
        t: 'Cloner votre ton de marque',
        p: `Tu es rédacteur pour notre marque. Voici trois contenus que nous avons publiés et validés : [COLLER LES TROIS TEXTES].

Analyse-les et produis une fiche de style : longueur de phrase typique, niveau de langue, tournures récurrentes, ce que nous ne disons jamais, rapport au lecteur (vouvoiement, ton).

Puis rédige [SUJET] en respectant cette fiche. À la fin, indique en une ligne les points sur lesquels tu as dû t'écarter de la fiche et pourquoi.`,
        w: "Faire produire la fiche de style AVANT le texte force le modèle à observer votre voix au lieu de produire sa moyenne statistique.",
      },
      {
        t: 'Extraire les arguments de vos vrais clients',
        p: `Voici [NOMBRE] verbatims clients (avis, retours d'enquête, comptes rendus d'appels) : [COLLER].

Identifie les cinq bénéfices qui reviennent le plus, formulés AVEC LES MOTS DES CLIENTS et non avec notre vocabulaire marketing.

Pour chacun : le bénéfice, deux verbatims qui l'illustrent, et le nombre de mentions. Ignore ce qui n'apparaît qu'une fois.`,
        w: "Les meilleures accroches sont déjà dans la bouche de vos clients ; l'IA sert ici de machine à repérer les récurrences, pas à inventer des promesses.",
      },
      {
        t: 'Décliner une offre en trois angles',
        p: `Voici notre offre : [DESCRIPTION].

Décline-la en trois angles distincts : gain de temps, réduction de risque, avantage concurrentiel.

Pour chaque angle : une accroche de moins de 12 mots, trois arguments avec une preuve ou un chiffre que je devrai vérifier (marque-le [À VÉRIFIER]), et l'objection principale à traiter.`,
        w: "Le marqueur [À VÉRIFIER] discipline le modèle et vous : il rend visible ce qui doit être étayé avant publication.",
      },
      {
        t: 'Brief créatif à partir d’un objectif',
        p: `Objectif de campagne : [OBJECTIF MESURABLE]. Cible : [PERSONA]. Contraintes : [BUDGET, CANAUX, DÉLAIS].

Rédige un brief créatif exploitable par une agence : problème à résoudre, insight consommateur, message unique, preuve du message, ton, livrables attendus, critères de réussite.

Termine par les trois questions que l'agence nous posera et auxquelles nous n'avons pas encore de réponse.`,
        w: "Demander les questions manquantes transforme le modèle en relecteur critique de votre propre brief.",
      },
      {
        t: 'Analyser une campagne sans se raconter d’histoires',
        p: `Voici les résultats de notre campagne [NOM] : [COLLER LES DONNÉES].

Analyse-les en trois parties : ce que les chiffres établissent, ce qu'ils suggèrent sans le prouver, ce qu'ils ne disent pas du tout.

N'invente aucune explication causale. Quand une hypothèse est plausible mais non démontrée par ces données, écris-le explicitement.`,
        w: "La séparation établi / suggéré / inconnu est le garde-fou anti-hallucination le plus utile sur des données chiffrées.",
      },
      {
        t: 'Calendrier éditorial adossé à vos piliers',
        p: `Nos trois piliers de contenu : [PILIERS]. Notre cible : [CIBLE]. Fréquence visée : [X] publications par semaine sur [CANAUX].

Construis un calendrier éditorial sur 4 semaines. Pour chaque publication : pilier, format, angle, accroche, appel à l'action.

Contrainte : aucun sujet ne doit revenir deux fois sous un angle proche, et chaque semaine doit couvrir les trois piliers.`,
        w: "La contrainte de non-répétition évite le calendrier qui tourne en rond au bout de dix jours.",
      },
      {
        t: 'Réécrire une page qui ne convertit pas',
        p: `Voici la page : [COLLER LE TEXTE]. Voici ce que nous savons de son audience : [CONTEXTE]. Objectif de la page : [ACTION ATTENDUE].

Diagnostique d'abord : qu'est-ce qui empêche le lecteur d'agir ? Liste les freins par ordre d'importance.

Puis réécris la page en traitant les trois premiers freins. Garde la même longueur.`,
        w: "Diagnostiquer avant de réécrire évite la reformulation cosmétique qui change les mots sans changer les résultats.",
      },
      {
        t: 'Préparer un lancement produit',
        p: `Produit : [DESCRIPTION]. Date de lancement : [DATE]. Cibles : [SEGMENTS].

Construis le plan de lancement : messages par segment, séquence de communication semaine par semaine, contenus à produire, points de mesure.

Ajoute une section « ce qui peut mal se passer » avec trois risques et la parade pour chacun.`,
        w: "La section risques est ce que les plans de lancement générés par IA omettent toujours, et c'est celle que votre direction lira en premier.",
      },
    ],
  },
  {
    slug: 'ressources-humaines',
    label: 'Ressources humaines',
    hub: '/formation-ia-ressources-humaines',
    intro: "Recrutement, entretiens, communication interne : le métier RH manipule des données personnelles, donc chaque prompt doit être conçu avec l'anonymisation en tête.",
    prompts: [
      {
        t: 'Grille d’entretien qui départage les candidats',
        p: `Voici la fiche de poste : [COLLER]. Voici les trois compétences réellement critiques pour réussir à ce poste : [LISTER].

Construis une grille d'entretien : pour chaque compétence, deux questions comportementales (situation vécue, pas hypothèse), les indices d'une bonne réponse et les signaux d'alerte.

Écarte les questions auxquelles tout candidat préparé répondra correctement.`,
        w: "Les questions comportementales portent sur du vécu vérifiable ; les questions hypothétiques mesurent surtout l'aisance à l'oral.",
      },
      {
        t: 'Annonce qui parle du travail réel',
        p: `Voici notre annonce actuelle : [COLLER].

Réécris-la en inversant les proportions : 70 % sur les missions concrètes et la première année au poste, 30 % sur l'entreprise.

Supprime tout superlatif non prouvé. Conserve les mentions légales et vérifie qu'aucune formulation ne pourrait être lue comme discriminatoire (âge, genre, origine, situation familiale, handicap).`,
        w: "Le contrôle anti-discrimination intégré au prompt évite la relecture juridique de rattrapage.",
      },
      {
        t: 'Synthèse d’entretiens annuels sans nommer personne',
        p: `Voici [NOMBRE] extraits d'entretiens annuels, déjà anonymisés : [COLLER].

Identifie cinq signaux managériaux récurrents. Pour chacun : le signal, le nombre d'occurrences, une action possible pour la direction.

Ne cite aucun prénom, aucun service identifiable, aucun élément permettant de reconnaître une personne. Si un extrait est trop identifiant, signale-le au lieu de l'utiliser.`,
        w: "Demander au modèle de signaler les extraits trop identifiants transforme le prompt en filtre de conformité RGPD.",
      },
      {
        t: 'Parcours d’intégration sur 90 jours',
        p: `Poste : [INTITULÉ]. Équipe : [COMPOSITION]. Outils à maîtriser : [LISTE]. Personnes clés à rencontrer : [RÔLES].

Construis un parcours d'intégration en trois paliers (jour 1, jour 30, jour 90) : objectifs, rencontres, formations, livrable attendu à chaque palier.

Précise à chaque palier ce que le manager doit faire, pas seulement ce que la recrue doit faire.`,
        w: "Expliciter la part du manager est ce qui fait tenir un onboarding : sans cela, le plan repose entièrement sur la recrue.",
      },
      {
        t: 'Cadrer un plan de développement des compétences',
        p: `Voici nos effectifs par service et les compétences visées : [COLLER]. Budget indicatif : [MONTANT].

Propose un plan de formation priorisé : pour chaque action, le service concerné, la compétence visée, le format (intra, individuel, distanciel), la durée, et le critère qui permettra de dire que ça a marché.

Classe par rapport impact/effort et signale ce qui relève d'un besoin d'organisation plutôt que de formation.`,
        w: "La dernière consigne évite le piège classique : former des équipes à un problème qui relève en fait du processus.",
      },
      {
        t: 'Répondre à une candidature refusée',
        p: `Contexte : [POSTE], candidature refusée à l'étape [ÉTAPE]. Motif réel : [MOTIF].

Rédige une réponse honnête et respectueuse : elle doit donner un élément utile au candidat sans exposer l'entreprise juridiquement, et rester crédible.

Pas de formule creuse du type « votre profil ne correspond pas à nos attentes actuelles » sans contenu.`,
        w: "Interdire explicitement la formule creuse force le modèle à produire un retour réellement utile.",
      },
      {
        t: 'Préparer une communication de réorganisation',
        p: `Contexte : [DÉCRIRE LA RÉORGANISATION ET SES EFFETS RÉELS SUR LES ÉQUIPES].

Prépare trois versions du même message : direction, managers, collaborateurs. Même information de fond, pas de contradiction entre les versions.

Ajoute la liste des dix questions qui seront posées, avec pour chacune une réponse que nous pouvons tenir.`,
        w: "Générer les questions difficiles à l'avance est la seule façon d'éviter l'improvisation le jour de l'annonce.",
      },
      {
        t: 'Fiche de poste à partir du travail observé',
        p: `Voici ce que fait réellement la personne au quotidien : [DÉCRIRE LES TÂCHES OBSERVÉES ET LEUR FRÉQUENCE].

Construis la fiche de poste correspondante : mission, activités par ordre de temps consommé, compétences requises, interfaces internes, critères d'évaluation.

Signale les écarts entre ce qui est fait et ce qui devrait relever de ce poste.`,
        w: "Partir du travail observé plutôt que du référentiel produit des fiches que les équipes reconnaissent.",
      },
    ],
  },
  {
    slug: 'commercial',
    label: 'Commercial',
    hub: '/formation-ia-commercial',
    intro: "Prospection, propositions, négociation : le gain vient de la préparation, là où les commerciaux manquent de temps, pas de la génération d'emails de masse.",
    prompts: [
      {
        t: 'Relance après rendez-vous',
        p: `Voici mon compte rendu de rendez-vous : [COLLER LES NOTES BRUTES].

Rédige l'email de relance : reprends leurs mots et leurs priorités (pas les miennes), réponds à l'objection principale qu'ils ont exprimée, propose une prochaine étape datée et précise.

Moins de 150 mots. Pas de formule de politesse creuse en ouverture.`,
        w: "« Leurs mots, pas les miens » est la consigne qui transforme une relance générique en relance qui obtient une réponse.",
      },
      {
        t: 'Préparer les objections avant de les subir',
        p: `Voici le contexte du prospect : [SECTEUR, TAILLE, ENJEU, CONCURRENCE EN PLACE]. Voici notre offre : [RÉSUMÉ].

Liste les huit objections les plus probables, classées par probabilité. Pour chacune : la réponse courte et factuelle, la preuve à apporter, et ce qu'il ne faut surtout pas répondre.

Inclus les objections de prix ET les objections de statu quo.`,
        w: "L'objection la plus fréquente n'est pas le prix mais l'inertie ; forcer sa présence évite l'angle mort classique.",
      },
      {
        t: 'Transformer un cahier des charges en proposition',
        p: `Voici le cahier des charges du client : [COLLER].

Structure notre proposition : reformulation de leur besoin dans leurs termes, notre réponse point par point, livrables, planning, ce qui n'est pas inclus.

Signale les exigences du cahier des charges auxquelles nous ne répondons pas ou mal : je dois les traiter avant l'envoi.`,
        w: "Faire remonter les exigences non couvertes évite la découverte tardive, au moment de la soutenance.",
      },
      {
        t: 'Qualifier un prospect en amont',
        p: `Voici ce que je sais du prospect : [INFORMATIONS DISPONIBLES].

Évalue la qualification selon : besoin identifié, budget probable, pouvoir de décision, échéance. Pour chaque critère, dis ce qui est établi et ce qui est supposé.

Termine par les trois questions que je dois poser au prochain échange pour lever les incertitudes les plus coûteuses.`,
        w: "Séparer l'établi du supposé empêche de construire un forecast sur des hypothèses prises pour des faits.",
      },
      {
        t: 'Note de synthèse compte stratégique',
        p: `Voici l'historique du compte : [ÉCHANGES, COMMANDES, INCIDENTS]. Voici l'organigramme connu : [CONTACTS ET RÔLES].

Produis une note d'une page : état de la relation, interlocuteurs et leur position vis-à-vis de nous, risques de perte, opportunités d'extension, prochaine action recommandée.

Signale les zones où l'information manque.`,
        w: "Une note qui affiche ses trous est plus utile qu'une note qui fait semblant d'être complète.",
      },
      {
        t: 'Séquence de prospection qui ne ressemble pas à du spam',
        p: `Cible : [PERSONA ET SECTEUR]. Déclencheur identifié : [ÉVÉNEMENT OU SIGNAL RÉEL]. Notre valeur pour eux : [BÉNÉFICE].

Construis une séquence de quatre messages sur trois semaines. Chaque message doit apporter quelque chose d'utile même si la personne ne répond jamais.

Aucun message ne doit commencer par « je me permets de vous contacter » ni mentionner que c'est une relance.`,
        w: "L'exigence d'utilité par message est ce qui sépare une séquence lue d'une séquence signalée comme indésirable.",
      },
      {
        t: 'Débriefer une affaire perdue',
        p: `Affaire perdue : [CONTEXTE]. Ce que le client nous a dit : [VERBATIM]. Ce que nous avons proposé : [RÉSUMÉ].

Analyse la perte en distinguant les causes sur lesquelles nous pouvions agir de celles hors de notre contrôle.

Termine par une chose à changer dans notre processus, pas dans le discours commercial.`,
        w: "Chercher le correctif dans le processus plutôt que dans le pitch produit des enseignements réutilisables.",
      },
      {
        t: 'Argumentaire adapté à un interlocuteur précis',
        p: `Interlocuteur : [FONCTION ET PRIORITÉS CONNUES]. Notre offre : [RÉSUMÉ]. Sa problématique déclarée : [CITER].

Adapte l'argumentaire à ce que cette fonction précise défend en interne : ce qu'elle doit prouver à sa propre direction, ce qui la met en risque, ce qui la valorise.

Trois arguments maximum, avec pour chacun la formulation exacte à utiliser à l'oral.`,
        w: "Raisonner sur ce que l'interlocuteur doit prouver en interne déplace l'argumentaire du produit vers son enjeu réel.",
      },
    ],
  },
  {
    slug: 'finance',
    label: 'Finance',
    hub: '/formation-ia-finance',
    intro: "Analyse, reporting, contrôle : en finance, un prompt sans garde-fou anti-invention est un prompt dangereux. Tous ceux qui suivent en contiennent un.",
    prompts: [
      {
        t: 'Analyser un écart budgétaire',
        p: `Voici le réalisé et le budget par poste : [COLLER LE TABLEAU].

Identifie les cinq écarts les plus significatifs en valeur ET en pourcentage (les deux classements peuvent différer, montre-les tous les deux).

Pour chaque écart, propose les explications possibles en les qualifiant : démontrée par les données fournies, plausible mais à vérifier, ou simple hypothèse. N'invente aucun chiffre absent du tableau.`,
        w: "Le double classement valeur/pourcentage révèle les dérives que le seul tri par montant masque.",
      },
      {
        t: 'Note de synthèse pour un comité',
        p: `Voici les chiffres du trimestre : [COLLER]. Voici le trimestre précédent : [COLLER].

Rédige une note d'une page pour un comité non financier : faits marquants, évolutions, points de vigilance, décisions attendues.

Chaque affirmation doit être rattachable à un chiffre du tableau. Traduis les termes techniques en langage courant à leur première apparition.`,
        w: "La traçabilité affirmation-chiffre est ce qui rend la note défendable en séance.",
      },
      {
        t: 'Traduire une liasse pour des non-financiers',
        p: `Voici les données : [COLLER].

Sélectionne les cinq indicateurs qui comptent pour un manager opérationnel. Pour chacun : la valeur, ce qu'elle signifie pour son activité, le seuil à partir duquel il doit s'inquiéter.

Évite tout jargon comptable. Si un terme technique est indispensable, définis-le en une incise de moins de dix mots.`,
        w: "Demander le seuil d'alerte rend l'indicateur actionnable plutôt que simplement informatif.",
      },
      {
        t: 'Contrôler la cohérence d’un tableau',
        p: `Voici le tableau : [COLLER].

Vérifie sa cohérence interne : totaux, sous-totaux, variations improbables d'une période à l'autre, cellules vides là où une valeur est attendue, unités mélangées.

Liste uniquement les anomalies constatées, avec la référence de la ligne concernée. Ne corrige rien.`,
        w: "Le contrôle de cohérence est l'usage IA le plus rentable en finance, et le moins risqué : il signale, il ne modifie pas.",
      },
      {
        t: 'Préparer un dossier d’investissement',
        p: `Projet : [DESCRIPTION]. Montant : [MONTANT]. Hypothèses de retour : [HYPOTHÈSES ET LEUR SOURCE].

Structure le dossier : besoin, options envisagées dont le statu quo, hypothèses avec leur degré de solidité, scénarios favorable, central et défavorable, recommandation.

Pour chaque hypothèse, indique ce qui la ferait basculer.`,
        w: "Expliciter ce qui ferait basculer chaque hypothèse est ce que demandera le premier administrateur sérieux.",
      },
      {
        t: 'Formule Excel expliquée',
        p: `Je veux obtenir : [RÉSULTAT ATTENDU]. Voici la structure de mes données : [COLONNES ET LIGNES].

Propose la formule Excel, puis explique-la morceau par morceau pour que je puisse la modifier moi-même.

Indique aussi les cas où elle renverra une erreur et comment la protéger.`,
        w: "L'explication morceau par morceau rend l'utilisateur autonome ; la formule seule crée une dépendance.",
      },
      {
        t: 'Résumer un rapport d’audit',
        p: `Voici le rapport : [COLLER OU JOINDRE].

Produis : les constats classés par criticité, les recommandations avec leur charge estimée par l'auditeur, et les points où le rapport reste ambigu.

Si une information demandée n'est pas dans le document, écris NON TROUVÉ plutôt que de la déduire.`,
        w: "Le marqueur NON TROUVÉ est le garde-fou le plus simple contre l'invention, et le plus efficace sur des documents longs.",
      },
      {
        t: 'Préparer les questions d’un contrôleur',
        p: `Voici notre dossier : [RÉSUMÉ ET PIÈCES DISPONIBLES]. Contexte du contrôle : [TYPE].

Liste les quinze questions les plus probables d'un contrôleur sur ce dossier, classées par difficulté pour nous.

Pour chacune, indique la pièce justificative à préparer. Signale celles pour lesquelles nous n'avons rien.`,
        w: "Identifier à froid les questions sans réponse laisse le temps de constituer les pièces manquantes.",
      },
    ],
  },
  {
    slug: 'juridique',
    label: 'Juridique',
    hub: null,
    intro: "Analyse contractuelle, veille, rédaction : l'IA ne remplace jamais l'avis juridique, mais elle absorbe le travail de repérage qui consomme les heures facturables.",
    prompts: [
      {
        t: 'Repérer les clauses à risque',
        p: `Voici le contrat : [JOINDRE].

Liste les clauses qui : nous engagent au-delà de 12 mois, limitent ou excluent notre responsabilité, prévoient une reconduction tacite, conditionnent la résiliation, transfèrent une propriété intellectuelle.

Pour chacune : la citation exacte, sa référence d'article, et le risque en une phrase. Si une catégorie est absente du contrat, écris ABSENTE.`,
        w: "Exiger la citation exacte et la référence d'article rend chaque point vérifiable en dix secondes.",
      },
      {
        t: 'Comparer deux versions d’un accord',
        p: `Voici la version 1 : [JOINDRE]. Voici la version 2 : [JOINDRE].

Produis un tableau des écarts : article, ancienne rédaction, nouvelle rédaction, effet pour nous (favorable, défavorable, neutre), niveau de vigilance.

Ne signale que les écarts de fond. Ignore la ponctuation et les reformulations sans effet juridique.`,
        w: "Filtrer les écarts cosmétiques est ce qui rend la comparaison exploitable sur un contrat de cinquante pages.",
      },
      {
        t: 'Vulgariser une décision pour la direction',
        p: `Voici la décision : [JOINDRE OU COLLER].

Résume-la en dix lignes pour un dirigeant non juriste : ce qui était en jeu, ce qui a été jugé, sur quel fondement.

Puis, en trois points, ce que cela change pour nos contrats en cours. Distingue ce qui est certain de ce qui dépendra d'une interprétation.`,
        w: "La distinction certain / interprétable est la ligne que le juriste doit tenir face à une direction qui veut une réponse simple.",
      },
      {
        t: 'Préparer une négociation contractuelle',
        p: `Voici le projet de contrat proposé par l'autre partie : [JOINDRE]. Nos priorités : [LISTER PAR ORDRE].

Prépare la négociation : points à obtenir absolument, points négociables, points que nous pouvons concéder en échange.

Pour chaque point à obtenir, propose une rédaction alternative prête à envoyer.`,
        w: "Fournir la rédaction alternative fait gagner le tour de négociation suivant, pas seulement l'analyse.",
      },
      {
        t: 'Cartographier des obligations réglementaires',
        p: `Voici le texte applicable : [JOINDRE]. Voici notre activité : [DÉCRIRE].

Extrais les obligations qui nous concernent, avec pour chacune : l'article, l'obligation en langage clair, l'échéance, et qui en est responsable chez nous si c'est déductible.

N'extrapole aucune obligation qui ne figure pas dans le texte.`,
        w: "L'interdiction d'extrapoler est indispensable sur du réglementaire, où une obligation inventée coûte plus cher qu'une omission.",
      },
      {
        t: 'Première lecture d’un appel d’offres public',
        p: `Voici le règlement de consultation : [JOINDRE].

Extrais : date et heure limite, pièces exigées, critères de jugement avec leur pondération, conditions d'exclusion, format imposé pour le mémoire.

Signale les exigences inhabituelles ou particulièrement contraignantes.`,
        w: "Le repérage des exigences inhabituelles est ce qui évite l'élimination pour un motif de forme.",
      },
      {
        t: 'Rédiger une mise en demeure',
        p: `Contexte : [FAITS DATÉS ET DOCUMENTÉS]. Fondement contractuel : [ARTICLE]. Ce que nous demandons : [DEMANDE PRÉCISE ET DÉLAI].

Rédige la mise en demeure : rappel des faits, fondement, demande, délai, conséquences en cas d'inaction.

Ton ferme et factuel, sans qualification juridique excessive. Signale-moi les affirmations que je devrai pouvoir prouver.`,
        w: "Faire lister les affirmations à prouver transforme le brouillon en check-list de constitution de preuve.",
      },
      {
        t: 'Répondre à une demande d’accès aux données',
        p: `Demande reçue : [COLLER]. Données que nous détenons sur la personne : [LISTER LES CATÉGORIES].

Prépare la réponse : périmètre de la demande, données communicables, données exclues avec le motif légal, délai de réponse applicable.

Signale ce qui nécessite une vérification d'identité préalable.`,
        w: "Traiter le périmètre et les exclusions séparément évite les deux erreurs symétriques : sur-communiquer ou refuser à tort.",
      },
    ],
  },
  {
    slug: 'communication',
    label: 'Communication',
    hub: '/formation-ia-communication',
    intro: "Éditorial, relations presse, communication interne : la valeur de l'IA se joue sur la déclinaison et la préparation, pas sur la production à la chaîne.",
    prompts: [
      {
        t: 'Décliner une annonce en trois registres',
        p: `Voici l'annonce : [FAITS]. Voici ce que nous voulons qu'il en reste : [MESSAGE CLÉ].

Produis trois versions : communiqué de presse, publication LinkedIn, message interne aux équipes.

Même information de fond, trois registres. Aucune version ne doit contenir une affirmation absente des deux autres.`,
        w: "La contrainte de cohérence entre versions évite la promesse qui n'existe que dans le message interne.",
      },
      {
        t: 'Préparer un porte-parole',
        p: `Sujet de l'interview : [SUJET]. Média : [NOM ET ANGLE PROBABLE]. Nos messages : [LISTER].

Prépare cinq questions difficiles que le journaliste posera, avec pour chacune : une réponse courte et honnête, le piège à éviter, et le message à ramener.

Inclus au moins une question sur ce que nous préférerions ne pas aborder.`,
        w: "La question qu'on préférerait éviter est celle qui sera posée ; la préparer à froid change l'issue de l'interview.",
      },
      {
        t: 'Message de crise en trois heures',
        p: `Situation : [FAITS ÉTABLIS UNIQUEMENT]. Ce que nous ne savons pas encore : [LISTER]. Publics concernés : [LISTER].

Rédige la première prise de parole : ce que nous reconnaissons, ce que nous faisons, quand nous reparlerons.

N'écris aucune affirmation qui ne figure pas dans les faits établis. Pas de conditionnel qui ressemble à un aveu.`,
        w: "Séparer les faits établis de l'inconnu avant d'écrire est ce qui évite la déclaration à rectifier le lendemain.",
      },
      {
        t: 'Relecture au ton de marque',
        p: `Voici notre charte éditoriale : [COLLER]. Voici deux textes validés qui l'incarnent : [COLLER].

Relis ce brouillon : [COLLER]. Signale chaque passage qui s'écarte de la charte, avec la raison et une reformulation.

Ne réécris pas ce qui est déjà conforme.`,
        w: "Interdire la réécriture du conforme empêche le nivellement qui efface les bonnes trouvailles de l'auteur.",
      },
      {
        t: 'Newsletter à partir de matière brute',
        p: `Voici la matière du mois : [ACTUALITÉS, CHIFFRES, PUBLICATIONS]. Notre audience : [PROFIL]. Ce qui l'intéresse : [PRÉCISER].

Construis la newsletter : objet, accroche, trois blocs hiérarchisés par intérêt pour le lecteur (pas par importance pour nous), un appel à l'action unique.

Écarte ce qui n'intéresse que nous.`,
        w: "Hiérarchiser par intérêt lecteur et non par priorité interne est le seul réglage qui améliore durablement le taux d'ouverture.",
      },
      {
        t: 'Discours pour une prise de parole',
        p: `Occasion : [CONTEXTE]. Durée : [MINUTES]. Audience : [PROFIL ET ATTENTES]. Message à faire passer : [UN SEUL].

Écris le discours : accroche qui n'est pas une politesse, développement en trois temps, chute qui ouvre.

Style oral : phrases courtes, pas de subordonnées empilées. Indique les respirations.`,
        w: "Un texte écrit pour l'œil ne se dit pas ; imposer la contrainte orale évite le discours illisible en salle.",
      },
      {
        t: 'Communiqué qui passe le filtre journaliste',
        p: `Information : [FAITS ET CHIFFRES SOURCÉS]. Pourquoi c'est nouveau : [ANGLE].

Rédige le communiqué : titre informatif, chapô répondant aux questions essentielles, corps, citation utile (qui apporte une information et non un adjectif), encadré factuel sur l'entreprise.

Supprime tout superlatif non prouvé.`,
        w: "Une citation qui n'apporte qu'un adjectif est coupée par le journaliste ; l'exiger informative est ce qui fait reprendre le communiqué.",
      },
      {
        t: 'Plan de communication interne d’un changement',
        p: `Changement : [DESCRIPTION ET EFFETS RÉELS]. Populations concernées : [LISTER]. Calendrier : [DATES].

Construis le plan : qui apprend quoi, quand, par quel canal et par qui. Les managers doivent être informés avant leurs équipes.

Ajoute les trois rumeurs probables et la façon de les devancer.`,
        w: "Devancer les rumeurs identifiées est plus efficace que les démentir une fois installées.",
      },
    ],
  },
  {
    slug: 'management',
    label: 'Management',
    hub: '/formation-ia-management',
    intro: "Réunions, feedback, arbitrages : le manager gagne surtout du temps sur la mise en forme et la préparation des conversations difficiles.",
    prompts: [
      {
        t: 'Compte rendu exploitable',
        p: `Voici mes notes brutes de réunion : [COLLER].

Structure : décisions prises, actions avec responsable et échéance, points reportés avec la raison, désaccords non tranchés.

Si une action n'a pas de responsable identifiable dans mes notes, écris RESPONSABLE À DÉSIGNER plutôt que d'attribuer au hasard.`,
        w: "Le marqueur RESPONSABLE À DÉSIGNER fait apparaître les actions orphelines, celles qui ne seront jamais faites.",
      },
      {
        t: 'Préparer un entretien difficile',
        p: `Situation : [FAITS OBSERVÉS, DATÉS, FACTUELS]. Ce que j'attends comme changement : [PRÉCIS ET MESURABLE].

Prépare l'entretien : ouverture, exposé des faits sans jugement de personne, écoute, formulation de l'attente, accord sur la suite.

Liste les phrases à éviter et pourquoi. Anticipe deux réactions possibles et la conduite à tenir pour chacune.`,
        w: "Travailler les faits sans jugement de personne est la compétence qui fait la différence, et celle qu'on oublie sous tension.",
      },
      {
        t: 'Synthèse pour un comité de direction',
        p: `Voici les rapports de mes équipes : [COLLER].

Produis une page : ce qui avance, ce qui bloque, ce qui demande un arbitrage de la direction.

Pour chaque arbitrage : l'option A, l'option B, ma recommandation et ce qu'elle coûte. Pas de point purement informatif.`,
        w: "Interdire les points informatifs oblige à hiérarchiser et rend la réunion de direction décisionnelle.",
      },
      {
        t: 'Feedback utile plutôt que gentil',
        p: `Contexte : [SITUATION OBSERVÉE]. Personne : [RÔLE, PAS DE NOM]. Objectif : [PROGRESSION VISÉE].

Rédige un feedback en trois temps : le fait observé, son effet concret, l'attente pour la prochaine fois.

Pas de sandwich compliment-critique-compliment. Pas de généralisation du type « tu es toujours ».`,
        w: "Bannir le sandwich et les généralisations élimine les deux réflexes qui rendent le feedback inaudible.",
      },
      {
        t: 'Répartir une charge de travail',
        p: `Voici les tâches à venir : [LISTE AVEC CHARGE ESTIMÉE]. Voici mon équipe : [COMPÉTENCES ET DISPONIBILITÉS].

Propose une répartition : qui fait quoi, pourquoi, et ce qui reste non couvert.

Signale les personnes en surcharge dans ta proposition et les tâches qui n'ont aucun titulaire compétent disponible.`,
        w: "Faire remonter ce qui n'est pas couvert évite le plan de charge qui tient uniquement sur le papier.",
      },
      {
        t: 'Ordre du jour qui tient en une heure',
        p: `Sujets à traiter : [LISTER]. Participants : [RÔLES]. Durée : [MINUTES].

Construis l'ordre du jour : pour chaque point, l'objectif (informer, décider, produire), le temps alloué, qui porte le sujet.

Écarte les sujets qui ne nécessitent pas cette réunion et indique le canal approprié pour chacun.`,
        w: "Expliciter l'objectif de chaque point est ce qui empêche la réunion de dériver en tour de table.",
      },
      {
        t: 'Cadrer un objectif flou',
        p: `Objectif tel qu'il m'a été transmis : [CITER]. Contexte : [MOYENS, DÉLAIS, CONTRAINTES].

Reformule-le en objectif vérifiable : résultat attendu, indicateur, échéance, périmètre exclu.

Liste les ambiguïtés de la formulation d'origine que je dois faire trancher avant de m'engager.`,
        w: "Faire remonter les ambiguïtés avant l'engagement est ce qui évite de porter seul un objectif que personne n'a défini.",
      },
      {
        t: 'Analyser un dysfonctionnement d’équipe',
        p: `Symptômes observés : [FAITS]. Ce qui a déjà été tenté : [ACTIONS].

Propose trois hypothèses de cause racine, distinctes entre elles : une organisationnelle, une relationnelle, une de compétence.

Pour chacune : le signe qui la confirmerait, et la première action de vérification. Ne tranche pas.`,
        w: "Forcer trois hypothèses de natures différentes évite de traiter en problème de personnes ce qui relève de l'organisation.",
      },
    ],
  },
  {
    slug: 'assistante',
    label: 'Assistanat de direction',
    hub: '/formation-ia-assistante',
    intro: "Boîte de réception, agendas, dossiers : le métier où le gain de temps quotidien est le plus immédiat, à condition de traiter le flux et non le message isolé.",
    prompts: [
      {
        t: 'Trier une matinée de messages',
        p: `Voici les messages reçus ce matin : [COLLER].

Classe-les en quatre catégories : à traiter par le dirigeant aujourd'hui, à traiter par moi, à programmer, sans action.

Pour ceux que je traite, propose une réponse de trois lignes maximum. Justifie en cinq mots chaque classement en catégorie « aujourd'hui ».`,
        w: "Demander la justification du caractère urgent fait tomber la moitié des faux urgents.",
      },
      {
        t: 'Dossier de préparation de réunion',
        p: `Réunion : [OBJET, DATE, PARTICIPANTS]. Voici les échanges préalables : [COLLER].

Prépare le dossier : contexte en cinq lignes, position connue de chaque participant, points de friction attendus, documents à réunir, questions que le dirigeant doit pouvoir poser.

Signale ce qui manque pour que la réunion soit utile.`,
        w: "La position connue de chaque participant est ce qui permet au dirigeant d'entrer en réunion sans être surpris.",
      },
      {
        t: 'Compte rendu à partir de notes brutes',
        p: `Voici mes notes prises pendant la réunion : [COLLER].

Rédige le compte rendu : contexte, échanges par sujet, décisions, tableau des actions avec responsable et échéance.

Distingue ce qui a été décidé de ce qui a seulement été évoqué.`,
        w: "La confusion entre décidé et évoqué est la première cause de litige sur un compte rendu.",
      },
      {
        t: 'Reconstituer un agenda cohérent',
        p: `Voici les demandes de rendez-vous et les contraintes : [COLLER]. Voici les priorités du trimestre : [LISTER].

Propose un agenda de la semaine : ce qui est confirmé, ce qui est à déplacer, ce qui est à refuser ou déléguer.

Réserve des plages de travail de fond d'au moins 90 minutes et protège-les.`,
        w: "Réserver explicitement les plages de fond est le seul moyen qu'elles survivent aux demandes entrantes.",
      },
      {
        t: 'Rédiger un refus qui préserve la relation',
        p: `Demande : [CITER]. Raison réelle du refus : [PRÉCISER]. Relation à préserver : [CONTEXTE].

Rédige la réponse : refus clair dès la première phrase, raison compréhensible sans être compromettante, ouverture si elle est sincère.

Pas de « nous reviendrons vers vous » si nous ne le ferons pas.`,
        w: "Le refus clair en première phrase est plus respectueux que trois paragraphes qui laissent espérer.",
      },
      {
        t: 'Organiser un déplacement complexe',
        p: `Déplacement : [VILLES, DATES, RENDEZ-VOUS FIXES]. Contraintes du dirigeant : [PRÉFÉRENCES, IMPÉRATIFS].

Construis le programme : trajets, horaires, marges entre rendez-vous, documents nécessaires à chaque étape, contacts sur place.

Identifie les points de fragilité du programme et prévois une solution de repli pour chacun.`,
        w: "Prévoir le repli sur les points fragiles est ce qui distingue un programme tenable d'un programme théorique.",
      },
      {
        t: 'Synthèse de documents avant décision',
        p: `Voici les documents : [JOINDRE]. Décision à prendre : [PRÉCISER].

Produis une synthèse d'une page orientée vers cette décision : les éléments qui plaident pour, ceux qui plaident contre, ce qui manque pour trancher.

Ignore tout ce qui n'éclaire pas cette décision précise, même si c'est intéressant.`,
        w: "L'instruction d'ignorer l'intéressant hors sujet est ce qui produit une page au lieu de cinq.",
      },
      {
        t: 'Relancer sans harceler',
        p: `Objet de la relance : [SUJET]. Historique : [DATES ET CONTENU DES ÉCHANGES PRÉCÉDENTS]. Enjeu réel : [POURQUOI ÇA COMPTE].

Rédige la relance : rappel factuel du contexte, ce que nous attendons précisément, échéance, et ce qui se passe si nous n'avons pas de réponse.

Ne mentionne pas que c'est une relance. Moins de 100 mots.`,
        w: "Annoncer la conséquence de l'absence de réponse est ce qui débloque les dossiers dormants.",
      },
    ],
  },
  {
    slug: 'seo',
    label: 'SEO et acquisition',
    hub: '/formation-ia-seo',
    intro: "Recherche de mots-clés, briefs, optimisation : l'IA accélère l'analyse, mais un contenu entièrement généré reste un contenu qui ne se démarque pas.",
    prompts: [
      {
        t: 'Analyser une intention de recherche',
        p: `Requête : [MOT-CLÉ]. Voici les titres et descriptions des dix premiers résultats : [COLLER].

Déduis l'intention réelle derrière cette requête : que cherche la personne, à quelle étape de sa réflexion, quel format Google privilégie.

Puis liste ce qu'une page doit contenir pour répondre, et ce que les dix résultats actuels ne traitent pas.`,
        w: "Partir de la SERP réelle plutôt que du mot-clé évite d'écrire un guide là où Google veut un comparatif.",
      },
      {
        t: 'Brief rédacteur qui évite le générique',
        p: `Mot-clé : [REQUÊTE]. Intention identifiée : [RÉSUMER]. Notre angle propre : [CE QUE NOUS SEULS POUVONS DIRE].

Rédige le brief : titre, plan en H2 et H3, questions à traiter, données ou exemples à intégrer, longueur cible, liens internes à placer.

Ajoute une section « à ne surtout pas écrire » listant les banalités que tous les concurrents servent déjà.`,
        w: "La liste des banalités à éviter est ce qui empêche le rédacteur de reproduire la moyenne de la première page.",
      },
      {
        t: 'Diagnostiquer une page bloquée en page 2',
        p: `Voici notre page : [COLLER OU URL AVEC LE TEXTE]. Requête visée : [MOT-CLÉ]. Voici les trois premiers résultats : [COLLER LEUR STRUCTURE].

Diagnostique l'écart : couverture du sujet, structure, spécificité, signaux de confiance.

Classe les correctifs par rapport impact/effort. Distingue ce qui relève du contenu de ce qui relève de l'autorité du domaine.`,
        w: "Séparer contenu et autorité évite de réécrire dix fois une page dont le problème est le profil de liens.",
      },
      {
        t: 'Cartographier un cluster sémantique',
        p: `Thème central : [SUJET]. Notre page pilier existante : [URL ET CONTENU].

Propose l'architecture du cluster : la page pilier, les pages satellites avec leur requête cible et leur angle, le maillage entre elles.

Signale les risques de cannibalisation entre les pages proposées.`,
        w: "Le contrôle de cannibalisation à la conception évite de créer soi-même ses propres concurrents.",
      },
      {
        t: 'Optimiser pour les moteurs de réponse',
        p: `Voici notre page : [COLLER]. Question à laquelle elle doit répondre : [FORMULER COMME UN UTILISATEUR].

Réécris l'introduction pour qu'elle réponde directement à la question en moins de 60 mots, de façon citable hors contexte.

Puis propose trois questions annexes à ajouter en FAQ, formulées comme les gens les posent réellement.`,
        w: "Une réponse citable hors contexte est ce qu'un moteur génératif peut reprendre ; une introduction d'ambiance ne l'est pas.",
      },
      {
        t: 'Titres et méta qui tiennent la longueur',
        p: `Page : [SUJET ET REQUÊTE CIBLE]. Bénéfice principal : [PRÉCISER].

Propose cinq couples titre et méta-description. Contraintes strictes : titre sous 60 caractères, méta sous 155, requête cible en tête du titre.

Indique le nombre de caractères de chaque proposition.`,
        w: "Faire compter les caractères par le modèle évite la troncature en résultat de recherche, erreur la plus fréquente.",
      },
      {
        t: 'Trouver l’angle que personne ne traite',
        p: `Sujet : [THÈME]. Voici ce que disent les dix premiers résultats : [RÉSUMER]. Voici notre expérience propre sur le sujet : [MATIÈRE RÉELLE].

Identifie trois angles que personne ne traite et que notre expérience nous autorise à traiter.

Écarte les angles que nous ne pouvons pas étayer.`,
        w: "Croiser le vide de la SERP avec votre matière réelle est la seule façon de produire du contenu qui n'existe pas ailleurs.",
      },
      {
        t: 'Auditer le maillage interne d’une rubrique',
        p: `Voici la liste de nos pages sur ce thème avec leur requête cible : [COLLER].

Analyse le maillage : quelles pages devraient pointer vers quelles autres, avec quelle ancre, et quelles pages sont orphelines.

Signale les ancres identiques pointant vers des pages différentes, et l'inverse.`,
        w: "Les ancres identiques vers des pages différentes brouillent le signal ; c'est une erreur invisible à l'œil sur un site étendu.",
      },
    ],
  },
  {
    slug: 'service-client',
    label: 'Service client',
    hub: '/formation-ia-service-client',
    intro: "Traitement des demandes, analyse des irritants : la valeur durable est dans l'analyse des causes, pas dans la génération de réponses plus rapides à des problèmes récurrents.",
    prompts: [
      {
        t: 'Trouver la cause racine derrière les tickets',
        p: `Voici les tickets de la semaine : [COLLER].

Regroupe-les par cause racine et non par symptôme. Pour chaque groupe : le nombre de tickets, la cause probable, le service concerné.

Termine par les trois corrections qui supprimeraient le plus de tickets, avec l'estimation du volume évité.`,
        w: "Le regroupement par cause plutôt que par symptôme est ce qui transforme le support en levier d'amélioration produit.",
      },
      {
        t: 'Répondre à une réclamation sérieuse',
        p: `Réclamation : [COLLER]. Ce qui s'est réellement passé : [FAITS]. Ce que nous pouvons offrir : [MARGE DE MANŒUVRE].

Rédige la réponse : reconnaissance du problème dès la première phrase, explication sans jargon ni excuse générique, solution concrète avec un délai, moyen de recontact direct.

N'utilise pas le conditionnel pour ce qui est certain.`,
        w: "Le conditionnel appliqué aux engagements fermes fait douter le client ; l'interdire rend la réponse crédible.",
      },
      {
        t: 'Humaniser des réponses types',
        p: `Voici nos réponses types actuelles : [COLLER].

Réécris-les : plus courtes, plus directes, sans jargon interne ni référence à nos processus internes.

Conserve intégralement les mentions légales et obligatoires. Signale-moi celles que tu as conservées.`,
        w: "Demander la liste des mentions conservées permet de valider en un coup d'œil qu'aucune obligation n'a sauté.",
      },
      {
        t: 'Détecter les signaux de départ client',
        p: `Voici l'historique des échanges avec ce client : [COLLER].

Identifie les signaux de désengagement : changement de ton, espacement des échanges, sujets évités, comparaisons avec la concurrence.

Classe le risque et propose une action de rétention proportionnée. Distingue les signaux observés des interprétations.`,
        w: "Distinguer signal et interprétation évite de déclencher une action de rétention sur une impression.",
      },
      {
        t: 'Construire une base de connaissances',
        p: `Voici les 20 questions les plus fréquentes et nos réponses actuelles : [COLLER].

Transforme-les en articles de base de connaissances : titre formulé comme la question du client, réponse en trois niveaux (réponse courte, explication, cas particuliers).

Signale les questions dont la réponse actuelle est incomplète ou contradictoire avec une autre.`,
        w: "Le repérage des contradictions entre réponses est ce qui empêche la base de connaissances de créer de nouveaux litiges.",
      },
      {
        t: 'Synthèse de verbatims pour le produit',
        p: `Voici les verbatims clients du mois : [COLLER].

Produis une synthèse pour l'équipe produit : les cinq irritants les plus cités avec leur fréquence, les demandes de fonctionnalité récurrentes, ce que les clients apprécient et qu'il ne faut pas casser.

Cite deux verbatims par point, sans donnée identifiante.`,
        w: "Nommer ce qu'il ne faut pas casser est aussi utile que la liste des problèmes, et personne ne le fait.",
      },
      {
        t: 'Escalade préparée',
        p: `Situation : [CONTEXTE ET HISTORIQUE]. Ce qui a déjà été tenté : [ACTIONS].

Prépare la note d'escalade : résumé factuel en cinq lignes, ce qui a échoué et pourquoi, décision attendue du niveau supérieur, délai.

Pas d'appréciation sur le client ni sur les collègues.`,
        w: "L'interdiction d'apprécier les personnes garde la note d'escalade transmissible et professionnelle.",
      },
      {
        t: 'Mesurer la qualité des réponses',
        p: `Voici dix réponses envoyées par l'équipe : [COLLER].

Évalue chacune sur : clarté, exactitude, ton, complétude, respect des engagements. Note de 1 à 4 par critère avec la justification.

Termine par les deux points d'amélioration communs à l'équipe, formulés comme des consignes actionnables.`,
        w: "Chercher les points communs plutôt que les cas individuels transforme l'évaluation en sujet de formation collective.",
      },
    ],
  },
  {
    slug: 'informatique',
    label: 'Informatique et IT',
    hub: '/formation-ia-informatique',
    intro: "Code, documentation, spécifications : l'IA est un accélérateur redoutable et un générateur d'erreurs subtiles. Tous ces prompts intègrent la vérification.",
    prompts: [
      {
        t: 'Revue de code exigeante',
        p: `Voici le code : [COLLER].

Relis-le et signale : erreurs de logique, cas limites non gérés, entrées non validées, comportements différents en production, dépendances risquées.

Classe par gravité. Pour chaque point, montre la ligne concernée et propose la correction. Ne réécris pas tout le fichier.`,
        w: "Interdire la réécriture complète garde la revue lisible et vous laisse maître de ce qui change.",
      },
      {
        t: 'Documenter pour celui qui arrive demain',
        p: `Voici le module : [COLLER].

Rédige la documentation pour un développeur qui rejoint l'équipe : ce que fait le module, comment l'appeler, les paramètres, les valeurs de retour, les erreurs possibles, les pièges connus.

Ajoute un exemple d'utilisation minimal qui fonctionne.`,
        w: "L'exemple minimal fonctionnel est ce que le lecteur copie en premier ; sans lui, la documentation est ignorée.",
      },
      {
        t: 'Spécification à partir d’un besoin métier',
        p: `Besoin exprimé par le métier : [CITER TEL QUEL].

Transforme-le en spécification technique : comportement attendu, données en entrée et en sortie, règles de gestion, cas limites, critères d'acceptation testables.

Liste séparément les ambiguïtés du besoin d'origine que le métier doit trancher avant développement.`,
        w: "Faire remonter les ambiguïtés avant développement est ce qui évite la recette qui découvre un malentendu.",
      },
      {
        t: 'Comprendre du code hérité',
        p: `Voici le code : [COLLER]. Voici ce que je crois qu'il fait : [MON HYPOTHÈSE].

Explique ce qu'il fait réellement, étape par étape. Confirme ou corrige mon hypothèse en pointant les lignes qui tranchent.

Signale les comportements que le nom des fonctions ne laisse pas deviner.`,
        w: "Soumettre votre hypothèse au modèle rend l'explication ciblée au lieu d'être un commentaire ligne à ligne inutile.",
      },
      {
        t: 'Analyser une trace d’erreur',
        p: `Voici la trace complète : [COLLER]. Voici le contexte d'exécution : [ENVIRONNEMENT, VERSIONS, ACTION DÉCLENCHANTE].

Identifie la cause la plus probable, puis les deux hypothèses alternatives.

Pour chaque hypothèse, donne le test de vérification le plus rapide. Ne propose pas de correction avant que la cause soit confirmée.`,
        w: "Interdire la correction avant confirmation évite la série de correctifs qui déplacent le problème sans le résoudre.",
      },
      {
        t: 'Plan de tests d’une fonctionnalité',
        p: `Fonctionnalité : [DESCRIPTION ET RÈGLES DE GESTION].

Construis le plan de tests : cas nominaux, cas limites, cas d'erreur, cas de sécurité.

Pour chaque cas : les données d'entrée, le résultat attendu, la raison d'être du test. Signale les règles de gestion que tu n'as pas pu couvrir.`,
        w: "Faire déclarer les règles non couvertes révèle les zones aveugles du plan de tests.",
      },
      {
        t: 'Note technique pour une direction non technique',
        p: `Sujet : [PROBLÈME OU CHOIX TECHNIQUE]. Options envisagées : [LISTER AVEC LEURS IMPLICATIONS].

Rédige une note d'une page pour une direction non technique : le problème en termes d'activité, les options avec leur coût et leur risque, la recommandation, ce qui se passe si on ne décide pas.

Aucun terme technique sans traduction immédiate.`,
        w: "La conséquence de la non-décision est ce qui débloque les arbitrages techniques qui traînent depuis des mois.",
      },
      {
        t: 'Requête de base de données expliquée',
        p: `Voici la structure de mes tables : [SCHÉMA]. Je veux obtenir : [RÉSULTAT ATTENDU].

Écris la requête, puis explique-la clause par clause.

Indique son comportement sur un gros volume, les index qui la rendraient rapide, et les cas où elle renverrait un résultat inattendu.`,
        w: "Poser d'emblée la question du volume évite la requête qui fonctionne en développement et s'effondre en production.",
      },
    ],
  },
  {
    slug: 'achats',
    label: 'Achats',
    hub: '/formation-ia-achats',
    intro: "Consultations, comparaisons, négociation : l'IA excelle à mettre à plat des offres hétérogènes, exercice où l'œil humain fatigue vite.",
    prompts: [
      {
        t: 'Comparer des offres hétérogènes',
        p: `Voici les [NOMBRE] offres reçues : [JOINDRE].

Construis un tableau comparatif : prix affiché, périmètre réellement inclus, ce qui est en option, engagements de niveau de service, conditions de sortie, durée.

Signale pour chaque offre ce qui n'est PAS inclus et coûtera en plus. Si une information manque, écris NON PRÉCISÉ.`,
        w: "La colonne « ce qui n'est pas inclus » est celle qui révèle les écarts de prix réels entre des offres apparemment comparables.",
      },
      {
        t: 'Préparer une négociation fournisseur',
        p: `Offre reçue : [JOINDRE]. Notre volume et notre historique avec ce fournisseur : [DONNÉES]. Alternatives crédibles : [LISTER].

Identifie les postes où le fournisseur a probablement de la marge, et les leviers dont nous disposons réellement.

Propose cinq questions qui le feront réagir, et notre position de repli.`,
        w: "Distinguer les leviers réels des leviers supposés évite d'entrer en négociation avec une confiance mal placée.",
      },
      {
        t: 'Cahier des charges à partir de besoins épars',
        p: `Voici les besoins exprimés par les équipes : [COLLER, TELS QUELS].

Structure le cahier des charges : contexte, périmètre, exigences fonctionnelles, exigences techniques, contraintes, critères de sélection pondérés.

Signale les besoins contradictoires entre équipes et ceux qui relèvent de la préférence plutôt que du besoin.`,
        w: "Séparer le besoin de la préférence est ce qui empêche le cahier des charges de décrire un fournisseur en particulier.",
      },
      {
        t: 'Analyser un contrat-cadre avant signature',
        p: `Voici le contrat-cadre : [JOINDRE].

Extrais : durée et conditions de reconduction, mécanisme de révision des prix, engagements de volume, pénalités, conditions de résiliation, propriété des données et livrables.

Signale les clauses déséquilibrées à notre défaveur, avec la citation exacte.`,
        w: "L'extraction ciblée sur ces six points couvre l'essentiel du risque d'un contrat-cadre en quelques minutes.",
      },
      {
        t: 'Grille d’évaluation fournisseur',
        p: `Catégorie d'achat : [PRÉCISER]. Enjeux prioritaires : [QUALITÉ, DÉLAI, COÛT, RSE, DÉPENDANCE].

Construis une grille d'évaluation pondérée : critères, sous-critères, pondération, échelle de notation avec la définition de chaque niveau.

Les niveaux doivent être observables, pas subjectifs.`,
        w: "Définir chaque niveau de façon observable est ce qui rend la notation défendable en cas de contestation.",
      },
      {
        t: 'Cartographier une dépendance fournisseur',
        p: `Fournisseur : [NOM ET PÉRIMÈTRE]. Ce qu'il nous fournit : [LISTER]. Alternatives connues : [LISTER].

Évalue notre dépendance : criticité de ce qu'il fournit, coût et délai de substitution, informations ou savoir-faire qu'il détient sur nous.

Propose trois actions de réduction du risque, classées par effort.`,
        w: "Le savoir-faire détenu par le fournisseur est la part de dépendance que les analyses de risque oublient systématiquement.",
      },
      {
        t: 'Analyser une hausse tarifaire',
        p: `Voici la notification de hausse : [COLLER]. Voici notre historique de prix avec ce fournisseur : [DONNÉES].

Analyse : la hausse est-elle justifiée par les éléments avancés, comment se compare-t-elle aux indices publics du secteur, quels postes sont contestables.

Rédige la réponse : ce que nous acceptons, ce que nous contestons, sur quel fondement.`,
        w: "Trier ce qui est acceptable de ce qui est contestable donne une réponse crédible, plus efficace qu'un refus global.",
      },
      {
        t: 'Consultation en une page',
        p: `Besoin : [DESCRIPTION]. Budget indicatif : [FOURCHETTE]. Délai : [ÉCHÉANCE].

Rédige la demande de devis : contexte utile au fournisseur, ce que nous attendons précisément, format de réponse imposé, critères de choix, date limite.

Le format imposé doit permettre de comparer les réponses sans les retraiter.`,
        w: "Imposer le format de réponse en amont supprime le travail de remise à plat qui consomme le plus de temps.",
      },
    ],
  },
  {
    slug: 'pedagogique',
    label: 'Formation et pédagogie',
    hub: '/formation-ia-pedagogique',
    intro: "Conception de supports, évaluation, animation : l'IA fait gagner des heures sur la production, à condition de garder la main sur la progression pédagogique.",
    prompts: [
      {
        t: 'Séquence pédagogique complète',
        p: `Contenu à transmettre : [JOINDRE OU DÉCRIRE]. Public : [PROFIL ET NIVEAU DE DÉPART]. Durée : [HEURES].

Construis la séquence : objectifs formulés en termes de capacité observable, déroulé minuté, alternance apport et pratique, exercice sur cas réel, évaluation.

Aucune séquence d'apport de plus de 20 minutes sans activité.`,
        w: "La règle des 20 minutes est le garde-fou le plus simple contre la conception qui dérive en présentation continue.",
      },
      {
        t: 'QCM avec distracteurs crédibles',
        p: `Voici le support : [JOINDRE].

Génère 10 questions à choix multiple : une bonne réponse et trois distracteurs plausibles correspondant à des erreurs réellement commises par des apprenants.

Pour chaque question : l'explication de la bonne réponse ET la raison pour laquelle chaque distracteur est faux.`,
        w: "Des distracteurs tirés d'erreurs réelles font un QCM qui évalue ; des distracteurs absurdes font un QCM que tout le monde réussit.",
      },
      {
        t: 'Adapter un contenu à un niveau débutant',
        p: `Voici le contenu : [COLLER]. Public visé : [PROFIL, SANS PRÉREQUIS SUR LE SUJET].

Réécris-le : phrases courtes, un concept à la fois, un exemple concret par notion, jargon expliqué à sa première apparition.

Ne supprime aucune notion : simplifie la formulation, pas le fond. Signale ce que tu as dû simplifier au risque d'être approximatif.`,
        w: "La distinction entre simplifier la formulation et simplifier le fond est ce qui évite la vulgarisation qui rend faux.",
      },
      {
        t: 'Cas pratique à partir d’une situation réelle',
        p: `Situation professionnelle réelle : [DÉCRIRE, ANONYMISÉE]. Compétence à travailler : [PRÉCISER].

Construis un cas pratique : contexte donné aux apprenants, consigne, matériel fourni, temps alloué, critères de réussite, corrigé avec les variantes acceptables.

Prévois ce que fait le formateur pendant que les apprenants travaillent.`,
        w: "Prévoir l'action du formateur pendant l'exercice évite le temps mort où l'animateur attend en fond de salle.",
      },
      {
        t: 'Évaluation à froid utile',
        p: `Formation : [OBJET ET OBJECTIFS]. Délai depuis la session : [SEMAINES].

Construis un questionnaire d'évaluation à froid : ce qui a été réellement mis en pratique, ce qui a bloqué, ce qui a changé dans le travail quotidien.

Maximum huit questions, dont au moins deux ouvertes. Évite les questions de satisfaction, déjà traitées à chaud.`,
        w: "L'évaluation à froid doit mesurer le transfert, pas la satisfaction : c'est ce qui intéresse le financeur.",
      },
      {
        t: 'Reformuler des objectifs pédagogiques',
        p: `Objectifs actuels : [COLLER].

Reformule-les en capacités observables et évaluables : verbe d'action, objet, condition de réalisation, critère de réussite.

Supprime les verbes non observables (comprendre, connaître, savoir, être sensibilisé). Signale les objectifs qui ne sont pas évaluables en l'état.`,
        w: "Les verbes non observables sont le premier motif de non-conformité relevé lors d'un audit qualité.",
      },
      {
        t: 'Préparer les questions difficiles des apprenants',
        p: `Sujet de la formation : [PRÉCISER]. Public : [PROFIL ET POSITION PROBABLE SUR LE SUJET].

Liste les dix questions ou objections que ce public posera, y compris celles qui contestent l'intérêt de la formation.

Pour chacune : une réponse honnête, et ce qu'il ne faut pas répondre.`,
        w: "Préparer les objections de fond, y compris sur l'utilité de la formation, est ce qui installe la crédibilité du formateur.",
      },
      {
        t: 'Support visuel qui ne se lit pas à voix haute',
        p: `Voici le contenu de la séquence : [COLLER].

Propose la structure des diapositives : une idée par diapositive, un titre qui affirme plutôt qu'il ne catégorise, le contenu visible, ce que le formateur dit en plus.

Aucune diapositive ne doit contenir plus de 25 mots.`,
        w: "Séparer ce qui est projeté de ce qui est dit est ce qui empêche le support de devenir un prompteur.",
      },
    ],
  },
  {
    slug: 'direction',
    label: 'Direction générale',
    hub: null,
    intro: "Arbitrages, préparation de conseils, lecture stratégique : le dirigeant a besoin de synthèse et de contradiction, pas de production de contenu.",
    prompts: [
      {
        t: 'Note d’arbitrage en une page',
        p: `Voici les documents sur ce sujet : [JOINDRE].

Produis une note d'une page : la décision à prendre, les options avec leur coût et leur risque, ce que chaque option engage à trois ans, la recommandation et ce qui la fragilise.

Termine par ce qui se passe si nous ne décidons rien ce trimestre.`,
        w: "Chiffrer l'inaction rend visible le coût du report, qui est la décision par défaut la plus fréquente.",
      },
      {
        t: 'Se faire contredire avant le conseil',
        p: `Voici mon projet : [DESCRIPTION ET HYPOTHÈSES].

Joue le rôle d'un administrateur sceptique et compétent. Pose-moi les cinq questions les plus dérangeantes, celles qui visent les hypothèses que je n'ai pas vérifiées.

Ne me ménage pas. Ne propose pas de solution : pose les questions.`,
        w: "Interdire les solutions garde le modèle dans son rôle de contradicteur au lieu de le laisser rassurer.",
      },
      {
        t: 'Lire un marché sans se raconter d’histoires',
        p: `Voici ce que nous savons du marché : [DONNÉES ET SOURCES]. Voici notre position : [DÉCRIRE].

Analyse en trois parties : ce que les données établissent, ce qu'elles suggèrent, ce que nous supposons sans preuve.

Termine par les trois informations qui manquent et qui changeraient l'analyse si nous les obtenions.`,
        w: "Identifier les informations manquantes qui changeraient la conclusion oriente l'effort de veille vers ce qui compte.",
      },
      {
        t: 'Transformer une stratégie en plan',
        p: `Orientation stratégique : [CITER]. Horizon : [DURÉE]. Moyens disponibles : [PRÉCISER].

Décline-la en plan d'action : jalons trimestriels, responsable par jalon, indicateur de réussite, dépendances entre jalons.

Signale les jalons qui supposent des moyens dont nous ne disposons pas.`,
        w: "Faire remonter les jalons non financés évite le plan qui échoue au deuxième trimestre pour une raison connue dès le départ.",
      },
      {
        t: 'Préparer un comité en dix minutes',
        p: `Voici les documents du comité : [JOINDRE]. Voici mon rôle et mes enjeux : [PRÉCISER].

Prépare-moi : les trois points sur lesquels je dois avoir une position, les questions qui me seront posées, les chiffres que je dois avoir en tête, les sujets où je peux être pris en défaut.

Sois direct.`,
        w: "Demander explicitement où l'on peut être pris en défaut produit la préparation qu'aucune note de synthèse ne fournit.",
      },
      {
        t: 'Évaluer une opportunité rapidement',
        p: `Opportunité : [DESCRIPTION]. Ce que nous savons : [FAITS]. Délai de réponse : [ÉCHÉANCE].

Évalue-la : alignement avec notre stratégie, ce qu'elle mobilise, ce qu'elle nous ferait renoncer à faire, risque principal.

Conclus par continuer, approfondir ou décliner, avec la raison en une phrase.`,
        w: "Nommer le renoncement associé transforme l'évaluation d'opportunité en vrai arbitrage de ressources.",
      },
      {
        t: 'Synthèse de plusieurs rapports contradictoires',
        p: `Voici les rapports : [JOINDRE].

Identifie les points d'accord, les points de désaccord, et pour chaque désaccord, ce qui l'explique (données différentes, périmètre différent, hypothèses différentes, intérêt différent).

Ne tranche pas : montre-moi sur quoi porte réellement le débat.`,
        w: "Expliquer l'origine des désaccords est plus utile que les arbitrer : c'est ce qui permet au dirigeant de trancher lui-même.",
      },
      {
        t: 'Préparer une prise de parole engageante',
        p: `Occasion : [CONTEXTE]. Audience : [PROFIL ET ATTENTES]. Ce que je veux qu'il en reste : [UNE SEULE IDÉE].

Écris l'intervention : ouverture qui installe l'enjeu, développement en trois temps, chute qui engage.

Style oral, phrases courtes. Indique où marquer un silence.`,
        w: "L'idée unique imposée en entrée est ce qui évite le discours qui couvre tout et ne laisse rien.",
      },
    ],
  },
]

/* Les règles de construction enseignées en formation, applicables à tout prompt. */
export const REGLES_PROMPT = [
  { t: 'Donnez un rôle et un contexte', d: "« Tu es contrôleur de gestion dans une PME industrielle » oriente le vocabulaire, le niveau de détail et les réflexes du modèle. Sans rôle, vous obtenez une réponse moyenne écrite pour tout le monde." },
  { t: 'Fournissez la matière réelle', d: "Un prompt sans document produit du générique. Collez vos vrais textes, vos vrais tableaux, vos vrais échanges, anonymisés si nécessaire. C'est le croisement avec votre matière qui crée la valeur." },
  { t: 'Imposez le format de sortie', d: "Tableau, note d'une page, liste avec responsable et échéance : le format décide de l'utilisabilité. Sans consigne, le modèle produit des paragraphes que vous devrez retravailler." },
  { t: 'Posez un garde-fou anti-invention', d: "« Si l'information n'est pas dans le document, écris NON TROUVÉ », « n'invente aucun chiffre », « distingue ce qui est établi de ce qui est supposé ». C'est la consigne qui vous évite de découvrir une erreur en réunion." },
  { t: 'Dites ce que vous ne voulez pas', d: "Interdire explicitement les formules creuses, le jargon ou une structure éculée est souvent plus efficace que de décrire ce que vous voulez. Le modèle connaît ses propres réflexes." },
  { t: 'Itérez au lieu de tout rejeter', d: "Un premier résultat imparfait est une matière à corriger : « garde le plan, réécris le paragraphe 2 plus court », « la partie 3 est trop générale, appuie-la sur le document ». Deux échanges valent mieux qu'un prompt parfait." },
]

/* Erreurs les plus fréquentes constatées en formation. */
export const ERREURS = [
  { t: 'Le prompt d’une ligne', d: "« Fais-moi un post LinkedIn sur l'IA » produit exactement ce que produirait la même demande chez votre concurrent. Sans contexte ni matière, il n'y a rien à personnaliser." },
  { t: 'Coller des données personnelles ou confidentielles', d: "Comptes gratuits grand public, données clients, dossiers RH nominatifs : c'est l'incident qui gèle un projet IA pour un an. Comptes professionnels administrés et anonymisation préalable, sans exception." },
  { t: 'Accepter le premier résultat', d: "Le premier jet est une proposition, pas un livrable. Les utilisateurs qui progressent le plus vite sont ceux qui corrigent en deux ou trois échanges au lieu de relancer un nouveau prompt." },
  { t: 'Croire les chiffres sur parole', d: "Un modèle produit un chiffre plausible avec la même assurance qu'un chiffre exact. Tout élément chiffré qui sortira de votre bureau doit être vérifié à la source." },
]

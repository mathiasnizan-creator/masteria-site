/* Contenu de /formation-ia-medico-social (gabarit MetierPage), créé le 2026-10-22.
 * Page propre dès sa création (pagePropre : voir l'en-tête de src/pages/MetierPage.jsx).
 * Public : ESMS et associations gestionnaires (EHPAD, IME, ESAT, SESSAD, foyers, MECS, SAAD).
 * Usages non cliniques et non décisionnels. Se distingue de /formation-ia-sante (hôpitaux, cliniques)
 * et de /audit-ia-medico-social (audit), vers lesquelles la page renvoie.
 * Faits vérifiés le 2026-10-22 :
 * - HAS, référentiel d'évaluation de la qualité des ESSMS : mis en ligne le 10/03/2022, manuel mis à jour
 *   le 08/07/2025 (critères inchangés) ; 3 chapitres, 42 objectifs, 157 critères ; méthodes accompagné traceur,
 *   traceur ciblé, audit système ; évaluation tous les 5 ans par un organisme accrédité par le Cofrac.
 * - HAS, « Premières clefs d'usage de l'IA générative en santé » : 30/10/2025, mis à jour le 15/04/2026,
 *   destiné aussi au social et au médico-social ; repères A.V.E.C.
 * - CSP art. L1110-4 (partage du strictement nécessaire au sein de l'équipe, y compris social et médico-social) ;
 *   art. L1111-8 (hébergement HDS, données recueillies lors d'un « suivi social et médico-social ») ;
 *   référentiel HDS v2 publié au JO le 16/05/2024, hébergement physique dans l'EEE.
 * - CNR ARS : mesures non pérennes, cahier des charges et calendrier propres à chaque ARS.
 * - OPCO : OPCO Santé (branches sanitaires, sociales et médico-sociales privées) ; branche de l'aide à domicile
 *   (IDCC 2941) : Uniformation. Public hospitalier : ANFH ; territorial : plan de formation, CNFPT.
 * - Outils : Microsoft Copilot (anciennement Microsoft 365 Copilot), Copilot Business jusqu'à 300 utilisateurs,
 *   Copilot Chat ; ChatGPT Business (projets partagés à mémoire limitée au projet, pas d'entraînement par défaut) ;
 *   Claude (claude-facts.js du 19/10) ; Gemini Notebook (anciennement NotebookLM, 16/07/2026) ;
 *   Vibe : projets, bibliothèques, compétences, tâches planifiées (docs.mistral.ai), données hébergées dans l'UE
 *   par défaut (help.mistral.ai, 12/08/2026).
 * Liens inline : {/slug|libellé}. Icônes : noms lucide résolus par MetierPage (ICON_BY_NAME). */
export default {
 "pagePropre": true,
 "base": {
  "metaTitle": "Formation IA médico-social pour les ESMS | Masteria",
  "metaDesc": "Formation IA pour EHPAD, IME, ESAT, foyers et services à domicile : écrits professionnels, FALC, évaluation HAS, CPOM. Financement CNR ARS ou OPCO Santé.",
  "keywords": "formation ia médico-social, formation ia esms, formation ia essms, formation ia ehpad, maturité ia médico-social, intelligence artificielle médico-social, ia écrits professionnels travail social, ia falc, ia évaluation has essms, formation ia ime esat, formation ia association médico-sociale",
  "h1": "Formation IA médico-social : l'IA générative pour les écrits et la qualité des ESMS",
  "h1a": "Formation IA médico-social :",
  "h1b": "l'IA générative pour les écrits et la qualité des ESMS",
  "eyebrow": "Formation secteur · Social et médico-social",
  "badge3": "L'IA n'évalue personne · Données des usagers protégées",
  "geo": "La formation IA médico-social de Masteria s'adresse aux établissements et services sociaux et médico-sociaux : EHPAD, IME, ESAT, SESSAD, foyers, MECS, services d'aide et de soins à domicile, sièges d'associations gestionnaires. En une journée, sur site ou à distance, directions, chefs de service, équipes éducatives et soignantes et référents qualité apprennent à se servir de l'IA générative pour leurs écrits professionnels, les documents en FALC, la préparation de l'évaluation HAS, les réponses aux appels à projets, le rapport d'activité et le CPOM. La journée s'ouvre sur le secret professionnel partagé, les données de santé et l'hébergement HDS : l'outil aide à rédiger, il n'évalue aucune personne accompagnée et ne prend aucune décision. Le financement passe par les crédits non reconductibles de l'ARS, l'OPCO de la branche ou le plan de formation.",
  "sub": "Dans un foyer comme dans un EHPAD, une bonne part de la journée passe dans l'écrit : la transmission laissée à l'équipe de nuit, le compte rendu de synthèse, l'avenant au projet personnalisé, la preuve que l'évaluateur demandera, le dossier envoyé à l'ARS. Ces textes parlent de personnes vulnérables et engagent l'établissement. La journée part donc de ce qui ne quitte jamais le dossier de l'usager, puis travaille sur des cas fictifs ou anonymisés que le groupe construit lui-même. L'outil propose une forme ; l'éducatrice, l'aide-soignant ou le chef de service garde le contenu, la nuance et la signature.",
  "intro": "La formation IA médico-social de Masteria apprend aux professionnels des ESMS et des associations gestionnaires à utiliser l'IA générative pour leurs écrits, leur démarche qualité et leurs dossiers de financement, dans le respect du secret professionnel et des données des personnes accompagnées."
 },
 "enBref": [
  {
   "label": "Durée",
   "value": "Une journée de sept heures, sur place ou en visioconférence ; une seconde journée possible, consacrée aux écrits d'un pôle ou d'un service"
  },
  {
   "label": "Pour qui",
   "value": "Directions générales et d'établissement, chefs de service, cadres de santé, équipes éducatives et soignantes, référents qualité, secrétariats et fonctions support des ESMS et des associations gestionnaires"
  },
  {
   "label": "Périmètre",
   "value": "Écrits professionnels, FALC, évaluation HAS et qualité, appels à projets, rapport d'activité, CPOM. Aucun usage clinique, aucune évaluation d'une personne, aucune décision d'orientation"
  },
  {
   "label": "Outils",
   "value": "Les comptes que la direction et le DPO ont validés : Microsoft Copilot (anciennement Microsoft 365 Copilot) ou Copilot Chat, ChatGPT Business, Claude, Gemini, Vibe (anciennement Le Chat), toujours sur des cas fictifs ou anonymisés"
  },
  {
   "label": "Livrables",
   "value": "Grille de relecture des écrits, trames de transmission et de synthèse, gabarit FALC, règles écrites sur les données des usagers, demandes prêtes à l'emploi par métier"
  },
  {
   "label": "Financement",
   "value": "Crédits non reconductibles de l'ARS, OPCO Santé ou Uniformation selon la convention collective, plan de formation et ANFH dans le public ; devis en HT et en TTC"
  }
 ],
 "missionsHead": {
  "kicker": "Six chantiers, un préalable",
  "h2": "Ce que l'IA générative change dans les écrits et le pilotage d'un ESMS",
  "answer": "L'IA générative rend service partout où l'équipe écrit pour quelqu'un d'autre : la collègue de nuit qui lit une transmission, la famille qui découvre le règlement de fonctionnement, l'évaluateur qui cherche une preuve, l'ARS qui instruit un dossier. Elle met en forme, clarifie et résume. Elle ignore tout de la personne accompagnée, et rien de ce qu'elle produit ne remplace le regard de l'équipe pluridisciplinaire. Le premier chantier, celui des données, conditionne les cinq autres.",
  "foot": "Pour un hôpital ou une clinique, la {/formation-ia-sante|formation IA santé} traite les secrétariats médicaux et la certification sanitaire. Si l'association veut d'abord savoir ce que ses équipes font déjà avec l'IA, l'{/audit-ia-medico-social|audit IA médico-social} dresse cet état des lieux avant toute formation."
 },
 "missions": [
  {
   "icon": "ShieldCheck",
   "title": "Secret partagé et données des personnes accompagnées",
   "desc": "Premier atelier de la journée. Le code de la santé publique autorise les professionnels qui accompagnent une personne à partager ce qui est strictement nécessaire à cet accompagnement ; l'éditeur d'un assistant conversationnel n'appartient pas à cette équipe. Le groupe écrit ce qui peut entrer dans un outil, après quelle anonymisation, et ce qui reste dans le dossier de l'usager."
  },
  {
   "icon": "PenLine",
   "title": "Transmissions, synthèses, projets personnalisés",
   "desc": "Sur des situations inventées par le groupe, l'outil aide à séparer le fait observé de l'interprétation, à structurer un compte rendu de synthèse, à reformuler un objectif avec les mots de la personne. Le professionnel garde le fond et signe. Les écrits réels restent dans le logiciel métier ou dans un environnement que l'établissement a validé."
  },
  {
   "icon": "MessageSquareHeart",
   "title": "FALC et information des familles",
   "desc": "Livret d'accueil, règlement de fonctionnement, compte rendu du conseil de la vie sociale, menu de la semaine : l'outil livre un premier jet en phrases courtes. Des personnes accompagnées le relisent avant toute diffusion, comme le prévoient les règles européennes du facile à lire et à comprendre."
  },
  {
   "icon": "ClipboardCheck",
   "title": "Évaluation HAS et démarche qualité",
   "desc": "Le référentiel d'évaluation des ESSMS compte 157 critères, répartis en trois chapitres. L'outil aide à rapprocher vos procédures des critères, à repérer une preuve absente, à préparer l'entretien de gouvernance et à rédiger le plan d'amélioration. Les constats restent ceux de vos équipes."
  },
  {
   "icon": "FileSignature",
   "title": "Appels à projets, CPOM, rapport d'activité",
   "desc": "Tirer la grille de réponse d'un long cahier des charges, écrire le diagnostic partagé qui ouvre la négociation d'un CPOM, commenter les indicateurs du rapport d'activité à partir de chiffres agrégés. L'outil tient la structure et propose une première version ; la direction garde les arbitrages et les chiffres."
  },
  {
   "icon": "UsersRound",
   "title": "Vie institutionnelle et coordination",
   "desc": "Note de service, ordre du jour d'une réunion d'équipe, courrier à un partenaire, préparation d'un rendez-vous avec le conseil départemental : les écrits de l'encadrement se préparent plus vite, dans le ton de la maison, et aucun nom de personne accompagnée n'y figure."
  }
 ],
 "atoutsHead": {
  "kicker": "Pour les équipes et la direction",
  "h2": "Six bénéfices attendus dans un établissement ou un service",
  "answer": "Moins de temps passé à mettre en forme, des transmissions plus factuelles, des documents que les personnes accompagnées lisent seules, une évaluation préparée au long de l'année, des dossiers de financement construits avec méthode et des règles de données que chaque nouvel arrivant comprend dès sa première semaine.",
  "foot": "Un modèle de langage invente dès que la source lui manque, et il peut prêter à une personne des propos qu'elle n'a jamais tenus. Trois réflexes limitent ce risque : travailler à partir du document source, demander à l'outil d'où vient chaque affirmation, faire relire par le professionnel qui connaît la situation. Un document FALC passe aussi entre les mains des lecteurs à qui il s'adresse."
 },
 "atouts": [
  {
   "title": "Du temps d'écriture rendu au terrain",
   "desc": "La première version d'un compte rendu ou d'une note de service arrive vite, dans le gabarit de l'établissement. Les minutes gagnées retournent à l'accompagnement, là où elles comptent."
  },
  {
   "title": "Des écrits plus factuels",
   "desc": "Appliquée par l'outil, la grille de relecture signale le jugement glissé dans une transmission, le mot qui stigmatise, le détail identifiant inutile. L'écrit respecte mieux la personne et vaut davantage comme preuve."
  },
  {
   "title": "Des documents que les personnes lisent",
   "desc": "Règlement de fonctionnement, livret d'accueil, compte rendu du CVS : passés en FALC puis validés par leurs lecteurs, ils donnent aux personnes accompagnées un accès direct à l'information qui les concerne."
  },
  {
   "title": "Une évaluation préparée au fil de l'année",
   "desc": "Procédures rapprochées des critères, preuves classées, plan d'amélioration tenu à jour : la visite des évaluateurs arrive sur un dossier construit mois après mois."
  },
  {
   "title": "Des dossiers de financement mieux bâtis",
   "desc": "Appel à projets, diagnostic partagé du CPOM, rapport d'activité : la direction part d'une structure solide et d'une première version, puis consacre son temps aux choix et aux chiffres."
  },
  {
   "title": "Un cadre qui survit à la rotation des équipes",
   "desc": "Règles écrites, grille partagée, module court pour les nouveaux arrivants : le bon usage de l'IA reste en place quand les remplaçants et les nouveaux salariés arrivent."
  }
 ],
 "programmeHead": {
  "h2": "Une journée de formation IA en ESMS : les règles le matin, les écrits du secteur l'après-midi",
  "answer": "Le matin pose les règles et la méthode : ce que l'outil fait et ce qui lui reste interdit dans un établissement, un atelier sur le secret partagé et les données de santé, les comptes que l'association autorise, une demande bien construite sur un écrit courant, un atelier de transmissions sur cas fictifs, puis un espace de travail pour la qualité. L'après-midi passe aux écrits du secteur (projet personnalisé et synthèse, FALC, évaluation HAS et dossiers de financement), puis aux compétences (Skills) et assistants, aux tâches planifiées sans donnée nominative, à la gouvernance et aux engagements de chacun, avant l'évaluation des acquis.",
  "foot": "Le cadrage règle les dosages : un EHPAD insiste sur les transmissions et l'information des familles, un IME ou un ESAT sur le FALC et le projet personnalisé, un siège associatif sur le CPOM et les appels à projets. Sur demande, une seconde journée reprend les ateliers avancés pôle par pôle. Les fonctions citées ont été vérifiées en octobre 2026 ; si l'une d'elles n'est pas activée sur vos comptes le jour de la session, le formateur la montre sur les siens, puis le groupe la transpose dans ses projets partagés et ses instructions personnalisées."
 },
 "programme": [
  {
   "jour": "Jour 1",
   "titre": "Protéger les personnes, puis outiller les écrits",
   "matin": [
    {
     "t": "Ce que l'outil fait, ce qui lui reste interdit",
     "d": "Un modèle de langage reformule, résume, structure et simplifie un texte ; il invente dès que la source manque et ignore tout de la personne. La journée écarte ce qui évalue ou oriente : coter une grille d'autonomie, proposer une orientation, classer des situations par priorité. Ces gestes engagent une personne vulnérable et restent à l'équipe."
    },
    {
     "t": "Atelier : secret partagé, données de santé, HDS",
     "d": "L'article L1110-4 du code de la santé publique borne le partage entre professionnels à ce qui sert l'accompagnement ; l'article L1111-8 exige un hébergeur certifié HDS pour les données recueillies lors d'un suivi social ou médico-social. Le groupe en tire ses règles : anonymiser, n'ouvrir que les comptes validés, tenir la liste des documents qui ne sortent jamais."
    },
    {
     "t": "Les comptes validés par l'association",
     "d": "Microsoft Copilot ou Copilot Chat pour les structures équipées de Microsoft 365, ChatGPT Business, Claude Team, Gemini dans Workspace, Vibe de Mistral : pour chacun, le lieu où partent les données, ce que l'éditeur s'interdit d'en faire, ce que l'offre ne couvre pas. Les comptes gratuits et personnels sont écartés pour tout écrit professionnel."
    },
    {
     "t": "Une demande bien posée sur une note de service",
     "d": "Le destinataire, l'objectif, le ton, une note de la maison en exemple, deux reprises puis une relecture : la méthode s'essaie sur une note de service et sur l'ordre du jour d'une réunion d'équipe. Chacun range ensuite ses consignes de style et ses gabarits dans les instructions personnalisées de son compte."
    },
    {
     "t": "Atelier transmissions sur cas fictifs",
     "d": "À partir d'une situation inventée par le groupe, l'outil réécrit une transmission selon la trame données, actions, résultats et signale chaque interprétation mêlée aux faits observés. L'exercice entraîne le regard ; une transmission réelle s'écrit dans le dossier de l'usager, avec les outils que l'établissement y a intégrés."
    },
    {
     "t": "Un espace partagé pour la qualité",
     "d": "Référentiel de la HAS, procédures, trames de projet personnalisé et comptes rendus du CVS rejoignent un espace commun aux droits réglés, selon l'outil validé : bloc-notes Copilot, carnet Gemini Notebook (anciennement NotebookLM), projet Vibe, projet partagé de ChatGPT Business ou de Claude. Aucun dossier d'usager n'y entre."
    }
   ],
   "apresmidi": [
    {
     "t": "Atelier projet personnalisé et synthèse",
     "d": "Sur des notes d'équipe rendues anonymes, l'outil structure le compte rendu de synthèse et propose une version du projet que la personne peut lire. Il ne suggère aucun objectif : ceux-ci viennent de la personne et de l'équipe pluridisciplinaire, et le référent du projet relit chaque phrase avant la signature."
    },
    {
     "t": "Atelier FALC",
     "d": "Le livret d'accueil ou le règlement de fonctionnement passe en facile à lire et à comprendre : phrases courtes, une idée par phrase, mots du quotidien. L'outil fournit le premier jet, l'équipe choisit les illustrations, et un groupe de personnes accompagnées valide le texte avant l'impression."
    },
    {
     "t": "Atelier évaluation HAS et dossiers de financement",
     "d": "Rapprocher les procédures des critères du référentiel, préparer l'entretien de l'audit système, bâtir la grille de réponse à un appel à projets, commenter les indicateurs agrégés du rapport d'activité. Copilot dans Excel ou l'analyse de données de ChatGPT et de Claude lisent un export sans nom ; la direction garde les chiffres et les choix."
    },
    {
     "t": "Compétences (Skills) et assistants",
     "d": "La grille de relecture des écrits (faits séparés des interprétations, vocabulaire respectueux, aucun détail identifiant) devient une compétence que Claude, ChatGPT ou Vibe appliquent à chaque texte. Vient ensuite Agent Builder, qui crée dans Copilot un assistant appuyé sur les procédures rangées dans SharePoint, et la frontière avec un projet Copilot Studio."
    },
    {
     "t": "Tâches planifiées sans donnée nominative",
     "d": "Suivre chaque semaine ce que publient la HAS, la CNSA et votre ARS, le rappel des échéances du CPOM ou la trame du compte rendu mensuel se programment en une phrase dans ChatGPT ou dans Vibe ; un membre de l'équipe relit chaque envoi, et aucune tâche ne manipule une information sur un usager."
    },
    {
     "t": "Gouvernance, engagements, évaluation des acquis",
     "d": "Chaque espace, compétence et assistant reçoit un responsable ; un registre suit les usages, revus chaque trimestre avec le DPO, et un module court accueille les nouveaux arrivants. Chacun choisit deux usages qu'il mettra en place dans les quatre semaines ; après le contrôle des acquis, le groupe reçoit les trames, la grille et les règles écrites."
    }
   ]
  }
 ],
 "profilsHead": {
  "h2": "Pour qui, dans un établissement ou un service social et médico-social ?",
  "answer": "Pour celles et ceux qui écrivent dans un ESMS : directions et sièges d'associations, chefs de service et cadres, éducateurs, moniteurs d'atelier, aides-soignants et infirmiers, référents qualité, secrétariats et fonctions support. Un groupe mêle souvent plusieurs métiers, et la règle des données gagne à se construire entre eux. Aucun prérequis technique n'est demandé."
 },
 "profils": [
  {
   "icon": "Building2",
   "title": "Directions et sièges d'associations",
   "desc": "Vous choisissez les outils avec le DPO, portez le CPOM et répondez aux appels à projets. La journée vous donne des règles présentables au conseil d'administration, et une méthode pour les écrits longs de la direction."
  },
  {
   "icon": "ClipboardCheck",
   "title": "Chefs de service et référents qualité",
   "desc": "Évaluation, procédures, plan d'amélioration, réunions d'équipe : vous repartez avec un espace qualité partagé et une grille de relecture que tout le service peut appliquer."
  },
  {
   "icon": "HeartPulse",
   "title": "Équipes éducatives et soignantes",
   "desc": "Transmissions, synthèses, projets personnalisés, documents FALC : la journée entraîne l'écriture factuelle sur des cas fictifs et rappelle, atelier après atelier, ce qui ne quitte jamais le dossier de l'usager."
  },
  {
   "icon": "Mail",
   "title": "Secrétariats et fonctions support",
   "desc": "Courriers aux familles sans élément de santé, notes, convocations aux instances, tableaux du rapport d'activité : la part administrative de l'établissement avance plus vite, sur les comptes que la direction a validés."
  }
 ],
 "cadre": {
  "kicker": "Avant le premier prompt",
  "h2": "Secret partagé, données de santé, HDS : le cadre posé avant tout usage",
  "p": "Les écrits d'un ESMS parlent de personnes âgées, d'enfants confiés à la protection de l'enfance, d'adultes en situation de handicap. Le RGPD range leurs informations de santé parmi les catégories particulières (article 9). Le code de la santé publique réserve le partage de ces informations aux professionnels qui accompagnent la personne, pour le seul strictement nécessaire (article L1110-4), et confie leur hébergement, dès qu'elles sont recueillies lors d'un suivi social ou médico-social, à un prestataire certifié HDS (article L1111-8) ; le référentiel de certification paru au Journal officiel le 16 mai 2024 impose un stockage dans l'Espace économique européen. Le groupe traduit ces textes en gestes : retirer nom, date de naissance, lieu et détail reconnaissable avant tout usage, n'ouvrir que les comptes validés par la direction et le DPO, laisser dans le logiciel métier ce qui concerne une personne identifiable. Le guide que la HAS consacre à l'IA générative, paru le 30 octobre 2025 et actualisé le 15 avril 2026, vise aussi le social et le médico-social ; ses quatre repères (apprendre, vérifier, estimer, communiquer) guident la journée, et les règles obtenues alimentent la {/charte-ia-entreprise|charte IA de l'association}.",
  "points": [
   "Aucune information identifiante sur une personne accompagnée hors d'un environnement autorisé",
   "L'IA n'évalue pas une personne, ne l'oriente pas et ne décide de rien",
   "Le professionnel qui signe un écrit en relit chaque phrase",
   "Un document FALC est validé par les personnes à qui il s'adresse"
  ]
 },
 "tarif": {
  "titre": "Prix de la journée et financements du secteur social et médico-social",
  "answer": "Pour un groupe d'au plus 12 professionnels réunis en intra, la journée est facturée dès 1 980 € HT (2 376 € TTC), et le parcours avec la seconde journée dès 3 960 € HT (4 752 € TTC). Le temps de préparation sur vos trames, vos procédures et vos comptes s'ajoute au devis. Les deux montants y figurent, parce que la plupart des associations gestionnaires ne récupèrent pas la TVA.",
  "inclus": "La journée sur site ou en visioconférence, les supports, les livrables (grille de relecture, trames, gabarit FALC, règles écrites sur les données), un quiz final et un certificat de réalisation nominatif. Le déplacement du formateur, s'il y en a un, apparaît sur le devis.",
  "financement": "Pour une structure tarifée par l'ARS, les crédits non reconductibles, souvent attribués en fin d'exercice, peuvent couvrir une action ponctuelle : votre délégation départementale dit si la formation entre dans son cahier des charges, et le devis en TTC rejoint le dossier. Côté OPCO, la convention collective désigne l'opérateur : l'OPCO Santé pour la plupart des associations du secteur, Uniformation pour l'aide à domicile associative ; {/quel-opco|Quel OPCO ?} le confirme, puis l'opérateur décide selon ses règles et son budget, Masteria étant certifié Qualiopi. Un établissement public hospitalier passe par son plan de formation et l'ANFH, un CCAS par le plan de la collectivité, le CNFPT restant l'offre de base des agents territoriaux. Le CPF ne s'applique pas à cette formation sur mesure ; le reste des dispositifs est détaillé sur {/financement-formation-ia|notre page financement}."
 },
 "faq": [
  {
   "q": "Que contient une formation IA pour le médico-social ?",
   "a": "Une journée sur les usages de l'IA générative qui comptent dans un ESMS : écrits professionnels (transmissions, comptes rendus de synthèse, projets personnalisés), documents en FALC, préparation de l'évaluation HAS, réponses aux appels à projets, rapport d'activité et CPOM. Elle commence par le secret partagé, les données de santé et l'hébergement HDS, et chaque atelier se fait sur des cas fictifs ou anonymisés. Rien n'y porte sur le soin, l'évaluation d'une personne ou une décision d'orientation."
  },
  {
   "q": "En quoi cette formation diffère-t-elle de la formation IA santé ?",
   "a": "La {/formation-ia-sante|formation IA santé} vise les hôpitaux, cliniques et maisons de santé : secrétariats médicaux, certification des établissements de santé, coordination avec la ville. Celle-ci part des écrits propres aux ESMS (projet personnalisé, transmissions éducatives, CVS, évaluation selon le référentiel de 2022, CPOM) et des personnes qu'ils accompagnent, souvent mineures ou vulnérables. Les financeurs diffèrent aussi : crédits de l'ARS, OPCO Santé ou Uniformation."
  },
  {
   "q": "Peut-on rédiger une transmission ou un projet personnalisé avec ChatGPT ?",
   "a": "Pas avec un compte gratuit ni avec des informations qui permettent de reconnaître la personne. Une information de santé recueillie lors d'un accompagnement médico-social exige un hébergeur certifié HDS, et le partage reste limité à l'équipe qui accompagne. En formation, on s'entraîne sur des situations inventées ; dans l'établissement, ces écrits restent dans le dossier de l'usager ou dans un environnement que la direction et le DPO ont validé, et le professionnel relit avant de signer."
  },
  {
   "q": "L'IA peut-elle aider à préparer l'évaluation HAS d'un ESMS ?",
   "a": "Oui, sur les documents de l'établissement. Le référentiel publié le 10 mars 2022, dont le manuel a été actualisé le 8 juillet 2025 sans changer les critères, compte 42 objectifs et 157 critères ; l'évaluation revient tous les cinq ans, menée par un organisme accrédité par le Cofrac. L'outil aide à classer les preuves, à rapprocher une procédure d'un critère, à rédiger le plan d'amélioration. Il ne prépare pas les réponses des personnes interrogées lors de l'accompagné traceur."
  },
  {
   "q": "Comment écrire un document FALC avec l'IA ?",
   "a": "En donnant à l'outil le texte d'origine, les règles du facile à lire et à comprendre (phrases courtes, une idée par phrase, mots courants, pas d'abréviation) et le profil des lecteurs. Il produit une première version que l'équipe corrige. La validation revient ensuite à des personnes accompagnées, qui relisent avant diffusion : les règles européennes en font la condition pour apposer le logo du FALC."
  },
  {
   "q": "Quels usages de l'IA sont exclus dans un ESMS ?",
   "a": "Tout ce qui juge ou trie une personne : coter une grille d'autonomie, proposer une orientation, classer des situations par urgence, choisir des objectifs à la place de la personne. Le règlement européen sur l'IA range à haut risque certains systèmes qui évaluent l'accès d'une personne à des prestations sociales essentielles et les outils qui trient des candidatures, et ces obligations prennent effet le 2 décembre 2027. Aucun atelier de la journée n'y touche, et vos règles écrites le diront."
  },
  {
   "q": "Comment mesurer la maturité IA d'un établissement médico-social ?",
   "a": "Trois questions suffisent pour commencer : qui utilise déjà l'IA et sur quel compte, quelles données y entrent, quelles règles existent par écrit. Notre {/test-maturite-ia|test de maturité IA} situe la structure en quelques minutes. Pour une association de plusieurs établissements, l'{/audit-ia-medico-social|audit IA médico-social} va plus loin, service par service, et le {/blog/ia-medico-social-par-ou-commencer|guide pour commencer avec l'IA dans le médico-social} détaille la démarche."
  },
  {
   "q": "Les crédits non reconductibles de l'ARS peuvent-ils financer la formation ?",
   "a": "Ils financent des mesures ponctuelles, selon un cahier des charges et un calendrier que fixe chaque ARS ; certaines recensent les demandes dès l'été, et les crédits arrivent souvent en fin d'exercice. Une formation des équipes peut y entrer si votre agence l'accepte. Nous fournissons un devis en HT et en TTC, daté, avec une validité qui couvre l'instruction, et le programme dans la forme attendue."
  },
  {
   "q": "Un EHPAD public ou un CCAS se finance-t-il comme une association ?",
   "a": "Non. Un établissement public relevant de la fonction publique hospitalière passe par son plan de formation et peut solliciter l'ANFH. Un CCAS ou un établissement rattaché à une collectivité finance la formation sur son plan, par bon de commande ; le CNFPT reste l'offre de base des agents territoriaux. Dans les deux cas, aucun OPCO n'intervient, et le devis affiche le TTC."
  },
  {
   "q": "Faut-il avoir choisi un outil avant la journée ?",
   "a": "Non. Si l'association utilise Microsoft 365, Copilot Chat s'ouvre déjà avec les comptes professionnels ; sous Google Workspace, Gemini fait partie des offres Business et Enterprise. Le cadrage part de ce que vous avez, et la journée montre comment comparer les offres sur le critère qui compte dans le secteur : le sort des données. Les comptes gratuits restent exclus des écrits professionnels."
  }
 ],
 "course": {
  "name": "Formation IA médico-social (Masteria)",
  "description": "Formation à l'IA générative pour les établissements et services sociaux et médico-sociaux et les associations gestionnaires : écrits professionnels (transmissions, synthèses, projets personnalisés), documents en FALC, préparation de l'évaluation HAS, appels à projets, rapport d'activité et CPOM, sous le régime du secret professionnel partagé, des données de santé et de l'hébergement HDS. Usages non cliniques et non décisionnels. Outils : Microsoft Copilot, ChatGPT, Claude, Gemini, Vibe. Sept heures en intra, une seconde journée possible. Organisme certifié Qualiopi ; financement par crédits non reconductibles de l'ARS, OPCO ou plan de formation.",
  "level": "Tous niveaux",
  "teaches": [
   "Appliquer le secret partagé, les règles des données de santé et l'hébergement HDS à l'usage de l'IA dans un ESMS",
   "Écrire une transmission factuelle et un compte rendu de synthèse sur un cas anonymisé",
   "Produire un document en FALC et organiser sa validation par les personnes accompagnées",
   "Préparer les preuves et le plan d'amélioration de l'évaluation HAS des ESSMS",
   "Structurer une réponse à un appel à projets ou le diagnostic partagé d'un CPOM"
  ],
  "about": "Intelligence artificielle générative appliquée aux écrits et à la qualité du secteur social et médico-social",
  "timeRequired": "PT7H",
  "duration": "PT7H",
  "prerequisites": "Aucun prérequis technique. Exercer dans un établissement ou un service social ou médico-social, ou au siège d'une association gestionnaire.",
  "audience": "Directions, chefs de service, équipes éducatives et soignantes, référents qualité, secrétariats et fonctions support des ESMS",
  "locationName": "Masteria, en intra dans l'établissement, en France ou ailleurs, ou en classe virtuelle"
 },
 "article": {
  "headline": "Formation IA médico-social : l'IA générative pour les écrits et la qualité des ESMS",
  "datePublished": "2026-10-22",
  "dateModified": "2026-10-22",
  "dateLabel": "octobre 2026",
  "about": [
   {
    "@type": "Thing",
    "name": "Secteur médico-social",
    "sameAs": "https://fr.wikipedia.org/wiki/Secteur_m%C3%A9dico-social"
   },
   {
    "@type": "Thing",
    "name": "Facile à lire et à comprendre",
    "sameAs": "https://fr.wikipedia.org/wiki/Facile_%C3%A0_lire_et_%C3%A0_comprendre"
   },
   {
    "@type": "Thing",
    "name": "Établissement d'hébergement pour personnes âgées dépendantes",
    "sameAs": "https://fr.wikipedia.org/wiki/%C3%89tablissement_d%27h%C3%A9bergement_pour_personnes_%C3%A2g%C3%A9es_d%C3%A9pendantes"
   }
  ]
 },
 "citations": [
  {
   "name": "HAS : référentiel et manuel d'évaluation de la qualité des ESSMS (mars 2022, manuel actualisé en juillet 2025)",
   "url": "https://www.has-sante.fr/jcms/p_3324490/fr/referentiel-d-evaluation-de-la-qualite-des-etablissements-et-services-sociaux-et-medico-sociaux"
  },
  {
   "name": "Guide HAS sur l'IA générative à l'usage des équipes sanitaires, sociales et médico-sociales (octobre 2025, actualisé en avril 2026)",
   "url": "https://has-sante.fr/jcms/p_3703115/fr/premieres-clefs-d-usage-de-l-ia-generative-en-sante"
  },
  {
   "name": "Agence du numérique en santé : certification HDS des hébergeurs",
   "url": "https://esante.gouv.fr/produits-services/hds"
  }
 ],
 "maillage": [
  {
   "label": "Formation IA santé (hôpitaux, cliniques)",
   "href": "/formation-ia-sante",
   "tag": "Secteur voisin"
  },
  {
   "label": "Audit IA médico-social",
   "href": "/audit-ia-medico-social",
   "tag": "Audit"
  },
  {
   "label": "Guide de l'IA générative en ESMS",
   "href": "/blog/ia-medico-social-par-ou-commencer",
   "tag": "Guide"
  },
  {
   "label": "Test de maturité IA",
   "href": "/test-maturite-ia",
   "tag": "Outil gratuit"
  },
  {
   "label": "Formation IA QSE",
   "href": "/formation-ia-qse",
   "tag": "Qualité"
  },
  {
   "label": "Formation IA management",
   "href": "/formation-ia-management",
   "tag": "Encadrement"
  },
  {
   "label": "IA et RGPD",
   "href": "/ia-et-rgpd",
   "tag": "Cadre"
  },
  {
   "label": "Charte IA d'entreprise",
   "href": "/charte-ia-entreprise",
   "tag": "Cadre"
  }
 ],
 "bibliotheque": "Avant la journée, un chef de service peut essayer la {/bibliotheque-de-prompts#management|rubrique management de la bibliothèque de prompts} : un compte rendu de réunion qui fait ressortir les actions sans responsable, la préparation d'un entretien délicat à partir de faits datés. Elles se testent sur des notes où ne figure aucune personne accompagnée, et chaque demande est suivie d'une courte note sur sa construction.",
 "ctaMilieu": {
  "titre": "Une date posée selon votre évaluation ou votre CPOM",
  "texte": "Indiquez le type d'établissement, les métiers du groupe et les comptes déjà validés : le programme ajusté, les règles de données et le devis en HT et en TTC vous arrivent le lendemain."
 },
 "competences": {
  "titre": "Ce que chaque participant sait faire en fin de journée",
  "intro": "Six objectifs, chacun contrôlé par une question de l'évaluation finale.",
  "items": [
   "Reconnaître une information identifiante sur une personne accompagnée et la retirer avant tout usage",
   "Réécrire une transmission en séparant les faits observés des interprétations",
   "Structurer un compte rendu de synthèse à partir de notes d'équipe anonymisées",
   "Produire un premier jet en FALC et organiser sa relecture par les lecteurs concernés",
   "Rapprocher une procédure d'un critère du référentiel d'évaluation des ESSMS",
   "Choisir, pour chaque écrit, le compte validé qui convient ou y renoncer"
  ]
 },
 "choisirOutil": {
  "titre": "Copilot, ChatGPT, Claude, Gemini ou Vibe dans un ESMS",
  "intro": "Dans le médico-social, le choix part du compte et du lieu d'hébergement ; l'outil vient ensuite. Ce que chacun apporte aux écrits du secteur, relevé le 22 octobre 2026 :",
  "lignes": [
   {
    "outil": "copilot",
    "texte": "Sous Microsoft 365, Copilot Chat s'ouvre avec le compte professionnel et applique la protection des données d'entreprise. La licence Microsoft Copilot, déclinée en Microsoft Copilot Business pour les structures qui comptent jusqu'à 300 utilisateurs, l'installe dans Word, Outlook et Teams ; Agent Builder bâtit un assistant sur les procédures rangées dans SharePoint. {/formation-microsoft-copilot|Formation Copilot}"
   },
   {
    "outil": "chatgpt",
    "texte": "ChatGPT Business n'utilise pas par défaut les échanges de l'organisation pour entraîner ses modèles. Un projet partagé réunit les trames d'un service, avec une mémoire limitée à ce projet. Le stockage en Europe arrive par étapes sur cette offre : votre DPO tranche avant tout usage. {/formation-chatgpt|Formation ChatGPT}"
   },
   {
    "outil": "claude",
    "texte": "Claude accepte des documents longs, comme le manuel d'évaluation ou le cahier des charges d'un appel à projets, et ses compétences (Skills) rangent une grille de relecture réutilisable. Les offres Team et Enterprise excluent d'office vos échanges de l'entraînement. Faute de région européenne dans les applications d'Anthropic, un DPO qui exige l'Europe fait passer Claude par AWS Bedrock ou Vertex AI. {/formation-claude-ia|Formation Claude}"
   },
   {
    "outil": "gemini",
    "texte": "Avec un compte Google Workspace, Gemini rédige dans Gmail et dans Docs, et Gemini Notebook interroge vos procédures en renvoyant au passage exact qui fonde sa réponse. Google s'engage à ne pas employer les contenus Workspace pour entraîner ses modèles hors de votre organisation, et à ne pas les faire lire par un humain. {/formation-gemini-entreprise|Formation Gemini}"
   },
   {
    "outil": "mistral",
    "label": "Vibe (Mistral)",
    "texte": "Chez Mistral, les données des clients restent par défaut dans l'Union européenne ; certaines fonctions peuvent les faire transiter un temps hors de l'Union. Dans Vibe, les projets et les bibliothèques de documents accueillent les trames d'un service, et les tâches planifiées prennent en charge une veille récurrente. {/formation-mistral-ai|Formation Vibe}"
   }
  ]
 },
 "equipe": {
  "titre": "Qui anime la journée",
  "texte": "Mathias Nizan, fondateur de Masteria, construit chaque session à partir des trames et des procédures de l'établissement. Selon les métiers présents dans le groupe, il anime la session ou désigne pour l'animer un formateur indépendant expérimenté de son réseau. Le formateur ne reçoit aucune information sur une personne accompagnée : les situations travaillées sont inventées avec l'équipe ou rendues anonymes avant la session, et les documents de l'établissement ne servent qu'aux exercices prévus au cadrage."
 },
 "apres": {
  "titre": "Après la formation, passer à l'échelle de l'association",
  "texte": "Une journée outille un groupe. Pour une association de plusieurs établissements, l'{/audit-ia-medico-social|audit IA médico-social} fait l'inventaire des usages, des comptes et des données, puis remet des règles d'usage et un programme de formation propre à chaque métier. D'autres structures veulent un assistant qui réponde aux équipes sur leurs procédures, hébergé dans un environnement que le DPO accepte : Masteria le cadre et le construit. Ces deux prestations relèvent du conseil et du développement, hors financement par un OPCO."
 },
 "faqTitre": "Formation IA médico-social : les questions des ESMS et des associations",
 "cta": {
  "h2": "Formons vos équipes à l'IA générative, dans le respect des personnes accompagnées",
  "p": "Décrivez votre structure (EHPAD, IME, ESAT, foyer, MECS, service à domicile, siège), les métiers concernés, les comptes validés et votre financeur pressenti. Le programme ajusté, les règles de données et le devis en HT et en TTC vous parviennent sous 24 heures."
 }
}

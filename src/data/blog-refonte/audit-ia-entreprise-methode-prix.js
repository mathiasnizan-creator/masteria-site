// Article réécrit le 07/10/2026 : guide de l'audit IA (types de mission, ce que la loi impose,
// normes, prix, cas où l'audit ne sert à rien). Même plan et mêmes faits que la version du
// 03/09/2026 ; passages repris par les pages /audit-ia et /audit-conformite-ai-act reformulés,
// calendrier AI Act mis à jour (fiche de faits du 07/10/2026 : article 4 réécrit applicable
// depuis le 27/07/2026, article 50 et marquage au 02/12/2026, interdiction ajoutée au 02/12/2026),
// report du haut risque corrigé (seize mois pour l'annexe III, et non dix-huit).
// Remplace les champs correspondants de blog-articles.js.

export default {
  slug: 'audit-ia-entreprise-methode-prix',
  dateModified: '2026-10-07',
  blocks: [
    { type: 'p', text: "Depuis que le règlement européen sur l'IA est entré dans les comités de direction, les offres d'audit IA se multiplient. Une partie d'entre elles vend un questionnaire de conformité assorti d'une certification qui n'existe pas encore. Trois questions suffisent à faire le tri : de quel audit parle-t-on, sur quel référentiel s'appuie-t-il, et qui délivre quoi à la fin." },
    { type: 'p', text: "Ce guide vous aide à comprendre ce qu'on vous propose. Pour faire conduire la mission, notre page <a href='/audit-ia'>audit IA</a> présente ce que Masteria examine, la façon de travailler, le rapport remis et les repères de prix." },

    { type: 'h2', text: "« Audit IA » ne veut rien dire tant qu'on n'a pas dit lequel" },
    { type: 'p', text: "Sous ce nom circulent trois missions. Chacune a son objet, ses profils d'intervenants et son livrable. Si le prestataire ne vous demande pas laquelle vous attendez, il y a de bonnes chances qu'il vous vende celle qu'il sait faire." },
    {
      type: 'table',
      headers: ['Mission', "Ce qu'elle cherche à savoir", 'Ce que vous recevez'],
      rows: [
        ["Audit de maturité et d'opportunité", "Quelles tâches confier à l'IA, avec quel gain, et par lesquelles commencer", "Une carte des processus, les cas d'usage classés par intérêt, un plan d'action chiffré"],
        ['Audit de conformité', "Vos usages respectent-ils le RGPD et l'AI Act", "La liste des systèmes en service, le niveau de risque de chacun, les écarts et un plan de correction daté"],
        ['Audit algorithmique', "Un modèle donné produit-il des résultats fiables et équitables", "Des mesures de performance, des tests de biais, une analyse d'explicabilité, la documentation technique"],
      ],
    },
    { type: 'p', text: "Le mot sert aussi à un quatrième exercice, sans rapport avec celui-ci : vérifier si ChatGPT ou Perplexity citent votre marque quand on les interroge sur votre métier. On parle alors d'audit GEO, traité sur notre page <a href='/audit-geo-ia'>audit GEO IA</a>." },
    { type: 'p', text: "La confusion coûte cher. Une direction qui achète un audit de conformité en espérant une feuille de route d'automatisation reçoit un rapport de risques juridiques sans un seul cas d'usage. L'inverse arrive tout autant." },

    { type: 'h2', text: "Ce que la loi impose réellement, et ce qu'elle n'impose pas" },
    { type: 'p', text: "Sur ce point, le marché entretient le plus grand flou. Mieux vaut le poser avec le texte sous les yeux." },
    { type: 'p', text: "Tout part du règlement (UE) 2024/1689, que tout le monde appelle AI Act. L'Omnibus numérique, règlement (UE) 2026/1744 signé le 8 juillet 2026 et paru au Journal officiel le 24 juillet, en a déplacé les échéances du haut risque. Les systèmes autonomes listés à l'annexe III (recrutement, éducation, crédit, entre autres) devront être en règle le 2 décembre 2027. Ceux qui sont intégrés à un produit déjà réglementé, visés par l'annexe I, ont jusqu'au 2 août 2028. Ces deux dates sont écrites dans le règlement." },
    { type: 'p', text: "Au 7 octobre 2026, quatre séries d'obligations sont déjà en vigueur." },
    {
      type: 'ul',
      items: [
        "L'article 5 dresse la liste des pratiques interdites, comme la notation sociale ou la manipulation des comportements. Il est en vigueur depuis le 2 février 2025 ; une interdiction supplémentaire, qui vise les outils fabriquant des images intimes sans consentement, entre en application le 2 décembre 2026.",
        "L'article 4 demande de former les personnes qui utilisent l'IA, depuis le 2 février 2025 également. Sa nouvelle rédaction, applicable depuis le 27 juillet 2026, en fait une obligation de moyens : l'entreprise agit pour faire progresser la maîtrise de l'IA dans ses équipes, sans avoir à garantir un niveau par personne.",
        "Les fournisseurs de modèles à usage général, ceux d'OpenAI, de Google ou de Mistral par exemple, ont leurs propres règles depuis le 2 août 2025.",
        "L'article 50, sur la transparence, est entré en application le 2 août 2026. Un chatbot doit se présenter comme tel et un contenu généré diffusé au public doit être signalé ; pour les systèmes déjà sur le marché avant cette date, le marquage lisible par machine est attendu au 2 décembre 2026.",
      ],
    },
    {
      type: 'callout',
      title: "La plupart des systèmes à haut risque se passent d'auditeur externe",
      text: "Les points 2 à 8 de l'annexe III couvrent l'emploi et les ressources humaines, l'éducation, les infrastructures critiques, l'accès aux services essentiels, le crédit, l'assurance et la justice. Pour eux, l'article 43 renvoie à l'annexe VI, une procédure de contrôle interne : selon la Commission européenne, aucun organisme notifié n'y intervient. C'est l'entreprise qui vérifie sa propre conformité, et elle garde la trace écrite de cette vérification.",
    },
    { type: 'p', text: "Le contraste avec d'autres textes éclaire ce choix. Le règlement sur les services numériques impose bien un audit externe annuel, mais aux seules plateformes que le texte qualifie de « très grandes plateformes en ligne », une poignée d'acteurs. Aux États-Unis, la loi locale 144 de la ville de New York impose un audit de biais aux employeurs qui utilisent des outils automatisés de recrutement, applicable depuis le 5 juillet 2023. Le règlement européen a retenu une autre logique pour la majorité des cas." },
    { type: 'p', text: "Autre conséquence pratique : la présomption de conformité prévue à l'article 40 suppose des normes harmonisées citées au Journal officiel de l'Union. À l'été 2026, aucune ne l'était encore pour le règlement IA, et le comité technique européen qui les rédige, le JTC 21 du CEN-CENELEC créé en juin 2021, poursuit ses travaux. Une offre de conformité « certifiée » au règlement IA promet donc un label que personne ne sait délivrer aujourd'hui." },
    { type: 'p', text: "Sur le registre des systèmes d'IA, même prudence. Aucune obligation générale de tenir un inventaire n'existe. L'enregistrement des articles 49 et 71 s'impose aux fournisseurs de systèmes à haut risque de l'annexe III et les déployeurs publics, et il suit le report du haut risque. L'inventaire reste une bonne pratique, recommandée par le cadre américain du NIST, sans être une obligation opposable." },

    { type: 'h2', text: "Le vrai risque français en 2026 passe par le RGPD" },
    { type: 'p', text: "Pendant que le marché regarde le règlement IA, le contrôle qui peut tomber cette année vient d'ailleurs. La CNIL a publié le 3 avril 2026 ses thématiques prioritaires de contrôle, dont le recrutement. Elle y vise les systèmes de décision automatisée, l'information des candidats et les durées de conservation, en ciblant les grandes entreprises et les cabinets de recrutement. Elle indique elle-même que ce thème préfigure son futur rôle de surveillance du marché dans le champ du travail au titre du règlement IA. Les thèmes prioritaires représentent environ 20 % de ses contrôles annuels." },
    { type: 'p', text: "Une obligation plus ancienne s'y ajoute, souvent ignorée. Par sa délibération n° 2018-327 du 11 octobre 2018, la CNIL range les algorithmes de sélection des candidats parmi les traitements qui exigent une analyse d'impact sur la protection des données (AIPD). Ne pas la conduire quand elle est due expose à une sanction pouvant atteindre 10 millions d'euros ou 2 % du chiffre d'affaires mondial." },
    { type: 'p', text: "Un audit utile en 2026 commence donc par le RGPD, sur les traitements effectivement en service, avant d'aborder un règlement IA dont l'essentiel des obligations n'est pas encore applicable." },

    { type: 'h2', text: "Les référentiels réellement publiés" },
    { type: 'p', text: "Un audit sérieux s'appuie sur un référentiel nommé et daté. La famille de normes dédiée à l'IA est encore courte : trois documents seulement sont publiés à ce jour." },
    {
      type: 'table',
      headers: ['Norme', 'Objet', 'Publication', 'Certifiable'],
      rows: [
        ['ISO/IEC 42001', "Système de management de l'IA : gouvernance, rôles, cycle de vie, fournisseurs", '18 décembre 2023', 'Oui, par un organisme accrédité'],
        ['ISO/IEC 42005', "Évaluation de l'impact d'un système d'IA sur les personnes et la société", '28 mai 2025', 'Non, lignes directrices'],
        ['ISO/IEC 42006', "Exigences applicables aux organismes qui auditent et certifient un système de management de l'IA", '7 juillet 2025', "Sans objet, elle encadre les certificateurs"],
      ],
    },
    { type: 'p', text: "Deux précisions utiles pour ne pas se faire raconter d'histoires. ISO/IEC 42007 est encore au stade de projet et plusieurs pages commerciales la présentent à tort comme publiée. ISO/IEC 42003 n'existe pas encore. En revanche, deux normes voisines publiées en 2023 servent dans une mission : ISO/IEC 23894 sur le management du risque lié à l'IA, et ISO/IEC 25059 sur la qualité des systèmes d'IA." },
    { type: 'p', text: "Côté américain, le cadre de gestion des risques du NIST, publié en janvier 2023 sous la référence AI 100-1, structure la réflexion autour de quatre fonctions : gouverner, cartographier, mesurer, gérer. Le NIST le qualifie lui-même de volontaire et non sectoriel. Il ne certifie rien et se prête bien à un audit de maturité." },
    { type: 'p', text: "En France, le Laboratoire national de métrologie et d'essais certifie des processus de conception, de développement, d'évaluation et de maintien en condition opérationnelle de l'IA. La certification porte sur la façon de travailler, et non sur un modèle ou un produit. Le cycle prévoit un audit initial, des suivis à douze et vingt-quatre mois et un renouvellement à trois ans." },
    {
      type: 'callout',
      title: "La question qui tranche en cinq secondes",
      text: "Demandez à votre prestataire s'il est un organisme de certification accrédité ou un cabinet de conseil. Les deux métiers sont légitimes et ne délivrent pas la même chose : un cabinet de conseil ne peut pas certifier, et un organisme certificateur ne peut pas conseiller l'entreprise qu'il certifie, au nom de l'impartialité. Un acteur qui promet les deux se trompe ou vous trompe.",
    },
    { type: 'p', text: "Dernier point sur les certificats, valable même quand ils sont authentiques : un certificat ISO/IEC 42001 couvre un périmètre déclaré, et non « l'IA de l'entreprise ». Microsoft, certifié, énumère nommément les services couverts et rappelle que son client reste responsable de l'évaluation de ses propres déploiements. Lisez le périmètre avant de vous laisser rassurer par le logo." },

    { type: 'h2', text: "Ce que contient une mission sérieuse" },
    { type: 'p', text: "Au-delà du vocabulaire, un audit se juge à ce qu'il produit. Les missions qui aboutissent passent par six temps." },
    {
      type: 'ol',
      items: [
        "Le cadrage fixe le périmètre (quelles entités, quels métiers), écrit ce qui n'en fait pas partie et décide de la forme que prendra la restitution à la direction.",
        "L'inventaire recense les outils d'IA en service, officiels ou non. Les usages lancés par les équipes sans passer par l'informatique y apparaissent presque toujours, et ce sont eux qui surprennent le plus les directions.",
        "Les entretiens métier comparent le processus tel qu'on le décrit et le processus tel qu'on le pratique.",
        "L'examen des données vérifie, cas par cas, qu'elles existent, qu'elles sont fiables et que l'entreprise a le droit de s'en servir. Sans données exploitables, un cas d'usage reste un souhait.",
        "La qualification des risques regarde les données personnelles traitées, les décisions prises sans intervention humaine, l'exposition aux textes et la dépendance à un seul fournisseur.",
        "La feuille de route classe les actions et donne à chacune un porteur, un budget approximatif et une date.",
      ],
    },
    { type: 'p', text: "Un état des lieux seul ne change rien le lundi suivant. Le rapport utile désigne trois actions à démarrer dans les trois prochains mois et la personne qui conduit chacune." },

    { type: 'h2', text: "Ce que ça coûte" },
    { type: 'p', text: "J'ai cherché des fourchettes de prix publiées et vérifiables. Les montants que l'on trouve en ligne, de 5 000 à 40 000 euros selon les pages, sont affichés par des cabinets qui vendent eux-mêmes l'audit : aucun ne dit comment il les a établis, sur combien de missions ni à quelle date. Les reprendre ici reviendrait à présenter le tarif d'un concurrent comme un prix de marché. Je m'en abstiens." },
    { type: 'p', text: "Un ordre de grandeur se défend sans tricher. Dans une organisation de taille moyenne, un audit de maturité bien mené mobilise quelques jours d'expertise, répartis sur plusieurs semaines pour laisser le temps des entretiens ; il ne dure pas des mois. Selon le profil de l'entreprise et sa région, des aides publiques au conseil peuvent alléger la facture : leur éligibilité se vérifie au moment du cadrage." },
    { type: 'p', text: "Un devis nettement plus élevé doit se justifier par un périmètre plus large, plusieurs entités ou plusieurs pays, et le dire. À l'inverse, un « audit complet » vendu pour une seule journée de travail ne peut couvrir ni les entretiens ni l'inventaire : demandez ce qu'il contient avant de signer." },
    { type: 'p', text: "Sur le coût d'une certification ISO/IEC 42001, aucun organisme certificateur français ne publie de tarif. La mécanique est en revanche connue : l'accompagnement à la mise en place du système de management, puis l'audit de certification par un organisme accrédité, puis les audits de surveillance. Trois lignes distinctes, à faire chiffrer séparément." },

    { type: 'h2', text: "Quatre situations où l'audit est une dépense inutile" },
    { type: 'p', text: "Un cabinet qui vend des audits gagnerait à taire ce qui suit. Ces quatre situations sont pourtant celles où l'argent part sans retour." },
    { type: 'h3', text: "1. Vous connaissez déjà votre premier cas d'usage" },
    { type: 'p', text: "Une direction qui sait que le sujet est la réponse aux appels d'offres ou le traitement des factures n'a pas besoin d'une cartographie complète pour le confirmer. Un cadrage court sur ce cas précis, puis un prototype, apportent davantage qu'un rapport de cinquante pages." },
    { type: 'h3', text: "2. Le problème relève des données ou de l'organisation" },
    { type: 'p', text: "Quand les données sont éparpillées, contradictoires ou inaccessibles, aucun audit IA ne réglera la question. Le chantier porte sur les données et les processus. L'audit vous dira ce que vous savez déjà, et vous facturera l'information." },
    { type: 'h3', text: "3. La décision est déjà prise" },
    { type: 'p', text: "Un audit commandé pour justifier une orientation arrêtée est un exercice de communication. Il coûte le prix d'un audit et produit la valeur d'une note d'intention. Autant assumer la décision et investir dans sa mise en œuvre." },
    { type: 'h3', text: "4. L'organisation est trop petite pour l'exercice" },
    { type: 'p', text: "En dessous d'une vingtaine de personnes, la cartographie tient dans une réunion. Le formalisme d'un audit apporte peu quand le dirigeant connaît chaque processus de son entreprise." },
    { type: 'p', text: "Un cinquième cas mérite d'être nommé, plus insidieux : l'audit de conformité mené pour se rassurer sans intention de changer les pratiques. La littérature sur la conformité algorithmique lui a donné un nom, la conformité de façade. Un rapport rangé dans un tiroir ne protège de rien, ni juridiquement, ni opérationnellement." },

    { type: 'h2', text: "Le conflit d'intérêts, puisqu'il faut en parler" },
    { type: 'p', text: "Masteria fait l'audit, puis construit les outils et forme les équipes. D'où une mise en garde : quand le même cabinet pose le diagnostic et vend la suite, il a intérêt à trouver du travail. Vous avez le droit de le savoir en lisant ces lignes." },
    { type: 'p', text: "Deux garde-fous se négocient dès le contrat. Le premier : le rapport liste aussi ce qu'il déconseille, les actions à ne pas lancer et les cas d'usage écartés, chacun avec sa raison. Un rapport qui recommande tout ressemble à une proposition commerciale. Le second : le diagnostic et la mise en œuvre font l'objet de deux contrats, et la feuille de route doit pouvoir être reprise par un autre prestataire. Un plan que seul son auteur sait exécuter vous rend dépendant de lui." },
    { type: 'p', text: "La certification applique une règle plus stricte : au nom de l'impartialité, l'organisme qui certifie une entreprise s'interdit de la conseiller. Le conseil échappe à cette règle, ce qui rend la transparence d'autant plus nécessaire." },

    { type: 'h2', text: "Trois décisions avant de lancer un audit" },
    { type: 'p', text: "Trois décisions valent mieux qu'un appel d'offres. Nommer le type d'audit voulu, en sachant que maturité et conformité ne se traitent pas dans la même mission ni par les mêmes profils. Exiger le référentiel appliqué, avec sa référence et sa date. Fixer le livrable attendu en une phrase, en y incluant les actions écartées." },
    { type: 'p', text: "Le report du haut risque, seize mois pour les systèmes de l'annexe III, donne le temps d'avancer dans l'ordre. Les obligations déjà en vigueur restent dues, et la CNIL contrôle les pratiques de recrutement dès cette année. Préparer la conformité avant un déploiement coûte moins cher que la rattraper après une mise en demeure." },
  ],
  faq: [
    {
      q: "Que recouvre un audit IA en entreprise ?",
      a: "Le bilan de l'usage de l'IA dans l'organisation, sous un nom qui n'a aucune définition officielle ni normalisée. Trois missions s'y cachent. L'audit de maturité et d'opportunité dit ce que l'IA peut prendre en charge et par quoi commencer. L'audit de conformité vérifie que vos usages respectent le RGPD et l'AI Act. L'audit algorithmique teste un modèle précis : performance, biais, explicabilité. Demandez au prestataire laquelle des trois il propose.",
    },
    {
      q: "Un audit externe est-il obligatoire au titre de l'AI Act ?",
      a: "Dans la plupart des cas, non. Pour les points 2 à 8 de l'annexe III (notamment l'emploi, l'éducation, le crédit, l'assurance et la justice), l'article 43 renvoie au contrôle interne de l'annexe VI, sans organisme notifié : l'entreprise vérifie elle-même sa conformité et en garde la preuve écrite. Un regard extérieur peut aider à objectiver ce travail, sans que la loi l'exige dans ces cas.",
    },
    {
      q: "À quelle date le régime du haut risque s'applique-t-il ?",
      a: "L'Omnibus, règlement (UE) 2026/1744 signé le 8 juillet 2026, a fixé deux échéances : le 2 décembre 2027 pour les systèmes autonomes listés à l'annexe III, le 2 août 2028 pour ceux intégrés à un produit réglementé (annexe I). D'autres obligations courent déjà : pratiques interdites et formation des utilisateurs (articles 5 et 4) depuis février 2025, règles des modèles à usage général depuis août 2025, obligations de transparence (article 50) en vigueur depuis le 2 août 2026.",
    },
    {
      q: "Sur quelles normes un audit IA doit-il s'appuyer ?",
      a: "Trois normes de la famille dédiée à l'IA sont publiées à ce jour : ISO/IEC 42001 (18 décembre 2023), qui porte sur le système de management de l'IA et se certifie ; ISO/IEC 42005 (28 mai 2025), qui donne des lignes directrices pour évaluer l'impact d'un système et ne se certifie pas ; ISO/IEC 42006 (7 juillet 2025), qui fixe les exigences applicables aux organismes certificateurs. S'y ajoutent ISO/IEC 23894 sur le management du risque et le cadre volontaire du NIST publié en janvier 2023. ISO/IEC 42007 est encore au stade de projet malgré ce qu'en disent certaines pages commerciales.",
    },
    {
      q: "Combien coûte un audit IA ?",
      a: "Aucune grille publique fiable n'existe : les montants affichés sur le web sont ceux de cabinets qui vendent l'audit, sans méthode connue. Pour un audit de maturité dans une organisation de taille moyenne, comptez quelques jours d'expertise étalés sur plusieurs semaines. Un devis plus lourd doit se justifier par un périmètre plus large, plusieurs entités ou plusieurs pays. Selon votre profil, une aide publique au conseil peut réduire la facture ; l'éligibilité se vérifie au cadrage.",
    },
    {
      q: "Peut-on obtenir une certification de conformité au règlement européen sur l'IA ?",
      a: "Pas à ce jour. L'article 40 ne donne de présomption de conformité qu'avec des normes harmonisées publiées au Journal officiel de l'Union, et aucune ne l'était encore à l'été 2026 pour le règlement IA. Une conformité « certifiée » au règlement n'a donc pas de base. Vous pouvez en revanche faire certifier un système de management de l'IA selon ISO/IEC 42001, sur un périmètre déclaré, par un organisme accrédité.",
    },
    {
      q: "Faut-il tenir un registre des systèmes d'IA ?",
      a: "Aucune obligation générale n'existe à ce jour. L'enregistrement des articles 49 et 71 du règlement porte sur les fournisseurs de systèmes à haut risque de l'annexe III et les déployeurs publics, et il suit le report du haut risque. Restent opposables aujourd'hui le registre des traitements du RGPD, l'analyse d'impact là où elle est due, la formation des utilisateurs et l'obligation de transparence. Tenir un inventaire des systèmes en service reste une bonne pratique, recommandée par le cadre du NIST.",
    },
    {
      q: "Dans quels cas un audit IA est-il inutile ?",
      a: "Quatre situations. Quand vous connaissez déjà votre premier cas d'usage : un cadrage court puis un prototype valent mieux qu'une cartographie complète. Quand le problème porte sur les données ou l'organisation plutôt que sur l'IA. Quand la décision est déjà prise et que l'audit sert à la justifier. Et quand l'organisation compte moins d'une vingtaine de personnes, le dirigeant connaissant alors chaque processus. Un cinquième cas mérite attention : l'audit de conformité mené sans intention de changer les pratiques, qui ne protège ni juridiquement ni opérationnellement.",
    },
  ],
  apres: {
    titre: "Faire conduire l'audit, ou passer tout de suite au premier cas d'usage",
    texte: "Si vous savez déjà quelle tâche confier à l'IA, une demi-heure d'échange suffit souvent à trancher entre un audit et un prototype. Masteria conduit les trois temps qui suivent : l'audit lui-même, la construction de l'outil à partir de vos fichiers et de vos applications, puis la formation des personnes qui s'en serviront.",
  },
}

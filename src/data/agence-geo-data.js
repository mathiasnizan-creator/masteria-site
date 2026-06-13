// Données géographiques pour les pages « Agence IA {ville} »
// Stratégie SEO/GEO : 4 pages géo high-ticket conseil + développement sur mesure.
// Villes : Annecy, Paris, Genève (CH), Marseille.
// Requêtes cibles : « agence ia annecy » (KD 6), « agence ia paris » (KD 27),
//   « agence ia geneve / suisse » (+ « agence ia marketing suisse »), « agence ia marseille ».
//
// Anti-doorway : chaque ville porte un bloc local UNIQUE (tissu économique réel,
// secteurs forts vérifiables, angle de besoin, modèle de présence HONNÊTE depuis
// Lyon, 3 cas d'usage non nominatifs par secteur, 2 FAQ locales).
//
// INTÉGRITÉ : aucun client nommé, aucun chiffre de résultat fabriqué, aucune
// adresse locale inventée hors Lyon. Présence présentée honnêtement (équipe Lyon,
// présentiel ponctuel + distanciel ; proximité réelle pour Annecy/Genève).
//
// Genève (countryCode CH) : pas d'OPCO, facturation et cadre suisses, marché romand.

export const AGENCE_GEO_CITIES = [
  {
    slug: 'agence-ia-annecy',
    citySlug: 'annecy',
    name: 'Annecy',
    nameLoc: 'à Annecy',
    region: 'Haute-Savoie',
    regionLong: 'Haute-Savoie et Pays de Savoie',
    country: 'France',
    countryCode: 'FR',
    locale: 'fr-FR',
    coordinates: { latitude: 45.8992, longitude: 6.1294 },
    metaDesc:
      "Agence IA à Annecy : Masteria cadre votre stratégie IA et développe vos agents, outils et automatisations sur mesure. Équipe Lyon, proximité Haute-Savoie. Premier cadrage gratuit.",
    heroSubtitle:
      "Notre métier : aider les PME et ETI de Haute-Savoie à passer de l'intention aux résultats. Nous cadrons votre stratégie et votre gouvernance IA, puis nous concevons et développons les agents, outils et automatisations qui s'intègrent à votre système d'information. La formation prolonge la mise en œuvre pour rendre vos équipes autonomes.",
    localEconomy:
      "Annecy et le bassin annécien forment un tissu industriel et tertiaire dense, structuré autour de la mécatronique et du cluster Mont-Blanc Industries, premier pôle de mécatronique de la région. La filière outdoor et sport (équipementiers de montagne, articles de glisse, sociétés de plein air) y est historiquement implantée. La banque privée et la gestion de patrimoine y sont actives, portées par la proximité genevoise et la clientèle frontalière. Le tourisme alpin et lacustre, enfin, draine un volume important d'activités hôtelières, événementielles et de services.",
    whyHere:
      "Les PME industrielles et les ETI familiales de Haute-Savoie traitent quotidiennement de gros volumes documentaires : cahiers des charges, documentation technique, qualité, achats, devis. Ces processus se prêtent particulièrement à l'automatisation et aux agents IA branchés sur l'ERP. Dans la banque privée et le tourisme, la relation client et la production éditoriale multilingue ouvrent d'autres gisements. Une agence IA aide à choisir où investir, dans quel ordre, puis à construire les outils plutôt qu'à se contenter d'une recommandation.",
    presence:
      "L'équipe Masteria est basée à Lyon (Croix-Rousse). Annecy est à environ 1 h 30 de route, ce qui permet des ateliers de cadrage et des points d'avancement en présentiel sans logistique lourde. Nous intervenons sur site à Annecy et dans le bassin annécien pour les phases clés (cadrage, observation des processus, passation), et en distanciel pour le développement, les itérations et le suivi. Aucune agence physique à Annecy : nous travaillons depuis Lyon avec une présence terrain ponctuelle assumée.",
    useCasesLocal: [
      {
        sector: 'Mécatronique et industrie',
        usage: "Pour une PME industrielle de la région, un agent qui rédige et met à jour la documentation technique à partir des données produit, et une automatisation des devis et des réponses aux appels d'offres récurrents.",
      },
      {
        sector: 'Outdoor, sport et négoce',
        usage: "Pour un équipementier outdoor du bassin, des outils de production de fiches produit et de contenus multilingues, plus un copilote interne pour le support client et les retours SAV.",
      },
      {
        sector: 'Banque privée et tourisme',
        usage: "Pour un acteur de la gestion de patrimoine ou de l'hôtellerie lacustre, des automatisations de reporting, de réponses standardisées et de mise en forme documentaire, dans le respect de la confidentialité.",
      },
    ],
    localFaq: [
      {
        q: 'Intervenez-vous sur site à Annecy ?',
        a: "Oui. L'équipe est basée à Lyon, mais Annecy est à environ 1 h 30 de route : nous nous déplaçons pour les ateliers de cadrage, l'observation des processus sur le terrain et les passations. Le développement et le suivi se font en distanciel. Les éventuels frais de déplacement figurent en clair dans la proposition commerciale.",
      },
      {
        q: 'Travaillez-vous avec les PME et ETI de Haute-Savoie ?',
        a: "Oui. Nos offres sont dimensionnées pour les PME et les ETI du bassin annécien : cadrage gratuit, missions forfaitaires courtes et priorité aux cas d'usage à retour rapide. Les secteurs mécatronique, outdoor, banque privée et tourisme de la région présentent des processus documentaires et de relation client très adaptés à l'IA générative et à l'automatisation.",
      },
    ],
  },
  {
    slug: 'agence-ia-paris',
    citySlug: 'paris',
    name: 'Paris',
    nameLoc: 'à Paris',
    region: 'Île-de-France',
    regionLong: 'Paris et Île-de-France',
    country: 'France',
    countryCode: 'FR',
    locale: 'fr-FR',
    coordinates: { latitude: 48.8566, longitude: 2.3522 },
    metaDesc:
      "Agence IA à Paris : Masteria cadre votre stratégie IA et développe agents, outils et automatisations sur mesure pour les sièges sociaux, services et scale-ups franciliens. Cadrage gratuit.",
    heroSubtitle:
      "Notre métier : aider les directions générales et les équipes métier parisiennes à passer de l'intention aux résultats. Nous cadrons votre stratégie et votre gouvernance IA, puis nous concevons et développons les agents, outils et automatisations qui s'intègrent à votre système d'information. La formation prolonge la mise en œuvre pour rendre vos équipes autonomes.",
    localEconomy:
      "Paris et l'Île-de-France concentrent la plus forte densité économique d'Europe continentale : sièges sociaux de grands groupes, écosystème conseil et services financiers le plus dense du pays, médias et communication, retail et luxe, et le premier bassin tech français avec ses scale-ups et ses éditeurs de logiciels. C'est aussi le premier marché de la demande IA en France, tiré par les directions data, les fonctions support et les exigences de conformité (RGPD, AI Act).",
    whyHere:
      "Dans les sièges sociaux et les services financiers, les fonctions support croulent sous les processus répétitifs à fort enjeu de fiabilité : reporting, conformité, traitement de dossiers, relation client. Dans le conseil, les médias et le retail, la production de contenus et l'analyse documentaire sont des gisements directs. Les scale-ups, elles, cherchent à accélérer support, documentation produit et onboarding sans grossir les effectifs au même rythme. Une agence IA aide à prioriser ces chantiers par impact, puis à développer les agents et automatisations correspondants.",
    presence:
      "L'équipe Masteria est basée à Lyon (Croix-Rousse), à 2 heures de Paris en TGV. Nous intervenons en présentiel ponctuel à Paris et en proche couronne pour les ateliers de cadrage, les comités de pilotage et les passations, et en distanciel pour le développement et le suivi continu. Nous n'avons pas d'agence physique à Paris : la présence terrain est ponctuelle et planifiée, le reste de la mission se conduit à distance avec les mêmes livrables.",
    useCasesLocal: [
      {
        sector: 'Sièges sociaux et services financiers',
        usage: "Pour un groupe ou une filiale francilienne, des agents de traitement documentaire (conformité, reporting, KYC) et des automatisations back-office branchées sur les outils existants, avec traçabilité.",
      },
      {
        sector: 'Conseil, médias et retail',
        usage: "Pour un cabinet ou une marque parisienne, des outils de production éditoriale multi-canaux, de synthèse de mission et de préparation de slides, plus un copilote interne sur la base de connaissances.",
      },
      {
        sector: 'Tech et scale-ups',
        usage: "Pour une scale-up francilienne, un copilote support client, une automatisation de la documentation produit et un agent d'onboarding interne connecté à la base d'aide.",
      },
    ],
    localFaq: [
      {
        q: 'Avez-vous une agence à Paris ?',
        a: "Non, et nous l'écrivons clairement : l'équipe Masteria est basée à Lyon. Paris est à 2 heures en TGV, ce qui permet des interventions en présentiel ponctuel pour les ateliers de cadrage, les comités de pilotage et les passations. Le reste de la mission (développement, itérations, suivi) se conduit en distanciel, avec les mêmes contenus et les mêmes livrables.",
      },
      {
        q: 'Travaillez-vous avec les entreprises et scale-ups parisiennes ?',
        a: "Oui. Nous accompagnons aussi bien des directions de grands groupes franciliens pour des cadrages stratégiques que des PME, ETI et scale-ups pour des développements sur mesure et des automatisations ciblées. Chaque proposition est forfaitaire, avec périmètre, livrables et calendrier écrits avant signature.",
      },
    ],
  },
  {
    slug: 'agence-ia-geneve',
    citySlug: 'geneve',
    name: 'Genève',
    nameLoc: 'à Genève',
    region: 'Genève',
    regionLong: 'Genève et la Suisse romande',
    country: 'Suisse',
    countryCode: 'CH',
    locale: 'fr-CH',
    coordinates: { latitude: 46.2044, longitude: 6.1432 },
    metaDesc:
      "Agence IA à Genève : Masteria cadre votre stratégie IA et développe agents et automatisations sur mesure pour la finance, le négoce et les organisations du marché romand. Cadrage gratuit.",
    heroSubtitle:
      "Notre métier : aider les directions et les équipes métier genevoises à passer de l'intention aux résultats. Nous cadrons votre stratégie et votre gouvernance IA, puis nous concevons et développons les agents, outils et automatisations qui s'intègrent à votre environnement, avec une attention particulière à la confidentialité et au cadre suisse.",
    localEconomy:
      "Genève est l'une des grandes places mondiales de la finance et de la banque privée, avec un tissu dense de gérants de fortune et d'établissements bancaires. La ville est aussi le premier centre mondial de négoce de matières premières et accueille une forte concentration d'organisations internationales et d'ONG, dans un environnement multilingue. L'horlogerie et la pharma-arômes complètent ce paysage à très haute valeur ajoutée, structuré autour de la Suisse romande et du bassin lémanique.",
    whyHere:
      "La banque privée et le négoce manipulent des volumes documentaires considérables sous fortes contraintes de confidentialité et de conformité : reporting client, due diligence, suivi opérationnel, reporting de marché. Les organisations internationales produisent et traduisent en continu des rapports multilingues. Ces usages se prêtent aux agents IA et aux automatisations, à condition de respecter le secret professionnel et un cadre de gouvernance strict. Une agence IA aide à cadrer ces sujets sensibles, puis à développer des outils conçus pour rester sous contrôle.",
    presence:
      "L'équipe Masteria est basée à Lyon, à moins de 2 heures de Genève en train direct. La proximité permet des ateliers de cadrage et des points d'avancement en présentiel sur le bassin lémanique, complétés par du distanciel pour le développement et le suivi. Nous n'avons pas d'agence physique à Genève : nous intervenons depuis Lyon avec une présence terrain ponctuelle, et facturons selon le cadre suisse (en CHF ou en EUR selon votre préférence).",
    useCasesLocal: [
      {
        sector: 'Banque privée et gestion de fortune',
        usage: "Pour un établissement de la place, des agents de synthèse documentaire et de reporting client, et des automatisations de revue de dossiers conçues dès le départ pour la confidentialité et la traçabilité.",
      },
      {
        sector: 'Négoce de matières premières',
        usage: "Pour une trading house romande, des outils de production de rapports de marché, de traduction technique structurée et de suivi opérationnel branchés sur les flux internes.",
      },
      {
        sector: 'Organisations internationales et pharma',
        usage: "Pour une organisation internationale ou un acteur pharma-arômes, des outils de rédaction et de synthèse multilingues, et des automatisations de mise en forme de documents volumineux.",
      },
    ],
    localFaq: [
      {
        q: 'Intervenez-vous sur site à Genève et sur le bassin lémanique ?',
        a: "Oui. L'équipe est basée à Lyon, à moins de 2 heures en train direct de Genève, ce qui permet des ateliers de cadrage et des points d'avancement en présentiel sur le bassin lémanique, à Genève comme à Lausanne ou Nyon. Le développement et le suivi se font ensuite en distanciel. Nous n'avons pas de bureau à Genève : la présence terrain est ponctuelle et planifiée selon les besoins de la mission.",
      },
      {
        q: 'Comment respectez-vous la confidentialité dans un environnement bancaire genevois ?',
        a: "La confidentialité est cadrée dès le départ : accord de confidentialité signé avant la mission, travail à partir de données anonymisées ou structurellement équivalentes, et conception des agents et automatisations pour rester sous votre contrôle (gouvernance, traçabilité, périmètre d'accès aux données). Cette exigence est intégrée au cadrage, pas ajoutée après coup.",
      },
    ],
  },
  {
    slug: 'agence-ia-marseille',
    citySlug: 'marseille',
    name: 'Marseille',
    nameLoc: 'à Marseille',
    region: 'Provence-Alpes-Côte d\'Azur',
    regionLong: 'Marseille et la région Sud',
    country: 'France',
    countryCode: 'FR',
    locale: 'fr-FR',
    coordinates: { latitude: 43.2965, longitude: 5.3698 },
    metaDesc:
      "Agence IA à Marseille : Masteria cadre votre stratégie IA et développe agents, outils et automatisations sur mesure pour le maritime, la logistique, le tourisme et la santé. Cadrage gratuit.",
    heroSubtitle:
      "Notre métier : aider les directions et les équipes métier marseillaises à passer de l'intention aux résultats. Nous cadrons votre stratégie et votre gouvernance IA, puis nous concevons et développons les agents, outils et automatisations qui s'intègrent à votre système d'information. La formation prolonge la mise en œuvre pour rendre vos équipes autonomes.",
    localEconomy:
      "Marseille et la métropole Aix-Marseille-Provence forment le premier pôle économique du Sud, tourné vers la mer : premier port maritime de France, logistique et transport, négoce. Le tourisme et l'hôtellerie y pèsent lourd, soutenus par l'attractivité méditerranéenne. La santé y est structurée autour d'un grand CHU régional et d'une filière biotech. L'industrie, l'aérospatial et la défense complètent un tissu d'ETI et de PME en transformation numérique active.",
    whyHere:
      "Dans le maritime et la logistique, le suivi des flux, la communication client multilingue et la conformité douanière reposent sur des processus répétitifs et documentaires, idéaux pour l'automatisation et les agents IA. Le tourisme et l'hôtellerie ont besoin de production éditoriale multilingue et de support client à grande échelle. La santé et la biotech manipulent des volumes documentaires réglementaires importants. Une agence IA aide à repérer ces gisements, à les prioriser par impact, puis à développer les outils correspondants.",
    presence:
      "L'équipe Masteria est basée à Lyon (Croix-Rousse), à un peu plus de 3 heures de Marseille en TGV direct. Nous intervenons en présentiel ponctuel à Marseille et dans la métropole pour les ateliers de cadrage, les comités de pilotage et les passations, et en distanciel pour le développement et le suivi. Nous n'avons pas d'agence physique à Marseille : la présence terrain est ponctuelle et planifiée, le reste de la mission se conduit à distance avec les mêmes livrables.",
    useCasesLocal: [
      {
        sector: 'Maritime et logistique',
        usage: "Pour un acteur portuaire ou logistique de la région, des agents de suivi documentaire (douane, conformité), une automatisation des réponses de cotation et un copilote de communication client multilingue.",
      },
      {
        sector: 'Tourisme et hôtellerie',
        usage: "Pour une chaîne hôtelière ou un acteur du tourisme méditerranéen, des outils de production de contenus multilingues, de réponses aux avis clients et un support client automatisé à grande échelle.",
      },
      {
        sector: 'Santé, biotech et industrie',
        usage: "Pour un établissement de santé, un laboratoire ou un industriel de la métropole, des agents de synthèse documentaire réglementaire et des automatisations de mise à jour de procédures et de comptes rendus.",
      },
    ],
    localFaq: [
      {
        q: 'Intervenez-vous sur site à Marseille ?',
        a: "Oui, en présentiel ponctuel. L'équipe est basée à Lyon, à un peu plus de 3 heures de Marseille en TGV direct : nous nous déplaçons pour les ateliers de cadrage, les comités de pilotage et les passations, puis conduisons le développement et le suivi en distanciel. Les éventuels frais de déplacement figurent en clair dans la proposition commerciale.",
      },
      {
        q: 'Travaillez-vous avec les entreprises de la région Sud ?',
        a: "Oui. Nous accompagnons les PME, ETI et directions de la métropole Aix-Marseille-Provence, avec une attention aux spécificités régionales : maritime et logistique, tourisme, santé, industrie. Cadrage gratuit, missions forfaitaires et priorité aux cas d'usage à retour rapide. Tout existe aussi en distanciel, avec les mêmes contenus et les mêmes livrables.",
      },
    ],
  },
]

// Retourne la ville correspondant à un slug complet (ex. 'agence-ia-paris'), ou null.
export function getAgenceGeoCity(slug) {
  const clean = String(slug || '').replace(/^\//, '')
  return AGENCE_GEO_CITIES.find(c => c.slug === clean) || null
}

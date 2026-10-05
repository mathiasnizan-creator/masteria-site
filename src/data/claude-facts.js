/*
 * Faits sur Claude (Anthropic) : SOURCE UNIQUE pour toutes les pages Claude du site
 * (hub, pages métier, Claude Code, article multi-outils). Le comparatif
 * /chatgpt-vs-claude garde son tableau détaillé, aligné sur ces valeurs.
 *
 * Règle : à chaque sortie de modèle ou changement de prix, on modifie CE fichier,
 * on revérifie chaque ligne sur les sources ci-dessous et on change `verifieLe`.
 * Aucun nom de modèle ni prix Claude ne doit être écrit en dur ailleurs.
 */

export const CLAUDE_FAITS = {
  verifieLe: '2026-10-05',
  verifieLeTexte: '5 octobre 2026',

  modeles: [
    { nom: 'Claude Fable 5.1', sortie: '1er septembre 2026', role: 'le plus puissant de la gamme, pensé pour les travaux au long cours ; il faut un abonnement payant' },
    { nom: 'Claude Opus 5.5', sortie: '22 septembre 2026', role: "le choix par défaut qu'Anthropic conseille pour l'essentiel des tâches" },
    { nom: 'Claude Sonnet 5.5', sortie: '28 septembre 2026', role: 'plus rapide et moins coûteux, pour les demandes courantes' },
    { nom: 'Claude Haiku 4.5', sortie: null, role: 'le plus vif, dont Anthropic annonce le remplaçant, Haiku 5.5' },
  ],

  contexte: "Avec Fable 5.1, Opus 5.5 ou Sonnet 5.5, un abonnement payant ouvre jusqu'à un million de tokens par échange suivi ; Haiku 4.5 plafonne à 200 000. Repère donné par Anthropic : 200 000 tokens font à peu près 500 pages, soit environ 2 500 pages pour le million.",

  offres: [
    { nom: 'Gratuit', prix: 'sans abonnement', note: 'ni Fable 5.1 ni Opus 5.5' },
    { nom: 'Pro', prix: '20 $ chaque mois, ou 17 $ par mois réglés pour l\'année', note: 'Claude Code compris' },
    { nom: 'Max', prix: 'dès 100 $ par mois, sans formule annuelle', note: "cinq ou vingt fois l'usage de Pro" },
    { nom: 'Team', prix: '25 $ par siège chaque mois, 20 $ à l\'année, de 2 à 150 sièges', note: 'le siège Premium coûte 125 $ (100 $ à l\'année) pour cinq fois plus d\'usage' },
    { nom: 'Enterprise', prix: '20 $ par siège et par mois à l\'année, plus la consommation facturée au tarif de l\'API', note: 'administration, audit et sécurité renforcés' },
  ],
  prixNote: 'Montants publics en dollars, hors taxes, relevés sur la page tarifs d\'Anthropic.',

  donnees: "Aucun entraînement par défaut sur les échanges d'une organisation abonnée à Team ou Enterprise, où la mémoire est aussi coupée tant qu'un administrateur ne l'active pas. Sur les comptes individuels, chaque titulaire règle lui-même l'usage de ses conversations. Pas de région européenne dans les applications d'Anthropic : pour héberger en Europe, il faut passer par AWS Bedrock ou Google Cloud Vertex AI.",

  fonctions: [
    'Projets partagés : des consignes et des fichiers de référence communs à toute une équipe',
    'Compétences (Skills) : un dossier et son fichier SKILL.md, que Claude charge quand la demande y correspond',
    'Recherche approfondie qui cite ses sources, et connecteurs MCP vers les logiciels de l\'entreprise',
    'Fichiers Word, Excel et PowerPoint produits dans la conversation, tableurs analysés en exécutant du code',
    'Claude installé dans Excel, PowerPoint et Word pour toutes les offres payantes depuis le 7 mai 2026 (Outlook encore en bêta), et dans Chrome depuis le 26 août 2026',
    'Cowork intégré à l\'application depuis le 16 septembre 2026, Pro et Max en premier, pour mener une tâche sur un dossier de fichiers',
    'Claude Design, Slides et Docs, encore en bêta, sur les abonnements payants',
    'Claude Code, l\'outil des développeurs, inclus à partir de Pro',
  ],

  sources: [
    { name: 'tarifs', url: 'https://claude.com/pricing' },
    { name: 'taille du contexte', url: 'https://support.claude.com/en/articles/8606394-how-large-is-the-context-window-on-paid-claude-plans' },
    { name: 'liste des modèles', url: 'https://platform.claude.com/docs/en/about-claude/models/overview' },
    { name: 'annonce Opus 5.5', url: 'https://www.anthropic.com/claude-opus-5-5' },
    { name: 'annonce Sonnet 5.5', url: 'https://www.anthropic.com/claude-sonnet-5-5' },
    { name: 'annonce Fable 5.1', url: 'https://www.anthropic.com/claude-fable-and-mythos-5-1' },
    { name: 'Cowork dans l\'application', url: 'https://claude.com/blog/cowork-is-now-claude' },
    { name: 'notes de version', url: 'https://support.claude.com/en/articles/12138966-release-notes' },
    { name: 'Excel, PowerPoint, Word', url: 'https://claude.com/blog/collaborate-with-claude-across-excel-powerpoint-word-and-outlook' },
    { name: 'Claude dans Chrome', url: 'https://claude.com/blog/claude-in-chrome-generally-available' },
    { name: 'données et entraînement', url: 'https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training' },
    { name: 'hébergement régional', url: 'https://claude.com/regional-compliance' },
  ],
}

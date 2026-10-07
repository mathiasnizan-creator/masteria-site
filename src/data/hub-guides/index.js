/*
 * Textes propres des hubs outils (pages /formation-chatgpt, /formation-microsoft-copilot,
 * /formation-gemini-entreprise, /formation-mistral-ai, /formation-multi-outils).
 * Un fichier par hub. HubPage fusionne le guide sur l'entrée de catalog-meta (HUBS) et sur
 * hub-content (why, programme, faq) : chaque champ présent dans le guide remplace l'ancien.
 * Champs reconnus en plus de ceux de catalog-meta (voir le hub Claude) :
 *   outilCourt      nom de l'outil dans les titres (ex. 'Microsoft Copilot')
 *   titres          { why, spokes, programme, faq } : H2 propres à la page
 *   carteTitres     { [slug du spoke]: 'titre de la carte' }
 *   missionsTitre, avisTitre, avisPriorite (motifs cherchés dans le texte des avis Google)
 *   why, programme, faq : remplacent ceux de hub-content.js
 * Créé le 07/10/2026 (texte propre ≥ 90 % par page, demande de Mathias).
 */
import chatgpt from './chatgpt'
import copilot from './copilot'
import gemini from './gemini'
import mistral from './mistral'
import multiOutils from './multi-outils'
import sprintIa from './sprint-ia'

export const HUB_GUIDES = { chatgpt, copilot, gemini, mistral, 'multi-outils': multiOutils, 'sprint-ia': sprintIa }

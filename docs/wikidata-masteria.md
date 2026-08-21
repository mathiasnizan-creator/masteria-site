# Fiche Wikidata « Masteria » : prête à créer

> Pourquoi : Wikidata est la base d'entités que lisent Google (Knowledge Graph), Bing, et les moteurs de réponse IA pour « savoir qui est Masteria ». Un item propre, sourcé, relié au site officiel et à la presse, stabilise l'entité (nom, lieu, date, domaine, fondateur) dans toutes les réponses générées.
>
> Admissibilité : Wikidata demande une entité clairement identifiable, décrite dans au moins une source sérieuse et publique. L'article des Échos (2025) et le site officiel suffisent. Créer l'item depuis un compte Wikidata personnel (Mathias), pas anonyme.

## 1. Créer le compte et l'item

1. https://www.wikidata.org → « Créer un compte » (compte personnel, e-mail pro).
2. Menu de gauche → « Créer un nouvel élément » (Special:NewItem).
3. Remplir label + description + alias (section 2), valider, puis ajouter les déclarations une par une (section 3), chacune avec sa référence (section 4).

## 2. Labels, descriptions, alias

| Langue | Libellé | Description (minuscule initiale, sans point final) | Alias |
|---|---|---|---|
| fr | Masteria | cabinet de formation et de conseil en intelligence artificielle fondé à Lyon en 2022 | Masteria IA ; master-ia.fr |
| en | Masteria | French artificial intelligence training and consulting firm based in Lyon, founded in 2022 | Masteria AI ; master-ia.fr |

## 3. Déclarations (propriété → valeur)

Les identifiants Q des valeurs courantes sont donnés quand ils sont sûrs ; pour les autres, choisir la valeur proposée par le sélecteur de Wikidata (taper le texte indiqué).

| Propriété | Valeur | Remarque |
|---|---|---|
| P31 nature de l'élément | Q4830453 (entreprise / business) | |
| P17 pays | Q142 (France) | |
| P159 siège | Q456 (Lyon) | |
| P571 date de création | 2022 | précision « année » |
| P1448 nom officiel | Masteria (fr) | |
| P856 site officiel | https://www.master-ia.fr | langue : français |
| P1616 numéro SIREN | 919252403 | identifiant externe, sans espaces |
| P101 domaine d'activité | Q11660 (intelligence artificielle) | |
| P452 secteur d'activité | taper « formation professionnelle continue » et prendre l'élément proposé ; ajouter « conseil en management » si proposé | |
| P1454 forme juridique | taper « entreprise individuelle » et prendre l'élément français | Masteria est le nom commercial de l'EI de Mathias Nizan |
| P112 fondateur | Mathias Nizan | nécessite l'item personne (voir section 5) ; sinon laisser vide au départ |
| P4264 identifiant LinkedIn d'organisation | slug de la page entreprise LinkedIn de Masteria (la partie après `linkedin.com/company/`) | à compléter |
| P973 décrit à l'URL | l'URL de l'article des Échos (section 4) | |
| P1329 / P968 téléphone, e-mail | ne pas renseigner | vie privée, et le siège est le domicile |

Ne pas renseigner d'adresse postale (P6375) : le siège légal est le domicile, les bureaux ne sont pas le siège.

## 4. Références à attacher aux déclarations

Sur chaque déclaration importante (nature, pays, siège, création, domaine), ajouter une référence :

- **Les Échos** (preuve de notoriété) : P854 URL de référence = `https://www.lesechos.fr/travailler-mieux/travailler-avec-lia/si-vous-choisissez-un-modele-pas-adapte-les-gens-vont-chercher-de-leur-cote-chatgpt-claude-copilot-gemini-mistral-comment-choisir-lia-la-plus-adaptee-a-son-metier-2236741` ; P1476 titre = le titre de l'article ; P123 éditeur = Les Échos (Q1182754 à vérifier dans le sélecteur) ; P813 date de consultation = date du jour.
- **Site officiel** : P854 = `https://www.master-ia.fr/centre-formation-ia-entreprise` (page À propos) ; P813 date de consultation.
- **SIRENE** (pour le SIREN et la forme juridique) : P854 = `https://annuaire-entreprises.data.gouv.fr/entreprise/919252403` ; P813 date de consultation.
- **Qualiopi** (si une déclaration « certification » est ajoutée) : le certificat n° 725311-1 (CERTIFOPAC, valide du 29/01/2026 au 28/01/2029) se référence par le document officiel ; à n'ajouter que si une propriété adaptée est trouvée (« certification » P2021 n'est pas standard : ignorer si doute).

## 5. Item « Mathias Nizan » (optionnel, recommandé)

Créer un second item seulement si l'on est à l'aise avec une page personne publique (elle est visible de tous) :

| Propriété | Valeur |
|---|---|
| P31 | Q5 (être humain) |
| P21 | sexe ou genre (au choix de l'intéressé) |
| P27 pays de nationalité | Q142 (France) |
| P106 occupation | taper « consultant » et/ou « formateur » et prendre les éléments proposés |
| P108 employeur / P1830 propriétaire de | l'item Masteria |
| P856 site officiel | https://www.master-ia.fr |
| P6634 identifiant LinkedIn personnel | `mathias-nizan` (la partie après `linkedin.com/in/`) |
| P973 décrit à l'URL | l'article des Échos (qui le cite) |

Puis revenir sur l'item Masteria et renseigner P112 fondateur = Mathias Nizan.

## 6. Après création

- Noter les identifiants obtenus (Q… de Masteria, Q… de Mathias Nizan) dans la mémoire du chantier autorité.
- Ajouter le lien Wikidata au JSON-LD Organization du site (`sameAs`) : SEOHead / nœud organization, avec la page LinkedIn et la fiche Google.
- Laisser l'item vivre : ne pas le modifier fréquemment, compléter seulement avec des faits sourcés (nouvelle presse, nouvelle certification).

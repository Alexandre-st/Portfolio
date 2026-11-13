# Audit — Portfolio V3 (maquette `portfolio.pen` vs code actuel)

> Date : 11/11/2026 · Branche : `portfolio-v2`
> Objectif : comparer la nouvelle maquette au code actuel et réorienter le portfolio vers une **recherche de CDI** (la maquette est aujourd'hui pensée pour du freelance).

**Maquette :** `pen/portfolio.pen`. Ses images sont dans `pen/pen-assets/`, le dossier qu'elle attend à côté du fichier. Elles viennent de `src/assets/images/` (`Profil_Picture.jpg` renommée en `portrait-profil.jpg`).

---

## 1. Ce qui change, page par page

| Zone | Code actuel | Maquette |
|---|---|---|
| **Identité visuelle** | Mulish, fond blanc, texte `#262626`, pas de couleurs centralisées | 2 polices (Instrument Serif pour les titres, Inter Tight pour le corps ; JetBrains Mono retirée), couleurs centralisées dans des variables, accent orange `#FF4F26`, thèmes **sombre + clair** |
| **Logo** | `logo.jpg` | Monogramme « AS » en texte, avec nom et rôle à côté |
| **Header** | 3 liens, menu burger animé | 3 liens + pastille « Disponible en freelance » |
| **Accueil** | Photo + titre, nuage de 27 compétences, 3 images de projets, bouton « Un peu plus… » | Grand titre (« Je construis des *interfaces* front-end… »), chiffres clés (3 ans / 12+ / Paris), bandeau de technos, 2 cartes de projets + 4 lignes, section « À propos » avec photo et compétences classées en 4 groupes, bloc final avec mail et **CV** |
| **Portfolio** | 7 blocs image/texte en alternance | Grille de cartes, **filtres** (Sites vitrines / Applications / Landing pages), tri, en-tête « 09 projets » |
| **Page projet** | Grande image, titre, technos, Github/Live, 2 captures, liens précédent/suivant | Vraie **étude de cas** : fil d'Ariane, accroche, infos clés (rôle, année, durée, stack), récit, citation, 3 étapes « Approche », galerie avec légendes, précédent/suivant |
| **Contact** | Titre, icônes réseaux, mail, formulaire à 3 champs | 4 moyens de contact (mail, LinkedIn, GitHub, Malt), localisation, formulaire à **4 champs** (+ « Type de projet »), case de consentement, mention des champs obligatoires |
| **404** | Tuiles 4-0-4 + gif | « 4 ? 4 » typographique, liens d'aide + 3 projets suggérés |
| **Footer** | Liens + 3 icônes | Mail en grand, colonnes Pages / Réseaux (avec Malt), mention de la stack technique |
| **Accessibilité** | Contour de focus **supprimé** (`src/styles/base/_reset.scss:42`) | 2 planches dédiées : anneau de focus 3 px, lien d'évitement, cibles de 44 px, contrastes mesurés AAA |
| **Mentions légales** | Page existante | **Absente** de la maquette (lien seulement dans le footer) |

## 2. Les plus

- **Le design paraît pro et actuel.** Le contraste serif / sans-serif et les titres numérotés font « développeur qui soigne son travail ». C'est un argument en soi pour un poste front.
- **La page projet devient une étude de cas.** C'est **le plus gros gain pour un CDI** : un recruteur ou un lead tech veut savoir *comment tu réfléchis* (contraintes, découpage, choix). La version actuelle ne montre que des images.
- **L'accessibilité est spécifiée dans la maquette**, avec les WCAG citées et des contrastes mesurés. C'est rare et différenciant. À garder et à valoriser en entretien.
- **Les compétences sont classées en 4 groupes** au lieu d'une liste en vrac où « css », « scss » et « sass » apparaissent séparément.
- **Un bouton pour télécharger le CV.** Indispensable pour un CDI, absent aujourd'hui.
- **Les couleurs centralisées et le thème clair/sombre** vont assainir le SCSS, qui a aujourd'hui des couleurs codées en dur.
- **La 404** renvoie vers du contenu au lieu d'un cul-de-sac.

## 3. Les moins et les risques

### Contenu et crédibilité

- **Les chiffres ne sont pas cohérents entre eux** : « 12+ projets », « Voir les 12 projets », « 09 projets »… alors que `data.ts` en contient **7**. Advice Generator et Social Dashboard n'existent pas dans les données. Un recruteur le remarque.
- **« 3 ans d'expérience »** dans la maquette contre « depuis deux ans » dans le code. Il faut le chiffre réel. S'il s'agit d'auto-formation ou de projets perso, le dire, sinon ça peut se retourner en entretien.
- **Aucun projet après 2023**, alors qu'on est fin 2026. La grille datée le met en évidence.
- **Ce sont presque tous des exercices Frontend Mentor**, et l'étude de cas Arch Studio les met encore plus en avant. Raconter « le brief imposait… » sur un exercice, ça se voit.
- **L'étude de cas impose beaucoup de rédaction** : environ 10 textes par projet (accroche, durée, 2 paragraphes, citation, 3 étapes, légendes). Seul Arch Studio est rédigé. À prévoir dans le chantier, ou réserver ce format à 2 ou 3 projets.
- **Certaines affirmations doivent être vraies**, par exemple « contrastes vérifiés, navigation complète au clavier » pour Arch Studio. Sinon, les retirer.

### Technique

- **2 polices web au lieu d'1** (la maquette en prévoyait 3, JetBrains Mono a été retirée). Limiter les graisses et utiliser `font-display: swap`.
- **Pas de bouton pour changer de thème.** Le thème suivra donc la préférence du système (`prefers-color-scheme`). C'est très bien, mais à décider explicitement.
- **Les filtres et le tri** sont beaucoup de logique pour 7 à 9 projets. C'est discutable : ça rend surtout visible le petit nombre de projets par catégorie (02, 03…).
- **Le modèle de données devra être refondu** (`Project` dans `src/data/data.ts`) : ajouter catégorie, année, durée, rôle, étapes, citation et légendes, et retirer `styleName` et `color`.

## 4. Passer du freelance au CDI

Tout ce qui est orienté client est à réécrire :

| Où | Actuel (maquette) | Proposition |
|---|---|---|
| Pastille du header | « Disponible en freelance » | « Ouvert aux opportunités CDI » |
| Bloc final (Accueil / Portfolio) | « Un projet en tête ? » + « missions freelance ou CDI » | « Et si on travaillait ensemble ? » + « En recherche d'un CDI front-end, Paris / hybride » |
| Contact – titre | « Parlons de votre projet » | « Parlons de votre équipe » / « Discutons d'un poste » |
| Contact – champ | « Type de projet : Site vitrine, application… » | « Entreprise » ou « Poste concerné » |
| Contact – message | « Contexte, périmètre, échéance… » | « Le poste, l'équipe, la stack… » |
| Contact / Footer | **Malt** | Retirer (signal freelance fort), mettre le CV PDF à la place |
| Footer | Twitter | À retirer ou à renommer X, selon l'usage réel |
| Contact | « Réponse sous 24 h » | Inutile pour un recruteur, à retirer |

### Ce qui manque pour un CDI (code et maquette)

1. **Un parcours** (formation O'clock, postes, alternance, dates) sous forme de petite frise dans « À propos ». C'est la première chose qu'un recruteur cherche, et ce n'est nulle part.
2. **Le CV en PDF** : le bouton existe dans la maquette, mais il n'y a pas de fichier dans `public/`.
3. **Le portfolio lui-même comme projet** : TanStack Start, TypeScript, rendu serveur, accessibilité AAA. C'est le projet le plus récent et le plus proche de la stack d'une entreprise, et il ne figure pas dans la liste.
4. **Opquast** et **Redux** ont disparu des compétences dans la maquette. Opquast est un vrai atout en France, et Redux est utilisé dans NetFlims. À remettre.
5. **Ce que je cherche** : type de poste, type d'équipe, localisation ou hybride. Une phrase suffit.

## 5. Bugs dans le code actuel (à corriger quel que soit le design)

- `src/data/data.ts:136` : Typemaster pointe vers `prevProject: 'designo'` au lieu de `'easybank'`.
- `src/styles/base/_reset.scss:42` : le contour de focus est supprimé, ce qui contredit directement la planche accessibilité.
- `src/components/Menu.tsx:940` : le burger est une `<img onClick>`, pas un `<button>`, donc inaccessible au clavier. Pas d'`aria-expanded`. Ses liens sont codés en dur (« Home » au lieu de « Accueil ») au lieu d'utiliser `NAV_LINKS`.
- `src/components/Modal.tsx` : pas de `role="dialog"`, pas de gestion du focus, pas de fermeture avec Échap, et un bouton « X » sans libellé.
- `src/pages/Project.tsx:525` : précédent/suivant affichent le slug (`todolist`) au lieu du titre (« Todo List »).
- `src/layouts/Header.tsx:831` : `aria-label` en anglais sur une page en `lang="fr"`.

## 6. Ordre de chantier suggéré

1. **Le contenu d'abord** : chiffres réels, parcours, CV PDF, liste de projets définitive (avec le portfolio lui-même), textes orientés CDI dans la maquette.
2. **Les fondations** : couleurs et polices en variables SCSS, thème selon la préférence système, focus et lien d'évitement. Corriger au passage les bugs de la section 5.
3. **Le modèle de données** des projets, puis la page projet en étude de cas. C'est la page qui a le plus de valeur.
4. Accueil, puis Contact, puis Portfolio (filtres en option), puis 404.

## 7. Décisions SCSS (fondations posées)

- **Variables de thème en variables CSS** (`src/styles/common/_tokens.scss`), car elles changent à l'exécution sans dupliquer de règles. **Breakpoints et mixins restent en SCSS**, car les variables CSS ne fonctionnent pas dans `@media`.
- **Nommage des variables** : nom du `.pen` + préfixe de catégorie (`--color-bg`, `--color-text-2`, `--font-display`…). Correspondance 1:1 avec la maquette.
- **Classes en BEM strict** : `bloc__element--variante`. À appliquer au fil de la refonte de chaque page (les classes actuelles n'ont pas été renommées).
- **Polices** : 2 au lieu de 3. Instrument Serif (`--font-display`) pour les titres et accents, Inter Tight (`--font-sans`) pour le corps. Les libellés prévus en JetBrains Mono (10–12 px, majuscules) passent en Inter Tight majuscules avec le même espacement de lettres et `tabular-nums`. Dans le `.pen`, la variable `font-mono` reste à remplacer.
- **Typographie** : classes par rôle dans `src/styles/common/_typography.scss` (`.text-display`, `.text-page-title`, `.text-section-title`, `.text-subtitle`, `.text-card-title`, `.text-item-title`, `.text-accent`, `.text-quote`, `.text-lead`, `.text-body`, `.text-body-sm`, `.text-caption`, `.text-label`). Tailles fluides entre 390 et 1440 px via `fluid()`. Mulish retirée. Les anciennes classes (`.big-title`…) restent dans `_common.scss` jusqu'à la refonte des pages.
- **Unités** : `:root { font-size: 100% }`, valeurs écrites en px de la maquette via `px-to-rem()` (base 16). Les anciens `rem` (base 10) ont été convertis : le rendu actuel est identique.
- **Pas encore appliqué** : les variables existent mais ne sont pas utilisées par les pages actuelles (fond blanc, Mulish). Les polices Instrument Serif et Inter Tight ne sont pas encore chargées. Ajouter `color-scheme` (light / dark) dans les mixins `theme-light` / `theme-dark` au moment où les pages utiliseront les variables.
- **Thème** : light par défaut, choix light / dark / system via le bouton `ThemeToggle` du header. Préférence stockée dans `localStorage.theme`, appliquée sur `<html data-theme>` avant le premier rendu par `ThemeScript` (`ScriptOnce` de TanStack). Logique dans `src/providers/ThemeProvider.tsx` et `src/providers/themeContext.ts`.

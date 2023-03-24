import archStudioPreview1 from "../assets/images/projects/Arch-1.jpg";
import archStudioPreview3 from "../assets/images/projects/Arch-2.jpg";
import archStudioPreview2 from "../assets/images/projects/Arch-3.jpg";
import archStudio from "../assets/images/projects/archStudio.jpg";
import designoPreview1 from "../assets/images/projects/Designo-1.jpg";
import designoPreview3 from "../assets/images/projects/Designo-2.jpg";
import designoPreview2 from "../assets/images/projects/Designo-3.jpg";
import designo from "../assets/images/projects/designo.jpg";
import githubPreview from "../assets/images/projects/Devfinder.jpg";
import easybankPreview1 from "../assets/images/projects/easybank-1.jpg";
import easybankPreview3 from "../assets/images/projects/easybank-2.jpg";
import easybankPreview2 from "../assets/images/projects/easybank-3.jpg";
import easybank from "../assets/images/projects/easybank.jpg";
import github from "../assets/images/projects/github_user.png";
import netflimsPreview3 from "../assets/images/projects/Netflims-2.jpg";
import netflimsPreview2 from "../assets/images/projects/Netflims-3.jpg";
import netflims from "../assets/images/projects/netflims.jpg";
import todoList from "../assets/images/projects/todoList.png";
import typemasterPreview1 from "../assets/images/projects/Typemaster-1.jpg";
import typemasterPreview3 from "../assets/images/projects/Typemaster-2.jpg";
import typemasterPreview2 from "../assets/images/projects/Typemaster-3.jpg";
import typemaster from "../assets/images/projects/typemaster.jpg";

const projects = [
  {
    id: "0",
    styleName: "projects-container",
    image: archStudio,
    color: "#eeeff4",
    title: "Arch Studio",
    linkName: "archstudio",
    infos:
      "Un site vitrine multi-pages qui devait correspondre à la maquette fournie par la plateforme Frontend Mentor. Utilisation de React, Sass, Leaflet JS et Formik.",
    type: "Développement Front-End",
    technos: ["REACT", "REACT-ROUTER", "SASS", "FORMIK"],
    link: "https://alexandre-st-arch-studio.netlify.app",
    github: "https://github.com/Alexandre-st/Arch-studio-multipage-website",
    hero: archStudioPreview1,
    preview1: archStudioPreview2,
    preview2: archStudioPreview3,
    prevProject: "todolist",
    nextProject: "netflims",
  },
  {
    id: "1",
    styleName: "projects-container projects-container-reverse",
    image: netflims,
    color: "#161d2f",
    title: "NetFlims",
    linkName: "netflims",
    infos:
      "Une application web proposant un service de vidéo à la demande. Utilisation de Supabase pour l'authentification et gestion des favoris, gestion du profil via une route dédiée, possibilité de contacter les créateurs de la plateforme via un formulaire et envoi d'e-mails géré grâce à EmailJS.",
    type: "Développement Front-End",
    technos: [
      "REACT",
      "REACT-ROUTER",
      "REDUX",
      "SASS",
      "FORMIK",
      "SUPABASE",
      "EMAILJS",
    ],
    link: "https://netflims.netlify.app/",
    github: "https://github.com/Alexandre-st/NetFlims",
    hero: netflimsPreview2,
    preview1: netflimsPreview2,
    preview2: netflimsPreview3,
    prevProject: "archstudio",
    nextProject: "designo",
  },
  {
    id: "2",
    styleName: "projects-container",
    image: designo,
    color: "#E7816B",
    title: "Designo",
    linkName: "designo",
    infos:
      "Mon premier site web multi-pages qui devait correspondre à la maquette fournie par la plateforme Frontend Mentor.Utilisation de React, Sass, et Leaflet JS : gestion des maps et des routes, formulaires de prise de contact, disposition d'éléments sur plusieurs pages (méthode DRY) et déstructuration des composants avec React.",
    type: "Développement Front-End",
    technos: ["REACT", "REACT-ROUTER", "LEAFLETJS", "SASS"],
    link: "https://alexandre-st-designo.netlify.app",
    github: "https://github.com/Alexandre-st/Designo-multi-page",
    hero: designoPreview1,
    preview1: designoPreview2,
    preview2: designoPreview3,
    prevProject: "netflims",
    nextProject: "easybank",
  },
  {
    id: "3",
    styleName: "projects-container projects-container-reverse",
    image: easybank,
    color: "linear-gradient(53.82deg, #33D362 0%, #2AB6D9 100%)",
    title: "Easybank",
    linkName: "easybank",
    infos:
      "Landing page mise en place avec React et Sass. Première utilisation de framer-motion pour rendre le site plus dynamique. Travail sur la disposition des images en arrière-plan.",
    type: "Développement Front-End",
    technos: ["REACT", "SASS", "FRAMER-MOTION"],
    link: "https://easybank-landing-page-alexandre-st.netlify.app",
    github: "https://github.com/Alexandre-st/Easybank-landing-page",
    hero: easybankPreview1,
    preview1: easybankPreview2,
    preview2: easybankPreview3,
    prevProject: "designo",
    nextProject: "typemaster",
  },
  {
    id: "4",
    styleName: "projects-container",
    image: typemaster,
    color: "#f16718",
    title: "Typemaster",
    linkName: "typemaster",
    infos:
      "Page en HTML et Sass avec un fort accent sur CSS Flexbox qui devait correspondre à la maquette fournie par la plateforme Frontend Mentor : travail sur la gestion des blocs et optimisation du rendu des images.",
    type: "Développement Front-End",
    technos: ["HTML", "SASS", "PARCEL"],
    link: "https://alexandre-st-typemaster.netlify.app/",
    github: "https://github.com/Alexandre-st/Typemaster-landing-page",
    hero: typemasterPreview1,
    preview1: typemasterPreview2,
    preview2: typemasterPreview3,
    prevProject: "designo",
    nextProject: "devfinder",
  },
  {
    id: "5",
    styleName: "projects-container projects-container-reverse",
    image: github,
    color: "#1e2b48",
    title: "DevFinder",
    linkName: "devfinder",
    infos:
      "Une application React qui récupère des données de Github pour permettre aux utilisateurs de rechercher des informations sur un profil souhaité. Utilisation de l'API des utilisateurs de Github pour la récupération et l'affichage des principales informations. Mise en place d'un mode sombre en fonction de la préférence de l'utilisateur (via prefers-color-scheme).",
    type: "Développement Front-End",
    technos: ["REACT", "SASS", "API", "PROP-TYPES"],
    link: "https://alexandre-st-devfinder.netlify.app",
    github: "https://github.com/Alexandre-st/GitHub-user-search-app",
    hero: github,
    preview1: github,
    preview2: githubPreview,
    prevProject: "typemaster",
    nextProject: "todolist",
  },
  {
    id: "6",
    styleName: "projects-container",
    image: todoList,
    color: "linear-gradient(135deg, #5df, #c058f3)",
    title: "Todo List",
    linkName: "todolist",
    infos:
      "La classique TODO List avec quelques petits éléments sympas. Cette application inclut un switch theme et un système de drag & drop pour réorganiser les listes.",
    type: "Développement Front-End",
    technos: ["HTML", "SCSS", "JAVASCRIPT"],
    link: "https://alexandre-st-todoapp.netlify.app",
    github: "https://github.com/Alexandre-st/ToDo-List",
    hero: todoList,
    preview1: todoList,
    preview2: todoList,
    prevProject: "devfinder",
    nextProject: "archstudio",
  },
];

const skills = [
  { title: "Javascript" },
  { title: "React" },
  { title: "Git" },
  { title: "Git Flow" },
  { title: "HTML" },
  { title: "css" },
  { title: "scss" },
  { title: "sass" },
  { title: "CSS Modules" },
  { title: "Styled-Components" },
  { title: "TailwindCSS" },
  { title: "Redux" },
  { title: "Node.JS" },
  { title: "Express" },
  { title: "SQL" },
  { title: "MySQL" },
  { title: "PostgreSQL" },
  { title: "MongoDB" },
  { title: "User Experience" },
  { title: "Use Case" },
  { title: "User Stories" },
  { title: "Gestion de Projet" },
  { title: "Figma" },
  { title: "Framer-Motion" },
  { title: "Opquast" },
  { title: "Netlify" },
];

export { projects, skills };

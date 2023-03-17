import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Me from "../assets/images/Profil_Picture.jpg";
import { projects, skills } from "../data/data";
import { fadeIn } from "../utils/motion";

const Homepage = () => {
  return (
    <main className="container">
      <motion.section
        className="hero"
        variants={fadeIn}
        initial="initial"
        whileInView={"show"}
        viewport={{ once: true }}
      >
        <div className="hero-img">
          <img src={Me} alt="C'est moi, Alexandre Saint-Prix" />
        </div>
        <div className="hero-text">
          <h1 className="hero-text-title">
            <span>Salut, c’est Alexandre.</span>
            <span className="hero-text-title-span">Développeur Front-End</span>
          </h1>
          <p className="hero-text-text text">
            Je suis un développeur front-end qui se concentre sur l’écriture
            accessible d’un code HTML, d'un code JavaScript propre et sur
            l’utilisation de pratiques modernes du CSS. J’utilise le plus
            souvent React, mais je peux m’adapter à tous les outils demandés.
          </p>
          <p className="text">
            Je suis situé à Paris et possède de l’expérience en remote.
          </p>
        </div>
      </motion.section>
      <motion.section
        className="skills"
        variants={fadeIn}
        initial="initial"
        whileInView={"show"}
        viewport={{ once: true }}
      >
        <div className="skills-text">
          <h2 className="skills-text-title big-title">Mes compétences</h2>
          <p className="skills-text-text text">
            Depuis mes débuts chez O'Clock, je n’ai cessé de développer une
            expérience solide des standards du développement web.<br /> La
            réutilisabilité et l'évolutivité du code sont des aspects
            primordiaux qui doivent être pris en compte, notamment dans la
            considération de l’expérience de l’utilisateur.
          </p>
        </div>
        <div className="skills-content">
          <ul className="skills-content-list">
            {skills.map((skill) => (
              <li className="skills-content-list-li" key={skill.title}>
                {skill.title}
              </li>
            ))}
          </ul>
        </div>
      </motion.section>
      <motion.section
        className="work"
        variants={fadeIn}
        initial="initial"
        whileInView={"show"}
        viewport={{ once: true }}
      >
        <h3 className="work-title big-title">Mes Projets</h3>
        <div className="work-content">
          {projects
            .filter((project) => project.id < 3)
            .map((element) => {
              return (
                <div
                  className="work-content-element"
                  // style={{ background: element.color }}
                  key={element.id}
                >
                  <img src={element.hero} alt={element.name} />
                </div>
              );
            })}
        </div>
        <Link className="button button-white button-work" to="/portfolio">
          Un peu plus ...
        </Link>
      </motion.section>
    </main>
  );
};

export default Homepage;

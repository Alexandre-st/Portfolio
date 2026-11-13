import * as m from 'motion/react-m';
import { Link } from '@tanstack/react-router';
import Me from '~/assets/images/Profil_Picture.jpg';
import Hero from '~/components/Hero';
import { projects, skills } from '~/data/data';
import { fadeIn } from '~/utils/motion';

const Homepage = () => {
    return (
        <main>
            <Hero />
            <div className="container">
                <m.section
                    className="intro"
                    variants={fadeIn}
                    initial="initial"
                    whileInView={'show'}
                    viewport={{ once: true }}
                >
                    <div className="intro-img">
                        <img src={Me} alt="C'est moi, Alexandre Saint-Prix" />
                    </div>
                    <div className="intro-text">
                        <h2 className="intro-text-title">
                            <span>Salut, c’est Alexandre.</span>
                            <span className="intro-text-title-span">Développeur Front-End</span>
                        </h2>
                        <p className="intro-text-text text">
                            Je suis un développeur front-end depuis deux ans qui se concentre sur
                            l’écriture accessible d’un code HTML, d'un code JavaScript propre et sur
                            l’utilisation de pratiques modernes du CSS. J’utilise React, mais je
                            peux m’adapter à tous les outils demandés.
                        </p>
                        <p className="text">Je travaille à Paris et en remote si besoin.</p>
                    </div>
                </m.section>
                <m.section
                    className="skills"
                    variants={fadeIn}
                    initial="initial"
                    whileInView={'show'}
                    viewport={{ once: true }}
                >
                    <div className="skills-text">
                        <h2 className="skills-text-title big-title">Mes compétences</h2>
                        <p className="skills-text-text text">
                            Depuis mes débuts chez O'Clock, je n’ai cessé de développer une
                            expérience solide des standards du développement web.
                            <br /> La réutilisabilité et l'évolutivité du code sont des aspects
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
                </m.section>
                <m.section
                    id="projets"
                    className="work"
                    variants={fadeIn}
                    initial="initial"
                    whileInView={'show'}
                    viewport={{ once: true }}
                >
                    <h2 className="work-title big-title">Mes Projets</h2>
                    <div className="work-content">
                        {projects
                            .filter((project) => Number(project.id) < 3)
                            .map((element) => {
                                return (
                                    <div className="work-content-element" key={element.id}>
                                        <img
                                            src={element.hero}
                                            alt={`Photo du projet ${element.title}`}
                                        />
                                    </div>
                                );
                            })}
                    </div>
                    <Link className="button button-white button-work" to="/portfolio/">
                        Un peu plus ...
                    </Link>
                </m.section>
            </div>
        </main>
    );
};

export default Homepage;

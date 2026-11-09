import { Link, getRouteApi } from '@tanstack/react-router';
import ArrowLeft from '../assets/icons/Path-left.svg';
import ArrowRight from '../assets/icons/Path-right.svg';

const route = getRouteApi('/portfolio/$work');

const Project = () => {
    const project = route.useLoaderData();

    return (
        <main className="container">
            <div className="project-hero">
                <img src={project.hero} alt={project.title} />
            </div>

            <section className="details">
                <aside className="details-aside">
                    <div className="border" />
                    <div className="details-aside-content">
                        <div className="details-aside-aside">
                            <h1 className="middle-title">{project.title}</h1>
                            <div className="details-aside-text">
                                <p className="text-infos">{project.type}</p>
                                <p className="text-infos text-infos-technos">
                                    {project.technos.join(' / ')}
                                </p>
                                <div className="details-aside-link">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="button button-link details-aside-link-a"
                                    >
                                        Lien Github
                                    </a>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="button button-link details-aside-link-a"
                                    >
                                        Projet Live
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border" />
                </aside>

                <div className="details-content">
                    <h2 className="little-title">Description du projet</h2>
                    <p className="text">{project.infos}</p>
                    <h3 className="little-title">Visuel statique</h3>
                    <img
                        className="details-content-preview"
                        src={project.preview1}
                        alt={`Visuel de la version desktop du projet ${project.title}`}
                    />
                    <img
                        className="details-content-preview"
                        src={project.preview2}
                        alt={`Visuel de la version mobile du projet ${project.title}`}
                    />
                </div>
            </section>

            <section className="project-link">
                <div className="project-link-left">
                    <img className="project-link-img" src={ArrowLeft} alt="Projet précédent" />
                    <Link to="/portfolio/$work" params={{ work: project.prevProject }}>
                        <h4 className="project-link-title link-title">{project.prevProject}</h4>
                        <p className="small-text">Projet Précédent</p>
                    </Link>
                </div>
                <div className="border border-rotate" />
                <div className="project-link-right">
                    <img className="project-link-img" src={ArrowRight} alt="Projet suivant" />
                    <Link to="/portfolio/$work" params={{ work: project.nextProject }}>
                        <h4 className="project-link-title link-title">{project.nextProject}</h4>
                        <p className="small-text">Projet Suivant</p>
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Project;

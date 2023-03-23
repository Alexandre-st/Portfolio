import { Link, useParams } from "react-router-dom";
import ArrowLeft from '../assets/icons/Path-left.svg';
import ArrowRight from '../assets/icons/Path-right.svg';
import { projects } from "../data/data";
import NotFound from "./NotFound";

const Project = () => {
  const { work } = useParams();
  const data = projects;
  const isAProject = data.filter((project) => project.linkName === work);

  return (
    <main className="container">
      {isAProject.length === 0 ? (
        <NotFound />
      ) : (
        <>
          <div className="project-hero">
            <img src={isAProject[0].hero} alt={isAProject[0].title} />
          </div>

          <section className="details">
            <aside className="details-aside">
              <div className="border" />
              <div className="details-aside-content">
                <div className="details-aside-aside">
                  <h1 className="middle-title">{isAProject[0].title}</h1>
                  <div className="details-aside-text">
                    <p className="text-infos">{isAProject[0].type}</p>
                    <p className="text-infos text-infos-technos">{isAProject[0].technos.join(" / ")}</p>
                    <div className="details-aside-link">
                      <a href={isAProject[0].github} target="_blank" className="button button-link details-aside-link-a">Lien Github</a>
                      <a href={isAProject[0].link} target="_blank" className="button button-link details-aside-link-a">Projet Live</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border" />
            </aside>

            <div className="details-content">
              <h2 className="little-title">Description du projet</h2>
              <p className="text">{isAProject[0].infos}</p>
              <h3 className="little-title">Visuel statique</h3>
              <img className="details-content-preview" src={isAProject[0].preview1} alt={`Visuel de la version desktop du projet ${isAProject[0].title}`} />
              <img className="details-content-preview" src={isAProject[0].preview2} alt={`Visuel de la version mobile du projet ${isAProject[0].title}`} />
            </div>
          </section>

          <section className="project-link">
            <div className="project-link-left">
              <img className="project-link-img" src={ArrowLeft} alt="Projet précédent" />
              <Link to={`/portfolio/${isAProject[0].prevProject}`}>
                <h4 className="project-link-title link-title">
                  {isAProject[0].prevProject}
                </h4>
                <p className="small-text">Projet Précédent</p>
              </Link>
            </div>
            <div className="border border-rotate" />
            <div className="project-link-right">
              <img className="project-link-img" src={ArrowRight} alt="Projet suivant" />
              <Link to={`/portfolio/${isAProject[0].nextProject}`}>
                <h4 className="project-link-title link-title">
                  {isAProject[0].nextProject}
                </h4>
                <p className="small-text">Projet Suivant</p>
              </Link>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Project;

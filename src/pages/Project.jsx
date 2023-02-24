import { Link, useParams } from "react-router-dom";
import ArrowLeft from '../assets/icons/Path-left.svg';
import ArrowRight from '../assets/icons/Path-right.svg';
import { projects } from "../data/projects";
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
            <img src={isAProject[0].image} alt={isAProject[0].title} />
          </div>

          <section className="details">
            <aside className="details-aside">
              <div className="border" />
              <div className="details-aside-content">
                <div className="details-aside-aside">
                  <h1 className="middle-title">{isAProject[0].title}</h1>
                  <p className="details-aside-normal-text text">{isAProject[0].infos}</p>
                  <div className="details-aside-text">
                    <p className="text-infos">{isAProject[0].type}</p>
                    <p className="text-infos text-infos-technos">{isAProject[0].technos.join(" / ")}</p>
                    <div className="details-aside-link">
                      <a href={isAProject[0].github} target="_blank" className="button button-link details-aside-link-a">Lien Github</a>
                      <a href={isAProject[0].link} target="_blank" className="button button-link details-aside-link-a">Projet Live</a>
                    </div>
                  </div>
                </div>
                <div className="details-aside-content-tablet">
                  <p className="text">{isAProject[0].infos}</p>
                </div>
              </div>
              <div className="border" />
            </aside>

            <div className="details-content">
              <h2 className="little-title">Project Background</h2>
              <p className="text">{isAProject[0].desc}</p>
              <h3 className="little-title">Static Previews</h3>

              <img className="details-content-preview" src={isAProject[0].image} alt={isAProject[0].title} />
            </div>
          </section>

          <section className="project-link">
            <div className="project-link-left">
              <img className="project-link-img" src={ArrowLeft} alt="Arrow towards the previous project" />
              <Link to={`/portfolio/${isAProject[0].prevProject}`}>
                <h4 className="project-link-title link-title">
                  {isAProject[0].prevProject}
                </h4>
                <p className="small-text">Projet Précédent</p>
              </Link>
            </div>
            <div className="border border-rotate" />
            <div className="project-link-right">
              <img className="project-link-img" src={ArrowRight} alt="Arrow towards the next project" />
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

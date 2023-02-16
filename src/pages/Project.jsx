import { Link, useParams } from "react-router-dom";
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
          <img src={isAProject[0].image} alt={isAProject[0].title} />

          <section className="details">
            <aside className="details-aside">
              <div className="border" />
              <div className="details-aside-content">
                <div className="details-aside-aside">
                  <h1>{isAProject[0].title}</h1>
                  <p className="details-aside-normal-text small-text">
                    {isAProject[0].infos}
                  </p>
                  <div className="details-aside-text">
                    <p className="text-infos">{isAProject[0].type}</p>
                    <p className="text-infos">
                      {isAProject[0].technos.join(" / ")}
                    </p>
                    <button className="button button-project">
                      VIEW PROJECT
                    </button>
                  </div>
                </div>
                <div className="details-aside-content-tablet">
                  <p className="small-text">{isAProject[0].infos}</p>
                </div>
              </div>
              <div className="border" />
            </aside>

            <div className="details-content">
              <h2 className="little-title">Project Background</h2>
              <p className="small-text">{isAProject[0].desc}</p>
              <h3 className="little-title">Static Previews</h3>

             <img src={isAProject[0].image} alt="" />              
            </div>
          </section>

          <section className="project-link">
            <div className="project-link-left">
              {/* <img className="project-link-img" src={ArrowLeft} alt="Arrow towards the previous project" /> */}
              <Link to={`/portfolio/${isAProject[0].prevProject}`}>
                <h4 className="little-title project-link-title">{isAProject[0].prevProject}</h4>
                <p className="text">Previous Project</p>
              </Link>
            </div>
            <div className="border border-rotate" />
            <div className="project-link-right">
              {/* <img className="project-link-img" src={ArrowRight} alt="Arrow towards the next project" /> */}
              <Link to={`/portfolio/${isAProject[0].nextProject}`}>
                <h4 className="little-title project-link-title">{isAProject[0].nextProject}</h4>
                <p className="small-text">Next Project</p>
              </Link>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Project;

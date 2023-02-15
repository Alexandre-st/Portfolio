import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section className="projects">
      {projects.map((project) => {
        return (
          <div className={project.styleName} key={project.id}>
            <div
              className="projects-background"
              style={{ background: project.color }}
            >
              <img src={project.image} alt={project.title} />
            </div>
            <div className="projects-content">
              <div className="border"></div>
              <h2 className="projects-content-title big-title">
                {project.title}
              </h2>
              <p className="text">{project.infos}</p>
              <Link className="button button-project" to={`/portfolio/${project.linkName}`}>VIEW PROJECT</Link>
            </div>
          </div>
        );
      })}
    </section>
  );
};
 
export default Projects;
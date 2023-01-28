import { projects } from '../data/projects';

const Projects = () => {
  // console.log(projects);
  return (
    <section className="projects">
      {projects.map(project => {
        return (
          <div className={project.styleName} key={project.id}>
            <div className="projects-background" style={{ backgroundColor: project.color }}>
            <p>{projects.color}</p>
              <img src={project.image} alt={project.title} />
            </div>
            <div className="projects-content">
              <h2>{project.title}</h2>
              <p>{project.infos}</p>
            </div>
          </div>
        )
      })}
    </section>
  );
};
 
export default Projects;
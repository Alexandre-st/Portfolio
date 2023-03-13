import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/data';
import { fadeIn } from '../utils/motion';

const Projects = () => {
  return (
    <section className="projects">
      {projects.map((project) => {
        return (
          <motion.div
            className={project.styleName}
            key={project.id}
            variants={fadeIn}
            initial="initial"
            whileInView={"show"}
            viewport={{ once: true }}
          >
            <div
              className="projects-background"
              style={{ background: project.color }}
            >
              <img src={project.image} alt={project.title} />
            </div>
            <div className="projects-content">
              <div className="border" />
              <div className="projects-content-text">
                <h2 className="projects-content-title big-title">
                  {project.title}
                </h2>
                <p className="text">{project.infos}</p>
                <Link
                  className="button button-white"
                  to={`/portfolio/${project.linkName}`}
                >
                  VOIR LE PROJET
                </Link>
              </div>
              <div className="border" />
            </div>
          </motion.div>
        );
      })}
    </section>
  );
};
 
export default Projects;
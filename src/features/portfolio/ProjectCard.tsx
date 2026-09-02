import { motion } from "motion/react";
import type { Project } from "~/data/projects";
import { fadeInUp } from "~/lib/motion";

export function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.article className="project-card" variants={fadeInUp}>
            <div className="project-card__media">
                <img src={project.image} alt="" loading="lazy" width={640} height={400} />
            </div>
            <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                <ul className="project-card__tags">
                    {project.tags.map((tag) => (
                        <li key={tag} className="project-card__tag">
                            {tag}
                        </li>
                    ))}
                </ul>
            </div>
            {project.url ? (
                <a
                    className="overlink"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <span className="visually-hidden">View {project.title}</span>
                </a>
            ) : null}
        </motion.article>
    );
}

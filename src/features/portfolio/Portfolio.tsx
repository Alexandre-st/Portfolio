import { motion } from "motion/react";
import { Container } from "~/components/ui/Container";
import { projects } from "~/data/projects";
import { inViewOnce, staggerContainer } from "~/lib/motion";
import { ProjectCard } from "./ProjectCard";

export function Portfolio() {
    return (
        <Container as="section" id="work" className="work">
            <h2 className="work__heading">Selected work</h2>
            <motion.ul className="work__grid" variants={staggerContainer} {...inViewOnce}>
                {projects.map((project) => (
                    <li key={project.slug}>
                        <ProjectCard project={project} />
                    </li>
                ))}
            </motion.ul>
        </Container>
    );
}

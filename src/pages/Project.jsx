import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import NotFound from "./NotFound";

const Project = () => {
  const { work } = useParams();
  const data = projects;

  return (
    <main className="container">
      {data.filter((project) => project.linkName === work).map((project) => (
        <section key={project.id}>
          <h1>{project.title}</h1>
        </section>
        ))
      }
    </main>
  );
};
 
export default Project;
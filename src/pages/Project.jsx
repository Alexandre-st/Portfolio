import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import NotFound from "./NotFound";

const Project = () => {
  const { work } = useParams();
  const data = projects;
  // console.log(work);
  const isAProject = data.filter((project) => project.linkName === work);
  // console.log(isAProject);

  return (
    <main className="container">
      {isAProject.length === 0 ? (
        <NotFound />
      ) : (
         <h1>{isAProject[0].title}</h1>
      )}
    </main>
  );
};

export default Project;

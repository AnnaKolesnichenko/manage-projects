import { useParams } from "react-router-dom";

const ProjectItem = ({ projects }) => {
  const { id } = useParams();
  //const project = projects.find((item) => item.id === id);
  console.log(id);
  console.log(projects);

  return (
    <li key={id}>
      {/* <h2>{project.title}</h2>
      <p>{project.description}</p>
      <h3>{project.date}</h3> */}
    </li>
  );
};

export default ProjectItem;

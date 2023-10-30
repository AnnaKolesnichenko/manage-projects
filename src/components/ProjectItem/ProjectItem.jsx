import { useParams } from "react-router-dom";

const ProjectItem = ({ projects }) => {
  const { id } = useParams();
  console.log(projects);
  const project = projects.find((item) => item.id === id);
  console.log(project.date);

  const formattedDate = project.date.toLocaleString();

  return (
    <li
      key={id}
      className="flex flex-col list-none mt-20 gap-10 p-5 bg-white h-[300px] w-[500px]"
    >
      <h2 className="capitalize text-xl text-stone-800">{project.title}</h2>
      <p>{project.description}</p>
      <h3>{formattedDate}</h3>
    </li>
  );
};

export default ProjectItem;

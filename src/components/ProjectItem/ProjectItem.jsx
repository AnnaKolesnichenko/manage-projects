import { useNavigate, useParams } from "react-router-dom";
import Tasks from "../Tasks/Tasks";

const ProjectItem = ({ projects, handleDeleteItem }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((item) => item.id === id);

  const formattedDate = project.date.toLocaleString().slice(0, 10);

  const handleDelete = () => {
    handleDeleteItem(id);
    navigate("/");
  };

  return (
    <div className="flex flex-col">
      <li
        key={id}
        className="flex flex-col list-none mt-20 gap-10 p-5 h-[300px] w-[90%] border-b-2"
      >
        <h2 className="capitalize text-xl text-stone-800 font-bold">
          {project.title}
        </h2>
        <h3 className="text-md text-stone-600 ">{formattedDate}</h3>
        <p className="text-md text-stone-600 capitalize">
          {project.description}
        </p>
        <button
          onClick={() => handleDelete(id)}
          className="border-b-2 border-rose-600 w-[50px] ml-auto mr-auto hover:text-rose-600 hover:border-b-stone-600"
        >
          Delete
        </button>
      </li>
      <Tasks />
    </div>
  );
};

export default ProjectItem;

import CustomButton from "../CustomButton";
import { useNavigate } from "react-router-dom";
import Projects from "../Projects/Projects";

const SideBar = ({ projects }) => {
  const navigate = useNavigate();

  const handleCreateButton = () => {
    navigate("/addProject");
  };

  return (
    <aside className="w-1/3 px-8 py-16 flex flex-col bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        YOUR PROJECTS
      </h1>
      <CustomButton onClick={handleCreateButton}>+ Add Project</CustomButton>
      <Projects projects={projects} />
    </aside>
  );
};

export default SideBar;

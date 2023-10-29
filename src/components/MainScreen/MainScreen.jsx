import textbook from "../../assets/no-projects.png";
import CustomButton from "../CustomButton";
import { useNavigate } from "react-router-dom";

const MainScreen = () => {
  const navigate = useNavigate();

  const handleCreateButton = () => {
    navigate("/addProject");
  };
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={textbook}
        alt="textbook"
        className="w-16 h-16 object-contain mx-auto"
      />

      <h1 className="text-xl font-bold etxt-stone-500 mt-4 mb-4">
        No Project Selected
      </h1>
      <p className="text-stone-400 mb-4 ">
        Select a project or get started with a new one
      </p>
      <CustomButton onClick={handleCreateButton}>
        Create a new project
      </CustomButton>
    </div>
  );
};

export default MainScreen;

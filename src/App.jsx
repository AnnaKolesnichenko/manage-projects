import { useState } from "react";
import AddProject from "./components/AddProject/AddProject";
import MainScreen from "./components/MainScreen/MainScreen";
import SideBar from "./components/SideBar/SideBar";
import { Routes, Route } from "react-router-dom";
import ProjectItem from "./components/ProjectItem/ProjectItem";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [projects, setProjects] = useState([]);
  console.log(projects);
  const getInputsData = (data) => {
    console.log(data);
    const item = {
      ...data,
      id: uuidv4(),
    };
    setProjects((prevProjects) => [item, ...prevProjects]);
  };

  return (
    <div className="h-screen my-8 flex gap-8">
      <SideBar projects={projects} />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route
          path="/addProject"
          element={<AddProject getInputsData={getInputsData} />}
        />
        <Route path="/:id" element={<ProjectItem projects={projects} />} />
      </Routes>
    </div>
  );
}

export default App;

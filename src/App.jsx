import { useState } from "react";
import AddProject from "./components/AddProject/AddProject";
import MainScreen from "./components/MainScreen/MainScreen";
import SideBar from "./components/SideBar/SideBar";
import { Routes, Route } from "react-router-dom";

function App() {
  const [projects, setProjects] = useState([]);

  const getInputsData = (data) => {
    console.log(data);
    setProjects((prevProjects) => [...prevProjects, data]);
    console.log(projects);
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
      </Routes>
    </div>
  );
}

export default App;

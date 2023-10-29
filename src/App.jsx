import { useState } from "react";
import AddProject from "./components/AddProject/AddProject";
import MainScreen from "./components/MainScreen/MainScreen";
import SideBar from "./components/SideBar/SideBar";
import { Routes, Route } from "react-router-dom";

function App() {
  const [projects, setProjects] = useState([]);

  const getInputsData = (data) => {
    //console.log(data);
    setProjects((state) => state.push(data));
    console.log(projects);
  };

  return (
    <div className="h-screen my-8 flex gap-8">
      <SideBar />
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

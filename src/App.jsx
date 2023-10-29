import { useState } from "react";
import AddProject from "./components/AddProject/AddProject";
import MainScreen from "./components/MainScreen/MainScreen";
import SideBar from "./components/SideBar/SideBar";
import { Routes, Route } from "react-router-dom";

function App() {
  const [projects, setProjects] = useState([]);

  return (
    <div className="h-screen my-8 flex gap-8">
      <SideBar />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/addProject" element={<AddProject />} />
      </Routes>
    </div>
  );
}

export default App;

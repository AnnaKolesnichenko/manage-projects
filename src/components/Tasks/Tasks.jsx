import { useState } from "react";
import { preview } from "vite";

const Tasks = () => {
  //   const [tasks, setTasks] = useState("");
  //   const [inputShown, setInputShown] = useState(false);
  //   console.log(tasks);

  //   const handleInputShow = () => {
  //     setInputShown(!inputShown);
  //     getTasksValue();
  //     setTasks("");
  //   };

  //   const getTasksValue = (e) => {

  //   };

  return (
    <div>
      <h1>Tasks</h1>
      <button onClick={handleInputShow}>Add task</button>
      {inputShown && (
        <input
          type="text"
          //   name="tasks"
          //   value={tasks}
          //   onChange={getTasksValue}
          className="h-[40px]"
        ></input>
      )}
      {tasks.length > 0 ? (
        <ul></ul>
      ) : (
        <h2>
          There are no tasks added to this project yet. Click 'Add Button' to
          add a few.
        </h2>
      )}
    </div>
  );
};

export default Tasks;

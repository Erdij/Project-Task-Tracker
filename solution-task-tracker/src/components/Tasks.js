import React from "react";
import AddTask from "./AddTask";
import Duty from "./Duty";

const Tasks = ({ tasks, deleteTask, addTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Duty duty={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default Tasks;

/** @format */

import React from "react";
import Task from "./Task";

const TasksList = ({ tasks, onDelete, onChangeTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onChangeTask={onChangeTask}
        />
      ))}
    </ul>
  );
};

export default TasksList;

/** @format */

import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";

const data = [
  { id: 0, text: "how to learn react", done: true },
  { id: 1, text: "The Next js", done: false },
  { id: 2, text: "React is a components base library", done: false },
];
const getNextId = (data) => {
  const nextId = data.reduce((prev, current) =>
    prev && prev.id > current.id ? prev.id : current.id
  );
  return nextId + 1;
};
function App() {
  const [tasks, setTasks] = useState(data);

  // all handler here

  const handleAddTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: getNextId(tasks),
        text,
        done: false,
      },
    ]);
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleChangeTask = (task) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  };
  return (
    <>
      <h1>Convert useState Hook to useReducer</h1>
      <p>
        flowing documentation{" "}
        <a href="https://react.dev/learn/extracting-state-logic-into-a-reducer#comparing-usestate-and-usereducer">
          React.dev
        </a>
      </p>
      <AddTask onAddTask={handleAddTask} />
      <br />
      <TasksList
        tasks={tasks}
        onDelete={handleDelete}
        onChangeTask={handleChangeTask}
      />
    </>
  );
}

export default App;

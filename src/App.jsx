/** @format */

import { useReducer } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";
import { taskReducer } from "./reducer/reducer";
import { getNextId } from "./util/nextId";

const data = [
  { id: 0, text: "how to learn react", done: true },
  { id: 1, text: "The Next js", done: false },
  { id: 2, text: "React is a components base library", done: false },
];

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, data);

  // all handler here

  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      id: getNextId(tasks),
      text,
      done: false,
    });
  };

  const handleDelete = (taskId) => {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  };

  const handleChangeTask = (task) => {
    dispatch({
      type: "changed",
      task,
    });
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

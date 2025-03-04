/** @format */

import React, { useState } from "react";
const Task = ({ task, onDelete, onChangeTask }) => {
  const [isEdit, setIsEdit] = useState(false);

  let content;
  if (isEdit) {
    content = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) =>
            onChangeTask({
              ...task,
              text: e.target.value,
            })
          }
        />
        <button onClick={() => setIsEdit(!isEdit)}>Save</button>
      </>
    );
  } else {
    content = (
      <>
        <span>{task.text}</span>
        <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
      </>
    );
  }
  return (
    <li>
      <input
        checked={task.done}
        onChange={(e) =>
          onChangeTask({
            ...task,
            done: e.target.checked,
          })
        }
        type="checkbox"
        name=""
        id=""
      />
      {content}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
};

export default Task;

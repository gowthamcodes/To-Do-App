import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setDone] = useState(false);

  function handleClick() {
    setDone(prev => !prev);
  }

  return (
    <li
      onClick={handleClick}
      style={{ textDecoration: isDone ? "line-through" : null }}
    >
      {props.data}
    </li>
  );
}

export default ToDoItem;

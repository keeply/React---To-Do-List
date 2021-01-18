import React, { useState } from "react";

function ToDoItem(props) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked((isClicked) => {
      return !isClicked;
    });
  }

  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isClicked ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;

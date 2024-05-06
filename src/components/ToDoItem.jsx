import React from "react";

export default function ToDoItem(props) {
  //   const [isDone, setIsDone] = useState(false);
  //   function handleClick() {
  //     setIsDone((prevValue) => !prevValue);
  //   }
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
  //onClick={handleClick}
  //style={{ textDecoration: isDone ? "line-through" : "none" }}
}

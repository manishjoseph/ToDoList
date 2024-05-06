import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

function App() {
  const [items, setItems] = useState([]);
  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }
  function deleteItem(id) {
    console.log("Deleting...");
    setItems((prevItems) => {
      return prevItems.filter((prevItem, indexItem) => indexItem !== id);
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <ul>
        {items.map((todoItem, index) => (
          <ToDoItem
            key={index}
            id={index}
            text={todoItem}
            onChecked={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;

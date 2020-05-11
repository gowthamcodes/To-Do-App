import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

function App() {
  const [items, setItems] = useState([]);

  function addItem(input) {
    setItems((prevItems) => {
      return [...prevItems, input];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((value, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <Header />
      <InputArea add={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={uuidv4()}
              id={index}
              item={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

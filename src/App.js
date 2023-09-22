// import { InputGroup, Button, Input } from 'reactstrap';
import React from "react";
import store from "./store";
import "./App.css";
import Todo from "./todo";

function App() {
  const [inputValue, setVal] = React.useState("");
  // console.log(store.getState(), "<<<<<<<<");
  const handleAddNew = () => {
    if(inputValue) {
      store.dispatch({
        type: "addNewTask",
        newTodo: inputValue,
      });
    }
    setVal("");
  };

  // console.log(inputValue);
  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => setVal(e.target.value)}
        value={inputValue}
      />
      <button onClick={handleAddNew}>Add new task</button>

      <Todo/>
    </div>
  );
}

export default App;

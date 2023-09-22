import React from "react";
import store from "./store";

const Todo = () => {
  const [flag, setFlag] = React.useState(false);
  const data = store.getState();
  const handleRemove = (itemId) => {
    store.dispatch({
      type: "removeTodo",
      id: itemId,
    });
    setFlag(!flag);
  };

  const markAsComplete = (itemId) => {
    store.dispatch({
      type: "markAsComplete",
      id: itemId,
    });
    setFlag(!flag);
  };
  console.log(data, "<<<<<<<<<<<<");

  return (
    <div style={{ width: "200px", margin: "auto" }}>
      {data.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              background: item.completed ? "green" : "",
              width: "180px",
              border: "1px solid grey",
              margin: "15px",
              padding: "10px",
            }}
          >
            <p style={{ textDecoration: item.completed ? "line-through" : "" }}>
              {item.todo}
            </p>
            <span> </span>
            <button onClick={() => markAsComplete(item.id)}>
              mark as complete
            </button>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;

import React from "react";
import TodoItems from "./todoItems";

function Todos(props) {
  console.log(props.list);
  var i = 0;
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Your Task</h2>
      {props.list.map((items) => {
        console.log("ss");
        i = i + 1;
        return (
          <TodoItems data={items} del={props.del} edit={props.edit} key={i} />
        );
      })}
    </div>
  );
}

export default Todos;

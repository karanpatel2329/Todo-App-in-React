import React from "react";

import { BsFillTrashFill, BsPencil } from "react-icons/bs";
import "../App.css";

function TodoItems(props) {
  function test() {
    props.del(props.data);
  }
  function edit() {
    props.edit(props.data);
  }
  return (
    <div className="card">
      <div>
        <h3>{props.data.title}</h3>
        <p>{props.data.des}</p>
        <button>{props.data.pir}</button>
      </div>
      <div className="innercard">
        <BsFillTrashFill className="icon" onClick={test} />
        <BsPencil className="icon" onClick={edit} />
      </div>
    </div>
  );
}

export default TodoItems;

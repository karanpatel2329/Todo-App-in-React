import "./App.css";
import { useState } from "react";
import Header from "./Components/header";
import Todos from "./Components/todos";
import Input from "./Components/input";
import EditTodo from "./Components/edittodo";

function App() {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);
  const [todo, setTodo] = useState("");
  const [list, setlist] = useState([
    {
      title: "ABC",
      des: "high",
      pir: "Low",
    },
    {
      title: "sdhh",
      des: "ssssss",
      pir: "High",
    },
  ]);

  const del = (data) => {
    setlist(
      list.filter((e) => {
        return e !== data;
      })
    );
  };

  const add = (title, des, pri) => {
    var l = {
      title: title,
      des: des,
      pir: pri,
    };
    list[list.length] = l;
    setlist(
      list.filter((e) => {
        return e;
      })
    );
  };

  const edit = (todo) => {
    // var todos = todo;
    setTodo(todo);
    var index = list.indexOf(todo);
    setIndex(index);
    console.log(index);
    handleShow();
  };
  const change = (todos) => {
    list[todos.i] = {
      title: todos.title,
      des: todos.des,
      pir: todos.pri,
    };
    setlist(list);
    handleClose();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Enter Your Task Here </h1>
      <Input add={add} />
      <Todos list={list} del={del} edit={edit} />
      <EditTodo
        show={handleShow}
        close={handleClose}
        data={show}
        index={index}
        todo={change}
        value={todo}
      />
    </div>
  );
}

export default App;

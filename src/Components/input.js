import React from "react";
import "../App.css";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
function Input(props) {
  const [title, settitle] = useState("");
  const [des, setdes] = useState("");
  const [pri, setpri] = useState("");
  const add = () => {
    props.add(title, des, pri);
    alert("Task Add Successfully");
  };
  return (
    <div className="inputBox">
      <Form>
        <Form.Group controlId="Title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Title"
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group controlId="Description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description"
            onChange={(e) => {
              setdes(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group
          controlId="Priety"
          onChange={(e) => {
            setpri(e.target.value);
          }}
        >
          <Form.Label>Priety</Form.Label>
          <Form.Check type="radio" label="Low" name="radio" value="Low" />
          <Form.Check type="radio" label="Medium" name="radio" value="Medium" />
          <Form.Check type="radio" label="High" name="radio" value="High" />
        </Form.Group>
        <Button variant="primary" onClick={add}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Input;

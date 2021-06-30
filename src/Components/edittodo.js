import React from "react";

import { Modal, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Input from "./input";
function EditTodo(props) {
  const [title, settitle] = useState("");
  const [des, setdes] = useState("");
  const [pri, setpri] = useState("");
  console.log(props.todo);
  function edit() {
    console.log(pri);
    var i = props.index;
    props.todo({ title, des, pri, i });
  }
  return (
    <>
      <Modal
        show={props.data}
        onHide={props.close}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Your Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
              <Form.Check type="radio" label="Low" name="eradio" value="Low" />
              <Form.Check
                type="radio"
                label="Medium"
                name="eradio"
                value="Medium"
              />
              <Form.Check
                type="radio"
                label="High"
                name="eradio"
                value="High"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.close}>
            Close
          </Button>
          <Button variant="primary" onClick={edit}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditTodo;

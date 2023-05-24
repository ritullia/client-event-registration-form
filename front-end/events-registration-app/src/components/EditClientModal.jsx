import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export const EditClientModal = ({
  activeClient,
  handleModalClose,
  handleModalSubmit,
}) => {
  //   console.log(activeClient);

  const [data, setData] = useState({
    name: "",
    lastname: "",
    phone_number: "",
    email: "",
  });

  const handleOnChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Modal
        show={activeClient}
        onHide={handleModalClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit client info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Name"
                onChange={handleOnChange}
              />
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                name="lastname"
                type="text"
                placeholder="Lastname"
                onChange={handleOnChange}
              />
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                name="phone_number"
                type="text"
                onChange={handleOnChange}
                placeholder="Please insert phone number"
              />
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleOnChange}
                placeholder="name@example.com"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModalSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

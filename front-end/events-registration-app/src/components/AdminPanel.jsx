import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { AdminFormBox, StyledSubmitButton } from "../Styles/AdminPanelStyled";

export const AdminPanel = () => {
  const [data, setData] = useState({
    name: "",
    lastname: "",
    phone_number: "",
    email: "",
  });

  const navigate = useNavigate();

  console.log("Submitinau", data);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    alert(`Ivestas naujas dalyvis`);

    axios.post("http://localhost:5000/clients", data).then((response) => {
      console.log(response.data);
      navigate("/clients");
    });
  };

  const handleOnChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <Form
        onSubmit={onHandleSubmit}
        style={{
          maxWidth: "340px",
          margin: "50px auto",
          backgroundColor: "#3dcacd",
          padding: "20px",
          color: "#373f51",
          fontWeight: "600",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter Client name"
            onChange={handleOnChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Lastname</Form.Label>
          <Form.Control
            type="text"
            name="lastname"
            placeholder="Enter Client lastname"
            onChange={handleOnChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            name="phone_number"
            type="text"
            placeholder="Enter phone number"
            onChange={handleOnChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={handleOnChange}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <StyledSubmitButton
          //   onClick={() => alert("Įvestas naujas klientas")}
          variant="primary"
          type="submit"
        >
          Submit
        </StyledSubmitButton>
      </Form>
    </>
  );
};

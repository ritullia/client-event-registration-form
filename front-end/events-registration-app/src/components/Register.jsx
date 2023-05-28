import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { useState } from "react";
import axios from "axios";
import { StyledRegisterButton } from "../Styles/RegisterStyled";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const onHandleSubmit = (e) => {
    e.preventDefault();
    alert(`Papsaustas registravimo formos mygtukas ${formData}`);

    axios
      .post("http://localhost:5000/register", formData)
      .then((response) => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div>
        <div style={{ margin: "30px" }}>
          <Form
            onSubmit={onHandleSubmit}
            style={{
              maxWidth: "340px",
              margin: "50px auto",
              backgroundColor: "#a9ddd6",
              padding: "20px",
              color: "#ffff",
              borderRadius: "8px",
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                onChange={handleOnChange}
                placeholder="Enter name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                name="lastname"
                type="text"
                onChange={handleOnChange}
                placeholder="Enter lastname"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                onChange={handleOnChange}
                placeholder="Enter e-mail"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                onChange={handleOnChange}
                placeholder="********"
                required
              />
              <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I accept Terms of use" />
            </Form.Group>
            <StyledRegisterButton
              //   onClick={() => alert("Įvestas naujas klientas")}
              variant="primary"
              type="submit"
            >
              REGISTER
            </StyledRegisterButton>
            <Button
              //   onClick={() => alert("Įvestas naujas klientas")}
              variant="info"
              type="submit"
            >
              RESET
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

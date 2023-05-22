import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { useState } from "react";
import axios from "axios";

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
          <div
            style={{
              maxWidth: "340px",
              margin: "100px auto",
              marginBottom: "0px",
              backgroundColor: "#747a8a",
              padding: "20px",
              color: "#ffff",
              borderRadius: "8px 8px 0 0",
              fontSize: "24px",
            }}
          >
            <h2
              style={{
                fontSize: "18px",
              }}
            >
              Have your account registered
            </h2>
          </div>
          <Form
            onSubmit={onHandleSubmit}
            style={{
              maxWidth: "340px",
              margin: "50px auto",
              backgroundColor: "#4b5162",
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
            <Button
              //   onClick={() => alert("Įvestas naujas klientas")}
              variant="primary"
              type="submit"
            >
              REGISTER
            </Button>
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

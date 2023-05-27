import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthenticationContext } from "./AuthenticationContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StyledLoInButton, StyleLogin } from "../Styles/LoginStyled";

export const Login = () => {
  const { setIsSignedIn } = useContext(AuthenticationContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const onHandleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/login", formData)
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          setIsSignedIn(true);
          navigate("/");
        } else {
          setError(response.data.message);
        }
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
    <StyleLogin>
      <Form
        onSubmit={onHandleSubmit}
        style={{
          maxWidth: "340px",
          margin: "100px auto",
          backgroundColor: "#a9ddd6",
          padding: "20px",
          color: "#373f51",
          fontWeight: "600",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            onChange={handleOnChange}
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            onChange={handleOnChange}
            placeholder="Password"
            required
          />
        </Form.Group>
        <StyledLoInButton
          //   onClick={() => alert("Įvestas naujas klientas")}
          variant="primary"
          type="submit"
        >
          Log in
        </StyledLoInButton>
        {error && <div>{error}</div>}
      </Form>
    </StyleLogin>
  );
};

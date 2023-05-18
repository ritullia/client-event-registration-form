import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Login = () => {
  const onHandleSubmit = (e) => {
    e.preventDefault();
    alert(`Papsaustas prisijungti mygtukas`);
  };
  return (
    <>
      <>
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
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <Button
            //   onClick={() => alert("Įvestas naujas klientas")}
            variant="primary"
            type="submit"
          >
            Log in
          </Button>
        </Form>
      </>
    </>
  );
};

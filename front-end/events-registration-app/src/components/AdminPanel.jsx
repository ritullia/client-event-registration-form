import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const AdminPanel = () => {
  const onHandleSubmit = (e) => {
    e.preventDefault();
    alert(`Ivestas naujas dalyvis`);
  };
  return (
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
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Client name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Lastname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Client lastname"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="text" placeholder="Enter phone number" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button
          //   onClick={() => alert("Įvestas naujas klientas")}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

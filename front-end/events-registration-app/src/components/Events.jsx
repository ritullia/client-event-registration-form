import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Events = ({ client }) => {
  const { name, lastname, phone_number, email } = client;
  return (
    <>
      <Card
        className="text-center"
        style={{ maxWidth: "100%", margin: "50px auto" }}
      >
        <Card.Header>Geust card</Card.Header>
        <Card.Body>
          <Card.Title>Guest</Card.Title>
          <Card.Text>{name}</Card.Text>
          <Card.Text>{lastname}</Card.Text>
          <Card.Text>{phone_number}</Card.Text>
          <Card.Text>{email}</Card.Text>
          <Button
            onClick={() => alert("Clicked Edit Button")}
            variant="primary"
          >
            Edit
          </Button>
          <Button
            onClick={() => alert("Clicked Delete Button")}
            variant="danger"
          >
            Delete
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">Notes</Card.Footer>
      </Card>
    </>
  );
};

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// import axios from "axios";

export const Events = ({ client, onRemove, onEdit }) => {
  const { name, lastname, phone_number, email } = client;

  console.log(client);

  return (
    <>
      <Card
        className="text-center"
        style={{ maxWidth: "100%", margin: "50px auto" }}
      >
        <Card.Header>Client</Card.Header>
        <Card.Body>
          <Card.Text>{name}</Card.Text>
          <Card.Text>{lastname}</Card.Text>
          <Card.Text>{phone_number}</Card.Text>
          <Card.Text>{email}</Card.Text>

          <Button variant="primary" onClick={() => onEdit(client)}>
            Edit
          </Button>
          <Button variant="danger" onClick={() => onRemove(client.id)}>
            Delete
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">Notes</Card.Footer>
      </Card>
    </>
  );
};

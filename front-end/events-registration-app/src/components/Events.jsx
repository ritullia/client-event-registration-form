import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Events = () => {
  return (
    <>
      <Card
        className="text-center"
        style={{ maxWidth: "100%", margin: "50px auto" }}
      >
        <Card.Header>Event date</Card.Header>
        <Card.Body>
          <Card.Title>Event Title</Card.Title>
          <Card.Text>Name</Card.Text>
          <Card.Text>Lastname</Card.Text>
          <Card.Text>Phone number</Card.Text>
          <Card.Text>Email</Card.Text>
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
        <Card.Footer className="text-muted">Message for client</Card.Footer>
      </Card>
    </>
  );
};

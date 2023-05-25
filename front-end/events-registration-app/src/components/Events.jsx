import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { StyledCardContainer } from "../Styles/ClientCardStyled";

import { FaTrash, FaUserEdit } from "react-icons/fa";

// import axios from "axios";

export const Events = ({ client, onRemove, onEdit }) => {
  const { name, lastname, phone_number, email } = client;

  console.log(client);

  return (
    <>
      <StyledCardContainer>
        <Card.Header>Client</Card.Header>
        <Card.Body>
          <Card.Text>{name}</Card.Text>
          <Card.Text>{lastname}</Card.Text>
          <Card.Text>{phone_number}</Card.Text>
          <Card.Text>{email}</Card.Text>

          <Button variant="primary" onClick={() => onEdit(client)}>
            <FaUserEdit />
          </Button>
          <Button variant="danger" onClick={() => onRemove(client.id)}>
            <FaTrash />
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">Notes</Card.Footer>
      </StyledCardContainer>
    </>
  );
};

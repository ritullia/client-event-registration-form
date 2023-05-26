import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {
  StyledCardContainer,
  UpperContainer,
  IconContainer,
  LowerContainer,
  CardText,
  CardTextContacts,
  StyledEditButton,
} from "../Styles/ClientCardStyled";

import { FaTrash, FaUserEdit, FaUserAlt } from "react-icons/fa";

// import axios from "axios";

export const Events = ({ client, onRemove, onEdit }) => {
  const { name, lastname, phone_number, email } = client;

  console.log(client);

  return (
    <StyledCardContainer>
      <UpperContainer>
        <IconContainer>
          <FaUserAlt />
        </IconContainer>
      </UpperContainer>
      <LowerContainer>
        <CardText>{name}</CardText>
        <CardText>{lastname}</CardText>
        <CardTextContacts>{phone_number}</CardTextContacts>
        <CardTextContacts>{email}</CardTextContacts>

        <StyledEditButton variant="primary" onClick={() => onEdit(client)}>
          <FaUserEdit />
        </StyledEditButton>
        <Button variant="danger" onClick={() => onRemove(client.id)}>
          <FaTrash />
        </Button>
      </LowerContainer>
      <Card.Footer className="text-muted">Events date:</Card.Footer>
    </StyledCardContainer>
  );
};

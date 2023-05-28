import Card from "react-bootstrap/Card";
import {
  StyledCardContainer,
  UpperContainer,
  IconContainer,
  LowerContainer,
  CardText,
  CardTextContacts,
  StyledEditButton,
  StyledDeleteButton,
} from "../Styles/ClientCardStyled";

import { FaTrash, FaUserEdit, FaUserAlt } from "react-icons/fa";

// import axios from "axios";

export const Events = ({ client, onRemove, onEdit, user }) => {
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
        <StyledDeleteButton
          variant="danger"
          onClick={() => onRemove(client.id)}
        >
          <FaTrash />
        </StyledDeleteButton>
      </LowerContainer>
      <Card.Footer className="text-muted">Entered:{user}</Card.Footer>
    </StyledCardContainer>
  );
};

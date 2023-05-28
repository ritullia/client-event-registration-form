import Card from "react-bootstrap/Card";
import {
  StyledCardContainer,
  UpperContainer,
  IconContainer,
  LowerContainer,
  CardText,
  CardTextContacts,
} from "../Styles/ClientCardStyled";

import { FaUserAlt } from "react-icons/fa";

export const AdminUser = ({ user }) => {
  const { id, name, email } = user;

  console.log(user);

  return (
    <StyledCardContainer>
      <UpperContainer>
        <IconContainer>
          <FaUserAlt />
        </IconContainer>
      </UpperContainer>
      <LowerContainer>
        <CardText>Manager Id:</CardText>
        <CardText>{id}</CardText>
        <CardText>Manager name:</CardText>
        <CardText>{name}</CardText>
        <CardTextContacts>Manager e-mail:</CardTextContacts>
        <CardTextContacts>{email}</CardTextContacts>
      </LowerContainer>
      <Card.Footer className="text-muted"></Card.Footer>
    </StyledCardContainer>
  );
};

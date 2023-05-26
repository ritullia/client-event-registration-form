import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import {
  ContainerBody,
  Container,
  ContainerText,
  CardContainer,
  UpperContainer,
  LowerContainer,
  BodyContainer,
} from "../Styles/HomeStyled";

export const HomePage = () => {
  return (
    <ContainerBody>
      <Container>
        <ContainerText>All about events</ContainerText>
      </Container>
      <CardContainer className="text-center">
        <UpperContainer>Party</UpperContainer>
        <BodyContainer>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">
            <Link to={"/admin"}>More</Link>
          </Button>
        </BodyContainer>
        <LowerContainer className="text-muted"></LowerContainer>
      </CardContainer>
    </ContainerBody>
  );
};

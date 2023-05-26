import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import {
  ContainerBody,
  Container,
  ContainerText,
  CardContainer,
} from "../Styles/HomeStyled";

export const HomePage = () => {
  return (
    <ContainerBody>
      <Container>
        <ContainerText>All about events</ContainerText>
      </Container>
      <CardContainer className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">
            <Link to={"/admin"}>More</Link>
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </CardContainer>
    </ContainerBody>
  );
};

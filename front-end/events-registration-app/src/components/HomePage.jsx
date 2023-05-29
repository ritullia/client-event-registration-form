// import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { AuthenticationContext } from "./AuthenticationContext";
import { useContext } from "react";
import {
  ContainerBody,
  Container,
  ContainerText,
  CardContainer,
  UpperContainer,
  LowerContainer,
  BodyContainer,
  StyledButton,
  CardTextContacts,
  CardText,
} from "../Styles/HomeStyled";

export const HomePage = () => {
  const { isSignedIn } = useContext(AuthenticationContext);
  return (
    <ContainerBody>
      <Container>
        <ContainerText>All about events...</ContainerText>
      </Container>
      <CardContainer className="text-center">
        <UpperContainer></UpperContainer>
        <BodyContainer>
          <CardTextContacts>
            The best city party of the year...!!!
          </CardTextContacts>

          <CardText>
            How can you celebrate the anniversary of Vilnius? Choose engaging
            events, get involved in projects, get acquainted with the values of
            Vilnius and learn more about various historical topics. Find the
            nearest upcoming events or select a date on...
          </CardText>
          {isSignedIn && (
            <StyledButton variant="primary">
              <Link
                to={"/admin"}
                style={{ color: "#fff", textDecoration: "none" }}
              >
                To clients register form
              </Link>
            </StyledButton>
          )}
        </BodyContainer>
        <LowerContainer className="text-muted"></LowerContainer>
      </CardContainer>
    </ContainerBody>
  );
};

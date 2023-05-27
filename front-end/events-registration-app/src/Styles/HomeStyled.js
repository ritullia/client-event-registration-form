import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import party from "../assets/party.png";

export const ContainerBody = styled.div`
  margin: 80px;
`;

export const Container = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
export const ContainerText = styled.h2`
  font-size: 56px;
  font-family: "Pacifico", cursive;
  font-weight: 600;
  text-align: center;
  color: #f56476;
`;

export const CardContainer = styled(Card)`
  height: 380px;
  box-shadow: 0px 1px 10px 1px grey;
  margin: 10px;
  display: flex;
  justify-content: center;
  background: url(${party}) no-repeat center 5%;
  background-size: cover;
`;

export const UpperContainer = styled(Card.Header)`
  height: 100px;
  background: linear-gradient(to right, #f56476, #e43f6f, #dfbbb1);
`;
export const LowerContainer = styled(Card.Footer)`
  height: 50px;
  background: linear-gradient(to right, #f56476, #e43f6f, #dfbbb1);
`;

export const BodyContainer = styled(Card.Body)`
  height: 640px;
  text-align: center;
  font-family: "Titillium Web", sans-serif;
  color: #393939;
  background-color: #fff6;
`;

export const StyledButton = styled(Button)`
  background-color: #7a8b99;
  border-color: #7a8b99;
  margin-top: 40px;
  text-align: center;
  font-size: 18px;
  color: #fff;

  &:hover {
    background-color: #393939;
    border: #393939;
  }
`;

export const CardTextContacts = styled(Card.Text)`
  margin: 10px;
  padding: 0;
  font-weight: 600;
  font-size: 1.8rem;
  color: #008dd5;
  text-shadow: 2px 2px #373f51;
`;
export const CardText = styled(Card.Text)`
  margin: 10px;
  padding: 0;
  font-weight: 600;
  font-size: 1rem;
`;

import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const StyledCardContainer = styled(Card)`
  background-color: #3dcacd;
  width: 200px;
  height: 380px;
  box-shadow: 0px 1px 10px 1px grey;
  margin: 10px;
  display: flex;
  justify-content: center;
`;

export const UpperContainer = styled(Card.Header)`
  height: 100px;
  background: linear-gradient(to left, #3dcacd, #2da8aa, #9ba0bc);
`;

export const IconContainer = styled.div`
  background-color: #fff;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding: 5px;
  transform: translate(35px, 10px);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #237f81;
`;

export const LowerContainer = styled(Card.Body)`
  background: #3dcacd;
  text-align: center;
  margin-top: 10px;
  font-family: "Titillium Web", sans-serif;
  color: #393939;
`;

export const CardText = styled(Card.Text)`
  margin: 5px;
  padding: 0;
  font-weight: 600;
  font-size: 1.25rem;
`;
export const CardTextContacts = styled(Card.Text)`
  margin: 10px;
  padding: 0;
  font-weight: 400;
  font-size: 1rem;
`;

export const StyledEditButton = styled(Button)`
  background-color: #7a8b99;
  border-color: #7a8b99;
  margin: 5px;

  &:hover {
    background-color: #393939;
    border: #393939;
    margin: 5px;
  }
`;

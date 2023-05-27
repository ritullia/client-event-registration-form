import styled from "styled-components";
import Button from "react-bootstrap/Button";

export const StyleLogin = styled.div`
  height: 100vh;
`;

export const StyledLoInButton = styled(Button)`
  background-color: #91adc2;
  border-color: #91adc2;
  margin: 5px;
  text-align: center;
  font-size: 18px;
  width: 290px;

  &:hover {
    background-color: #008dd5;
    border: #008dd5;
  }
`;

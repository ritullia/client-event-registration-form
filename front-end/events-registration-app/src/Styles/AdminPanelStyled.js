import styled from "styled-components";
import Button from "react-bootstrap/Button";

export const StyledSubmitButton = styled(Button)`
  background-color: #91adc2;
  border-color: #91adc2;
  margin: 5px;
  text-align: center;
  font-size: 18px;
  width: 290px;

  &:hover {
    background-color: #c1b8c8;
    border: #c1b8c8;
  }
`;

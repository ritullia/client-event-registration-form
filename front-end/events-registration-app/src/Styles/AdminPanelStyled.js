import styled from "styled-components";
import Button from "react-bootstrap/Button";

export const StyledSubmitButton = styled(Button)`
  background-color: #008dd5;
  border-color: #008dd5;
  margin: 5px;
  text-align: center;
  font-size: 18px;
  width: 290px;

  &:hover {
    background-color: #c1b8c8;
    border: #c1b8c8;
  }
`;

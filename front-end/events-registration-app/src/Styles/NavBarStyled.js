import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/esm/Button";

export const StylledNavbar = styled(Navbar)`
  background-color: #393939;
  padding: 40px 40px;
  position: sticky;
  top: 0;
  width: 100%;
`;

export const StyledNavLink = styled(Nav.Link)`
  color: #3dcacd;

  font-size: 18px;

  &:hover {
    color: #2da8aa;
    transition: 200ms ease-in;
  }
`;
export const StyledButton = styled(Button)`
  background-color: #3dcacd;
  border: #3dcacd;
  font-size: 18px;

  &:hover {
    background-color: #237f81;
    border: #237f81;
  }
`;
export const StyledLogo = styled.img`
  width: 50px;
`;

import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AuthenticationContext } from "./AuthenticationContext";
import styles from "../Styles/StyledNavBar.module.css";
import {
  StylledNavbar,
  StyledNavLink,
  StyledButton,
  StyledLogo,
} from "../Styles/NavBarStyled";
import { FaSignOutAlt } from "react-icons/fa";
import logoColibri from "../assets/logoColibri.png";

export const NavBar = ({ isLoding, onLogout }) => {
  const { isSignedIn } = useContext(AuthenticationContext);

  if (isLoding) {
    return;
  }

  return (
    <StylledNavbar>
      {isSignedIn ? (
        <>
          <Container>
            <Navbar.Brand href="/" src={logoColibri} alt="logoColibri">
              <StyledLogo src={logoColibri} alt="logoColibri" />
            </Navbar.Brand>
            <Nav className="me-auto">
              <StyledNavLink href="/clients">Clients</StyledNavLink>
              <StyledNavLink href="/admin">Admin</StyledNavLink>
            </Nav>
          </Container>
        </>
      ) : (
        <>
          <Container>
            <Navbar.Brand href="#">LOGO</Navbar.Brand>
            <Nav className="me-auto">
              <StyledNavLink href="/login">Log in</StyledNavLink>
              <StyledNavLink href="/register">Register</StyledNavLink>
            </Nav>
          </Container>
        </>
      )}
      {isSignedIn && (
        <StyledButton onClick={onLogout} className={styles.deleteBtn}>
          <FaSignOutAlt />
        </StyledButton>
      )}
    </StylledNavbar>
  );
};

import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AuthenticationContext } from "./AuthenticationContext";
import Button from "react-bootstrap/esm/Button";
import styles from "../Styles/StyledNavBar.module.css";

export const NavBar = ({ isLoding, onLogout }) => {
  const { isSignedIn } = useContext(AuthenticationContext);

  if (isLoding) {
    return;
  }

  return (
    <Navbar bg="dark" variant="dark" className={styles.mainContainer}>
      {isSignedIn ? (
        <>
          <Container>
            <Navbar.Brand href="/" alt="logo">
              Logo
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/clients">Clients</Nav.Link>
              <Nav.Link href="/admin">Admin</Nav.Link>
            </Nav>
          </Container>
        </>
      ) : (
        <>
          <Container>
            <Navbar.Brand href="#">LOGO</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/login">Log in</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
          </Container>
        </>
      )}
      {isSignedIn && (
        <Button onClick={onLogout} className={styles.deleteBtn}>
          LOGOUT
        </Button>
      )}
    </Navbar>
  );
};

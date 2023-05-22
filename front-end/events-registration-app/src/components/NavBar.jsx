import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AuthenticationContext } from "./AuthenticationContext";
import Button from "react-bootstrap/esm/Button";

export const NavBar = ({ onLogout }) => {
  const { isSignedIn } = useContext(AuthenticationContext);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          {isSignedIn}(<Navbar.Brand href="/">LOGO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/admin">Admin</Nav.Link>
            <Nav.Link href="/login">Log in</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
          ):(
          <Navbar.Brand href="/">LOGO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/login">Log in</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
          )
        </Container>
        {isSignedIn && <Button onClick={onLogout}>LOGOUT</Button>}
      </Navbar>
    </>
  );
};

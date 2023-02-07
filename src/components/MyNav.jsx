// import Container from "react-bootstrap/Container"
// import Nav from "react-bootstrap/Nav"
// import Navbar from "react-bootstrap/Navbar"
// import NavDropdown from "react-bootstrap/NavDropdown"

import { Container, Nav, Navbar } from "react-bootstrap"

function MyNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-0">
          <Nav.Link href="#">
            <strong>Home</strong>
          </Nav.Link>
          <Nav.Link href="#">Link</Nav.Link>
          <Nav.Link href="#">Browser</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNav

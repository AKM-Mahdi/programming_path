import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import logo from "../../Assets/logo.png";

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" className="py-3">
      <Container>
        <Image style={{ height: "30px" }} src={logo}></Image>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link className="text-light text-decoration-none me-3" to="/">
                Home
              </Link>
              <Link className="text-light text-decoration-none me-3" to="/blog">
                Blog
              </Link>
              <Link className="text-light text-decoration-none" to="/contact">
                Contact
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;

import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import logo from "../../Assets/logo.png";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { NavDropdown } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user, signOutFromWebsite } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutFromWebsite();
  };
  console.log(user);
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
              <Link className="nav-link text-light  me-3" to="/">
                Home
              </Link>
              <Link className="nav-link text-light  me-3" to="/blog">
                Blog
              </Link>
              <Link className=" nav-link text-light " to="/contact">
                Contact
              </Link>
              <Link className="nav-link text-light">{user?.displayName}</Link>
              {user?.uid ? (
                <Nav>
                  <NavDropdown
                    title={
                      user?.photoURL ? (
                        <Image
                          roundedCircle
                          style={{ height: "35px" }}
                          src={user.photoURL}
                        ></Image>
                      ) : (
                        <FaUserCircle></FaUserCircle>
                      )
                    }
                    id="collasible-nav-dropdown"
                  >
                    <NavDropdown.Item>
                      <Link className="nav-link" to="/profile">
                        {user?.displayName}
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleSignOut}>
                      Sign Out
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              ) : (
                <Nav className="me-end">
                  <Link className="text-light me-3 nav-link" to={"/login"}>
                    Login
                  </Link>

                  <Link className="text-light nav-link" to={"/register"}>
                    Register
                  </Link>
                </Nav>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;

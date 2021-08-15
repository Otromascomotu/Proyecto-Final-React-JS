import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Carrito } from "./CartWidget";
import image from "./logo_la_donatella.svg";

const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      class="navbar navbar-dark bg-dark"
      className="navbar-right"
    >
      <Navbar.Brand>
        <Link to={`/`}>
          <img
            src={image}
            width="150"
            height="75"
            className="d-inline-block align-top"
            alt="Logo de La Donatella"
          />
        </Link>
        Frutos Secos La Donatella
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to={`/categories`}>Inicio</Link>
          </Nav.Link>{" "}
          <Carrito />
          <NavDropdown title="Categorias" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Link to={`/categories/1`}>Verduras</Link>
            </NavDropdown.Item>

            <NavDropdown.Item>
              <Link to={`/categories/2`}> Frutas</Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;

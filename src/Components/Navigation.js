import React from "react";

import { Nav, Navbar } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <>
      <Navbar bg="danger" variant="dark" expand="lg" className="text-center">
        <Navbar.Brand to="/" className="m-auto ">
          <h2>Poke'Times</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink exact to="/" className="m-3">
              Home
            </NavLink>
            <NavLink to="/about" className="m-3">
              About
            </NavLink>
            <NavLink to="/contact" className="m-3">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default withRouter(Navigation);

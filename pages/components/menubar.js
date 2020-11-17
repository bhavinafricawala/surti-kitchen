import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const MenuBar = () => {
	return (
  <Navbar bg="light" expand="lg">
    <div className="container">
      <Navbar.Brand href=".">
        <img src="/logo.png" alt="logo" width="100px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/menu" className="navlink">Menu</Nav.Link>
          <Nav.Link href="/contact" className="navlink">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
	);
};

export default MenuBar;

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const MenuBar = () => {
	return (
  <Navbar bg="light" expand="lg">
    <div className="container">
      <Navbar.Brand href="#home">Surti Kitichen</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#deets">Menu</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
	);
};

export default MenuBar;

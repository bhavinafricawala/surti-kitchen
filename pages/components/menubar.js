/* eslint-disable react/prop-types */
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const MenuBar = ({ pagename }) => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href=".">
                    <img src="/logo.png" alt="logo" width="100px" />
                    <span className="logoText">Surti Kitchen</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className={pagename === 'home' ? 'nav-item active' : 'nav-item'}>
                            <Nav.Link href=".">Home</Nav.Link>
                        </li>
                        <li className={pagename === 'menu' ? 'nav-item active' : 'nav-item'}>
                            <Nav.Link href="/menu">Menu</Nav.Link>
                        </li>
                        <li className={pagename === 'contact' ? 'nav-item active' : 'nav-item'}>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </li>
                    </ul>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MenuBar;

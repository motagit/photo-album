import React from 'react';
import '../App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

function MainNavbar() {
  return (
    <>
    <Navbar bg="light" expand="lg">
        <Container>
            <LinkContainer to='/'><Navbar.Brand>photo-album</Navbar.Brand></LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <NavDropdown title="Books" id="basic-nav-dropdown">
                    <LinkContainer to='/'><NavDropdown.Item>Book 1</NavDropdown.Item></LinkContainer>
                    <LinkContainer to='/secondbook'><NavDropdown.Item>Book 2</NavDropdown.Item></LinkContainer>
                    <LinkContainer to='/thirdbook'><NavDropdown.Item>Book 3</NavDropdown.Item></LinkContainer>
                </NavDropdown>
                <LinkContainer to='/about'><Nav.Link>About</Nav.Link></LinkContainer>
                <LinkContainer to='/contact'><Nav.Link>Contact</Nav.Link></LinkContainer>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
  );
}

export default MainNavbar;

import React from 'react';
import '../App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

function MainNavbar() {
  return (
    <>
    <Navbar bg="white" expand="lg">
        <Container>
            <LinkContainer to='/photo-album/'><Navbar.Brand>photo-album</Navbar.Brand></LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <LinkContainer to='/photo-album/'><Nav.Link>Photos</Nav.Link></LinkContainer>
                <LinkContainer to='/photo-album/about'><Nav.Link>About</Nav.Link></LinkContainer>
              </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
  );
}

export default MainNavbar;

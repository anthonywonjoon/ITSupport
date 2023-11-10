import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import its_logo from '../assets/its_logo.png';

const ITSNav = () => (
    // return ()
    <Container>
        <Navbar expand='lg' bg='light'>
            <NavbarBrand>
                <img src={its_logo} alt='ITS Logo' width="180" height="70" />
            </NavbarBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-center">
                    <Nav.Link href="http://www.hawaii.edu/its/help-desk/">HELP DESK</Nav.Link>
                    <Nav.Link href="https://www.hawaii.edu/its/services/">SERVICES</Nav.Link>
                    <Nav.Link href="https://www.hawaii.edu/infosec/">INFORMATION SECURITY</Nav.Link>
                    <Nav.Link href="https://www.hawaii.edu/its/alerts/">ALERTS</Nav.Link>
                    <Nav.Link href="http://www.hawaii.edu/its/about/">ABOUT</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Container>
);

export default ITSNav;
import React from "react";
import './header.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
const Header = () => {

    return(
    <Navbar expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Teacher Ranker</Navbar.Brand>
        <Navbar.Toggle 
        aria-controls="basic-navbar-nav" 
        style={{ borderColor: 'white' }}
        >
        <span 
            className="navbar-toggler-icon" 
            style={{ backgroundImage: `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(255,255,255,1)' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")` }}
        ></span>
</Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#logIn">Log in</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )

}

export default Header;
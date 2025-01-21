import React, {useState} from "react";
import './header.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { initializeTeachers } from "../../firebase/teacherHandle";
import { useAppContext } from "../../AppContext";
const Header = () => {

    const [expanded, setExpanded] = useState(false);
    const {teachers, setTeachers} = useAppContext();
    const handleExpansion = () => {
      setExpanded(!expanded)
    }
    return(
    <Navbar expand="lg" sticky="top" expanded={expanded} onToggle={setExpanded}>
      <Container>
        <Navbar.Brand href="#home" >Teacher Ranker</Navbar.Brand>
        <Navbar.Toggle 
        onClick={handleExpansion}
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
            <Nav.Link href="#home"><Link to='/' className="link" onClick={() => setExpanded(false)}><p className="link-text">Home</p></Link></Nav.Link>
            <Nav.Link href="#logIn"><Link to='/logIn' className="link" onClick={() => setExpanded(false)}><p className="link-text">Log in</p></Link></Nav.Link>
            <Nav.Link href="#profile"><Link to='/profile' className="link" onClick={() => setExpanded(false)}><p className="link-text">Profile</p></Link></Nav.Link>
            <Nav.Link href="#contact"><Link to='/contact' className="link" onClick={() => setExpanded(false)}><p className="link-text">Contact</p></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )

}

export default Header;
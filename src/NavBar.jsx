import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" >
            <div className="nav-left">
                <Navbar.Brand href="#">Ross Prokopchenko</Navbar.Brand>
            </div>
            <div className="nav-right">
                <Nav sx={{ scrollBehavior: 'smooth' }}>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#career">Career</Nav.Link>
                    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="#resume">Resume</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </div>
        </Navbar>
    );
}

export default NavBar;
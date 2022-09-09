import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Box } from '@mui/material';
import './NavBar.css';

function NavBar() {
    return (
        <Navbar bg='dark' variant='dark'>
            <Box className="nav-left" sx={{display: 'flex', flexDirection: 'row', ml: '25px'}}>
                <Navbar.Brand href="#">Ross P</Navbar.Brand>
            </Box>

            <Box className="nav-right" sx={{display: 'flex', flexDirection: 'row', width: '100%'}} justifyContent='center' alignItems='center'>
                <Nav style={{ scrollBehavior: 'smooth' }}>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#career">Career</Nav.Link>
                    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Box>
        </Navbar>
    );
}

export default NavBar;
import Container from 'react-bootstrap/Container'
import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import { Nav } from 'react-bootstrap';

export function NavBar({page, setPage}: {page: string; setPage: (newPage: string) => void}) {
    
    const handleNavClick = (newPage: string) => {
        setPage(newPage);
    }
    
    return (
        <Navbar className="h-12" expand="lg">
            <Container fluid>
                <Navbar.Brand onClick={() => handleNavClick("Home")} href="#home">

                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id="basic-navbar-nav" className='navbar-collapse'>
                    <Nav className="d-flex flex-grow-1 align-items-left me-auto">
                        <Nav.Link onClick={() => handleNavClick("Home")}>
                            Home
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
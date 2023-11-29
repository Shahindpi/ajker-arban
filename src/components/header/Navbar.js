import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

function navbar() {
    return (
        <div className='page-wrapper'>
            <div className='navbar'>
                <Navbar bg="primary container-fluid" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>     
            </div>
        </div>
    );
  }

export default navbar;
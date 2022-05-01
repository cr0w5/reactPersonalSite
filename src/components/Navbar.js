import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import '../App.css';

const Navbar1 = () => {
  return(
    <>
      <Navbar bg="dark" variant='dark' expand="sm" sticky='top'>
        <Container>
            <Navbar.Brand className="justify-content-start" href="/Home">Crow</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto justify-content-end" >
                  <Nav.Link href="/Home#Home">Home</Nav.Link>                  
                  <Nav.Link href="/Home#Mission">Mission</Nav.Link>
                  <Nav.Link href="/Home#Skills">Skills</Nav.Link>
                  <Nav.Link href="/Home#Inspiration">Inspiration</Nav.Link>
                  <Nav.Link href="/Home#Contact">Contact</Nav.Link>
              </Nav>           
            </Navbar.Collapse> 
        </Container>                     

      </Navbar>
    </>
  )
}

export default Navbar1;
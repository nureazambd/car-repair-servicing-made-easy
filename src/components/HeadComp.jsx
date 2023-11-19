import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Home.css'

export default function HeadComp() {
  return (
    <div className='navbar-view'>
      {/* className="bg-body-tertiary" */}
        <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#18144e'}}>
      <Container>
        <Navbar.Brand href="#home" style={{color:'white'}}>Car Repair & Servicing</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{backgroundColor:'white'}} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" style={{color:'white'}}>HOW IT WORKS</Nav.Link>
            <Nav.Link href="#pricing" style={{color:'white'}}>APPLY TO BE A MECHANIC</Nav.Link>
            <Nav.Link href="#pricing" style={{color:'white'}}>SUPPORT</Nav.Link>
            <Nav.Link href="#pricing" style={{color:'white'}}>OUR SERVICE</Nav.Link>
            <Nav.Link href="#pricing" style={{color:'white'}}>BLOG</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" style={{color:'white'}}>SING IN</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" style={{color:'white'}}>
              GET STARTED
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

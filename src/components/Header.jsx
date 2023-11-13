import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
  return (
    <div>

        <Navbar collapseOnSelect expand="lg" className=" pr-5">
      
      
        <Navbar.Brand href="#" ></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto headerBackground gap-5">
          <Nav.Link href="#how-it-works"><img className="group-NC9" src="group.png"/></Nav.Link>
          
            <Nav.Link href="#how-it-works" className='text-white'>HOW IT WORKS</Nav.Link>
            <Nav.Link href="#apply-to-ge-a-mechanic" className='text-white'>APPLY TO BE A MECHANIC</Nav.Link>
            <Nav.Link href="#support" className='text-white'>SUPPORT</Nav.Link>

            <Nav.Link href="#our-service" className='text-white'>OUR SERVICE</Nav.Link>
            <Nav.Link href="#blog" className='text-white'>BLOG</Nav.Link>

            
          </Nav>
          
          <Nav className='headerBackground gap-2'>
            <Nav.Link href="#sing-in" className='text-white'>SING IN</Nav.Link>
            
            <div className="rectangle-23-yFo">
            <Nav.Link eventKey={2} href="#get-started" className='text-white'>
            GET STARTED
            </Nav.Link>
        </div>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    </div>
  )
}

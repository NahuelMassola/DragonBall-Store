import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from './CartWidget';


const NavBar = () => {

  return (
    <Navbar  bg="dark" expand="lg md sm" variant="dark">
      <Container>
        <Navbar.Brand href="#home">DragonBall Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
          <Nav.Link className='navbar' href="#home">Home</Nav.Link>
          <Nav.Link className='navbar' href="#contact">Contact</Nav.Link>
            <NavDropdown className='navbar' title="Catergories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Figures Z</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Figures Super
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#"><CartWidget/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavBar;
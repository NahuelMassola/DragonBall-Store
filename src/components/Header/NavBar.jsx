import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavBar.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';

// Componente NavBar //

const NavBar = () => {

  return (
    <Navbar bg="dark" expand="lg md sm" variant="dark">
      <Container>
        <Link className='navbar m-2' to="/" > DragonBall Store</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link className='navbar m-2' to="/" >Home</Link>
          <Link className='navbar m-2' to="/contact">Contact</Link>
            <NavDropdown className='navbar' title="Catergories" id="basic-nav-dropdown">
              <Link className='link d-flex' to="/category/figuresZ"><strong>Figures Z</strong></Link>
              <Link className='link' to="/category/figuresSuper"><strong>Figures Super</strong></Link>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link to="/cart"><CartWidget/></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
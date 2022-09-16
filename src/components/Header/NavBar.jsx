import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavBar.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';
import NavBarOptions from './NavbarOptions';

// Componente NavBar //

const NavBar = () => {


  return (
    <Navbar bg="dark" expand="lg md sm" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <ul className='navbar'>
              {NavBarOptions.map(option =>
                <li key={option.id}>
                  <Link className='navbari' to={option.link}>{option.nombre}</Link>
                </li>
                )}
            </ul>
            {<NavDropdown className='navbar' title="Catergories" id="basic-nav-dropdown">
              <Link className='link d-flex' to="/category/figuresZ"><strong>Figures Z</strong></Link>
              <Link className='link' to="/category/figuresSuper"><strong>Figures Super</strong></Link>
            </NavDropdown>}
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
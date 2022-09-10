import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from './CartWidget';
/* import { Link } from 'react-router-dom'; */



const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#Home">DragonBall Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link className='navbar' to={"/Home"}>Home</Nav.Link>
            <Nav.Link className='navbar' to={"/Contact"}>Contact</Nav.Link>
            <Nav.Link>
              <NavDropdown title="Categories" id="collasible-nav-dropdown"><NavDropdown/>
                <NavDropdown.Item to={"/FiguresZ"}>Figures Z</NavDropdown.Item>
                <NavDropdown.Item to={"/FiguresS"}>Figures Super</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav.Link>
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

 
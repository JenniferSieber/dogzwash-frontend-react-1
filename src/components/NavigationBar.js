import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faDog } from "@fortawesome/free-solid-svg-icons";

function NavigationBar() {
  return (
    <Navbar className="px-4 bgblue" expand="lg">
    
      <Navbar.Brand as={Link} to='/' className="fs-1 logo-dark"> <FontAwesomeIcon className="fa-icon nav-icon" icon={faDog}  />dogz wash</Navbar.Brand >
    
      <Nav className="cart" >
          <Nav.Link as={Link} to="/cart" className="cart-link">
            <FontAwesomeIcon className="fa-icon cart-icon" icon={faShoppingBag} />
          </Nav.Link>
      </Nav>

      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/about">about</Nav.Link>
          <Nav.Link as={Link} to="/services">services</Nav.Link>
          <Nav.Link as={Link} to="/store">store</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;

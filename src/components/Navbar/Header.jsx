import React from 'react';
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';


function Header() {
  return (
    <Navbar bg="light" expand="md" className="justify-flex-end">
      <Navbar.Brand href='/'>
        E-Cycling
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink to="/">Products</NavLink>
          <NavLink to="/vacancies">Vacancies</NavLink>
          <NavLink to="/about">About us</NavLink>
          <Button type="button">
            <NavLink to="/signin">Sing in</NavLink>
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
import React from 'react';
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';

const Header = ({ login, isAuth, logout, userId, role }) => {
  return (
    <Navbar bg="light" expand="md" className="">
      <Navbar.Brand>
        <NavLink className="mx-2 my-auto" to="/">E-Cycling</NavLink>
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink className="mx-2 my-auto" to="/">Products</NavLink>
          <NavLink className="mx-2 my-auto" to="/vacancies">Vacancies</NavLink>
          <NavLink className="mx-2 my-auto" to="/customers">Customers</NavLink>
          {(role === 'owner' || role === 'admin') && (
            <NavLink className="mx-2 my-auto" to="/admin">Admin panel</NavLink>
          )} 
          {isAuth && <NavDropdown title={login} id="collasible-nav-dropdown">
            <NavDropdown.Item href={"/profile/" + userId}>Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
          </NavDropdown>} 
          {!isAuth && <Button className="mx-2 my-auto" type="button">
            <NavLink className="text-white" to="/login">Login</NavLink>
          </Button>}
        </Nav>
      </Navbar.Collapse>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
  )
}

export default Header
import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';


const Header = () => {
    const {user, logout} = useAuth()
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand to="#home"><strong className="fs-3 p-1 nav-brand">Zero Point</strong></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className="text-white fw-bold fs-5 text-center">
    <Nav className="ms-auto">
      <NavLink className="mx-2 text-info" to="/home">Home</NavLink>
      <NavLink className="mx-2 text-info" to="/products">Products</NavLink>
      {
        user?.email && <NavLink className="mx-2 text-info" to="/dashboard">
        Dashboard
      </NavLink>
      }
    </Nav>
    <Nav className="ms-auto text-white">
      {
        user?.email && <h6 className="text-light mx-2 mt-2">{user?.displayName}</h6>
      }
      {
        user?.email ? <Button className="btn-light mx-auto" onClick={logout}>Log out</Button> :
        <NavLink className="mx-2 text-info" to="/login">Login</NavLink>
      } 
      <NavLink className="mx-2 text-info" to="/register">
        Register
      </NavLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
};

export default Header;
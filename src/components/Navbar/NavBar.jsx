import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>

      <h1>INDUMENTARIA GL</h1>
      <Link to={'/'}>
        <img className="logo" src="./assets/img/imagen-logo.png" alt="" />
      </Link>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href={'/'}>Inicio</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to={'categoria/Remeras'}>Remeras</NavLink>
            <NavLink to={'categoria/Buzos'}>Buzos</NavLink>
            <NavLink to={'categoria/Pantalones'}>Pantalones</NavLink>
          </Nav>
        </Container>
      </Navbar>


      <CartWidget />

    </>
  );
}

export default NavBar
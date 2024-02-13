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
    <img className="logo" src="./assets/img/imagen-logo.png" alt="" />
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavLink to={'/'}>Inicio</NavLink>
          <Nav className="me-auto">
            <NavLink to={'/'}>Productos</NavLink>
            <NavLink to={'/tienda'}>Tienda</NavLink>
            <NavLink to={'/'}>Nosotros</NavLink>
            <NavLink to={'/'}>Contacto</NavLink>
          </Nav>
        </Container>
      </Navbar>

      <CartWidget/>

    </>
  );
}

export default NavBar
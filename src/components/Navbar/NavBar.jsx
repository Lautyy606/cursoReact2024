import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const Menu = () => {
  return (
    <>

    <h1>INDUMENTARIA GL</h1>
    <img className="logo" src="./imagen-logo.png" alt="" />
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">Inicio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Productos</Nav.Link>
            <Nav.Link href="#">Contacto</Nav.Link>
            <Nav.Link href="#">Nosotros</Nav.Link>
            <Nav.Link href="#">Ubicacion</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <CartWidget/>

    </>
  );
}

export default Menu
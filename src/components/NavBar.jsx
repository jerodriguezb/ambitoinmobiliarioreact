import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

import '../css/navbar.css';

const NavBar = () => {
    return (
        <div className="navBar">
            <h4>Contacto: Benjamin Neville - Cel +5493816900030 +5493814909195 - Email:inmobiliaria.ambito@gmail.com</h4>  
            <Navbar bg="light" expand="lg">
            <img src="https://lh3.googleusercontent.com/l72waZuMNi55w1PiR0cqa1SYPWhxuuIGOY6r2WEvXeCMI9w-u719PUQBSR0c6NvL9v8wptDvxIHW32voNWZy3L6vY7dcuavXZysjirhzRr9a4g_s0pw_QzE-0NyK-VLsVZfcIT1tJQ=w2400"  
              alt="logo" />
                <Link claseName= "nav" to="/"><Navbar.Brand>Ambito Inmobiliaria</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/propiedades" className="nav-link">Propiedades</Link>
                        <NavDropdown title="Buscar Propiedades" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Maquetación con HTML 5</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Estilos con CSS3 </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Fundamentos de Javascript</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Link to="/" className="nav-link">Contactanos</Link>
                        <Link to="/" className="nav-link">Quienes Somos</Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar
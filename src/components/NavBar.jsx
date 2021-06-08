import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap'

import '../css/navbar.css';

const NavBar = () => {
    return (
        
        <div id= "navBar" className="navBar">
          
            <Navbar  bg="light" expand="lg">
            <img src="https://lh3.googleusercontent.com/l72waZuMNi55w1PiR0cqa1SYPWhxuuIGOY6r2WEvXeCMI9w-u719PUQBSR0c6NvL9v8wptDvxIHW32voNWZy3L6vY7dcuavXZysjirhzRr9a4g_s0pw_QzE-0NyK-VLsVZfcIT1tJQ=w2400"  
              alt="logo" />
                <Link claseName = "nav" to="/"><Navbar.Brand>Ambito Inmobiliaria</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                {/* <Navbar className="mr-auto"> */}
                    <Nav>
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/propiedades" className="nav-link1 text-decoration-none">Buscar Propiedades</Link>
                        <Link to={{ pathname: "https://docs.google.com/forms/d/e/1FAIpQLScTpePk0bQ3HVpbFP-UCRkmYs6Smkl3_Ck6QT6v9SSG5M8LOg/viewform" }}  className="nav-link" target="_blank">Contactanos</Link>
                        <Link to="/" className="nav-link">Quienes Somos</Link>
                        <Link to="/" className="nav-link"></Link> 
                       
                    </Nav>
                {/* </Navbar> */}
                </Navbar.Collapse>
            </Navbar>
            <h4>Contacto: Benjamin Neville +54 381-6900030</h4>  
        </div>
    )
}

export default NavBar

import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const NavBar = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Link to="/"><Navbar.Brand>Academy App</Navbar.Brand></Link>
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
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavBar

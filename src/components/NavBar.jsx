import React from "react";
// import jwt_decode from 'jwt-decode'//Paquete para decodificar el Token
import { Link, useLocation, useHistory } from "react-router-dom";

// import { getCursos } from "../helpers/rutaCursos";
// import { getPropiedades } from "../helpers/rutaPropiedades";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";

import "../css/navbar.css";

const NavBar = () => {
  // //Defino location e history
  // const location = useLocation();
  // const history = useHistory();

  // //estado para manejar el usuario
  // const [user, setUser] = useState("Iniciar sesión");

  // const [payload, setPayload] = useState({
  //     role: "",
  // });

  // //estado para manejar los datos de los cursos
  // const [cursos, setCursos] = useState({
  //     data: {},
  //     loading: true,
  // });

  // //Si cambia la locación asigno a user el valor de localstorage
  // useEffect(() => {
  //     setUser(JSON.parse(localStorage.getItem("usuario")) || "Iniciar Sesión");
  //     ActualizarData();
  //     checkToken();
  // }, [location]);

  // //Cuando monto navbar se cargan los cursos
  // useEffect(() => {
  //     ActualizarData();
  //     // getCursos().then((datos) => {
  //     //   setCursos({
  //     //     data: datos,
  //     //     loading: false,
  //     //   });
  //     // });
  // }, []);

  // const ActualizarData = () => {
  //     getCursos(0, 100).then((datos) => {
  //         setCursos({
  //             data: datos,
  //             loading: false,
  //         });
  //     });
  // };

  // //Manejo el deslogueo de la web
  // const handleLogin = () => {
  //     localStorage.setItem("token", JSON.stringify(""));
  //     localStorage.setItem("id", JSON.stringify(""));
  //     localStorage.setItem("usuario", JSON.stringify("Iniciar Sesión"));
  //     setUser(JSON.parse(localStorage.getItem("usuario")));
  //     setPayload({ role: "" });
  //     history.push("/login");
  // };

  // const checkToken = () => {
  //     let token = JSON.parse(localStorage.getItem("token")) || "";
  //     if (token.length > 0) {
  //         let token_decode = jwt_decode(localStorage.getItem("token")); //Obteniendo los datos del payload
  //         setPayload(token_decode.usuario);
  //     }
  // };

  return (
    <div id="navBar" className="navBar">
      <Navbar bg="light" expand="lg">
        <img
          src="https://lh3.googleusercontent.com/l72waZuMNi55w1PiR0cqa1SYPWhxuuIGOY6r2WEvXeCMI9w-u719PUQBSR0c6NvL9v8wptDvxIHW32voNWZy3L6vY7dcuavXZysjirhzRr9a4g_s0pw_QzE-0NyK-VLsVZfcIT1tJQ=w2400"
          alt="logo"
        />
        <Link claseName="nav" to="/">
          <Navbar.Brand>Ambito Inmobiliaria</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Navbar className="mr-auto"> */}
          <Nav>
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/propiedades" className="nav-link1 text-decoration-none">
              Buscar Propiedades
            </Link>
            <Link
              to={{
                pathname:
                  "https://docs.google.com/forms/d/e/1FAIpQLScTpePk0bQ3HVpbFP-UCRkmYs6Smkl3_Ck6QT6v9SSG5M8LOg/viewform",
              }}
              className="nav-link"
              target="_blank"
            >
              Contactanos
            </Link>
            <Link to="/" className="nav-link">
              Quienes Somos
            </Link>
            <Link to="/" className="nav-link">
              Reciclamos
            </Link>
            <Link to="/" className="nav-link"></Link>
          </Nav>

          {/* {payload.role === "ADMIN_ROLE" && (
            <Link to="/admin" className="text-decoration-none text-muted mr-2">
              Administrador
            </Link>
          )}
          <button className="btn btn-outline-info" onClick={handleLogin}>
            {user}
          </button> */}

          {/* </Navbar> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;

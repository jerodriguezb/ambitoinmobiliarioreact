import React from "react";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

export const Header = () => {
 
  return (
      <header id="header">
        <main>
         <div className="contacto"> 
            <h4>Contacto: Benjamin Neville - Cel +5493816900030 +5493814909195 - Email:inmobiliaria.ambito@gmail.com</h4>  
             
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
            <a className="navbar-brand" href="#">
              <img src="https://logos-marcas.com/wp-content/uploads/2020/04/Huawei-Logo.png"  
              alt="logo" /> 
              <span>Ambito Inmobiliaria</span></a
            >
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Ventas<span 
                  className="sr-only">(current)</span></a
                  >
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Alquileres</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Servicios</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contactanos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-rolling" href="#">Quienes Somos</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      </main>
    </header>

  )
}






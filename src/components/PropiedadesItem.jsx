import React from "react";
import { Link } from "react-router-dom";

import "../css/propiedades.css";

const PropiedadesItem = ({ propiedad }) => {
  return (
   
      <Link to={`/propiedad/${propiedad.id}`}>
          <div className="card" className="col-3 mb-4">
              { propiedad.mostrar_portada ? 
                <div className="card mb-4">
                  <img src={propiedad.imag1} 
                       className="card-img-top" 
                       alt={propiedad.titulo} /><img/>
                  <div className="card-body">
                    <h3 className="card-title">{propiedad.titulo}</h3>
                    <span className="badge badge-pill badge-danger mb-2">
                    Venta
                    </span>
                    <h4>{propiedad.direccionfisica}</h4>
                    <h3>$ {propiedad.valor}</h3>
                    <i className="fa fa-home" aria-hidden="true"> {propiedad.superficieTotal} m²{" "} </i>  
                    <i className="fa fa-bed" aria-hidden="true"> {" "} 5 {" "}</i>
                    <i className="fa fa-bath" aria-hidden="true"> {" "} 2 {" "}</i>
                  </div>
                </div>
              : '' }    
          </div>
       
      </Link>
    
  );
};

export default PropiedadesItem;

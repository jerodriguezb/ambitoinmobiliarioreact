import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { getPropiedades } from "../helpers/rutaPropiedades";

import '../css/principal.css';
import 'bootstrap/dist/css/bootstrap.min.css'


const Propiedades = () => {
  const [propiedades, setPropiedades] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getPropiedades().then((propiedades) => {
      setPropiedades({
        data: propiedades,
        loading: false,
      });
    });
  }, []);

  return (
<main>
    <div className="container">
        <div className="row mb-4">
          <div className="col text-justify"> 
            <b><h3>Conoce a las</h3></b>
            <b><h2>Propiedades en Ventas</h2></b>
            <hr></hr>
          </div>
        </div>
        
        <div className="row">
        
                {propiedades.data.map((propiedad =>  {
                  return(
                      
                    <div id="card" className="col-lg-3">
                       { propiedad.mostrar_portada ? 
                          <div className="card mb-4">
                          {/* <Link to="/PropiedadDetalle" className="btn btn-outline-info mt-3">AAAAAAAA</Link> */}
                        
                              <img src={propiedad.imag1} 
                                  className="card-img-top" 
                                  alt={propiedad.Titulo} />
                              <div className="card-body">
                                  <h3 className="card-title">{propiedad.Titulo}</h3>
                                  <span className="badge badge-pill badge-danger mb-2">
                                    Venta
                                  </span>
                                  <h4>{propiedad.DireccionFisica}</h4>
                                  <h2>{propiedad.Valor}</h2>
                                  <i className="fa fa-home" aria-hidden="true"> {propiedad.SuperficieTotal} m²{" "} </i>  
                                  <i className="fa fa-bed" aria-hidden="true"> {" "} 5 {" "}</i>
                                  <i className="fa fa-bath" aria-hidden="true"> {" "} 2 {" "}</i>
                              </div>
                          </div>

                        : '' }    
                        </div>
                 
                  )
                }))}      
        
        </div>
    
        <div className="row mb-4">
          <div className="col text-justify"> 
            {/* <div className="col text-justify text-uppercase">  */}
            <b><h3>Conoce a las</h3></b>
            <b><h2>Propiedades en Alquilers</h2></b>
            <hr></hr>
          </div>
        </div>

        <div className="row">
        
        {propiedades.data.map((propiedad =>  {
          return(
              
            <div id="card" className="col-lg-3">
              { propiedad.mostrar_portada ?  
                <div className="card mb-4">
             
                    <img src={propiedad.imagen} 
                        className="card-img-top" 
                        alt={propiedad.titulo} />
                    <div className="card-body">
                        <h3 className="card-title">{propiedad.titulo}</h3>
                        <span className="badge badge-pill badge-primary mb-2">
                          Alquiler
                        </span>
                        <h4>{propiedad.direccion}</h4>
                        <h2>$ {propiedad.valor}</h2>
                        <i className="fa fa-home" aria-hidden="true"> {propiedad.superf_total} m²{" "} </i>  
                        <i className="fa fa-bed" aria-hidden="true"> {" "} 5 {" "}</i>
                        <i className="fa fa-bath" aria-hidden="true"> {" "} 2 {" "}</i>
                    </div>
                  </div>
                
                : '' }
           
            </div>
         
          )
        }))}      

    </div>
    </div>   
    </main>  
)
  
};

export default Propiedades;




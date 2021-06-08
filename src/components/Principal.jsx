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
            <b><h3 className="mt-5">Conoce a las</h3></b>
            <b><h2>Propiedades en Venta</h2></b>
            <hr></hr>
          </div>
        </div>
    
        <div className="row">
    
          {propiedades.data.map((propiedad => { 
         
            return(
                  <>
                    { propiedad.EstadoPropiedad === "Venta" && (
                      <div id="card" className="col-lg-3">
                        <Link to={`/propiedad/${propiedad.id}`} className="text-decoration-none">
                           <div className="card mb-4">
                              <img src={propiedad.imag1} 
                                  className="card-img-top" 
                                  alt={propiedad.Titulo} /><img/>
                              <div className="card-body">
                                <h3 className="card-title">{propiedad.Titulo}</h3>
                                <span id="pildora" className="badge badge-pill badge-danger mb-2">
                                  {propiedad.EstadoPropiedad}
                                </span>
                                <h4>{propiedad.DireccionFisica}</h4>
                                <h3>{propiedad.Valor}</h3>
                                <i className="fa fa-home" aria-hidden="true"> {propiedad.SuperficieTotal}{" "} </i>  
                                <i className="fa fa-bed ml-5" aria-hidden="true"> {propiedad.Dormitorio}{" "}</i>
                                <i className="fa fa-bath ml-5" aria-hidden="true"> {propiedad.Baño}{" "}</i>
                                <h3 className="mt-5">{propiedad.CodigoPropiedad} - Cod. Int. {propiedad.id}</h3>
                              </div>
                            </div>
                        </Link>
                       </div>
                    )}    
                  </>   
                  )
          }))} 
          
        </div>
    
        <div className="row mb-4">
          <div className="col text-justify"> 
            <b><h3 className="mt-5">Conoce a las</h3></b>
            <b><h2>Propiedades en Alquiler</h2></b>
            <hr></hr>
          </div>
        </div>

        <div className="row">
    
          {propiedades.data.map((propiedad => { 
         
            return(
                  <>
                    { propiedad.EstadoPropiedad === "Alquiler" && (
                      <div id="card" className="col-lg-3">
                        <Link to={`/propiedad/${propiedad.id}`} className="text-decoration-none">
                           <div className="card mb-4">
                              <img src={propiedad.imag1} 
                                  className="card-img-top" 
                                  alt={propiedad.Titulo} /><img/>
                              <div className="card-body">
                                <h3 className="card-title">{propiedad.Titulo}</h3>
                                <span id="pildora" className="badge badge-pill badge-primary mb-2">
                                  {propiedad.EstadoPropiedad}
                                </span>
                                <h4>{propiedad.DireccionFisica}</h4>
                                <h3>{propiedad.Valor}</h3>
                                <i className="fa fa-home" aria-hidden="true"> {propiedad.SuperficieTotal}{" "} </i>  
                                <i className="fa fa-bed ml-5" aria-hidden="true"> {propiedad.Dormitorio}{" "}</i>
                                <i className="fa fa-bath ml-5" aria-hidden="true"> {propiedad.Baño}{" "}</i>
                                <h3 className="mt-5">{propiedad.CodigoPropiedad} - Cod. Int. {propiedad.id}</h3>
                              </div>
                            </div>
                        </Link>
                       </div>
                    )}    
                  </>   
                  )
          }))} 
          
        </div>

        <div className="row mb-4">
          <div className="col text-justify"> 
            {/* <div className="col text-justify text-uppercase">  */}
            <b><h3 className="mt-5">Conoce a las</h3></b>
            <b><h2>Propiedades en Venta-Alquiler</h2></b>
            <hr></hr>
          </div>
        </div>

        <div className="row">
    
    {propiedades.data.map((propiedad => { 
   
      return(
            <>
              { propiedad.EstadoPropiedad === "Venta-Alquiler" && (
                <div id="card" className="col-lg-3">
                  <Link to={`/propiedad/${propiedad.id}`} className="text-decoration-none">
                     <div className="card mb-4">
                        <img src={propiedad.imag1} 
                            className="card-img-top" 
                            alt={propiedad.Titulo} /><img/>
                        <div className="card-body">
                          <h3 className="card-title">{propiedad.Titulo}</h3>
                          <span id="pildora" className="badge badge-pill badge-warning mb-2">
                            {propiedad.EstadoPropiedad}
                          </span>
                          <h4>{propiedad.DireccionFisica}</h4>
                          <h3>{propiedad.Valor}</h3>
                          <i className="fa fa-home" aria-hidden="true"> {propiedad.SuperficieTotal}{" "} </i>  
                          <i className="fa fa-bed ml-5" aria-hidden="true"> {propiedad.Dormitorio}{" "}</i>
                          <i className="fa fa-bath ml-5" aria-hidden="true"> {propiedad.Baño}{" "}</i>
                          <h3 className="mt-5">{propiedad.CodigoPropiedad} - Cod. Int. {propiedad.id}</h3>
                        </div>
                      </div>
                  </Link>
                 </div>
              )}    
            </>   
            )
    }))} 
    
  </div>



    </div>   
    </main>  
)
  
};

export default Propiedades;




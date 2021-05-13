import React, { useEffect, useState } from "react";
import { getPropiedades } from "./helpers/rutaPropiedades";
import './index.css';
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
          <div className="col text-justify text-uppercase"> 
            <b><h3>Conoce a las</h3></b>
            <b><h2>Propiedades en Venta</h2></b>
            <hr></hr>
          </div>
        </div>
        
        <div className="row">
     
                {propiedades.data.map((propiedad=>{
                  return(

                    <div className="col-lg-3">
                      <div className="card mb-4">
                          <img src={propiedad.imagen} 
                              className="card-img-top" 
                              alt={propiedad.titulo} />
                          <div className="card-body">
                              <h3 className="card-title">{propiedad.titulo}</h3>
                              <span className="badge badge-pill badge-danger mb-2">
                                Venta
                              </span>
                              <h4>{propiedad.direccion}</h4>
                              <h2>$ {propiedad.valor}</h2>
                              <i className="fa fa-home" aria-hidden="true"> {propiedad.superf_total} m²{" "} </i>  
                              <i className="fa fa-bed" aria-hidden="true"> {" "} 5 {" "}</i>
                              <i className="fa fa-bath" aria-hidden="true"> {" "} 2 {" "}</i>
                          </div>
                      </div>
                    </div>
                 
                  )
                }))}      
        
            </div>
    
    </div>   
    </main>  
)
  
};

export default Propiedades;




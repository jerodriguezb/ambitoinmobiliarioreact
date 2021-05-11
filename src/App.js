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
  

      <div className="container">
          
          
              <div className="row">
                 
                {propiedades.data.map((propiedad=>{

                  return(

                  <div className="col-lg-3">
                    <div className="col-md-3">
                      <div className="card">
                          <img src={propiedad.imagen} 
                              className="card-img-top" 
                              alt={propiedad.titulo} />
                          <div className="card-body">
                              <h5 className="card-title">{propiedad.titulo}</h5>
                              {/* <img className="avatar" src={propiedad.img_mentor} alt={propiedad.mentor}/> */}
                              {/* <h5>$ {propiedad.valor}</h5> */}
                              <span className="badge badge-pill badge-danger mb-2">
                                Venta
                              </span>
                              <h5>{propiedad.direccion}</h5>
                              <h5>{propiedad.valor}</h5>
                              <i className="fa fa-home" aria-hidden="true">{propiedad.superf_total} m²{" "}</i>  
                              <i className="fa fa-bed" aria-hidden="true">{" "}5{" "}</i>
                              <i className="fa fa-bath" aria-hidden="true">{" "}2{" "}</i>
                          </div>
                      </div>
                    </div>
                  </div> 
                  )


                }))}      
        
            </div>
         
    
            </div>     

)
  

};

export default Propiedades;




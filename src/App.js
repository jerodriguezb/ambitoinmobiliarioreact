import React, { useEffect, useState } from "react";
import { getPropiedades } from "./helpers/rutaPropiedades";
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>

//   </React.StrictMode>,
//   document.getElementById("root")
// );

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
    <div id="speakers" className="mt-4">
      <div className="container">
        <div className="row mb-4">
          <div className="col text-justify text-uppercase">
            <b>
              <span>Conoce a las</span>
            </b>
            <b>
              <h2>Propiedades en Venta</h2>
            </b>
            <hr></hr>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Aca comienza las 6 card y la marquesina-->
            <!-- comentario lg final de 3 a 2--> */}

              {propiedades.data.map((propiedad) => {
                return (
                  // <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                  <div className="col mb-4 mx-2n">
                    <article className="card h-100">
                      <img
                        id="imagencard"
                        src={propiedad.imagen}
                        className="card-img-top"
                        alt={propiedad.titulo}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{propiedad.titulo}</h5>
                        <span className="badge badge-pill badge-danger mb-2">
                          Venta
                        </span>
                        <h4>{propiedad.direccion}</h4>
                        <h3>{propiedad.valor}</h3>
                        <span>
                          <i className="fa fa-home" aria-hidden="true">
                            {" "}
                            500 m²{" "}
                          </i>
                          <i className="fa fa-bed" aria-hidden="true">
                            {" "}
                            5{" "}
                          </i>
                          <i className="fa fa-bath" aria-hidden="true">
                            {" "}
                            2{" "}
                          </i>
                        </span>
                      </div>
                    </article>
                  </div>
                  // </div>
                );
              })}
            </div>
          </div>
          {/* <!-- </div 8 cards> --> */}
        </div>
      </div>
    </div>
  );
};

export default Propiedades;

{
  /* 
// <div id="speakers" className="mt-4">
//         <div className="container">
//           <div className="row mb-4">
//             <div className="col text-justify text-uppercase">
//               <b><span>Conoce a las</span></b>
//               <b><h2>Propiedades en Venta</h2></b>
//               <hr>

//             </div>
           
//           </div> */
}

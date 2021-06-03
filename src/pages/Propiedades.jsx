import React, { useEffect, useState } from "react";
import { getPropiedades } from "../helpers/rutaPropiedades";
import PropiedadesItem from "../components/PropiedadesItem";
import Footer from "../components/Footer"


import "../css/propiedades.css";
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
   <>
      <div className="container">
        <div className="row">
          <div className="col sm-4 mb-2">
            <b><h3>Conoce a las</h3></b>
            <b><h2>Propiedades en Ventas y Alquileres</h2></b>
            <hr></hr>
          </div>
        </div>
        <div id="card" className="row lg-3">
          {propiedades.data.map((propiedad) => {
            return <PropiedadesItem key={propiedad.id} propiedad={propiedad} />;
          })}
        </div>
      </div>
      <Footer />
    </>  
  );
  
};

export default Propiedades;

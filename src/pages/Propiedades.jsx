import React, { useEffect, useState } from "react";
import { getPropiedades } from "../helpers/rutaPropiedades";
import PropiedadesItem from "../components/PropiedadesItem";
import Busqueda from "../components/Busqueda";
import Footer from "../components/Footer";

import "../css/propiedades.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Propiedades = () => {
  const [propiedades, setPropiedades] = useState({
    data: [],
    loading: true,
  });

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    getPropiedades().then((propiedades) => {
      setPropiedades({
        data: propiedades,
        loading: false,
      });
    });
  }, []);

  const propiedadesFilter = propiedades.data.filter((propiedad) => {
    return propiedad.Titulo.toLowerCase().includes(
      inputValue.toLocaleLowerCase()
    );
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col sm-4 mb-2">
            <b>
              <h3>Conoce a las</h3>
            </b>
            <b>
              <h2>Propiedades en Ventas</h2>
            </b>
            <hr></hr>
          </div>
        </div>
        <Busqueda inputValue={inputValue} setInputValue={setInputValue} />
        <div className="row lg-3">
          {propiedadesFilter.map((propiedad) => {
            return <PropiedadesItem key={propiedad.id} propiedad={propiedad} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Propiedades;

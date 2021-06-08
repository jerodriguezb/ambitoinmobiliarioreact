import React, { useEffect, useState } from "react";
import { getPropiedades } from "../helpers/rutaPropiedades";
import PropiedadesItem from "../components/PropiedadesItem";
import Busqueda from "../components/Busqueda";
import Footer from "../components/Footer"


import "../css/propiedades.css";
import 'bootstrap/dist/css/bootstrap.min.css'

const Propiedades = () => {
  const [propiedades, setPropiedades] = useState({
    data: [],
    loading: true,
  });

const [propiedadesFiltradas, setPropiedadesFiltradas] = useState([]);
//const [inputValue, setInputValue] = useState("");
const [estadoSelect, setEstadoSelect] = useState("");
const [tipoSelect, setTipoSelect] = useState("");
const [lugarSelect, setLugarSelect] = useState("");
const [ambientesSelect, setAmbientesSelect] = useState("");

useEffect(() => {
  getPropiedades().then((propiedades) => {
    setPropiedades({
      data: propiedades,
      loading: false,
    });
    setPropiedadesFiltradas(propiedades);
  });
}, []);

const filtrarPropiedades = () => {

    const estadoFilter = propiedades.data.filter((inmueble) => {
      return estadoSelect === "" || inmueble.EstadoPropiedad === estadoSelect;
    });

    const tipoFilter = estadoFilter.filter((inmueble) => {
      return tipoSelect === "" || inmueble.TipoPropiedad === tipoSelect;
    });

    const lugarFilter = tipoFilter.filter((inmueble) => {
      return lugarSelect === "" || inmueble.Lugar === lugarSelect;
    });

    const ambientesFilter = lugarFilter.filter((inmueble) => {
      return ambientesSelect === "" || inmueble.Ambientes === ambientesSelect;
    });
    setPropiedadesFiltradas(ambientesFilter);
    };

  return (
   <>
          
      <Busqueda
            // inputValue={inputValue}
            setEstadoSelect={setEstadoSelect}
            // setInputValue={setInputValue}
            setTipoSelect={setTipoSelect}
            setLugarSelect={setLugarSelect}
            setAmbientesSelect={setAmbientesSelect}
            filtrarPropiedades={filtrarPropiedades}
          />
      <div className="container">
      
      
        <div className="row">
          <div className="col sm-4 mb-2">
            <b><h3>Conoce a las</h3></b>
            <b><h2>Propiedades en Venta y Alquiler</h2></b>
            <hr></hr>
          </div>
        </div>
      
        <div id="card" className="row lg-3">
          {propiedadesFiltradas.map((propiedad) => {
            return <PropiedadesItem key={propiedad.id} propiedad={propiedad} />;
          })}
        </div>
      </div>
      <Footer />
    </>  
  );
  
};

export default Propiedades;

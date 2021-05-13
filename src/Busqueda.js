import React, { useEffect, useState } from "react";
import { getBuscarEstado } from "./helpers/rutaBuscar";
import { getBuscarTipo } from "./helpers/rutaBuscar";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const BuscarEstado = () => {
  const [estado, setEstado] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getBuscarEstado().then((estado) => {
      setEstado({
        data: estado,
        loading: false,
      });
    });
  }, []);

  return (
    <main>
      <div>
       <section id="menu123">
        
        <form className="form-inline">
          <label className="my-1 mr-2" for="inlineFormCustomSelectPref">Estado</label>
          <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                <option selected>Seleccione opcion deseada</option>
                {estado.data.map((estado)=>{
                    return (
                            <option value={estado.codigo}>{estado.descripcion}</option>
                           )
                }
                )}
          </select>


          <label className="my-1 mr-2" for="inlineFormCustomSelectPref">Tipo</label>
          <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
          <option selected>Seleccione opcion deseada</option>
                {estado.data.map((estado)=>{
                    return (
                           <option value={estado.codigo}>{estado.descripcion}</option>
                              )
                }
                )}

          </select>

          <label className="my-1 mr-2" for="inlineFormCustomSelectPref">Lugar</label>
          <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
            <option selected>Seleccione opcion deseada</option>
            <option value="1">San Miguel de Tucuman</option>
            <option value="2">Yerba Buena</option>
            <option value="3">Tafi del Valle</option>
            <option value="4">Tafi Viejo</option>
            <option value="5">Banda del Rio Sali</option>
            <option value="6">Concepcion</option>
            <option value="7">Monteros</option>
            <option value="8">Famailla</option>
            <option value="9">Lules</option>
            <option value="10">Ninguno de las anteriores</option>
          </select>

          <label className="my-1 mr-2" for="inlineFormCustomSelectPref">Ambientes</label>
          <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
            <option selected>Seleccione opcion deseada</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">Ninguno de las anteriores</option>
            
          </select>

                        
          <button type="submit" className="btn btn-info my-1 btn-lg">Buscar</button>
        </form>
        
        </section>
        </div>
        </main>    
  )
}

export default BuscarEstado;


import React, { useEffect, useState } from "react";
import { getBuscarEstado } from "./helpers/rutaBuscar";
import { getBuscarTipo } from "./helpers/rutaBuscar";
import { getBuscarLugar } from "./helpers/rutaBuscar";
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


  const [tipo, setTipo] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getBuscarTipo().then((tipo) => {
      setTipo({
        data: tipo,
        loading: false,
      });
    });
  }, []);
   
  
  const [lugar, setLugar] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getBuscarLugar().then((lugar) => {
      setLugar({
        data: lugar,
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
                {tipo.data.map((tipo)=>{
                    return (
                           <option value={tipo.codigo}>{tipo.descripcion}</option>
                              )
                }
                )}

          </select>

          <label className="my-1 mr-2" for="inlineFormCustomSelectPref">Lugar</label>
          <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                {lugar.data.map((lugar)=>{
                          return (
                                <option value={lugar.codigo}>{lugar.descripcion}</option>
                                    )
                      }
                      )}
          
          </select>

          <label className="my-1 mr-2" for="inlineFormCustomSelectPref">Ambientes</label>
          <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
          <option selected>Seleccione opcion deseada</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
          
          </select>

                        
          <button type="submit" className="btn btn-info my-1 btn-lg">Buscar</button>
        </form>
        
        </section>
        </div>
        </main>    
  )
}

export default BuscarEstado;


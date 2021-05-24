import React from "react";
import {Link} from "react-router-dom";
import SimpleMap from "../components/GoogleMaps";

import 'bootstrap/dist/css/bootstrap.min.css'
import {Card} from 'react-bootstrap' 
import "../css/propiedaddetail.css";



const PropiedadDetail = ({data}) => {
  
  return (
        
        <div>
      
          <div className="row">
            <div className="col-8">
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="https://lh3.googleusercontent.com/yXATP_OwCP6o3DoEKQAdkx16Fzlt2XQLixk9PnegcUUgvEMx2yoxfX7ZxkE-Vs_3VDLIF3cZ5Gvxa-qa3d4q0NS3DaCkS_--OenklRHVsMqTImSudejcVZR73uYfLypWZWGxPTDtJA=w2400" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                      <img src="https://lh3.googleusercontent.com/yXATP_OwCP6o3DoEKQAdkx16Fzlt2XQLixk9PnegcUUgvEMx2yoxfX7ZxkE-Vs_3VDLIF3cZ5Gvxa-qa3d4q0NS3DaCkS_--OenklRHVsMqTImSudejcVZR73uYfLypWZWGxPTDtJA=w2400" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                    <img src="https://lh3.googleusercontent.com/yXATP_OwCP6o3DoEKQAdkx16Fzlt2XQLixk9PnegcUUgvEMx2yoxfX7ZxkE-Vs_3VDLIF3cZ5Gvxa-qa3d4q0NS3DaCkS_--OenklRHVsMqTImSudejcVZR73uYfLypWZWGxPTDtJA=w2400" className="d-block w-100" alt="..."></img>
    
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span claclassNamess="sr-only"></span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only"></span>
                </a>
              </div>
            
            </div>

             <div className="col-4">
                    <h3 className = "card-title mt-3">Datos de la Propiedad</h3>
                    <hr></hr>
                    <h3 class="card-titulo mb-3">{data.Titulo}</h3>
                    <h4 class="card-precio mb-3"> Valor: {data.Valor}</h4>
                    <h4 class="card-title mb-3"> Estado: {data.EstadoPropiedad}</h4>
                    <h4 class="card-title mb-3"> Tipo de Propiedad: {data.TipoPropiedad}</h4>
                    <h4 class="card-title mb-3"> Dirección: {data.DireccionFisica}</h4>
                    <h4 class="card-title mb-3"> Barrio: {data.Barrio}</h4>
                    <h4 class="card-title mb-3"> Lugar: {data.Lugar}</h4>
                    <h5 class="card-title mb-3"> Sup. Total: {data.SuperficieTotal}</h5>
                    <h5 class="card-title mb-3"> Sup. Propia: {data.SuperficiePropia}</h5>
                    <h5 class="card-title mb-3"> Sup. Comun: {data.SuperficieComun}</h5>
                    <h5 class="card-title mb-3"> Sup. Cubierta: {data.SuperficieCubierta}</h5>
                    <h5 class="card-title mb-3"> Sup. SemiCubierta: {data.SuperficieSemiCubierta}</h5>

             </div>
          </div>
          <div className="row">
            <div className="col-8">
              <h3 className = "card-title mt-3">Descripción de la Propiedad</h3>
              <hr></hr>
              <h5>{data.Descripcion}</h5>
            </div>
          </div>
         
          <div className="row">
            <div className="col-8">
              <h3 className = "card-title mt-3">Adicioaneles y Servicios</h3>
              <hr></hr>
              <h5>{data.Descripcion}</h5>
            </div>
          </div>  
            
            
            
          <div className="row">
            
            <div className="col-8">
            
          

            <SimpleMap data={data}/>

               
            </div>
          
          </div>

      </div>
  
  )
};

export default PropiedadDetail;


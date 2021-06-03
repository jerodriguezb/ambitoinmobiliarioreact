import React from "react";
import {Link} from "react-router-dom";
import {Carousel} from "react-bootstrap";

import SimpleMap from "../components/GoogleMaps";

import 'bootstrap/dist/css/bootstrap.min.css'
import {Card} from 'react-bootstrap' 
import "../css/propiedaddetail.css";



const PropiedadDetail = ({data}) => {
  
  return (
        <div>
            <div className="row mt-2">
              <div id="carousel-inner" className="col-lg-8">
                <Carousel>
                {data.imag1 != "" && (
                    <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src= {data.imag1}
                          alt="Third slide"
                        />
                      </Carousel.Item>)}

                  {data.imag2 != "" && (
                    <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src= {data.imag2}
                          alt="Third slide"
                        />
                      </Carousel.Item>)}
                
                  {data.imag3 != "" && (
                    <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src= {data.imag3}
                          alt="Third slide"
                        />
                      </Carousel.Item>)}

                  {data.imag4 != "" && (
                    <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src= {data.imag4}
                          alt="Third slide"
                        />
                      </Carousel.Item>)}

                  {data.imag5 != "" && (
                    <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src= {data.imag5}
                          alt="Third slide"
                        />
                      </Carousel.Item>)}

                  {data.imag6 != "" && (
                    <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src= {data.imag6}
                          alt="Third slide"
                        />
                      </Carousel.Item>)}
                  
                  {data.imag7 != "" && (
                    <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src= {data.imag7}
                          alt="Third slide"
                        />
                      </Carousel.Item>)}

                  {data.imag8 != "" && (
                    <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src= {data.imag8}
                          alt="Third slide"
                        />
                      </Carousel.Item>)}

                  {data.imag9 != "" && (
                    <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src= {data.imag9}
                          alt="Third slide"
                        />
                      </Carousel.Item>)}

                  {data.imag10 != "" && (
                    <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src= {data.imag10}
                          alt="Third slide"
                        />
                      </Carousel.Item>)}

                </Carousel>
              </div>

              <div className="col-lg-4">
                    <h3 className = "card-title mt-3">Datos de la Propiedad</h3>
                    <hr></hr>
                    <h4 class="card-title mb-2"> Codigo: {data.CodigoPropiedad}</h4>
                    <h3 class="card-titulo mb-2">{data.Titulo}</h3>
                    <h4 class="card-precio mb-2"> Valor: {data.Valor}</h4>
                    <h4 class="card-title mb-2 mt-3"> Estado: {data.EstadoPropiedad}</h4>
                    <h4 class="card-title mb-2"> Tipo: {data.TipoPropiedad}</h4>
                    <h4 class="card-title mb-2"> Dirección: {data.DireccionFisica}</h4>
                    <h4 class="card-title mb-2"> Barrio: {data.Barrio}</h4>
                    <h4 class="card-title mb-2"> Lugar: {data.Lugar}</h4>
                    <h5 class="card-title mb-2 mt-3"> Sup. Total: {data.SuperficieTotal}</h5>
                    <h5 class="card-title mb-2"> Sup. Propia: {data.SuperficiePropia}</h5>
                    <h5 class="card-title mb-2"> Sup. Comun: {data.SuperficieComun}</h5>
                    <h5 class="card-title mb-2"> Sup. Cubierta: {data.SuperficieCubierta}</h5>
                    <h5 class="card-title mb-2"> Sup. SemiCubierta: {data.SuperficieSemiCubierta}</h5>

             </div>
          </div>
          <div className="row">
            <div className="col-8">
              <h3 className = "card-title mt-3">Descripción de la Propiedad</h3>
              <hr></hr>
              <h5>{data.Descripcion}</h5>
              <h5>{data.InformacionAdicional}</h5>
              
            </div>

          </div>
         
          <div className="row">
            <div className="col-8">
              <h3 className = "card-title mt-5">Adicionales y Servicios</h3>
              <hr></hr>
              
              <div className="col">
           
                 <div className="row">
                    <ul className="fa-ul">
                      <li><i id="check1" className="fa fa-check-circle mr-2"></i>Ambientes: {data.Ambientes}</li>
                    </ul>  
                    <ul className="fa-ul">
                      <li><i id="check1" className="fa fa-check-circle mr-2"></i>Dormitorios: {data.Dormitorio}</li>
                    </ul> 
                    <ul className="fa-ul">
                      <li><i id="check1" className="fa fa-check-circle mr-2"></i>Baños: {data.Baño}</li>
                    </ul>  
                  </div>



                  <div className="row mt-5">

                    { data.Cocina ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>Cocina</li>
                      </ul>
                    ) : '' } 
                
                    { data.Comedor ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>Comedor</li>
                      </ul>
                    ) : '' } 
            
                    { data.CocinaComedor ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>Cocina Comedor</li>
                      </ul>
                    ) : '' } 
                
                    { data.Placard ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>Placard</li>
                      </ul>
                    ) : '' } 
         
                    { data.ComedorDiario ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>Comedor Diario</li>
                      </ul>
                    ) : '' } 

                    { data.Dependencia ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>Dependencia</li>
                      </ul>
                    ) : '' } 

                    { data.BañoServicio ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>Baño Servicio</li>
                      </ul>
                    ) : '' } 

                    { data.Lavadero ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>Lavadero</li>
                      </ul>
                    ) : '' }

                    { data.Living ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>Living</li>
                      </ul>
                    ) : '' }
                    { data.LivingComedor ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>Living Comedor</li>
                      </ul>
                    ) : '' }      

                    { data.Escritorio ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>Escritorio</li>
                      </ul>
                    ) : '' }

                    { data.Toillette ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>Toillette</li>
                      </ul>
                    ) : '' }

                    { data.Balcon ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>Balcon</li>
                      </ul>
                    ) : '' }

                    { data.Baulera ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>Baulera</li>
                      </ul>
                    ) : '' }
                 
                    { data.Jardin ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>Jardin</li>
                      </ul>
                    ) : '' }

                   { data.SUM ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>SUM</li>
                      </ul>
                    ) : '' }

                    { data.Solarium ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>Solarium</li>
                      </ul>
                    ) : '' }

                    { data.Patio ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>Patio</li>
                      </ul>
                    ) : '' }

                    { data.Quincho ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>Quincho</li>
                      </ul>
                    ) : '' }

                    { data.Pileta ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>Pileta</li>
                      </ul>
                    ) : '' }

                    { data.Galeria ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>Galeria</li>
                      </ul>
                    ) : '' }

                    { data.Asador ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>Asador</li>
                      </ul>
                    ) : '' }

                    { data.Cochera ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>Cochera</li>
                      </ul>
                    ) : '' }
  
                    { data.CocheraCubierta ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>Cochera Cubierta</li>
                      </ul>
                    ) : '' }

                    { data.Suite ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>Suite</li>
                      </ul>
                    ) : '' }

                    { data.SalaEstarPlayroom ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>Sala Estar Playroom</li>
                      </ul>
                    ) : '' }
    
                    { data.Internet ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>Internet</li>
                      </ul>
                    ) : '' }
          
                    { data.Electricidad ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>Electricidad</li>
                      </ul>
                    ) : '' }
   
                    { data.Gas ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>Gas</li>
                      </ul>
                    ) : '' }
   
                    { data.Agua ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>Agua</li>
                      </ul>
                    ) : '' }
      
                     { data.Cloacas ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>Cloacas</li>
                      </ul>
                    ) : '' }    

                    { data.Cable ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>Cable</li>
                      </ul>
                    ) : '' }
      
                    { data.Seguridad ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>Seguridad</li>
                      </ul>
                    ) : '' }
     
                    { data.Expensas ? (
                      <ul className="fa-ul">
                      <li><i id="check" className="fa fa-check-circle mr-2"></i>Expensas</li>
                      </ul>
                    ) : '' }
 
                </div>
              </div>
            
            </div>
          
          </div>  
          <div className="row">
           <div className="col-8 mt-3">
           <SimpleMap
            data={data.latitud}
            data2={data.longitud}
            data3={data.CodigoPropiedad}
            zoom={9}
          />
            </div>
          </div>

      </div>
  
  )
}

export default PropiedadDetail

    {/* <div className="col-lg-8">
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src= {data.imag1} className="d-block w-100" alt="1"></img>
                    </div>
                    <div className="carousel-item active">
                      <img src= {data.imag2} className="d-block w-100" alt="2"></img>
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
            
            </div> */}
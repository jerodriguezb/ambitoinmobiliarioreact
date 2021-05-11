import React, { useEffect, useState } from "react";
import { getCarousel } from "./helpers/rutaCarousel";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const Carousel = () => {
  const [carousel, setCarousel] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getCarousel().then((carousel) => {
      setCarousel({
        data: carousel,
        loading: false,
      });
    });
  }, []);



  return (
    
    <div className="container">
   
      <div
        id="carousel"
        className="carousel slide carousel-fade"
        data-ride="carousel"
        data-pause="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://staticbp.com/img/prop_new_b/497/00497674-01.jpg"
              className="d-block w-100"
              alt="site 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.portaldearquitectos.com/uploads/prop_properties/estudio_claria_arquitectura_C0057_2_2_001_03.jpg"
              className="d-block w-100"
              alt="site 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.decoracionia.net/imagenes/2016/10/casas-minimalistas-2.jpg"
              className="d-block w-100"
              alt="site 3"
            />
          </div>
          <div className="overlay">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 offset-md-6 text-center text-md-right">
                  <h1 className="mb-2">Ambito Inmobiliaria</h1>
                  <p className="d-none d-md-block">
                    Ambito Inmobiliaria  es un equipo de profesionales con vasta experiencia
                    en desarrollos de proyectos de inversión, convertido en un equipo
                    multidisciplinario.
                    También te ofrecemos la posibilidad de alquilar. Desde hace años estamos
                    abocados a la administración y alquiler de propiedades brindando a 
                    nuestros clientes asesoramiento administrativo y legal. 
                    Tenemos a disposición departamentos, casas, oficinas, cocheras, terrenos
                    y locales comerciales.
                  </p>
                
                  <button type="button" className="btn btn-info">
                    Contactanos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
  
    </div>


  )
}

export default Carousel;


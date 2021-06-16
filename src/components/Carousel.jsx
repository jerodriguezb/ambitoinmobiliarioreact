import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCarousel } from "../helpers/rutaPropiedades";
import "../css/carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Carousel from 'react-bootstrap/Carousel'

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
    <div>
      <div
        id="carousel"
        clad
        className="carousel slide carousel-fade"
        data-ride="carousel"
        data-pause="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://fachadascasas.com/wp-content/uploads/2020/10/Casa-minimalista-blogc-2-1-edited.jpg"
              className="d-block w-100"
              alt="site 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="http://www.jarquitectos.com/wp-content/uploads/2018/11/Atrium_House_01.jpg"
              className="d-block w-100"
              alt="site 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://fachadascasas.com/wp-content/uploads/2020/10/Casa-minimalista-blogc-9-1-edited.jpg"
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
                    Ambito Inmobiliaria es un equipo de profesionales con vasta
                    experiencia en desarrollos de proyectos de inversión,
                    convertido en un equipo multidisciplinario. También te
                    ofrecemos la posibilidad de alquilar. Desde hace años
                    estamos abocados a la administración y alquiler de
                    propiedades brindando a nuestros clientes asesoramiento
                    administrativo y legal. Tenemos a disposición departamentos,
                    casas, oficinas, cocheras, terrenos y locales comerciales.
                  </p>
                  <Link to="/propiedades">
                    <button type="button" className="btn btn-info">
                      Encontra tu Propiedad
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

// <div className="container">

// <div
//   id="carousel" clad
//   className="carousel slide carousel-fade"
//   data-ride="carousel"
//   data-pause="false"
// >
//   <div className="carousel-inner">
//     <div className="carousel-item active">
//       <img
//         src="https://fachadascasas.com/wp-content/uploads/2020/10/Casa-minimalista-blogc-2-1-edited.jpg"
//         className="d-block w-100"
//         alt="site 1"
//       />
//     </div>
//     <div className="carousel-item">
//       <img
//         src="http://www.jarquitectos.com/wp-content/uploads/2018/11/Atrium_House_01.jpg"
//         className="d-block w-100"
//         alt="site 2"
//       />
//     </div>
//     <div className="carousel-item">
//       <img
//         src="https://fachadascasas.com/wp-content/uploads/2020/10/Casa-minimalista-blogc-9-1-edited.jpg"
//         className="d-block w-100"
//         alt="site 3"
//       />
//     </div>
//     <div className="overlay">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-md-6 offset-md-6 text-center text-md-right">
//             <h1 className="mb-2">Ambito Inmobiliaria</h1>
//             <p className="d-none d-md-block">
//               Ambito Inmobiliaria  es un equipo de profesionales con vasta experiencia
//               en desarrollos de proyectos de inversión, convertido en un equipo
//               multidisciplinario.
//               También te ofrecemos la posibilidad de alquilar. Desde hace años estamos
//               abocados a la administración y alquiler de propiedades brindando a
//               nuestros clientes asesoramiento administrativo y legal.
//               Tenemos a disposición departamentos, casas, oficinas, cocheras, terrenos
//               y locales comerciales.
//             </p>

//             <button type="button" className="btn btn-info">
//               Contactanos
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>

// </div>

// </div>

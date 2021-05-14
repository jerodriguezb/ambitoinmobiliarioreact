import React from "react";
//import { getPropiedades } from "./helpers/rutaPropiedades";
import ReactDOM from "react-dom";
//import './index.css';
import App from "./App";
import {Header} from"./Header";
import {Footer} from"./Footer";
import {Redes} from"./Redes";
import Busqueda from "./Busqueda";
import Carousel from "./Carousel";
import Marquesina from "./Marquesina";

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
     <Header />
     <Redes />
     <Busqueda />
    <Carousel />
    <App />
    <Marquesina />
    <Footer />
    
  </React.StrictMode>,
  document.getElementById("root")
);


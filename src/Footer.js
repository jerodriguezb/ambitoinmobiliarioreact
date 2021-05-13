import React from "react";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

export const Footer = () => {
 
    return (
   
    <footer id="footer">
         <div className="container">
            <div className="row"> 
                <div className="col-lg-8 col-xs-12 col-md-8">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 visible-md visible-lg copyright">
                        <img src="https://logos-marcas.com/wp-content/uploads/2020/04/Huawei-Logo.png"  
                             alt="logo" /> 
                                <p>© Copyright 2021 - <strong> Ambito Inmobiliaria </strong>-</p>
                        </div>			
                        <div className="col-lg-12 col-md-12 visible-md visible-lg copyright">
                            <p><strong> by Abeto Tech - División Web </strong>-</p>
                        </div>			
                   
                    </div>
                </div>
                <div id="contacto" className="col-lg-4 col-xs-12 col-md-4">
                    <div className="row">
                        <div id="piecontacto">
                        <div className="col-md-12 hidden-xs hidden-sm ">
                            <p className="contact text-right"><strong>CONTACTO</strong></p>
                            <p className="description-contact text-right">Por consultas comuníquese con nosotros:</p>
                            <p className="description-contact text-right">Lun a Sab de 9 a 18 Hs - Tel +3814253622</p>
                            <p className="description-contact text-right ">Cel +5493816900030 +5493814909195</p>
                            <p className="description-contact text-right ">Email: inmobiliaria.ambito@gmail.com</p>
                        </div>
                    </div>	   		  
                    </div>
                </div>
            </div>
        </div>
    </footer>

  )
}






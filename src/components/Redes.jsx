import React from "react";
import '../css/redes.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const Redes = () => {
 
    return (
        <body>
        <div className="sticky-container">
            <ul className="sticky">
                <li>
                    <img src="https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN" 
                        width="32" height="32"></img>
                    <p><a href="https://wa.link/y02hph" target="_blank">Whatsapp</a></p>
                </li>
                <li>
                    <img src="https://www.facebook.com/images/fb_icon_325x325.png" 
                        width="32" height="32"></img>
                    <p><a href="https://www.facebook.com/AmbitoInmobiliariaTuc" target="_blank">Facebook</a></p>
                </li>
                <li>
                    <img src="https://d500.epimg.net/cincodias/imagenes/2014/06/16/lifestyle/1402934921_368386_1402935313_noticia_normal.jpg" 
                        width="32" height="32"></img>
                    <p><a href="https://twitter.com/?lang=es" target="_blank">Twitter</a></p>
                </li>
            </ul>
            
        </div>
        </body>
  )
}

export default Redes;
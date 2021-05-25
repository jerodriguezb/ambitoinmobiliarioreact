import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { getMarquesina } from "../helpers/rutaPropiedades";
import '../css/marquesina.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// import MyComponent from "../components/MyComponent";
import Marquee from "react-fast-marquee";

// const Anchor = (props) => {
//     return props.href ?
//       <a {...props}/>
//       :
//       <Link {...props}/>
//   };
  
//   export default Anchor



const Marquesina = () => (
  <Marquee scrollamount="300" scrolldelay="200" truespeed="truespeed">
    <div id="marquee" className="col-lg12">
        <Link to={{ pathname: "https://www.google.com" }} target="_blank" >
            <img src="data:image/jpeg;base64,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"
                className="card-img-top" 
                alt="CocaCola"/>
        </Link>  

    </div>

    <div id="marquee" className="col-lg12">
            <img src="data:image/jpeg;base64,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"  
                
                className="card-img-top" 
                alt="CocaCola"/>

    </div>

    <div id="marquee" className="col-lg12">
        <img src="https://pbs.twimg.com/profile_images/1047145089380823040/2QvHu4fp.jpg" 
             className="card-img-top" 
             alt="CocaCola"/>
        
    </div>
    <div id="marquee" className="col-lg12">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAVFK44V7-1w0wiIZF4IrGLMtyc2UbAsS1Ug&usqp=CAU"
            className="card-img-top" 
            alt="CocaCola"/>
        
    </div>
    <div id="marquee" className="col-lg12">
        <img src="https://image.isu.pub/181213214957-7f6be33403c24cc123eedc318a166bce/jpg/page_1.jpg"
            className="card-img-top" 
            alt="CocaCola"/>
      
    </div>
  </Marquee>
);

export default Marquesina;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMarquesina } from "../helpers/rutaPropiedades";
import "../css/marquesina.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
  <Marquee scrollamount="300" scrolldelay="500" truespeed="truespeed">
    <div id="marquee" className="col-lg12">
      <img
        src="data:image/jpeg;base64,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"
        className="card-img-top"
        alt="CocaCola"
      />
    </div>

    <div id="marquee" className="col-lg12">
      <img
        src="https://pbs.twimg.com/profile_images/1047145089380823040/2QvHu4fp.jpg"
        className="card-img-top"
        alt="CocaCola"
      />
    </div>
    <div id="marquee" className="col-lg12">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAVFK44V7-1w0wiIZF4IrGLMtyc2UbAsS1Ug&usqp=CAU"
        className="card-img-top"
        alt="CocaCola"
      />
    </div>
    <div id="marquee" className="col-lg12">
      <img
        src="https://image.isu.pub/181213214957-7f6be33403c24cc123eedc318a166bce/jpg/page_1.jpg"
        className="card-img-top"
        alt="CocaCola"
      />
    </div>
  </Marquee>
);

export default Marquesina;

import React, { useEffect, useState } from "react";
import { getMarquesina } from "./helpers/rutaMarquesina";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const Marquesina = () => {
  const [marquesina, setMarquesina] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getMarquesina().then((marquesina) => {
      setMarquesina({
        data: marquesina,
        loading: false,
      });
    });
  }, []);



  return (
    <main>



    
      
      
    </main> 
  )
}

export default Marquesina;


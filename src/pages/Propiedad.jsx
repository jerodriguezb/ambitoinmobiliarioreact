import React, { useEffect, useState } from "react";
import { getPropiedadId } from "../helpers/rutaPropiedades";
import PropiedadDetail from "../components/PropiedadDetail";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "../components/Footer"

import "../css/propiedad.css";

const Propiedad = () => {
  const [data, setData] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    getPropiedadId(id).then((datos) => {
      console.log(datos);
      setData(datos);
    });
  }, [id]);

  return (
    <>
    <div className="container mt-5">
        <PropiedadDetail data={data} />;

    </div>
    <Footer />
    </>
  );
};
export default Propiedad;

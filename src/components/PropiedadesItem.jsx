import React from "react";
import { Link } from "react-router-dom";

import "../css/propiedades.css";

const PropiedadesItem = ({ propiedad }) => {
  return (
    <Link to={`/propiedad/${propiedad._id}`} className="text-decoration-none">
      <div className="card" className="col-3 mb-4">
        {propiedad.mostrar_portada ? (
          <div className="card mb-4">
            <img
              src={propiedad.imag1}
              className="card-img-top"
              alt={propiedad.Titulo}
            />
            <img />
            <div className="card-body">
              <h3 className="card-title">{propiedad.Titulo}</h3>

              {propiedad.EstadoPropiedad === "Venta" && (
                <span
                  id="pildora"
                  className="badge badge-pill badge-danger mb-2"
                >
                  {propiedad.EstadoPropiedad}
                </span>
              )}

              {propiedad.EstadoPropiedad === "Alquiler" && (
                <span
                  id="pildora"
                  className="badge badge-pill badge-primary mb-2"
                >
                  {propiedad.EstadoPropiedad}
                </span>
              )}
              {propiedad.EstadoPropiedad === "Venta-Alquiler" && (
                <span
                  id="pildora"
                  className="badge badge-pill badge-warning mb-2"
                >
                  {propiedad.EstadoPropiedad}
                </span>
              )}

              <h4>{propiedad.DireccionFisica}</h4>
              <h3>{propiedad.Valor}</h3>
              <i className="fa fa-home" aria-hidden="true">
                {" "}
                {propiedad.SuperficieTotal}{" "}
              </i>
              <i className="fa fa-bed ml-5" aria-hidden="true">
                {" "}
                {propiedad.Dormitorio}{" "}
              </i>
              <i className="fa fa-bath ml-5" aria-hidden="true">
                {" "}
                {propiedad.Baño}{" "}
              </i>
              <h3 className="mt-5">
                {propiedad.CodigoPropiedad} - Cod. Int. {propiedad.id}
              </h3>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </Link>
  );
};

export default PropiedadesItem;

import React from "react";
import {Link} from "react-router-dom";

const PropiedadDetail = ({data}) => {
  
  return (
   
  <div>

    <div className="row">
            <div className="col">
              <h3>{data.title}</h3>
              <div className="mb-2">
                <img className="avatar" src={data.img_mentor} alt={data.mentor} />
                <span className="ml-2">{data.mentor}</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <iframe
                width="560"
                height="315"
                src={data.video}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
              <p>{data.detalle}</p>
            </div>
            <div className="col-6">
              <div className="card ml-3 w-100">
                <div className="card-header">
                  <h3>
                    $885 <span>Arg/mes</span>{" "}
                  </h3>
                </div>
                <div className="card-body">
                  <h4 className="card-title">Membresía Premium</h4>
                  <hr />
                  <ul>
                    <li>Acceso a +150 cursos</li>
                    <li>Cancela en cualquier momento</li>

                    <li>Clases en vivo semanales</li>
                  </ul>

                  <Link to="/comprar" className="btn btn-info btn-block">
                    Comprar Membresía
                  </Link>
                </div>
              </div>
            </div>
          </div>

  </div>
  )
};

export default PropiedadDetail;

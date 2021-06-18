import React, { useState } from "react";
import {addPropiedad} from "../helpers/rutaPropiedades";

const AddPropiedadForm = ({ setShow }) => {
  const id = JSON.parse(localStorage.getItem("id"));
  const [formValues, setFormValues] = useState({
    CodigoPropiedad: "",
    Titulo: "",   
    EstadoPropiedad: "",
    usuario: id,
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPropiedad(formValues).then((resp) => {
      console.log(resp);

      setFormValues({
        CodigoPropiedad: "",

        Titulo: "",

        EstadoPropiedad: "",
      });

      setShow(false);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Título</label>
        <input
          type="text"
          className="form-control"
          name="Titulo"
          required
          value={formValues.Titulo}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>CodigoPropiedad</label>
        <input
          type="text"
          className="form-control"
          name="CodigoPropiedad"
          value={formValues.CodigoPropiedad}
          onChange={handleChange}
        />
        {/* <small>Url de imagen</small> */}
      </div>
      <div className="form-group">
        <label>EstadoPropiedad</label>
        <textarea
          className="form-control"
          rows="3"
          required
          name="EstadoPropiedad"
          value={formValues.EstadoPropiedad}
          onChange={handleChange}
        ></textarea>
      </div>
      {/* <div className="form-group">
        <label>Video</label>
        <input
          type="text"
          className="form-control"
          name="video"
          value={formValues.video}
          onChange={handleChange}
        />
        <small>Url del video de youtube</small>
      </div>
      <div className="form-group">
        <label>Mentor</label>
        <input
          type="text"
          className="form-control"
          placeholder="Nombre del mentor"
          name="mentor"
          required
          value={formValues.mentor}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Avatar Mentor</label>
        <input
          type="text"
          className="form-control"
          name="img_mentor"
          value={formValues.img_mentor}
          onChange={handleChange}
        />
        <small>Url de imagen</small>
      </div> */}
      <div>
        <button type="submit" className="btn btn-outline-info">
          Guardar
        </button>
      </div>
    </form>
  );
};

export default AddPropiedadForm;

import React, { useState } from "react";
import { modifPropiedad } from "../helpers/rutaPropiedades";
import { Modal, Button } from "react-bootstrap";

const ModalFormPropiedad = ({ propiedad, handleClose }) => {
  const id = JSON.parse(localStorage.getItem("id"));
  const [formValues, setFormValues] = useState({
    CodigoPropiedad: propiedad.CodigoPropiedad,
    Titulo: propiedad.titulo,
    EstadoPropiedad: propiedad.EstadoPropiedad, 
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

    modifPropiedad(formValues, propiedad._id).then((respuesta) => {
      console.log(respuesta);

      handleClose();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Modal.Body>
        <div className="form-group">
          <label>CodigoPropiedad</label>
          <input
            type="text"
            className="form-control"
            name="CodigoPropiedad"
            required
            value={formValues.CodigoPropiedad}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Titulo</label>
          <input
            type="text"
            className="form-control"
            name="Titulo"
            value={formValues.Titulo}
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
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" variant="outline-info">
          Guardar
        </Button>
      </Modal.Footer>
    </form>
  );
};

export default ModalFormPropiedad;

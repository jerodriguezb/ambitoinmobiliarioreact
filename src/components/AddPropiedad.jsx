import React from "react";
import AddPropiedadForm from "./AddPropiedadForm";

const AddPropiedad = ({ show, setShow }) => {
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="col-12">
        <button className="btn btn-outline-info" onClick={handleShow}>
          {show ? "Ocultar Form" : "Agregar Propiedad"}
        </button>
      </div>
      {show && (
        <div className="col-md-8 offset-md-2 mb-3">
          <AddPropiedadForm setShow={setShow} />
        </div>
      )}
    </>
  );
};

export default AddPropiedad;

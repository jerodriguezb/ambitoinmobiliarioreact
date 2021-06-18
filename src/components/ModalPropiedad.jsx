import React from "react";

import { Modal } from "react-bootstrap";
import ModalFormPropiedad from "./ModalFormPropiedad";

const ModalPropiedad = ({ show, handleClose, propiedad }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modificar propiedad</Modal.Title>
      </Modal.Header>
      <ModalFormPropiedad propiedad={propiedad} handleClose={handleClose} />
    </Modal>
  );
};

export default ModalPropiedad;

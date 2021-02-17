import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";

const ModalTemplate = (props) => {

  const {closeModalFunc, closeModalText, show, onSubmit, showBtn, title} = props;

  return (
    <Modal show={show} onHide={closeModalFunc}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      {showBtn && <Modal.Footer>
        <Button variant="secondary" onClick={onSubmit}>
          {closeModalText}
        </Button>
      </Modal.Footer>}
    </Modal>
  );
};

export default ModalTemplate;

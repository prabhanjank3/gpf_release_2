import React from "react";
import { Modal, Button } from "react-bootstrap";

export default props => {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{props.body}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
};

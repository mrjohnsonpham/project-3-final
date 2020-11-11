import React from 'react';  // { Fragment } 
import "./style.css";
import { Button, Modal } from 'react-bootstrap';

function CheckoutModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Checkout
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>{props.modalBody}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}
export default CheckoutModal

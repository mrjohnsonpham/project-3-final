import React, { Fragment } from 'react';
import "./style.css";
// import Button from '@bit/react-bootstrap.react-bootstrap.button'
// import Modal from '@bit/react-bootstrap.react-bootstrap.modal'
// import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';
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
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
export default CheckoutModal

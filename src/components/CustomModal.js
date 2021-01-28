import React from 'react'
import {Modal,Button} from 'react-bootstrap'

export default function CustomModal({responseHeading,responseMsg,handleClose,responseButton,show}) {
    return (
        <div>
            

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{responseHeading}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{textTransform : 'capitalize'}}>{responseMsg}</Modal.Body>
        <Modal.Footer>
          <Button style={{backgroundColor : 'transparent' , color : 'gray'}} onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
         {responseButton}
          </Button>
        </Modal.Footer>
      </Modal>

        </div>
    )
}

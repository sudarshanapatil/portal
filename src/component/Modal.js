import React from 'react'
import "../index.css"
import { Panel,Modal } from 'react-bootstrap'

const ModalComp = () => {
    return (
        <div className="static-modal">
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Loading data</Modal.Title>
                </Modal.Header>
                <Modal.Body>Please wait for a second..</Modal.Body>
            </Modal.Dialog>
        </div>
    )
}

export default ModalComp;
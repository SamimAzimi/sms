import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import AppsEntry from './EntrySection/AppsEntry'
import HardwareEntry from './EntrySection/HardwareEntry'
import DatabaseEntry from './EntrySection/DatabaseEntry'
function ModalDataEntery({ setShow, show, recordInfo }) {


    const handleClose = () => setShow(false);

    return (
        <>
            <Modal fullscreen={true} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{recordInfo.sectionName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {recordInfo.sectionName === "App" && <AppsEntry id={recordInfo.id} />}
                    {recordInfo.sectionName === "Hardware" && <HardwareEntry id={recordInfo.id} />}
                    {recordInfo.sectionName === "Database" && <DatabaseEntry id={recordInfo.id} />}
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary">ADD {recordInfo.sectionName}</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalDataEntery
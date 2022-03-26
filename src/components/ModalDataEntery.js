import React from 'react'
import Modal from 'react-bootstrap/Modal'
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

                {recordInfo.sectionName === "App" && <AppsEntry id={recordInfo.id} setShow={setShow} />}
                {recordInfo.sectionName === "Hardware" && <HardwareEntry id={recordInfo.id} setShow={setShow} />}
                {recordInfo.sectionName === "Database" && <DatabaseEntry id={recordInfo.id} setShow={setShow} />}
            </Modal>
        </>
    )
}

export default ModalDataEntery
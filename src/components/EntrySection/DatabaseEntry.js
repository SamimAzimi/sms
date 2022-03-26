import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCodeBranch, faDatabase,
    faKey, faCheckCircle, faMinusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify'
import Modal from 'react-bootstrap/Modal'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

function DatabaseEntry({ id, setShow }) {
    const [dbData, setDBdata] = useState({
        DBinstalled: Boolean,
        DBname: '',
        DBVersion: '',
        DBsaPassword: ''
    })
    const save = () => {
        const { DBinstalled,
            DBname,
            DBVersion,
            DBsaPassword } = dbData
        if (DBinstalled !== "" &&
            DBname !== "" &&
            DBVersion !== "" &&
            DBsaPassword) {
            axios.post('https://servicemanagementsystem.herokuapp.com/api/addToSite', {
                subDocument: "Database",
                recordID: id,
                newSub: dbData
            }).then(res => {
                toast.info(res.data)
            }).catch(err => {
                console.log(err)
            })
            setTimeout(() => {

                setShow(false)
            }, 1500);
        } else {
            toast.info("Please Fill The Form")
        }

    }
    const handleClose = () => {
        setShow(false)
    }
    return (
        <>
            <Modal.Body>
                <h1>Database Section</h1>
                <div className="d-flex flex-column w-100" >
                    <div class="input-group w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faDatabase} /></span>
                        <input type="text"
                            class="form-control"
                            placeholder="DB Name"
                            aria-label="Database"
                            value={dbData.DBname}
                            onChange={e => setDBdata({ ...dbData, DBname: e.target.value })}
                            aria-describedby="addon-wrapping" />
                    </div>
                    <div class="input-group w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faCodeBranch} /></span>
                        <input type="text"
                            class="form-control "
                            placeholder="DB Version"
                            aria-label="Database Version"
                            value={dbData.DBVersion}
                            onChange={e => setDBdata({ ...dbData, DBVersion: e.target.value })}
                            aria-describedby="addon-wrapping" />
                    </div>
                    <div class="input-group flex-nowrap w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faKey} /></span>
                        <input type="text"
                            class="form-control"
                            placeholder="DB SA Password"
                            aria-label="DB SA Password"
                            value={dbData.DBsaPassword}
                            onChange={e => setDBdata({ ...dbData, DBsaPassword: e.target.value })}
                            aria-describedby="addon-wrapping" />
                    </div>
                    <div class="input-group flex-nowrap w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={dbData.DBinstalled === true ? faCheckCircle : faMinusCircle} />
                            <label class="form-check-label" for="flexCheckChecked">
                                Update Turn {dbData.DBinstalled === true ? "ON" : "OFF"}
                            </label>
                        </span>
                        <span class="input-group-text" id="addon-wrapping">

                            <div class="form-check form-switch">
                                <input class="form-check-input"
                                    value={dbData.DBinstalled}
                                    onChange={e => (setDBdata({ ...dbData, DBinstalled: e.target.checked }))}

                                    type="checkbox" role="switch" id="flexSwitchCheckDefault" />

                            </div>
                        </span>

                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>

                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={save}>ADD </Button>
            </Modal.Footer>

            <ToastContainer />
        </>
    )
}

export default DatabaseEntry
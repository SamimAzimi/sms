import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify'
import Modal from 'react-bootstrap/Modal'
import 'react-toastify/dist/ReactToastify.css';


import {
    faCodeBranch, faKey, faLaptopCode,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
function AppsEntry({ id, setShow }) {

    const [appData, setAppData] = useState({

        appsName: '',
        appsVersion: '',
        appsUserName: '',
        appsPassword: '',
    }
    )
    const save = () => {
        const { appsName, appsVersion, appsUserName, appsPassword } = appData

        if (appsName !== "" && appsVersion !== "" && appsUserName !== "" && appsPassword) {
            axios.post('https://servicemanagementsystem.herokuapp.com/api/addToSite', {
                subDocument: "App",
                recordID: id,
                newSub: appData
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
                <h1>App Section</h1>
                <div class="d-flex flex-column ">
                    <div class="input-group w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faLaptopCode} /></span>
                        <input type="text" class="form-control"
                            placeholder="Apps Name"
                            aria-label="appsName"
                            value={appData.appsName}
                            onChange={e => setAppData({ ...appData, appsName: e.target.value })}
                            aria-describedby="addon-wrapping" required />
                    </div>
                    <div class="input-group flex-nowrap w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faCodeBranch} /></span>
                        <input type="text" class="form-control"
                            placeholder="Apps Version"
                            value={appData.appsVersion}
                            onChange={e => setAppData({ ...appData, appsVersion: e.target.value })}
                            aria-label="version"
                            aria-describedby="addon-wrapping" required />
                    </div>
                    <div class="input-group flex-nowrap w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faUser} /></span>
                        <input type="text" class="form-control"
                            placeholder="User Name"
                            value={appData.appsUserName}
                            onChange={e => setAppData({ ...appData, appsUserName: e.target.value })}
                            aria-label="Username"
                            aria-describedby="addon-wrapping" required />
                    </div>
                    <div class="input-group flex-nowrap w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faKey} /></span>
                        <input type="text" class="form-control"
                            placeholder="Password" aria-label="Password"
                            value={appData.appsPassword}
                            onChange={e => setAppData({ ...appData, appsPassword: e.target.value })}
                            aria-describedby="addon-wrapping" required />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>

                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={save} >ADD </Button>
            </Modal.Footer>

            <ToastContainer />
        </>
    )
}

export default AppsEntry
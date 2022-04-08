import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ToastContainer } from 'react-toastify'
import Modal from 'react-bootstrap/Modal'
import 'react-toastify/dist/ReactToastify.css';
import { DataContext } from '../Context';
import {
    faCodeBranch, faKey, faLaptopCode,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import AppsImage from '../../assets/file.png'
function AppsEntry() {

    const val = useContext(DataContext)
    const { dataEntry, setDataEntry } = val
    const { apps } = dataEntry
    return (
        <>
            <Modal.Body style={{
                backgroundImage: `url(${AppsImage})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right"
            }}>
                <h1>App Section</h1>
                <div class="d-flex flex-column " >
                    <div class="input-group w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faLaptopCode} /></span>
                        <input type="text" class="form-control"
                            placeholder="Apps Name"
                            value={dataEntry.apps.appsName}
                            onChange={e => setDataEntry({ ...dataEntry, apps: { ...apps, appsName: e.target.value } })}
                            required />
                    </div>
                    <div class="input-group flex-nowrap w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faCodeBranch} /></span>
                        <input type="text" class="form-control"
                            placeholder="Apps Version"
                            value={dataEntry.apps.appsVersion}
                            onChange={e => setDataEntry({ ...dataEntry, apps: { ...apps, appsVersion: e.target.value } })}
                            required />
                    </div>
                    <div class="input-group flex-nowrap w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faUser} /></span>
                        <input type="text" class="form-control"
                            placeholder="User Name"
                            value={dataEntry.apps.appsUserName}
                            onChange={e => setDataEntry({ ...dataEntry, apps: { ...apps, appsUserName: e.target.value } })}
                            required />
                    </div>
                    <div class="input-group flex-nowrap w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faKey} /></span>
                        <input type="text" class="form-control"
                            placeholder="Password"
                            value={dataEntry.apps.appsPassword}
                            onChange={e => setDataEntry({ ...dataEntry, apps: { ...apps, appsPassword: e.target.value } })}
                            required />
                    </div>
                </div>
            </Modal.Body>

            <ToastContainer />
        </>
    )
}

export default AppsEntry
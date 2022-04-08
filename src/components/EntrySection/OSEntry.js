import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import OsImage from '../../assets/osImage.png'
import {
    faCodeBranch,
    faKey, faCheckCircle, faMinusCircle, faLaptopCode, faUser,
} from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal'
import { DataContext } from '../Context'
function OSEntry() {
    const val = useContext(DataContext)
    const { dataEntry, setDataEntry } = val
    const { OS } = dataEntry
    return (
        <Modal.Body style={{
            backgroundImage: `url(${OsImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right"
        }}>
            <h1>Operating System Section</h1>
            <div className="d-flex flex-column w-100" >
                <div class="input-group w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faLaptopCode} /></span>
                    <input type="text"
                        class="form-control"
                        placeholder="OS Name"
                        value={dataEntry.OS.OSname}
                        onChange={e => setDataEntry({ ...dataEntry, OS: { ...OS, OSname: e.target.value } })}
                    />
                </div>
                <div class="input-group w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faCodeBranch} /></span>
                    <input type="text"
                        class="form-control "
                        placeholder="OS Version"
                        value={dataEntry.OS.OSVersion}
                        onChange={e => setDataEntry({ ...dataEntry, OS: { ...OS, OSVersion: e.target.value } })}
                    />
                </div>
                <div class="input-group flex-nowrap w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faUser} /></span>
                    <input type="text"
                        class="form-control"
                        placeholder="OS User Name"
                        value={dataEntry.OS.UserName}
                        onChange={e => setDataEntry({ ...dataEntry, OS: { ...OS, UserName: e.target.value } })}
                    />
                </div>
                <div class="input-group flex-nowrap w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faKey} /></span>
                    <input type="text"
                        class="form-control"
                        placeholder="Password"
                        value={dataEntry.OS.password}
                        onChange={e => setDataEntry({ ...dataEntry, OS: { ...OS, password: e.target.value } })}
                    />
                </div>
                <div class="input-group flex-nowrap w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={dataEntry.OS.UpdateTurnedOff === true ? faCheckCircle : faMinusCircle} />
                        <label class="form-check-label" for="flexCheckChecked">
                            Update Turn {dataEntry.OS.UpdateTurnedOff === true ? "ON" : "OFF"}
                        </label>
                    </span>
                    <span class="input-group-text" id="addon-wrapping">

                        <div class="form-check form-switch">
                            <input class="form-check-input"
                                value={dataEntry.OS.UpdateTurnedOff}
                                onChange={e => (setDataEntry({ ...dataEntry, OS: { ...OS, UpdateTurnedOff: e.target.checked } }))}

                                type="checkbox" role="switch" id="flexSwitchCheckDefault" />

                        </div>
                    </span>

                </div>
                <div class="input-group flex-nowrap w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={dataEntry.OS.UpdateInstalled === true ? faCheckCircle : faMinusCircle} />
                        <label class="form-check-label" for="flexCheckChecked">
                            Update Turn {dataEntry.OS.UpdateInstalled === true ? "ON" : "OFF"}
                        </label>
                    </span>
                    <span class="input-group-text" id="addon-wrapping">

                        <div class="form-check form-switch">
                            <input class="form-check-input"
                                value={dataEntry.OS.UpdateInstalled}
                                onChange={e => (setDataEntry({ ...dataEntry, OS: { ...OS, UpdateInstalled: e.target.checked } }))}

                                type="checkbox" role="switch" id="flexSwitchCheckDefault" />

                        </div>
                    </span>

                </div>
            </div>
        </Modal.Body>
    )
}

export default OSEntry
import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCodeBranch, faDatabase,
    faKey, faCheckCircle, faMinusCircle,
} from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal'
import { DataContext } from '../Context'

function DatabaseEntry() {
    const val = useContext(DataContext)
    const { dataEntry, setDataEntry } = val
    const { DB } = dataEntry
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
                            value={dataEntry.DB.DBname}
                            onChange={e => setDataEntry({ ...dataEntry, DB: { ...DB, DBname: e.target.value } })}
                            aria-describedby="addon-wrapping" />
                    </div>
                    <div class="input-group w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faCodeBranch} /></span>
                        <input type="text"
                            class="form-control "
                            placeholder="DB Version"
                            aria-label="Database Version"
                            value={dataEntry.DB.DBVersion}
                            onChange={e => setDataEntry({ ...dataEntry, DB: { ...DB, DBVersion: e.target.value } })}
                            aria-describedby="addon-wrapping" />
                    </div>
                    <div class="input-group flex-nowrap w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faKey} /></span>
                        <input type="text"
                            class="form-control"
                            placeholder="DB SA Password"
                            aria-label="DB SA Password"
                            value={dataEntry.DB.DBsaPassword}
                            onChange={e => setDataEntry({ ...dataEntry, DB: { ...DB, DBsaPassword: e.target.value } })}
                            aria-describedby="addon-wrapping" />
                    </div>
                    <div class="input-group flex-nowrap w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={dataEntry.DB.DBinstalled === true ? faCheckCircle : faMinusCircle} />
                            <label class="form-check-label" for="flexCheckChecked">
                                Update Turn {dataEntry.DB.DBinstalled === true ? "ON" : "OFF"}
                            </label>
                        </span>
                        <span class="input-group-text" id="addon-wrapping">

                            <div class="form-check form-switch">
                                <input class="form-check-input"
                                    value={dataEntry.DB.DBinstalled}
                                    onChange={e => (setDataEntry({ ...dataEntry, DB: { ...DB, DBinstalled: e.target.checked } }))}

                                    type="checkbox" role="switch" id="flexSwitchCheckDefault" />

                            </div>
                        </span>

                    </div>
                </div>
            </Modal.Body>

        </>
    )
}

export default DatabaseEntry
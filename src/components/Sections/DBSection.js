import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCodeBranch, faDatabase,
    faKey, faCheckCircle, faMinusCircle,
} from '@fortawesome/free-solid-svg-icons';

function DBSection({ dbData, setDBdata }) {
    return (
        <>
            <h1>Database Section</h1>
            <div className="d-flex " >
                <div class="input-group flex-nowrap p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faDatabase} /></span>
                    <input type="text"
                        class="form-control"
                        placeholder="DB Name"
                        aria-label="Database"
                        value={dbData.DBname}
                        onChange={e => setDBdata({ ...dbData, DBname: e.target.value })}
                        aria-describedby="addon-wrapping" />
                </div>
                <div class="input-group flex-nowrap w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faCodeBranch} /></span>
                    <input type="text"
                        lass="form-control"
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

        </>
    )
}

export default DBSection
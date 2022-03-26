import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCodeBranch, faDesktop,
    faDownload, faMinusCircle, faCheckCircle
} from '@fortawesome/free-solid-svg-icons';

function OSsection({ osData, setOSdata }) {
    return (
        <>
            <h1>OS Section</h1>
            <div class="d-flex ">
                <div class="input-group flex-nowrap  p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faDesktop} /></span>
                    <input type="text"
                        class="form-control"
                        placeholder="OS Name"
                        value={osData.OSname}
                        onChange={e => (setOSdata({ ...osData, OSname: e.target.value }))}
                        aria-label="Username"
                        aria-describedby="addon-wrapping" />
                </div>
                <div class="input-group flex-nowrap w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faCodeBranch} /></span>
                    <input type="text"
                        class="form-control"
                        placeholder="OS Version"
                        aria-label="Username"
                        value={osData.OSVersion}
                        onChange={e => (setOSdata({ ...osData, OSVersion: e.target.value }))}
                        aria-describedby="addon-wrapping" />
                </div>
                <div class="input-group flex-nowrap w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faDownload} /></span>
                    <input type="text"
                        class="form-control"
                        placeholder="Update Installed"
                        value={osData.UpdateInstalled}
                        onChange={e => (setOSdata({ ...osData, UpdateInstalled: e.target.value }))}
                        aria-label="Username"
                        aria-describedby="addon-wrapping" />
                </div>
                <div class="input-group flex-nowrap w-50 p-3">

                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={osData.UpdateTurnedOff === true ? faCheckCircle : faMinusCircle} />
                        <label class="form-check-label" for="flexCheckChecked">
                            Update Turn {osData.UpdateTurnedOff === true ? "ON" : "OFF"}
                        </label>
                    </span>
                    <span class="input-group-text" id="addon-wrapping">

                        <div class="form-check form-switch">
                            <input class="form-check-input"
                                value={osData.UpdateTurnedOff}
                                onChange={e => (setOSdata({ ...osData, UpdateTurnedOff: e.target.checked }))}

                                type="checkbox" role="switch" id="flexSwitchCheckDefault" />

                        </div>
                    </span>

                </div>
            </div>
        </>
    )
}

export default OSsection
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCodeBranch, faKey, faLaptopCode,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

function AppSection({ appData, setAppData }) {
    return (
        <>
            <h1>App Section</h1>
            <div class="d-flex ">
                <div class="input-group flex-nowrap w-50 p-3">
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
        </>
    )
}

export default AppSection
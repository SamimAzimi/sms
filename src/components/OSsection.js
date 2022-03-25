import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCodeBranch, faDesktop,
    faDownload, faGear
} from '@fortawesome/free-solid-svg-icons';

function OSsection() {
    return (
        <>
            <h1>OS Section</h1>
            <div class="d-flex ">
                <div class="input-group flex-nowrap  p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faDesktop} /></span>
                    <input type="text" tabIndex='1' class="form-control" placeholder="OS Name" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
                <div class="input-group flex-nowrap w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faCodeBranch} /></span>
                    <input type="text" class="form-control" placeholder="OS Version" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
                <div class="input-group flex-nowrap w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faDownload} /></span>
                    <input type="text" class="form-control" placeholder="Update Installed" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
                <div class="input-group flex-nowrap w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faGear} /></span>
                    <input type="text" class="form-control" placeholder="Auto Update/Install" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
            </div>
        </>
    )
}

export default OSsection
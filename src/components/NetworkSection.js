import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, } from '@fortawesome/free-regular-svg-icons';
import {
    faCircleNodes, faGlobe, faNetworkWired,
} from '@fortawesome/free-solid-svg-icons';
function NetworkSection() {
    return (
        <>
            <h1>Network Section</h1>
            <div class="d-flex">
                <div class="input-group flex-nowrap w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faNetworkWired} /></span>
                    <input type="text" class="form-control" placeholder="IP Address" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
                <div class="input-group flex-nowrap w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faCircleNodes} /></span>
                    <input type="text" class="form-control" placeholder="Subnet Mask" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
                <div class="input-group flex-nowrap w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faGlobe} /></span>
                    <input type="text" class="form-control" placeholder="Gateway" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
                <div class="input-group flex-nowrap w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faFile} /></span>
                    <input type="text" class="form-control" placeholder="Source File" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
            </div>
        </>
    )
}

export default NetworkSection
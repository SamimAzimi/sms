import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCodeBranch, faDatabase,
    faUserSecret, faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

function DBSection() {
    return (
        <>
            <h1>Database Section</h1>
            <div class="d-flex">
                <div class="input-group flex-nowrap p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faDatabase} /></span>
                    <input type="text" tabIndex='1' class="form-control" placeholder="DB Name" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
                <div class="input-group flex-nowrap w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faCodeBranch} /></span>
                    <input type="text" class="form-control" placeholder="DB Version" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
                <div class="input-group flex-nowrap w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faUserSecret} /></span>
                    <input type="text" class="form-control" placeholder="DB SA Password" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
                <div class="input-group flex-nowrap w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faCheckCircle} /></span>
                    <input type="text" class="form-control" placeholder="DB Installed" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
            </div>

        </>
    )
}

export default DBSection
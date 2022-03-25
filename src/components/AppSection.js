import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCodeBranch, faLaptopCode,
    faUser, faUserSecret
} from '@fortawesome/free-solid-svg-icons';

function AppSection() {
    return (
        <>
            <h1>App Section</h1>
            <div class="d-flex flex-wrap">
                <div class="input-group flex-nowrap w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faLaptopCode} /></span>
                    <input type="text" tabIndex='1' class="form-control" placeholder="Apps Name" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
                <div class="input-group flex-nowrap w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faCodeBranch} /></span>
                    <input type="text" class="form-control" placeholder="Apps Version" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
                <div class="input-group flex-nowrap w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faUser} /></span>
                    <input type="text" class="form-control" placeholder="User Name" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
                <div class="input-group flex-nowrap w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faUserSecret} /></span>
                    <input type="text" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
            </div>
        </>
    )
}

export default AppSection
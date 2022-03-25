import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faStickyNote, } from '@fortawesome/free-regular-svg-icons';
import {
    faMapLocation,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';
function SiteSection() {
    return (
        <>
            <h1>Site Information </h1>
            <div class="d-flex flex-wrap">
                <div class="input-group flex-nowrap w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faBuilding} /></span>
                    <input type="text" tabIndex='1' class="form-control" placeholder="Site Name" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
                <div class="input-group flex-nowrap w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faMapLocation} /></span>
                    <input type="text" class="form-control" placeholder="Site Address" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
                <div class="input-group flex-nowrap w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faPhone} /></span>
                    <input type="text" class="form-control" placeholder="Site Contact Number" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
                <div class="input-group flex-nowrap w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faStickyNote} /></span>
                    <input type="text" class="form-control" placeholder="Site Notes" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
            </div>

        </>
    )
}

export default SiteSection
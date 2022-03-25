import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faQrcode, faBarcode, faMicrochip,
    faMemory, faHardDrive, faTachographDigital,
    faCompactDisc, faPlugCircleMinus, faPlug

} from '@fortawesome/free-solid-svg-icons';

function HardwareSection() {
    return (
        <>
            <h1>
                Hardware Section
            </h1>
            <div class="d-flex flex-wrap">
                <div class="input-group flex-nowrap w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faQrcode} /></span>
                    <input type="text" class="form-control" required placeholder="Make Model" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
                <div class="input-group flex-nowrap w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faBarcode} /></span>
                    <input type="text" class="form-control" placeholder="ServiceTagSerialNo" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
                <div class="d-flex ">
                    <div class="input-group flex-nowrap w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faMicrochip} /></span>
                        <input type="text" class="form-control" placeholder="CPU" aria-label="Username" aria-describedby="addon-wrapping" />
                        <span class="input-group-text">GB</span>
                    </div>
                    <div class="input-group flex-nowrap w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faMicrochip} /></span>
                        <input type="text" class="form-control" placeholder="CPU Quantities" aria-label="Username" aria-describedby="addon-wrapping" />

                    </div>
                    <div class="input-group flex-nowrap w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faMemory} /></span>
                        <input type="text" class="form-control" placeholder="RAM" aria-label="Username" aria-describedby="addon-wrapping" />
                        <span class="input-group-text">GB</span>
                    </div>
                    <div class="input-group flex-nowrap w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faHardDrive} /></span>
                        <input type="text" class="form-control" placeholder="HDD" aria-label="Username" aria-describedby="addon-wrapping" />
                        <span class="input-group-text">GB</span>
                    </div>
                </div>
                <div className="d-flex">
                    <div class="input-group flex-nowrap w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faTachographDigital} /></span>
                        <input type="text" class="form-control" placeholder="Graphic" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <div class="input-group flex-nowrap w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faCompactDisc} /></span>
                        <input type="text" class="form-control" placeholder="DVDDrive" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <div class="input-group flex-nowrap w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faPlug} /></span>
                        <input type="text" class="form-control" placeholder="Power Supply" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <div class="input-group flex-nowrap w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faPlugCircleMinus} /></span>
                        <input type="text" class="form-control" placeholder="Power Set to Never" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HardwareSection
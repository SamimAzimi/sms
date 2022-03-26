import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faQrcode, faBarcode, faMicrochip,
    faMemory, faHardDrive, faTachographDigital,
    faCompactDisc, faPlugCircleMinus, faPlug, faPlugCirclePlus

} from '@fortawesome/free-solid-svg-icons';

function HardwareSection({ hardwareData, setHardwareData }) {
    return (
        <>
            <h1>
                Hardware Section
            </h1>
            <div class="d-flex flex-wrap">
                <div class="input-group flex-nowrap w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faQrcode} /></span>
                    <input type="text" class="form-control"
                        placeholder="Make Model"
                        aria-label="makemodel"
                        value={hardwareData.MakeModel}
                        onChange={e => setHardwareData({ ...hardwareData, MakeModel: e.target.value })}
                        aria-describedby="addon-wrapping" required />
                </div>
                <div class="input-group flex-nowrap w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faBarcode} /></span>
                    <input type="text" class="form-control"
                        placeholder="Service Tag / SerialNo"
                        aria-label="ServiceTagSerialNo"
                        value={hardwareData.ServiceTagSerialNo}
                        onChange={e => setHardwareData({ ...hardwareData, ServiceTagSerialNo: e.target.value })}
                        aria-describedby="addon-wrapping" required />
                </div>
                <div class="d-flex ">
                    <div class="input-group flex-nowrap w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faMicrochip} /></span>
                        <input type="text" class="form-control"
                            placeholder="CPU" aria-label="CPU"
                            value={hardwareData.CPU}
                            onChange={e => setHardwareData({ ...hardwareData, CPU: e.target.value })}
                            aria-describedby="addon-wrapping" required />
                        <span class="input-group-text">GB</span>
                    </div>
                    <div class="input-group flex-nowrap w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faMicrochip} /></span>
                        <input type="Number" class="form-control"
                            placeholder="CPU Quantities"
                            aria-label="Username"
                            value={hardwareData.CPUQt}
                            onChange={e => setHardwareData({ ...hardwareData, CPUQt: e.target.value })}
                            aria-describedby="addon-wrapping" required />

                    </div>
                    <div class="input-group flex-nowrap w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faMemory} /></span>
                        <input type="Number" class="form-control"
                            placeholder="RAM" aria-label="RAM"
                            value={hardwareData.RAM}
                            onChange={e => setHardwareData({ ...hardwareData, RAM: e.target.value })}
                            aria-describedby="addon-wrapping" required />
                        <span class="input-group-text">GB</span>
                    </div>
                    <div class="input-group flex-nowrap w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faHardDrive} /></span>
                        <input type="Number" class="form-control"
                            placeholder="HDD"
                            aria-label="HDD"
                            value={hardwareData.HDD}
                            onChange={e => setHardwareData({ ...hardwareData, HDD: e.target.value })}
                            aria-describedby="addon-wrapping" required />
                        <span class="input-group-text">GB</span>
                    </div>
                </div>
                <div className="d-flex">
                    <div class="input-group flex-nowrap w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faTachographDigital} /></span>
                        <input type="text" class="form-control"
                            placeholder="Graphic"
                            value={hardwareData.Graphic}
                            onChange={e => setHardwareData({ ...hardwareData, Graphic: e.target.value })}
                            aria-label="Graphic"
                            aria-describedby="addon-wrapping" required />
                    </div>
                    <div class="input-group flex-nowrap w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faCompactDisc} /></span>
                        <input type="text" class="form-control"
                            placeholder="DVDDrive"
                            value={hardwareData.DVDDrive}
                            onChange={e => setHardwareData({ ...hardwareData, DVDDrive: e.target.value })}
                            aria-label="DVDDrive"
                            aria-describedby="addon-wrapping" required />
                    </div>
                    <div class="input-group flex-nowrap w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faPlug} /></span>
                        <input type="text" class="form-control"
                            placeholder="Power Supply"
                            value={hardwareData.PowerSupply}
                            onChange={e => setHardwareData({ ...hardwareData, PowerSupply: e.target.value })}
                            aria-label="PowerSupply"
                            aria-describedby="addon-wrapping" required />
                    </div>
                    <div class="input-group flex-nowrap w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={hardwareData.PowerSettoNever ? faPlugCirclePlus : faPlugCircleMinus} />
                            <label class="form-check-label" for="flexCheckChecked">
                                Power Set to Never {hardwareData.PowerSettoNever ? "ON" : "OFF"}
                            </label>
                        </span>
                        <span class="input-group-text" id="addon-wrapping">

                            <div class="form-check form-switch">
                                <input class="form-check-input"
                                    value={hardwareData.PowerSettoNever}
                                    onChange={e => (setHardwareData({ ...hardwareData, PowerSettoNever: e.target.checked }))}

                                    type="checkbox" role="switch" id="flexSwitchCheckDefault" />

                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HardwareSection
import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faQrcode, faBarcode, faMicrochip,
    faMemory, faHardDrive, faTachographDigital,
    faCompactDisc, faPlugCircleMinus, faPlug, faPlugCirclePlus, faLocation, faFile, faLevelUp, faLaptopCode, faFileArchive, faDownLeftAndUpRightToCenter, faFileExcel
} from '@fortawesome/free-solid-svg-icons';
import { ToastContainer } from 'react-toastify'
import Modal from 'react-bootstrap/Modal'
import 'react-toastify/dist/ReactToastify.css';
import { DataContext } from '../Context'


function HardwareEntry() {
    const val = useContext(DataContext)

    const { dataEntry, setDataEntry } = val
    return (
        <>
            <Modal.Body>
                <h1>
                    Hardware Section
                </h1>

                <div class="d-flex flex-nowrap flex-column">
                    <div className="d-flex">
                        <div class="input-group flex-wrap p-3">
                            <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faLocation} /></span>
                            <input type="text" class="form-control"
                                placeholder="Location"
                                value={dataEntry.location}
                                onChange={e => setDataEntry({ ...dataEntry, location: e.target.value })}
                                required />
                        </div>
                        <div class="input-group flex-wrap p-3">
                            <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} /></span>
                            <input type="text" class="form-control"
                                placeholder="Type"
                                value={dataEntry.type}
                                onChange={e => setDataEntry({ ...dataEntry, type: e.target.value })}
                                required />
                        </div>
                        <div class="input-group flex-wrap p-3">
                            <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faFileExcel} /></span>
                            <input type="text" class="form-control"
                                placeholder="Function"
                                value={dataEntry.functions}
                                onChange={e => setDataEntry({ ...dataEntry, functions: e.target.value })}
                                required />
                        </div>
                    </div>
                    <div className="d-flex">
                        <div class="input-group flex-wrap w-50 p-3">
                            <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faQrcode} /></span>
                            <input type="text" class="form-control"
                                placeholder="Make Model"
                                value={dataEntry.MakeModel}
                                onChange={e => setDataEntry({ ...dataEntry, MakeModel: e.target.value })}
                                required />
                        </div>
                        <div class="input-group flex-nowrap w-50 p-3">
                            <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faBarcode} /></span>
                            <input type="text" class="form-control"
                                placeholder="Service Tag / SerialNo"
                                aria-label="ServiceTagSerialNo"
                                value={dataEntry.ServiceTagSerialNo}
                                onChange={e => setDataEntry({ ...dataEntry, ServiceTagSerialNo: e.target.value })}
                                required />
                        </div>
                    </div>
                    <div class="d-flex  ">
                        <div class="input-group flex-nowrap w-50 p-3">
                            <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faMicrochip} /></span>
                            <input type="text" class="form-control"
                                placeholder="CPU" aria-label="CPU"
                                value={dataEntry.CPU}
                                onChange={e => setDataEntry({ ...dataEntry, CPU: e.target.value })}
                                required />
                            <span class="input-group-text">GB</span>
                        </div>
                        <div class="input-group flex-nowrap w-50 p-3">
                            <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faMemory} /></span>
                            <input type="Number" class="form-control"
                                placeholder="RAM" aria-label="RAM"
                                value={dataEntry.RAM}
                                onChange={e => setDataEntry({ ...dataEntry, RAM: e.target.value })}
                                required />
                            <span class="input-group-text">GB</span>
                        </div>
                        <div class="input-group flex-nowrap w-50 p-3">
                            <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faHardDrive} /></span>
                            <input type="Number" class="form-control"
                                placeholder="HDD"
                                aria-label="HDD"
                                value={dataEntry.HDD}
                                onChange={e => setDataEntry({ ...dataEntry, HDD: e.target.value })}
                                required />
                            <span class="input-group-text">GB</span>
                        </div>
                    </div>

                    <div className="d-flex ">
                        <div class="input-group flex-nowrap w-50 p-3">
                            <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faTachographDigital} /></span>
                            <input type="text" class="form-control"
                                placeholder="Graphic"
                                value={dataEntry.Graphic}
                                onChange={e => setDataEntry({ ...dataEntry, Graphic: e.target.value })}
                                required />
                        </div>
                        <div class="input-group flex-nowrap w-50 p-3">
                            <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faCompactDisc} /></span>
                            <input type="text" class="form-control"
                                placeholder="DVDDrive"
                                value={dataEntry.DVDDrive}
                                onChange={e => setDataEntry({ ...dataEntry, DVDDrive: e.target.value })}
                                required />
                        </div>
                        <div class="input-group flex-nowrap w-50 p-3">
                            <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faPlug} /></span>
                            <input type="text" class="form-control"
                                placeholder="Power Supply"
                                value={dataEntry.PowerSupply}
                                onChange={e => setDataEntry({ ...dataEntry, PowerSupply: e.target.value })}
                                required />
                        </div>
                        <div class="input-group flex-nowrap w-50 p-3">
                            <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={dataEntry.PowerSettoNever ? faPlugCirclePlus : faPlugCircleMinus} />
                                <label class="form-check-label" for="flexCheckChecked">
                                    Power Set to Never {dataEntry.PowerSettoNever ? "ON" : "OFF"}
                                </label>
                            </span>
                            <span class="input-group-text" id="addon-wrapping">

                                <div class="form-check form-switch">
                                    <input class="form-check-input"
                                        value={dataEntry.PowerSettoNever}
                                        onChange={e => (setDataEntry({ ...dataEntry, PowerSettoNever: e.target.checked }))}
                                        type="checkbox" role="switch" id="flexSwitchCheckDefault" />

                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div class="input-group flex-nowrap w-50 p-3">
                            <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faFileArchive} /></span>
                            <input type="text" class="form-control"
                                placeholder="Source File"
                                value={dataEntry.sourceFile}
                                onChange={e => setDataEntry({ ...dataEntry, sourceFile: e.target.value })}
                                required />
                        </div>
                        <div class="input-group flex-nowrap w-50 p-3">
                            <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faLaptopCode} /></span>
                            <input type="text" class="form-control"
                                placeholder="AdditionalSoftware"
                                value={dataEntry.additionalSoftware}
                                onChange={e => setDataEntry({ ...dataEntry, additionalSoftware: e.target.value })}
                                required />
                        </div>
                        <div class="input-group flex-nowrap w-50 p-3">
                            <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faLevelUp} /></span>
                            <input type="text" class="form-control"
                                placeholder="Raid Level"
                                value={dataEntry.RaidLevel}
                                onChange={e => setDataEntry({ ...dataEntry, RaidLevel: e.target.value })}
                                required />
                        </div>
                    </div>
                    <div class="input-group flex-nowrap  p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faFile} /></span>
                        <input type="text" class="form-control"
                            placeholder="Notes"
                            value={dataEntry.Notes}
                            onChange={e => setDataEntry({ ...dataEntry, Notes: e.target.value })}
                            required />
                    </div>
                </div>
            </Modal.Body>

            <ToastContainer />
        </>
    )
}

export default HardwareEntry
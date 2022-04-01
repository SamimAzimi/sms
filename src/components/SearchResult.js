import React, { useState, useContext, useEffect } from 'react'
import { Accordion, Button } from 'react-bootstrap'
import Spinner from './Spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStickyNote, } from '@fortawesome/free-regular-svg-icons';
import { DataContext } from './Context'
import ModalDataEntery from './ModalDataEntery'
import '../styles/common.css'
import {
    faMapLocation,
    faPhone,
    faGlobe,
    faFile,
    faNetworkWired,
    faCircleNodes,
    faQrcode, faBarcode, faMicrochip,
    faMemory, faHardDrive, faTachographDigital,
    faCompactDisc, faPlugCircleMinus, faPlug, faPlugCirclePlus,
    faCodeBranch, faLaptopCode,
    faUser, faDatabase,
    faKey, faCheckCircle,
    faDesktop,
    faDownload, faMinusCircle,
} from '@fortawesome/free-solid-svg-icons';
function SearchResult() {
    const ctx = useContext(DataContext)
    const { data, spinner } = ctx

    const [recordInfo, setrecordInfo] = useState({});

    const [show, setShow] = useState(false);

    useEffect(() => {
        console.log('search result', ctx)

    }, [])
    const handleModalButton = (params) => {
        setrecordInfo({ id: params[0], sectionName: params[1] })
        console.log(params)

        setShow(true)
    }
    return (
        <>
            {spinner ? <Spinner /> :
                <Accordion defaultActiveKey="0" className="container p-5">
                    {data && data.map((data, i) => {
                        return (
                            <Accordion.Item variant="primary" eventKey={i} key={data._id}>
                                <Accordion.Header variant="primary" >{data.siteName}</Accordion.Header>
                                <Accordion.Body key={i}>
                                    <div class="d-flex" key={data._id}>
                                        <div class="input-group flex-nowrap w-50 p-3">
                                            <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faMapLocation} /></span>
                                            <span class="input-group-text" id="addon-wrapping">Address</span>
                                            <input type="text" class="form-control" placeholder="Site Contact Number" value={data.siteAddress} />
                                        </div>
                                        <div class="input-group flex-nowrap w-50 p-3">
                                            <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faPhone} /></span>
                                            <span class="input-group-text" id="addon-wrapping">Contact Number</span>
                                            <input type="text" class="form-control" placeholder="Site Contact Number" value={data.siteContactNumber} />
                                        </div>
                                        <div class="input-group flex-nowrap w-50 p-3">
                                            <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faStickyNote} /></span>
                                            <span class="input-group-text" id="addon-wrapping">Note</span>
                                            <input type="text" class="form-control" placeholder="Site Contact Number" value={data.siteNote} />
                                        </div>

                                    </div>
                                    <hr />
                                    <h1>Network Section</h1>
                                    {data.network.map((net) => {
                                        return (
                                            <>

                                                <div class="d-flex " key={net._id}>
                                                    <div class="input-group  p-3">
                                                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faNetworkWired} /></span>
                                                        <input type="text" class="form-control" readOnly value={net.IP} />
                                                    </div>
                                                    <div class="input-group  p-3">
                                                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faCircleNodes} /></span>
                                                        <input type="text" class="form-control" readOnly value={net.subnetMask} />
                                                    </div>
                                                    <div class="input-group  p-3">
                                                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faGlobe} /></span>
                                                        <input type="text" class="form-control" readOnly value={net.gateway} />
                                                    </div>
                                                    <div class="input-group  p-3">
                                                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faFile} /></span>
                                                        <input type="text" class="form-control" readOnly value={net.sourceFile} />
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })}
                                    <hr />
                                    <h1>Hardware Section</h1>
                                    <Button variant="primary" onClick={() => handleModalButton([data._id, "Hardware"])}>
                                        ADD Hardware
                                    </Button>
                                    {data.hardware.map((hard, i) => {
                                        return (
                                            <>
                                                <div class="d-flex flex-wrap" key={hard._id}>
                                                    <div class="input-group flex-nowrap w-50 p-3">
                                                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faQrcode} /></span>
                                                        <input readOnly type="text" class="form-control"
                                                            value={hard.MakeModel}
                                                        />
                                                    </div>
                                                    <div class="input-group flex-nowrap w-50 p-3">
                                                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faBarcode} /></span>
                                                        <input readOnly type="text" class="form-control"
                                                            value={hard.ServiceTagSerialNo}
                                                        />
                                                    </div>
                                                    <div class="d-flex ">
                                                        <div class="input-group flex-nowrap w-50 p-3">
                                                            <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faMicrochip} /></span>
                                                            <input readOnly type="text" class="form-control"
                                                                aria-label="CPU"
                                                                value={hard.CPU}
                                                            />
                                                            <span class="input-group-text">GB</span>
                                                        </div>
                                                        <div class="input-group flex-nowrap w-50 p-3">
                                                            <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faMicrochip} /></span>
                                                            <input readOnly type="Number" class="form-control"

                                                                value={hard.CPUQt}
                                                            />

                                                        </div>
                                                        <div class="input-group flex-nowrap w-50 p-3">
                                                            <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faMemory} /></span>
                                                            <input readOnly type="Number" class="form-control"
                                                                value={hard.RAM}
                                                            />
                                                            <span class="input-group-text">GB</span>
                                                        </div>
                                                        <div class="input-group flex-nowrap w-50 p-3">
                                                            <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faHardDrive} /></span>
                                                            <input readOnly type="Number" class="form-control"

                                                                value={hard.HDD}
                                                            />
                                                            <span class="input-group-text">GB</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex">
                                                        <div class="input-group flex-nowrap w-50 p-3">
                                                            <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faTachographDigital} /></span>
                                                            <input readOnly type="text" class="form-control"

                                                                value={hard.Graphic}
                                                            />
                                                        </div>
                                                        <div class="input-group flex-nowrap w-50 p-3">
                                                            <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faCompactDisc} /></span>
                                                            <input readOnly type="text" class="form-control"

                                                                value={hard.DVDDrive}
                                                            />
                                                        </div>
                                                        <div class="input-group flex-nowrap w-50 p-3">
                                                            <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faPlug} /></span>
                                                            <input readOnly type="text" class="form-control"

                                                                value={hard.PowerSupply}
                                                            />
                                                        </div>
                                                        <div class="input-group flex-nowrap w-50 p-3">
                                                            <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={hard.PowerSettoNever ? faPlugCirclePlus : faPlugCircleMinus} />
                                                                <label class="form-check-label" for="flexCheckChecked">
                                                                    Power Set to Never {hard.PowerSettoNever ? "ON" : "OFF"}
                                                                </label>
                                                            </span>
                                                            <span class="input-group-text" id="addon-wrapping">

                                                                <div class="form-check form-switch">
                                                                    <input class="form-check-input"
                                                                        value={hard.PowerSettoNever}
                                                                        readOnly
                                                                        disabled
                                                                        type="checkbox" role="switch" id="flexSwitchCheckDefault" />

                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                            </>
                                        )
                                    })}
                                    <h1>Apps Section</h1>
                                    <Button variant="primary" onClick={() => handleModalButton([data._id, "App"])}>
                                        ADD Apps
                                    </Button>
                                    {data.apps.map(app => {
                                        return (
                                            <div class="d-flex" key={app._id}>
                                                <div class="input-group flex-nowrap w-50 p-3">
                                                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faLaptopCode} /></span>
                                                    <input readOnly type="text" class="form-control"

                                                        value={app.appsName}
                                                    />
                                                </div>
                                                <div class="input-group flex-nowrap w-50 p-3">
                                                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faCodeBranch} /></span>
                                                    <input readOnly type="text" class="form-control"

                                                        value={app.appsVersion}
                                                    />
                                                </div>
                                                <div class="input-group flex-nowrap w-50 p-3">
                                                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faUser} /></span>
                                                    <input readOnly type="text" class="form-control"

                                                        value={app.appsUserName}
                                                    />
                                                </div>
                                                <div class="input-group flex-nowrap w-50 p-3">
                                                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faKey} /></span>
                                                    <input readOnly type="text" class="form-control"

                                                        value={app.appsPassword}
                                                    />
                                                </div>
                                            </div>
                                        )
                                    })}
                                    <h1>Database Section</h1>
                                    <Button variant="primary" onClick={() => handleModalButton([data._id, "Database"])}>
                                        ADD Database
                                    </Button>
                                    {data.DB.map(db => {
                                        return (
                                            <div className="d-flex" key={db._id}>
                                                <div class="input-group flex-nowrap p-3">
                                                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faDatabase} /></span>
                                                    <input type="text"
                                                        class="form-control"
                                                        readOnly
                                                        value={db.DBname}
                                                    />
                                                </div>
                                                <div class="input-group flex-nowrap w-50 p-3">
                                                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faCodeBranch} /></span>
                                                    <input type="text"
                                                        class="form-control"
                                                        readOnly
                                                        value={db.DBVersion}
                                                    />
                                                </div>
                                                <div class="input-group flex-nowrap w-50 p-3">
                                                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faKey} /></span>
                                                    <input type="text"
                                                        class="form-control"
                                                        readOnly
                                                        value={db.DBsaPassword}
                                                    />
                                                </div>
                                                <div class="input-group flex-nowrap w-50 p-3">
                                                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={db.DBinstalled === true ? faCheckCircle : faMinusCircle} />
                                                        <label class="form-check-label" for="flexCheckChecked">
                                                            Update Turn {db.DBinstalled === true ? "ON" : "OFF"}
                                                        </label>
                                                    </span>
                                                    <span class="input-group-text" id="addon-wrapping">

                                                        <div class="form-check form-switch">
                                                            <input class="form-check-input"
                                                                value={db.DBinstalled}
                                                                disabled
                                                                readOnly
                                                                type="checkbox" role="switch" id="flexSwitchCheckDefault" />

                                                        </div>
                                                    </span>

                                                </div>
                                            </div>
                                        )
                                    })}
                                    <h1>OS Section</h1>
                                    {data.OS.map(sys => {
                                        return (
                                            <div class="d-flex " key={sys._id}>
                                                <div class="input-group flex-nowrap  p-3">
                                                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faDesktop} /></span>
                                                    <input type="text"
                                                        class="form-control"
                                                        value={sys.OSname}
                                                        readOnly
                                                    />
                                                </div>
                                                <div class="input-group flex-nowrap w-50 p-3">
                                                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faCodeBranch} /></span>
                                                    <input type="text"
                                                        class="form-control"
                                                        readOnly
                                                        value={sys.OSVersion}
                                                    />
                                                </div>
                                                <div class="input-group flex-nowrap w-50 p-3">
                                                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faDownload} /></span>
                                                    <input type="text"
                                                        class="form-control"
                                                        value={sys.UpdateInstalled}
                                                        readOnly
                                                    />
                                                </div>
                                                <div class="input-group flex-nowrap w-50 p-3">

                                                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={sys.UpdateTurnedOff === true ? faCheckCircle : faMinusCircle} />
                                                        <label class="form-check-label" for="flexCheckChecked">
                                                            Update Turn {sys.UpdateTurnedOff === true ? "ON" : "OFF"}
                                                        </label>
                                                    </span>
                                                    <span class="input-group-text" id="addon-wrapping">

                                                        <div class="form-check form-switch">
                                                            <input class="form-check-input"
                                                                value={sys.UpdateTurnedOff}
                                                                readOnly
                                                            />

                                                        </div>
                                                    </span>

                                                </div>
                                            </div>
                                        )
                                    })}
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    })}
                </Accordion>
            }
            <ModalDataEntery show={show} setShow={setShow} recordInfo={recordInfo} />
        </>
    )
}

export default SearchResult
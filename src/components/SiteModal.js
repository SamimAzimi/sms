import React, { useContext, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap'
import { DataContext } from './Context'
import {
    faPhone, faLocation, faBuilding,
    faExternalLink,
} from '@fortawesome/free-solid-svg-icons';
import ModalDataEntery from './ModalDataEntery'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function SiteModal({ setShowSite, showSite }) {

    let navigation = useNavigate();
    const [recordInfo] = useState({});
    const value = useContext(DataContext)
    const [show, setShow] = useState(false);
    const { setData } = value
    const [sitedata, setSiteData] = useState({
        siteName: '',
        siteAddress: '',
        siteContactNumber: '',
        extraHardware: '',
        hardware: [],
    });

    const handleSiteSave = () => {
        const { siteName, siteAddress, siteContactNumber, extraHardware } = sitedata
        if (siteName && siteAddress && siteContactNumber && extraHardware) {
            setShow(true)
            axios.post('https://servicemanagementsystem.herokuapp.com/api/site', sitedata)
                .then(res => {
                    if (res.data.found) {
                        toast.info('Site Added Succesfully')
                              setSiteData({
                                    siteName: '',
                                    siteAddress: '',
                                    siteContactNumber: '',
                                    extraHardware: '',
                                    hardware: [],
                                })
                        setData(res.data.found)
                         
                    } else {
                        toast.info('Something went wrong')
                    }

                }).catch(err => {
                    console.log(err)
                })

        }
        else {
            toast.info("Please Fill the Form")
        }


    }
    const handleClose = () => {
        setSiteData({
            siteName: '',
            siteAddress: '',
            siteContactNumber: '',
            extraHardware: '',
            hardware: [],
        })
        setData('')
        setShowSite(false)
        navigation('/') 
    }
    return (
        <>
        <Modal fullscreen={true} show={showSite} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Adding New Site</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h1>Site Section</h1>
                <div className="d-flex flex-column w-100" >
                    <div class="input-group w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faBuilding} /></span>
                        <input type="text"
                            class="form-control"
                            placeholder="Site Name"
                            value={sitedata.siteName}
                            onChange={e => setSiteData({ ...sitedata, siteName: e.target.value })} />
                    </div>
                    <div class="input-group w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faLocation} /></span>
                        <input type="text"
                            class="form-control"
                            placeholder="Site Address"
                            value={sitedata.siteAddress}
                            onChange={e => setSiteData({ ...sitedata, siteAddress: e.target.value })} />

                    </div>
                    <div class="input-group flex-nowrap w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faPhone} /></span>
                        <input type="text"
                            class="form-control"
                            placeholder="Site Contact Number"
                            value={sitedata.siteContactNumber}
                            onChange={e => setSiteData({ ...sitedata, siteContactNumber: e.target.value })} />

                    </div>
                    <div class="input-group flex-nowrap w-50 p-3">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faExternalLink} /></span>
                        <input type="text"
                            class="form-control"
                            placeholder="Site Extra Hardware"
                            value={sitedata.extraHardware}
                            onChange={e => setSiteData({ ...sitedata, extraHardware: e.target.value })} />

                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleSiteSave}>Next </Button>
            </Modal.Footer>
            <ToastContainer />
        </Modal>

         <ModalDataEntery show={show} setShow={setShow} recordInfo={recordInfo} />
         </>
    )
}

export default SiteModal
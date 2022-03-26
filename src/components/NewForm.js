import React, { useState } from 'react'
import SiteSection from './Sections/SiteSection'
import NetworkSection from './Sections/NetworkSection'
import HardwareSection from './Sections/HardwareSection'
import DBSection from './Sections/DBSection'
import OSSection from './Sections/OSsection'
import Appsection from './Sections/AppSection'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function NewForm() {
    let location = useLocation();
    const [networkData, setNetworkData] = useState(
        {
            IP: '',
            subnetMask: '',
            gateway: '',
            sourceFile: ''
        }
    );
    const [appData, setAppData] = useState(
        {
            appsName: '',
            appsVersion: '',
            appsUserName: '',
            appsPassword: '',
        }
    );
    const [dbData, setDBdata] = useState({
        DBinstalled: Boolean,
        DBname: '',
        DBVersion: '',
        DBsaPassword: ''
    })

    const [osData, setOSdata] = useState({
        OSname: '',
        OSVersion: '',
        UpdateInstalled: '',
        UpdateTurnedOff: Boolean,
    });

    const [hardwareData, setHardwareData] = useState(
        {
            MakeModel: '',
            ServiceTagSerialNo: '',
            CPU: '',
            CPUQt: Number,
            RAM: Number,
            HDD: Number,
            Graphic: '',
            DVDDrive: '',
            PowerSupply: '',
            PowerSettoNever: Boolean,
        }
    );

    const [siteData, setSiteData] = useState({
        sitename: '',
        siteAddress: '',
        siteContactNumber: '',
        siteNote: '',
        network: networkData,
        hardware: hardwareData,
        apps: appData,
        DB: dbData,
    })
    const handleSubmitNewForm = (e) => {
        e.preventDefault()
        axios.post('https://servicemanagementsystem.herokuapp.com/api/record', siteData).then(res => {
            console.log(res.data)
            if (res.data === "Record Saved Successfully") {
                toast.info(res.data)

                window.location.reload(false)

            } else {
                toast.warning(res.data)
            }
        }).catch(err => {
            console.log(err)
        })

    }
    return (
        <>
            <form className="container" onSubmit={handleSubmitNewForm}>
                <SiteSection siteData={siteData} setSiteData={setSiteData} />
                <NetworkSection networkData={networkData} setNetworkData={setNetworkData} />
                <HardwareSection hardwareData={hardwareData} setHardwareData={setHardwareData} />
                <Appsection appData={appData} setAppData={setAppData} />
                <DBSection dbData={dbData} setDBdata={setDBdata} />
                <OSSection osData={osData} setOSdata={setOSdata} />
                <button type="submit" class="btn btn-primary w-50 btn-outline-info btn-primary btn-lg">Save</button>
                <button type="cancel" class="btn btn-secondary w-50 btn-outline-info btn-primary btn-lg">Cancel</button>
            </form>
            <ToastContainer />
        </>
    )
}

export default NewForm
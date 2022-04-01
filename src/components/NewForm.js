import React, { useState } from 'react'
import SiteSection from './Sections/SiteSection'
import NetworkSection from './Sections/NetworkSection'
import HardwareSection from './Sections/HardwareSection'
import DBSection from './Sections/DBSection'
import OSSection from './Sections/OSsection'
import Appsection from './Sections/AppSection'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router'

function NewForm() {

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
            RAM: Number,
            HDD: Number,
            Graphic: '',
            DVDDrive: '',
            PowerSupply: '',
            PowerSettoNever: Boolean,
        }
    );

    const [siteData, setSiteData] = useState({
        siteName: '',
        siteAddress: '',
        siteContactNumber: '',
        siteNote: '',
        network: [],
        hardware: [],
        apps: [],
        DB: [],
        OS: [],
    })
    const handleSubmitNewForm = (e) => {
        e.preventDefault()

        setSiteData({ ...siteData, network: [networkData], hardware: [hardwareData], apps: [appData], DB: [dbData], OS: [osData] })
        if (siteData.OS[0]) {
            console.log(setSiteData)
            axios.post('https://servicemanagementsystem.herokuapp.com/api/record', siteData).then(res => {
                console.log(siteData)
                if (res.data === "Record Saved Successfully") {
                    toast.info(res.data)

                } else {
                    toast.warning(res.data)
                }
            }).catch(err => {
                console.log(err)
            })
        } else {
            toast.info("Click Save Button Twice for Confirmation")
        }


    }
    let navigation = useNavigate();
    const handleCancle = () => {
        navigation('/')

    }
    return (
        <>
            <form className="container p-4" onSubmit={handleSubmitNewForm}>
                <SiteSection siteData={siteData} setSiteData={setSiteData} />
                <NetworkSection networkData={networkData} setNetworkData={setNetworkData} />
                <HardwareSection hardwareData={hardwareData} setHardwareData={setHardwareData} />
                <Appsection appData={appData} setAppData={setAppData} />
                <DBSection dbData={dbData} setDBdata={setDBdata} />
                <OSSection osData={osData} setOSdata={setOSdata} />
                <button type="submit" class="btn btn-primary w-50 btn-outline-info btn-primary btn-lg">Save</button>
                <button type="cancel" onClick={handleCancle} class="btn btn-primary w-50 btn-outline-info btn-primary btn-lg">Cancel</button>
            </form>
            <ToastContainer />
        </>
    )
}

export default NewForm
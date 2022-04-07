import React, { useContext, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
import AppsEntry from './EntrySection/AppsEntry'
import HardwareEntry from './EntrySection/HardwareEntry'
import DatabaseEntry from './EntrySection/DatabaseEntry'
import OSEntry from './EntrySection/OSEntry'
import NetEntry from './EntrySection/NetEntry'
import { DataContext } from './Context'
import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios'
function ModalDataEntery({ setShow, show, recordInfo }) {

    const [disable, setdisabled] = useState(true)
    const value = useContext(DataContext)
    const { next, setNext, dataEntry, setDataEntry, data, } = value

    const handleClose = () =>{
    setNext({
        firstNext: true,
        secondNext: false,
        thirdNext: false,
        fourthNext: false,
        fivithNext: false,
    }) 
    setShow(false);
     setDataEntry(
                    {
                                    location: '',
                                    Notes: '',
                                    type: '',
                                    MakeModel: '',
                                    functions: '',
                                    ServiceTagSerialNo: '',
                                    CPU: '',
                                    RAM: '',
                                    HDD: '',
                                    Graphic: '',
                                    DVDDrive: '',
                                    PowerSupply: '',
                                    PowerSettoNever: Boolean,
                                    sourceFile: '',
                                    RaidLevel: '',
                                    additionalSoftware: '',
                                    apps: {
                                        appsName: '',
                                        appsVersion: '',
                                        appsUserName: '',
                                        appsPassword: '',
                                    },
                                    DB: {
                                        DBinstalled: Boolean,
                                        DBname: '',
                                        DBVersion: '',
                                        DBsaPassword: ''
                                    },
                                    OS: {
                                        OSname: '',
                                        OSVersion: '',
                                        UserName: '',
                                        password: '',
                                        UpdateInstalled: Boolean,
                                        UpdateTurnedOff: Boolean
                                    },
                                    network: {
                                        IP: '',
                                        subnetMask: '',
                                        gateway: ''
                                    }
                                }
                            )
    }
    const { location,
        Notes,
        type,
        MakeModel,
        functions,
        ServiceTagSerialNo,
        CPU,
        RAM,
        HDD,
        Graphic,
        DVDDrive,
        PowerSupply,
        PowerSettoNever,
        sourceFile,
        RaidLevel,
        additionalSoftware,
        apps: {
            appsName,
            appsVersion,
            appsUserName,
            appsPassword,
        },
        network: {
            IP,
            subnetMask,
            gateway,
        }, OS: {
            OSname,
            OSVersion,
            UserName,
            password,
            UpdateInstalled,
            UpdateTurnedOff,
        }, DB: {
            DBinstalled,
            DBname,
            DBVersion,
            DBsaPassword,
        } } = dataEntry
    const handleNext = () => {

        if (next.firstNext) {
            if (location === "" || Notes === "" || type === "" || MakeModel === "" || functions === "" || ServiceTagSerialNo === "" || CPU === "" || RAM === "" || HDD === "" || Graphic === "" || DVDDrive === "" || PowerSupply === "" || PowerSettoNever === "" || sourceFile === "" || RaidLevel === "" || additionalSoftware === "") {
                toast.info('Please Fill all the fields')
            } else
            {
                setNext({ firstNext: false, secondNext: true })
            }
        }
        if (next.secondNext) {
            if (appsName === "" || appsVersion === "" || appsUserName === "" || appsPassword === ""
            ) {
                toast.info('Please Fill all the fields')

            } else {

                setNext({ secondNext: false, thirdNext: true })
            }
        }
        if (next.thirdNext) {
            if (
                IP === "" ||
                subnetMask === "" ||
                gateway === ""
            ) {
                toast.info('Please Fill all the fields')

            } else {

                setNext({ thirdNext: false, fourthNext: true })
            }
        }
        if (next.fourthNext) {
            if (
                OSname === "" ||
                OSVersion === "" ||
                UserName === "" ||
                password === "" ||
                UpdateInstalled === "" ||
                UpdateTurnedOff === ""
            ) {
                toast.info('Please Fill all the fields')

            } else {

                setNext({ fourthNext: false, fivithNext: true })
            }
        }
        if (next.fivithNext) {
            if (
                DBinstalled === "" ||
                DBname === "" ||
                DBVersion === "" ||
                DBsaPassword === ""
            ) {
                toast.info('Please Fill all the fields')

            } else {
                setdisabled(false)
                setTimeout(() => {
                    axios.post('https://servicemanagementsystem.herokuapp.com/api/hardwaretoapp', {
                        "recordID": data._id,
                        "data": dataEntry
                    }).then(
                        (response) => {
                            toast.info(response.data)
                            setNext({ fivithNext: false, firstNext: true })
                            setShow(false)
                            setdisabled(true)
                            setDataEntry(
                                {
                                    location: '',
                                    Notes: '',
                                    type: '',
                                    MakeModel: '',
                                    functions: '',
                                    ServiceTagSerialNo: '',
                                    CPU: '',
                                    RAM: '',
                                    HDD: '',
                                    Graphic: '',
                                    DVDDrive: '',
                                    PowerSupply: '',
                                    PowerSettoNever: Boolean,
                                    sourceFile: '',
                                    RaidLevel: '',
                                    additionalSoftware: '',
                                    apps: {
                                        appsName: '',
                                        appsVersion: '',
                                        appsUserName: '',
                                        appsPassword: '',
                                    },
                                    DB: {
                                        DBinstalled: Boolean,
                                        DBname: '',
                                        DBVersion: '',
                                        DBsaPassword: ''
                                    },
                                    OS: {
                                        OSname: '',
                                        OSVersion: '',
                                        UserName: '',
                                        password: '',
                                        UpdateInstalled: Boolean,
                                        UpdateTurnedOff: Boolean
                                    },
                                    network: {
                                        IP: '',
                                        subnetMask: '',
                                        gateway: ''
                                    }
                                }
                            )

                        }
                    ).catch(err => {
                        console.log(err)
                    });
                }, 2000)
                    


            }
        }


    }
    const handleAnoher =()=>{
        if (next.firstNext) {
            if (location === "" || Notes === "" || type === "" || MakeModel === "" || functions === "" || ServiceTagSerialNo === "" || CPU === "" || RAM === "" || HDD === "" || Graphic === "" || DVDDrive === "" || PowerSupply === "" || PowerSettoNever === "" || sourceFile === "" || RaidLevel === "" || additionalSoftware === "") {
                toast.info('Please Fill all the fields')
            } else
            {
                setNext({ firstNext: false, secondNext: true })
            }
        }
        if (next.secondNext) {
            if (appsName === "" || appsVersion === "" || appsUserName === "" || appsPassword === ""
            ) {
                toast.info('Please Fill all the fields')

            } else {

                setNext({ secondNext: false, thirdNext: true })
            }
        }
        if (next.thirdNext) {
            if (
                IP === "" ||
                subnetMask === "" ||
                gateway === ""
            ) {
                toast.info('Please Fill all the fields')

            } else {

                setNext({ thirdNext: false, fourthNext: true })
            }
        }
        if (next.fourthNext) {
            if (
                OSname === "" ||
                OSVersion === "" ||
                UserName === "" ||
                password === "" ||
                UpdateInstalled === "" ||
                UpdateTurnedOff === ""
            ) {
                toast.info('Please Fill all the fields')

            } else {

                setNext({ fourthNext: false, fivithNext: true })
            }
        }
        if (next.fivithNext) {
            if (
                DBinstalled === "" ||
                DBname === "" ||
                DBVersion === "" ||
                DBsaPassword === ""
            ) {
                toast.info('Please Fill all the fields')

            } else {
                setdisabled(false)
                setTimeout(() => {
                    axios.post('https://servicemanagementsystem.herokuapp.com/api/hardwaretoapp', {
                        "recordID": data._id,
                        "data": dataEntry
                    }).then(
                        (response) => {
                            toast.info(response.data)
                            setNext({
                                firstNext: true,
                                secondNext: false,
                                thirdNext: false,
                                fourthNext: false,
                                fivithNext: false,
                            })
                            setdisabled(true)
                            setDataEntry(
                                {
                                    location: '',
                                    Notes: '',
                                    type: '',
                                    MakeModel: '',
                                    functions: '',
                                    ServiceTagSerialNo: '',
                                    CPU: '',
                                    RAM: '',
                                    HDD: '',
                                    Graphic: '',
                                    DVDDrive: '',
                                    PowerSupply: '',
                                    PowerSettoNever: Boolean,
                                    sourceFile: '',
                                    RaidLevel: '',
                                    additionalSoftware: '',
                                    apps: {
                                        appsName: '',
                                        appsVersion: '',
                                        appsUserName: '',
                                        appsPassword: '',
                                    },
                                    DB: {
                                        DBinstalled: Boolean,
                                        DBname: '',
                                        DBVersion: '',
                                        DBsaPassword: ''
                                    },
                                    OS: {
                                        OSname: '',
                                        OSVersion: '',
                                        UserName: '',
                                        password: '',
                                        UpdateInstalled: Boolean,
                                        UpdateTurnedOff: Boolean
                                    },
                                    network: {
                                        IP: '',
                                        subnetMask: '',
                                        gateway: ''
                                    }
                                }
                            )

                        }
                    ).catch(err => {
                        console.log(err)
                    });
                }, 2000)
                    


            }
        }
    }
    const handleBack =()=>{
        const {secondNext,thirdNext,fourthNext,fivithNext}=next

        if(secondNext){
            setNext({
            firstNext: true,
            secondNext: false,
            thirdNext: false,
            fourthNext: false,
            fivithNext: false,
        })
        }
        if(thirdNext){
        setNext({
            firstNext: false,
            secondNext: true,
            thirdNext: false,
            fourthNext: false,
            fivithNext: false,
            })
        }
         if(fourthNext){
        setNext({
            firstNext: false,
            secondNext: false,
            thirdNext: true,
            fourthNext: false,
            fivithNext: false,
            })
        }
         if(fivithNext){
        setNext({
            firstNext: false,
            secondNext: false,
            thirdNext: false,
            fourthNext: true,
            fivithNext: false,
            })
        }
    
    }
    return (
        <>
            <Modal fullscreen={true} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{recordInfo.sectionName}</Modal.Title>
                </Modal.Header>
                {next.firstNext && <HardwareEntry />}
                {next.secondNext && <AppsEntry />}
                {next.thirdNext && <NetEntry />}
                {next.fourthNext && <OSEntry />}
                {next.fivithNext && <DatabaseEntry />}
                <Modal.Footer>
                    {next.firstNext ? "": <Button variant='secondary' onClick={handleBack}>Back</Button>}
                    {next.fivithNext ? <Button disabled={disable ? "" : "false"} variant="info" onClick={handleAnoher}>Save & Enter Another</Button>: ""}
                    <Button variant="secondary" disabled={disable ? "" : "false"} onClick={handleClose}>Close</Button>
                    <Button variant="primary" disabled={disable ? "" : "false"} onClick={handleNext}>{next.fivithNext ? "Save" : "Next"} </Button>
                </Modal.Footer>
            </Modal>
 
            <ToastContainer />
        </>
    )
}

export default ModalDataEntery
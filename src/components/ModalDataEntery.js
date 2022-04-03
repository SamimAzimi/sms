import React, { useContext } from 'react'
import Modal from 'react-bootstrap/Modal'
import AppsEntry from './EntrySection/AppsEntry'
import HardwareEntry from './EntrySection/HardwareEntry'
import DatabaseEntry from './EntrySection/DatabaseEntry'
import OSEntry from './EntrySection/OSEntry'
import NetEntry from './EntrySection/NetEntry'
import { DataContext } from './Context'
import { Button } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios'
function ModalDataEntery({ setShow, show, recordInfo }) {

    const value = useContext(DataContext)
    const { next, setNext, dataEntry, setDataEntry, data } = value
    const handleClose = () => setShow(false);
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
            } {
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
                setTimeout(() => {
                    axios.post('http://localhost:4000/api/hardwaretoapp', {
                        "recordID": data._id,
                        "data": dataEntry
                    }).then(
                        (response) => {
                            toast.info(response.data)
                            setNext({ fivithNext: false, firstNext: true })
                            setShow(false)
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
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleNext}>{next.fivithNext ? "Save" : "Next"} </Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer />
        </>
    )
}

export default ModalDataEntery
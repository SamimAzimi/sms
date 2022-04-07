
import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { DataContext } from './Context'
import MaterialTable from 'material-table'
import AddBox from '@material-ui/icons/AddBox';
import '../styles/common.css'
import { tableIcons } from './TableIcons'
import axios from 'axios'
import SaveAlt from '@material-ui/icons/SaveAlt';
import { toast, ToastContainer } from 'react-toastify'
import ModalDataEntery from './ModalDataEntery'

function TableHeading({ siteinfo }) {
    const { siteName, siteAddress, siteContactNumber, siteNote } = siteinfo
    return (
        <div className="tableInfoHeader">
            <div>
                <p className="tableinfoheader_p siteInfo">Site Information</p>
            </div>
            <div className="tableInfo_sectionTwo">
                <p className="tableinfoheader_p">Name: {siteName}</p>
                <p className="tableinfoheader_p">Adds: {siteAddress}</p>
                <p className="tableinfoheader_p">Contact: {siteContactNumber}</p>
            </div>
            <p className="tableinfoheader_p">Note: {siteNote}</p>
        </div>
    )
}


function OneSite() {
    const [recordInfo] = useState({});
    const navigation = useNavigate();
    const [show, setShow] = useState(false);
    const value = useContext(DataContext)
    const { data} = value

    useEffect(() => {
        if(data.length===0 || data.length===null){
            navigation('/')
        }
    }, [])

    const columns = [
        { title: "Computer Type", field: "type",defaultGroupOrder: 0 },
        {
            title: "Computer Desc",
            field: "location",
            render: rowData => <div>Location: {rowData.location}</div>,
        },
        {
            title: "Hardware Details", field: "hardware",
            render: rowData => <div className="rowgak">


                <p>CPU: {rowData.CPU}</p>
                <p>HDD: {rowData.HDD}</p>
                <p>Graphic: {rowData.Graphic}</p>
                <p>DVDDrive: {rowData.DVDDrive}</p>
                <p>Power Supply: {rowData.PowerSupply}</p>
                <p>Power Set To Never: {rowData.PowerSettoNever}</p>
                <p>Src File: {rowData.sourceFile}</p>
                <p>Raid Level: {rowData.RaidLevel}</p>
                <p>Notes: {rowData.Notes}</p>
            </div>,
        },
        {
            title: "OS", field: "data",

            render: rowData => <div className="rowgak">{rowData.OS.map(os => {
                return (
                    <div >
                        <p>OS Name: {os.OSname}</p>
                        <p>OS Version: {os.OSVersion}</p>
                        <p>OS UpdateInsatlled: {os.UpdateInstalled}</p>
                        <p>OS Updated Turn Off: {os.UpdateTurnedOff}</p>
                    </div>
                )
            })}</div>,
        },
        {
            title: "Apps", field: "fname",
            render: rowData => <div className="rowgak">{rowData.apps.map(app => {
                return (
                    <div >
                        <p>Apps Name: {app.appsName}</p>
                        <p>Apps Version: {app.appsVersion}</p>
                    </div>
                )
            })}</div>,
        },
        {
            title: "Network", field: "data",
            render: rowData => <div className="rowgak">{rowData.network.map(net => {
                return (
                    <div>
                        <div>

                            <p>IP: {net.IP}</p>
                            <p>Subnet Mask: {net.subnetMask}</p>
                            <p>Gateway: {net.gateway}</p>
                        </div>
                    </div>
                )
            })}</div>,
        },
        {
            title: "Accounts Details", field: "fname",
            width: "80%",
            render: rowData => <div className="rowgak">{rowData.OS.map(os => {
                return (
                    <div>
                        <p>OS </p>
                        <p>User Name: {os.UserName}</p>
                        <p>Password: {os.password}</p>

                        <div>
                            {rowData.apps.map(app => {
                                return (
                                    <div>
                                        <p>Apps </p>
                                        <p>User Name: {app.appsUserName}</p>
                                        <p>Password: {app.appsPassword}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            {rowData.DB.map(db => {
                                return (
                                    <div>
                                        <p>DB</p>
                                        <p>SA Password: {db.DBsaPassword}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}</div>,
        },

        { title: "Make Model", field: "MakeModel" },
        { title: "TAG #", field: "ServiceTagSerialNo" },
        { title: "Notes", field: "Notes" },
    ]



    const downloadPDF = () => {
        axios
            .get(`https://servicemanagementsystem.herokuapp.com/api/pdf/${data.siteName}`, {
                responseType: 'blob',
            })
            .then(response => {
                if (response.data.notfound) {
                    toast.info(response.data.notfound)
                }
                else if (response.data.foundError) {
                    toast.info(response.data.foundError)
                } else {
                    var url = window.URL.createObjectURL(response.data)
                    var a = document.createElement('a')
                    a.href = url
                    a.download = data.siteName
                    a.click()
                    a.remove()
                    setTimeout(() => window.URL.revokeObjectURL(url), 100)
                }

            })
            .catch(error => console.log(error));

    }


    return (
        <>
            {data &&
                <MaterialTable
                    className="mutable"
                    title={<TableHeading siteinfo={data} />}
                    columns={columns}
                    data={data.hardware}
                    actions={[{
                        icon: () => <SaveAlt />,
                        label: "Export PDF",
                        tooltip: "Export PDF",
                        onClick: downloadPDF,
                        isFreeAction: true

                    }, {
                        icon: () => <AddBox />,
                        label: "Add New Hardware",
                        tooltip: "Add Hardware to This Site",
                        onClick: () => setShow(true),
                        isFreeAction: true,
                    }]}
                    options={{
                          fixedColumns: {
                            left: 2, 
                            right: 1
                        },
                        cellStyle: {
                            width: 300,
                            minWidth: 300
                        },
                        headerStyle: {
                            width: 300,
                            minWidth: 300,
                            backgroundColor: '#01579b',
                            color: '#FFF'
                        },
                        rowStyle: {
                            width: "200px",
                            backgroundColor: '#EEE',
                        },
                        exportButton: false,


                    }}

                    icons={tableIcons}

                    


                />} 
            <ModalDataEntery show={show} setShow={setShow} recordInfo={recordInfo} />
            <ToastContainer />
        </>
    )
}



export default OneSite
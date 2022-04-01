
import React, { useContext, useState, forwardRef, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { DataContext } from './Context'
import MaterialTable from 'material-table'
import '../styles/common.css'
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

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
const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

function OneSite() {
    let navgiation = useNavigate()
    const value = useContext(DataContext)
    const { data } = value
    const [tableData, settableData] = useState();
    useEffect(() => {
        console.log(data)
        const tabledatas = [{
            type: data.type,
            ServiceTagSerialNo:
                data.ServiceTagSerialNo,
            MakeModel: data.MakeModel,
        }]

        settableData(tabledatas)
    }, [])

    const columns = [
        { title: "Computer Type", field: "type", defaultGroupOrder: 0 },
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


    if (data === '') {
        navgiation('/')
    }

    return (

        <MaterialTable
            className="mutable"
            title={<TableHeading siteinfo={data} />}
            columns={columns}
            data={data.hardware}
            options={{
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
                exportButton: {
                    tooltip: 'Save User',
                    csv: true,
                    pdf: true,
                },
                exportPdf: (columns, data) => {
                    alert('You should develop a code to export ' + data.length + ' rows');
                },
                exportCsv: (columns, data) => {
                    alert('You should develop a code to export ' + data.length + ' rows');
                }
            }}

            icons={tableIcons}

        />
    )
}

export default OneSite
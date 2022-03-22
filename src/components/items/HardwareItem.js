import React, { useEffect, useState } from 'react'
import '../../styles/hardwareitems.css'
import axios from 'axios'



function HardwareItems({ URL ,data,setData}) {

    const [Open, setOpen] = useState({
        id: "",
        Statue: "",
        Type: "",
    });
    const handleAccordion = (e) => {
        setOpen({
            id: e.id,
            Statue: e.Statue,
        })
    }
    const [editForm, setEditForm] = useState({
        MakeModel: "",
        ServiceTagSerialNo: "",
        CPU: "",
        RAM: "",
        HDD: "",
        Graphic: "",
        DVDDrive: "",
        PowerSupply: "",
        PowerSettoNever: "",
        Apps: {
            Name: "",
            Version: "",
        },
        UpdateInstalled: {
            Status: "",
            Type: "",
            DateOfInstalled: "",
        },
        Credentials: "",

    })
    const [confirmOpen, setconfirmOpen] = useState(false);
   
    useEffect(() => {
        async function fetchData() {
            axios.get(URL).then(
                (response) => {
                    setData(response.data)
                    console.log(response.data)
                }
            ).catch(err => {
                console.log(err)
            });
        }
        fetchData();
    }, [])
    const handleDelete = (e) => {
        setconfirmOpen(e)
    }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;


        if (name == 'MakeModel' ||
            name == 'ServiceTagSerialNo'
            || name == "CPU" ||
            name == 'RAM'
            ||
            name == 'HDD'
            ||
            name == 'Graphic'
            ||
            name == 'DVDDrive'
            || name == 'PowerSupply'
            || name == 'PowerSettoNever'
        ) {
            setEditForm({ ...editForm, [name]: value })
        } else if (name == 'Status' || name == 'Type' || name == "DateOfInstalled") {

            setEditForm({
                ...editForm,
                UpdateInstalled: {
                    ...editForm.Rights,
                    [name]: value
                }
            })
        }
    }
    const handleEdit = (e) => {
        const oneItem = data.find(x => x._id == e.id)
        setconfirmOpen(e)
        setEditForm(oneItem)
    }
    const handleCancel = () => {
        setconfirmOpen(false)
    }
    return (
        <>

            {data && data.map((data) => {
                return (
                    <div key={data._id} className='itemCardsHardware'>
                        <div className='itemBodyhw'>
                            <div className='grouphardware'>
                                <div>
                                    <span className='confirmType'>Model: </span>
                                    <input className='cardItemInput'
                                        onChange={handleChange}
                                        disabled={confirmOpen.type == "Edit" && confirmOpen.id == data._id ? null : 'disabled'}
                                        value={confirmOpen.id == data._id ? editForm.MakeModel : data.MakeModel} name="MakeModel"
                                        type="text"
                                    />
                                </div>
                                <div>

                                    <span className='confirmType'>Serial No: </span>
                                    <input className='cardItemInput' onChange={handleChange}
                                        disabled={confirmOpen.type === "Edit" && confirmOpen.id === data._id ? null : 'disabled'}
                                        value={confirmOpen.id === data._id ? editForm.ServiceTagSerialNo : data.ServiceTagSerialNo} name="ServiceTagSerialNo"
                                        type="text" />
                                </div>
                                <div>

                                    <span className='confirmType'>Contact #: </span>
                                    <input className='cardItemInput'
                                        onChange={handleChange}
                                        disabled={confirmOpen.type === "Edit" && confirmOpen.id === data._id ? null : 'disabled'}
                                        value={confirmOpen.id === data._id ? editForm.ContactNumber : data.ContactNumber} name="ContactNumber"
                                        type="text"
                                    />
                                </div>
                                <div>
                                    <span className='confirmType'>CPU: </span>
                                    <input className='cardItemInput'
                                        onChange={handleChange}
                                        disabled={confirmOpen.type === "Edit" && confirmOpen.id === data._id ? null : 'disabled'}
                                        value={confirmOpen.id === data._id ? editForm.CPU : data.CPU} name="CPU"
                                        type="text"
                                    />

                                </div>
                                <div>
                                    <span className='confirmType'>RAM: </span>
                                    <input className='cardItemInput'
                                        onChange={handleChange}
                                        disabled={confirmOpen.type === "Edit" && confirmOpen.id === data._id ? null : 'disabled'}
                                        value={confirmOpen.id === data._id ? editForm.RAM : data.RAM} name="RAM"
                                        type="text"
                                    />

                                </div>
                                <div>
                                    <span className='confirmType'>Graphic: </span>
                                    <input className='cardItemInput'
                                        onChange={handleChange}
                                        disabled={confirmOpen.type === "Edit" && confirmOpen.id === data._id ? null : 'disabled'}
                                        value={confirmOpen.id === data._id ? editForm.Graphic : data.Graphic} name="Graphic"
                                        type="text"
                                    />

                                </div>
                                <div>
                                    <span className='confirmType'>DVDDrive: </span>
                                    <input className='cardItemInput'
                                        onChange={handleChange}
                                        disabled={confirmOpen.type === "Edit" && confirmOpen.id === data._id ? null : 'disabled'}
                                        value={confirmOpen.id === data._id ? editForm.DVDDrive : data.DVDDrive} name="DVDDrive"
                                        type="text"
                                    />

                                </div>
                                <div>
                                    <span className='confirmType'>Power Supply: </span>
                                    <input className='cardItemInput'
                                        onChange={handleChange}
                                        disabled={confirmOpen.type === "Edit" && confirmOpen.id === data._id ? null : 'disabled'}
                                        value={confirmOpen.id === data._id ? editForm.PowerSupply : data.PowerSupply} name="PowerSupply"
                                        type="text"
                                    />

                                </div>
                                <div>
                                    <span className='confirmType'>Power Set to Never: </span>
                                    <input className='cardItemInput'
                                        onChange={handleChange}
                                        disabled={confirmOpen.type === "Edit" && confirmOpen.id === data._id ? null : 'disabled'}
                                        value={confirmOpen.id === data._id ? editForm.PowerSettoNever : data.PowerSettoNever} name="PowerSettoNever"
                                        type="text"
                                    />

                                </div>
                            </div>
                            <div className='secondGroupHw'>
                                <div>
                                    <div className='hardwareAccordion' onClick={() => setOpen({
                                        id: data._id,
                                        Statue: !Open.Statue,
                                        Type: "UI"
                                    })}>

                                        <span className='confirmType'>Update Installed: </span>
                                        <div className='hardwareAccordionIcon'>{Open ? "+" : "-"}</div>
                                    </div>
                                    {Open.id == data._id && Open.Statue && Open.Type === "UI" && data.UpdateInstalled.map((UI) => {
                                        return (
                                            <div className='credGroups'>
                                                <span>Status: </span>
                                                <input className='cardItemInput'
                                                    onChange={handleChange}
                                                    disabled={confirmOpen.type === "Edit" && confirmOpen.id === data._id ? null : 'disabled'}
                                                    value={confirmOpen.id === data._id ? editForm.UpdateInstalled.Status : UI.Status} name="Status"
                                                    type="text"
                                                />

                                                <span>Date of Installed: </span>
                                                <input className='cardItemInput'
                                                    onChange={handleChange}
                                                    disabled={confirmOpen.type === "Edit" && confirmOpen.id === data._id ? null : 'disabled'}
                                                    value={confirmOpen.id === data._id ? editForm.UpdateInstalled.DateOfInstalled : UI.DateOfInstalled} name="DateOfInstalled"
                                                    type="text"
                                                />
                                                <span>Type:</span>
                                                <input className='cardItemInput'
                                                    onChange={handleChange}
                                                    disabled={confirmOpen.type === "Edit" && confirmOpen.id === data._id ? null : 'disabled'}
                                                    value={confirmOpen.id === data._id ? editForm.UpdateInstalled.Type : UI.Type} name="Type"
                                                    type="text"
                                                />


                                            </div>
                                        )
                                    })}


                                </div>
                                <div>
                                    <div className='hardwareAccordion' onClick={() => setOpen({
                                        id: data._id,
                                        Statue: !Open.Statue,
                                        Type: "Credentials"
                                    })}>

                                        <span className='confirmType'>Credentials: </span>
                                        <div className='hardwareAccordionIcon'>{Open ? "+" : "-"}</div>
                                    </div>


                                    {Open.id == data._id && Open.Statue && Open.Type === "Credentials" && data.Credentials.map((cred) => {
                                        return (
                                            <div className='credGroups'>
                                                <span>Apps Name: </span>
                                                <span>{cred.AppsName.Name}</span>
                                                <span>Apps Version: </span>
                                                <span>{cred.AppsName.Version}</span>
                                                <span>User Name:</span>
                                                <span>{cred.UserName}</span>
                                                <span>Password: </span>
                                                <span>{cred.Password}</span>
                                            </div>
                                        )
                                    })}

                                </div>
                                <div>

                                    <div className='hardwareAccordion' onClick={() => setOpen({
                                        id: data._id,
                                        Statue: !Open.Statue,
                                        Type: "Apps"
                                    })}>

                                        <span className='confirmType'>Apps:  </span>
                                        <div className='hardwareAccordionIcon'>{Open ? "+" : "-"}</div>
                                    </div>
                                    {Open.id == data._id && Open.Statue && Open.Type === "Apps" && data.Apps.map((App) => {
                                        return (
                                            <div className='credGroups'>
                                                <span>Name: </span>
                                                <input className='cardItemInput'
                                                    onChange={handleChange}
                                                    disabled={confirmOpen.type === "Edit" && confirmOpen.id === data._id ? null : 'disabled'}
                                                    value={confirmOpen.id === data._id ? editForm.Apps.Name : App.Name} name="Name"
                                                    type="text"
                                                />

                                                <span>Version: </span>
                                                <input className='cardItemInput'
                                                    onChange={handleChange}
                                                    disabled={confirmOpen.type === "Edit" && confirmOpen.id === data._id ? null : 'disabled'}
                                                    value={confirmOpen.id === data._id ? editForm.Apps.Version : App.Version} name="Version"
                                                    type="text"
                                                />
                                                <button>Remove</button>
                                            </div>
                                        )
                                    })}

                                </div>
                            </div>
                        </div>
                        <div className='itemOptions'>
                            <ul>
                                <button onClick={() => handleDelete({ id: data._id, type: "Delete" })}>Delete</button>
                                <button onClick={() => handleEdit({ id: data._id, type: "Edit" })}>Edit</button>
                                <button onClick={() => handleDelete({ id: data._id, type: "Share" })}>Share</button>
                                <button onClick={() => handleDelete({ id: data._id, type: "Print" })}>Print</button>
                            </ul>
                        </div>
                        {confirmOpen.id === data._id &&
                            <div className='Confirmation'>
                                <p>want to <span className='confirmType'>{confirmOpen.type}</span>? </p>
                                <button>Yes/Sure</button>
                                <button onClick={handleCancel}>No/Cancel</button>
                            </div>
                        }

                    </div>
                )
            })}

        </>
    )
}


export default HardwareItems
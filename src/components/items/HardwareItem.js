import React, { useEffect, useState } from 'react'
import '../../styles/itemCards.css'
import axios from 'axios'
function HardwareItems({ URL }) {


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
        Apps: "",
        UpdateInstalled: "",
        Credentials: "",

    })
    const [confirmOpen, setconfirmOpen] = useState(false);
    const [data, setData] = useState();
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
        setEditForm({ ...editForm, [name]: value })
        console.log(editForm)
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
                    <div key={data._id} className='itemCards'>
                        <div className='itemBody'>

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

                            <div>
                                <span className='confirmType'>Update Installed: </span>
                                <input className='cardItemInput'
                                    onChange={handleChange}
                                    disabled={confirmOpen.type === "Edit" && confirmOpen.id === data._id ? null : 'disabled'}
                                    value={confirmOpen.id === data._id ? editForm.UpdateInstalled : data.UpdateInstalled} name="UpdateInstalled"
                                    type="text"
                                />

                            </div>
                            <div>
                                <span className='confirmType'>Credentials: </span>
                                <input className='cardItemInput'
                                    onChange={handleChange}
                                    disabled={confirmOpen.type === "Edit" && confirmOpen.id === data._id ? null : 'disabled'}
                                    value={confirmOpen.id === data._id ? editForm.Credentials : data.Credentials} name="Credentials"
                                    type="text"
                                />

                            </div>
                            <div>
                                <span className='confirmType'>Apps: </span>
                                <input className='cardItemInput'
                                    onChange={handleChange}
                                    disabled={confirmOpen.type === "Edit" && confirmOpen.id === data._id ? null : 'disabled'}
                                    value={confirmOpen.id === data._id ? editForm.Apps : data.Apps} name="Apps"
                                    type="text"
                                />

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
import React, { useEffect, useState } from 'react'
import '../../styles/itemCards.css'
import axios from 'axios'
function SiteItems({ URL }) {


    const [editForm, setEditForm] = useState({
        Name: "",
        Address: "",
        ContactNumber: "",
        Hardware: "",
        Note: "",
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
                                <span className='confirmType'>Name: </span>
                                <input className='cardItemInput'
                                    onChange={handleChange}
                                    disabled={confirmOpen.type == "Edit" && confirmOpen.id == data._id ? null : 'disabled'}
                                    value={confirmOpen.id == data._id ? editForm.Name : data.Name} name="Name"
                                    type="text"
                                />
                            </div>
                            <div>

                                <span className='confirmType'>Address: </span>
                                <input className='cardItemInput' onChange={handleChange}
                                    disabled={confirmOpen.type === "Edit" && confirmOpen.id === data._id ? null : 'disabled'}
                                    value={confirmOpen.id === data._id ? editForm.Address : data.Address} name="Address"
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
                                <span className='confirmType'>Hardware: </span>
                                <input className='cardItemInput'
                                    onChange={handleChange}
                                    disabled={confirmOpen.type === "Edit" && confirmOpen.id === data._id ? null : 'disabled'}
                                    value={confirmOpen.id === data._id ? editForm.Hardware : data.Hardware} name="Hardware"
                                    type="text"
                                />

                            </div>
                            <div>
                                <span className='confirmType'>Note: </span>
                                <input className='cardItemInput'
                                    onChange={handleChange}
                                    disabled={confirmOpen.type === "Edit" && confirmOpen.id === data._id ? null : 'disabled'}
                                    value={confirmOpen.id === data._id ? editForm.Note : data.Note} name="Note"
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

export default SiteItems
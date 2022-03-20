import React, { useEffect, useState } from 'react'
import '../../styles/itemCards.css'
import axios from 'axios'
function UserItemsCard({ URL }) {


    const [editForm, setEditForm] = useState({
        Name: "",
        ID: "",
        Password: "",
        Rights: {
            Read: "",
            Write: "",
            Execute: "",
        },
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
    const handleYes = () => {

        console.log(editForm)
    }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        if (name == 'Name' || name == 'ID' || name == "Password") {
            setEditForm({ ...editForm, [name]: value })
        } else if (name == 'Read' || name == 'Write' || name == 'Execute') {

            setEditForm({
                ...editForm,
                Rights: {
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

                                <span className='confirmType'>ID: </span>
                                <input className='cardItemInput' onChange={handleChange}
                                    disabled={confirmOpen.type === "Edit" && confirmOpen.id === data._id ? null : 'disabled'}
                                    value={confirmOpen.id === data._id ? editForm.ID : data.ID} name="ID"
                                    type="text" />
                            </div>
                            <div>
                                <span className='confirmType'>Rights: </span>
                                <label>Read</label>
                                <input className='cardItemInput'
                                    onChange={handleChange}
                                    disabled={confirmOpen.type === "Edit" && confirmOpen.id === data._id ? null : 'disabled'}
                                    value={confirmOpen.id === data._id ? editForm.Rights.Read : data.Rights.Read} name="Read"
                                    type="text"
                                />
                                <label>Write</label>
                                <input className='cardItemInput'
                                    onChange={handleChange}
                                    disabled={confirmOpen.type === "Edit" && confirmOpen.id === data._id ? null : 'disabled'}
                                    value={confirmOpen.id === data._id ? editForm.Rights.Write : data.Rights.Write} name="Write"
                                    type="text"
                                />
                                <label>Execute</label>
                                <input className='cardItemInput'
                                    onChange={handleChange}
                                    disabled={confirmOpen.type === "Edit" && confirmOpen.id === data._id ? null : 'disabled'}
                                    value={confirmOpen.id === data._id ? editForm.Rights.Execute : data.Rights.Execute} name="Execute"
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
                                <button onClick={handleYes}>Yes/Sure</button>
                                <button onClick={handleCancel}>No/Cancel</button>
                            </div>
                        }

                    </div>
                )
            })}

        </>
    )
}

export default UserItemsCard
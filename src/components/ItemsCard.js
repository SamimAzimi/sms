import React, { useEffect, useState } from 'react'
import '../styles/itemCards.css'
import axios from 'axios'
function ItemsCard() {


    const [editForm, setEditForm] = useState({
        Name: "",
        Version: "",
        Type: "",
        License: "",
    })
    const [confirmOpen, setconfirmOpen] = useState(false);
    const [data , setData] = useState();
    useEffect(async()=>{
         await axios.get('http://localhost:4000/api/allApps').then(
                (response) => {
                    setData(response.data)
                    console.log(response.data)
                }
            ).catch(err => {
                console.log(err)
            });
    },[])
const handleDelete =(e)=>{
    setconfirmOpen(e)
}
const handleChange =(e)=>{
    const name = e.target.name;
    const value = e.target.value; 
    setEditForm({...editForm, [name]:value})
    console.log(editForm) 
}
const handleEdit=(e) =>{
    const oneItem = data.find(x => x._id == e.id)
    setconfirmOpen(e)
    setEditForm(oneItem)
}
const handleCancel =()=>{
    setconfirmOpen(false)
}
  return (
      <>
    
      {data && data.map((data)=>{
          return (
        <div key={data._id} className='itemCards'>
    <div className='itemBody'>
      
       <div>
         <span className='confirmType'>App: </span><input className='cardItemInput' disabled={confirmOpen.type == "Edit" && confirmOpen.id===data._id ? null:'disabled'} type="text"  enable value={data.Name} />
        </div>
        <div>

        <span className='confirmType'>Version: </span><input className='cardItemInput' onChange={handleChange} disabled={confirmOpen.type == "Edit" && confirmOpen.id===data._id ?  null:'disabled'} value={confirmOpen.id == data._id ? editForm.Version : data.Version} name="Version" type="text"  enable  />
        </div>
        <div>

        <span className='confirmType'>Type: </span><input className='cardItemInput' type="text" disabled={confirmOpen.type == "Edit" && confirmOpen.id===data._id ? null:'disabled'} enable value={data.Type} />
        </div>
        <div>
        <span className='confirmType'>License: </span><input className='cardItemInput'  disabled={confirmOpen.type == "Edit" && confirmOpen.id===data._id ? null:'disabled'} value={data.License} />

        </div>
    </div>  
    <div className='itemOptions'>
        <ul>
            <button onClick={()=>handleDelete({id:data._id, type:"Delete"})}>Delete</button>
            <button  onClick={()=>handleEdit({id:data._id, type:"Edit"})}>Edit</button>
            <button  onClick={()=>handleDelete({id:data._id, type:"Share"})}>Share</button>
            <button onClick={()=>handleDelete({id:data._id, type:"Print"})}>Print</button>
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

export default ItemsCard
import React, { useState } from 'react'
import Searchbar from './Searchbar'
import UserItem from './items/UserItem'
function User() {
    const [data, setData] = useState();
    return (
        <section className='userPage'>
            <Searchbar ArrayOptions={["ID", "Name", "Read", "Write", "Execute"]} setData={setData} />
            <div className='itemContainers'>
                <UserItem URL={"https://servicemanagementsystem.herokuapp.com/api/allUsers"} data={data} setData={setData} />
            </div>
        </section>
    )
}

export default User
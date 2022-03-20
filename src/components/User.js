import React from 'react'
import Searchbar from './Searchbar'
import UserItem from './items/UserItem'
function User() {
    return (
        <section className='userPage'>
            <Searchbar ArrayOptions={["ID", "Name", "Read", "Write", "Execute"]} />
            <div className='itemContainers'>
                <UserItem URL={"http://localhost:4000/api/allUsers"} />
            </div>
        </section>
    )
}

export default User
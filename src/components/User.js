import React from 'react'
import Searchbar from './Searchbar'
function User() {
    return (
        <section className='userPage'>
        <Searchbar ArrayOptions={["ID","Name", "Read","Write","Execute"]}/>
        </section>
    )
}

export default User
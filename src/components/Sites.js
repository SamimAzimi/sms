import React from 'react'
import Searchbar from './Searchbar'
function Sites() {
    return (
        <section className='sitesPage'>
        <Searchbar ArrayOptions={["Name","Address", "ContactNumber","Hardware","Note"]}/>
            <div>Sites</div>
        </section>
    )
}

export default Sites
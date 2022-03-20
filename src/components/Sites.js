import React from 'react'
import Searchbar from './Searchbar'
import SiteItems from './items/SiteItems'
function Sites() {
    return (
        <section className='sitesPage'>
            <Searchbar ArrayOptions={["Name", "Address", "ContactNumber", "Hardware", "Note"]} />
            <div className='itemContainers'>
                <SiteItems URL={"http://localhost:4000/api/allSites"} />
            </div>
        </section>
    )
}

export default Sites
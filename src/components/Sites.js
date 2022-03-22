import React, { useState } from 'react'
import Searchbar from './Searchbar'
import SiteItems from './items/SiteItems'
function Sites() {
    const [data, setData] = useState();
    return (
        <section className='sitesPage'>
            <Searchbar ArrayOptions={["Name", "Address", "ContactNumber", "Hardware", "Note"]} setData={setData} />
            <div className='itemContainers'>
                <SiteItems URL={"https://servicemanagementsystem.herokuapp.com/api/allSites"} data={data} setData={setData} />
            </div>
        </section>
    )
}

export default Sites
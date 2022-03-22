import React, { useState } from 'react'
import SearchBar from './Searchbar.js'
import ItemCards from './items/AppsItemsCard'

function Apps() {
    const [data, setData] = useState();

    return (
        <section className="appPage">
            <SearchBar ArrayOptions={["Name", "Type", "Version", "License"]} setData={setData} />
            <div className='itemContainers'>
                <ItemCards URL={"https://servicemanagementsystem.herokuapp.com/api/allApps"} data={data} setData={setData} />
            </div>
        </section>
    )
}

export default Apps
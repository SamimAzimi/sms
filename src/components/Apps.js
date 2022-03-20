import React from 'react'
import SearchBar from './Searchbar.js'
import ItemCards from './items/AppsItemsCard'

function Apps() {
    return (
        <section className="appPage">
            <SearchBar ArrayOptions={["Name", "Type", "Version", "License"]} />
            <div className='itemContainers'>
                <ItemCards URL={"http://localhost:4000/api/allApps"} />
            </div>
        </section>
    )
}

export default Apps
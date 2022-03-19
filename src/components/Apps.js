import React from 'react'
import SearchBar from './Searchbar.js'
import ItemCards from './ItemsCard'

function Apps() {
    return (
        <section className="appPage">
        <SearchBar ArrayOptions={["Name", "Type", "Version", "License"]}/>
        <div className='itemContainers'>
        <ItemCards />
        </div>
        </section>
    )
}

export default Apps
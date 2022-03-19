import React from 'react'
import Searchbar from './Searchbar'
function Hardware() {
    return (
        <section className='hardwarePage'>
        <Searchbar ArrayOptions={["MakeModel", "SerialNo", "CPU", "RAM","Graphic", "DVDDrive", "PowerSupply", "PowerSettoNever", "Apps"]}/>

            <div>Hardware</div>
        </section>
    )
}

export default Hardware
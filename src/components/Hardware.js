import React from 'react'
import Searchbar from './Searchbar'
import HardwareItems from './items/HardwareItem'
function Hardware() {
    return (
        <section className='hardwarePage'>
            <Searchbar ArrayOptions={["MakeModel", "SerialNo", "CPU", "RAM", "Graphic", "DVDDrive", "PowerSupply", "PowerSettoNever", "Apps"]} />

            <div className='itemContainers'>
                <HardwareItems URL={"http://localhost:4000/api/allHardwares"} />
            </div>
        </section>
    )
}

export default Hardware
import React, { useState } from 'react'
import Searchbar from './Searchbar'
import HardwareItems from './items/HardwareItem'
function Hardware() {
    const [data, setData] = useState();
    return (
        <section className='hardwarePage'>
            <Searchbar ArrayOptions={["MakeModel", "SerialNo", "CPU", "RAM", "Graphic", "DVDDrive", "PowerSupply", "PowerSettoNever", "Apps"]} setData={setData} />

            <div className='itemContainers'>
                <HardwareItems URL={"https://servicemanagementsystem.herokuapp.com/api/allHardwares"} data={data} setData={setData} />
            </div>
        </section>
    )
}

export default Hardware
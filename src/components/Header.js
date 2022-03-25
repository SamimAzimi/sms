import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMagnifyingGlass,

} from '@fortawesome/free-solid-svg-icons';
function Header({ toggle, setToggle, toggleMenu, setToggleMenue }) {


    const handleNewClick = () => {
        if (toggle) {
            setToggle(false)
        }
        if (!toggleMenu) {
            setToggleMenue(true)
        }
    }

    const handleSearch = () => {

        setToggle(!toggle)
        if (toggleMenu) {
            setToggleMenue(false)
        }
    }
    return (
        <>
            <div class="input-group flex-nowrap p-3">
                <span onClick={handleSearch} class="input-group-text" id="addon-wrapping">
                    <button type="button" class="btn btn-primary">{toggle ? "Close Search" : "Search"}</button>
                </span>
                {toggle &&
                    <>
                        <span class="input-group-text" id="addon-wrapping">
                            <select class="form-select" selected="false" aria-label="Default search query selction">
                                <option value="1">Site Name</option>
                                <option value="2">Site Contact</option>
                                <option value="3">Hardware Model</option>
                                <option value="3">Hardware Serial Number</option>
                                <option value="3">Apps Name</option>
                                <option value="3">Apps Version</option>
                                <option value="3">Last Record</option>
                                <option value="3">First Record</option>
                            </select>
                        </span>
                        <input type="text" class="form-control" placeholder="Enter The Search Query" aria-label="Username" aria-describedby="addon-wrapping" />
                        <span class="input-group-text" > <button type="button" class="btn btn-primary btn-outline-danger" accessKey="Enter"><FontAwesomeIcon icon={faMagnifyingGlass} /></button></span>
                    </>
                }
                <span class="input-group-text" id="addon-wrapping">
                    <button onClick={handleNewClick} type="button" class="btn btn-primary">New</button>
                </span>
            </div>
        </>

    )
}

export default Header
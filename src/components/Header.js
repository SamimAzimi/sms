import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMagnifyingGlass,

} from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
function Header({ toggle, setToggle, toggleMenu, setToggleMenue, setSpinner, setData }) {
    const [searchQuery, setSearchQuery] = useState()
    const [options, setOptions] = useState();


    const handleNewClick = () => {
        if (toggle) {
            setToggle(false)
        }
        if (!toggleMenu) {
            setToggleMenue(true)
        }
    }
    const handleSearchClick = () => {
        setSpinner(true)
        if (options === undefined || searchQuery === "") {
            toast.info("Please Select an Option and fill the Search box", {
                position: toast.POSITION.TOP_LEFT
            })
            setSpinner(false)
        }
        if (options === "0") {
            axios.get('https://servicemanagementsystem.herokuapp.com/api/allRecords').then(res => {
                if (res.data.notfound) {
                    toast.info(res.data.notfound)
                }
                else {

                    setData(res.data)
                }
                setSpinner(false)
            }).catch(err => {
                console.log(err)
            })

        }
        if (options === "1" && searchQuery) {
            axios.post('https://servicemanagementsystem.herokuapp.com/api/recordName', { siteName: searchQuery }).then(res => {

                if (res.data.notfound) {

                    toast.info(res.data.notfound)
                }
                else {

                    setData(res.data)
                }
                setSpinner(false)
            }).catch(err => {
                console.log(err)
            })

        } else {
            const validating = validate(searchQuery, options)
            if (validating) {
                axios.post('https://servicemanagementsystem.herokuapp.com/api/options', { options: options, query: searchQuery }).then(res => {

                    if (res.data.notfound) {
                        toast.info(res.data.notfound)
                    }
                    else {

                        setData(res.data)
                    }
                    setSpinner(false)
                }).catch(err => {
                    console.log(err)
                })
            } else {
                toast.info('Please Enter Number While Selecting This Option')
                setSpinner(false)
            }

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
                            <select value={options} onChangeCapture={e => setOptions(e.target.value)} class="form-select" aria-label="Default search query selction">
                                <option value="">select an option</option>
                                <option value="0">TOP 100 Records</option>
                                <option value="1">Site Name</option>
                                <option value="2">Site Contact</option>
                                <option value="3">Hardware Model</option>
                                <option value="4">Hardware Serial Number</option>
                                <option value="5">Apps Name</option>
                                <option value="6">Apps Version</option>
                            </select>
                        </span>
                        <input type="text" value={searchQuery} disabled={options === 0 ? true : false} onChange={e => setSearchQuery(e.target.value)} class="form-control" placeholder="Enter The Search Query" aria-label="Username" aria-describedby="addon-wrapping" />
                        <span class="input-group-text" > <button type="button" onClick={handleSearchClick} class="btn btn-primary btn-outline-danger"><FontAwesomeIcon icon={faMagnifyingGlass} /></button></span>
                    </>
                }
                <span class="input-group-text" id="addon-wrapping">
                    <button onClick={handleNewClick} type="button" class="btn btn-primary">New</button>
                </span>
            </div>
            <ToastContainer />
        </>

    )
}


function validate(searchQuery, options) {
    if (typeof (searchQuery) === 'string' && options !== 2) {
        return true;
    }
    else {
        return false
    }
}


export default Header
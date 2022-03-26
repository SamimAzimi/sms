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
            setData('')
            setToggle(false)
        }
        if (!toggleMenu) {
            setData('')
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

        } if (options === "2" && searchQuery) {
            if (typeof (options) !== "string") {
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
                toast.info("Please Enter A Numerical Value in Search Box")
                setSpinner(false)
            }

        }
        else {

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


        }

    }
    const handleSearch = () => {

        setToggle(!toggle)
        if (toggleMenu) {
            setToggleMenue(false)
        }
    }

    const handleOptionChange = (e) => {
        setOptions(e)
        setData('')
    }


    return (
        <>
            <div class="input-group flex-nowrap p-3">
                <span onClick={handleSearch} class="input-group-text" id="addon-wrapping">
                    <button type="button" class="btn btn-primary" onClick={() => setData('')}>{toggle ? "Close Search" : "Search"}</button>
                </span>
                {toggle &&
                    <>
                        <span class="input-group-text" id="addon-wrapping">
                            <select value={options} onChangeCapture={e => handleOptionChange(e.target.value)} class="form-select" aria-label="Default search query selction">
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





export default Header
import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMagnifyingGlass,

} from '@fortawesome/free-solid-svg-icons';
import SiteModal from './SiteModal'
import { toast, ToastContainer } from 'react-toastify';
import '../styles/common.css'
import axios from 'axios';
import { DataContext } from './Context'
import { Navbar, Container, } from 'react-bootstrap';
function Header() {
    const value = useContext(DataContext)
    const { setSpinner, spinner, setSearchData, setData } = value

    const [showSite, setShowSite] = useState()
    const [searchQuery, setSearchQuery] = useState('')
    const [options, setOptions] = useState('1');

    let navigation = useNavigate();
    const handleNewClick = () => {
        setShowSite(true)

    }

    const handleSearchClick = () => {
        if (options === "1") {
            if (searchQuery.length === 0) {

                toast.error('Please Enter Site Name', {
                    position: toast.POSITION.TOP_LEFT
                })
            } else {
                setSpinner(true)
                axios.post('https://servicemanagementsystem.herokuapp.com/api/siteName ', { siteName: searchQuery }).then(res => {
                    if (res.data.notfound) {
                        toast.info(res.data.notfound, {
                            position: toast.POSITION.TOP_LEFT
                        })
                        setData('')
                        setSpinner(false)
                    }
                    else if (res.data.found) {

                        setData(res.data.found)
                        setSpinner(false)
                        navigation('/oneSite')

                    } else if (res.data.foundError) {
                        setData('')

                        toast.error('error', {
                            position: toast.POSITION.TOP_LEFT
                        })
                        setSpinner(false)
                    }

                }).catch(err => {
                    console.log(err)
                    setSpinner(false)
                })
            }
        }
        else if (options === "2") {
            setSpinner(true)
            axios.get('https://servicemanagementsystem.herokuapp.com/api/allRecords').then(res => {
                if (res.data.notfound) {
                    toast.info(res.data.notfound, {
                        position: toast.POSITION.TOP_LEFT
                    })
                    setSpinner(false)

                }
                else {

                    setSearchData(res.data)
                    setSpinner(false)
                    navigation('/searchResult')
                }

            }).catch(err => {
                console.log(err)
                setSpinner(false)
            })

        }

    }


    const handleOptionChange = (e) => {
        setOptions(e)
        setData('')
        setSearchQuery('')
        navigation('/')
    }



    return (
        <>
            <Navbar className='coloralter' expand="lg">
                <Container fluid>
                    <Navbar.Brand onClick={handleOptionChange} ><h1 className='nameFonts'>Site Managment</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <div className="input-group ">
                            <span className="input-group-text" id="addon-wrapping">
                                <button onClick={handleNewClick} tabIndex="1" type="button" className="btn btn-primary">New</button>
                            </span>



                            <span className="input-group-text" >
                                <select value={options} tabIndex="3" onChangeCapture={e => handleOptionChange(e.target.value)} className="form-select" aria-label="Default search query selction">
                                    <option value="1">Site Name</option>
                                    <option value="2">All Records</option>
                                    {/* <option value="1">Site Name</option>
                                            <option value="2">Site Contact</option>
                                            <option value="3">Hardware Model</option>
                                            <option value="4">Hardware Serial Number</option>
                                            <option value="5">Apps Name</option>
                                            <option value="6">Apps Version</option> */}
                                </select>
                            </span>

                            <input type="text" value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)} className="form-control"
                                placeholder="Enter The Site Name"

                            />
                            <span className="input-group-text" > <button type="button" onClick={handleSearchClick} className="btn btn-primary"><FontAwesomeIcon icon={faMagnifyingGlass} /></button></span>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <SiteModal setShowSite={setShowSite} showSite={showSite} />
            <ToastContainer />
        </>

    )
}





export default Header
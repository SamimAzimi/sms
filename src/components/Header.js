import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMagnifyingGlass,

} from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import '../styles/common.css'
import axios from 'axios';
import { DataContext } from './Context'
import { Navbar, Container, } from 'react-bootstrap';
function Header() {
    const value = useContext(DataContext)
    const { setSpinner, toggleMenu, setToggleMenue, data, setSearchData, setData } = value

    const [toggle, setToggle] = useState()

    const [searchQuery, setSearchQuery] = useState()
    const [options, setOptions] = useState();

    let navigation = useNavigate();
    const handleNewClick = () => {
        navigation('/newform')
    }

    const handleSearchClick = () => {
        setSpinner(true)

        if (options === undefined || options === "") {
            axios.post('http://localhost:4000/api/siteName ', { siteName: searchQuery }).then(res => {

                if (res.data.notfound) {

                    toast.info(res.data.notfound)
                    setData('')
                }
                else if (res.data.found) {

                    setData(res.data.found)
                    navigation('/oneSite')
                } else if (res.data.foundError) {
                    setData('')
                    toast.error('error')
                }
                setSpinner(false)
            }).catch(err => {
                console.log(err)
            })
            setSpinner(false)
        }
        else if (options === "0") {
            axios.get('https://servicemanagementsystem.herokuapp.com/api/allRecords').then(res => {
                if (res.data.notfound) {
                    toast.info(res.data.notfound)
                }
                else {
                    setSearchData(res.data)
                    setTimeout(() => {
                        navigation('/searchResult')
                    }, 10000)

                }
                setSpinner(false)
            }).catch(err => {
                console.log(err)
            })

        }
        else if (options === "1" && searchQuery) {
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

        }
        else if (options === "2" && searchQuery) {
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
        else if (options > 2 && searchQuery) {

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
            toast.info("Please fill the Search Box")
            setSpinner(false)
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
            <Navbar bg="primary" expand="lg">
                <Container fluid>
                    <Navbar.Brand ><h1 className='nameFonts'>Site Managment</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <div className="input-group ">
                            <span className="input-group-text" id="addon-wrapping">
                                <button onClick={handleNewClick} tabIndex="1" type="button" className="btn btn-primary">New</button>
                            </span>
                            <span onClick={handleSearch} className="input-group-text" id="addon-wrapping">
                                <button type="button" tabIndex="2" className="btn btn-primary" onClick={() => setData('')}>{toggle ? "Close Advance Search" : "Advance Search"}</button>
                            </span>
                            {toggle &&
                                <>
                                    <span className="input-group-text" >
                                        <select value={options} tabIndex="3" onChangeCapture={e => handleOptionChange(e.target.value)} className="form-select" aria-label="Default search query selction">
                                            <option value="">select an option</option>
                                            <option value="0">All Records</option>
                                            {/* <option value="1">Site Name</option>
                                            <option value="2">Site Contact</option>
                                            <option value="3">Hardware Model</option>
                                            <option value="4">Hardware Serial Number</option>
                                            <option value="5">Apps Name</option>
                                            <option value="6">Apps Version</option> */}
                                        </select>
                                    </span>
                                </>
                            }
                            <input type="text" value={searchQuery || ''}
                                onChange={e => setSearchQuery(e.target.value)} className="form-control"
                                placeholder="Enter The Site Name"

                            />
                            <span className="input-group-text" > <button type="button" onClick={handleSearchClick} className="btn btn-primary"><FontAwesomeIcon icon={faMagnifyingGlass} /></button></span>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <ToastContainer />
        </>

    )
}





export default Header
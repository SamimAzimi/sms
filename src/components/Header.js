import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMagnifyingGlass,

} from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import '../styles/common.css'
import axios from 'axios';
import { Nav, Navbar, Container, Form, Button, FormControl, NavDropdown } from 'react-bootstrap';
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

        if (options === undefined) {
            toast.info("Please Select an Option", {
                position: toast.POSITION.TOP_LEFT
            })
            setSpinner(false)
        }
        else if (options === "0") {
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
 useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" ) {
        console.log("Enter key was pressed. Run your function.");
        event.preventDefault();
         handleSearchClick();
      }
    };
    document.addEventListener("Enter", listener);
    return () => {
      document.removeEventListener("Enter", listener);
    };
  }, []);


    return (
        <>
        <Navbar bg="primary" expand="lg">
            <Container fluid>
                <Navbar.Brand ><h1 className='nameFonts'>Site Managment</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <div class="input-group ">
                <span class="input-group-text" id="addon-wrapping">
                    <button onClick={handleNewClick} tabIndex="1" type="button" class="btn btn-primary">New</button>
                </span>
                <span onClick={handleSearch} class="input-group-text" id="addon-wrapping">
                    <button type="button" tabIndex="2" class="btn btn-primary" onClick={() => setData('')}>{toggle ? "Close Search" : "Search"}</button>
                </span>
                {toggle &&
                    <>
                        <span class="input-group-text" >
                            <select value={options} tabIndex="3" onChangeCapture={e => handleOptionChange(e.target.value)} class="form-select" aria-label="Default search query selction">
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
                        <span class="input-group-text" > <button type="button"  onClick={handleSearchClick} class="btn btn-primary"><FontAwesomeIcon icon={faMagnifyingGlass} /></button></span>
                    </>
                }
            </div>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        
            <ToastContainer />
        </>

    )
}





export default Header
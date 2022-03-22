import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios'
function Searchbar({ ArrayOptions, setData }) {
    const location = useLocation();
    const [value, setValue] = useState();
    const [name, setName] = useState();


    const handleSearch = (e) => {
        e.preventDefault();

        if (!name) {

            toast.info("please select an Option")
        }
        else {
            const data = { name: name, value: value, model: location.pathname.split("/")[1] }

            axios.post('https://servicemanagementsystem.herokuapp.com/api/field', data).then((response) => {
                setData(response.data)
            })


        }
    }
    return (
        <>
            <aside className="searchbar">
                <select name="options" selected="false" id="options" onChangeCapture={e => setName(e.target.value)} value={name} >
                    <option disabled selected>Select an option</option>
                    {ArrayOptions && ArrayOptions.map((option) => {
                        return (
                            <option id="option" value={option}>{option}</option>
                        )
                    })}

                </select>
                <input className='searchbarInput' name="value" type="search" onChange={e => setValue(e.target.value)} value={value} />
                <button type="submit" onClick={handleSearch}>Search..</button>
            </aside>
            <ToastContainer />
        </>
    )
}

export default Searchbar
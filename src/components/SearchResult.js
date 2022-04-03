import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStickyNote, } from '@fortawesome/free-regular-svg-icons';
import { DataContext } from './Context'
import '../styles/common.css'
import {
    faPhone
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'
function SearchResult() {
    let navigation = useNavigate();
    const ctx = useContext(DataContext)
    const { searchData, setData } = ctx
    const handleClick = (search) => {

        setData(search)
        navigation('/oneSite')
    }
    return (
        <>
            <ul>
                {searchData.map(search => {
                    return (
                        <li onClick={() => handleClick(search)}>{search.siteName}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default SearchResult
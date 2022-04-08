import React, { useContext } from 'react'
import { DataContext } from './Context'
import '../styles/common.css'
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
            {searchData.length === 0 ?
                <div className='nodataExist'>
                    <h1 >No Data Exist in Database </h1>
                </div>
                :
                <ul className="container allResultList">
                    {searchData.map(search => {
                        return (
                            <li onClick={() => handleClick(search)}>{search.siteName}</li>
                        )
                    })}
                </ul>
            }

        </>
    )
}

export default SearchResult
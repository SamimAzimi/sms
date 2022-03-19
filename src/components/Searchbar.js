import React from 'react'

function Searchbar({ArrayOptions}) {
    return (
        <aside className="searchbar">
            <select name="options" id="options">

                {ArrayOptions &&  ArrayOptions.map((option)=>{
                    return (
                          <option id="option" value={option}>{option}</option>
                    )
                })}

            </select>
            <input className='searchbarInput' type="search" />
            <button>Search..</button>
        </aside>

    )
}

export default Searchbar
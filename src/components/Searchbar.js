import React from 'react'

function Searchbar() {
    return (
        <aside className="searchbar">
            <select name="options" id="options">
                <option value="volvo">Apps</option>
                <option value="saab">Hardwares</option>
                <option value="mercedes">Users</option>
                <option value="audi">Sites</option>
                <option value="volvo">Type</option>
                <option value="saab">MakeModel</option>
                <option value="mercedes">Address</option>
                <option value="audi">CPU</option>
            </select>
            <input type="search" />
            <button>Search..</button>
        </aside>

    )
}

export default Searchbar
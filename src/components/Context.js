import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const DataContextProvider = (props) => {

    const [data, setData] = useState([]);
    const [toggleSearch, setToggleSearch] = useState(false);
    const [toggleMenu, setToggleMenue] = useState(false)
    const [spinner, setSpinner] = useState(false);
    const values = { spinner, setSpinner, toggleSearch, setToggleSearch, toggleMenu, setToggleMenue, data, setData }
    return (
        <DataContext.Provider value={values}>
            {props.children}
        </DataContext.Provider>
    );
}
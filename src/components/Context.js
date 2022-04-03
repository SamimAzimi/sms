import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const DataContextProvider = (props) => {

    const [data, setData] = useState([]);
    const [toggleSearch, setToggleSearch] = useState(false);
    const [toggleMenu, setToggleMenue] = useState(false)
    const [spinner, setSpinner] = useState(false);
    const [dataEntry, setDataEntry] = useState({
        location: '',
        Notes: '',
        type: '',
        MakeModel: '',
        functions: '',
        ServiceTagSerialNo: '',
        CPU: '',
        RAM: '',
        HDD: '',
        Graphic: '',
        DVDDrive: '',
        PowerSupply: '',
        PowerSettoNever: Boolean,
        sourceFile: '',
        RaidLevel: '',
        additionalSoftware: '',
        apps: {
            appsName: '',
            appsVersion: '',
            appsUserName: '',
            appsPassword: '',
        },
        DB: {
            DBinstalled: Boolean,
            DBname: '',
            DBVersion: '',
            DBsaPassword: ''
        },
        OS: {
            OSname: '',
            OSVersion: '',
            UserName: '',
            password: '',
            UpdateInstalled: Boolean,
            UpdateTurnedOff: Boolean
        },
        network: {
            IP: '',
            subnetMask: '',
            gateway: ''
        }
    })
    const [next, setNext] = useState({
        firstNext: true,
        secondNext: false,
        thirdNext: false,
        fourthNext: false,
        fivithNext: false,

    });
    const [searchData, setSearchData] = useState()
    const values = {
        spinner, next, setNext, setSpinner, searchData, setSearchData,
        toggleSearch, setToggleSearch, toggleMenu,
        setToggleMenue, data, setData,
        dataEntry, setDataEntry
    }
    return (
        <DataContext.Provider value={values}>
            {props.children}
        </DataContext.Provider>
    );
}
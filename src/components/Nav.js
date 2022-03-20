import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
function Nav() {
    let navigate = useNavigate()
    const [auth, setAuth] = useState();
    useEffect(() => {
        if (localStorage.getItem("Authorization")) {
            setAuth(true)
        } else {

            setAuth(false)
        }
    }, [])
    const handleSignOut = () => {
        localStorage.removeItem("Authorization")
        navigate("/Login");
    }
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/Apps">Apps</Link></li>
                    <li><Link to="/User">User</Link></li>
                    <li><Link to="/Hardware">Hardware</Link></li>
                    <li><Link to="/Sites">Sites</Link></li>
                    <li><Link to="/Reports">Reports</Link></li>
                </ul>
                {auth && <button className="logOutbtn" onClick={handleSignOut}>Sign Out</button>}
            </nav>

        </>
    )
}

export default Nav
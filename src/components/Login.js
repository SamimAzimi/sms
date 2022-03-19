import React, { useState } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from "react-router-dom";
import SVG from '../assets/login.svg'


function Login() {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        ID: "",
        Password: ""
    })
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user.ID && user.Password) {
            await axios.post('https://servicemanagementsystem.herokuapp.com/login/signIn', {
                "ID": user.ID,
                "Password": user.Password
            }).then(
                (response) => {
                    if (response.data.accessToken) {
                        localStorage.setItem("Authorization", response.data.accessToken)
                        localStorage.setItem('userID', response.data.id)
                        navigate("/");

                    }
                    toast.info(response.data)
                }

            ).catch(err => {
                console.log(err)
            });
        } else {
            toast.info("Please fill the Form")
        }
    }

    return (
        <>
            <secion className="loginPage">
                <form onSubmit={handleSubmit}>
                    <lable>ID</lable>
                    <input value={user.ID} onChange={handleChange} type="text" name="ID" placeholder="Enter Your ID" />
                    <lable>Password</lable>
                    <input value={user.Password} onChange={handleChange} type="text" name="Password" placeholder="Enter Your Password" />
                    <button type="submit">Sign In</button>
                </form>
                <img className="loginPageAssets" src={SVG} alt="svg" />
                <ToastContainer />
            </secion>

        </>
    )
}

export default Login
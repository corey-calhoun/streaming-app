import { Avatar } from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons'
import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from './netflix-logo.png'

function Navbar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false);
        })
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

    return (
        <div className={`navbar ${show && "navbar__black"}`}>
            <img 
             className="navbar__logo"
             src={logo}
             alt="Netflix Logo"
            /> 

            <div className="navbar__search">
                <input 
                 variant="outlined"
                 type="search"
                 color="secondary"
                />
                <SearchOutlined
                 className="navbar__searchIcon"                 
                 fontSize="large"
                 type="button" 
                 onClick="#"
                />  
            </div>
            
            <div className="navbar__userInfo">
                <Avatar
                 className="navbar__avatar"
                 src="https://placeimg.com/640/480/people"
                 alt=""
                />  
                <h3 className="navbar__userName">User</h3>
            </div>
            
        </div>
    )
}

export default Navbar

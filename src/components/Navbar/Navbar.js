import { Avatar } from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons'
import React from 'react'
import './Navbar.css'
import logo from './netflix-logo.png'

function Navbar() {
    return (
        <div className="navbar">
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
                />  
            </div>
            
            <Avatar
             className="navbar__avatar"
             src="https://placeimg.com/640/480/people"
             alt=""
            />
        </div>
    )
}

export default Navbar

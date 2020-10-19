import { Avatar } from '@material-ui/core'
import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <img 
             className="navbar__logo"
             src="https://banner2.cleanpng.com/20180606/lca/kisspng-netflix-logo-t-shirt-television-fonts-5b1798850adbc6.2599171615282730290445.jpg"
             alt="Netflix Logo"
            /> 

            <Avatar
             className="navbar__avatar"
             src="https://placeimg.com/640/480/people"
             alt=""
            />
        </div>
    )
}

export default Navbar

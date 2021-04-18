import React from 'react';
import { NavLink } from 'react-router-dom'

function Navigation() {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/devilmaycry3'>Videos</NavLink>
            <NavLink to='/upload'>Upload Video</NavLink>
        </div>
    )
}
export default Navigation;
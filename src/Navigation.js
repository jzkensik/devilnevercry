import React from 'react';
import { NavLink } from 'react-router-dom'

function Navigation() {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/devilmaycry3'>Videos</NavLink>
        </div>
    )
}
export default Navigation;
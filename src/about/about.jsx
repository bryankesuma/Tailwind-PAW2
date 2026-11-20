import React from 'react'
import { NavLink } from 'react-router'

const about = () => {
    return (
        <div>
            <h1>About</h1>

            <NavLink to="/home">GO TO HOME PAGE</NavLink>
        </div>
    )
}

export default about
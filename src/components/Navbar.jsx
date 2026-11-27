import React from 'react'
import ThemeSwap from './ThemeSwap'
import { Bell, List, Search } from 'lucide-react'
import { NavLink } from 'react-router'

const Navbar = () => {
    return (
        <div class="navbar bg-base-100 shadow-sm">
            <div class="navbar-start">
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                        <List />
                    </div>
                    <ul
                        tabindex={-1}
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink to="/">Homepage</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/register">Register</NavLink></li>
                    </ul>
                </div>
            </div>
            <div class="navbar-center">
                <a class="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div class="navbar-end">
                <button class="btn btn-ghost btn-circle">
                    <Search />
                </button>
                <button class="btn btn-ghost btn-circle">
                    <div class="indicator">
                        <Bell />
                        <span class="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
            </div>
            <ThemeSwap />
        </div>
    )
}

export default Navbar
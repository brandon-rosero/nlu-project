import React, { useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import "../navbar.css"


export const Navbar = () => {
    
    const [flavors, setFlavors] = useState(JSON.parse(localStorage.getItem('flavors')))
    const categories = [...new Set(flavors.map(flavor => flavor[1]))]

    return (
    <nav className='nav'>
        <ul>
            <li>
                <NavLink to="/capabilities">Capabilities</NavLink>
                <ul className='capabilities-dropdown'>
                    <NavLink to={'/capabilities/design'}><li>Design</li></NavLink>
                    <NavLink to={'/capabilities/production'}><li>Production</li></NavLink>
                    <NavLink to={'/capabilities/certification'}><li>Certification</li></NavLink>
                </ul>
            </li>
            <li>
                <NavLink to="/flavors">Flavors</NavLink>
                <ul className='capabilities-dropdown'>
                    {categories.map(flavor => <NavLink to={`/flavors/${flavor}`}><li>{flavor}</li></NavLink>)}
                </ul>
            </li>
            <li>
                <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact Us</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
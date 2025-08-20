import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import logo from "../images/logo.png"
import Footer from './Footer'
import Quote from './Quote'
import { Link, NavLink } from "react-router-dom";

const FlavorInfo = () => {
    
    const [flavors, setFlavors] = useState(JSON.parse(localStorage.getItem('flavors')))
    const [flavorInfo, setFlavorInfo] = useState([])
    let {category} = useParams()

    useEffect(() =>{
        const a = flavors.filter(flavor => flavor.includes(category)).map(flavor => flavor[2])
        
        setFlavorInfo(a)
    }, [])

    return (
        <div>
            <NavLink to={"/"}><img style={{width: "150px"}} src={logo} /></NavLink>
            <Navbar />
            <h1>{category}</h1>
            <div className='flavor-container'>
                <ul>{flavorInfo.map(info => <li>{info}</li>)}</ul>
                <Quote />
            </div>
            <Footer />
        </div>
    )
        
}

export default FlavorInfo
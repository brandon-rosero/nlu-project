import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link, NavLink } from "react-router-dom";
import Quote from './Quote';
import logo from "../images/logo.png"
import placeholder from "../images/placeholder-image.png"

import '../css/flavor.css'
import Footer from './Footer';

const Flavor = () => {

  const [flavors, setFlavors] = useState(JSON.parse(localStorage.getItem('flavors')))
  const categories = [...new Set(flavors.map(flavor => flavor[1]))]

  return (
    <div>
      <NavLink to={"/"}><img style={{width: "150px"}} src={logo} /></NavLink>
      <Navbar />
      <h1>Flavors</h1>
      <div style={{display: "flex", alignItems:"center"}}>
        <div className='flavor-container'>
          <div className='category-container'>
            {categories.map(c => <div className='category'>
            <NavLink to={`/flavors/${c}`}><img style={{width: "150px"}} src={placeholder}/></NavLink>
            {c}
            </div>)}
          </div>
        <Quote />
      </div>
      </div>
      <Footer />
    </div>
    
  )
}

export default Flavor
import React from 'react'
import { Link, NavLink } from "react-router-dom";
import notFound from '../images/404.png'

const NotFound = () => {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
        <img style={{width: "150px"}} src={notFound} />
        <Link to="/">Go back</Link>
    </div>
  )
}

export default NotFound
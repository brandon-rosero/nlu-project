import React from 'react'

import logo from "../images/logo.png"
import '../css/footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className='footer-container'>
            <div>Copyright © {currentYear}. All rights reserved.</div>
            <div>
                <img style={{width: "150px"}} src={logo} />
            </div>  
        </div>
        
    )
}

export default Footer
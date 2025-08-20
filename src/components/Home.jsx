import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Quote from './Quote'
import Papa from 'papaparse'
import { Link, NavLink } from "react-router-dom";
import adultDegreeHero from "../images/adult-degree-hero2.jpg"
import homepageHero from "../images/homepage-hero-resized.jpg"
import nluAppPhotos from "../images/NLU-Application-Photos-02.jpg"
import ImageSlider from './ImageSlider'

import "../css/image-slider.css"
import "../css/home-page.css"
import logo from "../images/logo.png"
import Footer from './Footer'

const Home = () => {
    
    const images = [adultDegreeHero, homepageHero, nluAppPhotos]
    
    useEffect(() => {
        fetch('/flavors.csv').then(res => res.text()).then(csvText => {
          Papa.parse(csvText, {
            skipEmptyLines: true,
            complete: (result) => {
              localStorage.setItem("flavors", JSON.stringify(result.data))
            }
          })
        })
      }, [])
  
    return (
    <div >
        <NavLink to={"/"}><img style={{width: "150px"}} src={logo} /></NavLink>
        <Navbar />
        <div className='home-container'>
            <ImageSlider imageUrls={images}/>
            <div className='body-quote-container'>
                <div className='home-text'>
                    <h1>Design. Manufacture. Deliver</h1>
                    <p>lorem lpsum lorem lpsum lorem lpsum lorem lpsum lorem lpsum lorem lpsum lorem lpsum lorem lpsum lorem lpsum lorem lpsum lorem lpsum lorem lpsum
                    lorem lpsum lorem lpsum lorem lpsum lorem lpsum lorem lpsum lorem lpsum lorem lpsum lorem lpsum lorem lpsum lorem lpsum lorem lpsum lorem lpsum
                    lorem lpsum lorem lpsum lorem lpsum lorem lpsum lorem lpsum lorem lpsum lorem lpsum lorem lpsum lorem lpsum lorem lpsum lorem lpsum lorem lpsum 
                    lorem lpsum lorem lpsum lorem lpsum lorem lpsum lorem lpsum lorem lpsum lorem lpsum lorem lpsum lorem lpsum lorem lpsum lorem lpsum lorem lpsum </p>
                </div>
                <Quote />
            </div> 
        </div>  
        <Footer />  
    </div>
    
  )
}

export default Home
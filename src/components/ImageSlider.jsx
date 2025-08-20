import React, { useState } from 'react'
import "../css/image-slider.css"

const ImageSlider = ({ imageUrls }) => {
    
    const [imgIndex, setImgIndex] = useState(0)

    function prevImage(){
        setImgIndex((prev) => prev == 0 ? prev = 0: prev - 1)
    }

    function nextImage(){
        setImgIndex((next) => next == imageUrls.length - 1 ? next = imageUrls.length - 1: next + 1)
    }
  
    return (
        <div className='img-slider'>
            <img className="image" src={imageUrls[imgIndex]} />
            <button className='button left' onClick={prevImage}>Left</button>
            <button className='button right' onClick={nextImage}>Right</button>  
        </div>  
    )
}

export default ImageSlider
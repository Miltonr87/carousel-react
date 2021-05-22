import React, { useState } from 'react';
import './Carousel.css';
import { images } from "../Helpers/CarouselData.js";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



function Carousel() {
    const [ currentImg, setCurrentImg ] = useState(0);

    const movementLeft = () => {
        if (currentImg > 0) {
        setCurrentImg(currentImg - 1);
    }};

    const movementRight = () => {
        if (currentImg < images.length -1) {
        setCurrentImg(currentImg +1);
        }
    }
    

    return (
        <div className="carousel"> 
           <div 
            className="carouselInner" 
            style={{ backgroundImage: `url(${images[currentImg].img})` }}>

                <div className="left"> 
                    <ArrowBackIosIcon style={{ fontSize: 30 }} onClick={movementLeft}/> 
                </div>
                
                <div className="center">
                    <h1>{images[currentImg].title}</h1>
                    <p>{images[currentImg].subtitle}</p>
                </div>

                <div className="right"> 
                    <ArrowForwardIosIcon style={{ fontSize: 30 }} onClick={movementRight}/>
                </div>

           </div>
        </div>
    )
};

export default Carousel;
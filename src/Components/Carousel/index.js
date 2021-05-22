import React, { useState } from 'react';
import './Carousel.css';
import { images } from "../Helpers/CarouselData.js";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


//<img src={images[currentImg].imgUrl} alt="images" />

/* const movement = () => setCurrentImg(currentImg) - 1;

    const movement2 = () => setCurrentImg(currentImg) + 1;
*/



function Carousel() {
    const [ currentImg, setCurrentImg ] = useState(0);
    

    return (
        <div className="carousel"> 
           <div 
            className="carouselInner" 
            style={{ backgroundImage: `url(${images[currentImg].img})` }}>

                <div className="left" onClick={() => {
                    if (currentImg > 0) {
                    setCurrentImg(currentImg - 1);
                }
                }}> 
                    <ArrowBackIosIcon style={{ fontSize: 30 }} /> 
                </div>
                
                <div className="center">
                    <h1>{images[currentImg].title}</h1>
                    <p>{images[currentImg].subtitle}</p>
                </div>

                <div className="right" onClick={() => {
                    if (currentImg < images.length -1) {
                    setCurrentImg(currentImg +1);
                    }
                }}> 
                    <ArrowForwardIosIcon style={{ fontSize: 30 }}/>
                </div>

           </div>
        </div>
    )
};

export default Carousel;
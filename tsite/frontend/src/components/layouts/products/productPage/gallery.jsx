import React from 'react';
import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";



const Gallery = ({photos}) => {
    console.log(photos)
    return (
        <Carousel autoPlay infiniteLoop>
            {photos.map((photo, index)=>{
                <div key={index}>
                    <img src={photo.photo.full_size} alt="image"/>
                    <p className="legend"></p>
                </div>
            })}
        </Carousel>
    );
}

export default Gallery;

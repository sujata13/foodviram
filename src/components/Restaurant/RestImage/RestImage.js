import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import '../Restaurant.css'


const RestImage = () =>{
    return(
            <Carousel className="w-80 ma2 center">
               <Carousel.Item>
                    <img
                        className="d-block w-100 restimg"
                        src={require('./restaurant2.jpg')}
                        alt="First slide"
                    />
               </Carousel.Item>
               <Carousel.Item>
                    <img
                        className="d-block w-100 restimg"
                        src={require('./restaurant1.jpg')}
                        alt="Second slide"
                    />
               </Carousel.Item>
               <Carousel.Item>
                    <img
                        className="d-block w-100 restimg"
                        src={require('./background.png')}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
    );
}

export default RestImage;
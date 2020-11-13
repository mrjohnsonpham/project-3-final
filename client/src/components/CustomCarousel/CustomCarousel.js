import Carousel from 'react-bootstrap/Carousel'
import React, { Fragment } from "react";
import testImage from '../../testImage.png';
import testImage2 from '../../logo-old.jpg';
import testImage3 from '../../logo.jpg';
import '../style.css';

function CustomCarousel() {



    return (
        <Fragment>
            <div className="container carouselDiv">
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100 carouselImage"
                            // className="d-inline w-100"
                            src={testImage}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100 carouselImage"
                            src={testImage2}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carouselImage"
                            src={testImage3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Fragment>


    )
}

export default CustomCarousel;
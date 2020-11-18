import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slides = () => {
    return (
        <div className="overlay-background cover-slides">
            <Carousel className="cover-slides" interval="5000">
                <Carousel.Item>
                    <img className="d-block w-100" src="/food/slide1.jpg" alt="First slide" />
                    <Carousel.Caption>
                        <h1>
                            <strong>
                                Welcome To <br />
                                Surti Kitchen
                            </strong>
                        </h1>
                        <p>
                            Come taste the flavors of South Gujarat.
                            <br />
                            We provide home cooked meals with flavors that would tickle your taste
                            buds.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src="/food/slide3.jpg" alt="Third slide" />
                    <Carousel.Caption>
                        <h1>
                            <strong>
                                Welcome To <br />
                                Surti Kitchen
                            </strong>
                        </h1>
                        <p>
                            All food is prepared using spices specially made in Surat <br />
                            to bring the local authentic flavors.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slides;

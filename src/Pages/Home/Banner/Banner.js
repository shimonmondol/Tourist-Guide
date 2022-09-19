import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import Banner1 from '../Banner/Banner1.jpg';
import Banner2 from '../Banner/Banner2.jpg';
import Banner3 from '../Banner/Banner3.jpg';


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1>Dhaka </h1>
                    <h4>Lalbagh Fort is an incomplete 17th-century Mughal fort complex that stands before the Buriganga River in the southwestern part of Dhaka, Bangladesh. The construction was started in 1678 AD by Mughal Subahdar Muhammad Azam Shah, who was a son of Emperor Aurangzeb and later emperor himself.</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1>Barishal</h1>
                    <h4>
                        The Water Lilies or shapla grows abundantly in a village named Satla 60 km from Barishal city in Bangladesh. It is known as the capital of Shapla or water lilies. The whole village is engaged in the cultivation of the flower. The water lilies grow for nine months, starting from March till November.
                    </h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>Moheshkhali Island</h1>
                    <h4>Moheshkhali Island is the main island of Moheshkhali Upazila, in the Cox's Bazar District of Bangladesh. There will two LNG terminals FSRU and gas pipeline created to ease Bangladesh gas shortage. Moheshkhali is the only hilly island in Bangladesh.</h4>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
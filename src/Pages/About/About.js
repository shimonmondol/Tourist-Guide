import React from 'react';
import ShimonMondol from './ShimonMondol.jpg';


const About = () => {
    return (
        <div className='section d-flex'>
            <div className='container-img ps-5 pt-5'>
                <img weight="500" height="350" src={ShimonMondol} alt="" />
            </div>
            <div>
                <h3 className='container pt-5 ps-5'>Hello, I am Shimon Mondol. Introduce myself as a Graduated student of Electrical and Electronics Engineering from University of Asia Pacific. I do not want to feel complacent with just the basic knowledge. My primary objective is to take up web-developer that would help in the advancement of technology and in the introduction of new methodologies in this field. I feel that a career in developing is stimulating, challenging and rewarding one. The technical presentations that I have given in my graduate helped me a lot in improving my communication skills. </h3>
            </div>

        </div>
    );
};

export default About;
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceSection = () => {
    const { Serviceid } = useParams();
    return (
        <div>
            <h2>Welcome to Details: {Serviceid}</h2>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className="btn btn-danger">Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceSection;
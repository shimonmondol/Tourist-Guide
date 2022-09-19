import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description, cost } = service;
    const Navigate = useNavigate();

    const NavigateServiceSection = id => {
        Navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img className='w-60' src={img} alt="" />
            <h2>{name}</h2>
            <p>Cost: {cost}</p>
            <p><small>{description}</small></p>
            <button onClick={() => NavigateServiceSection(id)} className="btn btn-primary">Booking</button>
        </div>
    );
};

export default Service;
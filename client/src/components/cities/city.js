import React from 'react';
import './city.css';
import { Link } from 'react-router-dom';

const City = (props) => {
    return (
        <div className="card">
            <Link to={`/itineraries/${props.name}`}>
                <img src={props.image} className="card-img-top" alt=""/>
            </Link>
            <div className="card-body">
                <span className="card-title">{props.name}</span>
            </div>
        </div>
    );
}

export default City;
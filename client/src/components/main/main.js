import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import arrow from '../../images/circled-right-2.png';

const Main = (props) => {
    const infoText = 'Find your perfect trip, designed by insiders who know and love their cities';
    const loginText = 'Want to build your own MYtinerary?'
    return (
        <>
           
            <div className="info">
                <span>{infoText}</span>
            </div>
            <div className="browse">
                <h3>Start Browsing</h3>
                <Link to="/cities">
                    <img className="startimg" src={arrow} alt="" onClick={props.print}></img>
                </Link>
            </div>
            <div className="loginText">
                <span>{loginText}</span>
                <div className="login-create">
                    <span>
                        <Link to="/login"> Login </Link>
                    </span> 
                    <span>
                        <Link to="/create"> Create Account </Link>
                    </span>
                </div>
            </div>
        </>
    )
}


export default Main;
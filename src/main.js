import React from 'react';
import './main.css';
import arrow from './circled-right-2.png';

const Main = () => {
    const infoText = 'Find your perfect trip, designed by insiders who know and love their cities';
    const loginText = 'Want to build your own MYtinerary?'
    return (
        <>
            <div className="info">
                <span>{infoText}</span>
            </div>
            <div className="browse">
                <h3>Start Browsing</h3>
                <img className="startimg" src={arrow} alt=""></img>
            </div>
            <div className="loginText">
                <span>{loginText}</span>
                <div className="login-create">
                     <span>
                        <a href="*"> Login
                        </a> 
                    </span> 
                    <span>
                        <a href="*"> Create Account
                        </a> 
                    </span>
                </div>
            </div>
        </>
    )
}

export default Main;
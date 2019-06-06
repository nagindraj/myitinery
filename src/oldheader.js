import React from 'react';
import MYtineraryLogo from './MYtineraryLogo.png';
import './header.css';
import home from './homeIcon.png';
import './main.css';

const Header = () => {
    return (
        <>
            <div>
                <div className="login-home home">
                    <i className="fas fa-2x fa-user-circle"></i>
                    <img src={home} alt=""></img>
                </div>
                <img className="logo" src={MYtineraryLogo} alt=""></img>
            </div>
        </>
    )
}

export default Header;
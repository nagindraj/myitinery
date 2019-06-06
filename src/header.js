import React from 'react';
import MYtineraryLogo from './MYtineraryLogo.png';
import './header.css';

const Header = () => {
    return (
        <div>
            <img className="logo" src={MYtineraryLogo} alt=""></img>
        </div>
    )
}

export default Header;
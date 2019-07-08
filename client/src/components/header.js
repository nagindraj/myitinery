import React from 'react';
import MYtineraryLogo from '../images/MYtineraryLogo.png';
import './header.css';

const Header = () => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page"></li>
            </ol>
        
            <div>
                <img className="logo" src={MYtineraryLogo} alt=""></img>
            </div>
        </nav>
    )
}

export default Header;
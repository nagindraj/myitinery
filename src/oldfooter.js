import React from 'react';
import home from './homeIcon.png';
import './main.css';
import Card from './card';

const Footer = () => {
    return (
        <>
        <div className="cards">
            <Card text="Barcelona"/>
            <Card text="Paris"/>
            <Card text="NYC"/>
            <Card text="Amsterdam"/>
        </div>
        </>
    )
}

export default Footer;
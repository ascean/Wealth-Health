import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className='header'>
            <img className='logo' src="./img/wealthhealth_logo.jpg" alt="Argent Bank Logo" />
            <h1>Wealth Health</h1>
        </header>
    );
};

export default Header;
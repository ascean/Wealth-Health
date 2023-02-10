import React from 'react';

/**
 * Component for header page
 * @returns {ReactElement} Create Header component
 */
const Header = () => {
    return (
        <header className='header'>
            <img className='logo' src="./img/wealthhealth_logo.jpg" alt="Argent Bank Logo" />
            <h1>Wealth Health</h1>
        </header>
    );
};

export default Header;
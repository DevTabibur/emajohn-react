import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <>
            <nav className='header'>
                <img src={logo} alt="logo" />
                <div>
                    <a href="/shop">Shop</a>
                    <a href="/order-review">Orders</a>
                    <a href="/inventory">Inventory</a>
                    <a href="/about">About</a>
                </div>
            </nav>
        </>
    );
};

export default Header;
import React from 'react';
import { NavLink } from 'react-router-dom';

import { Text } from "../context/Language";
import Logo from '../../assets/images/logo.png'
import NavLinks from './NavLinks';
import './MainNavigation.css';
function MainNavigation(props) {
    return (
        <div className='header-container'>
            <NavLink to='/'>
                <img src={Logo} alt='logo' />
            </NavLink>
            <NavLinks />
            <button className="book-btn-small"><Text tid="book_now" /></button>
        </div>
    );
}

export default MainNavigation;
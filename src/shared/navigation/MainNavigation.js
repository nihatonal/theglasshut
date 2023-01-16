import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import LanguageSelector from '../UI/LanguageSelector';
import { Text } from "../context/Language";
import Logo from '../../assets/images/logo.png'
import NavLinks from './NavLinks';
import Hamburger from './Hamburger';
import SideMenu from './SideMenu';
import './MainNavigation.css';
function MainNavigation(props) {
    const location = useLocation();
    const [showSideMenu, setShowSideMenu] = useState(false);
    return (
        <div className='header-container' style={location.pathname === '/' ? { position: 'absolute' } : null}>

            <NavLink to='/' className={'logo-link'}>
                <img src={Logo} alt='logo' />
            </NavLink>
            <NavLinks />
            <button className="book-btn-small"><Text tid="book_now" /></button>
            <div className="mobile-menu-wrapper">
                <LanguageSelector />
                <Hamburger onClick={() => setShowSideMenu(!showSideMenu)} show={showSideMenu} />
            </div>
            <SideMenu show={showSideMenu} />
        </div>
    );
}

export default MainNavigation;
import React, { useState, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import LanguageSelector from '../UI/LanguageSelector';
import { Text, LanguageContext } from "../context/Language";
import Logo from '../../assets/images/logo.png'
import NavLinks from './NavLinks';
import Hamburger from './Hamburger';
import SideMenu from './SideMenu';
import PickbookDates from '../../shared/UI/PickbookDates';
import './MainNavigation.css';
function MainNavigation(props) {
    const location = useLocation();
    const lang = useContext(LanguageContext);
    const [showSideMenu, setShowSideMenu] = useState(false);
    const [bookMenu, showBookMemu] = useState(false);
    const sectionData = lang.dictionary["booking_words"][0];
    return (
        <div className='header-container' style={location.pathname === '/' ? { position: 'absolute' } : null}>

            <NavLink to='/' className={'logo-link'}>
                <img src={Logo} alt='logo' />
            </NavLink>
            <NavLinks />
            <button
                className="book-btn-small"
                onClick={() => showBookMemu(!bookMenu)}
            >
                <Text tid="book_now" />
            </button>
            {bookMenu &&
                    <PickbookDates>
                        <NavLink
                            to='/booking'
                            className="cart-book-btn"
                            onClick={()=>showBookMemu(false)}
                        >
                            {sectionData.book}
                        </NavLink>
                    </PickbookDates>
            }
            <div className="mobile-menu-wrapper">
                <LanguageSelector />
                <Hamburger onClick={() => setShowSideMenu(!showSideMenu)} show={showSideMenu} />
            </div>
            <SideMenu show={showSideMenu} close={() => setShowSideMenu(false)} />
        </div >
    );
}

export default MainNavigation;
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from "../context/Language";
import LanguageSelector from '../UI/LanguageSelector';
import './NavLinks.css';
function NavLinks(props) {
    const lang = useContext(LanguageContext);
    return (
        <div className="nav-items-wrapper">
            <NavLink to='/' className={({ isActive }) =>
                isActive ? "nav-item active-nav-item" : "nav-item"
            }>{lang.dictionary["navlinks"][0]}</NavLink>
            <NavLink to='/thehut' className={({ isActive }) =>
                isActive ? "nav-item active-nav-item" : "nav-item"
            }>{lang.dictionary["navlinks"][1]}</NavLink>
            <NavLink to='/thearea' className={({ isActive }) =>
                isActive ? "nav-item active-nav-item" : "nav-item"
            }>{lang.dictionary["navlinks"][2]}</NavLink>
            <NavLink to='/booking' className={({ isActive }) =>
                isActive ? "nav-item active-nav-item" : "nav-item"
            }>{lang.dictionary["navlinks"][3]}</NavLink>
            <NavLink to='/aboutus' className={({ isActive }) =>
                isActive ? "nav-item active-nav-item" : "nav-item"
            }>{lang.dictionary["navlinks"][4]}</NavLink>
            <NavLink to='/faq' className="nav-item">{lang.dictionary["navlinks"][5]}</NavLink>
            <LanguageSelector />
        </div>
    );
}

export default NavLinks;
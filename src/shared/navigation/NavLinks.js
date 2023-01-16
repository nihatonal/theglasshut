import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from "../context/Language";
import LanguageSelector from '../UI/LanguageSelector';
import './NavLinks.css';
function NavLinks(props) {
    const lang = useContext(LanguageContext);
    return (
        <div className="nav-items-wrapper">
            <div className="nav-item-wrapper" onClick={props.close}>
                <NavLink to='/' className={({ isActive }) =>
                    isActive ? "nav-item active-nav-item" : "nav-item"
                }>{lang.dictionary["navlinks"][0]}
                </NavLink>
            </div>
            <div className="nav-item-wrapper" onClick={props.close}>
                <NavLink to='/thehut' className={({ isActive }) =>
                    isActive ? "nav-item active-nav-item" : "nav-item"
                }>{lang.dictionary["navlinks"][1]}
                </NavLink>
            </div>
            <div className="nav-item-wrapper" onClick={props.close}>
                <NavLink to='/thearea' className={({ isActive }) =>
                    isActive ? "nav-item active-nav-item" : "nav-item"
                }>{lang.dictionary["navlinks"][2]}
                </NavLink>
            </div>
            <div className="nav-item-wrapper" onClick={props.close}>
                <NavLink to='/booking' className={({ isActive }) =>
                    isActive ? "nav-item active-nav-item" : "nav-item"
                }>{lang.dictionary["navlinks"][3]}
                </NavLink>
            </div>
            <div className="nav-item-wrapper" onClick={props.close}>
                <NavLink to='/aboutus' className={({ isActive }) =>
                    isActive ? "nav-item active-nav-item" : "nav-item"
                }>{lang.dictionary["navlinks"][4]}
                </NavLink>
            </div>
            <div className="nav-item-wrapper" onClick={props.close}>
                <NavLink to='/faq' className={({ isActive }) =>
                    isActive ? "nav-item active-nav-item" : "nav-item"
                }>{lang.dictionary["navlinks"][5]}
                </NavLink>
            </div>
            <LanguageSelector />
        </div>
    );
}

export default NavLinks;
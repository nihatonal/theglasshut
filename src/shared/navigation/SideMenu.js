import React from 'react';

import NavLinks from './NavLinks';
import './SideMenu.css';
function SideMenu(props) {
    return (
        <div
            className='sidemenu-container'
            style={props.show ? { left: '0' } : null}

        >
            <NavLinks close={props.close} />

        </div>
    );
}

export default SideMenu;
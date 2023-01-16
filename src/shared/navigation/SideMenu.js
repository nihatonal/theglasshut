import React from 'react';


import './SideMenu.css';
function SideMenu(props) {
    return (
        <div
            className='sidemenu-container'
            style={props.show ? { left: '0' } : null}

        >

        </div>
    );
}

export default SideMenu;
import React from 'react';

import './Modal.css';
function Modal(props) {
    return (
        <div className={props.showModal ? `modal-wrapper showModal ${props.className}` : `modal-wrapper`}>
            {props.children}
        </div>
    );
}

export default Modal;
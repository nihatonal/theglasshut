import React from 'react';
import { Text } from "../context/Language";
import { NavLink } from 'react-router-dom';

import './ButtonBook.css';
function ButtonBook(props) {
    return (
        <div onClick={props.onClick} className={`button-book-wrapper ${props.className}`}>
            <NavLink to={'/booking'} className="button-book"><Text tid="book_now" /></NavLink>
            <div className="button-content">
                <p>
                    <span><Text tid="from" /></span>
                    <span>€3.200</span>
                    <span><Text tid="per_night" /></span>
                </p>
            </div>
        </div>
    );
}

export default ButtonBook;
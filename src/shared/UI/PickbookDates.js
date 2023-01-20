import React, { useState, useContext } from 'react';
import { CartContext } from "../../shared/context/CartContext";
import { LanguageContext } from "../../shared/context/Language";
import BookCalendar from '../../shared/UI/BookCalendar';
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import './PickbookDates.css';
function PickbookDates(props) {
    const cart = useContext(CartContext);
    const lang = useContext(LanguageContext);
    const sectionData = lang.dictionary["booking_words"][0];
    const [showCalendar, setShowCalendar] = useState(false);

    return (
        <div className="calendar-container">
            <div className="calendar-wrapper">
                <div style={{ cursor: "pointer" }} className="calendar-item" onClick={() => setShowCalendar(true)}>
                    <p>{sectionData.check_in}</p>
                    <p>{cart.dateRange[0]}</p>
                </div>
                <div style={{ cursor: "pointer" }} className="calendar-item" onClick={() => setShowCalendar(true)}>
                    <p>{sectionData.check_out}</p>
                    <p>{cart.dateRange.slice(-1)[0]}</p>
                </div>
                <div className="calendar-item">
                    <p>{sectionData.guests}</p>
                    <div className='guest-count'>
                        <button onClick={cart.removeGuest} className="guest-count-btn"><AiOutlineMinus /></button>
                        <p>{cart.guests}</p>
                        <button onClick={cart.addGuest} className="guest-count-btn"><AiOutlinePlus /></button>
                    </div>
                </div>
                <BookCalendar
                    style={showCalendar ? { display: 'flex' } : null}
                    close={() => setShowCalendar(false)}
                    lang={
                        lang.userLanguage === 'dk' ? 'da' : lang.userLanguage
                    }
                />
            </div>

            {props.children}
        </div>
    );
}

export default PickbookDates;
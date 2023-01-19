import React, { useContext, useState } from 'react';
import moment from "moment";
import { CartContext } from "../../shared/context/CartContext";
import { LanguageContext } from "../../shared/context/Language";
import BookCalendar from '../../shared/UI/BookCalendar';
import './Cart.css';
function Cart(props) {
    const cart = useContext(CartContext);
    const lang = useContext(LanguageContext);
    const sectionData = lang.dictionary["booking_words"][0];
    const [showCalendar, setShowCalendar] = useState(false);
    const [defaultDates, setDefaultDates] = useState([moment(new Date()).format("YYYY/MM/DD"), moment().add(1, 'days').format("YYYY/MM/DD")]);
    return (
        <div className='cart-wrapper'>
            <p className='cart-title'>3200kr<span> / {sectionData.night}</span></p>
            <div className="calendar-container">
                <div className="calendar-wrapper">
                    <div style={{ cursor: "pointer" }} className="calendar-item" onClick={() => setShowCalendar(true)}>
                        <p>{sectionData.check_in}</p>
                        <p>{cart.dateRange ? moment(cart.dateRange[0]).format("DD/MM/YYYY") : moment(defaultDates[0]).format("DD/MM/YYYY")}</p>
                    </div>
                    <div style={{ cursor: "pointer" }} className="calendar-item" onClick={() => setShowCalendar(true)}>
                        <p>{sectionData.check_out}</p>
                        <p>{cart.dateRange ? moment(cart.dateRange.slice(-1)[0]).format("DD/MM/YYYY") : moment(defaultDates[1]).format("DD/MM/YYYY")}</p>
                    </div>
                    <div className="calendar-item">
                        <p>{sectionData.guests}</p>
                        <div></div>
                    </div>
                    <BookCalendar
                        style={showCalendar ? { display: 'flex' } : null}
                        close={() => setShowCalendar(false)}
                    />
                </div>

                <button
                    className="cart-book-btn"
                    onClick={() => console.log(cart.dateRange)}>
                    {sectionData.book}
                </button>
            </div>

            <div className="cart-items-wrapper">
                <div className="cart-item">
                    <p>3.200kr x 2 nights</p>
                    <p>6.400kr</p>
                </div>
                {cart.items.map((item) =>
                    item.additions.map((add) =>
                        <div className="cart-item">
                            <p>{add.name}</p>
                            <p>{add.price}kr</p>
                        </div>
                    )
                )}
            </div>
            <p className="cart-total">
                {sectionData.total}
                <span>
                    {cart.getTotalCost()}kr
                </span>
            </p>
            <div className="cart-coupon-wrapper">
                <input
                    placeholder={sectionData.coupon}
                />
                <button>{sectionData.apply}</button>
            </div>
        </div >
    );
}

export default Cart;
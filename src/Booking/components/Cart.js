import React, { useContext, useState } from 'react';
import { CartContext } from "../../shared/context/CartContext";
import { LanguageContext } from "../../shared/context/Language";
import BookCalendar from '../../shared/UI/BookCalendar';
import './Cart.css';
function Cart(props) {
    const cart = useContext(CartContext);
    const lang = useContext(LanguageContext);
    const sectionData = lang.dictionary["booking_words"][0];

    return (
        <div className='cart-wrapper'>
            <p className='cart-title'>3200kr<span> / {sectionData.night}</span></p>
            <div className="calendar-wrapper">
                <BookCalendar />
            </div>
            <button

                className="cart-book-btn">
                {sectionData.book}
            </button>
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
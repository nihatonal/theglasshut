import React, { useContext } from 'react';
import { CartContext } from "../../shared/context/CartContext";
import { LanguageContext } from "../../shared/context/Language";
import './Cart.css';
function Cart(props) {
    const cart = useContext(CartContext);
    const lang = useContext(LanguageContext);
    const sectionData = lang.dictionary["booking_words"][0];

    return (
        <div className='cart-wrapper'>
            <p className='cart-title'>3200kr<span> / {sectionData.night}</span></p>
            <div className="calendar-wrapper"></div>
            <button onClick={() => console.log(cart.items)} className="cart-book-btn">{sectionData.book}</button>
        </div>
    );
}

export default Cart;
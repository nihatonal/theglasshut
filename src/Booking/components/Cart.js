import React, { useContext } from 'react';

import { CartContext } from "../../shared/context/CartContext";
import { LanguageContext } from "../../shared/context/Language";

import PickbookDates from '../../shared/UI/PickbookDates';
import './Cart.css';
function Cart() {
    const cart = useContext(CartContext);
    const lang = useContext(LanguageContext);
    const sectionData = lang.dictionary["booking_words"][0];

    return (
        <div className='cart-wrapper'>
            <p className='cart-title'>3200kr<span> / {sectionData.night}</span></p>
            <PickbookDates />
            <div className="cart-items-wrapper">
                <div className="cart-item">
                    <p>3.200kr x 2 nights</p>
                    <p>6.400kr</p>
                </div>
                {cart.items.map((item) =>
                    item.additions.map((add, index) =>
                        <div className="cart-item" key={index}>
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
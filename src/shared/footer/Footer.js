import React, { useState, useContext } from 'react';
import { Text, LanguageContext } from "../../shared/context/Language";
import { ReactSVG } from 'react-svg';
import { NavLink } from 'react-router-dom';
import arrow from '../../assets/icons/arrow_email.svg';
import paypal from '../../assets/icons/paypal.svg';
import mastercard from '../../assets/icons/mastercard.svg';
import visa from '../../assets/icons/visa.svg';
import bank from '../../assets/icons/bank.svg';

import './Footer.css';
function Footer(props) {
    const lang = useContext(LanguageContext);
    const [value, setValue] = useState('');


    const newsletterHandler = (e) => {
        e.preventDefault();
        alert(`Your email: ${value}. Thanks for registering!`)
        setValue('')
    }
    return (
        <div className='footer-container'>
            <div className="footer-wrapper">
                <form onSubmit={newsletterHandler} className="footer-newsletter">
                    <p className="footer-title">
                        <Text tid="footer_title" />
                    </p>
                    <label className='footer-label'>
                        <button type='submit ' className="footer-submit-btn">
                            <ReactSVG src={arrow} />
                        </button>
                        <input
                            type="email"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            className='footer-input'
                            placeholder={lang.dictionary["email"]}
                            required
                        />
                    </label>

                    <p className="footer-desc">
                        <Text tid="footer_desc" />
                    </p>
                    <p className="footer-copyright">
                        <Text tid="footer_copyright" />
                    </p>
                </form>
                <div className="footer-info-content">
                    <NavLink to='/terms_and_conditions' className="footer-info-item"><Text tid="footer_item_1" /></NavLink>
                    <NavLink to='cancellation_policy' className="footer-info-item"><Text tid="footer_item_2" /></NavLink>
                    <NavLink to='/privact_policy' className="footer-info-item"><Text tid="footer_item_3" /></NavLink>
                    <div className="footer-payment-items">
                        <ReactSVG src={paypal} />
                        <ReactSVG src={mastercard} />
                        <ReactSVG src={visa} />
                        <ReactSVG src={bank} />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;
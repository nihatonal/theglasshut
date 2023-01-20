import React, { useContext, useMemo, useState } from 'react';
import { LanguageContext } from "../../shared/context/Language"
import {
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE
} from "../../shared/util/validators.js";
import countryList from 'react-select-country-list'
import { useForm } from "../../shared/hooks/form-hook";
import Input from '../../shared/components/formElements/Input';
import arrowDown from '../../assets/icons/accordion_down_arrow.png';
import arrowUp from '../../assets/icons/accordion_up_arrow.png';

import './Payment.css';
function Payment(props) {
    const lang = useContext(LanguageContext);
    const input_placeholders = lang.dictionary["form_element"][0];
    const input_errors = lang.dictionary["form_element"][1];
    const sectionData = lang.dictionary["payment"];
    const [country, selectCountry] = useState('')
    const options = useMemo(() => countryList().getData(), []);
    const [formState, inputHandler] = useForm(
        {
            fname: {
                value: "",
                isValid: false,
            },
            lname: {
                value: "",
                isValid: false,
            },
            email: {
                value: "",
                isValid: false,
            },
            phone: {
                value: "",
                isValid: false,
            },
            address: {
                value: "",
                isValid: false,
            },
            postal_code: {
                value: "",
                isValid: false,
            },
            city: {
                value: "",
                isValid: false,
            },
            country: {
                value: "",
                isValid: false,
            },
            message: {
                value: "",
                isValid: false,
            },
        },
        false
    );

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formState.inputs, country)
    }
    return (
        <div className='page-container'>
            <div className="payment-wrapper">
                <form onSubmit={submitHandler}>
                    <div className="payment-section personal-info">
                        <p className="booking-section-title">
                            {sectionData[0]}
                        </p>
                        <div className='payment_form personal-info_form' >
                            <Input
                                classInput="input-payment"
                                id="fname"
                                element="input"
                                type="text"
                                validators={[VALIDATOR_REQUIRE()]}
                                onInput={inputHandler}
                                custom_placeholder={input_placeholders.first_name}
                                error_Text={input_errors.error_fname}
                                initialValue={formState.inputs.fname.value}
                                initialValid={formState.inputs.fname.isValid}
                            />
                            <Input
                                classInput="input-payment"
                                id="lname"
                                element="input"
                                type="text"
                                custom_placeholder={input_placeholders.last_name}
                                error_Text={input_errors.error_lname}
                                validators={[VALIDATOR_REQUIRE()]}
                                onInput={inputHandler}
                                initialValue={formState.inputs.lname.value}
                                initialValid={formState.inputs.lname.isValid}
                            />
                            <Input
                                classInput="input-payment"
                                id="email"
                                element="input"
                                type="email"
                                custom_placeholder={input_placeholders.email}
                                error_Text={input_errors.error_email}
                                validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
                                onInput={inputHandler}
                                initialValue={formState.inputs.email.value}
                                initialValid={formState.inputs.email.isValid}
                            />
                            <div className='phone-input-wrapper'>
                                <div className='country-flags'>asd</div>
                                <Input
                                    classInput="input-payment"
                                    id="phone"
                                    element="input"
                                    type="text"
                                    custom_placeholder={input_placeholders.phone}
                                    error_Text={input_errors.error_lname}
                                    validators={[VALIDATOR_REQUIRE()]}
                                    onInput={inputHandler}
                                    initialValue={formState.inputs.phone.value}
                                    initialValid={formState.inputs.phone.isValid}
                                />
                            </div>
                            <Input
                                classInput="input-payment"
                                id="address"
                                element="input"
                                type="text"
                                validators={[VALIDATOR_REQUIRE()]}
                                onInput={inputHandler}
                                custom_placeholder={input_placeholders.address}
                                error_Text={input_errors.error_fname}
                                initialValue={formState.inputs.address.value}
                                initialValid={formState.inputs.address.isValid}
                            />
                            <Input
                                classInput="input-payment"
                                id="postal_code"
                                element="input"
                                type="text"
                                validators={[VALIDATOR_REQUIRE()]}
                                onInput={inputHandler}
                                custom_placeholder={input_placeholders.postal_code}
                                error_Text={input_errors.error_fname}
                                initialValue={formState.inputs.postal_code.value}
                                initialValid={formState.inputs.postal_code.isValid}
                            />
                            <Input
                                classInput="input-payment"
                                id="city"
                                element="input"
                                type="text"
                                validators={[VALIDATOR_REQUIRE()]}
                                onInput={inputHandler}
                                custom_placeholder={input_placeholders.city}
                                error_Text={input_errors.error_fname}
                                initialValue={formState.inputs.city.value}
                                initialValid={formState.inputs.city.isValid}
                            />
                            <div className="select_input-wrapper">
                                {/* <Input
                                    classInput="input-payment"
                                    id="country"
                                    element="input"
                                    type="text"
                                    validators={[VALIDATOR_REQUIRE()]}
                                    onInput={inputHandler}
                                    custom_placeholder={input_placeholders.country}
                                    error_Text={input_errors.error_fname}
                                    initialValue={formState.inputs.country.value}
                                    initialValid={formState.inputs.country.isValid}
                                /> */}
                                <input
                                    // id="country"
                                    type="text"
                                    onChange={(e) => {
                                        selectCountry(e.target.value)
                                    }}
                                    value={country}
                                />
                                {
                                    <p
                                        className={'placeholder'}
                                    >
                                        {/* placeholder-touched */}
                                        {input_placeholders.country}
                                    </p>
                                }

                                <div className="select_input_button">
                                    <img src={arrowDown} alt='arrow' />
                                </div>
                                <div className='select-options'>
                                    <ul>
                                        {options.filter(
                                            (f) =>
                                                f.label.toUpperCase().includes(country.toUpperCase())
                                        ).map((el) =>
                                            <li onClick={() => {
                                                selectCountry(el.label)
                                                formState.inputs.country.value = el.label
                                            }}>
                                                {el.label}
                                            </li>
                                        )}
                                    </ul>

                                </div>
                            </div >
                        </div>


                    </div>
                    <button type='submit'>{input_placeholders.confirm}</button>
                </form>
            </div >
        </div >
    );
}

export default Payment;
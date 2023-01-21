import React, { useContext, useMemo, useEffect, useState } from 'react';
//import PhoneInput from 'react-phone-input-2';
import PhoneInput from 'react-phone-number-input'
import { isValidPhoneNumber, isPossiblePhoneNumber } from 'react-phone-number-input'
import 'react-phone-input-2/lib/style.css';
import 'react-phone-number-input/style.css'
import { LanguageContext } from "../../shared/context/Language"
import {
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE
} from "../../shared/util/validators.js";
import countryList from 'react-select-country-list'
import { useForm } from "../../shared/hooks/form-hook";
import Input from '../../shared/components/formElements/Input';
import SelectInput from '../../shared/components/formElements/SelectInput';

import paypal from '../../assets/icons/payment_paypal.svg';
import mastercard from '../../assets/icons/payment_mastercard.svg';
import visa from '../../assets/icons/payment_visa.svg';
import bank from '../../assets/icons/payment_bank.svg';

import './Payment.css';

function Payment(props) {
    const lang = useContext(LanguageContext);
    const input_placeholders = lang.dictionary["form_element"][0];
    const input_errors = lang.dictionary["form_element"][1];
    const sectionData = lang.dictionary["payment"];
    const options = useMemo(() => countryList().getData(), []);
    const card_options = lang.dictionary["card_type"];

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
                isValid: null,
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
            card_type: {
                value: "",
                isValid: false,
            },
            card_number: {
                value: "",
                isValid: false,
            },
            card_expiration: {
                value: "",
                isValid: false,
            },
            card_ccv: {
                value: "",
                isValid: false,
            },
            zip_code: {
                value: "",
                isValid: false,
            },
            card_country: {
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
    const [value, setValue] = useState();
    const [focusPhoneInput, setFocusPhoneInput] = useState(false);
    const [validPhoneNumber, setValidPhoneNumber] = useState(true)

    const phoneHandler = () => {
        if (!value) setFocusPhoneInput(false)
        if (!value) return
    }
    useEffect(() => {
        if (!value) return
        if (value && !isValidPhoneNumber(value)) {
            setValidPhoneNumber(false)
            formState.inputs.phone.isValid = false
        }
        if (isValidPhoneNumber(value)) {
            setValidPhoneNumber(true)
            formState.inputs.phone.value = value
            formState.inputs.phone.isValid = true
        }

    }, [validPhoneNumber, value, formState.inputs.phone]);


    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formState.inputs)
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
                                {formState.inputs.phone.isValid ?
                                    <p className={focusPhoneInput ? 'placeholder placeholder_focused' : 'placeholder'}>
                                        {'Please enter a valid email.'}
                                    </p>
                                    :
                                    <p className={focusPhoneInput ? 'placeholder placeholder_focused' : 'placeholder'}>
                                        {!validPhoneNumber ? input_errors.error_email : input_placeholders.phone}
                                    </p>}
                                <PhoneInput
                                    className={focusPhoneInput ? 'invalid-phone' : ''}
                                    onFocus={() => setFocusPhoneInput(true)}
                                    onBlur={phoneHandler}
                                    value={value}
                                    onChange={setValue}
                                    international={true}
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
                                error_Text={input_errors.error_str + input_placeholders.postal_code.toLowerCase()}
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
                                error_Text={input_errors.error_str + input_placeholders.city.toLowerCase()}
                                initialValue={formState.inputs.city.value}
                                initialValid={formState.inputs.city.isValid}
                            />
                            <SelectInput
                                options={options}
                                onClick={(e) => formState.inputs.country.value = e.target.innerText}
                                placeholder={input_placeholders.country}
                            />

                        </div>


                    </div>
                    <div className="payment-section card-info">
                        <div className="booking-section-title">
                            <p>{sectionData[1]}</p>
                            <div className="payment_icons">
                                <img src={paypal} alt='payment_icons' />
                                <img src={mastercard} alt='payment_icons' />
                                <img src={visa} alt='payment_icons' />
                                <img src={bank} alt='payment_icons' />
                            </div>

                        </div>

                        <div className='payment_form card-info_form' >
                            <SelectInput
                                options={card_options}
                                onClick={(e) => formState.inputs.card_type.value = e.target.innerText}
                                placeholder={input_placeholders.card_type}
                            />
                            <Input
                                classInput="input-payment card_number"
                                id="card_number"
                                element="input"
                                type="text"
                                validators={[VALIDATOR_REQUIRE()]}
                                onInput={inputHandler}
                                custom_placeholder={input_placeholders.card_number}
                                error_Text={input_errors.error_str + input_placeholders.card_number.toLowerCase()}
                                initialValue={formState.inputs.card_number.value}
                                initialValid={formState.inputs.card_number.isValid}
                            />
                            <Input
                                classInput="input-payment"
                                id="card_expiration"
                                element="input"
                                type="text"
                                validators={[VALIDATOR_REQUIRE()]}
                                onInput={inputHandler}
                                custom_placeholder={input_placeholders.expiration}
                                error_Text={input_errors.error_fname}
                                initialValue={formState.inputs.card_expiration.value}
                                initialValid={formState.inputs.card_expiration.isValid}
                            />
                            <Input
                                classInput="input-payment"
                                id="card_ccv"
                                element="input"
                                type="text"
                                validators={[VALIDATOR_REQUIRE()]}
                                onInput={inputHandler}
                                custom_placeholder={input_placeholders.ccv}
                                error_Text={input_errors.error_str + "card " + input_placeholders.ccv.toLowerCase()}
                                initialValue={formState.inputs.card_ccv.value}
                                initialValid={formState.inputs.card_ccv.isValid}
                            />
                            <Input
                                classInput="input-payment"
                                id="zip_code"
                                element="input"
                                type="text"
                                validators={[VALIDATOR_REQUIRE()]}
                                onInput={inputHandler}
                                custom_placeholder={input_placeholders.zip_code}
                                error_Text={input_errors.error_str + input_placeholders.zip_code.toLowerCase()}
                                initialValue={formState.inputs.zip_code.value}
                                initialValid={formState.inputs.zip_code.isValid}
                            />
                            <SelectInput
                                options={options}
                                onClick={(e) => formState.inputs.card_country.value = e.target.innerText}
                                placeholder={input_placeholders.country}
                            />
                        </div>
                    </div>
                    <button type='submit'>{input_placeholders.confirm}</button>
                </form>
            </div >
        </div >
    );
}

export default Payment;
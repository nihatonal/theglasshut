import React, { useContext } from 'react';
import { LanguageContext } from "../../shared/context/Language";
import {
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE
} from "../../shared/util/validators.js";
import { useForm } from "../../shared/hooks/form-hook";
import Input from '../../shared/components/formElements/Input';
import './ContactForm.css';
function ContactForm(props) {

    const lang = useContext(LanguageContext);
    const input_placeholders = lang.dictionary["form_element"][0];
    const input_errors = lang.dictionary["form_element"][1];

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
            subject: {
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
        console.log('ffas')
    }
    return (
        <form className='contact_form' onSubmit={submitHandler}>
            <Input
                classInput="input-contact"
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
                classInput="input-contact"
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
                classInput="input-contact"
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
            <Input
                classInput="input-contact"
                id="subject"
                element="input"
                type="text"
                custom_placeholder={input_placeholders.subject}
                error_Text={input_errors.error_subject}
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
                initialValue={formState.inputs.subject.value}
                initialValid={formState.inputs.subject.isValid}
            />
            <Input
                classInput="textarea-contact"
                id="message"
                element="textarea"
                type="text"
                custom_placeholder={input_placeholders.message}
                error_Text={input_errors.error_textarea}
                validators={[VALIDATOR_MINLENGTH(100)]}
                onInput={inputHandler}
                initialValue={formState.inputs.message.value}
                initialValid={formState.inputs.message.isValid}
            />
            <button
                type='submit'
                className='contact_form-btn'
                disabled={!formState.isValid}
            >{input_placeholders.send}</button>

        </form>

    );
}

export default ContactForm;
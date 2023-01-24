import React, { useState, useContext, useRef, useEffect } from 'react';

import { LanguageContext } from "../../context/Language";
import SliderDates from '../../UI/SliderDates';
import './ExpirationDatePicker.css'
function ExpirationDatePicker(props) {
    const lang = useContext(LanguageContext);
    const input_placeholders = lang.dictionary["form_element"][0];
    const input_errors = lang.dictionary["form_element"][1];
    const [placeHolder, setPlaceHolder] = useState('');
    const [showOptions, setShowOptions] = useState(true);
    const [validDate, setValidDate] = useState(true);
    const [month, setMonth] = useState(1);
    const [year, setYear] = useState(23)
    const months = lang.dictionary["months"];


    function getLastNdigits(number, n) {
        return Number(String(number).slice(-n));
    }

    const xx = new Date()

    let years = [];
    let len = 8;
    for (var i = 0; i < len; i++) {
        years.push({
            key: 'year' + i,
            id: getLastNdigits(xx.getFullYear() + i, 2),
            year: xx.getFullYear() + i
        });
    }
    function expiration_format(value) {
        const v = value
            .replace(/\s+/g, "")
            .replace(/[^0-9]/gi, "")
            .substr(0, 4);
        const parts = [];

        for (let i = 0; i < v.length; i += 2) {
            parts.push(v.substr(i, 2));
        }
        return parts.length > 1 ? parts.join("/") : value;
    }
    useEffect(() => {
        console.log(placeHolder)
    }, [])
    const inputHandler = (e) => {
        setPlaceHolder(e.target.value)
    }
    return (
        <div className="expiration_date" onClick={() => {
            // setShowOptions(!showOptions);
            setPlaceHolder('')
        }}>
            <p className={showOptions ? 'placeholder placeholder_focused' : 'placeholder'}>
                {!validDate ? <span>{input_errors.error_card_expiration}</span> : input_placeholders.expiration}
            </p>
            <input
                id={props.id}
                type="text"
                style={placeHolder !== '' ? { paddingTop: '12px' } : null}
                onChange={inputHandler}
                value={expiration_format(placeHolder)}
                disabled={!showOptions}
            />

            {
                showOptions && <div className='date-wrapper'>
                    <div className='date-wrapper-item_'>
                        <SliderDates>
                            {months.map((el, index) =>
                                <p id={index + 1} className='month' key={index}
                                    onClick={() => {
                                        setMonth(index + 1)
                                        setPlaceHolder(el.month)
                                    }}>{el.month}</p>
                            )}
                        </SliderDates>

                    </div>
                    <div className='date-wrapper-item_'>
                        <SliderDates>
                            {years.map((el, index) =>
                                <p id={el.id} className='year' key={index} onClick={() => setYear(el.id)}>{el.year}</p>
                            )}
                        </SliderDates>
                    </div>
                </div>
            }
        </div >
    );
}

export default ExpirationDatePicker;
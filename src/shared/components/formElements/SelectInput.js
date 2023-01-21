import React, { useState } from 'react';


import arrowDown from '../../../assets/icons/accordion_down_arrow.png';
import arrowUp from '../../../assets/icons/accordion_up_arrow.png';

import './SelectInput.css';
function SelectInput(props) {
    const [placeHolder, setPlaceHolder] = useState('');
    const [showOptions, setShowOptions] = useState(false);
    return (
        <div className="select_input-wrapper">
            <input
                id={props.id}
                type="text"
                style={placeHolder !== '' ? { paddingTop: '12px' } : null}
                onChange={(e) => {
                    setPlaceHolder(e.target.value)
                }}
                value={placeHolder}
                disabled={!showOptions}
            />
            {
                <p
                    className={placeHolder !== '' ? 'placeholder placeholder-touched' : 'placeholder'}
                >
                    {props.placeholder}
                </p>
            }
            <div className="select_input_button" onClick={() => {
                setShowOptions(!showOptions);
                setPlaceHolder('')
            }}>
                <img src={!showOptions ? arrowDown : arrowUp} alt='arrow' />
            </div>
            {
                showOptions && <div className='select-options'>
                    <ul>
                        {props.options.filter(
                            (f) =>
                                f.label.toUpperCase().includes(placeHolder.toUpperCase())
                        ).map((el, index) =>
                            <li onClick={() => {
                                setPlaceHolder(el.label)
                                setShowOptions(false)
                                // formState.inputs.country.value = el.label
                            }}
                                key={index}

                            >
                                <span onClick={props.onClick}>{el.label}</span>
                            </li>
                        )}
                    </ul>
                </div>
            }
        </div >
    );
}

export default SelectInput;
import React, { useReducer, useEffect } from 'react';

import { validate } from '../../util/validators';
import './Input.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      };
    case 'TOUCH': {
      return {
        ...state,
        isTouched: true
      };
    }
    default:
      return state;
  }
};

const Input = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || '',
    isTouched: false,
    isValid: props.initialValid || false
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = event => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators: props.validators
    });
  };

  const touchHandler = () => {
    dispatch({
      type: 'TOUCH'
    });
  };
  function cc_format(value) {
    const v = value
      .replace(/\s+/g, "")
      .replace(/[^0-9]/gi, "")
      .substr(0, 16);
    const parts = [];

    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substr(i, 4));
    }

    return parts.length > 1 ? parts.join(" ") : value;
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
    console.log(v)
    return parts.length > 1 ? parts.join("/") : value;
  }

  const element =
    props.element === 'input' ? (
      <input
        id={props.id}
        style={inputState.value !== '' ? { paddingTop: '12px' } : null}
        type={props.type}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={props.id === 'card_number' ? cc_format(inputState.value) :
          props.id === 'card_expiration' ? expiration_format(inputState.value) : inputState.value}
        pattern={props.pattern}
      />
    ) : (
      <textarea
        id={props.id}
        style={inputState.value.length !== '' ? { paddingTop: '22px' } : null}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <div
      className={`form-control ${props.classInput} ${!inputState.isValid &&
        inputState.isTouched &&
        'form-control--invalid'}`}
    >
      <label htmlFor={props.id}>{props.label}</label>

      {element}
      {
        <p className={
          inputState.value !== '' ? 'placeholder placeholder-touched' :
            inputState.isTouched && !inputState.isValid ? `placeholder placeholder-touched` : `placeholder`
        }
        >
          {inputState.isTouched && !inputState.isValid ? props.error_Text : props.custom_placeholder
          }
        </p>
      }
    </div >
  );
};

export default Input;


import React from 'react';
import './radio-button.styles.scss';


const RadioButton = ( { label, ...otherProps } ) => (

    <div className="radio-button--container">

        <label className="radio-button--container--label">
            { label }
        </label>

        <input
            className="radio-button--container--input"
            { ...otherProps }
        />

    </div>

);

export default RadioButton;

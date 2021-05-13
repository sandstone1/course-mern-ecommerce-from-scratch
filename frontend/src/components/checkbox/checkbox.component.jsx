
import React from 'react';
import './checkbox.styles.scss';


const Checkbox = ( { label, ...otherProps } ) => (

    <div className="checkbox--container">

        <label className="checkbox--container--label">
            { label }
        </label>

        <input
            className="checkbox--container--input"
            { ...otherProps }
        />

    </div>

);

export default Checkbox;

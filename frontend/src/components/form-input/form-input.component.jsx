
import React from 'react';
import './form-input.styles.scss';


// remember the input element has to be positioned above the label element in order for the
// shrinkLabel(); mixin to work in the form-input-styles.scss file
const FormInput = ( { label, ...otherProps } ) => (

    <div className="form-input--container">

        <input
            className="form-input--container--input"
            { ...otherProps }
        />

        <label
            className=
            { 
                `${ otherProps.value || otherProps.value === 0 ? 'form-input--container--shrink' : '' } form-input--container--label`
            }
        >
            { label }
        </label>

    </div>

);

export default FormInput;

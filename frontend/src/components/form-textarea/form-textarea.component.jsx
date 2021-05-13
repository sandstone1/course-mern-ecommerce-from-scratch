
import React from 'react';
import './form-textarea.styles.scss';


const FormTextArea = ( { label, ...otherProps } ) => (

    <div className="form-textarea--container">

        <label className="form-textarea--container--label">
            { label }
        </label>

        <textarea
            className="form-textarea--container--textarea"
            { ...otherProps }
        />

    </div>

);

export default FormTextArea;

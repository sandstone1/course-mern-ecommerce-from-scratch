
import React from 'react';
import './form-input-v2.styles.scss';


const FormInputVersion2 = ( { label, ...otherProps } ) => (

    <div className="form-input-v2--container">

        <label className="form-input-v2--container--label">
            { label }
        </label>

        <div className="form-input-v2--container--main">        

            <span className="form-input-v2--container--main--span">Edit image file path:</span>

            <input
                className="form-input-v2--container--main--input"
                { ...otherProps }
            />

        </div>

    </div>

);

export default FormInputVersion2;

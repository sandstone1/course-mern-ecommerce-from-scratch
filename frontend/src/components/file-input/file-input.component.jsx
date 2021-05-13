
import React from 'react';
import './file-input.styles.scss';


// remember:
// (1) we have to use onChange and not onClick
// (2) we have to add " htmlFor="file-input-id " to the label below in order to tie the label
// to the file input and now if we click on the label button it has the same effect as clicking
// on the file input button
// (3) we have to hide the ugly file input and this is done by using css
// ( see: http://tympanus.net/codrops/2015/09/15/styling-customizing-file-inputs-smart-way/ )
// (4) we have to have the key value pair of " onChange={ onChange } " on both the file input
// and the label
const FileInput = ( { label, onChange, ...otherProps } ) => (

    <div className="file-input--container">

        <div className="file-input--container--main">        

            <span className="file-input--container--main--span">Choose a file:</span>

            <input
                className="file-input--container--main--input"
                { ...otherProps }
                onChange={ onChange }
            />

            <label
                className="file-input--container--main--label"
                htmlFor="file-input-id"
                onChange={ onChange }
            >
                { label }
            </label>

        </div>

    </div>

);


export default FileInput;

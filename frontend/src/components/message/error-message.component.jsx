
import React from 'react';
import './error-message.styles.scss';

// remember to destructure off the children prop in the argument below since we will
// wrap our message with the code below or the ErrorMessage component and the children
// inside the code below represents our error message
const ErrorMessage = ( { children } ) => (

    <div className="error-message-container">

        <h3 className="error-message-container--h3">{ children }</h3>

    </div>

);


export default ErrorMessage;
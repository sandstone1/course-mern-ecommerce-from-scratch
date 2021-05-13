
import React from 'react';
import './success-message.styles.scss';

// remember to destructure off the children prop in the argument below since we will
// wrap our message with the code below or the SuccessMessage component and the children
// inside the code below represents our success message
const SuccessMessage = ( { children } ) => (

    <div className="success-message-container">

        <h3 className="success-message-container--h3">{ children }</h3>

    </div>

);


export default SuccessMessage;
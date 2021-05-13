
import React from 'react';
import './info-message.styles.scss';

// remember to destructure off the children prop in the argument below since we will
// wrap our message with the code below or the InfoMessage component and the children
// inside the code below represents our info message
const InfoMessage = ( { children } ) => (

    <div className="info-message-container">

        <h3 className="info-message-container--h3">{ children }</h3>

    </div>

);


export default InfoMessage;
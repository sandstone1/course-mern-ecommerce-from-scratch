
/*
// 1 -

import React from 'react';
// import in the Link component
import { Link } from 'react-router-dom';

import './order-item.styles.scss';


const OrderItem = ( { orderItem } ) => {

    // destructure " product ", " name ", " image ", " price " and " quantity " off of
    // orderItem
    const { product, name, image, price, quantity } = orderItem;

    return (
    
        <div className="order-item">

            { /* column 1  - image */ /* }
            <img src={ image } className="order-item--image" alt={ name } />

            { /* column 2 - name */ /* }
            <span className="order-item--name">
                <Link to={ `/product/${ product }` }>{ name }</Link>
            </span>

            { /* column 3 - price */ /* }
            <span className="order-item--price">${ price }</span>

            { /* column 4 - quantity */ /* }
            <span className="order-item--quantity">Quantity of { quantity }</span>

         </div>

    );

}


export default OrderItem;

// End of 1 -
*/


























// ===============================


























// at the beginning of lecture 60, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React from 'react';
// import in the Link component
import { Link } from 'react-router-dom';

import './order-item.styles.scss';


const OrderItem = ( { orderItem } ) => {

    // destructure " product ", " name ", " image ", " price " and " quantity " off of
    // orderItem
    const { product, name, image, price, quantity } = orderItem;

    return (
    
        <div className="order-item">

            { /* column 1  - image */ }
            <img src={ image } className="order-item--image" alt={ name } />

            { /* column 2 - name */ }
            <span className="order-item--name">
                <Link to={ `/product/${ product }` }>{ name }</Link>
            </span>

            { /* column 3 - price */ }
            <span className="order-item--price">${ price }</span>

            { /* column 4 - quantity */ }
            <span className="order-item--quantity">Quantity of { quantity }</span>

         </div>

    );

}


export default OrderItem;


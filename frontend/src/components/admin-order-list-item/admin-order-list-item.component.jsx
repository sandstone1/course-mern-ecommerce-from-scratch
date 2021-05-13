
/*
// 1 -
// coming from admin-order-list-screen.component.jsx 1 - file

import React from 'react';
// import in the Link component
import { Link } from 'react-router-dom';

import './admin-order-list-item.styles.scss';


const AdminOrderListItem = ( { order } ) => {

    // ==============================
    // Destructure order
    // ==============================

    // destructure " _id ", " user ", " createdAt ", " totalPrice ", " isPaid " and " isDelivered "
    // off of order
    const { _id, user, createdAt, totalPrice, isPaid, isDelivered } = order;

    // ==============================
    // Component State
    // ==============================

    // ==============================
    // USEDISPATCH();
    // ==============================

    // ==============================
    // Transform total price
    // ==============================

    // Step 1
    // add decimals and commas to the total price
    const addDecimals = ( number ) => {
        return ( Math.round( number * 100 ) / 100 ).toFixed( 2 ) 
    }

    // Step 2
    // add 2 decimal places
    const totalPriceWithTwoDecimals = addDecimals( totalPrice );

    // Step 3
    // convert the totalPriceWithTwoDecimals to a string for display purposes and add commas
    function numberWithCommas( x ) {
        return x.toString().replace( /\B(?=(\d{3})+(?!\d))/g, "," );
    }

    // Step 4
    // remember totalPriceWithTwoDecimalsAndCommas is a string
    const totalPriceWithTwoDecimalsAndCommas = numberWithCommas( totalPriceWithTwoDecimals );


    return (

        <div className="admin-order-list-item">

            { /* row 2+ and column 1  - _id */ /* }
            <div className="admin-order-list-item--id">{ _id }</div>

            { /* row 2+ and column 2 - user */ /* }
            <div className="admin-order-list-item--user">{ user.name }</div>

            { /* row 2+ and column 3 - createdAt */ /* }
            <div className="admin-order-list-item--date">{ createdAt.substring( 0, 10 ) }</div>

            { /* row 2+ and column 4 - totalPrice */ /* }
            <div className="admin-order-list-item--total-price">${ totalPriceWithTwoDecimalsAndCommas }</div>

            { /* row 2+ and column 5 - paidAt */ /* }
            <div className="admin-order-list-item--is-paid">
                { 
                    isPaid ? (
                        order.paidAt.substring( 0, 10 )
                    ) : (
                        <i className="fas fa-times admin-order-list-item--is-paid--fa-times"></i>
                    )
                }
            </div>

            { /* row 2+ and column 6 - isDelivered */ /* }
            <div className="admin-order-list-item--is-delivered">
                { 
                    isDelivered ? (
                        order.deliveredAt.substring( 0, 10 )
                    ) : (
                        <i className="fas fa-times admin-order-list-item--is-delivered--fa-times"></i>
                    )
                }
            </div>

            { /*  row 2+ and column 7 order details link  */ /* }
            <div className="admin-order-list-item--order-details">

                <Link
                    to={ `/order/${ order._id }` }
                >
                    Details
                </Link>

            </div>

        </div>

    );

}


export default AdminOrderListItem;

// End of 1 -
*/





















// ===============================























// at the beginning of lecture 82, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React from 'react';
// import in the Link component
import { Link } from 'react-router-dom';

import './admin-order-list-item.styles.scss';


const AdminOrderListItem = ( { order } ) => {

    // ==============================
    // Destructure order
    // ==============================

    // destructure " _id ", " user ", " createdAt ", " totalPrice ", " isPaid " and " isDelivered "
    // off of order
    const { _id, user, createdAt, totalPrice, isPaid, isDelivered } = order;

    // ==============================
    // Component State
    // ==============================

    // ==============================
    // USEDISPATCH();
    // ==============================

    // ==============================
    // Transform total price
    // ==============================

    // Step 1
    // add decimals and commas to the total price
    const addDecimals = ( number ) => {
        return ( Math.round( number * 100 ) / 100 ).toFixed( 2 ) 
    }

    // Step 2
    // add 2 decimal places
    const totalPriceWithTwoDecimals = addDecimals( totalPrice );

    // Step 3
    // convert the totalPriceWithTwoDecimals to a string for display purposes and add commas
    function numberWithCommas( x ) {
        return x.toString().replace( /\B(?=(\d{3})+(?!\d))/g, "," );
    }

    // Step 4
    // remember totalPriceWithTwoDecimalsAndCommas is a string
    const totalPriceWithTwoDecimalsAndCommas = numberWithCommas( totalPriceWithTwoDecimals );


    return (

        <div className="admin-order-list-item">

            { /* row 2+ and column 1  - _id */ }
            <div className="admin-order-list-item--id">{ _id }</div>

            { /* row 2+ and column 2 - user */ }
            <div className="admin-order-list-item--user">{ user.name }</div>

            { /* row 2+ and column 3 - createdAt */ }
            <div className="admin-order-list-item--date">{ createdAt.substring( 0, 10 ) }</div>

            { /* row 2+ and column 4 - totalPrice */ }
            <div className="admin-order-list-item--total-price">${ totalPriceWithTwoDecimalsAndCommas }</div>

            { /* row 2+ and column 5 - paidAt */ }
            <div className="admin-order-list-item--is-paid">
                { 
                    isPaid ? (
                        order.paidAt.substring( 0, 10 )
                    ) : (
                        <i className="fas fa-times admin-order-list-item--is-paid--fa-times"></i>
                    )
                }
            </div>

            { /* row 2+ and column 6 - isDelivered */ }
            <div className="admin-order-list-item--is-delivered">
                { 
                    isDelivered ? (
                        order.deliveredAt.substring( 0, 10 )
                    ) : (
                        <i className="fas fa-times admin-order-list-item--is-delivered--fa-times"></i>
                    )
                }
            </div>

            { /*  row 2+ and column 7 order details link  */ }
            <div className="admin-order-list-item--order-details">

                <Link
                    to={ `/order/${ order._id }` }
                >
                    Details
                </Link>

            </div>

        </div>

    );

}


export default AdminOrderListItem;


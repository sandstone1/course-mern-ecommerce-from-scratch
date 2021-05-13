

import React, { Fragment } from 'react';
// import in the Link component
import { Link } from 'react-router-dom';

import './profile-screen-order.styles.scss';


const ProfileScreenOrder = ( { order } ) => {

    // destructure " _id ", " createdAt ", " totalPrice ", " isPaid ", " paidAt ", " isDelivered "
    // and " deliveredAt " off of order
    const { _id, createdAt, totalPrice, isPaid, paidAt, isDelivered, deliveredAt } = order;

    // ==============================
    // FORMAT TOTAL PRICE
    // ==============================

    // Step 1
    // create a function to add 2 decimals to totalPrice and I tested this and
    // it works
    const addDecimals = ( number ) => {
        return ( Math.round( number * 100 ) / 100 ).toFixed( 2 ) 
    }

    // Step 2
    // remember totalPriceSubtotalPriceWithTwoDecimals is a number
    // add 2 decimals to totalPrice
    const totalPriceWithTwoDecimals = addDecimals( totalPrice );

    // Step 3
    // convert the totalPriceWithTwoDecimals to a string for display purposes and we
    // want to add commas to the totalPriceWithTwoDecimals and the function below
    // will add commas to the totalPriceWithTwoDecimals and the function came from
    // stackoverflow
    function numberWithCommas( x ) {
        return x.toString().replace( /\B(?=(\d{3})+(?!\d))/g, "," );
    }

    // Step 4
    // remember totalPriceWithTwoDecimalsAndCommas is a string
    // run the function numberWithCommas(); and use totalPriceWithTwoDecimals as the
    // argument
    const totalPriceWithTwoDecimalsAndCommas = numberWithCommas( totalPriceWithTwoDecimals );

    //--------------------------------------------

    return (
    
        <Fragment>

            { /* row 2+ and column 1  - _id */ }
            <span className="profile--orders--main--id">{ _id }</span>

            { /* row 2+ and column 2 - createdAt */ }
            <span className="profile--orders--main--date">{ createdAt.substring( 0, 10 ) }</span>

            { /* row 2+ and column 3 - totalPrice */ }
            <span className="profile--orders--main--total">${ totalPriceWithTwoDecimalsAndCommas }</span>

            { /* row 2+ and column 4 - paidAt */ }
            <span className="profile--orders--main--paid">
                {
                    isPaid ? (
                        paidAt.substring( 0, 10 )
                    ) : (
                        <i className="fas fa-times profile---orders--main--paid--fa-times"></i>
                    ) 
                }
            </span>

            { /* row 2+ and column 5 - isDelivered */ }
            <span className="profile--orders--main--delivered">
                {
                    isDelivered ? (
                        deliveredAt.substring( 0, 10 )
                    ) : (
                        <i className="fas fa-times profile--orders--main--delivered--fa-times"></i>
                    ) 
                }
            </span>


            { /*  row 2+ and column 6 order details link  */ }
            <div className="profile--orders--main--link-container">
                <Link
                    className="profile--orders--main--link-container--link"
                    to={ `/order/${ order._id }` }
                >
                    Details
                </Link>
            </div>

        </Fragment>

    );

}


export default ProfileScreenOrder;




import React from 'react';
// import in the Link component
import { Link } from 'react-router-dom';

import './profile-screen-order.styles.scss';


const ProfileScreenOrder2 = ( { order } ) => {

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
    
        <div className="profile-screen--orders">

            { /* row 2+ and column 1  - _id */ }
            <span className="profile-screen--orders--id">{ _id }</span>

            { /* row 2+ and column 2 - createdAt */ }
            <span className="profile-screen--orders--date">{ createdAt.substring( 0, 10 ) }</span>

            { /* row 2+ and column 3 - totalPrice */ }
            <span className="profile-screen--orders--total">${ totalPriceWithTwoDecimalsAndCommas }</span>

            { /* row 2+ and column 4 - paidAt */ }
            <span className="profile-screen--orders--paid">
                {
                    isPaid ? (
                        paidAt.substring( 0, 10 )
                    ) : (
                        <i className="fas fa-times profile--screen--orders--paid--fa-times"></i>
                    ) 
                }
            </span>

            { /* row 2+ and column 5 - isDelivered */ }
            <span className="profile-screen--orders--delivered">
                {
                    isDelivered ? (
                        deliveredAt.substring( 0, 10 )
                    ) : (
                        <i className="fas fa-times profile-screen--orders--delivered--fa-times"></i>
                    ) 
                }
            </span>


            { /*  row 2+ and column 6 order details link  */ }
            <div className="profile-screen--orders--link-container">
                <Link
                    className="profile-screen--orders--link-container--link"
                    to={ `/order/${ order._id }` }
                >
                    Details
                </Link>
            </div>

        </div>

    );

}


export default ProfileScreenOrder2;


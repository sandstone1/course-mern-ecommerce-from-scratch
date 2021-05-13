
import React from 'react';
// import in the useSelector(); hook
import { useSelector } from 'react-redux';

import './cart-screen-summary.styles.scss';


const CartScreenSummary = ( { history } ) => {

    // ==============================
    // Component State
    // ==============================

    // ==============================
    // DISPATCH & USESELECTOR();
    // ==============================

    // ==============================
    // userSignIn State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const userSignIn = useSelector( ( state ) => state.userSignIn );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { userInfo } = userSignIn;

    // ==============================
    // cart State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const cart = useSelector( ( state ) => state.cart );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output
    const { cartItems } = cart;

    // ==============================
    // CALCULATIONS
    // ==============================

    // create the subtotal box and this box will contain (1) the total number of cart items,
    // (2) the subtotal of all the cart items and (3) the proceed to checkout button

    // ==============================
    // TOTAL NUMBER OF CART ITEMS
    // ==============================

    // get the number of cart items using the reduce(); method and then show the result in
    // the output below
    const cartItemsCount = 
        cartItems.reduce( ( accumlator, currentElement ) =>
            accumlator + currentElement.quantity,
            0
        );

    // ==============================
    // SUBTOTAL PRICE
    // ==============================

    // get the dollar subtotal for all the items in the cart and again we will use the
    // reduce(); method and then show the result in the output below

    // Step 1 - cartItemsSubtotalPrice
    // get the cart items total price before shipping and taxes
    const cartItemsSubtotalPrice =
        cartItems.reduce( ( accumlator, currentElement ) =>
            accumlator + currentElement.quantity * currentElement.price,
            0
        );

    // Step 2 - cartItemsSubtotalPrice
    // create a function to add 2 decimals to cartItemsSubtotalPrice and I tested this and
    // it works
    const addDecimals = ( number ) => {
        return ( Math.round( number * 100 ) / 100 ).toFixed( 2 ) 
    }

    // Step 3 - cartItemsSubtotalPrice
    // remember cartItemsSubtotalPriceWithTwoDecimals is a number
    // add 2 decimals to cartItemsSubtotalPrice
    const cartItemsSubtotalPriceWithTwoDecimals = addDecimals( cartItemsSubtotalPrice );

    // Step 4 - cartItemsSubtotalPrice
    // convert the cartItemsSubtotalPriceWithTwoDecimals to a string for display purposes and we
    // want to add commas to the cartItemsSubtotalPriceWithTwoDecimals and the function below
    // will add commas to the cartItemsSubtotalPriceWithTwoDecimals and the function came from
    // stackoverflow
    function numberWithCommas( x ) {
        return x.toString().replace( /\B(?=(\d{3})+(?!\d))/g, "," );
    }

    // Step 5 - cartItemsSubtotalPrice
    // remember cartItemsSubtotalPriceWithTwoDecimalsAndCommas is a string
    // run the function numberWithCommas(); and use cartItemsSubtotalPriceWithTwoDecimals as the
    // argument
    const cartItemsSubtotalPriceWithTwoDecimalsAndCommas = numberWithCommas( cartItemsSubtotalPriceWithTwoDecimals );

    // and this works! so everything is working as expected

    // ==============================
    // handleCheckout function
    // ==============================

    // add a button element and then add an onClick event handler to the button and inside this
    // handler or checkoutHandler function let's redirect the user based on whether or not the user
    // is logged in so if the user is not logged in then we will redirect the user to the
    // login page otherwise if the user is logged in then we will redirect the user to shipping
    const handleCheckout = () => {

        // let's make sure the user is logged in before we push them to the shipping screen
        if ( userInfo ) {

            history.push( '/shipping' );

        } else {

            // if the user is not logged in then let's redirect the user to the login
            // screen
            history.push( '/login' );

        } // end of if else statement

    } // end of handleCheckout


    return (

        <div className="cart-screen--cart-summary">  

            { /* column 2 - subtotal box */ }
            <div className="cart-screen--cart-summary--subtotal">

                <span className="cart-screen--cart-summary--subtotal--title">
                    Order Summary
                </span>

                <span className="cart-screen--cart-summary--subtotal--description">
                    <span className="cart-screen--cart-summary--subtotal--description--1">
                        <span className="cart-screen--cart-summary--subtotal--description--1--a">
                            Unit total:
                        </span>                                            
                        <span className="cart-screen--cart-summary--subtotal--description--1--b">
                            { cartItemsCount } items
                        </span>
                    </span>
                    <span className="cart-screen--cart-summary--subtotal--description--2">
                        <span className="cart-screen--cart-summary--subtotal--description--2--a">
                            Subtotal:
                        </span>
                        <span className="cart-screen--cart-summary--subtotal--description--2--b">
                            ${ cartItemsSubtotalPriceWithTwoDecimalsAndCommas }
                        </span>
                    </span>
                </span>

                { /* proceed to checkout button */ }
                <button
                    type="button"
                    className=
                    {
                        cartItems.length > 0 ?
                        'cart-screen--cart-summary--subtotal--btn--active' :
                        'cart-screen--cart-summary--subtotal--btn--disable'
                    }
                    onClick={ handleCheckout }
                >
                    Proceed to Checkout
                </button>

            </div>

        </div>

    );

}

export default CartScreenSummary;

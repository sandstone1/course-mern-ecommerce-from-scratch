
/*
// 1 -

import React from 'react';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
/*
// import in our action creator
import { createOrderActionCreator } from '../../redux/actions/cart.actions';
*/

/*
import './order-summary.styles.scss';


const OrderSummary = ( { history } ) => {

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const cart = useSelector( ( state ) => state.cart );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output
    const { cartItems } = cart;

    // create the subtotal box and this box will contain (1) the total number of cart items
    // (2) the subtotal of all the cart items, (3) shipping price, (4) tax price, (5) total
    // price and (6) the place order button

    // ==============================
    // TOTAL NUMBER OF CART ITEMS
    // ==============================

    // cartItemsCount
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

    // ==============================
    // SHIPPING PRICE
    // ==============================

    // Step 1 - cartShippingPrice
    // if the cartItemsSubtotalPrice is greater than $100 then shipping is free otherwise
    // shipping is a flat $10
    const cartShippingPrice = cartItemsSubtotalPriceWithTwoDecimals > 5100 ? 0 : 10;

    // Step 2 - cartShippingPrice
    // remember cartItemsSubtotalPriceWithTwoDecimals is a number
    // add 2 decimals to cartShippingPrice
    const cartShippingPriceWithTwoDecimals = addDecimals( cartShippingPrice );

    // ==============================
    // TAX PRICE
    // ==============================

    // Step 1 - cartTaxPrice
    // were going to assume the taxes charged are 15% of the subtotal price and we want this
    // to be a number and not a string so we will apply the Number() function to the calculation
    // below
    const cartTaxPrice = Number( ( cartItemsSubtotalPrice * 0.15 ) );

    // Step 2 - cartTaxPrice
    // remember cartItemsSubtotalPriceWithTwoDecimals is a number
    // add 2 decimals to cartTaxPrice
    const cartTaxPriceWithTwoDecimals = addDecimals( cartTaxPrice );

    // Step 3 - cartTaxPrice
    // remember cartTaxPriceWithTwoDecimalsAndCommas is a string
    // run the function numberWithCommas(); and use cartTaxPriceWithTwoDecimals as the argument
    const cartTaxPriceWithTwoDecimalsAndCommas = numberWithCommas( cartTaxPriceWithTwoDecimals );

    // ==============================
    // ORDER TOTAL
    // ==============================

    // Step 1 - cartTotalPrice
    // add subtotal price and shipping price and tax price to get cartTotalPrice and wrap each one
    // in the Number() function just to make sure we are working with numbers
    const cartTotalPrice = 
        Number( cartItemsSubtotalPriceWithTwoDecimals ) +
        Number( cartShippingPriceWithTwoDecimals ) +
        Number( cartTaxPriceWithTwoDecimals );

    // Step 2 - cartTotalPrice
    // make sure cartTotalPrice has 2 decimals
    const cartTotalPriceWithTwoDecimals = cartTotalPrice.toFixed( 2 );

    // Step 3 - cartTotalPrice
    // remember cartTotalPriceWithTwoDecimalsAndCommas is a string
    // run the function numberWithCommas(); and use cartTotalPriceWithTwoDecimals as the argument
    const cartTotalPriceWithTwoDecimalsAndCommas = numberWithCommas( cartTotalPriceWithTwoDecimals );

    // and this works! so everything is working as expected

    // next we want to be able to place an order when we press the Place Order button and by
    // pressing this button we will add an order to the database and in the next video we will
    // go back to the backend and add this functionality

    // define dispatch
    const dispatch = useDispatch();

    /*
    // ==============================
    // HANDLEPLACEORDER
    // ==============================

    // add a button element and then add an onClick event handler to the button and inside this
    // handler or the handlePlaceOrder function let's redirect the user based on whether or not the
    // user is logged in so if the user is not logged in then we will redirect the user to the
    // login page otherwise if the user is logged in then we will redirect the user to the
    // shipping page
    const handlePlaceOrder = () => {

        history.push( '/login?redirect=shipping' );

    }

    // submit handler
    const handleSubmit = ( e ) => {

        e.preventDefault();

        // everytime we submit the form we need to clear out any prior error messages
        setMessage( null );

        const PayPal = document.getElementById( "PayPal" );
        const Stripe = document.getElementById( "Stripe" );

        // before we dispatch the savePaymentMethodActionCreator let's do some front end validation
        if ( PayPal.checked === false && Stripe.checked === false ) {

            // if the user did not check either the PayPal or Stripe payment method then set a
            // new error message
            setMessage( 'Please select a payment method. Please try again.' );

        } else {

            // dispatch our action creator
            dispatch( savePaymentMethodActionCreator( paymentMethod ) );

            // after we dispatch our action creator then we want to push the user to the place
            // order screen
            history.push( '/placeorder' );

        }

    }
    */

    /*
    return (

        <div className="cart-screen--order-summary">  

            { /* column 2 - subtotal box */ /* }
            <div className="cart-screen--order-summary--subtotal">

                <span className="cart-screen--order-summary--subtotal--title">
                    Order Summary
                </span>

                <div className="cart-screen--order-summary--subtotal--description">
                    <div className="cart-screen--order-summary--subtotal--description--1">
                        <span className="cart-screen--order-summary--subtotal--description--1--a">
                            Unit total:
                        </span>                                            
                        <span className="cart-screen--order-summary--subtotal--description--1--b">
                            { cartItemsCount } items
                        </span>
                    </div>
                    <div className="cart-screen--order-summary--subtotal--description--2">
                        <span className="cart-screen--order-summary--subtotal--description--2--a">
                            Order subtotal:
                        </span>
                        <span className="cart-screen--order-summary--subtotal--description--2--b">
                            ${ cartItemsSubtotalPriceWithTwoDecimalsAndCommas }
                        </span>
                    </div>
                    <div className="cart-screen--order-summary--subtotal--description--3">
                        <span className="cart-screen--order-summary--subtotal--description--3--a">
                            Shipping:
                        </span>
                        <span className="cart-screen--order-summary--subtotal--description--3--b">
                            ${ cartShippingPriceWithTwoDecimals }
                        </span>
                    </div>
                    <div className="cart-screen--order-summary--subtotal--description--4">
                        <span className="cart-screen--order-summary--subtotal--description--4--a">
                            Tax:
                        </span>
                        <span className="cart-screen--order-summary--subtotal--description--4--b">
                            ${ cartTaxPriceWithTwoDecimalsAndCommas }
                        </span>
                    </div>
                    <div className="cart-screen--order-summary--subtotal--description--5">
                        <span className="cart-screen--order-summary--subtotal--description--5--a">
                            Total:
                        </span>
                        <span className="cart-screen--order-summary--subtotal--description--5--b">
                            ${ cartTotalPriceWithTwoDecimalsAndCommas }
                        </span>
                    </div>
                </div>

                { /* proceed to checkout button */ /* }
                <button
                    type="button"
                    className=
                    {
                        cartItems.length > 0 ?
                        'cart-screen--order-summary--subtotal--btn--active' :
                        'cart-screen--order-summary--subtotal--btn--disable'
                    }
                    /* onClick={ handlePlaceOrder } */
                /*
                >
                    Place Order
                </button>

            </div>

        </div>

    );

}

export default OrderSummary;

// End of 1 -
*/




























// ===============================


























/*
// at the beginning of lecture 55, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React, { useEffect } from 'react';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in our action creator
import { orderCreateActionCreator } from '../../redux/actions/order.actions';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';

import './order-summary.styles.scss';


const OrderSummary = ( { history } ) => {

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const cart = useSelector( ( state ) => state.cart );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output
    const { cartItems, paymentMethod, shippingAddress } = cart;

    // create the subtotal box and this box will contain (1) the total number of cart items
    // (2) the subtotal of all the cart items, (3) shipping price, (4) tax price, (5) total
    // price and (6) the place order button

    // ==============================
    // TOTAL NUMBER OF ORDER ITEMS / CART ITEMS
    // ==============================

    // orderItemsCount
    // get the number of cart items using the reduce(); method and then show the result in
    // the output below
    const orderItemsCount = 
        cartItems.reduce( ( accumlator, currentElement ) =>
            accumlator + currentElement.quantity,
            0
        );

    // ==============================
    // ORDER ITEMS PRICE
    // ==============================

    // get the dollar subtotal for all the items in the cart and again we will use the
    // reduce(); method and then show the result in the output below

    // Step 1 - orderItemsPrice
    // get the cart items total price before shipping and taxes
    const orderItemsPrice =
        cartItems.reduce( ( accumlator, currentElement ) =>
            accumlator + currentElement.quantity * currentElement.price,
            0
        );

    // Step 2 - orderItemsPrice
    // create a function to add 2 decimals to orderItemsPrice and I tested this and
    // it works
    const addDecimals = ( number ) => {
        return ( Math.round( number * 100 ) / 100 ).toFixed( 2 ) 
    }

    // Step 3 - orderItemsPrice
    // remember cartItemsSubtotalPriceWithTwoDecimals is a number
    // add 2 decimals toorderItemsPrice
    const orderItemsPriceWithTwoDecimals = addDecimals( orderItemsPrice );

    // Step 4 - orderItemsPrice
    // convert the orderItemsPriceWithTwoDecimals to a string for display purposes and we
    // want to add commas to the orderItemsPriceWithTwoDecimals and the function below
    // will add commas to the orderItemsPriceWithTwoDecimals and the function came from
    // stackoverflow
    function numberWithCommas( x ) {
        return x.toString().replace( /\B(?=(\d{3})+(?!\d))/g, "," );
    }

    // Step 5 - orderItemsPrice
    // remember orderItemsPriceWithTwoDecimalsAndCommas is a string
    // run the function numberWithCommas(); and use orderItemsPriceWithTwoDecimals as the
    // argument
    const orderItemsPriceWithTwoDecimalsAndCommas = numberWithCommas( orderItemsPriceWithTwoDecimals );

    // ==============================
    // SHIPPING PRICE
    // ==============================

    // Step 1 - orderShippingPrice
    // if the orderItemsPriceWithTwoDecimals is greater than $100 then shipping is free otherwise
    // shipping is a flat $10
    const orderShippingPrice = orderItemsPriceWithTwoDecimals > 100 ? 0 : 10;

    // Step 2 - orderShippingPrice
    // remember orderItemsPriceWithTwoDecimals is a number
    // add 2 decimals to orderShippingPrice
    const orderShippingPriceWithTwoDecimals = addDecimals( orderShippingPrice );

    // ==============================
    // TAX PRICE
    // ==============================

    // Step 1 - orderTaxPrice
    // were going to assume the taxes charged are 15% of the subtotal price and we want this
    // to be a number and not a string so we will apply the Number() function to the calculation
    // below
    const orderTaxPrice = Number( ( orderItemsPrice * 0.15 ) );

    // Step 2 - orderTaxPrice
    // remember orderTaxPriceWithTwoDecimals is a number
    // add 2 decimals to orderTaxPrice
    const orderTaxPriceWithTwoDecimals = addDecimals( orderTaxPrice );

    // Step 3 - orderTaxPrice
    // remember orderTaxPriceWithTwoDecimalsAndCommas is a string
    // run the function numberWithCommas(); and use orderTaxPriceWithTwoDecimals as the argument
    const orderTaxPriceWithTwoDecimalsAndCommas = numberWithCommas( orderTaxPriceWithTwoDecimals );

    // ==============================
    // TOTAL PRICE
    // ==============================

    // Step 1 - orderTotalPrice
    // add order items price and shipping price and tax price to get orderTotalPrice and wrap each one
    // in the Number() function just to make sure we are working with numbers
    const orderTotalPrice = 
        Number( orderItemsPriceWithTwoDecimals ) +
        Number( orderShippingPriceWithTwoDecimals ) +
        Number( orderTaxPriceWithTwoDecimals );

    // Step 2 - orderTotalPrice
    // make sure orderTotalPrice has 2 decimals
    const orderTotalPriceWithTwoDecimals = orderTotalPrice.toFixed( 2 );

    // Step 3 - orderTotalPrice
    // remember orderTotalPriceWithTwoDecimalsAndCommas is a string
    // run the function numberWithCommas(); and use orderTotalPriceWithTwoDecimals as the argument
    const orderTotalPriceWithTwoDecimalsAndCommas = numberWithCommas( orderTotalPriceWithTwoDecimals );

    // and this works! so everything is working as expected

    // define dispatch
    const dispatch = useDispatch();


    // 2 -
    // coming from the order.actions.js 1 - file

    // import in our action creator above and then dispatch this action creator inside the
    // handlePlaceOrder function below 

    // above the handlePlaceOrder function let's grab the orderCreate state

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const orderCreate = useSelector( ( state ) => state.orderCreate );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output
    const { order, success, error } = orderCreate;

    // let's use the useEffect(); hook to redirect the user if the order was added to the
    // database successfully or if everything worked as expected
    useEffect( () => {

        // if success is true then let's redirect the user
        if ( success ) {

            // and remember when we create an order in the database, MongoDB will automatically
            // create an id for us and we can then use that id in history.push(); below
            history.push( `/order/${ order._id }` );
    
        }

        // put the line below so that our intergated terminal doesn't complain about
        // " ${ order._id } " since this variable will not exist until we dispatch the action
        // creator below
        // eslint-disable-next-line

    }, [ history, success ] );


    // ==============================
    // HANDLEPLACEORDER
    // ==============================

    // submit handler
    const handlePlaceOrder = ( e ) => {

        e.preventDefault();

        const orderCreateObject = {
            orderItems      : cartItems,
            shippingAddress : shippingAddress,
            paymentMethod   : paymentMethod,
            itemsPrice      : orderItemsPriceWithTwoDecimals,
            shippingPrice   : orderShippingPriceWithTwoDecimals,
            taxPrice        : orderTaxPriceWithTwoDecimals,
            totalPrice      : orderTotalPriceWithTwoDecimals,
        };

        // dispatch our action creator
        dispatch( orderCreateActionCreator( orderCreateObject ) );

    }

    // let's test this out by pressing the Place Order button and after we press the Place
    // Order button we are directed to the following URL:
    // " http://localhost:3008/order/605680e97972ce2f26c6b1cf "

    // and " 605680e97972ce2f26c6b1cf " matches our order._id value so the URL is correct
    // and everything is working as expected

    // inside the state tab in redux dev tools we see:

    /*
        orderCreate (pin)
            loading (pin): false
            success (pin): true
            order (pin)
                shippingPrice (pin): 0
                taxPrice (pin): 692.99
                totalPrice (pin): 5312.89
                isPaid (pin): false
                isDelivered (pin): false
                _id (pin): "605680e97972ce2f26c6b1cf"
                orderItems (pin): [ {...}, {...}, {...} ]
                shippingAddress (pin):
                    address (pin): "3838 Vista Drive"
                    city (pin): "Sandy"
                    postalCode (pin): "84090"
                    country (pin): "United States"
                paymentMethod (pin): "Credit Card"
                user (pin): "5ff504545a6a66457f0b0705"
                createdAt (pin): "2021-03-20T23:10:33.125Z"
                updatedAt (pin): "2021-03-20T23:10:33.125Z"
                __v (pin): 0
    */

    // and this is correct so everything is working as expected

    // and if we check our database we will see the following:

    /*
        proshop
            orders
                {
                    "_id": {"$oid":"605680e97972ce2f26c6b1cf"},
                    "shippingPrice":0,
                    "taxPrice":692.99,
                    "totalPrice":5312.89,
                    "isPaid":false,
                    "isDelivered":false,
                    "orderItems":
                        [
                            {
                                "_id":{"$oid":"605680e97972ce2f26c6b1d0"},
                                "product":{"$oid":"5ff504545a6a66457f0b0709"},
                                "name":"Cannon EOS 80D DSLR Camera",
                                "image":"/images/camera.jpg",
                                "price":929.99,
                                "quantity":2
                            },
                            {
                                "_id":{"$oid":"605680e97972ce2f26c6b1d1"},
                                "product":{"$oid":"5ff504545a6a66457f0b0708"},
                                "name":"iPhone 11 Pro 256GB Memory",
                                "image":"/images/phone.jpg",
                                "price":599.99,
                                "quantity":4
                            },
                            {
                                "_id":{"$oid":"605680e97972ce2f26c6b1d2"},
                                "product":{"$oid":"5ff504545a6a66457f0b0707"},
                                "name":"Airpods Wireless Headphones",
                                "image":"/images/airpods.jpg",
                                "price":89.99,
                                "quantity":4
                            }
                        ],
                    "shippingAddress":
                        {
                            "address":"3838 Vista Drive",
                            "city":"Sandy",
                            "postalCode":"84090",
                            "country":"United States"
                        },
                    "paymentMethod":"Credit Card",
                    "user":{"$oid":"5ff504545a6a66457f0b0705"},
                    "createdAt":{"$date":"2021-03-20T23:10:33.125Z"},
                    "updatedAt":{"$date":"2021-03-20T23:10:33.125Z"},
                    "__v":0
                }
            products
            users
    */

    // and this is correct so everything is working as expected

    // and the user id of " 5ff504545a6a66457f0b0705 " ties into John Doe and this
    // is correct so everything is working as expected

    // the order screen or the screen at URL " http://localhost:3008/order/605680e97972ce2f26c6b1cf "
    // will look similiar to the place order screen but the order screen will contain a button
    // that the user can use to pay for the order and the order screen will have an area indicating
    // whether or not the items have been delivered and the admin can come to this page and set
    // the items to delivered if needed and the user can keep coming back to this order page to
    // check on their order

    // in the next video, we will start working on the order screen and the related functionality

    // End of 2 -


    /*
    return (

        <div className="place-order-screen--order-summary">  

            { /* column 2 - subtotal box */ /* }
            <div className="place-order-screen--order-summary--subtotal">

                <span className="place-order-screen--order-summary--subtotal--title">
                    Order Summary
                </span>

                <div className="place-order-screen--order-summary--subtotal--description">
                    <div className="place-order-screen--order-summary--subtotal--description--1">
                        <span className="place-order-screen--order-summary--subtotal--description--1--a">
                            Unit total:
                        </span>                                            
                        <span className="place-order-screen--order-summary--subtotal--description--1--b">
                            { orderItemsCount } items
                        </span>
                    </div>
                    <div className="place-order-screen--order-summary--subtotal--description--2">
                        <span className="place-order-screen--order-summary--subtotal--description--2--a">
                            Subtotal:
                        </span>
                        <span className="place-order-screen--order-summary--subtotal--description--2--b">
                            ${ orderItemsPriceWithTwoDecimalsAndCommas }
                        </span>
                    </div>
                    <div className="place-order-screen--order-summary--subtotal--description--3">
                        <span className="place-order-screen--order-summary--subtotal--description--3--a">
                            Shipping:
                        </span>
                        <span className="place-order-screen--order-summary--subtotal--description--3--b">
                            ${ orderShippingPriceWithTwoDecimals }
                        </span>
                    </div>
                    <div className="place-order-screen--order-summary--subtotal--description--4">
                        <span className="place-order-screen--order-summary--subtotal--description--4--a">
                            Tax:
                        </span>
                        <span className="place-order-screen--order-summary--subtotal--description--4--b">
                            ${ orderTaxPriceWithTwoDecimalsAndCommas }
                        </span>
                    </div>
                    <div className="place-order-screen--order-summary--subtotal--description--5">
                        <span className="place-order-screen--order-summary--subtotal--description--5--a">
                            Total:
                        </span>
                        <span className="place-order-screen--order-summary--subtotal--description--5--b">
                            ${ orderTotalPriceWithTwoDecimalsAndCommas }
                        </span>
                    </div>
                </div>

                { /* check error */ /* }
                { error && <ErrorMessage>{ error }</ErrorMessage> }

                { /* proceed to checkout button */ /* }
                <button
                    type="button"
                    className=
                    {
                        cartItems.length > 0 ?
                        'place-order-screen--order-summary--subtotal--btn--active' :
                        'place-order-screen--order-summary--subtotal--btn--disable'
                    }
                    onClick={ handlePlaceOrder }
                >
                    Place Order
                </button>

            </div>

        </div>

    );

}

export default OrderSummary;
*/



























// ===============================



























// at the beginning of lecture 57, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React, { useEffect } from 'react';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in our action creator
import { orderCreateActionCreator } from '../../redux/actions/order.actions';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';
// import in the ORDER_CREATE_RESET constant
import { ORDER_CREATE_RESET } from '../../redux/constants/order.constants';

import './place-order-screen-summary.styles.scss';


const PlaceOrderScreenSummary = ( { history } ) => {

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const cart = useSelector( ( state ) => state.cart );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output
    const { cartItems, paymentMethod, shippingAddress } = cart;

    // create the order summary box and this box will contain (1) the total number of cart items
    // (2) the subtotal of all the cart items, (3) shipping price, (4) tax price, (5) total
    // price and (6) the place order button

    // ==============================
    // TOTAL NUMBER OF ORDER ITEMS / CART ITEMS
    // ==============================

    // orderItemsCount
    // get the number of cart items using the reduce(); method and then show the result in
    // the output below
    const orderItemsCount = 
        cartItems.reduce( ( accumlator, currentElement ) =>
            accumlator + currentElement.quantity,
            0
        );

    // ==============================
    // ORDER ITEMS PRICE
    // ==============================

    // get the dollar subtotal for all the items in the cart and again we will use the
    // reduce(); method and then show the result in the output below

    // Step 1 - orderItemsPrice
    // get the cart items total price before shipping and taxes
    const orderItemsPrice =
        cartItems.reduce( ( accumlator, currentElement ) =>
            accumlator + currentElement.quantity * currentElement.price,
            0
        );

    // Step 2 - orderItemsPrice
    // create a function to add 2 decimals to orderItemsPrice and I tested this and
    // it works
    const addDecimals = ( number ) => {
        return ( Math.round( number * 100 ) / 100 ).toFixed( 2 ) 
    }

    // Step 3 - orderItemsPrice
    // remember cartItemsSubtotalPriceWithTwoDecimals is a number
    // add 2 decimals toorderItemsPrice
    const orderItemsPriceWithTwoDecimals = addDecimals( orderItemsPrice );

    // Step 4 - orderItemsPrice
    // convert the orderItemsPriceWithTwoDecimals to a string for display purposes and we
    // want to add commas to the orderItemsPriceWithTwoDecimals and the function below
    // will add commas to the orderItemsPriceWithTwoDecimals and the function came from
    // stackoverflow
    function numberWithCommas( x ) {
        return x.toString().replace( /\B(?=(\d{3})+(?!\d))/g, "," );
    }

    // Step 5 - orderItemsPrice
    // remember orderItemsPriceWithTwoDecimalsAndCommas is a string
    // run the function numberWithCommas(); and use orderItemsPriceWithTwoDecimals as the
    // argument
    const orderItemsPriceWithTwoDecimalsAndCommas = numberWithCommas( orderItemsPriceWithTwoDecimals );

    // ==============================
    // SHIPPING PRICE
    // ==============================

    // Step 1 - orderShippingPrice
    // if the orderItemsPriceWithTwoDecimals is greater than $100 then shipping is free otherwise
    // shipping is a flat $10
    const orderShippingPrice = orderItemsPriceWithTwoDecimals > 100 ? 0 : 10;

    // Step 2 - orderShippingPrice
    // remember orderItemsPriceWithTwoDecimals is a number
    // add 2 decimals to orderShippingPrice
    const orderShippingPriceWithTwoDecimals = addDecimals( orderShippingPrice );

    // ==============================
    // TAX PRICE
    // ==============================

    // Step 1 - orderTaxPrice
    // were going to assume the taxes charged are 15% of the subtotal price and we want this
    // to be a number and not a string so we will apply the Number() function to the calculation
    // below
    const orderTaxPrice = Number( ( orderItemsPrice * 0.15 ) );

    // Step 2 - orderTaxPrice
    // remember orderTaxPriceWithTwoDecimals is a number
    // add 2 decimals to orderTaxPrice
    const orderTaxPriceWithTwoDecimals = addDecimals( orderTaxPrice );

    // Step 3 - orderTaxPrice
    // remember orderTaxPriceWithTwoDecimalsAndCommas is a string
    // run the function numberWithCommas(); and use orderTaxPriceWithTwoDecimals as the argument
    const orderTaxPriceWithTwoDecimalsAndCommas = numberWithCommas( orderTaxPriceWithTwoDecimals );

    // ==============================
    // TOTAL PRICE
    // ==============================

    // Step 1 - orderTotalPrice
    // add order items price and shipping price and tax price to get orderTotalPrice and wrap each one
    // in the Number() function just to make sure we are working with numbers
    const orderTotalPrice = 
        Number( orderItemsPriceWithTwoDecimals ) +
        Number( orderShippingPriceWithTwoDecimals ) +
        Number( orderTaxPriceWithTwoDecimals );

    // Step 2 - orderTotalPrice
    // remember orderTotalPriceWithTwoDecimals is a number
    // make sure orderTotalPrice has 2 decimals
    const orderTotalPriceWithTwoDecimals = orderTotalPrice.toFixed( 2 );

    // Step 3 - orderTotalPrice
    // remember orderTotalPriceWithTwoDecimalsAndCommas is a string
    // run the function numberWithCommas(); and use orderTotalPriceWithTwoDecimals as the argument
    const orderTotalPriceWithTwoDecimalsAndCommas = numberWithCommas( orderTotalPriceWithTwoDecimals );


    // ==============================
    // DISPATCH & USESELECTOR(); & USEEFFECT();
    // ==============================

    // define dispatch
    const dispatch = useDispatch();

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const orderCreate = useSelector( ( state ) => state.orderCreate );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output
    const { order, success, error } = orderCreate;

    // use the useEffect(); hook to redirect the user if the order was added to the
    // database successfully or if everything worked as expected
    useEffect( () => {

        // if success is true then let's redirect the user
        if ( success ) {

            // and remember when we create an order in the database, MongoDB will automatically
            // create an id for us and we can then use that id in history.push(); below
            history.push( `/order/${ order._id }` );


            // 2 -

            // clear the order object so a user can make 2 or more orders in a quick succession
            dispatch( {
                type: ORDER_CREATE_RESET
            } );

            // End of 2 -


        }

    // put the line below so that our intergated terminal and / or browser console doesn't
    // complain about " ${ order._id } " since this variable will not exist until we dispatch
    // the action creator below
    // eslint-disable-next-line
    }, [ history, success ] );


    // ==============================
    // HANDLEPLACEORDER
    // ==============================

    // submit handler
    const handlePlaceOrder = ( e ) => {

        e.preventDefault();

        const orderCreateObject = {
            orderItems      : cartItems,
            shippingAddress : shippingAddress,
            paymentMethod   : paymentMethod,
            itemsPrice      : orderItemsPriceWithTwoDecimals,
            shippingPrice   : orderShippingPriceWithTwoDecimals,
            taxPrice        : orderTaxPriceWithTwoDecimals,
            totalPrice      : orderTotalPriceWithTwoDecimals,
        };

        // dispatch our action creator
        dispatch( orderCreateActionCreator( orderCreateObject ) );

    }

    return (

        <div className="place-order-screen--order-summary">  

            { /* column 2 - subtotal box */ }
            <div className="place-order-screen--order-summary--subtotal">

                <span className="place-order-screen--order-summary--subtotal--title">
                    Order Summary
                </span>

                <div className="place-order-screen--order-summary--subtotal--description">
                    <div className="place-order-screen--order-summary--subtotal--description--1">
                        <span className="place-order-screen--order-summary--subtotal--description--1--a">
                            Unit total:
                        </span>                                            
                        <span className="place-order-screen--order-summary--subtotal--description--1--b">
                            { orderItemsCount } items
                        </span>
                    </div>
                    <div className="place-order-screen--order-summary--subtotal--description--2">
                        <span className="place-order-screen--order-summary--subtotal--description--2--a">
                            Subtotal:
                        </span>
                        <span className="place-order-screen--order-summary--subtotal--description--2--b">
                            ${ orderItemsPriceWithTwoDecimalsAndCommas }
                        </span>
                    </div>
                    <div className="place-order-screen--order-summary--subtotal--description--3">
                        <span className="place-order-screen--order-summary--subtotal--description--3--a">
                            Shipping:
                        </span>
                        <span className="place-order-screen--order-summary--subtotal--description--3--b">
                            ${ orderShippingPriceWithTwoDecimals }
                        </span>
                    </div>
                    <div className="place-order-screen--order-summary--subtotal--description--4">
                        <span className="place-order-screen--order-summary--subtotal--description--4--a">
                            Tax:
                        </span>
                        <span className="place-order-screen--order-summary--subtotal--description--4--b">
                            ${ orderTaxPriceWithTwoDecimalsAndCommas }
                        </span>
                    </div>
                    <div className="place-order-screen--order-summary--subtotal--description--5">
                        <span className="place-order-screen--order-summary--subtotal--description--5--a">
                            Total:
                        </span>
                        <span className="place-order-screen--order-summary--subtotal--description--5--b">
                            ${ orderTotalPriceWithTwoDecimalsAndCommas }
                        </span>
                    </div>
                </div>

                { /* check error */ }
                { error && <ErrorMessage>{ error }</ErrorMessage> }

                { /* proceed to checkout button */ }
                <button
                    type="button"
                    className=
                    {
                        cartItems.length > 0 ?
                        'place-order-screen--order-summary--subtotal--btn--active' :
                        'place-order-screen--order-summary--subtotal--btn--disable'
                    }
                    onClick={ handlePlaceOrder }
                >
                    Place Order
                </button>

            </div>

        </div>

    );

}

export default PlaceOrderScreenSummary;


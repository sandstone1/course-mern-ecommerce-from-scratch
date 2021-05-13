
/*
// 1 -

// let's start by copying and pasting the place-order-screen.component.jsx file into this
// file

import React, { useEffect } from 'react';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
/*
// import in the Link component
import { Link } from 'react-router-dom';
*/
/*
// import in our action creator
import { orderGetActionCreator } from '../../redux/actions/order.actions';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';
// import in the SuccessMessage component
import SuccessMessage from '../../components/message/success-message.component';
// import in the OrderItem component
import OrderItem from '../../components/order-item/order-item.component';
// import in the OrderSummary component
import OrderScreenSummary from '../../components/order-screen-summary/order-screen-summary.component';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner.component';

import './order-screen.styles.scss';


const OrderScreen = ( { match } ) => {

    // get the order id
    const orderId = match.params.id;

    // remember for this component we want to pull the order details from the database and then
    // use that information to populate the output

    // ==============================
    // DISPATCH & USESELECTOR(); & USEEFFECT();
    // ==============================

    // define dispatch
    const dispatch = useDispatch();

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const orderGet = useSelector( ( state ) => state.orderGet );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output
    const { loading, order, error } = orderGet;

    // remember we want to call the action creator as soon as the component loads and we can do
    // that by using the useEffect(); hook and then dispatching our action creator inside the
    // useEffect(); hook
    useEffect( () => {

        // dispatch the orderGetActionCreator
        dispatch( orderGetActionCreator( orderId ) );

    }, [ match, dispatch, orderId ] );

    // let's add the user's name and email below the shipping h2 tag

    // now we have the order in the database but it's not paid and we can see that in the
    // database or " isPaid : false " and we want to start to implement our PayPal button so
    // the order can be paid but before we do that let's show if the order has been paid or
    // not and let's show if the order has been delivered or not

    // and let's show if the order has been paid or not inside the
    // order--screen--payment-method div and let's show if the order has been delivered
    // or not inside the order--screen--shipping div

    // in the next video we will add our PayPal button and create a PayPal API key

    // before moving on to the main block of code, check loading and error
    return (

        loading ? (

            <Spinner />

        ) : error ? (

            <ErrorMessage>{ error }</ErrorMessage>

        ) : (

            // create the screen and provide a top level div for react
            <div className="order">

                { 
                /* breadcrumb for mobile devices or 620px or less for this app 
                <Link to="/placeorder" className="order--breadcrumb">&#60; Cancel Order</Link>
                */ 
                /* }

                <div className="order--screen">

                    <div className="order--screen--order-id">

                        <h2 className="order--screen--order-id--title">Order ID</h2>
                        <span>{ order._id }</span>

                    </div>

                    <div className="order--screen--shipping">

                        <h2 className="order--screen--shipping--title">Shipping</h2>

                        <ul className="order--screen--shipping--ul-1">
                            <li>Name:</li>
                            <li>{ order.user.name }</li>
                        </ul>

                        <ul className="order--screen--shipping--ul-1">
                            <li>Email:</li>
                            <li><a href={ `mailto:${ order.user.email }` }>{ order.user.email }</a></li>
                        </ul>

                        <ul className="order--screen--shipping--ul-1 order--screen--shipping--ul-1--last-child">
                            <li>Address:</li>
                            <li>{ order.shippingAddress.address },</li>
                            <li>{ order.shippingAddress.city }</li>
                            <li>{ order.shippingAddress.postalCode }</li>
                            <li>{ order.shippingAddress.country }</li>
                        </ul>

                        <ul className="order--screen--shipping--ul-2">
                            <li>
                                { 
                                    order.isDelivered ? (

                                        <SuccessMessage>Delivered on { order.deliveredAt }</SuccessMessage>

                                    ) : (

                                        <ErrorMessage>Order has not been delivered.</ErrorMessage>

                                    ) 
                                }
                            </li>
                        </ul>

                    </div>

                    <div className="order--screen--payment-method">

                        <h2 className="order--screen--payment-method--title">Payment Method</h2>

                        <ul className="order--screen--payment-method--ul-1">
                            <li>Payment Method:</li>
                            <li>{ order.paymentMethod }</li>
                        </ul>

                        <ul className="order--screen--payment-method--ul-2">
                            <li>
                                { 
                                    order.isPaid ? (

                                        <SuccessMessage>Paid on { order.paidAt }</SuccessMessage>

                                    ) : (

                                        <ErrorMessage>Order has not been paid.</ErrorMessage>

                                    ) 
                                }
                            </li>
                        </ul>

                    </div>

                    <div className="order--screen--order-items">

                        <h2 className="order--screen--order-items--title">Order Items</h2>

                        {
                            order.orderItems.length === 0 ? <ErrorMessage>Your order is empty</ErrorMessage> : (

                                order.orderItems.map( ( orderItem ) => (

                                    <OrderItem
                                        key={ orderItem.product }
                                        orderItem={ orderItem }
                                    />

                                ) )

                            )
                        
                        }

                    </div>

                    <div className="order--screen--order-summary">

                        <OrderScreenSummary order={ order } />

                    </div>

                </div>

            </div> // end of confirm-order

        )

    );

}


export default OrderScreen;


// End of 1 -
*/



























// ===============================

























/*
// at the beginning of lecture 60, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React, { useEffect, useState } from 'react';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
/*
// import in the Link component
import { Link } from 'react-router-dom';
*/
// import in our action creator
/*
import { orderGetActionCreator } from '../../redux/actions/order.actions';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';
// import in the SuccessMessage component
import SuccessMessage from '../../components/message/success-message.component';
// import in the OrderItem component
import OrderItem from '../../components/order-item/order-item.component';
// import in the OrderSummary component
import OrderScreenSummary from '../../components/order-screen-summary/order-screen-summary.component';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner.component';

import './order-screen.styles.scss';


// 2 -

// so now we need to include a PayPal script and to get the script let's search for
// " paypal sdk script " and the first search result will take us to the following URL:
// " https://developer.paypal.com/docs/checkout/reference/customize-sdk/ " and this page
// looks like the following:

/*
    Customize the PayPal JavaScript SDK Script => Heading

    You can customize the integration by passing query parameters and script parameters
    in the SDK script tag. These parameters help PayPal decide the optimal funding sources
    and buttons to show to your buyers.

    Query parameters => Heading

    Pass these parameters to the SDK script URL as query parameters. For example:

    <script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"></script>

    If you don't pass these parameters to the SDK, the PayPal JavaScript SDK uses the
    default value listed.

    Option	    Example value	    Default	        Description

    client-id	test	            n/a	            Required.

                                                    Your PayPal REST client ID. This
                                                    identifies your PayPal account,
                                                    and determines where any transactions
                                                    are paid to. While you're testing in
                                                    sandbox, you can use client-id=sb as
                                                    a shortcut.

    ...

    ...
*/

// and we will build this script or
// " <script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"></script> "
// dynamically from inside the useEffect(); hook

// let's import in axios so we can make a request to the following backend route or
// " '/api/config/paypal' " and get our PayPal CLient ID
/*
import axios from 'axios';

// and now let's go to the useEffect(); hook below and build the script above

// End of 2 -


// 8 -

// import in the ORDER_PAY_RESET constant
import { ORDER_PAY_RESET } from '../../redux/constants/order.constants';

// and then let's dispatch the ORDER_PAY_RESET constant from this file and remember
// we don't have to dispatch from an action file but it is neater to keep everything
// in an action file

// let's go to 9 - below

// End of 8 -


const OrderScreen = ( { match } ) => {

    // get the order id
    const orderId = match.params.id;


    // 3 -

    // continue to 2 - below before going through 3 -

    // set the default value to false
    const [ sdkReady, setSdkReady ] = useState( false );

    // and now let's go to 4 - below

    // End of 3 -


    // remember for this component we want to pull the order details from the database and then
    // use that information to populate the output

    // ==============================
    // DISPATCH & USESELECTOR(); & USEEFFECT();
    // ==============================

    // define dispatch
    const dispatch = useDispatch();

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const orderGet = useSelector( ( state ) => state.orderGet );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output
    const { loading, order, error } = orderGet;

    // 5 -

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const orderPay = useSelector( ( state ) => state.orderPay );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output

    // since we already have loading defined above let's rename loading below to loadingPay
    // and then do the same for success
    const { loading : loadingPay, success : successPay } = orderPay;

    // go to 6 - below

    // End of 5 -

    useEffect( () => {

        // 2 - continued

        /*
        // when this component loads we will build the PayPal script above
        const addPayPalScript = async () => {

            // inside this async arrow function we will fetch the PayPal client id from the
            // backend and in this case the data object is equal to the PayPal client id
            // whereas in most cases the data object equals another object with several key
            // value pairs

            // and remember the route " '/api/config/paypal' " was defined in the server.js
            // file

            // and remember we have to destructure the data object off of the response object
            // in order to get the clientId
            const { data : clientId } = await axios.get( '/api/config/paypal' );

            // for now let's just console.log(); the clientId
            console.log( clientId );

        }

        // we defined addPayPalScript above, now let's call it
        addPayPalScript();

        // now let's go to the order screen and look in the console and when we do we see the
        // following id:
        // " ATMe3V5d6qyG8060xCnX1RnWGAcE2cLps-rQyoN9HbIqWCjVOaq4q0HHrVYrJhO2ZApJSJZ-O1IqvL84 "

        // and this is correct so everything is working as expected
        */

        // so let's continue building the script

        // when this component loads we will build the PayPal script above
        /*
        const addPayPalScript = async () => {

            // inside this async arrow function we will fetch the PayPal client id from the
            // backend and in this case the data object is equal to the PayPal client id
            // whereas in most cases the data object equals another object with several key
            // value pairs

            // and remember the route " '/api/config/paypal' " was defined in the server.js
            // file

            // and remember we have to destructure the data object off of the response object
            // in order to get the clientId
            const { data : clientId } = await axios.get( '/api/config/paypal' );

            // create a script element
            const script = document.createElement( 'script' );

            // add the type to script
            script.type = 'text/javascript';

            // add the source
            script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`

            // we want the script to be asynchronous
            script.async = true;

            // let's create a piece of state for when the sdk is ready so let's import
            // the useState(); hook above and let's go to 3 - above

            // 4 -
            // once the script loads we will setSdkReady to true
            script.onload = () => {

                setSdkReady( true );

            }

            // then we want to add the script to the body of our document
            document.body.appendChild( script );

            // so all were doing here is dynamically adding the PayPal script to the order
            // screen component

            // go to 5 - above

            // End of 4 -

        }

        // End of 2 -


        // if there is no order or the order id in the database does not match the order id
        // in the URL then dispatch the action creator and get the most recent order

        // 6 -

        // if successPay is true then we want to call the orderGetActionCreator again
        // and show that the order has been paid in the output below
        if ( !order || order._id !== orderId || successPay ) {

            // 9 -
            // inside this if statement we want to dispatch the ORDER_PAY_RESET constant and
            // remember we are doing this so that we don't end up in an infinite loop
            dispatch( {
                type : ORDER_PAY_RESET
            } );

            // now if we go back to the order screen we see the following under the Order
            // Summary box:

            /*
                PayPal button => button
                Pay Later button => button
                Debit or Credit Card button => button
                    Powered by PayPal => text which is centered
            */

            // and this is correct so everything is working as expected

            // let's move the PayPal buttons into the order-screen-summary.component.jsx 2 -
            // file now

            // End of 9 -

            // dispatch the orderGetActionCreator
            /*
            dispatch( orderGetActionCreator( orderId ) );

        }

        // the PayPal script still isn't added since we have not called addPayPalScript();
        // so let's add the PayPal script below

        // so if there is an order and the order.id === orderId and successPay if false
        // then we will move to the else if statement below

        // first, check to see if the order is paid and if not then proceed to the next if
        // statement
        else if ( !order.isPaid ) {

            // The Window Object
            // The window object is supported by all browsers. It represents the browser's
            // window.

            // All global JavaScript objects, functions, and variables automatically become
            // members of the window object.

            // Global variables are properties of the window object.

            // Global functions are methods of the window object.

            // Even the document object (of the HTML DOM) is a property of the window object:

            // window.document.getElementById("header"); is the same as:

            // document.getElementById("header");
            // End of The Window Object

            // so paypal must be a global variable of the window object and therefore we can
            // check to see if it exist and if not then we will call the addPayPalScript();
            if ( !window.paypal ) {

                // add the PayPal script to the document 
                addPayPalScript();

            } else {

                // setSdkReady to true
                setSdkReady( true );

            }

        } // end of else if ( !order.isPaid )

        // now if we go back to the order screen and look in the elements section, we should
        // see our PayPal script and we do see our PayPal script or:

        /*
            <script type="text/javascript" src="https://www.paypal.com/sdk/js?client-id=
            ATMe3V5d6qyG8060xCnX1RnWGAcE2cLps-rQyoN9HbIqWCjVOaq4q0HHrVYrJhO2ZApJSJZ-O1IqvL84"
            async="" data-uid-auto="4d040ce69c_mtg6mzu6mdg"></script>
        */

        // and this is correct so everything is working as expected

        // as far as the PayPal buttons are concerned, we are going to use a npm package
        // called react-paypal-button-v2 and let's go to the following website to get
        // the package for the PayPal buttons:
        // " https://www.npmjs.com/package/react-paypal-button-v2 "

        // in the docs for the page, it says: " An easy and simple to use React button
        // component to implement PayPal's Checkout with Smart Payment Buttons V2 (Version 2).

        // This PayPal Checkout integration uses the PayPal JavaScript SDK. "

        // let's install this package and make sure we are in the frontend when we
        // install this package or:

        // Home@Rogers-iMac mern_ecommerce_from_scratch % cd frontend
        // Home@Rogers-iMac frontend % npm i react-paypal-button-v2 ( and then press enter )

        // #17
        // react-paypal-button-v2: " Home@Rogers-iMac frontend % npm i react-paypal-button-v2 "
        // and this will install react-paypal-button-v2 in our application
        // lecture 63: Adding PayPal Payments

        // now let's import in react-paypal-button-v2 above

        // now let's insert our PayPal buttons below

        // go to 7 - below

        // End of 6 -

    /*
    }, [ dispatch, order, orderId, successPay ] );


    // moved 7 - to the order-screen-summary.component.jsx 2 - file but I keep the commented
    // out code here as a reference

    /*
    // 7 -

    // define the handleSuccessPayment function and once we press the PayPal button we
    // get a paymentResult that we can use as the argument to handleSuccessPayment()
    const handleSuccessPayment = ( paymentResult ) => {

        // e.preventDefault();

        console.log( paymentResult );

        // the console.log( paymentResult ); results in the following:

        /*


        */

        // and this is correct so everything is working as expected

        // let's comment out console.log( paymentResult ); and move to the next line of
        // code

        // and remember once the user presses the PayPal button we will update the database
        // to paid or " isPaid : true ", set paidAt to the current date and then add the
        // paymentResult object to the database

        // once " isPaid : true " then successPay above will evaluate to true and we will
        // dispatch the orderGetActionCreator again or
        // " dispatch( orderGetActionCreator( orderId ) ); " and this will cause
        // " order.isPaid " below to evaluate to true

        // inside this function we want to call the orderPayActionCreator
        /*
        dispatch( orderPayActionCreator ( orderId, paymentResult ) );

    } // end of handleSuccessPayment()

    // remember we have to call the ORDER_PAY_RESET constant so that we don't end up in an
    // endless loop and let's do that in 8 - above

    // End of 7 -
    */


    // before moving on to the main block of code, check loading and error
    /*
    return (

        loading ? (

            <Spinner />

        ) : error ? (

            <ErrorMessage>{ error }</ErrorMessage>

        ) : (

            // create the screen and provide a top level div for react
            <div className="order">

                { 
                /* breadcrumb for mobile devices or 620px or less for this app 
                <Link to="/placeorder" className="order--breadcrumb">&#60; Cancel Order</Link>
                */ 
                /* }

                <div className="order--screen">

                    <div className="order--screen--order-id">

                        <h2 className="order--screen--order-id--title">Order ID</h2>
                        <span>{ order._id }</span>

                    </div>

                    <div className="order--screen--shipping">

                        <h2 className="order--screen--shipping--title">Shipping</h2>

                        <ul className="order--screen--shipping--ul-1">
                            <li>Name:</li>
                            <li>{ order.user.name }</li>
                        </ul>

                        <ul className="order--screen--shipping--ul-1">
                            <li>Email:</li>
                            <li><a href={ `mailto:${ order.user.email }` }>{ order.user.email }</a></li>
                        </ul>

                        <ul className="order--screen--shipping--ul-1 order--screen--shipping--ul-1--last-child">
                            <li>Address:</li>
                            <li>{ order.shippingAddress.address },</li>
                            <li>{ order.shippingAddress.city }</li>
                            <li>{ order.shippingAddress.postalCode }</li>
                            <li>{ order.shippingAddress.country }</li>
                        </ul>

                        <ul className="order--screen--shipping--ul-2">
                            <li>
                                { 
                                    order.isDelivered ? (

                                        <SuccessMessage>Delivered on { order.deliveredAt }</SuccessMessage>

                                    ) : (

                                        <ErrorMessage>Order has not been delivered.</ErrorMessage>

                                    ) 
                                }
                            </li>
                        </ul>

                    </div>

                    <div className="order--screen--payment-method">

                        <h2 className="order--screen--payment-method--title">Payment Method</h2>

                        <ul className="order--screen--payment-method--ul-1">
                            <li>Payment Method:</li>
                            <li>{ order.paymentMethod }</li>
                        </ul>

                        <ul className="order--screen--payment-method--ul-2">
                            <li>
                                { 
                                    order.isPaid ? (

                                        <SuccessMessage>Paid on { order.paidAt }</SuccessMessage>

                                    ) : (

                                        <ErrorMessage>Order has not been paid.</ErrorMessage>

                                    ) 
                                }
                            </li>
                        </ul>

                    </div>

                    <div className="order--screen--order-items">

                        <h2 className="order--screen--order-items--title">Order Items</h2>

                        {
                            order.orderItems.length === 0 ? <ErrorMessage>Your order is empty</ErrorMessage> : (

                                order.orderItems.map( ( orderItem ) => (

                                    <OrderItem
                                        key={ orderItem.product }
                                        orderItem={ orderItem }
                                    />

                                ) )

                            )
                        
                        }

                    </div>

                    <div className="order--screen--order-summary">

                        <OrderScreenSummary
                            orderId={ orderId }
                            order={ order }
                            loadingPay={ loadingPay }
                            sdkReady={ sdkReady }
                        />

                    </div>

                 </div>

            </div> // end of confirm-order

        )

    );

}


export default OrderScreen;
*/



























// ===============================

























/*
// at the beginning of lecture 64, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React, { useEffect, useState } from 'react';
// import in axios so we can make a request to the following backend route:
// " '/api/config/paypal' " and get our PayPal client id
import axios from 'axios';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in our action creator
import { 
    orderGetActionCreator,
    orderUpdateToDeliveredAdminActionCreator
} from '../../redux/actions/order.actions';
// import in the ORDER_PAY_RESET constant
import { ORDER_PAY_RESET } from '../../redux/constants/order.constants';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';
// import in the SuccessMessage component
import SuccessMessage from '../../components/message/success-message.component';
// import in the OrderItem component
import OrderItem from '../../components/order-item/order-item.component';
// import in the OrderSummary component
import OrderScreenSummary from '../../components/order-screen-summary/order-screen-summary.component';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner.component';

import './order-screen.styles.scss';


// 8 -
// coming from the store.js 26 - file

// add the orderUpdateToDeliveredAdminActionCreator above

// import in the order reser constant
import { ORDER_UPDATE_TO_DELIVERED_ADMIN_RESET } from '../../redux/constants/order.constants';


// End of 8 -


const OrderScreen = ( { history, match } ) => {

    // get the order id
    const orderId = match.params.id;

    // ==============================
    // Component State
    // ==============================

    // create component state for when the sdk is ready and set the default value to false
    const [ sdkReady, setSdkReady ] = useState( false );

    // remember for this component we want to pull the order details from the database and then
    // use that information to populate the output

    // ==============================
    // DISPATCH & USESELECTOR(); & USEEFFECT();
    // ==============================

    // define dispatch
    const dispatch = useDispatch();

    // ==============================
    // orderGet State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const orderGet = useSelector( ( state ) => state.orderGet );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output
    const { loading, order, error } = orderGet;

    // ==============================
    // orderPay State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const orderPay = useSelector( ( state ) => state.orderPay );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output

    // since we already have loading defined above let's rename loading below to loadingPay
    // and then do the same for success
    const { loading : loadingPay, success : successPay } = orderPay;


    // 8 -

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
    // orderUpdateToDeliveredAdmin State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const orderUpdateToDeliveredAdmin = useSelector( ( state ) => state.orderUpdateToDeliveredAdmin );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { 
        loading : loadingDelivered,
        success : successDelivered,
        error   : errorDelivered
    } = orderUpdateToDeliveredAdmin;

    // End of 8 -


    // we will build this script or
    // " <script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"></script> "
    // dynamically from inside the useEffect(); hook
    useEffect( () => {

        // ==============================
        // Login / Admin Check
        // ==============================

        // first let's make sure the user is both logged in and is an admin
        if ( !userInfo || !userInfo.isAdmin ) {

            // and if the user is not logged in and / or the user is not an admin then
            // let's redirect the user to the login screen
            history.push( '/login' );

        } // end of if statement

        // ==============================
        // Build the Paypal Script
        // ==============================

        // when this component loads we will build the PayPal script below
        const addPayPalScript = async () => {

            // inside this async arrow function we will fetch the PayPal client id from the
            // backend and in this case the data object is equal to the PayPal client id
            // whereas in most cases the data object equals another object with several key
            // value pairs

            // and remember the route " '/api/config/paypal' " was defined in the server.js
            // file

            // and remember we have to destructure the data object off of the response object
            // in order to get the clientId
            const { data : clientId } = await axios.get( '/api/config/paypal' );

            // create a script element
            const script = document.createElement( 'script' );

            // add the type to script
            script.type = 'text/javascript';

            // add the source
            script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`

            // we want the script to be asynchronous
            script.async = true;

            // once the script loads we will setSdkReady to true
            script.onload = () => {

                setSdkReady( true );

            }

            // then we want to add the script to the body of our document
            document.body.appendChild( script );

            // so all were doing here is dynamically adding the PayPal script to the order
            // screen component

        } // end of addPayPalScript()

        // ==============================
        // More Checks
        // ==============================

        // if successPay is true then we want to call the orderGetActionCreator again
        // and show that the order has been paid in the output below


        // 8 - continued
        // add successDelivered below and as a dependency since we want to dispatch the
        // orderGetActionCreator so we can update the state of the page and thereby update
        // the delivered state
        if ( !order || order._id !== orderId || successPay || successDelivered ) {

            // had to dispatch the ORDER_UPDATE_TO_DELIVERED_ADMIN_RESET constant and reset
            // the state so that we don't end up in an infinite loop
            dispatch( { 
                type : ORDER_UPDATE_TO_DELIVERED_ADMIN_RESET
            } );

            // End of 8 -


            // inside this if statement we want to dispatch the ORDER_PAY_RESET constant and
            // remember we are doing this so that we don't end up in an infinite loop
            dispatch( {
                type : ORDER_PAY_RESET
            } );

            // dispatch the orderGetActionCreator
            dispatch( orderGetActionCreator( orderId ) );

        }

        // the PayPal script still isn't added since we have not called addPayPalScript();
        // and we will add the PayPal script below

        // so if there is an order and the order.id === orderId and successPay if false
        // then we will move to the else if statement below

        // first, check to see if the order is paid and if not then proceed to the next if
        // statement
        else if ( !order.isPaid ) {

            // paypal is a global variable of the window object and therefore we can check
            // to see if it exist and if not then we will call the addPayPalScript();
            if ( !window.paypal ) {

                // add the PayPal script to the document 
                addPayPalScript();

            } else {

                // setSdkReady to true
                setSdkReady( true );

            }

        } // end of else if ( !order.isPaid )

        // now if we go back to the order screen and look in the html we see our PayPal
        // script or:

        /*
            <script type="text/javascript" src="https://www.paypal.com/sdk/js?client-id=
            ATMe3V5d6qyG8060xCnX1RnWGAcE2cLps-rQyoN9HbIqWCjVOaq4q0HHrVYrJhO2ZApJSJZ-O1IqvL84"
            async="" data-uid-auto="4d040ce69c_mtg6mzu6mdg"></script>
        */

        // and this is correct so everything is working as expected

    /* }, [ dispatch, order, orderId, successDelivered, successPay ] );


    // 8 - continued

    // ==============================
    // handleMarkAsDelivered function
    // ==============================

    const handleMarkAsDelivered = () => {

        // let's make sure the user is both logged in and is an admin before we dispatch the
        // productListActionCreator
        if ( userInfo && userInfo.isAdmin ) {

            // Important - had to use match.params.id as the argument and not orderId since for
            // whatever reason the route wasn't receiving the orderId in time to make it work

            // dispatch our action creator
            dispatch( orderUpdateToDeliveredAdminActionCreator( match.params.id ) );

        } else {

            // and if the user is not logged in and / or the user is not an admin then
            // let's redirect the user to the login screen
            history.push( '/login' );

        } // end of if else statement

    } // end of handleMarkAsDelivered

    // End of 8 -


    // before moving on to the main block of code, check loading and error
    return (

        loading ? (

            <Spinner />

        ) : error ? (

            <ErrorMessage>{ error }</ErrorMessage>

        ) : loadingDelivered ? (

            <Spinner />

        ) : errorDelivered ? (

            <ErrorMessage>{ errorDelivered }</ErrorMessage>

        ) : (

            // create the screen and provide a top level div for react
            <div className="order-screen">

                <div className="order-screen--col-1">

                    <div className="order-screen--col-1--order-id">

                        <h2 className="order-screen--col-1--order-id--title">Order ID</h2>
                        <span>{ order._id }</span>

                    </div>

                    <div className="order-screen--col-1--shipping">

                        <h2 className="order-screen--col-1--shipping--title">Shipping</h2>

                        <ul className="order-screen--col-1--shipping--ul-1">
                            <li>Name:</li>
                            <li>{ order.user.name }</li>
                        </ul>

                        <ul className="order-screen--col-1--shipping--ul-1">
                            <li>Email:</li>
                            <li><a href={ `mailto:${ order.user.email }` }>{ order.user.email }</a></li>
                        </ul>

                        <ul className="order-screen--col-1--shipping--ul-1 order-screen--shipping--ul-1--last-child">
                            <li>Address:</li>
                            <li>{ order.shippingAddress.address },</li>
                            <li>{ order.shippingAddress.city }</li>
                            <li>{ order.shippingAddress.postalCode }</li>
                            <li>{ order.shippingAddress.country }</li>
                        </ul>

                        <ul className="order-screen--col-1--shipping--ul-2">
                            <li>
                                { 
                                    order.isDelivered ? (

                                        <SuccessMessage>Delivered on { order.deliveredAt }</SuccessMessage>

                                    ) : (

                                        <ErrorMessage>Order has not been delivered.</ErrorMessage>

                                    ) 
                                }
                            </li>
                        </ul>

                    </div>

                    <div className="order-screen--col-1--payment-method">

                        <h2 className="order-screen--col-1--payment-method--title">Payment Method</h2>

                        <ul className="order-screen--col-1--payment-method--ul-1">
                            <li>Payment Method:</li>
                            <li>{ order.paymentMethod }</li>
                        </ul>

                        <ul className="order-screen--col-1--payment-method--ul-2">
                            <li>
                                { 
                                    order.isPaid ? (

                                        <SuccessMessage>Paid on { order.paidAt }</SuccessMessage>

                                    ) : (

                                        <ErrorMessage>Order has not been paid.</ErrorMessage>

                                    ) 
                                }
                            </li>
                        </ul>

                    </div>

                    <div className="order-screen--col-1--order-items">

                        <h2 className="order-screen--col-1--order-items--title">Order Items</h2>

                        {
                            order.orderItems.length === 0 ? <ErrorMessage>Your order is empty</ErrorMessage> : (

                                order.orderItems.map( ( orderItem ) => (

                                    <OrderItem
                                        key={ orderItem.product }
                                        orderItem={ orderItem }
                                    />

                                ) )

                            )
                        
                        }

                    </div>

                </div>

                <div className="order-screen--col-2">

                    <div className="order-screen--col-2--order-summary">

                        <OrderScreenSummary
                            orderId={ orderId }
                            order={ order }
                            loadingPay={ loadingPay }
                            sdkReady={ sdkReady }
                        />

                    </div>

                    { /* mark as delivered button */ /* }
                    { 
                        userInfo && userInfo.isAdmin && order.isPaid && !order.isDelivered && (

                            <div className="order-screen--col-2--mark-as-delivered">

                                <button
                                    type="submit"
                                    className="order-screen--col-2--mark-as-delivered--button"
                                    onClick={ handleMarkAsDelivered }
                                >
                                    Mark as delivered
                                </button>

                            </div>

                        ) 
                    }

                </div>

            </div> // end of confirm-order

        )

    );

}


export default OrderScreen;
*/



























// ===============================


























// at the beginning of lecture 83, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React, { useEffect, useState } from 'react';
// import in axios so we can make a request to the following backend route:
// " '/api/config/paypal' " and get our PayPal client id
import axios from 'axios';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in our action creator
import { 
    orderGetActionCreator,
    orderUpdateToDeliveredAdminActionCreator
} from '../../redux/actions/order.actions';
// import in the ORDER_PAY_RESET constant
import { ORDER_PAY_RESET } from '../../redux/constants/order.constants';
// import in the order reser constant
import { ORDER_UPDATE_TO_DELIVERED_ADMIN_RESET } from '../../redux/constants/order.constants';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';
// import in the SuccessMessage component
import SuccessMessage from '../../components/message/success-message.component';
// import in the OrderItem component
import OrderItem from '../../components/order-item/order-item.component';
// import in the OrderSummary component
import OrderScreenSummary from '../../components/order-screen-summary/order-screen-summary.component';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner.component';

import './order-screen.styles.scss';


const OrderScreen = ( { history, match } ) => {

    // get the order id
    const orderId = match.params.id;

    // ==============================
    // Component State
    // ==============================

    // create component state for when the sdk is ready and set the default value to false
    const [ sdkReady, setSdkReady ] = useState( false );

    // remember for this component we want to pull the order details from the database and then
    // use that information to populate the output

    // ==============================
    // DISPATCH & USESELECTOR(); & USEEFFECT();
    // ==============================

    // define dispatch
    const dispatch = useDispatch();

    // ==============================
    // orderGet State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const orderGet = useSelector( ( state ) => state.orderGet );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output
    const { loading, order, error } = orderGet;

    // ==============================
    // orderPay State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const orderPay = useSelector( ( state ) => state.orderPay );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output

    // since we already have loading defined above let's rename loading below to loadingPay
    // and then do the same for success
    const { loading : loadingPay, success : successPay } = orderPay;

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
    // orderUpdateToDeliveredAdmin State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const orderUpdateToDeliveredAdmin = useSelector( ( state ) => state.orderUpdateToDeliveredAdmin );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { 
        loading : loadingDelivered,
        success : successDelivered,
        error   : errorDelivered
    } = orderUpdateToDeliveredAdmin;

    // we will build this script or
    // " <script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"></script> "
    // dynamically from inside the useEffect(); hook
    useEffect( () => {

        // ==============================
        // Login Check
        // ==============================

        // first, let's make sure the user is logged in
        if ( !userInfo ) {

            // and if the user is not logged in and / or the user is not an admin then
            // let's redirect the user to the login screen
            history.push( '/login' );

        } // end of if statement

        // ==============================
        // Build the Paypal Script
        // ==============================

        // when this component loads we will build the PayPal script below
        const addPayPalScript = async () => {

            // inside this async arrow function we will fetch the PayPal client id from the
            // backend and in this case the data object is equal to the PayPal client id
            // whereas in most cases the data object equals another object with several key
            // value pairs

            // and remember the route " '/api/config/paypal' " was defined in the server.js
            // file

            // and remember we have to destructure the data object off of the response object
            // in order to get the clientId
            const { data : clientId } = await axios.get( '/api/config/paypal' );

            // create a script element
            const script = document.createElement( 'script' );

            // add the type to script
            script.type = 'text/javascript';

            // add the source
            script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`

            // we want the script to be asynchronous
            script.async = true;

            // once the script loads we will setSdkReady to true
            script.onload = () => {

                setSdkReady( true );

            }

            // then we want to add the script to the body of our document
            document.body.appendChild( script );

            // so all were doing here is dynamically adding the PayPal script to the order
            // screen component

        } // end of addPayPalScript()

        // ==============================
        // More Checks
        // ==============================

        // if successPay is true then we want to call the orderGetActionCreator again
        // and show that the order has been paid in the output below

        // add successDelivered below and as a dependency since we want to dispatch the
        // orderGetActionCreator so we can update the state of the page and thereby update
        // the delivered state
        if ( !order || order._id !== orderId || successPay || successDelivered ) {

            // had to dispatch the ORDER_UPDATE_TO_DELIVERED_ADMIN_RESET constant and reset
            // the state so that we don't end up in an infinite loop
            dispatch( { 
                type : ORDER_UPDATE_TO_DELIVERED_ADMIN_RESET
            } );

            // inside this if statement we want to dispatch the ORDER_PAY_RESET constant and
            // remember we are doing this so that we don't end up in an infinite loop
            dispatch( {
                type : ORDER_PAY_RESET
            } );

            // dispatch the orderGetActionCreator
            dispatch( orderGetActionCreator( orderId ) );

        }

        // the PayPal script still isn't added since we have not called addPayPalScript();
        // and we will add the PayPal script below

        // so if there is an order and the order.id === orderId and successPay if false
        // then we will move to the else if statement below

        // first, check to see if the order is paid and if not then proceed to the next if
        // statement
        else if ( !order.isPaid ) {

            // paypal is a global variable of the window object and therefore we can check
            // to see if it exist and if not then we will call the addPayPalScript();
            if ( !window.paypal ) {

                // add the PayPal script to the document 
                addPayPalScript();

            } else {

                // setSdkReady to true
                setSdkReady( true );

            }

        } // end of else if ( !order.isPaid )

        // now if we go back to the order screen and look in the html we see our PayPal
        // script or:

        /*
            <script type="text/javascript" src="https://www.paypal.com/sdk/js?client-id=
            ATMe3V5d6qyG8060xCnX1RnWGAcE2cLps-rQyoN9HbIqWCjVOaq4q0HHrVYrJhO2ZApJSJZ-O1IqvL84"
            async="" data-uid-auto="4d040ce69c_mtg6mzu6mdg"></script>
        */

        // and this is correct so everything is working as expected

    }, [ 
        dispatch, 
        history,
        order,
        orderId,
        successDelivered,
        successPay,
        userInfo
    ] );

    // ==============================
    // handleMarkAsDelivered function
    // ==============================

    const handleMarkAsDelivered = () => {

        // let's make sure the user is both logged in and is an admin before we dispatch the
        // productListActionCreator
        if ( userInfo && userInfo.isAdmin ) {

            // Important - had to use match.params.id as the argument and not orderId since for
            // whatever reason the route wasn't receiving the orderId in time to make it work

            // dispatch our action creator
            dispatch( orderUpdateToDeliveredAdminActionCreator( match.params.id ) );

        } else {

            // and if the user is not logged in and / or the user is not an admin then
            // let's redirect the user to the login screen
            history.push( '/login' );

        } // end of if else statement

    } // end of handleMarkAsDelivered


    // before moving on to the main block of code, check loading and error
    return (

        loading ? (

            <Spinner />

        ) : error ? (

            <ErrorMessage>{ error }</ErrorMessage>

        ) : loadingDelivered ? (

            <Spinner />

        ) : errorDelivered ? (

            <ErrorMessage>{ errorDelivered }</ErrorMessage>

        ) : (

            // create the screen and provide a top level div for react
            <div className="order-screen">

                <div className="order-screen--col-1">

                    <div className="order-screen--col-1--order-id">

                        <h2 className="order-screen--col-1--order-id--title">Order ID</h2>
                        <span>{ order._id }</span>

                    </div>

                    <div className="order-screen--col-1--shipping">

                        <h2 className="order-screen--col-1--shipping--title">Shipping</h2>

                        <ul className="order-screen--col-1--shipping--ul-1">
                            <li>Name:</li>
                            <li>{ order.user.name }</li>
                        </ul>

                        <ul className="order-screen--col-1--shipping--ul-1">
                            <li>Email:</li>
                            <li><a href={ `mailto:${ order.user.email }` }>{ order.user.email }</a></li>
                        </ul>

                        <ul className="order-screen--col-1--shipping--ul-1 order-screen--shipping--ul-1--last-child">
                            <li>Address:</li>
                            <li>{ order.shippingAddress.address },</li>
                            <li>{ order.shippingAddress.city }</li>
                            <li>{ order.shippingAddress.postalCode }</li>
                            <li>{ order.shippingAddress.country }</li>
                        </ul>

                        <ul className="order-screen--col-1--shipping--ul-2">
                            <li>
                                { 
                                    order.isDelivered ? (

                                        <SuccessMessage>Delivered on { order.deliveredAt }</SuccessMessage>

                                    ) : (

                                        <ErrorMessage>Order has not been delivered.</ErrorMessage>

                                    ) 
                                }
                            </li>
                        </ul>

                    </div>

                    <div className="order-screen--col-1--payment-method">

                        <h2 className="order-screen--col-1--payment-method--title">Payment Method</h2>

                        <ul className="order-screen--col-1--payment-method--ul-1">
                            <li>Payment Method:</li>
                            <li>{ order.paymentMethod }</li>
                        </ul>

                        <ul className="order-screen--col-1--payment-method--ul-2">
                            <li>
                                { 
                                    order.isPaid ? (

                                        <SuccessMessage>Paid on { order.paidAt }</SuccessMessage>

                                    ) : (

                                        <ErrorMessage>Order has not been paid.</ErrorMessage>

                                    ) 
                                }
                            </li>
                        </ul>

                    </div>

                    <div className="order-screen--col-1--order-items">

                        <h2 className="order-screen--col-1--order-items--title">Order Items</h2>

                        {
                            order.orderItems.length === 0 ? <ErrorMessage>Your order is empty</ErrorMessage> : (

                                order.orderItems.map( ( orderItem ) => (

                                    <OrderItem
                                        key={ orderItem.product }
                                        orderItem={ orderItem }
                                    />

                                ) )

                            )
                        
                        }

                    </div>

                </div>

                <div className="order-screen--col-2">

                    <div className="order-screen--col-2--order-summary">

                        <OrderScreenSummary
                            orderId={ orderId }
                            order={ order }
                            loadingPay={ loadingPay }
                            sdkReady={ sdkReady }
                        />

                    </div>

                    { /* mark as delivered button */ }
                    { 
                        userInfo && userInfo.isAdmin && order.isPaid && !order.isDelivered && (

                            <div className="order-screen--col-2--mark-as-delivered">

                                <button
                                    type="submit"
                                    className="order-screen--col-2--mark-as-delivered--button"
                                    onClick={ handleMarkAsDelivered }
                                >
                                    Mark as delivered
                                </button>

                            </div>

                        ) 
                    }

                </div>

            </div> // end of confirm-order

        )

    );

}


export default OrderScreen;


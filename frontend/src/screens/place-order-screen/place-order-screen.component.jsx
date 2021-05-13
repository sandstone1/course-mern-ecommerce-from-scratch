
/*
// 1 -

// since we are building a form we will need to use the useState(); hook
import React, { useState } from 'react';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in the Link component
import { Link } from 'react-router-dom';
/*
// import in our action creator
import { createOrderActionCreator } from '../../redux/actions/cart.actions';
*/
/*
// inport in the FormInput component
import FormInput from '../../components/form-input/form-input.component';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';
// import in the CheckoutSteps component
import CheckoutSteps from '../../components/checkout-steps/checkout-steps.component';
// import in the CartItem component
import CartItem from '../../components/cart-item/cart-item.component';
// import in the OrderSummary component
import OrderSummary from '../../components/order-summary/order-summary.component';

import './place-order-screen.styles.scss';


const PlaceOrderScreen = ( { history } ) => {

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const cart = useSelector( ( state ) => state.cart );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output
    const { cartItems, shippingAddress, paymentMethod } = cart;

    /*
    // if there is no shipping address provided then we want to redirect the user to the shipping
    // screen
    if ( !shippingAddress ) {

        history.push( '/shipping' );

    }
    */

    /*
    // set component level state
    const [ message, setMessage ] = useState( null );

    // define dispatch
    const dispatch = useDispatch();

    /*
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

        // let's start creating the screen
        <div className="place-order">

            { /* CheckoutSteps component */ /* }
            <CheckoutSteps step1 step2 step3 step4 />

            { /* breadcrumb for mobile devices or 620px or less for this app */ /* }
            { /* <Link to="/shipping" className="payment-method--breadcrumb">&#60; Back to Shipping</Link> */ /* }

            <div className="place-order--screen">
            
                <div className="place-order--screen--shipping">

                    <h2 className="place-order--screen--shipping--title">Shipping</h2>

                    <ul className="place-order--screen--shipping--ul">
                        <li>Address:</li>
                        <li>{ shippingAddress.address },</li>
                        <li>{ shippingAddress.city }</li>
                        <li>{ shippingAddress.postalCode }</li>
                        <li>{ shippingAddress.country }</li>
                    </ul>

                </div>

                <div className="place-order--screen--payment-method">

                    <h2 className="place-order--screen--payment-method--title">Payment Method</h2>

                    <ul className="place-order--screen--payment-method--ul">
                        <li>Payment Method:</li>
                        <li>{ paymentMethod }</li>
                    </ul>

                </div>

                <div className="place-order--screen--order-items">

                    <h2 className="place-order--screen--order-items--title">Order Items</h2>

                    {
                        cartItems.length === 0 ? <ErrorMessage>Your cart is empty</ErrorMessage> : (

                            cartItems.map( ( cartItem ) => (

                                <CartItem
                                    key={ cartItem.product }
                                    cartItem={ cartItem }
                                />

                            ) )

                        )               
                    
                    }

                </div>

                <div className="place-order--screen--order-summary">

                    <OrderSummary history={ history } />

                </div>

            </div>

        </div> // end of place-order

    );

}


export default PlaceOrderScreen;


// End of 1 -
*/




























// ===============================



























// at the beginning of lecture 55, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React from 'react';
// import in the useSelector(); hook
import { useSelector } from 'react-redux';
// import in the Link component
import { Link } from 'react-router-dom';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';
// import in the CheckoutSteps component
import CheckoutSteps from '../../components/checkout-steps/checkout-steps.component';
// import in the CartItem component
import CartItem from '../../components/cart-item/cart-item.component';
// import in the PlaceOrderSummary component
import PlaceOrderScreenSummary from '../../components/place-order-screen-summary/place-order-screen-summary.component';

import './place-order-screen.styles.scss';


const PlaceOrderScreen = ( { history } ) => {

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const cart = useSelector( ( state ) => state.cart );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output
    const { cartItems, shippingAddress, paymentMethod } = cart;

    // if there is no payment method provided then we want to redirect the user back to the
    // payment screen
    if ( !paymentMethod ) {

        history.push( '/payment' );

    }

    return (

        // let's start creating the screen
        <div className="place-order-screen">

            { /* CheckoutSteps component */ }
            <CheckoutSteps step1 step2 step3 step4 />

            { /* breadcrumb for mobile devices or 620px or less for this app */ }
            <Link to="/payment" className="place-order-screen--breadcrumb">&#60; Back to Payment</Link>

            <div className="place-order-screen--main">
            
                <div className="place-order-screen--main--shipping">

                    <h2 className="place-order-screen--main--shipping--title">Shipping</h2>

                    <ul className="place-order-screen--main--shipping--ul">
                        <li>Address:</li>
                        <li>{ shippingAddress.address },</li>
                        <li>{ shippingAddress.city }</li>
                        <li>{ shippingAddress.postalCode }</li>
                        <li>{ shippingAddress.country }</li>
                    </ul>

                </div>

                <div className="place-order-screen--main--payment-method">

                    <h2 className="place-order-screen--main--payment-method--title">Payment Method</h2>

                    <ul className="place-order-screen--main--payment-method--ul">
                        <li>Payment Method:</li>
                        <li>{ paymentMethod }</li>
                    </ul>

                </div>

                <div className="place-order-screen--main--order-items">

                    <h2 className="place-order-screen--main--order-items--title">Order Items</h2>

                    {
                        cartItems.length === 0 ? <ErrorMessage>Your cart is empty</ErrorMessage> : (

                            cartItems.map( ( cartItem ) => (

                                <CartItem
                                    key={ cartItem.product }
                                    cartItem={ cartItem }
                                />

                            ) )

                        )               
                    
                    }

                </div>

                <div className="place-order-screen--main--order-summary">

                    <PlaceOrderScreenSummary history={ history } />

                </div>

            </div>

        </div> // end of confirm-order

    );

}


export default PlaceOrderScreen;



/*
// 1 -
// let's start by coping the shipping-screen.component.jsx file

// since we are building a form we will need to use the useState(); hook
import React, { useState } from 'react';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in the Link component
import { Link } from 'react-router-dom';
// import in our action creator
import { savePaymentMethodActionCreator } from '../../redux/actions/cart.actions';
// inport in the RadioButton component
import RadioButton from '../../components/radio-button/radio-button.component';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';
// import in the CheckoutSteps component
import CheckoutSteps from '../../components/checkout-steps/checkout-steps.component';

import './payment-screen.styles.scss';


const PaymentScreen = ( { history } ) => {

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const cart = useSelector( ( state ) => state.cart );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output
    const { shippingAddress } = cart;

    // if there is no shipping address provided then we want to redirect the user to the shipping
    // screen
    if ( !shippingAddress ) {

        history.push( '/shipping' );

    }

    // set component level state
    // for paymentMethod, let's add the default payment method, which is PayPal
    const [ paymentMethod, setPaymentMethod ] = useState( 'PayPal' );
    const [ message, setMessage ] = useState( null );

    // define dispatch
    const dispatch = useDispatch();

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

    return (

        // let's start creating the form
        <div className="payment-method">

            { /* CheckoutSteps component */ /* }
            <CheckoutSteps step1 step2 step3 />

            { /* breadcrumb for mobile devices or 620px for this app */ /* }
            <Link to="/shipping" className="payment-method--breadcrumb">&#60; Back to Shipping</Link>

            <h2 className="payment-method--title">Payment Method</h2>

            { /* check message */ /* }
            { message && <ErrorMessage>{ message }</ErrorMessage> }

            <form className="payment-method--form" noValidate="novalidate" onSubmit={ handleSubmit } >

                <RadioButton
                    name="paymentMethod"
                    type="radio"
                    id="PayPal"
                    label="PayPal or Credit Card"
                    value="PayPal"
                    onChange={ (e) => setPaymentMethod( e.target.value ) }
                />
                <RadioButton
                    name="paymentMethod"
                    type="radio"
                    id="Stripe"
                    label="Stripe"
                    value="Stripe"
                    onChange={ (e) => setPaymentMethod( e.target.value ) }
                />

                { /*  continue button  */ /* }
                <div className="payment-method--form--button-container">
                    <button
                        type="submit"
                        className="payment-method--form--button-container--button"
                    >
                        Continue to Place Order
                    </button>
                </div>

            </form>

        </div>

    );

}


export default PaymentScreen;

// now let's go to out cart.constants.js 2 - file and start the process of creating our
// savePaymentMethodActionCreator

// End of 1 -
*/



























// ===============================



























// at the beginning of lecture 54, given all the notes, I created a new file below without
// the notes so we are starting fresh

// since we are building a form we will need to use the useState(); hook
import React, { useState } from 'react';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in the Link component
import { Link } from 'react-router-dom';
// import in our action creator
import { savePaymentMethodActionCreator } from '../../redux/actions/cart.actions';
// inport in the RadioButton component
import RadioButton from '../../components/radio-button/radio-button.component';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';
// import in the CheckoutSteps component
import CheckoutSteps from '../../components/checkout-steps/checkout-steps.component';

import './payment-method-screen.styles.scss';


const PaymentMethodScreen = ( { history } ) => {

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const cart = useSelector( ( state ) => state.cart );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output
    const { shippingAddress } = cart;

    // if there is no shipping address provided then we want to redirect the user to the shipping
    // screen
    if ( !shippingAddress ) {

        history.push( '/shipping' );

    }

    // set component level state
    // for paymentMethod, let's set the default to an empty string
    const [ paymentMethod, setPaymentMethod ] = useState( '' );
    const [ message, setMessage ] = useState( null );

    // define dispatch
    const dispatch = useDispatch();

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

    return (

        // let's start creating the form
        <div className="payment-method-screen">

            { /* CheckoutSteps component */ }
            <CheckoutSteps step1 step2 step3 />

            { /* breadcrumb for mobile devices or 620px or less for this app */ }
            <Link to="/shipping" className="payment-method-screen--breadcrumb">&#60; Back to Shipping</Link>

            <h2 className="payment-method-screen--title">Payment Method</h2>

            { /* check message */ }
            { message && <ErrorMessage>{ message }</ErrorMessage> }

            <form className="payment-method-screen--form" noValidate="novalidate" onSubmit={ handleSubmit } >

                <RadioButton
                    name="paymentMethod"
                    type="radio"
                    id="PayPal"
                    label="PayPal or Credit Card"
                    value="PayPal"
                    onChange={ (e) => setPaymentMethod( e.target.value ) }
                />
                <RadioButton
                    name="paymentMethod"
                    type="radio"
                    id="Stripe"
                    label="Credit Card"
                    value="Credit Card"
                    onChange={ (e) => setPaymentMethod( e.target.value ) }
                />

                { /*  continue button  */ }
                <div className="payment-method-screen--form--button-container">
                    <button
                        type="submit"
                        className="payment-method-screen--form--button-container--button"
                    >
                        Confirm Order
                    </button>
                </div>

            </form>

        </div>

    );

}


export default PaymentMethodScreen;


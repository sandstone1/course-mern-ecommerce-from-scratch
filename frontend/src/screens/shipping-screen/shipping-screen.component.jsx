
/*
// 1 -
// create a functional component and now let's go to the App.js 8 - file

// 2 -
// coming from the App.js 8 - file
// let's copy some code from the register-screen.component.jsx file

// since we are building a form we will need to use the useState(); hook
import React, { useState } from 'react';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// inport in the FormInput component
import FormInput from '../../components/form-input/form-input.component';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';

import './shipping-screen.styles.scss';

// End of 2 -


// 3 -
// coming from the store.js 12 - file
// import in our action creator
import { saveShippingAddressActionCreator } from '../../redux/actions/cart.actions';

// End of 3 -


// 2 - continued

// let's add " history " as an argument to the ShippingScreen component because when we submit
// the form we will want to redirect or push the user to the payment screen
const ShippingScreen = ( { history } ) => {

    // 3 - continued

    // for this component we want to put the useSelector(); hook above the component level
    // state so that if the shippingAddress has been filled out previously and thereby stored
    // in local storage then we want the shipping address information to populate the form
    // fields below as soon as this component loads

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const cart = useSelector( ( state ) => state.cart );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output
    const { shippingAddress } = cart;

    // let's add the state for the form or set component level state
    const [ address, setAddress ]       = useState( shippingAddress ? shippingAddress.address : '' );
    const [ city, setCity ]             = useState( shippingAddress ? shippingAddress.city : '' );
    const [ postalCode, setPostalCode ] = useState( shippingAddress ? shippingAddress.postalCode : '' );
    const [ country, setCountry ]       = useState( shippingAddress ? shippingAddress.country : '' );
    const [ message, setMessage ]       = useState( null );

    // define dispatch
    const dispatch = useDispatch();

    // End of 3 -

    // submit handler
    const handleSubmit = ( e ) => {

        e.preventDefault();

        // everytime we submit the form we need to clear out any prior error messages
        setMessage( null );

        // before we dispatch the saveShippingAddressActionCreator let's do some front end validation
        if ( address === '' ||  city === '' || postalCode === '' || country === '' ) {

            // if the user did not enter the required information in the address, city, postal code
            // and / or country fields then set a new error message
            setMessage( 'All fields must be filled out in order to ship products. Please try again.' );

        } else {

            // 3 - continued

            // create the action creator argument
            const shippingAddressFormData = {
                address    : address,
                city       : city,
                postalCode : postalCode,
                country    : country
            };

            // dispatch our action creator
            dispatch( saveShippingAddressActionCreator( shippingAddressFormData ) );

            // after we dispatch our action creator then we want to go directly to the payment
            // screen
            history.push( '/payment' );

        }

    }

    // now let's test this out by going to the shipping screen and adding the following
    // information in the form fields:

    /*
        Address     : 3838 Vista Drive
        City        : Sandy
        Postal Code : 84090
        Country     : United States
    */

    // and then press the Continue button and this results in being taken immediately to the
    // payment screen and this is correct

    // and if I look in redux dev tools on the left hand side of the page I see the following:

    /*
        @@INIT
        CART_SAVE_SHIPPING_ADDRESS
    */

    // and this is correct

    // and if I look in the redux dev tools on the right hand side of the page under the state
    // tab I see the following:
    
    /*
        productList (pin): { products: [] }
        productGet (pin): { product: { ... } }
        cart (pin)
            cartItems (pin): [ {...}, {...}, {...} ]
            shippingAddress (pin)
                address (pin): "3838 Vista Drive"
                city (pin): "Sandy"
                postalCode (pin): "84090"
                country (pin): "United States"
        userSignIn (pin): { userInfo : { ... } }
        userNameDropdown (pin): { show : false }
        userRegister (pin): {}
        userDetails (pin): { user : {} }
        userUpdateProfile (pin): {}
    */

    // and this is correct so everything is working as expected

    // and when I go back to the shipping page or refresh the shipping page I see the following:

    /*
        Address     : 3838 Vista Drive
        City        : Sandy
        Postal Code : 84090
        Country     : United States
    */

    // and this is correct so everything is working as expected    

    // and in the next video we will create our checkout steps so the users can keep track of
    // their progress as they move through the checkout process

    // End of 3 -


    /*
    return (

        // let's start creating the form
        <div className="shipping">

            <h2 className="shipping--title">Shipping</h2>

            { /* check message */ /* }
            { message && <ErrorMessage>{ message }</ErrorMessage> /* }

            <form className="shipping--form" noValidate="novalidate" onSubmit={ handleSubmit } >

                <FormInput
                    name="address"
                    type="text"
                    label="Address"
                    value={ address }
                    onChange={ (e) => setAddress( e.target.value ) }
                />
                <FormInput
                    name="city"
                    type="text"
                    label="City"
                    value={ city }
                    onChange={ (e) => setCity( e.target.value ) }
                />
                <FormInput
                    name="postalCode"
                    type="text"
                    label="Postal Code"
                    value={ postalCode }
                    onChange={ (e) => setPostalCode( e.target.value ) }
                />
                <FormInput
                    name="country"
                    type="text"
                    label="Country"
                    value={ country }
                    onChange={ (e) => setCountry( e.target.value ) }
                />

                { /*  continue button  */ /* }
                <div className="shipping--form--button-container">
                    <button
                        type="submit"
                        className="shipping--form--button-container--button"
                    >
                        Continue
                    </button>
                </div>

            </form>

        </div>

    );

}


export default ShippingScreen;


// let's create an action to save the shipping address so let's go to the cart.actions.js 3 -
// file
// End of 2 -

// End of 1 -
*/

























// ===============================


























/*
// at the beginning of lecture 52, given all the notes, I created a new file below without
// the notes so we are starting fresh

// since we are building a form we will need to use the useState(); hook
import React, { useState } from 'react';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in our action creator
import { saveShippingAddressActionCreator } from '../../redux/actions/cart.actions';
// inport in the FormInput component
import FormInput from '../../components/form-input/form-input.component';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';

import './shipping-screen.styles.scss';


// 4 -
// import in the CheckoutSteps component
import CheckoutSteps from '../../components/checkout-steps/checkout-steps.component';

// and insert the CheckoutSteps component below and pass in 2 props: step1 and step2

// End of 4 -


const ShippingScreen = ( { history } ) => {

    // for this component we want to put the useSelector(); hook above the component level
    // state so that if the shippingAddress has been filled out previously and thereby stored
    // in local storage then we want the shipping address information to populate the form
    // fields below as soon as this component loads

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const cart = useSelector( ( state ) => state.cart );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output
    const { shippingAddress } = cart;

    // let's add the state for the form or set component level state
    const [ address, setAddress ]       = useState( shippingAddress ? shippingAddress.address : '' );
    const [ city, setCity ]             = useState( shippingAddress ? shippingAddress.city : '' );
    const [ postalCode, setPostalCode ] = useState( shippingAddress ? shippingAddress.postalCode : '' );
    const [ country, setCountry ]       = useState( shippingAddress ? shippingAddress.country : '' );
    const [ message, setMessage ]       = useState( null );

    // define dispatch
    const dispatch = useDispatch();

    // submit handler
    const handleSubmit = ( e ) => {

        e.preventDefault();

        // everytime we submit the form we need to clear out any prior error messages
        setMessage( null );

        // before we dispatch the saveShippingAddressActionCreator let's do some front end validation
        if ( address === '' ||  city === '' || postalCode === '' || country === '' ) {

            // if the user did not enter the required information in the address, city, postal code
            // and / or country fields then set a new error message
            setMessage( 'All fields must be filled out in order to ship products. Please try again.' );

        } else {

            // create the action creator argument
            const shippingAddressFormData = {
                address    : address,
                city       : city,
                postalCode : postalCode,
                country    : country
            };

            // dispatch our action creator
            dispatch( saveShippingAddressActionCreator( shippingAddressFormData ) );

            // after we dispatch our action creator then we want to go directly to the payment
            // screen
            history.push( '/payment' );

        }

    }

    // remember I could have done the following but followed Brad's example instead
    /*
    // create the step1, step2 variables
    const step1 = true;
    const step2 = true;

    <CheckoutSteps step1={ step1 } step2={ step2 } />
    */

    /*
    return (


        // let's start creating the form
        <div className="shipping">

            { /* CheckoutSteps component */ /* }
            <CheckoutSteps step1 step2 />

            <h2 className="shipping--title">Shipping</h2>

            { /* check message */ /* }
            { message && <ErrorMessage>{ message }</ErrorMessage> }

            <form className="shipping--form" noValidate="novalidate" onSubmit={ handleSubmit } >

                <FormInput
                    name="address"
                    type="text"
                    label="Address"
                    value={ address }
                    onChange={ (e) => setAddress( e.target.value ) }
                />
                <FormInput
                    name="city"
                    type="text"
                    label="City"
                    value={ city }
                    onChange={ (e) => setCity( e.target.value ) }
                />
                <FormInput
                    name="postalCode"
                    type="text"
                    label="Postal Code"
                    value={ postalCode }
                    onChange={ (e) => setPostalCode( e.target.value ) }
                />
                <FormInput
                    name="country"
                    type="text"
                    label="Country"
                    value={ country }
                    onChange={ (e) => setCountry( e.target.value ) }
                />

                { /*  continue button  */ /* }
                <div className="shipping--form--button-container">
                    <button
                        type="submit"
                        className="shipping--form--button-container--button"
                    >
                        Continue
                    </button>
                </div>

            </form>

        </div>

    );

}


export default ShippingScreen;
*/

























// ===============================



























// at the beginning of lecture 53, given all the notes, I created a new file below without
// the notes so we are starting fresh

// since we are building a form we will need to use the useState(); hook
import React, { useState } from 'react';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in the Link component
import { Link } from 'react-router-dom';
// import in our action creator
import { saveShippingAddressActionCreator } from '../../redux/actions/cart.actions';
// inport in the FormInput component
import FormInput from '../../components/form-input/form-input.component';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';
// import in the CheckoutSteps component
import CheckoutSteps from '../../components/checkout-steps/checkout-steps.component';

import './shipping-screen.styles.scss';


const ShippingScreen = ( { history } ) => {

    // define dispatch
    const dispatch = useDispatch();

    // for this component we want to put the useSelector(); hook above the component level
    // state so that if the shippingAddress has been filled out previously and thereby stored
    // in local storage then we want the shipping address information to populate the form
    // fields below as soon as this component loads

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const cart = useSelector( ( state ) => state.cart );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output
    const { shippingAddress } = cart;

    // let's add the state for the form or set component level state
    const [ address, setAddress ]       = useState( shippingAddress.address ? shippingAddress.address : '' );
    const [ city, setCity ]             = useState( shippingAddress.city ? shippingAddress.city : '' );
    const [ postalCode, setPostalCode ] = useState( shippingAddress.postalCode ? shippingAddress.postalCode : '' );
    const [ country, setCountry ]       = useState( shippingAddress.country ? shippingAddress.country : '' );
    const [ message, setMessage ]       = useState( null );

    // submit handler
    const handleSubmit = ( e ) => {

        e.preventDefault();

        // everytime we submit the form we need to clear out any prior error messages
        setMessage( null );

        // before we dispatch the saveShippingAddressActionCreator let's do some front end validation
        if ( address === '' ||  city === '' || postalCode === '' || country === '' ) {

            // if the user did not enter the required information in the address, city, postal code
            // and / or country fields then set a new error message
            setMessage( 'All fields must be filled out in order to ship products. Please try again.' );

        } else {

            // create the action creator argument
            const shippingAddressFormData = {
                address    : address,
                city       : city,
                postalCode : postalCode,
                country    : country
            };

            // dispatch our action creator
            dispatch( saveShippingAddressActionCreator( shippingAddressFormData ) );

            // after we dispatch our action creator then we want to go directly to the payment
            // screen
            history.push( '/payment' );

        }

    }

    return (

        // let's start creating the form
        <div className="shipping-screen">

            { /* CheckoutSteps component */ }
            <CheckoutSteps step1 step2 />

            { /* breadcrumb for mobile devices or 620px for this app */ }
            <Link to="/cart" className="shipping-screen--breadcrumb">&#60; Back to Cart</Link>

            <h2 className="shipping-screen--title">Shipping</h2>

            { /* check message */ }
            { message && <ErrorMessage>{ message }</ErrorMessage> }

            <form className="shipping-screen--form" noValidate="novalidate" onSubmit={ handleSubmit } >

                <FormInput
                    name="address"
                    type="text"
                    label="Address"
                    value={ address }
                    onChange={ (e) => setAddress( e.target.value ) }
                />
                <FormInput
                    name="city"
                    type="text"
                    label="City"
                    value={ city }
                    onChange={ (e) => setCity( e.target.value ) }
                />
                <FormInput
                    name="postalCode"
                    type="text"
                    label="Postal Code"
                    value={ postalCode }
                    onChange={ (e) => setPostalCode( e.target.value ) }
                />
                <FormInput
                    name="country"
                    type="text"
                    label="Country"
                    value={ country }
                    onChange={ (e) => setCountry( e.target.value ) }
                />

                { /*  continue button  */ }
                <div className="shipping-screen--form--button-container">
                    <button
                        type="submit"
                        className="shipping-screen--form--button-container--button"
                    >
                        Continue to Payment
                    </button>
                </div>

            </form>

        </div>

    );

}


export default ShippingScreen;


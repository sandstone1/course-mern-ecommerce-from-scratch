
// 1 -
// coming from the user.actions.js 4 - file
// let's start by copying the RegisterScreen component 

/*
// since we are building a form we will need to use the useState(); hook and we will also
// need the useEffect(); hook
import React, { useState, useEffect } from 'react';
// import in the Link component
import { Link } from 'react-router-dom';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in our action creator
import { getUserDetailsActionCreator } from '../../redux/actions/user.actions';
// inport in the FormInput component
import FormInput from '../../components/form-input/form-input.component';
// import in the SkeletonHomeScreen component
import Spinner from '../../components/spinner/spinner.component';
// import in the ErrorMessage component
import ErrorMessage from '../../components/error/error-message.component';

import './profile-screen.styles.scss';


const ProfileScreen = ( { history, location } ) => {

    // set component level state
    const [ name, setName ] = useState( '' );
    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );
    const [ confirmPassword, setConfirmPassword ] = useState( '' );
    const [ message, setMessage ] = useState( null );

    // define dispatch
    const dispatch = useDispatch();

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const userDetails = useSelector( ( state ) => state.userDetails );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { loading, user, error } = userDetails;

    // we're going to want to make sure the user is logged in before they can access this
    // screen so let's bring in userInfo
    const userSignIn = useSelector( ( state ) => state.userSignIn );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // let's use userInfo in the useEffect(); hook below
    const { userInfo } = userSignIn;

    // if the user is already logged in and they try to go to the register screen then we want
    // to redirect the user
    useEffect( () => {

        // if the user is logged in then userInfo will be true otherwise userInfo will be null
        if ( !userInfo ) {

            // use history.push(); to redirect the user

            // if the user is not logged in and they try to access the profile screen then we
            // will redirect the user to the sign in screen
            history.push( '/login' );

        } else { // if the user is logged in

            if ( !user.name ) { 

                // if we don't have the user details yet then we need dispatch
                // getUserDetailsActionCreator
                dispatch( getUserDetailsActionCreator() );

            } else {

                // if we do have the user details then let's set the state for the name and
                // email and what this will do is fill the name and email form fields below
                setName( user.name );
                setEmail( user.email );

            }

        }

     }, [ history, userInfo, user, dispatch ] );


     // submit handler
    const handleSubmit = ( e ) => {

        e.preventDefault();

        // everytime we submit the form we need to clear out any prior error messages
        setMessage( null );

        // before we dispatch the userRegisterActionCreator let's do some front end validation
        if ( name === '' ||  email === '' || password === '' || confirmPassword === '' ) {

            // if the user did not enter the required information in the name, email, password
            // and / or confirm password fields then set a new error message
            setMessage( 'All fields must be filled out in order to update your profile. Please try again.' );

        } else if ( password !== confirmPassword ) {

            // if the password does not match the confirm password then set the error message
            setMessage( 'Passwords do not match. Please try again.' );

        } else {

            // dispatch our update profile action creator ( will do this later )

        }

    }

    return (

        // let's start creating the profile screen and inside this screen we will have 2 columns,
        // one for updating the user details and another for showing the user orders 
        <div className="profile">

            { /* update form  */ /* }
            <div className="profile--update">

                <h2 className="profile--update--title">User Profile</h2>

                { /* check message and check error */ /* }
                { /* combine check message and check error so we only show one error at a time */ /* }
                { message ? <ErrorMessage>{ message }</ErrorMessage> : error && <ErrorMessage>{ error }</ErrorMessage> }

                { /* check loading */ /* }
                { loading && <Spinner /> }

                <form className="profile--update--form" noValidate="novalidate" onSubmit={ handleSubmit } >

                    <FormInput
                        name="name"
                        type="name"
                        label="Name"
                        value={ name }
                        onChange={ (e) => setName( e.target.value ) }
                    />
                    <FormInput
                        name="email"
                        type="email"
                        label="Email"
                        value={ email }
                        onChange={ (e) => setEmail( e.target.value ) }
                    />
                    <FormInput
                        name="password"
                        type="password"
                        label="Password"
                        value={ password }
                        onChange={ (e) => setPassword( e.target.value ) }
                    />
                    <FormInput
                        name="password"
                        type="password"
                        label="Confirm Password"
                        value={ confirmPassword }
                        onChange={ (e) => setConfirmPassword( e.target.value ) }
                    />


                    { /*  profile button  */ /* }
                    <div className="profile--update--form--button-container">
                        <button
                            type="submit"
                            className="profile--update--form--button-container--button"
                        >
                            Update
                        </button>
                    </div>
                </form>

            </div>
            
            { /* order details  */ /* }
            <div className="profile--orders">

                <h2 className="profile--orders--title">My Orders</h2>

            </div>

        </div>

    );

}

export default ProfileScreen;


// let's add a route for the profile screen in the App.js file and let's go to the App.js
// 7 - file now

// 2 -
// coming from the App.js 7 - file

// let's test this out by signing in as John Doe

// and on the profile screen, we see our update form with the name and email fields already
// filled in with John Doe's name and email information

// and we also see the " My Orders " title next to the update form

// and this is correct so everything is working as expected

// in the next video we will work on the functionality to update the user profile


// End of 2 -


// End of 1 -
*/































// ===============================


























/*
// at the beginning of lecture 49, given all the notes, I created a new file below without
// the notes so we are starting fresh

// since we are building a form we will need to use the useState(); hook and we will also
// need the useEffect(); hook
import React, { useState, useEffect } from 'react';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in our action creator
import { 
    getUserDetailsActionCreator,
    userUpdateProfileActionCreator 
} from '../../redux/actions/user.actions';
import { USER_UPDATE_PROFILE_RESET } from '../../redux/constants/user.constants';
// inport in the FormInput component
import FormInput from '../../components/form-input/form-input.component';
// import in the SkeletonHomeScreen component
import Spinner from '../../components/spinner/spinner.component';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';
// import in the SuccessMessage component
import SuccessMessage from '../../components/message/success-message.component';

import './profile-screen.styles.scss';


// 3 -
// import in the userUpdateProfileActionCreator above and import in USER_UPDATE_PROFILE_RESET

// End of 3 -


const ProfileScreen = ( { history } ) => {

    // set component level state
    const [ name, setName ] = useState( '' );
    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );
    const [ confirmPassword, setConfirmPassword ] = useState( '' );
    const [ message, setMessage ] = useState( null );

    // define dispatch
    const dispatch = useDispatch();

    // User Details
    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const userDetails = useSelector( ( state ) => state.userDetails );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { loading, user, error } = userDetails;

    // User SignIn
    // we're going to want to make sure the user is logged in before they can access this
    // screen so let's bring in userInfo
    const userSignIn = useSelector( ( state ) => state.userSignIn );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // let's use userInfo in the useEffect(); hook below
    const { userInfo } = userSignIn;

    // 3 - continued

    // User Update Profile
    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const userUpdateProfile = useSelector( ( state ) => state.userUpdateProfile );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { success } = userUpdateProfile;

    // End of 3 -

    // if the user is already logged in and they try to go to the register screen then we want
    // to redirect the user
    useEffect( () => {

        // if the user is logged in then userInfo will be true otherwise userInfo will be null
        if ( !userInfo ) {

            // use history.push(); to redirect the user

            // if the user is not logged in and they try to access the profile screen then we
            // will redirect the user to the sign in screen
            history.push( '/login' );

        } else { // if the user is logged in

            // 3 - continued

            /*
            // took this out since it was preventing the success message from showing

            // after we successfully update the user profile information we want to update
            // the user details so we can populate the name and emails fields with the latest
            // data and in order to do this we need to force the dispatch for the
            // getUserDetailsActionCreator and that way our form fields will get filled with
            // the updated user information or the latest user information
            */
           /*
            if ( !user.name ) {

                /*
                // took this out since it was preventing the success message from showing
    
                // we have to clear out success after we dispatch the getUserDetailsActionCreator
                // otherwise we will enter into an infinate loop because success will always be
                // true and therfore we will keep dispatching the getUserDetailsActionCreator
                // until we clear out success
                // dispatch( { type : USER_UPDATE_PROFILE_RESET } );
                */

                // End of 3 -

                // if we don't have the user details yet then we need dispatch
                // getUserDetailsActionCreator
                /*
                dispatch( getUserDetailsActionCreator() );

            } else {

                // if we do have the user details then let's set the state for the name and
                // email and what this will do is fill the name and email form fields below
                setName( user.name );
                setEmail( user.email );

            }

        } // end of if ( !userInfo ) {} else {}

        // clear out the success message after 5 seconds
        if ( success ) {
            
            setTimeout( () => {

                dispatch( { type : USER_UPDATE_PROFILE_RESET } );

            }, 5000 );

        } // end of if ( success ) {}

     }, [ history, userInfo, user, dispatch, success ] );


     // submit handler
    const handleSubmit = ( e ) => {

        e.preventDefault();

        // everytime we submit the form we need to clear out any prior error messages
        setMessage( null );

        // before we dispatch the userRegisterActionCreator let's do some front end validation
        if ( password !== confirmPassword ) {

            // if the password does not match the confirm password then set the error message
            setMessage( 'Passwords do not match. Please try again.' );

        } else {

            // 3 - continued

            // dispatch our user update profile action creator and remember to pass in the
            // user update object and we are pulling the id from the user object and we are
            // pulling the name, email and password from the component state

            // and remember we are using req.body.name, req.body.email, req.body.password
            // in our userUpdateProfile controller in the user.controllers.js file so we
            // need to pass along the name, email and password key value pairs in order to
            // update the user's information in the userUpdateProfile controller and thereby
            // update the user's information in the database
            dispatch( userUpdateProfileActionCreator(

                {
                    name     : name,
                    email    : email,
                    password : password
                }

            ) );

        }

    }

    // and after changing the name on the Update form from " John Doe " to " John Do " and then
    // pressing the Update sumbit button below I see the following in the on the left hand
    // side of the page in redux dev tools:

    /*
        @@INIT
        USER_UPDATE_PROFILE_REQUEST
        USER_UPDATE_PROFILE_SUCCESS
    */

    // and this is correct so everything is working as expected

    // additionally, when I press the Update sumbit button below I see the following under the
    // State tab on the right hand side of the page in redux dev tools:

    /*
        userUpdateProfile (pin)
        loading : false
        success : true
        userInfo (pin)
            _id (pin): "5ff504545a6a66457f0b0705"
            name (pin): "John Do"
            email (pin): "john@example.com"
            isAdmin (pin): false
            token (pin): "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZjUwNDU0NWE2YTY2NDU
            3ZjBiMDcwNSIsImlhdCI6MTYxNDM3NzY4MCwiZXhwIjoxNjE2OTY5NjgwfQ.85Yo2KurALyO9WZBtancFx
            crB2icT6ZXSNAnt_H2_90"
    */

    // so I see the correct name or " John Do " and this is correct so everything is working
    // as expected

    // after we submit the Update form we want to show a message that tells the user that the
    // update was successful and let's create a new message below to that effect

    // in the next section we will add the shipping screen and the place order screen and then
    // we will set up PayPal

    // End of 3 -

    /*
    return (

        // the profile screen will contain 2 columns, one for updating the user details and
        // another for showing the user orders 
        <div className="profile">

            { /* update form  */ /* }
            <div className="profile--update">

                <h2 className="profile--update--title">User Profile</h2>

                { /* check message and check error and check success */ /* }
                { /* combine check message and check error so we only show one error at a time */ /* }
                { 
                    message ? <ErrorMessage>{ message }</ErrorMessage> :
                    error ? <ErrorMessage>{ error }</ErrorMessage> :
                    success ? <SuccessMessage>Profile updated!</SuccessMessage> :
                    null
                }

                { /* check loading */ /* }
                { loading && <Spinner /> }

                <form className="profile--update--form" noValidate="novalidate" onSubmit={ handleSubmit } >

                    <FormInput
                        name="name"
                        type="name"
                        label="Name"
                        value={ name }
                        onChange={ (e) => setName( e.target.value ) }
                    />
                    <FormInput
                        name="email"
                        type="email"
                        label="Email"
                        value={ email }
                        onChange={ (e) => setEmail( e.target.value ) }
                    />
                    <FormInput
                        name="password"
                        type="password"
                        label="Password"
                        value={ password }
                        onChange={ (e) => setPassword( e.target.value ) }
                    />
                    <FormInput
                        name="password"
                        type="password"
                        label="Confirm Password"
                        value={ confirmPassword }
                        onChange={ (e) => setConfirmPassword( e.target.value ) }
                    />


                    { /*  profile button  */ /* }
                    <div className="profile--update--form--button-container">
                        <button
                            type="submit"
                            className="profile--update--form--button-container--button"
                        >
                            Update
                        </button>
                    </div>
                </form>

            </div>
            
            { /* order details  */ /* }
            <div className="profile--orders">

                <h2 className="profile--orders--title">My Orders</h2>

            </div>

        </div>

    );

}

export default ProfileScreen;
*/






























// ===============================


























/*
// at the beginning of lecture 51, given all the notes, I created a new file below without
// the notes so we are starting fresh

// since we are building a form we will need to use the useState(); hook and we will also
// need the useEffect(); hook
import React, { useState, useEffect } from 'react';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in the Link component
import { Link } from 'react-router-dom';
// import in our action creator
import { 
    getUserDetailsActionCreator,
    userUpdateProfileActionCreator 
} from '../../redux/actions/user.actions';
import { USER_UPDATE_PROFILE_RESET } from '../../redux/constants/user.constants';
// inport in the FormInput component
import FormInput from '../../components/form-input/form-input.component';
// import in the SkeletonHomeScreen component
import Spinner from '../../components/spinner/spinner.component';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';
// import in the SuccessMessage component
import SuccessMessage from '../../components/message/success-message.component';

import './profile-screen.styles.scss';


// 4 -
// coming form the order.actions.js 4 - file

// import in our action creator
import { orderListMyActionCreator } from '../../redux/actions/order.actions';

// bring in the state below

// End of 4 -


const ProfileScreen = ( { history } ) => {

    // ==============================
    // Component State
    // ==============================

    // set component level state
    const [ name, setName ] = useState( '' );
    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );
    const [ confirmPassword, setConfirmPassword ] = useState( '' );
    const [ message, setMessage ] = useState( null );

    // ==============================
    // DISPATCH & USESELECTOR(); & USEEFFECT();
    // ==============================

    // define dispatch
    const dispatch = useDispatch();

    // ==============================
    // userDetails State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const userDetails = useSelector( ( state ) => state.userDetails );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { loading, user, error } = userDetails;

    // ==============================
    // userSignIn State
    // ==============================

    // we're going to want to make sure the user is logged in before they can access this
    // screen so let's bring in userInfo
    const userSignIn = useSelector( ( state ) => state.userSignIn );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // let's use userInfo in the useEffect(); hook below
    const { userInfo } = userSignIn;

    // ==============================
    // userUpdateProfile State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const userUpdateProfile = useSelector( ( state ) => state.userUpdateProfile );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { success } = userUpdateProfile;


    // 4 - continued

    // ==============================
    // orderListMy State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const orderListMy = useSelector( ( state ) => state.orderListMy );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output

    // since we already have loading and error defined above let's rename loading below to
    // loadingOrders and rename error below to errorOrders
    const { loading : loadingOrders, orders, error : errorOrders } = orderListMy;

    // End of 4 -


    // if the user is already logged in and they try to go to the register screen then we want
    // to redirect the user
    useEffect( () => {

        // ==============================
        // First if statement
        // ==============================

        // if the user is logged in then userInfo will be true otherwise userInfo will be null
        if ( !userInfo ) {

            // use history.push(); to redirect the user

            // if the user is not logged in and they try to access the profile screen then we
            // will redirect the user to the sign in screen
            history.push( '/login' );

        } else { // if the user is logged in

            if ( !user.name ) {

                // if we don't have the user details yet then we need dispatch
                // getUserDetailsActionCreator
                dispatch( getUserDetailsActionCreator() );

                // 4 - continued

                // dispatch the orderListMyActionCreator
                dispatch( orderListMyActionCreator() );

                // if we check redux dev tools we see the following:

                /*
                    orderListMy (pin)
                        loading (pin): false
                        orders (pin)
                            0 (pin): { shippingAddress: { ... }, paymentResult: { ... }, shippingPrice: 0, ... }
                            1 (pin): { shippingAddress: { ... }, paymentResult: { ... }, shippingPrice: 0, ... }
                            2 (pin): { shippingAddress: { ... }, paymentResult: { ... }, shippingPrice: 0, ... }
                            3 (pin): { shippingAddress: { ... }, paymentResult: { ... }, shippingPrice: 0, ... }
                */

                // so we see John Doe's 4 orders and this is correct so everything is working as
                // expected
                
                // let's bring in these orders down below under the My Orders heading

                // and now we are ready to start adding admin functionality because right now
                // there is no way to add products and no way to manage users and we will focus
                // on adding the admin functionality in the next couple sections

                // End of 4 -

            /*
            } else {

                // if we do have the user details then let's set the state for the name and
                // email and what this will do is fill the name and email form fields below
                setName( user.name );
                setEmail( user.email );

            }

        } // end of if ( !userInfo ) {} else {}

        // ==============================
        // Second if statement
        // ==============================

        // clear out the success message after 5 seconds
        if ( success ) {
            
            setTimeout( () => {

                dispatch( { type : USER_UPDATE_PROFILE_RESET } );

            }, 5000 );

        } // end of if ( success ) {}

     }, [ history, userInfo, user, dispatch, success ] );


     // submit handler
    const handleSubmit = ( e ) => {

        e.preventDefault();

        // everytime we submit the form we need to clear out any prior error messages
        setMessage( null );

        // before we dispatch the userRegisterActionCreator let's do some front end validation
        if ( password !== confirmPassword ) {

            // if the password does not match the confirm password then set the error message
            setMessage( 'Passwords do not match. Please try again.' );

        } else {

            // dispatch our user update profile action creator and remember to pass in the
            // user update object and we are pulling the name, email and password from the
            // component state

            // and remember we are using req.body.name, req.body.email, req.body.password
            // in our userUpdateProfile controller in the user.controllers.js file so we
            // need to pass along the name, email and password key value pairs in order to
            // update the user's information in the userUpdateProfile controller and thereby
            // update the user's information in the database
            dispatch( userUpdateProfileActionCreator(

                {
                    name     : name,
                    email    : email,
                    password : password
                }

            ) );

        }

    }


    return (

        // the profile screen will contain 2 columns, one for updating the user details and
        // another for showing the user orders 
        <div className="profile-screen">

            { /* update form  */ /* }
            <div className="profile-screen--update">

                <h2 className="profile-screen--update--title">User Profile</h2>

                { /* check message and check error and check success */ /* }
                { /* combine check message, check error and check success so we only show one error at a time */ /* }
                { 
                    message ? <ErrorMessage>{ message }</ErrorMessage> :
                    error ? <ErrorMessage>{ error }</ErrorMessage> :
                    success && <SuccessMessage>Profile updated!</SuccessMessage>
                }

                { /* check loading */ /* }
                { loading && <Spinner /> }

                <form className="profile--update--form" noValidate="novalidate" onSubmit={ handleSubmit } >

                    <FormInput
                        name="name"
                        type="name"
                        label="Name"
                        value={ name }
                        onChange={ (e) => setName( e.target.value ) }
                    />
                    <FormInput
                        name="email"
                        type="email"
                        label="Email"
                        value={ email }
                        onChange={ (e) => setEmail( e.target.value ) }
                    />
                    <FormInput
                        name="password"
                        type="password"
                        label="Password"
                        value={ password }
                        onChange={ (e) => setPassword( e.target.value ) }
                    />
                    <FormInput
                        name="password"
                        type="password"
                        label="Confirm Password"
                        value={ confirmPassword }
                        onChange={ (e) => setConfirmPassword( e.target.value ) }
                    />

                    { /*  user profile button  */ /* }
                    <div className="profile-screen--update--form--button-container">
                        <button
                            type="submit"
                            className="profile-screen--update--form--button-container--button"
                        >
                            Update
                        </button>
                    </div>
                </form>

            </div>
            
            { /* order details  */ /* }
            <div className="profile-screen--orders">

                <h2 className="profile-screen--orders--title">My Orders</h2>

                {

                    loadingOrders ? (
                        
                        <Spinner /> 
                    
                    ) : ( 
                        
                        errorOrders
                    
                    ) ? (

                        <ErrorMessage>{ errorOrders }</ErrorMessage>

                    ) : (

                        <table className="profile-screen--orders--table">

                            <thead>
                                <tr>
                                    <td></td>
                                    <td>Order</td>
                                    <td></td>
                                    <td>Paid</td>
                                    <td>Delivered</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>ID</td>
                                    <td>Date</td>
                                    <td>Total</td>
                                    <td>Date</td>
                                    <td>Date</td>
                                    <td></td>
                                </tr>
                            </thead>

                            <tbody className="profile-screen--orders--table--tbody">
                            {

                                orders.map( ( order ) => (

                                    <tr key={ order._id } className="profile-screen--orders--table--tbody--tr">

                                        { /* row 2+ and column 1  - _id */ /* }
                                        <td className="profile-screen--orders--table--tbody--tr--td--id">
                                            { order._id }
                                        </td>

                                        { /* row 2+ and column 2 - createdAt */ /* }
                                        <td className="profile-screen--orders--table--tbody--tr--td--date">
                                            { order.createdAt.substring( 0, 10 ) }
                                        </td>

                                         { /* row 2+ and column 3 - totalPrice */ /* }
                                        <td className="profile-screen--orders--table--tbody--tr--td--total">
                                            ${
                                                order.totalPrice.toString().replace( /\B(?=(\d{3})+(?!\d))/g, "," )
                                            }
                                        </td>

                                         { /* row 2+ and column 4 - paidAt */ /* }
                                        <td className="profile-screen--orders--table--tbody--tr--td--paid">
                                            { 
                                                order.isPaid ? (
                                                    order.paidAt.substring( 0, 10 )
                                                ) : (
                                                    <i className="fas fa-times profile-screen--orders--table--tbody--tr--td--paid--fa-times"></i>
                                                )
                                            }
                                        </td>

                                        { /* row 2+ and column 5 - isDelivered */ /* }
                                        <td className="profile-screen--orders--table--tbody--tr--td--delivered">
                                            { 
                                                order.isDelivered ? (
                                                    order.deliveredAt.substring( 0, 10 )
                                                ) : (
                                                    <i className="fas fa-times profile-screen--orders--table--tbody--tr--td--paid--fa-times"></i>
                                                )
                                            }
                                        </td>

                                        { /*  row 2+ and column 6 order details link  */ /* }
                                        <td className="profile-screen--orders--table--tbody--tr--td--link">
                                            <Link
                                                to={ `/order/${ order._id }` }
                                            >
                                                Details
                                            </Link>
                                        </td>

                                    </tr>

                                ) )

                            }
                            </tbody>

                        </table>

                    )

                    }

            </div>

        </div>

    );

}

export default ProfileScreen;
*/






























// ===============================



























// at the beginning of lecture 65, given all the notes, I created a new file below without
// the notes so we are starting fresh

// since we are building a form we will need to use the useState(); hook and we will also
// need the useEffect(); hook
import React, { useState, useEffect } from 'react';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in the Link component
import { Link } from 'react-router-dom';
// import in our action creator
import { 
    userGetProfileActionCreator,
    userUpdateProfileActionCreator 
} from '../../redux/actions/user.actions';
// import in our action creator
import { orderListMyActionCreator } from '../../redux/actions/order.actions';
// import in the USER_UPDATE_PROFILE_RESET constant
import { USER_UPDATE_PROFILE_RESET } from '../../redux/constants/user.constants';
// inport in the FormInput component
import FormInput from '../../components/form-input/form-input.component';
// import in the SkeletonHomeScreen component
import Spinner from '../../components/spinner/spinner.component';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';
// import in the SuccessMessage component
import SuccessMessage from '../../components/message/success-message.component';

import './profile-screen.styles.scss';


const ProfileScreen = ( { history } ) => {

    // ==============================
    // Component State
    // ==============================

    // set component level state
    const [ name, setName ] = useState( '' );
    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );
    const [ confirmPassword, setConfirmPassword ] = useState( '' );
    const [ message, setMessage ] = useState( null );

    // ==============================
    // DISPATCH & USESELECTOR(); & USEEFFECT();
    // ==============================

    // define dispatch
    const dispatch = useDispatch();

    // ==============================
    // userGetProfile State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const userGetProfile = useSelector( ( state ) => state.userGetProfile );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { loading, user, error } = userGetProfile;

    // ==============================
    // userSignIn State
    // ==============================

    // we're going to want to make sure the user is logged in before they can access this
    // screen so let's bring in userInfo
    const userSignIn = useSelector( ( state ) => state.userSignIn );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // let's use userInfo in the useEffect(); hook below
    const { userInfo } = userSignIn;

    // ==============================
    // userUpdateProfile State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const userUpdateProfile = useSelector( ( state ) => state.userUpdateProfile );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { success } = userUpdateProfile;

    // ==============================
    // orderListMy State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const orderListMy = useSelector( ( state ) => state.orderListMy );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output

    // since we already have loading and error defined above let's rename loading below to
    // loadingOrders and rename error below to errorOrders
    const { loading : loadingOrders, orders, error : errorOrders } = orderListMy;


    // if the user is already logged in and they try to go to the register screen then we want
    // to redirect the user
    useEffect( () => {

        // ==============================
        // First if statement
        // ==============================

        // if the user is logged in then userInfo will be true otherwise userInfo will be null
        if ( !userInfo ) {

            // use history.push(); to redirect the user

            // if the user is not logged in and they try to access the profile screen then we
            // will redirect the user to the sign in screen
            history.push( '/login' );

        } else { // if the user is logged in

            if ( !user.name ) {

                // if we don't have the user details yet then we need dispatch
                // userGetProfileActionCreator
                dispatch( userGetProfileActionCreator() );

                // dispatch the orderListMyActionCreator
                dispatch( orderListMyActionCreator() );

            } else {

                // if we do have the user details then let's set the state for the name and
                // email and what this will do is fill the name and email form fields below
                setName( user.name );
                setEmail( user.email );

                // dispatch the orderListMyActionCreator again so we update the orders with
                // the latest information
                dispatch( orderListMyActionCreator() );

            }

        } // end of if ( !userInfo ) {} else {}

        // ==============================
        // Second if statement
        // ==============================

        // clear out the success message after 5 seconds
        if ( success ) {
            
            setTimeout( () => {

                dispatch( { type : USER_UPDATE_PROFILE_RESET } );

            }, 3000 );

        } // end of if ( success ) {}

     }, [ history, userInfo, user, dispatch, success ] );

    // ==============================
    // handleSubmit Function
    // ==============================

     // submit handler
    const handleSubmit = ( e ) => {

        e.preventDefault();

        // everytime we submit the form we need to clear out any prior error messages
        setMessage( null );

        // before we dispatch the userRegisterActionCreator let's do some front end validation
        if ( password !== confirmPassword ) {

            // if the password does not match the confirm password then set the error message
            setMessage( 'Passwords do not match. Please try again.' );

        } else {

            // dispatch our user update profile action creator and remember to pass in the
            // user update object and we are pulling the name, email and password from the
            // component state

            // and remember we are using req.body.name, req.body.email, req.body.password
            // in our userUpdateProfile controller in the user.controllers.js file so we
            // need to pass along the name, email and password key value pairs in order to
            // update the user's information in the userUpdateProfile controller and thereby
            // update the user's information in the database
            dispatch( userUpdateProfileActionCreator(

                {
                    name     : name,
                    email    : email,
                    password : password
                }

            ) );

        }

    } // end of handleSubmit


    return (

        // the profile screen will contain 2 columns, one for updating the user details and
        // another for showing the user orders 
        <div className="profile-screen">

            { /* update form  */ }
            <div className="profile-screen--update">

                <h2 className="profile-screen--update--title">User Profile</h2>

                <div className="profile-screen--update--messages">

                    { /* check message and check error and check success */ }
                    { /* combine check message, check error and check success so we only show one error at a time */ }
                    { 
                        message ? <ErrorMessage>{ message }</ErrorMessage> :
                        error ? <ErrorMessage>{ error }</ErrorMessage> :
                        success && <SuccessMessage>Profile updated!</SuccessMessage>
                    }

                </div>

                { /* check loading */ }
                { loading && <Spinner /> }

                <form className="profile-screen--update--form" noValidate="novalidate" onSubmit={ handleSubmit } >

                    <FormInput
                        name="name"
                        type="name"
                        label="Name"
                        value={ name }
                        onChange={ (e) => setName( e.target.value ) }
                    />
                    <FormInput
                        name="email"
                        type="email"
                        label="Email"
                        value={ email }
                        onChange={ (e) => setEmail( e.target.value ) }
                    />
                    <FormInput
                        name="password"
                        type="password"
                        label="Password"
                        value={ password }
                        onChange={ (e) => setPassword( e.target.value ) }
                    />
                    <FormInput
                        name="password"
                        type="password"
                        label="Confirm Password"
                        value={ confirmPassword }
                        onChange={ (e) => setConfirmPassword( e.target.value ) }
                    />

                    { /*  user profile button  */ }
                    <div className="profile-screen--update--form--button-container">
                        <button
                            type="submit"
                            className="profile-screen--update--form--button-container--button"
                        >
                            Update
                        </button>
                    </div>
                </form>

            </div>

            { /* display all the orders from a particular user */ }
            <div className="profile-screen--orders">

                <h2 className="profile-screen--orders--title">My Orders</h2>

                {

                    loadingOrders ? (
                        
                        <Spinner /> 
                    
                    ) : ( 
                        
                        errorOrders
                    
                    ) ? (

                        <ErrorMessage>{ errorOrders }</ErrorMessage>

                    ) : (

                        orders.length > 0

                    ) ? (

                        <table className="profile-screen--orders--table">

                            <thead>
                                <tr>
                                    <td></td>
                                    <td>Order</td>
                                    <td></td>
                                    <td>Paid</td>
                                    <td>Delivered</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>ID</td>
                                    <td>Date</td>
                                    <td>Total</td>
                                    <td>Date</td>
                                    <td>Date</td>
                                    <td></td>
                                </tr>
                            </thead>

                            <tbody className="profile-screen--orders--table--tbody">
                            {

                                orders.map( ( order ) => (

                                    <tr key={ order._id } className="profile-screen--orders--table--tbody--tr">

                                        { /* row 2+ and column 1  - _id */ }
                                        <td className="profile-screen--orders--table--tbody--tr--td--id">
                                            { order._id }
                                        </td>

                                        { /* row 2+ and column 2 - createdAt */ }
                                        <td className="profile-screen--orders--table--tbody--tr--td--date">
                                            { order.createdAt.substring( 0, 10 ) }
                                        </td>

                                         { /* row 2+ and column 3 - totalPrice */ }
                                        <td className="profile-screen--orders--table--tbody--tr--td--total">
                                            ${
                                                order.totalPrice.toString().replace( /\B(?=(\d{3})+(?!\d))/g, "," )
                                            }
                                        </td>

                                         { /* row 2+ and column 4 - paidAt */ }
                                        <td className="profile-screen--orders--table--tbody--tr--td--paid">
                                            { 
                                                order.isPaid ? (
                                                    order.paidAt.substring( 0, 10 )
                                                ) : (
                                                    <i className="fas fa-times profile-screen--orders--table--tbody--tr--td--paid--fa-times"></i>
                                                )
                                            }
                                        </td>

                                        { /* row 2+ and column 5 - isDelivered */ }
                                        <td className="profile-screen--orders--table--tbody--tr--td--delivered">
                                            { 
                                                order.isDelivered ? (
                                                    order.deliveredAt.substring( 0, 10 )
                                                ) : (
                                                    <i className="fas fa-times profile-screen--orders--table--tbody--tr--td--paid--fa-times"></i>
                                                )
                                            }
                                        </td>

                                        { /*  row 2+ and column 6 order details link  */ }
                                        <td className="profile-screen--orders--table--tbody--tr--td--order-screen-link">
                                            <Link
                                                to={ `/order/${ order._id }` }
                                            >
                                                Details
                                            </Link>
                                        </td>

                                    </tr>

                                ) )

                            }
                            </tbody>

                        </table>

                    ) : (

                        null

                    )

                }

            </div>

        </div>

    );

}

export default ProfileScreen;


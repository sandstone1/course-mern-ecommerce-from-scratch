
// 1 -
// coming from the user.actions.js 3 - file

/*
// since we are building a form we will need to use the useState(); hook and let's also
// import in the useEffect(); hook
import React, { useState, useEffect } from 'react';
// import in the Link component
import { Link } from 'react-router-dom';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in our action creator
import { userRegisterActionCreator } from '../../redux/actions/user.actions';
// inport in the FormInput component
import FormInput from '../../components/form-input/form-input.component';
// import in the SkeletonHomeScreen component
import Spinner from '../../components/spinner/spinner.component';
// import in the ErrorMessage component
import ErrorMessage from '../../components/error/error-message.component';

import './register-screen.styles.scss';


const RegisterScreen = ( { history, location } ) => {

    // set component level state
    const [ name, setName ] = useState( '' );
    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );
    const [ confirmPassword, setConfirmPassword ] = useState( '' );
    // we also need to set a message for when the password does not equal the confirm password
    // and this message is an example of front end validation
    const [ message, setMessage ] = useState( null );

    // remember location.search returns " A String, representing the querystring part of a URL,
    // including the question mark (?) "

    // let's use the split(); method to split the query string into an array of 2 parts
    // and then we will select the second part
    const redirect = location.search ? location.search.split( '=' )[ 1 ] : "/";

    // define dispatch
    const dispatch = useDispatch();

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const userRegister = useSelector( ( state ) => state.userRegister );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { loading, userInfo, error } = userRegister;

    // if the user is already logged in and they try to go to the register screen then we want
    // to redirect the user
    useEffect( () => {

        // if the user is logged in then userInfo will be true otherwise userInfo will be null
        if ( userInfo ) {

            // use history.push(); to redirect the user
            // and history.push(); " pushes a new entry into the history stack - aka redirecting
            // the user to another route "
            history.push( redirect );

        }

     }, [ history, userInfo, redirect ] );
 
    // submit handler
    const handleSubmit = ( e ) => {

        e.preventDefault();

        // everytime we submit the form we need to clear out any prior error messages
        setMessage( null );

        // before we dispatch the userRegisterActionCreator let's do some front end validation
        if ( name === '' ||  email === '' || password === '' || confirmPassword === '' ) {

            // if the user did not enter the required information in the name, email, password
            // and / or confirm password fields then set a new error message to read as follows
            // " All fields must be filled out in order to register. Please try again. "
            setMessage( 'All fields must be filled out in order to register. Please try again.' );

        } else if ( password !== confirmPassword ) {

            // if the password does not match the confirm password then set the message to 
            // " Passwords do not match.  Please try again. "
            setMessage( 'Passwords do not match. Please try again.' );

        } else {

            // dispatch our action creator
            dispatch( userRegisterActionCreator( name, email, password ) );

        }

    }

    // now let's out the registration page

    // and if we leave the name field blank, for example, then we see a client side error message
    // that says " All fields must be filled out in order to register. Please try again. "

    // and this is correct so everything is working as expected

    // and if we sign up using the Admin User credentials then we will see a server side
    // error message that says " User aleady exists. Please try again. "

    // and this is correct so everything is working as expected

    // and if we change the confirm password field so that it no longer matches the password
    // field then we see a client side error message that says " Passwords do not match. Please
    // try again. "

    // and this is correct so everything is working as expected

    // and if we try

    /*
        name             : John Dean
        email            : admin@example.com
        password         : ******
        confrim password : ******
    */

    // and now we get a server side error message that says " User aleady exists. Please
    // try again. "

    // and this is correct so everything is working as expected

    // now if we register a valid user or:

    /*
        name             : John Dean
        email            : johndean@example.com
        password         : ******
        confrim password : ******
    */    

    // then we see in the database that a new user has been added or:

    /*
        {
            _id       : Objectid( "603060aa73cfe9a3b1e2bdc2" ),
            isAdmin   : false,
            name      : "John Dean",
            email     : "johndean@example.com",
            password  : "$2a$10$sNnaW1YP2r3xULITXQnUVuVitMTsoXj3oVYHdgJWlBPElp9SURzYy",
            createdAt : 2021-02-20T01:06:50.879+00:00,
            updatedAt : 2021-02-20T01:06:50.879+00:00,
            __v       : 0
        }
    */

    // and this is correct so everything is working as expected

    // and we see on the left hand side of the page in redux dev tools the following:

    /*
        USER_REGISTER_REQUEST
        USER_REGISTER_SUCCESS
        USER_SIGNIN_SUCESS
    */

    // and this is correct so everything is working as expected

    // and we see that the Sign In navigation tab has been changed to " John Dean " and
    // this is correct so everything is working as expected

    // and under the state tab in redux dev tools we see the following:

    /*
        userRegister (pin)
            loading (pin) : false
            userInfo (pin)
                _id (pin)     : "603060aa73cfe9a3b1e2bdc2"
                name (pin)    : "John Dean"
                email (pin)   : "johndean@example.com"
                isAdmin (pin) : false
                token (pin)   : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMzA2MGFhNzNj
                ZmU5YTNiMWUyYmRjMiIsImlhdCI6MTYxMzc4MzIxMSwiZXhwIjoxNjE2Mzc1MjExfQ.nA5DqTvTfLA
                TyKN8wyOB2hhIkxKrSX1ZFPWUTaSybuY"
    */

    // and this is correct so everything is working as expected

    // so now our sign in and register flow is complete and the next thing we want to do
    // before we move on to the checkout process is we want to set up the user profile screen
    // so that a user can see their profile and update their profile


    /*
    return (

        // let's start creating the form
        <div className="register">
            <h2 className="register--title">Sign Up</h2>

            { /* check message and check error */ /* }
            { /* combine check message and check error so we only show one error at a time */ /* }
            { message ? <ErrorMessage>{ message }</ErrorMessage> : error && <ErrorMessage>{ error }</ErrorMessage> }

            { /* check loading */ /* }
            { loading && <Spinner /> }

            <form className="register--form" noValidate="novalidate" onSubmit={ handleSubmit } >

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


                { /*  register button  */ /* }
                <div className="register--form--button-container">
                    <button
                        type="submit"
                        className="register--form--button-container--button"
                    >
                        Register
                    </button>
                </div>
            </form>

            { /*  sign in link  */ /* }
            <span className="register--sign-in">
                Already have an account?&nbsp;&nbsp;
                <Link
                    className="register--sign-in--link"
                    to={ redirect ? `/login?redirect=${ redirect }` : "/login" }
                >
                   Sign in here
                </Link>
            </span>

        </div>

    );

}


export default RegisterScreen;


// End of 1 -
*/




























// ===============================



























// at the beginning of lecture 47, given all the notes, I created a new file below without
// the notes so we are starting fresh



// since we are building a form we will need to use the useState(); hook and let's also
// import in the useEffect(); hook
import React, { useState, useEffect } from 'react';
// import in the Link component
import { Link } from 'react-router-dom';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in our action creator
import { userRegisterActionCreator } from '../../redux/actions/user.actions';
// inport in the FormInput component
import FormInput from '../../components/form-input/form-input.component';
// import in the SkeletonHomeScreen component
import Spinner from '../../components/spinner/spinner.component';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';

import './register-screen.styles.scss';


const RegisterScreen = ( { history, location } ) => {

    // set component level state
    const [ name, setName ] = useState( '' );
    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );
    const [ confirmPassword, setConfirmPassword ] = useState( '' );
    const [ message, setMessage ] = useState( null );

    // remember location.search returns " A String, representing the querystring part of a URL,
    // including the question mark (?) "

    // let's use the split(); method to split the query string into an array of 2 parts
    // and then we will select the second part
    const redirect = location.search ? location.search.split( '=' )[ 1 ] : "/";

    // define dispatch
    const dispatch = useDispatch();

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const userRegister = useSelector( ( state ) => state.userRegister );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { loading, userInfo, error } = userRegister;

    // if the user is already logged in and they try to go to the register screen then we want
    // to redirect the user
    useEffect( () => {

        // if the user is logged in then userInfo will be true otherwise userInfo will be null
        if ( userInfo ) {

            // use history.push(); to redirect the user
            // and history.push(); " pushes a new entry into the history stack - aka redirecting
            // the user to another route "

            // if the user is already registered and they are signed in to the application then
            // we don't want the user to go back to the registration page so to prevent this
            // from happening we will redirect the user to the home page; for example, assume the
            // user is in on the sign in page and they click on the registration link then
            // what will happen is we will redirect the user to the home page
            history.push( redirect );

        }

     }, [ history, userInfo, redirect ] );
 
    // submit handler
    const handleSubmit = ( e ) => {

        e.preventDefault();

        // everytime we submit the form we need to clear out any prior error messages
        setMessage( null );

        // before we dispatch the userRegisterActionCreator let's do some front end validation
        if ( name === '' ||  email === '' || password === '' || confirmPassword === '' ) {

            // if the user did not enter the required information in the name, email, password
            // and / or confirm password fields then set a new error message
            setMessage( 'All fields must be filled out in order to register. Please try again.' );

        } else if ( password !== confirmPassword ) {

            // if the password does not match the confirm password then set the error message
            setMessage( 'Passwords do not match. Please try again.' );

        } else {

            // dispatch our action creator
            dispatch( userRegisterActionCreator( name, email, password ) );

        }

    }

    return (

        // let's start creating the form
        <div className="register-screen">

            <h2 className="register-screen--title">Sign Up</h2>

            { /* check message and check error */ }
            { /* combine check message and check error so we only show one error at a time */ }
            { message ? <ErrorMessage>{ message }</ErrorMessage> : error && <ErrorMessage>{ error }</ErrorMessage> }

            { /* check loading */ }
            { loading && <Spinner /> }

            <form className="register-screen--form" noValidate="novalidate" onSubmit={ handleSubmit } >

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


                { /*  register button  */ }
                <div className="register-screen--form--button-container">

                    <button
                        type="submit"
                        className="register-screen--form--button-container--button"
                    >
                        Register
                    </button>

                </div>

            </form>

            { /*  sign in link  */ }
            <span className="register-screen--sign-in">
                Already have an account?&nbsp;&nbsp;
                <Link
                    className="register-screen--sign-in--link"
                    to={ redirect ? `/login?redirect=${ redirect }` : "/login" }
                >
                   Sign in here
                </Link>
            </span>

        </div>

    );

}


export default RegisterScreen;


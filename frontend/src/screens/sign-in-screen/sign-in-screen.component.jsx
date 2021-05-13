
/*
// 1 -

// since we are building a form we will need to use the useState(); hook and let's also
// import in the useEffect(); hook
import React, { useState, useEffect } from 'react';
// import in the Link component
import { Link } from 'react-router-dom';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in our action creator
import { userSignInActionCreator } from '../../redux/actions/user.actions';
// inport in the FormInput component
import FormInput from '../../components/form-input/form-input.component';
// import in the SkeletonHomeScreen component
import Spinner from '../../components/spinner/spinner.component';
// import in the ErrorMessage component
import ErrorMessage from '../../components/error/error-message.component';

import './sign-in-screen.styles.scss';


const SignInScreen = ( { history, location } ) => {

    // let's set some component level state
    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );

    // if the user needs to register then let's send them to a new page and we may
    // have a redirect value so let's test for this using a ternary operator below and
    // then let's define " redirect " below
    
    // and remember location.search means the following ( from w3 schools ):
    
    /*
        " The search property sets or returns the querystring part of a URL, including
        the question mark (?).

        The querystring part is the part of the URL after the question mark (?). This is
        often used for parameter passing.

        Return Value: A String, representing the querystring part of a URL, including
        the question mark (?)

        Example
        Return the querystring part of a URL. Assume that the current URL is
        https://www.w3schools.com/submit.htm?email=someone@example.com:

        var x = location.search;
        
        The result of x will be:

        ?email=someone@example.com "
    */

    // let's use the split(); method to split the query string into an array of 2 parts
    // and then we will select the second part and if location.search does not exist or there
    // is not query string in the URL then return "/" or set redirect equal to the home page

    // remember we have to bring " location " in as an argument to the SignInScreen function
    // above otherwise the browser will throw an error
    /*
    const redirect = location.search ? location.search.split( '=' )[ 1 ] : "/";

    // define dispatch
    const dispatch = useDispatch();

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const userSignIn = useSelector( ( state ) => state.userSignIn );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { loading, userInfo, error } = userSignIn;

    // if the user is already logged in and they try to come back to the sign in screen then we
    // want to redirect the user and we will use the useEffect(); hook to help us do that
    useEffect( () => {

        // if the user is logged in then userInfo will be true otherwise userInfo will be null
        if ( userInfo ) {

            // use history.push(); to redirect the user
            // and history.push(); " pushes a new entry into the history stack - aka redirecting
            // the user to another route "
            history.push( redirect );

        }

        // from the react docs regarding dependencies " If you use this optimization, make sure
        // the array includes all values from the component scope (such as props and state)
        // that change over time and that are used by the effect. Otherwise, your code will
        // reference stale values from previous renders. "
    }, [ history, userInfo, redirect ] );
 
    // submit handler
    const handleSubmit = ( e ) => {

        e.preventDefault();

        // dispatch our action creator
        dispatch( userSignInActionCreator( email, password ) );

    }

    // now let's test this out and if I enter the following in the email and password
    // fields:

    // Email: gg
    // Password: f

    // then the result in the sign up page is:

    // " Invalid email and / or password. "

    // and this is correct so everything is working as expected

    // and the result in the redux dev tools is ( on the left hand side of the page ):

    /*
        @@INIT
        USER_SIGNIN_REQUEST
        USER-SIGNIN_FAIl
    */

    // and this is correct so everything is working as expected

    // and the result under state in the redux dev tools is:

    /*
        productList (pin): { products: [] }
        productGet (pin): { product: { ... } }
        cart (pin): { cartItems: [ ... ] }
        userSignIn (pin):
            loading (pin): false
            error (pin): "Invalid email and / or password."
    */

    // and this is correct so everything is working as expected

    // and remember this error is coming from the authUser controller in the user.controller.js
    // file or:
    
    /*
        res.status( 401 );

        throw new Error( 'Invalid email and / or password.' );
    */
   
    // and we can see that this error is coming from the backend in the Chrome dev tools
    // under the network tab and if we click on the login name
    // ( which is one of the names listed on the left hand side of the page ) and
    // then under the Headers tab to the right of the login name we see the following:
    
    /*
        General ( Heading )
            Request URL: http://localhost:3008/api/users/login
            Request Method: POST
            Status Code: 401 Unauthorized
            Remote Address: 127.0.0.1:3008
            Referrer Policy: strict-origin-when-cross-origin
    */

    // and this is correct so everything is working as expected

    // and then under the Response tab to the right of the login name we see the following:

    /*
        {
            "message":"Invalid email and / or password.",
            "stack":"Error: Invalid email and / or password.\n ...
        }
    */

    // and this is correct so everything is working as expected

    // now let's test this out again and if I enter a valid email and password like the
    // following:

    // Email: john@example.com
    // Password: 123456

    // and now we are logged in and we can see this by checking localstorage under the
    // application tab:
    
    /*
        Key ( Heading )
            userInfo
        Value ( Heading )
            email: "john@example.com"
            isAdmin: false
            name: "John Doe"
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZjUwNDU0NWE2YTY2NDU3Z
            jBiMDcwNSIsImlhdCI6MTYxMzM1NzMwMSwiZXhwIjoxNjE1OTQ5MzAxfQ.j-R9BWtwag-rVh2-wzKf
            3Jh6ksgQ9RplWCs_i0DBy_o"
            _id: "5ff504545a6a66457f0b0705"
    */

    // and this is correct so everything is working as expected

    // remember if we successfully logged in then the authUser controller function in the
    // user.controller.js file would send a response object to the browser as part of the
    // server response and that response object would look like the following:

    /*
        if ( user && ( await user.matchPassword( password ) ) ) {

            // ==============================
            // Emails match
            // ==============================

            // and

            // ==============================
            // Passwords match
            // ==============================

            res.json(

                {
                    _id     : user._id,
                    name    : user.name,
                    email   : user.email,
                    isAdmin : user.isAdmin,
                    token   : generateToken( user._id )
                }

            );
        
        }
    */

    // and we can see that what is stored in local storage under the name userInfo matches up
    // exactly with our response object in the authUser controller function in the 
    // user.controller.js file so everything is working as expected which is great

    // and now if I go to the state tab in the redux dev tools I see the following:

    /*
        productList (pin): { products: [ ... ], loading: false }
        productGet (pin): { product: { ... } }
        cart (pin): { cartItems: [ ... ] }
        userSignIn (pin):
            loading (pin): false
            userInfo (pin): 
                _id (pin): "5ff504545a6a66457f0b0705"
                name (pin): "John Doe"
                email (pin): "john@example.com"
                isAdmin (pin): false
                token (pin): "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZjUwNDU0NWE2YT
                Y2NDU3ZjBiMDcwNSIsImlhdCI6MTYxMzM1NzMwMSwiZXhwIjoxNjE1OTQ5MzAxfQ.j-R9BWtwag-
                rVh2-wzKf3Jh6ksgQ9RplWCs_i0DBy_o"            
    */

    // and this is correct so everything is working as expected

    // and if I refresh the browser I still see our userInfo under the state tab in the redux
    // dev tools and that is because our local storage is loading the state as soon as the page
    // loads
    
    // and in the next video, we will change the Sign In tab in the navigation to the user's
    // name and eventually we will create a drop down menu under the user's name so they can
    // (1) edit their profile and (2) logout of the application and if they logout we will
    // clear out the state and clear out local storage

    /*
    return (

        // let's start creating the form
        <div className="sign-in">
            <h2 className="sign-in--title">Sign In</h2>

            { /* check error */ /* }
            { error && <ErrorMessage>{ error }</ErrorMessage> }

            { /* check loading */ /* }
            { loading && <Spinner /> }

            <form className="sign-in--form" noValidate="novalidate" onSubmit={ handleSubmit } >

                <FormInput
                    name="email"
                    type="email"
                    label="Email"
                    required
                    value={ email }
                    onChange={ (e) => setEmail( e.target.value ) }
                />
                <FormInput
                    name="password"
                    type="password"
                    label="Password"
                    required
                    value={ password }
                    onChange={ (e) => setPassword( e.target.value ) }
                />

                { /*  sign in button  */ /* }
                <div className="sign-in--form--button-container">
                    <button
                        type="submit"
                        className="sign-in--form--button-container--button"
                    >
                        Sign in
                    </button>
                </div>
            </form>

            { /*  register link  */ /* }
            <span className="sign-in--register">
                New customer?&nbsp;&nbsp;
                <Link
                    className="sign-in--register--link"
                    to={ redirect ? `/register?redirect=${ redirect }` : "/register" }
                >
                   Register here
                </Link>
            </span>

        </div>

    );

}


export default SignInScreen;

// let's create a route for the SignInScreen component and let's go to the app.js 5 - file now


// End of 1 -
*/


























// ===============================
























// at the beginning of lecture 45, given all the notes, I created a new file below without
// the notes so we are starting fresh

// since we are building a form we will need to use the useState(); hook and let's also
// import in the useEffect(); hook
import React, { useState, useEffect } from 'react';
// import in the Link component
import { Link } from 'react-router-dom';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in our action creator
import { userSignInActionCreator } from '../../redux/actions/user.actions';
// inport in the FormInput component
import FormInput from '../../components/form-input/form-input.component';
// import in the SkeletonHomeScreen component
import Spinner from '../../components/spinner/spinner.component';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';

import './sign-in-screen.styles.scss';


const SignInScreen = ( { history, location } ) => {

    // set component level state
    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );

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
    const userSignIn = useSelector( ( state ) => state.userSignIn );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { loading, userInfo, error } = userSignIn;

    // if the user is already logged in and they try to come back to the sign in screen then we
    // want to redirect the user
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

        // dispatch our action creator
        dispatch( userSignInActionCreator( email, password ) );

    }

    return (

        // let's start creating the form
        <div className="sign-in-screen">

            <h2 className="sign-in-screen--title">Sign In</h2>

            { /* check error */ }
            { error && <ErrorMessage>{ error }</ErrorMessage> }

            { /* check loading */ }
            { loading && <Spinner /> }

            <form className="sign-in-screen--form" noValidate="novalidate" onSubmit={ handleSubmit } >

                <FormInput
                    name="email"
                    type="email"
                    label="Email"
                    required
                    value={ email }
                    onChange={ (e) => setEmail( e.target.value ) }
                />
                <FormInput
                    name="password"
                    type="password"
                    label="Password"
                    required
                    value={ password }
                    onChange={ (e) => setPassword( e.target.value ) }
                />

                { /*  sign in button  */ }
                <div className="sign-in-screen--form--button-container">
    
                    <button
                        type="submit"
                        className="sign-in-screen--form--button-container--button"
                    >
                        Sign in
                    </button>
        
                </div>
    
            </form>

            { /*  register link  */ }
            <span className="sign-in-screen--register">
                New customer?&nbsp;&nbsp;
                <Link
                    className="sign-in-screen--register--link"
                    to={ redirect ? `/register?redirect=${ redirect }` : "/register" }
                >
                   Register here
                </Link>
            </span>

        </div>

    );

}


export default SignInScreen;

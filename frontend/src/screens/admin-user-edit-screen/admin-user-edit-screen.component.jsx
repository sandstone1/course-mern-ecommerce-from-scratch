
/*
// 1 -

// let's start by coping the register screen and paste it below

// since we are building a form we will need to use the useState(); hook and let's import
// in the useEffect(); hook
import React, { useState, useEffect } from 'react';
// import in the Link component
import { Link } from 'react-router-dom';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in our action creator
import {
    userGetAdminActionCreator
} from '../../redux/actions/user.actions';
// inport in the FormInput component
import FormInput from '../../components/form-input/form-input.component';
// inport in the Checkbox component
import Checkbox from '../../components/checkbox/checkbox.component';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner.component';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';

import './admin-user-edit-screen.styles.scss';


const AdminUserEditScreen = ( { history, match } ) => {

    // ==============================
    // Component State
    // ==============================

    // set the component level state
    const [ name, setName ]       = useState( '' );
    const [ email, setEmail ]     = useState( '' );
    const [ isAdmin, setIsAdmin ] = useState( false );
    const [ message, setMessage ] = useState( null );

    // ==============================
    // Match.Params.Id
    // ==============================

    const userId = match.params.id;

    // ==============================
    // USEDISPATCH();
    // ==============================

    // define dispatch
    const dispatch = useDispatch();

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
    // userGetProfile State
    // ==============================
/*
    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const userGetProfile = useSelector( ( state ) => state.userGetProfile );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { loading, user, error } = userGetProfile;
*/

    // ==============================
    // userGetAdmin State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    /*
    const userGetAdmin = useSelector( ( state ) => state.userGetAdmin );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { loading, user, error } = userGetAdmin;

    // ==============================
    // USEEFFECT();
    // ==============================

    // if the user is already logged in and they try to go to the register screen then we want
    // to redirect the user
    useEffect( () => {

        // if the user is not logged in or the user is not an admin then let's redirect the
        // user to the login screen
        if ( !userInfo || !userInfo.isAdmin ) {

            history.push( '/login' );

        // if user does not exist or user.name does not exist or the user._id does not match
        // the id in the URL then we want to dispatch the userGetAdminActionCreator

        // remember to add ...state to the USER_GET_REQUEST, otherwise the else if statement
        // below will not work
        } else if ( !user.name || user._id !== userId ) {

            // dispatch the userGetAdminActionCreator
            dispatch( userGetAdminActionCreator( userId ) );

        } else {

            // remember to add ...state to the USER_GET_REQUEST, otherwise the setName(),
            // setEmail() and setIsAdmin() below will not work
            setName( user.name );
            setEmail( user.email );
            setIsAdmin( user.isAdmin );

        } // end of if else if else statement

    }, [ dispatch, history, user, userId, userInfo ] ); // end of useEffect

    // ==============================
    // handleSubmit function
    // ==============================
 
    const handleSubmit = ( e ) => {

        e.preventDefault();

        /*
        // everytime we submit the form we need to clear out any prior error messages
        setMessage( null );

        // before we dispatch the userGetAdminActionCreator let's do some front end validation
        if ( name === '' ||  email === '' || isAdmin === '' ) {

            // if the admin user did not enter the required information in the name, email and / or
            // isAdmin fields then set a new error message
            setMessage( 'All fields must be filled out in order to update a user. Please try again.' );

        } else {

            // dispatch our action creator
            dispatch( userGetAdminActionCreator( id ) );

        }
        */

    /* }


    return (

        // let's start creating the form
        <div className="admin-user-edit-screen">

            { /* backlink to the admin user list screen */ /* }
            <Link to="/admin/userlist" className="admin-user-edit-screen--backlink">
                &#60; Go back to the previous page
            </Link>

            <h2 className="admin-user-edit-screen--title">Edit User</h2>

            { 
                loading ? (

                    <Spinner />
        
                ) : error ? (
        
                    <ErrorMessage>{ error }</ErrorMessage>
        
                ) : message ? (
        
                    <ErrorMessage>{ message }</ErrorMessage>
        
                ) : (

                    <form className="admin-user-edit-screen--form" noValidate="novalidate" onSubmit={ handleSubmit } >

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
                        <Checkbox
                            name="isAdmin"
                            type="checkbox"
                            label="Is the user an admin"
                            checked={ isAdmin }
                            onChange={ (e) => setIsAdmin( e.target.checked ) }
                        />

                        { /*  admin-user-edit-screen button  */ /* }
                        <div className="admin-user-edit-screen--form--button-container">
                            <button
                                type="submit"
                                className="admin-user-edit-screen--form--button-container--button"
                            >
                                Update
                            </button>
                        </div>

                    </form>

                ) 
        
            }

        </div>

    );

}


export default AdminUserEditScreen;


// End of 1 -
*/























// ===============================





















/*
// at the beginning of lecture 72, given all the notes, I created a new file below without
// the notes so we are starting fresh

// since we are building a form we will need to use the useState(); hook and let's import
// in the useEffect(); hook as well
import React, { useState, useEffect } from 'react';
// import in the Link component
import { Link } from 'react-router-dom';
// import in the useDispatch(); and useSelector(); hooks
import { useDispatch, useSelector } from 'react-redux';
// import in our action creator
import {
    userGetAdminActionCreator,
    userUpdateAdminActionCreator
} from '../../redux/actions/user.actions';
// inport in the FormInput component
import FormInput from '../../components/form-input/form-input.component';
// inport in the Checkbox component
import Checkbox from '../../components/checkbox/checkbox.component';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner.component';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';

import './admin-user-edit-screen.styles.scss';


// 2 -
// coming from the store.js 21 - file

// import in the userUpdateActionCreator above

// import in the USER_GET_ADMIN_RESET, USER_UPDATE_ADMIN_RESET constants
import {
    USER_GET_ADMIN_RESET,
    USER_UPDATE_ADMIN_RESET 
} from '../../redux/constants/user.constants';
// import in the SuccessMessage component
import SuccessMessage from '../../components/message/success-message.component';

// End of 2 -



const AdminUserEditScreen = ( { history, match } ) => {

    // ==============================
    // Component State
    // ==============================

    // set the component level state
    const [ name, setName ]       = useState( '' );
    const [ email, setEmail ]     = useState( '' );
    const [ isAdmin, setIsAdmin ] = useState( false );

    // ==============================
    // Match.Params.Id
    // ==============================

    const userId = match.params.id;

    // ==============================
    // USEDISPATCH();
    // ==============================

    // define dispatch
    const dispatch = useDispatch();

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
    // userGetAdmin State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const userGetAdmin = useSelector( ( state ) => state.userGetAdmin );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { loading, user, error } = userGetAdmin;


    // 2 - continued

    // ==============================
    // userUpdateAdmin State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const userUpdateAdmin = useSelector( ( state ) => state.userUpdateAdmin );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { 
        loading : loadingUpdateAdmin,
        error   : errorUpdateAdmin,
        success : successUpdateAdmin
    } = userUpdateAdmin;

    // End of 2 -


    // ==============================
    // USEEFFECT();
    // ==============================

    useEffect( () => {

        // ==============================
        // First if statement
        // ==============================

        // if the user is not logged in or the user is not an admin then let's redirect the
        // user to the login screen
        if ( !userInfo || !userInfo.isAdmin ) {

            history.push( '/login' );

        // if user.name does not exist or the user._id does not match the id in the URL then
        // we want to dispatch the userGetAdminActionCreator

        // remember to add ...state to the USER_GET_ADMIN_REQUEST, otherwise the else if statement
        // below will not work
        } else if ( !user.name || user._id !== userId ) {

            // dispatch the userGetAdminActionCreator
            dispatch( userGetAdminActionCreator( userId ) );

        } else {

            // remember to add ...state to the USER_GET_ADMIN_REQUEST, otherwise the setName(),
            // setEmail() and setIsAdmin() below will not work
            setName( user.name );
            setEmail( user.email );
            setIsAdmin( user.isAdmin );

        } // end of if else if else statement

        // ==============================
        // Second if statement
        // ==============================

        // clear out the successUpdateAdmin message after 1 seconds
        if ( successUpdateAdmin ) {
            
            setTimeout( () => {

                dispatch( { type : USER_GET_ADMIN_RESET } );

                dispatch( { type : USER_UPDATE_ADMIN_RESET } );

                /*
                // dispatch the userGetAdminActionCreator again so we can make sure that we are
                // showing the latest user information on the admin user edit screen
                dispatch( userGetAdminActionCreator( userId ) );
                */

                // after 1.0 seconds, push the admin user back to the admin user list screen
                /*
                history.push( '/admin/userlist' );

            }, 1000 );

        } // end of if ( successUpdateAdmin ) {}

    }, [ dispatch, history, successUpdateAdmin, user, userId, userInfo ] ); // end of useEffect

    // ==============================
    // handleSubmit function
    // ==============================

    const handleSubmit = ( e ) => {

        e.preventDefault();


        // 2 -

        // dispatch our user update admin action creator and remember to pass in the
        // user update object and we are pulling the name, email and isAdmin values from the
        // component state

        // and remember we are using req.body.name, req.body.email, req.body.isAdmin
        // in our userUpdateAdmin controller in the user.controllers.js file so we
        // need to pass along the name, email and isAdmin key value pairs in order to
        // update the user's information in the userUpdateAdmin controller and thereby
        // update the user's information in the database
        dispatch( userUpdateAdminActionCreator(

            {
                _id     : userId,
                name    : name,
                email   : email,
                isAdmin : isAdmin
            }

        ) );

        // so now the admin can manage the information for different users and next we want
        // to do the same thing for products so as an admin we want to be able to see a list
        // of products and have the ability to add, edit and delete products

        // End of 2 -

    }


    return (

        // let's start creating the form
        <div className="admin-user-edit-screen">

            { /* backlink to the admin user list screen */ /* }
            <Link to="/admin/userlist" className="admin-user-edit-screen--backlink">
                &#60; Go back to the previous page
            </Link>

            <h2 className="admin-user-edit-screen--title">Edit User</h2>

            { 
                loading ? (

                    <Spinner />

                ) : loadingUpdateAdmin ? (

                    <Spinner />

                ) : error ? (

                    <ErrorMessage>{ error }</ErrorMessage>

                ) : errorUpdateAdmin ? (

                    <ErrorMessage>{ errorUpdateAdmin }</ErrorMessage>

                ) : successUpdateAdmin ? (

                    <SuccessMessage>User updated!</SuccessMessage>

                ) : (

                    <form className="admin-user-edit-screen--form" noValidate="novalidate" onSubmit={ handleSubmit } >

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
                        <Checkbox
                            name="isAdmin"
                            type="checkbox"
                            label="Is the user an admin"
                            checked={ isAdmin }
                            onChange={ (e) => setIsAdmin( e.target.checked ) }
                        />

                        { /*  admin-user-edit-screen button  */ /* }
                        <div className="admin-user-edit-screen--form--button-container">
                            <button
                                type="submit"
                                className="admin-user-edit-screen--form--button-container--button"
                            >
                                Update
                            </button>
                        </div>

                    </form>

                ) 
        
            }

        </div>

    );

}


export default AdminUserEditScreen;
*/























// ===============================






















// at the beginning of lecture 73, given all the notes, I created a new file below without
// the notes so we are starting fresh

// since we are building a form we will need to use the useState(); hook and let's import
// in the useEffect(); hook as well
import React, { useState, useEffect } from 'react';
// import in the Link component
import { Link } from 'react-router-dom';
// import in the useDispatch(); and useSelector(); hooks
import { useDispatch, useSelector } from 'react-redux';
// import in our action creators
import {
    userGetAdminActionCreator,
    userUpdateAdminActionCreator
} from '../../redux/actions/user.actions';
// import in the USER_GET_ADMIN_RESET, USER_UPDATE_ADMIN_RESET constants
import {
    USER_GET_ADMIN_RESET,
    USER_UPDATE_ADMIN_RESET 
} from '../../redux/constants/user.constants';
// inport in the FormInput component
import FormInput from '../../components/form-input/form-input.component';
// inport in the Checkbox component
import Checkbox from '../../components/checkbox/checkbox.component';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner.component';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';
// import in the SuccessMessage component
import SuccessMessage from '../../components/message/success-message.component';

import './admin-user-edit-screen.styles.scss';


const AdminUserEditScreen = ( { history, match } ) => {

    // ==============================
    // Component State
    // ==============================

    // set the component level state
    const [ name, setName ]       = useState( '' );
    const [ email, setEmail ]     = useState( '' );
    const [ isAdmin, setIsAdmin ] = useState( false );

    // ==============================
    // Match.Params.Id
    // ==============================

    const userId = match.params.id;

    // ==============================
    // USEDISPATCH();
    // ==============================

    // define dispatch
    const dispatch = useDispatch();

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
    // userGetAdmin State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const userGetAdmin = useSelector( ( state ) => state.userGetAdmin );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { loading, user, error } = userGetAdmin;

    // ==============================
    // userUpdateAdmin State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const userUpdateAdmin = useSelector( ( state ) => state.userUpdateAdmin );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { 
        loading : loadingUpdateAdmin,
        error   : errorUpdateAdmin,
        success : successUpdateAdmin
    } = userUpdateAdmin;

    // ==============================
    // USEEFFECT();
    // ==============================

    useEffect( () => {

        // ==============================
        // First if statement
        // ==============================

        // if the user is not logged in or the user is not an admin then let's redirect the
        // user to the login screen
        if ( !userInfo || !userInfo.isAdmin ) {

            history.push( '/login' );

        // if user.name does not exist or the user._id does not match the id in the URL then
        // we want to dispatch the userGetAdminActionCreator

        // remember to add ...state to the USER_GET_ADMIN_REQUEST, otherwise the else if statement
        // below will not work
        } else if ( !user.name || user._id !== userId ) {

            // dispatch the userGetAdminActionCreator
            dispatch( userGetAdminActionCreator( userId ) );

        } else {

            // remember to add ...state to the USER_GET_ADMIN_REQUEST, otherwise the setName(),
            // setEmail() and setIsAdmin() below will not work
            setName( user.name );
            setEmail( user.email );
            setIsAdmin( user.isAdmin );

        } // end of if else if else statement

        // ==============================
        // Second if statement
        // ==============================

        // clear out the successUpdateAdmin message after 1 seconds
        if ( successUpdateAdmin ) {
            
            setTimeout( () => {

                dispatch( { type : USER_GET_ADMIN_RESET } );

                dispatch( { type : USER_UPDATE_ADMIN_RESET } );

                /*
                // dispatch the userGetAdminActionCreator again so we can make sure that we are
                // showing the latest user information on the admin user edit screen
                dispatch( userGetAdminActionCreator( userId ) );
                */

                // after 1.0 seconds, push the admin user back to the admin user list screen
                history.push( '/admin/userlist' );

            }, 1000 );

        } // end of if ( successUpdateAdmin ) {}

    }, [ dispatch, history, successUpdateAdmin, user, userId, userInfo ] ); // end of useEffect

    // ==============================
    // handleSubmit function
    // ==============================

    const handleSubmit = ( e ) => {

        e.preventDefault();

        // dispatch our user update admin action creator and remember to pass in the
        // user update object and we are pulling the name, email and isAdmin values from the
        // component state

        // and remember we are using req.body.name, req.body.email, req.body.isAdmin
        // in our userUpdateAdmin controller in the user.controllers.js file so we
        // need to pass along the name, email and isAdmin key value pairs in order to
        // update the user's information in the userUpdateAdmin controller and thereby
        // update the user's information in the database
        dispatch( userUpdateAdminActionCreator(

            {
                _id     : userId,
                name    : name,
                email   : email,
                isAdmin : isAdmin
            }

        ) );

    }


    return (

        // let's start creating the form
        <div className="admin-user-edit-screen">

            { /* backlink to the admin user list screen */ }
            <Link to="/admin/userlist" className="admin-user-edit-screen--backlink">
                &#60; Go back to the previous page
            </Link>

            <h2 className="admin-user-edit-screen--title">Edit User</h2>

            { 
                loading ? (

                    <Spinner />

                ) : loadingUpdateAdmin ? (

                    <Spinner />

                ) : error ? (

                    <ErrorMessage>{ error }</ErrorMessage>

                ) : errorUpdateAdmin ? (

                    <ErrorMessage>{ errorUpdateAdmin }</ErrorMessage>

                ) : successUpdateAdmin ? (

                    <SuccessMessage>User updated!</SuccessMessage>

                ) : (

                    <form className="admin-user-edit-screen--form" noValidate="novalidate" onSubmit={ handleSubmit } >

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
                        <Checkbox
                            name="isAdmin"
                            type="checkbox"
                            label="Is the user an admin"
                            checked={ isAdmin }
                            onChange={ (e) => setIsAdmin( e.target.checked ) }
                        />

                        { /*  admin-user-edit-screen button  */ }
                        <div className="admin-user-edit-screen--form--button-container">
                            <button
                                type="submit"
                                className="admin-user-edit-screen--form--button-container--button"
                            >
                                Update
                            </button>
                        </div>

                    </form>

                ) 
        
            }

        </div>

    );

}


export default AdminUserEditScreen;



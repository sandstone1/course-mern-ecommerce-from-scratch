
/*
// 1 -
// coming from the store.js 18 - file

import React, { useEffect, useState } from 'react';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in our action creator
import { userAdminListActionCreator } from '../../redux/actions/user.actions';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';
// import in the SuccessMessage component
import SuccessMessage from '../../components/message/success-message.component';
// import in the AdminUserListItem component
import AdminUserListItem from '../../components/admin-user-list-item/admin-user-list-item.component';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner.component';

import './admin-user-list-screen.styles.scss';


const AdminUserListScreen = () => {


    // ==============================
    // Component State
    // ==============================


    // ==============================
    // DISPATCH & USESELECTOR(); & USEEFFECT();
    // ==============================

    // define dispatch
    const dispatch = useDispatch();

    // ==============================
    // userList State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const userList = useSelector( ( state ) => state.userList );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output
    const { loading, users, error } = userList;

    useEffect( () => {

        dispatch( adminUserListActionCreator() );

    }, [ dispatch ] );


    // before moving on to the main block of code, check loading and error
    return (

        loading ? (

            <Spinner />

        ) : error ? (

            <ErrorMessage>{ error }</ErrorMessage>

        ) : (

            // create the screen and provide a top level div for react
            <div className="admin-user-list">

                <div className="admin-user-list--screen">

                    <h1 className="admin-user-list--screen--title">Users</h1>
    
                    {
                        users.length === 0 ? (
                                    
                            <div className="admin-user-list--screen--message">
                                There are no users
                            </div>

                        ) : (
        
                            <div className="admin-user-list--screen--main">
                
                                    { /* row 1 - header */ /* }
                                    <div className="admin-user-list--screen--main--header">
        
                                        <div className="admin-user-list--screen--main--header--id">
                                            <span>ID</span>
                                        </div>
        
                                        <div className="admin-user-list--screen--main--header--name">
                                            <span>Name</span>
                                        </div>
        
                                        <div className="admin-user-list--screen--main--header--email">
                                            <span>Email</span>
                                        </div>
        
                                        <div className="admin-user-list--screen--main--header-is-admin">
                                            <span>Admin</span>
                                        </div>

                                        <div className="admin-user-list--screen--main--header--edit">
                                            <span>Edit</span>
                                        </div>
        
                                        <div className="admin-user-list--screen--main--header--delete">
                                            <span>Delete</span>
                                        </div>
        
                                    </div>
        
                                    { /* row 2 + - list of users */ /* }
                                    <div className="admin-user-list--screen--main--admin-user-list-item">
        
                                        {             
                                            users.map( ( user ) => (
        
                                                <AdminUserListItem
                                                    key={ user._id }
                                                    user={ user }
                                                />
        
                                            ) )
                                        }
        
                                    </div>
        
                                </div>
    
                        )    
                    }
    
                </div>

            </div> // end of user-list

        )

    );

}


export default AdminUserListScreen;

// End of 1 -
*/


























// ===============================

























/*
// at the beginning of lecture 68, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React, { useEffect } from 'react';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in our action creator
import { adminUserListActionCreator } from '../../redux/actions/user.actions';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';
// import in the AdminUserListItem component
import AdminUserListItem from '../../components/admin-user-list-item/admin-user-list-item.component';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner.component';

import './admin-user-list-screen.styles.scss';


const AdminUserListScreen = ( { history } ) => {

    // ==============================
    // Component State
    // ==============================

    // ==============================
    // DISPATCH & USESELECTOR();
    // ==============================

    // define dispatch
    const dispatch = useDispatch();

    // ==============================
    // userList State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const userList = useSelector( ( state ) => state.userList );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output
    const { loading, users, error } = userList;


    // 2 -

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
    // USEEFFECT();
    // ==============================

    useEffect( () => {

        // let's make sure the user is both logged in and is an admin before we dispatch the
        // adminUserListActionCreator
        if ( userInfo && userInfo.isAdmin ) {

            // dispatch the adminUserListActionCreator
            dispatch( adminUserListActionCreator() );

        } else {

            // and if the user is not logged in and / or the user is not an admin then
            // let's redirect the user to the login screen
            history.push( '/login' );

        } // end of if else statement

    }, [ dispatch, history, userInfo ] ); // end of useEffect

    // End of 2 -


    // before moving on to the main block of code, check loading and error
    return (

        loading ? (

            <Spinner />

        ) : error ? (

            <ErrorMessage>{ error }</ErrorMessage>

        ) : (

            // create the screen and provide a top level div for react
            <div className="admin-user-list">

                <div className="admin-user-list--screen">

                    <h1 className="admin-user-list--screen--title">Users</h1>
    
                    {
                        users.length === 0 ? (
                                    
                            <div className="admin-user-list--screen--message">
                                There are no users
                            </div>

                        ) : (
        
                            <div className="admin-user-list--screen--main">
                
                                { /* row 1 - header */ /* }
                                <div className="admin-user-list--screen--main--header">
    
                                    <div className="admin-user-list--screen--main--header--id">
                                        <span>ID</span>
                                    </div>
    
                                    <div className="admin-user-list--screen--main--header--name">
                                        <span>Name</span>
                                    </div>
    
                                    <div className="admin-user-list--screen--main--header--email">
                                        <span>Email</span>
                                    </div>
    
                                    <div className="admin-user-list--screen--main--header-is-admin">
                                        <span>Admin</span>
                                    </div>

                                    <div className="admin-user-list--screen--main--header--edit">
                                        <span>Edit</span>
                                    </div>
    
                                    <div className="admin-user-list--screen--main--header--delete">
                                        <span>Delete</span>
                                    </div>
    
                                </div>
    
                                { /* row 2 + - list of users */ /* }
                                <div className="admin-user-list--screen--main--admin-user-list-item">
    
                                    {             
                                        users.map( ( user ) => (
    
                                            <AdminUserListItem
                                                key={ user._id }
                                                user={ user }
                                            />
    
                                        ) )
                                    }
    
                                </div>
        
                            </div>
    
                        )    
                    }
    
                </div>

            </div> // end of admin-user-list

        )

    );

} // end of AdminUserListScreen


export default AdminUserListScreen;
*/


























// ===============================

























/*
// at the beginning of lecture 69, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React, { useEffect } from 'react';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in our action creator
import { adminUserListActionCreator } from '../../redux/actions/user.actions';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';
// import in the AdminUserListItem component
import AdminUserListItem from '../../components/admin-user-list-item/admin-user-list-item.component';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner.component';

import './admin-user-list-screen.styles.scss';


const AdminUserListScreen = ( { history } ) => {

    // ==============================
    // Component State
    // ==============================

    // ==============================
    // DISPATCH & USESELECTOR();
    // ==============================

    // define dispatch
    const dispatch = useDispatch();

    // ==============================
    // userList State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const userList = useSelector( ( state ) => state.userList );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output
    const { loading, users, error } = userList;

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


    // 3 -
    // coming from the admin-user-list-item.component.jsx 1 -

    // ==============================
    // userDelete State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const userDelete = useSelector( ( state ) => state.userDelete );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { success : successDelete, error : errorUserDelete } = userDelete;

    // End of 3 -


    // ==============================
    // USEEFFECT();
    // ==============================

    useEffect( () => {

        // let's make sure the user is both logged in and is an admin before we dispatch the
        // adminUserListActionCreator
        if ( userInfo && userInfo.isAdmin ) {

            // dispatch the adminUserListActionCreator
            dispatch( adminUserListActionCreator() );

        } else {

            // and if the user is not logged in and / or the user is not an admin then
            // let's redirect the user to the login screen
            history.push( '/login' );

        } // end of if else statement

    // 3 - continued
    // here we passing in successDelete as a depndency to the useEffect(); hook because
    // if successDelete changes then we want useEffect to run again and thereby call the
    // adminUserListActionCreator(), which will then update the user list

    }, [ dispatch, history, successDelete, userInfo ] ); // end of useEffect

    // now let's test this out by going to our application and signing in as an admin and
    // then go to the admin user list screen and delete a user and remember we start with 4 users
    // listed on the admin user list screen and after we press the delete icon for Steve Smith
    // we see that a new admin user list table is created and we see that Steve Smith is no
    // longer listed as a user and we also only see 3 users listed now and this is correct
    // so everything is working as expected

    // now that we can delete users, we will work on editing users next

    // End of 3 -


    // before moving on to the main block of code, check loading and error
    return (

        loading ? (

            <Spinner />

        ) : error ? (

            <ErrorMessage>{ error }</ErrorMessage>

        ) : errorUserDelete ? (

            <ErrorMessage>{ errorUserDelete }</ErrorMessage>

        ) : (

            // create the screen and provide a top level div for react
            <div className="admin-user-list">

                <div className="admin-user-list--screen">

                    <h1 className="admin-user-list--screen--title">Users</h1>
    
                    {
                        users.length === 0 ? (
                                    
                            <div className="admin-user-list--screen--message">
                                There are no users
                            </div>

                        ) : (
        
                            <div className="admin-user-list--screen--main">
                
                                { /* row 1 - header */ /* }
                                <div className="admin-user-list--screen--main--header">
    
                                    <div className="admin-user-list--screen--main--header--id">
                                        <span>ID</span>
                                    </div>
    
                                    <div className="admin-user-list--screen--main--header--name">
                                        <span>Name</span>
                                    </div>
    
                                    <div className="admin-user-list--screen--main--header--email">
                                        <span>Email</span>
                                    </div>
    
                                    <div className="admin-user-list--screen--main--header-is-admin">
                                        <span>Admin</span>
                                    </div>

                                    <div className="admin-user-list--screen--main--header--edit">
                                        <span>Edit</span>
                                    </div>
    
                                    <div className="admin-user-list--screen--main--header--delete">
                                        <span>Delete</span>
                                    </div>
    
                                </div>
    
                                { /* row 2 + - list of users */ /* }
                                <div className="admin-user-list--screen--main--admin-user-list-item">
    
                                    {             
                                        users.map( ( user ) => (
    
                                            <AdminUserListItem
                                                key={ user._id }
                                                user={ user }
                                            />
    
                                        ) )
                                    }
    
                                </div>
        
                            </div>
    
                        )    
                    }
    
                </div>

            </div> // end of admin-user-list

        )

    );

} // end of AdminUserListScreen


export default AdminUserListScreen;
*/
























// ===============================























// at the beginning of lecture 70, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React, { useEffect } from 'react';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in our action creator
import { userListAdminActionCreator } from '../../redux/actions/user.actions';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';
// import in the AdminUserListItem component
import AdminUserListItem from '../../components/admin-user-list-item/admin-user-list-item.component';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner.component';

import './admin-user-list-screen.styles.scss';


const AdminUserListScreen = ( { history } ) => {

    // ==============================
    // Component State
    // ==============================

    // ==============================
    // DISPATCH & USESELECTOR();
    // ==============================

    // define dispatch
    const dispatch = useDispatch();

    // ==============================
    // userListAdmin State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const userListAdmin = useSelector( ( state ) => state.userListAdmin );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output
    const { loading, users, error } = userListAdmin;

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
    // userDeleteAdmin State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const userDeleteAdmin = useSelector( ( state ) => state.userDeleteAdmin );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { success : successUserDeleteAdmin, error : errorUserDeleteAdmin } = userDeleteAdmin;

    // ==============================
    // USEEFFECT();
    // ==============================

    useEffect( () => {

        // let's make sure the user is both logged in and is an admin before we dispatch the
        // userListAdminActionCreator
        if ( userInfo && userInfo.isAdmin ) {

            // dispatch the userListAdminActionCreator
            dispatch( userListAdminActionCreator() );

        } else {

            // and if the user is not logged in and / or the user is not an admin then
            // let's redirect the user to the login screen
            history.push( '/login' );

        } // end of if else statement

    // here we passing in successUserDeleteAdmin as a depndency to the useEffect(); hook because
    // if successUserDeleteAdmin changes then we want useEffect to run again and thereby call the
    // userListAdminActionCreator(), which will then update the user list

    }, [ dispatch, history, successUserDeleteAdmin, userInfo ] ); // end of useEffect


    // before moving on to the main block of code, check loading and error
    return (

        loading ? (

            <Spinner />

        ) : error ? (

            <ErrorMessage>{ error }</ErrorMessage>

        ) : errorUserDeleteAdmin ? (

            <ErrorMessage>{ errorUserDeleteAdmin }</ErrorMessage>

        ) : (

            // create the screen and provide a top level div for react
            <div className="admin-user-list-screen">

                <h1 className="admin-user-list-screen--title">Users</h1>

                {

                    users.length === 0 ? (
                                
                        <div className="admin-user-list-screen--message">
                            There are no users
                        </div>

                    ) : (
    
                        <div className="admin-user-list-screen--main">
            
                            { /* row 1 - header */ }
                            <div className="admin-user-list-screen--main--header">

                                <div className="admin-user-list-screen--main--header--id">
                                    <span>ID</span>
                                </div>

                                <div className="admin-user-list-screen--main--header--name">
                                    <span>Name</span>
                                </div>

                                <div className="admin-user-list-screen--main--header--email">
                                    <span>Email</span>
                                </div>

                                <div className="admin-user-list-screen--main--header--is-admin">
                                    <span>Admin</span>
                                </div>

                                <div className="admin-user-list-screen--main--header--edit">
                                    <span>Edit</span>
                                </div>

                                <div className="admin-user-list-screen--main--header--delete">
                                    <span>Delete</span>
                                </div>

                            </div>

                            { /* row 2 + - list of users */ }
                            <div className="admin-user-list-screen--main--list-items">

                                {             
                                    users.map( ( user ) => (

                                        <AdminUserListItem
                                            key={ user._id }
                                            user={ user }
                                        />

                                    ) )
                                }

                            </div>
    
                        </div>

                    )

                }
    
            </div> // end of admin-user-list-screen

        )

    );

} // end of AdminUserListScreen


export default AdminUserListScreen;




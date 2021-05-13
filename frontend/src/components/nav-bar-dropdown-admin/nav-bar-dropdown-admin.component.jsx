
/*
// 1 -
import React from 'react';
// import in the Link component
import { Link } from 'react-router-dom';

import './nav-bar-dropdown.styles.scss';


// 2 -
// coming from the redux/user.actions.js 2 - file
// import in the useDispatch(); hook
import { useDispatch } from 'react-redux';
// import in the userSignOutActionCreator
import { userSignOutActionCreator } from '../../redux/actions/user.actions';
// import in the userNameDropdownActionCreator
import { userNameDropdownActionCreator } from '../../redux/actions/user.actions';


const NavBarDropdown = () => {

    // define dispatch
    const dispatch = useDispatch();

    const handleLogout = () => {

        // for now we will just print " logout " in the console
        // console.log( 'logout' );

        // dispatch our action creator
        dispatch( userSignOutActionCreator() );

        // dispatch our action creator
        // make sure we set show to false when logging out of the application
        dispatch( userNameDropdownActionCreator() );

    }

    // now let's test this out in the application by clicking on the logout link and when
    // we do we get the following result on the left hand side of the page in redux dev
    // tools:

    /*
        @@INIT
        PRODUCT_LIST_REQUEST
        PRODUCT_LIST_SUCCESS
        USER_SIGNOUT   
    */

    // and this is correct so everything is working as expected

    // and on the right hand side of the page under the Diff tab we see the following:

    /*
        userSignIn (pin)
            userInfo (pin): [] ( we see a line running through the array )
    */

    // and this is correct so everything is working as expected

    // and on the right hand side of the page under the State tab we see the following:

    /*
        productList (pin): { products: [ ... ], loading: false }
        productGet (pin): { product: { ... } }
        cart (pin): { cartItems: [ ... ] }
        userSignIn (pin): { }
    */

    // and this is correct so everything is working as expected

    // and we now see " Sign In " in the navigation and this is correct so everything is
    // working as expected

    // so we have cleared out our userSignIn state by dispatching the userSignOutActionCreator
    // which is great

    // and in the next video we will work on user registration

    // End of 2 -


    /*
    return (
    
        <div className="nav-bar-dropdown-container">

            <ul className="nav-bar-dropdown-container--ul">

                <li className="nav-bar-dropdown-container--ul--profile">
                    <Link
                        to="/profile"
                    >
                        <i className="fas fa-user"></i>&nbsp;&nbsp;Profile
                    </Link>
                </li>

                <li className="nav-bar-dropdown-container--ul--logout">
                    <span
                        onClick={ handleLogout }
                    >
                        <i className="fas fa-sign-out-alt"></i>&nbsp;&nbsp;Logout
                    </span>
                </li>

            </ul>

        </div>

    );

}


export default NavBarDropdown;

// End of 1 -
*/























// ===============================






















/*
// at the beginning of lecture 46, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React, { useCallback, useEffect, useRef } from 'react';
// import in the Link component
import { Link } from 'react-router-dom';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in the userNameDropdownActionCreator
import { adminDropdownActionCreator } from '../../redux/actions/user.actions';

import './nav-bar-dropdown-admin.styles.scss';


const NavBarDropdownAdmin = () => {

    // define dispatch
    const dispatch = useDispatch();


    // 2 -
    // import the useEffect(); and useRef(); hooks above

    // see below for how to create a DOM reference in react:

    /*
        import { useRef, useEffect } from 'react';

        function InputFocus() {

            // STEP 1
            const inputRef = useRef();

            useEffect( () => {

                // STEP 3
                inputRef.current.focus();

            }, [] );

            return (
                <input
                    // STEP 2
                    ref={ inputRef } 
                    type="text" 
                />
            );
        }
    */

    // ==============================
    // create DOM reference
    // ==============================

    // STEP 1

    // create a reference to the DOM element with a class name of
    // " nav-bar-dropdown-admin-container "
    /*
    const navBarDropdownAdminContainer = useRef( null );

    // ==============================
    // adminDropdown State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const adminDropdown = useSelector( ( state ) => state.adminDropdown );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { showAdminDropdown } = adminDropdown;

    // ==============================
    // handleClickOutside function
    // ==============================

    // define handleClickOutside
    // the useCallback(); hook caches our handleClickOutside function and it allows us to
    // call the handleClickOutside function inside the useEffect(); hook below and do so without
    // running into any issues

    // I believe the useCallback(); hook is firing before the useEffect(); hook and therefore
    // we are able to define the handleClickOutside function before the useEffect(); hook runs
    // and therefore we can use handleClickOutside as a dependency in the useEffect(); hook and
    // have it work without issue
    const handleClickOutside = useCallback( ( e ) => {

        // ==============================
        // create DOM reference
        // ==============================

        // STEP 3
        if ( navBarDropdownAdminContainer.current && !navBarDropdownAdminContainer.current.contains( e.target ) ) {

            if ( showAdminDropdown ) {
        
                // if open, close the admin dropdown menu
                dispatch( adminDropdownActionCreator() );
    
            }

        }

    }, [ dispatch, showAdminDropdown ] ); // end of handleClickOutside

    // ==============================
    // useEffect hook
    // ==============================

    useEffect( () => {

        // if we click outside the admin dropdown then ( anywhere in the document ) then we will
        // call the handleClickOutside function
        document.addEventListener( 'click', handleClickOutside, false );

        // make sure we remove the remove the event listener after we call the
        // handleClickOutside function
        return () => {

            document.removeEventListener( 'click', handleClickOutside, false );

        };

    }, [ handleClickOutside ] ); // end of useEffect

    // End of 2 -


    // ==============================
    // handleChange function
    // ==============================

    // set show to false when the user clicks on the profile link
    const handleChange = () => {

        // dispatch our action creator
        dispatch( adminDropdownActionCreator() );

    } // end of handleChange

    return (
    
        // ==============================
        // create DOM reference
        // ==============================

        // STEP 2
        <div
            className="nav-bar-dropdown-admin-container"
            ref={ navBarDropdownAdminContainer }
        >

            <ul className="nav-bar-dropdown-admin-container--ul">

                <li className="nav-bar-dropdown-admin-container--ul--user-list">
                    <Link
                        to="/admin/userlist"
                        onClick={ handleChange }
                    >
                        <i className="fas fa-users"></i>&nbsp;&nbsp;Users
                    </Link>
                </li>

                <li className="nav-bar-dropdown-admin-container--ul--product-list">
                    <Link
                        to="/admin/productlist"
                    >
                        <i className="fas fa-camera"></i>&nbsp;&nbsp;Products
                    </Link>
                </li>

                <li className="nav-bar-dropdown-admin-container--ul--order-list">
                    <Link
                        to="/admin/orderlist"
                    >
                        <i className="fas fa-shopping-cart"></i>&nbsp;&nbsp;Orders
                    </Link>
                </li>

            </ul>

        </div>

    );

}


export default NavBarDropdownAdmin;
*/























// ===============================























// at the beginning of lecture 68, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React, { useCallback, useEffect, useRef } from 'react';
// import in the Link component
import { Link } from 'react-router-dom';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in the userNameDropdownActionCreator
import { adminDropdownActionCreator } from '../../redux/actions/user.actions';

import './nav-bar-dropdown-admin.styles.scss';


const NavBarDropdownAdmin = () => {

    // define dispatch
    const dispatch = useDispatch();

    // ==============================
    // Example of the useRef(); hook
    // ==============================

    // see below for how to create a DOM reference in react:

    /*
        import { useRef, useEffect } from 'react';

        function InputFocus() {

            // STEP 1
            const inputRef = useRef();

            useEffect( () => {

                // STEP 3
                inputRef.current.focus();

            }, [] );

            return (
                <input
                    // STEP 2
                    ref={ inputRef } 
                    type="text" 
                />
            );
        }
    */

    // ==============================
    // create DOM reference
    // ==============================

    // STEP 1

    // create a reference to the DOM element with a class name of
    // " nav-bar-dropdown-admin-container "
    const navBarDropdownAdminContainer = useRef( null );

    // ==============================
    // adminDropdown State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const adminDropdown = useSelector( ( state ) => state.adminDropdown );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { showAdminDropdown } = adminDropdown;

    // ==============================
    // handleClickOutside function
    // ==============================

    // define handleClickOutside
    // the useCallback(); hook caches our handleClickOutside function and it allows us to
    // call the handleClickOutside function inside the useEffect(); hook below and do so without
    // running into any issues

    // I believe the useCallback(); hook is firing before the useEffect(); hook and therefore
    // we are able to define the handleClickOutside function before the useEffect(); hook runs
    // and therefore we can use handleClickOutside as a dependency in the useEffect(); hook and
    // have it work without issue
    const handleClickOutside = useCallback( ( e ) => {

        // ==============================
        // create DOM reference
        // ==============================

        // STEP 3
        if ( navBarDropdownAdminContainer.current && !navBarDropdownAdminContainer.current.contains( e.target ) ) {

            if ( showAdminDropdown ) {
        
                // if open, close the admin dropdown menu
                dispatch( adminDropdownActionCreator() );
    
            }

        }

    }, [ dispatch, showAdminDropdown ] ); // end of handleClickOutside

    // ==============================
    // useEffect hook
    // ==============================

    useEffect( () => {

        // if we click outside the admin dropdown then ( anywhere in the document ) then we will
        // call the handleClickOutside function
        document.addEventListener( 'click', handleClickOutside, false );

        // make sure we remove the remove the event listener after we call the
        // handleClickOutside function
        return () => {

            document.removeEventListener( 'click', handleClickOutside, false );

        };

    }, [ handleClickOutside ] ); // end of useEffect

    // ==============================
    // handleChange function
    // ==============================

    // set show to false when the user clicks on one of the sub menu items
    const handleChange = () => {

        // dispatch our action creator
        dispatch( adminDropdownActionCreator() );

    } // end of handleChange

    return (
    
        // ==============================
        // create DOM reference
        // ==============================

        // STEP 2
        <div
            className="nav-bar-dropdown-admin-container"
            ref={ navBarDropdownAdminContainer }
        >

            <ul className="nav-bar-dropdown-admin-container--ul">

                <li className="nav-bar-dropdown-admin-container--ul--user-list">
                    <Link
                        to="/admin/userlist"
                        onClick={ handleChange }
                    >
                        <i className="fas fa-users"></i>&nbsp;&nbsp;Users
                    </Link>
                </li>

                <li className="nav-bar-dropdown-admin-container--ul--product-list">
                    <Link
                        to="/admin/productlist"
                        onClick={ handleChange }
                    >
                        <i className="fas fa-camera"></i>&nbsp;&nbsp;Products
                    </Link>
                </li>

                <li className="nav-bar-dropdown-admin-container--ul--order-list">
                    <Link
                        to="/admin/orderlist"
                        onClick={ handleChange }
                    >
                        <i className="fas fa-shopping-cart"></i>&nbsp;&nbsp;Orders
                    </Link>
                </li>

            </ul>

        </div>

    );

}


export default NavBarDropdownAdmin;


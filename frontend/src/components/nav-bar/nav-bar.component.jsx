
/*
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './nav-bar.styles.scss';


// 1 -
// coming from the store.js 4 - file
// first, let's import in useSelector
import { useSelector } from 'react-redux';

// create a new folder called " cart-dropdown " and then inside this folder let's create 2
// files: " cart-dropdown.component.jsx " and " cart-dropdown.styles.scss "
// import in the CartDropdown component
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

// create a new folder called " cart-icon " and then inside this folder let's create 2
// files: " cart-icon.component.jsx " and " cart-icon.styles.scss "
// import in the CartIcon component
import CartIcon from '../cart-icon/cart-icon.component';

// add the shopping-bag.svg to the src/assets folder and remember we copied this file from the
// Complete React Developer in 2019 course

// End of 1 -


const NavBar = () => {


    // 1 - continued
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const cart = useSelector( ( state ) => state.cart );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output
    const { show } = cart;

    // now let's go to the cart-icon.component.jsx 1 - file

    // End of 1 -


    return (

        <Fragment>

            <nav className="navbar">

                <h2>
                    <Link to="/">ProShop</Link>
                </h2>

                <ul>

                    <li className="navbar--cart">
                        <Link to="/cart"><i className="fas fa-shopping-cart"></i>&nbsp;&nbsp;Cart</Link>
                    </li>

                    <li className="navbar--sign-in">
                        <Link to="/login"><i className="fas fa-user"></i>&nbsp;&nbsp;Sign In</Link>
                    </li>

                    <li>
                        <span><CartIcon /></span>
                    </li>
            
                </ul>

            </nav>

            <div className="nav-cart-dropdown">

                {
                    show ? (
                        <CartDropdown />
                    ) : (
                        null
                    )
                }

            </div>

        </Fragment>

    );

}

export default NavBar;
*/





















// ===============================





















/*
// at the beginning of lecture 33, given all the notes, I created a new file below without
// the notes so we are starting fresh

// NavBar component with cart dropdown

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// first, let's import in useSelector
import { useSelector } from 'react-redux';
// import in the CartDropdown component
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
// import in the CartIcon component
import CartIcon from '../cart-icon/cart-icon.component';

import './nav-bar.styles.scss';


const NavBar = () => {

    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const cart = useSelector( ( state ) => state.cart );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output
    const { show } = cart;

    return (

        <Fragment>

            <nav className="navbar">

                <h2>
                    <Link to="/">ProShop</Link>
                </h2>

                <ul>

                    <li className="navbar--cart">
                        <Link to="/cart"><i className="fas fa-shopping-cart"></i>&nbsp;&nbsp;Cart</Link>
                    </li>

                    <li className="navbar--sign-in">
                        <Link to="/login"><i className="fas fa-user"></i>&nbsp;&nbsp;Sign In</Link>
                    </li>

                    <li>
                        <span><CartIcon /></span>
                    </li>

                </ul>

            </nav>

            <div className="nav-cart-dropdown">

                {
                    show ? (
                        <CartDropdown />
                    ) : (
                        null
                    )
                }

            </div>

        </Fragment>

    );

}

export default NavBar;
*/





















// ===============================






















// at the beginning of lecture 33, given all the notes, I created a new file below without
// the notes so we are starting fresh

/*
import React from 'react';
import { Link } from 'react-router-dom';

import './nav-bar.styles.scss';


// 2 -
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in the NavBarDropdown component
import NavBarDropdown from '../nav-bar-dropdown/nav-bar-dropdown.component';
// import in the userNameDropdownActionCreator
import { userNameDropdownActionCreator } from '../../redux/actions/user.actions';


const NavBar = () => {

    // define dispatch
    const dispatch = useDispatch();


    // this block of code pertains to the user sign in or user name navigation tab
    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const userSignIn = useSelector( ( state ) => state.userSignIn );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { userInfo } = userSignIn;

    // if userInfo is true or userInfo exist then that means the user is logged into the
    // application and in that case we want to show the user's name otherwuse the user is not
    // logged into the application and in that case we want to show " Sign In "


    // this block of code pertains to the user name dropdown
    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const userNameDropdown = useSelector( ( state ) => state.userNameDropdown );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { show } = userNameDropdown;

    // show and hide the NavBarDropdown component
    const handleDropdown = () => {

        dispatch( userNameDropdownActionCreator() );

    } // end of handleDropdown


    return (

        <nav className="navbar">

            <h2>
                <Link to="/">ProShop</Link>
            </h2>

            <ul className="navbar--ul">

                { /*  cart */ /* }
                <li className="navbar--ul--cart">

                    <Link to="/cart">
                        <i className="fas fa-shopping-cart"></i>&nbsp;&nbsp;Cart
                    </Link>

                </li>

                { /*  username & dropdown menu or sign in */ /* }
                {

                    userInfo ? (

                        <li className="navbar--ul--dropdown">

                            <span
                                className="navbar--ul--dropdown-span"
                                onClick={ handleDropdown }
                            >
                                { userInfo.name }&nbsp;&nbsp;&#9662;
                            </span>

                            {
                                show && <NavBarDropdown />
                            }

                        </li>

                    ) : (

                        <li className="navbar--ul--sign-in">

                            <Link to="/login">
                                <i className="fas fa-user"></i>&nbsp;&nbsp;Sign In
                            </Link>

                        </li>

                    )

                }

            </ul>

        </nav>

    );

}

export default NavBar;

// End of 2 -
*/





















// ===============================






















/*
// at the beginning of lecture 46, given all the notes, I created a new file below without
// the notes so we are starting fresh

/*
import React, { useEffect, useRef } from 'react';
*/
/*
import React from 'react';
import { Link } from 'react-router-dom';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in the NavBarDropdownUser component
import NavBarDropdownUser from '../nav-bar-dropdown-user/nav-bar-dropdown-user.component';
// import in the NavBarDropdownAdmin component
import NavBarDropdownAdmin from '../nav-bar-dropdown-admin/nav-bar-dropdown-admin.component';
// import in the userNameDropdownActionCreator
import {
    userDropdownActionCreator,
    adminDropdownActionCreator
} from '../../redux/actions/user.actions';

import './nav-bar.styles.scss';


const NavBar = () => {


    // ==============================
    // DISPATCH & USESELECTOR(); & USEEFFECT();
    // ==============================

    // define dispatch
    const dispatch = useDispatch();

    // ==============================
    // userSignIn State
    // ==============================

    // this block of code pertains to the user sign in or user name navigation tab

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const userSignIn = useSelector( ( state ) => state.userSignIn );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { userInfo } = userSignIn;

    // if userInfo is true or userInfo exist then that means the user is logged into the
    // application and in that case we want to show the user's name otherwuse the user is not
    // logged into the application and in that case we want to show " Sign In "

    // ==============================
    // userDropdown State
    // ==============================

    // this block of code pertains to the user dropdown

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const userDropdown = useSelector( ( state ) => state.userDropdown );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { showUserDropdown } = userDropdown;

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
    // handleDropdownMenus function
    // ==============================

    // if the user presses the cart button, close the user dropdown menu or admin dropdown
    // menu, if needed
    const handleDropdownMenus = () => {

        if ( showUserDropdown ) {
        
            // if open, close the user dropdown menu
            dispatch( userDropdownActionCreator() );

        }

        if ( showAdminDropdown ) {
        
            // if open, close the admin dropdown menu
            dispatch( adminDropdownActionCreator() );

        }

    } // end of handleDropdown

    // ==============================
    // handleUserDropdown function
    // ==============================

    // show and hide the NavBarDropdownUser component
    const handleUserDropdown = () => {

        // open the user dropdown menu
        dispatch( userDropdownActionCreator() );

        if ( showAdminDropdown ) {
        
            // if open, close the admin dropdown menu
            dispatch( adminDropdownActionCreator() );

        }

    } // end of handleDropdown

    // ==============================
    // handleAdminDropdown function
    // ==============================

    // show and hide the NavBarDropdownUser component
    const handleAdminDropdown = () => {

        // open the admin dropdown menu
        dispatch( adminDropdownActionCreator() );

        if ( showUserDropdown ) {
        
            // if open, close the user dropdown menu
            dispatch( userDropdownActionCreator() );

        }

    } // end of handleDropdown

    /*
    // rotate the arrow 180 degrees on each click event
    useEffect( () => {
        // remember the useEffect(); hook will be called every time show changes and when the
        // page loads show will equal false and this will trigger the useEffect(); hook and
        // thereby toggling the arrow-change class so we need to start off with the arrow-change
        // class included in the className list below so that on page load we remove the
        // arrow-change class and therefore the arrow is pointing down initially which is what
        // we want

        // remember I used the useRef(); hook to get access the DOM and get a reference to the
        // span element that includes our arrow
        arrowElement.current.classList.toggle( "arrow-change" );

    }, [ show ] );
    */


    /*
    return (

        <nav className="navbar">

            <h2>
                <Link
                    to="/"
                    onClick={ handleDropdownMenus }
                >
                    ProShop
                </Link>
            </h2>

            <ul
                className=
                { 
                    ( userInfo && userInfo.isAdmin ) ? (

                        'admin navbar--ul'

                    ) : (
                        'navbar--ul'
                    )
                }
            >

                { /*  cart */ /* }
                <li className="navbar--ul--cart">

                    <Link 
                        to="/cart"
                        onClick={ handleDropdownMenus }
                    >
                        <i className="fas fa-shopping-cart"></i>&nbsp;&nbsp;Cart
                    </Link>

                </li>

                { /*  user & dropdown menu or sign in */ /* }
                {

                    userInfo ? (

                        <li className="navbar--ul--dropdown-user">

                            <span
                                className="navbar--ul--dropdown-user-span"
                                onClick={ handleUserDropdown }
                            >
                                { userInfo.name }&nbsp;&nbsp;
                                <span
                                    /* ref={ arrowElement } */
                                    /*
                                    className="navbar--ul--dropdown-user-span--arrow"
                                >
                                    &#9662;
                                </span>
                            </span>

                            {
                                showUserDropdown && <NavBarDropdownUser userInfo={ userInfo }/>
                            }

                        </li>

                    ) : (

                        <li className="navbar--ul--sign-in">

                            <Link to="/login">
                                <i className="fas fa-user"></i>&nbsp;&nbsp;Sign In
                            </Link>

                        </li>

                    )

                }

                { /*  admin dropdown menu */ /* }
                {

                    ( userInfo && userInfo.isAdmin ) && (

                        <li className="navbar--ul--dropdown-admin">

                            <span
                                className="navbar--ul--dropdown-admin-span"
                                onClick={ handleAdminDropdown }
                            >
                                Admin&nbsp;&nbsp;
                                <span
                                    /* ref={ arrowElement } */
                                    /*
                                    className="navbar--ul--dropdown-admin-span--arrow"
                                >
                                    &#9662;
                                </span>
                            </span>

                            {
                                showAdminDropdown && <NavBarDropdownAdmin />
                            }

                        </li>

                    )

                }

            </ul>

        </nav>

    );

}

export default NavBar;

// End of 2 -
*/




















// ===============================






















/*
// at the beginning of lecture 68, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in the NavBarDropdownUser component
import NavBarDropdownUser from '../nav-bar-dropdown-user/nav-bar-dropdown-user.component';
// import in the NavBarDropdownAdmin component
import NavBarDropdownAdmin from '../nav-bar-dropdown-admin/nav-bar-dropdown-admin.component';
// import in the userNameDropdownActionCreator
import {
    userDropdownActionCreator,
    adminDropdownActionCreator
} from '../../redux/actions/user.actions';

import './nav-bar.styles.scss';


// 3 -
// coming from the App.js 17 - file

// import in the SearchBox component
import SearchBox from '../search-box/search-box.component';

// remember we can't access the history prop from the SearchBox component so we have to use
// render props in order to get access to the history prop from the SearchBox component so the
// first thing we need to do is import in Route
import { Route } from 'react-router-dom';

// and change " <SearchBox /> " below to
// " <Route render={ ( { history } ) => <SearchBox history={ history } /> }  /> " and now if
// we type " deed " into the search input field and press the search button we see the following
// URL " http://localhost:3008/search/deed "

// and this is correct so everything is working as expected

// let's go to the home-screen.component.jsx 7 -

// End of 3 -


const NavBar = () => {

    // ==============================
    // DISPATCH & USESELECTOR(); & USEEFFECT();
    // ==============================

    // define dispatch
    const dispatch = useDispatch();

    // ==============================
    // create DOM reference
    // ==============================

    // STEP 1

    // create a reference to the DOM element with a class name of
    // " navBarDropdownUserArrow "
    const navBarDropdownUserArrow = useRef( null );

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

    // if userInfo is true or userInfo exist then that means the user is logged into the
    // application and in that case we want to show the user's name otherwuse the user is not
    // logged into the application and in that case we want to show " Sign In "

    // ==============================
    // userDropdown State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const userDropdown = useSelector( ( state ) => state.userDropdown );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { showUserDropdown } = userDropdown;

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
    // handleDropdownMenus function
    // ==============================

    // if the user presses the cart button, close the user dropdown menu or admin dropdown
    // menu, if needed
    const handleDropdownMenus = () => {

        if ( showUserDropdown ) {
        
            // if open, close the user dropdown menu
            dispatch( userDropdownActionCreator() );

            // ==============================
            // create DOM reference
            // ==============================

            // STEP 3

            // if open, turn down the nav bar dropdown user arrow
            navBarDropdownUserArrow.current.classList.toggle( "arrow-change" );

        }

        if ( showAdminDropdown ) {
        
            // if open, close the admin dropdown menu
            dispatch( adminDropdownActionCreator() );

        }

    } // end of handleDropdown

    // ==============================
    // handleUserDropdown function
    // ==============================

    // show and hide the NavBarDropdownUser component
    const handleUserDropdown = () => {

        if ( showAdminDropdown ) {
        
            // if open, close the admin dropdown menu
            dispatch( adminDropdownActionCreator() );

        }

        // open the user dropdown menu
        dispatch( userDropdownActionCreator() );

        // ==============================
        // create DOM reference
        // ==============================

        // STEP 3

        // use the class " arrow-change " to rotate the arrow 180 degrees
        navBarDropdownUserArrow.current.classList.toggle( "arrow-change" );

    } // end of handleDropdown

    // ==============================
    // handleAdminDropdown function
    // ==============================

    // show and hide the NavBarDropdownUser component
    const handleAdminDropdown = () => {

        if ( showUserDropdown ) {
        
            // if open, close the user dropdown menu
            dispatch( userDropdownActionCreator() );

            // ==============================
            // create DOM reference
            // ==============================

            // STEP 3

            // if open, turn down the nav bar dropdown user arrow
            navBarDropdownUserArrow.current.classList.toggle( "arrow-change" );

        }

        // open the admin dropdown menu
        dispatch( adminDropdownActionCreator() );

    } // end of handleDropdown

    /*
    // rotate the arrow 180 degrees on each click event
    useEffect( () => {
        // remember the useEffect(); hook will be called every time show changes and when the
        // page loads show will equal false and this will trigger the useEffect(); hook and
        // thereby toggling the arrow-change class so we need to start off with the arrow-change
        // class included in the className list below so that on page load we remove the
        // arrow-change class and therefore the arrow is pointing down initially which is what
        // we want

        // remember I used the useRef(); hook to get access the DOM and get a reference to the
        // span element that includes our arrow
        arrowElement.current.classList.toggle( "arrow-change" );

    }, [ show ] );
    */


    /*
    return (

        // ==============================
        // create DOM reference
        // ==============================

        // STEP 2
        // see arrow refs below
        <nav className="navbar">

            { /* ProShop heading */ /* }
            <h2>
                <Link
                    to="/"
                    onClick={ handleDropdownMenus }
                >
                    ProShop
                </Link>
            </h2>

            { /* use Route and render props to pass in the history prop to the SearchBox component */ /* }
            <Route render={ ( { history } ) => <SearchBox history={ history } /> }  />

            <ul
                className=
                { 
                    ( userInfo && userInfo.isAdmin ) ? (

                        'admin navbar--ul'

                    ) : (

                        'navbar--ul'

                    )
                }
            >

                { /*  cart */ /* }
                <li className="navbar--ul--cart">

                    <Link 
                        to="/cart"
                        onClick={ handleDropdownMenus }
                    >
                        <i className="fas fa-shopping-cart"></i>&nbsp;&nbsp;Cart
                    </Link>

                </li>

                { /*  user & dropdown menu or sign in */ /* }
                {

                    userInfo ? (

                        <li className="navbar--ul--dropdown-user">

                            <span
                                className="navbar--ul--dropdown-user-span"
                                onClick={ handleUserDropdown }
                            >
                                { userInfo.name }&nbsp;&nbsp;
                                <span
                                    /* ref={ arrowElement } */ /*
                                    className="navbar--ul--dropdown-user-span--arrow"
                                    ref={ navBarDropdownUserArrow }
                                >
                                    &#9662;
                                </span>
                            </span>

                            {
                                showUserDropdown && <NavBarDropdownUser userInfo={ userInfo } navBarDropdownUserArrow={ navBarDropdownUserArrow } />
                            }

                        </li>

                    ) : (

                        <li className="navbar--ul--sign-in">

                            <Link to="/login">
                                <i className="fas fa-user"></i>&nbsp;&nbsp;Sign In
                            </Link>

                        </li>

                    )

                }

                { /*  admin dropdown menu */ /* }
                {

                    ( userInfo && userInfo.isAdmin ) && (

                        <li className="navbar--ul--dropdown-admin">

                            <span
                                className="navbar--ul--dropdown-admin-span"
                                onClick={ handleAdminDropdown }
                            >
                                Admin&nbsp;&nbsp;
                                <span
                                    /* ref={ arrowElement } */ /*
                                    className="navbar--ul--dropdown-admin-span--arrow"
                                >
                                    &#9662;
                                </span>
                            </span>

                            {
                                showAdminDropdown && <NavBarDropdownAdmin />
                            }

                        </li>

                    )

                }

            </ul>

        </nav>

    );

}

export default NavBar;
*/




















// ===============================























// at the beginning of lecture 86, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// remember we can't access the history prop from the SearchBox component so we have to use
// render props in order to get access to the history prop from the SearchBox component so the
// first thing we need to do is import in Route
import { Route } from 'react-router-dom';
// import in our action creators
import {
    userDropdownActionCreator,
    adminDropdownActionCreator
} from '../../redux/actions/user.actions';
// import in the NavBarDropdownUser component
import NavBarDropdownUser from '../nav-bar-dropdown-user/nav-bar-dropdown-user.component';
// import in the NavBarDropdownAdmin component
import NavBarDropdownAdmin from '../nav-bar-dropdown-admin/nav-bar-dropdown-admin.component';
// import in the SearchBox component
import SearchBox from '../search-box/search-box.component';

import './nav-bar.styles.scss';


const NavBar = () => {

    // ==============================
    // DISPATCH & USESELECTOR(); & USEEFFECT();
    // ==============================

    // define dispatch
    const dispatch = useDispatch();

    // ==============================
    // create DOM reference
    // ==============================

    // STEP 1

    // create a reference to the DOM element with a class name of
    // " navBarDropdownUserArrow "
    const navBarDropdownUserArrow = useRef( null );

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

    // if userInfo is true or userInfo exist then that means the user is logged into the
    // application and in that case we want to show the user's name otherwuse the user is not
    // logged into the application and in that case we want to show " Sign In "

    // ==============================
    // userDropdown State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const userDropdown = useSelector( ( state ) => state.userDropdown );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { showUserDropdown } = userDropdown;

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
    // handleDropdownMenus function
    // ==============================

    // if the user presses the cart button, close the user dropdown menu or admin dropdown
    // menu, if needed
    const handleDropdownMenus = () => {

        if ( showUserDropdown ) {
        
            // if open, close the user dropdown menu
            dispatch( userDropdownActionCreator() );

            // ==============================
            // create DOM reference
            // ==============================

            // STEP 3

            // if open, turn down the nav bar dropdown user arrow
            navBarDropdownUserArrow.current.classList.toggle( "arrow-change" );

        }

        if ( showAdminDropdown ) {
        
            // if open, close the admin dropdown menu
            dispatch( adminDropdownActionCreator() );

        }

    } // end of handleDropdown

    // ==============================
    // handleUserDropdown function
    // ==============================

    // show and hide the NavBarDropdownUser component
    const handleUserDropdown = () => {

        if ( showAdminDropdown ) {
        
            // if open, close the admin dropdown menu
            dispatch( adminDropdownActionCreator() );

        }

        // open the user dropdown menu
        dispatch( userDropdownActionCreator() );

        // ==============================
        // create DOM reference
        // ==============================

        // STEP 3

        // use the class " arrow-change " to rotate the arrow 180 degrees
        navBarDropdownUserArrow.current.classList.toggle( "arrow-change" );

    } // end of handleDropdown

    // ==============================
    // handleAdminDropdown function
    // ==============================

    // show and hide the NavBarDropdownUser component
    const handleAdminDropdown = () => {

        if ( showUserDropdown ) {
        
            // if open, close the user dropdown menu
            dispatch( userDropdownActionCreator() );

            // ==============================
            // create DOM reference
            // ==============================

            // STEP 3

            // if open, turn down the nav bar dropdown user arrow
            navBarDropdownUserArrow.current.classList.toggle( "arrow-change" );

        }

        // open the admin dropdown menu
        dispatch( adminDropdownActionCreator() );

    } // end of handleDropdown

    /*
    // rotate the arrow 180 degrees on each click event
    useEffect( () => {
        // remember the useEffect(); hook will be called every time show changes and when the
        // page loads show will equal false and this will trigger the useEffect(); hook and
        // thereby toggling the arrow-change class so we need to start off with the arrow-change
        // class included in the className list below so that on page load we remove the
        // arrow-change class and therefore the arrow is pointing down initially which is what
        // we want

        // remember I used the useRef(); hook to get access the DOM and get a reference to the
        // span element that includes our arrow
        arrowElement.current.classList.toggle( "arrow-change" );

    }, [ show ] );
    */


    return (

        // ==============================
        // create DOM reference
        // ==============================

        // STEP 2
        // see arrow refs below
        <nav className="navbar">

            { /* ProShop heading */ }
            <h2>
                <Link
                    to="/"
                    onClick={ handleDropdownMenus }
                >
                    ProShop
                </Link>
            </h2>

            { /* use Route and render props to pass in the history prop to the SearchBox component */ }
            <Route render={ ( { history } ) => <SearchBox history={ history } /> }  />

            <ul
                className=
                { 
                    ( userInfo && userInfo.isAdmin ) ? (

                        'admin navbar--ul'

                    ) : (

                        'navbar--ul'

                    )
                }
            >

                { /*  cart */ }
                <li className="navbar--ul--cart">

                    <Link 
                        to="/cart"
                        onClick={ handleDropdownMenus }
                    >
                        <i className="fas fa-shopping-cart"></i>&nbsp;&nbsp;Cart
                    </Link>

                </li>

                { /*  user & dropdown menu or sign in */ }
                {

                    userInfo ? (

                        <li className="navbar--ul--dropdown-user">

                            <span
                                className="navbar--ul--dropdown-user-span"
                                onClick={ handleUserDropdown }
                            >
                                { userInfo.name }&nbsp;&nbsp;
                                <span
                                    /* ref={ arrowElement } */
                                    className="navbar--ul--dropdown-user-span--arrow"
                                    ref={ navBarDropdownUserArrow }
                                >
                                    &#9662;
                                </span>
                            </span>

                            {
                                showUserDropdown && <NavBarDropdownUser userInfo={ userInfo } navBarDropdownUserArrow={ navBarDropdownUserArrow } />
                            }

                        </li>

                    ) : (

                        <li className="navbar--ul--sign-in">

                            <Link to="/login">
                                <i className="fas fa-user"></i>&nbsp;&nbsp;Sign In
                            </Link>

                        </li>

                    )

                }

                { /*  admin dropdown menu */ }
                {

                    ( userInfo && userInfo.isAdmin ) && (

                        <li className="navbar--ul--dropdown-admin">

                            <span
                                className="navbar--ul--dropdown-admin-span"
                                onClick={ handleAdminDropdown }
                            >
                                Admin&nbsp;&nbsp;
                                <span
                                    /* ref={ arrowElement } */
                                    className="navbar--ul--dropdown-admin-span--arrow"
                                >
                                    &#9662;
                                </span>
                            </span>

                            {
                                showAdminDropdown && <NavBarDropdownAdmin />
                            }

                        </li>

                    )

                }

            </ul>

        </nav>

    );

}

export default NavBar;



/*
// 1 -

import React, { useState } from 'react';

import './search-box.styles.scss';


const SearchBox = ( { history } ) => {

    // ==============================
    // Component State
    // ==============================

    const [ keyword, setKeyword ] = useState( '' );

    // ==============================
    // useDispatch(); & useSelector();
    // ==============================

    // ==============================
    // useEffect();
    // ==============================

    // ==============================
    // handleSubmit function
    // ==============================
    const handleSubmit = ( e ) => {

        // since we're submitting a form, we want to prevent default browser behavior
        e.preventDefault();

        // check for the keyword and trim any white space
        if ( keyword.trim() ) {

            // remember, we need a route in App.js for " /search/:keyword " and let's go to
            // the App.js 17 - file now
            history.push( `/search/${ keyword }` );

        } else {

            // if there is nothing in the search input field then just go to the home page
            history.push( '/' );

        } // end of if else

    } // end of handleSubmit


    return (
        
        <div className="search-box">
        
            <form className="search-box--form" noValidate="novalidate" onSubmit={ handleSubmit } >

                <input
                    name="keyword"
                    type="text"
                    // placeholder="Search Products..."
                    onChange={ (e) => setKeyword( e.target.value ) }
                />

                { /*  submit button  */ /* }
                <div className="search-box--form--button-container">

                    <button
                        type="submit"
                        className="search-box--form--button-container--button"
                    >
                        <i className="fas fa-search"></i>
                    </button>

                </div>

            </form>

        </div>


    );

}

export default SearchBox;

// End of 1 -
*/






















// ===============================























// at the beginning of lecture 86, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React, { useEffect, useState } from 'react';

import './search-box.styles.scss';


const SearchBox = ( { history } ) => {

    // ==============================
    // Define URL
    // ==============================

    // remember we had to define this const here and not in the useEffect(); hook
    const url = window.location.href;

    // ==============================
    // Component State
    // ==============================

    const [ keyword, setKeyword ] = useState( '' );

    // ==============================
    // useDispatch(); & useSelector();
    // ==============================

    // ==============================
    // useEffect();
    // ==============================

    useEffect( () => {

        // if the url equal the home page then reset the keyword to an empty string
        if ( url === 'http://localhost:3008/' || url === 'https://proshop-sandstone.herokuapp.com/' ) {

            // reset the keyword
            setKeyword( '' );

        } // end of if statement

    }, [ url ] ); // end of useEffect

    // ==============================
    // handleSubmit function
    // ==============================
    const handleSubmit = ( e ) => {

        // since we're submitting a form, we want to prevent default browser behavior
        e.preventDefault();

        // check for the keyword and trim any white space
        if ( keyword.trim() ) {

            history.push( `/search/${ keyword }` );

        } else {

            // if there is nothing in the search input field then just go to the home page
            history.push( '/' );

        } // end of if else

    } // end of handleSubmit


    return (

        <div className="search-box">
        
            <form className="search-box--form" noValidate="novalidate" onSubmit={ handleSubmit } >

                { /*  search field  */ }
                <input
                    name="keyword"
                    type="text"
                    // placeholder="Search Products..."
                    value={ keyword }
                    onChange={ (e) => setKeyword( e.target.value ) }
                />

                { /*  submit button  */ }
                <div className="search-box--form--button-container">

                    <button
                        type="submit"
                        className="search-box--form--button-container--button"
                    >
                        <i className="fas fa-search"></i>
                    </button>

                </div>

            </form>

        </div>


    );

}

export default SearchBox;


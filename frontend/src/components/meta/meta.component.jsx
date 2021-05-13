
/*
// 1 -
// coming from the home-screen.component.jsx 11 - file

import React from 'react';
// import in react helmet
import { Helmet } from 'react-helmet';

import './meta.styles.scss';


// let's pass in some props
const Meta = ( { title, description, keywords } ) => {

    return (

        <Helmet>

            <title>{ title }</title>
            <meta name="description" content={ description } />
            <meta name="keyword" content={ keywords } />

        </Helmet>

    );

}

// add some default props
Meta.defaultProps = {
    title       : 'Welcome to ProShop',
    description : 'We sell the best products for cheap',
    keywords    : 'electronics, buy electronics, cheap electronics', 
};


export default Meta;

// now let's go back to the home-screen.component.jsx 12 - file

// End of 1 -
*/





















// ===============================























// at the beginning of lecture 89, given all the notes, I created a new file below without
// the notes so we are starting fresh


import React from 'react';
// import in react helmet
import { Helmet } from 'react-helmet';

import './meta.styles.scss';


// let's pass in some props
const Meta = ( { title, description, keywords } ) => {

    return (

        <Helmet>

            <title>{ title }</title>
            <meta name="description" content={ description } />
            <meta name="keyword" content={ keywords } />

        </Helmet>

    );

}

// add some default props
Meta.defaultProps = {
    title       : 'Welcome to ProShop',
    description : 'We sell the best products for cheap',
    keywords    : 'electronics, buy electronics, cheap electronics', 
};


export default Meta;


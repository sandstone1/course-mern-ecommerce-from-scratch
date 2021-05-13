
/*
// 1 -
// coming from the user.routes.js 2 - file
// and to protect routes we need to validate the tokens so let's import in jwt
import jwt from 'jsonwebtoken';
// import in the User model and don't forget the .js since were working in the backend
import User from '../models/user.model.js';

// protectRoutes will be our middleware function 
const protectRoutes = async ( req, res, next ) => {

    // let's intialize a variable called token
    let token;

    // and this token will be sent through headers so let's go back to Postman and
    // set the headers in Postman or do the following:

    // Line 1 - " GET   {{URL}}/api/users/profile   Send button "
    // Line 2 - Headers
    // Line 3 - Key / Value / Description ( categories under Headers )
    // Line 4 - Authorization for Key / Bearer **space** and then the token for Value and grab
    // the token by running " GET   {{URL}}/api/users/login   Send button " and then copying
    // the token from the result at the bottom of the page / leave Description blank

    // and to get the token value we can do req.headers.authorization and let's test this out
    // by (1) logging this to the console and then (2) running next(); and then (3) exporting
    // protectRoutes and then (4) let's go to the user.routes.js 3 - file
    console.log( req.headers.authorization );

    next();

}


export { protectRoutes };

// End of 1 -
*/



/*
// 2 -
// coming from the user.routes.js 3 - file
// now let's comment out 1 - above

// to protect routes we need to validate the tokens so let's import in jwt
import jwt from 'jsonwebtoken';
// import in the User model and don't forget the .js since were working in the backend
import User from '../models/user.model.js';
// import in the express async handler to handle any exceptions
import asyncHandler from 'express-async-handler';


// Middleware function 1
// protectRoutes will be our middleware function ( I changed the name to requireAuth )
// and remember to wrap our entire function with the express async handler
const requireAuth = asyncHandler( async ( req, res, next ) => {

    // intialize token
    let token;

    // now let's check and maje sure the token exist
    if ( req.headers.authorization && req.headers.authorization.startsWith( 'Bearer' ) ) {

        // if the token exist then let's use a try catch block below
        try {

            // first, let's get the token value and we only want the token value and not the
            // " Bearer " so let's use the split method to divide the token into 2 parts and
            // then grab the token value and save it to the const " token "
            const token = req.headers.authorization.split( ' ' )[ 1 ];

            // let's use jwt.verify(); to decode the token
            const decodedToken = jwt.verify( token, process.env.JWT_SECRET );

            // console.log( decodedToken );

            // next();

            // let's test this out by going back to Postman and set the following in Postman:

            // Line 1 - " GET   {{URL}}/api/users/profile   Send button "
            // Line 2 - Headers
            // Line 3 - Key / Value / Description ( categories under Headers )
            // Line 4 - Authorization for Key / Bearer **space** and then the token for Value

            // and the result in the console in the integrated terminal is:

            /*
                { id: '5ff504545a6a66457f0b0705', iat: 1612209066, exp: 1614801066 }
            */

            // and we see the decoded token which inclues the user's id, the issued at date and
            // the expiration date

            // and this is correct so everything is working as expected

            // now let's comment out " console.log( decodedToken ); " above and move next(); to
            // the end of this try block

            // and now we can get the user's id with decodedToken.id

            // now let's find the user by id or decodedToken.id and then save this user to
            // req.user and let's make sure we don't select or return the password so to double
            // check and make sure this doesn't happen let's add " select( '-password' ); "

            // and we will have access to req.user in all of our protected routes and remember
            // req.user contains all the information on the current user
            /*
            req.user = await User.findById( decodedToken.id ).select( '-password' );

            next();

        } catch ( error ) {

            // if we were not able to decode the token in the try block or we have a bad token
            // then let's do the following:

            // remember console.error(); may be a better way to show errors in the console
            // than console.log();
            console.error( error );

            // remember 401 " indicates that the request has not been applied because it
            // lacks valid authentication credentials for the target resource "
            res.status( 401 );

            throw new Error( 'Not authorized, token failed' );

            // let's test this out by going back to Postman and set the following in Postman:

            // Line 1 - " GET   {{URL}}/api/users/profile   Send button "
            // Line 2 - Headers
            // Line 3 - Key / Value / Description ( categories under Headers )
            // Line 4 - Authorization for Key / Bearer **space** and then the token value for
            // Value but in this case let's change one letter in the token value so that we
            // create a bad or non valid token

            // and the result at the bottom of the page in Postman is:

            /*
               {
                    "message": "Not authorized, token failed",
                    "stack": "Error: Not authorized, token failed\n at file:///Applications/MAMP ...
               }
            */

            // and this is correct so everything is working as expected

            // now let's use req.user above and to do that let's go to the user.controller.js
            // 5 - file

        /*
        }

    }

    // if there is no token then let's do the following:
    else {

        res.status( 401 );

        throw new Error( 'Not authorized, no token' );

        // let's test this out by going back to Postman and set the following in Postman:

        // Line 1 - " GET   {{URL}}/api/users/profile   Send button "
        // Line 2 - Headers
        // Line 3 - Key / Value / Description ( categories under Headers )
        // Line 4 - Authorization for Key but in this case let's uncheck the checkbox next
        // to the word Authorization so that we do not send a token along with the request from
        // the browser / Bearer **space** and then the token value for Value

        // and the result at the bottom of the page in Postman is:

        /*
            {
                "message": "Not authorized, no token",
                "stack": "Error: Not authorized, no token\n    at file:///Applications/MAMP ...
            }
        */

        // and this is correct so everything is working as expected

    /*
    }

    // comment out next(); for now
    // next();

    // end 2 -

} );


export { requireAuth };
*/


























// ===============================

























/*
// at the beginning of lecture 41, given all the notes, I created a new file below without
// the notes so we are starting fresh


// to protect routes we need to validate the tokens so let's import in jwt
import jwt from 'jsonwebtoken';
// import in the User model and don't forget the .js since were working in the backend
import User from '../models/user.model.js';
// import in the express async handler to handle any exceptions
import asyncHandler from 'express-async-handler';


// Middleware Function 1
// protectRoutes will be our middleware function ( I changed the name to requireAuth )
// and remember to wrap our entire function with the express async handler
const requireAuth = asyncHandler( async ( req, res, next ) => {

    // intialize token
    let token;

    // now let's check and make sure the token exist
    // and remember authorization is the key and token is the value
    if ( req.headers.authorization && req.headers.authorization.startsWith( 'Bearer' ) ) {

        // if the token exist then let's use a try catch block below
        try {

            // first, let's get the token value and we only want the token value and not the
            // " Bearer " so let's use the split method to divide the token into 2 parts and
            // then grab the second part or the token value
            const token = req.headers.authorization.split( ' ' )[ 1 ];

            // let's use jwt.verify(); to decode the token and remember the decodedToken will
            // be an object like the following:
            // " { id: '5ff504545a6a66457f0b0705', iat: 1612209066, exp: 1614801066 } "
            const decodedToken = jwt.verify( token, process.env.JWT_SECRET );

            // now let's find the user by id or decodedToken.id and then save this user to
            // req.user and we will have access to req.user in all of our protected routes
            // and remember req.user contains all the information for the current user
            req.user = await User.findById( decodedToken.id ).select( '-password' );

            next();

        } catch ( error ) {

            // if we were not able to decode the token in the try block above or we have a bad
            // token then let's do the following:
            console.error( error );

            // remember 401 " indicates that the request has not been applied because it
            // lacks valid authentication credentials for the target resource "
            res.status( 401 );

            throw new Error( 'Not authorized, token failed' );

        }

    } // end of the if statement

    // if there is no token then let's do the following:
    else {

        res.status( 401 );

        throw new Error( 'Not authorized, no token' );

    } // end of the else statement

} );


// 3 -

// Middleware Function 2
// admin will be our middleware function and remember to wrap our entire function
// with the express async handler
const admin = asyncHandler( async ( req, res, next ) => {

    // check to make sure the user is logged in with " req.user " and then check and
    // make sure the user is an admin user by using " req.user.isAdmin " and make sure
    // that this evaluates to true
    if ( req.user && req.user.isAdmin ) {

        // if we have a logged in user and the user is an admin user then let's call
        // next(); and move on
        next();

    } // end of the if statement
    
    else {

        // remember 401 " indicates that the request has not been applied because it
        // lacks valid authentication credentials for the target resource "
        // or in other words 401 means " Not Authorized "
        res.status( 401 );

        throw new Error( 'Not authorized as an admin' );

    } // end of the else statement

} ); // end of admin

// and remember to export this middleware function

// now let's go back to the user.routes.js 8 - file

// End fo 3 -


export { requireAuth, admin };
*/


























// ===============================


























// at the beginning of lecture 67, given all the notes, I created a new file below without
// the notes so we are starting fresh


// to protect routes we need to validate the tokens so let's import in jwt
import jwt from 'jsonwebtoken';
// import in the User model and don't forget the .js since were working in the backend
import User from '../models/user.model.js';
// import in the express async handler to handle any exceptions
import asyncHandler from 'express-async-handler';


// Middleware Function 1

// protectRoutes will be our middleware function ( I changed the name to requireAuth )
// and remember to wrap our entire function with the express async handler
const requireAuth = asyncHandler( async ( req, res, next ) => {

    // intialize token
    let token;

    // now let's check and make sure the token exist
    // and remember authorization is the key and token is the value
    if ( req.headers.authorization && req.headers.authorization.startsWith( 'Bearer' ) ) {

        // if the token exist then let's use a try catch block below
        try {

            // first, let's get the token value and we only want the token value and not the
            // " Bearer " so let's use the split method to divide the token into 2 parts and
            // then grab the second part or the token value
            const token = req.headers.authorization.split( ' ' )[ 1 ];

            // let's use jwt.verify(); to decode the token and remember the decodedToken will
            // be an object like the following:
            // " { id: '5ff504545a6a66457f0b0705', iat: 1612209066, exp: 1614801066 } "
            const decodedToken = jwt.verify( token, process.env.JWT_SECRET );

            // now let's find the user by id or decodedToken.id and then save this user to
            // req.user and we will have access to req.user in all of our protected routes
            // and remember req.user contains all the information for the current user
            req.user = await User.findById( decodedToken.id ).select( '-password' );

            next();

        } catch ( error ) {

            // if we were not able to decode the token in the try block above or we have a bad
            // token then let's do the following:
            console.error( error );

            // remember 401 " indicates that the request has not been applied because it
            // lacks valid authentication credentials for the target resource "
            res.status( 401 );

            throw new Error( 'Not authorized, token failed' );

        }

    } // end of the if statement

    // if there is no token then let's do the following:
    else {

        res.status( 401 );

        throw new Error( 'Not authorized, no token' );

    } // end of the else statement

} );


// Middleware Function 2

// admin will be our middleware function and remember to wrap our entire function
// with the express async handler
const admin = asyncHandler( async ( req, res, next ) => {

    // check to make sure the user is logged in with " req.user " and then check and
    // make sure the user is an admin user by using " req.user.isAdmin " and make sure
    // that this evaluates to true
    if ( req.user && req.user.isAdmin ) {

        // if we have a logged in user and the user is an admin user then let's call
        // next(); and move on
        next();

    } // end of the if statement
    
    else {

        // remember 401 " indicates that the request has not been applied because it
        // lacks valid authentication credentials for the target resource "
        // or in other words 401 means " Not Authorized "
        res.status( 401 );

        throw new Error( 'Not authorized as an admin' );

    } // end of the else statement

} ); // end of admin


export { requireAuth, admin };


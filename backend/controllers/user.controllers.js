
/*
// 1 -
// and let's start by copying the first part of the product.controller.js file and then pasting
// the code below and change the contents as needed

// import in express-async-handler
import asyncHandler from 'express-async-handler';
// import in the User model and don't forget the .js extension
import User from '../models/user.model.js';

// in the first route or controller #1, we want to authenticate the user by validating their
// email and password and then we want to send back some data and ultimately we want to send
// back a token that we can save on the client and then we will use that token to access
// protected routes later in the course but in this video we just want to authenticate the
// email and password and in the next video we will start to get into tokens

// 

// CONTROLLER #1
// @desc    - Authenticate the user & get the token
// @route   - POST request to /api/users/login
// @access  - Public route
const authUser = asyncHandler( async( req, res ) => {
    
    // the first thing we will do is get data from the body and remember when we make
    // request in the browser we will send data in the body and we can mimic this in
    // Postman so let's go to Postman and create a new folder in ProShop called
    // " Users & Auth " and then add a request inside this folder and the request
    // name will be " POST /api/users/login " and the request description will be " Authenticate
    // user and get token " and then go to the right side of the page and chose " POST "
    // and in the " Enter request URL " field let's enter " {{URL}}/api/users/login " and
    // then below this field let's select the " Body " tab and then select the " raw "
    // radio field and then select " JSON " in the dropdown menu to the right and then
    // underneath these inputs is a large text field and in this text field let's enter
    // the following ( and remember for authentication we need to authenticate the user's
    // email and password ):
    
    /*
        {
            "email" : "test@example.com",
            "password" : 12345
        }
    */

    // and now let's press the Send button

    // and the result is:

    /*
        "message": "Not Found - /api/users/login",
        "stack": "Error: Not Found - /api/users/login\n    at notFound ...
    */

    // and the reason this is not working is because we haven't set up this route yet but
    // Brad wanted to show us the body data or

    /*
        {
            "email" : "test@example.com",
            "password" : 12345
        }
    */

    // and the way we access this inside this controller is with " req.body " and req.body will
    // give us the data that has been sent in the body but in order for req.body to parse we need
    // to add one piece of middleware or the body parser and we do this in the server.js file
    // and we add " app.use( express.json() ); " and this will allow us to accept json data in the
    // body and now req.body will be able to access req.body.email or req.body.password, etc. and
    // what we will do is destructure the email and password from req.body
    /*
    const { email, password } = req.body;

    // and let's test this out by doing res.send(); below and then hook this route up in the
    // user.routes.js file
    /*
    res.send( {
        email : email,
        password : password 
    } );
    */


    // 2 -
    // let's comment out res.send(); above and let's authenticate the email by finding the
    // user document in the database with the destructured email from above and if we find
    // the user document in the database with an email that matches the email above then we
    // know that we have a valid and authenticated email
    /*
    const user = await User.findOne( { email : email } );

    // now let's check and see if the user exists but first let's authenticate the password
    // from above and remember what we are sending in this example is a plain text password
    // but the password that is in the database is encrypted and therefore we need to use
    // bcrypt on our plain text password and let's do that in the User model so let's go to
    // the user.model.js 1 - file now

    // End of 2 -


    // 3 -
    // coming from the user.model.js 1 - file

    // now let's check to see if the user exists and is the user exists then the " user "
    // is true and this means that we were able to find an email match in the database or
    // an email in the database that matches " body.email " and then we want to retrieve the
    // corresponding user document and save that user document to the const " user "
    
    // and then check to see if we were able to find a password match in the database or a
    // password in the database that matches " body.password " and we can check to see if the
    // passwords match by doing " user.matchPassword( password ) " and if this evaluates to true
    // then we know we have a password match  

    if ( user && ( await user.matchPassword( password ) ) ) {

        // ==============================
        // Emails match
        // ==============================

        // and

        // ==============================
        // Passwords match
        // ==============================

        // now that the emails and passwords match, let's return an object as the server
        // response and use the json data transfer format

        // and since we haven't added the token functionality yet we'll just set the token
        // equal to null for now
        res.json(

            {
                _id     : user._id,
                name    : user.name,
                email   : user.email,
                isAdmin : user.isAdmin,
                token   : null
            }

        );
    
    }

    // if the emails don't match or the passwords don't match or both the emails and the
    // passwords don't match then we'll send back a response with a status code of 401 and 401
    // means " indicates that the request has not been applied because it lacks valid
    // authentication credentials for the target resource. " and then we'll throw an error
    // that says " Invalid email and / or password "
    else {

        // ==============================
        // Emails don't match
        // ==============================

        // and / or

        // ==============================
        // Passwords don't match
        // ==============================

        res.status( 401 );

        throw new Error( 'Invalid email and / or password' );

    }

    // now let's go back to Postman and if we make a POST request to the route
    // " {{URL}}/api/users/login " using bpdy / raw / json and the request is:

    /*
        {
            "email"    : "test@example.com",
            "password" : "12345"
        }
    */

    // then the response we get back in Postman at the bottom of the page is:
    
    /*
        "message": "Invalid email and / or password",
        "stack": "Error: Invalid email and / or password\n    at file:///Applications/MAMP/...
    */

    // and this is correct so everything is working as expected

    // and remember we inserted 3 users into the database in the user.js file and one of the
    // users was:

    /*
        {
            name     : 'John Doe',
            email    : 'john@example.com',
            password : bcrypt.hashSync( '123456', 10 )
            // and we can get rid of isAdmin because this is false by default
            // isAdmin : false
        },
    */

    // so if we submit a request with a valid email and password from the database or submit
    // a request with the email and password credentials from above or: 

    /*
        {
            "email"    : "john@example.com",
            "password" : "123456"
        }
    */

    // then the response we get back in Postman at the bottom of the page is:

    /*
        Status: 200 OK

        {
            "_id"     : "5ff504545a6a66457f0b0705",
            "name"    : "John Doe",
            "email"   : "john@example.com",
            "isAdmin" : false,
            "token"   : null
        }
    */

    // and this is correct so everything is working as expected  

    // so the authentication is working which is great

    // and we were able to authenticate with an email and password

    // and remember to save this route and request in Postman under the Users & Auth folder
    
    // the next step is to generate a token so that we can access some private routes and we will
    // need to create our own authentication middleware so that we can create private routes

    // End of 3 -

/*
} );


export { authUser };

// and now let's go to the user.routes.js 1 - file


// End of 1 -
*/
























// ===============================























// at the beginning of lecture 38, given all the notes, I created a new file below without
// the notes so we are starting fresh

/*
// import in express-async-handler
import asyncHandler from 'express-async-handler';
// import in the User model and don't forget the .js extension
import User from '../models/user.model.js';
// import in the generateToken function and don't forget the .js extension
import generateToken from '../utils/generateToken.js';

// in the first route or controller #1, we want to authenticate the user by validating their
// email and password and then we want to send back some data and ultimately we want to send
// back a token that we can save on the client and then we will use that token to access
// protected routes later in the course

// CONTROLLER #1
// @desc    - Authenticate the user & get the token
// @route   - POST request to /api/users/login
// @access  - Public route
const authUser = asyncHandler( async( req, res ) => {

    // destructure the email and password from req.body
    const { email, password } = req.body;

    // if we find the user document in the database with an email that matches the email above
    // then we know that the user entered a valid email

    // and then we want to retrieve the corresponding user document and save that user document
    // to the const " user "
    const user = await User.findOne( { email : email } );

    // now let's check to see if the user exists and is the user exists then the " user "
    // is true and this means that we were able to find an email match in the database or
    // an email in the database that matches " body.email "
    
    // and then check to see if we were able to find a password match in the database or a
    // password in the database that matches " body.password " and we can check to see if the
    // passwords match by using the matchPassword(); method from the user.model.js file or
    // " user.matchPassword( password ) " and if this evaluates to true then we know we have
    // a password match
    if ( user && ( await user.matchPassword( password ) ) ) {


        // 2 -
        // and we want to replace the " token : null " with the actual token value and let's
        // create a new folder called " utils " and then inside the utils folder let's create
        // a file called " generateToken.js " and let's go to that file now

        // End of 2 -

        // 3 -
        // coming from the generateToken.js 1 - file
        // let's import in the generateToken function above and then set " token " below to
        // equal " generateToken( user._id ) " and now token below will equal a jwt that has
        // a payload that is equal to the user._id and a secret that is stored in our .env file
        // and an options object that has the following key value pair " expiresIn : '30d' "
        
        // so now as part of the server reponse we are sending to the browser a json web token
        
        // now let's test this out in Postman and let's set the following in Postman:
        
        // Line 1 - " POST   {{URL}}/api/users/login   Send button "
        // Line 2 - " { "email": "john@example.com", "password": "123456" } "

        // and the result in Postman at the bottom of the page is:

        /*
            {
                "_id": "5ff504545a6a66457f0b0705",
                "name": "John Doe",
                "email": "john@example.com",
                "isAdmin": false,
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZjUwNDU0NW
                E2YTY2NDU3ZjBiMDcwNSIsImlhdCI6MTYxMjA1NTk1MywiZXhwIjoxNjE0NjQ3OTUzfQ.hrz
                AYR4vPvsV0C3gCSLik6cwyEjysQGzHV5QoNq1g6E"
            }
        */
        
        // and this is correct so everything is working as expected

        // and we see that our token has 3 parts: the header, payload and signature

        // and once we set up our auth middleware we will be able to use this token to validate
        // the user and access protected routes 

        // End of 3 -


        // ==============================
        // Emails match
        // ==============================

        // and

        // ==============================
        // Passwords match
        // ==============================

        // now that the emails and passwords match, let's return an object as the server
        // response and use the json data transfer format
        /*
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

    // if the emails don't match or the passwords don't match or both the emails and the
    // passwords don't match then we'll send back a response with a status code of 401 and 401
    // " indicates that the request has not been applied because it lacks valid
    // authentication credentials for the target resource. " and then we'll throw an error
    // that says " Invalid email and / or password "
    else {

        // ==============================
        // Emails don't match
        // ==============================

        // and / or

        // ==============================
        // Passwords don't match
        // ==============================

        res.status( 401 );

        throw new Error( 'Invalid email and / or password' );

    }

} );


export { authUser };
*/


























// ===============================


























// at the beginning of lecture 40, given all the notes, I created a new file below without
// the notes so we are starting fresh

/*
// import in express-async-handler
import asyncHandler from 'express-async-handler';
// import in the User model and don't forget the .js extension
import User from '../models/user.model.js';
// import in the generateToken function and don't forget the .js extension
import generateToken from '../utils/generateToken.js';

// in the first route or controller #1, we want to authenticate the user by validating their
// email and password and then we want to send back some data and ultimately we want to send
// back a token that we can save on the client and then we will use that token to access
// protected routes later in the course

// CONTROLLER #1
// @desc    - Authenticate the user & get the token
// @route   - POST request to /api/users/login
// @access  - Public route
const authUser = asyncHandler( async( req, res ) => {

    // destructure the email and password from req.body
    const { email, password } = req.body;

    // if we find the user document in the database with an email that matches the email above
    // then we know that the user entered a valid email

    // and then we want to retrieve the corresponding user document and save that user document
    // to the const " user "
    const user = await User.findOne( { email : email } );

    // now let's check to see if the user exists and is the user exists then the " user "
    // is true and this means that we were able to find an email match in the database or
    // an email in the database that matches " body.email "
    
    // and then check to see if we were able to find a password match in the database or a
    // password in the database that matches " body.password " and we can check to see if the
    // passwords match by using the matchPassword(); method from the user.model.js file or
    // " user.matchPassword( password ) " and if this evaluates to true then we know we have
    // a password match
    if ( user && ( await user.matchPassword( password ) ) ) {

        // set token below to equal " generateToken( user._id ) " and now the token will
        // equal a jwt that has a payload of user._id and a secret that is stored in
        // our .env file and an options object that has the following key value pair
        // " expiresIn : '30d' "

        // ==============================
        // Emails match
        // ==============================

        // and

        // ==============================
        // Passwords match
        // ==============================

        // now that the emails and passwords match, let's return an object as the server
        // response and use the json data transfer format
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

    // if the emails don't match or the passwords don't match or both the emails and the
    // passwords don't match then we'll send back a response with a status code of 401 and 401
    // " indicates that the request has not been applied because it lacks valid
    // authentication credentials for the target resource. " and then we'll throw an error
    // that says " Invalid email and / or password "
    else {

        // ==============================
        // Emails don't match
        // ==============================

        // and / or

        // ==============================
        // Passwords don't match
        // ==============================

        res.status( 401 );

        throw new Error( 'Invalid email and / or password' );

    }

} );


// 4 -
// CONTROLLER #2
// @desc    - GET user profile
// @route   - GET request to /api/users/profile
// @access  - Private route
const userGetProfile = asyncHandler( async( req, res ) => {

    // 5 -
    // coming from the auth.middleware.js 2 - file

    // let's use req.user or the user document from the auth.middleware.js file to
    // get the user document for the current or logged in user
    const user = await User.findById( req.user._id );

    // now let's check for the user and make sure the user exist
    if ( user ) {

        // if we find the user document or the user then let's return the following
        // information for the logged in user:
        res.json(

            {
                _id     : user._id,
                name    : user.name,
                email   : user.email,
                isAdmin : user.isAdmin
            }

        );

        // let's test this out by going back to Postman and set the following in Postman:

        // Line 1 - " GET   {{URL}}/api/users/profile   Send button "
        // Line 2 - Headers
        // Line 3 - Key / Value / Description ( categories under Headers )
        // Line 4 - Authorization for Key / Bearer **space** and then the token value for
        // Value
        
        // and remember the token value in Line 4 above is the token value we got when we
        // simulated a log in request in Postman by doing the following:

        // Line 1 - " POST   {{URL}}/api/users/login   Send button "
        // Line 2 ( body / raw / json ) -
        // " { "email": "john@example.com", "password": "123456" } "

        // and the result at the bottom of the page in Postman is:

        /*
            {
                "_id": "5ff504545a6a66457f0b0705",
                "name": "John Doe",
                "email": "john@example.com",
                "isAdmin": false,
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZjUwNDU0NW
                E2YTY2NDU3ZjBiMDcwNSIsImlhdCI6MTYxMjIwOTA2NiwiZXhwIjoxNjE0ODAxMDY2fQ.ck
                PVeQTPuvnqdTRLH647IenPXH9paPVbTRh-N26TTaU"
            }
        */

        // so now let's get the user's profile by using the token value above and do the
        // following in Postman:

        // Line 1 - " GET   {{URL}}/api/users/profile   Send button "
        // Line 2 - Headers
        // Line 3 - Key / Value / Description ( categories under Headers )
        // Line 4 - Authorization for Key / Bearer **space** and then the token value for
        // Value / Description is blank

        // and the result at the bottom of the page in Postman is ( and we should get the user's
        // _id, name, email and isAdmin values ):

        /*
           {
                "_id": "5ff504545a6a66457f0b0705",
                "name": "John Doe",
                "email": "john@example.com",
                "isAdmin": false
            }
        */

        // and this is correct so everything is working as expected

        // now let's log in with a different user and try this again and let's do the following
        // in Postman:

        // Line 1 - " POST   {{URL}}/api/users/login   Send button "
        // Line 2 ( body / raw / json ) -
        // " { "email": "admin@example.com", "password": "123456" } "

        // and the result at the bottom of the page in Postman is:

        /*
            {
                "_id": "5ff504545a6a66457f0b0704",
                "name": "Admin User",
                "email": "admin@example.com",
                "isAdmin": true,
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZjUwNDU0NWE2YT
                Y2NDU3ZjBiMDcwNCIsImlhdCI6MTYxMjg5MTk5MSwiZXhwIjoxNjE1NDgzOTkxfQ._LApY9BQ
                HCYByQ65Zab3zyD3koaYSxN50M1Yda3QOMU"
            }
        */

        // now let's copy the token above and paste it in Line 4 below and do the following
        // in Postman:

        // Line 1 - " GET   {{URL}}/api/users/profile   Send button "
        // Line 2 - Headers
        // Line 3 - Key / Value / Description ( categories under Headers )
        // Line 4 - Authorization for Key / Bearer **space** and then the token value for
        // Value / Description is blank

        // and the result at the bottom of the page in Postman is ( and we should get the user's
        // _id, name, email and isAdmin values ):

        /*
           {
                "_id": "5ff504545a6a66457f0b0704",
                "name": "Admin User",
                "email": "admin@example.com",
                "isAdmin": true
            }
        */

        // and this is correct so everything is working as expected

        // in the next video, we will learn how to save the token value when we log in or simulate
        // a log in request in Postman so that we don't have to keep copying and pasting the
        // token value 

    /*
    } else {

        // if we can't find the user document then let's do the following:
        res.status( 404 );

        throw new Error( 'User not found' );

    }

    // End of 5 -

} );

// let's now go to the user.routes.js 2 - file

// End of 4 -


export { authUser, userGetProfile };
*/
























// ===============================

























/*
// at the beginning of lecture 40, given all the notes, I created a new file below without
// the notes so we are starting fresh


// import in express-async-handler
import asyncHandler from 'express-async-handler';
// import in the User model and don't forget the .js extension
import User from '../models/user.model.js';
// import in the generateToken function and don't forget the .js extension
import generateToken from '../utils/generateToken.js';

// in the first route or controller #1, we want to authenticate the user by validating their
// email and password and then we want to send back some data and ultimately we want to send
// back a token that we can save on the client and then we will use that token to access
// protected routes later in the course

// Controller 1
// @desc    - Authenticate the user & get the token
// @route   - POST request to /api/users/login
// @access  - Public route
const authUser = asyncHandler( async( req, res ) => {

    // destructure the email and password from req.body
    const { email, password } = req.body;

    // if we find the user document in the database with an email that matches the email above
    // then we know that the user entered a valid email

    // and then we want to retrieve the corresponding user document and save that user document
    // to the const " user "
    const user = await User.findOne( { email : email } );

    // now let's check to see if the user exists and is the user exists then the " user "
    // is true and this means that we were able to find an email match in the database or
    // an email in the database that matches " body.email "
    
    // and then check to see if we were able to find a password match in the database or a
    // password in the database that matches " body.password " and we can check to see if the
    // passwords match by using the matchPassword(); method from the user.model.js file or
    // " user.matchPassword( password ) " and if this evaluates to true then we know we have
    // a password match
    if ( user && ( await user.matchPassword( password ) ) ) {

        // set token below to equal " generateToken( user._id ) " and now the token will
        // equal a jwt that has a payload of user._id and a secret that is stored in
        // our .env file and an options object that has the following key value pair
        // " expiresIn : '30d' "

        // ==============================
        // Emails match
        // ==============================

        // and

        // ==============================
        // Passwords match
        // ==============================

        // now that the emails and passwords match, let's return an object as the server
        // response and use the json data transfer format
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

    // if the emails don't match or the passwords don't match or both the emails and the
    // passwords don't match then we'll send back a response with a status code of 401 and 401
    // " indicates that the request has not been applied because it lacks valid
    // authentication credentials for the target resource. " and then we'll throw an error
    // that says " Invalid email and / or password "
    else {

        // ==============================
        // Emails don't match
        // ==============================

        // and / or

        // ==============================
        // Passwords don't match
        // ==============================

        res.status( 401 );

        throw new Error( 'Invalid email and / or password' );

    }

} );


// in controller 2, we want to get the logged in user's information from the database and
// then return this information to the browser as part of the server response

// Controller 2
// @desc    - GET user profile
// @route   - GET request to /api/users/profile
// @access  - Private route
const userGetProfile = asyncHandler( async( req, res ) => {

    // let's use req.user from the auth.middleware.js file to get the user document
    // for the current or logged in user
    const user = await User.findById( req.user._id );

    // now let's check for the user and make sure the user exist
    if ( user ) {

        // if we find the user document or the user then let's return the following
        // information for the logged in user:
        res.json(

            {
                _id     : user._id,
                name    : user.name,
                email   : user.email,
                isAdmin : user.isAdmin
            }

        );

    } else {

        // if we can't find the user or the user does not exist then let's do the following:
        res.status( 404 );

        throw new Error( 'User not found' );

    }

} );


// 5 -

// Controller 3
// @desc    - Register a new user
// @route   - POST request to /api/users
// @access  - Public route
const userRegister = asyncHandler( async( req, res ) => {

    // destructure the name, email and password from req.body
    const { name, email, password } = req.body;

    // if we find the user document in the database with an email that matches the email above
    // then we know that the user entered an email that is already registered

    // let's retrieve the corresponding user document and save that user document to the
    // const " userExists "
    const userExists = await User.findOne( { email : email } );

    // ==============================
    // User already exist
    // ==============================

    // if the user already exists then we want to throw an error
    if ( userExists ) {

        // 400 represents a bad request
        res.status( 400 );

        throw new Error( 'User aleady exists' );

    }

    // ==============================
    // Create a new user document in the database
    // ==============================

    // let's use the create(); method to add a user to the database and add the properties
    // and values that we want to add to the user document in the database and we add these
    // key value pairs in an object that is located inside the create(); method
    const user = await User.create(

        {
            name     : name,
            email    : email,
            password : password
        }

    );

    // if the user was created successfully then do the following
    if ( user ) {

        // ==============================
        // Send the following information back to the browser as part of the server response
        // ==============================

        // 201 means a resource was created and let's send back as part of the server response
        // the following information and remember we are sending back the token as well because
        // we want to authenticate the user as soon as we register the user
        res.status( 201 ).json(

            {
                _id     : user._id,
                name    : user.name,
                email   : user.email,
                isAdmin : user.isAdmin,
                token   : generateToken( user._id )
            }

        );

    } else { // if the user was not created successfully then do the following

        // 400 means the request was bad
        res.status( 400 );

        throw new Error( 'Invalid user data' );

    }
    

} );

// export userRegister
export { authUser, userGetProfile, userRegister };

// now let's go to the user.routes.js 4 - file

// End of 5 -
*/


























// ===============================


























// at the beginning of lecture 40, given all the notes, I created a new file below without
// the notes so we are starting fresh

/*
// import in express-async-handler
import asyncHandler from 'express-async-handler';
// import in the User model and don't forget the .js extension
import User from '../models/user.model.js';
// import in the generateToken function and don't forget the .js extension
import generateToken from '../utils/generateToken.js';

// in the first route or controller #1, we want to authenticate the user by validating their
// email and password and then we want to send back some data and ultimately we want to send
// back a token that we can save on the client and then we will use that token to access
// protected routes later in the course

// Controller 1
// @desc    - Authenticate the user & get the token
// @route   - POST request to /api/users/login
// @access  - Public route
const authUser = asyncHandler( async( req, res ) => {

    // destructure the email and password from req.body
    const { email, password } = req.body;

    // if we find the user document in the database with an email that matches the email above
    // then we know that the user entered a valid email

    // and then we want to retrieve the corresponding user document and save that user document
    // to the const " user "
    const user = await User.findOne( { email : email } );

    // now let's check to see if the user exists and is the user exists then the " user "
    // is true and this means that we were able to find an email match in the database or
    // an email in the database that matches " body.email "
    
    // and then check to see if we were able to find a password match in the database or a
    // password in the database that matches " body.password " and we can check to see if the
    // passwords match by using the matchPassword(); method from the user.model.js file or
    // " user.matchPassword( password ) " and if this evaluates to true then we know we have
    // a password match
    if ( user && ( await user.matchPassword( password ) ) ) {

        // set token below to equal " generateToken( user._id ) " and now the token will
        // equal a jwt that has a payload of user._id and a secret that is stored in
        // our .env file and an options object that has the following key value pair
        // " expiresIn : '30d' "

        // ==============================
        // Emails match
        // ==============================

        // and

        // ==============================
        // Passwords match
        // ==============================

        // now that the emails and passwords match, let's return an object as the server
        // response and use the json data transfer format
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

    // if the emails don't match or the passwords don't match or both the emails and the
    // passwords don't match then we'll send back a response with a status code of 401 and 401
    // " indicates that the request has not been applied because it lacks valid
    // authentication credentials for the target resource. " and then we'll throw an error
    // that says " Invalid email and / or password "
    else {

        // ==============================
        // Emails don't match
        // ==============================

        // and / or

        // ==============================
        // Passwords don't match
        // ==============================

        res.status( 401 );

        throw new Error( 'Invalid email and / or password.' );

    }

} );


// in controller 2, we want to get the logged in user's information from the database and
// then return this information to the browser as part of the server response

// Controller 2
// @desc    - GET user profile
// @route   - GET request to /api/users/profile
// @access  - Private route
const userGetProfile = asyncHandler( async( req, res ) => {

    // let's use req.user from the auth.middleware.js file to get the user document
    // for the current or logged in user
    const user = await User.findById( req.user._id );

    // now let's check for the user and make sure the user exist
    if ( user ) {

        // if we find the user document or the user then let's return the following
        // information for the logged in user:
        res.json(

            {
                _id     : user._id,
                name    : user.name,
                email   : user.email,
                isAdmin : user.isAdmin
            }

        );

    } else {

        // if we can't find the user or the user does not exist then let's do the following:
        res.status( 404 );

        throw new Error( 'User not found' );

    }

} );


// in controller 3, we want to register a new user or create a new user and then save their
// information in the database

// Controller 3
// @desc    - Register or Sign up a new user
// @route   - POST request to /api/users/register
// @access  - Public route
const userRegister = asyncHandler( async( req, res ) => {

    const { name, email, password } = req.body;

    // if we find the user document in the database with an email that matches the email above
    // then we know that the user entered an email that is already registered
    const userExists = await User.findOne( { email : email } );

    // ==============================
    // User already exist
    // ==============================

    // if the user already exists then we want to throw an error
    if ( userExists ) {

        // 400 represents a bad request
        res.status( 400 );

        throw new Error( 'User aleady exists. Please try again.' );

    }

    // ==============================
    // Create a new user document in the database
    // ==============================

    // let's use the create(); method to add a user to the database and add the properties
    // and values that we want to add to the user document in the database
    const user = await User.create(

        {
            name     : name,
            email    : email,
            password : password
        }

    );

    // if the user was created successfully then do the following
    if ( user ) {

        // ==============================
        // Send the following information back to the browser as part of the server response
        // ==============================

        // 201 means a resource was created
        res.status( 201 ).json(

            {
                _id     : user._id,
                name    : user.name,
                email   : user.email,
                isAdmin : user.isAdmin,
                token   : generateToken( user._id )
            }

        );

    } else { // if the user was not created successfully then do the following

        // 400 means the request was bad
        res.status( 400 );

        throw new Error( 'Invalid user data' );

    }
    
} );


//  6 -

// in controller 4, we want to get the update the user's profile 

// logged in user's information from the database and
// then return this information to the browser as part of the server response

// Controller 4
// @desc    - UPDATE user profile
// @route   - PUT request to /api/users/profile
// @access  - Private route
const userUpdateProfile = asyncHandler( async( req, res ) => {

    // get the user by id and we will use req.user from the auth.middleware.js file to get
    // the user document for the logged in user
    const user = await User.findById( req.user._id );

    // now let's check for the user and make sure the user exist
    if ( user ) {

        // if we find the user document or the user then let's update the user's information
        // and we can do that by looking at req.body.key so for example, if the
        // user updates their name we will be able to retrieve the updated name
        // in req.body.name; otherwise, if the user did not make any changes or updates to
        // their name then we will return the name saved in the database or user.name

        // remember the logical OR ( || ) operator is used as follows: " expr1 || expr2 / If
        // expr1 can be converted to true, return expr1; else, return expr2. "
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        // for the password, we first want to check and see if a password was sent in req.body
        // and remember the changed password will be encrypted or hashed before we save it to
        // the database ( see the userSchema.pre(); middleware function in the user.model.js
        // file )
        if ( req.body.password ) {

            user.password = req.body.password

        }

        // ==============================
        // Update the user document in the database
        // ==============================

        // then let's update the user document in the database based on the changes above and
        // then save the updated user document to the const " updatedUser "
        const updatedUser = await user.save();

        // let's return the following to the browser as part of the server response
        res.json(

            {
                _id     : updatedUser._id,
                name    : updatedUser.name,
                email   : updatedUser.email,
                isAdmin : updatedUser.isAdmin,
                token   : generateToken( updatedUser._id )
            }

        );


    } else {

        // if we can't find the user or the user does not exist then let's do the following:
        res.status( 404 );

        throw new Error( 'User not found' );

    }

} );


export { authUser, userGetProfile, userRegister, userUpdateProfile };

// now let's go to the user.routes.js 6 - file


// End of 6 -
*/



























// ===============================

























/*
// at the beginning of lecture 48, given all the notes, I created a new file below without
// the notes so we are starting fresh


// import in express-async-handler
import asyncHandler from 'express-async-handler';
// import in the User model and don't forget the .js extension
import User from '../models/user.model.js';
// import in the generateToken function and don't forget the .js extension
import generateToken from '../utils/generateToken.js';

// in the first route or controller #1, we want to authenticate the user by validating their
// email and password and then we want to send back some data and ultimately we want to send
// back a token that we can save on the client and then we will use that token to access
// protected routes later in the course

// Controller 1
// @desc    - Authenticate the user / Sign in the user & get the token
// @route   - POST request to /api/users/login
// @access  - Public route
const authUser = asyncHandler( async( req, res ) => {

    // destructure the email and password from req.body
    const { email, password } = req.body;

    // if we find the user document in the database with an email that matches the email above
    // then we know that the user entered a valid email

    // and then we want to retrieve the corresponding user document and save that user document
    // to the const " user "
    const user = await User.findOne( { email : email } );

    // now let's check to see if the user exists and is the user exists then the " user "
    // is true and this means that we were able to find an email match in the database or
    // an email in the database that matches " body.email "
    
    // and then check to see if we were able to find a password match in the database or a
    // password in the database that matches " body.password " and we can check to see if the
    // passwords match by using the matchPassword(); method from the user.model.js file or
    // " user.matchPassword( password ) " and if this evaluates to true then we know we have
    // a password match
    if ( user && ( await user.matchPassword( password ) ) ) {

        // set token below to equal " generateToken( user._id ) " and now the token will
        // equal a jwt that has a payload of user._id and a secret that is stored in
        // our .env file and an options object that has the following key value pair
        // " expiresIn : '30d' "

        // ==============================
        // Emails match
        // ==============================

        // and

        // ==============================
        // Passwords match
        // ==============================

        // now that the emails and passwords match, let's return an object as the server
        // response and use the json data transfer format
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

    // if the emails don't match or the passwords don't match or both the emails and the
    // passwords don't match then we'll send back a response with a status code of 401 and 401
    // " indicates that the request has not been applied because it lacks valid
    // authentication credentials for the target resource. " and then we'll throw an error
    // that says " Invalid email and / or password "
    else {

        // ==============================
        // Emails don't match
        // ==============================

        // and / or

        // ==============================
        // Passwords don't match
        // ==============================

        res.status( 401 );

        throw new Error( 'Invalid email and / or password.' );

    }

} );


// in controller 2, we want to register a new user or create a new user and then save their
// information in the database

// Controller 2
// @desc    - Register or Sign up a new user
// @route   - POST request to /api/users/register
// @access  - Public route
const userRegister = asyncHandler( async( req, res ) => {

    const { name, email, password } = req.body;

    // if we find the user document in the database with an email that matches the email above
    // then we know that the user entered an email that is already registered
    const userExists = await User.findOne( { email : email } );

    // ==============================
    // User already exist
    // ==============================

    // if the user already exists then we want to throw an error
    if ( userExists ) {

        // 400 represents a bad request
        res.status( 400 );

        throw new Error( 'User aleady exists. Please try again.' );

    }

    // ==============================
    // Create a new user document in the database
    // ==============================

    // let's use the create(); method to add a user to the database and add the properties
    // and values that we want to add to the user document in the database
    const user = await User.create(

        {
            name     : name,
            email    : email,
            password : password
        }

    );

    // if the user was created successfully then do the following
    if ( user ) {

        // ==============================
        // Send the following information back to the browser as part of the server response
        // ==============================

        // 201 means a resource was created
        res.status( 201 ).json(

            {
                _id     : user._id,
                name    : user.name,
                email   : user.email,
                isAdmin : user.isAdmin,
                token   : generateToken( user._id )
            }

        );

    } else { // if the user was not created successfully then do the following

        // 400 means the request was bad
        res.status( 400 );

        throw new Error( 'Invalid user data' );

    }
    
} );


// in controller 3, we want to get the logged in user's information from the database and
// then return this information to the browser as part of the server response

// Controller 3
// @desc    - GET user profile
// @route   - GET request to /api/users/profile
// @access  - Private route
const userGetProfile = asyncHandler( async( req, res ) => {

    // let's use req.user from the auth.middleware.js file to get the user document
    // for the current or logged in user
    const user = await User.findById( req.user._id );

    // now let's check for the user and make sure the user exist
    if ( user ) {

        // if we find the user document or the user then let's return the following
        // information for the logged in user:
        res.json(

            {
                _id     : user._id,
                name    : user.name,
                email   : user.email,
                isAdmin : user.isAdmin
            }

        );

    } else {

        // if we can't find the user or the user does not exist then let's do the following:
        res.status( 404 );

        throw new Error( 'User not found' );

    }

} );


// in controller 4, we want to get the update the user's profile

// Controller 4
// @desc    - UPDATE user profile
// @route   - PUT request to /api/users/profile
// @access  - Private route
const userUpdateProfile = asyncHandler( async( req, res ) => {

    // get the user by id
    const user = await User.findById( req.user._id );

    // now let's check for the user and make sure the user exist
    if ( user ) {

        // if we find the user document or the user then let's update the user's information
        // and we can do that by looking at req.body.key so for example, if the
        // user updates their name we will be able to retrieve the updated name
        // in req.body.name; otherwise, if the user did not make any changes or updates to
        // their name then we will return the name saved in the database or user.name
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        // for the password, we first want to check and see if a password was sent in req.body
        // and remember the changed password will be encrypted or hashed before we save it to
        // the database ( see the userSchema.pre(); middleware function in the user.model.js
        // file )
        if ( req.body.password ) {

            user.password = req.body.password

        }

        // ==============================
        // Update the user document in the database
        // ==============================

        // then let's update the user document in the database based on the changes above and
        // then save the updated user document to the const " updatedUser "
        const updatedUser = await user.save();

        // let's return the following to the browser as part of the server response
        res.json(

            {
                _id     : updatedUser._id,
                name    : updatedUser.name,
                email   : updatedUser.email,
                isAdmin : updatedUser.isAdmin,
                token   : generateToken( updatedUser._id )
            }

        );


    } else {

        // if we can't find the user or the user does not exist then let's do the following:
        res.status( 404 );

        throw new Error( 'User not found' );

    }

} );


// 7 -

// in controller 5, we want to get the logged in user's information from the database and
// then return this information to the browser as part of the server response

// Controller 5
// @desc    - GET all users
// @route   - GET request to /api/users
// @access  - Private route or Private/Admin
const getUsers = asyncHandler( async( req, res ) => {

    // let's get all users and to do that we will pass in an empty object to the find()
    // method
    const users = await User.find( {} );

    // let's check and make sure users exist
    if ( users ) {

        // and then let's send back to the browser as part of the server response the
        // users array
        res.json( users );

    } else {

        // if we can't find users then let's do the following:
        res.status( 404 );

        throw new Error( 'A list of users was not found' );

    }

} );

// and now let's go to the user.routes.js 7 - file

// End of 7 -


export { 
    authUser,
    userGetProfile,
    userRegister,
    userUpdateProfile,
    getUsers
};
*/


























// ===============================

























/*
// at the beginning of lecture 67, given all the notes, I created a new file below without
// the notes so we are starting fresh


// import in express-async-handler
import asyncHandler from 'express-async-handler';
// import in the User model and don't forget the .js extension
import User from '../models/user.model.js';
// import in the generateToken function and don't forget the .js extension
import generateToken from '../utils/generateToken.js';

// in the first route or controller #1, we want to authenticate the user by validating their
// email and password and then we want to send back some data and ultimately we want to send
// back a token that we can save on the client and then we will use that token to access
// protected routes later in the course


// ==============================
// Controller 1
// ==============================

// Controller 1
// @desc    - Authenticate the user / Sign in the user & get the token
// @route   - POST request to /api/users/login
// @access  - Public route
const authUser = asyncHandler( async( req, res ) => {

    // destructure the email and password from req.body
    const { email, password } = req.body;

    // if we find the user document in the database with an email that matches the email above
    // then we know that the user entered a valid email

    // and then we want to retrieve the corresponding user document and save that user document
    // to the const " user "
    const user = await User.findOne( { email : email } );

    // now let's check to see if the user exists and is the user exists then the " user "
    // is true and this means that we were able to find an email match in the database or
    // an email in the database that matches " body.email "
    
    // and then check to see if we were able to find a password match in the database or a
    // password in the database that matches " body.password " and we can check to see if the
    // passwords match by using the matchPassword(); method from the user.model.js file or
    // " user.matchPassword( password ) " and if this evaluates to true then we know we have
    // a password match
    if ( user && ( await user.matchPassword( password ) ) ) {

        // set token below to equal " generateToken( user._id ) " and now the token will
        // equal a jwt that has a payload of user._id and a secret that is stored in
        // our .env file and an options object that has the following key value pair
        // " expiresIn : '30d' "

        // ==============================
        // Emails match
        // ==============================

        // and

        // ==============================
        // Passwords match
        // ==============================

        // now that the emails and passwords match, let's return an object as the server
        // response and use the json data transfer format
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

    // if the emails don't match or the passwords don't match or both the emails and the
    // passwords don't match then we'll send back a response with a status code of 401 and 401
    // " indicates that the request has not been applied because it lacks valid
    // authentication credentials for the target resource. " and then we'll throw an error
    // that says " Invalid email and / or password "
    else {

        // ==============================
        // Emails don't match
        // ==============================

        // and / or

        // ==============================
        // Passwords don't match
        // ==============================

        res.status( 401 );

        throw new Error( 'Invalid email and / or password.' );

    }

} );


// ==============================
// Controller 2
// ==============================

// in controller 2, we want to register a new user or create a new user and then save their
// information in the database

// Controller 2
// @desc    - Register or Sign up a new user
// @route   - POST request to /api/users/register
// @access  - Public route
const userRegister = asyncHandler( async( req, res ) => {

    const { name, email, password } = req.body;

    // if we find the user document in the database with an email that matches the email above
    // then we know that the user entered an email that is already registered
    const userExists = await User.findOne( { email : email } );

    // ==============================
    // User already exist
    // ==============================

    // if the user already exists then we want to throw an error
    if ( userExists ) {

        // 400 represents a bad request
        res.status( 400 );

        throw new Error( 'User aleady exists. Please try again.' );

    }

    // ==============================
    // Create a new user document in the database
    // ==============================

    // let's use the create(); method to add a user to the database and add the properties
    // and values that we want to add to the user document in the database
    const user = await User.create(

        {
            name     : name,
            email    : email,
            password : password
        }

    );

    // if the user was created successfully then do the following
    if ( user ) {

        // ==============================
        // Send the following information back to the browser as part of the server response
        // ==============================

        // 201 means a resource was created
        res.status( 201 ).json(

            {
                _id     : user._id,
                name    : user.name,
                email   : user.email,
                isAdmin : user.isAdmin,
                token   : generateToken( user._id )
            }

        );

    } else { // if the user was not created successfully then do the following

        // 400 means the request was bad
        res.status( 400 );

        throw new Error( 'Invalid user data' );

    }
    
} );


// ==============================
// Controller 3
// ==============================

// in controller 3, we want to get the logged in user's information from the database and
// then return this information to the browser as part of the server response

// Controller 3
// @desc    - GET user profile
// @route   - GET request to /api/users/profile
// @access  - Private route
const userGetProfile = asyncHandler( async( req, res ) => {

    // let's use req.user from the auth.middleware.js file to get the user document
    // for the current or logged in user
    const user = await User.findById( req.user._id );

    // now let's check for the user and make sure the user exist
    if ( user ) {

        // if we find the user document or the user then let's return the following
        // information for the logged in user:
        res.json(

            {
                _id     : user._id,
                name    : user.name,
                email   : user.email,
                isAdmin : user.isAdmin
            }

        );

    } else {

        // if we can't find the user or the user does not exist then let's do the following:
        res.status( 404 );

        throw new Error( 'User not found' );

    }

} );


// ==============================
// Controller 4
// ==============================

// in controller 4, we want to get the update the user's profile

// Controller 4
// @desc    - UPDATE user profile
// @route   - PUT request to /api/users/profile
// @access  - Private route
const userUpdateProfile = asyncHandler( async( req, res ) => {

    // get the user by id
    const user = await User.findById( req.user._id );

    // now let's check for the user and make sure the user exist
    if ( user ) {

        // if we find the user document or the user then let's update the user's information
        // and we can do that by looking at req.body.key so for example, if the
        // user updates their name we will be able to retrieve the updated name
        // in req.body.name; otherwise, if the user did not make any changes or updates to
        // their name then we will return the name saved in the database or user.name
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        // for the password, we first want to check and see if a password was sent in req.body
        // and remember the changed password will be encrypted or hashed before we save it to
        // the database ( see the userSchema.pre(); middleware function in the user.model.js
        // file )
        if ( req.body.password ) {

            user.password = req.body.password

        }

        // ==============================
        // Update the user document in the database
        // ==============================

        // then let's update the user document in the database based on the changes above and
        // then save the updated user document to the const " updatedUser "
        const updatedUser = await user.save();

        // let's return the following to the browser as part of the server response
        res.json(

            {
                _id     : updatedUser._id,
                name    : updatedUser.name,
                email   : updatedUser.email,
                isAdmin : updatedUser.isAdmin,
                token   : generateToken( updatedUser._id )
            }

        );


    } else {

        // if we can't find the user or the user does not exist then let's do the following:
        res.status( 404 );

        throw new Error( 'User not found' );

    }

} );


// ==============================
// Controller 5
// ==============================

// in controller 5, we want to get a list of all the users from the database and then return
// this information to the browser as part of the server response

// Controller 5
// @desc    - GET all users
// @route   - GET request to /api/users
// @access  - Private route and Admin route
const getUsers = asyncHandler( async( req, res ) => {

    // let's get all users and to do that we will pass in an empty object to the find()
    // method
    const users = await User.find( {} );

    // let's check and make sure users exist
    if ( users ) {

        // and then let's send back to the browser as part of the server response the
        // users array
        res.json( users );

    } else {

        // if we can't find users then let's do the following:
        res.status( 404 );

        throw new Error( 'A list of users was not found' );

    }

} );


// 8 -

// ==============================
// Controller 6
// ==============================

// in controller 6, we want to delete a user from the database and then return a new user
// list to the browser as part of the server response

// Controller 6
// @desc    - DELETE a user
// @route   - DELETE request to /api/users/:id
// @access  - Private route and Admin route
const deleteUser = asyncHandler( async( req, res ) => {

    // first let's find the specified user by id
    const userToDelete = await User.findById( req.params.id );
    
    // check and make sure userToDelete exist
    if ( userToDelete ) {

        // delete the specified user from the database
        userToDelete.remove();

        // just send a message and we will use this message in Postman to detemine whether
        // or not our backend is working but we will not use this message in the frontend
        res.json( { message : 'User deleted from the database' } );

    } else {

        // if we can't find userToDelete then let's do the following:
        res.status( 404 );

        throw new Error( 'User not found' );

    }

} ); // end of deleteUser

// now let's go to the user.routes.js 7 - file

// End of 8 -



// 9 -

// ==============================
// Controller 7
// ==============================

// in controller 7, we want to delete a user from the database and then return a new user
// list to the browser as part of the server response

// Controller 7
// @desc    - DELETE a user
// @route   - DELETE request to /api/users/:id
// @access  - Private route and Admin route
const deleteUser = asyncHandler( async( req, res ) => {

    // first let's find the specified user by id
    const userToDelete = await User.findById( req.params.id );
    
    // check and make sure userToDelete exist
    if ( userToDelete ) {

        // delete the specified user from the database
        userToDelete.remove();

        // just send a message and we will use this message in Postman to detemine whether
        // or not our backend is working but we will not use this message in the frontend
        res.json( { message : 'User deleted from the database' } );

    } else {

        // if we can't find userToDelete then let's do the following:
        res.status( 404 );

        throw new Error( 'User not found' );

    }

} ); // end of deleteUser

// now let's go to the user.routes.js 8 - file

// End of 9 -




export { 
    authUser,
    userGetProfile,
    userRegister,
    userUpdateProfile,
    getUsers,
    deleteUser
};
*/
























// ===============================
























/*
// at the beginning of lecture 70, given all the notes, I created a new file below without
// the notes so we are starting fresh


// import in express-async-handler
import asyncHandler from 'express-async-handler';
// import in the User model and don't forget the .js extension
import User from '../models/user.model.js';
// import in the generateToken function and don't forget the .js extension
import generateToken from '../utils/generateToken.js';

// in the first route or controller #1, we want to authenticate the user by validating their
// email and password and then we want to send back some data and ultimately we want to send
// back a token that we can save on the client and then we will use that token to access
// protected routes later in the course


// ==============================
// Controller 1
// ==============================

// Controller 1
// @desc    - Authenticate the user / Sign in the user & get the token
// @route   - POST request to /api/users/login
// @access  - Public route
const authUser = asyncHandler( async( req, res ) => {

    // destructure the email and password from req.body
    const { email, password } = req.body;

    // if we find the user document in the database with an email that matches the email above
    // then we know that the user entered a valid email

    // and then we want to retrieve the corresponding user document and save that user document
    // to the const " user "
    const user = await User.findOne( { email : email } );

    // now let's check to see if the user exists and is the user exists then the " user "
    // is true and this means that we were able to find an email match in the database or
    // an email in the database that matches " body.email "
    
    // and then check to see if we were able to find a password match in the database or a
    // password in the database that matches " body.password " and we can check to see if the
    // passwords match by using the matchPassword(); method from the user.model.js file or
    // " user.matchPassword( password ) " and if this evaluates to true then we know we have
    // a password match
    if ( user && ( await user.matchPassword( password ) ) ) {

        // set token below to equal " generateToken( user._id ) " and now the token will
        // equal a jwt that has a payload of user._id and a secret that is stored in
        // our .env file and an options object that has the following key value pair
        // " expiresIn : '30d' "

        // ==============================
        // Emails match
        // ==============================

        // and

        // ==============================
        // Passwords match
        // ==============================

        // now that the emails and passwords match, let's return an object as the server
        // response and use the json data transfer format
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

    // if the emails don't match or the passwords don't match or both the emails and the
    // passwords don't match then we'll send back a response with a status code of 401 and 401
    // " indicates that the request has not been applied because it lacks valid
    // authentication credentials for the target resource. " and then we'll throw an error
    // that says " Invalid email and / or password "
    else {

        // ==============================
        // Emails don't match
        // ==============================

        // and / or

        // ==============================
        // Passwords don't match
        // ==============================

        res.status( 401 );

        throw new Error( 'Invalid email and / or password.' );

    }

} );


// ==============================
// Controller 2
// ==============================

// in controller 2, we want to register a new user or create a new user and then save their
// information in the database

// Controller 2
// @desc    - Register or Sign up a new user
// @route   - POST request to /api/users/register
// @access  - Public route
const userRegister = asyncHandler( async( req, res ) => {

    const { name, email, password } = req.body;

    // if we find the user document in the database with an email that matches the email above
    // then we know that the user entered an email that is already registered
    const userExists = await User.findOne( { email : email } );

    // ==============================
    // User already exist
    // ==============================

    // if the user already exists then we want to throw an error
    if ( userExists ) {

        // 400 represents a bad request
        res.status( 400 );

        throw new Error( 'User aleady exists. Please try again.' );

    }

    // ==============================
    // Create a new user document in the database
    // ==============================

    // let's use the create(); method to add a user to the database and add the properties
    // and values that we want to add to the user document in the database
    const user = await User.create(

        {
            name     : name,
            email    : email,
            password : password
        }

    );

    // if the user was created successfully then do the following
    if ( user ) {

        // ==============================
        // Send the following information back to the browser as part of the server response
        // ==============================

        // 201 means a resource was created
        res.status( 201 ).json(

            {
                _id     : user._id,
                name    : user.name,
                email   : user.email,
                isAdmin : user.isAdmin,
                token   : generateToken( user._id )
            }

        );

    } else { // if the user was not created successfully then do the following

        // 400 means the request was bad
        res.status( 400 );

        throw new Error( 'Invalid user data' );

    }
    
} );


// ==============================
// Controller 3
// ==============================

// in controller 3, we want to get the logged in user's information from the database and
// then return this information to the browser as part of the server response

// Controller 3
// @desc    - GET user profile
// @route   - GET request to /api/users/profile
// @access  - Private route
const userGetProfile = asyncHandler( async( req, res ) => {

    // let's use req.user from the auth.middleware.js file to get the user document
    // for the current or logged in user
    const user = await User.findById( req.user._id );

    // now let's check for the user and make sure the user exist
    if ( user ) {

        // if we find the user document or the user then let's return the following
        // information for the logged in user:
        res.json(

            {
                _id     : user._id,
                name    : user.name,
                email   : user.email,
                isAdmin : user.isAdmin
            }

        );

    } else {

        // if we can't find the user or the user does not exist then let's do the following:
        res.status( 404 );

        throw new Error( 'User not found' );

    }

} );


// ==============================
// Controller 4
// ==============================

// in controller 4, we want to get the update the user's profile

// Controller 4
// @desc    - UPDATE user profile
// @route   - PUT request to /api/users/profile
// @access  - Private route
const userUpdateProfile = asyncHandler( async( req, res ) => {

    // let's use req.user from the auth.middleware.js file to get the user document
    // for the current or logged in user
    const user = await User.findById( req.user._id );

    // now let's check for the user and make sure the user exist
    if ( user ) {

        // if we find the user document or the user then let's update the user's information
        // and we can do that by looking at req.body.key so for example, if the
        // user updates their name we will be able to retrieve the updated name
        // in req.body.name; otherwise, if the user did not make any changes or updates to
        // their name then we will return the name saved in the database or user.name
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        // for the password, we first want to check and see if a password was sent in req.body
        // and remember the changed password will be encrypted or hashed before we save it to
        // the database ( see the userSchema.pre(); middleware function in the user.model.js
        // file )
        if ( req.body.password ) {

            user.password = req.body.password

        }

        // ==============================
        // Update the user document in the database
        // ==============================

        // then let's update the user document in the database based on the changes above and
        // then save the updated user document to the const " updatedUser "
        const updatedUser = await user.save();

        // let's return the following to the browser as part of the server response
        res.json(

            {
                _id     : updatedUser._id,
                name    : updatedUser.name,
                email   : updatedUser.email,
                isAdmin : updatedUser.isAdmin,
                token   : generateToken( updatedUser._id )
            }

        );


    } else {

        // if we can't find the user or the user does not exist then let's do the following:
        res.status( 404 );

        throw new Error( 'User not found' );

    }

} );


// ==============================
// Controller 5
// ==============================

// in controller 5, we want to get a list of all the users from the database and then return
// this information to the browser as part of the server response

// Controller 5
// @desc    - GET all users
// @route   - GET request to /api/users
// @access  - Private route and Admin route
const getUsers = asyncHandler( async( req, res ) => {

    // let's get all users and to do that we will pass in an empty object to the find()
    // method
    const users = await User.find( {} );

    // let's check and make sure users exist
    if ( users ) {

        // and then let's send back to the browser as part of the server response the
        // users array
        res.json( users );

    } else {

        // if we can't find users then let's do the following:
        res.status( 404 );

        throw new Error( 'A list of users was not found' );

    }

} );


// ==============================
// Controller 6
// ==============================

// in controller 6, we want to delete a user from the database and then return a message

// Controller 6
// @desc    - DELETE a user
// @route   - DELETE request to /api/users/:id
// @access  - Private route and Admin route
const deleteUser = asyncHandler( async( req, res ) => {

    // first let's find the specified user by id

    // and remember req.user._id will find the user that is logged in but what we want
    // here is the user that the admin wants to delete and we get that user by looking for the
    // user's id in the URL
    const userToDelete = await User.findById( req.params.id );
    
    // check and make sure userToDelete exist
    if ( userToDelete ) {

        // delete the specified user from the database
        userToDelete.remove();

        // just send a message and we will use this message in Postman to detemine whether
        // or not our backend is working but we will not use this message in the frontend
        res.json( { message : 'User deleted from the database' } );

    } else {

        // if we can't find userToDelete then let's do the following:
        res.status( 404 );

        throw new Error( 'User not found' );

    }

} ); // end of deleteUser


// 9 -

// ==============================
// Controller 7
// ==============================

// in controller 7, we want to edit a user and to do that we first need to get the user
// and then return that user to the browser as part of the server response

// in controller 8, we will update the user details and then save these updates to the
// database

// Controller 7
// @desc    - GET a user by id
// @route   - GET request to /api/users/:id
// @access  - Private route and Admin route
const getUserById = asyncHandler( async( req, res ) => {

    // first let's find the specified user by id and use req.params.id and this will be
    // the id in the URL

    // and remember req.user._id will find the user that is logged in but what we want
    // here is the user that the admin wants to edit and we get that user by looking for the
    // user's id in the URL

    // we will send back the user object less the password
    const user = await User.findById( req.params.id ).select( '-password' );

    // check and make sure the user exist
    if ( user ) {

        // if we find the user document then let's return the user object to the browser
        // as part of the server response
        res.json( user );

    } else {

        // if we can't find the user or the user does not exist then let's do the following:
        res.status( 404 );

        throw new Error( 'User not found' );

    }

} ); // end of getUserById


// ==============================
// Controller 8
// ==============================

// in controller 8, we want to give the admin the ability to update the user's profile
// in the database and remember controller 7 and controller 8 work together to add
// admin edit functionality to the admin edit screen

// Controller 8
// @desc    - UPDATE user
// @route   - PUT request to /api/users/:id
// @access  - Private route and Admin route
const updateUser = asyncHandler( async( req, res ) => {

    // first let's find the specified user by id and use req.params.id and this will be
    // the id in the URL

    // and remember req.user._id will find the user that is logged in but what we want
    // here is the user that the admin wants to edit and update and we get that user by
    // looking for the user's id in the URL
    const user = await User.findById( req.params.id );

    // check and make sure the user exist
    if ( user ) {

        // if we find the user document then let's update the user's information
        // and we can do that by looking at req.body.key so for example, if the
        // user updates their name we will be able to retrieve the updated name
        // in req.body.name; otherwise, if the user did not make any changes or updates to
        // their name then we will return the name saved in the database or user.name
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email

        // remember, from MDN: Line 1 => " expr1 || expr2 "
        // Line 2 => " If expr1 can be converted to true, return expr1; else, return expr2 "

        // for isAdmin, we just want to return true or false as selected by the admin and by doing
        // " user.isAdmin = req.body.isAdmin || user.isAdmin " we are saying that if req.body.isAdmin
        // is false then use user.isAdmin so technically we would not be able to update isAdmin
        // to false so let's have the admin select true or false for each edited user and then save
        // that value to the database
        user.isAdmin = req.body.isAdmin

        // ==============================
        // Update the user document in the database
        // ==============================

        // then let's update the user document in the database based on the changes above and
        // then save the updated user document to the const " updatedUser "
        const updatedUser = await user.save();

        // let's return the following to the browser as part of the server response
        res.json(

            {
                _id     : updatedUser._id,
                name    : updatedUser.name,
                email   : updatedUser.email,
                isAdmin : updatedUser.isAdmin
            }

        );

    } else {

        // if we can't find the user or the user does not exist then let's do the following:
        res.status( 404 );

        throw new Error( 'User not found' );

    }

} ); // end of updateUserById

// now let's go to the user.routes.js 8 - file

// End of 9 -


export { 
    authUser,
    userGetProfile,
    userRegister,
    userUpdateProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser
};
*/























// ===============================

























// at the beginning of lecture 71, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in express-async-handler
import asyncHandler from 'express-async-handler';
// import in the User model and don't forget the .js extension
import User from '../models/user.model.js';
// import in the generateToken function and don't forget the .js extension
import generateToken from '../utils/generateToken.js';

// in the first route or controller #1, we want to authenticate the user by validating their
// email and password and then we want to send back some data and ultimately we want to send
// back a token that we can save on the client and then we will use that token to access
// protected routes later in the course


// ==============================
// Controller 1
// ==============================

// Controller 1
// @desc    - Authenticate the user / Sign in the user & get the token
// @route   - POST request to /api/users/login
// @access  - Public route
const authUser = asyncHandler( async( req, res ) => {

    // destructure the email and password from req.body
    const { email, password } = req.body;

    // if we find the user document in the database with an email that matches the email above
    // then we know that the user entered a valid email

    // and then we want to retrieve the corresponding user document and save that user document
    // to the const " user "
    const user = await User.findOne( { email : email } );

    // now let's check to see if the user exists and is the user exists then the " user "
    // is true and this means that we were able to find an email match in the database or
    // an email in the database that matches " body.email "
    
    // and then check to see if we were able to find a password match in the database or a
    // password in the database that matches " body.password " and we can check to see if the
    // passwords match by using the matchPassword(); method from the user.model.js file or
    // " user.matchPassword( password ) " and if this evaluates to true then we know we have
    // a password match
    if ( user && ( await user.matchPassword( password ) ) ) {

        // set token below to equal " generateToken( user._id ) " and now the token will
        // equal a jwt that has a payload of user._id and a secret that is stored in
        // our .env file and an options object that has the following key value pair
        // " expiresIn : '30d' "

        // ==============================
        // Emails match
        // ==============================

        // and

        // ==============================
        // Passwords match
        // ==============================

        // now that the emails and passwords match, let's return an object as the server
        // response and use the json data transfer format
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

    // if the emails don't match or the passwords don't match or both the emails and the
    // passwords don't match then we'll send back a response with a status code of 401 and 401
    // " indicates that the request has not been applied because it lacks valid
    // authentication credentials for the target resource. " and then we'll throw an error
    // that says " Invalid email and / or password "
    else {

        // ==============================
        // Emails don't match
        // ==============================

        // and / or

        // ==============================
        // Passwords don't match
        // ==============================

        res.status( 401 );

        throw new Error( 'Invalid email and / or password.' );

    }

} );


// ==============================
// Controller 2
// ==============================

// in controller 2, we want to register a new user or create a new user and then save their
// information in the database

// Controller 2
// @desc    - Register or sign up a new user
// @route   - POST request to /api/users
// @access  - Public route
const userRegister = asyncHandler( async( req, res ) => {

    const { name, email, password } = req.body;

    // if we find the user document in the database with an email that matches the email above
    // then we know that the user entered an email that is already registered
    const userExists = await User.findOne( { email : email } );

    // ==============================
    // User already exist
    // ==============================

    // if the user already exists then we want to throw an error
    if ( userExists ) {

        // 400 represents a bad request
        res.status( 400 );

        throw new Error( 'User aleady exists. Please try again.' );

    }

    // ==============================
    // Create a new user document in the database
    // ==============================

    // let's use the create(); method to add a user to the database and add the properties
    // and values that we want to add to the user document in the database
    const user = await User.create(

        {
            name     : name,
            email    : email,
            password : password
        }

    );

    // if the user was created successfully then do the following
    if ( user ) {

        // ==============================
        // Send the following information back to the browser as part of the server response
        // ==============================

        // 201 means a resource was created
        res.status( 201 ).json(

            {
                _id     : user._id,
                name    : user.name,
                email   : user.email,
                isAdmin : user.isAdmin,
                token   : generateToken( user._id )
            }

        );

    } else { // if the user was not created successfully then do the following

        // 400 means the request was bad
        res.status( 400 );

        throw new Error( 'Invalid user data' );

    }
    
} );


// ==============================
// Controller 3
// ==============================

// in controller 3, we want to get the logged in user's information from the database and
// then return this information to the browser as part of the server response

// Controller 3
// @desc    - GET user profile
// @route   - GET request to /api/users/profile
// @access  - Private route
const userGetProfile = asyncHandler( async( req, res ) => {

    // let's use req.user from the auth.middleware.js file to get the user document
    // for the current or logged in user
    const user = await User.findById( req.user._id );

    // now let's check for the user and make sure the user exist
    if ( user ) {

        // if we find the user document or the user then let's return the following
        // information for the logged in user:
        res.json(

            {
                _id     : user._id,
                name    : user.name,
                email   : user.email,
                isAdmin : user.isAdmin
            }

        );

    } else {

        // if we can't find the user or the user does not exist then let's do the following:
        res.status( 404 );

        throw new Error( 'User not found' );

    }

} );


// ==============================
// Controller 4
// ==============================

// in controller 4, we want to get the update the user's profile

// Controller 4
// @desc    - UPDATE user profile
// @route   - PUT request to /api/users/profile
// @access  - Private route
const userUpdateProfile = asyncHandler( async( req, res ) => {

    // let's use req.user from the auth.middleware.js file to get the user document
    // for the current or logged in user
    const user = await User.findById( req.user._id );

    // now let's check for the user and make sure the user exist
    if ( user ) {

        // if we find the user document or the user then let's update the user's information
        // and we can do that by looking at req.body.key so for example, if the
        // user updates their name we will be able to retrieve the updated name
        // in req.body.name; otherwise, if the user did not make any changes or updates to
        // their name then we will return the name saved in the database or user.name
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        // for the password, we first want to check and see if a password was sent in req.body
        // and remember the changed password will be encrypted or hashed before we save it to
        // the database ( see the userSchema.pre(); middleware function in the user.model.js
        // file )
        if ( req.body.password ) {

            user.password = req.body.password

        }

        // ==============================
        // Update the user document in the database
        // ==============================

        // then let's update the user document in the database based on the changes above and
        // then save the updated user document to the const " updatedUser "
        const updatedUser = await user.save();

        // let's return the following to the browser as part of the server response
        res.json(

            {
                _id     : updatedUser._id,
                name    : updatedUser.name,
                email   : updatedUser.email,
                isAdmin : updatedUser.isAdmin,
                token   : generateToken( updatedUser._id )
            }

        );


    } else {

        // if we can't find the user or the user does not exist then let's do the following:
        res.status( 404 );

        throw new Error( 'User not found' );

    }

} );


// ==============================
// Controller 5
// ==============================

// in controller 5, we want to get a list of all the users from the database and then return
// this information to the browser as part of the server response

// Controller 5
// @desc    - GET all users
// @route   - GET request to /api/users
// @access  - Private route and Admin route
const userListAdmin = asyncHandler( async( req, res ) => {

    // let's get all users and to do that we will pass in an empty object to the find()
    // method
    const users = await User.find( {} );

    // let's check and make sure users exist
    if ( users ) {

        // and then let's send back to the browser as part of the server response the
        // users array
        res.json( users );

    } else {

        // if we can't find users then let's do the following:
        res.status( 404 );

        throw new Error( 'A list of users was not found' );

    }

} );


// ==============================
// Controller 6
// ==============================

// in controller 6, we want to delete a user from the database and then return a message

// Controller 6
// @desc    - DELETE a user
// @route   - DELETE request to /api/users/:id
// @access  - Private route and Admin route
const userDeleteAdmin = asyncHandler( async( req, res ) => {

    // first let's find the specified user by id

    // and remember req.user._id will find the user that is logged in but what we want
    // here is the user that the admin wants to delete and we get that user by looking for the
    // user's id in the URL
    const userToDelete = await User.findById( req.params.id );
    
    // check and make sure userToDelete exist
    if ( userToDelete ) {

        // delete the specified user from the database
        await userToDelete.remove();

        // just send a message and we will use this message in Postman to detemine whether
        // or not our backend is working but we will not use this message in the frontend
        res.json( { message : 'User deleted from the database' } );

    } else {

        // if we can't find userToDelete then let's do the following:
        res.status( 404 );

        throw new Error( 'User not found' );

    }

} ); // end of deleteUser


// ==============================
// Controller 7
// ==============================

// in controller 7, we want to get a user by id and then return that user to the browser
// as part of the server response

// in controller 8, we will update the user information and then save those updates to the
// database

// Controller 7
// @desc    - GET a user by id
// @route   - GET request to /api/users/:id
// @access  - Private route and Admin route
const userGetAdmin = asyncHandler( async( req, res ) => {

    // first let's find the specified user by id and use req.params.id and this will be
    // the id in the URL

    // and remember req.user._id will find the user that is logged in but what we want
    // here is the user that the admin wants to edit and we get that user by looking for the
    // user's id in the URL

    // we will send back the user object less the password
    const user = await User.findById( req.params.id ).select( '-password' );

    // check and make sure the user exist
    if ( user ) {

        // if we find the user document then let's return the user object to the browser
        // as part of the server response
        res.json( user );

    } else {

        // if we can't find the user or the user does not exist then let's do the following:
        res.status( 404 );

        throw new Error( 'User not found' );

    }

} ); // end of getUserById


// ==============================
// Controller 8
// ==============================

// in controller 8, we want to give the admin the ability to update a user's information
// in the database and remember controller 7 and controller 8 work together to add
// admin edit functionality to the admin edit screen

// Controller 8
// @desc    - UPDATE user
// @route   - PUT request to /api/users/:id
// @access  - Private route and Admin route
const userUpdateAdmin = asyncHandler( async( req, res ) => {

    // first let's find the specified user by id and we will use req.params.id and this
    // will be the id in the URL

    // and remember req.user._id will find the user that is logged in but what we want
    // here is the user that the admin wants to edit and update and we get that user by
    // looking for the user's id in the URL
    const user = await User.findById( req.params.id );

    // check and make sure the user exist
    if ( user ) {

        // if we find the user document then let's update the user's information
        // and we can do that by looking at req.body.key so for example, if the
        // user updates their name we will be able to retrieve the updated name
        // in req.body.name; otherwise, if the user did not make any changes or updates to
        // their name then we will return the name saved in the database or user.name
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email

        // remember, from MDN: Line 1 => " expr1 || expr2 "
        // Line 2 => " If expr1 can be converted to true, return expr1; else, return expr2 "

        // for isAdmin, we just want to return true or false as selected by the admin and by doing
        // " user.isAdmin = req.body.isAdmin || user.isAdmin " we are saying that if req.body.isAdmin
        // is false then use user.isAdmin so technically we would not be able to update isAdmin
        // to false so let's have the admin select true or false for each edited user and then save
        // that value to the database
        user.isAdmin = req.body.isAdmin

        // ==============================
        // Update the user document in the database
        // ==============================

        // then let's update the user document in the database based on the changes above and
        // then save the updated user document to the const " updatedUser "
        const updatedUser = await user.save();

        // let's return the following object to the browser as part of the server response
        res.json(

            {
                _id     : updatedUser._id,
                name    : updatedUser.name,
                email   : updatedUser.email,
                isAdmin : updatedUser.isAdmin
            }

        );

    } else {

        // if we can't find the user or the user does not exist then let's do the following:
        res.status( 404 );

        throw new Error( 'User not found' );

    }

} ); // end of updateUserById

export { 
    authUser,
    userGetProfile,
    userRegister,
    userUpdateProfile,
    userListAdmin,
    userDeleteAdmin,
    userGetAdmin,
    userUpdateAdmin
};


/*
// 1 -
// let's start by copying what we have in the product.routes.js file and then change the
// following per the user.controller.js file 

// import in express
import express from 'express';
// instead of creating an instance of express or " const app = express(); " and then doing
// app.get(), app.post(), app.delete(), etc. we can use the Express router to manage all of
// our routes more efficiently
// create a new Express router
const router = express.Router();
// import in the 2 controller functions and remember to add the .js
import { 
    authUser
} from '../controllers/user.controller.js';

// ROUTE 1
// we could have changed the code for the route below to
// " router.post( '/api/users/login', authUser ); "
router.route( '/api/users/login' ).post( authUser );

export default router;

// and now let's go to the server.js 10 - file

// End of 1 -
*/




















// ===============================



















/*
// at the beginning of lecture 38, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in express
import express from 'express';
// instead of creating an instance of express or " const app = express(); " and then doing
// app.get(), app.post(), app.delete(), etc. we can use the Express router to manage all of
// our routes more efficiently
// create a new Express router
const router = express.Router();
// import in the authUser controller function and remember to add the .js
import { 
    authUser,
    userGetProfile
} from '../controllers/user.controller.js';
// import in the protectRoutes middleware
import { requireAuth } from '../middleware/auth.middleware.js';


// ROUTE 1
// we could have changed the code for the route below to
// " router.post( '/api/users/login', authUser ); "
router.route( '/api/users/login' ).post( authUser );


// 2 -
// coming from the user.controller.js 4 - file
// first, let's import in userGetProfile

// ROUTE 2
// router.route( '/api/users/profile' ).get( userGetProfile );

// and remember in the user.controller.js 4 - file we set the following:

/*
    const userGetProfile = asyncHandler( async( req, res ) => {

        // for now, let's just do " res.send( 'success' ); "
        res.send( 'success' );

    } );
*/

// now let's test this route in Postman by setting the following in Postman:

// Line 1 - " GET   {{URL}}/api/users/login   Send button "
// Line 2 ( body / raw / json ) - " **BLANK** "

// then the response we get back in Postman at the bottom of the page or under
// Line 1 - " Body / Cookies / Headers / Test Results "
// ( where Body is choosen or highlighted ) and underneath this line is
// Line 2 - " Pretty / Raw / Preview / Visualize / HTML and arrow pointing downward "
// ( where Pretty is choosen or highlighted ) is:

/*
   1 success
*/

// and this is correct so everything is working as expected

// now we need to create the middleware to protect routes and let's create a new file
// in the backend/middleware folder called " auth.middleware.js " and let's go to that
// file now

// End of 2 -


// 3 - 
// coming from the auth.middleware.js 1 - file
// first, /et's comment out Route 2 above

// import in requireAuth above and then add requireAuth as the first argument to .get();
// below and this will implement our requireAuth middleware and apply it to the userGetProfile
// controller

/*
// ROUTE 2
router.route( '/api/users/profile' ).get( requireAuth, userGetProfile );

// so the requireAuth middleware will run whenever a user goes to the " /api/users/profile "
// route

// and remember requireAuth looks like:

/*
const requireAuth = async ( req, res, next ) => {

    // intialize a variable called token
    let token;

    console.log( req.headers.authorization );

    next();

}
*/

// now that we have Route 2 set up we have everything we need to test out
// " console.log( req.headers.authorization ); " ( remember this comes from the
// auth.middleware.js file ) and see if our token value shows up in the console in the
// integrated terminal and let's set the following in Postman:

// Line 1 - " GET   {{URL}}/api/users/profile   Send button "
// Line 2 - Headers
// Line 3 - Key / Value / Description ( categories under Headers )
// Line 4 - Authorization for Key / Bearer **space** and then the token for Value

// and the result in the console in the integrated terminal is:

/*
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZjUwNDU0NWE2YTY2NDU3ZjBiMDcwN
SIsImlhdCI6MTYxMjIwOTA2NiwiZXhwIjoxNjE0ODAxMDY2fQ.ckPVeQTPuvnqdTRLH647IenPXH9paPVbTRh-N26TTaU
*/

// and this is correct so everything is working as expected

// and now let's go to the auth.middleware.js 2 - file

// End of 3 -

/*
export default router;
*/






















// ===============================



















/*
// at the beginning of lecture 38, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in express
import express from 'express';
// instead of creating an instance of express or " const app = express(); " and then doing
// app.get(), app.post(), app.delete(), etc. we can use the Express router to manage all of
// our routes more efficiently
// create a new Express router
const router = express.Router();
// import in the authUser controller function and remember to add the .js
import { 
    authUser,
    userGetProfile,
    userRegister
} from '../controllers/user.controller.js';
// import in the requireAuth middleware
import { requireAuth } from '../middleware/auth.middleware.js';


// Route 1
// we could have changed the code for the route below to
// " router.post( '/api/users/login', authUser ); "
router.route( '/api/users/login' ).post( authUser );


// add requireAuth as the first argument to .get(); below and this will implement our
// requireAuth middleware and apply it to the userGetProfile controller

// Route 2
router.route( '/api/users/profile' ).get( requireAuth, userGetProfile );


// 4 -
// coming from user.constroller.js 5 -
// import in userRegister above

// Route 3
router.route( '/api/users' ).post( userRegister );

// let's test this out in Postman

// Line 1 - " POST      {{URL}}/api/users      Send button      Save button "

// and if we just press the Send button then we will get a Mongoose error since name, email
// and password are required in our User model and we see this error in Postman at the
// buttom of the page:

/*
    "message": "User validation failed: name: Path `name` is required., email: Path `email`
    is required., password: Path `password` is required.",
    "stack": "ValidationError: User validation failed: ...
*/

// and this is correct so everything is working as expected

// now let's test this out in Postman

// Line 1 - " POST      {{URL}}/api/users      Send button      Save button "
// Line 2 - ( body / raw / json ) -
// Line 2 - " { "name": "Steve Smith", "email": "steve@example.com", "password": "123456" } "

// and the result at the bottom of the page in Postman is:

/*
    {
        "_id": "6025940db37f46237848b07b",
        "name": "Steve Smith",
        "email": "steve@example.com",
        "isAdmin": false,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMjU5NDBkYjM3ZjQ2MjM3ODQ
        4YjA3YiIsImlhdCI6MTYxMzA3NTQ2OSwiZXhwIjoxNjE1NjY3NDY5fQ.C3BTXFkgBtxYaJyXJq0VrnljV
        up0rsw_xOjISfLVN_8"
    }
*/

// and if we check the database we see that we have 4 user documents now and one new user
// document or:

/*
    _id: 6025940db37f46237848b07b
    isAdmin: false
    name: "Steve Smith"
    email: "steve@example.com"
    password: "123456"
    createdAt: 2021-02-11T20:31:09.443+00:00
    updatedAt: 2021-02-11T20:31:09.443+00:00
    __v: 0
*/

// and this is correct so everything is working as expected

// however, let's delete the above user document for now since we want to encrypt the password
// before we save the password to the database so let's go to the user.model.js 2 - file now


// End of 4 -


// 5 - 
// coming from the user.model.js 2 - file
// now that we're encrypting our password before we save it to the database, let's test this
// out in Postman and make sure it works

// Line 1 - " POST      {{URL}}/api/users      Send button      Save button "
// Line 2 - ( body / raw / json ) -
// Line 2 - " { "name": "Steve Smith", "email": "steve@example.com", "password": "123456" } "

// and the result at the bottom of the page in Postman is:

/*
    {
        "_id": "6025bca595bb2927d2f67cbf",
        "name": "Steve Smith",
        "email": "steve@example.com",
        "isAdmin": false,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMjViY2E1OTViYjI5MjdkMmY2N
        2NiZiIsImlhdCI6MTYxMzA4NTg2MiwiZXhwIjoxNjE1Njc3ODYyfQ.d_nsUrN3JzuFf1NCfJPPlrAsKUbxi9
        xVFHw5VSmWMGQ"
    }
*/

// and if we check the database we see that we have 1 new user document and 4 user documents
// in total and we see that our password is now being hashed, which is great:

/*
    _id: 6025bca595bb2927d2f67cbf
    isAdmin: false
    name: "Steve Smith"
    email: "steve@example.com"
    password: "$2a$10$eRdXIo7QpGB3aEyxS.UqFeYkWRIjp8fEp2KpAM5Zw57jBH0/pfnQG"
    createdAt: 2021-02-11T23:24:21.993+00:00
    updatedAt: 2021-02-11T23:24:21.993+00:00
    __v: 0
*/

// and this is correct so everything is working as expected

// and if I try to register Steve Smith again with the same user credentials, then result at
// the bottom of the page in Postman is:

/*
    {
        "message": "User aleady exists",
        "stack": "Error: User aleady exists\n    at file:///Applications/MAMP/htdocs/ ...
    }
*/

// and this is correct so everything is working as expected

// so now were able to login and register and the next thing we will do is go back to the front
// end and create a sign in and sign up form

// End of 5 -

/*
export default router;
*/






















// ===============================





















// at the beginning of lecture 38, given all the notes, I created a new file below without
// the notes so we are starting fresh

/*
// import in express
import express from 'express';
// instead of creating an instance of express or " const app = express(); " and then doing
// app.get(), app.post(), app.delete(), etc. we can use the Express router to manage all of
// our routes more efficiently
// create a new Express router
const router = express.Router();
// import in the authUser controller function and remember to add the .js
import { 
    authUser,
    userGetProfile,
    userRegister,
    userUpdateProfile
} from '../controllers/user.controller.js';
// import in the requireAuth middleware
import { requireAuth } from '../middleware/auth.middleware.js';


// Route 1
// user sign in
// remember " /login " equals " /api/users/login "
router.route( '/login' ).post( authUser );


// add requireAuth as the first argument to .get(); below and this will implement our
// requireAuth middleware and apply it to the userGetProfile controller

// Route 2
// retrieve user profile
// and remember " /profile " equals " /api/users/profile "
router.route( '/profile' ).get( requireAuth, userGetProfile );


// Route 3
// user register
// and remember " / " equals " /api/users "
router.route( '/' ).post( userRegister );


// 6 -
// coming from the user.controllers.js 6 - file

// Route 4
// update user profile
// and remember " /profile " equals " /api/users/profile "
router.route( '/profile' ).put( requireAuth, userUpdateProfile );

// and let's test this route in Postman and let's first create a new request under
// the Users & Auth folder or:

/*
    Request name        : PUT /api/users/profile
    Request description : Update user profile
*/

// and then let's click on this request and on the right side of the page let's do the
// following:
 
// Line 1 - " PUT   {{URL}}/api/users/profile   Send button    Save button "
// Line 2 - Body / raw / JSON

// but before we go any futher we need a token value first so let's go to the following
// route or " POST {{URL}}/api/users/login " and log in as John Doe and after we log in
// as John Doe then that user's token value is saved in the ProShop Env tab as an environment
// variable and we will use that token value when we update the John Doe user document and
// let's do that now by going back to our original route or the route on Line 1 above and
// this time we will press on the Authorization tab or do the following:

// Line 2 - Authorization ( remember the tabs on line 2 are:
// Params Authorization Headers Body Pre-request Script Tests Settings )

// Line 3 - Type
// Line 4 - choose " Bearer Token "  |   Token   {{TOKEN}}

// and now our token vaue is set up for the route on line 1 above so let's go ahead and
// update the John Doe user document by changing the name from " John Doe " to " John Do "
// and we can do that by going back to line 2 and selecting the Body tab or:

// Line 2 - Body / raw / JSON
// Line 3 - { "name": "John Do" }
 
// and then let's press the Send button on line 1 above and the result in Postman at the bottom
// of the page is:

/*
    {
        "_id"     : "5ff504545a6a66457f0b0705",
        "name"    : "John Do",
        "email"   : "john@example.com",
        "isAdmin" : false,
        "token"   : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZjUwNDU0NWE2YTY2NDU3ZjB
        iMDcwNSIsImlhdCI6MTYxMzg1NTI2MSwiZXhwIjoxNjE2NDQ3MjYxfQ.EbKgu_5gez3FkJiq-Pe7SvCcQ4
        HuA911W_SKFPTJ2jo"
    }
*/

// and we see that we get back the updated user name of " John Do " and this is correct so
// everything is working as expected

// now if we update the password and change the name back to " John Doe " or:

// Line 2 - Body / raw / JSON
// Line 3 - { "name": "John Do", "password": 12345 }

// and then press the Send button on line 1 above and then let's go back to the login route
// or:

// Line 1 - " POST   {{URL}}/api/users/login   Send button    Save button "
// Line 2 - Body / raw / JSON
// Line 3 - { "name": "John Doe", "password": 123456 }

// and then let's press the Send button on line 1 above and the result in Postman at the bottom
// of the page is:

/*
    {
        "message": "Invalid email and / or password.",
        "stack": "Error: Invalid email and / or password.\n ...
    }
*/

// and this is correct so everything is working as expected

// and now let's change the password back to 123456 in the update route

// and now let's make sure we save the update route in Postman

// and now our backend is set up and we are ready to implement the userGetProfile and
// userUpdateProfile controllers in our profile screen and we will start working on the profile
// screen in the next lecture

// End of 6 -

/*
export default router;
*/






















// ===============================




















/*
// at the beginning of lecture 48, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in express
import express from 'express';
// instead of creating an instance of express or " const app = express(); " and then doing
// app.get(), app.post(), app.delete(), etc. we can use the Express router to manage all of
// our routes more efficiently
// create a new Express router
const router = express.Router();
// import in the authUser controller function and remember to add the .js
import { 
    authUser,
    userGetProfile,
    userRegister,
    userUpdateProfile,
    getUsers
} from '../controllers/user.controllers.js';
// import in the requireAuth and admin middleware functions
import { requireAuth, admin } from '../middleware/auth.middleware.js';


// Route 1
// user sign in
// remember " /login " equals " /api/users/login "
router.route( '/login' ).post( authUser );


// add requireAuth as the first argument to .get(); below and this will implement our
// requireAuth middleware and apply it to the userGetProfile controller

// Route 2
// retrieve user profile
// and remember " /profile " equals " /api/users/profile "
router.route( '/profile' ).get( requireAuth, userGetProfile );


// Route 3
// user register
// and remember " / " equals " /api/users "
router.route( '/' ).post( userRegister );


// Route 4
// update user profile
// and remember " /profile " equals " /api/users/profile "
router.route( '/profile' ).put( requireAuth, userUpdateProfile );


// 7 -
// coming from the user.controllers.js 7 - file

// Route 5
// get all users
// and remember " / " equals " /api/users "

// End of 7 -


// 8 -
// coming from the auth.middleware.js 3 - file

// to access this route the user needs 2 things: one, the user needs authorization and
// this authorization is determined based on having a valid token and two, the user
// needs to be an admin user in order to access this route
router.route( '/' ).get( requireAuth, admin, getUsers );

// now we go back to Postman and then on the right side of the page let's do the
// following ( remember we are logged in as John Doe so our token below is John Doe's token ):

/*
    Line 1 : GET {{URL}}/api/users            Send button

    Line 2: Params / Authorization / Headers  / Body  / Pre-request Script  / Tests / Settings
    
    choose the Authorization tab and then

    Line 3: Type / Token

    for Type choose Bearer Token and for Token we should already have a valid token populating
    the Token field or {{Token}}
*/

// now let's press the Send button and this results in the following at the bottom of
// the page:

/*
    {
        "message": "Not authorized as an admin",
        "stack": "Error: Not authorized as an admin\n    at file: ..."
    }
*/

// and this is correct so everything is working as expected

// now let's go back to Postmand and go to the login route or " POST /api/users/login "
// and then on the right side of the page let's do the following:

/*
    Line 1 : GET {{URL}}/api/users/login            Send button

    Line 2: Params / Authorization / Headers  / Body  / Pre-request Script  / Tests / Settings
    
    choose the Body tab and then

    Line 3: none / form-data / x-www-form-urlencoded / raw / binary / GrapgQL / dropdown menu
    with JSON as one of the selections 
    
    choose raw / JSON

    Line 4: 
    
    log in as the admin:

    { 
        "email": "admin@example.com",
        "password": ""
    }

    I left the password blank for security purposes
*/

// so now we logged in as admin and the admin's token got saved so let's go back to Postman and
// then on the right side of the page let's do the following:

/*
    Line 1 : GET {{URL}}/api/users            Send button

    Line 2: Params / Authorization / Headers  / Body  / Pre-request Script  / Tests / Settings
    
    choose the Authorization tab and then

    Line 3: Type / Token

    for Type choose Bearer Token and for Token we should already have a valid token populating
    the Token field or {{Token}}
*/

// now let's press the Send button and this results in the following at the bottom of
// the page:

/*
[
    {
        "isAdmin": true,
        "_id": "5ff504545a6a66457f0b0704",
        "name": "Admin User",
        "email": "admin@example.com",
        "password": "$2a$10$te0ecEE36Svz.sVRBffbNOWlGxVeDU684QntZ08z3MQzJjDq3xdMG",
        "__v": 0,
        "createdAt": "2021-01-06T00:29:08.657Z",
        "updatedAt": "2021-01-06T00:29:08.657Z"
    },
    {
        "isAdmin": false,
        "_id": "5ff504545a6a66457f0b0706",
        "name": "Jane Doe",
        "email": "jane@example.com",
        "password": "$2a$10$XeDGHgeusdSORxCTYaJ0yO1SVfn1jB1mFfoSXHzfRdqNMLzjALHNS",
        "__v": 0,
        "createdAt": "2021-01-06T00:29:08.657Z",
        "updatedAt": "2021-01-06T00:29:08.657Z"
    },
    {
        "isAdmin": false,
        "_id": "5ff504545a6a66457f0b0705",
        "name": "John Doe",
        "email": "john@example.com",
        "password": "$2a$10$JZU1K3FOJKNRomPyF7QE9ukZhEK9lsPtW0L6gTPVLFfj3eARXaiKK",
        "__v": 0,
        "createdAt": "2021-01-06T00:29:08.657Z",
        "updatedAt": "2021-02-28T00:27:04.447Z"
    },
    {
        "isAdmin": false,
        "_id": "6025bca595bb2927d2f67cbf",
        "name": "Steve Smith",
        "email": "steve@example.com",
        "password": "$2a$10$eRdXIo7QpGB3aEyxS.UqFeYkWRIjp8fEp2KpAM5Zw57jBH0/pfnQG",
        "createdAt": "2021-02-11T23:24:21.993Z",
        "updatedAt": "2021-02-11T23:24:21.993Z",
        "__v": 0
    },
    {
        "isAdmin": false,
        "_id": "603060aa73cfe9a3b1e2bdc2",
        "name": "John Dean",
        "email": "johndean@example.com",
        "password": "$2a$10$sNnaW1YP2r3xULITXQnUVuVitMTsoXj3oVYHdgJWlBPElp9SURzYy",
        "createdAt": "2021-02-20T01:06:50.879Z",
        "updatedAt": "2021-02-20T01:06:50.879Z",
        "__v": 0
    }
]
*/

// so now we can access all the users and this is correct so everything is working as
// expected

// so now let's save this route by pressing the Save button at the top of the screen

// so now we are ready to implement this functionality into our frontend and we will create
// a user's list and we will be able to edit the user's information and / or make the
// user an admin user and / or delete the user, etc.

// End of 8 -


// 7 - continued

// and let's test this in Postman and then on the right side of the page let's do the
// following:

/*
    Line 1 : GET {{URL}}/api/users            Send button

    Line 2: Params / Authorization / Headers  / Body  / Pre-request Script  / Tests / Settings
    
    choose the Authorization tab and then

    Line 3: Type / Token

    for Type choose Bearer Token and for Token we should already have a valid token populating
    the Token field or {{Token}}
*/

// now let's press the Send button and this results in the following at the bottom of
// the page:

/*
[
    {
        "isAdmin": true,
        "_id": "5ff504545a6a66457f0b0704",
        "name": "Admin User",
        "email": "admin@example.com",
        "password": "$2a$10$te0ecEE36Svz.sVRBffbNOWlGxVeDU684QntZ08z3MQzJjDq3xdMG",
        "__v": 0,
        "createdAt": "2021-01-06T00:29:08.657Z",
        "updatedAt": "2021-01-06T00:29:08.657Z"
    },
    {
        "isAdmin": false,
        "_id": "5ff504545a6a66457f0b0706",
        "name": "Jane Doe",
        "email": "jane@example.com",
        "password": "$2a$10$XeDGHgeusdSORxCTYaJ0yO1SVfn1jB1mFfoSXHzfRdqNMLzjALHNS",
        "__v": 0,
        "createdAt": "2021-01-06T00:29:08.657Z",
        "updatedAt": "2021-01-06T00:29:08.657Z"
    },
    {
        "isAdmin": false,
        "_id": "5ff504545a6a66457f0b0705",
        "name": "John Doe",
        "email": "john@example.com",
        "password": "$2a$10$JZU1K3FOJKNRomPyF7QE9ukZhEK9lsPtW0L6gTPVLFfj3eARXaiKK",
        "__v": 0,
        "createdAt": "2021-01-06T00:29:08.657Z",
        "updatedAt": "2021-02-28T00:27:04.447Z"
    },
    {
        "isAdmin": false,
        "_id": "6025bca595bb2927d2f67cbf",
        "name": "Steve Smith",
        "email": "steve@example.com",
        "password": "$2a$10$eRdXIo7QpGB3aEyxS.UqFeYkWRIjp8fEp2KpAM5Zw57jBH0/pfnQG",
        "createdAt": "2021-02-11T23:24:21.993Z",
        "updatedAt": "2021-02-11T23:24:21.993Z",
        "__v": 0
    },
    {
        "isAdmin": false,
        "_id": "603060aa73cfe9a3b1e2bdc2",
        "name": "John Dean",
        "email": "johndean@example.com",
        "password": "$2a$10$sNnaW1YP2r3xULITXQnUVuVitMTsoXj3oVYHdgJWlBPElp9SURzYy",
        "createdAt": "2021-02-20T01:06:50.879Z",
        "updatedAt": "2021-02-20T01:06:50.879Z",
        "__v": 0
    }
]
*/

// so we see the users array and this is correct so everything is working as expected

// and now let's go to the auth.middleware.js 3 - file

// End of 7 -

/*
export default router;
*/





















// ===============================




















/*
// at the beginning of lecture 67, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in express
import express from 'express';
// instead of creating an instance of express or " const app = express(); " and then doing
// app.get(), app.post(), app.delete(), etc. we can use the Express router to manage all of
// our routes more efficiently
// create a new Express router
const router = express.Router();
// import in the authUser controller function and remember to add the .js
import { 
    authUser,
    userGetProfile,
    userRegister,
    userUpdateProfile,
    getUsers,
    deleteUser
} from '../controllers/user.controllers.js';
// import in the requireAuth and admin middleware functions
import { requireAuth, admin } from '../middleware/auth.middleware.js';


// Route 1
// user sign in
// remember " /login " equals " /api/users/login "
router.route( '/login' ).post( authUser );


// add requireAuth as the first argument to .get(); below and this will implement our
// requireAuth middleware and apply it to the userGetProfile controller

// Route 2
// retrieve user profile
// and remember " /profile " equals " /api/users/profile "
router.route( '/profile' ).get( requireAuth, userGetProfile );


// Route 3
// user register
// and remember " / " equals " /api/users "
router.route( '/' ).post( userRegister );


// Route 4
// update user profile
// and remember " /profile " equals " /api/users/profile "
router.route( '/profile' ).put( requireAuth, userUpdateProfile );


// Route 5
// get all users
// and remember " / " equals " /api/users "

// to access this route the user needs 2 things: one, the user needs authorization and
// authorization is determined based on having a valid token and two, the user needs to
// be an admin user in order to access this route
router.route( '/' ).get( requireAuth, admin, getUsers );


// 7 -
// coming form the user.controllers.js 8 - file

// Route 6
// delete a user
// and remember " /:id " equals " /api/users/:id "

// remember since our route is " /:id " we need to have this route at the bottom

// to access this route the user needs 2 things: one, the user needs authorization and
// authorization is determined based on having a valid token and two, the user needs to
// be an admin user in order to access this route
router.route( '/:id' ).delete( requireAuth, admin, deleteUser );

// now let's test this in Postman to make sure this works on the backend and to test this
// let's do the following:

// STEP 1 - create a new request under the folder Users & Auth called " DELETE /api/users/:id "

// STEP 2 - and then on the right side of the page let's do the following:

/*
    Line 1 : GET {{URL}}/api/users/:id ( copy the id from one of our users, maybe John Dean ) Send button

    Line 2: Params / Authorization / Headers  / Body  / Pre-request Script  / Tests / Settings
    
    choose the Authorization tab and then

    Line 3: Type / Token

    for Type choose Bearer Token and for Token we should already have a valid token populating
    the Token field or {{Token}}
*/

// now let's press the Send button and this results in the following at the bottom of
// the page:

/*
    {
        "message": "User deleted from the database"
    }
*/

// so we see our success message and this is correct so everything is working as expected

// now that we know our backend is working, let's turn our attention to the frontend

// now let's go to the user.constants.js 8 - file

// End of 7 -

/*
export default router;
*/




















// ===============================




















/*
// at the beginning of lecture 67, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in express
import express from 'express';
// instead of creating an instance of express or " const app = express(); " and then doing
// app.get(), app.post(), app.delete(), etc. we can use the Express router to manage all of
// our routes more efficiently
// create a new Express router
const router = express.Router();
// import in the authUser controller function and remember to add the .js
import { 
    authUser,
    userGetProfile,
    userRegister,
    userUpdateProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser
} from '../controllers/user.controllers.js';
// import in the requireAuth and admin middleware functions
import { requireAuth, admin } from '../middleware/auth.middleware.js';


// Route 1
// user sign in
// remember " /login " equals " /api/users/login "
router.route( '/login' ).post( authUser );


// add requireAuth as the first argument to .get(); below and this will implement our
// requireAuth middleware and apply it to the userGetProfile controller

// Route 2
// retrieve user profile
// and remember " /profile " equals " /api/users/profile "
router.route( '/profile' ).get( requireAuth, userGetProfile );


// Route 3
// user register
// and remember " / " equals " /api/users "
router.route( '/' ).post( userRegister );


// Route 4
// update user profile
// and remember " /profile " equals " /api/users/profile "
router.route( '/profile' ).put( requireAuth, userUpdateProfile );


// Route 5
// get all users
// and remember " / " equals " /api/users "

// to access this route the user needs 2 things: one, the user needs authorization and
// authorization is determined based on having a valid token and two, the user needs to
// be an admin user in order to access this route
router.route( '/' ).get( requireAuth, admin, getUsers );


// Route 6
// delete a user
// and remember " /:id " equals " /api/users/:id "

// remember since our route is " /:id " we need to have this route at the bottom

// to access this route the user needs 2 things: one, the user needs authorization and
// authorization is determined based on having a valid token and two, the user needs to
// be an admin user in order to access this route
router.route( '/:id' ).delete( requireAuth, admin, deleteUser );


// 8 -
// coming from the user.controllers.js 9 - file

// Route 7
// get a user by id
// and remember " /:id " equals " /api/users/:id "

// remember since our route is " /:id " we need to have this route at the bottom

// to access this route the user needs 2 things: one, the user needs authorization and
// authorization is determined based on having a valid token and two, the user needs to
// be an admin user in order to access this route
router.route( '/:id' ).get( requireAuth, admin, getUserById );


// Route 8
// update a user
// and remember " /:id " equals " /api/users/:id "

// remember since our route is " /:id " we need to have this route at the bottom

// to access this route the user needs 2 things: one, the user needs authorization and
// authorization is determined based on having a valid token and two, the user needs to
// be an admin user in order to access this route
router.route( '/:id' ).put( requireAuth, admin, updateUser );

// now let's test this in Postman to make sure this works on the backend and to test this
// let's do the following:

// STEP 1 - create a new request under the folder Users & Auth called " GET /api/users/:id "

// STEP 2 - and then on the right side of the page let's do the following:

/*
    Line 1 : GET {{URL}}/api/users/:id ( copy the id from Steve Smith ) Send button

    Line 2: Params / Authorization / Headers  / Body  / Pre-request Script  / Tests / Settings
    
    choose the Authorization tab and then

    Line 3: Type / Token

    for Type choose Bearer Token and for Token we should already have a valid token populating
    the Token field or {{Token}}
*/

// STEP 3 - press the Send button and this results in the following at the bottom of the page:

/*
    {
        "isAdmin": false,
        "_id": "606fb133e066b67cdbb9e09d",
        "name": "Steve Smith",
        "email": "steve@example.com",
        "createdAt": "2021-04-09T01:43:15.910Z",
        "updatedAt": "2021-04-09T01:43:15.910Z",
        "__v": 0
    }
*/

// so we see the correct user and this is correct so everything is working as expected

// now let's test the update route:

// STEP 1 - create a new request under the folder Users & Auth called " PUT /api/users/:id "

// STEP 2 - and then on the right side of the page let's do the following:

/*
    Line 1 : PUT {{URL}}/api/users/:id ( copy the id from Steve Smith ) Send button

    Line 2: Params / Authorization / Headers  / Body  / Pre-request Script  / Tests / Settings
    
    choose the Authorization tab and then

    Line 3: Type / Token

    for Type choose Bearer Token and for Token we should already have a valid token populating
    the Token field or {{Token}}

    Line 2 ( again ): Params / Authorization / Headers  / Body  / Pre-request Script  / Tests
    / Settings
    
    choose the Body tab

    Line 3: none / form-data / x-www-form-urlencoded / raw / binary / GrapgQL / dropdown menu
    with JSON as one of the selections 
    
    choose raw / JSON

    Line 4: 
    
    change Steve Smith's name to Steve S:

    { 
        "name": "Steve S",
        "isAdmin" : false
    }
*/

// STEP 3 - press the Send button and this results in the following at the bottom of the page:

/*
    {
        {
            "_id": "606fb133e066b67cdbb9e09d",
            "name": "Steve S",
            "email": "steve@example.com",
            "isAdmin": false
        }
    }
*/

// so we see our updated user and this is correct so everything is working as expected

// so we know we can get a user by id and update a user by id with an admin account and
// now that we know our backend is working, let's turn our attention to the frontend

// now let's go to the user.constants.js 9 - file

// End of 8 -

/*
export default router;
*/




















// ===============================





















// at the beginning of lecture 71, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in express
import express from 'express';
// instead of creating an instance of express or " const app = express(); " and then doing
// app.get(), app.post(), app.delete(), etc. we can use the Express router to manage all of
// our routes more efficiently
// create a new Express router
const router = express.Router();
// import in the authUser controller function and remember to add the .js
import { 
    authUser,
    userGetProfile,
    userRegister,
    userUpdateProfile,
    userListAdmin,
    userDeleteAdmin,
    userGetAdmin,
    userUpdateAdmin
} from '../controllers/user.controllers.js';
// import in the requireAuth and admin middleware functions
import { requireAuth, admin } from '../middleware/auth.middleware.js';

// Route 3
// user register
// and remember " / " equals " /api/users "
router.route( '/' ).post( userRegister );


// Route 5
// get all users
// and remember " / " equals " /api/users "

// to access this route the user needs 2 things: one, the user needs authorization and
// authorization is determined based on having a valid token and two, the user needs to
// be an admin user in order to access this route
router.route( '/' ).get( requireAuth, admin, userListAdmin );


// Route 1
// user sign in
// remember " /login " equals " /api/users/login "
router.route( '/login' ).post( authUser );


// add requireAuth as the first argument to .get(); below and this will implement our
// requireAuth middleware and apply it to the userGetProfile controller

// Route 2
// retrieve user profile
// and remember " /profile " equals " /api/users/profile "
router.route( '/profile' ).get( requireAuth, userGetProfile );


// Route 4
// update user profile
// and remember " /profile " equals " /api/users/profile "
router.route( '/profile' ).put( requireAuth, userUpdateProfile );


// Route 6
// delete a user
// and remember " /:id " equals " /api/users/:id "

// remember since our route is " /:id " we need to have this route at the bottom

// to access this route the user needs 2 things: one, the user needs authorization and
// authorization is determined based on having a valid token and two, the user needs to
// be an admin user in order to access this route
router.route( '/:id' ).delete( requireAuth, admin, userDeleteAdmin );


// Route 7
// get a user by id
// and remember " /:id " equals " /api/users/:id "

// remember since our route is " /:id " we need to have this route at the bottom

// to access this route the user needs 2 things: one, the user needs authorization and
// authorization is determined based on having a valid token and two, the user needs to
// be an admin user in order to access this route
router.route( '/:id' ).get( requireAuth, admin, userGetAdmin );


// Route 8
// update a user
// and remember " /:id " equals " /api/users/:id "

// remember since our route is " /:id " we need to have this route at the bottom

// to access this route the user needs 2 things: one, the user needs authorization and
// authorization is determined based on having a valid token and two, the user needs to
// be an admin user in order to access this route
router.route( '/:id' ).put( requireAuth, admin, userUpdateAdmin );


export default router;

/*
// 1 -
import express from 'express';
// instead of creating an instance of express or " const app = express(); " and then doing
// app.get(), app.post(), app.delete(), etc. we can use the Express router to manage all of
// our routes more efficiently and for routes 1 & 2 below let's change " app " to " router "
// and we can change " '/api/products' " to " / " and " '/api/products/:id' " to " '/:id' "
// since we will link " '/api/products' " to this file in server.js and let's go to the
// server.js 6 - file now

// create a new Express router
const router = express.Router();

// 2 -
// let's bring in the Product model and don't forget the .js extension
import Product from '../models/product.model.js';

import asyncHandler from 'express-async-handler';

// End of 2 -


// ROUTE 1
// next let's create an API route

// 3 -
// @desc    - Fetch all products
// @route   - GET request to /api/products
// @access  - Public route

// End of 3 -
router.get( '/', asyncHandler( async ( req, res ) => {

    // 2 - continued
    // we use the find method and then pass in an empty object which will give us access
    // to all documents in the product collection and from the mongoosejs.com website
    // " // find all documents await MyModel.find({}); "

    // and remember whenever we use a mongoose method like find(); the method returns a promise
    // so let's use async await
    
    // and to handle errors we could use a try catch block below but Brad said he would rather
    // use a package called express-async-handler and this package is " Simple middleware for
    // handling exceptions inside of async express routes and passing them to your express error
    // handlers. " and let's install this package

    // #14
    // express-async-handler: " Rogers-iMac:mern_ecommerce_from_scratch Home$
    // npm i express-async-handler " and this will install express-async-handler in our application
    // lecture 22: Fetching Products From The Database
    
    // and to use express-async-handler we just need to import in the package above and then wrap
    // our function with the asyncHandler() or

    /*
    express.get( '/', asyncHandler(async ( req, res, next ) => {
        const bar = await foo.findAll();
        res.send( bar )
    }))
    */

    /*
    const products = await Product.find( {} ); 

    // End of 2 -

    res.json( products ); 

} ) );


// ROUTE 2
// next we want to create a route to get a single product

// 3 -
// @desc    - Fetch a single product
// @route   - GET request to /api/products/:id
// @access  - Public route

// now let's test this out and remember we will use Postman to test routes but for now let's
// go to the home page or " localhost:5000/api/products " and make sure the server is running

/*
Rogers-iMac:mern_ecommerce_from_scratch Home$ npm run server

> mern_ecommerce_from_scratch@1.0.0 server /Applications/MAMP/htdocs/stoneburyhomes/misc/brad_traversy/mern_ecommerce_from_scratch
> nodemon backend/server

[nodemon] 2.0.6
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node backend/server.js`
The server running in development mode on port 5000
MongoDB is connected: cluster1-shard-00-00.ygd2v.mongodb.net
[ cursor here ]
*/

// and now go to " localhost:5000/api/products " and press enter and this results in:

/*
[{"price":89.99,"countInStock":10,"rating":4.5,"numReviews":12,"_id":"5ff504545a6a66457f0b0707",
"name":"Airpods Wireless Headphones","image":"/images/airpods.jpg","description":"Bluetooth
technology lets you connect it with compatible devices wirelessly. High-quality AAC audio offers
immersive listening experience. Built-in microphone allows you to take calls while working.",
"brand":"Apple","category":"Electronics","user":"5ff504545a6a66457f0b0704","reviews":[],"__v":0,
"createdAt":"2021-01-06T00:29:08.703Z","updatedAt":"2021-01-06T00:29:08.703Z"},
{"price":599.99,"countInStock":7,"rating":4,"numReviews":8,"_id":"5ff504545a6a66457f0b0708",
"name":"iPhone 11 Pro 256GB Memory","image":"/images/phone.jpg","description":"Introducing
the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without
complexity. An unprecedented leap in battery life.","brand":"Apple", etc, etc. }]
*/

// and this is correct so everything is working as expected

// so now we are able to retreive information from the database and display that information
// ( i.e. products ) in the browser

// now if we take the _id value above and add that id value to end of the URL or
// " localhost:5000/api/products/5ff504545a6a66457f0b0707 " and then press enter in the browser
// window or make a GET request to /api/products/:id we should fetch a single product
// ( i.e. Route #2 ) and after we press enter we see the following in the browser window:

/*
{"price":89.99,"countInStock":10,"rating":4.5,"numReviews":12,"_id":"5ff504545a6a66457f0b0707",
"name":"Airpods Wireless Headphones","image":"/images/airpods.jpg","description":"Bluetooth
technology lets you connect it with compatible devices wirelessly. High-quality AAC audio
offers immersive listening experience. Built-in microphone allows you to take calls while
working.","brand":"Apple","category":"Electronics","user":"5ff504545a6a66457f0b0704",
"reviews":[],"__v":0,"createdAt":"2021-01-06T00:29:08.703Z",
"updatedAt":"2021-01-06T00:29:08.703Z"}
*/

// and this is correct so everything is working as expected

// now if we add a fake id value to the end of the URL or change the last value in the id of " 7 "
// to " 0 " or " localhost:5000/api/products/5ff504545a6a66457f0b0700 " and then press enter
// in the browser window we should see our error message in the browser window and after we
// press enter we see the following in the browser window:

/*
{"message":"Product not found"}
*/

// and this is correct so everything is working as expected

// and if we look in the network tab and press on the " All " tab at the top and then press on
// the " Headers " tab we see " Status Code: 404 Not Found "

// and this is correct so everything is working as expected

// in the next video, we will start using Postman

// End of 3 -
/*
router.get( '/:id', asyncHandler( async ( req, res ) => {

    // and let's use the same contruct we used on the front end but instead of
    // " match.params.id " we use the request object or " req.params.id "
    // const product = products.find( ( product ) => product._id === req.params.id );


    // 2 - continued
    // let's use async await and change
    // " const product = products.find( ( product ) => product._id === req.params.id ); " to
    // " const product = await Product.findById( req.params.id ); "

    // we will use " Product.findById( req.params.id ); " to reach into the database or more
    // specifically reach into the products collection and find the document with the _id that
    // matches " req.params.id "
    const product = await Product.findById( req.params.id );

    // and let's check to make sure there is product in the database that matches
    // " req.params.id "
    if ( product ) {

        res.json( product );

    } else {

        // as part of the server response send back a 404 status code and a message that says
        // " Product not found "
        res.status( 404 ).json( { message : 'Product not found' } )

    }

    // remember to wrap our function with the express-async-handler and Brad likes to add
    // some information to each route and let's go to 3 - above

    // End of 2 -

} ) );

// End of 1 -


export default router;
*/















// ===============================















// at the beginning of lecture 23, given all the notes, I created a new file below without
// the notes so we are starting fresh

/*
// import in express
import express from 'express';
// instead of creating an instance of express or " const app = express(); " and then doing
// app.get(), app.post(), app.delete(), etc. we can use the Express router to manage all of
// our routes more efficiently
// create a new Express router
const router = express.Router();
// import in the Product model and don't forget the .js extension
import Product from '../models/product.model.js';
// import in express-async-handler
import asyncHandler from 'express-async-handler';


// ROUTE 1
// @desc    - Fetch all products
// @route   - GET request to /api/products
// @access  - Public route
router.get( '/', asyncHandler( async ( req, res ) => {

    // use the find method and then pass in an empty object which will give us access
    // to all documents in the product collection
    
    // use express-async-handler and this package is " Simple middleware for handling
    // exceptions inside of async express routes and passing them to your express error
    // handlers. "
    const products = await Product.find( {} ); 

    res.json( products ); 

} ) );


// ROUTE 2
// @desc    - Fetch a single product
// @route   - GET request to /api/products/:id
// @access  - Public route
router.get( '/:id', asyncHandler( async ( req, res ) => {

    // use the findById(); method to fetch a single product
    const product = await Product.findById( req.params.id );

    // and let's check to make sure there is product in the database that matches
    // " req.params.id "
    if ( product ) {

        res.json( product );

    } else {

        // 4 -
        // coming from the server.js 9 - file
        // instead of " .json( { message : 'Product not found' } ) " let's use the custom
        // middleware that we created to handle errors or the errorHandler(); function in the
        // error.middleware.js 2 - file so let's change
        // " res.status( 404 ).json( { message : 'Product not found' } ) " to
        // " res.status( 404 ); " and " throw new Error( 'Product not found' ); "
        res.status( 404 );

        throw new Error( 'Product not found' );

        // and this " throw new Error( 'Product not found' ); " will trigger
        // " app.use( errorHandler ); " in the server.js file and the reason we are triggering
        // " app.use( errorHandler ); " and not " app.use( notFound ); " is because our route
        // ( see below for the route ) is in a valid objectId format

        // and let's test this out in Postman by using the route
        // " {{URL}}/api/products/5ff504545a6a66457f0b0701 " and this route is in a valid
        // objectId format but I changed the last number from " 7 " to " 1 " and therefore
        // this route will trigger the errorHandler() function and the result in Postman is:

        /*
        {
            "message": "Product not found",
            "stack": "Error: Product not found\n    at file:///Applications/MAMP/htdocs/
            stoneburyhomes/misc/brad_traversy/mern_ecommerce_from_scratch/backend/routes/
            product.routes.js:292:15\n    at processTicksAndRejections (internal/process/
            task_queues.js:93:5)"
        }
        */

        // and this is correct so everything is working as expected

        // let's test out another route in Postman or " {{URL}}/api/prod " and this one should
        // trigger " app.use( notFound ); " in the server.js file and the result in Postman is:

        /*
        {
            "message": "Not Found - /api/prod",
            "stack": "Error: Not Found - /api/prod\n    at notFound (file:///Applications/MAMP/
            htdocs/stoneburyhomes/misc/brad_traversy/mern_ecommerce_from_scratch/backend/...
        }
        */

        // and this is correct so everything is working as expected

        // in the next section, we will start working with redux and with redux we can set up
        // our global state and then redux can fetch the products and then redux can pass those
        // products down to the components that need them

        // End of 4 -

    /* }

} ) );


export default router;
*/





















// ===============================





















/*
// at the beginning of lecture 24, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in express
import express from 'express';
// instead of creating an instance of express or " const app = express(); " and then doing
// app.get(), app.post(), app.delete(), etc. we can use the Express router to manage all of
// our routes more efficiently
// create a new Express router
const router = express.Router();


// 5 -
// now let's import in the 2 controller methods from the product.controller.js file and
// remember to add the .js below
import { 
    productList,
    productGet
} from '../controllers/product.controller.js';

// and then let's delete the Product model import and the express-async-handler import
// since we no longer need them

// and next let's change route 1 below from

/*
router.get( '/api/products', asyncHandler( async ( req, res ) => {

    // use the find method and then pass in an empty object which will give us access
    // to all documents in the product collection

    // use express-async-handler and this package is " Simple middleware for handling
    // exceptions inside of async express routes and passing them to your express error
    // handlers. "
    const products = await Product.find( {} );

    res.json( products ); 

} ) );
*/

// to

/*
router.route( '/api/products' ).get( productList );
*/

// and then change route 2 below from

/*
router.get( '/api/products/:id', asyncHandler( async ( req, res ) => {

    // use the findById(); method to fetch a single product
    const product = await Product.findById( req.params.id );

    // make sure the product or product instance in the database exist
    if ( product ) {

        res.json( product );

    } else {

        // set the status code to 404
        res.status( 404 );

        // remember as long as our route is in a valid objectId format
        // " throw new Error( 'Product not found' ); " will trigger " app.use( errorHandler ); "
        // in the server.js file

        // throw a new Error and then set the error message
        throw new Error( 'Product not found' );

    }

} ) );
*/

// to

/*
router.route( '/api/products/:id' ).get( productGet );
*/ 

// so these changes will really slim down our routes and now all the functionality will go in
// the controller

// and let's test this out by going to the integrated terminal and doing

/*
Home@Rogers-iMac mern_ecommerce_from_scratch % npm run server
*/

// and then let's go to Postman and go to the GET /api/products and press send and the result at
// the bottom on the screen is

/*
[
    {
        "price": 399.99,
        "countInStock": 11,
        "rating": 5,
        "numReviews": 12,
        "_id": "5ff504545a6a66457f0b070a",
        "name": "Sony Playstation 4 Pro White Version",
        "image": "/images/playstation.jpg",
        ...
    }
]
*/

// and this is correct so everything is working as expected

// and this set up is much cleaner ( i.e. the controller having all the functionality and then
// the routes just pointing to specific controller functions )

// in the next video we will create our user routes and our user controller and we'll start to
// do the authentication and registration

/*
// ROUTE 1
router.route( '/api/products' ).get( productList );


// ROUTE 2
router.route( '/api/products/:id' ).get( productGet );

// End of 5 -


export default router;
*/




















// ===============================




















/*
// at the beginning of lecture 24, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in express
import express from 'express';
// instead of creating an instance of express or " const app = express(); " and then doing
// app.get(), app.post(), app.delete(), etc. we can use the Express router to manage all of
// our routes more efficiently
// create a new Express router
const router = express.Router();
// import in the controller functions and remember to add the .js
import { 
    productList,
    productGet,
    productDeleteAdmin,
    productCreateAdmin,
    productUpdateAdmin
} from '../controllers/product.controllers.js';


// 6 -

// import in the requireAuth and admin middleware functions
import { requireAuth, admin } from '../middleware/auth.middleware.js';

// End of 6 -


// ROUTE 1
// get all products
// remember " / " equals " /api/products "
router.route( '/' ).get( productList );


// 7 -
// coming from the product.controllers.js 3 -

// Route 4
// create a product
// and remember " / " equals " /api/products "

// to access this route the user needs 2 things: one, the user needs authorization and
// authorization is determined based on having a valid token and two, the user needs to
// be an admin user in order to access this route
router.route( '/' ).post( requireAuth, admin, productCreateAdmin );

// now let's go back to the product.controllers.js 4 - file

// End of 7 -


// ROUTE 2
// get a product
// remember " /:id " equals " /api/products/:id "

// remember since our route is " /:id " we need to have this route at the bottom
router.route( '/:id' ).get( productGet );


// 6 -
// coming from product.controllers.js 2 -

// Route 3
// delete a product
// and remember " /:id " equals " /api/products/:id "

// remember since our route is " /:id " we need to have this route at the bottom

// to access this route the user needs 2 things: one, the user needs authorization and
// authorization is determined based on having a valid token and two, the user needs to
// be an admin user in order to access this route
router.route( '/:id' ).delete( requireAuth, admin, productDeleteAdmin );

// let's test this route in Postman:

// STEP 1 - create a new request under the folder Products called " DELETE /api/products/:id "

// STEP 2 - and then on the right side of the page let's do the following:

/*
    Line 1 : GET {{URL}}/api/products/:id ( copy the id from one of the newly created products ) Send button

    Line 2: Params / Authorization / Headers  / Body  / Pre-request Script  / Tests / Settings
    
    choose the Authorization tab and then

    Line 3: Type / Token

    for Type choose Bearer Token and for Token we should already have a valid token populating
    the Token field or {{Token}}
*/

// STEP 3 - press the Send button and this results in the following at the bottom of the page:

/*
    {
        "message": "Product deleted from the database"
    }
*/

// so we see the product delete message and this is correct so everything is working as expected

// now let's go to the product.constants.js 2 - file

// End of 6 -


// 8 -
// coming from the product.controllers.js 4 -

// Route 5
// update a product
// and remember " /:id " equals " /api/products/:id "

// to access this route the user needs 2 things: one, the user needs authorization and
// authorization is determined based on having a valid token and two, the user needs to
// be an admin user in order to access this route
/*
router.route( '/:id' ).put( requireAuth, admin, productUpdateAdmin );

// let's test these 2 routes in Postman, first let's test the POST request:

// STEP 1 - create a new request under the folder Products called " POST /api/products "

// STEP 2 - and then on the right side of the page let's do the following:

/*
    Line 1 : GET {{URL}}/api/products       Send button

    Line 2: Params / Authorization / Headers  / Body  / Pre-request Script  / Tests / Settings
    
    choose the Authorization tab and then

    Line 3: Type / Token

    for Type choose Bearer Token and for Token we should already have a valid token populating
    the Token field or {{Token}}
*/

// STEP 3 - press the Send button and this results in the following at the bottom of the page:

/*
    {
        "price": 0,
        "countInStock": 0,
        "rating": 0,
        "numReviews": 0,
        "_id": "607cbdbfd87a2c7a738c0810",
        "name": "Sample name",
        "image": "/image/sample.jpg",
        "description": "Sample description",
        "brand": "Sample brand",
        "category": "Sample category",
        "user": "607b360253abff4a37ced9d4",
        "reviews": [],
        "createdAt": "2021-04-18T23:16:15.559Z",
        "updatedAt": "2021-04-18T23:16:15.559Z",
        "__v": 0
    }
*/

// so we see the newly created product and this is correct so everything is working as expected

// now let's test the update route:

// STEP 1 - create a new request under the folder Products called " PUT /api/products/:id "

// STEP 2 - and then on the right side of the page let's do the following:

/*
    Line 1 : PUT {{URL}}/api/products/:id ( copy the id from the newly created product ) Send button

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
    
    change the product's name to iPhone 13:

    { 
        "name": "iPhone 13"
    }
*/

// STEP 3 - press the Send button and this results in the following at the bottom of the page:

/*
    {
        "price": 1029.99,
        "countInStock": 12,
        "rating": 0,
        "numReviews": 0,
        "_id": "607cbdbfd87a2c7a738c0810",
        "name": "iPhone 13",
        "image": "/images/sample.jpg",
        "description": "Great phone",
        "brand": "Apple",
        "category": "Electronics",
        "user": "607b360253abff4a37ced9d4",
        "reviews": [],
        "createdAt": "2021-04-18T23:16:15.559Z",
        "updatedAt": "2021-04-18T23:30:12.999Z",
        "__v": 0
    }
*/

// so we see our updated product and this is correct so everything is working as expected

// so we know we can create a new product using dummy sample data and then update this product
// to whatever we want and now that we know our backend is working, let's turn our attention
// to the frontend

// now let's go back to the product.constants.js 3 - file

// End of 8 -

/*
export default router;
*/




















// ===============================





















// at the beginning of lecture 76, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in express
import express from 'express';
// instead of creating an instance of express or " const app = express(); " and then doing
// app.get(), app.post(), app.delete(), etc. we can use the Express router to manage all of
// our routes more efficiently
// create a new Express router
const router = express.Router();
// import in the controller functions and remember to add the .js
import { 
    productList,
    productGet,
    productDeleteAdmin,
    productCreateAdmin,
    productUpdateAdmin,
    productCreateReview
} from '../controllers/product.controllers.js';
// import in the requireAuth and admin middleware functions
import { requireAuth, admin } from '../middleware/auth.middleware.js';


// ROUTE 1
// get all products
// remember " / " equals " /api/products "
router.route( '/' ).get( productList );


// Route 4
// create a product
// and remember " / " equals " /api/products "

// to access this route the user needs 2 things: one, the user needs authorization and
// authorization is determined based on having a valid token and two, the user needs to
// be an admin user in order to access this route
router.route( '/' ).post( requireAuth, admin, productCreateAdmin );


// ROUTE 2
// get a product
// remember " /:id " equals " /api/products/:id "

// remember since our route is " /:id " we need to have this route at the bottom
router.route( '/:id' ).get( productGet );


// Route 3
// delete a product
// and remember " /:id " equals " /api/products/:id "

// remember since our route is " /:id " we need to have this route at the bottom

// to access this route the user needs 2 things: one, the user needs authorization and
// authorization is determined based on having a valid token and two, the user needs to
// be an admin user in order to access this route
router.route( '/:id' ).delete( requireAuth, admin, productDeleteAdmin );


// Route 5
// update a product
// and remember " /:id " equals " /api/products/:id "

// remember since our route is " /:id " we need to have this route at the bottom

// to access this route the user needs 2 things: one, the user needs authorization and
// authorization is determined based on having a valid token and two, the user needs to
// be an admin user in order to access this route
router.route( '/:id' ).put( requireAuth, admin, productUpdateAdmin );


// 9 -

// Route 6
// create a new review
// and remember " /:id/reviews " equals " /api/products/:id/reviews "

// remember since our route is " /:id/reviews " we need to have this route at the bottom

// to access this route the user needs 1 thing: one, the user needs authorization and
// authorization is determined based on having a valid token
router.route( '/:id/reviews' ).post( requireAuth, productCreateReview );

// now let's test this out in Postman by creating a new request and I tested this out
// in Postman and everything is working as expected ( see the Postman request for more
// details )

// now let's go back to the product.constants.js 5 - file

// End of 9 -


export default router;


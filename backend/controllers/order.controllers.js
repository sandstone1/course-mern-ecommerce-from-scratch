
/*
// 1 -

// let's start by copying the first part of the product.controllers.js file and pasting the
// contents below

// import in the Order model and don't forget the .js extension
import Order from '../models/order.model.js';
// import in express-async-handler and this package is " Simple middleware for handling
// exceptions inside of async express routes and passing them to your express error
// handlers. "
import asyncHandler from 'express-async-handler';


// CONTROLLER #1
// @desc    - Create a new order
// @route   - POST request to /api/orders
// @access  - Private route
const orderCreate = asyncHandler( async( req, res ) => {

    const { 
        orderItems,
        shippingAddress,
        paymentMethod,
        orderItemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    } = req.body;

    // let's make sure orderItems is not empty
    if ( orderItems && orderItems.length === 0 ) {

        // 400 is a bad request
        res.status( 400 );
        // throw an error
        throw new Error( 'No order items found.' );
        // exit if statement
        return;

    }
    else if ( orderItems && orderItems.length > 0 ) {

        // ==============================
        // CREATE A NEW ORDER
        // ==============================

        // instantiate / create a new order 
        const order = new Order(
            {
                orderItems      : orderItems,
                shippingAddress : shippingAddress,
                paymentMethod   : paymentMethod,
                orderItemsPrice : orderItemsPrice,
                taxPrice        : taxPrice,
                shippingPrice   : shippingPrice,
                totalPrice      : totalPrice,
                // in addition, we want to attach the logged in user to the order and
                // remember since this will be a protected route we will be able to get
                // a token and then get the user's id from the token
                user            : req.user._id,
            }
        );

        // ==============================
        // SAVE THE ORDER IN THE DATABASE
        // ==============================

        // although we created the order above, it is not yet saved in the database and we can
        // save the order to the database by doing " await order.save(); " and we will save
        // the result of this construct to the const createdOrder
        const createdOrder = await order.save();

        // ==============================
        // SEND THE CREATEDORDER OBJECT TO THE BROWSER
        // ==============================

        // 201 " indicates that the request has succeeded and has led to the creation of a
        // resource " and then as part of the server response let's use the json data transfer
        // format to send back to broswer the createdOrder object
        res.status( 201 ).json( createdOrder );

        // now let's create the route and let's start by creating a new file in the backend/routes
        // folder called " order.routes.js " and let's go to the order.routes.js 1 - file now

    }

} );

export { orderCreate };

// End of 1 -
*/


























// ===============================


























/*
// at the beginning of lecture 56, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in the Order model and don't forget the .js extension
import Order from '../models/order.model.js';
// import in express-async-handler and this package is " Simple middleware for handling
// exceptions inside of async express routes and passing them to your express error
// handlers. "
import asyncHandler from 'express-async-handler';


// CONTROLLER #1
// @desc    - Create a new order
// @route   - POST request to /api/orders
// @access  - Private route
const orderCreate = asyncHandler( async( req, res ) => {

    const { 
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,        
        totalPrice
    } = req.body;

    // let's make sure orderItems is not empty
    if ( orderItems && orderItems.length === 0 ) {

        // 400 is a bad request
        res.status( 400 );
        // throw an error
        throw new Error( 'No order items found.' );
        // exit if statement
        return;

    }
    else if ( orderItems && orderItems.length > 0 ) {

        // ==============================
        // CREATE A NEW ORDER
        // ==============================

        // instantiate / create a new order 
        const order = new Order(
            {
                orderItems      : orderItems,
                shippingAddress : shippingAddress,
                paymentMethod   : paymentMethod,
                itemsPrice      : itemsPrice,
                shippingPrice   : shippingPrice,
                taxPrice        : taxPrice,                
                totalPrice      : totalPrice,
                // in addition, we want to attach the logged in user to the order and
                // remember since this will be a protected route we will be able to get
                // a token and then get the user's id from the token
                user            : req.user._id
            }
        );

        // ==============================
        // SAVE THE ORDER IN THE DATABASE
        // ==============================

        // although we created the order above, it is not yet saved in the database and we can
        // save the order to the database by doing " await order.save(); " and we will save
        // the result of this construct to the const createdOrder
        const createdOrder = await order.save();

        // ==============================
        // SEND THE CREATEDORDER OBJECT TO THE BROWSER
        // ==============================

        // 201 " indicates that the request has succeeded and has led to the creation of a
        // resource " and then as part of the server response let's use the json data transfer
        // format to send back to browser the createdOrder object
        res.status( 201 ).json( createdOrder );

    }

} );


// 2 -

// let's copy controller #1 above and then revise that controller

// CONTROLLER #2
// @desc    - Get order by ID
// @route   - GET request to /api/orders/:id
// @access  - Private route
const orderGet = asyncHandler( async( req, res ) => {

    // fetch the order
    // and remember in this case we get the id value from the URL so we can use req.params.id
    // to get the id value and we also want the user's name and email that is associated with
    // this order 
    const order = await Order.findById( req.params.id ).populate( 'user', 'name email' );

    // if sure the order exist then send a response back to the browser
    if ( order ) {

        // send the order to the browser
        res.json( order );

    }
    // if the order does not exist then send back a status code to the browser and throw
    // a new error
    else {

        // set the status code to 404
        res.status( 404 );

        // remember as long as our route is in a valid objectId format
        // " throw new Error( 'Order not found' ); " will trigger " app.use( errorHandler ); "
        // in the server.js file

        // throw a new Error and then set the error message
        throw new Error( 'Order not found' );
    }

} );

// next let's add the route in the order.routes.js 2 - file

// 3 -
// coming from the order.routes.js 2 - file

// and let's test our orderGet in Postman so let's create a new folder and give it a name
// of orders and in the description box let's put " routes that have to do with orders " and
// then press the create button and then inside this folder let's create a new request and in the
// Request Name box let's put " GET /api/orders/:id " and in the Request Description box let's
// put " Get an order by id " and then press the Save to Orders button and then let's open the
// request and on the right side of the page, line 1 add the following ( and remember
// 605687827972ce2f26c6b1d7 is the order id of the current order in the database ) :

/*
    Line 1 : GET {{URL}}/api/orders/605687827972ce2f26c6b1d7            Send button

    Line 2: Params / Authorization / Headers  / Body  / Pre-request Script  / Tests / Settings
*/

// let's press the Send button and this results in the following:

/*
    "message": "Not authorized, no token",
    "stack": "Error: Not authorized, no token\n    at file: ...
*/

// and let's try this again:

/*
    Line 1 : GET {{URL}}/api/orders/605687827972ce2f26c6b1d7            Send button

    Line 2: Params / Authorization / Headers  / Body  / Pre-request Script  / Tests / Settings
    
    choose the Authorization tab and then

    Line 3: Type / Token

    for Type choose Bearer Token and for Token we should already have a valid token populating
    the Token field or {{Token}}
*/

// now let's press the Send button again and this results in the following at the bottom of
// the page:

/*
    {
        "shippingAddress": {
            "address": "3838 Vista Drive",
            "city": "Sandy",
            "postalCode": "84090",
            "country": "United States"
        },
        "shippingPrice": 0,
        "taxPrice": 692.99,
        "totalPrice": 5312.89,
        "isPaid": false,
        "isDelivered": false,
        "_id": "605687827972ce2f26c6b1d7",
        "orderItems": [
            {
                "_id": "605687827972ce2f26c6b1d8",
                "product": "5ff504545a6a66457f0b0709",
                "name": "Cannon EOS 80D DSLR Camera",
                "image": "/images/camera.jpg",
                "price": 929.99,
                "quantity": 2
            },
            {
                "_id": "605687827972ce2f26c6b1d9",
                "product": "5ff504545a6a66457f0b0708",
                "name": "iPhone 11 Pro 256GB Memory",
                "image": "/images/phone.jpg",
                "price": 599.99,
                "quantity": 4
            },
            {
                "_id": "605687827972ce2f26c6b1da",
                "product": "5ff504545a6a66457f0b0707",
                "name": "Airpods Wireless Headphones",
                "image": "/images/airpods.jpg",
                "price": 89.99,
                "quantity": 4
            }
        ],
        "paymentMethod": "Credit Card",
        "user": {
            "_id": "5ff504545a6a66457f0b0705",
            "name": "John Doe",
            "email": "john@example.com"
        },
        "createdAt": "2021-03-20T23:38:42.711Z",
        "updatedAt": "2021-03-20T23:38:42.711Z",
        "__v": 0
    }
*/

// so we were able to get the order plus the user name and user email, which is great
// so this is correct and everything is working as expected

// now let's save this route to Postman and we do that by pressing the Save button at the
// top of the Postman window

// and if we test this again with a object ID that is not valid ( change the ending 7 to 8,
// for example ):

/*
    Line 1 : GET {{URL}}/api/orders/605687827972ce2f26c6b1d8            Send button

    Line 2: Params / Authorization / Headers  / Body  / Pre-request Script  / Tests / Settings
    
    choose the Authorization tab and then

    Line 3: Type / Token

    for Type choose Bearer Token and for Token we should already have a valid token populating
    the Token field or {{Token}}
*/

// now let's press the Send button again and this results in the following at the bottom of
// the page:

/*
    {
    "message": "Order not found",
    "stack": "Error: Order not found\n    at file: ... "
    }

*/

// and this is correct so everything is working as expected

// and in the next video we will go back to the frontend and start working on the order screen
// and creating our action and reducer for fetching an order

// End of 3 -

// End of 2 -

/*
export { orderCreate, orderGet };
*/


























// ===============================


























/*
// at the beginning of lecture 58, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in the Order model and don't forget the .js extension
import Order from '../models/order.model.js';
// import in express-async-handler and this package is " Simple middleware for handling
// exceptions inside of async express routes and passing them to your express error
// handlers. "
import asyncHandler from 'express-async-handler';

// ==============================
// CONTROLLER #1
// ==============================

// Controller #1
// @desc    - Create a new order
// @route   - POST request to /api/orders
// @access  - Private route
const orderCreate = asyncHandler( async( req, res ) => {

    const { 
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,        
        totalPrice
    } = req.body;

    // let's make sure orderItems is not empty
    if ( orderItems && orderItems.length === 0 ) {

        // 400 is a bad request
        res.status( 400 );
        // throw an error
        throw new Error( 'No order items found.' );
        // exit if statement
        return;

    }
    else if ( orderItems && orderItems.length > 0 ) {

        // ==============================
        // CREATE A NEW ORDER
        // ==============================

        // instantiate / create a new order 
        const order = new Order(
            {
                orderItems      : orderItems,
                shippingAddress : shippingAddress,
                paymentMethod   : paymentMethod,
                itemsPrice      : itemsPrice,
                shippingPrice   : shippingPrice,
                taxPrice        : taxPrice,                
                totalPrice      : totalPrice,
                // in addition, we want to attach the logged in user to the order and
                // remember since this will be a protected route we will be able to get
                // a token and then get the user's id from the token
                user            : req.user._id
            }
        );

        // ==============================
        // SAVE THE ORDER IN THE DATABASE
        // ==============================

        // although we created the order above, it is not yet saved in the database and we can
        // save the order to the database by doing " await order.save(); " and we will save
        // the result of this construct to the const createdOrder
        const createdOrder = await order.save();

        // ==============================
        // SEND THE CREATEDORDER OBJECT TO THE BROWSER
        // ==============================

        // 201 " indicates that the request has succeeded and has led to the creation of a
        // resource " and then as part of the server response let's use the json data transfer
        // format to send back to browser the createdOrder object
        res.status( 201 ).json( createdOrder );

    }

} );

// ==============================
// CONTROLLER #2
// ==============================

// Controller #2
// @desc    - Get order by ID
// @route   - GET request to /api/orders/:id
// @access  - Private route
const orderGet = asyncHandler( async( req, res ) => {

    // fetch the order
    // and remember in this case we get the id value from the URL so we can use req.params.id
    // to get the id value and we also want the user's name and email that is associated with
    // this order 
    const order = await Order.findById( req.params.id ).populate( 'user', 'name email' );

    // if the order exist then send a response back to the browser
    if ( order ) {

        // send the order to the browser
        res.json( order );

    }
    // if the order does not exist then send back a status code to the browser and throw
    // a new error
    else {

        // set the status code to 404
        res.status( 404 );

        // remember as long as our route is in a valid objectId format
        // " throw new Error( 'Order not found' ); " will trigger " app.use( errorHandler ); "
        // in the server.js file

        // throw a new Error and then set the error message
        throw new Error( 'Order not found' );
    }

} );


// 4 -

// ==============================
// CONTROLLER #3
// ==============================

// Controller #3
// @desc    - Update order to paid
// @route   - PUT request to /api/orders/:id/pay
// @access  - Private route
const orderUpdateToPaid = asyncHandler( async( req, res ) => {

    // fetch the order
    // and remember in this case we get the id value from the URL so we can use req.params.id
    // to get the id value
    const order = await Order.findById( req.params.id );

    // if the order exist then do the following
    if ( order ) {

        // ==============================
        // Set the isPaid, paidAt and paymentResult properties
        // ==============================

        // set isPaid to true
        order.isPaid = true;

        // set paidAt to the current date
        order.paidAt = Data.now();

        // paymentResult and the values inside the object will come from the PayPal response

        // Brad said if we add another payment gateway we may need to add some other information
        // to the object below
        order.paymentResult = {
            id            : req.body.id,
            status        : req.body.status,
            update_time   : req.body.update_time,
            // email address comes from the payer object
            email_address : req.body.payer.email_address
        }

        // ==============================
        // Save isPaid, paidAt and paymentResult in the database
        // ==============================

        // to save isPaid, paidAt and paymentResult in the database let's create a variable
        // called updatedOrder
        const updatedOrder = await order.save();

        // send the updatedOrder to the browser
        res.json( updatedOrder );

    }
    // if the order does not exist then send back a status code to the browser and throw
    // a new error
    else {

        // set the status code to 404
        res.status( 404 );

        // remember as long as our route is in a valid objectId format
        // " throw new Error( 'Order not found' ); " will trigger " app.use( errorHandler ); "
        // in the server.js file

        // throw a new Error and then set the error message
        throw new Error( 'Order not found' );
    }

} );

// next, let's update our order routes so let's go to the order.routes.js 3 - file now


// End of 4 -

export { orderCreate, orderGet, orderUpdateToPaid };
*/


























// ===============================


























/*
// at the beginning of lecture 62, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in the Order model and don't forget the .js extension
import Order from '../models/order.model.js';
// import in express-async-handler and this package is " Simple middleware for handling
// exceptions inside of async express routes and passing them to your express error
// handlers. "
import asyncHandler from 'express-async-handler';

// ==============================
// CONTROLLER 1
// ==============================

// Controller 1
// @desc    - Create a new order
// @route   - POST request to /api/orders
// @access  - Private route
const orderCreate = asyncHandler( async( req, res ) => {

    const { 
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,        
        totalPrice
    } = req.body;

    // let's make sure orderItems is not empty
    if ( orderItems && orderItems.length === 0 ) {

        // 400 is a bad request
        res.status( 400 );
        // throw an error
        throw new Error( 'No order items found.' );
        // exit if statement
        return;

    }
    else if ( orderItems && orderItems.length > 0 ) {

        // ==============================
        // CREATE A NEW ORDER
        // ==============================

        // instantiate / create a new order 
        const order = new Order(
            {
                orderItems      : orderItems,
                shippingAddress : shippingAddress,
                paymentMethod   : paymentMethod,
                itemsPrice      : itemsPrice,
                shippingPrice   : shippingPrice,
                taxPrice        : taxPrice,                
                totalPrice      : totalPrice,
                // in addition, we want to attach the logged in user to the order and
                // remember since this will be a protected route we will be able to get
                // a token and then get the user's id from the token
                user            : req.user._id
            }
        );

        // ==============================
        // SAVE THE ORDER IN THE DATABASE
        // ==============================

        // although we created the order above, it is not yet saved in the database and we can
        // save the order to the database by doing " await order.save(); " and we will save
        // the result of this construct to the const createdOrder
        const createdOrder = await order.save();

        // ==============================
        // SEND THE CREATEDORDER OBJECT TO THE BROWSER
        // ==============================

        // 201 " indicates that the request has succeeded and has led to the creation of a
        // resource " and then as part of the server response let's use the json data transfer
        // format to send back to browser the createdOrder object
        res.status( 201 ).json( createdOrder );

    }

} );

// ==============================
// CONTROLLER 2
// ==============================

// Controller 2
// @desc    - Get order by ID
// @route   - GET request to /api/orders/:id
// @access  - Private route
const orderGet = asyncHandler( async( req, res ) => {

    // fetch the order
    // and remember in this case we get the id value from the URL so we can use req.params.id
    // to get the id value and we also want the user's name and email that is associated with
    // this order 
    const order = await Order.findById( req.params.id ).populate( 'user', 'name email' );

    // if the order exist then send a response back to the browser
    if ( order ) {

        // send the order to the browser
        res.json( order );

    }
    // if the order does not exist then send back a status code to the browser and throw
    // a new error
    else {

        // set the status code to 404
        res.status( 404 );

        // remember as long as our route is in a valid objectId format
        // " throw new Error( 'Order not found' ); " will trigger " app.use( errorHandler ); "
        // in the server.js file

        // throw a new Error and then set the error message
        throw new Error( 'Order not found' );
    }

} );


// ==============================
// CONTROLLER 3
// ==============================

// Controller 3
// @desc    - Update order to paid
// @route   - PUT request to /api/orders/:id/pay
// @access  - Private route
const orderUpdateToPaid = asyncHandler( async( req, res ) => {

    // fetch the order
    // and remember in this case we get the id value from the URL so we can use req.params.id
    // to get the id value
    const order = await Order.findById( req.params.id );

    // if the order exist then do the following
    if ( order ) {

        // ==============================
        // Set the isPaid, paidAt and paymentResult properties
        // ==============================

        // set isPaid to true
        order.isPaid = true;

        // set paidAt to the current date
        order.paidAt = Date.now();

        // paymentResult and the values inside the object will come from the PayPal response

        // Brad said if we add another payment gateway we may need to add some other information
        // to the object below
        order.paymentResult = {
            id            : req.body.id,
            status        : req.body.status,
            update_time   : req.body.update_time,
            // email address comes from the payer object
            email_address : req.body.payer.email_address
        }

        // ==============================
        // Save isPaid, paidAt and paymentResult in the database
        // ==============================

        // to save isPaid, paidAt and paymentResult in the database let's create a variable
        // called updatedOrder
        const updatedOrder = await order.save();

        // send the updatedOrder to the browser
        res.json( updatedOrder );

    }
    // if the order does not exist then send back a status code to the browser and throw
    // a new error
    else {

        // set the status code to 404
        res.status( 404 );

        // remember as long as our route is in a valid objectId format
        // " throw new Error( 'Order not found' ); " will trigger " app.use( errorHandler ); "
        // in the server.js file

        // throw a new Error and then set the error message
        throw new Error( 'Order not found' );
    }

} );


// 5 -

// ==============================
// CONTROLLER 4
// ==============================

// Controller 4
// @desc    - GET orders for logged in users
// @route   - GET request to /api/orders/myorders
// @access  - Private route
const orderListMy = asyncHandler( async( req, res ) => {

    // fetch all the orders from the database for a user
    // and remember we use find(); versus findById(); since we want find all the orders and not
    // just one particular order and pass in an object or " { user : req.user._id } " and this
    // way we only find orders for logged in users

    // so what we are saying below is that we want to find all the orders for the user that has
    // an id that matches " req.user._id "
    const orders = await Order.find( { user : req.user._id } );

    // send the orders to the browser as part of the server response
    res.json( orders );

} );

// now let's go to the order.routes.js 4 - file

// End of 5 -


export { orderCreate, orderGet, orderUpdateToPaid, orderListMy };
*/

























// ===============================


























/*
// at the beginning of lecture 65, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in the Order model and don't forget the .js extension
import Order from '../models/order.model.js';
// import in express-async-handler and this package is " Simple middleware for handling
// exceptions inside of async express routes and passing them to your express error
// handlers. "
import asyncHandler from 'express-async-handler';


// ==============================
// CONTROLLER 1
// ==============================

// Controller 1
// @desc    - Create a new order
// @route   - POST request to /api/orders
// @access  - Private route
const orderCreate = asyncHandler( async( req, res ) => {

    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,        
        totalPrice
    } = req.body;

    // let's make sure orderItems is not empty
    if ( orderItems && orderItems.length === 0 ) {

        // 400 is a bad request
        res.status( 400 );
        // throw an error
        throw new Error( 'No order items found.' );
        // exit if statement
        return;

    }
    else if ( orderItems && orderItems.length > 0 ) {

        // ==============================
        // CREATE A NEW ORDER
        // ==============================

        // instantiate / create a new order 
        const order = new Order(
            {
                orderItems      : orderItems,
                shippingAddress : shippingAddress,
                paymentMethod   : paymentMethod,
                itemsPrice      : itemsPrice,
                shippingPrice   : shippingPrice,
                taxPrice        : taxPrice,                
                totalPrice      : totalPrice,
                // in addition, we want to attach the logged in user to the order and
                // remember since this will be a protected route we will be able to get
                // a token and then get the user's id from the token
                user            : req.user._id
            }
        );

        // ==============================
        // SAVE THE ORDER IN THE DATABASE
        // ==============================

        // although we created the order above, it is not yet saved in the database and we can
        // save the order to the database by doing " await order.save(); " and we will save
        // the result of this construct to the const createdOrder
        const createdOrder = await order.save();

        // ==============================
        // SEND THE CREATEDORDER OBJECT TO THE BROWSER
        // ==============================

        // 201 " indicates that the request has succeeded and has led to the creation of a
        // resource " and then as part of the server response let's use the json data transfer
        // format to send back to browser the createdOrder object
        res.status( 201 ).json( createdOrder );

    }

} );


// ==============================
// CONTROLLER 2
// ==============================

// Controller 2
// @desc    - Get order by ID
// @route   - GET request to /api/orders/:id
// @access  - Private route
const orderGet = asyncHandler( async( req, res ) => {

    // fetch the order
    // and remember in this case we get the id value from the URL so we can use req.params.id
    // to get the id value and we also want the user's name and email that is associated with
    // this order 
    const order = await Order.findById( req.params.id ).populate( 'user', 'name email' );

    // if the order exist then send a response back to the browser
    if ( order ) {

        // send the order to the browser
        res.json( order );

    }
    // if the order does not exist then send back a status code to the browser and throw
    // a new error
    else {

        // set the status code to 404
        res.status( 404 );

        // remember as long as our route is in a valid objectId format
        // " throw new Error( 'Order not found' ); " will trigger " app.use( errorHandler ); "
        // in the server.js file

        // throw a new Error and then set the error message
        throw new Error( 'Order not found' );
    }

} );


// ==============================
// CONTROLLER 3
// ==============================

// Controller 3
// @desc    - Update order to paid
// @route   - PUT request to /api/orders/:id/pay
// @access  - Private route
const orderUpdateToPaid = asyncHandler( async( req, res ) => {

    // fetch the order
    // and remember in this case we get the id value from the URL so we can use req.params.id
    // to get the id value
    const order = await Order.findById( req.params.id );

    // if the order exist then do the following
    if ( order ) {

        // ==============================
        // Set the isPaid, paidAt and paymentResult properties
        // ==============================

        // set isPaid to true
        order.isPaid = true;

        // set paidAt to the current date
        order.paidAt = Date.now();

        // paymentResult and the values inside the object will come from the PayPal response

        // Brad said if we add another payment gateway we may need to add some other information
        // to the object below
        order.paymentResult = {
            id            : req.body.id,
            status        : req.body.status,
            update_time   : req.body.update_time,
            // email address comes from the payer object
            email_address : req.body.payer.email_address
        }

        // ==============================
        // Save isPaid, paidAt and paymentResult in the database
        // ==============================

        // to save isPaid, paidAt and paymentResult in the database let's create a variable
        // called updatedOrder
        const updatedOrder = await order.save();

        // send the updatedOrder to the browser
        res.json( updatedOrder );

    }
    // if the order does not exist then send back a status code to the browser and throw
    // a new error
    else {

        // set the status code to 404
        res.status( 404 );

        // remember as long as our route is in a valid objectId format
        // " throw new Error( 'Order not found' ); " will trigger " app.use( errorHandler ); "
        // in the server.js file

        // throw a new Error and then set the error message
        throw new Error( 'Order not found' );
    }

} );


// ==============================
// CONTROLLER 4
// ==============================

// Controller 4
// @desc    - GET orders for logged in users
// @route   - GET request to /api/orders/myorders
// @access  - Private route
const orderListMy = asyncHandler( async( req, res ) => {

    // fetch all the orders from the database for a user
    // and remember we use find(); versus findById(); since we want find all the orders and not
    // just one particular order and pass in an object or " { user : req.user._id } " and this
    // way we only find orders for logged in users

    // so what we are saying below is that we want to find all the orders for the user that has
    // an id that matches " req.user._id "
    const orders = await Order.find( { user : req.user._id } );

    // send the orders to the browser as part of the server response
    res.json( orders );

} );


// 6 -

// ==============================
// Controller 5
// ==============================

// in controller 5, we want to get a list of all the orders from the database and then return
// this information to the browser as part of the server response

// CONTROLLER 5
// @desc    - GET all orders
// @route   - GET request to /api/orders
// @access  - Private route and Admin route
const orderListAdmin = asyncHandler( async( req, res ) => {
    
    // use the find method and then pass in an empty object which will give us access
    // to all documents in the order collection

    // use .populate(); to get the user's name that is associated with a particular order
    const orders = await Order.find( {} ).populate( 'user', 'name' );

    // send the orders array to the browser as part of the server response
    res.json( orders );

} );

// now let's go to the order.routes.js 5 - file

// End of 6 -


export { 
    orderCreate,
    orderGet,
    orderUpdateToPaid,
    orderListMy,
    orderListAdmin
};
*/

























// ===============================


























/*
// at the beginning of lecture 82, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in the Order model and don't forget the .js extension
import Order from '../models/order.model.js';
// import in express-async-handler and this package is " Simple middleware for handling
// exceptions inside of async express routes and passing them to your express error
// handlers. "
import asyncHandler from 'express-async-handler';


// ==============================
// CONTROLLER 1
// ==============================

// Controller 1
// @desc    - Create a new order
// @route   - POST request to /api/orders
// @access  - Private route
const orderCreate = asyncHandler( async( req, res ) => {

    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,        
        totalPrice
    } = req.body;

    // let's make sure orderItems is not empty
    if ( orderItems && orderItems.length === 0 ) {

        // 400 is a bad request
        res.status( 400 );
        // throw an error
        throw new Error( 'No order items found.' );
        // exit if statement
        return;

    }
    else if ( orderItems && orderItems.length > 0 ) {

        // ==============================
        // CREATE A NEW ORDER
        // ==============================

        // instantiate / create a new order 
        const order = new Order(
            {
                orderItems      : orderItems,
                shippingAddress : shippingAddress,
                paymentMethod   : paymentMethod,
                itemsPrice      : itemsPrice,
                shippingPrice   : shippingPrice,
                taxPrice        : taxPrice,                
                totalPrice      : totalPrice,
                // in addition, we want to attach the logged in user to the order and
                // remember since this will be a protected route we will be able to get
                // a token and then get the user's id from the token
                user            : req.user._id
            }
        );

        // ==============================
        // SAVE THE ORDER IN THE DATABASE
        // ==============================

        // although we created the order above, it is not yet saved in the database and we can
        // save the order to the database by doing " await order.save(); " and we will save
        // the result of this construct to the const createdOrder
        const createdOrder = await order.save();

        // ==============================
        // SEND THE CREATEDORDER OBJECT TO THE BROWSER
        // ==============================

        // 201 " indicates that the request has succeeded and has led to the creation of a
        // resource " and then as part of the server response let's use the json data transfer
        // format to send back to browser the createdOrder object
        res.status( 201 ).json( createdOrder );

    }

} );


// ==============================
// CONTROLLER 2
// ==============================

// Controller 2
// @desc    - Get order by ID
// @route   - GET request to /api/orders/:id
// @access  - Private route
const orderGet = asyncHandler( async( req, res ) => {

    // fetch the order
    // and remember in this case we get the id value from the URL so we can use req.params.id
    // to get the id value and we also want the user's name and email that is associated with
    // this order 
    const order = await Order.findById( req.params.id ).populate( 'user', 'name email' );

    // if the order exist then send a response back to the browser
    if ( order ) {

        // send the order to the browser
        res.json( order );

    }
    // if the order does not exist then send back a status code to the browser and throw
    // a new error
    else {

        // set the status code to 404
        res.status( 404 );

        // remember as long as our route is in a valid objectId format
        // " throw new Error( 'Order not found' ); " will trigger " app.use( errorHandler ); "
        // in the server.js file

        // throw a new Error and then set the error message
        throw new Error( 'Order not found' );
    }

} );


// ==============================
// CONTROLLER 3
// ==============================

// Controller 3
// @desc    - Update order to paid
// @route   - PUT request to /api/orders/:id/pay
// @access  - Private route
const orderUpdateToPaid = asyncHandler( async( req, res ) => {

    // fetch the order
    // and remember in this case we get the id value from the URL so we can use req.params.id
    // to get the id value
    const order = await Order.findById( req.params.id );

    // if the order exist then do the following
    if ( order ) {

        // ==============================
        // Set the isPaid, paidAt and paymentResult properties
        // ==============================

        // set isPaid to true
        order.isPaid = true;

        // set paidAt to the current date
        order.paidAt = Date.now();

        // paymentResult and the values inside the object will come from the PayPal response

        // Brad said if we add another payment gateway we may need to add some other information
        // to the object below
        order.paymentResult = {
            id            : req.body.id,
            status        : req.body.status,
            update_time   : req.body.update_time,
            // email address comes from the payer object
            email_address : req.body.payer.email_address
        }

        // ==============================
        // Save isPaid, paidAt and paymentResult in the database
        // ==============================

        // to save isPaid, paidAt and paymentResult in the database let's create a variable
        // called updatedOrder
        const updatedOrder = await order.save();

        // send the updatedOrder to the browser
        res.json( updatedOrder );

    }
    // if the order does not exist then send back a status code to the browser and throw
    // a new error
    else {

        // set the status code to 404
        res.status( 404 );

        // remember as long as our route is in a valid objectId format
        // " throw new Error( 'Order not found' ); " will trigger " app.use( errorHandler ); "
        // in the server.js file

        // throw a new Error and then set the error message
        throw new Error( 'Order not found' );
    }

} );


// ==============================
// CONTROLLER 4
// ==============================

// Controller 4
// @desc    - GET orders for logged in users
// @route   - GET request to /api/orders/myorders
// @access  - Private route
const orderListMy = asyncHandler( async( req, res ) => {

    // fetch all the orders from the database for a user
    // and remember we use find(); versus findById(); since we want find all the orders and not
    // just one particular order and pass in an object or " { user : req.user._id } " and this
    // way we only find orders for logged in users

    // so what we are saying below is that we want to find all the orders for the user that has
    // an id that matches " req.user._id "
    const orders = await Order.find( { user : req.user._id } );

    // send the orders to the browser as part of the server response
    res.json( orders );

} );


// ==============================
// Controller 5
// ==============================

// in controller 5, we want to get a list of all the orders from the database and then return
// this information to the browser as part of the server response

// CONTROLLER 5
// @desc    - GET all orders
// @route   - GET request to /api/orders
// @access  - Private route and Admin route
const orderListAdmin = asyncHandler( async( req, res ) => {
    
    // use the find method and then pass in an empty object which will give us access
    // to all documents in the order collection

    // use .populate(); to get the user's name that is associated with a particular order
    const orders = await Order.find( {} ).populate( 'user', 'name' );

    // send the orders array to the browser as part of the server response
    res.json( orders );

} );


// 7 -

// ==============================
// CONTROLLER 6
// ==============================

// Controller 6
// @desc    - Update order to delivered
// @route   - PUT request to /api/orders/:id/delivered
// @access  - Private route and Admin route
const orderUpdateToDeliveredAdmin = asyncHandler( async( req, res ) => {

    // fetch the order
    // and remember in this case we get the id value from the URL so we can use req.params.id
    // to get the id value
    const order = await Order.findById( req.params.id );

    // if the order exist then do the following
    if ( order ) {

        // ==============================
        // Set the isDelivered and deliveredAt properties
        // ==============================

        // set isDelivered to true
        order.isDelivered = true;

        // set deliveredAt to the current date
        order.deliveredAt = Date.now();

        // ==============================
        // Save isDelivered and deliveredAt in the database
        // ==============================

        // save isDelivered and deliveredAt in the database and let's create a variable
        // called updatedOrderToMarkAsDelivered
        const updatedOrderMarkAsDelivered = await order.save();

        // send the updatedOrderMarkAsDelivered to the browser
        res.json( updatedOrderMarkAsDelivered );

    }
    // if the order does not exist then send back a status code to the browser and throw
    // a new error
    else {

        // set the status code to 404
        res.status( 404 );

        // throw a new Error and then set the error message
        throw new Error( 'Order not found' );
    }

} );

// now let's go to the order.routes.js 6 - file

// End of 7 -


export { 
    orderCreate,
    orderGet,
    orderUpdateToPaid,
    orderListMy,
    orderListAdmin,
    orderUpdateToDeliveredAdmin
};
*/


























// ===============================



























// at the beginning of lecture 82, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in the Order model and don't forget the .js extension
import Order from '../models/order.model.js';
// import in express-async-handler and this package is " Simple middleware for handling
// exceptions inside of async express routes and passing them to your express error
// handlers. "
import asyncHandler from 'express-async-handler';


// ==============================
// CONTROLLER 1
// ==============================

// Controller 1
// @desc    - Create a new order
// @route   - POST request to /api/orders
// @access  - Private route
const orderCreate = asyncHandler( async( req, res ) => {

    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,        
        totalPrice
    } = req.body;

    // let's make sure orderItems is not empty
    if ( orderItems && orderItems.length === 0 ) {

        // 400 is a bad request
        res.status( 400 );
        // throw an error
        throw new Error( 'No order items found.' );
        // exit if statement
        return;

    }
    else if ( orderItems && orderItems.length > 0 ) {

        // ==============================
        // CREATE A NEW ORDER
        // ==============================

        // instantiate / create a new order 
        const order = new Order(
            {
                orderItems      : orderItems,
                shippingAddress : shippingAddress,
                paymentMethod   : paymentMethod,
                itemsPrice      : itemsPrice,
                shippingPrice   : shippingPrice,
                taxPrice        : taxPrice,                
                totalPrice      : totalPrice,
                // in addition, we want to attach the logged in user to the order and
                // remember since this will be a protected route we will be able to get
                // a token and then get the user's id from the token
                user            : req.user._id
            }
        );

        // ==============================
        // SAVE THE ORDER IN THE DATABASE
        // ==============================

        // although we created the order above, it is not yet saved in the database and we can
        // save the order to the database by doing " await order.save(); " and we will save
        // the result of this construct to the const createdOrder
        const createdOrder = await order.save();

        // ==============================
        // SEND THE CREATEDORDER OBJECT TO THE BROWSER
        // ==============================

        // 201 " indicates that the request has succeeded and has led to the creation of a
        // resource " and then as part of the server response let's use the json data transfer
        // format to send back to browser the createdOrder object
        res.status( 201 ).json( createdOrder );

    }

} );


// ==============================
// CONTROLLER 2
// ==============================

// Controller 2
// @desc    - Get order by ID
// @route   - GET request to /api/orders/:id
// @access  - Private route
const orderGet = asyncHandler( async( req, res ) => {

    // fetch the order
    // and remember in this case we get the id value from the URL so we can use req.params.id
    // to get the id value and we also want the user's name and email that is associated with
    // this order 
    const order = await Order.findById( req.params.id ).populate( 'user', 'name email' );

    // if the order exist then send a response back to the browser
    if ( order ) {

        // send the order to the browser
        res.json( order );

    }
    // if the order does not exist then send back a status code to the browser and throw
    // a new error
    else {

        // set the status code to 404
        res.status( 404 );

        // remember as long as our route is in a valid objectId format
        // " throw new Error( 'Order not found' ); " will trigger " app.use( errorHandler ); "
        // in the server.js file

        // throw a new Error and then set the error message
        throw new Error( 'Order not found' );
    }

} );


// ==============================
// CONTROLLER 3
// ==============================

// Controller 3
// @desc    - Update order to paid
// @route   - PUT request to /api/orders/:id/pay
// @access  - Private route
const orderUpdateToPaid = asyncHandler( async( req, res ) => {

    // fetch the order
    // and remember in this case we get the id value from the URL so we can use req.params.id
    // to get the id value
    const order = await Order.findById( req.params.id );

    // if the order exist then do the following
    if ( order ) {

        // ==============================
        // Set the isPaid, paidAt and paymentResult properties
        // ==============================

        // set isPaid to true
        order.isPaid = true;

        // set paidAt to the current date
        order.paidAt = Date.now();

        // paymentResult and the values inside the object will come from the PayPal response

        // Brad said if we add another payment gateway we may need to add some other information
        // to the object below
        order.paymentResult = {
            id            : req.body.id,
            status        : req.body.status,
            update_time   : req.body.update_time,
            // email address comes from the payer object
            email_address : req.body.payer.email_address
        }

        // ==============================
        // Save isPaid, paidAt and paymentResult in the database
        // ==============================

        // to save isPaid, paidAt and paymentResult in the database let's create a variable
        // called updatedOrder
        const updatedOrder = await order.save();

        // send the updatedOrder to the browser
        res.json( updatedOrder );

    }
    // if the order does not exist then send back a status code to the browser and throw
    // a new error
    else {

        // set the status code to 404
        res.status( 404 );

        // remember as long as our route is in a valid objectId format
        // " throw new Error( 'Order not found' ); " will trigger " app.use( errorHandler ); "
        // in the server.js file

        // throw a new Error and then set the error message
        throw new Error( 'Order not found' );
    }

} );


// ==============================
// CONTROLLER 4
// ==============================

// Controller 4
// @desc    - GET orders for logged in users
// @route   - GET request to /api/orders/myorders
// @access  - Private route
const orderListMy = asyncHandler( async( req, res ) => {

    // fetch all the orders from the database for a user
    // and remember we use find(); versus findById(); since we want find all the orders and not
    // just one particular order and pass in an object or " { user : req.user._id } " and this
    // way we only find orders for logged in users

    // so what we are saying below is that we want to find all the orders for the user that has
    // an id that matches " req.user._id "
    const orders = await Order.find( { user : req.user._id } );

    // send the orders to the browser as part of the server response
    res.json( orders );

} );


// ==============================
// Controller 5
// ==============================

// in controller 5, we want to get a list of all the orders from the database and then return
// this information to the browser as part of the server response

// CONTROLLER 5
// @desc    - GET all orders
// @route   - GET request to /api/orders
// @access  - Private route and Admin route
const orderListAdmin = asyncHandler( async( req, res ) => {
    
    // use the find method and then pass in an empty object which will give us access
    // to all documents in the order collection

    // use .populate(); to get the user's name that is associated with a particular order
    const orders = await Order.find( {} ).populate( 'user', 'name' );

    // send the orders array to the browser as part of the server response
    res.json( orders );

} );


// ==============================
// CONTROLLER 6
// ==============================

// Controller 6
// @desc    - Update order to delivered
// @route   - PUT request to /api/orders/:id/delivered
// @access  - Private route and Admin route
const orderUpdateToDeliveredAdmin = asyncHandler( async( req, res ) => {

    // fetch the order
    // and remember in this case we get the id value from the URL so we can use req.params.id
    // to get the id value
    const order = await Order.findById( req.params.id );

    // if the order exist then do the following
    if ( order ) {

        // ==============================
        // Set the isDelivered and deliveredAt properties
        // ==============================

        // set isDelivered to true
        order.isDelivered = true;

        // set deliveredAt to the current date
        order.deliveredAt = Date.now();

        // ==============================
        // Save isDelivered and deliveredAt in the database
        // ==============================

        // save isDelivered and deliveredAt in the database and let's create a variable
        // called updatedOrderToMarkAsDelivered
        const updatedOrderMarkAsDelivered = await order.save();

        // send the updatedOrderMarkAsDelivered to the browser
        res.json( updatedOrderMarkAsDelivered );

    }
    // if the order does not exist then send back a status code to the browser and throw
    // a new error
    else {

        // set the status code to 404
        res.status( 404 );

        // throw a new Error and then set the error message
        throw new Error( 'Order not found' );
    }

} );


export { 
    orderCreate,
    orderGet,
    orderUpdateToPaid,
    orderListMy,
    orderListAdmin,
    orderUpdateToDeliveredAdmin
};


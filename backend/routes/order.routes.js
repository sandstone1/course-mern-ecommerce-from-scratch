
/*
// 1 -
// coming from the order.controllers.js 1 - file

// let's start by copying and pasting the code from the user.routes.js file

// import in express
import express from 'express';
// instead of creating an instance of express or " const app = express(); " and then doing
// app.get(), app.post(), app.delete(), etc. we can use the Express router to manage all of
// our routes more efficiently
// create a new Express router
const router = express.Router();
// import in the authUser controller function and remember to add the .js
import { 
    orderCreate
} from '../controllers/order.controllers.js';
// import in the requireAuth middleware
import { requireAuth } from '../middleware/auth.middleware.js';

// Route 1
// create a new order
// remember " / " equals " /api/orders "
// remember this is a protected route so we will use our requireAuth middleware
// remember in the server.js file we are doing " app.use( '/api/orders', orderRoutes ); "
// so our starting point is " /api/orders " or " / "
router.route( '/' ).post( requireAuth, orderCreate );

export default router;

// since we created a new route file we need to add this file to the server.js file and
// let's go to the server.js 11 - file now


// End of 1 -
*/
























// ===============================























/*
// at the beginning of lecture 56, given all the notes, I created a new file below without
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
    orderCreate,
    orderGet
} from '../controllers/order.controllers.js';
// import in the requireAuth middleware
import { requireAuth } from '../middleware/auth.middleware.js';

// Route 1
// create a new order
// remember " / " equals " /api/orders "
// remember this is a protected route so we will use our requireAuth middleware
// remember in the server.js file we are doing " app.use( '/api/orders', orderRoutes ); "
// so our starting point is " /api/orders " or " / "
router.route( '/' ).post( requireAuth, orderCreate );


// 2 -
// coming from the order.controllers.js 2 - file

// Route 2
// get order by id
// remember " /:id " equals " /api/orders/:id "
// remember this is a protected route so we will use our requireAuth middleware
// remember to put this route at the bottom of all the routes otherwise routes below it
// could confuse " :id " with their route
router.route( '/:id' ).get( requireAuth, orderGet );

// now let's go back to the order.controllers.js 3 - file

// End of 2 -


export default router;
*/
























// ===============================























/*
// at the beginning of lecture 56, given all the notes, I created a new file below without
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
    orderCreate,
    orderGet,
    orderUpdateToPaid
} from '../controllers/order.controllers.js';
// import in the requireAuth middleware
import { requireAuth } from '../middleware/auth.middleware.js';

// Route 1
// create a new order
// remember " / " equals " /api/orders "
// remember this is a protected route so we will use our requireAuth middleware
// remember in the server.js file we are doing " app.use( '/api/orders', orderRoutes ); "
// so our starting point is " /api/orders " or " / "
router.route( '/' ).post( requireAuth, orderCreate );

// Route 2
// get order by id
// remember " /:id " equals " /api/orders/:id "
// remember this is a protected route so we will use our requireAuth middleware
// remember to put this route at the bottom of all the routes otherwise routes below it
// could confuse " :id " with their route
router.route( '/:id' ).get( requireAuth, orderGet );


// 3 -

// Route 3
// update order to paid
// remember " /:id/pay " equals " /api/orders/:id/pay "
// remember this is a protected route so we will use our requireAuth middleware
// remember to put this route and route 2 at the bottom of all the routes otherwise routes
// below it could confuse " :id/pay " with their route
router.route( '/:id/pay' ).put( requireAuth, orderUpdateToPaid );

// and this should take care of our backend with regard to setting the database to isPaid
// and in the next video we will go back into the frontend and add the reducer and action
// for the isPaid functionality

// End of 3 -


export default router;
*/
























// ===============================























/*
// at the beginning of lecture 62, given all the notes, I created a new file below without
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
    orderCreate,
    orderGet,
    orderUpdateToPaid,
    orderListMy
} from '../controllers/order.controllers.js';
// import in the requireAuth middleware
import { requireAuth } from '../middleware/auth.middleware.js';

// Route 1
// create a new order
// remember " / " equals " /api/orders "
// remember this is a protected route so we will use our requireAuth middleware
// remember in the server.js file we are doing " app.use( '/api/orders', orderRoutes ); "
// so our starting point is " /api/orders " or " / "
router.route( '/' ).post( requireAuth, orderCreate );


// 4 -
// coming from the order.controllers.js 5 - file

// Route 4
// get orders for logged in users
// remember " /myorders " equals " /api/orders/myorders "
// remember this is a protected route so we will use our requireAuth middleware
router.route( '/myorders' ).get( requireAuth, orderListMy );

// and let's test this in Postman and to do that we need to create a new request called
// GET /api/orders/myorders and then on the right side of the page let's do:

/*
    Line 1 : GET {{URL}}/api/orders/myorders            Send button

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
        "shippingAddress": {
            "address": "3838 Vista Drive",
            "city": "Sandy",
            ...
    }
    {
        "shippingAddress": {
            "address": "3838 Vista Drive",
            "city": "Sandy",
            ...
    }
        {
        "shippingAddress": {
            "address": "3838 Vista Drive",
            "city": "Sandy",
            ...
    }
        {
        "shippingAddress": {
            "address": "3838 Vista Drive",
            "city": "Sandy",
            ...
    }
*/

// so we see the 4 orders from John Doe and this is correct so everything is working as
// expected

// and now let's save our request in Postman by pressing the Save button at the top of the
// screen

// now let's go back to the frontend and add the flow for that and let's start with our
// constants and let's go to the order.constants.js 4 - file now

// End of 4 -


// Route 2
// get order by id
// remember " /:id " equals " /api/orders/:id "
// remember this is a protected route so we will use our requireAuth middleware
// remember to put this route at the bottom of all the routes otherwise routes below it
// could confuse " :id " with their route
/*
router.route( '/:id' ).get( requireAuth, orderGet );

// Route 3
// update order to paid
// remember " /:id/pay " equals " /api/orders/:id/pay "
// remember this is a protected route so we will use our requireAuth middleware
// remember to put this route and route 2 at the bottom of all the routes otherwise routes
// below it could confuse " :id/pay " with their route
router.route( '/:id/pay' ).put( requireAuth, orderUpdateToPaid );


export default router;
*/
























// ===============================























/*
// at the beginning of lecture 65, given all the notes, I created a new file below without
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
    orderCreate,
    orderGet,
    orderUpdateToPaid,
    orderListMy,
    orderListAdmin
} from '../controllers/order.controllers.js';
// import in the requireAuth and admin middleware functions
import { requireAuth, admin } from '../middleware/auth.middleware.js';

// Route 1
// create a new order
// remember " / " equals " /api/orders "
// remember this is a protected route so we will use our requireAuth middleware
// remember in the server.js file we are doing " app.use( '/api/orders', orderRoutes ); "
// so our starting point is " /api/orders " or " / "
router.route( '/' ).post( requireAuth, orderCreate );


// Route 4
// get orders for logged in users
// remember " /myorders " equals " /api/orders/myorders "
// remember this is a protected route so we will use our requireAuth middleware
router.route( '/myorders' ).get( requireAuth, orderListMy );


// 5 -
// coming from order.controllers.js 6 -

// Route 5
// get all orders
// remember " / " equals " /api/orders "

// to access this route the user needs 2 things: one, the user needs authorization and
// authorization is determined based on having a valid token and two, the user needs to
// be an admin user in order to access this route
router.route( '/' ).get( requireAuth, admin, orderListAdmin );

// now let's go back to the frontend and go to the order.constants.js 5 - file now

// End of 5 -


// Route 2
// get order by id
// remember " /:id " equals " /api/orders/:id "
// remember this is a protected route so we will use our requireAuth middleware
// remember to put this route at the bottom of all the routes otherwise routes below it
// could confuse " :id " with their route
router.route( '/:id' ).get( requireAuth, orderGet );

// Route 3
// update order to paid
// remember " /:id/pay " equals " /api/orders/:id/pay "
// remember this is a protected route so we will use our requireAuth middleware
// remember to put this route and route 2 at the bottom of all the routes otherwise routes
// below it could confuse " :id/pay " with their route
router.route( '/:id/pay' ).put( requireAuth, orderUpdateToPaid );


export default router;
*/
























// ===============================























/*
// at the beginning of lecture 82, given all the notes, I created a new file below without
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
    orderCreate,
    orderGet,
    orderUpdateToPaid,
    orderListMy,
    orderListAdmin,
    orderUpdateToDeliveredAdmin
} from '../controllers/order.controllers.js';
// import in the requireAuth and admin middleware functions
import { requireAuth, admin } from '../middleware/auth.middleware.js';

// Route 1
// create a new order
// remember " / " equals " /api/orders "
// remember this is a protected route so we will use our requireAuth middleware
// remember in the server.js file we are doing " app.use( '/api/orders', orderRoutes ); "
// so our starting point is " /api/orders " or " / "
router.route( '/' ).post( requireAuth, orderCreate );


// Route 4
// get orders for logged in users
// remember " /myorders " equals " /api/orders/myorders "
// remember this is a protected route so we will use our requireAuth middleware
router.route( '/myorders' ).get( requireAuth, orderListMy );


// Route 5
// get all orders
// remember " / " equals " /api/orders "

// to access this route the user needs 2 things: one, the user needs authorization and
// authorization is determined based on having a valid token and two, the user needs to
// be an admin user in order to access this route
router.route( '/' ).get( requireAuth, admin, orderListAdmin );


// Route 2
// get order by id
// remember " /:id " equals " /api/orders/:id "
// remember this is a protected route so we will use our requireAuth middleware
// remember to put this route at the bottom of all the routes otherwise routes below it
// could confuse " :id " with their route
router.route( '/:id' ).get( requireAuth, orderGet );

// Route 3
// update order to paid
// remember " /:id/pay " equals " /api/orders/:id/pay "
// remember this is a protected route so we will use our requireAuth middleware
// remember to put this route and route 2 at the bottom of all the routes otherwise routes
// below it could confuse " :id/pay " with their route
router.route( '/:id/pay' ).put( requireAuth, orderUpdateToPaid );


// 6 -
// coming from order.controllers.js 7 -

// Route 6
// update order to delivered
// remember " /:id/delivered " equals " /api/orders/:id/delivered "

// to access this route the user needs 2 things: one, the user needs authorization and
// authorization is determined based on having a valid token and two, the user needs to
// be an admin user in order to access this route
router.route( '/:id/delivered' ).put( requireAuth, admin, orderUpdateToDeliveredAdmin );

// now let's go back to the frontend and go to the order.constants.js 6 - file now

// End of 6 -


export default router;
*/
























// ===============================
























// at the beginning of lecture 83, given all the notes, I created a new file below without
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
    orderCreate,
    orderGet,
    orderUpdateToPaid,
    orderListMy,
    orderListAdmin,
    orderUpdateToDeliveredAdmin
} from '../controllers/order.controllers.js';
// import in the requireAuth and admin middleware functions
import { requireAuth, admin } from '../middleware/auth.middleware.js';


// Route 1
// create a new order
// remember " / " equals " /api/orders "
// remember this is a protected route so we will use our requireAuth middleware
// remember in the server.js file we are doing " app.use( '/api/orders', orderRoutes ); "
// so our starting point is " /api/orders " or " / "
router.route( '/' ).post( requireAuth, orderCreate );


// Route 4
// get orders for logged in users
// remember " /myorders " equals " /api/orders/myorders "
// remember this is a protected route so we will use our requireAuth middleware
router.route( '/myorders' ).get( requireAuth, orderListMy );


// Route 5
// get all orders
// remember " / " equals " /api/orders "

// to access this route the user needs 2 things: one, the user needs authorization and
// authorization is determined based on having a valid token and two, the user needs to
// be an admin user in order to access this route
router.route( '/' ).get( requireAuth, admin, orderListAdmin );


// Route 2
// get order by id
// remember " /:id " equals " /api/orders/:id "
// remember this is a protected route so we will use our requireAuth middleware
// remember to put this route at the bottom of all the routes otherwise routes below it
// could confuse " :id " with their route
router.route( '/:id' ).get( requireAuth, orderGet );


// Route 3
// update order to paid
// remember " /:id/pay " equals " /api/orders/:id/pay "
// remember this is a protected route so we will use our requireAuth middleware
// remember to put this route and route 2 at the bottom of all the routes otherwise routes
// below it could confuse " :id/pay " with their route
router.route( '/:id/pay' ).put( requireAuth, orderUpdateToPaid );


// Route 6
// update order to delivered
// remember " /:id/delivered " equals " /api/orders/:id/delivered "

// to access this route the user needs 2 things: one, the user needs authorization and
// authorization is determined based on having a valid token and two, the user needs to
// be an admin user in order to access this route
router.route( '/:id/delivered' ).put( requireAuth, admin, orderUpdateToDeliveredAdmin );


export default router;


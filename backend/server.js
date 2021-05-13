
/*
// import in express
const express = require( 'express' );

// since node 14.4 we can now use ES modules instead of the syntax above and
// we will move ES modules later

// initialize express
const app = express();

// skip 1 - below and go to app.listen();


// 1 -
// coming from the last line below
// now let's create a route
app.get( '/', ( req, res ) => {

    // and after we get a request from the browser let's send a response
    res.send( 'API is running' ); 

} );

// and let's test this out by first running " npm start " in the integrated terminal

/*
Rogers-iMac:mern_ecommerce_from_scratch Home$ npm start

> mern_ecommerce_from_scratch@1.0.0 start /Applications/MAMP/htdocs/stoneburyhomes/misc/brad_traversy/mern_ecommerce_from_scratch
> node backend/server

server running on port 5000
[ cursor here ]
*/

// then let's go to " localhost:5000 " and press enter and this will send a request to the server
// and then the server will send a response back to the browser based on app.get(); above and
// that response will be " API is running " and we see that everything is working as expected


// next let's create an API route
// but first we need to change " export default products " in the products.js file to
// " module.exports = products " and then import products below
/*
const products = require( './data/products' );

app.get( '/api/products', ( req, res ) => {

    // and then do " res.json( products ); " and res.json(); will convert our products array into
    // the json content type 
    res.json( products ); 

} );

// and let's test this out by restarting our server and then running " npm start " in the
// integrated terminal

/*
Rogers-iMac:mern_ecommerce_from_scratch Home$ npm start

> mern_ecommerce_from_scratch@1.0.0 start /Applications/MAMP/htdocs/stoneburyhomes/misc/brad_traversy/mern_ecommerce_from_scratch
> node backend/server

server running on port 5000
[ cursor here ]
*/

// then let's go to " localhost:5000/api/products " and press enter and this will send a request
// to the server and then the server will send a response back to the browser based on
// app.get( '/api/products', ... ); above and that response will be our products array or:

/*
[{"_id":"1","name":"Airpods Wireless Bluetooth Headphones","image":"/images/airpods.jpg",
"description":"Bluetooth technology lets you connect it with compatible devices wirelessly
High-quality AAC audio offers immersive listening experience Built-in microphone allows you
to take calls while working","brand":"Apple","category":"Electronics","price":89.99,
"countInStock":10,"rating":4.5,"numReviews":12},{"_id":"2", ... ]
*/

// and we see that everything is working as expected


// next we want to create a route to get a single product
/*
app.get( '/api/products/:id', ( req, res ) => {

    // and let's use the same contruct we used on the front end but instead of
    // " match.params.id " we use the request object or " req.params.id "
    const product = products.find( ( product ) => product._id === req.params.id );

    res.json( product ); 

} );

// and let's test this out by restarting our server and then running " npm start " in the
// integrated terminal

/*
Rogers-iMac:mern_ecommerce_from_scratch Home$ npm start

> mern_ecommerce_from_scratch@1.0.0 start /Applications/MAMP/htdocs/stoneburyhomes/misc/brad_traversy/mern_ecommerce_from_scratch
> node backend/server

server running on port 5000
[ cursor here ]
*/

// then let's go to " localhost:5000/api/products/2 " and press enter and this will send a request
// to the server and then the server will send a response back to the browser based on
// app.get( '/api/products/:id', ... ); above and that response will be product #2 or:

/*
{"_id":"2","name":"iPhone 11 Pro 256GB Memory","image":"/images/phone.jpg",
"description":"Introducing the iPhone 11 Pro. A transformative triple-camera system that adds
tons of capability without complexity. An unprecedented leap in battery life","brand":"Apple",
"category":"Electronics","price":599.99,"countInStock":7,"rating":4,"numReviews":8}
*/

// and this is correct so everything is working as expected

// and now let's jump back into react and make a request to the backend to get those products

// End of 1 -

/*
app.listen( 5000, console.log( 'server running on port 5000' ) );

// and now let's test this out in the integrated terminal by typing " node backend/server "

/*
Rogers-iMac:mern_ecommerce_from_scratch Home$ node backend/server
server running on port 5000
[ cursor here ]
*/

// so with 3 lines of code we can see our server running and to prevent us from running
// " node backend/server " let's go into our package.json file that is located in the root
// and change " "test": "echo \"Error: no test specified\" && exit 1" " to
// " "start": "node backend/server" " and now we can run our server with " npm start " which
// is great

/*
Rogers-iMac:mern_ecommerce_from_scratch Home$ npm start

> mern_ecommerce_from_scratch@1.0.0 start /Applications/MAMP/htdocs/stoneburyhomes/misc/brad_traversy/mern_ecommerce_from_scratch
> node backend/server

server running on port 5000
[ cursor here ]
*/

// and now let's go to 1 - above














// ===============================

















// at the beginning of lecture 12, given all the notes, I created a new file below without
// the notes so we are starting fresh


/*
// import in express
const express = require( 'express' );
// import products below
const products = require( './data/products' );


// 2 -
// import in dotenv
const dotenv = require( 'dotenv' );

dotenv.config();

// now let's create our .env file in the root directory and this is where we can define any
// environment variables and to start we will set our node environemnt to development and we
// will set the port equal to 5000 or

/*
NODE_ENV = development
PORT = 5000
*/

// and let's go to that file now

// and remember to restart the server and let's set the port below

// End of 2 -


/*
// initialize express
const app = express();



// ROUTE 1
// now let's create a route
app.get( '/', ( req, res ) => {

    // and after we get a request from the browser let's send a response
    res.send( 'API is running' ); 

} );


// ROUTE 2
// next let's create an API route
app.get( '/api/products', ( req, res ) => {

    res.json( products ); 

} );


// ROUTE 3
// next we want to create a route to get a single product
app.get( '/api/products/:id', ( req, res ) => {

    // and let's use the same contruct we used on the front end but instead of
    // " match.params.id " we use the request object or " req.params.id "
    const product = products.find( ( product ) => product._id === req.params.id );

    res.json( product ); 

} );


// 2 - continued
const PORT = process.env.PORT || 5000;

// and then change " app.listen( 5000, console.log( 'server running on port 5000' ) ); "
// to " app.listen( PORT, console.log( `server running in ${ process.env.NODE_ENV } mode on port ${ PORT }` ) ); "  
// and without having to restart the server if we go to the integrated terminal we now see
// " server running in development mode on port 5000 " and this is correct so everything is
// working as expected 

// let's use app.listen(); to show that our server is working 
app.listen(
    PORT,
    console.log( `server running in ${ process.env.NODE_ENV } mode on port ${ PORT }` )
);

// and remember we always want to put the .env file in the .gitignore file and when I go to
// the .gitignore file I see the .env file is already there so that's great

// in the next video we will convert the CommonJS syntax we've been using to the ES module syntax

// End of 2 -
*/















// ===============================


















// at the beginning of lecture 15, given all the notes, I created a new file below without
// the notes so we are starting fresh


/*
// import in express
const express = require( 'express' );
// import products below
const products = require( './data/products' );
// import in dotenv
const dotenv = require( 'dotenv' );
*/

/*
// 3 -
// convert the imports above to use ES modules
import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js';

// annd then comment out the 3 imports above 

// and then we have to go to the products.js file and change the way we export the file

// so now we can use ES modules on both the frontend and backend and the next thing we will
// do is start to build our database and we will be using MongoDB Atlas which is a cloud database
// and we will also use MongoDB Compass and MongoDB Compass is a desktop program that allows us
// to log into our database and see our data and change our data

// End of 3 -


// call config() on dotenv
dotenv.config();


// initialize express
const app = express();


// ROUTE 1
// now let's create a route
app.get( '/', ( req, res ) => {

    // and after we get a request from the browser let's send a response
    res.send( 'API is running' ); 

} );


// ROUTE 2
// next let's create an API route
app.get( '/api/products', ( req, res ) => {

    res.json( products ); 

} );


// ROUTE 3
// next we want to create a route to get a single product
app.get( '/api/products/:id', ( req, res ) => {

    // and let's use the same contruct we used on the front end but instead of
    // " match.params.id " we use the request object or " req.params.id "
    const product = products.find( ( product ) => product._id === req.params.id );

    res.json( product ); 

} );


// set the port number
const PORT = process.env.PORT || 5000;


// let's use app.listen(); to show that our server is working 
app.listen(
    PORT,
    console.log( `server running in ${ process.env.NODE_ENV } mode on port ${ PORT }` )
);
*/


















// ===============================



















// at the beginning of lecture 15, given all the notes, I created a new file below without
// the notes so we are starting fresh

/*
import express from 'express';
import dotenv from 'dotenv';


// 4 -
// import in connectDB
import connectDB from './config/db.js';

// End of 4 -


import products from './data/products.js';


// call config() on dotenv
dotenv.config();


// 4 - continued
// connect to the database by running connectDB
connectDB();

// and now when we run our application we should connect to the database and let's test this
// out in the integrated terminal

/*
Rogers-iMac:mern_ecommerce_from_scratch Home$ npm run dev

server running in development mode on port 5000
MongoDB Connected: cluster1-shard-00-00.ygd2v.mongodb.net
*/

// and this is correct so everything is working as expected

// so we are now connected to the MongoDB database and we now need to start to model our
// data but before we do this we will install a package called " colors " and this package
// will add colors to our console and thereby make our messages stand out a little more

// End of 4 -

/*
// initialize express
const app = express();


// ROUTE 1
// now let's create a route
app.get( '/', ( req, res ) => {

    // and after we get a request from the browser let's send a response
    res.send( 'API is running' ); 

} );


// ROUTE 2
// next let's create an API route
app.get( '/api/products', ( req, res ) => {

    res.json( products ); 

} );


// ROUTE 3
// next we want to create a route to get a single product
app.get( '/api/products/:id', ( req, res ) => {

    // and let's use the same contruct we used on the front end but instead of
    // " match.params.id " we use the request object or " req.params.id "
    const product = products.find( ( product ) => product._id === req.params.id );

    res.json( product ); 

} );


// set the port number
const PORT = process.env.PORT || 5000;


// let's use app.listen(); to show that our server is working 
app.listen(
    PORT,
    console.log( `The server running in ${ process.env.NODE_ENV } mode on port ${ PORT }` )
);
*/



















// ===============================



















// at the beginning of lecture 18, given all the notes, I created a new file below without
// the notes so we are starting fresh

/*
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import products from './data/products.js';


// 5 -
import colors from 'colors';

// now let's go to the db.js and add colors / underline / bold and then let's go to app.listen();
// below and add the color yellow and bold the color as well

// next we will start to create some data models and remember with NoSQL you set up the data
// models on the application level whereas with MySQL or Postgres you set up the data models
// on the database level
// End of 5 -


// call config() on dotenv
dotenv.config();


// connect to the database
connectDB();


// create an instance of express
const app = express();


// ROUTE 1
// now let's create a route
app.get( '/', ( req, res ) => {

    // and after we get a request from the browser let's send a response
    res.send( 'API is running' ); 

} );


// ROUTE 2
// next let's create an API route
app.get( '/api/products', ( req, res ) => {

    res.json( products ); 

} );


// ROUTE 3
// next we want to create a route to get a single product
app.get( '/api/products/:id', ( req, res ) => {

    // and let's use the same contruct we used on the front end but instead of
    // " match.params.id " we use the request object or " req.params.id "
    const product = products.find( ( product ) => product._id === req.params.id );

    res.json( product ); 

} );


// set the port number
const PORT = process.env.PORT || 5000;


// let's use app.listen(); to show that our server is working and use the colors.js package at
// the end
app.listen(
    PORT,
    console.log( `The server running in ${ process.env.NODE_ENV } mode on port ${ PORT }`
    .yellow.bold )
);
*/
















// ===============================



















// at the beginning of lecture 18, given all the notes, I created a new file below without
// the notes so we are starting fresh
/*
// const express = require( 'express' );
import express from 'express';
// const dotenv = require( 'dotenv' );
import dotenv from 'dotenv';
// const colors = require( 'colors' );
import colors from 'colors';
// const connectDB = require( './config/db.js' );
import connectDB from './config/db.js';
// const products = require( './data/products.js' );
// import products from './data/products.js';


// 6 -
// move routes 2 & 3 to the product.routes.js file and then import in product.routes.js and
// remember to add .js
import productRoutes from './routes/product.routes.js';

// End of 6 -


// call config() on dotenv
dotenv.config();


// connect to the database
connectDB();


// create an instance of express
const app = express();


// ROUTE 1
// now let's create a route
app.get( '/', ( req, res ) => {

    // and after we get a request from the browser let's send a response
    res.send( 'API is running' ); 

} );


// 6 - continued
// below we are saying that we will link any route that goes to " '/api/products' " to
// productRoutes
app.use( '/api/products', productRoutes );

// and then we can delete " import products from './data/products.js'; " since we won't be
// using that file any longer and now let's go back to the product.routes.js 2 - file

// End of 6 -


// set the port number
const PORT = process.env.PORT || 5000;


// let's use app.listen(); to show that our server is working and use the colors.js package at
// the end
app.listen(
    PORT,
    console.log( `The server running in ${ process.env.NODE_ENV } mode on port ${ PORT }`
    .yellow.bold )
);
*/
















// ===============================















// at the beginning of lecture 23, given all the notes, I created a new file below without
// the notes so we are starting fresh

/*
// import in express
import express from 'express';
// import in dotenv
import dotenv from 'dotenv';
// import in colors
import colors from 'colors';
// import in our product routes
import productRoutes from './routes/product.routes.js';
// import in the connectDB function, which will connect our application to the database
import connectDB from './config/db.js';


// 9 -
// import in the notFound and errorHandler middleware functions
import { notFound, errorHandler } from './middleware/error.middleware.js';

// End of 9 -


// call config() on dotenv
dotenv.config();


// connect to the database
connectDB();


// create an instance of express
const app = express();


// ROUTE 1
// now let's create a route
app.get( '/', ( req, res ) => {

    // and after we get a request from the browser let's send a response
    res.send( 'API is running' ); 

} );


// link any route that goes to " '/api/products' " to productRoutes
app.use( '/api/products', productRoutes );


// 8 -
// handle 404 errors
// cut and paste the function below into the error.middleware.js 1 - file

// 9 - continued
// add the middleware function notFound to app.use();
app.use( notFound );

// End of 9 -

// now let's create a middleware folder and then create a file inside the middleware folder
// called " error.middleware.js " and let's put our middleware in this file rather than
// clutter up our server.js file and let's go to the error.middleware.js 1 - file now

// End of 8 -


// 7 -
// remember middleware is basically a function that has access to the request and response
// cycle and remember you always have to call next to move to the next piece of middleware

// let's create some custom error middleware and if we want to override the default error
// handler from Express then we need to pass in 4 arguments to the function below or " err ",
// " req ", " res " and " next "

// cut and paste the function below into the error.middleware.js 2 - file

// 9 - continued
// add the middleware function errorHandler to app.use();
app.use( errorHandler );

// and now let's test this out our notFound function by going to Postman and change one of our
// routes to a bad route like " {{ URL }}/api/1 " and this results in the following:

/*
{
    "message": "Not Found - /api/1",
    "stack": "Error: Not Found - /api/1\n    at file:///Applications/MAMP/htdocs/
    stoneburyhomes/misc/brad_traversy/mern_ecommerce_from_scratch/backend/server.js:832:19\n
    at Layer.handle [as handle_request] (/Applications/MAMP/htdocs/stoneburyhomes/misc/
    brad_traversy/mern_ecommerce_from_scratch/node_modules/express/lib/router/layer.js:95:5)
    \n ... 
}
*/

// and this is correct so everything is working as expected

// and now let's test this out our errorHandler function by going to Postman and change one of
// our routes to a bad route like " {{URL}}/api/products/1 " and this results in the following:

/*
{
    "message":"Cast to ObjectId failed for value \"1\" at path \"_id\" for model
    \"Product\"",
    "stack":"CastError: Cast to ObjectId failed for value \"1\" at path
    \"_id\" for model \"Product\"\n at model.Query.exec (/Applications/MAMP/htdocs/
    stoneburyhomes/misc/brad_traversy/mern_ecommerce_from_scratch/node_modules/mongoose/
    lib/query.js:4358:21)\n at model.Query.Query.then (/Applications/MAMP/htdocs/
    stoneburyhomes/misc/brad_traversy/mern_ecommerce_from_scratch/node_modules/
    mongoose/lib/query.js:4450:15)\n at processTicksAndRejections (internal/process/
    task_queues.js:93:5)"
}
*/

// and this is correct so everything is working as expected

// and now let's go to the product.routes.js 4 - file

// End of 9 -

// End of 7 -


// set the port number
/*
const PORT = process.env.PORT || 5000;


// let's use app.listen(); to show that our server is working and use the colors.js package at
// the end
app.listen(
    PORT,
    console.log( `The server is running in ${ process.env.NODE_ENV } mode on port ${ PORT }`
    .yellow.bold )
);
*/






















// ===============================























// at the beginning of lecture 25, given all the notes, I created a new file below without
// the notes so we are starting fresh

/*
// import in express
import express from 'express';
// import in dotenv
import dotenv from 'dotenv';
// import in colors
import colors from 'colors';
// import in our product routes
import productRoutes from './routes/product.routes.js';


// 10 - continued
// import in our user routes
import userRoutes from './routes/user.routes.js';

// End of 10 -


// import in the connectDB function, which will connect our application to the database
import connectDB from './config/db.js';
// import in the notFound and errorHandler middleware functions
import { notFound, errorHandler } from './middleware/error.middleware.js';


// call config() on dotenv
dotenv.config();


// connect to the database
connectDB();


// create an instance of express
const app = express();


// 10 -
// coming from the user.routes.js 1 - file
// add the construct below so we can parse data from the body
app.use( express.json() );

// End of 10 -


// ROUTE 1
// now let's create a route
app.get( '/', ( req, res ) => {

    // and after we get a request from the browser let's send a response
    res.send( 'API is running' ); 

} );


// bring in the productRoutes
app.use( productRoutes );


// 10 - continued
// bring in the userRoutes and remember to import in userRoutes above
app.use( userRoutes );

// and now if we go back to Postman and press the Send button, the response we get back is:

/*
{
    "email": "test@example.com",
    "password": 12345
}
*/

// and the response matches what we sent in the request body or:

/*
{
    "email": "test@example.com",
    "password": 12345
}
*/

// this is correct so everything is working as expected

// so we now have access to the email and password that is being sent as part of the request
// and now let's go back to the user.controller.js 2 - file

// End of 10 -


/*
// add the middleware function notFound to app.use();
app.use( notFound );


// add the middleware function errorHandler to app.use();
app.use( errorHandler );


// set the port number
const PORT = process.env.PORT || 5000;


// let's use app.listen(); to show that our server is working and use the colors.js package at
// the end
app.listen(
    PORT,
    console.log( `The server is running in ${ process.env.NODE_ENV } mode on port ${ PORT }`
    .yellow.bold )
);
*/





















// ===============================























/*
// at the beginning of lecture 38, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in express
import express from 'express';
// import in dotenv
import dotenv from 'dotenv';
// import in colors
import colors from 'colors';
// import in our product routes
import productRoutes from './routes/product.routes.js';
// import in our user routes
import userRoutes from './routes/user.routes.js';
// import in the connectDB function, which will connect our application to the database
import connectDB from './config/db.js';
// import in the notFound and errorHandler middleware functions
import { notFound, errorHandler } from './middleware/error.middleware.js';


// 11 -
// coming from the order.routes.js 1 - file
// import in our order routes
import orderRoutes from './routes/order.routes.js';

// add these routes down below

// so now we are all set on the backend and in the next video we will go back to the
// frontend and work on our action creator and we'll make the Place Order button work

// End of 11 -


// call config() on dotenv
dotenv.config();


// connect to the database
connectDB();


// create an instance of express
const app = express();


// add the construct below so we can parse data from the body or req.body
app.use( express.json() );


// ROUTE 1
// now let's create a route
app.get( '/', ( req, res ) => {

    // and after we get a request from the browser let's send a response
    res.send( 'API is running' ); 

} );


// bring in the productRoutes
app.use( '/api/products', productRoutes );
// bring in the userRoutes
app.use( '/api/users', userRoutes );
// bring in the orderRoutes
app.use( '/api/orders', orderRoutes );


// add the middleware function notFound to app.use();
app.use( notFound );


// add the middleware function errorHandler to app.use();
app.use( errorHandler );


// set the port number
const PORT = process.env.PORT || 5000;


// let's use app.listen(); to show that our server is working and use the colors.js package at
// the end
app.listen(
    PORT,
    console.log( `The server is running in ${ process.env.NODE_ENV } mode on port ${ PORT }`
    .yellow.bold )
);
*/


























// ===============================


























/*
// at the beginning of lecture 56, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in express
import express from 'express';
// import in dotenv
import dotenv from 'dotenv';
// import in colors
import colors from 'colors';
// import in our product routes
import productRoutes from './routes/product.routes.js';
// import in our user routes
import userRoutes from './routes/user.routes.js';
// import in our order routes
import orderRoutes from './routes/order.routes.js';
// import in the connectDB function, which will connect our application to the database
import connectDB from './config/db.js';
// import in the notFound and errorHandler middleware functions
import { notFound, errorHandler } from './middleware/error.middleware.js';


// call config() on dotenv
dotenv.config();


// connect to the database
connectDB();


// create an instance of express
const app = express();


// add the construct below so we can parse data from the body or req.body
app.use( express.json() );


// ROUTE 1
// now let's create a route
app.get( '/', ( req, res ) => {

    // and after we get a request from the browser let's send a response
    res.send( 'API is running' ); 

} );


// bring in the productRoutes
app.use( '/api/products', productRoutes );
// bring in the userRoutes
app.use( '/api/users', userRoutes );
// bring in the orderRoutes
app.use( '/api/orders', orderRoutes );


// 12 -

// ROUTE 2
// create a route to access the PayPal Client ID
app.get( '/api/config/paypal', ( req, res ) => {

    // and after we get a request from the browser let's send a response
    // and that reponse will be the PayPal Client ID

    // so when a user is ready to make a payment then we will hit this route and we will
    // fetch our PayPal Client ID
    res.send( process.env.PAYPAL_CLIENT_ID ); 

} );

// now in order to implement PayPal let's go back to the order-screen.component.jsx 2 - file

// End of 12 -


// add the middleware function notFound to app.use();
app.use( notFound );


// add the middleware function errorHandler to app.use();
app.use( errorHandler );


// set the port number
const PORT = process.env.PORT || 5000;


// let's use app.listen(); to show that our server is working and use the colors.js package at
// the end
app.listen(
    PORT,
    console.log( `The server is running in ${ process.env.NODE_ENV } mode on port ${ PORT }`
    .yellow.bold )
);
*/



























// ===============================


























/*
// at the beginning of lecture 64, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in express
import express from 'express';
// import in dotenv
import dotenv from 'dotenv';
// import in colors
import colors from 'colors';
// import in our product routes
import productRoutes from './routes/product.routes.js';
// import in our user routes
import userRoutes from './routes/user.routes.js';
// import in our order routes
import orderRoutes from './routes/order.routes.js';
// import in our upload routes
import uploadRoutes from './routes/upload.routes.js';
// import in the connectDB function, which will connect our application to the database
import connectDB from './config/db.js';
// import in the notFound and errorHandler middleware functions
import { notFound, errorHandler } from './middleware/error.middleware.js';


// 14 -

// import in the path module and this is a node.js module to work with file paths
import path from 'path';

// End of 14 -


// call config() on dotenv
dotenv.config();


// connect to the database
connectDB();


// create an instance of express
const app = express();


// add the construct below so we can parse data from the body or req.body
app.use( express.json() );


// ROUTE 1
// now let's create a route
app.get( '/', ( req, res ) => {

    // and after we get a request from the browser let's send a response
    res.send( 'API is running' ); 

} );


// bring in the productRoutes
app.use( '/api/products', productRoutes );
// bring in the userRoutes
app.use( '/api/users', userRoutes );
// bring in the orderRoutes
app.use( '/api/orders', orderRoutes );


// 13 -

// bring in the uploadRoutes
app.use( '/api/upload', uploadRoutes );

// there is one more thing we need to do ( remember the uploads folder will not be accessible
// by default ) and we need to make the uploads folder a static folder so that it can get
// loaded in the browser and making a folder static in express is pretty easy and let's do that
// in 14 - below

// End of 13 -


// ROUTE 2
// create a route to access the PayPal Client ID
app.get( '/api/config/paypal', ( req, res ) => {

    // as soon as the OrderScreen component loads we will hit the route above and then
    // fetch our PayPal client id and send the PayPal client id back to browser as part
    // of the server response
    res.send( process.env.PAYPAL_CLIENT_ID ); 

} );


// 14 - continued

// make the uploads folder a static folder

// as an argument to static() let's pass in path.join()

// remember " The path.join() method joins the specified path segments into one path. "

// remember " directory name ( i.e. __dirname ) gets us the absolute path of the current folder
// that we are in and file name ( i.e. __dirname ) gets us the absolute path of the current folder
// that we are in plus the file name

// console.log( __dirname ); gives us the following path:
// " /Applications/MAMP/htdocs/stoneburyhomes/misc/brad_traversy/mern_ecommerce_from_scratch "
// in the integrated terminal

// so path.join( __dirname, '/uploads' ); gives us
// " /Applications/MAMP/htdocs/stoneburyhomes/misc/brad_traversy/mern_ecommerce_from_scratch/uploads "

// for es modules we have to resolve __dirname
const __dirname = path.resolve();

// remember " The app.use() function is used to mount the specified middleware function(s) at the
// path which is being specified. It is mostly used to set up middleware for your application.

// Syntax:

// app.use( path, callback )
//
// Parameters:

// path: It is the path for which the middleware function is being called. It can be a string
// representing a path or path pattern or regular expression pattern to match the paths.

// callback: It is a middleware function or a series/array of middleware functions. "

// so in summary, path.join(); is taking us to the uploads folder and we're making that folder
// static
app.use( '/uploads', express.static( path.join( __dirname, '/uploads' ) ) );

// now we should be all set in the backend and in the next video we are going to make
// a request to the upload endpoint or " /api/upload " in the admin-product-edit-screen

// 14 -


// add the middleware function notFound to app.use();
app.use( notFound );


// add the middleware function errorHandler to app.use();
app.use( errorHandler );


// set the port number
const PORT = process.env.PORT || 5000;


// let's use app.listen(); to show that our server is working and use the colors.js package at
// the end
app.listen(
    PORT,
    console.log( `The server is running in ${ process.env.NODE_ENV } mode on port ${ PORT }`
    .yellow.bold )
);
*/



























// ===============================


























/*
// at the beginning of lecture 80, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in express
import express from 'express';
// import in dotenv
import dotenv from 'dotenv';
// import in colors
import colors from 'colors';


// 15 -
// import in morgan
import morgan from 'morgan';

// and now let's add the middleware for morgan in 16 - below

// End of 15 -


// import in our product routes
import productRoutes from './routes/product.routes.js';
// import in our user routes
import userRoutes from './routes/user.routes.js';
// import in our order routes
import orderRoutes from './routes/order.routes.js';
// import in our upload routes
import uploadRoutes from './routes/upload.routes.js';
// import in the connectDB function, which will connect our application to the database
import connectDB from './config/db.js';
// import in the notFound and errorHandler middleware functions
import { notFound, errorHandler } from './middleware/error.middleware.js';
// import in the path module and this is a node.js module to work with file paths
import path from 'path';


// call config() on dotenv
dotenv.config();


// connect to the database
connectDB();


// create an instance of express
const app = express();


// 16 - 
// and remember we only want morgan to run in development mode
if ( process.env.NODE_ENV === 'development' ) {


    app.use( morgan( 'dev' ) );

}

// and now if we go to Postman and hit a couple of our routes and then come back
// to the integreated terminal, we see:

// " GET /api/products 200 39.441 ms - 3755
// GET /api/products 200 64.243 ms - 3755 "

// and this is correct so everything is working as expected

// and now let's create the endpoint for a new review and to do that let's first go to the
// product.model.js 1 - file

// End of 16 -


// add the construct below so we can parse data from the body or req.body
app.use( express.json() );


// ROUTE 1
// now let's create a route
app.get( '/', ( req, res ) => {

    // and after we get a request from the browser let's send a response
    res.send( 'API is running' ); 

} );


// bring in the productRoutes
app.use( '/api/products', productRoutes );
// bring in the userRoutes
app.use( '/api/users', userRoutes );
// bring in the orderRoutes
app.use( '/api/orders', orderRoutes );
// bring in the uploadRoutes
app.use( '/api/upload', uploadRoutes );


// ROUTE 2
// create a route to access the PayPal Client ID
app.get( '/api/config/paypal', ( req, res ) => {

    // as soon as the OrderScreen component loads we will hit the route above and then
    // fetch our PayPal client id and send the PayPal client id back to browser as part
    // of the server response
    res.send( process.env.PAYPAL_CLIENT_ID ); 

} );

// make the uploads folder a static folder

// for es modules we have to resolve __dirname in order for it to work correctly
const __dirname = path.resolve();

// remember " path.join( __dirname, '/uploads' ); " gives us
// " /Applications/MAMP/htdocs/stoneburyhomes/misc/brad_traversy/mern_ecommerce_from_scratch/uploads "

// remember " The app.use(); function is used to mount the specified middleware function(s) at the
// path which is being specified. Syntax: app.use( path, callback ); "

// in summary, path.join(); is taking us to the uploads folder and we're making that folder
// static so that it can get loaded in the browser
app.use( '/uploads', express.static( path.join( __dirname, '/uploads' ) ) );


// add the middleware function notFound to app.use();
app.use( notFound );


// add the middleware function errorHandler to app.use();
app.use( errorHandler );


// set the port number
const PORT = process.env.PORT || 5000;


// let's use app.listen(); to show that our server is working and use the colors.js package at
// the end
app.listen(
    PORT,
    console.log( `The server is running in ${ process.env.NODE_ENV } mode on port ${ PORT }`
    .yellow.bold )
);
*/



























// ===============================


























/*
// at the beginning of lecture 80, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in express
import express from 'express';
// import in dotenv
import dotenv from 'dotenv';
// import in colors
import colors from 'colors';
// import in morgan
import morgan from 'morgan';
// import in our product routes
import productRoutes from './routes/product.routes.js';
// import in our user routes
import userRoutes from './routes/user.routes.js';
// import in our order routes
import orderRoutes from './routes/order.routes.js';
// import in our upload routes
import uploadRoutes from './routes/upload.routes.js';
// import in the connectDB function, which will connect our application to the database
import connectDB from './config/db.js';
// import in the notFound and errorHandler middleware functions
import { notFound, errorHandler } from './middleware/error.middleware.js';
// import in the path module and this is a node.js module to work with file paths
import path from 'path';


// call config() on dotenv
dotenv.config();


// connect to the database
connectDB();


// create an instance of express
const app = express();


// and remember we only want morgan to run in development mode
if ( process.env.NODE_ENV === 'development' ) {


    app.use( morgan( 'dev' ) );

}


// add the construct below so we can parse data from the body or req.body
app.use( express.json() );


// bring in the productRoutes
app.use( '/api/products', productRoutes );
// bring in the userRoutes
app.use( '/api/users', userRoutes );
// bring in the orderRoutes
app.use( '/api/orders', orderRoutes );
// bring in the uploadRoutes
app.use( '/api/upload', uploadRoutes );


// ROUTE 2
// create a route to access the PayPal Client ID
app.get( '/api/config/paypal', ( req, res ) => {

    // as soon as the OrderScreen component loads we will hit the route above and then
    // fetch our PayPal client id and send the PayPal client id back to browser as part
    // of the server response
    res.send( process.env.PAYPAL_CLIENT_ID ); 

} );


// make the uploads folder a static folder

// for es modules we have to resolve __dirname in order for it to work correctly
const __dirname = path.resolve();

// remember " path.join( __dirname, '/uploads' ); " gives us
// " /Applications/MAMP/htdocs/stoneburyhomes/misc/brad_traversy/mern_ecommerce_from_scratch/uploads "

// remember " The app.use(); function is used to mount the specified middleware function(s) at the
// path which is being specified. Syntax: app.use( path, callback ); "

// in summary, path.join(); is taking us to the uploads folder and we're making that folder
// static so that it can get loaded in the browser
app.use( '/uploads', express.static( path.join( __dirname, '/uploads' ) ) );


// 17 -
// put the following code underneth our routes and underneth " const __dirname = path.resolve(); "

// the following code will prepare our application for deployment

// if were in production then the goal is to (1) make the build folder static and (2) send to the
// server the index.html file
if ( process.env.NODE_ENV === 'production' ) {

    // if were in production then we want to set our frontend/build folder as a static
    // folder
    app.use( express.static( path.join( __dirname, '/frontend/build' ) ) );

    // get any route that is not one of our api routes above
    app.get( '*', ( req, res ) => (

        // remember " path.resolve( __dirname, 'frontend', 'build', 'index.html' ) " gives us
        // " /Applications/MAMP/htdocs/stoneburyhomes/misc/brad_traversy/mern_ecommerce_from_scratch/frontend/build/index.html "
        res.sendFile( path.resolve( __dirname, 'frontend', 'build', 'index.html' ) )

     ) );

} else {

    // cut and then paste Route 1 inside the else statement

    // ROUTE 1
    // now let's create a route
    app.get( '/', ( req, res ) => {

        // and after we get a request from the browser let's send a response
        res.send( 'API is running' ); 

    } );

}

// next, let's go to the .env file and change " NODE_ENV = development " to
// " NODE_ENV = production "

// next, go back to the root or " Home@Rogers-iMac mern_ecommerce_from_scratch % " and
// run " npm start " or " Home@Rogers-iMac mern_ecommerce_from_scratch % npm start " and
// we do this because this is what the Heroku server will run and remember npm start will
// run the server.js file

// next, if we go to " localhost:5000 " and not " localhost:3008 " we will see our ProShop
// application and this represents our production build

// now were ready to deploy

// End of 17 -


// add the middleware function notFound to app.use();
app.use( notFound );


// add the middleware function errorHandler to app.use();
app.use( errorHandler );


// set the port number
const PORT = process.env.PORT || 5000;


// let's use app.listen(); to show that our server is working and use the colors.js package at
// the end
app.listen(
    PORT,
    console.log( `The server is running in ${ process.env.NODE_ENV } mode on port ${ PORT }`
    .yellow.bold )
);
*/




























// ===============================



























// at the beginning of lecture 80, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in express
import express from 'express';
// import in dotenv
import dotenv from 'dotenv';
// import in colors
import colors from 'colors';
// import in morgan
import morgan from 'morgan';
// import in our product routes
import productRoutes from './routes/product.routes.js';
// import in our user routes
import userRoutes from './routes/user.routes.js';
// import in our order routes
import orderRoutes from './routes/order.routes.js';
// import in our upload routes
import uploadRoutes from './routes/upload.routes.js';
// import in the connectDB function, which will connect our application to the database
import connectDB from './config/db.js';
// import in the notFound and errorHandler middleware functions
import { notFound, errorHandler } from './middleware/error.middleware.js';
// import in the path module and this is a node.js module to work with file paths
import path from 'path';


// call config() on dotenv
dotenv.config();


// connect to the database
connectDB();


// create an instance of express
const app = express();


// and remember we only want morgan to run in development mode
if ( process.env.NODE_ENV === 'development' ) {


    app.use( morgan( 'dev' ) );

}


// add the construct below so we can parse data from the body or req.body
app.use( express.json() );


// bring in the productRoutes
app.use( '/api/products', productRoutes );
// bring in the userRoutes
app.use( '/api/users', userRoutes );
// bring in the orderRoutes
app.use( '/api/orders', orderRoutes );
// bring in the uploadRoutes
app.use( '/api/upload', uploadRoutes );


// ROUTE 2
// create a route to access the PayPal Client ID
app.get( '/api/config/paypal', ( req, res ) => {

    // as soon as the OrderScreen component loads we will hit the route above and then
    // fetch our PayPal client id and send the PayPal client id back to browser as part
    // of the server response
    res.send( process.env.PAYPAL_CLIENT_ID ); 

} );


// make the uploads folder a static folder

// for es modules we have to resolve __dirname in order for it to work correctly
const __dirname = path.resolve();

// remember " path.join( __dirname, '/uploads' ); " gives us
// " /Applications/MAMP/htdocs/stoneburyhomes/misc/brad_traversy/mern_ecommerce_from_scratch/uploads "

// remember " The app.use(); function is used to mount the specified middleware function(s) at the
// path which is being specified. Syntax: app.use( path, callback ); "

// in summary, path.join(); is taking us to the uploads folder and we're making that folder
// static so that it can get loaded in the browser
app.use( '/uploads', express.static( path.join( __dirname, '/uploads' ) ) );


// the following code will prepare our application for deployment

// if were in production then the goal is to (1) make the build folder static and (2) send to the
// server the index.html file
if ( process.env.NODE_ENV === 'production' ) {

    // if were in production then we want to set our frontend/build folder as a static
    // folder
    app.use( express.static( path.join( __dirname, '/frontend/build' ) ) );

    // get any route that is not one of our api routes above
    app.get( '*', ( req, res ) => (

        // remember " path.resolve( __dirname, 'frontend', 'build', 'index.html' ) " gives us
        // " /Applications/MAMP/htdocs/stoneburyhomes/misc/brad_traversy/mern_ecommerce_from_scratch/frontend/build/index.html "
        res.sendFile( path.resolve( __dirname, 'frontend', 'build', 'index.html' ) )

     ) );

} else {

    // cut and then paste Route 1 inside the else statement

    // ROUTE 1
    // now let's create a route
    app.get( '/', ( req, res ) => {

        // and after we get a request from the browser let's send a response
        res.send( 'API is running' ); 

    } );

}


// add the middleware function notFound to app.use();
app.use( notFound );


// add the middleware function errorHandler to app.use();
app.use( errorHandler );


// set the port number
const PORT = process.env.PORT || 5000;


// let's use app.listen(); to show that our server is working and use the colors.js package at
// the end
app.listen(
    PORT,
    console.log( `The server is running in ${ process.env.NODE_ENV } mode on port ${ PORT }`
    .yellow.bold )
);



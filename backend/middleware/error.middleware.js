
/*
// 1 -
// coming from the server.js 8 - file

// remember middleware is basically a function that has access to the request and response
// cycle and remember you always have to call next to move to the next piece of middleware

// let's create some custom error middleware and if we want to override the default error
// handler from Express then we need to pass in 3 or 4 arguments to the functions below
// ( i.e. " err ", " req ", " res ", " next " )

// set the const notFound equal to our 404 function from our server.js 8 - file 
const notFound = ( req, res, next ) => {

    // remember: " The new Error() method is an inbuilt application programming interface of
    // the Node module in which a new Error object is created and error.message property is
    // set to the provided text message. " and " The error object is a built-in object that
    // provides a standard set of useful information when an error occurs, such as a stack
    // trace and the error message. "

    // so we are basically creating a new error object with " new Error(); " and this object
    // will provide us with some useful information such as the stack trace and an error
    // message and the error message is set to the argument to Error(); and in the case below
    // our error message will be " Not Found - whatever URL the request originated from "
    const error = new Error( `Not Found - ${ req.originalUrl }` );

    // set the status code to 404
    res.status( 404 );

    // from expressjs.com: " For errors returned from asynchronous functions invoked by
    // route handlers and middleware, you must pass them to the next() function, where Express
    // will catch and process them. "
    next( error );

    // let's test this out by going to Postman and change one of our routes to a bad route like
    // " {{ URL }}/api/1 " and this results in the following:

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

/*
};

// End of 1 -


// 2 -
// set the const errorHandler equal to our custom error middleware function from our server.js
// 7 - file
const errorHandler = ( err, req, res, next ) => {

    // first, let's figure out the status code and sometimes we will get a status code of
    // 200 even though we have an error so let's have a conditional that sets any status
    // code of 200 to 500 and 500 means we have an internal server error

    // when we are inside a route we want to be able to throw a status code before we
    // throw an error
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

    // now we want to set res.status to whatever the status code is
    res.status( statusCode );

    // now we want to respond with a message and use the json data transfer format
    res.json(
        {
            message : err.message,
            // we also want to get the stack trace but only if were not in production 
            stack : process.env.NODE_ENV === 'production' ? null : err.stack

            // now let's test this out and go back to Postman and go to the second route
            // put " {{URL}}/api/products/1 " in the input field and then press send and
            // this results in the following:

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

            // now we also want to have a fallback for 404 errors ( i.e. page not found )
            // and let's do that in 8 - above
        /* }

    );

};

// End of 2 -


// 3 -
// export notFound and errorHandler
export { notFound, errorHandler };

// and now go to the server.js 9 - file
// End of 3 -
*/






















// ===============================






















// at the beginning of lecture 25, given all the notes, I created a new file below without
// the notes so we are starting fresh


// remember middleware is basically a function that has access to the request and response
// cycle and remember you always have to call next to move to the next piece of middleware

// let's create some custom error middleware and override the default error handler from Express

// custom error middleware for 404 errors
const notFound = ( req, res, next ) => {

    // remember: " The new Error() method is an inbuilt application programming interface of
    // the Node module in which a new Error object is created and error.message property is
    // set to the provided text message. " and " The error object is a built-in object that
    // provides a standard set of useful information when an error occurs, such as a stack
    // trace and the error message. "
    const error = new Error( `Not Found - ${ req.originalUrl }` );

    // set the status code to 404
    res.status( 404 );

    // from expressjs.com: " For errors returned from asynchronous functions invoked by
    // route handlers and middleware, you must pass them to the next() function, where Express
    // will catch and process them. "
    next( error );

};


// custom error middleware and is used primarily when the ObjectId is in the right format
// but is not correct

// remember if we have the following arguments: " err, req, res, next " in the call signature
// then Express will know that this function is set up to handle any uncaught errors
const errorHandler = ( err, req, res, next ) => {

    // first, let's figure out the status code and sometimes we will get a status code of
    // 200 even though we have an error so let's have a conditional that sets any status
    // code of 200 to 500 and 500 means we have an internal server error

    // when we are inside a route we want to be able to throw a status code before we
    // throw an error
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

    // now we want to set res.status to whatever the status code is
    res.status( statusCode );

    // now we want to respond with a message and use the json data transfer format
    res.json(
        {
            message : err.message,
            // we also want to get the stack trace but only if were not in production 
            stack : process.env.NODE_ENV === 'production' ? null : err.stack
        }
    );

};


export { notFound, errorHandler };


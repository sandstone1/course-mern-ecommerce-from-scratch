
/*
// 1 -
// first, let's import in the Product model and the express-async-handler
// import in the Product model and don't forget the .js extension
import Product from '../models/product.model.js';
// import in express-async-handler
import asyncHandler from 'express-async-handler';

// copy the needed code from the product.routes.js file and paste it below


// CONTROLLER #1
// @desc    - Fetch all products
// @route   - GET request to /api/products
// @access  - Public route
const productList = asyncHandler( async( req, res ) => {
    
    // use the find method and then pass in an empty object which will give us access
    // to all documents in the product collection
    
    // use express-async-handler and this package is " Simple middleware for handling
    // exceptions inside of async express routes and passing them to your express error
    // handlers. "
    const products = await Product.find( {} );

    res.json( products );

} );


// CONTROLLER #2
// @desc    - Fetch a single product
// @route   - GET request to /api/products/:id
// @access  - Public route
const productGet = asyncHandler( async( req, res ) => {
    
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

} );


// export the 2 functions above
export { productList, productGet };

// and now we have our product controller and now let's go to the product.routes.js 5 - file

// End of 1 -
*/





















// ===============================






















/*
// at the beginning of lecture 376, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in the Product model and don't forget the .js extension
import Product from '../models/product.model.js';
// import in express-async-handler
// use express-async-handler and this package is " Simple middleware for handling
// exceptions inside of async express routes and passing them to your express error
// handlers. "
import asyncHandler from 'express-async-handler';


// ==============================
// Controller 1
// ==============================

// in controller 1, we want to get a list of all the products from the database and then return
// this information to the browser as part of the server response

// CONTROLLER 1
// @desc    - GET all products
// @route   - GET request to /api/products
// @access  - Public route
const productList = asyncHandler( async( req, res ) => {
    
    // use the find method and then pass in an empty object which will give us access
    // to all documents in the product collection
    const products = await Product.find( {} );

    // send the products array to the browser as part of the server response
    res.json( products );

} );


// ==============================
// Controller 2
// ==============================

// in controller 2, we want to get a product by id and then return that product to the browser
// as part of the server response

// CONTROLLER 2
// @desc    - GET a product by id
// @route   - GET request to /api/products/:id
// @access  - Public route
const productGet = asyncHandler( async( req, res ) => {
    
    // use the findById(); method to fetch a single product
    const product = await Product.findById( req.params.id );

    // make sure the product or product instance in the database exist
    if ( product ) {

        // send the product to the browser as part of the server response
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

} );


// 2 -

// ==============================
// Controller 3
// ==============================

// in controller 3, we want to delete a product from the database and then return a message

// Controller 3
// @desc    - DELETE a product
// @route   - DELETE request to /api/products/:id
// @access  - Private route and Admin route
const productDeleteAdmin = asyncHandler( async( req, res ) => {

    // first let's find the specified product by id

    // what we want here is the product that the admin wants to delete and we get that product
    // by looking for the product's id in the URL
    const productToDelete = await Product.findById( req.params.id );

    // check and make sure the productToDelete exist
    if ( productToDelete ) {

        // delete the specified product from the database
        await productToDelete.remove();

        // send a message and we will use this message in Postman to detemine whether
        // or not our backend is working but we will not use this message in the frontend
        res.json( { message : 'Product deleted from the database' } );

    } else {

        // if we can't find productToDelete in the database then let's do the following:
        res.status( 404 );

        throw new Error( 'Product not found' );

    }

} ); // end of productDeleteAdmin

// now let's go to the product.routes.js 6 - file

// End of 2 -


// 3 -

// remember Option 1 and Option 2 below do the same thing but I decided to comment out
// Option 1 below since I liked Option 2 better

/*
// ==============================
// Controller 4 - Option 1
// ==============================

// in controller 4, we want to create a product with some sample data and then save it to the
// database

// Controller 4
// @desc    - Create a new product
// @route   - POST request to /api/products
// @access  - Private route and Admin route
const productCreateAdmin = asyncHandler( async( req, res ) => {

    // ==============================
    // CREATE A NEW PRODUCT
    // ==============================

    // instantiate / create a new product 
    const product = new Product(
        {
            name         : 'Sample name',
            image        : '/image/sample.jpg',
            description  : 'Sample description',
            brand        : 'Sample brand',
            category     : 'Sample category',
            price        : 0,                
            countInStock : 0,
            numReviews   : 0,
            // in addition, we want to attach the logged in user to the creation of
            // the product and remember since this will be a protected route we will be
            // able to get a token and then get the user's id from the token
            user         : req.user._id
        }
    );

    // ==============================
    // SAVE THE PRODUCT TO THE DATABASE
    // ==============================

    // although we created the product above, it is not yet saved in the database and we can
    // save the product to the database by doing " await product.save(); " and we will save
    // the result of this construct to the const createdProduct
    const createdProduct = await product.save();

    // if the createdProduct was created successfully then do the following
    if ( createdProduct ) {

        // ==============================
        // SEND THE CREATEDPRODUCT OBJECT TO THE BROWSER
        // ==============================

        // 201 " indicates that the request has succeeded and has led to the creation of a
        // resource " and then as part of the server response let's use the json data transfer
        // format to send back to browser the createdProduct object
        res.status( 201 ).json( createdProduct );

    } else { // if the product was not created successfully then do the following

        // 400 means the request was bad
        res.status( 400 );

        throw new Error( 'Could not create the product' );

    }

} ); // end of productCreateAdmin
*/


// ==============================
// Controller 4 - Option 2
// ==============================

// in controller 4, we want to create a product with some sample data and then save it to the
// database

// Controller 4
// @desc    - Create a new product
// @route   - POST request to /api/products
// @access  - Private route and Admin route
/*
const productCreateAdmin = asyncHandler( async( req, res ) => {

    // ==============================
    // CREATE NEW PRODUCT
    // ==============================

    // let's use the create(); method to add a product to the database and add the properties
    // and values that we want to add to the product document in the database

    // from " https://masteringjs.io/tutorials/mongoose/create ": " The create() function is
    // a thin wrapper around the save() function. The above create() call is equivalent to:

    // const doc = new User( { email: 'bill@microsoft.com' } );
    // await doc.save();

    // The most common reason for using create() is that you can conveniently save()
    // multiple documents with a single function call by passing an array of objects: "
    const createdProduct = await Product.create(

        {
            name         : 'Sample name',
            image        : '/images/sample.jpg',
            description  : 'Sample description',
            brand        : 'Sample brand',
            category     : 'Sample category',
            price        : 0,                
            countInStock : 0,
            // in addition, we want to attach the logged in user to the creation of
            // the product and remember since this will be a protected route we will be
            // able to get a token and then get the user's id from the token
            user         : req.user._id
        }

    );

    // if the createdProduct was created successfully then do the following
    if ( createdProduct ) {

        // ==============================
        // SEND THE CREATEDPRODUCT OBJECT TO THE BROWSER
        // ==============================

        // 201 " indicates that the request has succeeded and has led to the creation of a
        // resource " and then as part of the server response let's use the json data transfer
        // format to send back to browser the createdProduct object
        res.status( 201 ).json( createdProduct );

    } else { // if the product was not created successfully then do the following

        // 400 means the request was bad
        res.status( 400 );

        throw new Error( 'Could not create the product' );

    }
    
} );

// now let's go to the product.routes.js 7 - file

// End of 3 -


// 4 -
// coming from the product.routes.js 7 - file

// ==============================
// CONTROLLER 5
// ==============================

// Controller 5
// @desc    - UPDATE a product
// @route   - PUT request to /api/product/:id
// @access  - Private route and Admin route
const productUpdateAdmin = asyncHandler( async( req, res ) => {

    // first let's get a bunch of data from the body or req.body and remember when we created
    // the product we filled the product with sample data so it's up to the admin user
    // to fill in the data for the new product
    const {
        name,
        image,
        description,
        brand,
        category,
        price,
        countInStock
    } = req.body;

    // then let's find the specified product by id and we will use req.params.id and this
    // will be the id in the URL

    // use req.params.id to find the product id
    const product = await Product.findById( req.params.id );

    // check and make sure the product exist
    if ( product ) {

        // if we find the product document then let's update the product's information based on
        // req.body.key
        product.name         = name
        product.image        = image
        product.description  = description
        product.brand        = brand
        product.category     = category
        product.price        = price
        product.countInStock = countInStock

        // ==============================
        // Update the product document in the database
        // ==============================

        // then let's update the product document in the database based on the changes above and
        // then save the updated product document to the const " updatedProduct "
        const updatedProduct = await product.save();

        // from stackoverflow: " Short answer: or both PUT and DELETE, you should send either
        // 200 ( Ok ) or 204 ( No content ). " and then as part of the server response let's
        // use the json data transfer format to send back to browser the updatedProduct object
        res.status( 200 ).json( updatedProduct );

    } else {

        // if we can't find the product or the product does not exist then let's do the following:
        res.status( 404 );

        throw new Error( 'Product not found' );

    }

} ); // end of productUpdateAdmin

// now let's go to the product.routes.js 8 - file

// End of 4 -


export { 
    productList,
    productGet,
    productDeleteAdmin,
    productCreateAdmin,
    productUpdateAdmin
};
*/






















// ===============================






















/*
// at the beginning of lecture 76, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in the Product model and don't forget the .js extension
import Product from '../models/product.model.js';
// import in express-async-handler
// use express-async-handler and this package is " Simple middleware for handling
// exceptions inside of async express routes and passing them to your express error
// handlers. "
import asyncHandler from 'express-async-handler';


// ==============================
// Controller 1
// ==============================

// in controller 1, we want to get a list of all the products from the database and then return
// this information to the browser as part of the server response

// CONTROLLER 1
// @desc    - GET all products
// @route   - GET request to /api/products
// @access  - Public route
const productList = asyncHandler( async( req, res ) => {


    // 5 -
    // coming from the product.actions.js 7 - file

    // ==============================
    // Step 1 - get the value of keyword
    // ==============================

    // and remember we can access the query string by using req.query so req.query.keyword
    // will allow us to access " /api/products?keyword=${ keyword } " and get the value of
    // keyword

    // ==============================
    // Step 2 - use MongoDB to match the keyword to the name of the product
    // ==============================

    // and if req.query.keyword is true then we can use MongoDB to match the keyword to the
    // name of the product

    // from the MongoDB documentation:
    /*
    " $regex

    Provides regular expression capabilities for pattern matching strings in queries. MongoDB
    uses Perl compatible regular expressions (i.e. "PCRE" ) version 8.42 with UTF-8 support.

    To use $regex, use one of the following syntaxes:

    { <field>: { $regex: /pattern/, $options: '<options>' } }
    { <field>: { $regex: 'pattern', $options: '<options>' } }
    { <field>: { $regex: /pattern/<options> } } "
    */

    // ==============================
    // Step 3 - if keyword is an empty string or does not exist then keyword will be equal to
    // an empty object
    // ==============================

    /*
    const keyword = req.query.keyword ? {
    
        name : {
            $regex   : req.query.keyword,
            $options : 'i' // use i which means our pattern matching is case insensitive
        }

    } : {}

    // next, keyword will either be empty or will be equal to an object with a key of name
    // and 2 key value pairs ( $regex : ..., $options : ... )

    // ==============================
    // Step 4 - if keyword is an empty string then find all the products in the database;
    // however, if keyword is not an empty string then find the products in the database
    // that have a name that matches the keyword based on step 3 above
    // ==============================

    // use the find method and then pass in an empty object which will give us access
    // to all the documents in the product collection
    const products = await Product.find( { ...keyword } );

    // End of 5 -


    // send the products array to the browser as part of the server response
    res.json( products );

} );


// ==============================
// Controller 2
// ==============================

// in controller 2, we want to get a product by id and then return that product to the browser
// as part of the server response

// CONTROLLER 2
// @desc    - GET a product by id
// @route   - GET request to /api/products/:id
// @access  - Public route
const productGet = asyncHandler( async( req, res ) => {
    
    // use the findById(); method to fetch a single product
    const product = await Product.findById( req.params.id );

    // make sure the product or product instance in the database exist
    if ( product ) {

        // send the product to the browser as part of the server response
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

} );


// ==============================
// Controller 3
// ==============================

// in controller 3, we want to delete a product from the database and then return a message

// Controller 3
// @desc    - DELETE a product
// @route   - DELETE request to /api/products/:id
// @access  - Private route and Admin route
const productDeleteAdmin = asyncHandler( async( req, res ) => {

    // first let's find the specified product by id

    // what we want here is the product that the admin wants to delete and we get that product
    // by looking for the product's id in the URL
    const productToDelete = await Product.findById( req.params.id );

    // check and make sure the productToDelete exist
    if ( productToDelete ) {

        // delete the specified product from the database
        await productToDelete.remove();

        // send a message and we will use this message in Postman to detemine whether
        // or not our backend is working but we will not use this message in the frontend
        res.json( { message : 'Product deleted from the database' } );

    } else {

        // if we can't find productToDelete in the database then let's do the following:
        res.status( 404 );

        throw new Error( 'Product not found' );

    }

} ); // end of productDeleteAdmin


// remember Option 1 and Option 2 below do the same thing but I decided to comment out
// Option 1 below since I liked Option 2 better

/*
// ==============================
// Controller 4 - Option 1
// ==============================

// in controller 4, we want to create a product with some sample data and then save it to the
// database

// Controller 4
// @desc    - Create a new product
// @route   - POST request to /api/products
// @access  - Private route and Admin route
const productCreateAdmin = asyncHandler( async( req, res ) => {

    // ==============================
    // CREATE A NEW PRODUCT
    // ==============================

    // instantiate / create a new product 
    const product = new Product(
        {
            name         : 'Sample name',
            image        : '/image/sample.jpg',
            description  : 'Sample description',
            brand        : 'Sample brand',
            category     : 'Sample category',
            price        : 0,                
            countInStock : 0,
            // in addition, we want to attach the logged in user to the creation of
            // the product and remember since this will be a protected route we will be
            // able to get a token and then get the user's id from the token
            user         : req.user._id
        }
    );

    // ==============================
    // SAVE THE PRODUCT TO THE DATABASE
    // ==============================

    // although we created the product above, it is not yet saved in the database and we can
    // save the product to the database by doing " await product.save(); " and we will save
    // the result of this construct to the const createdProduct
    const createdProduct = await product.save();

    // if the createdProduct was created successfully then do the following
    if ( createdProduct ) {

        // ==============================
        // SEND THE CREATEDPRODUCT OBJECT TO THE BROWSER
        // ==============================

        // 201 " indicates that the request has succeeded and has led to the creation of a
        // resource " and then as part of the server response let's use the json data transfer
        // format to send back to browser the createdProduct object
        res.status( 201 ).json( createdProduct );

    } else { // if the product was not created successfully then do the following

        // 400 means the request was bad
        res.status( 400 );

        throw new Error( 'Could not create the product' );

    }

} ); // end of productCreateAdmin
*/


// ==============================
// Controller 4 - Option 2
// ==============================

// in controller 4, we want to create a product with some sample data and then save it to the
// database

// Controller 4
// @desc    - Create a new product
// @route   - POST request to /api/products
// @access  - Private route and Admin route
/*
const productCreateAdmin = asyncHandler( async( req, res ) => {

    // ==============================
    // CREATE NEW PRODUCT
    // ==============================

    // let's use the create(); method to add a product to the database and add the properties
    // and values that we want to add to the product document in the database

    // from " https://masteringjs.io/tutorials/mongoose/create ": " The create() function is
    // a thin wrapper around the save() function. The above create() call is equivalent to:

    // const doc = new User( { email: 'bill@microsoft.com' } );
    // await doc.save();

    // The most common reason for using create() is that you can conveniently save()
    // multiple documents with a single function call by passing an array of objects: "
    const createdProduct = await Product.create(

        {
            name         : 'Sample name',
            image        : '/images/sample.jpg',
            description  : 'Sample description',
            brand        : 'Sample brand',
            category     : 'Sample category',
            price        : 0,                
            countInStock : 0,
            // in addition, we want to attach the logged in user to the creation of
            // the product and remember since this will be a protected route we will be
            // able to get a token and then get the user's id from the token
            user         : req.user._id
        }

    );

    // if the createdProduct was created successfully then do the following
    if ( createdProduct ) {

        // ==============================
        // SEND THE CREATEDPRODUCT OBJECT TO THE BROWSER
        // ==============================

        // 201 " indicates that the request has succeeded and has led to the creation of a
        // resource " and then as part of the server response let's use the json data transfer
        // format to send back to browser the createdProduct object
        res.status( 201 ).json( createdProduct );

    } else { // if the product was not created successfully then do the following

        // 400 means the request was bad
        res.status( 400 );

        throw new Error( 'Could not create the product' );

    }
    
} );


// ==============================
// CONTROLLER 5
// ==============================

// Controller 5
// @desc    - UPDATE a product
// @route   - PUT request to /api/product/:id
// @access  - Private route and Admin route
const productUpdateAdmin = asyncHandler( async( req, res ) => {

    // first let's get a bunch of data from the body or req.body and remember when we created
    // the product we filled the product with dummy sample data so it's up to the admin user
    // to fill in the data for the new product
    const {
        name,
        image,
        description,
        brand,
        category,
        price,
        countInStock
    } = req.body;

    // then let's find the specified product by id and we will use req.params.id and this
    // will be the id in the URL

    // use req.params.id to find the product id
    const product = await Product.findById( req.params.id );

    // check and make sure the product exist
    if ( product ) {

        // if we find the product document then let's update the product's information based on
        // req.body.key
        product.name         = name
        product.image        = image
        product.description  = description
        product.brand        = brand
        product.category     = category
        product.price        = price
        product.countInStock = countInStock

        // ==============================
        // Update the product document in the database
        // ==============================

        // then let's update the product document in the database based on the changes above and
        // then save the updated product document to the const " updatedProduct "
        const updatedProduct = await product.save();

        // from stackoverflow: " Short answer: or both PUT and DELETE, you should send either
        // 200 ( Ok ) or 204 ( No content ). " and then as part of the server response let's
        // use the json data transfer format to send back to the browser the updatedProduct
        // object
        res.status( 200 ).json( updatedProduct );

    } else {

        // if we can't find the product or the product does not exist then let's do the following:
        res.status( 404 );

        throw new Error( 'Product not found' );

    }

} ); // end of productUpdateAdmin


// 5 -
// coming form the product.model.js 1 - file

// ==============================
// CONTROLLER 6
// ==============================

// Controller 6
// @desc    - CREATE a new review
// @route   - POST request to /api/products/:id/reviews
// @access  - Private route
const productCreateReview = asyncHandler( async( req, res ) => {

    // first let's get some data from the body or req.body
    const { rating, comment } = req.body;

    // then let's find the product that the user is reviewing and we can do that by using the
    // product id and to get the product id we will use req.params.id and this will be the id 
    // in the URL

    // use req.params.id to find the product
    const product = await Product.findById( req.params.id );

    // check and make sure the product exist
    if ( product ) {

        // first, let's check to make sure the user has not already submitted a review

        // let's look inside the reviews array for this product by using
        // " product.reviews.find(); "
        const alreadyReviewed = product.reviews.find( ( review ) => {

            // this will be true if the user making the review is the same as the logged in
            // user or in other words the user has already made a review
            return review.user.toString() === req.user._id.toString();

        } );

        if ( alreadyReviewed ) {

            // send a 400 or bad request status code
            res.status( 400 );

            throw new Error( 'This product has already been reviewed.' );
            
        }
        
        // ==============================
        // Create the review object
        // ==============================

        // if the user has not already added a review then let's construct a review object with
        // the following key value pairs
        const review = {
            name    : req.user.name,
            // make sure the rating is a number and the rating value below comes from
            // req.body.rating above
            rating  : Number( rating ),
            comment : comment,
            // set user equal to the user's id value
            user    : req.user._id
        }

        // ==============================
        // Update the product
        // ==============================        

        // update 1
        // add this review to the product reviews array or
        // update the reviews array
        product.reviews.push( review );

        // update 2
        // update the numReviews field
        product.numReviews = product.reviews.length;

        // update 3
        // update the rating field
        product.rating = product.reviews.reduce( ( accumlator, currentElement ) =>
            accumlator + currentElement.rating,
            0
        ) / product.numReviews;

        // ==============================
        // Update the product document in the database
        // ==============================

        // then update the product document in the database based on the changes above
        await product.save();

        // ==============================
        // Send the response
        // ==============================

        // send back a 201 status response or " The HTTP 201 Created success status response
        // code indicates that the request has succeeded and has led to the creation of a
        // resource. " and as part of the server response let's use the json data transfer
        // format to send back a message object to the browser
        res.status( 201 ).json( { message : 'Review added' } );

    } else {

        // if we can't find the product or the product does not exist then let's do the following:
        res.status( 404 );

        throw new Error( 'Product not found' );

    }

} ); // end of productUpdateAdmin

// now let's go to the product.routes.js 9 - file

// End of 5 -


export { 
    productList,
    productGet,
    productDeleteAdmin,
    productCreateAdmin,
    productUpdateAdmin,
    productCreateReview
};
*/






















// ===============================






















/*
// at the beginning of lecture 86, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in the Product model and don't forget the .js extension
import Product from '../models/product.model.js';
// import in express-async-handler
// use express-async-handler and this package is " Simple middleware for handling
// exceptions inside of async express routes and passing them to your express error
// handlers. "
import asyncHandler from 'express-async-handler';


// ==============================
// Controller 1
// ==============================

// in controller 1, we want to get a list of all the products from the database and then return
// this information to the browser as part of the server response

// CONTROLLER 1
// @desc    - GET all products
// @route   - GET request to /api/products
// @access  - Public route
const productList = asyncHandler( async( req, res ) => {


    // 6 -

    // add our pagination functionality

    // ==============================
    // Step 1 - 4 Pagination Functionality
    // ==============================

    // ==============================
    // Step 1 Pagination Functionality - get the pageSize and page number were on
    // ==============================

    // set the page size or how many products to show per page and let's start with 2
    const pageSize = 2;

    // get the page number and if there is no page number then we must be on page 1
    const page = Number( req.query.pageNumber ) || 1;

    // go to 7 - below

    // End of 6 -


    // ==============================
    // Step 1 - 4 Search Functionality
    // ==============================

    // ==============================
    // Step 1 Search Functionality - get the value of keyword
    // ==============================

    // and remember we can access the query string by using req.query so req.query.keyword
    // will allow us to access " /api/products?keyword=${ keyword } " and get the value of
    // keyword

    // ==============================
    // Step 2 Search Functionality - use MongoDB to match the keyword to the name of the product
    // ==============================

    // and if req.query.keyword is true then we can use MongoDB to match the keyword to the
    // name of the product

    // from the MongoDB documentation:
    /*
    " $regex

    Provides regular expression capabilities for pattern matching strings in queries. MongoDB
    uses Perl compatible regular expressions (i.e. "PCRE" ) version 8.42 with UTF-8 support.

    To use $regex, use one of the following syntaxes:

    { <field>: { $regex: /pattern/, $options: '<options>' } }
    { <field>: { $regex: 'pattern', $options: '<options>' } }
    { <field>: { $regex: /pattern/<options> } } "
    */

    // ==============================
    // Step 3 Search Functionality - if keyword is an empty string or does not exist then keyword
    // will be equal to an empty object
    // ==============================

    /*
    const keyword = req.query.keyword ? {
    
        name : {
            $regex   : req.query.keyword,
            $options : 'i' // use i which means our pattern matching is case insensitive
        }

    } : {}

    // next, keyword will either be empty or will be equal to an object with a key of name
    // and 2 key value pairs ( $regex : ..., $options : ... )

    // ==============================
    // Step 4 Search Functionality - if keyword is an empty string then find all the products
    // in the database; however, if keyword is not an empty string then find the products in
    // the database that have a name that matches the keyword based on step 3 above
    // ==============================


    // 7 -

    // ==============================
    // Step 2 Pagination Functionality - get the total count of products
    // ==============================

    // before we get " products " below we need to get the total count of products and to
    // get the total count of products we will use the countDocuments method on the Product model
    const count = await Product.countDocuments( { ...keyword } )

    // ==============================
    // Step 3 Pagination Functionality - limit by page size and skip any products that come before the
    // page number
    // ==============================

    // next when we fetch the product we want to limit this by page size so let's change
    // " const products = await Product.find( { ...keyword } ); " to
    // " const products = await Product.find( { ...keyword } ).limit( pageSize ); " and
    // then modify this function so that we skip any products that come before the page
    // number that we are on so if we are on page 3 then we want to skip the first 4 products
    // assuming our page size is 2

    // now let's go to 8 - below

    // End of 7 -


    // use the find method and then pass in an empty object which will give us access
    // to all the documents in the product collection
    const products = await Product.find( { ...keyword } ).limit( pageSize ).skip( pageSize * ( page - 1 ) );


    // 8 -

    // ==============================
    // Step 4 Pagination Functionality - send back the page number and the total number of pages
    // ==============================

    // in addition to products we need to send back the page number we are on or " page "
    // and we need to send back a pages key value pair and pages will equal
    // " Math.ceil( count / pageSize ) "

    // so when we make our request we will get back a list of products, the page number we're
    // on and the total number of pages based on product count

    // send the products array to the browser as part of the server response
    res.json( { products, page, pages : Math.ceil( count / pageSize ) } );

    // and since we are now sending back multiple key value pairs we need to account for this
    // on the frontend so let's go to the product.actions.js 8 - file now

    // End of 8 -

} );


// ==============================
// Controller 2
// ==============================

// in controller 2, we want to get a product by id and then return that product to the browser
// as part of the server response

// CONTROLLER 2
// @desc    - GET a product by id
// @route   - GET request to /api/products/:id
// @access  - Public route
const productGet = asyncHandler( async( req, res ) => {
    
    // use the findById(); method to fetch a single product
    const product = await Product.findById( req.params.id );

    // make sure the product or product instance in the database exist
    if ( product ) {

        // send the product to the browser as part of the server response
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

} );


// ==============================
// Controller 3
// ==============================

// in controller 3, we want to delete a product from the database and then return a message

// Controller 3
// @desc    - DELETE a product
// @route   - DELETE request to /api/products/:id
// @access  - Private route and Admin route
const productDeleteAdmin = asyncHandler( async( req, res ) => {

    // first let's find the specified product by id

    // what we want here is the product that the admin wants to delete and we get that product
    // by looking for the product's id in the URL
    const productToDelete = await Product.findById( req.params.id );

    // check and make sure the productToDelete exist
    if ( productToDelete ) {

        // delete the specified product from the database
        await productToDelete.remove();

        // send a message and we will use this message in Postman to detemine whether
        // or not our backend is working but we will not use this message in the frontend
        res.json( { message : 'Product deleted from the database' } );

    } else {

        // if we can't find productToDelete in the database then let's do the following:
        res.status( 404 );

        throw new Error( 'Product not found' );

    }

} ); // end of productDeleteAdmin


// remember Option 1 and Option 2 below do the same thing but I decided to comment out
// Option 1 below since I liked Option 2 better

/*
// ==============================
// Controller 4 - Option 1
// ==============================

// in controller 4, we want to create a product with some sample data and then save it to the
// database

// Controller 4
// @desc    - Create a new product
// @route   - POST request to /api/products
// @access  - Private route and Admin route
const productCreateAdmin = asyncHandler( async( req, res ) => {

    // ==============================
    // CREATE A NEW PRODUCT
    // ==============================

    // instantiate / create a new product 
    const product = new Product(
        {
            name         : 'Sample name',
            image        : '/image/sample.jpg',
            description  : 'Sample description',
            brand        : 'Sample brand',
            category     : 'Sample category',
            price        : 0,                
            countInStock : 0,
            // in addition, we want to attach the logged in user to the creation of
            // the product and remember since this will be a protected route we will be
            // able to get a token and then get the user's id from the token
            user         : req.user._id
        }
    );

    // ==============================
    // SAVE THE PRODUCT TO THE DATABASE
    // ==============================

    // although we created the product above, it is not yet saved in the database and we can
    // save the product to the database by doing " await product.save(); " and we will save
    // the result of this construct to the const createdProduct
    const createdProduct = await product.save();

    // if the createdProduct was created successfully then do the following
    if ( createdProduct ) {

        // ==============================
        // SEND THE CREATEDPRODUCT OBJECT TO THE BROWSER
        // ==============================

        // 201 " indicates that the request has succeeded and has led to the creation of a
        // resource " and then as part of the server response let's use the json data transfer
        // format to send back to browser the createdProduct object
        res.status( 201 ).json( createdProduct );

    } else { // if the product was not created successfully then do the following

        // 400 means the request was bad
        res.status( 400 );

        throw new Error( 'Could not create the product' );

    }

} ); // end of productCreateAdmin
*/


// ==============================
// Controller 4 - Option 2
// ==============================

// in controller 4, we want to create a product with some sample data and then save it to the
// database

// Controller 4
// @desc    - Create a new product
// @route   - POST request to /api/products
// @access  - Private route and Admin route
/*
const productCreateAdmin = asyncHandler( async( req, res ) => {

    // ==============================
    // CREATE NEW PRODUCT
    // ==============================

    // let's use the create(); method to add a product to the database and add the properties
    // and values that we want to add to the product document in the database

    // from " https://masteringjs.io/tutorials/mongoose/create ": " The create() function is
    // a thin wrapper around the save() function. The above create() call is equivalent to:

    // const doc = new User( { email: 'bill@microsoft.com' } );
    // await doc.save();

    // The most common reason for using create() is that you can conveniently save()
    // multiple documents with a single function call by passing an array of objects: "
    const createdProduct = await Product.create(

        {
            name         : 'Sample name',
            image        : '/images/sample.jpg',
            description  : 'Sample description',
            brand        : 'Sample brand',
            category     : 'Sample category',
            price        : 0,                
            countInStock : 0,
            // in addition, we want to attach the logged in user to the creation of
            // the product and remember since this will be a protected route we will be
            // able to get a token and then get the user's id from the token
            user         : req.user._id
        }

    );

    // if the createdProduct was created successfully then do the following
    if ( createdProduct ) {

        // ==============================
        // SEND THE CREATEDPRODUCT OBJECT TO THE BROWSER
        // ==============================

        // 201 " indicates that the request has succeeded and has led to the creation of a
        // resource " and then as part of the server response let's use the json data transfer
        // format to send back to browser the createdProduct object
        res.status( 201 ).json( createdProduct );

    } else { // if the product was not created successfully then do the following

        // 400 means the request was bad
        res.status( 400 );

        throw new Error( 'Could not create the product' );

    }
    
} );


// ==============================
// CONTROLLER 5
// ==============================

// Controller 5
// @desc    - UPDATE a product
// @route   - PUT request to /api/product/:id
// @access  - Private route and Admin route
const productUpdateAdmin = asyncHandler( async( req, res ) => {

    // first let's get a bunch of data from the body or req.body and remember when we created
    // the product we filled the product with dummy sample data so it's up to the admin user
    // to fill in the data for the new product
    const {
        name,
        image,
        description,
        brand,
        category,
        price,
        countInStock
    } = req.body;

    // then let's find the specified product by id and we will use req.params.id and this
    // will be the id in the URL

    // use req.params.id to find the product id
    const product = await Product.findById( req.params.id );

    // check and make sure the product exist
    if ( product ) {

        // if we find the product document then let's update the product's information based on
        // req.body.key
        product.name         = name
        product.image        = image
        product.description  = description
        product.brand        = brand
        product.category     = category
        product.price        = price
        product.countInStock = countInStock

        // ==============================
        // Update the product document in the database
        // ==============================

        // then let's update the product document in the database based on the changes above and
        // then save the updated product document to the const " updatedProduct "
        const updatedProduct = await product.save();

        // from stackoverflow: " Short answer: or both PUT and DELETE, you should send either
        // 200 ( Ok ) or 204 ( No content ). " and then as part of the server response let's
        // use the json data transfer format to send back to the browser the updatedProduct
        // object
        res.status( 200 ).json( updatedProduct );

    } else {

        // if we can't find the product or the product does not exist then let's do the following:
        res.status( 404 );

        throw new Error( 'Product not found' );

    }

} ); // end of productUpdateAdmin


// ==============================
// CONTROLLER 6
// ==============================

// Controller 6
// @desc    - CREATE a new review
// @route   - POST request to /api/products/:id/reviews
// @access  - Private route
const productCreateReview = asyncHandler( async( req, res ) => {

    // first let's get some data from the body or req.body
    const { rating, comment } = req.body;

    // then let's find the product that the user is reviewing and we can do that by using the
    // product id and to get the product id we will use req.params.id and this will be the id 
    // in the URL

    // use req.params.id to find the product
    const product = await Product.findById( req.params.id );

    // check and make sure the product exist
    if ( product ) {

        // first, let's check to make sure the user has not already submitted a review

        // let's look inside the reviews array for this product by using
        // " product.reviews.find(); "
        const alreadyReviewed = product.reviews.find( ( review ) => {

            // this will be true if the user making the review is the same as the logged in
            // user or in other words the user has already made a review
            return review.user.toString() === req.user._id.toString();

        } );

        if ( alreadyReviewed ) {

            // send a 400 or bad request status code
            res.status( 400 );

            throw new Error( 'This product has already been reviewed.' );
            
        }
        
        // ==============================
        // Create the review object
        // ==============================

        // if the user has not already added a review then let's construct a review object with
        // the following key value pairs
        const review = {
            name    : req.user.name,
            // make sure the rating is a number and the rating value below comes from
            // req.body.rating above
            rating  : Number( rating ),
            comment : comment,
            // set user equal to the user's id value
            user    : req.user._id
        }

        // ==============================
        // Update the product
        // ==============================        

        // update 1
        // add this review to the product reviews array or
        // update the reviews array
        product.reviews.push( review );

        // update 2
        // update the numReviews field
        product.numReviews = product.reviews.length;

        // update 3
        // update the rating field
        product.rating = product.reviews.reduce( ( accumlator, currentElement ) =>
            accumlator + currentElement.rating,
            0
        ) / product.numReviews;

        // ==============================
        // Update the product document in the database
        // ==============================

        // then update the product document in the database based on the changes above
        await product.save();

        // ==============================
        // Send the response
        // ==============================

        // send back a 201 status response or " The HTTP 201 Created success status response
        // code indicates that the request has succeeded and has led to the creation of a
        // resource. " and as part of the server response let's use the json data transfer
        // format to send back a message object to the browser
        res.status( 201 ).json( { message : 'Review added' } );

    } else {

        // if we can't find the product or the product does not exist then let's do the following:
        res.status( 404 );

        throw new Error( 'Product not found' );

    }

} ); // end of productUpdateAdmin


export { 
    productList,
    productGet,
    productDeleteAdmin,
    productCreateAdmin,
    productUpdateAdmin,
    productCreateReview
};
*/























// ===============================























// at the beginning of lecture 87, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in the Product model and don't forget the .js extension
import Product from '../models/product.model.js';
// import in express-async-handler
// use express-async-handler and this package is " Simple middleware for handling
// exceptions inside of async express routes and passing them to your express error
// handlers. "
import asyncHandler from 'express-async-handler';


// ==============================
// Controller 1
// ==============================

// in controller 1, we want to get a list of all the products from the database and then return
// this information to the browser as part of the server response

// CONTROLLER 1
// @desc    - GET all products
// @route   - GET request to /api/products
// @access  - Public route
const productList = asyncHandler( async( req, res ) => {

    // add our pagination functionality

    // ==============================
    // Step 1 - 4 Pagination Functionality
    // ==============================

    // ==============================
    // Step 1 Pagination Functionality - get the pageSize and page number were on
    // ==============================

    // set the page size or how many products to show per page and let's start with 2
    const pageSize = 10;

    // get the page number and if there is no page number then we must be on page 1
    const page = Number( req.query.pageNumber ) || 1;

    // ==============================
    // Step 1 - 4 Search Functionality
    // ==============================

    // ==============================
    // Step 1 Search Functionality - get the value of keyword
    // ==============================

    // and remember we can access the query string by using req.query so req.query.keyword
    // will allow us to access " /api/products?keyword=${ keyword } " and get the value of
    // keyword

    // ==============================
    // Step 2 Search Functionality - use MongoDB to match the keyword to the name of the product
    // ==============================

    // and if req.query.keyword is true then we can use MongoDB to match the keyword to the
    // name of the product

    // from the MongoDB documentation:
    /*
    " $regex

    Provides regular expression capabilities for pattern matching strings in queries. MongoDB
    uses Perl compatible regular expressions (i.e. "PCRE" ) version 8.42 with UTF-8 support.

    To use $regex, use one of the following syntaxes:

    { <field>: { $regex: /pattern/, $options: '<options>' } }
    { <field>: { $regex: 'pattern', $options: '<options>' } }
    { <field>: { $regex: /pattern/<options> } } "
    */

    // ==============================
    // Step 3 Search Functionality - if keyword is an empty string or does not exist then keyword
    // will be equal to an empty object
    // ==============================

    const keyword = req.query.keyword ? {
    
        name : {
            $regex   : req.query.keyword,
            $options : 'i' // use i which means our pattern matching is case insensitive
        }

    } : {}

    // next, keyword will either be empty or will be equal to an object with a key of name
    // and 2 key value pairs ( $regex : ..., $options : ... )

    // ==============================
    // Step 4 Search Functionality - if keyword is an empty string then find all the products
    // in the database; however, if keyword is not an empty string then find the products in
    // the database that have a name that matches the keyword based on step 3 above
    // ==============================

    // ==============================
    // Step 2 Pagination Functionality - get the total count of products
    // ==============================

    // before we get " products " below we need to get the total count of products and to
    // get the total count of products we will use the countDocuments method on the Product model
    const count = await Product.countDocuments( { ...keyword } )

    // ==============================
    // Step 3 Pagination Functionality - limit by page size and skip any products that come before
    // the page number
    // ==============================

    // next when we fetch the product we want to limit this by page size so let's change
    // " const products = await Product.find( { ...keyword } ); " to
    // " const products = await Product.find( { ...keyword } ).limit( pageSize ); " and
    // then modify this function so that we skip any products that come before the page
    // number that we are on so if we are on page 3 then we want to skip the first 4 products
    // assuming our page size is 2

    // use the find method and then pass in an empty object which will give us access
    // to all the documents in the product collection
    const products = await Product.find( { ...keyword } ).limit( pageSize ).skip( pageSize * ( page - 1 ) );

    // ==============================
    // Step 4 Pagination Functionality - send back the page number and the total number of pages
    // ==============================

    // in addition to products we need to send back the page number we are on or " page "
    // and we need to send back a pages key value pair and pages will equal
    // " Math.ceil( count / pageSize ) "

    // so when we make our request we will get back a list of products, the page number we're
    // on and the total number of pages based on product count

    // send the products array to the browser as part of the server response
    res.json( { products, page, pages : Math.ceil( count / pageSize ) } );

    // and since we are now sending back multiple key value pairs we need to account for this
    // on the frontend so let's go to the product.actions.js 8 - file now

} );


// ==============================
// Controller 2
// ==============================

// in controller 2, we want to get a product by id and then return that product to the browser
// as part of the server response

// CONTROLLER 2
// @desc    - GET a product by id
// @route   - GET request to /api/products/:id
// @access  - Public route
const productGet = asyncHandler( async( req, res ) => {
    
    // use the findById(); method to fetch a single product
    const product = await Product.findById( req.params.id );

    // make sure the product or product instance in the database exist
    if ( product ) {

        // send the product to the browser as part of the server response
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

} );


// ==============================
// Controller 3
// ==============================

// in controller 3, we want to delete a product from the database and then return a message

// Controller 3
// @desc    - DELETE a product
// @route   - DELETE request to /api/products/:id
// @access  - Private route and Admin route
const productDeleteAdmin = asyncHandler( async( req, res ) => {

    // first let's find the specified product by id

    // what we want here is the product that the admin wants to delete and we get that product
    // by looking for the product's id in the URL
    const productToDelete = await Product.findById( req.params.id );

    // check and make sure the productToDelete exist
    if ( productToDelete ) {

        // delete the specified product from the database
        await productToDelete.remove();

        // send a message and we will use this message in Postman to detemine whether
        // or not our backend is working but we will not use this message in the frontend
        res.json( { message : 'Product deleted from the database' } );

    } else {

        // if we can't find productToDelete in the database then let's do the following:
        res.status( 404 );

        throw new Error( 'Product not found' );

    }

} ); // end of productDeleteAdmin


// remember Option 1 and Option 2 below do the same thing but I decided to comment out
// Option 1 below since I liked Option 2 better

/*
// ==============================
// Controller 4 - Option 1
// ==============================

// in controller 4, we want to create a product with some sample data and then save it to the
// database

// Controller 4
// @desc    - Create a new product
// @route   - POST request to /api/products
// @access  - Private route and Admin route
const productCreateAdmin = asyncHandler( async( req, res ) => {

    // ==============================
    // CREATE A NEW PRODUCT
    // ==============================

    // instantiate / create a new product 
    const product = new Product(
        {
            name         : 'Sample name',
            image        : '/image/sample.jpg',
            description  : 'Sample description',
            brand        : 'Sample brand',
            category     : 'Sample category',
            price        : 0,                
            countInStock : 0,
            // in addition, we want to attach the logged in user to the creation of
            // the product and remember since this will be a protected route we will be
            // able to get a token and then get the user's id from the token
            user         : req.user._id
        }
    );

    // ==============================
    // SAVE THE PRODUCT TO THE DATABASE
    // ==============================

    // although we created the product above, it is not yet saved in the database and we can
    // save the product to the database by doing " await product.save(); " and we will save
    // the result of this construct to the const createdProduct
    const createdProduct = await product.save();

    // if the createdProduct was created successfully then do the following
    if ( createdProduct ) {

        // ==============================
        // SEND THE CREATEDPRODUCT OBJECT TO THE BROWSER
        // ==============================

        // 201 " indicates that the request has succeeded and has led to the creation of a
        // resource " and then as part of the server response let's use the json data transfer
        // format to send back to browser the createdProduct object
        res.status( 201 ).json( createdProduct );

    } else { // if the product was not created successfully then do the following

        // 400 means the request was bad
        res.status( 400 );

        throw new Error( 'Could not create the product' );

    }

} ); // end of productCreateAdmin
*/


// ==============================
// Controller 4 - Option 2
// ==============================

// in controller 4, we want to create a product with some sample data and then save it to the
// database

// Controller 4
// @desc    - Create a new product
// @route   - POST request to /api/products
// @access  - Private route and Admin route
const productCreateAdmin = asyncHandler( async( req, res ) => {

    // ==============================
    // CREATE NEW PRODUCT
    // ==============================

    // let's use the create(); method to add a product to the database and add the properties
    // and values that we want to add to the product document in the database

    // from " https://masteringjs.io/tutorials/mongoose/create ": " The create() function is
    // a thin wrapper around the save() function. The above create() call is equivalent to:

    // const doc = new User( { email: 'bill@microsoft.com' } );
    // await doc.save();

    // The most common reason for using create() is that you can conveniently save()
    // multiple documents with a single function call by passing an array of objects: "
    const createdProduct = await Product.create(

        {
            name         : 'Sample name',
            image        : '/images/sample.jpg',
            description  : 'Sample description',
            brand        : 'Sample brand',
            category     : 'Sample category',
            price        : 0,                
            countInStock : 0,
            // in addition, we want to attach the logged in user to the creation of
            // the product and remember since this will be a protected route we will be
            // able to get a token and then get the user's id from the token
            user         : req.user._id
        }

    );

    // if the createdProduct was created successfully then do the following
    if ( createdProduct ) {

        // ==============================
        // SEND THE CREATEDPRODUCT OBJECT TO THE BROWSER
        // ==============================

        // 201 " indicates that the request has succeeded and has led to the creation of a
        // resource " and then as part of the server response let's use the json data transfer
        // format to send back to browser the createdProduct object
        res.status( 201 ).json( createdProduct );

    } else { // if the product was not created successfully then do the following

        // 400 means the request was bad
        res.status( 400 );

        throw new Error( 'Could not create the product' );

    }
    
} );


// ==============================
// CONTROLLER 5
// ==============================

// Controller 5
// @desc    - UPDATE a product
// @route   - PUT request to /api/product/:id
// @access  - Private route and Admin route
const productUpdateAdmin = asyncHandler( async( req, res ) => {

    // first let's get a bunch of data from the body or req.body and remember when we created
    // the product we filled the product with dummy sample data so it's up to the admin user
    // to fill in the data for the new product
    const {
        name,
        image,
        description,
        brand,
        category,
        price,
        countInStock
    } = req.body;

    // then let's find the specified product by id and we will use req.params.id and this
    // will be the id in the URL

    // use req.params.id to find the product id
    const product = await Product.findById( req.params.id );

    // check and make sure the product exist
    if ( product ) {

        // if we find the product document then let's update the product's information based on
        // req.body.key
        product.name         = name
        product.image        = image
        product.description  = description
        product.brand        = brand
        product.category     = category
        product.price        = price
        product.countInStock = countInStock

        // ==============================
        // Update the product document in the database
        // ==============================

        // then let's update the product document in the database based on the changes above and
        // then save the updated product document to the const " updatedProduct "
        const updatedProduct = await product.save();

        // from stackoverflow: " Short answer: or both PUT and DELETE, you should send either
        // 200 ( Ok ) or 204 ( No content ). " and then as part of the server response let's
        // use the json data transfer format to send back to the browser the updatedProduct
        // object
        res.status( 200 ).json( updatedProduct );

    } else {

        // if we can't find the product or the product does not exist then let's do the following:
        res.status( 404 );

        throw new Error( 'Product not found' );

    }

} ); // end of productUpdateAdmin


// ==============================
// CONTROLLER 6
// ==============================

// Controller 6
// @desc    - CREATE a new review
// @route   - POST request to /api/products/:id/reviews
// @access  - Private route
const productCreateReview = asyncHandler( async( req, res ) => {

    // first let's get some data from the body or req.body
    const { rating, comment } = req.body;

    // then let's find the product that the user is reviewing and we can do that by using the
    // product id and to get the product id we will use req.params.id and this will be the id 
    // in the URL

    // use req.params.id to find the product
    const product = await Product.findById( req.params.id );

    // check and make sure the product exist
    if ( product ) {

        // first, let's check to make sure the user has not already submitted a review

        // let's look inside the reviews array for this product by using
        // " product.reviews.find(); "
        const alreadyReviewed = product.reviews.find( ( review ) => {

            // this will be true if the user making the review is the same as the logged in
            // user or in other words the user has already made a review
            return review.user.toString() === req.user._id.toString();

        } );

        if ( alreadyReviewed ) {

            // send a 400 or bad request status code
            res.status( 400 );

            throw new Error( 'This product has already been reviewed.' );
            
        }
        
        // ==============================
        // Create the review object
        // ==============================

        // if the user has not already added a review then let's construct a review object with
        // the following key value pairs
        const review = {
            name    : req.user.name,
            // make sure the rating is a number and the rating value below comes from
            // req.body.rating above
            rating  : Number( rating ),
            comment : comment,
            // set user equal to the user's id value
            user    : req.user._id
        }

        // ==============================
        // Update the product
        // ==============================        

        // update 1
        // add this review to the product reviews array or
        // update the reviews array
        product.reviews.push( review );

        // update 2
        // update the numReviews field
        product.numReviews = product.reviews.length;

        // update 3
        // update the rating field
        product.rating = product.reviews.reduce( ( accumlator, currentElement ) =>
            accumlator + currentElement.rating,
            0
        ) / product.numReviews;

        // ==============================
        // Update the product document in the database
        // ==============================

        // then update the product document in the database based on the changes above
        await product.save();

        // ==============================
        // Send the response
        // ==============================

        // send back a 201 status response or " The HTTP 201 Created success status response
        // code indicates that the request has succeeded and has led to the creation of a
        // resource. " and as part of the server response let's use the json data transfer
        // format to send back a message object to the browser
        res.status( 201 ).json( { message : 'Review added' } );

    } else {

        // if we can't find the product or the product does not exist then let's do the following:
        res.status( 404 );

        throw new Error( 'Product not found' );

    }

} ); // end of productUpdateAdmin


export { 
    productList,
    productGet,
    productDeleteAdmin,
    productCreateAdmin,
    productUpdateAdmin,
    productCreateReview
};



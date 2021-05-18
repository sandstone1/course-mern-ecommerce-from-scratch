
/*
import React from 'react';

import './product-screen.styles.scss';

// 1 -
// let's import in the Link component and the rating component and the products.js file
import { Link } from 'react-router-dom';
import Rating from '../../components/rating/rating.component';
import products from '../../products';

// let's use the find array method to find a product with an id that matches the id in
// the url and remember once we find a condition that is true then the find function call
// stops running so let's do the following:
// " const product = products.find( ( product ) => product._id === match.params.id ) "

// End of 1 -


const ProductScreen = ( { match } ) => {

    // 1 - continued
    // use the find array method to find the right product so if we clicked on product 1, for
    // example, or " http://localhost:3008/product/1 " then we know that match.params.id === 1
    // and now we need to use the find array method to find the product that has an id of 1 and
    // to do this we will loop through the products array ( using the find array method ) until
    // we find the product that has an id of 1 and at that point we have a match and therefore
    // we have located the right or the correct product and then we can use the details from that
    // product to populate the ProductScreen component
    
    // and remember this all works because we set the Route path in the App.js file for this
    // component to be " path='/product/:id' "

    // remember to destructure match in the argument above

    // and if we test this out by doing " <div className="product-screen">{ product.name }</div> "
    // below then we see that everything is working as expected
    const product = products.find( ( product ) => product._id === match.params.id );

    // now let's start building out this page

    // after we finished adding the jsx and styles for this component I went to the home page and
    // tested everything and everything works as expected

    // in the next video, we will start to work on our back end and we will create a simple Express
    // server that will serve the products from the back end

    // End of 1 -

    // include the rating text
    const text = `${ product.numReviews } reviews`

    return (

        <div className="product-screen">

            <div className="product-screen--btn">
                { /* home page button */ /* }
                <Link to="/" className="product-screen--btn--home-link">Return to Home Page</Link>
            </div>

            <div className="product-screen--main">

                { /* first column: image */ /* }
                <div className="product-screen--main--col-1">

                    <img
                        src={ product.image }
                        alt={ product.name }
                        className="product-screen--main--col-1--img"
                    />

                </div>


                { /* second column: name, rating, price, description */ /* }
                <div className="product-screen--main--col-2">

                    <span className="product-screen--main--col-2--name">
                        { product.name }
                    </span>

                    <div className="product-screen--main--col-2--rating" >
            
                        <Rating
                            product={ product }
                        />

                    </div>

                    <span className="product-screen--main--col-2--price">
                        Price: ${ product.price }
                    </span>

                    <p className="product-screen--main--col-2--description">
                        Description: { product.description }
                    </p>

                </div>


                { /* third column: price, status, add to cart button */ /* }
                <div className="product-screen--main--col-3">

                    <div className="product-screen--main--col-3--row-1">

                        <span className="product-screen--main--col-3--row-1--price-1">
                            Price:
                        </span>

                        <span className="product-screen--main--col-3--row-1--price-2">
                            ${ product.price }
                        </span>

                    </div>
                    

                    <div className="product-screen--main--col-3--row-2">

                        <span className="product-screen--main--col-3--row-2--status-1">
                            Status:
                        </span>

                        <span className="product-screen--main--col-3--row-2--status-2">
                            { product.countInStock > 0 ? 'In Stock' : 'Out of Stock' }
                        </span>

                    </div>

                    { /* add to cart button */ /* }
                    <Link
                        to="/cart"
                        className=
                        {
                            product.countInStock > 0 ?
                            'product-screen--main--col-3--row-3--btn' :
                            'product-screen--main--col-3--row-3--btn-disable'
                        }
                    >
                        Add to Cart
                    </Link>

                </div>

            </div>

        </div>

    );

}


export default ProductScreen;
*/




















// ===============================

















// at the beginning of lecture 6, given all the notes, I created a new file below without
// the notes so we are starting fresh


/*
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Rating from '../../components/rating/rating.component';
// import products from '../../products';

import './product-screen.styles.scss';


// 2 -
// coming from the home-screen.component.jsx 1 - file
// let's start by copying in the relevant code from the home-screen.component.jsx 1 - file
// and remember to comment out or delete " import products from '../../products'; " and
// import in the useState and useEffect hooks above and we can comment out or delete
// " const product = products.find( ( product ) => product._id === match.params.id ); " since we
// used this code in route 3 in the server.js file

// End of 2 -


const ProductScreen = ( { match } ) => {

    // use the find array method to find the right product 
    // const product = products.find( ( product ) => product._id === match.params.id );


    // 2 - continued
    const [ product, setProduct ] = useState( {} );

    // now let's use the useEffect hook to make a request to our backend and remember to import
    // the useEffect hook above 
    useEffect( () => {

        const fetchProduct = async () => {

            // use match.params.id to get the right endpoint
            const endpoint = `/api/products/${ match.params.id }`;

            // and remember this endpoint will send back a specific product as the response or
            // ( from the server.js file ):

            /*
            const products = require( './data/products' );

            app.get( '/api/products/:id', ( req, res ) => {

                const product = products.find( ( product ) => product._id === req.params.id );

                res.json( product ); 

            } );
            */

            // fetch the data or the specific product
            /*
            const response =  await fetch( endpoint, {
                method : 'GET'
            } );

            // convert the response into a JavaScript object using the json() method
            const data = await response.json();

            // now let's reset the state
            // and data in this case equals the product
            setProduct( data );

        }

        // and then we need to run the fetchProduct function
        fetchProduct();

    }, [ match.params.id ] );

    // and finally we can remove the products.js file in the frontend since we are no
    // using this file

    // and next we will start working on the backend some more and add something called
    // nodemons so that we don't have to keep restarting the server and we want to add
    // a package called concurrently so that we can run the frontend and backend server
    // at the same time with the same command instead of having to run react in one tab
    // and node in another tab

    // End of 2 -
    

    return (

        <div className="product-screen">

            <div className="product-screen--btn">
                { /* home page button */ /* }
                <Link to="/" className="product-screen--btn--home-link">Return to Home Page</Link>
            </div>

            <div className="product-screen--main">

                { /* first column: image */ /* }
                <div className="product-screen--main--col-1">

                    <img
                        src={ product.image }
                        alt={ product.name }
                        className="product-screen--main--col-1--img"
                    />

                </div>


                { /* second column: name, rating, price, description */ /* }
                <div className="product-screen--main--col-2">

                    <span className="product-screen--main--col-2--name">
                        { product.name }
                    </span>

                    <div className="product-screen--main--col-2--rating" >

                        <Rating
                            product={ product }
                        />               

                    </div>

                    <span className="product-screen--main--col-2--price">
                        Price: ${ product.price }
                    </span>

                    <p className="product-screen--main--col-2--description">
                        Description: { product.description }
                    </p>

                </div>


                { /* third column: price, status, add to cart button */ /* }
                <div className="product-screen--main--col-3">

                    <div className="product-screen--main--col-3--row-1">

                        <span className="product-screen--main--col-3--row-1--price-1">
                            Price:
                        </span>

                        <span className="product-screen--main--col-3--row-1--price-2">
                            ${ product.price }
                        </span>

                    </div>
                    

                    <div className="product-screen--main--col-3--row-2">

                        <span className="product-screen--main--col-3--row-2--status-1">
                            Status:
                        </span>

                        <span className="product-screen--main--col-3--row-2--status-2">
                            { product.countInStock > 0 ? 'In Stock' : 'Out of Stock' }
                        </span>

                    </div>

                    { /* add to cart button */ /* }
                    <div className="product-screen--main--col-3--row-3">
                    
                        <Link
                            to="/cart"
                            className=
                            {
                                product.countInStock > 0 ?
                                'product-screen--main--col-3--row-3--btn' :
                                'product-screen--main--col-3--row-3--btn-disable'
                            }
                        >
                            Add to Cart
                        </Link>

                    </div>

                </div>

            </div>

        </div>

    );

}


export default ProductScreen;
*/






















// ===============================


















/*
// at the beginning of lecture 30, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { productGetActionCreator } from '../../redux/actions/product.actions';
import Rating from '../../components/rating/rating.component';
import Spinner from '../../components/spinner/spinner.component';
import ErrorMessage from '../../components/error/error-message.component';

import './product-screen.styles.scss';


const ProductScreen = ( { match } ) => {

    // 3 -
    // coming from the store.js 3 - file
    // delete useState() above and below and delete everything inside the useEffect() hook

    // instead of fetching the product details or " data " in the product-screen.component.jsx
    // file by using the useEffect hook ( see below ) we will fetch the data by dispatching
    // the action creator below

    // import in the useDispatch(); and the useSelector(); hooks

    // set dispatch equal to the useDispatch(); hook and then use dispatch to dispatch the
    // action creator inside the useEffect(); hook
    const dispatch = useDispatch();

    // import in the productGetActionCreator above and then dispatch this action creator
    // in the useEffect(); hook below and remember to include " match.params.id " as the
    // argument to the action creator

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const productGet = useSelector( ( state ) => state.productGet );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { product, error, loading } = productGet;    
 
    // let's check and see if loading is true and let's check and see if we have an
    // error

    // if loading is true then we want to display a spinner or a react skeleton component
    // otherwise if the error is true then we want to display the error message otherwise we
    // want to display our jsx or html ( see below )

    // remember to import in the Spinner component and the ErrorMessage component

    // so now our data is coming from the database and then being routed to the correct place
    // through redux 

    // under the Diff tab we see:

    /*
        productGet (pin)
            product (pin) : { price : $99.99, countInStock : 7, rating : 4, ... }
            loading (pin) : true => false
    */

    // and this is correct so everything is working as expected

    // under the State tab we see:

    /*
        productList (pin)
            products (pin) : []
        productGet (pin)
            product (pin) : { price : $99.99, countInStock : 7, rating : 4, ... }
            loading (pin) : false
    */

    // and this is correct so everything is working as expected
    
    // the next thing to do is work on our cart 

    /*
    useEffect( () => {

        dispatch( productGetActionCreator( match.params.id ) );

    }, [ dispatch, match.params.id ] );

    // End of 3 -


    return (

        <div className="product-screen">

            <div className="product-screen--btn">
                { /* home page button */ /* }
                <Link to="/" className="product-screen--btn--home-link">Return to Home Page</Link>
            </div>

            { /* before moving on to the next block of code, check loading and error */ /* }
            { loading ? (

                <Spinner />

            ) : error ? (

                <ErrorMessage>{ error }</ErrorMessage>

            ) : (

                <div className="product-screen--main">

                    { /* first column: image */ /* }
                    <div className="product-screen--main--col-1">

                        <img
                            src={ product.image }
                            alt={ product.name }
                            className="product-screen--main--col-1--img"
                        />

                    </div>


                    { /* second column: name, rating, price, description */ /* }
                    <div className="product-screen--main--col-2">

                        <span className="product-screen--main--col-2--name">
                            { product.name }
                        </span>

                        <div className="product-screen--main--col-2--rating" >

                            <Rating
                                product={ product }
                            />               

                        </div>

                        <span className="product-screen--main--col-2--price">
                            Price: ${ product.price }
                        </span>

                        <p className="product-screen--main--col-2--description">
                            Description: { product.description }
                        </p>

                    </div>


                    { /* third column: price, status, add to cart button */ /* }
                    <div className="product-screen--main--col-3">

                        <div className="product-screen--main--col-3--row-1">

                            <span className="product-screen--main--col-3--row-1--price-1">
                                Price:
                            </span>

                            <span className="product-screen--main--col-3--row-1--price-2">
                                ${ product.price }
                            </span>

                        </div>
                        

                        <div className="product-screen--main--col-3--row-2">

                            <span className="product-screen--main--col-3--row-2--status-1">
                                Status:
                            </span>

                            <span className="product-screen--main--col-3--row-2--status-2">
                                { product.countInStock > 0 ? 'In Stock' : 'Out of Stock' }
                            </span>

                        </div>

                        { /* add to cart button */ /* }
                        <div className="product-screen--main--col-3--row-3">
                        
                            <Link
                                to="/cart"
                                className=
                                {
                                    product.countInStock > 0 ?
                                    'product-screen--main--col-3--row-3--btn' :
                                    'product-screen--main--col-3--row-3--btn-disable'
                                }
                            >
                                Add to Cart
                            </Link>

                        </div>

                    </div>

                </div>

            ) }

        </div>

    );

}


export default ProductScreen;
*/




















// ===============================



















// at the beginning of lecture 31, given all the notes, I created a new file below without
// the notes so we are starting fresh

/*
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { productGetActionCreator } from '../../redux/actions/product.actions';
import Rating from '../../components/rating/rating.component';
import Spinner from '../../components/spinner/spinner.component';
import ErrorMessage from '../../components/error/error-message.component';

import './product-screen.styles.scss';


const ProductScreen = ( { match } ) => {


    // 4 -
    // and remember quantity will be part of our component level state so let's import in the
    // useState(); hook and then set the initial quantity state to 0 by default
    const [ qty, setQty ] = useState( 0 );

    // End of 4 -

    // 5 -
    // from a blog: " The Array() constructor is used to create Array objects. "

    // from MDN: " The Array.from() static method creates a new, shallow-copied Array instance
    // from an array-like or iterable object.

    // JavaScript Demo: Array.from()
    // line 1 - console.log( Array.from( 'foo' ) );
    // line 2 - expected output: Array [ "f", "o", "o" ] "

    // and from stackoverflow ( in an answer to the question below )
    // ( https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n ):
    // " line 1 - Array.from( Array( 10 ).keys() )
    // line 2 - => [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ] "

    // so
    // STEP 1 " Apply( 10 ) " give us " 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 " and then
    // STEP 2 " Apply( 10 ).keys() " give us 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 and then
    // STEP 3 " Array.from( Array( 10 ).keys() ) " give us [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

    // so Apply() takes a number as an argument and applies the .key() method to it and this
    // results in ( assuming 10 is the argument ) 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 and then
    // Array.from() takes the result and turns the result into an array or
    // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

    // and from stackoverflow ( in an answer to the question below )
    // ( https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n ):
    // " Shorter version using spread operator.
    // line 1 - [ ...Array( 10 ).keys() ]
    // line 2 - => [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ] "

    // so
    // STEP 1 " ...Apply( 10 ) " give us " 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 " and then
    // STEP 2 " Apply( 10 ).keys() " give us 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 and then
    // STEP 3 " [ ...Array( 10 ).keys() ] " give us [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

    // so ...Apply() takes a number as an argument and applies the .key() method to it and
    // this results in ( assuming 10 is the argument ) 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 and then
    // we add brackets or [] around ...Array( 10 ).keys() and this turns the result into an
    // array or [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

    // so asumming the countInStock was 5 then the code below or " [ ...Array( 10 ).keys() ]) "
    // will give us a result of [ 0, 1, 2, 3, 4 ] and this correct and what we want and then
    // we can map over this array and populate the option element(s) as needed or more
    // specifically the option key values and the option values and the option output and
    // remember the option output will match the option value

    // I decided to go with " [ ...Array( 10 ).keys() ] " since this made more sense to me

    // from W3 schools:

    /*
        Create a drop-down list with four options:

        <label for="cars">Choose a car:</label>

        <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
        </select>
    */

    // and this is what were looking to create in 5 - below and everything is working as
    // expected which is great

    // and if we pull up one of the products that has no products in stock or the
    // countInStock is 0 then we will get " Status : Out of Stock " and the third row or
    // the row with " Quantity : # in stock " will not even show on the page and this is
    // correct so everything is working as expected

    // and now we want to work on the shopping cart and let's go to 6 - below

    // End 5 -


    // set dispatch equal to the useDispatch(); hook and then use dispatch to dispatch the
    // action creator inside the useEffect(); hook
    /*
    const dispatch = useDispatch();

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const productGet = useSelector( ( state ) => state.productGet );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { product, error, loading } = productGet;    
 
    // dispatch our action creator
    useEffect( () => {

        dispatch( productGetActionCreator( match.params.id ) );

    }, [ dispatch, match.params.id ] );


    // 6 -
    // now we want to add an onClick to the " Add To Cart " button or
    // " onClick={ addToCartHandler } " and then add the addToCartHandler below
    /*
    const addToCartHandler = ( e ) => {

        // and we want to go the cart page or cart-screen.component.jsx and we want to redirect
        // to the cart page and to do that let's pass in the history prop above as an argument
        // and then we can add the push(); method to the history object and then add the
        // location for the redirect or " `cart/${ match.params.id }?qty=${ qty }` " and
        // we are adding a query string or query parameter of " qty=${ qty } " 
        history.push( `cart/${ match.params.id }?qty=${ qty }` );

    }
    */

    // I scrapped the code above since I'm using a link component and Brad is using a button
    // and all I need to do in order to redirect to the cart page is
    // " to={ `/cart/${ match.params.id }?qty=${ qty }` } " and I tested this out and assuming
    // we order 2 items the result is the following:

    // " http://localhost:3008/cart/5ff504545a6a66457f0b0709?qty=2 "

    // and this is correct so everything is working as expected

    // next we need to create a cart-screen.component.jsx file and inside the screens folder
    // let's create a folder called " cart-screen " and inside that folder let's create a file
    // called " cart-screen.component.jsx " and another file called " cart-screen.styles.scss "
    // and let's go to the cart-screen.component.jsx file now

    // End of 6 -


    // let's check and see if loading is true and let's check and see if we have an
    // error

    // if loading is true then we want to display a spinner or a react skeleton component
    // otherwise if the error is true then we want to display the error message otherwise we
    // want to display our jsx or html ( see below )

    /*
    return (

        <div className="product-screen">

            <div className="product-screen--btn">
                { /* home page button */ /* }
                <Link to="/" className="product-screen--btn--home-link">Return to Home Page</Link>
            </div>

            { /* before moving on to the next block of code, check loading and error */ /* }
            { loading ? (

                <Spinner />

            ) : error ? (

                <ErrorMessage>{ error }</ErrorMessage>

            ) : (

                <div className="product-screen--main">

                    { /* first column: image */ /* }
                    <div className="product-screen--main--col-1">

                        <img
                            src={ product.image }
                            alt={ product.name }
                            className="product-screen--main--col-1--img"
                        />

                    </div>


                    { /* second column: name, rating, price, description */ /* }
                    <div className="product-screen--main--col-2">

                        <span className="product-screen--main--col-2--name">
                            { product.name }
                        </span>

                        <div className="product-screen--main--col-2--rating" >

                            <Rating
                                product={ product }
                            />               

                        </div>

                        <span className="product-screen--main--col-2--price">
                            Price: ${ product.price }
                        </span>

                        <p className="product-screen--main--col-2--description">
                            Description: { product.description }
                        </p>

                    </div>


                    { /* third column: price, status, add to cart button */ /* }
                    <div className="product-screen--main--col-3">

                        <div className="product-screen--main--col-3--row-1">

                            <span className="product-screen--main--col-3--row-1--price-1">
                                Price:
                            </span>

                            <span className="product-screen--main--col-3--row-1--price-2">
                                ${ product.price }
                            </span>

                        </div>
                        

                        <div className="product-screen--main--col-3--row-2">

                            <span className="product-screen--main--col-3--row-2--status-1">
                                Status:
                            </span>

                            <span className="product-screen--main--col-3--row-2--status-2">
                                { product.countInStock > 0 ? 'In Stock' : 'Out of Stock' }
                            </span>

                        </div>

                        { /* 4 - */ /* }
                        { /* if product.countInStock > 0 then add the quantity select element */ /* }
                        {
                            product.countInStock > 0 && (

                                <div className="product-screen--main--col-3--row-3">

                                    <span className="product-screen--main--col-3--row-3--quantity-1">
                                        Quantity:
                                    </span>

                                    { /* - 5 */ /* }
                                    <select
                                        value={ qty }
                                        onChange={ ( e ) => setQty( e.target.value ) }                                    
                                        className="product-screen--main--col-3--row-3--select-1"
                                    >

                                        {
                                            [ ...Array( product.countInStock ).keys() ]
                                                .map( ( i ) => (
                                                        <option
                                                            key={ i + 1 }
                                                            value={ i + 1 }
                                                        >
                                                            { i + 1 }
                                                        </option>
                                                    )
                                                )
                                        }

                                    </select>
                                    { /* End of - 5 */ /* }

                                </div>

                            )
                        }
                        { /* End of 4 - */ /* }
                        
                        { /* add to cart button */ /* }
                        <div className="product-screen--main--col-3--row-4">
                        
                            <Link
                                to={ `/cart/${ match.params.id }?qty=${ qty }` }
                                className=
                                {
                                    product.countInStock > 0 ?
                                    'product-screen--main--col-3--row-4--btn' :
                                    'product-screen--main--col-3--row-4--btn-disable'
                                }
                            >
                                Add to Cart
                            </Link>

                        </div>

                    </div>

                </div>

            ) }

        </div>

    );

}


export default ProductScreen;
*/






















// ===============================




















/*
// at the beginning of lecture 32, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React, { useEffect, useState } from 'react';
// import in the useDispatch(); and useSelector(); hooks
import { useDispatch, useSelector } from 'react-redux';
// import in the Link component
import { Link } from 'react-router-dom';
// import in our action creators
import { 
    productGetActionCreator,
    productCreateReviewActionCreator
} from '../../redux/actions/product.actions';
// import in our PRODUCT_CREATE_REVIEW_RESET constant
import { PRODUCT_CREATE_REVIEW_RESET } from '../../redux/constants/product.constants';
// import in the Rating component
import Rating from '../../components/rating/rating.component';
// import in the RatingReview component
import RatingReview from '../../components/rating-review/rating-review.component';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner.component';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';
// import in the InfoMessage component
import InfoMessage from '../../components/message/info-message.component';
// inport in the FormTextArea component
import FormTextArea from '../../components/form-textarea/form-textarea.component';

import './product-screen.styles.scss';


// 7 -
// coming from the store.js 27 - file

// import in our productCreateReviewActionCreator and our PRODUCT_CREATE_REVIEW_RESET
// constant

// End of 7 -




const ProductScreen = ( { match } ) => {

    // ==============================
    // Component State
    // ==============================

    // set the initial quantity state to 0
    const [ quantity, setQuantity ] = useState( 1 );


    // 7 - continued
    // we will build a review form below and the 2 inputs will be rating and
    // comment
    // set the initial state for the rating and comment
    const [ rating, setRating ]   = useState( 0 );
    const [ comment, setComment ] = useState( '' );

    // End of 7 -


    // ==============================
    // USEDISPATCH();
    // ==============================

    // set dispatch equal to the useDispatch(); hook and then use dispatch to dispatch the
    // action creator inside the useEffect(); hook
    const dispatch = useDispatch();

    // ==============================
    // productGet State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const productGet = useSelector( ( state ) => state.productGet );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { 
        loading : loadingGet,
        product,
        error   : errorGet
    } = productGet;


    // 7 - continued

    // ==============================
    // userSignIn State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const userSignIn = useSelector( ( state ) => state.userSignIn );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { userInfo } = userSignIn;

    // ==============================
    // productCreateReview State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const productCreateReview = useSelector( ( state ) => state.productCreateReview );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { 
        loading : loadingCreateReview,
        success : successCreateReview,
        error   : errorCreateReview
    } = productCreateReview;

    // build a review section and make it col-4

    // End of 7 -


    // ==============================
    // USEEFFECT();
    // ==============================
 
    useEffect( () => {


        // 7 - continued

        // if successCreateReview changes then we want to dispatch the productGetActionCreator
        // again and reset the state on the page
        if ( successCreateReview ) {

            // reset rating to 0
            setRating( 0 );

            // reset comment to an empty string
            setComment( '' ); 

            // reset the product create review state so we don't end up in an infinate
            // loop
            dispatch( { type : PRODUCT_CREATE_REVIEW_RESET } );

        } // end of if

        // dispatch our action creator
        dispatch( productGetActionCreator( match.params.id ) );

    }, [ dispatch, match.params.id, successCreateReview ] );

    // ==============================
    // handleSubmit function
    // ==============================

    const handleSubmit = ( e ) => {

        // since we're submitting a form, we want to prevent default browser behavior
        e.preventDefault();

        // create the review object
        const productCreateReviewObject = {
            rating  : rating,
            comment : comment
        }

        // dispatch our action creator
         dispatch( productCreateReviewActionCreator( product._id, productCreateReviewObject ) );

    } // end of handleSubmit

    // End of 7 -


    return (

        loadingGet ? (

            <Spinner />

        ) : errorGet ? (

            <ErrorMessage>{ errorGet }</ErrorMessage>

        ) : loadingCreateReview ? (

            <Spinner />

        ) : errorCreateReview ? (

            <ErrorMessage>{ errorCreateReview }</ErrorMessage>

        ) : (

            <div className="product-screen">

                <div className="product-screen--button">

                    { /* home page button */ /* }
                    <Link to="/" className="product-screen--button--home-link">Return to Home Page</Link>

                </div>

                <div className="product-screen--main">

                    { /* first column: image */ /* }
                    <div className="product-screen--main--col-1">

                        <img
                            src={ product.image }
                            alt={ product.name }
                            className="product-screen--main--col-1--img"
                        />

                    </div>


                    { /* second column: name, rating, price, description */ /* }
                    <div className="product-screen--main--col-2">

                        <span className="product-screen--main--col-2--name">
                            { product.name }
                        </span>

                        <div className="product-screen--main--col-2--rating" >

                            <Rating
                                product={ product }
                            />               

                        </div>

                        <span className="product-screen--main--col-2--price">
                            Price: ${ product.price }
                        </span>

                        <p className="product-screen--main--col-2--description">
                            Description: { product.description }
                        </p>

                    </div>


                    { /* third column: price, status, quantity and add to cart button */ /* }
                    <div className="product-screen--main--col-3">

                        { /* row 1 */ /* }
                        <div className="product-screen--main--col-3--row-1">

                            <span className="product-screen--main--col-3--row-1--price-1">
                                Price:
                            </span>

                            <span className="product-screen--main--col-3--row-1--price-2">
                                ${ product.price }
                            </span>

                        </div>
                        
                        { /* row 2 */ /* }
                        <div className="product-screen--main--col-3--row-2">

                            <span className="product-screen--main--col-3--row-2--status-1">
                                Status:
                            </span>

                            <span className="product-screen--main--col-3--row-2--status-2">
                                { product.countInStock > 0 ? 'In Stock' : 'Out of Stock' }
                            </span>

                        </div>

                        { /* row 3 */ /* }
                        { /* if product.countInStock > 0 then add the quantity select element */ /* }
                        {
                            product.countInStock > 0 && (

                                <div className="product-screen--main--col-3--row-3">

                                    <span className="product-screen--main--col-3--row-3--quantity-1">
                                        Quantity:
                                    </span>

                                    { /* quanity select element */ /* }
                                    <select
                                        value={ quantity }
                                        onChange={ ( e ) => setQuantity( e.target.value ) }                                    
                                        className="product-screen--main--col-3--row-3--select-1"
                                    >

                                        {
                                            [ ...Array( product.countInStock ).keys() ]
                                                .map( ( i ) => (
                                                        <option
                                                            key={ i + 1 }
                                                            value={ i + 1 }
                                                        >
                                                            { i + 1 }
                                                        </option>
                                                    )
                                                )
                                        }

                                    </select>

                                </div>

                            )
                        }

                        { /* row 4 */ /* }
                        { /* add to cart button */ /* }
                        <div className="product-screen--main--col-3--row-4">
                        
                            <Link
                                to={ `/cart/${ match.params.id }?quantity=${ quantity }` }
                                className=
                                {
                                    product.countInStock > 0 ?
                                    'product-screen--main--col-3--row-4--btn' :
                                    'product-screen--main--col-3--row-4--btn-disable'
                                }
                            >
                                Add to Cart
                            </Link>

                        </div>

                    </div>

            </div>

            { /* review form */ /* }
            <div className="product-screen--reviews">

                <div className="product-screen--reviews--row-1">

                    <h2 className="product-screen--reviews--row-1--title">Product Reviews</h2>

                    { product.reviews.length === 0 && <InfoMessage>No reviews</InfoMessage> }

                    {
                        product.reviews.map( (review) => (

                            <RatingReview
                                key={ review._id }
                                name={ review.name }
                                rating={ review.rating }
                                date={ review.createdAt.substring( 0, 10 ) }
                                comment={ review.comment }
                            />

                        ) )
                    }

                </div>

                <div className="product-screen--reviews--row-2">

                    <h2 className="product-screen--reviews--row-2--title">Write a Customer Review</h2>

                    {
                        userInfo ? (

                            <form className="product-screen--reviews--row-2--form" noValidate="novalidate" onSubmit={ handleSubmit } >

                                { /*  select element  */ /* }
                                <div className="product-screen--reviews--row-2--form--select">

                                    <span className="product-screen--reviews--row-2--form--select--label">
                                        Rating
                                    </span>

                                    <select
                                        value={ rating }
                                        onChange={ ( e ) => setRating( e.target.value ) }                                    
                                        className="product-screen--reviews--row-2--form--select--element"
                                    >
                                        <option value="">Select...</option>
                                        <option value="1">1 - Poor</option>
                                        <option value="2">2 - Fair</option>
                                        <option value="3">3 - Good</option>
                                        <option value="4">4 - Very Good</option>
                                        <option value="5">5 - Excellent</option>
                                    </select>

                                </div>

                                { /* textarea box  */ /* }
                                <FormTextArea
                                    name="comment"
                                    rows="4"
                                    // cols="50"
                                    label="Comment"
                                    value={ comment }
                                    onChange={ (e) => setComment( e.target.value ) }
                                />

                                { /*  submit button  */ /* }
                                <div className="product-screen--reviews--row-2--form--button-container">
                    
                                    <button
                                        type="submit"
                                        className="product-screen--reviews--row-2--form--button-container--button"
                                    >
                                        Submit
                                    </button>
                        
                                </div>
                    
                            </form>

                        ) : (

                            <InfoMessage>Please <Link to="/login">sign in</Link> to write a review</InfoMessage>

                        )

                    }

                </div>

            </div>

         </div>

        )

    );

}


export default ProductScreen;
*/






















// ===============================




















/*
// at the beginning of lecture 85, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React, { useEffect, useState } from 'react';
// import in the useDispatch(); and useSelector(); hooks
import { useDispatch, useSelector } from 'react-redux';
// import in the Link component
import { Link } from 'react-router-dom';
// import in our action creators
import { 
    productGetActionCreator,
    productCreateReviewActionCreator
} from '../../redux/actions/product.actions';
// import in our PRODUCT_CREATE_REVIEW_RESET constant
import { PRODUCT_CREATE_REVIEW_RESET } from '../../redux/constants/product.constants';
// import in the Rating component
import Rating from '../../components/rating/rating.component';
// import in the RatingReview component
import RatingReview from '../../components/rating-review/rating-review.component';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner.component';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';
// import in the InfoMessage component
import InfoMessage from '../../components/message/info-message.component';
// inport in the FormTextArea component
import FormTextArea from '../../components/form-textarea/form-textarea.component';

import './product-screen.styles.scss';


// 8 -
// coming from the home-screen.component.jsx 12 - file

// import in the Meta component
import Meta from '../../components/meta/meta.component';

// place our Meta component below and then customize our title prop based on the product name
// and the description prop based on the product description 

// now let's go to the home-screen.component.jsx 13 - file

// End of 8 -


const ProductScreen = ( { match } ) => {

    // ==============================
    // Component State
    // ==============================

    // set the initial quantity state to 0
    const [ quantity, setQuantity ] = useState( 1 );
    // we will build a review form below and the 2 inputs will be rating and comment
    const [ rating, setRating ]     = useState( 0 );
    const [ comment, setComment ]   = useState( '' );

    // ==============================
    // USEDISPATCH();
    // ==============================

    // set dispatch equal to the useDispatch(); hook and then use dispatch to dispatch the
    // action creator inside the useEffect(); hook
    const dispatch = useDispatch();

    // ==============================
    // productGet State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const productGet = useSelector( ( state ) => state.productGet );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { 
        loading : loadingGet,
        product,
        error   : errorGet
    } = productGet;

    // ==============================
    // userSignIn State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const userSignIn = useSelector( ( state ) => state.userSignIn );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { userInfo } = userSignIn;

    // ==============================
    // productCreateReview State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const productCreateReview = useSelector( ( state ) => state.productCreateReview );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { 
        loading : loadingCreateReview,
        success : successCreateReview,
        error   : errorCreateReview
    } = productCreateReview;

    // ==============================
    // USEEFFECT();
    // ==============================
 
    useEffect( () => {

        // if successCreateReview changes then we want to dispatch the productGetActionCreator
        // again and reset the state on the page
        if ( successCreateReview ) {

            // reset rating to 0
            setRating( 0 );

            // reset comment to an empty string
            setComment( '' ); 

            // reset the product create review state so we don't end up in an infinate
            // loop
            dispatch( { type : PRODUCT_CREATE_REVIEW_RESET } );

        } // end of if

        // dispatch our action creator
        dispatch( productGetActionCreator( match.params.id ) );

    }, [ dispatch, match.params.id, successCreateReview ] );

    // ==============================
    // handleSubmit function
    // ==============================

    const handleSubmit = ( e ) => {

        // since we're submitting a form, we want to prevent default browser behavior
        e.preventDefault();

        // create the review object
        const productCreateReviewObject = {
            rating  : rating,
            comment : comment
        }

        // dispatch our action creator
         dispatch( productCreateReviewActionCreator( product._id, productCreateReviewObject ) );

    } // end of handleSubmit


    return (

        loadingGet ? (

            <Spinner />

        ) : errorGet ? (

            <ErrorMessage>{ errorGet }</ErrorMessage>

        ) : loadingCreateReview ? (

            <Spinner />

        ) : errorCreateReview ? (

            <ErrorMessage>{ errorCreateReview }</ErrorMessage>

        ) : (

            <div className="product-screen">

                <Meta 
                    title={ product.name }
                    description={ product.description }
                />

                <div className="product-screen--button">

                    { /* home page button */ /* }
                    <Link to="/" className="product-screen--button--home-link">Return to Home Page</Link>

                </div>

                <div className="product-screen--main">

                    { /* first column: image */ /* }
                    <div className="product-screen--main--col-1">

                        <img
                            src={ product.image }
                            alt={ product.name }
                            className="product-screen--main--col-1--img"
                        />

                    </div>


                    { /* second column: name, rating, price, description */ /* }
                    <div className="product-screen--main--col-2">

                        <span className="product-screen--main--col-2--name">
                            { product.name }
                        </span>

                        <div className="product-screen--main--col-2--rating" >

                            <Rating
                                product={ product }
                            />               

                        </div>

                        <span className="product-screen--main--col-2--price">
                            Price: ${ product.price }
                        </span>

                        <p className="product-screen--main--col-2--description">
                            Description: { product.description }
                        </p>

                    </div>


                    { /* third column: price, status, quantity and add to cart button */ /* }
                    <div className="product-screen--main--col-3">

                        { /* row 1 */ /* }
                        <div className="product-screen--main--col-3--row-1">

                            <span className="product-screen--main--col-3--row-1--price-1">
                                Price:
                            </span>

                            <span className="product-screen--main--col-3--row-1--price-2">
                                ${ product.price }
                            </span>

                        </div>
                        
                        { /* row 2 */ /* }
                        <div className="product-screen--main--col-3--row-2">

                            <span className="product-screen--main--col-3--row-2--status-1">
                                Status:
                            </span>

                            <span className="product-screen--main--col-3--row-2--status-2">
                                { product.countInStock > 0 ? 'In Stock' : 'Out of Stock' }
                            </span>

                        </div>

                        { /* row 3 */ /* }
                        { /* if product.countInStock > 0 then add the quantity select element */ /* }
                        {
                            product.countInStock > 0 && (

                                <div className="product-screen--main--col-3--row-3">

                                    <span className="product-screen--main--col-3--row-3--quantity-1">
                                        Quantity:
                                    </span>

                                    { /* quanity select element */ /* }
                                    <select
                                        value={ quantity }
                                        onChange={ ( e ) => setQuantity( e.target.value ) }                                    
                                        className="product-screen--main--col-3--row-3--select-1"
                                    >

                                        {
                                            [ ...Array( product.countInStock ).keys() ]
                                                .map( ( i ) => (
                                                        <option
                                                            key={ i + 1 }
                                                            value={ i + 1 }
                                                        >
                                                            { i + 1 }
                                                        </option>
                                                    )
                                                )
                                        }

                                    </select>

                                </div>

                            )
                        }

                        { /* row 4 */ /* }
                        { /* add to cart button */ /* }
                        <div className="product-screen--main--col-3--row-4">
                        
                            <Link
                                to={ `/cart/${ match.params.id }?quantity=${ quantity }` }
                                className=
                                {
                                    product.countInStock > 0 ?
                                    'product-screen--main--col-3--row-4--btn' :
                                    'product-screen--main--col-3--row-4--btn-disable'
                                }
                            >
                                Add to Cart
                            </Link>

                        </div>

                    </div>

            </div>

            { /* review form */ /* }
            <div className="product-screen--reviews">

                <div className="product-screen--reviews--row-1">

                    <h2 className="product-screen--reviews--row-1--title">Product Reviews</h2>

                    { product.reviews.length === 0 && <InfoMessage>There are no reviews</InfoMessage> }

                    {
                        product.reviews.map( (review) => (

                            <RatingReview
                                key={ review._id }
                                name={ review.name }
                                rating={ review.rating }
                                date={ review.createdAt.substring( 0, 10 ) }
                                comment={ review.comment }
                            />

                        ) )
                    }

                </div>

                <div className="product-screen--reviews--row-2">

                    <h2 className="product-screen--reviews--row-2--title">Write a Customer Review</h2>

                    {
                        userInfo ? (

                            <form className="product-screen--reviews--row-2--form" noValidate="novalidate" onSubmit={ handleSubmit } >

                                { /*  select element  */ /* }
                                <div className="product-screen--reviews--row-2--form--select">

                                    <span className="product-screen--reviews--row-2--form--select--label">
                                        Rating
                                    </span>

                                    <select
                                        value={ rating }
                                        onChange={ ( e ) => setRating( e.target.value ) }                                    
                                        className="product-screen--reviews--row-2--form--select--element"
                                    >
                                        <option value="">Select...</option>
                                        <option value="1">1 - Poor</option>
                                        <option value="2">2 - Fair</option>
                                        <option value="3">3 - Good</option>
                                        <option value="4">4 - Very Good</option>
                                        <option value="5">5 - Excellent</option>
                                    </select>

                                </div>

                                { /* textarea box  */ /* }
                                <FormTextArea
                                    name="comment"
                                    rows="4"
                                    // cols="50"
                                    label="Comment"
                                    value={ comment }
                                    onChange={ (e) => setComment( e.target.value ) }
                                />

                                { /*  submit button  */ /* }
                                <div className="product-screen--reviews--row-2--form--button-container">
                    
                                    <button
                                        type="submit"
                                        className="product-screen--reviews--row-2--form--button-container--button"
                                    >
                                        Submit
                                    </button>
                        
                                </div>
                    
                            </form>

                        ) : (

                            <InfoMessage>Please <Link to="/login">sign in</Link> to write a review</InfoMessage>

                        )

                    }

                </div>

            </div>

         </div>

        )

    );

}


export default ProductScreen;
*/






















// ===============================





















// at the beginning of lecture 89, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React, { useEffect, useState } from 'react';
// import in the useDispatch(); and useSelector(); hooks
import { useDispatch, useSelector } from 'react-redux';
// import in the Link component
import { Link } from 'react-router-dom';
// import in our action creators
import { 
    productGetActionCreator,
    productCreateReviewActionCreator
} from '../../redux/actions/product.actions';
// import in our PRODUCT_CREATE_REVIEW_RESET constant
import { PRODUCT_CREATE_REVIEW_RESET } from '../../redux/constants/product.constants';
// import in the Rating component
import Rating from '../../components/rating/rating.component';
// import in the RatingReview component
import RatingReview from '../../components/rating-review/rating-review.component';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner.component';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';
// import in the InfoMessage component
import InfoMessage from '../../components/message/info-message.component';
// inport in the FormTextArea component
import FormTextArea from '../../components/form-textarea/form-textarea.component';
// import in the Meta component
import Meta from '../../components/meta/meta.component';

import './product-screen.styles.scss';


const ProductScreen = ( { match } ) => {

    // ==============================
    // Component State
    // ==============================

    // set the initial quantity state to 0
    const [ quantity, setQuantity ] = useState( 1 );
    // we will build a review form below and the 2 inputs will be rating and comment
    const [ rating, setRating ]     = useState( 0 );
    const [ comment, setComment ]   = useState( '' );

    // ==============================
    // USEDISPATCH();
    // ==============================

    // set dispatch equal to the useDispatch(); hook and then use dispatch to dispatch the
    // action creator inside the useEffect(); hook
    const dispatch = useDispatch();

    // ==============================
    // productGet State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const productGet = useSelector( ( state ) => state.productGet );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { 
        loading : loadingGet,
        product,
        error   : errorGet
    } = productGet;

    // ==============================
    // userSignIn State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const userSignIn = useSelector( ( state ) => state.userSignIn );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { userInfo } = userSignIn;

    // ==============================
    // productCreateReview State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const productCreateReview = useSelector( ( state ) => state.productCreateReview );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { 
        loading : loadingCreateReview,
        success : successCreateReview,
        error   : errorCreateReview
    } = productCreateReview;

    // ==============================
    // USEEFFECT();
    // ==============================
 
    useEffect( () => {

        // if successCreateReview changes then we want to dispatch the productGetActionCreator
        // again and reset the state on the page
        if ( successCreateReview ) {

            // reset rating to 0
            setRating( 0 );

            // reset comment to an empty string
            setComment( '' ); 

            // reset the product create review state so we don't end up in an infinite
            // loop
            dispatch( { type : PRODUCT_CREATE_REVIEW_RESET } );

        } // end of if

        // dispatch our action creator
        dispatch( productGetActionCreator( match.params.id ) );

    }, [ dispatch, match.params.id, successCreateReview ] );

    // ==============================
    // handleSubmit function
    // ==============================

    const handleSubmit = ( e ) => {

        // since we're submitting a form, we want to prevent default browser behavior
        e.preventDefault();

        // create the review object
        const productCreateReviewObject = {
            rating  : rating,
            comment : comment
        }

        // dispatch our action creator
         dispatch( productCreateReviewActionCreator( product._id, productCreateReviewObject ) );

    } // end of handleSubmit


    return (

        loadingGet ? (

            <Spinner />

        ) : errorGet ? (

            <ErrorMessage>{ errorGet }</ErrorMessage>

        ) : loadingCreateReview ? (

            <Spinner />

        ) : errorCreateReview ? (

            <ErrorMessage>{ errorCreateReview }</ErrorMessage>

        ) : (

            <div className="product-screen">

                <Meta 
                    title={ product.name }
                    description={ product.description }
                />

                <div className="product-screen--button">

                    { /* home page button */ }
                    <Link to="/" className="product-screen--button--home-link">Return to Home Page</Link>

                </div>

                <div className="product-screen--main">

                    { /* first column: image */ }
                    <div className="product-screen--main--col-1">

                        <img
                            src={ product.image }
                            alt={ product.name }
                            className="product-screen--main--col-1--img"
                        />

                    </div>


                    { /* second column: name, rating, price, description */ }
                    <div className="product-screen--main--col-2">

                        <span className="product-screen--main--col-2--name">
                            { product.name }
                        </span>

                        <div className="product-screen--main--col-2--rating" >

                            <Rating
                                product={ product }
                            />               

                        </div>

                        <span className="product-screen--main--col-2--price">
                            Price: ${ product.price }
                        </span>

                        <p className="product-screen--main--col-2--description">
                            Description: { product.description }
                        </p>

                    </div>


                    { /* third column: price, status, quantity and add to cart button */ }
                    <div className="product-screen--main--col-3">

                        { /* row 1 */ }
                        <div className="product-screen--main--col-3--row-1">

                            <span className="product-screen--main--col-3--row-1--price-1">
                                Price:
                            </span>

                            <span className="product-screen--main--col-3--row-1--price-2">
                                ${ product.price }
                            </span>

                        </div>
                        
                        { /* row 2 */ }
                        <div className="product-screen--main--col-3--row-2">

                            <span className="product-screen--main--col-3--row-2--status-1">
                                Status:
                            </span>

                            <span className="product-screen--main--col-3--row-2--status-2">
                                { product.countInStock > 0 ? 'In Stock' : 'Out of Stock' }
                            </span>

                        </div>

                        { /* row 3 */ }
                        { /* if product.countInStock > 0 then add the quantity select element */ }
                        {
                            product.countInStock > 0 && (

                                <div className="product-screen--main--col-3--row-3">

                                    <span className="product-screen--main--col-3--row-3--quantity-1">
                                        Quantity:
                                    </span>

                                    { /* quanity select element */ }
                                    <select
                                        value={ quantity }
                                        onChange={ ( e ) => setQuantity( e.target.value ) }                                    
                                        className="product-screen--main--col-3--row-3--select-1"
                                    >

                                        {
                                            [ ...Array( product.countInStock ).keys() ]
                                                .map( ( i ) => (
                                                        <option
                                                            key={ i + 1 }
                                                            value={ i + 1 }
                                                        >
                                                            { i + 1 }
                                                        </option>
                                                    )
                                                )
                                        }

                                    </select>

                                </div>

                            )
                        }

                        { /* row 4 */ }
                        { /* add to cart button */ }
                        <div className="product-screen--main--col-3--row-4">
                        
                            <Link
                                to={ `/cart/${ match.params.id }?quantity=${ quantity }` }
                                className=
                                {
                                    product.countInStock > 0 ?
                                    'product-screen--main--col-3--row-4--btn' :
                                    'product-screen--main--col-3--row-4--btn-disable'
                                }
                            >
                                Add to Cart
                            </Link>

                        </div>

                    </div>

            </div>

            { /* review form */ }
            <div className="product-screen--reviews">

                <div className="product-screen--reviews--row-1">

                    <h2 className="product-screen--reviews--row-1--title">Product Reviews</h2>

                    { product.reviews.length === 0 && <InfoMessage>There are no reviews</InfoMessage> }

                    {
                        product.reviews.map( (review) => (

                            <RatingReview
                                key={ review._id }
                                name={ review.name }
                                rating={ review.rating }
                                date={ review.createdAt.substring( 0, 10 ) }
                                comment={ review.comment }
                            />

                        ) )
                    }

                </div>

                <div className="product-screen--reviews--row-2">

                    <h2 className="product-screen--reviews--row-2--title">Write a Customer Review</h2>

                    {
                        userInfo ? (

                            <form className="product-screen--reviews--row-2--form" noValidate="novalidate" onSubmit={ handleSubmit } >

                                { /*  select element  */ }
                                <div className="product-screen--reviews--row-2--form--select">

                                    <span className="product-screen--reviews--row-2--form--select--label">
                                        Rating
                                    </span>

                                    <select
                                        value={ rating }
                                        onChange={ ( e ) => setRating( e.target.value ) }                                    
                                        className="product-screen--reviews--row-2--form--select--element"
                                    >
                                        <option value="">Select</option>
                                        <option value="1">1 - Poor</option>
                                        <option value="2">2 - Fair</option>
                                        <option value="3">3 - Good</option>
                                        <option value="4">4 - Very Good</option>
                                        <option value="5">5 - Excellent</option>
                                    </select>

                                </div>

                                { /* textarea box  */ }
                                <FormTextArea
                                    name="comment"
                                    rows="4"
                                    // cols="50"
                                    label="Comment"
                                    value={ comment }
                                    onChange={ (e) => setComment( e.target.value ) }
                                />

                                { /*  submit button  */ }
                                <div className="product-screen--reviews--row-2--form--button-container">
                    
                                    <button
                                        type="submit"
                                        className="product-screen--reviews--row-2--form--button-container--button"
                                    >
                                        Submit
                                    </button>
                        
                                </div>
                    
                            </form>

                        ) : (

                            <InfoMessage>Please <Link to="/login">sign in</Link> to write a review</InfoMessage>

                        )

                    }

                </div>

            </div>

         </div>

        )

    );

}


export default ProductScreen;


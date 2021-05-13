
/*
import React, { useEffect, useState } from 'react'
import Product from '../../components/product/product.component';
// import products from '../../products';

import './home-screen.styles.scss';

// what we want to do here is loop through all the products and output each one 


// 1 -
// first, let's get rid of " import products from '../../products'; " and for now Brad said
// he will add products as component level state and when it comes to state there is
// component level state and there is global or application level state and products will
// ultimately be considered global state when we get into redux but for now products will be
// considered component level state

// component level state is the opening and closing of state inside a menu component, for
// example, or it might be input fields contained in a form

// whereas app level state are things like products, users and carts

// and since we are using component level state for now, let's import in the useState hook from
// react above and then set the state below

// comment out the axios import unless I decide to use it below
// import axios from 'axios';


// End of 1 -


const HomeScreen = () => {

    // 1 - continued

    // set the state
    const [ products, setProducts ] = useState( [] );

    // now let's use the useEffect hook to make a request to our backend and remember to import
    // the useEffect hook above 
    useEffect( () => {

        // and remember in order to be able to use async await with the useEffect hook we have to
        // add a function and let's call our function fetchProducts
        const fetchProducts = async () => {

            const endpoint = '/api/products';

            // fetch the data or the products array
            // the fetch API seemed to work just fine without setting the method or the headers
            // ( i.e. method : 'POST', headers : { 'Content-Type': 'application/json' } ) but I
            // set the method since I may need it in the future if I ever make 2 requests to the
            // same endpoint ( one for GET and one for POST, for example )

            // so below we are making a request to this endpoint " /api/products " and when
            // the server receives this request it will respond with the products array and see
            // the server.js file route 2 for details
            const response =  await fetch( endpoint, {
                method : 'GET'
            } );

            // if we used axios then the above would be
            // " const { data } = await axois.get( '/api/products' );"

            // I may use axios in the future so let's install it now

            // #8
            // axios: " Rogers-iMac:frontend Home$ npm i axios " and this will install axios in
            // our application
            // lecture 12: Fetching Products From React (useEffect)

            // now let's comment out the fetch API related code and try axios instead and remember
            // to import axios above
            // fetch the data or the products array
            // const response = await axios.get( '/api/products' );

            // convert the response into a JavaScript object using the json() method
            const data = await response.json();

            // now let's reset the state
            setProducts( data );

        }

        // and then we need to run the fetchProducts function
        fetchProducts();

        // next we want to pass in an array of dependencies to the useEffect() hook and the
        // useEffect() hook will fire off based on when these dependencies change so if
        // dependency #1 changes then the useEffect() hook will fire but for our purposes
        // we don't need any dependencies so we will just add in an empty array

    }, [] );

    // and if we run the useEffect hook we see that we are getting a not found error and to
    // fix this we need to add a proxy in the package.json file or
    // " "proxy" : "http://127.0.0.1:5000" " and then once we add the proxy we need to restart
    // our server so do control c on the frontend and then " Rogers-iMac:frontend Home$ npm start "
    
    // and now if go to the home page, I see that all the products are being displayed correctly
    // so everything is working as expected

    // and remember right now our backend server is running and our frontend application is
    // running and we can see this in the integrated terminal since we have 2 tabs open in
    // the terminal, one that says " server running on port 5000 " and the other tab thta says
    // " Compiled successfully! You can now view frontend in the browser.
    // Local: http://localhost:3008 "

    // and now let's do the same thing as above for the product-screen.component.jsx file and
    // let's go to the product-screen.component.jsx 2 - file now

    // End of 1 -


    return (

        <div className="home-screen">

            <h1>Latest Products</h1>

            <div className="home-screen--product">

                {
                    products.map( ( product ) => (
    
                        <Product
                            key={ product._id }
                            product={ product }
                        />

                    ) )
                }

            </div>

        </div>

    );

}

export default HomeScreen;
*/



















// ===============================






















// at the beginning of lecture 28, given all the notes, I created a new file below without
// the notes so we are starting fresh

/*
import React, { useEffect } from 'react'


// 2 -
// first, let's clear out everything inside the useEffect() hook below and then remove the
// useState import above and then remove " const [ products, setProducts ] = useState( [] ); "
// below

// and then let's import in the useDispatch and useSelector hooks
// and remember the useDispatch(); hook is used to dispatch an action to the reducer and the
// useSelector(); hook is used to select parts of the state and in this component we are going
// to want the product list part of the state
import { useDispatch, useSelector } from 'react-redux';
// and then let's import in our action creator
import { listProducts } from '../../redux/actions/product.actions';

// End of 2 -


import Product from '../../components/product/product.component';

import './home-screen.styles.scss';


const HomeScreen = () => {

    // set the state
    // const [ products, setProducts ] = useState( [] );


    // 2 - continued
    // set dispatch equal to the useDispatch(); hook and remember in the past we would have to
    // use a higher order component called connect and then we would have to map state to props
    // and the entire process was a pain

    // from a blog: " useDispatch replaces connect’s mapDispatchToProps but is lighter weight.
    // All it does is return your store’s dispatch method so you can manually dispatch actions. "
    const dispatch = useDispatch();

    // End of 2 -


    // 3 -
    // from a blog: " useSelector is analogous to connect’s mapStateToProps. You pass it a
    // function that takes the Redux store state and returns the pieces of state you’re
    // interested in. "

    // the piece of state we want to get is the productList piece of state and remember we set
    // up this piece of state in our store.js file or:

    /*
    const reducer = combineReducers( {
        productList : productListReducer
    } );
    */

    // we want to give our const the same name as the piece of state we are getting or in this
    // case " productList " and productList equal the useSelector(); hook and the useSelector();
    // hook takes as an argument an arrow function and the argument to the arrow function is
    // our state object and we return the part of the state that we want or in this case
    // " state.productList "
    /*
    const productList = useSelector( ( state ) => state.productList );

    // and then we can destructure and pull out what we want from productList or pull out the
    // pieces of state that we want
    const { products, error, loading } = productList;

    // next, let's go to 4 - below and check to see if we are still loading the data or
    // products array and we want to check for an error as well

    // End of 3 -


    useEffect( () => {

        // 2 - continued
        // now we want to fire off the action creator inside the useEffect(); hook and we do that
        // by doing " dispatch( listProducts() ); " and instead of using the fetch API inside the
        // useEffect hook we use the fetch API inside the listProducts action creator and remember
        // we use the fetch API to make a request and the response we get back is the products
        // array or " data "
        dispatch( listProducts() );

        // and make sure we pass in dispatch as a dependency below

    }, [ dispatch ] );

    // so we don't get an error below, let's set const products = []; and when we get to 3 -
    // let's comment out " const products = []; "
    // const products = [];

    // and then go to the redux dev tools to see what has happen up to this point in the code
    // and we see under the Diff tab on the right hand side of the page and the Diff tab is the
    // difference in the state and we see:

    /*
        productList (pin)
            products (pin):
                0 (pin): {price:89.99,countInStock:10,r…:08.703Z'}
                1 (pin): {price:599.99,countInStock:7,r…:08.703Z'}
                2 (pin): {price:929.99,countInStock:5,r…:08.703Z'}
                3 (pin): {price:399.99,countInStock:11,…:08.703Z'}
                4 (pin): {price:49.99,countInStock:7,ra…:08.703Z'}
                5 (pin): {price:29.99,countInStock:0,ra…:08.703Z'}
                loading (pin): true => false
    */

    // and we see that loading went from true to false, which is correct and we see our products
    // array and this is correct so everything is working as expected

    // and then on the left hand side of the page inside the redux dev tools we see:

    /*
        @@INIT
        PRODUCT_LIST_REQUEST
        PRODUCT_LIST_SUCCESS
    */

    // so we see the actions that we're fired off so the first action was " PRODUCT_LIST_REQUEST "
    // and then the second action was " PRODUCT_LIST_SUCCESS " and this is correct so everything
    // is working as expected

    // and if we look in the State tab we see:

    /*
        productList (pin)
            products (pin):
                0 (pin): { price: 89.99, countInStock: 10, rating: 4.5, … }
                1 (pin): { price: 599.99, countInStock: 7, rating: 4, … }
                2 (pin): { price: 929.99, countInStock: 5, rating: 3, … }
                3 (pin): { price: 399.99, countInStock: 11, rating: 5, … }
                4 (pin): { price: 49.99, countInStock: 7, rating: 3.5, … }
                5 (pin): { price: 29.99, countInStock: 0, rating: 4, … }
                loading (pin): false
    */

    // so we see our products array and we see that loading is set to false and this is correct
    // so everything is working as expected

    // now to display the products on the home-screen we need to select the products from our
    // state and this is where the useSelector(); hook comes in and let's go to 3 - above

    // End of 2 -


    /*
    return (


        // 4 -
        // let's check and see if loading is true and let's check and see if we have an error
        // and if we have an error then we want to display that error on the webpage

        // remember the && means " (if this part is true) && (this part will execute) "

        // if loading is true then we want to display a spinner or react skeleton otherwise
        // if error is true then we want to display the error message otherwise we want
        // to display our jsx or html ( see below )

        // and now when I check the home page I see the 6 products listed and this is correct
        // so everything is working as expected

        // and if I reload the page I see " Loading ... " flash very quickly and this is correct
        // so everything is working as expected

        // now let's create an error on purpose and let's do that by changing route #1 in the
        // product.routes.js file from:

        /*
            router.get( '/', asyncHandler( async ( req, res ) => {

                const products = await Product.find( {} );

                res.json( products ); 

            } ) );
        */

        // to:

        /*
            router.get( '/', asyncHandler( async ( req, res ) => {

                const products = await Product.find( {} );

                // 401 means not authorized
                res.status( 401 );

                // then let's throw an error
                throw new Error( 'Not Authorized' );

                res.json( products ); 

            } 
        */

        // and now when I go to the home page and reload the page I see the error displayed on
        // the page or I see " Not Authorized " and this is correct so everything is working as
        // expected

        // and there are 2 parts at play here: one, firing off the action creator with
        // dispatch(); or dispatch( listProducts() ); and then two, using the useSelector hook
        // to grab the part of the state we want and from there we can pull off the pieces
        // of state that we want and then display those piecws of state in the output

        // in the next video, we want to create a spinner component and create a message
        // component that will show a nice alert instead of showing " <h3>{ error }</h3> "

        // End of 4 -


        /*
        <div className="home-screen">

            <h1>Latest Products</h1>

            { loading ? (

                <h2>Loading ...</h2>

            ) : error ? (

                <h3>{ error }</h3>

            ) : (

                <div className="home-screen--product">

                    {
                        products.map( ( product ) => (
        
                            <Product
                                key={ product._id }
                                product={ product }
                            />

                        ) )
                    }

                </div>

            ) }

        </div>

    );

}

export default HomeScreen;
*/

























// ===============================
























/*
// at the beginning of lecture 29, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React, { useEffect } from 'react';
// and then let's import in the useDispatch and useSelector hooks
// and remember the useDispatch(); hook is used to dispatch an action to the reducer and the
// useSelector(); hook is used to select parts of the state
import { useDispatch, useSelector } from 'react-redux';
// and then let's import in our action creator
import { listProducts } from '../../redux/actions/product.actions';
// import in the Product component
import Product from '../../components/product/product.component';

import './home-screen.styles.scss';


// 5 -
// import in the Spinner component and then replace " <h2>Loading ...</h2> " with
// " <Spinner /> "
import Spinner from '../../components/spinner/spinner.component';

// now let's test out our spinner and we see our Spinner component for a split second and
// this is correct so everything is working as expected

// End of 5 -


// 6 -
// import in the ErrorMessage component and then replace " <h3>{ error }</h3> " with
// " <ErrorMessage>{ error }</ErrorMessage> "
import ErrorMessage from '../../components/error/error-message.component';

// now let's test out our error message and to do so let's throw an error in route #1 in the
// product.routes.js file or " throw new Error( 'Some error' ); " and after we reload the
// home page we see the error and the error says " Some error " and this is correct and the
// error has the right styling so everything is working as expected

// and if we look at the Diff tab in redux dev tools, we see:

/*
    productList (pin)
        products (pin): [] ( -- though [] in redix dev tools )
        loading (pin): true => false ( -- though true in redix dev tools )
        error (pin): 'Some error'
*/

// and this is correct so everything is working as expected

// and in the next video we will work on the product details page 

// End of 6 -

/*
const HomeScreen = () => {

    // set dispatch equal to the useDispatch(); hook and then use dispatch to dispatch the
    // action creator inside the useEffect(); hook
    const dispatch = useDispatch();

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const productList = useSelector( ( state ) => state.productList );

    // and then we can use destructuring to pull off pieces of state that we want and then
    // use those pieces of state in our output
    const { products, error, loading } = productList;

    useEffect( () => {

        // dispatch the action creator
        dispatch( listProducts() );

        // and make sure we pass in dispatch as a dependency below

    }, [ dispatch ] );


    return (

        // let's check and see if loading is true and let's check and see if we have an
        // error

        // if loading is true then we want to display a spinner or a react skeleton component
        // otherwise if error is true then we want to display the error message otherwise we
        // want to display our jsx or html ( see below )
        <div className="home-screen">

            <h1>Latest Products</h1>

            { loading ? (

                <Spinner />

            ) : error ? (

                <ErrorMessage>{ error }</ErrorMessage>

            ) : (

                <div className="home-screen--product">

                    {
                        products.map( ( product ) => (
        
                            <Product
                                key={ product._id }
                                product={ product }
                            />

                        ) )
                    }

                </div>

            ) }

        </div>

    );

}

export default HomeScreen;
*/























// ===============================






















/*
// at the beginning of lecture 30, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React, { useEffect } from 'react';
// and then let's import in the useDispatch and useSelector hooks
// and remember the useDispatch(); hook is used to dispatch an action to the reducer and the
// useSelector(); hook is used to select parts of the state
import { useDispatch, useSelector } from 'react-redux';
// and then let's import in our action creator
import { productListActionCreator } from '../../redux/actions/product.actions';
// import in the Product component
import Product from '../../components/product/product.component';
// import in the Spinner component
// import Spinner from '../../components/spinner/spinner.component';
// import in the SkeletonHomeScreen component
import SkeletonHomeScreen from
'../../components/skeletons/skeleton-home-screen/skeleton-home-screen.component';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';

import './home-screen.styles.scss';


const HomeScreen = ( { match } ) => {


    // ==============================
    // set Keyword
    // ==============================

    // 7 -
    // coming from the nav-bar.component.jsx 3 -

    // let's set the keyword
    const keyword = match.params.keyword;

    // now let's go to 8 - below

    // End of 7 -


    // ==============================
    // USEDISPATCH();
    // ==============================

    // set dispatch equal to the useDispatch(); hook and then use dispatch to dispatch the
    // action creator inside the useEffect(); hook
    const dispatch = useDispatch();

    // ==============================
    // productList State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const productList = useSelector( ( state ) => state.productList );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { products, error, loading } = productList;

    // ==============================
    // USEEFFECT();
    // ==============================

    useEffect( () => {


        // 8 -
        // pass in keyword as an argument to the productListActionCreator and remember keyword
        // could be a word or keyword could an empty string

        // dispatch the action creator
        dispatch( productListActionCreator( keyword ) );

        // and make sure we pass in dispatch as a dependency below

    }, [ dispatch, keyword ] );

    // now let's go to our action file and bring in keyword as an argument
    
    // End of 8 -


    return (

        // let's check and see if loading is true and let's check and see if we have an
        // error

        // if loading is true then we want to display a spinner or a react skeleton component
        // otherwise if error is true then we want to display the error message otherwise we
        // want to display our jsx or html ( see below )
        <div className="home-screen">

            <h1 className="home-screen--title">Latest Products</h1>

            { loading ? (

                [ 1, 2, 3, 4, 5, 6 ].map( ( number ) => <SkeletonHomeScreen key={ number } /> )

            ) : error ? (

                <ErrorMessage>{ error }</ErrorMessage>

            ) : (

                <div className="home-screen--products">

                    {
                        products.map( ( product ) => (
        
                            <Product
                                key={ product._id }
                                product={ product }
                            />

                        ) )
                    }

                </div>

            ) }

        </div>

    );

}

export default HomeScreen;
*/
























// ===============================






















/*
// at the beginning of lecture 86, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React, { Fragment, useEffect } from 'react';
// and then let's import in the useDispatch and useSelector hooks
// and remember the useDispatch(); hook is used to dispatch an action to the reducer and the
// useSelector(); hook is used to select parts of the state
import { useDispatch, useSelector } from 'react-redux';
// and then let's import in our action creator
import { productListActionCreator } from '../../redux/actions/product.actions';
// import in the Product component
import Product from '../../components/product/product.component';
// import in the Spinner component
// import Spinner from '../../components/spinner/spinner.component';
// import in the SkeletonHomeScreen component
import SkeletonHomeScreen from
'../../components/skeletons/skeleton-home-screen/skeleton-home-screen.component';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';

import './home-screen.styles.scss';


// 10 -
// coming from the pagination.component.jsx 1 - file

// import in the Pagination component
import Pagination from '../../components/pagination/pagination.component';

// End of 10 -


const HomeScreen = ( { match } ) => {

    // ==============================
    // Get the keyword & page number
    // ==============================

    // let's set the keyword
    const keyword = match.params.keyword;


    // 9 -
    // coming from the App.js 18 - file

    // get the page number
    const pageNumber = match.params.pageNumber || 1;

    // End of 9 -

    // ==============================
    // USEDISPATCH();
    // ==============================

    // set dispatch equal to the useDispatch(); hook and then use dispatch to dispatch the
    // action creator inside the useEffect(); hook
    const dispatch = useDispatch();

    // ==============================
    // productList State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const productList = useSelector( ( state ) => state.productList );

    // 10 - continued

    // destructure off the page and pages state from the productList state

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { products, page, pages, error, loading } = productList;

    // End of 10 -

    // ==============================
    // USEEFFECT();
    // ==============================

    useEffect( () => {

        // pass in keyword as an argument to the productListActionCreator and remember keyword
        // could be a word or keyword could an empty string


        // 9 - continued
        // add pageNumber as an argument to the productListActionCreator and as a dependency
        // below

        // dispatch the action creator
        dispatch( productListActionCreator( keyword, pageNumber ) );

        // and make sure we pass in dispatch as a dependency below

    }, [ dispatch, keyword, pageNumber ] );

    // and if we test this out by changing the URL to " http://localhost:3008/page/3 ", for
    // example, then we see the third batch of products which is correct so everything is
    // working as expected

    // now we need to create the links so that we can get to those pages and let's start
    // by creating a new component called pagination.component.jsx and let's go to the
    // pagination.component.jsx 1 - file now

    // End of 9 -


    return (

        // let's check and see if loading is true and let's check and see if we have an
        // error

        // if loading is true then we want to display a spinner or a react skeleton component
        // otherwise if error is true then we want to display the error message otherwise we
        // want to display our jsx or html ( see below )
        <div className="home-screen">

            <h1 className="home-screen--title">Latest Products</h1>

            { loading ? (

                [ 1, 2, 3, 4, 5, 6 ].map( ( number ) => <SkeletonHomeScreen key={ number } /> )

            ) : error ? (

                <ErrorMessage>{ error }</ErrorMessage>

            ) : (

                <Fragment>

                    <div className="home-screen--products">

                        {
                            products.map( ( product ) => (
            
                                <Product
                                    key={ product._id }
                                    product={ product }
                                />

                            ) )
                        }

                    </div>

                    <Pagination 
                        page={ page }
                        pages={ pages }
                        keyword={ keyword ? keyword : '' }
                    />

                </Fragment>

            ) }

        </div>

    );

}

export default HomeScreen;
*/
























// ===============================






















/*
// at the beginning of lecture 87, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React, { Fragment, useEffect } from 'react';
// and then let's import in the useDispatch and useSelector hooks
// and remember the useDispatch(); hook is used to dispatch an action to the reducer and the
// useSelector(); hook is used to select parts of the state
import { useDispatch, useSelector } from 'react-redux';
// import in the Link component
import { Link } from 'react-router-dom';
// and then let's import in our action creator
import { productListActionCreator } from '../../redux/actions/product.actions';
// import in the Product component
import Product from '../../components/product/product.component';
// import in the Pagination component
import Pagination from '../../components/pagination/pagination.component';
// import in the SkeletonHomeScreen component
import SkeletonHomeScreen from
'../../components/skeletons/skeleton-home-screen/skeleton-home-screen.component';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';

import './home-screen.styles.scss';


// 11 -

// import in react helmet
// import { Helmet } from 'react-helmet';

// and now we can go to any screen and import in helmet and then add the following
// code:

/*
<Helmet>
    <title>Welcome to ProShop | Home</title>
    <meta 
        name='description'
        content='We sell the best products for cheap'
    />
    <meta
        name='keyword'
        content='electronics, buy electronics, cheap electronics'
    />
</Helmet>
*/

// and now if I go back to the home screen I see the following content inside the browser
// tab: " Welcome to ProShop | Home " and this is correct so everything is working as
// expected 

// and now let's create a new component for react helmet and let's go to the
// meta.component.jsx 1 - file now

// after we create our meta component, we will no longer need to import in Helmet into the
// home screen component so let's comment out " import { Helmet } from 'react-helmet'; " above

// End of 11 -


// 12 -
// coming from the meta.component.jsx 1 - file

// import in the Meta component
/*
import Meta from '../../components/meta/meta.component';
import SearchBox from '../../components/search-box/search-box.component';

// and now we can just place our Meta component below and delete the Helmet code and when I
// go back to the home page I see our title in the browser tab and our 2 meta tags in the
// <Head> are correct so everything is working as expected

// and now let's go to the product-screen.component.jsx 8 - file

// End of 12 -


// 13 -
// coming from the product-screen.component.jsx 8 - file

// let's add a back button for when a user lands on a search page so the user can easily go
// back to the home page and remember to import in the Link component above

// so now we are ready to deploy

// End of 13 -


const HomeScreen = ( { match } ) => {

    // ==============================
    // Get the keyword & page number
    // ==============================

    // let's set the keyword
    const keyword = match.params.keyword;
    // get the page number
    const pageNumber = match.params.pageNumber || 1;

    // ==============================
    // USEDISPATCH();
    // ==============================

    // set dispatch equal to the useDispatch(); hook and then use dispatch to dispatch the
    // action creator inside the useEffect(); hook
    const dispatch = useDispatch();

    // ==============================
    // productList State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const productList = useSelector( ( state ) => state.productList );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { products, page, pages, error, loading } = productList;

    // ==============================
    // USEEFFECT();
    // ==============================

    useEffect( () => {

        // pass in keyword as an argument to the productListActionCreator and remember keyword
        // could be a word or keyword could an empty string

        // add pageNumber as an argument to the productListActionCreator and as a dependency
        // below

        // dispatch the action creator
        dispatch( productListActionCreator( keyword, pageNumber ) );

        // and make sure we pass in dispatch as a dependency below

    }, [ dispatch, keyword, pageNumber ] );


    return (

        // let's check and see if loading is true and let's check and see if we have an
        // error

        // if loading is true then we want to display a spinner or a react skeleton component
        // otherwise if error is true then we want to display the error message otherwise we
        // want to display our jsx or html ( see below )
        <div className="home-screen">

            <Meta />

            { /* add a home page button based on whether or not the user is on a search page */ /* }
            {

                keyword && (

                    <div className="home-screen--button">
            
                        { /* home page button */ /* }
                        <Link to="/" className="home-screen--button--home-link">Return to Home Page</Link>
                        

                    </div>

                )

            }

            <h1 className="home-screen--title">Latest Products</h1>

            { loading ? (

                [ 1, 2, 3, 4, 5, 6 ].map( ( number ) => <SkeletonHomeScreen key={ number } /> )

            ) : error ? (

                <ErrorMessage>{ error }</ErrorMessage>

            ) : (

                <Fragment>

                    <div className="home-screen--products">

                        {
                            products.map( ( product ) => (
            
                                <Product
                                    key={ product._id }
                                    product={ product }
                                />

                            ) )
                        }

                    </div>

                    <Pagination 
                        page={ page }
                        pages={ pages }
                        keyword={ keyword ? keyword : '' }
                    />

                </Fragment>

            ) }

        </div>

    );

}

export default HomeScreen;
*/























// ===============================























// at the beginning of lecture 89, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React, { Fragment, useEffect } from 'react';
// and then let's import in the useDispatch and useSelector hooks
// and remember the useDispatch(); hook is used to dispatch an action to the reducer and the
// useSelector(); hook is used to select parts of the state
import { useDispatch, useSelector } from 'react-redux';
// import in the Link component
import { Link } from 'react-router-dom';
// and then let's import in our action creator
import { productListActionCreator } from '../../redux/actions/product.actions';
// import in the Product component
import Product from '../../components/product/product.component';
// import in the Pagination component
import Pagination from '../../components/pagination/pagination.component';
// import in the Meta component
import Meta from '../../components/meta/meta.component';
// import in the SkeletonHomeScreen component
import SkeletonHomeScreen from
'../../components/skeletons/skeleton-home-screen/skeleton-home-screen.component';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';

import './home-screen.styles.scss';


const HomeScreen = ( { match } ) => {

    // ==============================
    // Get the keyword & page number
    // ==============================

    // let's set the keyword
    const keyword = match.params.keyword;
    // get the page number
    const pageNumber = match.params.pageNumber || 1;

    // ==============================
    // USEDISPATCH();
    // ==============================

    // set dispatch equal to the useDispatch(); hook and then use dispatch to dispatch the
    // action creator inside the useEffect(); hook
    const dispatch = useDispatch();

    // ==============================
    // productList State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const productList = useSelector( ( state ) => state.productList );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { products, page, pages, error, loading } = productList;

    // ==============================
    // USEEFFECT();
    // ==============================

    useEffect( () => {

        // pass in keyword as an argument to the productListActionCreator and remember keyword
        // could be a word or keyword could an empty string

        // add pageNumber as an argument to the productListActionCreator and as a dependency
        // below

        // dispatch the action creator
        dispatch( productListActionCreator( keyword, pageNumber ) );

        // and make sure we pass in dispatch as a dependency below

    }, [ dispatch, keyword, pageNumber ] );


    return (

        // let's check and see if loading is true and let's check and see if we have an
        // error

        // if loading is true then we want to display a spinner or a react skeleton component
        // otherwise if error is true then we want to display the error message otherwise we
        // want to display our jsx or html ( see below )
        <div className="home-screen">

            <Meta />

            { /* add a home page button based on whether or not the user is on a search page */ }
            {

                keyword && (

                    <div className="home-screen--button">
            
                        { /* home page button */ }
                        <Link to="/" className="home-screen--button--home-link">Return to Home Page</Link>
                        

                    </div>

                )

            }

            <h1 className="home-screen--title">{ keyword ? 'Search Results' : 'Latest Products' }</h1>

            { loading ? (

                [ 1, 2, 3, 4, 5, 6 ].map( ( number ) => <SkeletonHomeScreen key={ number } /> )

            ) : error ? (

                <ErrorMessage>{ error }</ErrorMessage>

            ) : (

                <Fragment>

                    <div className="home-screen--products">

                        {
                            products.map( ( product ) => (
            
                                <Product
                                    key={ product._id }
                                    product={ product }
                                />

                            ) )
                        }

                    </div>

                    <Pagination 
                        page={ page }
                        pages={ pages }
                        keyword={ keyword ? keyword : '' }
                    />

                </Fragment>

            ) }

        </div>

    );

}

export default HomeScreen;



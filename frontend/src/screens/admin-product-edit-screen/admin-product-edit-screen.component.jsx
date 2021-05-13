
/*
// 1 -

// let's copy in the code from the admin-user-edit-screen.component.jsx and start there

// since we are building a form we will need to use the useState(); hook and let's import
// in the useEffect(); hook as well
import React, { Fragment, useState, useEffect } from 'react';
// import in the Link component
import { Link } from 'react-router-dom';
// import in the useDispatch(); and useSelector(); hooks
import { useDispatch, useSelector } from 'react-redux';
// import in our action creators
import {
    productGetActionCreator,
    /* productUpdateAdminActionCreator */
/* } from '../../redux/actions/product.actions';
/*
// import in the USER_GET_ADMIN_RESET, USER_UPDATE_ADMIN_RESET constants
import {
    USER_GET_ADMIN_RESET,
    USER_UPDATE_ADMIN_RESET 
} from '../../redux/constants/user.constants';
*/
// inport in the FormInput component
/*
import FormInput from '../../components/form-input/form-input.component';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner.component';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';
// import in the SuccessMessage component
import SuccessMessage from '../../components/message/success-message.component';

import './admin-product-edit-screen.styles.scss';


const AdminProductEditScreen = ( { history, match } ) => {

    // ==============================
    // Component State
    // ==============================

    // set the component level state
    const [ name, setName ]                 = useState( '' );
    const [ image, setImage ]               = useState( '' );
    const [ description, setDescription ]   = useState( '' );
    const [ brand, setBrand ]               = useState( '' );
    const [ category, setCategory ]         = useState( '' );
    const [ price, setPrice ]               = useState( 0 );
    const [ countInStock, setCountInStock ] = useState( 0 );

    // ==============================
    // Match.Params.Id
    // ==============================

    const productId = match.params.id;

    // ==============================
    // USEDISPATCH();
    // ==============================

    // define dispatch
    const dispatch = useDispatch();

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
        loading : loadingProductGet,
        product,
        error   : errorProductGet
    } = productGet;


    /*
    // ==============================
    // productUpdateAdmin State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const productUpdateAdmin = useSelector( ( state ) => state.productUpdateAdmin );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { 
        loading : loadingProductUpdateAdmin,
        success : successProductUpdateAdmin,
        error   : errorProductUpdateAdmin
    } = productUpdateAdmin;
    */


    /* 
    else if ( successProductUpdateAdmin ) {
            
        dispatch( { type : PRODUCT_GET_RESET } );

        dispatch( { type : PRODUCT_UPDATE_ADMIN_RESET } );

        history.push( '/admin/productlist' );

    }
    */


    // ==============================
    // USEEFFECT();
    // ==============================

    /*
    useEffect( () => {

        // ==============================
        // If else if else statement
        // ==============================

        // if the user is not logged in or the user is not an admin then let's redirect the
        // user to the login screen
        if ( !userInfo || !userInfo.isAdmin ) {

            history.push( '/login' );

        // if product.name does not exist or the product._id does not match the id in the URL
        // then we want to dispatch the productGetActionCreator

        // remember to add ...state to the PRODUCT_GET_REQUEST, otherwise the else if
        // statement below will not work
        } else if ( !product.name || product._id !== productId ) {

            // dispatch the productGetActionCreator
            dispatch( productGetActionCreator( productId ) );

        } else {

            // remember to add ...state to the PRODUCT_GET_REQUEST, otherwise the setName(),
            // setEmail() and setIsAdmin() below will not work
            setName( product.name );
            setImage( product.image );
            setDescription( product.description );
            setBrand( product.brand );
            setCategory( product.category );
            setPrice( product.price );
            setCountInStock( product.countInStock );

        } // end of if else if else statement

    }, [ 
        dispatch,
        history,
        productId,
        userInfo,
        product
    ] ); // end of useEffect

    // ==============================
    // handleSubmit function
    // ==============================

    const handleSubmit = ( e ) => {

        e.preventDefault();

        // dispatch our product update admin action creator and remember to pass in the
        // product update object or the name, image, decription, brand, category, price
        // and countInStock from the component state

        // and remember we are using req.body.key in our productUpdateAdmin controller in
        // the product.controllers.js file so we need to pass along the name, image,
        // description, brand, category, price and countInStock key value pairs in order to
        // update the product's information in the productUpdateAdmin controller and thereby
        // update the product's information in the database

        /*
        dispatch( productUpdateAdminActionCreator(

            {
                name         : name,
                image        : image,
                description  : description,
                brand        : brand,
                category     : category,
                price        : price,
                countInStock : countInStock
            }

        ) );
        */

    /* }


    /*
    loadingProductUpdateAdmin ? (

        <Spinner />

    ) : errorProductUpdateAdmin ? (

        <ErrorMessage>{ errorProductUpdateAdmin }</ErrorMessage>

    ) : successProductUpdateAdmin ? (

        <SuccessMessage>Product updated!</SuccessMessage>

    )
    */


    /*
    return (

        <Fragment>
            
        {

            loadingProductGet ? (

                <Spinner />

            ) : errorProductGet ? (

                <ErrorMessage>{ errorProductGet }</ErrorMessage>

            ) : (

                <div className="admin-product-edit-screen">

                    { /* backlink to the admin product list screen */ /* }
                    <Link to="/admin/productlist" className="admin-product-edit-screen--backlink">
                        &#60; Go back to the previous page
                    </Link>

                    <h2 className="admin-product-edit-screen--title">Edit Product</h2>


                    <form className="admin-product-edit-screen--form" noValidate="novalidate" onSubmit={ handleSubmit } >

                        <FormInput
                            name="name"
                            type="text"
                            label="Name"
                            value={ name }
                            onChange={ (e) => setName( e.target.value ) }
                        />
                        <FormInput
                            name="image"
                            type="text"
                            label="Image"
                            value={ image }
                            onChange={ (e) => setImage( e.target.value ) }
                        />
                        <FormInput
                            name="description"
                            type="text"
                            label="Description"
                            value={ description }
                            onChange={ (e) => setDescription( e.target.value ) }
                        />
                        <FormInput
                            name="brand"
                            type="text"
                            label="Brand"
                            value={ brand }
                            onChange={ (e) => setBrand( e.target.value ) }
                        />
                        <FormInput
                            name="category"
                            type="text"
                            label="Category"
                            value={ category }
                            onChange={ (e) => setCategory( e.target.value ) }
                        />
                        <FormInput
                            name="price"
                            type="text"
                            label="Price"
                            value={ price }
                            onChange={ (e) => setPrice( e.target.value ) }
                        />
                        <FormInput
                            name="countInStock"
                            type="text"
                            label="Count In Stock"
                            value={ countInStock }
                            onChange={ (e) => setCountInStock( e.target.value ) }
                        />

                        { /*  admin-product-edit-screen button  */ /* }
                        <div className="admin-product-edit-screen--form--button-container">
                            <button
                                type="submit"
                                className="admin-product-edit-screen--form--button-container--button"
                            >
                                Update
                            </button>
                        </div>

                    </form>

                </div>

            )

        }

        </Fragment>

    );

}


export default AdminProductEditScreen;

// End of 1 -
*/























// ===============================






















/*
// at the beginning of lecture 78, given all the notes, I created a new file below without
// the notes so we are starting fresh

// since we are building a form we will need to use the useState(); hook and let's import
// in the useEffect(); hook as well
import React, { Fragment, useState, useEffect } from 'react';
// import in the Link component
import { Link } from 'react-router-dom';
// import in the useDispatch(); and useSelector(); hooks
import { useDispatch, useSelector } from 'react-redux';
// import in our action creators
import {
    productGetActionCreator,
    productUpdateAdminActionCreator
} from '../../redux/actions/product.actions';
// import in the PRODUCT_GET_ADMIN_RESET, PRODUCT_UPDATE_ADMIN_RESET constants
import {
    PRODUCT_GET_RESET,
    PRODUCT_UPDATE_ADMIN_RESET 
} from '../../redux/constants/product.constants';
// inport in the FormInput component
import FormInput from '../../components/form-input/form-input.component';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner.component';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';

import './admin-product-edit-screen.styles.scss';


const AdminProductEditScreen = ( { history, match } ) => {

    // ==============================
    // Component State
    // ==============================

    // set the component level state
    const [ name, setName ]                 = useState( '' );
    const [ image, setImage ]               = useState( '' );
    const [ description, setDescription ]   = useState( '' );
    const [ brand, setBrand ]               = useState( '' );
    const [ category, setCategory ]         = useState( '' );
    const [ price, setPrice ]               = useState( 0 );
    const [ countInStock, setCountInStock ] = useState( 0 );

    // ==============================
    // Match.Params.Id
    // ==============================

    const productId = match.params.id;

    // ==============================
    // USEDISPATCH();
    // ==============================

    // define dispatch
    const dispatch = useDispatch();

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
        loading : loadingProductGet,
        product,
        error   : errorProductGet
    } = productGet;


    // 2 -
    // coming from the store.js 24 - file

    // ==============================
    // productUpdateAdmin State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const productUpdateAdmin = useSelector( ( state ) => state.productUpdateAdmin );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { 
        loading : loadingProductUpdateAdmin,
        success : successProductUpdateAdmin,
        error   : errorProductUpdateAdmin
    } = productUpdateAdmin;

    // End of 2 -


    // ==============================
    // USEEFFECT();
    // ==============================

    useEffect( () => {

        // ==============================
        // If else if else statement
        // ==============================

        // if the user is not logged in or the user is not an admin then let's redirect the
        // user to the login screen
        if ( !userInfo || !userInfo.isAdmin ) {

            history.push( '/login' );


        // 2 - continued

        // if we were successful in updating the product in the database then let's push the
        // user back to the product list screen 
        } else if ( successProductUpdateAdmin ) {

            // need to reset so we make sure we get a new updated product
            dispatch( { type : PRODUCT_GET_RESET } );
    
            // need to reset state so that successProductUpdateAdmin is false and therefore
            // we can proceed to the next block of code or the else if statement below
            dispatch( { type : PRODUCT_UPDATE_ADMIN_RESET } );

            // go back to the admin product list screen
            history.push( '/admin/productlist' );    

        // End of 2 -

        // if product.name does not exist or the product._id does not match the id in the URL
        // then we want to dispatch the productGetActionCreator

        // remember to add ...state to the PRODUCT_GET_REQUEST, otherwise the else if
        // statement below will not work        
        } else if ( !product.name || product._id !== productId ) {

            // dispatch the productGetActionCreator
            dispatch( productGetActionCreator( productId ) );

        } else {

            // remember to add ...state to the PRODUCT_GET_REQUEST, otherwise the setName(),
            // setEmail() and setIsAdmin() below will not work
            setName( product.name );
            setImage( product.image );
            setDescription( product.description );
            setBrand( product.brand );
            setCategory( product.category );
            setPrice( product.price );
            setCountInStock( product.countInStock );

        } // end of if else if else statement

    }, [ 
        dispatch,
        history,
        productId,
        userInfo,
        product,
        successProductUpdateAdmin
    ] ); // end of useEffect

    // ==============================
    // handleSubmit function
    // ==============================

    const handleSubmit = ( e ) => {

        e.preventDefault();

        // dispatch our product update admin action creator and remember to pass in the
        // product update object or the name, image, decription, brand, category, price
        // and countInStock from the component state

        // and remember we are using req.body.key in our productUpdateAdmin controller in
        // the product.controllers.js file so we need to pass along the name, image,
        // description, brand, category, price and countInStock key value pairs in order to
        // update the product's information in the productUpdateAdmin controller and thereby
        // update the product's information in the database

        // 2 - continued

        dispatch( productUpdateAdminActionCreator(

            {
                _id          : productId,
                name         : name,
                image        : image,
                description  : description,
                brand        : brand,
                category     : category,
                price        : price,
                countInStock : countInStock
            }

        ) );

    }


    /*
    const handlePrice = ( e ) => {

        // const revisedValue = e.target.value.replace( /,/g, '' );

        console.log( e.target );

        // Step 1
        // add decimals and commas to the price
        const addDecimals = ( number ) => {
            return ( Math.round( number * 100 ) / 100 ).toFixed( 2 ) 
        }

        // Step 2
        // add 2 decimals
        const priceWithTwoDecimals = addDecimals( revisedValue );


        // Step 3
        // convert the priceWithTwoDecimals to a string for display purposes and add commas
        function numberWithCommas( x ) {
            return x.toString().replace( /\B(?=(\d{3})+(?!\d))/g, "," );
        }

        // Step 4
        // remember priceWithTwoDecimalsAndCommas is a string
        const priceWithTwoDecimalsAndCommas = numberWithCommas( priceWithTwoDecimals );

        // const numberPriceWithTwoDecimalsAndCommas = Number( priceWithTwoDecimalsAndCommas );

        // Step 5
        // set price
        setPrice( priceWithTwoDecimalsAndCommas );
    
    }
    */


    // in the next video, we will work on creating the file upload functionality for the
    // image input field

    // End of 2 -


    /*
    return (

        <Fragment>
            
        {

            loadingProductGet ? (

                <Spinner />

            ) : loadingProductUpdateAdmin ? (
        
                <Spinner />
        
            ) : errorProductGet ? (

                <ErrorMessage>{ errorProductGet }</ErrorMessage>

            ) : errorProductUpdateAdmin ? (
        
                <ErrorMessage>{ errorProductUpdateAdmin }</ErrorMessage>
        
            ) : (

                <div className="admin-product-edit-screen">

                    { /* backlink to the admin product list screen */ /* }
                    <Link to="/admin/productlist" className="admin-product-edit-screen--backlink">
                        &#60; Go back to the previous page
                    </Link>

                    <h2 className="admin-product-edit-screen--title">Edit Product</h2>


                    <form className="admin-product-edit-screen--form" noValidate="novalidate" onSubmit={ handleSubmit } >

                        <FormInput
                            name="name"
                            type="text"
                            label="Name"
                            value={ name }
                            onChange={ (e) => setName( e.target.value ) }
                        />
                        <FormInput
                            name="image"
                            type="text"
                            label="Image"
                            value={ image }
                            onChange={ (e) => setImage( e.target.value ) }
                        />
                        <FormInput
                            name="description"
                            type="text"
                            label="Description"
                            value={ description }
                            onChange={ (e) => setDescription( e.target.value ) }
                        />
                        <FormInput
                            name="brand"
                            type="text"
                            label="Brand"
                            value={ brand }
                            onChange={ (e) => setBrand( e.target.value ) }
                        />
                        <FormInput
                            name="category"
                            type="text"
                            label="Category"
                            value={ category }
                            onChange={ (e) => setCategory( e.target.value ) }
                        />
                        <FormInput
                            name="price"
                            type="number"
                            label="Price"
                            value={ price }
                            onChange={ (e) => setPrice( e.target.value ) }
                        />
                        <FormInput
                            name="countInStock"
                            type="number"
                            label="Count In Stock"
                            value={ countInStock }
                            onChange={ (e) => setCountInStock( e.target.value ) }
                        />

                        { /*  admin-product-edit-screen button  */ /* }
                        <div className="admin-product-edit-screen--form--button-container">
                            <button
                                type="submit"
                                className="admin-product-edit-screen--form--button-container--button"
                            >
                                Update
                            </button>
                        </div>

                    </form>

                </div>

            )

        }

        </Fragment>

    );

}


export default AdminProductEditScreen;
*/























// ===============================






















/*
// at the beginning of lecture 79, given all the notes, I created a new file below without
// the notes so we are starting fresh

// since we are building a form we will need to use the useState(); hook and let's import
// in the useEffect(); hook as well
import React, { Fragment, useState, useEffect } from 'react';
// import in the Link component
import { Link } from 'react-router-dom';
// import in the useDispatch(); and useSelector(); hooks
import { useDispatch, useSelector } from 'react-redux';
// import in our action creators
import {
    productGetActionCreator,
    productUpdateAdminActionCreator
} from '../../redux/actions/product.actions';
// import in the PRODUCT_GET_ADMIN_RESET, PRODUCT_UPDATE_ADMIN_RESET constants
import {
    PRODUCT_GET_RESET,
    PRODUCT_UPDATE_ADMIN_RESET 
} from '../../redux/constants/product.constants';
// inport in the FormInput component
import FormInput from '../../components/form-input/form-input.component';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner.component';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';

import './admin-product-edit-screen.styles.scss';


// 3 -
// import in axios
import axios from 'axios';

// inport in the FileInput component
import FileInput from '../../components/file-input/file-input.component';

// inport in the FormInputVersion2 component
import FormInputVersion2 from '../../components/form-input-v2/form-input-v2.component';

// inport in the FormAndFileInput component
// import FormAndFileInput from '../../components/form-and-file-input/form-and-file-input.component';

// End of 3 -



const AdminProductEditScreen = ( { history, match } ) => {

    // ==============================
    // Component State
    // ==============================

    // set the component level state
    const [ name, setName ]                 = useState( '' );
    const [ image, setImage ]               = useState( '' );
    const [ description, setDescription ]   = useState( '' );
    const [ brand, setBrand ]               = useState( '' );
    const [ category, setCategory ]         = useState( '' );
    const [ price, setPrice ]               = useState( 0 );
    const [ countInStock, setCountInStock ] = useState( 0 );
    const [ message, setMessage ]           = useState( null );


    // 3 - continued
    // and this is similar to what we've been doing in redux where we set loading
    // to true and then set it false as soon as we have a successful request
    const [ uploading, setUploading ]       = useState( false );

    // End of 3 -


    // ==============================
    // Match.Params.Id
    // ==============================

    const productId = match.params.id;

    // ==============================
    // USEDISPATCH();
    // ==============================

    // define dispatch
    const dispatch = useDispatch();

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
        loading : loadingProductGet,
        product,
        error   : errorProductGet
    } = productGet;

    // ==============================
    // productUpdateAdmin State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const productUpdateAdmin = useSelector( ( state ) => state.productUpdateAdmin );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { 
        loading : loadingProductUpdateAdmin,
        success : successProductUpdateAdmin,
        error   : errorProductUpdateAdmin
    } = productUpdateAdmin;

    // ==============================
    // USEEFFECT();
    // ==============================

    useEffect( () => {

        // ==============================
        // If else if else statement
        // ==============================

        // if the user is not logged in or the user is not an admin then let's redirect the
        // user to the login screen
        if ( !userInfo || !userInfo.isAdmin ) {

            history.push( '/login' );

        // if we were successful in updating the product in the database then let's push the
        // user back to the product list screen 
        } else if ( successProductUpdateAdmin ) {

            // need to reset so we make sure we get a new updated product
            dispatch( { type : PRODUCT_GET_RESET } );
    
            // need to reset state so that successProductUpdateAdmin is false and therefore
            // we can proceed to the next block of code or the else if statement below
            dispatch( { type : PRODUCT_UPDATE_ADMIN_RESET } );

            // go back to the admin product list screen
            history.push( '/admin/productlist' );    

        // if product.name does not exist or the product._id does not match the id in the URL
        // then we want to dispatch the productGetActionCreator

        // remember to add ...state to the PRODUCT_GET_REQUEST, otherwise the else if
        // statement below will not work        
        } else if ( !product.name || product._id !== productId ) {

            // dispatch the productGetActionCreator
            dispatch( productGetActionCreator( productId ) );

        } else {

            // remember to add ...state to the PRODUCT_GET_REQUEST, otherwise the setName(),
            // setEmail() and setIsAdmin() below will not work
            setName( product.name );
            setImage( product.image );
            setDescription( product.description );
            setBrand( product.brand );
            setCategory( product.category );
            setPrice( product.price );
            setCountInStock( product.countInStock );

        } // end of if else if else statement

    }, [ 
        dispatch,
        history,
        productId,
        userInfo,
        product,
        successProductUpdateAdmin
    ] ); // end of useEffect

    // ==============================
    // handleSubmit function
    // ==============================

    const handleSubmit = ( e ) => {

        e.preventDefault();

        // dispatch our product update admin action creator and remember to pass in the
        // product update object or the name, image, decription, brand, category, price
        // and countInStock from the component state

        // and remember we are using req.body.key in our productUpdateAdmin controller in
        // the product.controllers.js file so we need to pass along the name, image,
        // description, brand, category, price and countInStock key value pairs in order to
        // update the product's information in the productUpdateAdmin controller and thereby
        // update the product's information in the database
        dispatch( productUpdateAdminActionCreator(

            {
                _id          : productId,
                name         : name,
                image        : image,
                description  : description,
                brand        : brand,
                category     : category,
                price        : price,
                countInStock : countInStock
            }

        ) );

    }


    // 3 - continued

    // ==============================
    // handleUploadFile function
    // ==============================

    // since we are making an http request, we want to make our function asynchronous
    const handleUploadFile = async ( e ) => {

        // e.target.files is an array and since we are uploading one file let's pass in
        // [ 0 ] after e.target.files
        const file = e.target.files[ 0 ];

        // next we want to initialize a FormData object and remember the formData object
        // was created as a way to bundle information and send it to the server and in that
        // way the formData object acts like a form
        const formData = new FormData();

        // then we will append some information to the formData object and the key will be
        // " image ", which is the same name we used in our upload middleware function and
        // the value will be the file that we are seeking to upload to the server
        formData.append( 'image', file );

        // set uploading to true and thereby call the Spinner component down below
        setUploading( true );

        // set up a try catch block
        try {

            // create our endpoint
            // remember the endpoint points to the backend endpoint which is " /api/upload "
            const endpoint = "/api/upload";

            // create our config object
            // remember since we are sending a fle to the backend we need to indicate in the
            // headers the content type or multipart/form-data in our case and let's create a
            // config object to help us do that
            const config = {
                headers : {
                    'Content-Type' : 'multipart/form-data'                    
                }
            };

            // below we are making a POST request to the above endpoint
            // and axios returns the response object and we can then destructure the data
            // object off of the response object and the data object in this case is the
            // path to the image and this path will look like the following:
            // " /uploads/image-1619399184958.jpg "

            // and the second argument will be the formData object

            // and the third argument in the request will be our config object
            const { data } = await axios.post(
                endpoint,
                formData,
                config
            );

            // set image equal to the image path
            setImage( data );

            // set uploading to false
            setUploading( false );

        } catch ( error ) {

            // get the error message
            const errorMessage =

                error.response && error.response.data.message ? (
                
                    error.response.data.message 
            
                ) : (
                
                    error.message 
            
                );

            // if the errorMessage is true then show the error message and then after 3 seconds
            // erase the error message
            if ( errorMessage ) {

                // set the error message and then show it below
                setMessage( errorMessage );

                // erase the error message after 5 seconds
                setTimeout( () => {

                    setMessage( null );

                }, 5000 );

            }

            // console.error our error
            // console.error( error );

            // set uploading to false
            setUploading( false );

        } // end of try catch

    } // end of handleUploadFile


    // now let's test this out by uploading an image and let's upload " st_lucia_01.jpg "
    // 

    // End of 3 -


    /*
    const handlePrice = ( e ) => {

        // const revisedValue = e.target.value.replace( /,/g, '' );

        console.log( e.target );

        // Step 1
        // add decimals and commas to the price
        const addDecimals = ( number ) => {
            return ( Math.round( number * 100 ) / 100 ).toFixed( 2 ) 
        }

        // Step 2
        // add 2 decimals
        const priceWithTwoDecimals = addDecimals( revisedValue );


        // Step 3
        // convert the priceWithTwoDecimals to a string for display purposes and add commas
        function numberWithCommas( x ) {
            return x.toString().replace( /\B(?=(\d{3})+(?!\d))/g, "," );
        }

        // Step 4
        // remember priceWithTwoDecimalsAndCommas is a string
        const priceWithTwoDecimalsAndCommas = numberWithCommas( priceWithTwoDecimals );

        // const numberPriceWithTwoDecimalsAndCommas = Number( priceWithTwoDecimalsAndCommas );

        // Step 5
        // set price
        setPrice( priceWithTwoDecimalsAndCommas );
    
    }
    */


    /*
    return (

        <Fragment>
            
        {

            loadingProductGet ? (

                <Spinner />

            ) : loadingProductUpdateAdmin ? (
        
                <Spinner />
        
            ) : errorProductGet ? (

                <ErrorMessage>{ errorProductGet }</ErrorMessage>

            ) : errorProductUpdateAdmin ? (
        
                <ErrorMessage>{ errorProductUpdateAdmin }</ErrorMessage>
        
            ) : (

                <div className="admin-product-edit-screen">

                    { /* backlink to the admin product list screen */ /* }
                    <Link to="/admin/productlist" className="admin-product-edit-screen--backlink">
                        &#60; Go back to the previous page
                    </Link>

                    <h2 className="admin-product-edit-screen--title">Edit Product</h2>


                    <form className="admin-product-edit-screen--form" noValidate="novalidate" onSubmit={ handleSubmit } >

                        <FormInput
                            name="name"
                            type="text"
                            label="Name"
                            value={ name }
                            onChange={ (e) => setName( e.target.value ) }
                        />

                        <div className="admin-product-edit-screen--form--input-group-1">

                            { /* check message */ /* }
                            { message && <div style={ { padding : "0.5rem 0 1.0rem 0", background : "rgb( 255, 255, 255 )" } }><ErrorMessage>{ message }</ErrorMessage></div> }

                            <FormInputVersion2
                                name="image"
                                type="text"
                                label="Image"
                                value={ image }
                                onChange={ (e) => setImage( e.target.value ) }
                            />
                            
                            <FileInput
                                name="file"
                                type="file"
                                label="Browse"
                                id="file-input-id"
                                onChange={ handleUploadFile }
                            />

                            { uploading && <Spinner /> }

                        </div>

                        <FormInput
                            name="description"
                            type="text"
                            label="Description"
                            value={ description }
                            onChange={ (e) => setDescription( e.target.value ) }
                        />
                        <FormInput
                            name="brand"
                            type="text"
                            label="Brand"
                            value={ brand }
                            onChange={ (e) => setBrand( e.target.value ) }
                        />
                        <FormInput
                            name="category"
                            type="text"
                            label="Category"
                            value={ category }
                            onChange={ (e) => setCategory( e.target.value ) }
                        />
                        <FormInput
                            name="price"
                            type="number"
                            label="Price"
                            value={ price }
                            onChange={ (e) => setPrice( e.target.value ) }
                        />
                        <FormInput
                            name="countInStock"
                            type="number"
                            label="Count In Stock"
                            value={ countInStock }
                            onChange={ (e) => setCountInStock( e.target.value ) }
                        />

                        { /*  admin-product-edit-screen button  */ /* }
                        <div className="admin-product-edit-screen--form--button-container">
                            <button
                                type="submit"
                                className="admin-product-edit-screen--form--button-container--button"
                            >
                                Update
                            </button>
                        </div>

                    </form>

                </div>

            )

        }

        </Fragment>

    );

}


export default AdminProductEditScreen;
*/























// ===============================























// at the beginning of lecture 81, given all the notes, I created a new file below without
// the notes so we are starting fresh

// since we are building a form we will need to use the useState(); hook and let's import
// in the useEffect(); hook as well
import React, { Fragment, useState, useEffect } from 'react';
// import in axios
import axios from 'axios';
// import in the Link component
import { Link } from 'react-router-dom';
// import in the useDispatch(); and useSelector(); hooks
import { useDispatch, useSelector } from 'react-redux';
// import in our action creators
import {
    productGetActionCreator,
    productUpdateAdminActionCreator
} from '../../redux/actions/product.actions';
// import in our action creator
import {
    removeFromCartActionCreator
} from '../../redux/actions/cart.actions';
// import in the PRODUCT_GET_ADMIN_RESET, PRODUCT_UPDATE_ADMIN_RESET constants
import {
    PRODUCT_GET_RESET,
    PRODUCT_UPDATE_ADMIN_RESET 
} from '../../redux/constants/product.constants';
// inport in the FormInput component
import FormInput from '../../components/form-input/form-input.component';
// inport in the FormInputVersion2 component
import FormInputVersion2 from '../../components/form-input-v2/form-input-v2.component';
// inport in the FileInput component
import FileInput from '../../components/file-input/file-input.component';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner.component';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';

import './admin-product-edit-screen.styles.scss';


const AdminProductEditScreen = ( { history, match } ) => {

    // ==============================
    // Component State
    // ==============================

    // set the component level state
    const [ name, setName ]                 = useState( '' );
    const [ image, setImage ]               = useState( '' );
    const [ description, setDescription ]   = useState( '' );
    const [ brand, setBrand ]               = useState( '' );
    const [ category, setCategory ]         = useState( '' );
    const [ price, setPrice ]               = useState( 0 );
    const [ countInStock, setCountInStock ] = useState( 0 );
    const [ message, setMessage ]           = useState( null );
    const [ uploading, setUploading ]       = useState( false );


    // ==============================
    // Match.Params.Id
    // ==============================

    const productId = match.params.id;

    // ==============================
    // USEDISPATCH();
    // ==============================

    // define dispatch
    const dispatch = useDispatch();

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
        loading : loadingProductGet,
        product,
        error   : errorProductGet
    } = productGet;

    // ==============================
    // productUpdateAdmin State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const productUpdateAdmin = useSelector( ( state ) => state.productUpdateAdmin );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { 
        loading : loadingProductUpdateAdmin,
        success : successProductUpdateAdmin,
        error   : errorProductUpdateAdmin
    } = productUpdateAdmin;

    // ==============================
    // USEEFFECT();
    // ==============================

    useEffect( () => {

        // ==============================
        // If else if else statement
        // ==============================

        // if the user is not logged in or the user is not an admin then let's redirect the
        // user to the login screen
        if ( !userInfo || !userInfo.isAdmin ) {

            history.push( '/login' );

        // if we were successful in updating the product in the database then let's push the
        // user back to the product list screen 
        } else if ( successProductUpdateAdmin ) {

            // need to reset so we make sure we get a new updated product
            dispatch( { type : PRODUCT_GET_RESET } );
    
            // need to reset state so that successProductUpdateAdmin is false and therefore
            // we can proceed to the next block of code or the else if statement below
            dispatch( { type : PRODUCT_UPDATE_ADMIN_RESET } );

            // remove the updated item from the cart; otherwise, the cart item will have
            // old state data
            dispatch( removeFromCartActionCreator( productId ) );

            // go back to the admin product list screen
            history.push( '/admin/productlist' );    

        // if product.name does not exist or the product._id does not match the id in the URL
        // then we want to dispatch the productGetActionCreator

        // remember to add ...state to the PRODUCT_GET_REQUEST, otherwise the else if
        // statement below will not work        
        } else if ( !product.name || product._id !== productId ) {

            // dispatch the productGetActionCreator
            dispatch( productGetActionCreator( productId ) );

        } else {

            // remember to add ...state to the PRODUCT_GET_REQUEST, otherwise the setName(),
            // setEmail() and setIsAdmin() below will not work
            setName( product.name );
            setImage( product.image );
            setDescription( product.description );
            setBrand( product.brand );
            setCategory( product.category );
            setPrice( product.price );
            setCountInStock( product.countInStock );

        } // end of if else if else statement

    }, [ 
        dispatch,
        history,
        productId,
        userInfo,
        product,
        successProductUpdateAdmin
    ] ); // end of useEffect

    // ==============================
    // handleSubmit function
    // ==============================

    const handleSubmit = ( e ) => {

        e.preventDefault();

        // dispatch our product update admin action creator and remember to pass in the
        // product update object or the name, image, decription, brand, category, price
        // and countInStock from the component state

        // and remember we are using req.body.key in our productUpdateAdmin controller in
        // the product.controllers.js file so we need to pass along the name, image,
        // description, brand, category, price and countInStock key value pairs in order to
        // update the product's information in the productUpdateAdmin controller and thereby
        // update the product's information in the database
        dispatch( productUpdateAdminActionCreator(

            {
                _id          : productId,
                name         : name,
                image        : image,
                description  : description,
                brand        : brand,
                category     : category,
                price        : price,
                countInStock : countInStock
            }

        ) );

    }


    // ==============================
    // handleUploadFile function
    // ==============================

    // since we are making an http request, we want to make our function asynchronous
    const handleUploadFile = async ( e ) => {

        // e.target.files is an array and since we are uploading one file let's pass in
        // [ 0 ] after e.target.files
        const file = e.target.files[ 0 ];

        // next we want to initialize a FormData object and remember the formData object
        // was created as a way to bundle information and send it to the server and in that
        // way the formData object acts like a form
        const formData = new FormData();

        // then we will append some information to the formData object and the key will be
        // " image ", which is the same name we used in our upload middleware function and
        // the value will be the file that we are seeking to upload to the server
        formData.append( 'image', file );

        // set uploading to true and thereby call the Spinner component down below
        setUploading( true );

        // set up a try catch block
        try {

            // create our endpoint
            // remember the endpoint points to the backend endpoint which is " /api/upload "
            const endpoint = "/api/upload";

            // create our config object
            // remember since we are sending a fle to the backend we need to indicate in the
            // headers the content type or multipart/form-data in our case and let's create a
            // config object to help us do that
            const config = {
                headers : {
                    'Content-Type' : 'multipart/form-data'                    
                }
            };

            // below we are making a POST request to the above endpoint
            // and axios returns the response object and we can then destructure the data
            // object off of the response object and the data object in this case is the
            // path to the image and this path will look like the following:
            // " /uploads/image-1619399184958.jpg "

            // and the second argument will be the formData object

            // and the third argument in the request will be our config object
            const { data } = await axios.post(
                endpoint,
                formData,
                config
            );

            // set image equal to the image path
            setImage( data );

            // set uploading to false
            setUploading( false );

        } catch ( error ) {

            // get the error message
            const errorMessage =

                error.response && error.response.data.message ? (
                
                    error.response.data.message 
            
                ) : (
                
                    error.message 
            
                );

            // if the errorMessage is true then show the error message and then after 3 seconds
            // erase the error message
            if ( errorMessage ) {

                // set the error message and then show it below
                setMessage( errorMessage );

                // erase the error message after 5 seconds
                setTimeout( () => {

                    setMessage( null );

                }, 5000 );

            }

            // set uploading to false
            setUploading( false );

        } // end of try catch

    } // end of handleUploadFile


    return (

        <Fragment>
            
        {

            loadingProductGet ? (

                <Spinner />

            ) : loadingProductUpdateAdmin ? (
        
                <Spinner />
        
            ) : errorProductGet ? (

                <ErrorMessage>{ errorProductGet }</ErrorMessage>

            ) : errorProductUpdateAdmin ? (
        
                <ErrorMessage>{ errorProductUpdateAdmin }</ErrorMessage>
        
            ) : (

                <div className="admin-product-edit-screen">

                    { /* backlink to the admin product list screen */ }
                    <Link to="/admin/productlist" className="admin-product-edit-screen--backlink">
                        &#60; Go back to the previous page
                    </Link>

                    <h2 className="admin-product-edit-screen--title">Edit Product</h2>


                    <form className="admin-product-edit-screen--form" noValidate="novalidate" onSubmit={ handleSubmit } >

                        <FormInput
                            name="name"
                            type="text"
                            label="Name"
                            value={ name }
                            onChange={ (e) => setName( e.target.value ) }
                        />

                        <div className="admin-product-edit-screen--form--input-group-1">

                            { /* check message */ }
                            { message && <div style={ { padding : "0.5rem 0 1.0rem 0", background : "rgb( 255, 255, 255 )" } }><ErrorMessage>{ message }</ErrorMessage></div> }

                            <FormInputVersion2
                                name="image"
                                type="text"
                                label="Image"
                                value={ image }
                                onChange={ (e) => setImage( e.target.value ) }
                            />
                            
                            <FileInput
                                name="file"
                                type="file"
                                label="Browse"
                                id="file-input-id"
                                onChange={ handleUploadFile }
                            />

                            { uploading && <Spinner /> }

                        </div>

                        <FormInput
                            name="description"
                            type="text"
                            label="Description"
                            value={ description }
                            onChange={ (e) => setDescription( e.target.value ) }
                        />
                        <FormInput
                            name="brand"
                            type="text"
                            label="Brand"
                            value={ brand }
                            onChange={ (e) => setBrand( e.target.value ) }
                        />
                        <FormInput
                            name="category"
                            type="text"
                            label="Category"
                            value={ category }
                            onChange={ (e) => setCategory( e.target.value ) }
                        />
                        <FormInput
                            name="price"
                            type="number"
                            label="Price"
                            value={ price }
                            onChange={ (e) => setPrice( e.target.value ) }
                        />
                        <FormInput
                            name="countInStock"
                            type="number"
                            label="Count In Stock"
                            value={ countInStock }
                            onChange={ (e) => setCountInStock( e.target.value ) }
                        />

                        { /*  admin-product-edit-screen button  */ }
                        <div className="admin-product-edit-screen--form--button-container">
                            <button
                                type="submit"
                                className="admin-product-edit-screen--form--button-container--button"
                            >
                                Update
                            </button>
                        </div>

                    </form>

                </div>

            )

        }

        </Fragment>

    );

}


export default AdminProductEditScreen;


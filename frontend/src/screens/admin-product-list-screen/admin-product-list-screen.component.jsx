
/*
// 1 -

import React, { useEffect } from 'react';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in our action creator
import { productListActionCreator } from '../../redux/actions/product.actions';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';
// import in the AdminProductListItem component
import AdminProductListItem from '../../components/admin-product-list-item/admin-product-list-item.component';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner.component';

import './admin-product-list-screen.styles.scss';


const AdminProductListScreen = ( { history } ) => {

    // ==============================
    // Component State
    // ==============================

    // ==============================
    // DISPATCH & USESELECTOR();
    // ==============================

    // define dispatch
    const dispatch = useDispatch();

    // ==============================
    // productList State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const productList = useSelector( ( state ) => state.productList );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output
    const { loading, products, error } = productList;

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

    /*
    // ==============================
    // productDeleteAdmin State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const productDeleteAdmin = useSelector( ( state ) => state.productDeleteAdmin );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { success : successProductListDeleteAdmin, error : errorProductListDeleteAdmin } = productDeleteAdmin;
    */

    // ==============================
    // USEEFFECT();
    // ==============================
    /*

    useEffect( () => {

        // let's make sure the user is both logged in and is an admin before we dispatch the
        // productListActionCreator
        if ( userInfo && userInfo.isAdmin ) {

            // dispatch the productListActionCreator
            dispatch( productListActionCreator() );

        } else {

            // and if the user is not logged in and / or the user is not an admin then
            // let's redirect the user to the login screen
            history.push( '/login' );

        } // end of if else statement

    // here we passing in successProductDeleteAdmin as a dependency to the useEffect(); hook because
    // if successProductDeleteAdmin changes then we want useEffect to run again and thereby call the
    // productListAdminActionCreator(), which will then update the product list

    }, [ dispatch, history, /* successProductDeleteAdmin, */ /* userInfo /* ] ); // end of useEffect

    // ==============================
    // handleCreateProduct function
    // ==============================
    /*

    const handleCreateProduct = ( product ) => {

        // since we are deleting a product, let's create a confirm message and make the
        // admin user confirm that they want to delete the product, just to be safe
        if ( window.confirm( 'Are you sure you want to delete this product?' ) ) {

            // if the admin user pressing the Ok button and confirms the product delete then
            // we will dispatch our action creator
            // dispatch( productCreateAdminActionCreator( _id ) );

        }

    } // end of handleCreateProduct


    // before moving on to the main block of code, check loading and error
    return (

        // create the screen and provide a top level div for react
        <div className="admin-product-list-screen">

            { /*  create product button  */ /* }
            <div className="admin-product-list-screen--create-product-button-container">
                <button
                    className="admin-product-list-screen--create-product-button-container--button"
                    onClick={ handleCreateProduct }
                >
                    <i 
                    className="fas fa-plus admin-product-list-screen--create-product-button-container--fa-plus"
                    >
                    </i>&nbsp;&nbsp;Create Product
                </button>
            </div>

            <h1 className="admin-product-list-screen--title">Products</h1>

            { 
            /*

                loading ? (

                    <Spinner />
        
                ) : error ? (
        
                    <ErrorMessage>{ error }</ErrorMessage>
        
                ) : errorProductListDeleteAdmin ? (
        
                    <ErrorMessage>{ errorProductListDeleteAdmin }</ErrorMessage>

                ) : products.length === 0 ? (
        
                    <ErrorMessage>There are no products in the database</ErrorMessage>

                ) : (

            */ 
            /* }

                    <div className="admin-product-list-screen--main">
        
                        { /* row 1 - header */ /* }
                        <div className="admin-product-list-screen--main--header">

                            <div className="admin-product-list-screen--main--header--id">
                                <span>ID</span>
                            </div>

                            <div className="admin-product-list-screen--main--header--name">
                                <span>Name</span>
                            </div>

                            <div className="admin-product-list-screen--main--header--price">
                                <span>Price</span>
                            </div>

                            <div className="admin-product-list-screen--main--header--category">
                                <span>Category</span>
                            </div>

                            <div className="admin-product-list-screen--main--header--brand">
                                <span>Brand</span>
                            </div>

                            <div className="admin-product-list-screen--main--header--edit">
                                <span>Edit</span>
                            </div>

                            <div className="admin-product-list-screen--main--header--delete">
                                <span>Delete</span>
                            </div>

                        </div>

                        { /* row 2 + - list of products */ /* }
                        <div className="admin-product-list-screen--main--list-items">

                            {             
                                products.map( ( product ) => (

                                    <AdminProductListItem
                                        key={ product._id }
                                        product={ product }
                                    />

                                ) )
                            }

                        </div>

                    </div>

                )


        
        </div>

    );

} // end of AdminProductListScreen


export default AdminProductListScreen;

// End of 1 -
*/























// ===============================






















/*
// at the beginning of lecture 74, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React, { useEffect } from 'react';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in our action creator
import { productListActionCreator } from '../../redux/actions/product.actions';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';
// import in the AdminProductListItem component
import AdminProductListItem from '../../components/admin-product-list-item/admin-product-list-item.component';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner.component';

import './admin-product-list-screen.styles.scss';


const AdminProductListScreen = ( { history } ) => {

    // ==============================
    // Component State
    // ==============================

    // ==============================
    // DISPATCH & USESELECTOR();
    // ==============================

    // define dispatch
    const dispatch = useDispatch();

    // ==============================
    // productList State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const productList = useSelector( ( state ) => state.productList );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output
    const { 
        loading : loadingProductList,
        products,
        error   : errorProductList
    } = productList;

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


    // 2 -
    // coming from the store.js 22 - file

    // ==============================
    // productDeleteAdmin State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const productDeleteAdmin = useSelector( ( state ) => state.productDeleteAdmin );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { 
        loading : loadingProductDeleteAdmin,
        success : successProductDeleteAdmin,
        error   : errorProductDeleteAdmin
    } = productDeleteAdmin;

    // End of 2 -

    // ==============================
    // USEEFFECT();
    // ==============================

    useEffect( () => {

        // let's make sure the user is both logged in and is an admin before we dispatch the
        // productListActionCreator
        if ( userInfo && userInfo.isAdmin ) {

            // dispatch the productListActionCreator
            dispatch( productListActionCreator() );

        } else {

            // and if the user is not logged in and / or the user is not an admin then
            // let's redirect the user to the login screen
            history.push( '/login' );

        } // end of if else statement


    // 2 - continued

    // here we passing in successProductDeleteAdmin as a dependency to the useEffect(); hook because
    // if successProductDeleteAdmin changes then we want useEffect to run again and thereby call the
    // productListActionCreator(), which will then update the product list

    }, [ dispatch, history, successProductDeleteAdmin, userInfo ] ); // end of useEffect

    // now let's go to the admin-product-list-item.component.jsx 1 - file

    // End of 2 -


    // ==============================
    // handleCreateProduct function
    // ==============================

    const handleCreateProduct = ( product ) => {

        // since we are deleting a product, let's create a confirm message and make the
        // admin user confirm that they want to delete the product, just to be safe
        if ( window.confirm( 'Are you sure you want to delete this product?' ) ) {

            // if the admin user pressing the Ok button and confirms the product delete then
            // we will dispatch our action creator
            // dispatch( productCreateAdminActionCreator( _id ) );

        }

    } // end of handleCreateProduct


    // before moving on to the main block of code, check loading and error
    return (

        // create the screen and provide a top level div for react
        <div className="admin-product-list-screen">

            { /*  create product button  */ /* }
            <div className="admin-product-list-screen--create-product-button-container">
                <button
                    className="admin-product-list-screen--create-product-button-container--button"
                    onClick={ handleCreateProduct }
                >
                    <i 
                    className="fas fa-plus admin-product-list-screen--create-product-button-container--fa-plus"
                    >
                    </i>&nbsp;&nbsp;Create Product
                </button>
            </div>

            <h1 className="admin-product-list-screen--title">Products</h1>

            {

                loadingProductList ? (

                    <Spinner />
        
                ) : loadingProductDeleteAdmin ? (
                
                    <Spinner />

                ) : errorProductList ? (
        
                    <ErrorMessage>{ errorProductList }</ErrorMessage>
        
                ) : errorProductDeleteAdmin ? (
        
                    <ErrorMessage>{ errorProductDeleteAdmin }</ErrorMessage>

                ) : products.length === 0 ? (
        
                    <ErrorMessage>There are no products in the database</ErrorMessage>

                ) : (

                    <div className="admin-product-list-screen--main">
        
                        { /* row 1 - header */ /* }
                        <div className="admin-product-list-screen--main--header">

                            <div className="admin-product-list-screen--main--header--id">
                                <span>ID</span>
                            </div>

                            <div className="admin-product-list-screen--main--header--name">
                                <span>Name</span>
                            </div>

                            <div className="admin-product-list-screen--main--header--price">
                                <span>Price</span>
                            </div>

                            <div className="admin-product-list-screen--main--header--category">
                                <span>Category</span>
                            </div>

                            <div className="admin-product-list-screen--main--header--brand">
                                <span>Brand</span>
                            </div>

                            <div className="admin-product-list-screen--main--header--edit">
                                <span>Edit</span>
                            </div>

                            <div className="admin-product-list-screen--main--header--delete">
                                <span>Delete</span>
                            </div>

                        </div>

                        { /* row 2 + - list of products */ /* }
                        <div className="admin-product-list-screen--main--list-items">

                            {             
                                products.map( ( product ) => (

                                    <AdminProductListItem
                                        key={ product._id }
                                        product={ product }
                                    />

                                ) )
                            }

                        </div>

                    </div>

                )

            }
        
        </div> // end of admin-product-list-screen div or container div

    );

} // end of AdminProductListScreen


export default AdminProductListScreen;
*/























// ===============================






















/*
// at the beginning of lecture 74, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React, { useEffect } from 'react';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in our action creators
import { 
    productListActionCreator,
    productCreateAdminActionCreator
} from '../../redux/actions/product.actions';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';
// import in the AdminProductListItem component
import AdminProductListItem from '../../components/admin-product-list-item/admin-product-list-item.component';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner.component';
// import in the PRODUCT_CREATE_ADMIN_RESET constant
import { PRODUCT_CREATE_ADMIN_RESET } from '../../redux/constants/product.constants';

import './admin-product-list-screen.styles.scss';


const AdminProductListScreen = ( { history } ) => {

    // ==============================
    // Component State
    // ==============================

    // ==============================
    // DISPATCH & USESELECTOR();
    // ==============================

    // define dispatch
    const dispatch = useDispatch();

    // ==============================
    // productList State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const productList = useSelector( ( state ) => state.productList );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output
    const { 
        loading : loadingProductList,
        products,
        error   : errorProductList
    } = productList;

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
    // productDeleteAdmin State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const productDeleteAdmin = useSelector( ( state ) => state.productDeleteAdmin );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { 
        loading : loadingProductDeleteAdmin,
        success : successProductDeleteAdmin,
        error   : errorProductDeleteAdmin
    } = productDeleteAdmin;


    // 3 -
    // coming from the store.js 23 - file

    // make sure we import our action creator above

    // ==============================
    // productCreateAdmin State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const productCreateAdmin = useSelector( ( state ) => state.productCreateAdmin );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { 
        loading : loadingProductCreateAdmin,
        success : successProductCreateAdmin,
        product : createdProduct,
        error   : errorProductCreateAdmin
    } = productCreateAdmin;

    // End of 3 -


    // ==============================
    // USEEFFECT();
    // ==============================

    useEffect( () => {


        // 3 - continued

        // make sure we reset the productCreateAdmin state; otherwise,
        // successProductCreateAdmin above will not trigger a change in the useEffect(); hook
        // and therefore our product list will not update and include the last product
        // created
        dispatch( { type : PRODUCT_CREATE_ADMIN_RESET } );
    
        // let's make sure the user is both logged in and is an admin before we dispatch the
        // productListActionCreator
        if ( !userInfo || !userInfo.isAdmin ) {

            // if the user is not logged in and / or the user is not an admin then
            // let's redirect the user to the login screen
            history.push( '/login' );

        } // end of if statement
        
        // if successProductCreateAdmin is true then let's push the user to the product edit
        // screen
        if ( successProductCreateAdmin ) {

            history.push( `/admin/product/${ createdProduct._id }/edit` );
    
        } else {

            // dispatch the productListActionCreator
            dispatch( productListActionCreator() );
            
        } // end of if else statement

        // End of 3 -


    // here we are passing in successProductDeleteAdmin as a dependency to the useEffect(); hook
    // because if successProductDeleteAdmin changes then we want useEffect to run again and
    // thereby call the productListActionCreator(), which will then update the product list


    // 3 - continued

    // here we are passing in successProductCreateAdmin as a dependency to the useEffect(); hook
    // because if successProductCreateAdmin changes then we want useEffect to run again and
    // thereby call the productListActionCreator(), which will then update the product list

    }, [ 
        dispatch,
        history,
        createdProduct._id,
        successProductCreateAdmin,
        successProductDeleteAdmin,
        userInfo
    ] ); // end of useEffect

    // End of 3 -


    // ==============================
    // handleCreateProduct function
    // ==============================

    const handleCreateProduct = () => {


        // 3 - continued

        // let's make sure the user is both logged in and is an admin before we dispatch the
        // productListActionCreator
        if ( userInfo && userInfo.isAdmin ) {

            // dispatch our action creator
            dispatch( productCreateAdminActionCreator() );

        } else {

            // and if the user is not logged in and / or the user is not an admin then
            // let's redirect the user to the login screen
            history.push( '/login' );

        } // end of if else statement

        // next, we want to create the product edit screen

        // End of 3 -


    } // end of handleCreateProduct


    // before moving on to the main block of code, check loading and error
    return (

        // create the screen and provide a top level div for react
        <div className="admin-product-list-screen">

            { /*  create product button  */ /* }
            <div className="admin-product-list-screen--create-product-button-container">
                <button
                    className="admin-product-list-screen--create-product-button-container--button"
                    onClick={ handleCreateProduct }
                >
                    <i 
                    className="fas fa-plus admin-product-list-screen--create-product-button-container--fa-plus"
                    >
                    </i>&nbsp;&nbsp;Create Product
                </button>
            </div>

            <h1 className="admin-product-list-screen--title">Products</h1>

            {

                loadingProductList ? (

                    <Spinner />
        
                ) : loadingProductDeleteAdmin ? (
                
                    <Spinner />

                ) : loadingProductCreateAdmin ? (

                    <Spinner />

                ) : errorProductList ? (
        
                    <ErrorMessage>{ errorProductList }</ErrorMessage>
        
                ) : errorProductDeleteAdmin ? (
        
                    <ErrorMessage>{ errorProductDeleteAdmin }</ErrorMessage>

                ) : errorProductCreateAdmin ? (

                    <ErrorMessage>{ errorProductCreateAdmin }</ErrorMessage>

                ) : products.length === 0 ? (
        
                    <ErrorMessage>There are no products in the database</ErrorMessage>

                ) : (

                    <div className="admin-product-list-screen--main">
        
                        { /* row 1 - header */ /* }
                        <div className="admin-product-list-screen--main--header">

                            <div className="admin-product-list-screen--main--header--id">
                                <span>ID</span>
                            </div>

                            <div className="admin-product-list-screen--main--header--name">
                                <span>Name</span>
                            </div>

                            <div className="admin-product-list-screen--main--header--price">
                                <span>Price</span>
                            </div>

                            <div className="admin-product-list-screen--main--header--category">
                                <span>Category</span>
                            </div>

                            <div className="admin-product-list-screen--main--header--brand">
                                <span>Brand</span>
                            </div>

                            <div className="admin-product-list-screen--main--header--edit">
                                <span>Edit</span>
                            </div>

                            <div className="admin-product-list-screen--main--header--delete">
                                <span>Delete</span>
                            </div>

                        </div>

                        { /* row 2 + - list of products */ /* }
                        <div className="admin-product-list-screen--main--list-items">

                            {             
                                products.map( ( product ) => (

                                    <AdminProductListItem
                                        key={ product._id }
                                        product={ product }
                                    />

                                ) )
                            }

                        </div>

                    </div>

                )

            }
        
        </div> // end of admin-product-list-screen div or container div

    );

} // end of AdminProductListScreen


export default AdminProductListScreen;
*/























// ===============================






















/*
// at the beginning of lecture 77, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React, { Fragment, useEffect } from 'react';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in our action creators
import { 
    productListActionCreator,
    productCreateAdminActionCreator
} from '../../redux/actions/product.actions';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';
// import in the AdminProductListItem component
import AdminProductListItem from '../../components/admin-product-list-item/admin-product-list-item.component';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner.component';
// import in the PRODUCT_CREATE_ADMIN_RESET constant
import { PRODUCT_CREATE_ADMIN_RESET } from '../../redux/constants/product.constants';

import './admin-product-list-screen.styles.scss';


// 2 -
// coming from the pagination.component.jsx 1 - file

// import in our Pagination component
import Pagination from '../../components/pagination/pagination.component';

// End of 2 -


const AdminProductListScreen = ( { history, match } ) => {


    // 2 - continued

    // ==============================
    // Get the page number
    // ==============================

    // get the page number
    const pageNumber = match.params.pageNumber || 1;

    // End of 2 -


    // ==============================
    // Component State
    // ==============================

    // ==============================
    // DISPATCH & USESELECTOR();
    // ==============================

    // define dispatch
    const dispatch = useDispatch();

    // ==============================
    // productList State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const productList = useSelector( ( state ) => state.productList );


    // 2 - continued

    // add page and pages as pieces of state below

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output
    const { 
        loading : loadingProductList,
        products,
        page,
        pages,
        error   : errorProductList
    } = productList;

    // End of 2 -


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
    // productDeleteAdmin State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const productDeleteAdmin = useSelector( ( state ) => state.productDeleteAdmin );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { 
        loading : loadingProductDeleteAdmin,
        success : successProductDeleteAdmin,
        error   : errorProductDeleteAdmin
    } = productDeleteAdmin;

    // ==============================
    // productCreateAdmin State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const productCreateAdmin = useSelector( ( state ) => state.productCreateAdmin );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { 
        loading : loadingProductCreateAdmin,
        success : successProductCreateAdmin,
        product : createdProduct,
        error   : errorProductCreateAdmin
    } = productCreateAdmin;

    // ==============================
    // USEEFFECT();
    // ==============================

    useEffect( () => {

        // make sure we reset the productCreateAdmin state; otherwise, our dependency
        // successProductCreateAdmin will always be true and we will not be able to go
        // back to the product list screen ( see the if else statement below )
        dispatch( { type : PRODUCT_CREATE_ADMIN_RESET } );
    
        // let's make sure the user is both logged in and is an admin before we dispatch the
        // productListActionCreator
        if ( !userInfo || !userInfo.isAdmin ) {

            // if the user is not logged in and / or the user is not an admin then
            // let's redirect the user to the login screen
            history.push( '/login' );

        } // end of if statement
        
        // if successProductCreateAdmin is true then let's push the user to the product edit
        // screen
        if ( successProductCreateAdmin ) {

            history.push( `/admin/product/${ createdProduct._id }/edit` );
    
        } else {

            // 2 - continued

            // we don't need to pass in a keyword as an argument since this is an admin screen
            // so instead let's pass in an empty string as the first argument to the
            // productListActionCreator

            // add pageNumber as an argument to the productListActionCreator and as a dependency
            // below

            // dispatch the productListActionCreator
            dispatch( productListActionCreator( '', pageNumber ) );

            // End of 2 -


        } // end of if else statement

    // here we are passing in successProductDeleteAdmin as a dependency to the useEffect(); hook
    // because if successProductDeleteAdmin changes then we want useEffect to run again and
    // thereby call the productListActionCreator(), which will then update the product list

    }, [ 
        dispatch,
        history,
        createdProduct._id,
        successProductCreateAdmin,
        successProductDeleteAdmin,
        userInfo,
        pageNumber
    ] ); // end of useEffect

    // ==============================
    // handleCreateProduct function
    // ==============================

    const handleCreateProduct = () => {

        // let's make sure the user is both logged in and is an admin before we dispatch the
        // productListActionCreator
        if ( userInfo && userInfo.isAdmin ) {

            // dispatch our action creator
            dispatch( productCreateAdminActionCreator() );

        } else {

            // and if the user is not logged in and / or the user is not an admin then
            // let's redirect the user to the login screen
            history.push( '/login' );

        } // end of if else statement

    } // end of handleCreateProduct


    // before moving on to the main block of code, check loading and error
    return (

        // create the screen and provide a top level div for react
        <div className="admin-product-list-screen">

            { /*  create product button  */ /* }
            <div className="admin-product-list-screen--create-product-button-container">
                <button
                    className="admin-product-list-screen--create-product-button-container--button"
                    onClick={ handleCreateProduct }
                >
                    <i 
                    className="fas fa-plus admin-product-list-screen--create-product-button-container--fa-plus"
                    >
                    </i>&nbsp;&nbsp;Create Product
                </button>
            </div>

            <h1 className="admin-product-list-screen--title">Products</h1>

            {

                loadingProductList ? (

                    <Spinner />
        
                ) : loadingProductDeleteAdmin ? (
                
                    <Spinner />

                ) : loadingProductCreateAdmin ? (

                    <Spinner />

                ) : errorProductList ? (
        
                    <ErrorMessage>{ errorProductList }</ErrorMessage>
        
                ) : errorProductDeleteAdmin ? (
        
                    <ErrorMessage>{ errorProductDeleteAdmin }</ErrorMessage>

                ) : errorProductCreateAdmin ? (

                    <ErrorMessage>{ errorProductCreateAdmin }</ErrorMessage>

                ) : products.length === 0 ? (
        
                    <ErrorMessage>There are no products in the database</ErrorMessage>

                ) : (

                    <Fragment>

                        <div className="admin-product-list-screen--main">
            
                            { /* row 1 - header */ /* }
                            <div className="admin-product-list-screen--main--header">

                                <div className="admin-product-list-screen--main--header--id">
                                    <span>ID</span>
                                </div>

                                <div className="admin-product-list-screen--main--header--name">
                                    <span>Name</span>
                                </div>

                                <div className="admin-product-list-screen--main--header--price">
                                    <span>Price</span>
                                </div>

                                <div className="admin-product-list-screen--main--header--category">
                                    <span>Category</span>
                                </div>

                                <div className="admin-product-list-screen--main--header--brand">
                                    <span>Brand</span>
                                </div>

                                <div className="admin-product-list-screen--main--header--edit">
                                    <span>Edit</span>
                                </div>

                                <div className="admin-product-list-screen--main--header--delete">
                                    <span>Delete</span>
                                </div>

                            </div>

                            { /* row 2 + - list of products */ /* }
                            <div className="admin-product-list-screen--main--list-items">

                                {             
                                    products.map( ( product ) => (

                                        <AdminProductListItem
                                            key={ product._id }
                                            product={ product }
                                        />

                                    ) )
                                }

                            </div>

                        </div>

                        <Pagination
                            page={ page }
                            pages={ pages }
                            isAdmin={ true }
                        />

                    </Fragment>

                )

            }
        
        </div> // end of admin-product-list-screen div or container div

    );

} // end of AdminProductListScreen


export default AdminProductListScreen;
*/























// ===============================























// at the beginning of lecture 87, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React, { Fragment, useEffect } from 'react';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in our action creators
import { 
    productListActionCreator,
    productCreateAdminActionCreator
} from '../../redux/actions/product.actions';
// import in the AdminProductListItem component
import AdminProductListItem from '../../components/admin-product-list-item/admin-product-list-item.component';
// import in our Pagination component
import Pagination from '../../components/pagination/pagination.component';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner.component';
// import in the PRODUCT_CREATE_ADMIN_RESET constant
import { PRODUCT_CREATE_ADMIN_RESET } from '../../redux/constants/product.constants';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';

import './admin-product-list-screen.styles.scss';


const AdminProductListScreen = ( { history, match } ) => {

    // ==============================
    // Get the page number
    // ==============================

    // get the page number
    const pageNumber = match.params.pageNumber || 1;

    // ==============================
    // Component State
    // ==============================

    // ==============================
    // DISPATCH & USESELECTOR();
    // ==============================

    // define dispatch
    const dispatch = useDispatch();

    // ==============================
    // productList State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const productList = useSelector( ( state ) => state.productList );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output
    const { 
        loading : loadingProductList,
        products,
        page,
        pages,
        error   : errorProductList
    } = productList;

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
    // productDeleteAdmin State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const productDeleteAdmin = useSelector( ( state ) => state.productDeleteAdmin );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { 
        loading : loadingProductDeleteAdmin,
        success : successProductDeleteAdmin,
        error   : errorProductDeleteAdmin
    } = productDeleteAdmin;

    // ==============================
    // productCreateAdmin State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const productCreateAdmin = useSelector( ( state ) => state.productCreateAdmin );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { 
        loading : loadingProductCreateAdmin,
        success : successProductCreateAdmin,
        product : createdProduct,
        error   : errorProductCreateAdmin
    } = productCreateAdmin;

    // ==============================
    // USEEFFECT();
    // ==============================

    useEffect( () => {

        // make sure we reset the productCreateAdmin state; otherwise, our dependency
        // successProductCreateAdmin will always be true and we will not be able to go
        // back to the product list screen ( see the if else statement below )
        dispatch( { type : PRODUCT_CREATE_ADMIN_RESET } );
    
        // let's make sure the user is both logged in and is an admin before we dispatch the
        // productListActionCreator
        if ( !userInfo || !userInfo.isAdmin ) {

            // if the user is not logged in and / or the user is not an admin then
            // let's redirect the user to the login screen
            history.push( '/login' );

        } // end of if statement
        
        // if successProductCreateAdmin is true then let's push the user to the product edit
        // screen
        if ( successProductCreateAdmin ) {

            history.push( `/admin/product/${ createdProduct._id }/edit` );
    
        } else {

            // we don't need to pass in a keyword as an argument since this is an admin screen
            // so instead let's pass in an empty string as the first argument to the
            // productListActionCreator

            // add pageNumber as an argument to the productListActionCreator and as a dependency
            // below

            // dispatch the productListActionCreator
            dispatch( productListActionCreator( '', pageNumber ) );

        } // end of if else statement

    // here we are passing in successProductDeleteAdmin as a dependency to the useEffect(); hook
    // because if successProductDeleteAdmin changes then we want useEffect to run again and
    // thereby call the productListActionCreator(), which will then update the product list

    }, [ 
        dispatch,
        history,
        createdProduct._id,
        successProductCreateAdmin,
        successProductDeleteAdmin,
        userInfo,
        pageNumber
    ] ); // end of useEffect

    // ==============================
    // handleCreateProduct function
    // ==============================

    const handleCreateProduct = () => {

        // let's make sure the user is both logged in and is an admin before we dispatch the
        // productListActionCreator
        if ( userInfo && userInfo.isAdmin ) {

            // dispatch our action creator
            dispatch( productCreateAdminActionCreator() );

        } else {

            // and if the user is not logged in and / or the user is not an admin then
            // let's redirect the user to the login screen
            history.push( '/login' );

        } // end of if else statement

    } // end of handleCreateProduct


    // before moving on to the main block of code, check loading and error
    return (

        // create the screen and provide a top level div for react
        <div className="admin-product-list-screen">

            { /*  create product button  */ }
            <div className="admin-product-list-screen--create-product-button-container">
                <button
                    className="admin-product-list-screen--create-product-button-container--button"
                    onClick={ handleCreateProduct }
                >
                    <i 
                    className="fas fa-plus admin-product-list-screen--create-product-button-container--fa-plus"
                    >
                    </i>&nbsp;&nbsp;Create Product
                </button>
            </div>

            <h1 className="admin-product-list-screen--title">Products</h1>

            {

                loadingProductList ? (

                    <Spinner />
        
                ) : loadingProductDeleteAdmin ? (
                
                    <Spinner />

                ) : loadingProductCreateAdmin ? (

                    <Spinner />

                ) : errorProductList ? (
        
                    <ErrorMessage>{ errorProductList }</ErrorMessage>
        
                ) : errorProductDeleteAdmin ? (
        
                    <ErrorMessage>{ errorProductDeleteAdmin }</ErrorMessage>

                ) : errorProductCreateAdmin ? (

                    <ErrorMessage>{ errorProductCreateAdmin }</ErrorMessage>

                ) : products.length === 0 ? (
        
                    <ErrorMessage>There are no products in the database</ErrorMessage>

                ) : (

                    <Fragment>

                        <div className="admin-product-list-screen--main">
            
                            { /* row 1 - header */ }
                            <div className="admin-product-list-screen--main--header">

                                <div className="admin-product-list-screen--main--header--id">
                                    <span>ID</span>
                                </div>

                                <div className="admin-product-list-screen--main--header--name">
                                    <span>Name</span>
                                </div>

                                <div className="admin-product-list-screen--main--header--price">
                                    <span>Price</span>
                                </div>

                                <div className="admin-product-list-screen--main--header--category">
                                    <span>Category</span>
                                </div>

                                <div className="admin-product-list-screen--main--header--brand">
                                    <span>Brand</span>
                                </div>

                                <div className="admin-product-list-screen--main--header--edit">
                                    <span>Edit</span>
                                </div>

                                <div className="admin-product-list-screen--main--header--delete">
                                    <span>Delete</span>
                                </div>

                            </div>

                            { /* row 2 + - list of products */ }
                            <div className="admin-product-list-screen--main--list-items">

                                {             
                                    products.map( ( product ) => (

                                        <AdminProductListItem
                                            key={ product._id }
                                            product={ product }
                                        />

                                    ) )
                                }

                            </div>

                        </div>

                        <Pagination
                            page={ page }
                            pages={ pages }
                            isAdmin={ true }
                        />

                    </Fragment>

                )

            }
        
        </div> // end of admin-product-list-screen div or container div

    );

} // end of AdminProductListScreen


export default AdminProductListScreen;


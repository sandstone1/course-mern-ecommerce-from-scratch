
/*
import React from 'react';
// import in the useDispatch(); hook
import { useDispatch } from 'react-redux';
// import in the Link component
import { Link } from 'react-router-dom';
// import in our action creator
// import { productDeleteAdminActionCreator } from '../../redux/actions/product.actions';

import './admin-product-list-item.styles.scss';


// 1 -
// coming from the admin-product-list-screen.component.jsx 2 - file

// import in our action creator
import { productDeleteAdminActionCreator } from '../../redux/actions/product.actions';

// End of 1 -


const AdminProductListItem = ( { product } ) => {

    // ==============================
    // Destructure product
    // ==============================

    // destructure " _id ", " name ", " price ", " category " and " brand " off of product
    const { _id, name, price, category, brand } = product;

    // ==============================
    // Component State
    // ==============================

    // ==============================
    // USEDISPATCH();
    // ==============================

    // define dispatch
    const dispatch = useDispatch();

    // ==============================
    // handleDelete function
    // ==============================

    const handleProductDelete = ( _id ) => {

        // since we are deleting a product, let's create a confirm message and make the
        // admin user confirm that they want to delete the product, just to be safe
        if ( window.confirm( 'Are you sure you want to delete this product?' ) ) {


            // 1 - continued

            // if the admin user presses the Ok button and confirms the product delete message
            // then we will dispatch our action creator
            dispatch( productDeleteAdminActionCreator( _id ) );

            // and if we go to the admin product list screen and test this out by deleting
            // one of the listed products, we see that everything is working as expected

            // End of 1 -


        }

    } // end of handleProductDelete

    return (

        <div className="admin-product-list-item">

            { /* column 1  - id */ /* }
            <div className="admin-product-list-item--id">{ _id }</div>

            { /* column 2 - name */ /* }
            <div className="admin-product-list-item--name">{ name }</div>

            { /* column 3 - price */ /* }
            <div className="admin-product-list-item--price">${ price }</div>

            { /* column 4 - category */ /* }
            <div className="admin-product-list-item--category">{ category }</div>

            { /* column 5 - brand */ /* }
            <div className="admin-product-list-item--brand">{ brand }</div>

            { /* column 6 - edit product */ /* }
            <div className="admin-product-list-item--edit">

                <Link to={ `/admin/product/${ _id }/edit` }>
                    Edit
                </Link>

            </div>

            { /* column 7 - delete product  */ /* }
            <div className="admin-product-list-item--delete">

                <i 
                    className="fas fa-trash admin-product-list-item--delete--fa-trash"
                    onClick={ () => handleProductDelete( _id ) }
                >
                </i>

            </div>

        </div>

    );

}


export default AdminProductListItem;
*/






















// ===============================























// at the beginning of lecture 76, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React from 'react';
// import in the useDispatch(); hook
import { useDispatch } from 'react-redux';
// import in the Link component
import { Link } from 'react-router-dom';
// import in our action creator
import { productDeleteAdminActionCreator } from '../../redux/actions/product.actions';

import './admin-product-list-item.styles.scss';


const AdminProductListItem = ( { product } ) => {

    // ==============================
    // Destructure product
    // ==============================

    // destructure " _id ", " name ", " price ", " category " and " brand " off of product
    const { _id, name, price, category, brand } = product;

    // ==============================
    // Component State
    // ==============================

    // ==============================
    // USEDISPATCH();
    // ==============================

    // define dispatch
    const dispatch = useDispatch();

    // ==============================
    // handleDelete function
    // ==============================

    const handleProductDelete = ( _id ) => {

        // since we are deleting a product, let's create a confirm message and make the
        // admin user confirm that they want to delete the product, just to be safe
        if ( window.confirm( 'Are you sure you want to delete this product?' ) ) {

            // if the admin user presses the Ok button and confirms the product delete
            // then we will dispatch our action creator
            dispatch( productDeleteAdminActionCreator( _id ) );

        }

    } // end of handleProductDelete

    // ==============================
    // Transform price
    // ==============================

    // Step 1
    // add decimals and commas to the price
    const addDecimals = ( number ) => {
        return ( Math.round( number * 100 ) / 100 ).toFixed( 2 ) 
    }

    // Step 2
    // add 2 decimal places
    const priceWithTwoDecimals = addDecimals( price );

    // Step 3
    // convert the priceWithTwoDecimals to a string for display purposes and add commas
    function numberWithCommas( x ) {
        return x.toString().replace( /\B(?=(\d{3})+(?!\d))/g, "," );
    }

    // Step 4
    // remember priceWithTwoDecimalsAndCommas is a string
    const priceWithTwoDecimalsAndCommas = numberWithCommas( priceWithTwoDecimals );


    return (

        <div className="admin-product-list-item">

            { /* column 1  - id */ }
            <div className="admin-product-list-item--id">{ _id }</div>

            { /* column 2 - name */ }
            <div className="admin-product-list-item--name">{ name }</div>

            { /* column 3 - price */ }
            <div className="admin-product-list-item--price">${ priceWithTwoDecimalsAndCommas }</div>

            { /* column 4 - category */ }
            <div className="admin-product-list-item--category">{ category }</div>

            { /* column 5 - brand */ }
            <div className="admin-product-list-item--brand">{ brand }</div>

            { /* column 6 - edit product */ }
            <div className="admin-product-list-item--edit">

                <Link to={ `/admin/product/${ _id }/edit` }>
                    Edit
                </Link>

            </div>

            { /* column 7 - delete product  */ }
            <div className="admin-product-list-item--delete">

                <i 
                    className="fas fa-trash admin-product-list-item--delete--fa-trash"
                    onClick={ () => handleProductDelete( _id ) }
                >
                </i>

            </div>

        </div>

    );

}


export default AdminProductListItem;


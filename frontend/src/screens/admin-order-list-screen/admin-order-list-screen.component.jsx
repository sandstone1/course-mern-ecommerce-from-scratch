
/*
// 1 -
// coming from store.js 25 -

import React, { useEffect } from 'react';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in our action creators
import { 
    orderListAdminActionCreator
} from '../../redux/actions/order.actions';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';
// import in the AdminProductListItem component
import AdminOrderListItem from '../../components/admin-order-list-item/admin-order-list-item.component';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner.component';

import './admin-order-list-screen.styles.scss';


const AdminOrderListScreen = ( { history } ) => {

    // ==============================
    // Component State
    // ==============================

    // ==============================
    // DISPATCH & USESELECTOR();
    // ==============================

    // define dispatch
    const dispatch = useDispatch();

    // ==============================
    // orderListAdmin State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const orderListAdmin = useSelector( ( state ) => state.orderListAdmin );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output
    const { loading, orders, error } = orderListAdmin;

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
    // USEEFFECT();
    // ==============================

    useEffect( () => {

        // let's make sure the user is both logged in and is an admin before we dispatch the
        // orderListAdminActionCreator
        if ( userInfo && userInfo.isAdmin ) {

            // dispatch the orderListAdminActionCreator
            dispatch( orderListAdminActionCreator() );

        } else {

            // and if the user is not logged in and / or the user is not an admin then
            // let's redirect the user to the login screen
            history.push( '/login' );

        } // end of if else statement

    }, [ dispatch, history, userInfo ] ); // end of useEffect


    // before moving on to the main block of code, check loading and error
    return (

        loading ? (

            <Spinner />

        ) : error ? (

            <ErrorMessage>{ error }</ErrorMessage>

        ) : (

            // create the screen and provide a top level div for react
            <div className="admin-order-list-screen">

                <h1 className="admin-order-list-screen--title">Orders</h1>

                {

                    orders.length === 0 ? (
                                
                        <div className="admin-order-list-screen--message">
                            There are no orders
                        </div>

                    ) : (
    
                        <div className="admin-order-list-screen--main">
            
                            { /* row 1 - header */ /* }
                            <div className="admin-order-list-screen--main--header">

                                <div className="admin-order-list-screen--main--header--id">
                                    <span>ID</span>
                                </div>

                                <div className="admin-order-list-screen--main--header--user">
                                    <span>User</span>
                                </div>

                                <div className="admin-order-list-screen--main--header--date">
                                    <span>Order</span>
                                </div>

                                <div className="admin-order-list-screen--main--header--total">
                                    <span>Total</span>
                                </div>

                                <div className="admin-order-list-screen--main--header--paid">
                                    <span>Paid</span>
                                </div>

                                <div className="admin-order-list-screen--main--header--delivered">
                                    <span>Delivered</span>
                                </div>

                            </div>

                            { /* row 2 + - list of orders */ /* }
                            <div className="admin-order-list-screen--main--list-items">

                                {
                                    orders.map( ( order ) => (

                                        <AdminOrderListItem
                                            key={ order._id }
                                            order={ order }
                                        />

                                    ) )
                                }

                            </div>

                        </div>

                    )

                }
    
            </div> // end of admin-order-list-screen

        )

    );

} // end of AdminOrderListScreen


export default AdminOrderListScreen;


// and now let's go to the App.js 16 - file

// and now let's go to the admin-order-list-item.component.jsx 1 - file

// End of 1 -
*/






















// ===============================























// at the beginning of lecture 82, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React, { useEffect } from 'react';
// import in the useDispatch(); hook and the useSelector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in our action creators
import { 
    orderListAdminActionCreator
} from '../../redux/actions/order.actions';
// import in the ErrorMessage component
import ErrorMessage from '../../components/message/error-message.component';
// import in the AdminProductListItem component
import AdminOrderListItem from '../../components/admin-order-list-item/admin-order-list-item.component';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner.component';

import './admin-order-list-screen.styles.scss';


const AdminOrderListScreen = ( { history } ) => {

    // ==============================
    // Component State
    // ==============================

    // ==============================
    // DISPATCH & USESELECTOR();
    // ==============================

    // define dispatch
    const dispatch = useDispatch();

    // ==============================
    // orderListAdmin State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const orderListAdmin = useSelector( ( state ) => state.orderListAdmin );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output
    const { loading, orders, error } = orderListAdmin;

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
    // USEEFFECT();
    // ==============================

    useEffect( () => {

        // let's make sure the user is both logged in and is an admin before we dispatch the
        // orderListAdminActionCreator
        if ( userInfo && userInfo.isAdmin ) {

            // dispatch the orderListAdminActionCreator
            dispatch( orderListAdminActionCreator() );

        } else {

            // and if the user is not logged in and / or the user is not an admin then
            // let's redirect the user to the login screen
            history.push( '/login' );

        } // end of if else statement

    }, [ dispatch, history, userInfo ] ); // end of useEffect


    // before moving on to the main block of code, check loading and error
    return (

        loading ? (

            <Spinner />

        ) : error ? (

            <ErrorMessage>{ error }</ErrorMessage>

        ) : (

            // create the screen and provide a top level div for react
            <div className="admin-order-list-screen">

                <h1 className="admin-order-list-screen--title">Orders</h1>

                {

                    orders.length === 0 ? (
                                
                        <div className="admin-order-list-screen--message">
                            There are no orders
                        </div>

                    ) : (
    
                        <div className="admin-order-list-screen--main">
            
                            { /* row 1 - header */ }
                            <div className="admin-order-list-screen--main--header">

                                <div className="admin-order-list-screen--main--header--id">
                                    <span>ID</span>
                                </div>

                                <div className="admin-order-list-screen--main--header--user">
                                    <span>User</span>
                                </div>

                                <div className="admin-order-list-screen--main--header--date">
                                    <span>Order</span>
                                </div>

                                <div className="admin-order-list-screen--main--header--total">
                                    <span>Total</span>
                                </div>

                                <div className="admin-order-list-screen--main--header--paid">
                                    <span>Paid</span>
                                </div>

                                <div className="admin-order-list-screen--main--header--delivered">
                                    <span>Delivered</span>
                                </div>

                            </div>

                            { /* row 2 + - list of orders */ }
                            <div className="admin-order-list-screen--main--list-items">

                                {
                                    orders.map( ( order ) => (

                                        <AdminOrderListItem
                                            key={ order._id }
                                            order={ order }
                                        />

                                    ) )
                                }

                            </div>

                        </div>

                    )

                }
    
            </div> // end of admin-order-list-screen

        )

    );

} // end of AdminOrderListScreen


export default AdminOrderListScreen;


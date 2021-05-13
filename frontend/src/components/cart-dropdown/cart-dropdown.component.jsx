
/*
import React from 'react';

import './cart-dropdown.styles.scss';


// 1 -
// coming from the cart-icon.component.jsx 1 - file

// import in the useDispatch(); hook and useSeclector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in the Link component
import { Link } from 'react-router-dom';
// import in the toggleCartActionCreator
import { toggleCartActionCreator } from '../../redux/actions/cart.actions';

// create a new folder called " cart-item " and then inside this folder let's create 2
// files: " cart-item.component.jsx " and " cart-item.styles.scss "
// import in the CartItem component
import CartItem from '../cart-item/cart-item.component';

// End of 1 -


const CartDropdown = ( { history } ) => {

    // 1 - continued
    // set dispatch equal to the useDispatch(); hook and then use dispatch to dispatch the
    // action creator inside the onClick event below
    const dispatch = useDispatch();

    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const cart = useSelector( ( state ) => state.cart );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { cartItems } = cart;

    // check and see how many items are in the cart and if the answer is 0 then disable the
    // checkout button

    // remember we had to use " JSON.parse( currentElement.quantity ) " below in order to
    // turn " currentElement.quantity " from a string to a number
    const cartItemsCount = cartItems.reduce( ( accumlator, currentElement ) =>
        accumlator + JSON.parse( currentElement.quantity ),
        0
    );

    // cartItemsCount is correct and I'm able to toggle the CartDropdown component so
    // everything is working as expected

    // End of 1 -

    return (
    
        <div className="cart-dropdown">

            <div className="cart-dropdown--cart-items">

                {
                    cartItems.length > 0 ? (

                        cartItems.map( ( cartItem ) => (

                            <CartItem
                                key ={ cartItem.product }
                                item={ cartItem }
                            />

                        ) )

                    ) : (

                        <div className="cart-dropdown--cart-items--empty-message">
                            Your cart is empty
                        </div>

                    )
                }

            </div>

            <div className="cart-dropdown--btn-container">
                        
                <Link
                    to={ '/checkout' }
                    className=
                    {
                        cartItemsCount > 0 ?
                        'cart-dropdown--btn-container--btn' :
                        'cart-dropdown--btn-container--btn-disable'
                    }
                    onClick={ () => dispatch( toggleCartActionCreator() ) }
                >
                    Go To Checkout
                </Link>

            </div>

        </div>

    );

}


export default CartDropdown;
*/



















// ===============================






















// at the beginning of lecture 33, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React from 'react';
// import in the useDispatch(); hook and useSeclector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in the Link component
import { Link } from 'react-router-dom';
// import in the toggleCartActionCreator
import { toggleCartActionCreator } from '../../redux/actions/cart.actions';
// import in the CartItem component
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';


const CartDropdown = ( { history } ) => {

    // set dispatch equal to the useDispatch(); hook and then use dispatch to dispatch the
    // action creator inside the onClick event below
    const dispatch = useDispatch();

    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const cart = useSelector( ( state ) => state.cart );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { cartItems } = cart;

    // check and see how many items are in the cart and if the answer is 0 then disable the
    // checkout button

    // remember we had to use " JSON.parse( currentElement.quantity ) " below in order to
    // turn " currentElement.quantity " from a string to a number
    const cartItemsCount = cartItems.reduce( ( accumlator, currentElement ) =>
        accumlator + JSON.parse( currentElement.quantity ),
        0
    );


    return (
    
        <div className="cart-dropdown">

            <div className="cart-dropdown--cart-items">

                {
                    cartItems.length > 0 ? (

                        cartItems.map( ( cartItem ) => (

                            <CartItem
                                key ={ cartItem.product }
                                item={ cartItem }
                            />

                        ) )

                    ) : (

                        <div className="cart-dropdown--cart-items--empty-message">
                            Your cart is empty
                        </div>

                    )
                }

            </div>

            <div className="cart-dropdown--btn-container">
                        
                <Link
                    to={ '/checkout' }
                    className=
                    {
                        cartItemsCount > 0 ?
                        'cart-dropdown--btn-container--btn' :
                        'cart-dropdown--btn-container--btn-disable'
                    }
                    onClick={ () => dispatch( toggleCartActionCreator() ) }
                >
                    Go To Checkout
                </Link>

            </div>

        </div>

    );

}


export default CartDropdown;


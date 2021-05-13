
/*
// import in react
import React from 'react';

import './cart-icon.styles.scss';


// 1 -
// coming from the nav-bar.component.jsx 1 - file

// import in the useDispatch(); hook and useSeclector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in the toggleCartActionCreator
import { toggleCartActionCreator } from '../../redux/actions/cart.actions';
// import in our shopping icon
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

// the outline or fill for the shopping icon was black so I changed the fill inside the
// shopping-bag.svg file from " #010002 " to " #fff " or changed it from black to white

// End of 1 -


const CartIcon = () => {


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

    // remember we had to use " JSON.parse( currentElement.quantity ) " below in order to
    // turn " currentElement.quantity " from a string to a number

    // cartItems.reduce(); is working as expected and I'm able to toggle the cart or toggle
    // the state between " show : false " and " show : true "

    // now let's go to the cart-dropdown.component.jsx 1 - file

    // End of 1 -


    return (

        <div
            className="cart-icon"
            onClick={ () => dispatch( toggleCartActionCreator() ) }
        >

            <div className="cart-icon--icon">

                <ShoppingIcon />

            </div>

            <div className="cart-icon--item-count">
                {
                    cartItems.reduce( ( accumlator, currentElement ) =>
                        accumlator + JSON.parse( currentElement.quantity ),
                        0
                    ) 
                }
            </div>

        </div>

    );

}


export default CartIcon;
*/



















// ===============================






















// at the beginning of lecture 33, given all the notes, I created a new file below without
// the notes so we are starting fresh


// import in react
import React from 'react';
// import in the useDispatch(); hook and useSeclector(); hook
import { useDispatch, useSelector } from 'react-redux';
// import in the toggleCartActionCreator
import { toggleCartActionCreator } from '../../redux/actions/cart.actions';
// import in our shopping icon
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

// the outline or fill for the shopping icon was black so I changed the fill inside the
// shopping-bag.svg file from " #010002 " to " #fff " or changed it from black to white


const CartIcon = () => {

    // set dispatch equal to the useDispatch(); hook and then use dispatch to dispatch the
    // action creator inside the onClick event below
    const dispatch = useDispatch();

    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const cart = useSelector( ( state ) => state.cart );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { cartItems } = cart;

    // remember we had to use " JSON.parse( currentElement.quantity ) " below in order to
    // turn " currentElement.quantity " from a string to a number

    // cartItems.reduce(); is working as expected and I'm able to toggle the cart or toggle
    // the state between " show : false " and " show : true "

    return (

        <div
            className="cart-icon"
            onClick={ () => dispatch( toggleCartActionCreator() ) }
        >

            <div className="cart-icon--icon">

                <ShoppingIcon />

            </div>

            <div className="cart-icon--item-count">
                {
                    cartItems.reduce( ( accumlator, currentElement ) =>
                        accumlator + JSON.parse( currentElement.quantity ),
                        0
                    ) 
                }
            </div>

        </div>

    );

}


export default CartIcon;


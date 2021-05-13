
/*
import React, { useEffect } from 'react';


// 1 -
// let's import in the useEffect(); hook and we will use the useEffect(); hook to dispatch
// our add to cart action creator so as soon as we come to the cart screen and as long as there
// is a product id in the URL then we want to add the item to the cart

// import in the Link component
import { Link } from 'react-router-dom';
// import in the useDispatch and useSelector hooks
import { useDispatch, useSelector } from 'react-redux';
// import in our add to cart action creator
import { addToCartActionCreator } from '../../redux/actions/cart.actions';
// import in the Message component
import Message from '../../components/message/message.component';

import './cart-screen.styles.scss';

// End of 1 -



const CartScreen = ( { match, location, history } ) => {


    // 1 - continued
    // we need to get product id so let's add match as an argument above and then we will
    // need to add location as an argument above and location.search will allow us to get
    // the product quantity and we need to add history as an argument above and history will
    // allow us to redirect the user

    // get the product id
    const productId = match.params.id;

    // now let's get the product quantity and we can do that by using location.search and
    // if we console log out " location.search " then go to the product details page and select
    // a quantity of 1 and then press the Add To Cart button we will then get the following
    // result in the console: " ?quantity=1 "

    // and this is correct so everything is working as expected

    // so let's first check to make sure location.search is there and if it is then we want
    // to get the number from " ?quantity=1 " and to do that we can use the split() method
    // and from w3schools: " The split() method is used to split a string into an array of
    // substrings, and returns the new array. " and the syntax is
    // " string.split(separator, limit) " so let's split the string at the = sign and then
    // use " [ 1 ] " to get the second part of the array which is in this case is the quantity
    // number which is what we want

    // if location.search does not exist then we will just return 1 which is the default
    // value
    
    // and remember that " location.search.split( '=' )[ 1 ] " will give us the quantity number
    // but the result will not be in a number data type so let's wrap
    // " location.search.split( '=' )[ 1 ] " in " Number() " or
    // " Number( location.search.split( '=' )[ 1 ] ) " and now the quantity number will be in
    // a number data type 

    const quantity = location.search ? Number( location.search.split( '=' )[ 1 ] ) : 1;

    // next, we want to define our dispatch
    // set dispatch equal to the useDispatch(); hook and then use dispatch to dispatch the
    // action creator inside the useEffect(); hook
    const dispatch = useDispatch();

    // End of 1 -


    // 2 -
    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const cart = useSelector( ( state ) => state.cart );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output
    const { cartItems } = cart;

    // and remember cartItems is an array of 0 objects, 1 object or 2 or more objects and we
    // can map through cartItems to get cartItem and from cartItem we can destructure off
    // the product, name, image, price, count and quantity and then display the corresponding
    // values in the cartItem component

    // and if we do console.log( cartItems ); we see the following result in the console:

    /*
        (2) [{…}, {…}]
            0 : { product: "5ff504545a6a66457f0b0709", name: "Cannon EOS 80D DSLR Camera",
            image: "/images/camera.jpg", price: 929.99, count: 5, … }
            1 : { product: "5ff504545a6a66457f0b0708", name: "iPhone 11 Pro 256GB Memory",
            image: "/images/phone.jpg", price: 599.99, count: 7, … }
            length : 2
            __proto__ : Array(0)
    */

    // so we see the 2 items that make up cartItems and this is correct so everything is
    // working as expected

    // so in the next video we will display our cart items on the cart screen 

    // End of 2 -


    // 1 - continued

    // dispatch our action creator
    /*
    useEffect( () => {

        // and remember that we could not pull the id and quantity off of the useSelector();
        // hook because we have not yet dispatched the action creator so we haven't yet set
        // in motion the chain of events that occur that allow us to pull off pieces of the
        // state from the
        // useSelector(); hook ( i.e. after we dispatch the action creator, the action creator
        // will send the reducer actions and those actions will update the reducer and thereby
        // update the state and then we can use the useSelector(); hook to grab the state and
        // then return the part of the state that we want and from there we can use
        // destructuring to pull off the pieces of the state that we want )

        // and remember let's first check to make sure that there is a product id in the URL
        // and if so then let's dispatch our action creator
        if ( productId ) { 

            dispatch( addToCartActionCreator( productId, quantity ) );

        } else {

            // and if there is not a product id in the URL then let's 

        }

        // below we want the useEffect(); hook to fire whenever dispatch fires or whenever
        // the productId or quantity changes

    }, [ dispatch, productId, quantity ] );

    // let's test this out by going to the product screen and selecting the quantity 3 for the
    // Cannon camera and then pressing the Add To Cart button and the result in the state tab
    // inside the redux dev tools is:

    /*
        productList (pin) : { product : [] }
        productGet (pin) : { product : { ... }, loading : false }
        cart (pin) :
            cartItems (pin) :
                0 (pin) :
                    product (pin)  : "5ff504545a6a66457f0b0709"
                    name (pin)     : "Cannon EOS 80D DSLR Camera"
                    image (pin)    : "/images/camera.jpg"
                    price (pin)    : 929.99
                    count (pin)    : 5
                    quantity (pin) : 3
    */

    // and this is correct so everything is working as expected

    // and if we add another item to the cart like the iPhone 11 and then select a quantity of
    // 2 for the iPhone 11 and then press the Add To Cart button and the result in the state tab
    // inside the redux dev tools is:

    /*
        productList (pin) : { product : [ ... ], loading : false }
        productGet (pin) : { product : { ... }, loading : false }
        cart (pin) :
            cartItems (pin) : [ { ... }, { ... } ]
                0 (pin) :
                    product (pin)  : "5ff504545a6a66457f0b0709"
                    name (pin)     : "Cannon EOS 80D DSLR Camera"
                    image (pin)    : "/images/camera.jpg"
                    price (pin)    : 929.99
                    count (pin)    : 5
                    quantity (pin) : 3
                1 (pin) :
                    product (pin)  : "5ff504545a6a66457f0b0708"
                    name (pin)     : "iPhone 11 Pro 256GB Memory"
                    image (pin)    : "/images/phone.jpg"
                    price (pin)    : 599.99
                    count (pin)    : 7
                    quantity (pin) : 2
    */

    // and this is correct so everything is working as expected

    // now if I change the quantity for the Cannon Camera to 5 then the result in the state
    // tab inside the redux dev tools is:

    /*
        productList (pin) : { product : [ ... ], loading : false }
        productGet (pin) : { product : { ... }, loading : false }
        cart (pin) :
            cartItems (pin) : [ { ... }, { ... } ]
                0 (pin) :
                    product (pin)  : "5ff504545a6a66457f0b0709"
                    name (pin)     : "Cannon EOS 80D DSLR Camera"
                    image (pin)    : "/images/camera.jpg"
                    price (pin)    : 929.99
                    count (pin)    : 5
                    quantity (pin) : 5
                1 (pin) :
                    product (pin)  : "5ff504545a6a66457f0b0708"
                    name (pin)     : "iPhone 11 Pro 256GB Memory"
                    image (pin)    : "/images/phone.jpg"
                    price (pin)    : 599.99
                    count (pin)    : 7
                    quantity (pin) : 2
    */

    // and this is correct so everything is working as expected

    // and if we go to the Application tab and then go to the Local Storage tab and then go
    // to the URL or http://localhost:3008 and then press on that URL then we see what is saved
    // in local storage or:

    /*
        Key                 Value
        cartItems	        [{"product":"5 ...

        [,…]
            0: {product: "5ff504545a6a66457f0b0709", name: "Cannon EOS 80D DSLR Camera",
            image: "/images/camera.jpg",…}
            count    : 5
            image    : "/images/camera.jpg"
            name     : "Cannon EOS 80D DSLR Camera"
            price    : 929.99
            product  : "5ff504545a6a66457f0b0709"
            quantity : 5
            1: {product: "5ff504545a6a66457f0b0708", name: "iPhone 11 Pro 256GB Memory",
            image: "/images/phone.jpg",…}
            count    : 7
            image    : "/images/phone.jpg"
            name     : "iPhone 11 Pro 256GB Memory"
            price    : 599.99
            product  : "5ff504545a6a66457f0b0708"
            quantity : 2
    */

    // and this is correct so everything is working as expected

    // next, we want to get the cart items and put those items in our cart and to do that
    // let's use the useSelector(); hook and let's go 2 - above

    // End of 1 -

    /*
    return (

        <div>

            Cart

        </div>

    );

}


export default CartScreen;
*/





















// ===============================




















/*
// at the beginning of lecture 34, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React, { useEffect } from 'react';
// import in the Link component
import { Link } from 'react-router-dom';
// import in the useDispatch and useSelector hooks
import { useDispatch, useSelector } from 'react-redux';
// import in our add to cart action creator
import { addToCartActionCreator } from '../../redux/actions/cart.actions';

import './cart-screen.styles.scss';


// 3 -
import CartItem from '../../components/cart-item/cart-item.component';

// End of 3 -


const CartScreen = ( { match, location, history } ) => {

    // get the product id
    const productId = match.params.id;

    // get the product quantity by using location.search and then use the split() method to
    // get the quantity number and then use Number() to convert the quantity to a number data
    // type 
    const quantity = location.search ? Number( location.search.split( '=' )[ 1 ] ) : 1;

    // set dispatch equal to the useDispatch(); hook and then use dispatch to dispatch the
    // action creator inside the useEffect(); hook
    const dispatch = useDispatch();

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const cart = useSelector( ( state ) => state.cart );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output
    const { cartItems } = cart;

    // dispatch our action creator
    useEffect( () => {

        // and remember that we could not pull the id and quantity off of the useSelector();
        // hook because we have not yet dispatched the action creator so we haven't yet set
        // in motion the chain of events that occur that allow us to pull off pieces of the
        // state from the useSelector(); hook

        // and remember let's first check to make sure that there is a product id in the URL
        // and if so then let's dispatch our action creator
        if ( productId ) { 

            dispatch( addToCartActionCreator( productId, quantity ) );

        }

        // below we want the useEffect(); hook to fire whenever dispatch fires or whenever
        // the productId or quantity changes

    }, [ dispatch, productId, quantity ] );


    // 3 -
    // let's delete " <div>Cart</div> " below and then add some of the code from the
    // checkout.component.jsx file from the Complete React Developer in 2019 course and remember
    // to import in the CartItem component so we can use it below

    // if the cart is empty then then show a message otherwise show the header, the cart item(s)
    // and the subtotal

    // remember to map through the cartItems array and then display every cart item on the page

    // next, let's create the subtotal box on the right and this box will be in column 2 and this
    // box will contain the subtotal of all the cart items and the total number of cart items and
    // this box will contain a proceed to checkout button

    // get the number of cart items using the reduce(); method and then show the result in
    // the output below
    const cartItemsCount = 
        cartItems.reduce( ( accumlator, currentElement ) =>
            accumlator + currentElement.quantity,
            0
        );

    // get the dollar subtotal for all the items in the cart and again we will use the
    // reduce(); method and then show the result in the output below

    // remember to add toFixed( 2 ); to the end of the reduce() method so that each result will
    // display the subtotal plus 2 decimals
    const cartItemsSubtotal =
        cartItems.reduce( ( accumlator, currentElement ) =>
            accumlator + currentElement.quantity * currentElement.price,
            0
        ).toFixed( 2 );

    // next, add a button element and then add an onClick event to the button and inside the
    // checkout handler let's redirect the user to the login page unless there is a query string
    // of redirect set to shipping

    // and remember we will utilize " history.push( '/login?redirect=shipping' ); " later on
    // and what we will do is if the user is not logged in then we will redirect the user
    // to the login page otherwise if the user is logged in then we will redirect the user to
    // shipping
    const checkoutHandler = () => {

        history.push( '/login?redirect=shipping' );

    }

    // and if we click on the Proceed to Checkout button we are taken to the following URL:
    // " http://localhost:3008/login?redirect=shipping "

    // and this is correct so everything is working as expected

    // and in the next video we will work on the functionality to remove items from the cart
    // and when we remove an item from the cart we want to remove the item from both the
    // state and the local storage

    // End of 3 -


    return (

        <div className="cart-screen">

            <h1 className="cart-screen--h1">Shopping Cart</h1>

            {
                cartItems.length === 0 ? (
                            
                    <div className="cart-screen--message">
                        <div>
                            Your cart is empty
                        </div>
                        <div>
                            <Link to="/">Click here to go back to the home page</Link>
                        </div>
                    </div>
                
                ) : (

                    <div className="cart-screen--main">

                        <div className="cart-screen--main--col-1">

                            { /* column 1 row 1 */ /* }
                            <div className="cart-screen--main--col-1--header">

                                <div className="cart-screen--main--col-1--header-block">
                                    <span>Image</span>
                                </div>

                                <div className="cart-screen--main--col-1--header-block">
                                    <span>Name</span>
                                </div>

                                <div className="cart-screen--main--col-1--header-block">
                                    <span>Price</span>
                                </div>

                                <div className="cart-screen--main--col-1--header-block">
                                    <span>Quantity</span>
                                </div>

                                <div className="cart-screen--main--col-1--header-block">
                                    <span>Remove</span>
                                </div>

                            </div>

                            { /* column 1 row 2 + */ /* }
                            <div className="cart-screen--main--col-1--cart-items">

                                {                            
                                    cartItems.map( ( cartItem ) => (

                                        <CartItem
                                            key={ cartItem.product }
                                            cartItem={ cartItem }
                                        />

                                    ) )
                                }

                            </div>

                        </div>

                        <div className="cart-screen--main--col-2">

                            { /* column 2 */ /* }
                            <div className="cart-screen--main--col-2--subtotal">

                                <span className="cart-screen--main--col-2--subtotal--description">
                                    Subtotal: ${ cartItemsSubtotal } for { cartItemsCount } items 
                                </span>

                                { /* proceed to checkout button */ /* }
                                <button
                                    type="button"
                                    className=
                                    {
                                        cartItems.length > 0 ?
                                        'cart-screen--main--col-2--subtotal--btn--active' :
                                        'cart-screen--main--col-2--subtotal--btn--disable'
                                    }
                                    onClick={ checkoutHandler }
                                >
                                    Proceed to Checkout
                                </button>

                            </div>

                        </div>

                    </div>

                )

            }

        </div>

    );

}


export default CartScreen;
*/



















// ===============================























// at the beginning of lecture 35, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React, { useEffect } from 'react';
// import in the Link component
import { Link } from 'react-router-dom';
// import in the useDispatch and useSelector hooks
import { useDispatch, useSelector } from 'react-redux';
// import in our add to cart action creator
import { addToCartActionCreator } from '../../redux/actions/cart.actions';
// import in our CartItem component
import CartItem from '../../components/cart-item/cart-item.component';
// import in the CartSummary component
import CartScreenSummary from '../../components/cart-screen-summary/cart-screen-summary.component';

import './cart-screen.styles.scss';


const CartScreen = ( { match, location, history } ) => {

    // ==============================
    // Match.Params.Id
    // ==============================

    // get the product id
    const productId = match.params.id;

    // ==============================
    // Location.search
    // ==============================

    // get the product quantity by using location.search and then use the split() method to
    // get the quantity number and then use Number() to convert the quantity to a number data
    // type 
    const quantity = location.search ? Number( location.search.split( '=' )[ 1 ] ) : 1;

    // ==============================
    // USEDISPATCH();
    // ==============================

    // set dispatch equal to the useDispatch(); hook and then use dispatch to dispatch the
    // action creator inside the useEffect(); hook
    const dispatch = useDispatch();

    // ==============================
    // cart State
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useSelector(); hook to grab the state and then return the part of the state that
    // we want
    const cart = useSelector( ( state ) => state.cart );

    // and then we can use destructuring to pull off the pieces of the state that we want and
    // then use those pieces of state in our output
    const { cartItems } = cart;

    // ==============================
    // USEEFFECT();
    // ==============================

    useEffect( () => {

        // and remember that we could not pull the id and quantity off of the useSelector();
        // hook because we have not yet dispatched the action creator so we haven't yet set
        // in motion the chain of events that occur that allow us to pull off pieces of the
        // state from the useSelector(); hook

        // and remember let's first check to make sure that there is a product id in the URL
        // and if so then let's dispatch our action creator
        if ( productId ) { 

            // dispatch our action creator
            dispatch( addToCartActionCreator( productId, quantity ) );

        }

        // below we want the useEffect(); hook to fire whenever dispatch fires or whenever
        // the productId or quantity changes

    }, [ dispatch, productId, quantity ] );

    // if the cart is empty then show a message otherwise show (1) the header, (2) the cart
    // items and (3) the subtotal box

    // map through the cartItems array and display the cart items

    return (

        cartItems.length === 0 ? (
                    
            <div className="cart-screen-message">
                <div>
                    Your cart is empty
                </div>
                <div>
                    <Link to="/">Click here to go back to the home page</Link>
                </div>
            </div>
        
        ) : (

            <div className="cart-screen">

                <div className="cart-screen--main">

                    <h1 className="cart-screen--main--title">Shopping Cart</h1>

                    <div className="cart-screen--main--cart">

                        { /* column 1 row 1 - header */ }
                        <div className="cart-screen--main--cart--header">

                            <div className="cart-screen--main--cart--header--image">
                                <span>Image</span>
                            </div>

                            <div className="cart-screen--main--cart--header--name">
                                <span>Name</span>
                            </div>

                            <div className="cart-screen--main--cart--header--price">
                                <span>Price</span>
                            </div>

                            <div className="cart-screen--main--cart--header--quantity">
                                <span>Quantity</span>
                            </div>

                            <div className="cart-screen--main--cart--header--delete">
                                <span>Delete</span>
                            </div>

                        </div>

                        { /* column 1 row 2 + - cart items */ }
                        <div className="cart-screen--main--cart--cart-items">

                            {                            
                                cartItems.map( ( cartItem ) => (

                                    <CartItem
                                        key={ cartItem.product }
                                        cartItem={ cartItem }
                                    />

                                ) )
                            }

                        </div>

                    </div>

                </div>

                { /* column 2 - cart summary */ }
                <CartScreenSummary history={ history } />

            </div>

        )

    );

}


export default CartScreen;


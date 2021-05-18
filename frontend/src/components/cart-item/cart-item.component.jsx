
/*
import React from 'react';

import './cart-item.styles.scss';


// 1 -
// import in the Link component
import { Link } from 'react-router-dom';
// import in the useDispatch hook
import { useDispatch } from 'react-redux';
// import in our add to cart action creator and remove from cart action creator
import { 
    addToCartActionCreator,
    // removeFromCartActionCreator
} from '../../redux/actions/cart.actions';

// End of 1 -


const CartItem = ( { cartItem } ) => {


    // 1 - continued
    // destructure " product ", " name ", " image ", " price " and " quantity " off of
    // cartItem
    const { product, name, image, price, count, quantity } = cartItem;

    // add a link back to the product within the product name span element

    // we want to be able to update the product quantity within the cart and then this
    // will update the state and thereby update the count and subtotal numbers inside the
    // subtotal div on the cart screen

    // and to update the count and subtotal numbers we need to change the select element
    // from:

    /*
        <select
            value={ quantity }
            onChange={ ( e ) => setQuantity( e.target.value ) }
            className="cart-item--quantity--select"
        >
    */

    // to:

    /*
        <select
            value={ quantity }
            onChange={ ( e ) => 
                dispatch( addToCartActionCreator( product, Number( e.target.value ) ) )
            }
            className="cart-item--quantity--select"
        >
    */

    // set dispatch equal to the useDispatch(); hook and then use dispatch to dispatch the
    // action creator inside the useEffect(); hook
    /*
    const dispatch = useDispatch();

    // next, let's add a trash can icon and then add an onClick event handler to the element
    // and upon the click event we will dispatch the " removeFromCartActionCreator " and this
    // action creator will remove the item from the cart and for now let's do the following:
    const removeFromCartActionCreator = ( id ) => {

        console.log( 'remove' );

    }

    // and now if we change the quantity for the Cannon camera on the cart screen from 5 to 4,
    // for example, we see the following in redux dev tools:

    /*
        productList (pin) : { product : [ ... ] }
        productGet (pin) : { product : { ... } }
        cart (pin) :
            cartItems (pin) : [ { ... } ]
                0 (pin) :
                    product (pin)  : "5ff504545a6a66457f0b0709"
                    name (pin)     : "Cannon EOS 80D DSLR Camera"
                    image (pin)    : "/images/camera.jpg"
                    price (pin)    : 929.99
                    count (pin)    : 5
                    quantity (pin) : 4
    */

    // and this is correct so everything is working as expected

    // End of 1 -


    /*
    return (
    
        <div className="cart-item">

            { /* column 1  - image */ /* }
            <img src={ image } className="cart-item--image" alt={ name } />

            { /* column 2 - name */ /* }
            <span className="cart-item--name">
                <Link to={ `/product/${ product }` }>{ name }</Link>
            </span>

            { /* column 3 - price */ /* }
            <span className="cart-item--price">${ price }</span>

            { /* column 4 - quantity */ /* }
            <div className="cart-item--quantity">

                { /* quanity select element */ /* }
                <select
                    value={ quantity }
                    onChange={ ( e ) => 
                        dispatch( addToCartActionCreator( product, Number( e.target.value ) ) )
                    }
                    className="cart-item--quantity--select"
                >

                    {
                        [ ...Array( count ).keys() ]
                            .map( 
                                ( i ) => (
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

            { /* column 5 - remove */ /* }
            <span 
                onClick={ () => dispatch( removeFromCartActionCreator( product ) ) }
                className="cart-item--remove">
                    <i className="fas fa-trash"></i>
            </span>

        </div>

    );

}


export default CartItem;
*/





















// ===============================























// at the beginning of lecture 34, given all the notes, I created a new file below without
// the notes so we are starting fresh

/*
import React from 'react';
// import in the Link component
import { Link } from 'react-router-dom';
// import in the useDispatch hook
import { useDispatch } from 'react-redux';
// import in our add to cart action creator and remove from cart action creator
import { 
    addToCartActionCreator,
    removeFromCartActionCreator
} from '../../redux/actions/cart.actions';

import './cart-item.styles.scss';


// 2 -
// import in the removeFromCartActionCreator above and then remove the
// removeFromCartActionCreator() function below

// End of 2 -


const CartItem = ( { cartItem } ) => {

    // destructure " product ", " name ", " image ", " price " and " quantity " off of
    // cartItem
    const { product, name, image, price, count, quantity } = cartItem;

    // we want to be able to update the product quantity within the cart and this will
    // update the state and thereby update the count and subtotal numbers inside the
    // subtotal box on the cart screen

    // set dispatch equal to the useDispatch(); hook and then use dispatch to dispatch the
    // action creator inside the useEffect(); hook
    const dispatch = useDispatch();

    // add a trash can icon and then add an onClick event handler to the element and upon
    // clicking the trash can we will dispatch the " removeFromCartActionCreator "
    
    // for now let's just do the following:
    /*
    const removeFromCartActionCreator = ( id ) => {

        console.log( 'remove' );

    }
    */

    /*
    return (
    
        <div className="cart-item">

            { /* column 1  - image */ /* }
            <img src={ image } className="cart-item--image" alt={ name } />

            { /* column 2 - name */ /* }
            <span className="cart-item--name">
                <Link to={ `/product/${ product }` }>{ name }</Link>
            </span>

            { /* column 3 - price */ /* }
            <span className="cart-item--price">${ price }</span>

            { /* column 4 - quantity */ /* }
            <div className="cart-item--quantity">

                { /* quanity select element */ /* }
                <select
                    value={ quantity }
                    onChange={ ( e ) => 
                        dispatch( addToCartActionCreator( product, Number( e.target.value ) ) )
                    }
                    className="cart-item--quantity--select"
                >

                    {
                        [ ...Array( count ).keys() ]
                            .map( 
                                ( i ) => (
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

            { /* column 5 - remove cart item */ /* }
            <span 
                onClick={ () => dispatch( removeFromCartActionCreator( product ) ) }
                className="cart-item--remove"
            >
                    <i className="fas fa-trash"></i>
            </span>

        </div>

    );

}


export default CartItem;
*/





















// ===============================























// at the beginning of lecture 34, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React from 'react';
// import in the Link component
import { Link } from 'react-router-dom';
// import in the useDispatch hook
import { useDispatch } from 'react-redux';
// import in our add to cart action creator and remove from cart action creator
import { 
    addToCartActionCreator,
    removeFromCartActionCreator
} from '../../redux/actions/cart.actions';

import './cart-item.styles.scss';


const CartItem = ( { cartItem } ) => {

    // destructure " product ", " name ", " image ", " price " and " quantity " off of
    // cartItem
    const { product, name, image, price, count, quantity } = cartItem;

    // we want to be able to update the product quantity within the cart and this will
    // update the state and thereby update the count and subtotal numbers inside the
    // subtotal box on the cart screen

    // set dispatch equal to the useDispatch(); hook and then use dispatch to dispatch the
    // action creator inside the useEffect(); hook
    const dispatch = useDispatch();

    // add a trash can icon and then add an onClick event handler to the element and upon
    // clicking the trash can we will dispatch the " removeFromCartActionCreator "

    return (
    
        <div className="cart-item">

            { /* column 1  - image */ }
            <img src={ image } className="cart-item--image" alt={ name } />

            { /* column 2 - name */ }
            <span className="cart-item--name">
                <Link to={ `/product/${ product }` }>{ name }</Link>
            </span>

            { /* column 3 - price */ }
            <span className="cart-item--price">${ price }</span>

            { /* column 4 - quantity */ }
            <div className="cart-item--quantity">

                { /* quanity select element */ }
                <select
                    value={ quantity }
                    onChange={ ( e ) => 
                        dispatch( addToCartActionCreator( product, Number( e.target.value ) ) )
                    }
                    className="cart-item--quantity--select"
                >

                    {
                        [ ...Array( count ).keys() ]
                            .map( 
                                ( i ) => (
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

                { /* <i className="fas fa-chevron-down cart-item--quantity--fa-chevron-down"></i> */ }

            </div>

            { /* column 5 - delete cart item */ }
            <span 
                onClick={ () => dispatch( removeFromCartActionCreator( product ) ) }
                className="cart-item--delete"
            >
                    <i className="fas fa-trash cart-item--delete--fa-trash"></i>
            </span>

        </div>

    );

}


export default CartItem;

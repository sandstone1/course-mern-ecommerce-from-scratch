
/*
// Cart action file with the toggleCartActionCreator();


// to turn on the cart dropdown functionality we need to turn on the code in this file,
// cart.constants.js file, cart.reducer.js file and the nav-bar.component.jsx file


// import in axios
import axios from 'axios'

// import in the cart constants and these constants represent our actions
import { 
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_TOGGLE,
    CART_CLEAR_ITEM
} from '../constants/cart.constants';


// Action Creator #1
// use redux thunk to make an asynchronous request with our action creator
export const toggleCartActionCreator = () => async ( dispatch ) => {

    // let's dispatch our action or " CART_TOGGLE "
    dispatch( {
        type : CART_TOGGLE
    } );

}


// 1 -

// Action Creator #2
// use redux thunk to make an asynchronous request with our action creator

// after dispatch below we need to pass in " getState " and getState allows us to get our
// entire state tree; for example, we could do getState.cart and this will give us access
// to the cart state
export const addToCartActionCreator = ( id, quantity ) => async ( dispatch, getState ) => {

        // create our endpoint
        const endpoint = `/api/products/${ id }`;

        // below we are making a GET request ( using axios ) to this endpoint
        // " /api/products/:id " and axios returns the response object and we can then
        // destructure the data object off of the response object and the data object
        // in this case is the individual product
        const { data } = await axios.get( endpoint );

        // let's dispatch our action or " CART_ADD_ITEM "
        // instead of getting all the products details we will just get 6 product details or
        // product id, product name, product image, product price, product count in stock
        // and product quantity in the cart and " qty " is coming from the argument above
        dispatch( {
            type    : CART_ADD_ITEM,
            payload : {
                product  : data._id,
                name     : data.name,
                image    : data.image,
                price    : data.price,
                count    : data.countInStock,
                quantity : quantity
            }
        } );
        
        // once we dispatched CART_ADD_ITEM we want to save the cartItems in local storage and
        // the syntax for localStorage is " localStorage.setItem( keyname, value ); " and let's
        // use " getState.cart.cartItems " to get the cartItems

        // from Andrew Mead's course ( I revised as needed ) :
        
        /*
        // " first, let's explore local storage
        // 1 - local storage is just a key value store
        // 2 - local storage will persist between page loads
        // 3 - local storage only works with string data

        // local storage method #1 - localStorage.setItem();
        // with localStorage.setItem(); we set a given item and setItem(); takes two arguments:
        // the key and the value and an example of this would be
        // " localStorage.setItem( 'name', 'Andrew' ); " and this will store a key value pair
        // in local storage and we can then fetch this data later on as needed

        // local storage method #2 - localStorge.getItem();
        // with localStorage.getItem(); we pass in the key and get value stored in local
        // storage and an example of this would be " localStorage.getItem( 'name' ); " and here
        // we pass in the key and get the value that stored in local storage or " Andrew " in
        // this case

        // local storage method #3 - localStorage.removeItem();
        // with localStorage.removeItem(); we pass in the key and thereby remove that key value pair
        // from local storage and an example of this would be localStorage.removeItem( 'name' );
        // and here we pass in the key and thereby remove that key value pair from local storage

        // and remember local storage only works with string data so we will use the JSON data
        // transfer format in local storage and remember that JSON is just a string representation
        // of a JavaScript object or a JavaScript array

        // and JSON.stringify takes a regular JavaScript object and coverts the object into
        // a string representation of the object whereas JSON.parse takes the string
        // representation of an object and coverts the string into a JavaScript object "
        */

        // remember to convert " getState.cart.cartItems " into a string
        /*
        localStorage.setItem( 'cartItems', JSON.stringify( getState().cart.cartItems ) );

        // and now we have saved a key value pair in local storage or " cartItems : cartItems "

}

// so we've saved our cart items to local storage but where do we get the cart items from local
// storage and then fill up the state and to do that let's go to the store.js 5 - file

// End of 1 -
*/




















// ===============================


















/*
// at the beginning of lecture 33, given all the notes, I created a new file below without
// the notes so we are starting fresh

// Cart action file with no toggleCartActionCreator();

// import in axios
import axios from 'axios'

// import in the cart constants and these constants represent our actions
import { 
    CART_ADD_ITEM,
    CART_REMOVE_ITEM
} from '../constants/cart.constants';


// Action Creator #1
// use redux thunk to make an asynchronous request with our action creator

// after dispatch below we need to pass in " getState " and getState allows us to get our
// entire state tree; for example, we could do getState.cart and this will give us access
// to the cart state
export const addToCartActionCreator = ( id, quantity ) => async ( dispatch, getState ) => {

        // create our endpoint
        const endpoint = `/api/products/${ id }`;

        // below we are making a GET request ( using axios ) to this endpoint
        // " /api/products/:id " and axios returns the response object and we can then
        // destructure the data object off of the response object and the data object
        // in this case is the individual product
        const { data } = await axios.get( endpoint );

        // let's dispatch our action or " CART_ADD_ITEM "
        // instead of getting all the products details we will just get 6 product details or
        // product id, product name, product image, product price, product count in stock
        // and product quantity and remember " quantity " is coming from the argument above
        dispatch( {
            type    : CART_ADD_ITEM,
            payload : {
                product  : data._id,
                name     : data.name,
                image    : data.image,
                price    : data.price,
                count    : data.countInStock,
                quantity : quantity
            }
        } );
        
        // once we dispatched CART_ADD_ITEM we want to save the cartItems to local storage but
        // first let's get the cartItems by using " getState().cart.cartItems " 

        // remember to convert " getState().cart.cartItems " into a string
        localStorage.setItem( 'cartItems', JSON.stringify( getState().cart.cartItems ) );

        // and now we have saved a key value pair in local storage or " cartItems : cartItems "

}


// 2 -
// Action Creator #2
// use redux thunk to make an asynchronous request with our action creator

// and we still need to pass in getState after passing in dispatch since we need get all the
// items in the cart and then reset local storage
export const removeFromCartActionCreator = ( id ) => async ( dispatch, getState ) => {

    // let's dispatch our action or " CART_REMOVE_ITEM "
    dispatch( {
        type    : CART_REMOVE_ITEM,
        payload : {
            product : id
        }
    } );

    // once we dispatched CART_REMOVE_ITEM we want to reset the cartItems array in local storage
    // and to do that we just do
    // " localStorage.setItem( 'cartItems', JSON.stringify( getState().cart.cartItems ) ); " again
    localStorage.setItem( 'cartItems', JSON.stringify( getState().cart.cartItems ) );

}

// 2 -
*/























// ===============================






















/*
// at the beginning of lecture 36, given all the notes, I created a new file below without
// the notes so we are starting fresh

// Cart action file with no toggleCartActionCreator();

// import in axios
import axios from 'axios'

// import in the cart constants and these constants represent our actions
import { 
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS
} from '../constants/cart.constants';


// Action Creator #1
// use redux thunk to make an asynchronous request with our action creator

// after dispatch below we need to pass in " getState " and getState allows us to get our
// entire state tree; for example, we could do getState.cart and this will give us access
// to the cart state
export const addToCartActionCreator = ( id, quantity ) => async ( dispatch, getState ) => {

        // create our endpoint
        const endpoint = `/api/products/${ id }`;

        // below we are making a GET request ( using axios ) to this endpoint
        // " /api/products/:id " and axios returns the response object and we can then
        // destructure the data object off of the response object and the data object
        // in this case is the individual product
        const { data } = await axios.get( endpoint );

        // let's dispatch our action or " CART_ADD_ITEM "
        // instead of getting all the products details we will just get 6 product details or
        // product id, product name, product image, product price, product count in stock
        // and product quantity and remember " quantity " is coming from the argument above
        dispatch( {
            type    : CART_ADD_ITEM,
            payload : {
                product  : data._id,
                name     : data.name,
                image    : data.image,
                price    : data.price,
                count    : data.countInStock,
                quantity : quantity
            }
        } );
        
        // once we dispatched CART_ADD_ITEM we want to save the cartItems to local storage but
        // first let's get the cartItems by using " getState().cart.cartItems " 

        // remember to convert " getState().cart.cartItems " into a string
        localStorage.setItem( 'cartItems', JSON.stringify( getState().cart.cartItems ) );

        // and now we have saved a key value pair in local storage or " cartItems : cartItems "

}


// Action Creator #2
// use redux thunk to make an asynchronous request with our action creator

// and we still need to pass in getState after passing in dispatch since we need get all the
// items in the cart and then reset local storage
export const removeFromCartActionCreator = ( id ) => async ( dispatch, getState ) => {

    // let's dispatch our action or " CART_REMOVE_ITEM "
    dispatch( {
        type    : CART_REMOVE_ITEM,
        payload : {
            product : id
        }
    } );

    // once we dispatched CART_REMOVE_ITEM we want to reset the cartItems array in local storage
    // and to do that we just do
    // " localStorage.setItem( 'cartItems', JSON.stringify( getState().cart.cartItems ) ); " again
    localStorage.setItem( 'cartItems', JSON.stringify( getState().cart.cartItems ) );

}


// 3 -
// coming from the shipping-screen.component.jsx 2 - file

// Action Creator #3
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to save the user's shipping address and remember to pass
// in the shipping address form data or " formData "
export const saveShippingAddressActionCreator = ( shippingAddressFormData ) => async ( dispatch ) => {

    // let's dispatch our action or " CART_SAVE_SHIPPING_ADDRESS "
    dispatch( {
        type    : CART_SAVE_SHIPPING_ADDRESS,
        payload : shippingAddressFormData
    } );

    // once we dispatched CART_SAVE_SHIPPING_ADDRESS we want to save the shipping address in
    // local storage
    localStorage.setItem( 'shippingAddress', JSON.stringify( shippingAddressFormData ) );

}

// now let's go to the cart.reducer.js 3 - file

// End of 3 -
*/


























// ===============================






















/*
// at the beginning of lecture 52, given all the notes, I created a new file below without
// the notes so we are starting fresh

// Cart action file with no toggleCartActionCreator();

// import in axios
import axios from 'axios'

// import in the cart constants and these constants represent our actions
import { 
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_PAYMENT_METHOD
} from '../constants/cart.constants';


// Action Creator #1
// use redux thunk to make an asynchronous request with our action creator

// after dispatch below we need to pass in " getState " and getState allows us to get our
// entire state tree; for example, we could do getState.cart and this will give us access
// to the cart state
export const addToCartActionCreator = ( id, quantity ) => async ( dispatch, getState ) => {

        // create our endpoint
        const endpoint = `/api/products/${ id }`;

        // below we are making a GET request ( using axios ) to this endpoint
        // " /api/products/:id " and axios returns the response object and we can then
        // destructure the data object off of the response object and the data object
        // in this case is the individual product
        const { data } = await axios.get( endpoint );

        // let's dispatch our action or " CART_ADD_ITEM "
        // instead of getting all the products details we will just get 6 product details or
        // product id, product name, product image, product price, product count in stock
        // and product quantity and remember " quantity " is coming from the argument above
        dispatch( {
            type    : CART_ADD_ITEM,
            payload : {
                product  : data._id,
                name     : data.name,
                image    : data.image,
                price    : data.price,
                count    : data.countInStock,
                quantity : quantity
            }
        } );
        
        // once we dispatched CART_ADD_ITEM we want to save the cartItems to local storage but
        // first let's get the cartItems by using " getState().cart.cartItems " 

        // remember to convert " getState().cart.cartItems " into a string
        localStorage.setItem( 'cartItems', JSON.stringify( getState().cart.cartItems ) );

        // and now we have saved a key value pair in local storage or " cartItems : cartItems "

}


// Action Creator #2
// use redux thunk to make an asynchronous request with our action creator

// and we still need to pass in getState after passing in dispatch since we need get all the
// items in the cart and then reset local storage
export const removeFromCartActionCreator = ( id ) => async ( dispatch, getState ) => {

    // let's dispatch our action or " CART_REMOVE_ITEM "
    dispatch( {
        type    : CART_REMOVE_ITEM,
        payload : {
            product : id
        }
    } );

    // once we dispatched CART_REMOVE_ITEM we want to reset the cartItems array in local storage
    // and to do that we just do
    // " localStorage.setItem( 'cartItems', JSON.stringify( getState().cart.cartItems ) ); " again
    localStorage.setItem( 'cartItems', JSON.stringify( getState().cart.cartItems ) );

}


// Action Creator #3
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to save the user's shipping address and remember to pass
// in the shipping address form data or " shippingAddressFormData "
export const saveShippingAddressActionCreator = ( shippingAddressFormData ) => async ( dispatch ) => {

    // let's dispatch our action or " CART_SAVE_SHIPPING_ADDRESS "
    dispatch( {
        type    : CART_SAVE_SHIPPING_ADDRESS,
        payload : shippingAddressFormData
    } );

    // once we dispatch CART_SAVE_SHIPPING_ADDRESS we want to save the shipping address in local
    // storage
    localStorage.setItem( 'shippingAddress', JSON.stringify( shippingAddressFormData ) );

}


// 4 -

// Action Creator #4
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to save the user's payment method and remember to pass
// in the payment method as an argument to the action creator
export const savePaymentMethodActionCreator = ( paymentMethod ) => async ( dispatch ) => {

    // let's dispatch our action or "  CART_SAVE_PAYMENT_METHOD "
    dispatch( {
        type    : CART_SAVE_PAYMENT_METHOD,
        payload : paymentMethod
    } );

    // once we dispatch CART_SAVE_PAYMENT_METHOD we want to save the payment method in local
    // storage
    localStorage.setItem( 'paymentMethod', JSON.stringify( paymentMethod ) );

}

// now let's go to the cart.reducer.js 4 - file

// End of 4 -
*/


























// ===============================























// at the beginning of lecture 52, given all the notes, I created a new file below without
// the notes so we are starting fresh

// Cart action file with no toggleCartActionCreator();

// import in axios
import axios from 'axios'

// import in the cart constants and these constants represent our actions
import { 
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_PAYMENT_METHOD
} from '../constants/cart.constants';


// ==============================
// Action Creator 1
// ==============================

// Action Creator 1
// use redux thunk to make an asynchronous request with our action creator

// after dispatch below we need to pass in " getState " and getState allows us to get our
// entire state tree; for example, we could do getState.cart and this will give us access
// to the cart state
export const addToCartActionCreator = ( id, quantity ) => async ( dispatch, getState ) => {

    // create our endpoint
    const endpoint = `/api/products/${ id }`;

    // below we are making a GET request ( using axios ) to this endpoint
    // " /api/products/:id " and axios returns the response object and we can then
    // destructure the data object off of the response object and the data object
    // in this case is the individual product
    const { data } = await axios.get( endpoint );

    // let's dispatch our action or " CART_ADD_ITEM "
    // instead of getting all the products details we will just get 6 product details or
    // product id, product name, product image, product price, product count in stock
    // and product quantity and remember " quantity " is coming from the argument above
    dispatch( {
        type    : CART_ADD_ITEM,
        payload : {
            product  : data._id,
            name     : data.name,
            image    : data.image,
            price    : data.price,
            count    : data.countInStock,
            quantity : quantity
        }
    } );
    
    // once we dispatched CART_ADD_ITEM we want to save the cartItems to local storage but
    // first let's get the cartItems by using " getState().cart.cartItems " 

    // remember to convert " getState().cart.cartItems " into a string
    localStorage.setItem( 'cartItems', JSON.stringify( getState().cart.cartItems ) );

    // and now we have saved a key value pair in local storage or " cartItems : cartItems "

}


// ==============================
// Action Creator 2
// ==============================

// Action Creator 2
// use redux thunk to make an asynchronous request with our action creator

// and we still need to pass in getState after passing in dispatch since we need get all the
// items in the cart and then reset local storage
export const removeFromCartActionCreator = ( id ) => async ( dispatch, getState ) => {

    // let's dispatch our action or " CART_REMOVE_ITEM "
    dispatch( {
        type    : CART_REMOVE_ITEM,
        payload : {
            product : id
        }
    } );

    // once we dispatched CART_REMOVE_ITEM we want to reset the cartItems array in local storage
    // and to do that we just do
    // " localStorage.setItem( 'cartItems', JSON.stringify( getState().cart.cartItems ) ); " again
    localStorage.setItem( 'cartItems', JSON.stringify( getState().cart.cartItems ) );

}


// ==============================
// Action Creator 3
// ==============================

// Action Creator 3
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to save the user's shipping address and remember to pass
// in the shipping address form data or " shippingAddressFormData "
export const saveShippingAddressActionCreator = ( shippingAddressFormData ) => async ( dispatch ) => {

    // let's dispatch our action or " CART_SAVE_SHIPPING_ADDRESS "
    dispatch( {
        type    : CART_SAVE_SHIPPING_ADDRESS,
        payload : shippingAddressFormData
    } );

    // once we dispatch CART_SAVE_SHIPPING_ADDRESS we want to save the shipping address in local
    // storage
    localStorage.setItem( 'shippingAddress', JSON.stringify( shippingAddressFormData ) );

}


// ==============================
// Action Creator 4
// ==============================

// Action Creator 4
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to save the user's payment method and remember to pass
// in the payment method as an argument to the action creator
export const savePaymentMethodActionCreator = ( paymentMethod ) => async ( dispatch ) => {

    // let's dispatch our action or " CART_SAVE_PAYMENT_METHOD "
    dispatch( {
        type    : CART_SAVE_PAYMENT_METHOD,
        payload : paymentMethod
    } );

    // once we dispatch CART_SAVE_PAYMENT_METHOD we want to save the payment method in local
    // storage
    localStorage.setItem( 'paymentMethod', JSON.stringify( paymentMethod ) );

}


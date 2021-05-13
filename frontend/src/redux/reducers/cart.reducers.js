
/*
// Cart reducer with the toggle cart dropdown functionality

// import in our cart constants
import { 
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_TOGGLE,
    CART_CLEAR_ITEM
} from '../constants/cart.constants';


// import in our utility function
import { addItemToCartVersion2 } from '../utils/cart.utils';


// set up the initial state first
const INITIAL_STATE = {
    show      : false,
    cartItems : []
};

// 1 -
// add case CART_ADD_ITEM and use a utility function to get cartItems

// Reducer #1
// create a reducer for the cart
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
const cartReducer = ( state = INITIAL_STATE, action ) => {

    switch ( action.type ) {

        case CART_TOGGLE :
            return {
                ...state,
                show : !state.show
            };

        case CART_ADD_ITEM :
            return {
                ...state,
                cartItems : addItemToCartVersion2( state.cartItems, action.payload )
            };

        default :
            return state;

    } // end of Switch

} // end of reducer


export default cartReducer;

// End of 1 -
*/
















// ===============================




















// at the beginning of lecture 33, given all the notes, I created a new file below without
// the notes so we are starting fresh

// Cart reducer with no toggle cart dropdown functionality

/*
// import in our cart constants
import { 
    CART_ADD_ITEM,
    CART_REMOVE_ITEM
} from '../constants/cart.constants';

// import in our utility function
import { 
    addItemToCartVersion2,
    removeItemFromCartVersion2
} from '../utils/cart.utils';

// set up the initial state first
const INITIAL_STATE = {
    cartItems : []
};

// Reducer #1
// create a reducer for the cart
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
const cartReducer = ( state = INITIAL_STATE, action ) => {

    switch ( action.type ) {

        // add case CART_ADD_ITEM and use a utility function to get cartItems
        case CART_ADD_ITEM :
            return {
                ...state,
                cartItems : addItemToCartVersion2( state.cartItems, action.payload )
            };
        
        // 2 -
        // add case CART_REMOVE_ITEM and use a utility function to remove the cartItem
        case CART_REMOVE_ITEM :
            return {
                ...state,
                cartItems : removeItemFromCartVersion2( state.cartItems, action.payload )
            };

        // End of 2 -

        default :
            return state;

    } // end of Switch

} // end of reducer


export default cartReducer;
*/


















// ===============================



















/*
// at the beginning of lecture 36, given all the notes, I created a new file below without
// the notes so we are starting fresh

// Cart reducer with no toggle cart dropdown functionality

// import in our cart constants
import { 
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS
} from '../constants/cart.constants';

// import in our utility function
import { 
    addItemToCartVersion2,
    removeItemFromCartVersion2
} from '../utils/cart.utils';


// ==============================
// Ruducer 1
// ==============================


// set up the initial state first
const INITIAL_STATE = {
    cartItems       : [],
    shippingAddress : {}
};

// Reducer #1
// create a reducer for the cart
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
const cartReducer = ( state = INITIAL_STATE, action ) => {

    switch ( action.type ) {

        // add case CART_ADD_ITEM and use a utility function to get cartItems
        case CART_ADD_ITEM :
            return {
                ...state,
                cartItems : addItemToCartVersion2( state.cartItems, action.payload )
            };

        // add case CART_REMOVE_ITEM and use a utility function to remove the cartItem
        case CART_REMOVE_ITEM :
            return {
                ...state,
                cartItems : removeItemFromCartVersion2( state.cartItems, action.payload )
            };


        // 3 -
        // coming from the cart.actions.js 3 - file

        // add case CART_SAVE_SHIPPING_ADDRESS
        case CART_SAVE_SHIPPING_ADDRESS :
            return {
                ...state,
                shippingAddress : action.payload
            };

        // now let's go to the store.js 12 - file

        // End of 3 -

        default :
            return state;

    } // end of Switch

} // end of reducer


export default cartReducer;
*/



















// ===============================



















/*
// at the beginning of lecture 52, given all the notes, I created a new file below without
// the notes so we are starting fresh

// Cart reducer with no toggle cart dropdown functionality

// import in our cart constants
import { 
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_PAYMENT_METHOD
} from '../constants/cart.constants';

// import in our utility function
import { 
    addItemToCartVersion2,
    removeItemFromCartVersion2
} from '../utils/cart.utils';


// ==============================
// Ruducer 1
// ==============================


// set up the initial state first
const INITIAL_STATE = {
    cartItems       : [],
    shippingAddress : {}
};

// Reducer #1
// create a reducer for the cart
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
const cartReducer = ( state = INITIAL_STATE, action ) => {

    switch ( action.type ) {

        // add case CART_ADD_ITEM and use a utility function to get cartItems
        case CART_ADD_ITEM :
            return {
                ...state,
                cartItems : addItemToCartVersion2( state.cartItems, action.payload )
            };

        // add case CART_REMOVE_ITEM and use a utility function to remove the cartItem
        case CART_REMOVE_ITEM :
            return {
                ...state,
                cartItems : removeItemFromCartVersion2( state.cartItems, action.payload )
            };

        // add case CART_SAVE_SHIPPING_ADDRESS
        case CART_SAVE_SHIPPING_ADDRESS :
            return {
                ...state,
                shippingAddress : action.payload
            };

        // 4 -
        // add case CART_SAVE_PAYMENT_METHOD
        case CART_SAVE_PAYMENT_METHOD :
            return {
                ...state,
                paymentMethod : action.payload
            };

        // now let's go to the store.js 13 - file

        // End of 4 -

        default :
            return state;

    } // end of Switch

} // end of reducer


export default cartReducer;
*/



















// ===============================




















// at the beginning of lecture 72, given all the notes, I created a new file below without
// the notes so we are starting fresh

// Cart reducer with no toggle cart dropdown functionality

// import in our cart constants
import { 
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_PAYMENT_METHOD,
    CART_ITEMS_RESET,
    CART_RESET
} from '../constants/cart.constants';

// import in our utility function
import { 
    addItemToCartVersion2,
    removeItemFromCartVersion2
} from '../utils/cart.utils';


// ==============================
// Ruducer 1
// ==============================

// set up the initial state first
const INITIAL_STATE_REDUCER_1 = {
    cartItems       : [],
    shippingAddress : {},
    paymentMethod   : {}
};

// Reducer 1
// create a reducer for the cart
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
const cartReducer = ( state = INITIAL_STATE_REDUCER_1, action ) => {

    switch ( action.type ) {

        // add case CART_ADD_ITEM and use a utility function to get cartItems
        case CART_ADD_ITEM :
            return {
                ...state,
                cartItems : addItemToCartVersion2( state.cartItems, action.payload )
            };

        // add case CART_REMOVE_ITEM and use a utility function to remove the cartItem
        case CART_REMOVE_ITEM :
            return {
                ...state,
                cartItems : removeItemFromCartVersion2( state.cartItems, action.payload )
            };

        // add case CART_SAVE_SHIPPING_ADDRESS
        case CART_SAVE_SHIPPING_ADDRESS :
            return {
                ...state,
                shippingAddress : action.payload
            };

        // add case CART_SAVE_PAYMENT_METHOD
        case CART_SAVE_PAYMENT_METHOD :
            return {
                ...state,
                paymentMethod : action.payload
            };

        // in this case, CART_ITEMS_RESET will set cartItems to an empty array
        case CART_ITEMS_RESET :
            return {
                ...state,
                cartItems : [],
                // shippingAddress : JSON.parse( localStorage.getItem( 'shippingAddress' ) ),
            };

        // in this case, CART_RESET will set cartItems to an empty array, set shippingAddress
        // to an empty object and set paymentMethod to an empty object
        case CART_RESET :
            return {
                cartItems       : [],
                shippingAddress : {},
                paymentMethod   : {}
            };

        default :
            return state;

    } // end of Switch

} // end of reducer


export default cartReducer;


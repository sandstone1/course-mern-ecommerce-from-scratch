
/*
// 1 -
// coming from the order.constants.js 1 - file

// import in our order constants
import { 
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS, 
    ORDER_CREATE_FAIL 
} from '../constants/order.constants';


// ==============================
// Ruducer 1
// ==============================


// set up the initial state first
const INITIAL_STATE = {

};

// Reducer #1
// create a reducer for orders
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const orderCreateReducer = ( state = INITIAL_STATE, action ) => {

    switch ( action.type ) {

        // add case ORDER_CREATE_REQUEST
        case ORDER_CREATE_REQUEST :
            return {
                loading : true
            };

        // add case ORDER_CREATE_SUCCESS
        case ORDER_CREATE_SUCCESS :
            return {
                loading : false,
                success : true,
                order   : action.payload
            };

        // add case ORDER_CREATE_FAIL
        case ORDER_CREATE_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        default :
            return state;

    } // end of Switch

} // end of reducer

// let's bring this reducer into our store so let's go to the store.js 14 - file now


// End of 1 -
*/

























// ===============================
























/*
// at the beginning of lecture 57, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in our order constants
import { 
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS, 
    ORDER_CREATE_FAIL,
    ORDER_GET_REQUEST,
    ORDER_GET_SUCCESS,
    ORDER_GET_FAIL
} from '../constants/order.constants';


// ==============================
// Reducer 1
// ==============================

// set up the initial state first
const INITIAL_STATE = {

};

// Reducer #1
// create a reducer for orders
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const orderCreateReducer = ( state = INITIAL_STATE, action ) => {

    switch ( action.type ) {

        // add case ORDER_CREATE_REQUEST
        case ORDER_CREATE_REQUEST :
            return {
                loading : true
            };

        // add case ORDER_CREATE_SUCCESS
        case ORDER_CREATE_SUCCESS :
            return {
                loading : false,
                success : true,
                order   : action.payload
            };

        // add case ORDER_CREATE_FAIL
        case ORDER_CREATE_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        default :
            return state;

    } // end of Switch

} // end of reducer


// 2 -

// ==============================
// Reducer 2
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_2 = { 
    orderItems      : [],
    shippingAddress : {}
};

// Reducer 4
// create a reducer for the order screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const orderGetReducer = ( state = INITIAL_STATE_REDUCER_2, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case ORDER_GET_REQUEST :
            return {
                ...state, // Brad said putting ...state here will prevents us from getting
                // errors when the component loads
                loading : true
            };

        // in this case, we will send the data in the payload
        case ORDER_GET_SUCCESS :
            return {
                loading : false,
                order   : action.payload                
            };

        // in this case, we will send the error in the payload
        case ORDER_GET_FAIL :
            return {
                loading : false,
                error   : action.payload                
            };

        default :
            return state;

    } // end of switch

} // end of reducer

// add this reducer to the store.js 15 - file and let's go to the store.js 15 - file now

// End of 2 -
*/

























// ===============================
























/*
// at the beginning of lecture 59, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in our order constants
import { 
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS, 
    ORDER_CREATE_FAIL,
    ORDER_GET_REQUEST,
    ORDER_GET_SUCCESS,
    ORDER_GET_FAIL,
    ORDER_PAY_REQUEST,
    ORDER_PAY_SUCCESS,
    ORDER_PAY_FAIL,
    ORDER_PAY_RESET
} from '../constants/order.constants';


// ==============================
// Reducer 1
// ==============================

// set up the initial state first
const INITIAL_STATE = {

};

// Reducer 1
// create a reducer for orders
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const orderCreateReducer = ( state = INITIAL_STATE, action ) => {

    switch ( action.type ) {

        // add case ORDER_CREATE_REQUEST
        case ORDER_CREATE_REQUEST :
            return {
                loading : true
            };

        // add case ORDER_CREATE_SUCCESS
        case ORDER_CREATE_SUCCESS :
            return {
                loading : false,
                success : true,
                order   : action.payload
            };

        // add case ORDER_CREATE_FAIL
        case ORDER_CREATE_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        default :
            return state;

    } // end of Switch

} // end of reducer


// ==============================
// Reducer 2
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_2 = { 
    loading         : true,
    orderItems      : [],
    shippingAddress : {}
};

// Reducer 2
// create a reducer for the order screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const orderGetReducer = ( state = INITIAL_STATE_REDUCER_2, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case ORDER_GET_REQUEST :
            return {
                ...state, // Brad said putting ...state here will prevents us from getting
                // errors when the component loads
                loading : true
            };

        // in this case, we will send the data in the payload
        case ORDER_GET_SUCCESS :
            return {
                loading : false,
                order   : action.payload                
            };

        // in this case, we will send the error in the payload
        case ORDER_GET_FAIL :
            return {
                loading : false,
                error   : action.payload                
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// 3 -

// ==============================
// Reducer 3
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_3 = { 

};

// Reducer 3
// create a reducer for the order screen to update an order to paid
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const orderPayReducer = ( state = INITIAL_STATE_REDUCER_3, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case ORDER_PAY_REQUEST :
            return {
                loading : true
            };

        // in this case, we will send the data in the payload
        case ORDER_PAY_SUCCESS :
            return {
                loading : false,
                success : true
            };

        // in this case, we will send the error in the payload
        case ORDER_PAY_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, we will send the error in the payload
        case ORDER_PAY_RESET :
        return {
           
        };

        default :
            return state;

    } // end of switch

} // end of reducer

// now let's add this reducer to the store.js file and let's go to the store.js 16 - file


// End of 3 -
*/

























// ===============================
























/*
// at the beginning of lecture 63, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in our order constants
import { 
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS, 
    ORDER_CREATE_FAIL,
    ORDER_GET_REQUEST,
    ORDER_GET_SUCCESS,
    ORDER_GET_FAIL,
    ORDER_PAY_REQUEST,
    ORDER_PAY_SUCCESS,
    ORDER_PAY_FAIL,
    ORDER_PAY_RESET,
    ORDER_LIST_MY_REQUEST,
    ORDER_LIST_MY_SUCCESS,
    ORDER_LIST_MY_FAIL
} from '../constants/order.constants';


// ==============================
// Reducer 1
// ==============================

// set up the initial state first
const INITIAL_STATE = {

};

// Reducer 1
// create a reducer for orders
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const orderCreateReducer = ( state = INITIAL_STATE, action ) => {

    switch ( action.type ) {

        // add case ORDER_CREATE_REQUEST
        case ORDER_CREATE_REQUEST :
            return {
                loading : true
            };

        // add case ORDER_CREATE_SUCCESS
        case ORDER_CREATE_SUCCESS :
            return {
                loading : false,
                success : true,
                order   : action.payload
            };

        // add case ORDER_CREATE_FAIL
        case ORDER_CREATE_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        default :
            return state;

    } // end of Switch

} // end of reducer


// ==============================
// Reducer 2
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_2 = { 
    loading         : true,
    orderItems      : [],
    shippingAddress : {}
};

// Reducer 2
// create a reducer for the order screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const orderGetReducer = ( state = INITIAL_STATE_REDUCER_2, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case ORDER_GET_REQUEST :
            return {
                ...state, // Brad said putting ...state here will prevents us from getting
                // errors when the component loads
                loading : true
            };

        // in this case, we will send the data in the payload
        case ORDER_GET_SUCCESS :
            return {
                loading : false,
                order   : action.payload                
            };

        // in this case, we will send the error in the payload
        case ORDER_GET_FAIL :
            return {
                loading : false,
                error   : action.payload                
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Reducer 3
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_3 = { 

};

// Reducer 3
// create a reducer for the order screen to update an order to paid
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const orderPayReducer = ( state = INITIAL_STATE_REDUCER_3, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case ORDER_PAY_REQUEST :
            return {
                loading : true
            };

        // in this case, we will set success to true
        case ORDER_PAY_SUCCESS :
            return {
                loading : false,
                success : true
            };

        // in this case, we will send the error in the payload
        case ORDER_PAY_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, ORDER_PAY_RESET will return an empty object
        case ORDER_PAY_RESET :
            return {
            
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// 4 -
// coming from the order.constants.js 4 - file

// ==============================
// Reducer 4
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_4 = { 
    orders : []
};

// Reducer 4
// create a reducer to add all the orders from a user to the profile screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const orderListMyReducer = ( state = INITIAL_STATE_REDUCER_4, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case ORDER_LIST_MY_REQUEST :
            return {
                loading : true
            };

        // in this case, we will send the data in the payload
        case ORDER_LIST_MY_SUCCESS :
            return {
                loading : false,
                orders  : action.payload
            };

        // in this case, we will send the error in the payload
        case ORDER_LIST_MY_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        default :
            return state;

    } // end of switch

} // end of reducer

// let's bring this reducer into the store and let's go to the store.js 17 - file now

// End of 4 -
*/

























// ===============================
























/*
// at the beginning of lecture 65, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in our order constants
import { 
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS, 
    ORDER_CREATE_FAIL,
    ORDER_CREATE_RESET,
    ORDER_GET_REQUEST,
    ORDER_GET_SUCCESS,
    ORDER_GET_FAIL,
    ORDER_PAY_REQUEST,
    ORDER_PAY_SUCCESS,
    ORDER_PAY_FAIL,
    ORDER_PAY_RESET,
    ORDER_LIST_MY_REQUEST,
    ORDER_LIST_MY_SUCCESS,
    ORDER_LIST_MY_FAIL,
    ORDER_LIST_MY_RESET,
    ORDER_LIST_ADMIN_REQUEST,
    ORDER_LIST_ADMIN_SUCCESS,
    ORDER_LIST_ADMIN_FAIL,
    ORDER_LIST_ADMIN_RESET
} from '../constants/order.constants';


// ==============================
// Reducer 1
// ==============================

// set up the initial state first
const INITIAL_STATE = {

};

// Reducer 1
// create a reducer for orders
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const orderCreateReducer = ( state = INITIAL_STATE, action ) => {

    switch ( action.type ) {

        // add case ORDER_CREATE_REQUEST
        case ORDER_CREATE_REQUEST :
            return {
                loading : true
            };

        // add case ORDER_CREATE_SUCCESS
        case ORDER_CREATE_SUCCESS :
            return {
                loading : false,
                success : true,
                order   : action.payload
            };

        // add case ORDER_CREATE_FAIL
        case ORDER_CREATE_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // add case ORDER_CREATE_RESET and clear the state
        case ORDER_CREATE_RESET :
            return {

            };

        default :
            return state;

    } // end of Switch

} // end of reducer


// ==============================
// Reducer 2
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_2 = { 
    loading         : true,
    orderItems      : [],
    shippingAddress : {}
};

// Reducer 2
// create a reducer for the order screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const orderGetReducer = ( state = INITIAL_STATE_REDUCER_2, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case ORDER_GET_REQUEST :
            return {
                ...state, // Brad said putting ...state here will prevents us from getting
                // errors when the component loads
                loading : true
            };

        // in this case, we will send the data in the payload
        case ORDER_GET_SUCCESS :
            return {
                loading : false,
                order   : action.payload                
            };

        // in this case, we will send the error in the payload
        case ORDER_GET_FAIL :
            return {
                loading : false,
                error   : action.payload                
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Reducer 3
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_3 = { 

};

// Reducer 3
// create a reducer for the order screen to update an order to paid
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const orderPayReducer = ( state = INITIAL_STATE_REDUCER_3, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case ORDER_PAY_REQUEST :
            return {
                loading : true
            };

        // in this case, we will set success to true
        case ORDER_PAY_SUCCESS :
            return {
                loading : false,
                success : true
            };

        // in this case, we will send the error in the payload
        case ORDER_PAY_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, ORDER_PAY_RESET will return an empty object
        case ORDER_PAY_RESET :
            return {
            
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Reducer 4
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_4 = { 
    orders : []
};

// Reducer 4
// create a reducer to add all the orders from a user to the profile screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const orderListMyReducer = ( state = INITIAL_STATE_REDUCER_4, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case ORDER_LIST_MY_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case ORDER_LIST_MY_SUCCESS :
            return {
                loading : false,
                orders  : action.payload
            };

        // in this case, we will send the error in the payload
        case ORDER_LIST_MY_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, ORDER_LIST_MY_RESET will set orders equal to an empty array
        case ORDER_LIST_MY_RESET :
            return {
                orders : []
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// 5 -
// coming from order.actions.js 5 -

// ==============================
// Ruducer 5
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_5 = {
    orders : []
};

// Reducer 5
// create a reducer to get all the orders for the admin order list screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const orderListAdminReducer = ( state = INITIAL_STATE_REDUCER_5, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case ORDER_LIST_ADMIN_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case ORDER_LIST_ADMIN_SUCCESS :
            return {
                loading : false,
                orders  : action.payload  
            };

        // in this case, we will send the error in the payload
        case ORDER_LIST_ADMIN_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, reset the order list to an empty array
        case ORDER_LIST_ADMIN_RESET :
            return {
                orders : []
            };

        default :
            return state;

    } // end of switch

} // end of reducer

// and now let's go to the store.js 25 - file

// End of 5 -
*/

























// ===============================
























/*
// at the beginning of lecture 65, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in our order constants
import { 
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS, 
    ORDER_CREATE_FAIL,
    ORDER_CREATE_RESET,
    ORDER_GET_REQUEST,
    ORDER_GET_SUCCESS,
    ORDER_GET_FAIL,
    ORDER_PAY_REQUEST,
    ORDER_PAY_SUCCESS,
    ORDER_PAY_FAIL,
    ORDER_PAY_RESET,
    ORDER_LIST_MY_REQUEST,
    ORDER_LIST_MY_SUCCESS,
    ORDER_LIST_MY_FAIL,
    ORDER_LIST_MY_RESET,
    ORDER_LIST_ADMIN_REQUEST,
    ORDER_LIST_ADMIN_SUCCESS,
    ORDER_LIST_ADMIN_FAIL,
    ORDER_LIST_ADMIN_RESET,
    ORDER_UPDATE_TO_DELIVERED_ADMIN_REQUEST,
    ORDER_UPDATE_TO_DELIVERED_ADMIN_SUCCESS,
    ORDER_UPDATE_TO_DELIVERED_ADMIN_FAIL,
    ORDER_UPDATE_TO_DELIVERED_ADMIN_RESET
} from '../constants/order.constants';


// ==============================
// Reducer 1
// ==============================

// set up the initial state first
const INITIAL_STATE = {

};

// Reducer 1
// create a reducer for orders
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const orderCreateReducer = ( state = INITIAL_STATE, action ) => {

    switch ( action.type ) {

        // add case ORDER_CREATE_REQUEST
        case ORDER_CREATE_REQUEST :
            return {
                loading : true
            };

        // add case ORDER_CREATE_SUCCESS
        case ORDER_CREATE_SUCCESS :
            return {
                loading : false,
                success : true,
                order   : action.payload
            };

        // add case ORDER_CREATE_FAIL
        case ORDER_CREATE_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // add case ORDER_CREATE_RESET and clear the state
        case ORDER_CREATE_RESET :
            return {

            };

        default :
            return state;

    } // end of Switch

} // end of reducer


// ==============================
// Reducer 2
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_2 = { 
    loading         : true,
    orderItems      : [],
    shippingAddress : {}
};

// Reducer 2
// create a reducer for the order screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const orderGetReducer = ( state = INITIAL_STATE_REDUCER_2, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case ORDER_GET_REQUEST :
            return {
                ...state, // Brad said putting ...state here will prevents us from getting
                // errors when the component loads
                loading : true
            };

        // in this case, we will send the data in the payload
        case ORDER_GET_SUCCESS :
            return {
                loading : false,
                order   : action.payload                
            };

        // in this case, we will send the error in the payload
        case ORDER_GET_FAIL :
            return {
                loading : false,
                error   : action.payload                
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Reducer 3
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_3 = { 

};

// Reducer 3
// create a reducer for the order screen to update an order to paid
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const orderPayReducer = ( state = INITIAL_STATE_REDUCER_3, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case ORDER_PAY_REQUEST :
            return {
                loading : true
            };

        // in this case, we will set success to true
        case ORDER_PAY_SUCCESS :
            return {
                loading : false,
                success : true
            };

        // in this case, we will send the error in the payload
        case ORDER_PAY_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, ORDER_PAY_RESET will return an empty object
        case ORDER_PAY_RESET :
            return {
            
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Reducer 4
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_4 = { 
    orders : []
};

// Reducer 4
// create a reducer to add all the orders from a user to the profile screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const orderListMyReducer = ( state = INITIAL_STATE_REDUCER_4, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case ORDER_LIST_MY_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case ORDER_LIST_MY_SUCCESS :
            return {
                loading : false,
                orders  : action.payload
            };

        // in this case, we will send the error in the payload
        case ORDER_LIST_MY_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, ORDER_LIST_MY_RESET will set orders equal to an empty array
        case ORDER_LIST_MY_RESET :
            return {
                orders : []
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 5
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_5 = {
    orders : []
};

// Reducer 5
// create a reducer to get all the orders for the admin order list screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const orderListAdminReducer = ( state = INITIAL_STATE_REDUCER_5, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case ORDER_LIST_ADMIN_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case ORDER_LIST_ADMIN_SUCCESS :
            return {
                loading : false,
                orders  : action.payload  
            };

        // in this case, we will send the error in the payload
        case ORDER_LIST_ADMIN_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, reset the order list to an empty array
        case ORDER_LIST_ADMIN_RESET :
            return {
                orders : []
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// 6 -
// coming from order.actions.js 6 -

// ==============================
// Reducer 6
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_6 = { 

};

// Reducer 6
// create a reducer to mark an order as delivered in the order screen component
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const orderUpdateToDeliveredAdminReducer = ( state = INITIAL_STATE_REDUCER_6, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case ORDER_UPDATE_TO_DELIVERED_ADMIN_REQUEST :
            return {
                loading : true
            };

        // in this case, we will set success to true
        case ORDER_UPDATE_TO_DELIVERED_ADMIN_SUCCESS :
            return {
                loading : false,
                success : true
            };

        // in this case, we will send the error in the payload
        case ORDER_UPDATE_TO_DELIVERED_ADMIN_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, reset the order update to delivered to an empty object
        case ORDER_UPDATE_TO_DELIVERED_ADMIN_RESET :
            return {

            };

        default :
            return state;

    } // end of switch

} // end of reducer

// and now let's go to the store.js 26 - file

// End of 6 -
*/

























// ===============================

























// at the beginning of lecture 65, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in our order constants
import { 
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS, 
    ORDER_CREATE_FAIL,
    ORDER_CREATE_RESET,
    ORDER_GET_REQUEST,
    ORDER_GET_SUCCESS,
    ORDER_GET_FAIL,
    ORDER_PAY_REQUEST,
    ORDER_PAY_SUCCESS,
    ORDER_PAY_FAIL,
    ORDER_PAY_RESET,
    ORDER_LIST_MY_REQUEST,
    ORDER_LIST_MY_SUCCESS,
    ORDER_LIST_MY_FAIL,
    ORDER_LIST_MY_RESET,
    ORDER_LIST_ADMIN_REQUEST,
    ORDER_LIST_ADMIN_SUCCESS,
    ORDER_LIST_ADMIN_FAIL,
    ORDER_LIST_ADMIN_RESET,
    ORDER_UPDATE_TO_DELIVERED_ADMIN_REQUEST,
    ORDER_UPDATE_TO_DELIVERED_ADMIN_SUCCESS,
    ORDER_UPDATE_TO_DELIVERED_ADMIN_FAIL,
    ORDER_UPDATE_TO_DELIVERED_ADMIN_RESET
} from '../constants/order.constants';


// ==============================
// Reducer 1
// ==============================

// set up the initial state first
const INITIAL_STATE = {

};

// Reducer 1
// create a reducer for orders
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const orderCreateReducer = ( state = INITIAL_STATE, action ) => {

    switch ( action.type ) {

        // add case ORDER_CREATE_REQUEST
        case ORDER_CREATE_REQUEST :
            return {
                loading : true
            };

        // add case ORDER_CREATE_SUCCESS
        case ORDER_CREATE_SUCCESS :
            return {
                loading : false,
                success : true,
                order   : action.payload
            };

        // add case ORDER_CREATE_FAIL
        case ORDER_CREATE_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // add case ORDER_CREATE_RESET and clear the state
        case ORDER_CREATE_RESET :
            return {

            };

        default :
            return state;

    } // end of Switch

} // end of reducer


// ==============================
// Reducer 2
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_2 = { 
    loading         : true,
    orderItems      : [],
    shippingAddress : {}
};

// Reducer 2
// create a reducer for the order screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const orderGetReducer = ( state = INITIAL_STATE_REDUCER_2, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case ORDER_GET_REQUEST :
            return {
                ...state, // Brad said putting ...state here will prevents us from getting
                // errors when the component loads
                loading : true
            };

        // in this case, we will send the data in the payload
        case ORDER_GET_SUCCESS :
            return {
                loading : false,
                order   : action.payload                
            };

        // in this case, we will send the error in the payload
        case ORDER_GET_FAIL :
            return {
                loading : false,
                error   : action.payload                
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Reducer 3
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_3 = { 

};

// Reducer 3
// create a reducer for the order screen to update an order to paid
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const orderPayReducer = ( state = INITIAL_STATE_REDUCER_3, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case ORDER_PAY_REQUEST :
            return {
                loading : true
            };

        // in this case, we will set success to true
        case ORDER_PAY_SUCCESS :
            return {
                loading : false,
                success : true
            };

        // in this case, we will send the error in the payload
        case ORDER_PAY_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, ORDER_PAY_RESET will return an empty object
        case ORDER_PAY_RESET :
            return {
            
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Reducer 4
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_4 = { 
    orders : []
};

// Reducer 4
// create a reducer to add all the orders from a user to the profile screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const orderListMyReducer = ( state = INITIAL_STATE_REDUCER_4, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case ORDER_LIST_MY_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case ORDER_LIST_MY_SUCCESS :
            return {
                loading : false,
                orders  : action.payload
            };

        // in this case, we will send the error in the payload
        case ORDER_LIST_MY_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, ORDER_LIST_MY_RESET will set orders equal to an empty array
        case ORDER_LIST_MY_RESET :
            return {
                orders : []
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 5
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_5 = {
    orders : []
};

// Reducer 5
// create a reducer to get all the orders for the admin order list screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const orderListAdminReducer = ( state = INITIAL_STATE_REDUCER_5, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case ORDER_LIST_ADMIN_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case ORDER_LIST_ADMIN_SUCCESS :
            return {
                loading : false,
                orders  : action.payload  
            };

        // in this case, we will send the error in the payload
        case ORDER_LIST_ADMIN_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, reset the order list to an empty array
        case ORDER_LIST_ADMIN_RESET :
            return {
                orders : []
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Reducer 6
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_6 = { 

};

// Reducer 6
// create a reducer to mark an order as delivered in the order screen component
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const orderUpdateToDeliveredAdminReducer = ( state = INITIAL_STATE_REDUCER_6, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case ORDER_UPDATE_TO_DELIVERED_ADMIN_REQUEST :
            return {
                loading : true
            };

        // in this case, we will set success to true
        case ORDER_UPDATE_TO_DELIVERED_ADMIN_SUCCESS :
            return {
                loading : false,
                success : true
            };

        // in this case, we will send the error in the payload
        case ORDER_UPDATE_TO_DELIVERED_ADMIN_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, reset the order update to delivered to an empty object
        case ORDER_UPDATE_TO_DELIVERED_ADMIN_RESET :
            return {

            };

        default :
            return state;

    } // end of switch

} // end of reducer


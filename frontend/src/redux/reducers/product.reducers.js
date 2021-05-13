
/*
// 3 -
// import in our product constants
import { 
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAILURE
} from '../constants/product.constants';

// now let's create our action and let's create a folder called " actions " inside the redux
// folder and inside this folder let's create a file called " product.actions.js " and let's
// go to that file now

// End of 3 -


// 1 -
// Reducer #1
// create a reducer for the products or product list
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state, which in this case is " { products : [] } " 
export const productListReducer = ( state = { products : [] }, action ) => {

    switch ( action.type ) {

        case PRODUCT_LIST_REQUEST :
            return {
                products : [],
                loading  : true
            };

        // in this case, we will send the data in the payload
        case PRODUCT_LIST_SUCCESS :
            return {
                products : action.payload,
                loading  : false
            };
        
        // in this case, we will send the error in the payload
        case PRODUCT_LIST_FAILURE :
            return {
                error   : action.payload,
                loading : false
            };

        default :
            return state;

    } // end of Switch

} // end of reducer


// now we need to add the productListreducer to our store so let's go to the store.js 2 - file

// End of 1 -


// 2 -
// we are coming from the store.js 2 - file
// and let's talk about constants and first let's create a new folder inside the redux folder
// called " constants " and then inside this folder let's create file called
// " product.constants.js " and let's go to that file now


// NOTE:
// wondering about the difference between npm start and npm run start and got this feedback
// from stackoverflow: " npm test, npm start, npm restart, and npm stop are all aliases for
// npm run xxx. For all other scripts you define, you need to use the npm run xxx syntax. "

// End of 2 -
*/






















// ===============================




















/*
// at the beginning of lecture 30, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in our product constants
import { 
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_GET_REQUEST,
    PRODUCT_GET_SUCCESS,
    PRODUCT_GET_FAIL,
} from '../constants/product.constants';


// Reducer #1
// create a reducer for the products or product list
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state, which in this case is " { products : [] } " 
export const productListReducer = ( state = { products : [] }, action ) => {

    switch ( action.type ) {

        case PRODUCT_LIST_REQUEST :
            return {
                products : [],
                loading  : true
            };

        // in this case, we will send the data in the payload
        case PRODUCT_LIST_SUCCESS :
            return {
                products : action.payload,
                loading  : false
            };
        
        // in this case, we will send the error in the payload
        case PRODUCT_LIST_FAIL :
            return {
                error   : action.payload,
                loading : false
            };

        default :
            return state;

    } // end of Switch

} // end of reducer



// 4 -
// coming from the product.actions.js 2 - file

// Reducer #2
// create a reducer for the ProductScreen component or the product details page
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state, which in this case is " { product : { reviews : [] } } "

// remember we need to set reviews to an empty array inside the product object since in the
// product model we have " reviews : [ reviewSchema ] "
export const productGetReducer = ( 
    state = { product : { reviews : [] } }, action
) => {

    switch ( action.type ) {

        case PRODUCT_GET_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case PRODUCT_GET_SUCCESS :
            return {
                product : action.payload,
                loading : false
            };
        
        // in this case, we will send the error in the payload
        case PRODUCT_GET_FAIL :
            return {
                error   : action.payload,
                loading : false
            };

        default :
            return state;

    } // end of Switch

} // end of reducer

// now go to the store.js 3 - file

// End of 4 -
*/




















// ===============================




















/*
// at the beginning of lecture 31, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in our product constants
import { 
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_GET_REQUEST,
    PRODUCT_GET_SUCCESS,
    PRODUCT_GET_FAIL,
    PRODUCT_DELETE_ADMIN_REQUEST,
    PRODUCT_DELETE_ADMIN_SUCCESS,
    PRODUCT_DELETE_ADMIN_FAIL
} from '../constants/product.constants';


// ==============================
// Ruducer 1
// ==============================

// set up the initial state first
const INITIAL_STATE_REDUCER_1 = {
    products : []
};

// Reducer 1
// create a reducer for the products or product list
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state, which in this case is " { products : [] } " 
export const productListReducer = ( state = INITIAL_STATE_REDUCER_1, action ) => {

    switch ( action.type ) {

        case PRODUCT_LIST_REQUEST :
            return {
                ...state,
                loading  : true
            };

        // in this case, we will send the data in the payload
        case PRODUCT_LIST_SUCCESS :
            return {
                loading  : false,
                products : action.payload,
            };
        
        // in this case, we will send the error in the payload
        case PRODUCT_LIST_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        default :
            return state;

    } // end of Switch

} // end of reducer


// ==============================
// Ruducer 2
// ==============================

// set up the initial state first
const INITIAL_STATE_REDUCER_2 = {
    product : { reviews : [] }
};

// Reducer 2
// create a reducer for the ProductScreen component or the product details page
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state, which in this case is " { product : { reviews : [] } } "

// remember we need to set reviews to an empty array inside the product object since in the
// product model we have " reviews : [ reviewSchema ] "
export const productGetReducer = ( state = INITIAL_STATE_REDUCER_2, action ) => {

    switch ( action.type ) {

        case PRODUCT_GET_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case PRODUCT_GET_SUCCESS :
            return {
                product : action.payload,
                loading : false
            };
        
        // in this case, we will send the error in the payload
        case PRODUCT_GET_FAIL :
            return {
                error   : action.payload,
                loading : false
            };

        default :
            return state;

    } // end of Switch

} // end of reducer


// 5 -
// coming from the product.actions.js 3 - file

// ==============================
// Ruducer 3
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_3 = {

};

// Reducer 3
// create a reducer to delete a product from the admin product list screen and the database
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const productDeleteAdminReducer = ( state = INITIAL_STATE_REDUCER_3, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case PRODUCT_DELETE_ADMIN_REQUEST :
            return {
                loading : true
            };

        // in this case, we will just set a success key value pair
        case PRODUCT_DELETE_ADMIN_SUCCESS :
            return {
                loading : false,
                success : true  
            };

        // in this case, we will send the error in the payload
        case PRODUCT_DELETE_ADMIN_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        default :
            return state;

    } // end of switch

} // end of reducer

// now let's go to the store.js 22 - file

// End of 5 -
*/



















// ===============================




















/*
// at the beginning of lecture 76, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in our product constants
import { 
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_GET_REQUEST,
    PRODUCT_GET_SUCCESS,
    PRODUCT_GET_FAIL,
    PRODUCT_DELETE_ADMIN_REQUEST,
    PRODUCT_DELETE_ADMIN_SUCCESS,
    PRODUCT_DELETE_ADMIN_FAIL,
    PRODUCT_CREATE_ADMIN_REQUEST,
    PRODUCT_CREATE_ADMIN_SUCCESS,
    PRODUCT_CREATE_ADMIN_FAIL,
    PRODUCT_CREATE_ADMIN_RESET
} from '../constants/product.constants';


// ==============================
// Ruducer 1
// ==============================

// set up the initial state first
const INITIAL_STATE_REDUCER_1 = {
    products : []
};

// Reducer 1
// create a reducer for the products or product list
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state, which in this case is " { products : [] } " 
export const productListReducer = ( state = INITIAL_STATE_REDUCER_1, action ) => {

    switch ( action.type ) {

        case PRODUCT_LIST_REQUEST :
            return {
                ...state,
                loading  : true
            };

        // in this case, we will send the data in the payload
        case PRODUCT_LIST_SUCCESS :
            return {
                loading  : false,
                products : action.payload,
            };
        
        // in this case, we will send the error in the payload
        case PRODUCT_LIST_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        default :
            return state;

    } // end of Switch

} // end of reducer


// ==============================
// Ruducer 2
// ==============================

// set up the initial state first
const INITIAL_STATE_REDUCER_2 = {
    product : { reviews : [] }
};

// Reducer 2
// create a reducer for the ProductScreen component or the product details page
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state, which in this case is " { product : { reviews : [] } } "

// remember we need to set reviews to an empty array inside the product object since in the
// product model we have " reviews : [ reviewSchema ] "
export const productGetReducer = ( state = INITIAL_STATE_REDUCER_2, action ) => {

    switch ( action.type ) {

        case PRODUCT_GET_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case PRODUCT_GET_SUCCESS :
            return {
                loading : false,
                product : action.payload
            };

        // in this case, we will send the error in the payload
        case PRODUCT_GET_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        default :
            return state;

    } // end of Switch

} // end of reducer


// ==============================
// Ruducer 3
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_3 = {

};

// Reducer 3
// create a reducer to delete a product from the admin product list screen and the database
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const productDeleteAdminReducer = ( state = INITIAL_STATE_REDUCER_3, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case PRODUCT_DELETE_ADMIN_REQUEST :
            return {
                loading : true
            };

        // in this case, we will just set success equal to true
        case PRODUCT_DELETE_ADMIN_SUCCESS :
            return {
                loading : false,
                success : true  
            };

        // in this case, we will send the error in the payload
        case PRODUCT_DELETE_ADMIN_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// 6 -
// coming from the product.actions.js 4 - file

// ==============================
// Ruducer 4
// ==============================

// set up the initial state first
const INITIAL_STATE_REDUCER_4 = {
    product : {}
};

// Reducer 4
// create a reducer to create a product with dummy sample data and then save it to the database
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const productCreateAdminReducer = ( state = INITIAL_STATE_REDUCER_4, action ) => {

    switch ( action.type ) {

        case PRODUCT_CREATE_ADMIN_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case PRODUCT_CREATE_ADMIN_SUCCESS :
            return {
                loading : false,
                success : true,
                product : action.payload
            };

        // in this case, we will send the error in the payload
        case PRODUCT_CREATE_ADMIN_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, we will return an empty product object
        case PRODUCT_CREATE_ADMIN_RESET :
            return {
                product : {}
            };

        default :
            return state;

    } // end of Switch

} // end of reducer

// now let's go to the store.js 23 - file

// End of 6 -
*/



















// ===============================




















/*
// at the beginning of lecture 77, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in our product constants
import { 
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_GET_REQUEST,
    PRODUCT_GET_SUCCESS,
    PRODUCT_GET_FAIL,
    PRODUCT_GET_RESET,
    PRODUCT_DELETE_ADMIN_REQUEST,
    PRODUCT_DELETE_ADMIN_SUCCESS,
    PRODUCT_DELETE_ADMIN_FAIL,
    PRODUCT_CREATE_ADMIN_REQUEST,
    PRODUCT_CREATE_ADMIN_SUCCESS,
    PRODUCT_CREATE_ADMIN_FAIL,
    PRODUCT_CREATE_ADMIN_RESET,
    PRODUCT_UPDATE_ADMIN_REQUEST,
    PRODUCT_UPDATE_ADMIN_SUCCESS,
    PRODUCT_UPDATE_ADMIN_FAIL,
    PRODUCT_UPDATE_ADMIN_RESET
} from '../constants/product.constants';


// ==============================
// Ruducer 1
// ==============================

// set up the initial state first
const INITIAL_STATE_REDUCER_1 = {
    products : []
};

// Reducer 1
// create a reducer for the products or product list
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state, which in this case is " { products : [] } " 
export const productListReducer = ( state = INITIAL_STATE_REDUCER_1, action ) => {

    switch ( action.type ) {

        case PRODUCT_LIST_REQUEST :
            return {
                ...state,
                loading  : true
            };

        // in this case, we will send the data in the payload
        case PRODUCT_LIST_SUCCESS :
            return {
                loading  : false,
                products : action.payload,
            };
        
        // in this case, we will send the error in the payload
        case PRODUCT_LIST_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        default :
            return state;

    } // end of Switch

} // end of reducer


// ==============================
// Ruducer 2
// ==============================

// set up the initial state first
const INITIAL_STATE_REDUCER_2 = {
    product : { reviews : [] }
};

// Reducer 2
// create a reducer for the ProductScreen component or the product details page
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state, which in this case is " { product : { reviews : [] } } "

// remember we need to set reviews to an empty array inside the product object since in the
// product model we have " reviews : [ reviewSchema ] "
export const productGetReducer = ( state = INITIAL_STATE_REDUCER_2, action ) => {

    switch ( action.type ) {

        case PRODUCT_GET_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case PRODUCT_GET_SUCCESS :
            return {
                loading : false,
                product : action.payload
            };

        // in this case, we will send the error in the payload
        case PRODUCT_GET_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, we will return the initial state
        case PRODUCT_GET_RESET :
            return {
                product : { reviews : [] }
            };

        default :
            return state;

    } // end of Switch

} // end of reducer


// ==============================
// Ruducer 3
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_3 = {

};

// Reducer 3
// create a reducer to delete a product from the admin product list screen and the database
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const productDeleteAdminReducer = ( state = INITIAL_STATE_REDUCER_3, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case PRODUCT_DELETE_ADMIN_REQUEST :
            return {
                loading : true
            };

        // in this case, we will just set success equal to true
        case PRODUCT_DELETE_ADMIN_SUCCESS :
            return {
                loading : false,
                success : true  
            };

        // in this case, we will send the error in the payload
        case PRODUCT_DELETE_ADMIN_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 4
// ==============================

// set up the initial state first
const INITIAL_STATE_REDUCER_4 = {
    product : {}
};

// Reducer 4
// create a reducer to create a product with dummy sample data and then save it to the database
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const productCreateAdminReducer = ( state = INITIAL_STATE_REDUCER_4, action ) => {

    switch ( action.type ) {

        case PRODUCT_CREATE_ADMIN_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case PRODUCT_CREATE_ADMIN_SUCCESS :
            return {
                loading : false,
                success : true,
                product : action.payload
            };

        // in this case, we will send the error in the payload
        case PRODUCT_CREATE_ADMIN_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, we will return an empty product object
        case PRODUCT_CREATE_ADMIN_RESET :
            return {
                product : {}
            };

        default :
            return state;

    } // end of Switch

} // end of reducer


// 7 -
// coming from the product.actions.js 5 - file

// ==============================
// Ruducer 5
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_5 = {
    product : {}
};

// Reducer 5
// create a reducer to update a product and save the updated product to the database and a reducer
// takes in 2 arguments: the initial state and an action and we want to set state equal to
// the initial state
export const productUpdateAdminReducer = ( state = INITIAL_STATE_REDUCER_5, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case PRODUCT_UPDATE_ADMIN_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case PRODUCT_UPDATE_ADMIN_SUCCESS :
            return {
                loading : false,
                success : true,
                product : action.payload  
            };

        // in this case, we will send the error in the payload
        case PRODUCT_UPDATE_ADMIN_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, we will return an empty product object
        case PRODUCT_UPDATE_ADMIN_RESET :
            return {
                product : {}
            };

        default :
            return state;

    } // end of switch

} // end of reducer

// now let's go to the store.js 24 - file

// End of 7 -
*/



















// ===============================




















/*
// at the beginning of lecture 79, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in our product constants
import { 
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_GET_REQUEST,
    PRODUCT_GET_SUCCESS,
    PRODUCT_GET_FAIL,
    PRODUCT_GET_RESET,
    PRODUCT_DELETE_ADMIN_REQUEST,
    PRODUCT_DELETE_ADMIN_SUCCESS,
    PRODUCT_DELETE_ADMIN_FAIL,
    PRODUCT_CREATE_ADMIN_REQUEST,
    PRODUCT_CREATE_ADMIN_SUCCESS,
    PRODUCT_CREATE_ADMIN_FAIL,
    PRODUCT_CREATE_ADMIN_RESET,
    PRODUCT_UPDATE_ADMIN_REQUEST,
    PRODUCT_UPDATE_ADMIN_SUCCESS,
    PRODUCT_UPDATE_ADMIN_FAIL,
    PRODUCT_UPDATE_ADMIN_RESET,
    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_FAIL,
    PRODUCT_CREATE_REVIEW_RESET
} from '../constants/product.constants';


// ==============================
// Ruducer 1
// ==============================

// set up the initial state first
const INITIAL_STATE_REDUCER_1 = {
    products : []
};

// Reducer 1
// create a reducer for the products or product list
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state, which in this case is " { products : [] } " 
export const productListReducer = ( state = INITIAL_STATE_REDUCER_1, action ) => {

    switch ( action.type ) {

        case PRODUCT_LIST_REQUEST :
            return {
                ...state,
                loading  : true
            };

        // in this case, we will send the data in the payload
        case PRODUCT_LIST_SUCCESS :
            return {
                loading  : false,
                products : action.payload,
            };
        
        // in this case, we will send the error in the payload
        case PRODUCT_LIST_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        default :
            return state;

    } // end of Switch

} // end of reducer


// ==============================
// Ruducer 2
// ==============================

// set up the initial state first
const INITIAL_STATE_REDUCER_2 = {
    product : { reviews : [] }
};

// Reducer 2
// create a reducer for the ProductScreen component or the product details page
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state, which in this case is " { product : { reviews : [] } } "

// remember we need to set reviews to an empty array inside the product object since in the
// product model we have " reviews : [ reviewSchema ] "
export const productGetReducer = ( state = INITIAL_STATE_REDUCER_2, action ) => {

    switch ( action.type ) {

        case PRODUCT_GET_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case PRODUCT_GET_SUCCESS :
            return {
                loading : false,
                product : action.payload
            };

        // in this case, we will send the error in the payload
        case PRODUCT_GET_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, we will return the initial state
        case PRODUCT_GET_RESET :
            return {
                product : { reviews : [] }
            };

        default :
            return state;

    } // end of Switch

} // end of reducer


// ==============================
// Ruducer 3
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_3 = {

};

// Reducer 3
// create a reducer to delete a product from the admin product list screen and the database
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const productDeleteAdminReducer = ( state = INITIAL_STATE_REDUCER_3, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case PRODUCT_DELETE_ADMIN_REQUEST :
            return {
                loading : true
            };

        // in this case, we will just set success equal to true
        case PRODUCT_DELETE_ADMIN_SUCCESS :
            return {
                loading : false,
                success : true  
            };

        // in this case, we will send the error in the payload
        case PRODUCT_DELETE_ADMIN_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 4
// ==============================

// set up the initial state first
const INITIAL_STATE_REDUCER_4 = {
    product : {}
};

// Reducer 4
// create a reducer to create a product with dummy sample data and then save it to the database
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const productCreateAdminReducer = ( state = INITIAL_STATE_REDUCER_4, action ) => {

    switch ( action.type ) {

        case PRODUCT_CREATE_ADMIN_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case PRODUCT_CREATE_ADMIN_SUCCESS :
            return {
                loading : false,
                success : true,
                product : action.payload
            };

        // in this case, we will send the error in the payload
        case PRODUCT_CREATE_ADMIN_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, we will return an empty product object
        case PRODUCT_CREATE_ADMIN_RESET :
            return {
                product : {}
            };

        default :
            return state;

    } // end of Switch

} // end of reducer


// ==============================
// Ruducer 5
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_5 = {
    product : {}
};

// Reducer 5
// create a reducer to update a product and save the updated product to the database and a reducer
// takes in 2 arguments: the initial state and an action and we want to set state equal to
// the initial state
export const productUpdateAdminReducer = ( state = INITIAL_STATE_REDUCER_5, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case PRODUCT_UPDATE_ADMIN_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case PRODUCT_UPDATE_ADMIN_SUCCESS :
            return {
                loading : false,
                success : true,
                product : action.payload  
            };

        // in this case, we will send the error in the payload
        case PRODUCT_UPDATE_ADMIN_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, we will return an empty product object
        case PRODUCT_UPDATE_ADMIN_RESET :
            return {
                product : {}
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// 8 -
// coming from the product.actions.js 6 - file

// ==============================
// Ruducer 6
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_6 = {

};

// Reducer 6
// create a reducer to create a product review and save the product review to the database and a
// reducer takes in 2 arguments: the initial state and an action and we want to set state equal
// to the initial state
export const productCreateReviewReducer = ( state = INITIAL_STATE_REDUCER_6, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case PRODUCT_CREATE_REVIEW_REQUEST :
            return {
                loading : true
            };

        // in this case, we will set success to true
        case PRODUCT_CREATE_REVIEW_SUCCESS :
            return {
                loading : false,
                success : true
            };

        // in this case, we will send the error in the payload
        case PRODUCT_CREATE_REVIEW_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, we will return an empty object
        case PRODUCT_CREATE_REVIEW_RESET :
            return {

            };

        default :
            return state;

    } // end of switch

} // end of reducer

// now let's go to the store.js 27 - file

// End of 8 -
*/




















// ===============================




















/*
// at the beginning of lecture 85, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in our product constants
import { 
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_GET_REQUEST,
    PRODUCT_GET_SUCCESS,
    PRODUCT_GET_FAIL,
    PRODUCT_GET_RESET,
    PRODUCT_DELETE_ADMIN_REQUEST,
    PRODUCT_DELETE_ADMIN_SUCCESS,
    PRODUCT_DELETE_ADMIN_FAIL,
    PRODUCT_CREATE_ADMIN_REQUEST,
    PRODUCT_CREATE_ADMIN_SUCCESS,
    PRODUCT_CREATE_ADMIN_FAIL,
    PRODUCT_CREATE_ADMIN_RESET,
    PRODUCT_UPDATE_ADMIN_REQUEST,
    PRODUCT_UPDATE_ADMIN_SUCCESS,
    PRODUCT_UPDATE_ADMIN_FAIL,
    PRODUCT_UPDATE_ADMIN_RESET,
    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_FAIL,
    PRODUCT_CREATE_REVIEW_RESET
} from '../constants/product.constants';


// ==============================
// Ruducer 1
// ==============================

// set up the initial state first
const INITIAL_STATE_REDUCER_1 = {
    products : []
};

// Reducer 1
// create a reducer for the products or product list
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state, which in this case is " { products : [] } " 
export const productListReducer = ( state = INITIAL_STATE_REDUCER_1, action ) => {

    switch ( action.type ) {

        case PRODUCT_LIST_REQUEST :
            return {
                ...state,
                loading  : true
            };

        // 9 -
        // coming from the product.actions.js 8 - file

        // remember that data or action.payload is made up of 3 key value pairs:
        // products : products, page : page, pages : Math.ceil( count / pageSize ) so we
        // need to account for these 3 key value pairs in action.payload

        // and now if I go to the home page I see 2 products and this is correct since
        // remember we set our pageSize in the product.controllers.js file is equal to 2

        // in this case, we will send the data in the payload
        case PRODUCT_LIST_SUCCESS :
            return {
                loading  : false,
                products : action.payload.products,
                page     : action.payload.page,
                pages    : action.payload.pages
            };

        // now we need to create some links at the bottom of the home page to handle the
        // additional product pages and we need to add the query string routes in our App.js
        // file

        // so let's go to the App.js 18 - file now

        // End of 9 -

        
        // in this case, we will send the error in the payload
        case PRODUCT_LIST_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        default :
            return state;

    } // end of Switch

} // end of reducer


// ==============================
// Ruducer 2
// ==============================

// set up the initial state first
const INITIAL_STATE_REDUCER_2 = {
    product : { reviews : [] }
};

// Reducer 2
// create a reducer for the ProductScreen component or the product details page
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state, which in this case is " { product : { reviews : [] } } "

// remember we need to set reviews to an empty array inside the product object since in the
// product model we have " reviews : [ reviewSchema ] "
export const productGetReducer = ( state = INITIAL_STATE_REDUCER_2, action ) => {

    switch ( action.type ) {

        case PRODUCT_GET_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case PRODUCT_GET_SUCCESS :
            return {
                loading : false,
                product : action.payload
            };

        // in this case, we will send the error in the payload
        case PRODUCT_GET_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, we will return the initial state
        case PRODUCT_GET_RESET :
            return {
                product : { reviews : [] }
            };

        default :
            return state;

    } // end of Switch

} // end of reducer


// ==============================
// Ruducer 3
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_3 = {

};

// Reducer 3
// create a reducer to delete a product from the admin product list screen and the database
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const productDeleteAdminReducer = ( state = INITIAL_STATE_REDUCER_3, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case PRODUCT_DELETE_ADMIN_REQUEST :
            return {
                loading : true
            };

        // in this case, we will just set success equal to true
        case PRODUCT_DELETE_ADMIN_SUCCESS :
            return {
                loading : false,
                success : true  
            };

        // in this case, we will send the error in the payload
        case PRODUCT_DELETE_ADMIN_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 4
// ==============================

// set up the initial state first
const INITIAL_STATE_REDUCER_4 = {
    product : {}
};

// Reducer 4
// create a reducer to create a product with dummy sample data and then save it to the database
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const productCreateAdminReducer = ( state = INITIAL_STATE_REDUCER_4, action ) => {

    switch ( action.type ) {

        case PRODUCT_CREATE_ADMIN_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case PRODUCT_CREATE_ADMIN_SUCCESS :
            return {
                loading : false,
                success : true,
                product : action.payload
            };

        // in this case, we will send the error in the payload
        case PRODUCT_CREATE_ADMIN_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, we will return an empty product object
        case PRODUCT_CREATE_ADMIN_RESET :
            return {
                product : {}
            };

        default :
            return state;

    } // end of Switch

} // end of reducer


// ==============================
// Ruducer 5
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_5 = {
    product : {}
};

// Reducer 5
// create a reducer to update a product and save the updated product to the database and a reducer
// takes in 2 arguments: the initial state and an action and we want to set state equal to
// the initial state
export const productUpdateAdminReducer = ( state = INITIAL_STATE_REDUCER_5, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case PRODUCT_UPDATE_ADMIN_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case PRODUCT_UPDATE_ADMIN_SUCCESS :
            return {
                loading : false,
                success : true,
                product : action.payload  
            };

        // in this case, we will send the error in the payload
        case PRODUCT_UPDATE_ADMIN_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, we will return an empty product object
        case PRODUCT_UPDATE_ADMIN_RESET :
            return {
                product : {}
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 6
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_6 = {

};

// Reducer 6
// create a reducer to create a product review and save the product review to the database and a
// reducer takes in 2 arguments: the initial state and an action and we want to set state equal
// to the initial state
export const productCreateReviewReducer = ( state = INITIAL_STATE_REDUCER_6, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case PRODUCT_CREATE_REVIEW_REQUEST :
            return {
                loading : true
            };

        // in this case, we will set success to true
        case PRODUCT_CREATE_REVIEW_SUCCESS :
            return {
                loading : false,
                success : true
            };

        // in this case, we will send the error in the payload
        case PRODUCT_CREATE_REVIEW_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, we will return an empty object
        case PRODUCT_CREATE_REVIEW_RESET :
            return {

            };

        default :
            return state;

    } // end of switch

} // end of reducer
*/




















// ===============================





















// at the beginning of lecture 87, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in our product constants
import { 
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_GET_REQUEST,
    PRODUCT_GET_SUCCESS,
    PRODUCT_GET_FAIL,
    PRODUCT_GET_RESET,
    PRODUCT_DELETE_ADMIN_REQUEST,
    PRODUCT_DELETE_ADMIN_SUCCESS,
    PRODUCT_DELETE_ADMIN_FAIL,
    PRODUCT_CREATE_ADMIN_REQUEST,
    PRODUCT_CREATE_ADMIN_SUCCESS,
    PRODUCT_CREATE_ADMIN_FAIL,
    PRODUCT_CREATE_ADMIN_RESET,
    PRODUCT_UPDATE_ADMIN_REQUEST,
    PRODUCT_UPDATE_ADMIN_SUCCESS,
    PRODUCT_UPDATE_ADMIN_FAIL,
    PRODUCT_UPDATE_ADMIN_RESET,
    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_FAIL,
    PRODUCT_CREATE_REVIEW_RESET
} from '../constants/product.constants';


// ==============================
// Ruducer 1
// ==============================

// set up the initial state first
const INITIAL_STATE_REDUCER_1 = {
    products : []
};

// Reducer 1
// create a reducer for the products or product list
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state, which in this case is " { products : [] } " 
export const productListReducer = ( state = INITIAL_STATE_REDUCER_1, action ) => {

    switch ( action.type ) {

        case PRODUCT_LIST_REQUEST :
            return {
                ...state,
                loading  : true
            };

        // remember that data or action.payload is made up of 3 key value pairs:
        // products : products, page : page, pages : Math.ceil( count / pageSize ) so we
        // need to account for these 3 key value pairs in action.payload

        // and now if I go to the home page I see 2 products and this is correct since
        // remember we set our pageSize in the product.controllers.js file is equal to 2

        // in this case, we will send the data in the payload
        case PRODUCT_LIST_SUCCESS :
            return {
                loading  : false,
                products : action.payload.products,
                page     : action.payload.page,
                pages    : action.payload.pages
            };

        // now we need to create some links at the bottom of the home page to handle the
        // additional product pages and we need to add the query string routes in our App.js
        // file
        
        // in this case, we will send the error in the payload
        case PRODUCT_LIST_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        default :
            return state;

    } // end of Switch

} // end of reducer


// ==============================
// Ruducer 2
// ==============================

// set up the initial state first
const INITIAL_STATE_REDUCER_2 = {
    product : { reviews : [] }
};

// Reducer 2
// create a reducer for the ProductScreen component or the product details page
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state, which in this case is " { product : { reviews : [] } } "

// remember we need to set reviews to an empty array inside the product object since in the
// product model we have " reviews : [ reviewSchema ] "
export const productGetReducer = ( state = INITIAL_STATE_REDUCER_2, action ) => {

    switch ( action.type ) {

        case PRODUCT_GET_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case PRODUCT_GET_SUCCESS :
            return {
                loading : false,
                product : action.payload
            };

        // in this case, we will send the error in the payload
        case PRODUCT_GET_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, we will return the initial state
        case PRODUCT_GET_RESET :
            return {
                product : { reviews : [] }
            };

        default :
            return state;

    } // end of Switch

} // end of reducer


// ==============================
// Ruducer 3
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_3 = {

};

// Reducer 3
// create a reducer to delete a product from the admin product list screen and the database
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const productDeleteAdminReducer = ( state = INITIAL_STATE_REDUCER_3, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case PRODUCT_DELETE_ADMIN_REQUEST :
            return {
                loading : true
            };

        // in this case, we will just set success equal to true
        case PRODUCT_DELETE_ADMIN_SUCCESS :
            return {
                loading : false,
                success : true  
            };

        // in this case, we will send the error in the payload
        case PRODUCT_DELETE_ADMIN_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 4
// ==============================

// set up the initial state first
const INITIAL_STATE_REDUCER_4 = {
    product : {}
};

// Reducer 4
// create a reducer to create a product with dummy sample data and then save it to the database
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const productCreateAdminReducer = ( state = INITIAL_STATE_REDUCER_4, action ) => {

    switch ( action.type ) {

        case PRODUCT_CREATE_ADMIN_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case PRODUCT_CREATE_ADMIN_SUCCESS :
            return {
                loading : false,
                success : true,
                product : action.payload
            };

        // in this case, we will send the error in the payload
        case PRODUCT_CREATE_ADMIN_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, we will return an empty product object
        case PRODUCT_CREATE_ADMIN_RESET :
            return {
                product : {}
            };

        default :
            return state;

    } // end of Switch

} // end of reducer


// ==============================
// Ruducer 5
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_5 = {
    product : {}
};

// Reducer 5
// create a reducer to update a product and save the updated product to the database and a reducer
// takes in 2 arguments: the initial state and an action and we want to set state equal to
// the initial state
export const productUpdateAdminReducer = ( state = INITIAL_STATE_REDUCER_5, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case PRODUCT_UPDATE_ADMIN_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case PRODUCT_UPDATE_ADMIN_SUCCESS :
            return {
                loading : false,
                success : true,
                product : action.payload  
            };

        // in this case, we will send the error in the payload
        case PRODUCT_UPDATE_ADMIN_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, we will return an empty product object
        case PRODUCT_UPDATE_ADMIN_RESET :
            return {
                product : {}
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 6
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_6 = {

};

// Reducer 6
// create a reducer to create a product review and save the product review to the database and a
// reducer takes in 2 arguments: the initial state and an action and we want to set state equal
// to the initial state
export const productCreateReviewReducer = ( state = INITIAL_STATE_REDUCER_6, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case PRODUCT_CREATE_REVIEW_REQUEST :
            return {
                loading : true
            };

        // in this case, we will set success to true
        case PRODUCT_CREATE_REVIEW_SUCCESS :
            return {
                loading : false,
                success : true
            };

        // in this case, we will send the error in the payload
        case PRODUCT_CREATE_REVIEW_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, we will return an empty object
        case PRODUCT_CREATE_REVIEW_RESET :
            return {

            };

        default :
            return state;

    } // end of switch

} // end of reducer


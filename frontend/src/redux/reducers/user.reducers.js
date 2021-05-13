
/*
// 1 -
// User reducer

// import in our user constants
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT
} from '../constants/user.constants';

// set up the initial state
const INITIAL_STATE = { 

};

// Reducer 1
// create a reducer for the user login
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userLoginReducer = ( state = INITIAL_STATE, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_LOGIN_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_LOGIN_SUCCESS :
            return {
                loading  : false,
                userInfo : action.payload                
            };
        
        // in this case, we will send the error in the payload
        case USER_LOGIN_FAIL :
            return {
                loading : false,
                error   : action.payload                
            };

        // in this case, we will return an empty object
        case USER_LOGOUT :
            return {

            };

        default :
            return state;

    } // end of switch

} // end of reducer

// now let's go to the store.js 6 - file


// End of 1 -
*/
























// ===============================























// at the beginning of lecture 44, given all the notes, I created a new file below without
// the notes so we are starting fresh

/*
// import in our user constants
import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNOUT,
    USER_NAME_DROPDOWN
} from '../constants/user.constants';


// set up the initial state
const INITIAL_STATE_REDUCER_1 = { 

};

// Reducer 1
// create a reducer for the user sign in
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userSignInReducer = ( state = INITIAL_STATE_REDUCER_1, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_SIGNIN_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_SIGNIN_SUCCESS :
            return {
                loading  : false,
                userInfo : action.payload                
            };
        
        // in this case, we will send the error in the payload
        case USER_SIGNIN_FAIL :
            return {
                loading : false,
                error   : action.payload                
            };

        // in this case, we will return an empty object
        case USER_SIGNOUT :
            return {

            };

        default :
            return state;

    } // end of switch

} // end of reducer


// 2 -
// set up the initial state and add the USER_NAME_DROPDOWN case below
const INITIAL_STATE_REDUCER_2 = { 
    show : false
};


// Reducer 2
// create a reducer for the user name dropdown
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userNameDropdownReducer = ( state = INITIAL_STATE_REDUCER_2, action ) => {

    switch ( action.type ) {

        // in this case, we will toggle the user name dropdown
        case USER_NAME_DROPDOWN :
            return {
                show : !state.show
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// End of 2 -
*/


























// ===============================

























// at the beginning of lecture 44, given all the notes, I created a new file below without
// the notes so we are starting fresh

/*
// import in our user constants
import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNOUT,
    USER_NAME_DROPDOWN,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL
} from '../constants/user.constants';


// set up the initial state
const INITIAL_STATE_REDUCER_1 = { 

};

// Reducer 1
// create a reducer for the user sign in
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userSignInReducer = ( state = INITIAL_STATE_REDUCER_1, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_SIGNIN_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_SIGNIN_SUCCESS :
            return {
                loading  : false,
                userInfo : action.payload                
            };
        
        // in this case, we will send the error in the payload
        case USER_SIGNIN_FAIL :
            return {
                loading : false,
                error   : action.payload                
            };

        // in this case, we will return an empty object
        case USER_SIGNOUT :
            return {

            };

        default :
            return state;

    } // end of switch

} // end of reducer


// set up the initial state and add the USER_NAME_DROPDOWN case below
const INITIAL_STATE_REDUCER_2 = { 
    show : false
};

// Reducer 2
// create a reducer for the user name dropdown
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userNameDropdownReducer = ( state = INITIAL_STATE_REDUCER_2, action ) => {

    switch ( action.type ) {

        // in this case, we will toggle the user name dropdown
        case USER_NAME_DROPDOWN :
            return {
                show : !state.show
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// 3 -
// coming from the user.constants.js 2 - file
// import the register contants above

// set up the initial state
const INITIAL_STATE_REDUCER_3 = { 

};

// Reducer 3
// create a reducer for the registration page
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userRegisterReducer = ( state = INITIAL_STATE_REDUCER_3, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_REGISTER_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_REGISTER_SUCCESS :
            return {
                loading  : false,
                userInfo : action.payload                
            };
        
        // in this case, we will send the error in the payload
        case USER_REGISTER_FAIL :
            return {
                loading : false,
                error   : action.payload                
            };

        default :
            return state;

    } // end of switch

} // end of reducer

// now let's go to the store.js 9- file


// End of 3 -
*/

























// ===============================

























// at the beginning of lecture 47, given all the notes, I created a new file below without
// the notes so we are starting fresh

/*
// import in our user constants
import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNOUT,
    USER_NAME_DROPDOWN,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL
} from '../constants/user.constants';


// set up the initial state
const INITIAL_STATE_REDUCER_1 = { 

};

// Reducer 1
// create a reducer for the user sign in
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userSignInReducer = ( state = INITIAL_STATE_REDUCER_1, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_SIGNIN_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_SIGNIN_SUCCESS :
            return {
                loading  : false,
                userInfo : action.payload                
            };
        
        // in this case, we will send the error in the payload
        case USER_SIGNIN_FAIL :
            return {
                loading : false,
                error   : action.payload                
            };

        // in this case, we will return an empty object
        case USER_SIGNOUT :
            return {

            };

        default :
            return state;

    } // end of switch

} // end of reducer


// set up the initial state and add the USER_NAME_DROPDOWN case below
const INITIAL_STATE_REDUCER_2 = { 
    show : false
};

// Reducer 2
// create a reducer for the user name dropdown
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userNameDropdownReducer = ( state = INITIAL_STATE_REDUCER_2, action ) => {

    switch ( action.type ) {

        // in this case, we will toggle the user name dropdown
        case USER_NAME_DROPDOWN :
            return {
                show : !state.show
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// set up the initial state
const INITIAL_STATE_REDUCER_3 = { 

};

// Reducer 3
// create a reducer for the registration page
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userRegisterReducer = ( state = INITIAL_STATE_REDUCER_3, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_REGISTER_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_REGISTER_SUCCESS :
            return {
                loading  : false,
                userInfo : action.payload                
            };
        
        // in this case, we will send the error in the payload
        case USER_REGISTER_FAIL :
            return {
                loading : false,
                error   : action.payload                
            };

        default :
            return state;

    } // end of switch

} // end of reducer



// 4 -
// coming from the user.constants.js 3 - file

// set up the initial state
const INITIAL_STATE_REDUCER_4 = { 
    user : {}
};

// Reducer 4
// create a reducer for the profile screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userDetailsReducer = ( state = INITIAL_STATE_REDUCER_4, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_DETAILS_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_DETAILS_SUCCESS :
            return {
                loading : false,
                user    : action.payload                
            };

        // in this case, we will send the error in the payload
        case USER_DETAILS_FAIL :
            return {
                loading : false,
                error   : action.payload                
            };

        default :
            return state;

    } // end of switch

} // end of reducer

// now let's go to the store.js 10 - file


// End of 4 -
*/



























// ===============================
























/*
// at the beginning of lecture 49, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in our user constants
import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNOUT,
    USER_NAME_DROPDOWN,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET
} from '../constants/user.constants';


// set up the initial state
const INITIAL_STATE_REDUCER_1 = { 

};

// Reducer 1
// create a reducer for the user sign in
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userSignInReducer = ( state = INITIAL_STATE_REDUCER_1, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_SIGNIN_REQUEST :
            return {
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_SIGNIN_SUCCESS :
            return {
                loading  : false,
                userInfo : action.payload                
            };
        
        // in this case, we will send the error in the payload
        case USER_SIGNIN_FAIL :
            return {
                loading : false,
                error   : action.payload                
            };

        // in this case, we will return an empty object
        case USER_SIGNOUT :
            return {

            };

        default :
            return state;

    } // end of switch

} // end of reducer


// set up the initial state and add the USER_NAME_DROPDOWN case below
const INITIAL_STATE_REDUCER_2 = { 
    show : false
};

// Reducer 2
// create a reducer for the user name dropdown
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userNameDropdownReducer = ( state = INITIAL_STATE_REDUCER_2, action ) => {

    switch ( action.type ) {

        // in this case, we will toggle the user name dropdown
        case USER_NAME_DROPDOWN :
            return {
                ...state,
                show : !state.show
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// set up the initial state
const INITIAL_STATE_REDUCER_3 = { 

};

// Reducer 3
// create a reducer for the registration page
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userRegisterReducer = ( state = INITIAL_STATE_REDUCER_3, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_REGISTER_REQUEST :
            return {
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_REGISTER_SUCCESS :
            return {
                loading  : false,
                userInfo : action.payload                
            };
        
        // in this case, we will send the error in the payload
        case USER_REGISTER_FAIL :
            return {
                loading : false,
                error   : action.payload                
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// set up the initial state
const INITIAL_STATE_REDUCER_4 = { 
    user : {}
};

// Reducer 4
// create a reducer for the profile screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userDetailsReducer = ( state = INITIAL_STATE_REDUCER_4, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_DETAILS_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_DETAILS_SUCCESS :
            return {
                loading : false,
                user    : action.payload                
            };

        // in this case, we will send the error in the payload
        case USER_DETAILS_FAIL :
            return {
                loading : false,
                error   : action.payload                
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// 5 -
// coming from the user.constants.js 4 - file

// set up the initial state
const INITIAL_STATE_REDUCER_5 = {

};

// Reducer 5
// create a reducer to update the profile screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userUpdateProfileReducer = ( state = INITIAL_STATE_REDUCER_5, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_UPDATE_PROFILE_REQUEST :
            return {
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_UPDATE_PROFILE_SUCCESS :
            return {
                loading  : false,
                success  : true,
                userInfo : action.payload  
            };

        // in this case, we will send the error in the payload
        case USER_UPDATE_PROFILE_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, we will return an empty object
        case USER_UPDATE_PROFILE_RESET :
            return {

            };

        default :
            return state;

    } // end of switch

} // end of reducer

// now let's go to the store.js 11 - file

// End of 5 -
*/


























// ===============================
























/*
// at the beginning of lecture 51, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in our user constants
import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNOUT,
    USER_NAME_DROPDOWN,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_RESET,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET
} from '../constants/user.constants';


// ==============================
// Ruducer 1
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_1 = { 

};

// Reducer 1
// create a reducer for the user sign in
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userSignInReducer = ( state = INITIAL_STATE_REDUCER_1, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_SIGNIN_REQUEST :
            return {
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_SIGNIN_SUCCESS :
            return {
                loading  : false,
                userInfo : action.payload                
            };
        
        // in this case, we will send the error in the payload
        case USER_SIGNIN_FAIL :
            return {
                loading : false,
                error   : action.payload                
            };

        // in this case, we will return an empty object
        case USER_SIGNOUT :
            return {

            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 2
// ==============================

// set up the initial state and add the USER_NAME_DROPDOWN case below
const INITIAL_STATE_REDUCER_2 = { 
    show : false
};

// Reducer 2
// create a reducer for the user name dropdown
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userNameDropdownReducer = ( state = INITIAL_STATE_REDUCER_2, action ) => {

    switch ( action.type ) {

        // in this case, we will toggle the user name dropdown
        case USER_NAME_DROPDOWN :
            return {
                ...state,
                show : !state.show
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 3
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_3 = { 

};

// Reducer 3
// create a reducer for the registration page
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userRegisterReducer = ( state = INITIAL_STATE_REDUCER_3, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_REGISTER_REQUEST :
            return {
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_REGISTER_SUCCESS :
            return {
                loading  : false,
                userInfo : action.payload                
            };
        
        // in this case, we will send the error in the payload
        case USER_REGISTER_FAIL :
            return {
                loading : false,
                error   : action.payload                
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// 6 -
// coming from the user.constants.js 5 - file

// let's add the USER_DETAILS_RESET constant below

// now let's go to the user.actions.js 6 - file

// End of 6 -


// ==============================
// Ruducer 4
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_4 = { 
    user : {}
};

// Reducer 4
// create a reducer for the profile screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userDetailsReducer = ( state = INITIAL_STATE_REDUCER_4, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_DETAILS_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_DETAILS_SUCCESS :
            return {
                loading : false,
                user    : action.payload                
            };

        // in this case, we will send the error in the payload
        case USER_DETAILS_FAIL :
            return {
                loading : false,
                error   : action.payload                
            };

        // in this case, USER_DETAILS_RESET will set user to an empty object
        case USER_DETAILS_RESET :
            return {
                user : {}
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

};

// Reducer 5
// create a reducer to update the profile screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userUpdateProfileReducer = ( state = INITIAL_STATE_REDUCER_5, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_UPDATE_PROFILE_REQUEST :
            return {
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_UPDATE_PROFILE_SUCCESS :
            return {
                loading  : false,
                success  : true,
                userInfo : action.payload  
            };

        // in this case, we will send the error in the payload
        case USER_UPDATE_PROFILE_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, we will return an empty object
        case USER_UPDATE_PROFILE_RESET :
            return {

            };

        default :
            return state;

    } // end of switch

} // end of reducer
*/

























// ===============================
























/*
// at the beginning of lecture 67, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in our user constants
import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNOUT,
    USER_DROPDOWN,
    ADMIN_DROPDOWN,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_RESET,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET,
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL
} from '../constants/user.constants';


// ==============================
// Ruducer 1
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_1 = { 

};

// Reducer 1
// create a reducer for the user sign in
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userSignInReducer = ( state = INITIAL_STATE_REDUCER_1, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_SIGNIN_REQUEST :
            return {
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_SIGNIN_SUCCESS :
            return {
                loading  : false,
                userInfo : action.payload                
            };
        
        // in this case, we will send the error in the payload
        case USER_SIGNIN_FAIL :
            return {
                loading : false,
                error   : action.payload                
            };

        // in this case, we will return an empty object
        case USER_SIGNOUT :
            return {

            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 2
// ==============================

// set up the initial state and add the USER_NAME_DROPDOWN case below
const INITIAL_STATE_REDUCER_2 = { 
    showUserDropdown : false
};

// Reducer 2
// create a reducer for the user name dropdown
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userDropdownReducer = ( state = INITIAL_STATE_REDUCER_2, action ) => {

    switch ( action.type ) {

        // in this case, we will toggle the user name dropdown
        case USER_DROPDOWN :
            return {
                ...state,
                showUserDropdown : !state.showUserDropdown
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// 8 -

// ==============================
// Ruducer 3
// ==============================

// set up the initial state and add the USER_NAME_DROPDOWN case below
const INITIAL_STATE_REDUCER_3 = { 
    showAdminDropdown : false
};

// Reducer 3
// create a reducer for the admin dropdown
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const adminDropdownReducer = ( state = INITIAL_STATE_REDUCER_3, action ) => {

    switch ( action.type ) {

        // in this case, we will toggle the admin dropdown
        case ADMIN_DROPDOWN :
            return {
                ...state,
                showAdminDropdown : !state.showAdminDropdown
            };

        default :
            return state;

    } // end of switch

} // end of reducer

// End of 8 -


// ==============================
// Ruducer 4
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_4 = { 

};

// Reducer 4
// create a reducer for the registration page
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userRegisterReducer = ( state = INITIAL_STATE_REDUCER_4, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_REGISTER_REQUEST :
            return {
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_REGISTER_SUCCESS :
            return {
                loading  : false,
                userInfo : action.payload                
            };
        
        // in this case, we will send the error in the payload
        case USER_REGISTER_FAIL :
            return {
                loading : false,
                error   : action.payload                
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
    user : {}
};

// Reducer 5
// create a reducer for the profile screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userDetailsReducer = ( state = INITIAL_STATE_REDUCER_5, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_DETAILS_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_DETAILS_SUCCESS :
            return {
                loading : false,
                user    : action.payload                
            };

        // in this case, we will send the error in the payload
        case USER_DETAILS_FAIL :
            return {
                loading : false,
                error   : action.payload                
            };

        // in this case, USER_DETAILS_RESET will set user to an empty object
        case USER_DETAILS_RESET :
            return {
                user : {}
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
// create a reducer to update the profile screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userUpdateProfileReducer = ( state = INITIAL_STATE_REDUCER_6, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_UPDATE_PROFILE_REQUEST :
            return {
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_UPDATE_PROFILE_SUCCESS :
            return {
                loading  : false,
                success  : true,
                userInfo : action.payload  
            };

        // in this case, we will send the error in the payload
        case USER_UPDATE_PROFILE_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, we will return an empty object
        case USER_UPDATE_PROFILE_RESET :
            return {

            };

        default :
            return state;

    } // end of switch

} // end of reducer


// 7 -
// coming from the user.constants.js 6 - file

// ==============================
// Ruducer 7
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_7 = {
    users : []
};

// Reducer 6
// create a reducer to get all the users for the admin user screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userListReducer = ( state = INITIAL_STATE_REDUCER_7, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_LIST_REQUEST :
            return {
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_LIST_SUCCESS :
            return {
                loading : false,
                users   : action.payload  
            };

        // in this case, we will send the error in the payload
        case USER_LIST_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        default :
            return state;

    } // end of switch

} // end of reducer

// go to 8 - above

// now let's go to the user.actions.js 7 - file

// End of 7 -
*/

























// ===============================
























/*
// at the beginning of lecture 68, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in our user constants
import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNOUT,
    USER_DROPDOWN,
    ADMIN_DROPDOWN,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_RESET,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET,
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    USER_LIST_RESET
} from '../constants/user.constants';


// ==============================
// Ruducer 1
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_1 = { 

};

// Reducer 1
// create a reducer for the user sign in
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userSignInReducer = ( state = INITIAL_STATE_REDUCER_1, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_SIGNIN_REQUEST :
            return {
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_SIGNIN_SUCCESS :
            return {
                loading  : false,
                userInfo : action.payload                
            };
        
        // in this case, we will send the error in the payload
        case USER_SIGNIN_FAIL :
            return {
                loading : false,
                error   : action.payload                
            };

        // in this case, we will return an empty object
        case USER_SIGNOUT :
            return {

            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 2
// ==============================

// set up the initial state and add the USER_NAME_DROPDOWN case below
const INITIAL_STATE_REDUCER_2 = { 
    showUserDropdown : false
};

// Reducer 2
// create a reducer for the user name dropdown
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userDropdownReducer = ( state = INITIAL_STATE_REDUCER_2, action ) => {

    switch ( action.type ) {

        // in this case, we will toggle the user name dropdown
        case USER_DROPDOWN :
            return {
                ...state,
                showUserDropdown : !state.showUserDropdown
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 3
// ==============================

// set up the initial state and add the USER_NAME_DROPDOWN case below
const INITIAL_STATE_REDUCER_3 = { 
    showAdminDropdown : false
};

// Reducer 3
// create a reducer for the admin dropdown
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const adminDropdownReducer = ( state = INITIAL_STATE_REDUCER_3, action ) => {

    switch ( action.type ) {

        // in this case, we will toggle the admin dropdown
        case ADMIN_DROPDOWN :
            return {
                ...state,
                showAdminDropdown : !state.showAdminDropdown
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 4
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_4 = { 

};

// Reducer 4
// create a reducer for the registration page
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userRegisterReducer = ( state = INITIAL_STATE_REDUCER_4, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_REGISTER_REQUEST :
            return {
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_REGISTER_SUCCESS :
            return {
                loading  : false,
                userInfo : action.payload                
            };
        
        // in this case, we will send the error in the payload
        case USER_REGISTER_FAIL :
            return {
                loading : false,
                error   : action.payload                
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
    user : {}
};

// Reducer 5
// create a reducer for the profile screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userDetailsReducer = ( state = INITIAL_STATE_REDUCER_5, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_DETAILS_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_DETAILS_SUCCESS :
            return {
                loading : false,
                user    : action.payload                
            };

        // in this case, we will send the error in the payload
        case USER_DETAILS_FAIL :
            return {
                loading : false,
                error   : action.payload                
            };

        // in this case, USER_DETAILS_RESET will set user to an empty object
        case USER_DETAILS_RESET :
            return {
                user : {}
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
// create a reducer to update the profile screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userUpdateProfileReducer = ( state = INITIAL_STATE_REDUCER_6, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_UPDATE_PROFILE_REQUEST :
            return {
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_UPDATE_PROFILE_SUCCESS :
            return {
                loading  : false,
                success  : true,
                userInfo : action.payload  
            };

        // in this case, we will send the error in the payload
        case USER_UPDATE_PROFILE_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, we will return an empty object
        case USER_UPDATE_PROFILE_RESET :
            return {

            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 7
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_7 = {
    users : []
};

// Reducer 6
// create a reducer to get all the users for the admin user screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userListReducer = ( state = INITIAL_STATE_REDUCER_7, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_LIST_REQUEST :
            return {
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_LIST_SUCCESS :
            return {
                loading : false,
                users   : action.payload  
            };

        // in this case, we will send the error in the payload
        case USER_LIST_FAIL :
            return {
                loading : false,
                error   : action.payload
            };


        // 9 -

        // in this case, reset the user list to an empty array
        case USER_LIST_RESET :
            return {
                users : []
            };

        // End of 9 -

        default :
            return state;

    } // end of switch

} // end of reducer
*/


























// ===============================
























/*
// at the beginning of lecture 69, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in our user constants
import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNOUT,
    USER_DROPDOWN,
    ADMIN_DROPDOWN,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_RESET,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET,
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    USER_LIST_RESET,
    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_DELETE_FAIL
} from '../constants/user.constants';


// ==============================
// Ruducer 1
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_1 = { 

};

// Reducer 1
// create a reducer for the user sign in
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userSignInReducer = ( state = INITIAL_STATE_REDUCER_1, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_SIGNIN_REQUEST :
            return {
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_SIGNIN_SUCCESS :
            return {
                loading  : false,
                userInfo : action.payload                
            };
        
        // in this case, we will send the error in the payload
        case USER_SIGNIN_FAIL :
            return {
                loading : false,
                error   : action.payload                
            };

        // in this case, we will return an empty object
        case USER_SIGNOUT :
            return {

            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 2
// ==============================

// set up the initial state and add the USER_NAME_DROPDOWN case below
const INITIAL_STATE_REDUCER_2 = { 
    showUserDropdown : false
};

// Reducer 2
// create a reducer for the user name dropdown
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userDropdownReducer = ( state = INITIAL_STATE_REDUCER_2, action ) => {

    switch ( action.type ) {

        // in this case, we will toggle the user name dropdown
        case USER_DROPDOWN :
            return {
                ...state,
                showUserDropdown : !state.showUserDropdown
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 3
// ==============================

// set up the initial state and add the USER_NAME_DROPDOWN case below
const INITIAL_STATE_REDUCER_3 = { 
    showAdminDropdown : false
};

// Reducer 3
// create a reducer for the admin dropdown
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const adminDropdownReducer = ( state = INITIAL_STATE_REDUCER_3, action ) => {

    switch ( action.type ) {

        // in this case, we will toggle the admin dropdown
        case ADMIN_DROPDOWN :
            return {
                ...state,
                showAdminDropdown : !state.showAdminDropdown
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 4
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_4 = { 

};

// Reducer 4
// create a reducer for the registration page
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userRegisterReducer = ( state = INITIAL_STATE_REDUCER_4, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_REGISTER_REQUEST :
            return {
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_REGISTER_SUCCESS :
            return {
                loading  : false,
                userInfo : action.payload                
            };
        
        // in this case, we will send the error in the payload
        case USER_REGISTER_FAIL :
            return {
                loading : false,
                error   : action.payload                
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
    user : {}
};

// Reducer 5
// create a reducer for the profile screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userDetailsReducer = ( state = INITIAL_STATE_REDUCER_5, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_DETAILS_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_DETAILS_SUCCESS :
            return {
                loading : false,
                user    : action.payload                
            };

        // in this case, we will send the error in the payload
        case USER_DETAILS_FAIL :
            return {
                loading : false,
                error   : action.payload                
            };

        // in this case, USER_DETAILS_RESET will set user to an empty object
        case USER_DETAILS_RESET :
            return {
                user : {}
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
// create a reducer to update the profile screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userUpdateProfileReducer = ( state = INITIAL_STATE_REDUCER_6, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_UPDATE_PROFILE_REQUEST :
            return {
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_UPDATE_PROFILE_SUCCESS :
            return {
                loading  : false,
                success  : true,
                userInfo : action.payload  
            };

        // in this case, we will send the error in the payload
        case USER_UPDATE_PROFILE_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, we will return an empty object
        case USER_UPDATE_PROFILE_RESET :
            return {

            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 7
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_7 = {
    users : []
};

// Reducer 6
// create a reducer to get all the users for the admin user screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userListReducer = ( state = INITIAL_STATE_REDUCER_7, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_LIST_REQUEST :
            return {
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_LIST_SUCCESS :
            return {
                loading : false,
                users   : action.payload  
            };

        // in this case, we will send the error in the payload
        case USER_LIST_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, reset the user list to an empty array
        case USER_LIST_RESET :
            return {
                users : []
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// 10 -
// coming from the user.constants.js 8 - file

// ==============================
// Ruducer 8
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_8 = {

};

// Reducer 7
// create a reducer to delete a user from the admin user list screen and the database
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userDeleteReducer = ( state = INITIAL_STATE_REDUCER_8, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_DELETE_REQUEST :
            return {
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_DELETE_SUCCESS :
            return {
                loading : false,
                success : true  
            };

        // in this case, we will send the error in the payload
        case USER_DELETE_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        default :
            return state;

    } // end of switch

} // end of reducer

// now let's go to the store.js 19 - file

// End of 10 -
*/


























// ===============================
























/*
// at the beginning of lecture 70, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in our user constants
import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNOUT,
    USER_DROPDOWN,
    ADMIN_DROPDOWN,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_RESET,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET,
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    USER_LIST_RESET,
    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_DELETE_FAIL,
    USER_GET_REQUEST,
    USER_GET_SUCCESS,
    USER_GET_FAIL
} from '../constants/user.constants';


// ==============================
// Ruducer 1
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_1 = { 

};

// Reducer 1
// create a reducer for the user sign in
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userSignInReducer = ( state = INITIAL_STATE_REDUCER_1, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_SIGNIN_REQUEST :
            return {
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_SIGNIN_SUCCESS :
            return {
                loading  : false,
                userInfo : action.payload                
            };
        
        // in this case, we will send the error in the payload
        case USER_SIGNIN_FAIL :
            return {
                loading : false,
                error   : action.payload                
            };

        // in this case, we will return an empty object
        case USER_SIGNOUT :
            return {

            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 2
// ==============================

// set up the initial state and add the USER_NAME_DROPDOWN case below
const INITIAL_STATE_REDUCER_2 = { 
    showUserDropdown : false
};

// Reducer 2
// create a reducer for the user name dropdown
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userDropdownReducer = ( state = INITIAL_STATE_REDUCER_2, action ) => {

    switch ( action.type ) {

        // in this case, we will toggle the user name dropdown
        case USER_DROPDOWN :
            return {
                ...state,
                showUserDropdown : !state.showUserDropdown
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 3
// ==============================

// set up the initial state and add the USER_NAME_DROPDOWN case below
const INITIAL_STATE_REDUCER_3 = { 
    showAdminDropdown : false
};

// Reducer 3
// create a reducer for the admin dropdown
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const adminDropdownReducer = ( state = INITIAL_STATE_REDUCER_3, action ) => {

    switch ( action.type ) {

        // in this case, we will toggle the admin dropdown
        case ADMIN_DROPDOWN :
            return {
                ...state,
                showAdminDropdown : !state.showAdminDropdown
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 4
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_4 = { 

};

// Reducer 4
// create a reducer for the registration page
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userRegisterReducer = ( state = INITIAL_STATE_REDUCER_4, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_REGISTER_REQUEST :
            return {
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_REGISTER_SUCCESS :
            return {
                loading  : false,
                userInfo : action.payload                
            };
        
        // in this case, we will send the error in the payload
        case USER_REGISTER_FAIL :
            return {
                loading : false,
                error   : action.payload                
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
    user : {}
};

// Reducer 5
// create a reducer for the profile screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userGetProfileReducer = ( state = INITIAL_STATE_REDUCER_5, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_DETAILS_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_DETAILS_SUCCESS :
            return {
                loading : false,
                user    : action.payload                
            };

        // in this case, we will send the error in the payload
        case USER_DETAILS_FAIL :
            return {
                loading : false,
                error   : action.payload                
            };

        // in this case, USER_DETAILS_RESET will set user to an empty object
        case USER_DETAILS_RESET :
            return {
                user : {}
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
// create a reducer to update the profile screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userUpdateProfileReducer = ( state = INITIAL_STATE_REDUCER_6, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_UPDATE_PROFILE_REQUEST :
            return {
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_UPDATE_PROFILE_SUCCESS :
            return {
                loading  : false,
                success  : true,
                userInfo : action.payload  
            };

        // in this case, we will send the error in the payload
        case USER_UPDATE_PROFILE_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, we will return an empty object
        case USER_UPDATE_PROFILE_RESET :
            return {

            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 7
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_7 = {
    users : []
};

// Reducer 7
// create a reducer to get all the users for the admin user screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userListAdminReducer = ( state = INITIAL_STATE_REDUCER_7, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_LIST_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_LIST_SUCCESS :
            return {
                loading : false,
                users   : action.payload  
            };

        // in this case, we will send the error in the payload
        case USER_LIST_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, reset the user list to an empty array
        case USER_LIST_RESET :
            return {
                users : []
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 8
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_8 = {

};

// Reducer 8
// create a reducer to delete a user from the admin user list screen and the database
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userDeleteAdminReducer = ( state = INITIAL_STATE_REDUCER_8, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_DELETE_REQUEST :
            return {
                loading : true
            };

        // in this case, we will just set a success key value pair
        case USER_DELETE_SUCCESS :
            return {
                loading : false,
                success : true  
            };

        // in this case, we will send the error in the payload
        case USER_DELETE_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// 9 -

// ==============================
// Ruducer 9
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_9 = {
    user : {}
};

// Reducer 9
// create a reducer to delete a user from the admin user list screen and the database
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userGetAdminReducer = ( state = INITIAL_STATE_REDUCER_9, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_GET_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_GET_SUCCESS :
            return {
                loading : false,
                user    : action.payload  
            };

        // in this case, we will send the error in the payload
        case USER_GET_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        default :
            return state;

    } // end of switch

} // end of reducer

// now let's go to the store.js 20 - file

// End of 9 -
*/


























// ===============================
























/*
// at the beginning of lecture 70, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in our user constants
import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNOUT_SUCCESS,
    USER_DROPDOWN,
    ADMIN_DROPDOWN,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_GET_PROFILE_REQUEST,
    USER_GET_PROFILE_SUCCESS,
    USER_GET_PROFILE_FAIL,
    USER_GET_PROFILE_RESET,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET,
    USER_LIST_ADMIN_REQUEST,
    USER_LIST_ADMIN_SUCCESS,
    USER_LIST_ADMIN_FAIL,
    USER_LIST_ADMIN_RESET,
    USER_DELETE_ADMIN_REQUEST,
    USER_DELETE_ADMIN_SUCCESS,
    USER_DELETE_ADMIN_FAIL,
    USER_GET_ADMIN_REQUEST,
    USER_GET_ADMIN_SUCCESS,
    USER_GET_ADMIN_FAIL,
    USER_GET_ADMIN_RESET,
    USER_UPDATE_ADMIN_REQUEST,
    USER_UPDATE_ADMIN_SUCCESS,
    USER_UPDATE_ADMIN_FAIL,
    USER_UPDATE_ADMIN_RESET
} from '../constants/user.constants';


// ==============================
// Ruducer 1
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_1 = { 

};

// Reducer 1
// create a reducer for the user sign in
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userSignInReducer = ( state = INITIAL_STATE_REDUCER_1, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_SIGNIN_REQUEST :
            return {
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_SIGNIN_SUCCESS :
            return {
                loading  : false,
                userInfo : action.payload                
            };
        
        // in this case, we will send the error in the payload
        case USER_SIGNIN_FAIL :
            return {
                loading : false,
                error   : action.payload                
            };

        // in this case, we will return an empty object
        case USER_SIGNOUT_SUCCESS :
            return {

            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 2
// ==============================

// set up the initial state and add the USER_NAME_DROPDOWN case below
const INITIAL_STATE_REDUCER_2 = { 
    showUserDropdown : false
};

// Reducer 2
// create a reducer for the user name dropdown
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userDropdownReducer = ( state = INITIAL_STATE_REDUCER_2, action ) => {

    switch ( action.type ) {

        // in this case, we will toggle the user name dropdown
        case USER_DROPDOWN :
            return {
                ...state,
                showUserDropdown : !state.showUserDropdown
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 3
// ==============================

// set up the initial state and add the USER_NAME_DROPDOWN case below
const INITIAL_STATE_REDUCER_3 = { 
    showAdminDropdown : false
};

// Reducer 3
// create a reducer for the admin dropdown
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const adminDropdownReducer = ( state = INITIAL_STATE_REDUCER_3, action ) => {

    switch ( action.type ) {

        // in this case, we will toggle the admin dropdown
        case ADMIN_DROPDOWN :
            return {
                ...state,
                showAdminDropdown : !state.showAdminDropdown
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 4
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_4 = { 

};

// Reducer 4
// create a reducer for the registration page
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userRegisterReducer = ( state = INITIAL_STATE_REDUCER_4, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_REGISTER_REQUEST :
            return {
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_REGISTER_SUCCESS :
            return {
                loading  : false,
                userInfo : action.payload                
            };
        
        // in this case, we will send the error in the payload
        case USER_REGISTER_FAIL :
            return {
                loading : false,
                error   : action.payload                
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
    user : {}
};

// Reducer 5
// create a reducer for the profile screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userGetProfileReducer = ( state = INITIAL_STATE_REDUCER_5, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_GET_PROFILE_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_GET_PROFILE_SUCCESS :
            return {
                loading : false,
                user    : action.payload                
            };

        // in this case, we will send the error in the payload
        case USER_GET_PROFILE_FAIL :
            return {
                loading : false,
                error   : action.payload                
            };

        // in this case, USER_GET_PROFILE_RESET will set user to an empty object
        case USER_GET_PROFILE_RESET :
            return {
                user : {}
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
// create a reducer to update the profile screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userUpdateProfileReducer = ( state = INITIAL_STATE_REDUCER_6, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_UPDATE_PROFILE_REQUEST :
            return {
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_UPDATE_PROFILE_SUCCESS :
            return {
                loading  : false,
                success  : true,
                userInfo : action.payload  
            };

        // in this case, we will send the error in the payload
        case USER_UPDATE_PROFILE_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, we will return an empty object
        case USER_UPDATE_PROFILE_RESET :
            return {

            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 7
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_7 = {
    users : []
};

// Reducer 7
// create a reducer to get all the users for the admin user screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userListAdminReducer = ( state = INITIAL_STATE_REDUCER_7, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_LIST_ADMIN_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_LIST_ADMIN_SUCCESS :
            return {
                loading : false,
                users   : action.payload  
            };

        // in this case, we will send the error in the payload
        case USER_LIST_ADMIN_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, reset the user list to an empty array
        case USER_LIST_ADMIN_RESET :
            return {
                users : []
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 8
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_8 = {

};

// Reducer 8
// create a reducer to delete a user from the admin user list screen and the database
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userDeleteAdminReducer = ( state = INITIAL_STATE_REDUCER_8, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_DELETE_ADMIN_REQUEST :
            return {
                loading : true
            };

        // in this case, we will just set a success key value pair
        case USER_DELETE_ADMIN_SUCCESS :
            return {
                loading : false,
                success : true  
            };

        // in this case, we will send the error in the payload
        case USER_DELETE_ADMIN_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 9
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_9 = {
    user : {}
};

// Reducer 9
// create a reducer to get a user from the database and then display that user on the
// admin user edit screen and a reducer takes in 2 arguments: the initial state and an
// action and we want to set state equal to the initial state
export const userGetAdminReducer = ( state = INITIAL_STATE_REDUCER_9, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_GET_ADMIN_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_GET_ADMIN_SUCCESS :
            return {
                loading : false,
                user    : action.payload  
            };

        // in this case, we will send the error in the payload
        case USER_GET_ADMIN_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, we will return an empty user object
        case USER_GET_ADMIN_RESET :
            return {
                user : {}
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// 10 -
// coming from the user.actions.js 11 - file

// ==============================
// Ruducer 10
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_10 = {
    user : {}
};

// Reducer 10
// create a reducer to update a user and save the updated user to the database and a reducer
// takes in 2 arguments: the initial state and an action and we want to set state equal to
// the initial state
export const userUpdateAdminReducer = ( state = INITIAL_STATE_REDUCER_10, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_UPDATE_ADMIN_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        // remember even though we don't use the user object from the userUpdateAdmin piece of
        // state in the admin user edit screen I decided to pass in " user : action.payload "
        // below just to be thorough
        case USER_UPDATE_ADMIN_SUCCESS :
            return {
                loading : false,
                success : true,
                user    : action.payload  
            };

        // in this case, we will send the error in the payload
        case USER_UPDATE_ADMIN_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, we will return an empty user object
        case USER_UPDATE_ADMIN_RESET :
            return {
                user : {}
            };

        default :
            return state;

    } // end of switch

} // end of reducer

// now let's go to the store.js 21 - file

// End of 10 -
*/

























// ===============================

























// at the beginning of lecture 73, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in our user constants
import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNOUT_SUCCESS,
    USER_DROPDOWN,
    ADMIN_DROPDOWN,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_GET_PROFILE_REQUEST,
    USER_GET_PROFILE_SUCCESS,
    USER_GET_PROFILE_FAIL,
    USER_GET_PROFILE_RESET,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET,
    USER_LIST_ADMIN_REQUEST,
    USER_LIST_ADMIN_SUCCESS,
    USER_LIST_ADMIN_FAIL,
    USER_LIST_ADMIN_RESET,
    USER_DELETE_ADMIN_REQUEST,
    USER_DELETE_ADMIN_SUCCESS,
    USER_DELETE_ADMIN_FAIL,
    USER_GET_ADMIN_REQUEST,
    USER_GET_ADMIN_SUCCESS,
    USER_GET_ADMIN_FAIL,
    USER_GET_ADMIN_RESET,
    USER_UPDATE_ADMIN_REQUEST,
    USER_UPDATE_ADMIN_SUCCESS,
    USER_UPDATE_ADMIN_FAIL,
    USER_UPDATE_ADMIN_RESET
} from '../constants/user.constants';


// ==============================
// Ruducer 1
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_1 = { 

};

// Reducer 1
// create a reducer for the user sign in
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userSignInReducer = ( state = INITIAL_STATE_REDUCER_1, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_SIGNIN_REQUEST :
            return {
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_SIGNIN_SUCCESS :
            return {
                loading  : false,
                userInfo : action.payload                
            };
        
        // in this case, we will send the error in the payload
        case USER_SIGNIN_FAIL :
            return {
                loading : false,
                error   : action.payload                
            };

        // in this case, we will return an empty object
        case USER_SIGNOUT_SUCCESS :
            return {

            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 2
// ==============================

// set up the initial state and add the USER_NAME_DROPDOWN case below
const INITIAL_STATE_REDUCER_2 = { 
    showUserDropdown : false
};

// Reducer 2
// create a reducer for the user name dropdown
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userDropdownReducer = ( state = INITIAL_STATE_REDUCER_2, action ) => {

    switch ( action.type ) {

        // in this case, we will toggle the user name dropdown
        case USER_DROPDOWN :
            return {
                ...state,
                showUserDropdown : !state.showUserDropdown
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 3
// ==============================

// set up the initial state and add the USER_NAME_DROPDOWN case below
const INITIAL_STATE_REDUCER_3 = { 
    showAdminDropdown : false
};

// Reducer 3
// create a reducer for the admin dropdown
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const adminDropdownReducer = ( state = INITIAL_STATE_REDUCER_3, action ) => {

    switch ( action.type ) {

        // in this case, we will toggle the admin dropdown
        case ADMIN_DROPDOWN :
            return {
                ...state,
                showAdminDropdown : !state.showAdminDropdown
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 4
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_4 = { 

};

// Reducer 4
// create a reducer for the registration page
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userRegisterReducer = ( state = INITIAL_STATE_REDUCER_4, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_REGISTER_REQUEST :
            return {
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_REGISTER_SUCCESS :
            return {
                loading  : false,
                userInfo : action.payload                
            };
        
        // in this case, we will send the error in the payload
        case USER_REGISTER_FAIL :
            return {
                loading : false,
                error   : action.payload                
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
    user : {}
};

// Reducer 5
// create a reducer for the profile screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userGetProfileReducer = ( state = INITIAL_STATE_REDUCER_5, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_GET_PROFILE_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_GET_PROFILE_SUCCESS :
            return {
                loading : false,
                user    : action.payload                
            };

        // in this case, we will send the error in the payload
        case USER_GET_PROFILE_FAIL :
            return {
                loading : false,
                error   : action.payload                
            };

        // in this case, USER_GET_PROFILE_RESET will set user to an empty object
        case USER_GET_PROFILE_RESET :
            return {
                user : {}
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
// create a reducer to update the profile screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userUpdateProfileReducer = ( state = INITIAL_STATE_REDUCER_6, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_UPDATE_PROFILE_REQUEST :
            return {
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_UPDATE_PROFILE_SUCCESS :
            return {
                loading  : false,
                success  : true,
                userInfo : action.payload  
            };

        // in this case, we will send the error in the payload
        case USER_UPDATE_PROFILE_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, we will return an empty object
        case USER_UPDATE_PROFILE_RESET :
            return {

            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 7
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_7 = {
    users : []
};

// Reducer 7
// create a reducer to get all the users for the admin user screen
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userListAdminReducer = ( state = INITIAL_STATE_REDUCER_7, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_LIST_ADMIN_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_LIST_ADMIN_SUCCESS :
            return {
                loading : false,
                users   : action.payload  
            };

        // in this case, we will send the error in the payload
        case USER_LIST_ADMIN_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, reset the user list to an empty array
        case USER_LIST_ADMIN_RESET :
            return {
                users : []
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 8
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_8 = {

};

// Reducer 8
// create a reducer to delete a user from the admin user list screen and the database
// and a reducer takes in 2 arguments: the initial state and an action and we want to set
// state equal to the initial state
export const userDeleteAdminReducer = ( state = INITIAL_STATE_REDUCER_8, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_DELETE_ADMIN_REQUEST :
            return {
                loading : true
            };

        // in this case, we will just set a success key value pair
        case USER_DELETE_ADMIN_SUCCESS :
            return {
                loading : false,
                success : true  
            };

        // in this case, we will send the error in the payload
        case USER_DELETE_ADMIN_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 9
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_9 = {
    user : {}
};

// Reducer 9
// create a reducer to get a user from the database and then display that user on the
// admin user edit screen and a reducer takes in 2 arguments: the initial state and an
// action and we want to set state equal to the initial state
export const userGetAdminReducer = ( state = INITIAL_STATE_REDUCER_9, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_GET_ADMIN_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        case USER_GET_ADMIN_SUCCESS :
            return {
                loading : false,
                user    : action.payload  
            };

        // in this case, we will send the error in the payload
        case USER_GET_ADMIN_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, we will return an empty user object
        case USER_GET_ADMIN_RESET :
            return {
                user : {}
            };

        default :
            return state;

    } // end of switch

} // end of reducer


// ==============================
// Ruducer 10
// ==============================

// set up the initial state
const INITIAL_STATE_REDUCER_10 = {
    user : {}
};

// Reducer 10
// create a reducer to update a user and save the updated user to the database and a reducer
// takes in 2 arguments: the initial state and an action and we want to set state equal to
// the initial state
export const userUpdateAdminReducer = ( state = INITIAL_STATE_REDUCER_10, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_UPDATE_ADMIN_REQUEST :
            return {
                ...state,
                loading : true
            };

        // in this case, we will send the data in the payload
        // remember even though we don't use the user object from the userUpdateAdmin piece of
        // state in the admin user edit screen I decided to pass in " user : action.payload "
        // below just to be thorough
        case USER_UPDATE_ADMIN_SUCCESS :
            return {
                loading : false,
                success : true,
                user    : action.payload  
            };

        // in this case, we will send the error in the payload
        case USER_UPDATE_ADMIN_FAIL :
            return {
                loading : false,
                error   : action.payload
            };

        // in this case, we will return an empty user object
        case USER_UPDATE_ADMIN_RESET :
            return {
                user : {}
            };

        default :
            return state;

    } // end of switch

} // end of reducer



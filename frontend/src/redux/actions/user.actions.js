
/*
// 1 -

// user login actions file

// import in axios
import axios from 'axios'

// import in the user login constants and these constants represent our actions
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT
} from '../constants/user.constants';


// Action Creator 1
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user signs in and remember to pass in
// as arguments the email and password
export const userLoginActionCreator = ( email, password ) => async ( dispatch ) => {

    try {

        // let's dispatch our action or " USER_LOGIN_REQUEST "
        dispatch( {
            type : USER_LOGIN_REQUEST
        } );

        // create our endpoint
        const endpoint = `/api/users/login`;

        // create our config object
        // since we are sending data ( i.e. the email and password ) we need to indicate in
        // the headers the content type or application/json in our case and let's create a
        // config object to help us do that
        const config = {
            headers : {
                'Content-Type': 'application/json'
            }
        };

        // below we are making a POST request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin,
            token   : generateToken( user._id )
        */

        // and the second argument in the request will be the email and password key
        // value pairs and remember we are sending the email and password key value
        // pairs to the server as part of the browser request or the request from
        // the front end and the email and password key value pairs will be picked
        // up in the user.controller.js file or the back end and more specifically
        // in this line of code: " const { email, password } = req.body; " and we
        // will use the email and password to authenitcate the user and then once
        // authenticated sign the user into the application

        /*
        // and the third argument in the request will be our config object
        const { data } = await axios.post(
            endpoint,
            {
                email    : email,
                password : password
            },
            config
        );

        // let's dispatch our action or " PRODUCT_GET_SUCCESS "
        dispatch( {
            type    : PRODUCT_GET_SUCCESS,
            payload : data
        } );

        // next we want to save the user information in local storage
        localStorage.setItem( 'userInfo', JSON.stringify( data ) );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_LOGIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_LOGIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}

// now we want to save the userInfo from local storage in the initial state in the store.js
// file and let's go to the store.js 7 - file now


// End of 1 -
*/


























// ===============================























// at the beginning of lecture 44, given all the notes, I created a new file below without
// the notes so we are starting fresh

/*
// import in axios
import axios from 'axios'

// import in the user sign in or login constants and these constants represent our actions
import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNOUT,
    USER_NAME_DROPDOWN
} from '../constants/user.constants';


// Action Creator 1
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user signs in and remember to pass in
// as arguments the email and password
export const userSignInActionCreator = ( email, password ) => async ( dispatch ) => {

    try {

        // let's dispatch our action or " USER_SIGNIN_REQUEST "
        dispatch( {
            type : USER_SIGNIN_REQUEST
        } );

        // create our endpoint
        const endpoint = `/api/users/login`;

        // create our config object
        // since we are sending data ( i.e. the email and password ) we need to indicate in
        // the headers the content type or application/json in our case and let's create a
        // config object to help us do that
        const config = {
            headers : {
                'Content-Type': 'application/json'
            }
        };

        // below we are making a POST request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin,
            token   : generateToken( user._id )
        */

        // and the second argument in the request will be the email and password key
        // value pairs and remember we are sending the email and password key value
        // pairs to the server as part of the browser request

        /*
        // and the third argument in the request will be our config object
        const { data } = await axios.post(
            endpoint,
            {
                email    : email,
                password : password
            },
            config
        );

        // let's dispatch our action or " USER_SIGNIN_SUCCESS "
        dispatch( {
            type    : USER_SIGNIN_SUCCESS,
            payload : data
        } );

        // we want to save the user information in local storage
        localStorage.setItem( 'userInfo', JSON.stringify( data ) );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_SIGNIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_SIGNIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// 2 -
// coming from the nav-bar-dropdown.component.jsx 1 - file

// Action Creator 2
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user signs out
export const userSignOutActionCreator = () => async ( dispatch ) => {

    // first, let's remove userInfo from local storage
    localStorage.removeItem( 'userInfo' );

    // then let's dispatch our action or " USER_SIGNOUT "
    // and remember under the USER_SIGNOUT case, we returned an empty object in the
    // user.reducer.js file or 
   
    /*
        case USER_SIGNOUT :
            return {

            };
    */

    /*
    // and this will clear out our user state so userSignIn will be null
    dispatch( {
        type : USER_SIGNOUT
    } );

}

// now let's go back to the nav-bar-dropdown.component.jsx 2 - file


// Action Creator 3
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user clicks on their name in the
// navigation bar and thereby shows the nav bar dropdown element
export const userNameDropdownActionCreator = () => async ( dispatch ) => {

    // let's dispatch our action or " USER_NAME_DROPDOWN "
    dispatch( {
        type : USER_NAME_DROPDOWN
    } );

}


// End of 2 -
*/




























// ===============================
























// at the beginning of lecture 46, given all the notes, I created a new file below without
// the notes so we are starting fresh

/*
// import in axios
import axios from 'axios'

// import in the user sign in or login constants and these constants represent our actions
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


// Action Creator 1
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user signs in and remember to pass in
// as arguments the email and password
export const userSignInActionCreator = ( email, password ) => async ( dispatch ) => {

    try {

        // let's dispatch our action or " USER_SIGNIN_REQUEST "
        dispatch( {
            type : USER_SIGNIN_REQUEST
        } );

        // create our endpoint
        const endpoint = `/api/users/login`;

        // create our config object
        // since we are sending data ( i.e. the email and password ) we need to indicate in
        // the headers the content type or application/json in our case and let's create a
        // config object to help us do that
        const config = {
            headers : {
                'Content-Type': 'application/json'
            }
        };

        // below we are making a POST request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin,
            token   : generateToken( user._id )
        */

        // and the second argument in the request will be the email and password key
        // value pairs and remember we are sending the email and password key value
        // pairs to the server as part of the browser request

        // and the third argument in the request will be our config object
        /*
        const { data } = await axios.post(
            endpoint,
            {
                email    : email,
                password : password
            },
            config
        );

        // let's dispatch our action or " USER_SIGNIN_SUCCESS "
        dispatch( {
            type    : USER_SIGNIN_SUCCESS,
            payload : data
        } );

        // we want to save the user information in local storage
        localStorage.setItem( 'userInfo', JSON.stringify( data ) );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_SIGNIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_SIGNIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// Action Creator 2
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user signs out
export const userSignOutActionCreator = () => async ( dispatch ) => {

    // first, let's remove userInfo from local storage
    localStorage.removeItem( 'userInfo' );

    // then let's dispatch our action or " USER_SIGNOUT "
    // and remember under the USER_SIGNOUT case, we returned an empty object in the
    // user.reducer.js file or 
   
    /*
        case USER_SIGNOUT :
            return {

            };
    */

    // and this will clear out our user state so userSignIn will be null
    /*
    dispatch( {
        type : USER_SIGNOUT
    } );

}


// Action Creator 3
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user clicks on their name in the
// navigation bar and thereby shows the nav bar dropdown element
export const userNameDropdownActionCreator = () => async ( dispatch ) => {

    // let's dispatch our action or " USER_NAME_DROPDOWN "
    dispatch( {
        type : USER_NAME_DROPDOWN
    } );

}


// 3 -
// coming from the store.js 9 - file
// import in the register constants above

// Action Creator 4
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user registers and remember to pass in
// as arguments the name, email and password
export const userRegisterActionCreator = ( name, email, password ) => async ( dispatch ) => {

    try {

        // let's dispatch our action or " USER_REGISTER_REQUEST "
        dispatch( {
            type : USER_REGISTER_REQUEST
        } );

        // create our endpoint
        const endpoint = '/api/users';

        // create our config object
        // since we are sending data ( i.e. the name, email and password ) we need to indicate
        // in the headers the content type or application/json in our case and let's create a
        // config object to help us do that
        const config = {
            header : {
                'Content-Type' : 'application/json'
            }
        };

        // below we are making a POST request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin,
            token   : generateToken( user._id )
        */

        // and the second argument in the request will be the name, email and password key
        // value pairs and remember we are sending the name, email and password key value
        // pairs to the server as part of the browser request

        // and the third argument in the request will be our config object
        /*
        const { data } = await axios.post(
            endpoint,
            {
                name     : name,
                email    : email,
                password : password
            },
            config
        );

        // let's dispatch our action or " USER_REGISTER_SUCCESS "
        dispatch( {
            type    : USER_REGISTER_SUCCESS,
            payload : data
        } );

        // and then we want to sign the user in right after they successfully register so let's
        // dispatch the following action or " USER_SIGNIN_SUCCESS "

        // and remember by dispatching the USER_SIGNIN_SUCCESS action right after the user
        // registers this will cause the nav bar heading to change so that the newly registed
        // user will be able to see their name in the nav bar and be able to access the nav bar
        // dropdown menu which is what we want
        dispatch( {
            type    : USER_SIGNIN_SUCCESS,
            payload : data
        } );

        // we want to save the user information in local storage and remember we want the same
        // effect when a user registers as when a user signs in to the application
        localStorage.setItem( 'userInfo', JSON.stringify( data ) );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_REGISTER_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_REGISTER_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}

// now let's create the register screen and let's first create a folder inside the screen
// folder called " register " and 2 files inside the register folder called
// " register-screen.component.jsx " and " register-screen.styles.jsx " and let's go to the
// register-screen.component.jsx 1 - file now


// End of 3 -
*/





























// ===============================



























// at the beginning of lecture 47, given all the notes, I created a new file below without
// the notes so we are starting fresh

/*
// import in axios
import axios from 'axios'

// import in the user sign in or login constants and these constants represent our actions
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


// Action Creator 1
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user signs in and remember to pass in
// as arguments the email and password
export const userSignInActionCreator = ( email, password ) => async ( dispatch ) => {

    try {

        // let's dispatch our action or " USER_SIGNIN_REQUEST "
        dispatch( {
            type : USER_SIGNIN_REQUEST
        } );

        // create our endpoint
        const endpoint = `/api/users/login`;

        // create our config object
        // since we are sending data ( i.e. the email and password ) we need to indicate in
        // the headers the content type or application/json in our case and let's create a
        // config object to help us do that
        const config = {
            headers : {
                'Content-Type': 'application/json'
            }
        };

        // below we are making a POST request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin,
            token   : generateToken( user._id )
        */

        // and the second argument in the request will be the email and password key
        // value pairs and remember we are sending the email and password key value
        // pairs to the server as part of the browser request

        /*
        // and the third argument in the request will be our config object
        const { data } = await axios.post(
            endpoint,
            {
                email    : email,
                password : password
            },
            config
        );

        // let's dispatch our action or " USER_SIGNIN_SUCCESS "
        dispatch( {
            type    : USER_SIGNIN_SUCCESS,
            payload : data
        } );

        // we want to save the user information in local storage
        localStorage.setItem( 'userInfo', JSON.stringify( data ) );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_SIGNIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_SIGNIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// Action Creator 2
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user signs out
export const userSignOutActionCreator = () => async ( dispatch ) => {

    // first, let's remove userInfo from local storage
    localStorage.removeItem( 'userInfo' );

    // then let's dispatch our action or " USER_SIGNOUT "
    // and remember under the USER_SIGNOUT case, we returned an empty object in the
    // user.reducer.js file or 
   
    /*
        case USER_SIGNOUT :
            return {

            };
    */

    /*
    // and this will clear out our user state so userSignIn will be null
    dispatch( {
        type : USER_SIGNOUT
    } );

}


// Action Creator 3
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user clicks on their name in the
// navigation bar and thereby shows the nav bar dropdown element
export const userNameDropdownActionCreator = () => async ( dispatch ) => {

    // let's dispatch our action or " USER_NAME_DROPDOWN "
    dispatch( {
        type : USER_NAME_DROPDOWN
    } );

}



// Action Creator 4
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user registers and remember to pass in
// as arguments the name, email and password
export const userRegisterActionCreator = ( name, email, password ) => async ( dispatch ) => {

    try {

        // let's dispatch our action or " USER_REGISTER_REQUEST "
        dispatch( {
            type : USER_REGISTER_REQUEST
        } );

        // create our endpoint
        const endpoint = '/api/users';

        // create our config object
        // since we are sending data ( i.e. the name, email and password ) we need to indicate
        // in the headers the content type or application/json in our case and let's create a
        // config object to help us do that
        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        };

        // below we are making a POST request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin,
            token   : generateToken( user._id )
        */

        // and the second argument in the request will be the name, email and password key
        // value pairs and remember we are sending the name, email and password key value
        // pairs to the server as part of the browser request

        /*
        // and the third argument in the request will be our config object
        const { data } = await axios.post(
            endpoint,
            {
                name     : name,
                email    : email,
                password : password
            },
            config
        );

        // let's dispatch our action or " USER_REGISTER_SUCCESS "
        dispatch( {
            type    : USER_REGISTER_SUCCESS,
            payload : data
        } );

        // and then we want to sign the user in right after they successfully register so let's
        // dispatch the following action or " USER_SIGNIN_SUCCESS "

        // and remember this will cause the nav bar heading to change so that the registered
        // user can see their name in the nav bar and have access the nav bar dropdown menu
        dispatch( {
            type    : USER_SIGNIN_SUCCESS,
            payload : data
        } );

        // we want to save the user information in local storage and remember we want the same
        // effect when a user registers as when a user signs in to the application
        localStorage.setItem( 'userInfo', JSON.stringify( data ) );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_REGISTER_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_REGISTER_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// 4 -
// coming from the user.reducer.js 4 - file

// Action Creator 5
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to retrieve the user profile or user details

// remember in our route " router.route( '/profile' ).get( requireAuth, userGetProfile ); "
// we use the requireAuth middleware function and that function needs the token so we need
// to send a token in the getUserDetailsActionCreator or as part of the browser's request
// to the server or the backend and we can get the token from the front end by using getState
// so let's add getState as an argument and from getState we can get userSign and from
// userSign we can get userInfo and from userInfo we can get the token key value pair

// I believe we are using userSign below since to access the profile screen the user has
// to be signed in
export const getUserDetailsActionCreator = () => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_DETAILS_REQUEST "
        dispatch( {
            type : USER_DETAILS_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/users/profile "
        // and this is different than our route in the App.js file which is " /profile "
        const endpoint = '/api/users/profile';

        // use destructuring to get userInfo
        const { userSignIn : { userInfo } } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        // and remember since we are sending the user's token value we need to indicate
        // in the headers the content type or application/json in our case and let's create
        // a config object to help us do that
        const config = {
            headers : {
                'Content-Type' : 'application/json',
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin
        */
        
        /*
        // and the second argument in the request will be our config object
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " USER_DETAILS_SUCCESS "
        dispatch( {
            type    : USER_DETAILS_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_DETAILS_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_DETAILS_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Figure out acton creator 6 later in the course
// ==============================

// Action Creator 6
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to retrieve the user profile by the id ( we will
// need this later on ) and I created 2 seperate action creators or action creator 5 and action
// creator 6 to help simlify things

// I believe we are using userSign below since to access the profile screen the user has
// to be signed in
export const getUserDetailsByIdActionCreator = ( id ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_DETAILS_REQUEST "
        dispatch( {
            type : USER_DETAILS_REQUEST
        } );

        // create our endpoint
        const endpoint = `/api/users/${ id }`;

        // use destructuring to get userInfo
        const { userSignIn : { userInfo } } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        // and remember since we are sending the user's token value we need to indicate
        // in the headers the content type or application/json in our case and let's create
        // a config object to help us do that
        const config = {
            headers : {
                'Content-Type' : 'application/json',
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ??? ):

        /*

        */

        /*
        // and the second argument in the request will be our config object
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " USER_DETAILS_SUCCESS "
        dispatch( {
            type    : USER_DETAILS_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_DETAILS_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_DETAILS_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}

// now let's create a new folder under src/screens called " profile-screen " and then inside
// this folder let's create 2 new files: " profile-screen.component.jsx " and
// " profile-screen.styles.scss " and let's go to the profile-screen.component.jsx 1 - file
// now


// End of 4 -
*/































// ===============================


























/*
// at the beginning of lecture 49, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in axios
import axios from 'axios'

// import in the user sign in or login constants and these constants represent our actions
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


// Action Creator 1
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user signs in and remember to pass in
// as arguments the email and password
export const userSignInActionCreator = ( email, password ) => async ( dispatch ) => {

    try {

        // let's dispatch our action or " USER_SIGNIN_REQUEST "
        dispatch( {
            type : USER_SIGNIN_REQUEST
        } );

        // create our endpoint
        const endpoint = `/api/users/login`;

        // create our config object
        // since we are sending data ( i.e. the email and password ) we need to indicate in
        // the headers the content type or application/json in our case and let's create a
        // config object to help us do that
        const config = {
            headers : {
                'Content-Type': 'application/json'
            }
        };

        // below we are making a POST request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin,
            token   : generateToken( user._id )
        */

        // and the second argument in the request will be the email and password key
        // value pairs and remember we are sending the email and password key value
        // pairs to the server as part of the browser request

        // and the third argument in the request will be our config object
        /*
        const { data } = await axios.post(
            endpoint,
            {
                email    : email,
                password : password
            },
            config
        );

        // let's dispatch our action or " USER_SIGNIN_SUCCESS "
        dispatch( {
            type    : USER_SIGNIN_SUCCESS,
            payload : data
        } );

        // we want to save the user information in local storage
        localStorage.setItem( 'userInfo', JSON.stringify( data ) );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_SIGNIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_SIGNIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// Action Creator 2
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user signs out
export const userSignOutActionCreator = () => async ( dispatch ) => {

    // first, let's remove userInfo from local storage
    localStorage.removeItem( 'userInfo' );

    // then let's dispatch our action or " USER_SIGNOUT "
    // and remember under the USER_SIGNOUT case, we returned an empty object in the
    // user.reducer.js file or 
   
    /*
        case USER_SIGNOUT :
            return {

            };
    */

    // and this will clear out our user state so userSignIn will be null
    /*
    dispatch( {
        type : USER_SIGNOUT
    } );

}


// Action Creator 3
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user clicks on their name in the
// navigation bar and thereby shows the nav bar dropdown element
export const userNameDropdownActionCreator = () => async ( dispatch ) => {

    // let's dispatch our action or " USER_NAME_DROPDOWN "
    dispatch( {
        type : USER_NAME_DROPDOWN
    } );

}


// Action Creator 4
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user registers and remember to pass in
// as arguments the name, email and password
export const userRegisterActionCreator = ( name, email, password ) => async ( dispatch ) => {

    try {

        // let's dispatch our action or " USER_REGISTER_REQUEST "
        dispatch( {
            type : USER_REGISTER_REQUEST
        } );

        // create our endpoint
        const endpoint = '/api/users';

        // create our config object
        // since we are sending data ( i.e. the name, email and password ) we need to indicate
        // in the headers the content type or application/json in our case and let's create a
        // config object to help us do that
        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        };

        // below we are making a POST request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin,
            token   : generateToken( user._id )
        */

        // and the second argument in the request will be the name, email and password key
        // value pairs and remember we are sending the name, email and password key value
        // pairs to the server as part of the browser request

        // and the third argument in the request will be our config object
        /*
        const { data } = await axios.post(
            endpoint,
            {
                name     : name,
                email    : email,
                password : password
            },
            config
        );

        // let's dispatch our action or " USER_REGISTER_SUCCESS "
        dispatch( {
            type    : USER_REGISTER_SUCCESS,
            payload : data
        } );

        // and then we want to sign the user in right after they successfully register so let's
        // dispatch the following action or " USER_SIGNIN_SUCCESS "

        // and remember this will cause the nav bar heading to change so that the registered
        // user can see their name in the nav bar and have access the nav bar dropdown menu
        dispatch( {
            type    : USER_SIGNIN_SUCCESS,
            payload : data
        } );

        // we want to save the user information in local storage and remember we want the same
        // effect when a user registers as when a user signs in to the application
        localStorage.setItem( 'userInfo', JSON.stringify( data ) );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_REGISTER_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_REGISTER_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// Action Creator 5
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to retrieve the user profile or user details

// remember in our route " router.route( '/profile' ).get( requireAuth, userGetProfile ); "
// we use the requireAuth middleware function and that function needs the token so we need
// to send a token in the getUserDetailsActionCreator or as part of the browser's request
// to the server or the backend and we can get the token from the front end by using getState
// so let's add getState as an argument and from getState we can get userSignIn and from
// userSignIn we can get userInfo and from userInfo we can get the token key value pair

// I believe we are using userSignIn below since to access the profile screen the user has
// to be signed in
export const getUserDetailsActionCreator = () => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_DETAILS_REQUEST "
        dispatch( {
            type : USER_DETAILS_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/users/profile "
        // and this is different than our route in the App.js file which is " /profile "
        const endpoint = '/api/users/profile';

        // use destructuring to get userInfo
        const { userSignIn : { userInfo } } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        // and remember since we are sending the user's token value we need to indicate
        // in the headers the content type or application/json in our case and let's create
        // a config object to help us do that
        const config = {
            headers : {
                'Content-Type' : 'application/json',
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin
        */

        // and the second argument in the request will be our config object
        /*
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " USER_DETAILS_SUCCESS "
        dispatch( {
            type    : USER_DETAILS_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_DETAILS_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_DETAILS_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Figure out acton creator 6 later in the course
// ==============================

// Action Creator 6
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to retrieve the user profile by the id ( we will
// need this later on ) and I created 2 seperate action creators or action creator 5 and action
// creator 6 to help simlify things

// I believe we are using userSign below since to access the profile screen the user has
// to be signed in
export const getUserDetailsByIdActionCreator = ( id ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_DETAILS_REQUEST "
        dispatch( {
            type : USER_DETAILS_REQUEST
        } );

        // create our endpoint
        const endpoint = `/api/users/${ id }`;

        // use destructuring to get userInfo
        const { userSignIn : { userInfo } } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        // and remember since we are sending the user's token value we need to indicate
        // in the headers the content type or application/json in our case and let's create
        // a config object to help us do that
        const config = {
            headers : {
                'Content-Type' : 'application/json',
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ??? ):

        /*

        */

        // and the second argument in the request will be our config object
        /*
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " USER_DETAILS_SUCCESS "
        dispatch( {
            type    : USER_DETAILS_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_DETAILS_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_DETAILS_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// 5 -
// coming from the store.js 11 - file

// Action Creator 7
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to update the user profile and remember to pass in
// the user object as an argument and getState as an argument since we need to send a token
// to the backend
export const userUpdateProfileActionCreator = ( userUpdateObject ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_UPDATE_PROFILE_REQUEST "
        dispatch( {
            type : USER_UPDATE_PROFILE_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/users/profile "
        // and this is different than our route in the App.js file which is " /profile "
        const endpoint = '/api/users/profile';

        // use destructuring to get userInfo
        const { userSignIn : { userInfo } } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        // and remember since we are sending the user's token value we need to indicate
        // in the headers the content type or application/json in our case and let's create
        // a config object to help us do that
        const config = {
            headers : {
                'Content-Type' : 'application/json',
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a PUT request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // userInfo object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin,
            token   : generateToken( user._id )
        */

        // and the second argument will be our user update object and this is the object
        // we are seeking to update and this object comes from the profile-screen.component.jsx
        // file and looks like the following:

        /*
            {
                name     : name,
                email    : email,
                password : password
            }
        */

        // and the third argument in the request will be our config object and remember
        // we are making a PUT request here
        /*
        const { data } = await axios.put(
            endpoint,
            userUpdateObject,
            config
        );

        // let's dispatch our action or " USER_UPDATE_PROFILE_SUCCESS "
        dispatch( {
            type    : USER_UPDATE_PROFILE_SUCCESS,
            payload : data
        } );

        // to make sure our nav bar name updates immediately or at the same time our user profile
        // uodates we need to dispatch " USER_SIGNIN_SUCCESS " and pass data or the updated user
        // information to the payload
        dispatch( {
            type    : USER_SIGNIN_SUCCESS,
            payload : data
        } );

        // to make sure our update form name and email fields update immediately or at the same
        // time our user profile uodates we need to dispatch " USER_DETAILS_SUCCESS " and pass
        // data or the updated user information to the payload
        dispatch( {
            type    : USER_DETAILS_SUCCESS,
            payload : data
        } );

        // let's make sure we update the user information in local storage
        localStorage.setItem( 'userInfo', JSON.stringify( data ) );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_UPDATE_PROFILE_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_UPDATE_PROFILE_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}

// now let's go to the profile-screen.component.jsx 3 - file

// End of 5 -
*/

































// ===============================


























/*
// at the beginning of lecture 51, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in axios
import axios from 'axios'

// import in the user sign in or login constants and these constants represent our actions
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
    USER_UPDATE_PROFILE_FAIL
} from '../constants/user.constants';


// 6 - continued

// import in the order list my reset constant and this constant represents our action
import { ORDER_LIST_MY_RESET } from '../constants/order.constants';
// import in the cart reset constant and this constant represents an action
import { CART_RESET } from '../constants/cart.constants';

// End of 6 -


// ==============================
// Action Creator 1
// ==============================


// Action Creator 1
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user signs in and remember to pass in
// as arguments the email and password
export const userSignInActionCreator = ( email, password ) => async ( dispatch ) => {

    try {

        // let's dispatch our action or " USER_SIGNIN_REQUEST "
        dispatch( {
            type : USER_SIGNIN_REQUEST
        } );

        // create our endpoint
        const endpoint = `/api/users/login`;

        // create our config object
        // since we are sending data ( i.e. the email and password ) we need to indicate in
        // the headers the content type or application/json in our case and let's create a
        // config object to help us do that
        const config = {
            headers : {
                'Content-Type': 'application/json'
            }
        };

        // below we are making a POST request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin,
            token   : generateToken( user._id )
        */

        // and the second argument in the request will be the email and password key
        // value pairs and remember we are sending the email and password key value
        // pairs to the server as part of the browser request

        // and the third argument in the request will be our config object
        /*
        const { data } = await axios.post(
            endpoint,
            {
                email    : email,
                password : password
            },
            config
        );

        // let's dispatch our action or " USER_SIGNIN_SUCCESS "
        dispatch( {
            type    : USER_SIGNIN_SUCCESS,
            payload : data
        } );

        // we want to save the user information in local storage
        localStorage.setItem( 'userInfo', JSON.stringify( data ) );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_SIGNIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_SIGNIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 2
// ==============================


// Action Creator 2
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user signs out
export const userSignOutActionCreator = () => async ( dispatch ) => {

    // first, let's remove userInfo from local storage
    localStorage.removeItem( 'userInfo' );

    // then let's dispatch our action or " USER_SIGNOUT "
    // and remember under the USER_SIGNOUT case, we returned an empty object in the
    // user.reducer.js file or 
   
    /*
        case USER_SIGNOUT :
            return {

            };
    */

    // and this will clear out our user state so userSignIn will be null
    /*
    dispatch( {
        type : USER_SIGNOUT
    } );


    // 6 -
    // coming from the user.reducer.js 6 - file

    // this will clear out the user object
    dispatch( {
        type : USER_DETAILS_RESET
    } );


    // this will clear out the orders array
    dispatch( {
        type : ORDER_LIST_MY_RESET
    } );

    // go to 6 - above

    // so now when we sign out we will clear out the user object and clear out the orders
    // array

    // now let's test this out by logging in as John Doe and then logging out and then
    // log in as Admin User and then go to the profile screen and when we do this we no
    // longer see John Doe's user information prefilled in the User Profile form
    // and we no longer see John Doe's orders

    // clear out the cart array and the shipping address object
    dispatch( {
        type : CART_RESET
    } );

    // when a user signs out, remove cartItems, shippingAddress and paymentMethod from
    // local storage
    localStorage.removeItem( 'cartItems' );
    localStorage.removeItem( 'shippingAddress' );
    localStorage.removeItem( 'paymentMethod' );

    // End of 6 -

}


// ==============================
// Action Creator 3
// ==============================


// Action Creator 3
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user clicks on their name in the
// navigation bar and thereby shows the nav bar dropdown element
export const userNameDropdownActionCreator = () => async ( dispatch ) => {

    // let's dispatch our action or " USER_NAME_DROPDOWN "
    dispatch( {
        type : USER_NAME_DROPDOWN
    } );

}


// ==============================
// Action Creator 4
// ==============================


// Action Creator 4
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user registers and remember to pass in
// as arguments the name, email and password
export const userRegisterActionCreator = ( name, email, password ) => async ( dispatch ) => {

    try {

        // let's dispatch our action or " USER_REGISTER_REQUEST "
        dispatch( {
            type : USER_REGISTER_REQUEST
        } );

        // create our endpoint
        const endpoint = '/api/users';

        // create our config object
        // since we are sending data ( i.e. the name, email and password ) we need to indicate
        // in the headers the content type or application/json in our case and let's create a
        // config object to help us do that
        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        };

        // below we are making a POST request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin,
            token   : generateToken( user._id )
        */

        // and the second argument in the request will be the name, email and password key
        // value pairs and remember we are sending the name, email and password key value
        // pairs to the server as part of the browser request

        // and the third argument in the request will be our config object
        /*
        const { data } = await axios.post(
            endpoint,
            {
                name     : name,
                email    : email,
                password : password
            },
            config
        );

        // let's dispatch our action or " USER_REGISTER_SUCCESS "
        dispatch( {
            type    : USER_REGISTER_SUCCESS,
            payload : data
        } );

        // and then we want to sign the user in right after they successfully register so let's
        // dispatch the following action or " USER_SIGNIN_SUCCESS "

        // and remember this will cause the nav bar heading to change so that the registered
        // user can see their name in the nav bar and have access the nav bar dropdown menu
        dispatch( {
            type    : USER_SIGNIN_SUCCESS,
            payload : data
        } );

        // we want to save the user information in local storage and remember we want the same
        // effect when a user registers as when a user signs in to the application
        localStorage.setItem( 'userInfo', JSON.stringify( data ) );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_REGISTER_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_REGISTER_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 5
// ==============================


// Action Creator 5
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to retrieve the user profile or user details

// remember in our route " router.route( '/profile' ).get( requireAuth, userGetProfile ); "
// we use the requireAuth middleware function and that function needs the token so we need
// to send a token in the getUserDetailsActionCreator or as part of the browser's request
// to the server or the backend and we can get the token from the front end by using getState
// so let's add getState as an argument and from getState we can get userSignIn and from
// userSignIn we can get userInfo and from userInfo we can get the token key value pair

// I believe we are using userSignIn below since to access the profile screen the user has
// to be signed in
export const getUserDetailsActionCreator = () => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_DETAILS_REQUEST "
        dispatch( {
            type : USER_DETAILS_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/users/profile "
        // and this is different than our route in the App.js file which is " /profile "
        const endpoint = '/api/users/profile';

        // use destructuring to get userInfo
        const { userSignIn : { userInfo } } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        const config = {
            headers : {
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin
        */

        // and the second argument in the request will be our config object
        /*
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " USER_DETAILS_SUCCESS "
        dispatch( {
            type    : USER_DETAILS_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_DETAILS_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_DETAILS_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 6
// ==============================


// ==============================
// Figure out acton creator 6 later in the course
// ==============================

// Action Creator 6
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to retrieve the user profile by the id ( we will
// need this later on ) and I created 2 seperate action creators or action creator 5 and action
// creator 6 to help simlify things

// I believe we are using userSign below since to access the profile screen the user has
// to be signed in
export const getUserDetailsByIdActionCreator = ( id ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_DETAILS_REQUEST "
        dispatch( {
            type : USER_DETAILS_REQUEST
        } );

        // create our endpoint
        const endpoint = `/api/users/${ id }`;

        // use destructuring to get userInfo
        const { userSignIn : { userInfo } } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        const config = {
            headers : {
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ??? ):

        /*

        */

        // and the second argument in the request will be our config object
        /*
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " USER_DETAILS_SUCCESS "
        dispatch( {
            type    : USER_DETAILS_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_DETAILS_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_DETAILS_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 7
// ==============================


// Action Creator 7
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to update the user profile and remember to pass in
// the user update object as an argument and getState as an argument since we need to send a token
// to the backend
export const userUpdateProfileActionCreator = ( userUpdateObject ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_UPDATE_PROFILE_REQUEST "
        dispatch( {
            type : USER_UPDATE_PROFILE_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/users/profile "
        // and this is different than our route in the App.js file which is " /profile "
        const endpoint = '/api/users/profile';

        // use destructuring to get userInfo
        const { userSignIn : { userInfo } } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        // and remember since we are sending data ( i.e. the userUpdateObject ) we need to
        // indicate in the headers the content type or application/json in our case and let's
        // create a config object to help us do that
        const config = {
            headers : {
                'Content-Type' : 'application/json',
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a PUT request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // userInfo object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin,
            token   : generateToken( user._id )
        */

        // and the second argument will be our user update object and this object comes
        // from the profile-screen.component.jsx file and looks like the following:

        /*
            {
                name     : name,
                email    : email,
                password : password
            }
        */

        // and the third argument in the request will be our config object and remember
        // we are making a PUT request here
        /*
        const { data } = await axios.put(
            endpoint,
            userUpdateObject,
            config
        );

        // let's dispatch our action or " USER_UPDATE_PROFILE_SUCCESS "
        /*
        dispatch( {
            type    : USER_UPDATE_PROFILE_SUCCESS,
            payload : data
        } );

        // to make sure our nav bar name updates immediately or at the same time our user profile
        // uodates we need to dispatch " USER_SIGNIN_SUCCESS " and pass data or the updated user
        // information to the payload
        dispatch( {
            type    : USER_SIGNIN_SUCCESS,
            payload : data
        } );

        // to make sure our update form name and email fields update immediately or at the same
        // time our user profile uodates we need to dispatch " USER_DETAILS_SUCCESS " and pass
        // data or the updated user information to the payload
        dispatch( {
            type    : USER_DETAILS_SUCCESS,
            payload : data
        } );

        // let's make sure we update the user information in local storage
        localStorage.setItem( 'userInfo', JSON.stringify( data ) );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_UPDATE_PROFILE_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_UPDATE_PROFILE_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}
*/
































// ===============================


























/*
// at the beginning of lecture 67, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in axios
import axios from 'axios'

// import in the user sign in or login constants and these constants represent our actions
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
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL
} from '../constants/user.constants';


// 6 - continued

// import in the order list my reset constant and this constant represents our action
import { ORDER_LIST_MY_RESET } from '../constants/order.constants';
// import in the cart reset constant and this constant represents an action
import { CART_RESET } from '../constants/cart.constants';

// End of 6 -


// ==============================
// Action Creator 1
// ==============================

// Action Creator 1
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user signs in and remember to pass in
// as arguments the email and password
export const userSignInActionCreator = ( email, password ) => async ( dispatch ) => {

    try {

        // let's dispatch our action or " USER_SIGNIN_REQUEST "
        dispatch( {
            type : USER_SIGNIN_REQUEST
        } );

        // create our endpoint
        const endpoint = `/api/users/login`;

        // create our config object
        // since we are sending data ( i.e. the email and password ) we need to indicate in
        // the headers the content type or application/json in our case and let's create a
        // config object to help us do that
        const config = {
            headers : {
                'Content-Type': 'application/json'
            }
        };

        // below we are making a POST request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin,
            token   : generateToken( user._id )
        */

        // and the second argument in the request will be the email and password key
        // value pairs and remember we are sending the email and password key value
        // pairs to the server as part of the browser request

        // and the third argument in the request will be our config object
        /*
        const { data } = await axios.post(
            endpoint,
            {
                email    : email,
                password : password
            },
            config
        );

        // let's dispatch our action or " USER_SIGNIN_SUCCESS "
        dispatch( {
            type    : USER_SIGNIN_SUCCESS,
            payload : data
        } );

        // we want to save the user information in local storage
        localStorage.setItem( 'userInfo', JSON.stringify( data ) );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_SIGNIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_SIGNIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 2
// ==============================

// Action Creator 2
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user signs out
export const userSignOutActionCreator = () => async ( dispatch ) => {

    // first, let's remove userInfo from local storage
    localStorage.removeItem( 'userInfo' );

    // then let's dispatch our action or " USER_SIGNOUT "
    // and remember under the USER_SIGNOUT case, we returned an empty object in the
    // user.reducer.js file or 
   
    /*
        case USER_SIGNOUT :
            return {

            };
    */

    // and this will clear out our user state so userSignIn will be null
    /*
    dispatch( {
        type : USER_SIGNOUT
    } );

    // this will clear out the user object
    dispatch( {
        type : USER_DETAILS_RESET
    } );

    // this will clear out the orders array
    dispatch( {
        type : ORDER_LIST_MY_RESET
    } );

    // so now when we sign out we will clear out the user object and clear out the orders
    // array

    // clear out the cart array and the shipping address object
    dispatch( {
        type : CART_RESET
    } );

    // when a user signs out, remove cartItems, shippingAddress and paymentMethod from
    // local storage
    localStorage.removeItem( 'cartItems' );
    localStorage.removeItem( 'shippingAddress' );
    localStorage.removeItem( 'paymentMethod' );

}


// ==============================
// Action Creator 3
// ==============================


// Action Creator 3
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user clicks on their name in the
// navigation bar and thereby shows the nav bar dropdown element
export const userDropdownActionCreator = () => async ( dispatch ) => {

    // let's dispatch our action or " USER_NAME_DROPDOWN "
    dispatch( {
        type : USER_DROPDOWN
    } );

}


// 8 -

// ==============================
// Action Creator 4
// ==============================


// Action Creator 4
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when an admin clicks on the admin heading in
// the navigation bar and thereby shows the nav bar dropdown element
export const adminDropdownActionCreator = () => async ( dispatch ) => {

    // let's dispatch our action or " USER_NAME_DROPDOWN "
    dispatch( {
        type : ADMIN_DROPDOWN
    } );

}

// End of 8 -


// ==============================
// Action Creator 5
// ==============================

// Action Creator 5
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user registers and remember to pass in
// as arguments the name, email and password
export const userRegisterActionCreator = ( name, email, password ) => async ( dispatch ) => {

    try {

        // let's dispatch our action or " USER_REGISTER_REQUEST "
        dispatch( {
            type : USER_REGISTER_REQUEST
        } );

        // create our endpoint
        const endpoint = '/api/users';

        // create our config object
        // since we are sending data ( i.e. the name, email and password ) we need to indicate
        // in the headers the content type or application/json in our case and let's create a
        // config object to help us do that
        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        };

        // below we are making a POST request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin,
            token   : generateToken( user._id )
        */

        // and the second argument in the request will be the name, email and password key
        // value pairs and remember we are sending the name, email and password key value
        // pairs to the server as part of the browser request

        // and the third argument in the request will be our config object
        /*
        const { data } = await axios.post(
            endpoint,
            {
                name     : name,
                email    : email,
                password : password
            },
            config
        );

        // let's dispatch our action or " USER_REGISTER_SUCCESS "
        dispatch( {
            type    : USER_REGISTER_SUCCESS,
            payload : data
        } );

        // and then we want to sign the user in right after they successfully register so let's
        // dispatch the following action or " USER_SIGNIN_SUCCESS "

        // and remember this will cause the nav bar heading to change so that the registered
        // user can see their name in the nav bar and have access the nav bar dropdown menu
        dispatch( {
            type    : USER_SIGNIN_SUCCESS,
            payload : data
        } );

        // we want to save the user information in local storage and remember we want the same
        // effect when a user registers as when a user signs in to the application
        localStorage.setItem( 'userInfo', JSON.stringify( data ) );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_REGISTER_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_REGISTER_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 6
// ==============================

// Action Creator 6
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to retrieve the user profile or user details

// remember in our route " router.route( '/profile' ).get( requireAuth, userGetProfile ); "
// we use the requireAuth middleware function and that function needs the token so we need
// to send a token in the getUserDetailsActionCreator or as part of the browser's request
// to the server or the backend and we can get the token from the front end by using getState
// so let's add getState as an argument and from getState we can get userSignIn and from
// userSignIn we can get userInfo and from userInfo we can get the token key value pair

// I believe we are using userSignIn below since to access the profile screen the user has
// to be signed in
export const getUserDetailsActionCreator = () => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_DETAILS_REQUEST "
        dispatch( {
            type : USER_DETAILS_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/users/profile "
        // and this is different than our route in the App.js file which is " /profile "
        const endpoint = '/api/users/profile';

        // use destructuring to get userInfo
        const { userSignIn : { userInfo } } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        const config = {
            headers : {
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin
        */

        // and the second argument in the request will be our config object
        /*
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " USER_DETAILS_SUCCESS "
        dispatch( {
            type    : USER_DETAILS_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_DETAILS_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_DETAILS_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 7
// ==============================

// ==============================
// Figure out acton creator 6 later in the course
// ==============================

// Action Creator 7
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to retrieve the user profile by the id ( we will
// need this later on ) and I created 2 seperate action creators or action creator 5 and action
// creator 6 to help simlify things

// I believe we are using userSign below since to access the profile screen the user has
// to be signed in
export const getUserDetailsByIdActionCreator = ( id ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_DETAILS_REQUEST "
        dispatch( {
            type : USER_DETAILS_REQUEST
        } );

        // create our endpoint
        const endpoint = `/api/users/${ id }`;

        // use destructuring to get userInfo
        const { userSignIn : { userInfo } } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        const config = {
            headers : {
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ??? ):

        /*

        */

        // and the second argument in the request will be our config object
        /*
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " USER_DETAILS_SUCCESS "
        dispatch( {
            type    : USER_DETAILS_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_DETAILS_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_DETAILS_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 8
// ==============================

// Action Creator 8
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to update the user profile and remember to pass in
// the user update object as an argument and getState as an argument since we need to send a token
// to the backend
export const userUpdateProfileActionCreator = ( userUpdateObject ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_UPDATE_PROFILE_REQUEST "
        dispatch( {
            type : USER_UPDATE_PROFILE_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/users/profile "
        // and this is different than our route in the App.js file which is " /profile "
        const endpoint = '/api/users/profile';

        // use destructuring to get userInfo
        const { userSignIn : { userInfo } } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        // and remember since we are sending data ( i.e. the userUpdateObject ) we need to
        // indicate in the headers the content type or application/json in our case and let's
        // create a config object to help us do that
        const config = {
            headers : {
                'Content-Type' : 'application/json',
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a PUT request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // userInfo object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin,
            token   : generateToken( user._id )
        */

        // and the second argument will be our user update object and this object comes
        // from the profile-screen.component.jsx file and looks like the following:

        /*
            {
                name     : name,
                email    : email,
                password : password
            }
        */

        // and the third argument in the request will be our config object and remember
        // we are making a PUT request here
        /*
        const { data } = await axios.put(
            endpoint,
            userUpdateObject,
            config
        );

        // let's dispatch our action or " USER_UPDATE_PROFILE_SUCCESS "
        dispatch( {
            type    : USER_UPDATE_PROFILE_SUCCESS,
            payload : data
        } );

        // to make sure our nav bar name updates immediately or at the same time our user profile
        // uodates we need to dispatch " USER_SIGNIN_SUCCESS " and pass data or the updated user
        // information to the payload
        dispatch( {
            type    : USER_SIGNIN_SUCCESS,
            payload : data
        } );

        // to make sure our update form name and email fields update immediately or at the same
        // time our user profile uodates we need to dispatch " USER_DETAILS_SUCCESS " and pass
        // data or the updated user information to the payload
        dispatch( {
            type    : USER_DETAILS_SUCCESS,
            payload : data
        } );

        // let's make sure we update the user information in local storage
        localStorage.setItem( 'userInfo', JSON.stringify( data ) );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_UPDATE_PROFILE_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_UPDATE_PROFILE_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// 7
// coming from the user.reducers.js 7 - file

// ==============================
// Action Creator 9
// ==============================

// Action Creator 9
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to get all the users so we can display a list of all the
// users on the admin user screen and remember to pass in getState as an argument since we need to
// send a token to the backend
export const adminUserListActionCreator = () => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_LIST_REQUEST "
        dispatch( {
            type : USER_LIST_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/users "
        // and this is different than our route in the App.js file which is " / "
        const endpoint = '/api/users';

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        const config = {
            headers : {
                Authorization : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is a list
        // of all the users

        // and the third argument in the request will be our config object and remember
        // we are making a PUT request here
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " USER_LIST_SUCCESS "
        dispatch( {
            type    : USER_LIST_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_LIST_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_LIST_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}

// let's go to the store.js 18 - file now

// go to 8 - above

// End of 7 -
*/































// ===============================


























/*
// at the beginning of lecture 68, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in axios
import axios from 'axios'

// import in the user sign in or login constants and these constants represent our actions
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
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    USER_LIST_RESET
} from '../constants/user.constants';

// import in the order list my reset constant and this constant represents our action
import { 
    ORDER_LIST_MY_RESET
} from '../constants/order.constants';

// import in the cart reset constant and this constant represents an action
import { 
    CART_RESET
} from '../constants/cart.constants';


// ==============================
// Action Creator 1
// ==============================

// Action Creator 1
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user signs in and remember to pass in
// as arguments the email and password
export const userSignInActionCreator = ( email, password ) => async ( dispatch ) => {

    try {

        // let's dispatch our action or " USER_SIGNIN_REQUEST "
        dispatch( {
            type : USER_SIGNIN_REQUEST
        } );

        // create our endpoint
        const endpoint = `/api/users/login`;

        // create our config object
        // since we are sending data ( i.e. the email and password ) we need to indicate in
        // the headers the content type or application/json in our case and let's create a
        // config object to help us do that
        const config = {
            headers : {
                'Content-Type': 'application/json'
            }
        };

        // below we are making a POST request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin,
            token   : generateToken( user._id )
        */

        // and the second argument in the request will be the email and password key
        // value pairs and remember we are sending the email and password key value
        // pairs to the server as part of the browser request

        // and the third argument in the request will be our config object
        /*
        const { data } = await axios.post(
            endpoint,
            {
                email    : email,
                password : password
            },
            config
        );

        // let's dispatch our action or " USER_SIGNIN_SUCCESS "
        dispatch( {
            type    : USER_SIGNIN_SUCCESS,
            payload : data
        } );

        // we want to save the user information in local storage
        localStorage.setItem( 'userInfo', JSON.stringify( data ) );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_SIGNIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_SIGNIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 2
// ==============================

// Action Creator 2
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user signs out
export const userSignOutActionCreator = () => async ( dispatch ) => {

    // first, let's remove userInfo from local storage
    localStorage.removeItem( 'userInfo' );

    // then let's dispatch our action or " USER_SIGNOUT "
    // and remember under the USER_SIGNOUT case, we returned an empty object in the
    // user.reducer.js file or 
   
    /*
        case USER_SIGNOUT :
            return {

            };
    */

    // and this will clear out our user state so userSignIn will be null
    /*
    dispatch( {
        type : USER_SIGNOUT
    } );

    // this will clear out the user object
    dispatch( {
        type : USER_DETAILS_RESET
    } );

    // this will clear out the orders array
    dispatch( {
        type : ORDER_LIST_MY_RESET
    } );

    // so now when we sign out we will clear out the user object and clear out the orders
    // array

    // clear out the cart array and the shipping address object
    dispatch( {
        type : CART_RESET
    } );


    // 9 -
    // upon logout, clear out the users from the admin user list screen
    dispatch( {
        type : USER_LIST_RESET
    } );

    // End of 9 -


    // when a user signs out, remove cartItems, shippingAddress and paymentMethod from
    // local storage
    localStorage.removeItem( 'cartItems' );
    localStorage.removeItem( 'shippingAddress' );
    localStorage.removeItem( 'paymentMethod' );

}


// ==============================
// Action Creator 3
// ==============================

// Action Creator 3
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user clicks on their name in the
// navigation bar and thereby shows the nav bar dropdown element
export const userDropdownActionCreator = () => async ( dispatch ) => {

    // let's dispatch our action or " USER_NAME_DROPDOWN "
    dispatch( {
        type : USER_DROPDOWN
    } );

}


// ==============================
// Action Creator 4
// ==============================

// Action Creator 4
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when an admin clicks on the admin heading in
// the navigation bar and thereby shows the nav bar dropdown element
export const adminDropdownActionCreator = () => async ( dispatch ) => {

    // let's dispatch our action or " USER_NAME_DROPDOWN "
    dispatch( {
        type : ADMIN_DROPDOWN
    } );

}


// ==============================
// Action Creator 5
// ==============================

// Action Creator 5
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user registers and remember to pass in
// as arguments the name, email and password
export const userRegisterActionCreator = ( name, email, password ) => async ( dispatch ) => {

    try {

        // let's dispatch our action or " USER_REGISTER_REQUEST "
        dispatch( {
            type : USER_REGISTER_REQUEST
        } );

        // create our endpoint
        const endpoint = '/api/users';

        // create our config object
        // since we are sending data ( i.e. the name, email and password ) we need to indicate
        // in the headers the content type or application/json in our case and let's create a
        // config object to help us do that
        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        };

        // below we are making a POST request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin,
            token   : generateToken( user._id )
        */

        // and the second argument in the request will be the name, email and password key
        // value pairs and remember we are sending the name, email and password key value
        // pairs to the server as part of the browser request

        // and the third argument in the request will be our config object
        /*
        const { data } = await axios.post(
            endpoint,
            {
                name     : name,
                email    : email,
                password : password
            },
            config
        );

        // let's dispatch our action or " USER_REGISTER_SUCCESS "
        dispatch( {
            type    : USER_REGISTER_SUCCESS,
            payload : data
        } );

        // and then we want to sign the user in right after they successfully register so let's
        // dispatch the following action or " USER_SIGNIN_SUCCESS "

        // and remember this will cause the nav bar heading to change so that the registered
        // user can see their name in the nav bar and have access the nav bar dropdown menu
        dispatch( {
            type    : USER_SIGNIN_SUCCESS,
            payload : data
        } );

        // we want to save the user information in local storage and remember we want the same
        // effect when a user registers as when a user signs in to the application
        localStorage.setItem( 'userInfo', JSON.stringify( data ) );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_REGISTER_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_REGISTER_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 6
// ==============================

// Action Creator 6
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to retrieve the user profile or user details

// remember in our route " router.route( '/profile' ).get( requireAuth, userGetProfile ); "
// we use the requireAuth middleware function and that function needs the token so we need
// to send a token in the getUserDetailsActionCreator or as part of the browser's request
// to the server or the backend and we can get the token from the front end by using getState
// so let's add getState as an argument and from getState we can get userSignIn and from
// userSignIn we can get userInfo and from userInfo we can get the token key value pair

// I believe we are using userSignIn below since to access the profile screen the user has
// to be signed in
export const getUserDetailsActionCreator = () => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_DETAILS_REQUEST "
        dispatch( {
            type : USER_DETAILS_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/users/profile "
        // and this is different than our route in the App.js file which is " /profile "
        const endpoint = '/api/users/profile';

        // use destructuring to get userInfo
        const { userSignIn : { userInfo } } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        const config = {
            headers : {
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin
        */

        // and the second argument in the request will be our config object
        /*
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " USER_DETAILS_SUCCESS "
        dispatch( {
            type    : USER_DETAILS_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_DETAILS_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_DETAILS_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 7
// ==============================

// ==============================
// Figure out acton creator 6 later in the course
// ==============================

// Action Creator 7
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to retrieve the user profile by the id ( we will
// need this later on ) and I created 2 seperate action creators or action creator 5 and action
// creator 6 to help simlify things

// I believe we are using userSign below since to access the profile screen the user has
// to be signed in
export const getUserDetailsByIdActionCreator = ( id ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_DETAILS_REQUEST "
        dispatch( {
            type : USER_DETAILS_REQUEST
        } );

        // create our endpoint
        const endpoint = `/api/users/${ id }`;

        // use destructuring to get userInfo
        const { userSignIn : { userInfo } } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        const config = {
            headers : {
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ??? ):

        /*

        */

        // and the second argument in the request will be our config object
        /*
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " USER_DETAILS_SUCCESS "
        dispatch( {
            type    : USER_DETAILS_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_DETAILS_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_DETAILS_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 8
// ==============================

// Action Creator 8
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to update the user profile and remember to pass in
// the user update object as an argument and getState as an argument since we need to send a token
// to the backend
export const userUpdateProfileActionCreator = ( userUpdateObject ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_UPDATE_PROFILE_REQUEST "
        dispatch( {
            type : USER_UPDATE_PROFILE_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/users/profile "
        // and this is different than our route in the App.js file which is " /profile "
        const endpoint = '/api/users/profile';

        // use destructuring to get userInfo
        const { userSignIn : { userInfo } } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        // and remember since we are sending data ( i.e. the userUpdateObject ) we need to
        // indicate in the headers the content type or application/json in our case and let's
        // create a config object to help us do that
        const config = {
            headers : {
                'Content-Type' : 'application/json',
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a PUT request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // userInfo object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin,
            token   : generateToken( user._id )
        */

        // and the second argument will be our user update object and this object comes
        // from the profile-screen.component.jsx file and looks like the following:

        /*
            {
                name     : name,
                email    : email,
                password : password
            }
        */

        // and the third argument in the request will be our config object and remember
        // we are making a PUT request here
        /*
        const { data } = await axios.put(
            endpoint,
            userUpdateObject,
            config
        );

        // let's dispatch our action or " USER_UPDATE_PROFILE_SUCCESS "
        dispatch( {
            type    : USER_UPDATE_PROFILE_SUCCESS,
            payload : data
        } );

        // to make sure our nav bar name updates immediately or at the same time our user profile
        // uodates we need to dispatch " USER_SIGNIN_SUCCESS " and pass data or the updated user
        // information to the payload
        dispatch( {
            type    : USER_SIGNIN_SUCCESS,
            payload : data
        } );

        // to make sure our update form name and email fields update immediately or at the same
        // time our user profile uodates we need to dispatch " USER_DETAILS_SUCCESS " and pass
        // data or the updated user information to the payload
        dispatch( {
            type    : USER_DETAILS_SUCCESS,
            payload : data
        } );

        // let's make sure we update the user information in local storage
        localStorage.setItem( 'userInfo', JSON.stringify( data ) );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_UPDATE_PROFILE_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_UPDATE_PROFILE_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 9
// ==============================

// Action Creator 9
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to get all the users so we can display a list of all the
// users on the admin user list screen and remember to pass in getState as an argument since we
// need to send a token to the backend
export const adminUserListActionCreator = () => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_LIST_REQUEST "
        dispatch( {
            type : USER_LIST_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/users "
        // and this is different than our route in the App.js file which is " / "
        const endpoint = '/api/users';

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        const config = {
            headers : {
                Authorization : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is a list
        // of all the users

        // and the third argument in the request will be our config object and remember
        // we are making a PUT request here
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " USER_LIST_SUCCESS "
        dispatch( {
            type    : USER_LIST_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_LIST_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_LIST_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}
*/






























// ===============================


























/*
// at the beginning of lecture 69, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in axios
import axios from 'axios'

// import in the user sign in or login constants and these constants represent our actions
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
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    USER_LIST_RESET,
    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_DELETE_FAIL
} from '../constants/user.constants';

// import in the order list my reset constant and this constant represents our action
import { 
    ORDER_LIST_MY_RESET
} from '../constants/order.constants';

// import in the cart reset constant and this constant represents an action
import { 
    CART_RESET
} from '../constants/cart.constants';


// ==============================
// Action Creator 1
// ==============================

// Action Creator 1
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user signs in and remember to pass in
// as arguments the email and password
export const userSignInActionCreator = ( email, password ) => async ( dispatch ) => {

    try {

        // let's dispatch our action or " USER_SIGNIN_REQUEST "
        dispatch( {
            type : USER_SIGNIN_REQUEST
        } );

        // create our endpoint
        const endpoint = `/api/users/login`;

        // create our config object
        // since we are sending data ( i.e. the email and password ) we need to indicate in
        // the headers the content type or application/json in our case and let's create a
        // config object to help us do that
        const config = {
            headers : {
                'Content-Type': 'application/json'
            }
        };

        // below we are making a POST request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin,
            token   : generateToken( user._id )
        */

        // and the second argument in the request will be the email and password key
        // value pairs and remember we are sending the email and password key value
        // pairs to the server as part of the browser request

        // and the third argument in the request will be our config object
        /*
        const { data } = await axios.post(
            endpoint,
            {
                email    : email,
                password : password
            },
            config
        );

        // let's dispatch our action or " USER_SIGNIN_SUCCESS "
        dispatch( {
            type    : USER_SIGNIN_SUCCESS,
            payload : data
        } );

        // we want to save the user information in local storage
        localStorage.setItem( 'userInfo', JSON.stringify( data ) );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_SIGNIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_SIGNIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 2
// ==============================

// Action Creator 2
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user signs out
export const userSignOutActionCreator = () => async ( dispatch ) => {

    // first, let's remove userInfo from local storage
    localStorage.removeItem( 'userInfo' );

    // then let's dispatch our action or " USER_SIGNOUT "
    // and remember under the USER_SIGNOUT case, we returned an empty object in the
    // user.reducer.js file or 
   
    /*
        case USER_SIGNOUT :
            return {

            };
    */

    // and this will clear out our userInfo state or userSignIn will change from
    // userSignIn : userInfo : { ... } to userSignIn
    /*
    dispatch( {
        type : USER_SIGNOUT
    } );

    // this will clear out the user object or
    // userDetails : user : {}
    dispatch( {
        type : USER_DETAILS_RESET
    } );

    // this will clear out the orders array from the profile screen or
    // orderListMy : orders : []
    dispatch( {
        type : ORDER_LIST_MY_RESET
    } );

    // this will clear out the cart array, the shipping address object and the paymentMethod
    // object or
    // cart : cartItems : [], shippingAddress : {} and paymentMethod : {}
    dispatch( {
        type : CART_RESET
    } );

    // this will clear out the users object from the admin user list screen or
    // userList : users : []
    dispatch( {
        type : USER_LIST_RESET
    } );

    // when a user signs out, remove cartItems, shippingAddress and paymentMethod from
    // local storage
    localStorage.removeItem( 'cartItems' );
    localStorage.removeItem( 'shippingAddress' );
    localStorage.removeItem( 'paymentMethod' );

}


// ==============================
// Action Creator 3
// ==============================

// Action Creator 3
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user clicks on their name in the
// navigation bar and thereby shows the nav bar dropdown element
export const userDropdownActionCreator = () => async ( dispatch ) => {

    // let's dispatch our action or " USER_NAME_DROPDOWN "
    dispatch( {
        type : USER_DROPDOWN
    } );

}


// ==============================
// Action Creator 4
// ==============================

// Action Creator 4
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when an admin clicks on the admin heading in
// the navigation bar and thereby shows the nav bar dropdown element
export const adminDropdownActionCreator = () => async ( dispatch ) => {

    // let's dispatch our action or " USER_NAME_DROPDOWN "
    dispatch( {
        type : ADMIN_DROPDOWN
    } );

}


// ==============================
// Action Creator 5
// ==============================

// Action Creator 5
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user registers and remember to pass in
// as arguments the name, email and password
export const userRegisterActionCreator = ( name, email, password ) => async ( dispatch ) => {

    try {

        // let's dispatch our action or " USER_REGISTER_REQUEST "
        dispatch( {
            type : USER_REGISTER_REQUEST
        } );

        // create our endpoint
        const endpoint = '/api/users';

        // create our config object
        // since we are sending data ( i.e. the name, email and password ) we need to indicate
        // in the headers the content type or application/json in our case and let's create a
        // config object to help us do that
        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        };

        // below we are making a POST request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin,
            token   : generateToken( user._id )
        */

        // and the second argument in the request will be the name, email and password key
        // value pairs and remember we are sending the name, email and password key value
        // pairs to the server as part of the browser request

        // and the third argument in the request will be our config object
        /*
        const { data } = await axios.post(
            endpoint,
            {
                name     : name,
                email    : email,
                password : password
            },
            config
        );

        // let's dispatch our action or " USER_REGISTER_SUCCESS "
        dispatch( {
            type    : USER_REGISTER_SUCCESS,
            payload : data
        } );

        // and then we want to sign the user in right after they successfully register so let's
        // dispatch the following action or " USER_SIGNIN_SUCCESS "

        // and remember this will cause the nav bar heading to change so that the registered
        // user can see their name in the nav bar and have access the nav bar dropdown menu
        dispatch( {
            type    : USER_SIGNIN_SUCCESS,
            payload : data
        } );

        // we want to save the user information in local storage and remember we want the same
        // effect when a user registers as when a user signs in to the application
        localStorage.setItem( 'userInfo', JSON.stringify( data ) );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_REGISTER_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_REGISTER_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 6
// ==============================

// Action Creator 6
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to retrieve the user profile or user details

// remember in our route " router.route( '/profile' ).get( requireAuth, userGetProfile ); "
// we use the requireAuth middleware function and that function needs the token so we need
// to send a token in the getUserDetailsActionCreator or as part of the browser's request
// to the server or the backend and we can get the token from the front end by using getState
// so let's add getState as an argument and from getState we can get userSignIn and from
// userSignIn we can get userInfo and from userInfo we can get the token key value pair

// I believe we are using userSignIn below since to access the profile screen the user has
// to be signed in
export const getUserDetailsActionCreator = () => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_DETAILS_REQUEST "
        dispatch( {
            type : USER_DETAILS_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/users/profile "
        // and this is different than our route in the App.js file which is " /profile "
        const endpoint = '/api/users/profile';

        // use destructuring to get userInfo
        const { userSignIn : { userInfo } } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        const config = {
            headers : {
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin
        */

        // and the second argument in the request will be our config object
        /*
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " USER_DETAILS_SUCCESS "
        dispatch( {
            type    : USER_DETAILS_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_DETAILS_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_DETAILS_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 7
// ==============================

// ==============================
// Figure out acton creator 6 later in the course
// ==============================

// Action Creator 7
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to retrieve the user profile by the id ( we will
// need this later on ) and I created 2 seperate action creators or action creator 5 and action
// creator 6 to help simlify things

// I believe we are using userSign below since to access the profile screen the user has
// to be signed in
export const getUserDetailsByIdActionCreator = ( id ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_DETAILS_REQUEST "
        dispatch( {
            type : USER_DETAILS_REQUEST
        } );

        // create our endpoint
        const endpoint = `/api/users/${ id }`;

        // use destructuring to get userInfo
        const { userSignIn : { userInfo } } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        const config = {
            headers : {
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ??? ):

        /*

        */

        // and the second argument in the request will be our config object
        /*
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " USER_DETAILS_SUCCESS "
        dispatch( {
            type    : USER_DETAILS_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_DETAILS_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_DETAILS_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 8
// ==============================

// Action Creator 8
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to update the user profile and remember to pass in
// the user update object as an argument and getState as an argument since we need to send a token
// to the backend
export const userUpdateProfileActionCreator = ( userUpdateObject ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_UPDATE_PROFILE_REQUEST "
        dispatch( {
            type : USER_UPDATE_PROFILE_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/users/profile "
        // and this is different than our route in the App.js file which is " /profile "
        const endpoint = '/api/users/profile';

        // use destructuring to get userInfo
        const { userSignIn : { userInfo } } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        // and remember since we are sending data ( i.e. the userUpdateObject ) we need to
        // indicate in the headers the content type or application/json in our case and let's
        // create a config object to help us do that
        const config = {
            headers : {
                'Content-Type' : 'application/json',
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a PUT request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // userInfo object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin,
            token   : generateToken( user._id )
        */

        // and the second argument will be our user update object and this object comes
        // from the profile-screen.component.jsx file and looks like the following:

        /*
            {
                name     : name,
                email    : email,
                password : password
            }
        */

        // and the third argument in the request will be our config object and remember
        // we are making a PUT request here
        /*
        const { data } = await axios.put(
            endpoint,
            userUpdateObject,
            config
        );

        // let's dispatch our action or " USER_UPDATE_PROFILE_SUCCESS "
        dispatch( {
            type    : USER_UPDATE_PROFILE_SUCCESS,
            payload : data
        } );

        // to make sure our nav bar name updates immediately or at the same time our user profile
        // uodates we need to dispatch " USER_SIGNIN_SUCCESS " and pass data or the updated user
        // information to the payload
        dispatch( {
            type    : USER_SIGNIN_SUCCESS,
            payload : data
        } );

        // to make sure our update form name and email fields update immediately or at the same
        // time our user profile uodates we need to dispatch " USER_DETAILS_SUCCESS " and pass
        // data or the updated user information to the payload
        dispatch( {
            type    : USER_DETAILS_SUCCESS,
            payload : data
        } );

        // let's make sure we update the user information in local storage
        localStorage.setItem( 'userInfo', JSON.stringify( data ) );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_UPDATE_PROFILE_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_UPDATE_PROFILE_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 9
// ==============================

// Action Creator 9
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to get all the users so we can display a list of all the
// users on the admin user list screen and remember to pass in getState as an argument since we
// need to send a token to the backend
export const adminUserListActionCreator = () => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_LIST_REQUEST "
        dispatch( {
            type : USER_LIST_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/users "
        // and this is different than our route in the App.js file which is
        // " /admin/userlist "
        const endpoint = '/api/users';

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        const config = {
            headers : {
                Authorization : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is a list
        // of all the users

        // and the second argument in the request will be our config object and remember
        // we are making a GET request here
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " USER_LIST_SUCCESS "
        dispatch( {
            type    : USER_LIST_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_LIST_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_LIST_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// 9 -
// coming from the store.js 19 - file

// ==============================
// Action Creator 10
// ==============================

// Action Creator 10
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to delete a user from the admin user list screen
// and the database and remember to pass in as an argument the id of the user we are deleting
// and pass in getState as an argument since we need to send a token to the backend
export const adminUserDeleteActionCreator = ( id ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_DELETE_REQUEST "
        dispatch( {
            type : USER_DELETE_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/users/:id "
        // and this is different than our route in the App.js file which is
        // " /admin/userlist/:id "
        const endpoint = `/api/users/${ id }`;

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        const config = {
            headers : {
                Authorization : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a DELETE request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // success message or " User deleted from the database "

        // and the second argument in the request will be our config object and remember
        // we are making a DELETE request here
        const { data } = await axios.delete(
            endpoint,
            config
        );

        // let's dispatch our action or " USER_DELETE_SUCCESS "
        dispatch( {
            type : USER_DELETE_SUCCESS
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_DELETE_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_DELETE_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}

// now let's go to the admin-user-list-item.component.jsx 1 - file

// End of 9 -
*/































// ===============================


























/*
// at the beginning of lecture 70, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in axios
import axios from 'axios'

// import in the user sign in or login constants and these constants represent our actions
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

// import in the order list my reset constant and this constant represents our action
import { 
    ORDER_LIST_MY_RESET
} from '../constants/order.constants';

// import in the cart reset constant and this constant represents an action
import { 
    CART_RESET
} from '../constants/cart.constants';


// ==============================
// Action Creator 1
// ==============================

// ==============================
// Sign In
// ==============================

// Action Creator 1
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user signs in and remember to pass in
// as arguments the email and password
export const userSignInActionCreator = ( email, password ) => async ( dispatch ) => {

    try {

        // let's dispatch our action or " USER_SIGNIN_REQUEST "
        dispatch( {
            type : USER_SIGNIN_REQUEST
        } );

        // create our endpoint
        const endpoint = `/api/users/login`;

        // create our config object
        // since we are sending data ( i.e. the email and password ) we need to indicate in
        // the headers the content type or application/json in our case and let's create a
        // config object to help us do that
        const config = {
            headers : {
                'Content-Type': 'application/json'
            }
        };

        // below we are making a POST request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin,
            token   : generateToken( user._id )
        */

        // and the second argument in the request will be the email and password key
        // value pairs and remember we are sending the email and password key value
        // pairs to the server as part of the browser request

        // and the third argument in the request will be our config object
        /*
        const { data } = await axios.post(
            endpoint,
            {
                email    : email,
                password : password
            },
            config
        );

        // let's dispatch our action or " USER_SIGNIN_SUCCESS "
        dispatch( {
            type    : USER_SIGNIN_SUCCESS,
            payload : data
        } );

        // we want to save the user information in local storage
        localStorage.setItem( 'userInfo', JSON.stringify( data ) );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_SIGNIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_SIGNIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 2
// ==============================

// ==============================
// Sign Out
// ==============================

// Action Creator 2
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user signs out
export const userSignOutActionCreator = () => async ( dispatch ) => {

    // first, let's remove userInfo from local storage
    localStorage.removeItem( 'userInfo' );

    // then let's dispatch our action or " USER_SIGNOUT "
    // and remember under the USER_SIGNOUT case, we returned an empty object in the
    // user.reducer.js file or 
   
    /*
        case USER_SIGNOUT :
            return {

            };
    */

    // and this will clear out our userInfo state or userSignIn will change from
    // userSignIn : userInfo : { ... } to userSignIn
    /*
    dispatch( {
        type : USER_SIGNOUT
    } );

    // this will clear out the user object or
    // userGetProfile : user : {}
    dispatch( {
        type : USER_DETAILS_RESET
    } );

    // this will clear out the orders array from the profile screen or
    // orderListMy : orders : []
    dispatch( {
        type : ORDER_LIST_MY_RESET
    } );

    // this will clear out the cart array, the shipping address object and the paymentMethod
    // object or
    // cart : cartItems : [], shippingAddress : {} and paymentMethod : {}
    dispatch( {
        type : CART_RESET
    } );

    // this will clear out the users object from the admin user list screen or
    // userList : users : []
    dispatch( {
        type : USER_LIST_RESET
    } );

    // when a user signs out, remove cartItems, shippingAddress and paymentMethod from
    // local storage
    localStorage.removeItem( 'cartItems' );
    localStorage.removeItem( 'shippingAddress' );
    localStorage.removeItem( 'paymentMethod' );

}


// ==============================
// Action Creator 3
// ==============================

// ==============================
// User Dropdown
// ==============================

// Action Creator 3
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user clicks on their name in the
// navigation bar and thereby shows the nav bar dropdown element
export const userDropdownActionCreator = () => async ( dispatch ) => {

    // let's dispatch our action or " USER_NAME_DROPDOWN "
    dispatch( {
        type : USER_DROPDOWN
    } );

}


// ==============================
// Action Creator 4
// ==============================

// ==============================
// Admin Dropdown
// ==============================

// Action Creator 4
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when an admin clicks on the admin heading in
// the navigation bar and thereby shows the nav bar dropdown element
export const adminDropdownActionCreator = () => async ( dispatch ) => {

    // let's dispatch our action or " USER_NAME_DROPDOWN "
    dispatch( {
        type : ADMIN_DROPDOWN
    } );

}


// ==============================
// Action Creator 5
// ==============================

// ==============================
// Register
// ==============================

// Action Creator 5
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user registers and remember to pass in
// as arguments the name, email and password
export const userRegisterActionCreator = ( name, email, password ) => async ( dispatch ) => {

    try {

        // let's dispatch our action or " USER_REGISTER_REQUEST "
        dispatch( {
            type : USER_REGISTER_REQUEST
        } );

        // create our endpoint
        const endpoint = '/api/users';

        // create our 
        /*
        // since we are sending data ( i.e. the name, email and password ) we need to indicate
        // in the headers the content type or application/json in our case and let's create a
        // config object to help us do that
        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        };

        // below we are making a POST request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin,
            token   : generateToken( user._id )
        */

        // and the second argument in the request will be the name, email and password key
        // value pairs and remember we are sending the name, email and password key value
        // pairs to the server as part of the browser request

        // and the third argument in the request will be our config object
        /*
        const { data } = await axios.post(
            endpoint,
            {
                name     : name,
                email    : email,
                password : password
            },
            config
        );

        // let's dispatch our action or " USER_REGISTER_SUCCESS "
        dispatch( {
            type    : USER_REGISTER_SUCCESS,
            payload : data
        } );

        // and then we want to sign the user in right after they successfully register so let's
        // dispatch the following action or " USER_SIGNIN_SUCCESS "

        // and remember this will cause the nav bar heading to change so that the registered
        // user can see their name in the nav bar and have access the nav bar dropdown menu
        dispatch( {
            type    : USER_SIGNIN_SUCCESS,
            payload : data
        } );

        // we want to save the user information in local storage and remember we want the same
        // effect when a user registers as when a user signs in to the application
        localStorage.setItem( 'userInfo', JSON.stringify( data ) );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_REGISTER_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_REGISTER_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 6
// ==============================

// ==============================
// Get User Object - Profile Screen
// ==============================

// Action Creator 6
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to retrieve the user profile or user details

// remember in our route " router.route( '/profile' ).get( requireAuth, userGetProfile ); "
// we use the requireAuth middleware function and that function needs the token so we need
// to send a token in the userGetProfileActionCreator or as part of the browser's request
// to the server or the backend and we can get the token from the front end by using getState
// so let's add getState as an argument and from getState we can get userSignIn and from
// userSignIn we can get userInfo and from userInfo we can get the token key value pair

// I believe we are using userSignIn below since to access the profile screen the user has
// to be signed in
export const userGetProfileActionCreator = () => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_DETAILS_REQUEST "
        dispatch( {
            type : USER_DETAILS_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/users/profile "
        // and this is different than our route in the App.js file which is " /profile "
        const endpoint = '/api/users/profile';

        // use destructuring to get userInfo
        const { userSignIn : { userInfo } } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        const config = {
            headers : {
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin
        */

        // and the second argument in the request will be our config object
        /*
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " USER_DETAILS_SUCCESS "
        dispatch( {
            type    : USER_DETAILS_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_DETAILS_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_DETAILS_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 7
// ==============================

// ==============================
// Figure out acton creator 6 later in the course
// ==============================

// Action Creator 7
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to retrieve the user profile by the id ( we will
// need this later on ) and I created 2 seperate action creators or action creator 5 and action
// creator 6 to help simlify things

// I believe we are using userSign below since to access the profile screen the user has
// to be signed in
export const xxuserGetProfileActionCreator = ( id ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_DETAILS_REQUEST "
        dispatch( {
            type : USER_DETAILS_REQUEST
        } );

        // create our endpoint
        const endpoint = `/api/users/${ id }`;

        // use destructuring to get userInfo
        const { userSignIn : { userInfo } } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        const config = {
            headers : {
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ??? ):

        /*

        */

        // and the second argument in the request will be our config object
        /*
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " USER_DETAILS_SUCCESS "
        dispatch( {
            type    : USER_DETAILS_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_DETAILS_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_DETAILS_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 8
// ==============================

// ==============================
// Update User Object - Profile Screen
// ==============================

// Action Creator 8
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to update the user profile and remember to pass in
// the user update object as an argument and getState as an argument since we need to send a token
// to the backend
export const userUpdateProfileActionCreator = ( userUpdateObject ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_UPDATE_PROFILE_REQUEST "
        dispatch( {
            type : USER_UPDATE_PROFILE_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/users/profile "
        // and this is different than our route in the App.js file which is " /profile "
        const endpoint = '/api/users/profile';

        // use destructuring to get userInfo
        const { userSignIn : { userInfo } } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        // and remember since we are sending data ( i.e. the userUpdateObject ) we need to
        // indicate in the headers the content type or application/json in our case and let's
        // create a config object to help us do that
        const config = {
            headers : {
                'Content-Type' : 'application/json',
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a PUT request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // userInfo object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin,
            token   : generateToken( user._id )
        */

        // and the second argument will be our user update object and this object comes
        // from the profile-screen.component.jsx file and looks like the following:

        /*
            {
                name     : name,
                email    : email,
                password : password
            }
        */

        // and the third argument in the request will be our config object and remember
        // we are making a PUT request here
        /*
        const { data } = await axios.put(
            endpoint,
            userUpdateObject,
            config
        );

        // let's dispatch our action or " USER_UPDATE_PROFILE_SUCCESS "
        dispatch( {
            type    : USER_UPDATE_PROFILE_SUCCESS,
            payload : data
        } );

        // to make sure our nav bar name updates immediately or at the same time our user profile
        // uodates we need to dispatch " USER_SIGNIN_SUCCESS " and pass data or the updated user
        // information to the payload
        dispatch( {
            type    : USER_SIGNIN_SUCCESS,
            payload : data
        } );

        // to make sure our update form name and email fields update immediately or at the same
        // time our user profile uodates we need to dispatch " USER_DETAILS_SUCCESS " and pass
        // data or the updated user information to the payload
        dispatch( {
            type    : USER_DETAILS_SUCCESS,
            payload : data
        } );

        // let's make sure we update the user information in local storage
        localStorage.setItem( 'userInfo', JSON.stringify( data ) );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_UPDATE_PROFILE_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_UPDATE_PROFILE_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 9
// ==============================

// ==============================
// Get User List - Admin User List Screen
// ==============================

// Action Creator 9
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to get all the users so we can display a list of all the
// users on the admin user list screen and remember to pass in getState as an argument since we
// need to send a token to the backend
export const userListAdminActionCreator = () => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_LIST_REQUEST "
        dispatch( {
            type : USER_LIST_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/users "
        // and this is different than our route in the App.js file which is
        // " /admin/userlist "
        const endpoint = '/api/users';

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        const config = {
            headers : {
                Authorization : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is a list
        // of all the users

        // and the second argument in the request will be our config object and remember
        // we are making a GET request here
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " USER_LIST_SUCCESS "
        dispatch( {
            type    : USER_LIST_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_LIST_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_LIST_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 10
// ==============================

// ==============================
// Delete User - Admin User List Screen
// ==============================

// Action Creator 10
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to delete a user from the admin user list screen
// and the database and remember to pass in as an argument the id of the user we are deleting
// and pass in getState as an argument since we need to send a token to the backend
export const userDeleteAdminActionCreator = ( id ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_DELETE_REQUEST "
        dispatch( {
            type : USER_DELETE_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/users/:id "
        const endpoint = `/api/users/${ id }`;

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        const config = {
            headers : {
                Authorization : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a DELETE request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // success message or " User deleted from the database "

        // and the second argument in the request will be our config object and remember
        // we are making a DELETE request here

        // since we are not using data in the payload let's delete " const { data } = "
        await axios.delete(
            endpoint,
            config
        );

        // let's dispatch our action or " USER_DELETE_SUCCESS "
        dispatch( {
            type : USER_DELETE_SUCCESS
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_DELETE_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_DELETE_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// 10 -

// ==============================
// Action Creator 11
// ==============================

// ==============================
// Get User - Admin User Edit Screen
// ==============================

// Action Creator 11
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to get a user from the database and then display
// this user on the admin user edit screen and remember to pass in as an argument the id of
// the user we are retrieving and remember to pass in getState as an argument since we need to
// send a token to the backend
export const userGetAdminActionCreator = ( id ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_GET_REQUEST "
        dispatch( {
            type : USER_GET_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/users/:id "
        const endpoint = `/api/users/${ id }`;

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        const config = {
            headers : {
                Authorization : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object

        // and the second argument in the request will be our config object and remember
        // we are making a GET request here
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " USER_GET_SUCCESS "
        dispatch( {
            type    : USER_GET_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_GET_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_GET_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}

// now let's go to the user.reducers.js 9 - file

// End of 10 -
*/





























// ===============================


























/*
// at the beginning of lecture 70, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in axios
import axios from 'axios'

// import in the user sign in or login constants and these constants represent our actions
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
    USER_UPDATE_ADMIN_REQUEST,
    USER_UPDATE_ADMIN_SUCCESS,
    USER_UPDATE_ADMIN_FAIL
} from '../constants/user.constants';

// import in the order list my reset constant and this constant represents our action
import { 
    ORDER_LIST_MY_RESET
} from '../constants/order.constants';

// import in the cart reset constant and this constant represents an action
import { 
    CART_RESET
} from '../constants/cart.constants';


// ==============================
// Action Creator 1
// ==============================

// ==============================
// Sign In
// ==============================

// Action Creator 1
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user signs in and remember to pass in
// as arguments the email and password
export const userSignInActionCreator = ( email, password ) => async ( dispatch ) => {

    try {

        // let's dispatch our action or " USER_SIGNIN_REQUEST "
        dispatch( {
            type : USER_SIGNIN_REQUEST
        } );

        // create our endpoint
        const endpoint = `/api/users/login`;

        // create our config object
        // since we are sending data ( i.e. the email and password ) we need to indicate in
        // the headers the content type or application/json in our case and let's create a
        // config object to help us do that
        const config = {
            headers : {
                'Content-Type': 'application/json'
            }
        };

        // below we are making a POST request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin,
            token   : generateToken( user._id )
        */

        // and the second argument in the request will be the email and password key
        // value pairs and remember we are sending the email and password key value
        // pairs to the server as part of the browser request

        // and the third argument in the request will be our config object
        /*
        const { data } = await axios.post(
            endpoint,
            {
                email    : email,
                password : password
            },
            config
        );

        // let's dispatch our action or " USER_SIGNIN_SUCCESS "
        dispatch( {
            type    : USER_SIGNIN_SUCCESS,
            payload : data
        } );

        // we want to save the user information in local storage
        localStorage.setItem( 'userInfo', JSON.stringify( data ) );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_SIGNIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_SIGNIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 2
// ==============================

// ==============================
// Sign Out
// ==============================

// Action Creator 2
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user signs out
export const userSignOutActionCreator = () => async ( dispatch ) => {

    // first, let's remove userInfo from local storage
    localStorage.removeItem( 'userInfo' );

    // then let's dispatch our action or " USER_SIGNOUT_SUCCESS "
    // and remember under the USER_SIGNOUT_SUCCESS case, we returned an empty object in the
    // user.reducers.js file or 
   
    /*
        case USER_SIGNOUT_SUCCESS :
            return {

            };
    */

    // and this will clear out our userInfo state or userSignIn will change from
    // userSignIn : userInfo : { ... } to userSignIn
    /*
    dispatch( {
        type : USER_SIGNOUT_SUCCESS
    } );

    // this will clear out the user object or
    // userGetProfile : user : {}
    dispatch( {
        type : USER_GET_PROFILE_RESET
    } );

    // this will clear out the orders array from the profile screen or
    // orderListMy : orders : []
    dispatch( {
        type : ORDER_LIST_MY_RESET
    } );

    // this will clear out the cart array, the shipping address object and the paymentMethod
    // object or
    // cart : cartItems : [], shippingAddress : {} and paymentMethod : {}
    dispatch( {
        type : CART_RESET
    } );

    // this will clear out the users object from the admin user list screen or
    // userList : users : []
    dispatch( {
        type : USER_LIST_ADMIN_RESET
    } );

    // when a user signs out, remove cartItems, shippingAddress and paymentMethod from
    // local storage
    localStorage.removeItem( 'cartItems' );
    localStorage.removeItem( 'shippingAddress' );
    localStorage.removeItem( 'paymentMethod' );

}


// ==============================
// Action Creator 3
// ==============================

// ==============================
// User Dropdown
// ==============================

// Action Creator 3
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user clicks on their name in the
// navigation bar and thereby shows the nav bar dropdown element
export const userDropdownActionCreator = () => async ( dispatch ) => {

    // let's dispatch our action or " USER_NAME_DROPDOWN "
    dispatch( {
        type : USER_DROPDOWN
    } );

}


// ==============================
// Action Creator 4
// ==============================

// ==============================
// Admin Dropdown
// ==============================

// Action Creator 4
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when an admin clicks on the admin heading in
// the navigation bar and thereby shows the nav bar dropdown element
export const adminDropdownActionCreator = () => async ( dispatch ) => {

    // let's dispatch our action or " USER_NAME_DROPDOWN "
    dispatch( {
        type : ADMIN_DROPDOWN
    } );

}


// ==============================
// Action Creator 5
// ==============================

// ==============================
// Register
// ==============================

// Action Creator 5
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user registers and remember to pass in
// as arguments the name, email and password
export const userRegisterActionCreator = ( name, email, password ) => async ( dispatch ) => {

    try {

        // let's dispatch our action or " USER_REGISTER_REQUEST "
        dispatch( {
            type : USER_REGISTER_REQUEST
        } );

        // create our endpoint
        const endpoint = '/api/users';

        // create our config object
        // since we are sending data ( i.e. the name, email and password ) we need to indicate
        // in the headers the content type or application/json in our case and let's create a
        // config object to help us do that
        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        };

        // below we are making a POST request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin,
            token   : generateToken( user._id )
        */

        // and the second argument in the request will be the name, email and password key
        // value pairs and remember we are sending the name, email and password key value
        // pairs to the server as part of the browser request

        // and the third argument in the request will be our config object
        /*
        const { data } = await axios.post(
            endpoint,
            {
                name     : name,
                email    : email,
                password : password
            },
            config
        );

        // let's dispatch our action or " USER_REGISTER_SUCCESS "
        dispatch( {
            type    : USER_REGISTER_SUCCESS,
            payload : data
        } );

        // and then we want to sign the user in right after they successfully register so let's
        // dispatch the following action or " USER_SIGNIN_SUCCESS "

        // and remember this will cause the nav bar heading to change so that the registered
        // user can see their name in the nav bar and have access the nav bar dropdown menu
        dispatch( {
            type    : USER_SIGNIN_SUCCESS,
            payload : data
        } );

        // we want to save the user information in local storage and remember we want the same
        // effect when a user registers as when a user signs in to the application
        localStorage.setItem( 'userInfo', JSON.stringify( data ) );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_REGISTER_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_REGISTER_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 6
// ==============================

// ==============================
// Get User Object - Profile Screen
// ==============================

// Action Creator 6
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to retrieve the user profile or user details

// remember in our route " router.route( '/profile' ).get( requireAuth, userGetProfile ); "
// we use the requireAuth middleware function and that function needs the token so we need
// to send a token in the userGetProfileActionCreator or as part of the browser's request
// to the server or the backend and we can get the token from the front end by using getState
// so let's add getState as an argument and from getState we can get userSignIn and from
// userSignIn we can get userInfo and from userInfo we can get the token key value pair

// I believe we are using userSignIn below since to access the profile screen the user has
// to be signed in
export const userGetProfileActionCreator = () => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_GET_PROFILE_REQUEST "
        dispatch( {
            type : USER_GET_PROFILE_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/users/profile "
        // and this is different than our route in the App.js file which is " /profile "
        const endpoint = '/api/users/profile';

        // use destructuring to get userInfo
        const { userSignIn : { userInfo } } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        const config = {
            headers : {
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin
        */

        // and the second argument in the request will be our config object
        /*
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " USER_GET_PROFILE_SUCCESS "
        dispatch( {
            type    : USER_GET_PROFILE_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_GET_PROFILE_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_GET_PROFILE_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 7
// ==============================

// ==============================
// Update User Object - Profile Screen
// ==============================

// Action Creator 7
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to update the user profile and remember to pass in
// the user update object as an argument and getState as an argument since we need to send a token
// to the backend
export const userUpdateProfileActionCreator = ( userUpdateObject ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_UPDATE_PROFILE_REQUEST "
        dispatch( {
            type : USER_UPDATE_PROFILE_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/users/profile "
        // and this is different than our route in the App.js file which is " /profile "
        const endpoint = '/api/users/profile';

        // use destructuring to get userInfo
        const { userSignIn : { userInfo } } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        // and remember since we are sending data ( i.e. the userUpdateObject ) we need to
        // indicate in the headers the content type or application/json in our case and let's
        // create a config object to help us do that
        const config = {
            headers : {
                'Content-Type' : 'application/json',
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a PUT request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // userInfo object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin,
            token   : generateToken( user._id )
        */

        // and the second argument will be our user update object and this object comes
        // from the profile-screen.component.jsx file and looks like the following:

        /*
            {
                name     : name,
                email    : email,
                password : password
            }
        */

        // and the third argument in the request will be our config object and remember
        // we are making a PUT request here
        /*
        const { data } = await axios.put(
            endpoint,
            userUpdateObject,
            config
        );

        // let's dispatch our action or " USER_UPDATE_PROFILE_SUCCESS "
        dispatch( {
            type    : USER_UPDATE_PROFILE_SUCCESS,
            payload : data
        } );

        // to make sure our nav bar name updates immediately or at the same time our user profile
        // uodates we need to dispatch " USER_SIGNIN_SUCCESS " and pass data or the updated user
        // information to the payload
        dispatch( {
            type    : USER_SIGNIN_SUCCESS,
            payload : data
        } );

        // to make sure our update form name and email fields update immediately or at the same
        // time our user profile uodates we need to dispatch " USER_GET_PROFILE_SUCCESS " and pass
        // data or the updated user information to the payload
        dispatch( {
            type    : USER_GET_PROFILE_SUCCESS,
            payload : data
        } );

        // let's make sure we update the user information in local storage
        localStorage.setItem( 'userInfo', JSON.stringify( data ) );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_UPDATE_PROFILE_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_UPDATE_PROFILE_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 8
// ==============================

// ==============================
// Get User List - Admin User List Screen
// ==============================

// Action Creator 8
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to get all the users so we can display a list of all the
// users on the admin user list screen and remember to pass in getState as an argument since we
// need to send a token to the backend
export const userListAdminActionCreator = () => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_LIST_ADMIN_REQUEST "
        dispatch( {
            type : USER_LIST_ADMIN_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/users "
        // and this is different than our route in the App.js file which is
        // " /admin/userlist "
        const endpoint = '/api/users';

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        const config = {
            headers : {
                Authorization : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is a list
        // of all the users

        // and the second argument in the request will be our config object and remember
        // we are making a GET request here
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " USER_LIST_ADMIN_SUCCESS "
        dispatch( {
            type    : USER_LIST_ADMIN_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_LIST_ADMIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_LIST_ADMIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 9
// ==============================

// ==============================
// Delete User - Admin User List Screen
// ==============================

// Action Creator 9
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to delete a user from the admin user list screen
// and the database and remember to pass in as an argument the id of the user we are deleting
// and pass in getState as an argument since we need to send a token to the backend
export const userDeleteAdminActionCreator = ( id ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_DELETE_ADMIN_REQUEST "
        dispatch( {
            type : USER_DELETE_ADMIN_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/users/:id "
        const endpoint = `/api/users/${ id }`;

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        const config = {
            headers : {
                Authorization : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a DELETE request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // success message or " User deleted from the database "

        // and the second argument in the request will be our config object and remember
        // we are making a DELETE request here

        // since we are not using data in the payload let's delete " const { data } = "
        await axios.delete(
            endpoint,
            config
        );

        // let's dispatch our action or " USER_DELETE_ADMIN_SUCCESS "
        dispatch( {
            type : USER_DELETE_ADMIN_SUCCESS
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_DELETE_ADMIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_DELETE_ADMIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 10
// ==============================

// ==============================
// Get User - Admin User Edit Screen
// ==============================

// Action Creator 10
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to get a user from the database and then display
// this user on the admin user edit screen and remember to pass in as an argument the id of
// the user we are retrieving and remember to pass in getState as an argument since we need to
// send a token to the backend
export const userGetAdminActionCreator = ( id ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_GET_REQUEST "
        dispatch( {
            type : USER_GET_ADMIN_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/users/:id "
        const endpoint = `/api/users/${ id }`;

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        const config = {
            headers : {
                Authorization : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object

        // and the second argument in the request will be our config object and remember
        // we are making a GET request here
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " USER_GET_ADMIN_SUCCESS "
        dispatch( {
            type    : USER_GET_ADMIN_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_GET_ADMIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_GET_ADMIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// 11 -
// coming from the user.constants.js 10 -

// ==============================
// Action Creator 11
// ==============================

// ==============================
// Update User - Admin User Edit Screen
// ==============================

// Action Creator 11
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to update a user and save the updated user
// information in the datebase and remember to pass in as an argument the userUpdateObject
// and remember to pass in getState as an argument since we need to send a token to the
// backend
export const userUpdateAdminActionCreator = ( userUpdateObject ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_UPDATE_ADMIN_REQUEST "
        dispatch( {
            type : USER_UPDATE_ADMIN_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/users/:id "
        const endpoint = `/api/users/${ userUpdateObject._id }`;

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        // and remember since we are sending data ( i.e. the userUpdateObject ) we need to
        // indicate in the headers the content type or application/json in our case and let's
        // create a config object to help us do that
        const config = {
            headers : {
                'Content-Type' : 'application/json',
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a PUT request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // updated user object or:

        /*
            _id     : updatedUser._id,
            name    : updatedUser.name,
            email   : updatedUser.email,
            isAdmin : updatedUser.isAdmin
        */

        // and the second argument will be our user update object and this object comes
        // from the admin-user-edit-screen.component.jsx file and looks like the following:

        /*
            {
                name    : name,
                email   : email,
                isAdmin : isAdmin
            }
        */

        // and the third argument in the request will be our config object and remember
        // we are making a PUT request here
        /*
        const { data } = await axios.put(
            endpoint,
            userUpdateObject,
            config
        );

        // let's dispatch our action or " USER_UPDATE_ADMIN_SUCCESS "
        dispatch( {
            type    : USER_UPDATE_ADMIN_SUCCESS,
            payload : data
        } );

        // as soon as we update the user's information we want to pass that updated information
        // to our userGetAdminReducer and this will update the userGetAdmin piece of state and
        // thereby update the user's information in the admin user edit screen

        /*
        // let's dispatch our action or " USER_GET_ADMIN_SUCCESS "
        dispatch( {
            type    : USER_GET_ADMIN_SUCCESS,
            payload : data
        } );
        */

        /*
    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_UPDATE_ADMIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_UPDATE_ADMIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}

// now let's go to the user.reducers.js 10 - file

// End of 11 -
*/




























// ===============================



























// at the beginning of lecture 70, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in axios
import axios from 'axios'

// import in the user sign in or login constants and these constants represent our actions
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
    USER_UPDATE_ADMIN_REQUEST,
    USER_UPDATE_ADMIN_SUCCESS,
    USER_UPDATE_ADMIN_FAIL
} from '../constants/user.constants';

// import in the order reset constants and these constants represent our actions
import { 
    ORDER_LIST_MY_RESET,
    ORDER_LIST_ADMIN_RESET
} from '../constants/order.constants';

// import in the cart reset constant and this constant represents an action
import { 
    CART_RESET
} from '../constants/cart.constants';


// ==============================
// Action Creator 1
// ==============================

// ==============================
// Sign In
// ==============================

// Action Creator 1
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user signs in and remember to pass in
// as arguments the email and password
export const userSignInActionCreator = ( email, password ) => async ( dispatch ) => {

    try {

        // let's dispatch our action or " USER_SIGNIN_REQUEST "
        dispatch( {
            type : USER_SIGNIN_REQUEST
        } );

        // create our endpoint
        const endpoint = `/api/users/login`;

        // create our config object
        // since we are sending data ( i.e. the email and password ) we need to indicate in
        // the headers the content type or application/json in our case and let's create a
        // config object to help us do that
        const config = {
            headers : {
                'Content-Type': 'application/json'
            }
        };

        // below we are making a POST request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin,
            token   : generateToken( user._id )
        */

        // and the second argument in the request will be the email and password key
        // value pairs and remember we are sending the email and password key value
        // pairs to the server as part of the browser request

        // and the third argument in the request will be our config object
        const { data } = await axios.post(
            endpoint,
            {
                email    : email,
                password : password
            },
            config
        );

        // let's dispatch our action or " USER_SIGNIN_SUCCESS "
        dispatch( {
            type    : USER_SIGNIN_SUCCESS,
            payload : data
        } );

        // we want to save the user information in local storage
        localStorage.setItem( 'userInfo', JSON.stringify( data ) );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_SIGNIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_SIGNIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 2
// ==============================

// ==============================
// Sign Out
// ==============================

// Action Creator 2
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user signs out
export const userSignOutActionCreator = () => async ( dispatch ) => {

    // first, let's remove userInfo from local storage
    localStorage.removeItem( 'userInfo' );

    // then let's dispatch our action or " USER_SIGNOUT_SUCCESS "
    // and remember under the USER_SIGNOUT_SUCCESS case, we returned an empty object in the
    // user.reducers.js file or 
   
    /*
        case USER_SIGNOUT_SUCCESS :
            return {

            };
    */

    // and this will clear out our userInfo state or userSignIn will change from
    // userSignIn : userInfo : { ... } to userSignIn
    dispatch( {
        type : USER_SIGNOUT_SUCCESS
    } );

    // this will clear out the user object or
    // userGetProfile : user : {}
    dispatch( {
        type : USER_GET_PROFILE_RESET
    } );

    // this will clear out the orders array from the profile screen or
    // orderListMy : orders : []
    dispatch( {
        type : ORDER_LIST_MY_RESET
    } );

    // this will clear out the cart array, the shipping address object and the paymentMethod
    // object or
    // cart : cartItems : [], shippingAddress : {} and paymentMethod : {}
    dispatch( {
        type : CART_RESET
    } );

    // this will clear out the users object from the admin user list screen or
    // userList : users : []
    dispatch( {
        type : USER_LIST_ADMIN_RESET
    } );

    // this will clear out the orders object from the admin order list screen or
    // orderList : orders : []
    dispatch( {
        type : ORDER_LIST_ADMIN_RESET
    } );

    // when a user signs out, remove cartItems, shippingAddress and paymentMethod from
    // local storage
    localStorage.removeItem( 'cartItems' );
    localStorage.removeItem( 'shippingAddress' );
    localStorage.removeItem( 'paymentMethod' );

}


// ==============================
// Action Creator 3
// ==============================

// ==============================
// User Dropdown
// ==============================

// Action Creator 3
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user clicks on their name in the
// navigation bar and thereby shows the nav bar dropdown element
export const userDropdownActionCreator = () => async ( dispatch ) => {

    // let's dispatch our action or " USER_NAME_DROPDOWN "
    dispatch( {
        type : USER_DROPDOWN
    } );

}


// ==============================
// Action Creator 4
// ==============================

// ==============================
// Admin Dropdown
// ==============================

// Action Creator 4
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when an admin clicks on the admin heading in
// the navigation bar and thereby shows the nav bar dropdown element
export const adminDropdownActionCreator = () => async ( dispatch ) => {

    // let's dispatch our action or " USER_NAME_DROPDOWN "
    dispatch( {
        type : ADMIN_DROPDOWN
    } );

}


// ==============================
// Action Creator 5
// ==============================

// ==============================
// Register
// ==============================

// Action Creator 5
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator for when a user registers and remember to pass in
// as arguments the name, email and password
export const userRegisterActionCreator = ( name, email, password ) => async ( dispatch ) => {

    try {

        // let's dispatch our action or " USER_REGISTER_REQUEST "
        dispatch( {
            type : USER_REGISTER_REQUEST
        } );

        // create our endpoint
        const endpoint = '/api/users';

        // create our config object
        // since we are sending data ( i.e. the name, email and password ) we need to indicate
        // in the headers the content type or application/json in our case and let's create a
        // config object to help us do that
        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        };

        // below we are making a POST request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin,
            token   : generateToken( user._id )
        */

        // and the second argument in the request will be the name, email and password key
        // value pairs and remember we are sending the name, email and password key value
        // pairs to the server as part of the browser request

        // and the third argument in the request will be our config object
        const { data } = await axios.post(
            endpoint,
            {
                name     : name,
                email    : email,
                password : password
            },
            config
        );

        // let's dispatch our action or " USER_REGISTER_SUCCESS "
        dispatch( {
            type    : USER_REGISTER_SUCCESS,
            payload : data
        } );

        // and then we want to sign the user in right after they successfully register so let's
        // dispatch the following action or " USER_SIGNIN_SUCCESS "

        // and remember this will cause the nav bar heading to change so that the registered
        // user can see their name in the nav bar and have access the nav bar dropdown menu
        dispatch( {
            type    : USER_SIGNIN_SUCCESS,
            payload : data
        } );

        // we want to save the user information in local storage and remember we want the same
        // effect when a user registers as when a user signs in to the application
        localStorage.setItem( 'userInfo', JSON.stringify( data ) );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_REGISTER_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_REGISTER_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 6
// ==============================

// ==============================
// Get User Object - Profile Screen
// ==============================

// Action Creator 6
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to retrieve the user profile or user details

// remember in our route " router.route( '/profile' ).get( requireAuth, userGetProfile ); "
// we use the requireAuth middleware function and that function needs the token so we need
// to send a token in the userGetProfileActionCreator or as part of the browser's request
// to the server or the backend and we can get the token from the front end by using getState
// so let's add getState as an argument and from getState we can get userSignIn and from
// userSignIn we can get userInfo and from userInfo we can get the token key value pair

// I believe we are using userSignIn below since to access the profile screen the user has
// to be signed in
export const userGetProfileActionCreator = () => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_GET_PROFILE_REQUEST "
        dispatch( {
            type : USER_GET_PROFILE_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/users/profile "
        // and this is different than our route in the App.js file which is " /profile "
        const endpoint = '/api/users/profile';

        // use destructuring to get userInfo
        const { userSignIn : { userInfo } } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        const config = {
            headers : {
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request ( using axios ) to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin
        */

        // and the second argument in the request will be our config object
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " USER_GET_PROFILE_SUCCESS "
        dispatch( {
            type    : USER_GET_PROFILE_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_GET_PROFILE_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_GET_PROFILE_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 7
// ==============================

// ==============================
// Update User Object - Profile Screen
// ==============================

// Action Creator 7
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to update the user profile and remember to pass in
// the user update object as an argument and getState as an argument since we need to send a token
// to the backend
export const userUpdateProfileActionCreator = ( userUpdateObject ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_UPDATE_PROFILE_REQUEST "
        dispatch( {
            type : USER_UPDATE_PROFILE_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/users/profile "
        // and this is different than our route in the App.js file which is " /profile "
        const endpoint = '/api/users/profile';

        // use destructuring to get userInfo
        const { userSignIn : { userInfo } } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        // and remember since we are sending data ( i.e. the userUpdateObject ) we need to
        // indicate in the headers the content type or application/json in our case and let's
        // create a config object to help us do that
        const config = {
            headers : {
                'Content-Type' : 'application/json',
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a PUT request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // userInfo object or the following user information ( this comes from the
        // user.controller.js file ):

        /*
            _id     : user._id,
            name    : user.name,
            email   : user.email,
            isAdmin : user.isAdmin,
            token   : generateToken( user._id )
        */

        // and the second argument will be our user update object and this object comes
        // from the profile-screen.component.jsx file and looks like the following:

        /*
            {
                name     : name,
                email    : email,
                password : password
            }
        */

        // and the third argument in the request will be our config object and remember
        // we are making a PUT request here
        const { data } = await axios.put(
            endpoint,
            userUpdateObject,
            config
        );

        // let's dispatch our action or " USER_UPDATE_PROFILE_SUCCESS "
        dispatch( {
            type    : USER_UPDATE_PROFILE_SUCCESS,
            payload : data
        } );

        // to make sure our nav bar name updates immediately or at the same time our user profile
        // uodates we need to dispatch " USER_SIGNIN_SUCCESS " and pass data or the updated user
        // information to the payload
        dispatch( {
            type    : USER_SIGNIN_SUCCESS,
            payload : data
        } );

        // to make sure our update form name and email fields update immediately or at the same
        // time our user profile uodates we need to dispatch " USER_GET_PROFILE_SUCCESS " and pass
        // data or the updated user information to the payload
        dispatch( {
            type    : USER_GET_PROFILE_SUCCESS,
            payload : data
        } );

        // let's make sure we update the user information in local storage
        localStorage.setItem( 'userInfo', JSON.stringify( data ) );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_UPDATE_PROFILE_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_UPDATE_PROFILE_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 8
// ==============================

// ==============================
// Get User List - Admin User List Screen
// ==============================

// Action Creator 8
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to get all the users so we can display a list of all the
// users on the admin user list screen and remember to pass in getState as an argument since we
// need to send a token to the backend
export const userListAdminActionCreator = () => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_LIST_ADMIN_REQUEST "
        dispatch( {
            type : USER_LIST_ADMIN_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/users "
        // and this is different than our route in the App.js file which is
        // " /admin/userlist "
        const endpoint = '/api/users';

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        const config = {
            headers : {
                Authorization : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is a list
        // of all the users

        // and the second argument in the request will be our config object and remember
        // we are making a GET request here
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " USER_LIST_ADMIN_SUCCESS "
        dispatch( {
            type    : USER_LIST_ADMIN_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_LIST_ADMIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_LIST_ADMIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 9
// ==============================

// ==============================
// Delete User - Admin User List Screen
// ==============================

// Action Creator 9
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to delete a user from the admin user list screen
// and the database and remember to pass in as an argument the id of the user we are deleting
// and pass in getState as an argument since we need to send a token to the backend
export const userDeleteAdminActionCreator = ( id ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_DELETE_ADMIN_REQUEST "
        dispatch( {
            type : USER_DELETE_ADMIN_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/users/:id "
        const endpoint = `/api/users/${ id }`;

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        const config = {
            headers : {
                Authorization : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a DELETE request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // success message or " User deleted from the database "

        // and the second argument in the request will be our config object and remember
        // we are making a DELETE request here

        // since we are not using data in the payload let's delete " const { data } = "
        await axios.delete(
            endpoint,
            config
        );

        // let's dispatch our action or " USER_DELETE_ADMIN_SUCCESS "
        dispatch( {
            type : USER_DELETE_ADMIN_SUCCESS
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_DELETE_ADMIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_DELETE_ADMIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 10
// ==============================

// ==============================
// Get User - Admin User Edit Screen
// ==============================

// Action Creator 10
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to get a user from the database and then display
// this user on the admin user edit screen and remember to pass in as an argument the id of
// the user we are retrieving and remember to pass in getState as an argument since we need to
// send a token to the backend
export const userGetAdminActionCreator = ( id ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_GET_REQUEST "
        dispatch( {
            type : USER_GET_ADMIN_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/users/:id "
        const endpoint = `/api/users/${ id }`;

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        const config = {
            headers : {
                Authorization : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // user object

        // and the second argument in the request will be our config object and remember
        // we are making a GET request here
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " USER_GET_ADMIN_SUCCESS "
        dispatch( {
            type    : USER_GET_ADMIN_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_GET_ADMIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_GET_ADMIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 11
// ==============================

// ==============================
// Update User - Admin User Edit Screen
// ==============================

// Action Creator 11
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to update a user and save the updated user
// information in the datebase and remember to pass in as an argument the userUpdateObject
// and remember to pass in getState as an argument since we need to send a token to the
// backend
export const userUpdateAdminActionCreator = ( userUpdateObject ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " USER_UPDATE_ADMIN_REQUEST "
        dispatch( {
            type : USER_UPDATE_ADMIN_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/users/:id "
        const endpoint = `/api/users/${ userUpdateObject._id }`;

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        // and remember since we are sending data ( i.e. the userUpdateObject ) we need to
        // indicate in the headers the content type or application/json in our case and let's
        // create a config object to help us do that
        const config = {
            headers : {
                'Content-Type' : 'application/json',
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a PUT request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // updated user object or:

        /*
            _id     : updatedUser._id,
            name    : updatedUser.name,
            email   : updatedUser.email,
            isAdmin : updatedUser.isAdmin
        */

        // and the second argument will be our user update object and this object comes
        // from the admin-user-edit-screen.component.jsx file and looks like the following:

        /*
            {
                _id     : userId,
                name    : name,
                email   : email,
                isAdmin : isAdmin
            }
        */

        // and the third argument in the request will be our config object and remember
        // we are making a PUT request here
        const { data } = await axios.put(
            endpoint,
            userUpdateObject,
            config
        );

        // let's dispatch our action or " USER_UPDATE_ADMIN_SUCCESS "
        dispatch( {
            type    : USER_UPDATE_ADMIN_SUCCESS,
            payload : data
        } );

        // as soon as we update the user's information we want to pass that updated information
        // to our userGetAdminReducer and this will update the userGetAdmin piece of state and
        // thereby update the user's information in the admin user edit screen

        /*
        // let's dispatch our action or " USER_GET_ADMIN_SUCCESS "
        dispatch( {
            type    : USER_GET_ADMIN_SUCCESS,
            payload : data
        } );
        */

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " USER_UPDATE_ADMIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : USER_UPDATE_ADMIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}




/*
// coming from the product.reducers.js 3 - file
// let's bring the product constants into this file
import { 
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAILURE
} from '../constants/product.constants';

// instead of fetching the products or " data " in the home-screen.component.jsx file by using
// the useEffect hook ( see below ) we will fetch the data by using the listProducts action
// creator below and remember we will dispatch actions to the reducer and the reducer will
// update the state and remember " reducers are pure functions they do not mutate the
// original state. Instead, they return the updated state in a new object. "

/*
    useEffect( () => {

        const fetchProducts = async () => {

            const endpoint = '/api/products';

            const response =  await fetch( endpoint, {
                method : 'GET'
            } );

            const data = await response.json();

            setProducts( data );

        }

        fetchProducts();

    }, [] );
*/

// Brad said we can think of functions like listProducts below as action creators and the
// actual actions are " PRODUCT_LIST_REQUEST ", " PRODUCT_LIST_SUCCESS " and
// " PRODUCT_LIST_FAILURE "

// and remember we want to make asynchronous requests with our action creators and this
// is where redux thunk comes in and what redux thunk allows us to do is basically add
// a function within a function so instead of " export const listProducts = () => { "
// we will do " export const listProducts = () => async () => { " and then we will add
// dispatch as the argument to the second function
/*
export const listProducts = () => async ( dispatch ) => {

    // let's add a try catch block below
    try {

        // let's dispatch our action or " PRODUCT_LIST_REQUEST "
        dispatch( {
            type : PRODUCT_LIST_REQUEST
        } );

        // create our endpoint
        const endpoint = '/api/products';

        // below we are making a request ( using the fetch API ) to this endpoint
        // " /api/products " and when the server receives this request it will respond
        // with the products array
        const response =  await fetch( endpoint, {
            method : 'GET'
        } );

        // convert the response into a JavaScript object using the json() method
        const data = await response.json();

        // let's dispatch our action or " PRODUCT_LIST_SUCCESS "
        dispatch( {
            type    : PRODUCT_LIST_SUCCESS,
            payload : data
        } );

    } catch ( error ) {

        // let's dispatch our action or " PRODUCT_LIST_FAILURE "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // if our custom error message exist or " error.response.data.message " then let's
        // return that message otherwise let's return a generic error message or
        // " error.message "
        dispatch( {
            type    : PRODUCT_LIST_FAILURE,
            payload : error.response.data.message ? error.response.data.message : error.message
        } );

    }

}

// now we have created our listProducts action creator but it doesn't fire off yet and to
// fire this off we need to do that in our home-screen.component.jsx 2 - file and we will
// do this in the next video
*/


















// ===============================






















// at the beginning of lecture 28, given all the notes, I created a new file below without
// the notes so we are starting fresh

/*
import axios from 'axios'

// import in the product constants and these constants represent our actions
import { 
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAILURE
} from '../constants/product.constants';

// instead of fetching the products or " data " in the home-screen.component.jsx file by using
// the useEffect hook ( see below ) we will fetch the data by using the action creator below

// use redux thunk to make an asynchronous request with our action creator
export const listProducts = () => async ( dispatch ) => {

    try {

        // let's dispatch our action or " PRODUCT_LIST_REQUEST "
        dispatch( {
            type : PRODUCT_LIST_REQUEST
        } );

        // 1 -

        // had to use axios since my error message wasn't showing up correctly with the fetch
        // API

        // from a blog: " One major disadvantage is error handling when using fetch. It always
        // gets a response, unless there is a network error. All 4xx, 5xx don’t get into catch
        // block " and this was my experience when manually setting a 401 error

        // and remember " If an error occurs when fetching data from our endpoint, execution
        // is transferred to the catch block and we can handle whatever error is thrown. "

        // comment out the code for the fetch API

        /*
        // create our endpoint
        const endpoint = '/api/products';

        // below we are making a request ( using the fetch API ) to this endpoint
        // " /api/products " and when the server receives this request it will respond
        // with the products array
        const response =  await fetch( endpoint, {
            method : 'GET'
        } );

        // convert the response into a JavaScript object using the json() method
        const data = await response.json();
        */

        // create our endpoint
        /*
        const endpoint = '/api/products';

        // below we are making a request ( using axios ) to this endpoint " /api/products "
        // and axios returns the response object and we can then destructure the data object off
        // of the response object and the data object in this case is the products array
        const { data } = await axios.get( endpoint );

        // End of 1 -

  
        // let's dispatch our action or " PRODUCT_LIST_SUCCESS "
        dispatch( {
            type    : PRODUCT_LIST_SUCCESS,
            payload : data
        } );

    } catch ( error ) {

        // let's dispatch our action or " PRODUCT_LIST_FAILURE "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // if " error.response " and " error.response.data.message " ( i.e. our custom error
        // message ) exist then let's return our custom error message otherwise let's return
        // a generic error message or " error.message "

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_LIST_FAILURE,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}
*/






















// ===============================




















/*
// at the beginning of lecture 28, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in axios
import axios from 'axios'

// import in the product constants and these constants represent our actions


// 2 -
// coming from the product.constants.js 1 - file
// import in the product details constants

// End of 2 -


import { 
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_GET_REQUEST,
    PRODUCT_GET_SUCCESS,
    PRODUCT_GET_FAIL,
} from '../constants/product.constants';

// instead of fetching the products or " data " in the home-screen.component.jsx file by using
// the useEffect hook we will fetch the data by using the action creator below

// use redux thunk to make an asynchronous request with our action creator
export const productListActionCreator = () => async ( dispatch ) => {

    try {

        // let's dispatch our action or " PRODUCT_LIST_REQUEST "
        dispatch( {
            type : PRODUCT_LIST_REQUEST
        } );

        // create our endpoint
        const endpoint = '/api/products';

        // below we are making a request ( using axios ) to this endpoint " /api/products "
        // and axios returns the response object and we can then destructure the data object off
        // of the response object and the data object in this case is the products array
        const { data } = await axios.get( endpoint );

        // let's dispatch our action or " PRODUCT_LIST_SUCCESS "
        dispatch( {
            type    : PRODUCT_LIST_SUCCESS,
            payload : data
        } );

    } catch ( error ) {

        // let's dispatch our action or " PRODUCT_LIST_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_LIST_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// 2 -
// create the productGetActionCreator

// instead of fetching the product details or " data " in the product-screen.component.jsx
// file by using the useEffect hook we will fetch the data by using the action creator below

// use redux thunk to make an asynchronous request with our action creator

// remember we need to pass in " id " as the argument to the productGetActionCreator and
// then use that id value as part of the enpoint below
export const productGetActionCreator = ( id ) => async ( dispatch ) => {

    try {

        // let's dispatch our action or " PRODUCT_GET_REQUEST "
        dispatch( {
            type : PRODUCT_GET_REQUEST
        } );

        // create our endpoint
        const endpoint = `/api/products/${ id }`;

        // below we are making a GET request ( using axios ) to this endpoint
        // " /api/products/:id " and axios returns the response object and we can then
        // destructure the data object off of the response object and the data object
        // in this case is the individual product
        const { data } = await axios.get( endpoint );

        // let's dispatch our action or " PRODUCT_GET_SUCCESS "
        dispatch( {
            type    : PRODUCT_GET_SUCCESS,
            payload : data
        } );

    } catch ( error ) {

        // let's dispatch our action or " PRODUCT_GET_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_GET_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}

// now go to the product.reducer.js 4 - file

// End of 2 -
*/






















// ===============================




















/*
// at the beginning of lecture 31, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in axios
import axios from 'axios'

// import in the product constants and these constants represent our actions
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
// Action Creator 1
// ==============================

// ==============================
// Get Product List - Home Screen
// ==============================

// Action Creator 1
// instead of fetching the products or " data " in the home-screen.component.jsx file by using
// the useEffect hook we will fetch the data by using the action creator below

// use redux thunk to make an asynchronous request with our action creator
export const productListActionCreator = () => async ( dispatch ) => {

    try {

        // let's dispatch our action or " PRODUCT_LIST_REQUEST "
        dispatch( {
            type : PRODUCT_LIST_REQUEST
        } );

        // create our endpoint
        const endpoint = '/api/products';

        // below we are making a request ( using axios ) to this endpoint " /api/products "
        // and axios returns the response object and we can then destructure the data object off
        // of the response object and the data object in this case is the products array
        const { data } = await axios.get( endpoint );

        // let's dispatch our action or " PRODUCT_LIST_SUCCESS "
        dispatch( {
            type    : PRODUCT_LIST_SUCCESS,
            payload : data
        } );

    } catch ( error ) {

        // let's dispatch our action or " PRODUCT_LIST_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_LIST_FAIL,
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
// Get Product - Product Screen
// ==============================

// Action Creator 2
// use redux thunk to make an asynchronous request with our action creator

// remember we need to pass in " id " as the argument to the productGetActionCreator and
// then use that id value as part of the enpoint below
export const productGetActionCreator = ( id ) => async ( dispatch ) => {

    try {

        // let's dispatch our action or " PRODUCT_GET_REQUEST "
        dispatch( {
            type : PRODUCT_GET_REQUEST
        } );

        // create our endpoint
        const endpoint = `/api/products/${ id }`;

        // below we are making a GET request ( using axios ) to this endpoint
        // " /api/products/:id " and axios returns the response object and we can then
        // destructure the data object off of the response object and the data object
        // in this case is the individual product
        const { data } = await axios.get( endpoint );

        // let's dispatch our action or " PRODUCT_GET_SUCCESS "
        dispatch( {
            type    : PRODUCT_GET_SUCCESS,
            payload : data
        } );

    } catch ( error ) {

        // let's dispatch our action or " PRODUCT_GET_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_GET_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// 3 -
// coming from the product.constants.js 2 - file

// ==============================
// Action Creator 3
// ==============================

// ==============================
// Delete Product - Admin Product List Screen
// ==============================

// Action Creator 3
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to delete a product from the admin product list screen
// and the database and remember to pass in as an argument the id of the product we are deleting
// and pass in getState as an argument since we need to send a token to the backend
export const productDeleteAdminActionCreator = ( id ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " PRODUCT_DELETE_ADMIN_REQUEST "
        dispatch( {
            type : PRODUCT_DELETE_ADMIN_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/products/:id "
        const endpoint = `/api/products/${ id }`;

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
        // success message or " Product deleted from the database "

        // and the second argument in the request will be our config object and remember
        // we are making a DELETE request here

        // since we are not using data in the payload let's delete " const { data } = "
        await axios.delete(
            endpoint,
            config
        );

        // let's dispatch our action or " PRODUCT_DELETE_ADMIN_SUCCESS "
        dispatch( {
            type : PRODUCT_DELETE_ADMIN_SUCCESS
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " PRODUCT_DELETE_ADMIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_DELETE_ADMIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}

// now let's go to the product.reducers.js 5 - file

// End of 3 -
*/






















// ===============================




















/*
// at the beginning of lecture 31, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in axios
import axios from 'axios'

// import in the product constants and these constants represent our actions
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
    PRODUCT_CREATE_ADMIN_FAIL
} from '../constants/product.constants';


// ==============================
// Action Creator 1
// ==============================

// ==============================
// Get Product List - Home Screen
// ==============================

// Action Creator 1
// instead of fetching the products or " data " in the home-screen.component.jsx file by using
// the useEffect hook we will fetch the data by using the action creator below

// use redux thunk to make an asynchronous request with our action creator
export const productListActionCreator = () => async ( dispatch ) => {

    try {

        // let's dispatch our action or " PRODUCT_LIST_REQUEST "
        dispatch( {
            type : PRODUCT_LIST_REQUEST
        } );

        // create our endpoint
        const endpoint = '/api/products';

        // below we are making a request ( using axios ) to this endpoint " /api/products "
        // and axios returns the response object and we can then destructure the data object off
        // of the response object and the data object in this case is the products array
        const { data } = await axios.get( endpoint );

        // let's dispatch our action or " PRODUCT_LIST_SUCCESS "
        dispatch( {
            type    : PRODUCT_LIST_SUCCESS,
            payload : data
        } );

    } catch ( error ) {

        // let's dispatch our action or " PRODUCT_LIST_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_LIST_FAIL,
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
// Get Product - Product Screen
// ==============================

// Action Creator 2
// use redux thunk to make an asynchronous request with our action creator

// remember we need to pass in " id " as the argument to the productGetActionCreator and
// then use that id value as part of the enpoint below
export const productGetActionCreator = ( id ) => async ( dispatch ) => {

    try {

        // let's dispatch our action or " PRODUCT_GET_REQUEST "
        dispatch( {
            type : PRODUCT_GET_REQUEST
        } );

        // create our endpoint
        const endpoint = `/api/products/${ id }`;

        // below we are making a GET request ( using axios ) to this endpoint
        // " /api/products/:id " and axios returns the response object and we can then
        // destructure the data object off of the response object and the data object
        // in this case is the individual product
        const { data } = await axios.get( endpoint );

        // let's dispatch our action or " PRODUCT_GET_SUCCESS "
        dispatch( {
            type    : PRODUCT_GET_SUCCESS,
            payload : data
        } );

    } catch ( error ) {

        // let's dispatch our action or " PRODUCT_GET_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_GET_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 3
// ==============================

// ==============================
// Delete Product - Admin Product List Screen
// ==============================

// Action Creator 3
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to delete a product from the admin product list screen
// and the database and remember to pass in as an argument the id of the product we are deleting
// and pass in getState as an argument since we need to send a token to the backend
export const productDeleteAdminActionCreator = ( id ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " PRODUCT_DELETE_ADMIN_REQUEST "
        dispatch( {
            type : PRODUCT_DELETE_ADMIN_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/products/:id "
        const endpoint = `/api/products/${ id }`;

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
        // success message or " Product deleted from the database "

        // and the second argument in the request will be our config object and remember
        // we are making a DELETE request here

        // since we are not using data in the payload let's delete " const { data } = "
        await axios.delete(
            endpoint,
            config
        );

        // let's dispatch our action or " PRODUCT_DELETE_ADMIN_SUCCESS "
        dispatch( {
            type : PRODUCT_DELETE_ADMIN_SUCCESS
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " PRODUCT_DELETE_ADMIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_DELETE_ADMIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// 4 -
// coming from the product.constants.js 3 - file

// ==============================
// Action Creator 4
// ==============================

// ==============================
// Create Product - Admin Product List Screen
// ==============================

// Action Creator 4
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to create a product with dummy sample data and then
// save it to the database and remember to pass in getState as an argument since we need to
// send a token to the backend
export const productCreateAdminActionCreator = () => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " PRODUCT_CREATE_ADMIN_REQUEST "
        dispatch( {
            type : PRODUCT_CREATE_ADMIN_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/products "
        const endpoint = '/api/products';

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

        // below we are making a POST request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // newly created product with sample data

        // and remember the second argument will be an empty object because we are
        // making a POST request and therefore we have to send something to the server and
        // since we have nothing to send to the server in this case we will send an empty
        // object

        // and the third argument in the request will be our config object and remember
        // we are making a POST request here
        const { data } = await axios.post(
            endpoint,
            {},
            config
        );

        // let's dispatch our action or " PRODUCT_CREATE_ADMIN_SUCCESS "
        dispatch( {
            type    : PRODUCT_CREATE_ADMIN_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " PRODUCT_CREATE_ADMIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_CREATE_ADMIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}

// now let's go to the product.reducers.js 6 - file

// End of 4 -
*/






















// ===============================




















/*
// at the beginning of lecture 77, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in axios
import axios from 'axios'

// import in the product constants and these constants represent our actions
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
    PRODUCT_UPDATE_ADMIN_REQUEST,
    PRODUCT_UPDATE_ADMIN_SUCCESS,
    PRODUCT_UPDATE_ADMIN_FAIL
} from '../constants/product.constants';


// ==============================
// Action Creator 1
// ==============================

// ==============================
// Get Product List - Home Screen
// ==============================

// Action Creator 1
// instead of fetching the products or " data " in the home-screen.component.jsx file by using
// the useEffect hook we will fetch the data by using the action creator below

// use redux thunk to make an asynchronous request with our action creator
export const productListActionCreator = () => async ( dispatch ) => {

    try {

        // let's dispatch our action or " PRODUCT_LIST_REQUEST "
        dispatch( {
            type : PRODUCT_LIST_REQUEST
        } );

        // create our endpoint
        const endpoint = '/api/products';

        // below we are making a request ( using axios ) to this endpoint " /api/products "
        // and axios returns the response object and we can then destructure the data object off
        // of the response object and the data object in this case is the products array
        const { data } = await axios.get( endpoint );

        // let's dispatch our action or " PRODUCT_LIST_SUCCESS "
        dispatch( {
            type    : PRODUCT_LIST_SUCCESS,
            payload : data
        } );

    } catch ( error ) {

        // let's dispatch our action or " PRODUCT_LIST_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_LIST_FAIL,
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
// Get Product - Product Screen
// ==============================

// Action Creator 2
// use redux thunk to make an asynchronous request with our action creator

// remember we need to pass in " id " as the argument to the productGetActionCreator and
// then use that id value as part of the enpoint below
export const productGetActionCreator = ( id ) => async ( dispatch ) => {

    try {

        // let's dispatch our action or " PRODUCT_GET_REQUEST "
        dispatch( {
            type : PRODUCT_GET_REQUEST
        } );

        // create our endpoint
        const endpoint = `/api/products/${ id }`;

        // below we are making a GET request ( using axios ) to this endpoint
        // " /api/products/:id " and axios returns the response object and we can then
        // destructure the data object off of the response object and the data object
        // in this case is the individual product
        const { data } = await axios.get( endpoint );

        // let's dispatch our action or " PRODUCT_GET_SUCCESS "
        dispatch( {
            type    : PRODUCT_GET_SUCCESS,
            payload : data
        } );

    } catch ( error ) {

        // let's dispatch our action or " PRODUCT_GET_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_GET_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 3
// ==============================

// ==============================
// Delete Product - Admin Product List Screen
// ==============================

// Action Creator 3
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to delete a product from the admin product list screen
// and the database and remember to pass in as an argument the id of the product we are deleting
// and pass in getState as an argument since we need to send a token to the backend
export const productDeleteAdminActionCreator = ( id ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " PRODUCT_DELETE_ADMIN_REQUEST "
        dispatch( {
            type : PRODUCT_DELETE_ADMIN_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/products/:id "
        const endpoint = `/api/products/${ id }`;

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
        // success message or " Product deleted from the database "

        // and the second argument in the request will be our config object and remember
        // we are making a DELETE request here

        // since we are not using data in the payload let's delete " const { data } = "
        await axios.delete(
            endpoint,
            config
        );

        // let's dispatch our action or " PRODUCT_DELETE_ADMIN_SUCCESS "
        dispatch( {
            type : PRODUCT_DELETE_ADMIN_SUCCESS
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " PRODUCT_DELETE_ADMIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_DELETE_ADMIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 4
// ==============================

// ==============================
// Create Product - Admin Product List Screen
// ==============================

// Action Creator 4
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to create a product with dummy sample data and then
// save it to the database and remember to pass in getState as an argument since we need to
// send a token to the backend
export const productCreateAdminActionCreator = () => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " PRODUCT_CREATE_ADMIN_REQUEST "
        dispatch( {
            type : PRODUCT_CREATE_ADMIN_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/products "
        const endpoint = '/api/products';

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

        // below we are making a POST request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // newly created product with sample data

        // and remember the second argument will be an empty object because we are
        // making a POST request and therefore we have to send something to the server and
        // since we have nothing to send to the server in this case we will send an empty
        // object

        // and the third argument in the request will be our config object and remember
        // we are making a POST request here
        const { data } = await axios.post(
            endpoint,
            {},
            config
        );

        // let's dispatch our action or " PRODUCT_CREATE_ADMIN_SUCCESS "
        dispatch( {
            type    : PRODUCT_CREATE_ADMIN_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " PRODUCT_CREATE_ADMIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_CREATE_ADMIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// 5 -
// coming from the product.constants.js 4 - file

// ==============================
// Action Creator 5
// ==============================

// ==============================
// Update Product - Admin Product Edit Screen
// ==============================

// Action Creator 5
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to update a product and then save that product
// to the database and remember to pass in productUpdateObject as an argument and remember
// to pass in getState as an argument since we need to send a token to the backend
export const productUpdateAdminActionCreator = ( productUpdateObject ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " PRODUCT_UPDATE_ADMIN_REQUEST "
        dispatch( {
            type : PRODUCT_UPDATE_ADMIN_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/products/:id "
        const endpoint = `/api/products/${ productUpdateObject._id }`;

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        // and remember since we are sending data ( i.e. the productUpdateObject ) we need to
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
        // updated product object

        // and the second argument will be the product update object

        // and the third argument in the request will be our config object and remember
        // we are making a POST request here
        const { data } = await axios.put(
            endpoint,
            productUpdateObject,
            config
        );

        // let's dispatch our action or " PRODUCT_UPDATE_ADMIN_SUCCESS "
        dispatch( {
            type    : PRODUCT_UPDATE_ADMIN_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " PRODUCT_UPDATE_ADMIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_UPDATE_ADMIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}

// now let's go to the product.reducers.js 7 - file

// End of 5 -
*/






















// ===============================




















/*
// at the beginning of lecture 79, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in axios
import axios from 'axios'

// import in the product constants and these constants represent our actions
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
    PRODUCT_UPDATE_ADMIN_REQUEST,
    PRODUCT_UPDATE_ADMIN_SUCCESS,
    PRODUCT_UPDATE_ADMIN_FAIL,
    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_FAIL,
    PRODUCT_CREATE_REVIEW_RESET
} from '../constants/product.constants';


// ==============================
// Action Creator 1
// ==============================

// ==============================
// Get Product List - Home Screen
// ==============================

// Action Creator 1
// instead of fetching the products or " data " in the home-screen.component.jsx file by using
// the useEffect hook we will fetch the data by using the action creator below

// use redux thunk to make an asynchronous request with our action creator
export const productListActionCreator = () => async ( dispatch ) => {

    try {

        // let's dispatch our action or " PRODUCT_LIST_REQUEST "
        dispatch( {
            type : PRODUCT_LIST_REQUEST
        } );

        // create our endpoint
        const endpoint = '/api/products';

        // below we are making a request ( using axios ) to this endpoint " /api/products "
        // and axios returns the response object and we can then destructure the data object off
        // of the response object and the data object in this case is the products array
        const { data } = await axios.get( endpoint );

        // let's dispatch our action or " PRODUCT_LIST_SUCCESS "
        dispatch( {
            type    : PRODUCT_LIST_SUCCESS,
            payload : data
        } );

    } catch ( error ) {

        // let's dispatch our action or " PRODUCT_LIST_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_LIST_FAIL,
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
// Get Product - Product Screen
// ==============================

// Action Creator 2
// use redux thunk to make an asynchronous request with our action creator

// remember we need to pass in " id " as the argument to the productGetActionCreator and
// then use that id value as part of the enpoint below
export const productGetActionCreator = ( id ) => async ( dispatch ) => {

    try {

        // let's dispatch our action or " PRODUCT_GET_REQUEST "
        dispatch( {
            type : PRODUCT_GET_REQUEST
        } );

        // create our endpoint
        const endpoint = `/api/products/${ id }`;

        // below we are making a GET request ( using axios ) to this endpoint
        // " /api/products/:id " and axios returns the response object and we can then
        // destructure the data object off of the response object and the data object
        // in this case is the individual product
        const { data } = await axios.get( endpoint );

        // let's dispatch our action or " PRODUCT_GET_SUCCESS "
        dispatch( {
            type    : PRODUCT_GET_SUCCESS,
            payload : data
        } );

    } catch ( error ) {

        // let's dispatch our action or " PRODUCT_GET_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_GET_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 3
// ==============================

// ==============================
// Delete Product - Admin Product List Screen
// ==============================

// Action Creator 3
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to delete a product from the admin product list screen
// and the database and remember to pass in as an argument the id of the product we are deleting
// and pass in getState as an argument since we need to send a token to the backend
export const productDeleteAdminActionCreator = ( id ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " PRODUCT_DELETE_ADMIN_REQUEST "
        dispatch( {
            type : PRODUCT_DELETE_ADMIN_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/products/:id "
        const endpoint = `/api/products/${ id }`;

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
        // success message or " Product deleted from the database "

        // and the second argument in the request will be our config object and remember
        // we are making a DELETE request here

        // since we are not using data in the payload let's delete " const { data } = "
        await axios.delete(
            endpoint,
            config
        );

        // let's dispatch our action or " PRODUCT_DELETE_ADMIN_SUCCESS "
        dispatch( {
            type : PRODUCT_DELETE_ADMIN_SUCCESS
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " PRODUCT_DELETE_ADMIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_DELETE_ADMIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 4
// ==============================

// ==============================
// Create Product - Admin Product List Screen
// ==============================

// Action Creator 4
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to create a product with dummy sample data and then
// save it to the database and remember to pass in getState as an argument since we need to
// send a token to the backend
export const productCreateAdminActionCreator = () => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " PRODUCT_CREATE_ADMIN_REQUEST "
        dispatch( {
            type : PRODUCT_CREATE_ADMIN_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/products "
        const endpoint = '/api/products';

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

        // below we are making a POST request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // newly created product with sample data

        // and remember the second argument will be an empty object because we are
        // making a POST request and therefore we have to send something to the server and
        // since we have nothing to send to the server in this case we will send an empty
        // object

        // and the third argument in the request will be our config object and remember
        // we are making a POST request here
        const { data } = await axios.post(
            endpoint,
            {},
            config
        );

        // let's dispatch our action or " PRODUCT_CREATE_ADMIN_SUCCESS "
        dispatch( {
            type    : PRODUCT_CREATE_ADMIN_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " PRODUCT_CREATE_ADMIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_CREATE_ADMIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 5
// ==============================

// ==============================
// Update Product - Admin Product Edit Screen
// ==============================

// Action Creator 5
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to update a product and then save that product
// to the database and remember to pass in productUpdateObject as an argument and remember
// to pass in getState as an argument since we need to send a token to the backend
export const productUpdateAdminActionCreator = ( productUpdateObject ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " PRODUCT_UPDATE_ADMIN_REQUEST "
        dispatch( {
            type : PRODUCT_UPDATE_ADMIN_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/products/:id "
        const endpoint = `/api/products/${ productUpdateObject._id }`;

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        // and remember since we are sending data ( i.e. the productUpdateObject ) we need to
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
        // updated product object

        // and the second argument will be the product update object

        // and the third argument in the request will be our config object and remember
        // we are making a POST request here
        const { data } = await axios.put(
            endpoint,
            productUpdateObject,
            config
        );

        // let's dispatch our action or " PRODUCT_UPDATE_ADMIN_SUCCESS "
        dispatch( {
            type    : PRODUCT_UPDATE_ADMIN_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " PRODUCT_UPDATE_ADMIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_UPDATE_ADMIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}



// 6 -
// coming from the product.constants.js 5 - file

// ==============================
// Action Creator 6
// ==============================

// ==============================
// Create Product Review - Admin Product Edit Screen
// ==============================

// Action Creator 6
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to create a product review and then save that product
// review to the database and remember to pass in the productId and the productCreateReviewObject
// as arguments and remember to pass in getState as an argument since we need to send a token
// to the backend
export const productCreateReviewActionCreator = ( productId, productCreateReviewObject ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " PRODUCT_CREATE_REVIEW_REQUEST "
        dispatch( {
            type : PRODUCT_CREATE_REVIEW_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is
        // " /api/products/:id/reviews "
        const endpoint = `/api/products/${ productId }/reviews`;

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        // and remember since we are sending data ( i.e. the productCreateReviewObject ) we need
        // to indicate in the headers the content type or application/json in our case and let's
        // create a config object to help us do that
        const config = {
            headers : {
                'Content-Type' : 'application/json',
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a POST request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // message object or " { message : 'Review added' } "

        // and the second argument will be the product create review object

        // and the third argument in the request will be our config object and remember
        // we are making a POST request here

        // don't really need the data object in this case but I keep it anyway
        const { data } = await axios.post(
            endpoint,
            productCreateReviewObject,
            config
        );

        // let's dispatch our action or " PRODUCT_CREATE_REVIEW_SUCCESS "
        dispatch( {
            type    : PRODUCT_CREATE_REVIEW_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " PRODUCT_CREATE_REVIEW_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_CREATE_REVIEW_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}

// now let's go to the product.reducers.js 8 - file

// End of 6 -
*/






















// ===============================




















/*
// at the beginning of lecture 79, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in axios
import axios from 'axios'

// import in the product constants and these constants represent our actions
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
    PRODUCT_UPDATE_ADMIN_REQUEST,
    PRODUCT_UPDATE_ADMIN_SUCCESS,
    PRODUCT_UPDATE_ADMIN_FAIL,
    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_FAIL,
    PRODUCT_CREATE_REVIEW_RESET
} from '../constants/product.constants';


// ==============================
// Action Creator 1
// ==============================

// ==============================
// Get Product List - Home Screen
// ==============================

// Action Creator 1
// instead of fetching the products or " data " in the home-screen.component.jsx file by using
// the useEffect hook we will fetch the data by using the action creator below


// 7 -
// coming from the home-screen.component.jsx 8 - file

// let's bring in keyword as an argument and set keyword by default to an empty string
// and then add a query string to our endpoint or
// " const endpoint = `/api/products?keyword=${ keyword }`; " and we will use this query
// string in our product controllers file

// now let's go to the product.controllers.js 5 - file

// End of 7 -


// use redux thunk to make an asynchronous request with our action creator
export const productListActionCreator = ( keyword = '' ) => async ( dispatch ) => {

    try {

        // let's dispatch our action or " PRODUCT_LIST_REQUEST "
        dispatch( {
            type : PRODUCT_LIST_REQUEST
        } );

        // create our endpoint
        const endpoint = `/api/products?keyword=${ keyword }`;

        // below we are making a request ( using axios ) to this endpoint " /api/products "
        // and axios returns the response object and we can then destructure the data object off
        // of the response object and the data object in this case is the products array
        const { data } = await axios.get( endpoint );

        // let's dispatch our action or " PRODUCT_LIST_SUCCESS "
        dispatch( {
            type    : PRODUCT_LIST_SUCCESS,
            payload : data
        } );

    } catch ( error ) {

        // let's dispatch our action or " PRODUCT_LIST_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_LIST_FAIL,
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
// Get Product - Product Screen
// ==============================

// Action Creator 2
// use redux thunk to make an asynchronous request with our action creator

// remember we need to pass in " id " as the argument to the productGetActionCreator and
// then use that id value as part of the enpoint below
export const productGetActionCreator = ( id ) => async ( dispatch ) => {

    try {

        // let's dispatch our action or " PRODUCT_GET_REQUEST "
        dispatch( {
            type : PRODUCT_GET_REQUEST
        } );

        // create our endpoint
        const endpoint = `/api/products/${ id }`;

        // below we are making a GET request ( using axios ) to this endpoint
        // " /api/products/:id " and axios returns the response object and we can then
        // destructure the data object off of the response object and the data object
        // in this case is the individual product
        const { data } = await axios.get( endpoint );

        // let's dispatch our action or " PRODUCT_GET_SUCCESS "
        dispatch( {
            type    : PRODUCT_GET_SUCCESS,
            payload : data
        } );

    } catch ( error ) {

        // let's dispatch our action or " PRODUCT_GET_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_GET_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 3
// ==============================

// ==============================
// Delete Product - Admin Product List Screen
// ==============================

// Action Creator 3
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to delete a product from the admin product list screen
// and the database and remember to pass in as an argument the id of the product we are deleting
// and pass in getState as an argument since we need to send a token to the backend
export const productDeleteAdminActionCreator = ( id ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " PRODUCT_DELETE_ADMIN_REQUEST "
        dispatch( {
            type : PRODUCT_DELETE_ADMIN_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/products/:id "
        const endpoint = `/api/products/${ id }`;

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
        // success message or " Product deleted from the database "

        // and the second argument in the request will be our config object and remember
        // we are making a DELETE request here

        // since we are not using data in the payload let's delete " const { data } = "
        await axios.delete(
            endpoint,
            config
        );

        // let's dispatch our action or " PRODUCT_DELETE_ADMIN_SUCCESS "
        dispatch( {
            type : PRODUCT_DELETE_ADMIN_SUCCESS
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " PRODUCT_DELETE_ADMIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_DELETE_ADMIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 4
// ==============================

// ==============================
// Create Product - Admin Product List Screen
// ==============================

// Action Creator 4
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to create a product with dummy sample data and then
// save it to the database and remember to pass in getState as an argument since we need to
// send a token to the backend
export const productCreateAdminActionCreator = () => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " PRODUCT_CREATE_ADMIN_REQUEST "
        dispatch( {
            type : PRODUCT_CREATE_ADMIN_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/products "
        const endpoint = '/api/products';

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

        // below we are making a POST request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // newly created product with sample data

        // and remember the second argument will be an empty object because we are
        // making a POST request and therefore we have to send something to the server and
        // since we have nothing to send to the server in this case we will send an empty
        // object

        // and the third argument in the request will be our config object and remember
        // we are making a POST request here
        const { data } = await axios.post(
            endpoint,
            {},
            config
        );

        // let's dispatch our action or " PRODUCT_CREATE_ADMIN_SUCCESS "
        dispatch( {
            type    : PRODUCT_CREATE_ADMIN_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " PRODUCT_CREATE_ADMIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_CREATE_ADMIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 5
// ==============================

// ==============================
// Update Product - Admin Product Edit Screen
// ==============================

// Action Creator 5
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to update a product and then save that product
// to the database and remember to pass in productUpdateObject as an argument and remember
// to pass in getState as an argument since we need to send a token to the backend
export const productUpdateAdminActionCreator = ( productUpdateObject ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " PRODUCT_UPDATE_ADMIN_REQUEST "
        dispatch( {
            type : PRODUCT_UPDATE_ADMIN_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/products/:id "
        const endpoint = `/api/products/${ productUpdateObject._id }`;

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        // and remember since we are sending data ( i.e. the productUpdateObject ) we need to
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
        // updated product object

        // and the second argument will be the product update object

        // and the third argument in the request will be our config object and remember
        // we are making a POST request here
        const { data } = await axios.put(
            endpoint,
            productUpdateObject,
            config
        );

        // let's dispatch our action or " PRODUCT_UPDATE_ADMIN_SUCCESS "
        dispatch( {
            type    : PRODUCT_UPDATE_ADMIN_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " PRODUCT_UPDATE_ADMIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_UPDATE_ADMIN_FAIL,
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
// Create Product Review - Admin Product Edit Screen
// ==============================

// Action Creator 6
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to create a product review and then save that product
// review to the database and remember to pass in the productId and the productCreateReviewObject
// as arguments and remember to pass in getState as an argument since we need to send a token
// to the backend
export const productCreateReviewActionCreator = ( productId, productCreateReviewObject ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " PRODUCT_CREATE_REVIEW_REQUEST "
        dispatch( {
            type : PRODUCT_CREATE_REVIEW_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is
        // " /api/products/:id/reviews "
        const endpoint = `/api/products/${ productId }/reviews`;

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        // and remember since we are sending data ( i.e. the productCreateReviewObject ) we need
        // to indicate in the headers the content type or application/json in our case and let's
        // create a config object to help us do that
        const config = {
            headers : {
                'Content-Type' : 'application/json',
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a POST request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // message object or " { message : 'Review added' } "

        // and the second argument will be the product create review object

        // and the third argument in the request will be our config object and remember
        // we are making a POST request here

        // don't really need the data object in this case but I keep it anyway
        const { data } = await axios.post(
            endpoint,
            productCreateReviewObject,
            config
        );

        // let's dispatch our action or " PRODUCT_CREATE_REVIEW_SUCCESS "
        dispatch( {
            type    : PRODUCT_CREATE_REVIEW_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " PRODUCT_CREATE_REVIEW_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_CREATE_REVIEW_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}
*/























// ===============================




















/*
// at the beginning of lecture 86, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in axios
import axios from 'axios'

// import in the product constants and these constants represent our actions
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
    PRODUCT_UPDATE_ADMIN_REQUEST,
    PRODUCT_UPDATE_ADMIN_SUCCESS,
    PRODUCT_UPDATE_ADMIN_FAIL,
    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_FAIL
} from '../constants/product.constants';


// ==============================
// Action Creator 1
// ==============================

// ==============================
// Get Product List - Home Screen
// ==============================

// Action Creator 1
// instead of fetching the products or " data " in the home-screen.component.jsx file by using
// the useEffect hook we will fetch the data by using the action creator below

// let's bring in keyword as an argument and set keyword by default to an empty string
// and then add a query string to our endpoint or
// " const endpoint = `/api/products?keyword=${ keyword }`; " and we will use this query
// string in our product controllers file

// use redux thunk to make an asynchronous request with our action creator
export const productListActionCreator = ( keyword = '', pageNumber = '' ) => async ( dispatch ) => {


    // 8 -
    // coming from the product.controllers.js 8 - file

    // let's pass in a page number or pageNumber as an argument above and make it an empty
    // string by default and then let's pass a second query string to
    // " `/api/products?keyword=${ keyword }`; " and remember the first query string starts with
    // a " ? " and the second ( and third, etc. ) query string starts with a " & " so let's
    // change " const endpoint = `/api/products?keyword=${ keyword }`; " to
    // " const endpoint = `/api/products?keyword=${ keyword }&pageNumber=${ pageNumber }`; "

    // and remember data will now include the products array, the page number and the total
    // number of pages and we will account for this in the product.reducers.js 9 - file

    // End of 8 -


    try {

        // let's dispatch our action or " PRODUCT_LIST_REQUEST "
        dispatch( {
            type : PRODUCT_LIST_REQUEST
        } );

        // create our endpoint
        const endpoint = `/api/products?keyword=${ keyword }&pageNumber=${ pageNumber }`;

        // below we are making a request ( using axios ) to this endpoint " /api/products "
        // and axios returns the response object and we can then destructure the data object off
        // of the response object and the data object in this case is the products array
        const { data } = await axios.get( endpoint );

        // let's dispatch our action or " PRODUCT_LIST_SUCCESS "
        dispatch( {
            type    : PRODUCT_LIST_SUCCESS,
            payload : data
        } );

    } catch ( error ) {

        // let's dispatch our action or " PRODUCT_LIST_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_LIST_FAIL,
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
// Get Product - Product Screen
// ==============================

// Action Creator 2
// use redux thunk to make an asynchronous request with our action creator

// remember we need to pass in " id " as the argument to the productGetActionCreator and
// then use that id value as part of the enpoint below
export const productGetActionCreator = ( id ) => async ( dispatch ) => {

    try {

        // let's dispatch our action or " PRODUCT_GET_REQUEST "
        dispatch( {
            type : PRODUCT_GET_REQUEST
        } );

        // create our endpoint
        const endpoint = `/api/products/${ id }`;

        // below we are making a GET request ( using axios ) to this endpoint
        // " /api/products/:id " and axios returns the response object and we can then
        // destructure the data object off of the response object and the data object
        // in this case is the individual product
        const { data } = await axios.get( endpoint );

        // let's dispatch our action or " PRODUCT_GET_SUCCESS "
        dispatch( {
            type    : PRODUCT_GET_SUCCESS,
            payload : data
        } );

    } catch ( error ) {

        // let's dispatch our action or " PRODUCT_GET_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_GET_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 3
// ==============================

// ==============================
// Delete Product - Admin Product List Screen
// ==============================

// Action Creator 3
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to delete a product from the admin product list screen
// and the database and remember to pass in as an argument the id of the product we are deleting
// and pass in getState as an argument since we need to send a token to the backend
export const productDeleteAdminActionCreator = ( id ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " PRODUCT_DELETE_ADMIN_REQUEST "
        dispatch( {
            type : PRODUCT_DELETE_ADMIN_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/products/:id "
        const endpoint = `/api/products/${ id }`;

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
        // success message or " Product deleted from the database "

        // and the second argument in the request will be our config object and remember
        // we are making a DELETE request here

        // since we are not using data in the payload let's delete " const { data } = "
        await axios.delete(
            endpoint,
            config
        );

        // let's dispatch our action or " PRODUCT_DELETE_ADMIN_SUCCESS "
        dispatch( {
            type : PRODUCT_DELETE_ADMIN_SUCCESS
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " PRODUCT_DELETE_ADMIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_DELETE_ADMIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 4
// ==============================

// ==============================
// Create Product - Admin Product List Screen
// ==============================

// Action Creator 4
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to create a product with dummy sample data and then
// save it to the database and remember to pass in getState as an argument since we need to
// send a token to the backend
export const productCreateAdminActionCreator = () => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " PRODUCT_CREATE_ADMIN_REQUEST "
        dispatch( {
            type : PRODUCT_CREATE_ADMIN_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/products "
        const endpoint = '/api/products';

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

        // below we are making a POST request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // newly created product with sample data

        // and remember the second argument will be an empty object because we are
        // making a POST request and therefore we have to send something to the server and
        // since we have nothing to send to the server in this case we will send an empty
        // object

        // and the third argument in the request will be our config object and remember
        // we are making a POST request here
        const { data } = await axios.post(
            endpoint,
            {},
            config
        );

        // let's dispatch our action or " PRODUCT_CREATE_ADMIN_SUCCESS "
        dispatch( {
            type    : PRODUCT_CREATE_ADMIN_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " PRODUCT_CREATE_ADMIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_CREATE_ADMIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 5
// ==============================

// ==============================
// Update Product - Admin Product Edit Screen
// ==============================

// Action Creator 5
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to update a product and then save that product
// to the database and remember to pass in productUpdateObject as an argument and remember
// to pass in getState as an argument since we need to send a token to the backend
export const productUpdateAdminActionCreator = ( productUpdateObject ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " PRODUCT_UPDATE_ADMIN_REQUEST "
        dispatch( {
            type : PRODUCT_UPDATE_ADMIN_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/products/:id "
        const endpoint = `/api/products/${ productUpdateObject._id }`;

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        // and remember since we are sending data ( i.e. the productUpdateObject ) we need to
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
        // updated product object

        // and the second argument will be the product update object

        // and the third argument in the request will be our config object and remember
        // we are making a POST request here
        const { data } = await axios.put(
            endpoint,
            productUpdateObject,
            config
        );

        // let's dispatch our action or " PRODUCT_UPDATE_ADMIN_SUCCESS "
        dispatch( {
            type    : PRODUCT_UPDATE_ADMIN_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " PRODUCT_UPDATE_ADMIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_UPDATE_ADMIN_FAIL,
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
// Create Product Review - Admin Product Edit Screen
// ==============================

// Action Creator 6
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to create a product review and then save that product
// review to the database and remember to pass in the productId and the productCreateReviewObject
// as arguments and remember to pass in getState as an argument since we need to send a token
// to the backend
export const productCreateReviewActionCreator = ( productId, productCreateReviewObject ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " PRODUCT_CREATE_REVIEW_REQUEST "
        dispatch( {
            type : PRODUCT_CREATE_REVIEW_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is
        // " /api/products/:id/reviews "
        const endpoint = `/api/products/${ productId }/reviews`;

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        // and remember since we are sending data ( i.e. the productCreateReviewObject ) we need
        // to indicate in the headers the content type or application/json in our case and let's
        // create a config object to help us do that
        const config = {
            headers : {
                'Content-Type' : 'application/json',
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a POST request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // message object or " { message : 'Review added' } "

        // and the second argument will be the product create review object

        // and the third argument in the request will be our config object and remember
        // we are making a POST request here

        // don't really need the data object in this case but I keep it anyway
        const { data } = await axios.post(
            endpoint,
            productCreateReviewObject,
            config
        );

        // let's dispatch our action or " PRODUCT_CREATE_REVIEW_SUCCESS "
        dispatch( {
            type    : PRODUCT_CREATE_REVIEW_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " PRODUCT_CREATE_REVIEW_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_CREATE_REVIEW_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}
*/
























// ===============================





















// at the beginning of lecture 87, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in axios
import axios from 'axios'

// import in the product constants and these constants represent our actions
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
    PRODUCT_UPDATE_ADMIN_REQUEST,
    PRODUCT_UPDATE_ADMIN_SUCCESS,
    PRODUCT_UPDATE_ADMIN_FAIL,
    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_FAIL
} from '../constants/product.constants';


// ==============================
// Action Creator 1
// ==============================

// ==============================
// Get Product List - Home Screen
// ==============================

// Action Creator 1
// instead of fetching the products or " data " in the home-screen.component.jsx file by using
// the useEffect hook we will fetch the data by using the action creator below

// let's bring in keyword as an argument and set keyword by default to an empty string
// and then add a query string to our endpoint or
// " const endpoint = `/api/products?keyword=${ keyword }`; " and we will use this query
// string in our product controllers file

// use redux thunk to make an asynchronous request with our action creator
export const productListActionCreator = ( keyword = '', pageNumber = '' ) => async ( dispatch ) => {

    // let's pass in a page number or pageNumber as an argument above and make it an empty
    // string by default and then let's pass a second query string to
    // " `/api/products?keyword=${ keyword }`; " and remember the first query string starts with
    // a " ? " and the second ( and third, etc. ) query string starts with a " & " so let's
    // change " const endpoint = `/api/products?keyword=${ keyword }`; " to
    // " const endpoint = `/api/products?keyword=${ keyword }&pageNumber=${ pageNumber }`; "

    // and remember data will now include the products array, the page number and the total
    // number of pages and we will account for this in the product.reducers.js 9 - file

    try {

        // let's dispatch our action or " PRODUCT_LIST_REQUEST "
        dispatch( {
            type : PRODUCT_LIST_REQUEST
        } );

        // create our endpoint
        const endpoint = `/api/products?keyword=${ keyword }&pageNumber=${ pageNumber }`;

        // below we are making a request ( using axios ) to this endpoint " /api/products "
        // and axios returns the response object and we can then destructure the data object off
        // of the response object and the data object in this case is the products array
        const { data } = await axios.get( endpoint );

        // let's dispatch our action or " PRODUCT_LIST_SUCCESS "
        dispatch( {
            type    : PRODUCT_LIST_SUCCESS,
            payload : data
        } );

    } catch ( error ) {

        // let's dispatch our action or " PRODUCT_LIST_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_LIST_FAIL,
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
// Get Product - Product Screen
// ==============================

// Action Creator 2
// use redux thunk to make an asynchronous request with our action creator

// remember we need to pass in " id " as the argument to the productGetActionCreator and
// then use that id value as part of the enpoint below
export const productGetActionCreator = ( id ) => async ( dispatch ) => {

    try {

        // let's dispatch our action or " PRODUCT_GET_REQUEST "
        dispatch( {
            type : PRODUCT_GET_REQUEST
        } );

        // create our endpoint
        const endpoint = `/api/products/${ id }`;

        // below we are making a GET request ( using axios ) to this endpoint
        // " /api/products/:id " and axios returns the response object and we can then
        // destructure the data object off of the response object and the data object
        // in this case is the individual product
        const { data } = await axios.get( endpoint );

        // let's dispatch our action or " PRODUCT_GET_SUCCESS "
        dispatch( {
            type    : PRODUCT_GET_SUCCESS,
            payload : data
        } );

    } catch ( error ) {

        // let's dispatch our action or " PRODUCT_GET_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_GET_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 3
// ==============================

// ==============================
// Delete Product - Admin Product List Screen
// ==============================

// Action Creator 3
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to delete a product from the admin product list screen
// and the database and remember to pass in as an argument the id of the product we are deleting
// and pass in getState as an argument since we need to send a token to the backend
export const productDeleteAdminActionCreator = ( id ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " PRODUCT_DELETE_ADMIN_REQUEST "
        dispatch( {
            type : PRODUCT_DELETE_ADMIN_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/products/:id "
        const endpoint = `/api/products/${ id }`;

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
        // success message or " Product deleted from the database "

        // and the second argument in the request will be our config object and remember
        // we are making a DELETE request here

        // since we are not using data in the payload let's delete " const { data } = "
        await axios.delete(
            endpoint,
            config
        );

        // let's dispatch our action or " PRODUCT_DELETE_ADMIN_SUCCESS "
        dispatch( {
            type : PRODUCT_DELETE_ADMIN_SUCCESS
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " PRODUCT_DELETE_ADMIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_DELETE_ADMIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 4
// ==============================

// ==============================
// Create Product - Admin Product List Screen
// ==============================

// Action Creator 4
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to create a product with dummy sample data and then
// save it to the database and remember to pass in getState as an argument since we need to
// send a token to the backend
export const productCreateAdminActionCreator = () => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " PRODUCT_CREATE_ADMIN_REQUEST "
        dispatch( {
            type : PRODUCT_CREATE_ADMIN_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/products "
        const endpoint = '/api/products';

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

        // below we are making a POST request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // newly created product with sample data

        // and remember the second argument will be an empty object because we are
        // making a POST request and therefore we have to send something to the server and
        // since we have nothing to send to the server in this case we will send an empty
        // object

        // and the third argument in the request will be our config object and remember
        // we are making a POST request here
        const { data } = await axios.post(
            endpoint,
            {},
            config
        );

        // let's dispatch our action or " PRODUCT_CREATE_ADMIN_SUCCESS "
        dispatch( {
            type    : PRODUCT_CREATE_ADMIN_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " PRODUCT_CREATE_ADMIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_CREATE_ADMIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// ==============================
// Action Creator 5
// ==============================

// ==============================
// Update Product - Admin Product Edit Screen
// ==============================

// Action Creator 5
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to update a product and then save that product
// to the database and remember to pass in productUpdateObject as an argument and remember
// to pass in getState as an argument since we need to send a token to the backend
export const productUpdateAdminActionCreator = ( productUpdateObject ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " PRODUCT_UPDATE_ADMIN_REQUEST "
        dispatch( {
            type : PRODUCT_UPDATE_ADMIN_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/products/:id "
        const endpoint = `/api/products/${ productUpdateObject._id }`;

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        // and remember since we are sending data ( i.e. the productUpdateObject ) we need to
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
        // updated product object

        // and the second argument will be the product update object

        // and the third argument in the request will be our config object and remember
        // we are making a POST request here
        const { data } = await axios.put(
            endpoint,
            productUpdateObject,
            config
        );

        // let's dispatch our action or " PRODUCT_UPDATE_ADMIN_SUCCESS "
        dispatch( {
            type    : PRODUCT_UPDATE_ADMIN_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " PRODUCT_UPDATE_ADMIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_UPDATE_ADMIN_FAIL,
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
// Create Product Review - Admin Product Edit Screen
// ==============================

// Action Creator 6
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to create a product review and then save that product
// review to the database and remember to pass in the productId and the productCreateReviewObject
// as arguments and remember to pass in getState as an argument since we need to send a token
// to the backend
export const productCreateReviewActionCreator = ( productId, productCreateReviewObject ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " PRODUCT_CREATE_REVIEW_REQUEST "
        dispatch( {
            type : PRODUCT_CREATE_REVIEW_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is
        // " /api/products/:id/reviews "
        const endpoint = `/api/products/${ productId }/reviews`;

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        // and remember since we are sending data ( i.e. the productCreateReviewObject ) we need
        // to indicate in the headers the content type or application/json in our case and let's
        // create a config object to help us do that
        const config = {
            headers : {
                'Content-Type' : 'application/json',
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a POST request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // message object or " { message : 'Review added' } "

        // and the second argument will be the product create review object

        // and the third argument in the request will be our config object and remember
        // we are making a POST request here

        // don't really need the data object in this case but I keep it anyway
        const { data } = await axios.post(
            endpoint,
            productCreateReviewObject,
            config
        );

        // let's dispatch our action or " PRODUCT_CREATE_REVIEW_SUCCESS "
        dispatch( {
            type    : PRODUCT_CREATE_REVIEW_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " PRODUCT_CREATE_REVIEW_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : PRODUCT_CREATE_REVIEW_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}



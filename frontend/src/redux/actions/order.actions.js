
/*
// 1 -
// coming from the store.js 14 - file

// import in axios
import axios from 'axios'

// import in the order constants and these constants represent our actions
import { 
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS, 
    ORDER_CREATE_FAIL
} from '../constants/order.constants';


// Action Creator #1
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to create an order and remember to pass in the order
// create object as an argument and getState as an argument since we need to send a token to the
// backend and we need to send a token to the backend since our route or endpoint is private
// and requires authorization to access this route or endpoint
export const orderCreateActionCreator = ( orderCreateObject ) => async ( dispatch, getState ) => {

    try {

         // let's dispatch our action or " ORDER_CREATE_REQUEST "
         dispatch( {
            type : ORDER_CREATE_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/orders "
        const endpoint = 'api/orders';

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

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

        // below we are making a POST request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // createdOrder object or the following order information ( this comes from the
        // order.controllers.js file ):

        /*
            orderItems      : orderItems,
            shippingAddress : shippingAddress,
            paymentMethod   : paymentMethod,
            itemsPrice      : itemsPrice,
            shippingPrice   : shippingPrice,
            taxPrice        : taxPrice,
            totalPrice      : totalPrice,
            user            : req.user._id,
        */

        // and the second argument will be our orderCreateObject and this object comes
        // from the place-order-screen.component.jsx file and looks like the following:

        /*
            {
                orderItems      : cartItems,
                shippingAddress : shippingAddress,
                paymentMethod   : paymentMethod,
                itemsPrice      : orderItemsPriceWithTwoDecimals,
                shippingPrice   : orderShippingPriceWithTwoDecimals,
                taxPrice        : orderTaxPriceWithTwoDecimals,
                totalPrice      : orderTotalPriceWithTwoDecimals,
            }
        */

        // and the third argument in the request will be our config object and remember
        // we are making a POST request here
        /*
        const { data } = await axios.post(
            endpoint,
            orderCreateObject,
            config
        );

        // let's dispatch our action or " ORDER_CREATE_SUCCESS "
        dispatch( {
            type    : ORDER_CREATE_SUCCESS,
            payload : data
        } );

    } // end of the try block

    catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " ORDER_CREATE_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : ORDER_CREATE_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    } // end of the catch block

} // end of orderCreateActionCreator

// now let's go to the order-summary.component.jsx 2 - file and bring in the
// orderCreateActionCreator


// End of 1 -
*/

























// ===============================

























/*
// at the beginning of lecture 57, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in axios
import axios from 'axios'

// import in the order constants and these constants represent our actions
import { 
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS, 
    ORDER_CREATE_FAIL,
    ORDER_GET_REQUEST,
    ORDER_GET_SUCCESS,
    ORDER_GET_FAIL
} from '../constants/order.constants';


// ==============================
// Action Creator 1
// ==============================

// Action Creator #1
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to create an order and remember to pass in the order
// create object as an argument and getState as an argument since we need to send a token to the
// backend and we need to send a token to the backend since our route or endpoint is private
// and requires authorization to access this route or endpoint
export const orderCreateActionCreator = ( orderCreateObject ) => async ( dispatch, getState ) => {

    try {

         // let's dispatch our action or " ORDER_CREATE_REQUEST "
         dispatch( {
            type : ORDER_CREATE_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/orders "
        const endpoint = 'api/orders';

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

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

        // below we are making a POST request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // createdOrder object or the following order information ( this comes from the
        // order.controllers.js file ):

        /*
            orderItems      : orderItems,
            shippingAddress : shippingAddress,
            paymentMethod   : paymentMethod,
            itemsPrice      : itemsPrice,
            shippingPrice   : shippingPrice,
            taxPrice        : taxPrice,
            totalPrice      : totalPrice,
            user            : req.user._id,
        */

        // and the second argument will be our orderCreateObject and this object comes
        // from the place-order-screen.component.jsx file and looks like the following:

        /*
            {
                orderItems      : cartItems,
                shippingAddress : shippingAddress,
                paymentMethod   : paymentMethod,
                itemsPrice      : orderItemsPriceWithTwoDecimals,
                shippingPrice   : orderShippingPriceWithTwoDecimals,
                taxPrice        : orderTaxPriceWithTwoDecimals,
                totalPrice      : orderTotalPriceWithTwoDecimals,
            }
        */

        // and the third argument in the request will be our config object and remember
        // we are making a POST request here
        /*
        const { data } = await axios.post(
            endpoint,
            orderCreateObject,
            config
        );

        // let's dispatch our action or " ORDER_CREATE_SUCCESS "
        dispatch( {
            type    : ORDER_CREATE_SUCCESS,
            payload : data
        } );

    } // end of the try block

    catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " ORDER_CREATE_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : ORDER_CREATE_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    } // end of the catch block

} // end of orderCreateActionCreator


// 2 -
// coming from the store.js 15 - file

// ==============================
// Action Creator 2
// ==============================

// Action Creator #2
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to get or fetch an order by id and remember to pass in
// the order id as an argument and getState as an argument since we need to send a token to the
// backend and we need to send a token to the backend since our route or endpoint is private
// and requires authorization to access this route or endpoint
export const orderGetActionCreator = ( orderId ) => async ( dispatch, getState ) => {

    try {

         // let's dispatch our action or " ORDER_GET_REQUEST "
         dispatch( {
            type : ORDER_GET_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/orders/:id "
        const endpoint = `/api/orders/${ orderId }`;

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        // and remember since we making a GET request and we are not sending any data along
        // with the request we don't need send the Content-Type
        // or " 'Content-Type' : 'application/json', " in the headers
        const config = {
            headers : {
                Authorization : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // order object or the following order information ( this comes from testing the
        // above route in Postman ):

        /*
            {
                "shippingAddress": {
                    "address": "3838 Vista Drive",
                    "city": "Sandy",
                    "postalCode": "84090",
                    "country": "United States"
                },
                "shippingPrice": 0,
                "taxPrice": 692.99,
                "totalPrice": 5312.89,
                "isPaid": false,
                "isDelivered": false,
                "_id": "605687827972ce2f26c6b1d7",
                "orderItems": [
                    {
                        "_id": "605687827972ce2f26c6b1d8",
                        "product": "5ff504545a6a66457f0b0709",
                        "name": "Cannon EOS 80D DSLR Camera",
                        "image": "/images/camera.jpg",
                        "price": 929.99,
                        "quantity": 2
                    },
                    {
                        "_id": "605687827972ce2f26c6b1d9",
                        "product": "5ff504545a6a66457f0b0708",
                        "name": "iPhone 11 Pro 256GB Memory",
                        "image": "/images/phone.jpg",
                        "price": 599.99,
                        "quantity": 4
                    },
                    {
                        "_id": "605687827972ce2f26c6b1da",
                        "product": "5ff504545a6a66457f0b0707",
                        "name": "Airpods Wireless Headphones",
                        "image": "/images/airpods.jpg",
                        "price": 89.99,
                        "quantity": 4
                    }
                ],
                "paymentMethod": "Credit Card",
                "user": {
                    "_id": "5ff504545a6a66457f0b0705",
                    "name": "John Doe",
                    "email": "john@example.com"
                },
                "createdAt": "2021-03-20T23:38:42.711Z",
                "updatedAt": "2021-03-20T23:38:42.711Z",
                "__v": 0
            }
        */

        // and the second argument in the request will be our config object and remember
        // we are making a GET request here
        /*
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " ORDER_GET_SUCCESS "
        dispatch( {
            type    : ORDER_GET_SUCCESS,
            payload : data
        } );

    } // end of the try block

    catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " ORDER_GET_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : ORDER_GET_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    } // end of the catch block

} // end of orderCreateActionCreator

// now that we have our order details constants, orderGetReducer, orderGetActionCreator
// and the store updated with the orderGetReducer we will start working on the order screen
// in the next video

// End of 2 -
*/
























// ===============================

























/*
// at the beginning of lecture 59, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in axios
import axios from 'axios'

// import in the order constants and these constants represent our actions
import { 
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS, 
    ORDER_CREATE_FAIL,
    ORDER_GET_REQUEST,
    ORDER_GET_SUCCESS,
    ORDER_GET_FAIL
} from '../constants/order.constants';


// ==============================
// Action Creator 1
// ==============================

// Action Creator #1
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to create an order and remember to pass in the order
// create object as an argument and getState as an argument since we need to send a token to the
// backend and we need to send a token to the backend since our route or endpoint is private
// and requires authorization to access this route or endpoint
export const orderCreateActionCreator = ( orderCreateObject ) => async ( dispatch, getState ) => {

    try {

         // let's dispatch our action or " ORDER_CREATE_REQUEST "
         dispatch( {
            type : ORDER_CREATE_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/orders "
        const endpoint = 'api/orders';

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

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

        // below we are making a POST request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // createdOrder object or the following order information ( this comes from the
        // order.controllers.js file ):

        /*
            orderItems      : orderItems,
            shippingAddress : shippingAddress,
            paymentMethod   : paymentMethod,
            itemsPrice      : itemsPrice,
            shippingPrice   : shippingPrice,
            taxPrice        : taxPrice,
            totalPrice      : totalPrice,
            user            : req.user._id,
        */

        // and the second argument will be our orderCreateObject and this object comes
        // from the place-order-screen.component.jsx file and looks like the following:

        /*
            {
                orderItems      : cartItems,
                shippingAddress : shippingAddress,
                paymentMethod   : paymentMethod,
                itemsPrice      : orderItemsPriceWithTwoDecimals,
                shippingPrice   : orderShippingPriceWithTwoDecimals,
                taxPrice        : orderTaxPriceWithTwoDecimals,
                totalPrice      : orderTotalPriceWithTwoDecimals,
            }
        */

        /*
        // and the third argument in the request will be our config object and remember
        // we are making a POST request here
        const { data } = await axios.post(
            endpoint,
            orderCreateObject,
            config
        );

        // let's dispatch our action or " ORDER_CREATE_SUCCESS "
        dispatch( {
            type    : ORDER_CREATE_SUCCESS,
            payload : data
        } );

    } // end of the try block

    catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " ORDER_CREATE_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : ORDER_CREATE_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    } // end of the catch block

} // end of orderCreateActionCreator


// ==============================
// Action Creator 2
// ==============================

// Action Creator #2
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to get or fetch an order by id and remember to pass in
// the order id as an argument and getState as an argument since we need to send a token to the
// backend and we need to send a token to the backend since our route or endpoint is private
// and requires authorization to access this route or endpoint
export const orderGetActionCreator = ( orderId ) => async ( dispatch, getState ) => {

    try {

         // let's dispatch our action or " ORDER_GET_REQUEST "
         dispatch( {
            type : ORDER_GET_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/orders/:id "
        const endpoint = `/api/orders/${ orderId }`;

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        // and remember since we making a GET request and we are not sending any data along
        // with the request we don't need send the Content-Type
        // or " 'Content-Type' : 'application/json', " in the headers
        const config = {
            headers : {
                Authorization : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // order object or the following order information ( this comes from testing the
        // above route in Postman ):

        /*
            {
                "shippingAddress": {
                    "address": "3838 Vista Drive",
                    "city": "Sandy",
                    "postalCode": "84090",
                    "country": "United States"
                },
                "shippingPrice": 0,
                "taxPrice": 692.99,
                "totalPrice": 5312.89,
                "isPaid": false,
                "isDelivered": false,
                "_id": "605687827972ce2f26c6b1d7",
                "orderItems": [
                    {
                        "_id": "605687827972ce2f26c6b1d8",
                        "product": "5ff504545a6a66457f0b0709",
                        "name": "Cannon EOS 80D DSLR Camera",
                        "image": "/images/camera.jpg",
                        "price": 929.99,
                        "quantity": 2
                    },
                    {
                        "_id": "605687827972ce2f26c6b1d9",
                        "product": "5ff504545a6a66457f0b0708",
                        "name": "iPhone 11 Pro 256GB Memory",
                        "image": "/images/phone.jpg",
                        "price": 599.99,
                        "quantity": 4
                    },
                    {
                        "_id": "605687827972ce2f26c6b1da",
                        "product": "5ff504545a6a66457f0b0707",
                        "name": "Airpods Wireless Headphones",
                        "image": "/images/airpods.jpg",
                        "price": 89.99,
                        "quantity": 4
                    }
                ],
                "paymentMethod": "Credit Card",
                "user": {
                    "_id": "5ff504545a6a66457f0b0705",
                    "name": "John Doe",
                    "email": "john@example.com"
                },
                "createdAt": "2021-03-20T23:38:42.711Z",
                "updatedAt": "2021-03-20T23:38:42.711Z",
                "__v": 0
            }
        */

        /*
        // and the second argument in the request will be our config object and remember
        // we are making a GET request here
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " ORDER_GET_SUCCESS "
        dispatch( {
            type    : ORDER_GET_SUCCESS,
            payload : data
        } );

    } // end of the try block

    catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " ORDER_GET_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : ORDER_GET_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    } // end of the catch block

} // end of orderGetActionCreator


// 3 -

// ==============================
// Action Creator 3
// ==============================

// Action Creator #3
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to update an order to paid and remember to pass in
// the order id and the paymentResult as arguments and remember the paymentResult will come
// from PayPal and pass in getState as an argument since we need to send a token to the
// backend and we need to send a token to the backend since our route or endpoint is private
// and requires authorization to access this route or endpoint
export const orderPayActionCreator = ( orderId, paymentResult ) => async ( dispatch, getState ) => {

    try {

         // let's dispatch our action or " ORDER_PAY_REQUEST "
         dispatch( {
            type : ORDER_PAY_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/orders/:id/pay "
        const endpoint = `/api/orders/${ orderId }/pay`;

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers and since
        // we are sending data along with the request ( i.e. paymentResult ) let's add
        // " 'Content-Type' : 'application/json', "
        const config = {
            headers : {
                'Content-Type' : 'application/json',
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a PUT request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // updatedOrder object

        // and the second argument in the request will be our config object and remember
        // we are making a GET request here
        const { data } = await axios.put(
            endpoint,
            paymentResult,
            config
        );

        // let's dispatch our action or " ORDER_PAY_SUCCESS "
        dispatch( {
            type    : ORDER_PAY_SUCCESS,
            payload : data
        } );

    } // end of the try block

    catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " ORDER_PAY_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : ORDER_PAY_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    } // end of the catch block

} // end of orderPayActionCreator

// in the next video, we will create the PayPal buttons and implement the whole payment
// process


// End of 3 -
*/























// ===============================

























/*
// at the beginning of lecture 63, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in axios
import axios from 'axios'

// import in the order constants and these constants represent our actions
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
// Action Creator 1
// ==============================

// Action Creator 1
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to create an order and remember to pass in the order
// create object as an argument and getState as an argument since we need to send a token to the
// backend and we need to send a token to the backend since our route or endpoint is private
// and requires authorization to access this route or endpoint
export const orderCreateActionCreator = ( orderCreateObject ) => async ( dispatch, getState ) => {

    try {

         // let's dispatch our action or " ORDER_CREATE_REQUEST "
         dispatch( {
            type : ORDER_CREATE_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/orders "
        const endpoint = 'api/orders';

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

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

        // below we are making a POST request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // createdOrder object or the following order information ( this comes from the
        // order.controllers.js file ):

        /*
            orderItems      : orderItems,
            shippingAddress : shippingAddress,
            paymentMethod   : paymentMethod,
            itemsPrice      : itemsPrice,
            shippingPrice   : shippingPrice,
            taxPrice        : taxPrice,
            totalPrice      : totalPrice,
            user            : req.user._id,
        */

        // and the second argument will be our orderCreateObject and this object comes
        // from the place-order-screen.component.jsx file and looks like the following:

        /*
            {
                orderItems      : cartItems,
                shippingAddress : shippingAddress,
                paymentMethod   : paymentMethod,
                itemsPrice      : orderItemsPriceWithTwoDecimals,
                shippingPrice   : orderShippingPriceWithTwoDecimals,
                taxPrice        : orderTaxPriceWithTwoDecimals,
                totalPrice      : orderTotalPriceWithTwoDecimals,
            }
        */

        // and the third argument in the request will be our config object and remember
        // we are making a POST request here
        /*
        const { data } = await axios.post(
            endpoint,
            orderCreateObject,
            config
        );

        // let's dispatch our action or " ORDER_CREATE_SUCCESS "
        dispatch( {
            type    : ORDER_CREATE_SUCCESS,
            payload : data
        } );

    } // end of the try block

    catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " ORDER_CREATE_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : ORDER_CREATE_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    } // end of the catch block

} // end of orderCreateActionCreator


// ==============================
// Action Creator 2
// ==============================

// Action Creator 2
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to get or fetch an order by id and remember to pass in
// the order id as an argument and getState as an argument since we need to send a token to the
// backend and we need to send a token to the backend since our route or endpoint is private
// and requires authorization to access this route or endpoint
export const orderGetActionCreator = ( orderId ) => async ( dispatch, getState ) => {

    try {

         // let's dispatch our action or " ORDER_GET_REQUEST "
         dispatch( {
            type : ORDER_GET_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/orders/:id "
        const endpoint = `/api/orders/${ orderId }`;

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        // and remember since we making a GET request and we are not sending any data along
        // with the request we don't need send the Content-Type
        // or " 'Content-Type' : 'application/json', " in the headers
        const config = {
            headers : {
                Authorization : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // order object or the following order information ( this comes from testing the
        // above route in Postman ):

        /*
            {
                "shippingAddress": {
                    "address": "3838 Vista Drive",
                    "city": "Sandy",
                    "postalCode": "84090",
                    "country": "United States"
                },
                "shippingPrice": 0,
                "taxPrice": 692.99,
                "totalPrice": 5312.89,
                "isPaid": false,
                "isDelivered": false,
                "_id": "605687827972ce2f26c6b1d7",
                "orderItems": [
                    {
                        "_id": "605687827972ce2f26c6b1d8",
                        "product": "5ff504545a6a66457f0b0709",
                        "name": "Cannon EOS 80D DSLR Camera",
                        "image": "/images/camera.jpg",
                        "price": 929.99,
                        "quantity": 2
                    },
                    {
                        "_id": "605687827972ce2f26c6b1d9",
                        "product": "5ff504545a6a66457f0b0708",
                        "name": "iPhone 11 Pro 256GB Memory",
                        "image": "/images/phone.jpg",
                        "price": 599.99,
                        "quantity": 4
                    },
                    {
                        "_id": "605687827972ce2f26c6b1da",
                        "product": "5ff504545a6a66457f0b0707",
                        "name": "Airpods Wireless Headphones",
                        "image": "/images/airpods.jpg",
                        "price": 89.99,
                        "quantity": 4
                    }
                ],
                "paymentMethod": "Credit Card",
                "user": {
                    "_id": "5ff504545a6a66457f0b0705",
                    "name": "John Doe",
                    "email": "john@example.com"
                },
                "createdAt": "2021-03-20T23:38:42.711Z",
                "updatedAt": "2021-03-20T23:38:42.711Z",
                "__v": 0
            }
        */

        // and the second argument in the request will be our config object and remember
        // we are making a GET request here
        /*
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " ORDER_GET_SUCCESS "
        dispatch( {
            type    : ORDER_GET_SUCCESS,
            payload : data
        } );

    } // end of the try block

    catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " ORDER_GET_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : ORDER_GET_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    } // end of the catch block

} // end of orderGetActionCreator


// ==============================
// Action Creator 3
// ==============================

// Action Creator 3
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to update an order to paid and remember to pass in
// the order id and the paymentResult as arguments and remember the paymentResult will come
// from PayPal and pass in getState as an argument since we need to send a token to the
// backend and we need to send a token to the backend since our route or endpoint is private
// and requires authorization to access this route or endpoint
export const orderPayActionCreator = ( orderId, paymentResult ) => async ( dispatch, getState ) => {

    try {

         // let's dispatch our action or " ORDER_PAY_REQUEST "
         dispatch( {
            type : ORDER_PAY_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/orders/:id/pay "
        const endpoint = `/api/orders/${ orderId }/pay`;

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers and since
        // we are sending data along with the request ( i.e. paymentResult ) let's add
        // " 'Content-Type' : 'application/json', "
        const config = {
            headers : {
                'Content-Type' : 'application/json',
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a PUT request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // updatedOrder object

        // and the third argument in the request will be our config object and remember
        // we are making a PUT request here
        const { data } = await axios.put(
            endpoint,
            paymentResult,
            config
        );

        // let's dispatch our action or " ORDER_PAY_SUCCESS "
        dispatch( {
            type    : ORDER_PAY_SUCCESS,
            payload : data
        } );

    } // end of the try block

    catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " ORDER_PAY_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : ORDER_PAY_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    } // end of the catch block

} // end of orderPayActionCreator


// 4 -
// coming from the store.js 17 - file

// ==============================
// Action Creator 4
// ==============================

// Action Creator 4
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to add all the orders from a user to the profile
// screen and pass in getState as an argument since we need to send a token to the
// backend and we need to send a token to the backend since our route or endpoint is private
// and requires authorization in order to access this route or endpoint
export const orderListMyActionCreator = () => async ( dispatch, getState ) => {

    try {

         // let's dispatch our action or " ORDER_PAY_REQUEST "
         dispatch( {
            type : ORDER_LIST_MY_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/orders/myorders "
        const endpoint = `/api/orders/myorders`;

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        const config = {
            headers : {
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // orders object

        // and the second argument in the request will be our config object and remember
        // we are making a GET request here
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " ORDER_LIST_MY_SUCCESS "
        dispatch( {
            type    : ORDER_LIST_MY_SUCCESS,
            payload : data
        } );

    } // end of the try block

    catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " ORDER_LIST_MY_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : ORDER_LIST_MY_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    } // end of the catch block

} // end of orderPayActionCreator

// now let's go to the profile-screen.component.jsx 4 - file

// End of 4 -
*/























// ===============================

























/*
// at the beginning of lecture 65, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in axios
import axios from 'axios'

// import in the order constants and these constants represent our actions
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
    ORDER_LIST_MY_FAIL,
    ORDER_LIST_ADMIN_REQUEST,
    ORDER_LIST_ADMIN_SUCCESS,
    ORDER_LIST_ADMIN_FAIL
} from '../constants/order.constants';

// import in the cart reset constant and this constant represents an action
import { CART_ITEMS_RESET } from '../constants/cart.constants';


// ==============================
// Action Creator 1
// ==============================

// Action Creator 1
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to create an order and remember to pass in the order
// create object as an argument and getState as an argument since we need to send a token to the
// backend and we need to send a token to the backend since our route or endpoint is private
// and requires authorization to access this route or endpoint
export const orderCreateActionCreator = ( orderCreateObject ) => async ( dispatch, getState ) => {

    try {

         // let's dispatch our action or " ORDER_CREATE_REQUEST "
         dispatch( {
            type : ORDER_CREATE_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/orders "
        const endpoint = 'api/orders';

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

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

        // below we are making a POST request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // createdOrder object or the following order information ( this comes from the
        // order.controllers.js file ):

        /*
            orderItems      : orderItems,
            shippingAddress : shippingAddress,
            paymentMethod   : paymentMethod,
            itemsPrice      : itemsPrice,
            shippingPrice   : shippingPrice,
            taxPrice        : taxPrice,
            totalPrice      : totalPrice,
            user            : req.user._id,
        */

        // and the second argument will be our orderCreateObject and this object comes
        // from the place-order-screen.component.jsx file and looks like the following:

        /*
            {
                orderItems      : cartItems,
                shippingAddress : shippingAddress,
                paymentMethod   : paymentMethod,
                itemsPrice      : orderItemsPriceWithTwoDecimals,
                shippingPrice   : orderShippingPriceWithTwoDecimals,
                taxPrice        : orderTaxPriceWithTwoDecimals,
                totalPrice      : orderTotalPriceWithTwoDecimals,
            }
        */

        // and the third argument in the request will be our config object and remember
        // we are making a POST request here
        /*
        const { data } = await axios.post(
            endpoint,
            orderCreateObject,
            config
        );

        // let's dispatch our action or " ORDER_CREATE_SUCCESS "
        dispatch( {
            type    : ORDER_CREATE_SUCCESS,
            payload : data
        } );


        // 5 -

        // after we dispatch ORDER_CREATE_SUCCESS and have successfully placed the order
        // we need to clear out the cart array so that if the user
        // goes back to the cart screen the user won't see all the ordered cart items in the cart
        // because this may cause the user to think that the order has not been paid for
        // and I put in this piece of code since this was one of the project bugs that never
        // got addressed
        
        // for other bugs, search " Cart reset & other bugs "
        dispatch( {
            type : CART_ITEMS_RESET
        } );

        // End of 5 -
    

    } // end of the try block

    catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " ORDER_CREATE_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : ORDER_CREATE_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    } // end of the catch block

} // end of orderCreateActionCreator


// ==============================
// Action Creator 2
// ==============================

// Action Creator 2
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to get or fetch an order by id and remember to pass in
// the order id as an argument and getState as an argument since we need to send a token to the
// backend and we need to send a token to the backend since our route or endpoint is private
// and requires authorization to access this route or endpoint
export const orderGetActionCreator = ( orderId ) => async ( dispatch, getState ) => {

    try {

         // let's dispatch our action or " ORDER_GET_REQUEST "
         dispatch( {
            type : ORDER_GET_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/orders/:id "
        const endpoint = `/api/orders/${ orderId }`;

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        // and remember since we making a GET request and we are not sending any data along
        // with the request we don't need send the Content-Type
        // or " 'Content-Type' : 'application/json', " in the headers
        const config = {
            headers : {
                Authorization : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // order object or the following order information ( this comes from testing the
        // above route in Postman ):

        /*
            {
                "shippingAddress": {
                    "address": "3838 Vista Drive",
                    "city": "Sandy",
                    "postalCode": "84090",
                    "country": "United States"
                },
                "shippingPrice": 0,
                "taxPrice": 692.99,
                "totalPrice": 5312.89,
                "isPaid": false,
                "isDelivered": false,
                "_id": "605687827972ce2f26c6b1d7",
                "orderItems": [
                    {
                        "_id": "605687827972ce2f26c6b1d8",
                        "product": "5ff504545a6a66457f0b0709",
                        "name": "Cannon EOS 80D DSLR Camera",
                        "image": "/images/camera.jpg",
                        "price": 929.99,
                        "quantity": 2
                    },
                    {
                        "_id": "605687827972ce2f26c6b1d9",
                        "product": "5ff504545a6a66457f0b0708",
                        "name": "iPhone 11 Pro 256GB Memory",
                        "image": "/images/phone.jpg",
                        "price": 599.99,
                        "quantity": 4
                    },
                    {
                        "_id": "605687827972ce2f26c6b1da",
                        "product": "5ff504545a6a66457f0b0707",
                        "name": "Airpods Wireless Headphones",
                        "image": "/images/airpods.jpg",
                        "price": 89.99,
                        "quantity": 4
                    }
                ],
                "paymentMethod": "Credit Card",
                "user": {
                    "_id": "5ff504545a6a66457f0b0705",
                    "name": "John Doe",
                    "email": "john@example.com"
                },
                "createdAt": "2021-03-20T23:38:42.711Z",
                "updatedAt": "2021-03-20T23:38:42.711Z",
                "__v": 0
            }
        */

        // and the second argument in the request will be our config object and remember
        // we are making a GET request here
        /*
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " ORDER_GET_SUCCESS "
        dispatch( {
            type    : ORDER_GET_SUCCESS,
            payload : data
        } );

    } // end of the try block

    catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " ORDER_GET_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : ORDER_GET_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    } // end of the catch block

} // end of orderGetActionCreator


// ==============================
// Action Creator 3
// ==============================

// Action Creator 3
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to update an order to paid and remember to pass in
// the order id and the paymentResult as arguments and remember the paymentResult will come
// from PayPal and pass in getState as an argument since we need to send a token to the
// backend and we need to send a token to the backend since our route or endpoint is private
// and requires authorization to access this route or endpoint
export const orderPayActionCreator = ( orderId, paymentResult ) => async ( dispatch, getState ) => {

    try {

         // let's dispatch our action or " ORDER_PAY_REQUEST "
         dispatch( {
            type : ORDER_PAY_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/orders/:id/pay "
        const endpoint = `/api/orders/${ orderId }/pay`;

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers and since
        // we are sending data along with the request ( i.e. paymentResult ) let's add
        // " 'Content-Type' : 'application/json', "
        const config = {
            headers : {
                'Content-Type' : 'application/json',
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a PUT request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // updatedOrder object

        // and the third argument in the request will be our config object and remember
        // we are making a PUT request here
        const { data } = await axios.put(
            endpoint,
            paymentResult,
            config
        );

        // let's dispatch our action or " ORDER_PAY_SUCCESS "
        dispatch( {
            type    : ORDER_PAY_SUCCESS,
            payload : data
        } );

    } // end of the try block

    catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " ORDER_PAY_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : ORDER_PAY_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    } // end of the catch block

} // end of orderPayActionCreator


// ==============================
// Action Creator 4
// ==============================

// Action Creator 4
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to add all the orders from a user to the profile
// screen and pass in getState as an argument since we need to send a token to the
// backend and we need to send a token to the backend since our route or endpoint is private
// and requires authorization in order to access this route or endpoint
export const orderListMyActionCreator = () => async ( dispatch, getState ) => {

    try {

         // let's dispatch our action or " ORDER_PAY_REQUEST "
         dispatch( {
            type : ORDER_LIST_MY_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/orders/myorders "
        const endpoint = `/api/orders/myorders`;

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        const config = {
            headers : {
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // orders object

        // and the second argument in the request will be our config object and remember
        // we are making a GET request here
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " ORDER_LIST_MY_SUCCESS "
        dispatch( {
            type    : ORDER_LIST_MY_SUCCESS,
            payload : data
        } );

    } // end of the try block

    catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " ORDER_LIST_MY_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : ORDER_LIST_MY_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    } // end of the catch block

} // end of orderListMyActionCreator


// 5 -
// coming from order.constants.js 5 -

// ==============================
// Action Creator 5
// ==============================

// ==============================
// Get Order List - Admin Order List Screen
// ==============================

// Action Creator 5
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to get all the orders so we can display a list of all
// the orders on the admin order list screen and remember to pass in getState as an argument since
// we need to send a token to the backend
export const orderListAdminActionCreator = () => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " ORDER_LIST_ADMIN_REQUEST "
        dispatch( {
            type : ORDER_LIST_ADMIN_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/orders "
        const endpoint = '/api/orders';

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
        // of all the orders

        // and the second argument in the request will be our config object and remember
        // we are making a GET request here
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " ORDER_LIST_ADMIN_SUCCESS "
        dispatch( {
            type    : ORDER_LIST_ADMIN_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " ORDER_LIST_ADMIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : ORDER_LIST_ADMIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}

// and now let's go to the order.reducers.js 5 - file

// End of 5 -
*/























// ===============================

























/*
// at the beginning of lecture 82, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in axios
import axios from 'axios'

// import in the order constants and these constants represent our actions
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
    ORDER_LIST_MY_FAIL,
    ORDER_LIST_ADMIN_REQUEST,
    ORDER_LIST_ADMIN_SUCCESS,
    ORDER_LIST_ADMIN_FAIL,
    ORDER_UPDATE_TO_DELIVERED_ADMIN_REQUEST,
    ORDER_UPDATE_TO_DELIVERED_ADMIN_SUCCESS,
    ORDER_UPDATE_TO_DELIVERED_ADMIN_FAIL
} from '../constants/order.constants';

// import in the cart reset constant and this constant represents an action
import { CART_ITEMS_RESET } from '../constants/cart.constants';


// ==============================
// Action Creator 1
// ==============================

// Action Creator 1
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to create an order and remember to pass in the order
// create object as an argument and getState as an argument since we need to send a token to the
// backend and we need to send a token to the backend since our route or endpoint is private
// and requires authorization to access this route or endpoint
export const orderCreateActionCreator = ( orderCreateObject ) => async ( dispatch, getState ) => {

    try {

         // let's dispatch our action or " ORDER_CREATE_REQUEST "
         dispatch( {
            type : ORDER_CREATE_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/orders "
        const endpoint = 'api/orders';

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

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

        // below we are making a POST request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // createdOrder object or the following order information ( this comes from the
        // order.controllers.js file ):

        /*
            orderItems      : orderItems,
            shippingAddress : shippingAddress,
            paymentMethod   : paymentMethod,
            itemsPrice      : itemsPrice,
            shippingPrice   : shippingPrice,
            taxPrice        : taxPrice,
            totalPrice      : totalPrice,
            user            : req.user._id,
        */

        // and the second argument will be our orderCreateObject and this object comes
        // from the place-order-screen.component.jsx file and looks like the following:

        /*
            {
                orderItems      : cartItems,
                shippingAddress : shippingAddress,
                paymentMethod   : paymentMethod,
                itemsPrice      : orderItemsPriceWithTwoDecimals,
                shippingPrice   : orderShippingPriceWithTwoDecimals,
                taxPrice        : orderTaxPriceWithTwoDecimals,
                totalPrice      : orderTotalPriceWithTwoDecimals,
            }
        */

        // and the third argument in the request will be our config object and remember
        // we are making a POST request here
        /*
        const { data } = await axios.post(
            endpoint,
            orderCreateObject,
            config
        );

        // let's dispatch our action or " ORDER_CREATE_SUCCESS "
        dispatch( {
            type    : ORDER_CREATE_SUCCESS,
            payload : data
        } );


        // 5 -

        // after we dispatch ORDER_CREATE_SUCCESS and have successfully placed the order
        // we need to clear out the cart array so that if the user
        // goes back to the cart screen the user won't see all the ordered cart items in the cart
        // because this may cause the user to think that the order has not been paid for
        // and I put in this piece of code since this was one of the project bugs that never
        // got addressed
        
        // for other bugs, search " Cart reset & other bugs "
        dispatch( {
            type : CART_ITEMS_RESET
        } );

        // End of 5 -
    

    } // end of the try block

    catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " ORDER_CREATE_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : ORDER_CREATE_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    } // end of the catch block

} // end of orderCreateActionCreator


// ==============================
// Action Creator 2
// ==============================

// Action Creator 2
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to get or fetch an order by id and remember to pass in
// the order id as an argument and getState as an argument since we need to send a token to the
// backend and we need to send a token to the backend since our route or endpoint is private
// and requires authorization to access this route or endpoint
export const orderGetActionCreator = ( orderId ) => async ( dispatch, getState ) => {

    try {

         // let's dispatch our action or " ORDER_GET_REQUEST "
         dispatch( {
            type : ORDER_GET_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/orders/:id "
        const endpoint = `/api/orders/${ orderId }`;

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        // and remember since we making a GET request and we are not sending any data along
        // with the request we don't need send the Content-Type
        // or " 'Content-Type' : 'application/json', " in the headers
        const config = {
            headers : {
                Authorization : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // order object or the following order information ( this comes from testing the
        // above route in Postman ):

        /*
            {
                "shippingAddress": {
                    "address": "3838 Vista Drive",
                    "city": "Sandy",
                    "postalCode": "84090",
                    "country": "United States"
                },
                "shippingPrice": 0,
                "taxPrice": 692.99,
                "totalPrice": 5312.89,
                "isPaid": false,
                "isDelivered": false,
                "_id": "605687827972ce2f26c6b1d7",
                "orderItems": [
                    {
                        "_id": "605687827972ce2f26c6b1d8",
                        "product": "5ff504545a6a66457f0b0709",
                        "name": "Cannon EOS 80D DSLR Camera",
                        "image": "/images/camera.jpg",
                        "price": 929.99,
                        "quantity": 2
                    },
                    {
                        "_id": "605687827972ce2f26c6b1d9",
                        "product": "5ff504545a6a66457f0b0708",
                        "name": "iPhone 11 Pro 256GB Memory",
                        "image": "/images/phone.jpg",
                        "price": 599.99,
                        "quantity": 4
                    },
                    {
                        "_id": "605687827972ce2f26c6b1da",
                        "product": "5ff504545a6a66457f0b0707",
                        "name": "Airpods Wireless Headphones",
                        "image": "/images/airpods.jpg",
                        "price": 89.99,
                        "quantity": 4
                    }
                ],
                "paymentMethod": "Credit Card",
                "user": {
                    "_id": "5ff504545a6a66457f0b0705",
                    "name": "John Doe",
                    "email": "john@example.com"
                },
                "createdAt": "2021-03-20T23:38:42.711Z",
                "updatedAt": "2021-03-20T23:38:42.711Z",
                "__v": 0
            }
        */

        // and the second argument in the request will be our config object and remember
        // we are making a GET request here
        /*
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " ORDER_GET_SUCCESS "
        dispatch( {
            type    : ORDER_GET_SUCCESS,
            payload : data
        } );

    } // end of the try block

    catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " ORDER_GET_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : ORDER_GET_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    } // end of the catch block

} // end of orderGetActionCreator


// ==============================
// Action Creator 3
// ==============================

// Action Creator 3
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to update an order to paid and remember to pass in
// the order id and the paymentResult as arguments and remember the paymentResult will come
// from PayPal and pass in getState as an argument since we need to send a token to the
// backend and we need to send a token to the backend since our route or endpoint is private
// and requires authorization to access this route or endpoint
export const orderPayActionCreator = ( orderId, paymentResult ) => async ( dispatch, getState ) => {

    try {

         // let's dispatch our action or " ORDER_PAY_REQUEST "
         dispatch( {
            type : ORDER_PAY_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/orders/:id/pay "
        const endpoint = `/api/orders/${ orderId }/pay`;

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers and since
        // we are sending data along with the request ( i.e. paymentResult ) let's add
        // " 'Content-Type' : 'application/json', "
        const config = {
            headers : {
                'Content-Type' : 'application/json',
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a PUT request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // updatedOrder object

        // and the third argument in the request will be our config object and remember
        // we are making a PUT request here
        const { data } = await axios.put(
            endpoint,
            paymentResult,
            config
        );

        // let's dispatch our action or " ORDER_PAY_SUCCESS "
        dispatch( {
            type    : ORDER_PAY_SUCCESS,
            payload : data
        } );

    } // end of the try block

    catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " ORDER_PAY_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : ORDER_PAY_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    } // end of the catch block

} // end of orderPayActionCreator


// ==============================
// Action Creator 4
// ==============================

// Action Creator 4
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to add all the orders from a user to the profile
// screen and pass in getState as an argument since we need to send a token to the
// backend and we need to send a token to the backend since our route or endpoint is private
// and requires authorization in order to access this route or endpoint
export const orderListMyActionCreator = () => async ( dispatch, getState ) => {

    try {

         // let's dispatch our action or " ORDER_PAY_REQUEST "
         dispatch( {
            type : ORDER_LIST_MY_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/orders/myorders "
        const endpoint = `/api/orders/myorders`;

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        const config = {
            headers : {
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // orders object

        // and the second argument in the request will be our config object and remember
        // we are making a GET request here
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " ORDER_LIST_MY_SUCCESS "
        dispatch( {
            type    : ORDER_LIST_MY_SUCCESS,
            payload : data
        } );

    } // end of the try block

    catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " ORDER_LIST_MY_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : ORDER_LIST_MY_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    } // end of the catch block

} // end of orderListMyActionCreator


// ==============================
// Action Creator 5
// ==============================

// ==============================
// Get Order List - Admin Order List Screen
// ==============================

// Action Creator 5
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to get all the orders so we can display a list of all
// the orders on the admin order list screen and remember to pass in getState as an argument since
// we need to send a token to the backend
export const orderListAdminActionCreator = () => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " ORDER_LIST_ADMIN_REQUEST "
        dispatch( {
            type : ORDER_LIST_ADMIN_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/orders "
        const endpoint = '/api/orders';

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
        // of all the orders

        // and the second argument in the request will be our config object and remember
        // we are making a GET request here
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " ORDER_LIST_ADMIN_SUCCESS "
        dispatch( {
            type    : ORDER_LIST_ADMIN_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " ORDER_LIST_ADMIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : ORDER_LIST_ADMIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}


// 6 -
// coming from order.constants.js 6 -

// ==============================
// Action Creator 6
// ==============================

// ==============================
// Update Order To Delivered - Order Screen
// ==============================

// Action Creator 6
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to mark an order as delivered on the order screen
// and remember to pass in the order id as an argument and getState as an argument since
// we need to send a token to the backend
export const orderUpdateToDeliveredAdminActionCreator = ( orderId ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " ORDER_UPDATE_TO_DELIVERED_ADMIN_REQUEST "
        dispatch( {
            type : ORDER_UPDATE_TO_DELIVERED_ADMIN_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is
        // " /api/orders/:id/delivered "
        const endpoint = `/api/orders/${ orderId }/delivered`;

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

        // below we are making a PUT request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // updatedOrderMarkAsDelivered object

        // IMPORTANT - for put and post requests remember to pass in an empty object,
        // assuming we are not sending any data to the backend with the request; otherwise,
        // our request will fail

        // and the third argument in the request will be our config object and remember
        // we are making a PUT request here
        const { data } = await axios.put(
            endpoint,
            {},
            config
        );

        // let's dispatch our action or " ORDER_UPDATE_TO_DELIVERED_ADMIN_SUCCESS "
        dispatch( {
            type    : ORDER_UPDATE_TO_DELIVERED_ADMIN_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " ORDER_UPDATE_TO_DELIVERED_ADMIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : ORDER_UPDATE_TO_DELIVERED_ADMIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}

// and now let's go to the order.reducers.js 6 - file

// End of 6 -
*/























// ===============================


























// at the beginning of lecture 82, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in axios
import axios from 'axios'

// import in the order constants and these constants represent our actions
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
    ORDER_LIST_MY_FAIL,
    ORDER_LIST_ADMIN_REQUEST,
    ORDER_LIST_ADMIN_SUCCESS,
    ORDER_LIST_ADMIN_FAIL,
    ORDER_UPDATE_TO_DELIVERED_ADMIN_REQUEST,
    ORDER_UPDATE_TO_DELIVERED_ADMIN_SUCCESS,
    ORDER_UPDATE_TO_DELIVERED_ADMIN_FAIL
} from '../constants/order.constants';

// import in the cart reset constant and this constant represents an action
import { CART_ITEMS_RESET } from '../constants/cart.constants';


// ==============================
// Action Creator 1
// ==============================

// Action Creator 1
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to create an order and remember to pass in the order
// create object as an argument and getState as an argument since we need to send a token to the
// backend and we need to send a token to the backend since our route or endpoint is private
// and requires authorization to access this route or endpoint
export const orderCreateActionCreator = ( orderCreateObject ) => async ( dispatch, getState ) => {

    try {

         // let's dispatch our action or " ORDER_CREATE_REQUEST "
         dispatch( {
            type : ORDER_CREATE_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/orders "
        const endpoint = 'api/orders';

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

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

        // below we are making a POST request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // createdOrder object or the following order information ( this comes from the
        // order.controllers.js file ):

        /*
            orderItems      : orderItems,
            shippingAddress : shippingAddress,
            paymentMethod   : paymentMethod,
            itemsPrice      : itemsPrice,
            shippingPrice   : shippingPrice,
            taxPrice        : taxPrice,
            totalPrice      : totalPrice,
            user            : req.user._id,
        */

        // and the second argument will be our orderCreateObject and this object comes
        // from the place-order-screen.component.jsx file and looks like the following:

        /*
            {
                orderItems      : cartItems,
                shippingAddress : shippingAddress,
                paymentMethod   : paymentMethod,
                itemsPrice      : orderItemsPriceWithTwoDecimals,
                shippingPrice   : orderShippingPriceWithTwoDecimals,
                taxPrice        : orderTaxPriceWithTwoDecimals,
                totalPrice      : orderTotalPriceWithTwoDecimals,
            }
        */

        // and the third argument in the request will be our config object and remember
        // we are making a POST request here
        const { data } = await axios.post(
            endpoint,
            orderCreateObject,
            config
        );

        // let's dispatch our action or " ORDER_CREATE_SUCCESS "
        dispatch( {
            type    : ORDER_CREATE_SUCCESS,
            payload : data
        } );


        // 5 -

        // after we dispatch ORDER_CREATE_SUCCESS and have successfully placed the order
        // we need to clear out the cart array so that if the user
        // goes back to the cart screen the user won't see all the ordered cart items in the cart
        // because this may cause the user to think that the order has not been paid for
        // and I put in this piece of code since this was one of the project bugs that never
        // got addressed
        
        // for other bugs, search " Cart reset & other bugs "
        dispatch( {
            type : CART_ITEMS_RESET
        } );

        // End of 5 -
    

    } // end of the try block

    catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " ORDER_CREATE_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : ORDER_CREATE_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    } // end of the catch block

} // end of orderCreateActionCreator


// ==============================
// Action Creator 2
// ==============================

// Action Creator 2
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to get or fetch an order by id and remember to pass in
// the order id as an argument and getState as an argument since we need to send a token to the
// backend and we need to send a token to the backend since our route or endpoint is private
// and requires authorization to access this route or endpoint
export const orderGetActionCreator = ( orderId ) => async ( dispatch, getState ) => {

    try {

         // let's dispatch our action or " ORDER_GET_REQUEST "
         dispatch( {
            type : ORDER_GET_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/orders/:id "
        const endpoint = `/api/orders/${ orderId }`;

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        // and remember since we making a GET request and we are not sending any data along
        // with the request we don't need send the Content-Type
        // or " 'Content-Type' : 'application/json', " in the headers
        const config = {
            headers : {
                Authorization : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // order object or the following order information ( this comes from testing the
        // above route in Postman ):

        /*
            {
                "shippingAddress": {
                    "address": "3838 Vista Drive",
                    "city": "Sandy",
                    "postalCode": "84090",
                    "country": "United States"
                },
                "shippingPrice": 0,
                "taxPrice": 692.99,
                "totalPrice": 5312.89,
                "isPaid": false,
                "isDelivered": false,
                "_id": "605687827972ce2f26c6b1d7",
                "orderItems": [
                    {
                        "_id": "605687827972ce2f26c6b1d8",
                        "product": "5ff504545a6a66457f0b0709",
                        "name": "Cannon EOS 80D DSLR Camera",
                        "image": "/images/camera.jpg",
                        "price": 929.99,
                        "quantity": 2
                    },
                    {
                        "_id": "605687827972ce2f26c6b1d9",
                        "product": "5ff504545a6a66457f0b0708",
                        "name": "iPhone 11 Pro 256GB Memory",
                        "image": "/images/phone.jpg",
                        "price": 599.99,
                        "quantity": 4
                    },
                    {
                        "_id": "605687827972ce2f26c6b1da",
                        "product": "5ff504545a6a66457f0b0707",
                        "name": "Airpods Wireless Headphones",
                        "image": "/images/airpods.jpg",
                        "price": 89.99,
                        "quantity": 4
                    }
                ],
                "paymentMethod": "Credit Card",
                "user": {
                    "_id": "5ff504545a6a66457f0b0705",
                    "name": "John Doe",
                    "email": "john@example.com"
                },
                "createdAt": "2021-03-20T23:38:42.711Z",
                "updatedAt": "2021-03-20T23:38:42.711Z",
                "__v": 0
            }
        */

        // and the second argument in the request will be our config object and remember
        // we are making a GET request here
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " ORDER_GET_SUCCESS "
        dispatch( {
            type    : ORDER_GET_SUCCESS,
            payload : data
        } );

    } // end of the try block

    catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " ORDER_GET_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : ORDER_GET_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    } // end of the catch block

} // end of orderGetActionCreator


// ==============================
// Action Creator 3
// ==============================

// Action Creator 3
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to update an order to paid and remember to pass in
// the order id and the paymentResult as arguments and remember the paymentResult will come
// from PayPal and pass in getState as an argument since we need to send a token to the
// backend and we need to send a token to the backend since our route or endpoint is private
// and requires authorization to access this route or endpoint
export const orderPayActionCreator = ( orderId, paymentResult ) => async ( dispatch, getState ) => {

    try {

         // let's dispatch our action or " ORDER_PAY_REQUEST "
         dispatch( {
            type : ORDER_PAY_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/orders/:id/pay "
        const endpoint = `/api/orders/${ orderId }/pay`;

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers and since
        // we are sending data along with the request ( i.e. paymentResult ) let's add
        // " 'Content-Type' : 'application/json', "
        const config = {
            headers : {
                'Content-Type' : 'application/json',
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a PUT request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // updatedOrder object

        // and the third argument in the request will be our config object and remember
        // we are making a PUT request here
        const { data } = await axios.put(
            endpoint,
            paymentResult,
            config
        );

        // let's dispatch our action or " ORDER_PAY_SUCCESS "
        dispatch( {
            type    : ORDER_PAY_SUCCESS,
            payload : data
        } );

    } // end of the try block

    catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " ORDER_PAY_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : ORDER_PAY_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    } // end of the catch block

} // end of orderPayActionCreator


// ==============================
// Action Creator 4
// ==============================

// Action Creator 4
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to add all the orders from a user to the profile
// screen and pass in getState as an argument since we need to send a token to the
// backend and we need to send a token to the backend since our route or endpoint is private
// and requires authorization in order to access this route or endpoint
export const orderListMyActionCreator = () => async ( dispatch, getState ) => {

    try {

         // let's dispatch our action or " ORDER_PAY_REQUEST "
         dispatch( {
            type : ORDER_LIST_MY_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/orders/myorders "
        const endpoint = `/api/orders/myorders`;

        // use destructuring to get userInfo
        const { 
            userSignIn : { userInfo }
        } = getState();

        // create our config object
        // as part of the browser request send the user's token value in the headers
        const config = {
            headers : {
                Authorization  : `Bearer ${ userInfo.token }`
            }
        };

        // below we are making a GET request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // orders object

        // and the second argument in the request will be our config object and remember
        // we are making a GET request here
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " ORDER_LIST_MY_SUCCESS "
        dispatch( {
            type    : ORDER_LIST_MY_SUCCESS,
            payload : data
        } );

    } // end of the try block

    catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " ORDER_LIST_MY_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : ORDER_LIST_MY_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    } // end of the catch block

} // end of orderListMyActionCreator


// ==============================
// Action Creator 5
// ==============================

// ==============================
// Get Order List - Admin Order List Screen
// ==============================

// Action Creator 5
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to get all the orders so we can display a list of all
// the orders on the admin order list screen and remember to pass in getState as an argument since
// we need to send a token to the backend
export const orderListAdminActionCreator = () => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " ORDER_LIST_ADMIN_REQUEST "
        dispatch( {
            type : ORDER_LIST_ADMIN_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is " /api/orders "
        const endpoint = '/api/orders';

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
        // of all the orders

        // and the second argument in the request will be our config object and remember
        // we are making a GET request here
        const { data } = await axios.get(
            endpoint,
            config
        );

        // let's dispatch our action or " ORDER_LIST_ADMIN_SUCCESS "
        dispatch( {
            type    : ORDER_LIST_ADMIN_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " ORDER_LIST_ADMIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : ORDER_LIST_ADMIN_FAIL,
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
// Update Order To Delivered - Order Screen
// ==============================

// Action Creator 6
// use redux thunk to make an asynchronous request with our action creator

// here we are creating an action creator to mark an order as delivered on the order screen
// and remember to pass in the order id as an argument and getState as an argument since
// we need to send a token to the backend
export const orderUpdateToDeliveredAdminActionCreator = ( orderId ) => async ( dispatch, getState ) => {

    try {

        // let's dispatch our action or " ORDER_UPDATE_TO_DELIVERED_ADMIN_REQUEST "
        dispatch( {
            type : ORDER_UPDATE_TO_DELIVERED_ADMIN_REQUEST
        } );

        // create our endpoint
        // remember the endpoint points to the backend endpoint which is
        // " /api/orders/:id/delivered "
        const endpoint = `/api/orders/${ orderId }/delivered`;

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

        // below we are making a PUT request to the above endpoint
        // and axios returns the response object and we can then destructure the data
        // object off of the response object and the data object in this case is the
        // updatedOrderMarkAsDelivered object

        // IMPORTANT - for put and post requests remember to pass in an empty object,
        // assuming we are not sending any data to the backend with the request; otherwise,
        // our request will fail

        // and the third argument in the request will be our config object and remember
        // we are making a PUT request here
        const { data } = await axios.put(
            endpoint,
            {},
            config
        );

        // let's dispatch our action or " ORDER_UPDATE_TO_DELIVERED_ADMIN_SUCCESS "
        dispatch( {
            type    : ORDER_UPDATE_TO_DELIVERED_ADMIN_SUCCESS,
            payload : data
        } );

    } catch ( error ) { // remember this part will always be the same

        // let's dispatch our action or " ORDER_UPDATE_TO_DELIVERED_ADMIN_FAIL "
        // and remember we want to get the error message and that way we can get our backend
        // errors and put them in our frontend state

        // from a blog: error.response means " that the request was made and the server
        // responded with a status code that falls out of the range of 2xx "
        dispatch( {
            type    : ORDER_UPDATE_TO_DELIVERED_ADMIN_FAIL,
            payload : error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        } );

    }

}



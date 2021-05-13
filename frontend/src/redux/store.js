
/*
// 1 -
// in this file we will connect all of our reducers and ant middleware we might have and let's
// import in createStore, which is a function to create our store and combineReducers and we will
// have a bunch of reducers and each reducer will handle a piece of functionality and we want to
// import in applyMiddleware so we can apply any middleware we need such as thunk
import { createStore, combineReducers, applyMiddleware  } from 'redux';
// import in thunk
import thunk from 'redux-thunk';
// to use the redux-devtools-extension we need to import in composeWithDevTools
import { composeWithDevTools } from 'redux-devtools-extension';


// argument #1 to createStore();
// use combineReducers to combine our reducers and save the result in a const called " reducer "
const reducer = combineReducers( {} );


// argument #2 to createStore();
// define initialState to an empty object for now and if we want something to be loaded when the
// redux store initially loads we can add it to the initialState object below
const initialState = {};


// argument #3 to createStore();
// in this case, we will define " ...middleware "
const middleware = [ thunk ];


// create our store
// pass in the reducer, initialState, composeWithDevTools as arguments to createStore();
// and pass in applyMiddleware as an argument to composeWithDevTools and since we are only
// using thunk we could just pass in thunk as an argument to applyMiddleware or
// applyMiddleware( thunk ) but the best solution is to have an array of middleware as the
// argument to applyMiddleware or " ( ...middleware ) " so we use the spread operator to
// spread out the individual elements of the array ( see below for an example of the spread
// operator ) and now let's define " ...middleware " above
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools( applyMiddleware( ...middleware ) )
);


// Spread Operator:
// from a blog: " ES6 provides a new operator called spread operator that consists of three
// dots (...). The spread operator allows you to spread out elements of an iterable object such
// as an array, a map, or a set. For example:

/*
const odd = [ 1, 3, 5 ];
const combined = [ 2, 4, 6, ...odd ];
console.log( combined );

Output in the console: [ 2, 4, 6, 1, 3, 5 ]
*/

// End of Spread Operator

/*
export default store;

// and remember the way we implement the store or add the store to our application is through a
// provider and the provider comes from react-redux and let's go to index.js 3 - file now

// End of 1 -
*/





















// ===============================





















/*
// at the beginning of lecture 27, given all the notes, I created a new file below without
// the notes so we are starting fresh


// in this file we will connect all of our reducers and any middleware we might have and let's
// import in createStore, which is a function to create our store and combineReducers and we will
// have a bunch of reducers and each reducer will handle a piece of functionality and we want to
// import in applyMiddleware so we can apply any middleware we need such as thunk
import { createStore, combineReducers, applyMiddleware  } from 'redux';
// import in thunk
import thunk from 'redux-thunk';
// to use the redux-devtools-extension we need to import in composeWithDevTools
import { composeWithDevTools } from 'redux-devtools-extension';


// 2 -
// import in the productListReducer
import { productListReducer } from './reducers/product.reducers';

// and then we want to add the productListReducer to the combineReducers( {} ) below so we would
// change " combineReducers( {} ) " to " combineReducers( { productList : productListReducer } ) "
// and remember productList is really important because productList will show as part of the state
// or as a piece of state

// and now let's go to the redux dev tools inside the Chrome dev tools and we should see the
// following tabs on the right side of the page: Action, State, Diff, Trace, Test and let's click
// on the state tab and when we do we see the following:

/*
productList
    products : []
*/

// so we see the productList piece of state and underneath that we see that products is equal to
// an empty array

// and this is correct so everything is working as expected

// and let's go back to the product.reducers.js 2 - file

// End of 2 -


/*
// argument #1 to createStore();
// use combineReducers to combine our reducers and save the result in a const called " reducer "
const reducer = combineReducers( {
    productList : productListReducer
} );


// argument #2 to createStore();
// define initialState to an empty object for now and if we want something to be loaded when the
// redux store initially loads we can add it to the initialState object below
const initialState = {};


// argument #3 to createStore();
// in this case, we will define " ...middleware "
const middleware = [ thunk ];


// create our store
// pass in the reducer, initialState, composeWithDevTools as arguments to createStore();
// and pass in applyMiddleware as an argument to composeWithDevTools()

// and remember the way we implement the store or add the store to our application is through 
// the Provider component
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools( applyMiddleware( ...middleware ) )
);


// Spread Operator:
// from a blog: " ES6 provides a new operator called spread operator that consists of three
// dots (...). The spread operator allows you to spread out elements of an iterable object such
// as an array, a map, or a set. For example:

/*
const odd = [ 1, 3, 5 ];
const combined = [ 2, 4, 6, ...odd ];
console.log( combined );

Output in the console: [ 2, 4, 6, 1, 3, 5 ]
*/

// End of Spread Operator

/*
export default store;
*/




















// ===============================





















/*
// at the beginning of lecture 28, given all the notes, I created a new file below without
// the notes so we are starting fresh


// in this file we will connect all of our reducers and any middleware we might have and let's
// import in createStore, which is a function to create our store and combineReducers and we will
// have a bunch of reducers and each reducer will handle a piece of functionality and we want to
// import in applyMiddleware so we can apply any middleware we need such as thunk
import { createStore, combineReducers, applyMiddleware  } from 'redux';
// import in thunk
import thunk from 'redux-thunk';
// to use the redux-devtools-extension we need to import in composeWithDevTools
import { composeWithDevTools } from 'redux-devtools-extension';
// import in the productListReducer and the productGetReducer
// add the productListReducer to the combineReducers( {} );
import { 
    productListReducer,
    productGetReducer
} from './reducers/product.reducers';


// 3 -
// import in the productGetReducer above and then add this reducer to the
// combineReducers() below

// now let's go to the product-screen.component.jsx 3 - file

// End of 3 -


// argument #1 to createStore();
// use combineReducers to combine our reducers and save the result in a const called " reducer "
const reducer = combineReducers( {
    productList : productListReducer,
    productGet  : productGetReducer
} );


// argument #2 to createStore();
// define initialState to an empty object for now and if we want something to be loaded when the
// redux store initially loads we can add it to the initialState object below
const initialState = {};


// argument #3 to createStore();
// in this case, we will define " ...middleware "
const middleware = [ thunk ];


// create our store
// pass in the reducer, initialState, composeWithDevTools as arguments to createStore();
// and pass in applyMiddleware as an argument to composeWithDevTools()

// and remember the way we implement the store or add the store to our application is through 
// the Provider component
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools( applyMiddleware( ...middleware ) )
);


// Spread Operator:
// from a blog: " ES6 provides a new operator called spread operator that consists of three
// dots (...). The spread operator allows you to spread out elements of an iterable object such
// as an array, a map, or a set. For example:

/*
const odd = [ 1, 3, 5 ];
const combined = [ 2, 4, 6, ...odd ];
console.log( combined );

Output in the console: [ 2, 4, 6, 1, 3, 5 ]
*/

// End of Spread Operator

/*
export default store;
*/























// ===============================





















/*
// at the beginning of lecture 28, given all the notes, I created a new file below without
// the notes so we are starting fresh


// in this file we will connect all of our reducers and any middleware we might have and let's
// import in createStore, which is a function to create our store and combineReducers and we will
// have a bunch of reducers and each reducer will handle a piece of functionality and we want to
// import in applyMiddleware so we can apply any middleware we need such as thunk
import { createStore, combineReducers, applyMiddleware  } from 'redux';
// import in thunk
import thunk from 'redux-thunk';
// to use the redux-devtools-extension we need to import in composeWithDevTools
import { composeWithDevTools } from 'redux-devtools-extension';
// import in the productListReducer and the productGetReducer
// add the productListReducer to the combineReducers( {} );
import { 
    productListReducer,
    productGetReducer
} from './reducers/product.reducers';


// 4 -
// import in the cartReducer and then add this reducer to the combineReducers() below
import cartReducer from './reducers/cart.reducers';
// now let's go to the nav-bar.component.jsx 1 - file

// End of 4 -


// argument #1 to createStore();
// use combineReducers to combine our reducers and save the result in a const called " reducer "
const reducer = combineReducers( {
    productList : productListReducer,
    productGet  : productGetReducer,
    cart        : cartReducer 
} );


// 5 -
// coming form the cart.actions.js 1 - file
// first, check to make sure cartItems are in local storage and if so then let's get
// the cartItems from local storage otherwise we will just return an empty array
const cartItemsFromLocalStorage = 
    localStorage.getItem( 'cartItems' ) ?
    JSON.parse( localStorage.getItem( 'cartItems' ) ) :
    []

// now this just creates the variable " cartItemsFromLocalStorage " but to add cartItems to
// the initial state let's add the following to initialState
// " cart : { cartItems : cartItemsFromLocalStorage } "

// if we go to redux dev tools we see the following:

/*
    productList : { products : [ ... ], loading : false }
    productGet : { product : { ... }  }
    cart
        cartItems : []
*/

// and this is correct so everything is working as expected

// and in the next video we will start to implement the add to cart functionality in
// the cart screen and then ultimately we want to show all the items in the cart as well

// End of 5 -


// argument #2 to createStore();
// define initialState to an empty object for now and if we want something to be loaded when the
// redux store initially loads we can add it to the initialState object below
/*
const initialState = {
    cart : { cartItems : cartItemsFromLocalStorage }

};


// argument #3 to createStore();
// in this case, we will define " ...middleware "
const middleware = [ thunk ];


// create our store
// pass in the reducer, initialState, composeWithDevTools as arguments to createStore();
// and pass in applyMiddleware as an argument to composeWithDevTools()

// and remember the way we implement the store or add the store to our application is through 
// the Provider component
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools( applyMiddleware( ...middleware ) )
);


// Spread Operator:
// from a blog: " ES6 provides a new operator called spread operator that consists of three
// dots (...). The spread operator allows you to spread out elements of an iterable object such
// as an array, a map, or a set. For example:

/*
const odd = [ 1, 3, 5 ];
const combined = [ 2, 4, 6, ...odd ];
console.log( combined );

Output in the console: [ 2, 4, 6, 1, 3, 5 ]
*/

// End of Spread Operator

/*
export default store;
*/





















// ===============================
























// at the beginning of lecture 33, given all the notes, I created a new file below without
// the notes so we are starting fresh

/*
// in this file we will connect all of our reducers and any middleware we might have and let's
// import in createStore, which is a function to create our store and combineReducers and we will
// have a bunch of reducers and each reducer will handle a piece of functionality and we want to
// import in applyMiddleware so we can apply any middleware we need such as thunk
import { createStore, combineReducers, applyMiddleware  } from 'redux';
// import in thunk
import thunk from 'redux-thunk';
// to use the redux-devtools-extension we need to import in composeWithDevTools
import { composeWithDevTools } from 'redux-devtools-extension';
// import in the productListReducer and the productGetReducer
// add the productListReducer to the combineReducers( {} );
import { 
    productListReducer,
    productGetReducer
} from './reducers/product.reducers';
// import in the cartReducer and then add this reducer to the combineReducers() below
import cartReducer from './reducers/cart.reducers';


// 6 -
// coming from the user.reducers.js 1 - file
// import in the userLoginReducer and then add this reducer to the combineReducers() below
import { userLoginReducer } from './reducers/user.reducers';

// now if we go to the redux dev tools and click on the state tab, we see the following:

/*
    productList (pin): { products: [] }
    productGet (pin): { product: { ... } }
    cart (pin): { cartItems: [ ... ] }
    userLogin: {}
*/

// and this is correct so everything is working as expected

// End of 6 -


/*
// add cartItems to the initialState below
// first, check to make sure cartItems are in local storage and if so then let's get
// the cartItems from local storage otherwise we will just return an empty array
const cartItemsFromLocalStorage = 
    localStorage.getItem( 'cartItems' ) ?
    JSON.parse( localStorage.getItem( 'cartItems' ) ) :
    []

// now this just creates the variable " cartItemsFromLocalStorage " but to add cartItems to
// the initial state let's add the following to initialState
// " cart : { cartItems : cartItemsFromLocalStorage } "


// 7 -
// coming from the user.actions.js 1 - file
// save the userInfo from local storage in the initialState object below

// first, check to make sure userInfo is in local storage and if so then let's get
// the userInfo from local storage otherwise we will just return null
const userInfoFromLocalStorage = 
    localStorage.getItem( 'userInfo' ) ?
    JSON.parse( localStorage.getItem( 'userInfo' ) ) :
    null

// now this just creates the variable " userInfoFromLocalStorage " but to add userInfo to
// the initial state let's add the following to initialState
// " userLogin : { userInfo : userInfoFromLocalStorage } "

// in the next video, we will create the login or sign in screen and then create the login
// or sign in form and then from there we can call the userLoginActionCreator

// End of 7 -


// argument #1 to createStore();
// use combineReducers to combine our reducers and save the result in a const called " reducer "
const reducer = combineReducers( {
    productList : productListReducer,
    productGet  : productGetReducer,
    cart        : cartReducer,
    userLogin   : userLoginReducer
} );


// argument #2 to createStore();
// define initialState to an empty object for now and if we want something to be loaded when the
// redux store initially loads we can add it to the initialState object below
const initialState = {
    cart : { cartItems : cartItemsFromLocalStorage },
    userLogin : { userInfo : userInfoFromLocalStorage }
};


// argument #3 to createStore();
// in this case, we will define " ...middleware "
const middleware = [ thunk ];


// create our store
// pass in the reducer, initialState, composeWithDevTools as arguments to createStore();
// and pass in applyMiddleware as an argument to composeWithDevTools()

// and remember the way we implement the store or add the store to our application is through 
// the Provider component
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools( applyMiddleware( ...middleware ) )
);


export default store;
*/























// ===============================
























// at the beginning of lecture 33, given all the notes, I created a new file below without
// the notes so we are starting fresh

/*
// in this file we will connect all of our reducers and any middleware we might have and let's
// import in createStore, which is a function to create our store and combineReducers and we will
// have a bunch of reducers and each reducer will handle a piece of functionality and we want to
// import in applyMiddleware so we can apply any middleware we need such as thunk
import { createStore, combineReducers, applyMiddleware  } from 'redux';
// import in thunk
import thunk from 'redux-thunk';
// to use the redux-devtools-extension we need to import in composeWithDevTools
import { composeWithDevTools } from 'redux-devtools-extension';
// import in the productListReducer and the productGetReducer
// add the productListReducer to the combineReducers( {} );
import { 
    productListReducer,
    productGetReducer
} from './reducers/product.reducers';
// import in the cartReducer and then add this reducer to the combineReducers() below
import cartReducer from './reducers/cart.reducers';
// import in the userSignInReducer and then add this reducer to the combineReducers() below
import { userSignInReducer } from './reducers/user.reducers';


// 8 -

// import in the userNameDropDownReducer and then add this reducer to the combineReducers() below
import { userNameDropdownReducer } from './reducers/user.reducers';

// End of 8 -


// add cartItems to the initialState below
// first, check to make sure cartItems are in local storage and if so then let's get
// the cartItems from local storage otherwise we will just return an empty array
const cartItemsFromLocalStorage = 
    localStorage.getItem( 'cartItems' ) ?
    JSON.parse( localStorage.getItem( 'cartItems' ) ) :
    []


// add userInfo to the initialState below
// first, check to make sure userInfo is in local storage and if so then let's get
// the userInfo from local storage otherwise we will just return null
const userInfoFromLocalStorage = 
    localStorage.getItem( 'userInfo' ) ?
    JSON.parse( localStorage.getItem( 'userInfo' ) ) :
    null


// argument 1 to createStore();
// use combineReducers to combine our reducers and save the result in a const called " reducer "
const reducer = combineReducers( {
    productList      : productListReducer,
    productGet       : productGetReducer,
    cart             : cartReducer,
    userSignIn       : userSignInReducer,
    userNameDropdown : userNameDropdownReducer
} );


// argument 2 to createStore();
// define initialState to an empty object for now and if we want something to be loaded when the
// redux store initially loads we can add it to the initialState object below
const initialState = {
    cart       : { cartItems : cartItemsFromLocalStorage },
    userSignIn : { userInfo : userInfoFromLocalStorage }
};


// argument 3 to createStore();
// in this case, we will define " ...middleware "
const middleware = [ thunk ];


// create our store
// pass in the reducer, initialState, composeWithDevTools as arguments to createStore();
// and pass in applyMiddleware as an argument to composeWithDevTools()

// and remember the way we implement the store or add the store to our application is through 
// the Provider component
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools( applyMiddleware( ...middleware ) )
);


export default store;
*/























// ===============================























/*
// at the beginning of lecture 46, given all the notes, I created a new file below without
// the notes so we are starting fresh

// in this file we will connect all of our reducers and any middleware we might have and let's
// import in createStore, which is a function to create our store and combineReducers and we will
// have a bunch of reducers and each reducer will handle a piece of functionality and we want to
// import in applyMiddleware so we can apply any middleware we need such as thunk
import { createStore, combineReducers, applyMiddleware  } from 'redux';
// import in thunk
import thunk from 'redux-thunk';
// to use the redux-devtools-extension we need to import in composeWithDevTools
import { composeWithDevTools } from 'redux-devtools-extension';
// import in the productListReducer and the productGetReducer
// add the productListReducer to the combineReducers( {} );
import { 
    productListReducer,
    productGetReducer
} from './reducers/product.reducers';
// import in the cartReducer and then add this reducer to the combineReducers() below
import cartReducer from './reducers/cart.reducers';


// 9 -

// import in the userSignInReducer, userNameDropDownReducer, userRegisterReducer and then add
// these reducers to the combineReducers() below
import { 
    userSignInReducer,
    userNameDropdownReducer,
    userRegisterReducer 
} from './reducers/user.reducers';

// now let's go to the user.actions.js 3 - file

// End of 9 -


// add cartItems to the initialState below
// first, check to make sure cartItems are in local storage and if so then let's get
// the cartItems from local storage otherwise we will just return an empty array
const cartItemsFromLocalStorage = 
    localStorage.getItem( 'cartItems' ) ?
    JSON.parse( localStorage.getItem( 'cartItems' ) ) :
    []


// add userInfo to the initialState below
// first, check to make sure userInfo is in local storage and if so then let's get
// the userInfo from local storage otherwise we will just return null
const userInfoFromLocalStorage = 
    localStorage.getItem( 'userInfo' ) ?
    JSON.parse( localStorage.getItem( 'userInfo' ) ) :
    null


// argument 1 to createStore();
// use combineReducers to combine our reducers and save the result in a const called " reducer "
const reducer = combineReducers( {
    productList      : productListReducer,
    productGet       : productGetReducer,
    cart             : cartReducer,
    userSignIn       : userSignInReducer,
    userNameDropdown : userNameDropdownReducer,
    userRegister     : userRegisterReducer
} );


// argument 2 to createStore();
// define initialState to an empty object for now and if we want something to be loaded when the
// redux store initially loads we can add it to the initialState object below
const initialState = {
    cart       : { cartItems : cartItemsFromLocalStorage },
    userSignIn : { userInfo : userInfoFromLocalStorage }
};


// argument 3 to createStore();
// in this case, we will define " ...middleware "
const middleware = [ thunk ];


// create our store
// pass in the reducer, initialState, composeWithDevTools as arguments to createStore();
// and pass in applyMiddleware as an argument to composeWithDevTools()

// and remember the way we implement the store or add the store to our application is through 
// the Provider component
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools( applyMiddleware( ...middleware ) )
);


export default store;
*/

























// ===============================
























// at the beginning of lecture 46, given all the notes, I created a new file below without
// the notes so we are starting fresh

/*
// in this file we will connect all of our reducers and any middleware we might have and let's
// import in createStore, which is a function to create our store and combineReducers and we will
// have a bunch of reducers and each reducer will handle a piece of functionality and we want to
// import in applyMiddleware so we can apply any middleware we need such as thunk
import { createStore, combineReducers, applyMiddleware  } from 'redux';
// import in thunk
import thunk from 'redux-thunk';
// to use the redux-devtools-extension we need to import in composeWithDevTools
import { composeWithDevTools } from 'redux-devtools-extension';
// import in the productListReducer and the productGetReducer
// add the productListReducer to the combineReducers( {} );
import { 
    productListReducer,
    productGetReducer
} from './reducers/product.reducers';
// import in the cartReducer and then add this reducer to the combineReducers() below
import cartReducer from './reducers/cart.reducers';
// import in the userSignInReducer, userNameDropDownReducer, userRegisterReducer and then add
// these reducers to the combineReducers() below


// 10 -
// coming from the user.reducer.js 4 - file
// import in the userDetailsReducer and then add this reducer to the combineReducers() below
import { 
    userSignInReducer,
    userNameDropdownReducer,
    userRegisterReducer,
    userDetailsReducer
} from './reducers/user.reducers';


// if we go to the redux dev tools, we see that userDetails is now in our state:

/*
    productList (pin): { products: [] }
    productGet (pin): { product: { ... } }
    cart (pin): { cartItems: [ ... ] }
    userSignIn (pin): { userInfo : null }
    userNameDropdown (pin): { show : false }
    userRegister (pin): {}
    userDetails (pin)
        user (pin): {}

*/

// and this is correct so everything is working as expected

// now let's go to the user.actions.js 4 - file

// End of 10 -


/*
// add cartItems to the initialState below
// first, check to make sure cartItems are in local storage and if so then let's get
// the cartItems from local storage otherwise we will just return an empty array
const cartItemsFromLocalStorage = 
    localStorage.getItem( 'cartItems' ) ?
    JSON.parse( localStorage.getItem( 'cartItems' ) ) :
    []


// add userInfo to the initialState below
// first, check to make sure userInfo is in local storage and if so then let's get
// the userInfo from local storage otherwise we will just return null
const userInfoFromLocalStorage = 
    localStorage.getItem( 'userInfo' ) ?
    JSON.parse( localStorage.getItem( 'userInfo' ) ) :
    null


// argument 1 to createStore();
// use combineReducers to combine our reducers and save the result in a const called " reducer "
const reducer = combineReducers( {
    productList      : productListReducer,
    productGet       : productGetReducer,
    cart             : cartReducer,
    userSignIn       : userSignInReducer,
    userNameDropdown : userNameDropdownReducer,
    userRegister     : userRegisterReducer,
    userDetails      : userDetailsReducer
} );


// argument 2 to createStore();
// define initialState to an empty object for now and if we want something to be loaded when the
// redux store initially loads we can add it to the initialState object below
const initialState = {
    cart       : { cartItems : cartItemsFromLocalStorage },
    userSignIn : { userInfo : userInfoFromLocalStorage }
};


// argument 3 to createStore();
// in this case, we will define " ...middleware "
const middleware = [ thunk ];


// create our store
// pass in the reducer, initialState, composeWithDevTools as arguments to createStore();
// and pass in applyMiddleware as an argument to composeWithDevTools()

// and remember the way we implement the store or add the store to our application is through 
// the Provider component
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools( applyMiddleware( ...middleware ) )
);


export default store;
*/

























// ===============================
























/*
// at the beginning of lecture 49, given all the notes, I created a new file below without
// the notes so we are starting fresh

// in this file we will connect all of our reducers and any middleware we might have and let's
// import in createStore, which is a function to create our store and combineReducers and we will
// have a bunch of reducers and each reducer will handle a piece of functionality and we want to
// import in applyMiddleware so we can apply any middleware we need such as thunk
import { createStore, combineReducers, applyMiddleware  } from 'redux';
// import in thunk
import thunk from 'redux-thunk';
// to use the redux-devtools-extension we need to import in composeWithDevTools
import { composeWithDevTools } from 'redux-devtools-extension';
// import in the productListReducer and the productGetReducer
// add the productListReducer to the combineReducers( {} );
import { 
    productListReducer,
    productGetReducer
} from './reducers/product.reducers';
// import in the cartReducer and then add this reducer to the combineReducers() below
import cartReducer from './reducers/cart.reducers';
// import in the userSignInReducer, userNameDropDownReducer, userRegisterReducer,
// userDetailsReducer and then add these reducers to the combineReducers() below


// 11 -
// coming from the user.reducer.js 5 - file
// import in the userUpdateProfileReducer and then add this reducer to the combineReducers() below
import { 
    userSignInReducer,
    userNameDropdownReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer
} from './reducers/user.reducers';


// if we go to the redux dev tools, we see that userDetails is now in our state:

/*
    productList (pin): { products: [] }
    productGet (pin): { product: { ... } }
    cart (pin): { cartItems: [ ... ] }
    userSignIn (pin): { userInfo : null }
    userNameDropdown (pin): { show : false }
    userRegister (pin): {}
    userDetails (pin): { loading : false, user : { ... } }
    userUpdateProfile (pin): {}

*/

// and this is correct so everything is working as expected

// now let's go to the user.actions.js 5 - file

// End of 11 -


// add cartItems to the initialState below
// first, check to make sure cartItems are in local storage and if so then let's get
// the cartItems from local storage otherwise we will just return an empty array
/*
const cartItemsFromLocalStorage = 
    localStorage.getItem( 'cartItems' ) ?
    JSON.parse( localStorage.getItem( 'cartItems' ) ) :
    []


// add userInfo to the initialState below
// first, check to make sure userInfo is in local storage and if so then let's get
// the userInfo from local storage otherwise we will just return null
const userInfoFromLocalStorage = 
    localStorage.getItem( 'userInfo' ) ?
    JSON.parse( localStorage.getItem( 'userInfo' ) ) :
    null


// argument 1 to createStore();
// use combineReducers to combine our reducers and save the result in a const called " reducer "
const reducer = combineReducers( {
    productList       : productListReducer,
    productGet        : productGetReducer,
    cart              : cartReducer,
    userSignIn        : userSignInReducer,
    userNameDropdown  : userNameDropdownReducer,
    userRegister      : userRegisterReducer,
    userDetails       : userDetailsReducer,
    userUpdateProfile : userUpdateProfileReducer
} );


// argument 2 to createStore();
// define initialState to an empty object for now and if we want something to be loaded when the
// redux store initially loads we can add it to the initialState object below
const initialState = {
    cart       : { cartItems : cartItemsFromLocalStorage },
    userSignIn : { userInfo : userInfoFromLocalStorage }
};


// argument 3 to createStore();
// in this case, we will define " ...middleware "
const middleware = [ thunk ];


// create our store
// pass in the reducer, initialState, composeWithDevTools as arguments to createStore();
// and pass in applyMiddleware as an argument to composeWithDevTools()

// and remember the way we implement the store or add the store to our application is through 
// the Provider component
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools( applyMiddleware( ...middleware ) )
);


export default store;
*/

























// ===============================
























/*
// at the beginning of lecture 51, given all the notes, I created a new file below without
// the notes so we are starting fresh

// in this file we will connect all of our reducers and any middleware we might have and let's
// import in createStore, which is a function to create our store and combineReducers and we will
// have a bunch of reducers and each reducer will handle a piece of functionality and we want to
// import in applyMiddleware so we can apply any middleware we need such as thunk
import { createStore, combineReducers, applyMiddleware  } from 'redux';
// import in thunk
import thunk from 'redux-thunk';
// to use the redux-devtools-extension we need to import in composeWithDevTools
import { composeWithDevTools } from 'redux-devtools-extension';
// import in the productListReducer and the productGetReducer
// add the productListReducer to the combineReducers( {} );
import { 
    productListReducer,
    productGetReducer
} from './reducers/product.reducers';
// import in the cartReducer and then add this reducer to the combineReducers() below
import cartReducer from './reducers/cart.reducers';
// import in the userSignInReducer, userNameDropDownReducer, userRegisterReducer,
// userDetailsReducer and the userUpdateProfileReducer and then add these reducers to the
// combineReducers() below
import { 
    userSignInReducer,
    userNameDropdownReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer
} from './reducers/user.reducers';


// add cartItems to the initialState below
// first, check to make sure cartItems are in local storage and if so then let's get
// the cartItems from local storage otherwise we will just return an empty array
const cartItemsFromLocalStorage = 
    localStorage.getItem( 'cartItems' ) ?
    JSON.parse( localStorage.getItem( 'cartItems' ) ) :
    []


// add userInfo to the initialState below
// first, check to make sure userInfo is in local storage and if so then let's get
// the userInfo from local storage otherwise we will just return null
const userInfoFromLocalStorage = 
    localStorage.getItem( 'userInfo' ) ?
    JSON.parse( localStorage.getItem( 'userInfo' ) ) :
    null


// 12 -
// coming from the cart.reducer.js 12 - file

// add shippingAddress to the initialState below
// first, check to make sure shippingAddress is in local storage and if so then let's get
// the shippingAddress from local storage otherwise we will just return an empty object
const shippingAddressFromLocalStorage = 
    localStorage.getItem( 'shippingAddress' ) ?
    JSON.parse( localStorage.getItem( 'shippingAddress' ) ) :
    {}

// now let's go back to the shipping-screen.component.jsx 3 - filw

// End of 12 -


// argument 1 to createStore();
// use combineReducers to combine our reducers and save the result in a const called " reducer "
const reducer = combineReducers( {
    productList       : productListReducer,
    productGet        : productGetReducer,
    cart              : cartReducer,
    userSignIn        : userSignInReducer,
    userNameDropdown  : userNameDropdownReducer,
    userRegister      : userRegisterReducer,
    userDetails       : userDetailsReducer,
    userUpdateProfile : userUpdateProfileReducer
} );


// argument 2 to createStore();
// define initialState to an empty object for now and if we want something to be loaded when the
// redux store initially loads we can add it to the initialState object below
const initialState = {
    cart : {
        cartItems       : cartItemsFromLocalStorage,
        shippingAddress : shippingAddressFromLocalStorage
    },
    userSignIn : { 
        userInfo : userInfoFromLocalStorage
    }
};


// argument 3 to createStore();
// in this case, we will define " ...middleware "
const middleware = [ thunk ];


// create our store
// pass in the reducer, initialState, composeWithDevTools as arguments to createStore();
// and pass in applyMiddleware as an argument to composeWithDevTools()

// and remember the way we implement the store or add the store to our application is through 
// the Provider component
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools( applyMiddleware( ...middleware ) )
);


export default store;
*/

























// ===============================
























/*
// at the beginning of lecture 52, given all the notes, I created a new file below without
// the notes so we are starting fresh

// in this file we will connect all of our reducers and any middleware we might have and let's
// import in createStore, which is a function to create our store and combineReducers and we will
// have a bunch of reducers and each reducer will handle a piece of functionality and we want to
// import in applyMiddleware so we can apply any middleware we need such as thunk
import { createStore, combineReducers, applyMiddleware  } from 'redux';
// import in thunk
import thunk from 'redux-thunk';
// to use the redux-devtools-extension we need to import in composeWithDevTools
import { composeWithDevTools } from 'redux-devtools-extension';
// import in the productListReducer and the productGetReducer
// add the productListReducer to the combineReducers( {} );
import { 
    productListReducer,
    productGetReducer
} from './reducers/product.reducers';
// import in the cartReducer and then add this reducer to the combineReducers() below
import cartReducer from './reducers/cart.reducers';
// import in the userSignInReducer, userNameDropDownReducer, userRegisterReducer,
// userDetailsReducer and the userUpdateProfileReducer and then add these reducers to the
// combineReducers() below
import { 
    userSignInReducer,
    userNameDropdownReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer
} from './reducers/user.reducers';


// add cartItems to the initialState below
// first, check to make sure cartItems are in local storage and if so then let's get
// the cartItems from local storage otherwise we will just return an empty array
const cartItemsFromLocalStorage = 
    localStorage.getItem( 'cartItems' ) ?
    JSON.parse( localStorage.getItem( 'cartItems' ) ) :
    []


// add userInfo to the initialState below
// first, check to make sure userInfo is in local storage and if so then let's get
// the userInfo from local storage otherwise we will just return null
const userInfoFromLocalStorage = 
    localStorage.getItem( 'userInfo' ) ?
    JSON.parse( localStorage.getItem( 'userInfo' ) ) :
    null


// add shippingAddress to the initialState below
// first, check to make sure shippingAddress is in local storage and if so then let's get
// the shippingAddress from local storage otherwise we will just return an empty object
const shippingAddressFromLocalStorage = 
    localStorage.getItem( 'shippingAddress' ) ?
    JSON.parse( localStorage.getItem( 'shippingAddress' ) ) :
    {}


// 13 -
// add paymentMethod to the initialState below
// first, check to make sure paymentMethod is in local storage and if so then let's get
// the paymentMethod from local storage otherwise we will return an empty object
const paymentMethodFromLocalStorage = 
    localStorage.getItem( 'paymentMethod' ) ?
    JSON.parse( localStorage.getItem( 'paymentMethod' ) ) :
    {}

// so now we have the shipping screen and the payment screen and the next step would be to
// create the place order screen and remember when the user clicks to place an order the
// application will create a new order but in order for us to create that new order we will
// need a corresponding route to handle the order so after we create the place order screen
// we will go to the backend and create an order route  

// End of 13 -


// argument 1 to createStore();
// use combineReducers to combine our reducers and save the result in a const called " reducer "
const reducer = combineReducers( {
    productList       : productListReducer,
    productGet        : productGetReducer,
    cart              : cartReducer,
    userSignIn        : userSignInReducer,
    userNameDropdown  : userNameDropdownReducer,
    userRegister      : userRegisterReducer,
    userDetails       : userDetailsReducer,
    userUpdateProfile : userUpdateProfileReducer
} );


// argument 2 to createStore();
// define initialState to an empty object for now and if we want something to be loaded when the
// redux store initially loads we can add it to the initialState object below
const initialState = {
    cart : {
        cartItems       : cartItemsFromLocalStorage,
        shippingAddress : shippingAddressFromLocalStorage,
        paymentMethod   : paymentMethodFromLocalStorage
    },
    userSignIn : { 
        userInfo : userInfoFromLocalStorage
    }
};


// argument 3 to createStore();
// in this case, we will define " ...middleware "
const middleware = [ thunk ];


// create our store
// pass in the reducer, initialState, composeWithDevTools as arguments to createStore();
// and pass in applyMiddleware as an argument to composeWithDevTools()

// and remember the way we implement the store or add the store to our application is through 
// the Provider component
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools( applyMiddleware( ...middleware ) )
);


export default store;
*/

























// ===============================
























/*
// at the beginning of lecture 54, given all the notes, I created a new file below without
// the notes so we are starting fresh

// in this file we will connect all of our reducers and any middleware we might have and let's
// import in createStore, which is a function to create our store and combineReducers and we will
// have a bunch of reducers and each reducer will handle a piece of functionality and we want to
// import in applyMiddleware so we can apply any middleware we need such as thunk
import { createStore, combineReducers, applyMiddleware  } from 'redux';
// import in thunk
import thunk from 'redux-thunk';
// to use the redux-devtools-extension we need to import in composeWithDevTools
import { composeWithDevTools } from 'redux-devtools-extension';
// import in the productListReducer and the productGetReducer
// add the productListReducer to the combineReducers( {} );
import { 
    productListReducer,
    productGetReducer
} from './reducers/product.reducers';
// import in the cartReducer and then add this reducer to the combineReducers() below
import cartReducer from './reducers/cart.reducers';
// import in the userSignInReducer, userNameDropDownReducer, userRegisterReducer,
// userDetailsReducer and the userUpdateProfileReducer and then add these reducers to the
// combineReducers() below
import { 
    userSignInReducer,
    userNameDropdownReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer
} from './reducers/user.reducers';


// 14 -
// coming from the order.reducers.js 1 - file

// import in the orderCreateReducer and then add this reducer to the combineReducers() below
import { orderCreateReducer } from './reducers/order.reducers';

// and now let's go to the order.actions.js 1 - file

// End of 14 -


// add cartItems to the initialState below
// first, check to make sure cartItems are in local storage and if so then let's get
// the cartItems from local storage otherwise we will just return an empty array
const cartItemsFromLocalStorage = 
    localStorage.getItem( 'cartItems' ) ?
    JSON.parse( localStorage.getItem( 'cartItems' ) ) :
    []


// add userInfo to the initialState below
// first, check to make sure userInfo is in local storage and if so then let's get
// the userInfo from local storage otherwise we will just return null
const userInfoFromLocalStorage = 
    localStorage.getItem( 'userInfo' ) ?
    JSON.parse( localStorage.getItem( 'userInfo' ) ) :
    null


// add shippingAddress to the initialState below
// first, check to make sure shippingAddress is in local storage and if so then let's get
// the shippingAddress from local storage otherwise we will just return an empty object
const shippingAddressFromLocalStorage = 
    localStorage.getItem( 'shippingAddress' ) ?
    JSON.parse( localStorage.getItem( 'shippingAddress' ) ) :
    {}


// add paymentMethod to the initialState below
// first, check to make sure paymentMethod is in local storage and if so then let's get
// the paymentMethod from local storage otherwise we will return an empty object
const paymentMethodFromLocalStorage = 
    localStorage.getItem( 'paymentMethod' ) ?
    JSON.parse( localStorage.getItem( 'paymentMethod' ) ) :
    {}


// argument 1 to createStore();
// use combineReducers to combine our reducers and save the result in a const called " reducer "
const reducer = combineReducers( {
    productList       : productListReducer,
    productGet        : productGetReducer,
    cart              : cartReducer,
    userSignIn        : userSignInReducer,
    userNameDropdown  : userNameDropdownReducer,
    userRegister      : userRegisterReducer,
    userDetails       : userDetailsReducer,
    userUpdateProfile : userUpdateProfileReducer,
    orderCreate       : orderCreateReducer
} );


// argument 2 to createStore();
// define initialState to an empty object for now and if we want something to be loaded when the
// redux store initially loads we can add it to the initialState object below
const initialState = {
    cart : {
        cartItems       : cartItemsFromLocalStorage,
        shippingAddress : shippingAddressFromLocalStorage,
        paymentMethod   : paymentMethodFromLocalStorage
    },
    userSignIn : { 
        userInfo : userInfoFromLocalStorage
    }
};


// argument 3 to createStore();
// in this case, we will define " ...middleware "
const middleware = [ thunk ];


// create our store
// pass in the reducer, initialState, composeWithDevTools as arguments to createStore();
// and pass in applyMiddleware as an argument to composeWithDevTools()

// and remember the way we implement the store or add the store to our application is through 
// the Provider component
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools( applyMiddleware( ...middleware ) )
);


export default store;
*/

























// ===============================
























/*
// at the beginning of lecture 57, given all the notes, I created a new file below without
// the notes so we are starting fresh

// in this file we will connect all of our reducers and any middleware we might have and let's
// import in createStore, which is a function to create our store and combineReducers and we will
// have a bunch of reducers and each reducer will handle a piece of functionality and we want to
// import in applyMiddleware so we can apply any middleware we need such as thunk
import { createStore, combineReducers, applyMiddleware  } from 'redux';
// import in thunk
import thunk from 'redux-thunk';
// to use the redux-devtools-extension we need to import in composeWithDevTools
import { composeWithDevTools } from 'redux-devtools-extension';
// import in the productListReducer and the productGetReducer
// add the productListReducer to the combineReducers( {} );
import { 
    productListReducer,
    productGetReducer
} from './reducers/product.reducers';
// import in the cartReducer and then add this reducer to the combineReducers() below
import cartReducer from './reducers/cart.reducers';
// import in the userSignInReducer, userNameDropDownReducer, userRegisterReducer,
// userDetailsReducer and the userUpdateProfileReducer and then add these reducers to the
// combineReducers() below
import { 
    userSignInReducer,
    userNameDropdownReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer
} from './reducers/user.reducers';


// 15 -
// coming from the order.reducers.js 2 - file

// import in the orderCreateReducer, orderGetReducer and then add these reducers to the
// combineReducers() below
import { 
    orderCreateReducer,
    orderGetReducer
} from './reducers/order.reducers';

// and now let's go to the order.actions.js 2 - file

// End of 15 -


// add cartItems to the initialState below
// first, check to make sure cartItems are in local storage and if so then let's get
// the cartItems from local storage otherwise we will just return an empty array
const cartItemsFromLocalStorage = 
    localStorage.getItem( 'cartItems' ) ?
    JSON.parse( localStorage.getItem( 'cartItems' ) ) :
    []


// add userInfo to the initialState below
// first, check to make sure userInfo is in local storage and if so then let's get
// the userInfo from local storage otherwise we will just return null
const userInfoFromLocalStorage = 
    localStorage.getItem( 'userInfo' ) ?
    JSON.parse( localStorage.getItem( 'userInfo' ) ) :
    null


// add shippingAddress to the initialState below
// first, check to make sure shippingAddress is in local storage and if so then let's get
// the shippingAddress from local storage otherwise we will just return an empty object
const shippingAddressFromLocalStorage = 
    localStorage.getItem( 'shippingAddress' ) ?
    JSON.parse( localStorage.getItem( 'shippingAddress' ) ) :
    {}


// add paymentMethod to the initialState below
// first, check to make sure paymentMethod is in local storage and if so then let's get
// the paymentMethod from local storage otherwise we will return an empty object
const paymentMethodFromLocalStorage = 
    localStorage.getItem( 'paymentMethod' ) ?
    JSON.parse( localStorage.getItem( 'paymentMethod' ) ) :
    {}


// argument 1 to createStore();
// use combineReducers to combine our reducers and save the result in a const called " reducer "
const reducer = combineReducers( {
    productList       : productListReducer,
    productGet        : productGetReducer,
    cart              : cartReducer,
    userSignIn        : userSignInReducer,
    userNameDropdown  : userNameDropdownReducer,
    userRegister      : userRegisterReducer,
    userDetails       : userDetailsReducer,
    userUpdateProfile : userUpdateProfileReducer,
    orderCreate       : orderCreateReducer,
    orderGet          : orderGetReducer
} );


// argument 2 to createStore();
// define initialState to an empty object for now and if we want something to be loaded when the
// redux store initially loads we can add it to the initialState object below
const initialState = {
    cart : {
        cartItems       : cartItemsFromLocalStorage,
        shippingAddress : shippingAddressFromLocalStorage,
        paymentMethod   : paymentMethodFromLocalStorage
    },
    userSignIn : { 
        userInfo : userInfoFromLocalStorage
    }
};


// argument 3 to createStore();
// in this case, we will define " ...middleware "
const middleware = [ thunk ];


// create our store
// pass in the reducer, initialState, composeWithDevTools as arguments to createStore();
// and pass in applyMiddleware as an argument to composeWithDevTools()

// and remember the way we implement the store or add the store to our application is through 
// the Provider component
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools( applyMiddleware( ...middleware ) )
);


export default store;
*/

























// ===============================
























/*
// at the beginning of lecture 59, given all the notes, I created a new file below without
// the notes so we are starting fresh

// in this file we will connect all of our reducers and any middleware we might have and let's
// import in createStore, which is a function to create our store and combineReducers and we will
// have a bunch of reducers and each reducer will handle a piece of functionality and we want to
// import in applyMiddleware so we can apply any middleware we need such as thunk
import { createStore, combineReducers, applyMiddleware  } from 'redux';
// import in thunk
import thunk from 'redux-thunk';
// to use the redux-devtools-extension we need to import in composeWithDevTools
import { composeWithDevTools } from 'redux-devtools-extension';
// import in the productListReducer and the productGetReducer
// add the productListReducer to the combineReducers( {} );
import { 
    productListReducer,
    productGetReducer
} from './reducers/product.reducers';
// import in the cartReducer and then add this reducer to the combineReducers() below
import cartReducer from './reducers/cart.reducers';
// import in the userSignInReducer, userNameDropDownReducer, userRegisterReducer,
// userDetailsReducer and the userUpdateProfileReducer and then add these reducers to the
// combineReducers() below
import { 
    userSignInReducer,
    userNameDropdownReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer
} from './reducers/user.reducers';


// 16 -

// import in the orderCreateReducer, orderGetReducer, orderPayReducer and then add these
// reducers to the combineReducers() below
import { 
    orderCreateReducer,
    orderGetReducer,
    orderPayReducer
} from './reducers/order.reducers';

// now let's go to the order.actions.js 3 - file

// End of 16 -


// add cartItems to the initialState below
// first, check to make sure cartItems are in local storage and if so then let's get
// the cartItems from local storage otherwise we will just return an empty array
const cartItemsFromLocalStorage = 
    localStorage.getItem( 'cartItems' ) ?
    JSON.parse( localStorage.getItem( 'cartItems' ) ) :
    []


// add userInfo to the initialState below
// first, check to make sure userInfo is in local storage and if so then let's get
// the userInfo from local storage otherwise we will just return null
const userInfoFromLocalStorage = 
    localStorage.getItem( 'userInfo' ) ?
    JSON.parse( localStorage.getItem( 'userInfo' ) ) :
    null


// add shippingAddress to the initialState below
// first, check to make sure shippingAddress is in local storage and if so then let's get
// the shippingAddress from local storage otherwise we will just return an empty object
const shippingAddressFromLocalStorage = 
    localStorage.getItem( 'shippingAddress' ) ?
    JSON.parse( localStorage.getItem( 'shippingAddress' ) ) :
    {}


// add paymentMethod to the initialState below
// first, check to make sure paymentMethod is in local storage and if so then let's get
// the paymentMethod from local storage otherwise we will return an empty object
const paymentMethodFromLocalStorage = 
    localStorage.getItem( 'paymentMethod' ) ?
    JSON.parse( localStorage.getItem( 'paymentMethod' ) ) :
    {}


// argument 1 to createStore();
// use combineReducers to combine our reducers and save the result in a const called " reducer "
const reducer = combineReducers( {
    productList       : productListReducer,
    productGet        : productGetReducer,
    cart              : cartReducer,
    userSignIn        : userSignInReducer,
    userNameDropdown  : userNameDropdownReducer,
    userRegister      : userRegisterReducer,
    userDetails       : userDetailsReducer,
    userUpdateProfile : userUpdateProfileReducer,
    orderCreate       : orderCreateReducer,
    orderGet          : orderGetReducer,
    orderPay          : orderPayReducer
} );


// argument 2 to createStore();
// define initialState to an empty object for now and if we want something to be loaded when the
// redux store initially loads we can add it to the initialState object below
const initialState = {
    cart : {
        cartItems       : cartItemsFromLocalStorage,
        shippingAddress : shippingAddressFromLocalStorage,
        paymentMethod   : paymentMethodFromLocalStorage
    },
    userSignIn : { 
        userInfo : userInfoFromLocalStorage
    }
};


// argument 3 to createStore();
// in this case, we will define " ...middleware "
const middleware = [ thunk ];


// create our store
// pass in the reducer, initialState, composeWithDevTools as arguments to createStore();
// and pass in applyMiddleware as an argument to composeWithDevTools()

// and remember the way we implement the store or add the store to our application is through 
// the Provider component
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools( applyMiddleware( ...middleware ) )
);


export default store;
*/
























// ===============================
























/*
// at the beginning of lecture 59, given all the notes, I created a new file below without
// the notes so we are starting fresh

// in this file we will connect all of our reducers and any middleware we might have and let's
// import in createStore, which is a function to create our store and combineReducers and we will
// have a bunch of reducers and each reducer will handle a piece of functionality and we want to
// import in applyMiddleware so we can apply any middleware we need such as thunk
import { createStore, combineReducers, applyMiddleware  } from 'redux';
// import in thunk
import thunk from 'redux-thunk';
// to use the redux-devtools-extension we need to import in composeWithDevTools
import { composeWithDevTools } from 'redux-devtools-extension';
// import in the productListReducer and the productGetReducer
// add the productListReducer to the combineReducers( {} );
import { 
    productListReducer,
    productGetReducer
} from './reducers/product.reducers';
// import in the cartReducer and then add this reducer to the combineReducers() below
import cartReducer from './reducers/cart.reducers';
// import in the userSignInReducer, userNameDropDownReducer, userRegisterReducer,
// userDetailsReducer and the userUpdateProfileReducer and then add these reducers to the
// combineReducers() below
import { 
    userSignInReducer,
    userNameDropdownReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer
} from './reducers/user.reducers';


// 17 -

// import in the orderCreateReducer, orderGetReducer, orderPayReducer, orderListMyReducer
// and then add these reducers to the combineReducers() below
import { 
    orderCreateReducer,
    orderGetReducer,
    orderPayReducer,
    orderListMyReducer
} from './reducers/order.reducers';

// now let's go to the order.actions.js 4 - file

// End of 17 -


// add cartItems to the initialState below
// first, check to make sure cartItems are in local storage and if so then let's get
// the cartItems from local storage otherwise we will just return an empty array
const cartItemsFromLocalStorage = 
    localStorage.getItem( 'cartItems' ) ?
    JSON.parse( localStorage.getItem( 'cartItems' ) ) :
    []


// add userInfo to the initialState below
// first, check to make sure userInfo is in local storage and if so then let's get
// the userInfo from local storage otherwise we will just return null
const userInfoFromLocalStorage = 
    localStorage.getItem( 'userInfo' ) ?
    JSON.parse( localStorage.getItem( 'userInfo' ) ) :
    null


// add shippingAddress to the initialState below
// first, check to make sure shippingAddress is in local storage and if so then let's get
// the shippingAddress from local storage otherwise we will just return an empty object
const shippingAddressFromLocalStorage = 
    localStorage.getItem( 'shippingAddress' ) ?
    JSON.parse( localStorage.getItem( 'shippingAddress' ) ) :
    {}


// add paymentMethod to the initialState below
// first, check to make sure paymentMethod is in local storage and if so then let's get
// the paymentMethod from local storage otherwise we will return an empty object
const paymentMethodFromLocalStorage = 
    localStorage.getItem( 'paymentMethod' ) ?
    JSON.parse( localStorage.getItem( 'paymentMethod' ) ) :
    {}


// argument 1 to createStore();
// use combineReducers to combine our reducers and save the result in a const called " reducer "
const reducer = combineReducers( {
    productList       : productListReducer,
    productGet        : productGetReducer,
    cart              : cartReducer,
    userSignIn        : userSignInReducer,
    userNameDropdown  : userNameDropdownReducer,
    userRegister      : userRegisterReducer,
    userDetails       : userDetailsReducer,
    userUpdateProfile : userUpdateProfileReducer,
    orderCreate       : orderCreateReducer,
    orderGet          : orderGetReducer,
    orderPay          : orderPayReducer,
    orderListMy       : orderListMyReducer
} );


// argument 2 to createStore();
// define initialState to an empty object for now and if we want something to be loaded when the
// redux store initially loads we can add it to the initialState object below
const initialState = {
    cart : {
        cartItems       : cartItemsFromLocalStorage,
        shippingAddress : shippingAddressFromLocalStorage,
        paymentMethod   : paymentMethodFromLocalStorage
    },
    userSignIn : { 
        userInfo : userInfoFromLocalStorage
    }
};


// argument 3 to createStore();
// in this case, we will define " ...middleware "
const middleware = [ thunk ];


// create our store
// pass in the reducer, initialState, composeWithDevTools as arguments to createStore();
// and pass in applyMiddleware as an argument to composeWithDevTools()

// and remember the way we implement the store or add the store to our application is through 
// the Provider component
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools( applyMiddleware( ...middleware ) )
);


export default store;
*/

























// ===============================
























/*
// at the beginning of lecture 65, given all the notes, I created a new file below without
// the notes so we are starting fresh

// in this file we will connect all of our reducers and any middleware we might have and let's
// import in createStore, which is a function to create our store and combineReducers and we will
// have a bunch of reducers and each reducer will handle a piece of functionality and we want to
// import in applyMiddleware so we can apply any middleware we need such as thunk
import { createStore, combineReducers, applyMiddleware  } from 'redux';
// import in thunk
import thunk from 'redux-thunk';
// to use the redux-devtools-extension we need to import in composeWithDevTools
import { composeWithDevTools } from 'redux-devtools-extension';
// import in the productListReducer and the productGetReducer
// add the productListReducer to the combineReducers( {} );
import { 
    productListReducer,
    productGetReducer
} from './reducers/product.reducers';
// import in the cartReducer and then add this reducer to the combineReducers() below
import cartReducer from './reducers/cart.reducers';


// 18 -
//coming from the user.actions.js 7 - file

// import in the userSignInReducer, userNameDropDownReducer, userRegisterReducer,
// userDetailsReducer, userListReducer and the userUpdateProfileReducer and then add
// these reducers to the combineReducers() below
import { 
    userSignInReducer,
    userDropdownReducer,
    adminDropdownReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userListReducer
} from './reducers/user.reducers';

// now let's go to the admin-user-list-screen.component.jsx 1 - file

// End of 18 -


// import in the orderCreateReducer, orderGetReducer, orderPayReducer, orderListMyReducer
// and then add these reducers to the combineReducers() below
import { 
    orderCreateReducer,
    orderGetReducer,
    orderPayReducer,
    orderListMyReducer
} from './reducers/order.reducers';


// add cartItems to the initialState below
// first, check to make sure cartItems are in local storage and if so then let's get
// the cartItems from local storage otherwise we will just return an empty array
const cartItemsFromLocalStorage = 
    localStorage.getItem( 'cartItems' ) ?
    JSON.parse( localStorage.getItem( 'cartItems' ) ) :
    []


// add userInfo to the initialState below
// first, check to make sure userInfo is in local storage and if so then let's get
// the userInfo from local storage otherwise we will just return null
const userInfoFromLocalStorage = 
    localStorage.getItem( 'userInfo' ) ?
    JSON.parse( localStorage.getItem( 'userInfo' ) ) :
    null


// add shippingAddress to the initialState below
// first, check to make sure shippingAddress is in local storage and if so then let's get
// the shippingAddress from local storage otherwise we will just return an empty object
const shippingAddressFromLocalStorage = 
    localStorage.getItem( 'shippingAddress' ) ?
    JSON.parse( localStorage.getItem( 'shippingAddress' ) ) :
    {}


// add paymentMethod to the initialState below
// first, check to make sure paymentMethod is in local storage and if so then let's get
// the paymentMethod from local storage otherwise we will return an empty object
const paymentMethodFromLocalStorage = 
    localStorage.getItem( 'paymentMethod' ) ?
    JSON.parse( localStorage.getItem( 'paymentMethod' ) ) :
    {}


// argument 1 to createStore();
// use combineReducers to combine our reducers and save the result in a const called " reducer "
const reducer = combineReducers( {
    productList       : productListReducer,
    productGet        : productGetReducer,
    cart              : cartReducer,
    userSignIn        : userSignInReducer,
    userDropdown      : userDropdownReducer,
    adminDropdown     : adminDropdownReducer,
    userRegister      : userRegisterReducer,
    userDetails       : userDetailsReducer,
    userUpdateProfile : userUpdateProfileReducer,
    orderCreate       : orderCreateReducer,
    orderGet          : orderGetReducer,
    orderPay          : orderPayReducer,
    orderListMy       : orderListMyReducer,
    userList          : userListReducer
} );


// argument 2 to createStore();
// define initialState to an empty object for now and if we want something to be loaded when the
// redux store initially loads we can add it to the initialState object below
const initialState = {
    cart : {
        cartItems       : cartItemsFromLocalStorage,
        shippingAddress : shippingAddressFromLocalStorage,
        paymentMethod   : paymentMethodFromLocalStorage
    },
    userSignIn : { 
        userInfo : userInfoFromLocalStorage
    }
};


// argument 3 to createStore();
// in this case, we will define " ...middleware "
const middleware = [ thunk ];


// create our store
// pass in the reducer, initialState, composeWithDevTools as arguments to createStore();
// and pass in applyMiddleware as an argument to composeWithDevTools()

// and remember the way we implement the store or add the store to our application is through 
// the Provider component
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools( applyMiddleware( ...middleware ) )
);


export default store;
*/


























// ===============================
























/*
// at the beginning of lecture 68, given all the notes, I created a new file below without
// the notes so we are starting fresh

// in this file we will connect all of our reducers and any middleware we might have and let's
// import in createStore, which is a function to create our store and combineReducers and we will
// have a bunch of reducers and each reducer will handle a piece of functionality and we want to
// import in applyMiddleware so we can apply any middleware we need such as thunk
import { createStore, combineReducers, applyMiddleware  } from 'redux';
// import in thunk
import thunk from 'redux-thunk';
// to use the redux-devtools-extension we need to import in composeWithDevTools
import { composeWithDevTools } from 'redux-devtools-extension';
// import in the productListReducer and the productGetReducer
// add the productListReducer to the combineReducers( {} );
import { 
    productListReducer,
    productGetReducer
} from './reducers/product.reducers';
// import in the cartReducer and then add this reducer to the combineReducers() below
import cartReducer from './reducers/cart.reducers';


// 19 -
// coming from the user.reducers.js 10 - file

// import in the userSignInReducer, userNameDropDownReducer, userRegisterReducer,
// userDetailsReducer, userUpdateProfileReducer, userListReducer and the userDeleteReducer
// and then add these reducers to the combineReducers() below
import {
    userSignInReducer,
    userDropdownReducer,
    adminDropdownReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userListReducer,
    userDeleteReducer
} from './reducers/user.reducers';

// now let's go to the user.actions.js 9 - file

// End of 19 -


// import in the orderCreateReducer, orderGetReducer, orderPayReducer, orderListMyReducer
// and then add these reducers to the combineReducers() below
import { 
    orderCreateReducer,
    orderGetReducer,
    orderPayReducer,
    orderListMyReducer
} from './reducers/order.reducers';


// add cartItems to the initialState below
// first, check to make sure cartItems are in local storage and if so then let's get
// the cartItems from local storage otherwise we will just return an empty array
const cartItemsFromLocalStorage = 
    localStorage.getItem( 'cartItems' ) ?
    JSON.parse( localStorage.getItem( 'cartItems' ) ) :
    []


// add userInfo to the initialState below
// first, check to make sure userInfo is in local storage and if so then let's get
// the userInfo from local storage otherwise we will just return null
const userInfoFromLocalStorage = 
    localStorage.getItem( 'userInfo' ) ?
    JSON.parse( localStorage.getItem( 'userInfo' ) ) :
    null


// add shippingAddress to the initialState below
// first, check to make sure shippingAddress is in local storage and if so then let's get
// the shippingAddress from local storage otherwise we will just return an empty object
const shippingAddressFromLocalStorage = 
    localStorage.getItem( 'shippingAddress' ) ?
    JSON.parse( localStorage.getItem( 'shippingAddress' ) ) :
    {}


// add paymentMethod to the initialState below
// first, check to make sure paymentMethod is in local storage and if so then let's get
// the paymentMethod from local storage otherwise we will return an empty object
const paymentMethodFromLocalStorage = 
    localStorage.getItem( 'paymentMethod' ) ?
    JSON.parse( localStorage.getItem( 'paymentMethod' ) ) :
    {}


// argument 1 to createStore();
// use combineReducers to combine our reducers and save the result in a const called " reducer "
const reducer = combineReducers( {
    productList       : productListReducer,
    productGet        : productGetReducer,
    cart              : cartReducer,
    userSignIn        : userSignInReducer,
    userDropdown      : userDropdownReducer,
    adminDropdown     : adminDropdownReducer,
    userRegister      : userRegisterReducer,
    userDetails       : userDetailsReducer,
    userUpdateProfile : userUpdateProfileReducer,
    userList          : userListReducer,
    userDelete        : userDeleteReducer,    
    orderCreate       : orderCreateReducer,
    orderGet          : orderGetReducer,
    orderPay          : orderPayReducer,
    orderListMy       : orderListMyReducer
} );


// argument 2 to createStore();
// define initialState to an empty object for now and if we want something to be loaded when the
// redux store initially loads we can add it to the initialState object below
const initialState = {
    cart : {
        cartItems       : cartItemsFromLocalStorage,
        shippingAddress : shippingAddressFromLocalStorage,
        paymentMethod   : paymentMethodFromLocalStorage
    },
    userSignIn : { 
        userInfo : userInfoFromLocalStorage
    }
};


// argument 3 to createStore();
// in this case, we will define " ...middleware "
const middleware = [ thunk ];


// create our store
// pass in the reducer, initialState, composeWithDevTools as arguments to createStore();
// and pass in applyMiddleware as an argument to composeWithDevTools()

// and remember the way we implement the store or add the store to our application is through 
// the Provider component
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools( applyMiddleware( ...middleware ) )
);


export default store;
*/



























// ===============================
























/*
// at the beginning of lecture 70, given all the notes, I created a new file below without
// the notes so we are starting fresh

// in this file we will connect all of our reducers and any middleware we might have and let's
// import in createStore, which is a function to create our store and combineReducers and we will
// have a bunch of reducers and each reducer will handle a piece of functionality and we want to
// import in applyMiddleware so we can apply any middleware we need such as thunk
import { createStore, combineReducers, applyMiddleware  } from 'redux';
// import in thunk
import thunk from 'redux-thunk';
// to use the redux-devtools-extension we need to import in composeWithDevTools
import { composeWithDevTools } from 'redux-devtools-extension';
// import in the productListReducer and the productGetReducer
// add the productListReducer to the combineReducers( {} );
import { 
    productListReducer,
    productGetReducer
} from './reducers/product.reducers';
// import in the cartReducer and then add this reducer to the combineReducers() below
import cartReducer from './reducers/cart.reducers';

// 20 -

// import in the userSignInReducer, userNameDropDownReducer, userRegisterReducer,
// userGetProfileReducer, userUpdateProfileReducer, userListAdminReducer, userDeleteAdminReducer
// and userGetAdminReducer and then add these reducers to the combineReducers() below
import {
    userSignInReducer,
    userDropdownReducer,
    adminDropdownReducer,
    userRegisterReducer,
    userGetProfileReducer,
    userUpdateProfileReducer,
    userListAdminReducer,
    userDeleteAdminReducer,
    userGetAdminReducer
} from './reducers/user.reducers';

// now let's go to the admin-user-edit-screen.component.jsx 1 - file

// End of 20 -


// import in the orderCreateReducer, orderGetReducer, orderPayReducer, orderListMyReducer
// and then add these reducers to the combineReducers() below
import { 
    orderCreateReducer,
    orderGetReducer,
    orderPayReducer,
    orderListMyReducer
} from './reducers/order.reducers';


// add cartItems to the initialState below
// first, check to make sure cartItems are in local storage and if so then let's get
// the cartItems from local storage otherwise we will just return an empty array
const cartItemsFromLocalStorage = 
    localStorage.getItem( 'cartItems' ) ?
    JSON.parse( localStorage.getItem( 'cartItems' ) ) :
    []


// add userInfo to the initialState below
// first, check to make sure userInfo is in local storage and if so then let's get
// the userInfo from local storage otherwise we will just return null
const userInfoFromLocalStorage = 
    localStorage.getItem( 'userInfo' ) ?
    JSON.parse( localStorage.getItem( 'userInfo' ) ) :
    null


// add shippingAddress to the initialState below
// first, check to make sure shippingAddress is in local storage and if so then let's get
// the shippingAddress from local storage otherwise we will just return an empty object
const shippingAddressFromLocalStorage = 
    localStorage.getItem( 'shippingAddress' ) ?
    JSON.parse( localStorage.getItem( 'shippingAddress' ) ) :
    {}


// add paymentMethod to the initialState below
// first, check to make sure paymentMethod is in local storage and if so then let's get
// the paymentMethod from local storage otherwise we will return an empty object
const paymentMethodFromLocalStorage = 
    localStorage.getItem( 'paymentMethod' ) ?
    JSON.parse( localStorage.getItem( 'paymentMethod' ) ) :
    {}


// argument 1 to createStore();
// use combineReducers to combine our reducers and save the result in a const called " reducer "
const reducer = combineReducers( {
    productList       : productListReducer,
    productGet        : productGetReducer,
    cart              : cartReducer,
    userSignIn        : userSignInReducer,
    userDropdown      : userDropdownReducer,
    adminDropdown     : adminDropdownReducer,
    userRegister      : userRegisterReducer,
    userGetProfile    : userGetProfileReducer,
    userUpdateProfile : userUpdateProfileReducer,
    userListAdmin     : userListAdminReducer,
    userDeleteAdmin   : userDeleteAdminReducer,
    userGetAdmin      : userGetAdminReducer,
    orderCreate       : orderCreateReducer,
    orderGet          : orderGetReducer,
    orderPay          : orderPayReducer,
    orderListMy       : orderListMyReducer
} );


// argument 2 to createStore();
// define initialState to an empty object for now and if we want something to be loaded when the
// redux store initially loads we can add it to the initialState object below
const initialState = {
    cart : {
        cartItems       : cartItemsFromLocalStorage,
        shippingAddress : shippingAddressFromLocalStorage,
        paymentMethod   : paymentMethodFromLocalStorage
    },
    userSignIn : { 
        userInfo : userInfoFromLocalStorage
    }
};


// argument 3 to createStore();
// in this case, we will define " ...middleware "
const middleware = [ thunk ];


// create our store
// pass in the reducer, initialState, composeWithDevTools as arguments to createStore();
// and pass in applyMiddleware as an argument to composeWithDevTools()

// and remember the way we implement the store or add the store to our application is through 
// the Provider component
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools( applyMiddleware( ...middleware ) )
);


export default store;
*/



























// ===============================
























/*
// at the beginning of lecture 72, given all the notes, I created a new file below without
// the notes so we are starting fresh

// in this file we will connect all of our reducers and any middleware we might have and let's
// import in createStore, which is a function to create our store and combineReducers and we will
// have a bunch of reducers and each reducer will handle a piece of functionality and we want to
// import in applyMiddleware so we can apply any middleware we need such as thunk
import { createStore, combineReducers, applyMiddleware  } from 'redux';
// import in thunk
import thunk from 'redux-thunk';
// to use the redux-devtools-extension we need to import in composeWithDevTools
import { composeWithDevTools } from 'redux-devtools-extension';
// import in the productListReducer and the productGetReducer
// add the productListReducer to the combineReducers( {} );
import { 
    productListReducer,
    productGetReducer
} from './reducers/product.reducers';
// import in the cartReducer and then add this reducer to the combineReducers() below
import cartReducer from './reducers/cart.reducers';


// 21 -
// coming from the user.reducers.js 10 - file

// import in the userSignInReducer, userNameDropDownReducer, userRegisterReducer,
// userGetProfileReducer, userUpdateProfileReducer, userListAdminReducer, userDeleteAdminReducer,
// userGetAdminReducer and userUpdateAdminReducer and then add these reducers to the
// combineReducers() below
import {
    userSignInReducer,
    userDropdownReducer,
    adminDropdownReducer,
    userRegisterReducer,
    userGetProfileReducer,
    userUpdateProfileReducer,
    userListAdminReducer,
    userDeleteAdminReducer,
    userGetAdminReducer,
    userUpdateAdminReducer
} from './reducers/user.reducers';

// now let's go to the admin-user-edit-screen 2 - file

// End of 21 -


// import in the orderCreateReducer, orderGetReducer, orderPayReducer, orderListMyReducer
// and then add these reducers to the combineReducers() below
import { 
    orderCreateReducer,
    orderGetReducer,
    orderPayReducer,
    orderListMyReducer
} from './reducers/order.reducers';


// add cartItems to the initialState below
// first, check to make sure cartItems are in local storage and if so then let's get
// the cartItems from local storage otherwise we will just return an empty array
const cartItemsFromLocalStorage = 
    localStorage.getItem( 'cartItems' ) ?
    JSON.parse( localStorage.getItem( 'cartItems' ) ) :
    []


// add userInfo to the initialState below
// first, check to make sure userInfo is in local storage and if so then let's get
// the userInfo from local storage otherwise we will just return null
const userInfoFromLocalStorage = 
    localStorage.getItem( 'userInfo' ) ?
    JSON.parse( localStorage.getItem( 'userInfo' ) ) :
    null


// add shippingAddress to the initialState below
// first, check to make sure shippingAddress is in local storage and if so then let's get
// the shippingAddress from local storage otherwise we will just return an empty object
const shippingAddressFromLocalStorage = 
    localStorage.getItem( 'shippingAddress' ) ?
    JSON.parse( localStorage.getItem( 'shippingAddress' ) ) :
    {}


// add paymentMethod to the initialState below
// first, check to make sure paymentMethod is in local storage and if so then let's get
// the paymentMethod from local storage otherwise we will return an empty object
const paymentMethodFromLocalStorage = 
    localStorage.getItem( 'paymentMethod' ) ?
    JSON.parse( localStorage.getItem( 'paymentMethod' ) ) :
    {}


// argument 1 to createStore();
// use combineReducers to combine our reducers and save the result in a const called " reducer "
const reducer = combineReducers( {
    productList       : productListReducer,
    productGet        : productGetReducer,
    cart              : cartReducer,
    userSignIn        : userSignInReducer,
    userDropdown      : userDropdownReducer,
    adminDropdown     : adminDropdownReducer,
    userRegister      : userRegisterReducer,
    userGetProfile    : userGetProfileReducer,
    userUpdateProfile : userUpdateProfileReducer,
    userListAdmin     : userListAdminReducer,
    userDeleteAdmin   : userDeleteAdminReducer,
    userGetAdmin      : userGetAdminReducer,
    userUpdateAdmin   : userUpdateAdminReducer,
    orderCreate       : orderCreateReducer,
    orderGet          : orderGetReducer,
    orderPay          : orderPayReducer,
    orderListMy       : orderListMyReducer
} );


// argument 2 to createStore();
// define initialState to an empty object for now and if we want something to be loaded when the
// redux store initially loads we can add it to the initialState object below
const initialState = {
    cart : {
        cartItems       : cartItemsFromLocalStorage,
        shippingAddress : shippingAddressFromLocalStorage,
        paymentMethod   : paymentMethodFromLocalStorage
    },
    userSignIn : { 
        userInfo : userInfoFromLocalStorage
    }
};


// argument 3 to createStore();
// in this case, we will define " ...middleware "
const middleware = [ thunk ];


// create our store
// pass in the reducer, initialState, composeWithDevTools as arguments to createStore();
// and pass in applyMiddleware as an argument to composeWithDevTools()

// and remember the way we implement the store or add the store to our application is through 
// the Provider component
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools( applyMiddleware( ...middleware ) )
);


export default store;
*/



























// ===============================
























/*
// at the beginning of lecture 73, given all the notes, I created a new file below without
// the notes so we are starting fresh

// in this file we will connect all of our reducers and any middleware we might have and let's
// import in createStore, which is a function to create our store and combineReducers and we will
// have a bunch of reducers and each reducer will handle a piece of functionality and we want to
// import in applyMiddleware so we can apply any middleware we need such as thunk
import { createStore, combineReducers, applyMiddleware  } from 'redux';
// import in thunk
import thunk from 'redux-thunk';
// to use the redux-devtools-extension we need to import in composeWithDevTools
import { composeWithDevTools } from 'redux-devtools-extension';


// 22 -
// coming from the product.reducers.js 5 - file

// import in the productListReducer, productGetReducer and the productDeleteAdminReducer and
// then add these reducers to the combineReducers() below
import { 
    productListReducer,
    productGetReducer,
    productDeleteAdminReducer
} from './reducers/product.reducers';

// now let's go to the admin-product-list-screen.component.jsx 2 - file

// End of 22 -


// import in the cartReducer and then add this reducer to the combineReducers() below
import cartReducer from './reducers/cart.reducers';
// import in the userSignInReducer, userNameDropDownReducer, userRegisterReducer,
// userGetProfileReducer, userUpdateProfileReducer, userListAdminReducer, userDeleteAdminReducer,
// userGetAdminReducer and userUpdateAdminReducer and then add these reducers to the
// combineReducers() below
import {
    userSignInReducer,
    userDropdownReducer,
    adminDropdownReducer,
    userRegisterReducer,
    userGetProfileReducer,
    userUpdateProfileReducer,
    userListAdminReducer,
    userDeleteAdminReducer,
    userGetAdminReducer,
    userUpdateAdminReducer
} from './reducers/user.reducers';
// import in the orderCreateReducer, orderGetReducer, orderPayReducer, orderListMyReducer
// and then add these reducers to the combineReducers() below
import { 
    orderCreateReducer,
    orderGetReducer,
    orderPayReducer,
    orderListMyReducer
} from './reducers/order.reducers';


// add cartItems to the initialState below
// first, check to make sure cartItems are in local storage and if so then let's get
// the cartItems from local storage otherwise we will just return an empty array
const cartItemsFromLocalStorage = 
    localStorage.getItem( 'cartItems' ) ?
    JSON.parse( localStorage.getItem( 'cartItems' ) ) :
    []


// add userInfo to the initialState below
// first, check to make sure userInfo is in local storage and if so then let's get
// the userInfo from local storage otherwise we will just return null
const userInfoFromLocalStorage = 
    localStorage.getItem( 'userInfo' ) ?
    JSON.parse( localStorage.getItem( 'userInfo' ) ) :
    null


// add shippingAddress to the initialState below
// first, check to make sure shippingAddress is in local storage and if so then let's get
// the shippingAddress from local storage otherwise we will just return an empty object
const shippingAddressFromLocalStorage = 
    localStorage.getItem( 'shippingAddress' ) ?
    JSON.parse( localStorage.getItem( 'shippingAddress' ) ) :
    {}


// add paymentMethod to the initialState below
// first, check to make sure paymentMethod is in local storage and if so then let's get
// the paymentMethod from local storage otherwise we will return an empty object
const paymentMethodFromLocalStorage = 
    localStorage.getItem( 'paymentMethod' ) ?
    JSON.parse( localStorage.getItem( 'paymentMethod' ) ) :
    {}


// argument 1 to createStore();
// use combineReducers to combine our reducers and save the result in a const called " reducer "
const reducer = combineReducers( {
    productList        : productListReducer,
    productGet         : productGetReducer,
    productDeleteAdmin : productDeleteAdminReducer,
    cart               : cartReducer,
    userSignIn         : userSignInReducer,
    userDropdown       : userDropdownReducer,
    adminDropdown      : adminDropdownReducer,
    userRegister       : userRegisterReducer,
    userGetProfile     : userGetProfileReducer,
    userUpdateProfile  : userUpdateProfileReducer,
    userListAdmin      : userListAdminReducer,
    userDeleteAdmin    : userDeleteAdminReducer,
    userGetAdmin       : userGetAdminReducer,
    userUpdateAdmin    : userUpdateAdminReducer,
    orderCreate        : orderCreateReducer,
    orderGet           : orderGetReducer,
    orderPay           : orderPayReducer,
    orderListMy        : orderListMyReducer
} );


// argument 2 to createStore();
// define initialState to an empty object for now and if we want something to be loaded when the
// redux store initially loads we can add it to the initialState object below
const initialState = {
    cart : {
        cartItems       : cartItemsFromLocalStorage,
        shippingAddress : shippingAddressFromLocalStorage,
        paymentMethod   : paymentMethodFromLocalStorage
    },
    userSignIn : { 
        userInfo : userInfoFromLocalStorage
    }
};


// argument 3 to createStore();
// in this case, we will define " ...middleware "
const middleware = [ thunk ];


// create our store
// pass in the reducer, initialState, composeWithDevTools as arguments to createStore();
// and pass in applyMiddleware as an argument to composeWithDevTools()

// and remember the way we implement the store or add the store to our application is through 
// the Provider component
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools( applyMiddleware( ...middleware ) )
);


export default store;
*/



























// ===============================
























/*
// at the beginning of lecture 76, given all the notes, I created a new file below without
// the notes so we are starting fresh

// in this file we will connect all of our reducers and any middleware we might have and let's
// import in createStore, which is a function to create our store and combineReducers and we will
// have a bunch of reducers and each reducer will handle a piece of functionality and we want to
// import in applyMiddleware so we can apply any middleware we need such as thunk
import { createStore, combineReducers, applyMiddleware  } from 'redux';
// import in thunk
import thunk from 'redux-thunk';
// to use the redux-devtools-extension we need to import in composeWithDevTools
import { composeWithDevTools } from 'redux-devtools-extension';


// 23 -
// coming from the product.reducers.js 6 - file

// import in the productListReducer, productGetReducer, productDeleteAdminReducer and the
// productCreateAdminReducer and then add these reducers to the combineReducers() below
import { 
    productListReducer,
    productGetReducer,
    productDeleteAdminReducer,
    productCreateAdminReducer
} from './reducers/product.reducers';

// now let's go to the admin-product-list-screen.component.jsx 3 - file

// End of 23 -


// import in the cartReducer and then add this reducer to the combineReducers() below
import cartReducer from './reducers/cart.reducers';
// import in the userSignInReducer, userNameDropDownReducer, userRegisterReducer,
// userGetProfileReducer, userUpdateProfileReducer, userListAdminReducer, userDeleteAdminReducer,
// userGetAdminReducer and userUpdateAdminReducer and then add these reducers to the
// combineReducers() below
import {
    userSignInReducer,
    userDropdownReducer,
    adminDropdownReducer,
    userRegisterReducer,
    userGetProfileReducer,
    userUpdateProfileReducer,
    userListAdminReducer,
    userDeleteAdminReducer,
    userGetAdminReducer,
    userUpdateAdminReducer
} from './reducers/user.reducers';
// import in the orderCreateReducer, orderGetReducer, orderPayReducer, orderListMyReducer
// and then add these reducers to the combineReducers() below
import { 
    orderCreateReducer,
    orderGetReducer,
    orderPayReducer,
    orderListMyReducer
} from './reducers/order.reducers';


// add cartItems to the initialState below
// first, check to make sure cartItems are in local storage and if so then let's get
// the cartItems from local storage otherwise we will just return an empty array
const cartItemsFromLocalStorage = 
    localStorage.getItem( 'cartItems' ) ?
    JSON.parse( localStorage.getItem( 'cartItems' ) ) :
    []


// add userInfo to the initialState below
// first, check to make sure userInfo is in local storage and if so then let's get
// the userInfo from local storage otherwise we will just return null
const userInfoFromLocalStorage = 
    localStorage.getItem( 'userInfo' ) ?
    JSON.parse( localStorage.getItem( 'userInfo' ) ) :
    null


// add shippingAddress to the initialState below
// first, check to make sure shippingAddress is in local storage and if so then let's get
// the shippingAddress from local storage otherwise we will just return an empty object
const shippingAddressFromLocalStorage = 
    localStorage.getItem( 'shippingAddress' ) ?
    JSON.parse( localStorage.getItem( 'shippingAddress' ) ) :
    {}


// add paymentMethod to the initialState below
// first, check to make sure paymentMethod is in local storage and if so then let's get
// the paymentMethod from local storage otherwise we will return an empty object
const paymentMethodFromLocalStorage = 
    localStorage.getItem( 'paymentMethod' ) ?
    JSON.parse( localStorage.getItem( 'paymentMethod' ) ) :
    {}


// argument 1 to createStore();
// use combineReducers to combine our reducers and save the result in a const called " reducer "
const reducer = combineReducers( {
    productList        : productListReducer,
    productGet         : productGetReducer,
    productDeleteAdmin : productDeleteAdminReducer,
    productCreateAdmin : productCreateAdminReducer,
    cart               : cartReducer,
    userSignIn         : userSignInReducer,
    userDropdown       : userDropdownReducer,
    adminDropdown      : adminDropdownReducer,
    userRegister       : userRegisterReducer,
    userGetProfile     : userGetProfileReducer,
    userUpdateProfile  : userUpdateProfileReducer,
    userListAdmin      : userListAdminReducer,
    userDeleteAdmin    : userDeleteAdminReducer,
    userGetAdmin       : userGetAdminReducer,
    userUpdateAdmin    : userUpdateAdminReducer,
    orderCreate        : orderCreateReducer,
    orderGet           : orderGetReducer,
    orderPay           : orderPayReducer,
    orderListMy        : orderListMyReducer
} );


// argument 2 to createStore();
// define initialState to an empty object for now and if we want something to be loaded when the
// redux store initially loads we can add it to the initialState object below
const initialState = {
    cart : {
        cartItems       : cartItemsFromLocalStorage,
        shippingAddress : shippingAddressFromLocalStorage,
        paymentMethod   : paymentMethodFromLocalStorage
    },
    userSignIn : { 
        userInfo : userInfoFromLocalStorage
    }
};


// argument 3 to createStore();
// in this case, we will define " ...middleware "
const middleware = [ thunk ];


// create our store
// pass in the reducer, initialState, composeWithDevTools as arguments to createStore();
// and pass in applyMiddleware as an argument to composeWithDevTools()

// and remember the way we implement the store or add the store to our application is through 
// the Provider component
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools( applyMiddleware( ...middleware ) )
);


export default store;
*/




























// ===============================
























/*
// at the beginning of lecture 77, given all the notes, I created a new file below without
// the notes so we are starting fresh

// in this file we will connect all of our reducers and any middleware we might have and let's
// import in createStore, which is a function to create our store and combineReducers and we will
// have a bunch of reducers and each reducer will handle a piece of functionality and we want to
// import in applyMiddleware so we can apply any middleware we need such as thunk
import { createStore, combineReducers, applyMiddleware  } from 'redux';
// import in thunk
import thunk from 'redux-thunk';
// to use the redux-devtools-extension we need to import in composeWithDevTools
import { composeWithDevTools } from 'redux-devtools-extension';


// 24 -
// coming from the product.reducers.js 7 - file

// import in the productListReducer, productGetReducer, productDeleteAdminReducer,
// productCreateAdminReducer and the productUpdateAdminReducer and then add these reducers
// to the combineReducers() below
import { 
    productListReducer,
    productGetReducer,
    productDeleteAdminReducer,
    productCreateAdminReducer,
    productUpdateAdminReducer
} from './reducers/product.reducers';

// now let's go to the admin-product-edit-screen.component.jsx 2 - file

// End of 24 -


// import in the cartReducer and then add this reducer to the combineReducers() below
import cartReducer from './reducers/cart.reducers';
// import in the userSignInReducer, userNameDropDownReducer, userRegisterReducer,
// userGetProfileReducer, userUpdateProfileReducer, userListAdminReducer, userDeleteAdminReducer,
// userGetAdminReducer and userUpdateAdminReducer and then add these reducers to the
// combineReducers() below
import {
    userSignInReducer,
    userDropdownReducer,
    adminDropdownReducer,
    userRegisterReducer,
    userGetProfileReducer,
    userUpdateProfileReducer,
    userListAdminReducer,
    userDeleteAdminReducer,
    userGetAdminReducer,
    userUpdateAdminReducer
} from './reducers/user.reducers';
// import in the orderCreateReducer, orderGetReducer, orderPayReducer, orderListMyReducer
// and then add these reducers to the combineReducers() below
import { 
    orderCreateReducer,
    orderGetReducer,
    orderPayReducer,
    orderListMyReducer
} from './reducers/order.reducers';


// add cartItems to the initialState below
// first, check to make sure cartItems are in local storage and if so then let's get
// the cartItems from local storage otherwise we will just return an empty array
const cartItemsFromLocalStorage = 
    localStorage.getItem( 'cartItems' ) ?
    JSON.parse( localStorage.getItem( 'cartItems' ) ) :
    []


// add userInfo to the initialState below
// first, check to make sure userInfo is in local storage and if so then let's get
// the userInfo from local storage otherwise we will just return null
const userInfoFromLocalStorage = 
    localStorage.getItem( 'userInfo' ) ?
    JSON.parse( localStorage.getItem( 'userInfo' ) ) :
    null


// add shippingAddress to the initialState below
// first, check to make sure shippingAddress is in local storage and if so then let's get
// the shippingAddress from local storage otherwise we will just return an empty object
const shippingAddressFromLocalStorage = 
    localStorage.getItem( 'shippingAddress' ) ?
    JSON.parse( localStorage.getItem( 'shippingAddress' ) ) :
    {}


// add paymentMethod to the initialState below
// first, check to make sure paymentMethod is in local storage and if so then let's get
// the paymentMethod from local storage otherwise we will return an empty object
const paymentMethodFromLocalStorage = 
    localStorage.getItem( 'paymentMethod' ) ?
    JSON.parse( localStorage.getItem( 'paymentMethod' ) ) :
    {}


// argument 1 to createStore();
// use combineReducers to combine our reducers and save the result in a const called " reducer "
const reducer = combineReducers( {
    productList        : productListReducer,
    productGet         : productGetReducer,
    productDeleteAdmin : productDeleteAdminReducer,
    productCreateAdmin : productCreateAdminReducer,
    productUpdateAdmin : productUpdateAdminReducer,
    cart               : cartReducer,
    userSignIn         : userSignInReducer,
    userDropdown       : userDropdownReducer,
    adminDropdown      : adminDropdownReducer,
    userRegister       : userRegisterReducer,
    userGetProfile     : userGetProfileReducer,
    userUpdateProfile  : userUpdateProfileReducer,
    userListAdmin      : userListAdminReducer,
    userDeleteAdmin    : userDeleteAdminReducer,
    userGetAdmin       : userGetAdminReducer,
    userUpdateAdmin    : userUpdateAdminReducer,
    orderCreate        : orderCreateReducer,
    orderGet           : orderGetReducer,
    orderPay           : orderPayReducer,
    orderListMy        : orderListMyReducer
} );


// argument 2 to createStore();
// define initialState to an empty object for now and if we want something to be loaded when the
// redux store initially loads we can add it to the initialState object below
const initialState = {
    cart : {
        cartItems       : cartItemsFromLocalStorage,
        shippingAddress : shippingAddressFromLocalStorage,
        paymentMethod   : paymentMethodFromLocalStorage
    },
    userSignIn : { 
        userInfo : userInfoFromLocalStorage
    }
};


// argument 3 to createStore();
// in this case, we will define " ...middleware "
const middleware = [ thunk ];


// create our store
// pass in the reducer, initialState, composeWithDevTools as arguments to createStore();
// and pass in applyMiddleware as an argument to composeWithDevTools()

// and remember the way we implement the store or add the store to our application is through 
// the Provider component
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools( applyMiddleware( ...middleware ) )
);


export default store;
*/





























// ===============================
























/*
// at the beginning of lecture 79, given all the notes, I created a new file below without
// the notes so we are starting fresh

// in this file we will connect all of our reducers and any middleware we might have and let's
// import in createStore, which is a function to create our store and combineReducers and we will
// have a bunch of reducers and each reducer will handle a piece of functionality and we want to
// import in applyMiddleware so we can apply any middleware we need such as thunk
import { createStore, combineReducers, applyMiddleware  } from 'redux';
// import in thunk
import thunk from 'redux-thunk';
// to use the redux-devtools-extension we need to import in composeWithDevTools
import { composeWithDevTools } from 'redux-devtools-extension';
// import in the productListReducer, productGetReducer, productDeleteAdminReducer,
// productCreateAdminReducer and the productUpdateAdminReducer and then add these reducers
// to the combineReducers() below
import { 
    productListReducer,
    productGetReducer,
    productDeleteAdminReducer,
    productCreateAdminReducer,
    productUpdateAdminReducer
} from './reducers/product.reducers';
// import in the cartReducer and then add this reducer to the combineReducers() below
import cartReducer from './reducers/cart.reducers';
// import in the userSignInReducer, userNameDropDownReducer, userRegisterReducer,
// userGetProfileReducer, userUpdateProfileReducer, userListAdminReducer, userDeleteAdminReducer,
// userGetAdminReducer and userUpdateAdminReducer and then add these reducers to the
// combineReducers() below
import {
    userSignInReducer,
    userDropdownReducer,
    adminDropdownReducer,
    userRegisterReducer,
    userGetProfileReducer,
    userUpdateProfileReducer,
    userListAdminReducer,
    userDeleteAdminReducer,
    userGetAdminReducer,
    userUpdateAdminReducer
} from './reducers/user.reducers';


// 25 -
// coming from order.reducers.js 5 -

// import in the orderCreateReducer, orderGetReducer, orderPayReducer, orderListMyReducer,
// orderListAdminReducer and then add these reducers to the combineReducers() below
import { 
    orderCreateReducer,
    orderGetReducer,
    orderPayReducer,
    orderListMyReducer,
    orderListAdminReducer
} from './reducers/order.reducers';

// now let's go to the admin-order-list-screen.component.jsx 1 - file

// End of 25 -


// add cartItems to the initialState below
// first, check to make sure cartItems are in local storage and if so then let's get
// the cartItems from local storage otherwise we will just return an empty array
const cartItemsFromLocalStorage = 
    localStorage.getItem( 'cartItems' ) ?
    JSON.parse( localStorage.getItem( 'cartItems' ) ) :
    []


// add userInfo to the initialState below
// first, check to make sure userInfo is in local storage and if so then let's get
// the userInfo from local storage otherwise we will just return null
const userInfoFromLocalStorage = 
    localStorage.getItem( 'userInfo' ) ?
    JSON.parse( localStorage.getItem( 'userInfo' ) ) :
    null


// add shippingAddress to the initialState below
// first, check to make sure shippingAddress is in local storage and if so then let's get
// the shippingAddress from local storage otherwise we will just return an empty object
const shippingAddressFromLocalStorage = 
    localStorage.getItem( 'shippingAddress' ) ?
    JSON.parse( localStorage.getItem( 'shippingAddress' ) ) :
    {}


// add paymentMethod to the initialState below
// first, check to make sure paymentMethod is in local storage and if so then let's get
// the paymentMethod from local storage otherwise we will return an empty object
const paymentMethodFromLocalStorage = 
    localStorage.getItem( 'paymentMethod' ) ?
    JSON.parse( localStorage.getItem( 'paymentMethod' ) ) :
    {}


// argument 1 to createStore();
// use combineReducers to combine our reducers and save the result in a const called " reducer "
const reducer = combineReducers( {
    productList        : productListReducer,
    productGet         : productGetReducer,
    productDeleteAdmin : productDeleteAdminReducer,
    productCreateAdmin : productCreateAdminReducer,
    productUpdateAdmin : productUpdateAdminReducer,
    cart               : cartReducer,
    userSignIn         : userSignInReducer,
    userDropdown       : userDropdownReducer,
    adminDropdown      : adminDropdownReducer,
    userRegister       : userRegisterReducer,
    userGetProfile     : userGetProfileReducer,
    userUpdateProfile  : userUpdateProfileReducer,
    userListAdmin      : userListAdminReducer,
    userDeleteAdmin    : userDeleteAdminReducer,
    userGetAdmin       : userGetAdminReducer,
    userUpdateAdmin    : userUpdateAdminReducer,
    orderCreate        : orderCreateReducer,
    orderGet           : orderGetReducer,
    orderPay           : orderPayReducer,
    orderListMy        : orderListMyReducer,
    orderListAdmin     : orderListAdminReducer
} );


// argument 2 to createStore();
// define initialState to an empty object for now and if we want something to be loaded when the
// redux store initially loads we can add it to the initialState object below
const initialState = {
    cart : {
        cartItems       : cartItemsFromLocalStorage,
        shippingAddress : shippingAddressFromLocalStorage,
        paymentMethod   : paymentMethodFromLocalStorage
    },
    userSignIn : { 
        userInfo : userInfoFromLocalStorage
    }
};


// argument 3 to createStore();
// in this case, we will define " ...middleware "
const middleware = [ thunk ];


// create our store
// pass in the reducer, initialState, composeWithDevTools as arguments to createStore();
// and pass in applyMiddleware as an argument to composeWithDevTools()

// and remember the way we implement the store or add the store to our application is through 
// the Provider component
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools( applyMiddleware( ...middleware ) )
);


export default store;
*/





























// ===============================
























/*
// at the beginning of lecture 82, given all the notes, I created a new file below without
// the notes so we are starting fresh

// in this file we will connect all of our reducers and any middleware we might have and let's
// import in createStore, which is a function to create our store and combineReducers and we will
// have a bunch of reducers and each reducer will handle a piece of functionality and we want to
// import in applyMiddleware so we can apply any middleware we need such as thunk
import { createStore, combineReducers, applyMiddleware  } from 'redux';
// import in thunk
import thunk from 'redux-thunk';
// to use the redux-devtools-extension we need to import in composeWithDevTools
import { composeWithDevTools } from 'redux-devtools-extension';
// import in the productListReducer, productGetReducer, productDeleteAdminReducer,
// productCreateAdminReducer and the productUpdateAdminReducer and then add these reducers
// to the combineReducers() below
import { 
    productListReducer,
    productGetReducer,
    productDeleteAdminReducer,
    productCreateAdminReducer,
    productUpdateAdminReducer
} from './reducers/product.reducers';
// import in the cartReducer and then add this reducer to the combineReducers() below
import cartReducer from './reducers/cart.reducers';
// import in the userSignInReducer, userNameDropDownReducer, userRegisterReducer,
// userGetProfileReducer, userUpdateProfileReducer, userListAdminReducer, userDeleteAdminReducer,
// userGetAdminReducer and userUpdateAdminReducer and then add these reducers to the
// combineReducers() below
import {
    userSignInReducer,
    userDropdownReducer,
    adminDropdownReducer,
    userRegisterReducer,
    userGetProfileReducer,
    userUpdateProfileReducer,
    userListAdminReducer,
    userDeleteAdminReducer,
    userGetAdminReducer,
    userUpdateAdminReducer
} from './reducers/user.reducers';


// 26 -
// coming from order.reducers.js 6 -

// import in the orderCreateReducer, orderGetReducer, orderPayReducer, orderListMyReducer,
// orderListAdminReducer, orderUpdateToDeliveredAdminReducer and then add these reducers to
// the combineReducers() below
import {
    orderCreateReducer,
    orderGetReducer,
    orderPayReducer,
    orderListMyReducer,
    orderListAdminReducer,
    orderUpdateToDeliveredAdminReducer
} from './reducers/order.reducers';

// now let's go to the order-screen.component.jsx 8 - file

// End of 26 -


// add cartItems to the initialState below
// first, check to make sure cartItems are in local storage and if so then let's get
// the cartItems from local storage otherwise we will just return an empty array
const cartItemsFromLocalStorage = 
    localStorage.getItem( 'cartItems' ) ?
    JSON.parse( localStorage.getItem( 'cartItems' ) ) :
    []


// add userInfo to the initialState below
// first, check to make sure userInfo is in local storage and if so then let's get
// the userInfo from local storage otherwise we will just return null
const userInfoFromLocalStorage = 
    localStorage.getItem( 'userInfo' ) ?
    JSON.parse( localStorage.getItem( 'userInfo' ) ) :
    null


// add shippingAddress to the initialState below
// first, check to make sure shippingAddress is in local storage and if so then let's get
// the shippingAddress from local storage otherwise we will just return an empty object
const shippingAddressFromLocalStorage = 
    localStorage.getItem( 'shippingAddress' ) ?
    JSON.parse( localStorage.getItem( 'shippingAddress' ) ) :
    {}


// add paymentMethod to the initialState below
// first, check to make sure paymentMethod is in local storage and if so then let's get
// the paymentMethod from local storage otherwise we will return an empty object
const paymentMethodFromLocalStorage = 
    localStorage.getItem( 'paymentMethod' ) ?
    JSON.parse( localStorage.getItem( 'paymentMethod' ) ) :
    {}


// argument 1 to createStore();
// use combineReducers to combine our reducers and save the result in a const called " reducer "
const reducer = combineReducers( {
    productList                 : productListReducer,
    productGet                  : productGetReducer,
    productDeleteAdmin          : productDeleteAdminReducer,
    productCreateAdmin          : productCreateAdminReducer,
    productUpdateAdmin          : productUpdateAdminReducer,
    cart                        : cartReducer,
    userSignIn                  : userSignInReducer,
    userDropdown                : userDropdownReducer,
    adminDropdown               : adminDropdownReducer,
    userRegister                : userRegisterReducer,
    userGetProfile              : userGetProfileReducer,
    userUpdateProfile           : userUpdateProfileReducer,
    userListAdmin               : userListAdminReducer,
    userDeleteAdmin             : userDeleteAdminReducer,
    userGetAdmin                : userGetAdminReducer,
    userUpdateAdmin             : userUpdateAdminReducer,
    orderCreate                 : orderCreateReducer,
    orderGet                    : orderGetReducer,
    orderPay                    : orderPayReducer,
    orderListMy                 : orderListMyReducer,
    orderListAdmin              : orderListAdminReducer,
    orderUpdateToDeliveredAdmin : orderUpdateToDeliveredAdminReducer
} );


// argument 2 to createStore();
// define initialState to an empty object for now and if we want something to be loaded when the
// redux store initially loads we can add it to the initialState object below
const initialState = {
    cart : {
        cartItems       : cartItemsFromLocalStorage,
        shippingAddress : shippingAddressFromLocalStorage,
        paymentMethod   : paymentMethodFromLocalStorage
    },
    userSignIn : { 
        userInfo : userInfoFromLocalStorage
    }
};


// argument 3 to createStore();
// in this case, we will define " ...middleware "
const middleware = [ thunk ];


// create our store
// pass in the reducer, initialState, composeWithDevTools as arguments to createStore();
// and pass in applyMiddleware as an argument to composeWithDevTools()

// and remember the way we implement the store or add the store to our application is through 
// the Provider component
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools( applyMiddleware( ...middleware ) )
);


export default store;
*/





























// ===============================
























/*
// at the beginning of lecture 83, given all the notes, I created a new file below without
// the notes so we are starting fresh

// in this file we will connect all of our reducers and any middleware we might have and let's
// import in createStore, which is a function to create our store and combineReducers and we will
// have a bunch of reducers and each reducer will handle a piece of functionality and we want to
// import in applyMiddleware so we can apply any middleware we need such as thunk
import { createStore, combineReducers, applyMiddleware  } from 'redux';
// import in thunk
import thunk from 'redux-thunk';
// to use the redux-devtools-extension we need to import in composeWithDevTools
import { composeWithDevTools } from 'redux-devtools-extension';


// 27 -
// coming from product.reducers.js 8 -

// import in the productListReducer, productGetReducer, productDeleteAdminReducer,
// productCreateAdminReducer, productUpdateAdminReducer and the productCreateReviewReducer
// and then add these reducers to the combineReducers() below
import { 
    productListReducer,
    productGetReducer,
    productDeleteAdminReducer,
    productCreateAdminReducer,
    productUpdateAdminReducer,
    productCreateReviewReducer
} from './reducers/product.reducers';

// now let's go to the product-screen.component.jsx 7 - file

// End of 27 -


// import in the cartReducer and then add this reducer to the combineReducers() below
import cartReducer from './reducers/cart.reducers';
// import in the userSignInReducer, userNameDropDownReducer, userRegisterReducer,
// userGetProfileReducer, userUpdateProfileReducer, userListAdminReducer, userDeleteAdminReducer,
// userGetAdminReducer and userUpdateAdminReducer and then add these reducers to the
// combineReducers() below
import {
    userSignInReducer,
    userDropdownReducer,
    adminDropdownReducer,
    userRegisterReducer,
    userGetProfileReducer,
    userUpdateProfileReducer,
    userListAdminReducer,
    userDeleteAdminReducer,
    userGetAdminReducer,
    userUpdateAdminReducer
} from './reducers/user.reducers';
// import in the orderCreateReducer, orderGetReducer, orderPayReducer, orderListMyReducer,
// orderListAdminReducer, orderUpdateToDeliveredAdminReducer and then add these reducers to
// the combineReducers() below
import {
    orderCreateReducer,
    orderGetReducer,
    orderPayReducer,
    orderListMyReducer,
    orderListAdminReducer,
    orderUpdateToDeliveredAdminReducer
} from './reducers/order.reducers';


// add cartItems to the initialState below
// first, check to make sure cartItems are in local storage and if so then let's get
// the cartItems from local storage otherwise we will just return an empty array
const cartItemsFromLocalStorage = 
    localStorage.getItem( 'cartItems' ) ?
    JSON.parse( localStorage.getItem( 'cartItems' ) ) :
    []


// add userInfo to the initialState below
// first, check to make sure userInfo is in local storage and if so then let's get
// the userInfo from local storage otherwise we will just return null
const userInfoFromLocalStorage = 
    localStorage.getItem( 'userInfo' ) ?
    JSON.parse( localStorage.getItem( 'userInfo' ) ) :
    null


// add shippingAddress to the initialState below
// first, check to make sure shippingAddress is in local storage and if so then let's get
// the shippingAddress from local storage otherwise we will just return an empty object
const shippingAddressFromLocalStorage = 
    localStorage.getItem( 'shippingAddress' ) ?
    JSON.parse( localStorage.getItem( 'shippingAddress' ) ) :
    {}


// add paymentMethod to the initialState below
// first, check to make sure paymentMethod is in local storage and if so then let's get
// the paymentMethod from local storage otherwise we will return an empty object
const paymentMethodFromLocalStorage = 
    localStorage.getItem( 'paymentMethod' ) ?
    JSON.parse( localStorage.getItem( 'paymentMethod' ) ) :
    {}


// argument 1 to createStore();
// use combineReducers to combine our reducers and save the result in a const called " reducer "
const reducer = combineReducers( {
    productList                 : productListReducer,
    productGet                  : productGetReducer,
    productDeleteAdmin          : productDeleteAdminReducer,
    productCreateAdmin          : productCreateAdminReducer,
    productUpdateAdmin          : productUpdateAdminReducer,
    productCreateReview         : productCreateReviewReducer,
    cart                        : cartReducer,
    userSignIn                  : userSignInReducer,
    userDropdown                : userDropdownReducer,
    adminDropdown               : adminDropdownReducer,
    userRegister                : userRegisterReducer,
    userGetProfile              : userGetProfileReducer,
    userUpdateProfile           : userUpdateProfileReducer,
    userListAdmin               : userListAdminReducer,
    userDeleteAdmin             : userDeleteAdminReducer,
    userGetAdmin                : userGetAdminReducer,
    userUpdateAdmin             : userUpdateAdminReducer,
    orderCreate                 : orderCreateReducer,
    orderGet                    : orderGetReducer,
    orderPay                    : orderPayReducer,
    orderListMy                 : orderListMyReducer,
    orderListAdmin              : orderListAdminReducer,
    orderUpdateToDeliveredAdmin : orderUpdateToDeliveredAdminReducer
} );


// argument 2 to createStore();
// define initialState to an empty object for now and if we want something to be loaded when the
// redux store initially loads we can add it to the initialState object below
const initialState = {
    cart : {
        cartItems       : cartItemsFromLocalStorage,
        shippingAddress : shippingAddressFromLocalStorage,
        paymentMethod   : paymentMethodFromLocalStorage
    },
    userSignIn : { 
        userInfo : userInfoFromLocalStorage
    }
};


// argument 3 to createStore();
// in this case, we will define " ...middleware "
const middleware = [ thunk ];


// create our store
// pass in the reducer, initialState, composeWithDevTools as arguments to createStore();
// and pass in applyMiddleware as an argument to composeWithDevTools()

// and remember the way we implement the store or add the store to our application is through 
// the Provider component
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools( applyMiddleware( ...middleware ) )
);


export default store;
*/





























// ===============================

























// at the beginning of lecture 85, given all the notes, I created a new file below without
// the notes so we are starting fresh

// in this file we will connect all of our reducers and any middleware we might have and let's
// import in createStore, which is a function to create our store and combineReducers and we will
// have a bunch of reducers and each reducer will handle a piece of functionality and we want to
// import in applyMiddleware so we can apply any middleware we need such as thunk
import { createStore, combineReducers, applyMiddleware  } from 'redux';
// import in thunk
import thunk from 'redux-thunk';
// to use the redux-devtools-extension we need to import in composeWithDevTools
import { composeWithDevTools } from 'redux-devtools-extension';
// import in the productListReducer, productGetReducer, productDeleteAdminReducer,
// productCreateAdminReducer, productUpdateAdminReducer and the productCreateReviewReducer
// and then add these reducers to the combineReducers() below
import { 
    productListReducer,
    productGetReducer,
    productDeleteAdminReducer,
    productCreateAdminReducer,
    productUpdateAdminReducer,
    productCreateReviewReducer
} from './reducers/product.reducers';
// import in the cartReducer and then add this reducer to the combineReducers() below
import cartReducer from './reducers/cart.reducers';
// import in the userSignInReducer, userNameDropDownReducer, userRegisterReducer,
// userGetProfileReducer, userUpdateProfileReducer, userListAdminReducer, userDeleteAdminReducer,
// userGetAdminReducer and userUpdateAdminReducer and then add these reducers to the
// combineReducers() below
import {
    userSignInReducer,
    userDropdownReducer,
    adminDropdownReducer,
    userRegisterReducer,
    userGetProfileReducer,
    userUpdateProfileReducer,
    userListAdminReducer,
    userDeleteAdminReducer,
    userGetAdminReducer,
    userUpdateAdminReducer
} from './reducers/user.reducers';
// import in the orderCreateReducer, orderGetReducer, orderPayReducer, orderListMyReducer,
// orderListAdminReducer, orderUpdateToDeliveredAdminReducer and then add these reducers to
// the combineReducers() below
import {
    orderCreateReducer,
    orderGetReducer,
    orderPayReducer,
    orderListMyReducer,
    orderListAdminReducer,
    orderUpdateToDeliveredAdminReducer
} from './reducers/order.reducers';


// add cartItems to the initialState below
// first, check to make sure cartItems are in local storage and if so then let's get
// the cartItems from local storage otherwise we will just return an empty array
const cartItemsFromLocalStorage = 
    localStorage.getItem( 'cartItems' ) ?
    JSON.parse( localStorage.getItem( 'cartItems' ) ) :
    []


// add userInfo to the initialState below
// first, check to make sure userInfo is in local storage and if so then let's get
// the userInfo from local storage otherwise we will just return null
const userInfoFromLocalStorage = 
    localStorage.getItem( 'userInfo' ) ?
    JSON.parse( localStorage.getItem( 'userInfo' ) ) :
    null


// add shippingAddress to the initialState below
// first, check to make sure shippingAddress is in local storage and if so then let's get
// the shippingAddress from local storage otherwise we will just return an empty object
const shippingAddressFromLocalStorage = 
    localStorage.getItem( 'shippingAddress' ) ?
    JSON.parse( localStorage.getItem( 'shippingAddress' ) ) :
    {}


// add paymentMethod to the initialState below
// first, check to make sure paymentMethod is in local storage and if so then let's get
// the paymentMethod from local storage otherwise we will return an empty object
const paymentMethodFromLocalStorage = 
    localStorage.getItem( 'paymentMethod' ) ?
    JSON.parse( localStorage.getItem( 'paymentMethod' ) ) :
    {}


// argument 1 to createStore();
// use combineReducers to combine our reducers and save the result in a const called " reducer "
const reducer = combineReducers( {
    productList                 : productListReducer,
    productGet                  : productGetReducer,
    productDeleteAdmin          : productDeleteAdminReducer,
    productCreateAdmin          : productCreateAdminReducer,
    productUpdateAdmin          : productUpdateAdminReducer,
    productCreateReview         : productCreateReviewReducer,
    cart                        : cartReducer,
    userSignIn                  : userSignInReducer,
    userDropdown                : userDropdownReducer,
    adminDropdown               : adminDropdownReducer,
    userRegister                : userRegisterReducer,
    userGetProfile              : userGetProfileReducer,
    userUpdateProfile           : userUpdateProfileReducer,
    userListAdmin               : userListAdminReducer,
    userDeleteAdmin             : userDeleteAdminReducer,
    userGetAdmin                : userGetAdminReducer,
    userUpdateAdmin             : userUpdateAdminReducer,
    orderCreate                 : orderCreateReducer,
    orderGet                    : orderGetReducer,
    orderPay                    : orderPayReducer,
    orderListMy                 : orderListMyReducer,
    orderListAdmin              : orderListAdminReducer,
    orderUpdateToDeliveredAdmin : orderUpdateToDeliveredAdminReducer
} );


// argument 2 to createStore();
// define initialState to an empty object for now and if we want something to be loaded when the
// redux store initially loads we can add it to the initialState object below
const initialState = {
    cart : {
        cartItems       : cartItemsFromLocalStorage,
        shippingAddress : shippingAddressFromLocalStorage,
        paymentMethod   : paymentMethodFromLocalStorage
    },
    userSignIn : { 
        userInfo : userInfoFromLocalStorage
    }
};


// argument 3 to createStore();
// in this case, we will define " ...middleware "
const middleware = [ thunk ];


// create our store
// pass in the reducer, initialState, composeWithDevTools as arguments to createStore();
// and pass in applyMiddleware as an argument to composeWithDevTools()

// and remember the way we implement the store or add the store to our application is through 
// the Provider component
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools( applyMiddleware( ...middleware ) )
);


export default store;




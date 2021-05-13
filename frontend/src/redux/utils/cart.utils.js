
// addItemToCart(); function #1

// first, let's write a function called addItemToCart and this function will take
// 2 arguments, the first is all the cart items in our cartItems array and the second is
// the cart items we want to add and what we are going to do is look inside our cartItems
// array and see if " cartItemToAdd " already exist 
export const addItemToCart = ( cartItems, cartItemToAdd ) => {

    // cartItems.find() will return the first item found in our cartItems array where the
    // condition we pass into find() is true and if there are no matches after looping
    // through all the cart items then cartItems.find() will return undefined
    const existingCartItem = cartItems.find(

        ( cartItem ) => cartItem.id === cartItemToAdd.id

    );

    // if existingCartItem is true or it exist then we will map through the cartItems
    // array and return a new array of cart items
    if ( existingCartItem ) {

        return cartItems.map( ( cartItem ) => (

            // if " cartItem.id === cartItemToAdd.id " is true then we will create a new
            // object and as soon as we get a match or duplicate then we want to update
            // the quantity otherwise we will return " cartItem " which will bascially do
            // nothing or will not rerender the components
            cartItem.id === cartItemToAdd.id ? (

                { 
                    ...cartItem, 
                    quantity : cartItem.quantity + 1
                }

            ) : (

                cartItem

            )

        ) );

    }

    // if we did not find a duplicate above or existingCartItems is false then we want to
    // return our existing cartItems array and then add in an object and first spread in
    // cartItemsToAdd and then give it a base quantity of 1 and remember the below code
    // will run the first time we check for duplicates
    return [ ...cartItems, { ...cartItemToAdd, quantity : 1 } ];

}


// addItemToCartVersion2(); function #2
// remember " .product " equals " ._id " and see the cart.actions.js file for details
export const addItemToCartVersion2 = ( cartItems, cartItemToAdd ) => {

    const existingCartItem = cartItems.find(

        ( cartItem ) => cartItem.product === cartItemToAdd.product

    );

    // if existingCartItem is true or it exist then we will map through the cartItems
    // array and return a new array of cart items
    if ( existingCartItem ) {

        return cartItems.map( ( cartItem ) => (

            // if " cartItem.id === cartItemToAdd.id " is true then we will create a new
            // object
            cartItem.product === cartItemToAdd.product ? (

                cartItemToAdd

            ) : (

                cartItem

            )

        ) );

    }

    // if we did not find a duplicate above or existingCartItems is false then we want to
    // return our existing cartItems array and then add the cartItemToAdd and remember the
    // below code will run the first time we check for duplicates
    return [ ...cartItems, cartItemToAdd ];

}


// removeItemToCart(); function #3

// take the utility function above ( function #1 ) and modify it so that it decreases the cart
// item quantity and if the user trys to decrease the quantity from 1 to 0 then automatically
// remove that particular item from the checkout page
export const removeItemFromCart = ( cartItems, cartItemToDecrease ) => {

    const existingCartItem = cartItems.find(

        ( cartItem ) => cartItem.id === cartItemToDecrease.id

    );

    if ( existingCartItem.quantity === 1 ) {

        return cartItems.filter( ( cartItem ) => cartItem.id !== existingCartItem.id )

    }

    else {

        return cartItems.map( ( cartItem ) => (

             cartItem.id === existingCartItem.id ? (

                { 
                    ...cartItem, 
                    quantity : cartItem.quantity - 1
                }

            ) : (

                cartItem

            )

        ) );

    }

}


// removeItemFromCartVersion2(); function #4
export const removeItemFromCartVersion2 = ( cartItems, cartItemToRemove ) => {

    return cartItems.filter( ( cartItem ) => cartItem.product !== cartItemToRemove.product );

}

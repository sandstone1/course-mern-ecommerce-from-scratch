
/*
// 1 -

import React from 'react';

import './order-screen-summary.styles.scss';


const OrderScreenSummary = ( { order } ) => {

    // create the order summary box and this box will contain (1) the total number of order items
    // (2) the subtotal of all the order items, (3) shipping price, (4) tax price and (5) the
    // total price

    // ==============================
    // TOTAL NUMBER OF ORDER ITEMS / CART ITEMS
    // ==============================

    // orderItemsCount
    // get the number of cart items using the reduce(); method and then show the result in
    // the output below
    const orderItemsCount = 
        order.orderItems.reduce( ( accumlator, currentElement ) =>
            accumlator + currentElement.quantity,
            0
        );

    // ==============================
    // ORDER ITEMS PRICE
    // ==============================

    // get the dollar subtotal for all the items in the cart and again we will use the
    // reduce(); method and then show the result in the output below

    // Step 1 - orderItemsPrice
    // get the cart items total price before shipping and taxes
    const orderItemsPrice =
        order.orderItems.reduce( ( accumlator, currentElement ) =>
            accumlator + currentElement.quantity * currentElement.price,
            0
        );

    // Step 2 - orderItemsPrice
    // create a function to add 2 decimals to orderItemsPrice and I tested this and
    // it works
    const addDecimals = ( number ) => {
        return ( Math.round( number * 100 ) / 100 ).toFixed( 2 ) 
    }

    // Step 3 - orderItemsPrice
    // remember cartItemsSubtotalPriceWithTwoDecimals is a number
    // add 2 decimals toorderItemsPrice
    const orderItemsPriceWithTwoDecimals = addDecimals( orderItemsPrice );

    // Step 4 - orderItemsPrice
    // convert the orderItemsPriceWithTwoDecimals to a string for display purposes and we
    // want to add commas to the orderItemsPriceWithTwoDecimals and the function below
    // will add commas to the orderItemsPriceWithTwoDecimals and the function came from
    // stackoverflow
    function numberWithCommas( x ) {
        return x.toString().replace( /\B(?=(\d{3})+(?!\d))/g, "," );
    }

    // Step 5 - orderItemsPrice
    // remember orderItemsPriceWithTwoDecimalsAndCommas is a string
    // run the function numberWithCommas(); and use orderItemsPriceWithTwoDecimals as the
    // argument
    const orderItemsPriceWithTwoDecimalsAndCommas = numberWithCommas( orderItemsPriceWithTwoDecimals );

    // ==============================
    // SHIPPING PRICE
    // ==============================

    // Step 1 - orderShippingPrice
    // if the orderItemsPriceWithTwoDecimals is greater than $100 then shipping is free otherwise
    // shipping is a flat $10
    const orderShippingPrice = orderItemsPriceWithTwoDecimals > 100 ? 0 : 10;

    // Step 2 - orderShippingPrice
    // remember orderItemsPriceWithTwoDecimals is a number
    // add 2 decimals to orderShippingPrice
    const orderShippingPriceWithTwoDecimals = addDecimals( orderShippingPrice );

    // ==============================
    // TAX PRICE
    // ==============================

    // Step 1 - orderTaxPrice
    // were going to assume the taxes charged are 15% of the subtotal price and we want this
    // to be a number and not a string so we will apply the Number() function to the calculation
    // below
    const orderTaxPrice = Number( ( orderItemsPrice * 0.15 ) );

    // Step 2 - orderTaxPrice
    // remember orderTaxPriceWithTwoDecimals is a number
    // add 2 decimals to orderTaxPrice
    const orderTaxPriceWithTwoDecimals = addDecimals( orderTaxPrice );

    // Step 3 - orderTaxPrice
    // remember orderTaxPriceWithTwoDecimalsAndCommas is a string
    // run the function numberWithCommas(); and use orderTaxPriceWithTwoDecimals as the argument
    const orderTaxPriceWithTwoDecimalsAndCommas = numberWithCommas( orderTaxPriceWithTwoDecimals );

    // ==============================
    // TOTAL PRICE
    // ==============================

    // Step 1 - orderTotalPrice
    // add order items price and shipping price and tax price to get orderTotalPrice and wrap each one
    // in the Number() function just to make sure we are working with numbers
    const orderTotalPrice = 
        Number( orderItemsPriceWithTwoDecimals ) +
        Number( orderShippingPriceWithTwoDecimals ) +
        Number( orderTaxPriceWithTwoDecimals );

    // Step 2 - orderTotalPrice
    // remember orderTotalPriceWithTwoDecimals is a number
    // make sure orderTotalPrice has 2 decimals
    const orderTotalPriceWithTwoDecimals = orderTotalPrice.toFixed( 2 );

    // Step 3 - orderTotalPrice
    // remember orderTotalPriceWithTwoDecimalsAndCommas is a string
    // run the function numberWithCommas(); and use orderTotalPriceWithTwoDecimals as the argument
    const orderTotalPriceWithTwoDecimalsAndCommas = numberWithCommas( orderTotalPriceWithTwoDecimals );

    return (

        <div className="order-screen--order-summary">  

            { /* column 2 - subtotal box */ /* }
            <div className="order-screen--order-summary--subtotal">

                <span className="order-screen--order-summary--subtotal--title">
                    Order Summary
                </span>

                <div className="order-screen--order-summary--subtotal--description">
                    <div className="order-screen--order-summary--subtotal--description--1">
                        <span className="order-screen--order-summary--subtotal--description--1--a">
                            Unit total:
                        </span>                                            
                        <span className="order-screen--order-summary--subtotal--description--1--b">
                            { orderItemsCount } items
                        </span>
                    </div>
                    <div className="order-screen--order-summary--subtotal--description--2">
                        <span className="order-screen--order-summary--subtotal--description--2--a">
                            Subtotal:
                        </span>
                        <span className="order-screen--order-summary--subtotal--description--2--b">
                            ${ orderItemsPriceWithTwoDecimalsAndCommas }
                        </span>
                    </div>
                    <div className="order-screen--order-summary--subtotal--description--3">
                        <span className="order-screen--order-summary--subtotal--description--3--a">
                            Shipping:
                        </span>
                        <span className="order-screen--order-summary--subtotal--description--3--b">
                            ${ orderShippingPriceWithTwoDecimals }
                        </span>
                    </div>
                    <div className="order-screen--order-summary--subtotal--description--4">
                        <span className="order-screen--order-summary--subtotal--description--4--a">
                            Tax:
                        </span>
                        <span className="order-screen--order-summary--subtotal--description--4--b">
                            ${ orderTaxPriceWithTwoDecimalsAndCommas }
                        </span>
                    </div>
                    <div className="order-screen--order-summary--subtotal--description--5">
                        <span className="order-screen--order-summary--subtotal--description--5--a">
                            Total:
                        </span>
                        <span className="order-screen--order-summary--subtotal--description--5--b">
                            ${ orderTotalPriceWithTwoDecimalsAndCommas }
                        </span>
                    </div>
                </div>

            </div>

        </div>
        
    );

}

export default OrderScreenSummary;



// End of 1 -
*/


























// ===============================

























/*
// at the beginning of lecture 60, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React from 'react';

import './order-screen-summary.styles.scss';


// 2 - continued

// import in PayPalButton
import { PayPalButton } from 'react-paypal-button-v2';
// import in the orderPayActionCreator
import { orderPayActionCreator } from '../../redux/actions/order.actions';
// import in the useDispatch(); hook
import { useDispatch } from 'react-redux';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner.component';

// End of 2 -


const OrderScreenSummary = ( { orderId, order, loadingPay, sdkReady } ) => {

    // create the order summary box and this box will contain (1) the total number of order items
    // (2) the subtotal of all the order items, (3) shipping price, (4) tax price and (5) the
    // total price

    // ==============================
    // TOTAL NUMBER OF ORDER ITEMS
    // ==============================

    // orderItemsCount
    // get the number of order items using the reduce(); method and then show the result in
    // the output below
    const orderItemsCount = 
        order.orderItems.reduce( ( accumlator, currentElement ) =>
            accumlator + currentElement.quantity,
            0
        );

    // ==============================
    // ORDER ITEMS PRICE
    // ==============================

    // get the dollar subtotal for all the order items and again we will use the
    // reduce(); method and then show the result in the output below

    // Step 1 - orderItemsPrice
    // get the order items total price before shipping and taxes
    const orderItemsPrice =
        order.orderItems.reduce( ( accumlator, currentElement ) =>
            accumlator + currentElement.quantity * currentElement.price,
            0
        );

    // Step 2 - orderItemsPrice
    // create a function to add 2 decimals to orderItemsPrice and I tested this and
    // it works
    const addDecimals = ( number ) => {
        return ( Math.round( number * 100 ) / 100 ).toFixed( 2 ) 
    }

    // Step 3 - orderItemsPrice
    // remember orderItemsSubtotalPriceWithTwoDecimals is a number
    // add 2 decimals to orderItemsPrice
    const orderItemsPriceWithTwoDecimals = addDecimals( orderItemsPrice );

    // Step 4 - orderItemsPrice
    // convert the orderItemsPriceWithTwoDecimals to a string for display purposes and we
    // want to add commas to the orderItemsPriceWithTwoDecimals and the function below
    // will add commas to the orderItemsPriceWithTwoDecimals and the function came from
    // stackoverflow
    function numberWithCommas( x ) {
        return x.toString().replace( /\B(?=(\d{3})+(?!\d))/g, "," );
    }

    // Step 5 - orderItemsPrice
    // remember orderItemsPriceWithTwoDecimalsAndCommas is a string
    // run the function numberWithCommas(); and use orderItemsPriceWithTwoDecimals as the
    // argument
    const orderItemsPriceWithTwoDecimalsAndCommas = numberWithCommas( orderItemsPriceWithTwoDecimals );

    // ==============================
    // SHIPPING PRICE
    // ==============================

    // Step 1 - orderShippingPrice
    // if the orderItemsPriceWithTwoDecimals is greater than $100 then shipping is free otherwise
    // shipping is a flat $10
    const orderShippingPrice = orderItemsPriceWithTwoDecimals > 100 ? 0 : 10;

    // Step 2 - orderShippingPrice
    // remember orderShippingPriceWithTwoDecimals is a number
    // add 2 decimals to orderShippingPrice
    const orderShippingPriceWithTwoDecimals = addDecimals( orderShippingPrice );

    // ==============================
    // TAX PRICE
    // ==============================

    // Step 1 - orderTaxPrice
    // were going to assume the taxes charged are 15% of the subtotal price and we want this
    // to be a number and not a string so we will apply the Number() function to the calculation
    // below
    const orderTaxPrice = Number( ( orderItemsPrice * 0.15 ) );

    // Step 2 - orderTaxPrice
    // remember orderTaxPriceWithTwoDecimals is a number
    // add 2 decimals to orderTaxPrice
    const orderTaxPriceWithTwoDecimals = addDecimals( orderTaxPrice );

    // Step 3 - orderTaxPrice
    // remember orderTaxPriceWithTwoDecimalsAndCommas is a string
    // run the function numberWithCommas(); and use orderTaxPriceWithTwoDecimals as the argument
    const orderTaxPriceWithTwoDecimalsAndCommas = numberWithCommas( orderTaxPriceWithTwoDecimals );

    // ==============================
    // TOTAL PRICE
    // ==============================

    // Step 1 - orderTotalPrice
    // add order items price and shipping price and tax price to get orderTotalPrice and wrap each one
    // in the Number() function just to make sure we are working with numbers
    const orderTotalPrice = 
        Number( orderItemsPriceWithTwoDecimals ) +
        Number( orderShippingPriceWithTwoDecimals ) +
        Number( orderTaxPriceWithTwoDecimals );

    // Step 2 - orderTotalPrice
    // remember orderTotalPriceWithTwoDecimals is a number
    // make sure the orderTotalPrice has 2 decimals
    const orderTotalPriceWithTwoDecimals = orderTotalPrice.toFixed( 2 );

    // Step 3 - orderTotalPrice
    // remember orderTotalPriceWithTwoDecimalsAndCommas is a string
    // run the function numberWithCommas(); and use orderTotalPriceWithTwoDecimals as the argument
    const orderTotalPriceWithTwoDecimalsAndCommas = numberWithCommas( orderTotalPriceWithTwoDecimals );

    // ==============================
    // PAYPAL BUTTONS
    // ==============================

    // 2 -
    // coming from the order-screen.component.jsx 9 - file

    // destructure orderId, loadingPay and sdkReady and add them as arguments to
    // OrderScreenSummary() and then add the code for the PayPal buttons below and then import
    // in the PayPalButton component, the Spinner component, the useDispatch(); hook and
    // the orderPayActionCreator

    // define dispatch
    const dispatch = useDispatch();

    // define the handleSuccessPayment function and once we press the PayPal button we
    // get a paymentResult that we can use as the argument to handleSuccessPayment()
    const handleSuccessPayment = ( paymentResult ) => {

        // e.preventDefault();

        console.log( paymentResult );

        // the console.log( paymentResult ); results in the following ( see below )

        // and remember once the user presses the PayPal button we will update the database
        // to paid or " isPaid : true ", set paidAt to the current date and then add the
        // paymentResult object to the database

        // once we dispatch the orderPayActionCreator then the orderPayReducer will be updated
        // and success or successPay will evaluate to true in the order-screen.component.jsx
        // 6 - file and then we will dispatch the orderGetActionCreator again or
        // " dispatch( orderGetActionCreator( orderId ) ); " and this will cause the
        // orderGetReducer to update and then order will update in the
        // order-screen.component.jsx file and this will then update " order.isPaid "
        // to true

        // inside this function we want to call the orderPayActionCreator
        dispatch( orderPayActionCreator( orderId, paymentResult ) );

    } // end of handleSuccessPayment()

    // now let's test this out by going back to the order screen and clicking on the PayPal
    // button and when I click on this button a pop up window appears that looks like the
    // following:

    /*
        PayPal => Heading

        Pay with PayPal => Heading

        With a PayPal account, you're eligible for free return shipping, Purchase Protection,
        and more.

        Some of your info isn't correct. Please try again.

        Email or mobile number
        Enter my email ID from my personal sandbox test account => Input Field
        
        Password
        Enter my password from my personal sandbox test account => Input Field

        Checkbox => Stay logged in for faster purchases

        Log In => Button
        or
        Pay with Debit or Credit Card => Button
    */

    // and then press the Log In button and then I see the following page in PayPal or:

    /*
        John Doe's Test Store => Heading

        PayPal => Heading              Shopping cart icon => $3,829.42 USD

        ---------------------

        Hi, John!

        ---------------------

        Ship to
        John Doe
        1 Main St, San Jose, CA 95131

        Change => Text Button

        Checkbox => Make this my preferred shipping address
        
        ---------------------

        Pay with => Heading

        OPTION 1 - 1st Checkbox => PayPal           Balance $3,829.42 USD

        Checkbox => Make this my preferred way to pay

        OPTION 2 - 2nd Checkbox => CREDIT UNION 1      Checking ••••0192

        OPTION 3 - 3rd Checkbox => The Bank Card       Credit ••••6148

        + Add debit or credit card

        OPTION 4 - Pay later NEW

        OPTION 5 - PayPal Credit
        Apply for PayPal Credit
        No Interest if paid in full in 6 months for your purchase of $3,829.42.
        Subject to credit approval. See terms => Text Button

        ---------------------

        View PayPal Policies and your payment method rights. => Small Text

        Pay Now => Big Button

        ---------------------

        Cancel and return to John Doe's Test Store => Small Text

        © 1999 - 2021       Legal       Privacy => Small Text
    */

    // and the URL for the above page is:
    // " https://www.sandbox.paypal.com/webapps/hermes?flow=1-P&ulReturn=true&sessionID=3 ...

    // and let's select on the OPTION 2 or the fake Credit Union option and then
    // press the Pay Now button and then what happens is:

    // 1 - the page above disappears and then on the order screen we see

    // 2 - the PayPal buttons in the Order Summary box disappear and

    // 3 - the error message that says: " Order has not been paid. " changes to
    // " Paid on 2021-03-28T00:44:05.606Z "

    // and this is correct so everything is working as expected

    // and in the console I see my paymentResult object, which looks like the following:

    /*
        { id: "3FC72521D6610431H", intent: "CAPTURE", status: "COMPLETED", purchase_units: Array(1), payer: {…}, … }
        create_time: "2021-03-27T23:58:41Z"
        id: "3FC72521D6610431H"
        intent: "CAPTURE"
        links: Array(1)
            0:
                href: "https://api.sandbox.paypal.com/v2/checkout/orders/3FC72521D6610431H"
                method: "GET"
                rel: "self"
            __proto__: Object
            length: 1
        __proto__: Array(0)
        payer:
            address: {country_code: "US"}
            email_address: "sb-imwnc3507651@personal.example.com"
            name: {given_name: "John", surname: "Doe"}
            payer_id: "UVNZBETZ33LEN"
            __proto__: Object
        purchase_units: Array(1)
            0:
                amount: {currency_code: "USD", value: "3829.42"}
                payee:
                    email_address: "sb-xgi4f5538287@business.example.com"
                    merchant_id: "VUC23RYNC953E"
                __proto__: Object
                payments:
                    captures: Array(1)
                        0: {id: "1H359831F63267940", status: "COMPLETED", amount: {…}, final_capture: true, seller_protection: {…}, …}
                        length: 1
                    __proto__: Array(0)
                __proto__: Object
                reference_id: "default"
                shipping:
                    address: {address_line_1: "1 Main St", admin_area_2: "San Jose", admin_area_1: "CA", postal_code: "95131", country_code: "US"}
                    name: {full_name: "John Doe"}
                __proto__: Object
                length: 1
            __proto__: Array(0)
        status: "COMPLETED"
        update_time: "2021-03-27T23:59:27Z"
        __proto__: Object
    */

    // the order in the database now looks like the following:

    /*
        _id: ObjectId("605be610a98aeb495bfc55f7")
        shippingPrice: 0
        taxPrice: 499.49
        totalPrice: 3829.42
        isPaid: true
        isDelivered: false
        orderItems: Array
        shippingAddress: Object
        paymentMethod: "Credit Card"
        user: ObjectId("5ff504545a6a66457f0b0705")
        createdAt: 2021-03-25T01:23:28.556+00:00
        updatedAt: 2021-03-28T00:44:05.611+00:00
        __v: 0
        paidAt: 2021-03-28T00:44:05.606+00:00
        paymentResult: Object
            id: "5CF69406WR426481N"
            status: "COMPLETED"
            update_time: "2021-03-28T00:44:05Z"
            email_address: "sb-imwnc3507651@personal.example.com"
    */

    // and this is correct so everything is working as expected

    // right now the order we just paid for is still marked as " Order has not been delivered. "
    // on the order screen and later on we will add a button under the Order Summary box so that
    // admins can mark shipments as delivered 

    // in the next video, we will go back and update the profile screen so that we can list all
    // the orders from a particular user and place those orders under the " My Orders " section
    // of the profile screen

    // End of 2 -


    /*
    return (

        <div className="order-screen--order-summary">  

            { /* column 2 - subtotal box */ /* }
            <div className="order-screen--order-summary--subtotal">

                <span className="order-screen--order-summary--subtotal--title">
                    Order Summary
                </span>

                <div className="order-screen--order-summary--subtotal--description">
                    <div className="order-screen--order-summary--subtotal--description--1">
                        <span className="order-screen--order-summary--subtotal--description--1--a">
                            Unit total:
                        </span>                                            
                        <span className="order-screen--order-summary--subtotal--description--1--b">
                            { orderItemsCount } items
                        </span>
                    </div>
                    <div className="order-screen--order-summary--subtotal--description--2">
                        <span className="order-screen--order-summary--subtotal--description--2--a">
                            Subtotal:
                        </span>
                        <span className="order-screen--order-summary--subtotal--description--2--b">
                            ${ orderItemsPriceWithTwoDecimalsAndCommas }
                        </span>
                    </div>
                    <div className="order-screen--order-summary--subtotal--description--3">
                        <span className="order-screen--order-summary--subtotal--description--3--a">
                            Shipping:
                        </span>
                        <span className="order-screen--order-summary--subtotal--description--3--b">
                            ${ orderShippingPriceWithTwoDecimals }
                        </span>
                    </div>
                    <div className="order-screen--order-summary--subtotal--description--4">
                        <span className="order-screen--order-summary--subtotal--description--4--a">
                            Tax:
                        </span>
                        <span className="order-screen--order-summary--subtotal--description--4--b">
                            ${ orderTaxPriceWithTwoDecimalsAndCommas }
                        </span>
                    </div>
                    <div className="order-screen--order-summary--subtotal--description--5">
                        <span className="order-screen--order-summary--subtotal--description--5--a">
                            Total:
                        </span>
                        <span className="order-screen--order-summary--subtotal--description--5--b">
                            ${ orderTotalPriceWithTwoDecimalsAndCommas }
                        </span>
                    </div>
                </div>

                { /* add PayPal buttons */ /* }
                {
                    !order.isPaid && (

                        <div className="order-screen--order-summary--subtotal--paypal-buttons">

                            { /* check loading */ /* }
                            { loadingPay && <Spinner /> }
                            
                            { /* check sdkReady */ /* }
                            { 
                                !sdkReady ? <Spinner /> : (

                                    <PayPalButton 
                                        amount={ order.totalPrice }
                                        onSuccess={ handleSuccessPayment }
                                    />

                                )
                            }

                        </div>

                    )
                }

            </div>

        </div>
        
    );

}


export default OrderScreenSummary;
*/


























// ===============================


























// at the beginning of lecture 64, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React from 'react';
// import in the useDispatch(); hook
import { useDispatch } from 'react-redux';
// import in PayPalButton
import { PayPalButton } from 'react-paypal-button-v2';
// import in the orderPayActionCreator
import { orderPayActionCreator } from '../../redux/actions/order.actions';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner.component';

import './order-screen-summary.styles.scss';


const OrderScreenSummary = ( { orderId, order, loadingPay, sdkReady } ) => {

    // create the order summary box and this box will contain (1) the total number of order items
    // (2) the subtotal of all the order items, (3) shipping price, (4) tax price and (5) the
    // total price

    // ==============================
    // TOTAL NUMBER OF ORDER ITEMS
    // ==============================

    // orderItemsCount
    // get the number of order items using the reduce(); method and then show the result in
    // the output below
    const orderItemsCount = 
        order.orderItems.reduce( ( accumlator, currentElement ) =>
            accumlator + currentElement.quantity,
            0
        );

    // ==============================
    // ORDER ITEMS PRICE
    // ==============================

    // get the dollar subtotal for all the order items and again we will use the
    // reduce(); method and then show the result in the output below

    // Step 1 - orderItemsPrice
    // get the order items total price before shipping and taxes
    const orderItemsPrice =
        order.orderItems.reduce( ( accumlator, currentElement ) =>
            accumlator + currentElement.quantity * currentElement.price,
            0
        );

    // Step 2 - orderItemsPrice
    // create a function to add 2 decimals to orderItemsPrice and I tested this and
    // it works
    const addDecimals = ( number ) => {
        return ( Math.round( number * 100 ) / 100 ).toFixed( 2 ) 
    }

    // Step 3 - orderItemsPrice
    // remember orderItemsSubtotalPriceWithTwoDecimals is a number
    // add 2 decimals to orderItemsPrice
    const orderItemsPriceWithTwoDecimals = addDecimals( orderItemsPrice );

    // Step 4 - orderItemsPrice
    // convert the orderItemsPriceWithTwoDecimals to a string for display purposes and we
    // want to add commas to the orderItemsPriceWithTwoDecimals and the function below
    // will add commas to the orderItemsPriceWithTwoDecimals and the function came from
    // stackoverflow
    function numberWithCommas( x ) {
        return x.toString().replace( /\B(?=(\d{3})+(?!\d))/g, "," );
    }

    // Step 5 - orderItemsPrice
    // remember orderItemsPriceWithTwoDecimalsAndCommas is a string
    // run the function numberWithCommas(); and use orderItemsPriceWithTwoDecimals as the
    // argument
    const orderItemsPriceWithTwoDecimalsAndCommas = numberWithCommas( orderItemsPriceWithTwoDecimals );

    // ==============================
    // SHIPPING PRICE
    // ==============================

    // Step 1 - orderShippingPrice
    // if the orderItemsPriceWithTwoDecimals is greater than $100 then shipping is free otherwise
    // shipping is a flat $10
    const orderShippingPrice = orderItemsPriceWithTwoDecimals > 100 ? 0 : 10;

    // Step 2 - orderShippingPrice
    // remember orderShippingPriceWithTwoDecimals is a number
    // add 2 decimals to orderShippingPrice
    const orderShippingPriceWithTwoDecimals = addDecimals( orderShippingPrice );

    // ==============================
    // TAX PRICE
    // ==============================

    // Step 1 - orderTaxPrice
    // were going to assume the taxes charged are 15% of the subtotal price and we want this
    // to be a number and not a string so we will apply the Number() function to the calculation
    // below
    const orderTaxPrice = Number( ( orderItemsPrice * 0.15 ) );

    // Step 2 - orderTaxPrice
    // remember orderTaxPriceWithTwoDecimals is a number
    // add 2 decimals to orderTaxPrice
    const orderTaxPriceWithTwoDecimals = addDecimals( orderTaxPrice );

    // Step 3 - orderTaxPrice
    // remember orderTaxPriceWithTwoDecimalsAndCommas is a string
    // run the function numberWithCommas(); and use orderTaxPriceWithTwoDecimals as the argument
    const orderTaxPriceWithTwoDecimalsAndCommas = numberWithCommas( orderTaxPriceWithTwoDecimals );

    // ==============================
    // TOTAL PRICE
    // ==============================

    // Step 1 - orderTotalPrice
    // add order items price and shipping price and tax price to get orderTotalPrice and wrap each one
    // in the Number() function just to make sure we are working with numbers
    const orderTotalPrice = 
        Number( orderItemsPriceWithTwoDecimals ) +
        Number( orderShippingPriceWithTwoDecimals ) +
        Number( orderTaxPriceWithTwoDecimals );

    // Step 2 - orderTotalPrice
    // remember orderTotalPriceWithTwoDecimals is a number
    // make sure the orderTotalPrice has 2 decimals
    const orderTotalPriceWithTwoDecimals = orderTotalPrice.toFixed( 2 );

    // Step 3 - orderTotalPrice
    // remember orderTotalPriceWithTwoDecimalsAndCommas is a string
    // run the function numberWithCommas(); and use orderTotalPriceWithTwoDecimals as the argument
    const orderTotalPriceWithTwoDecimalsAndCommas = numberWithCommas( orderTotalPriceWithTwoDecimals );


    //---------------------------------------------------------------------


    // ==============================
    // PAYPAL BUTTONS & HANDLESUCCESSPAYMENT
    // ==============================

    // define dispatch
    const dispatch = useDispatch();

    // define the handleSuccessPayment function and once we press the PayPal button we
    // get a paymentResult object from PayPal and this paymentResult object will be an argument
    // to the handleSuccessPayment function
    const handleSuccessPayment = ( paymentResult ) => {

        // and remember once the user presses the PayPal button we will update the database
        // to paid or " isPaid : true ", set paidAt to the current date and then add the
        // paymentResult object to the database

        // once we dispatch the orderPayActionCreator then the orderPayReducer will update
        // and then successPay will update and evaluate to true in the
        // order-screen.component.jsx file and once successPay is true then we will dispatch
        // the orderGetActionCreator again and this will cause the orderGetReducer
        // to update and then this will cause the order object to update in the
        // order-screen.component.jsx file and then this will cause " order.isPaid " to update
        // and evaluate to true

        // inside this function call the orderPayActionCreator
        dispatch( orderPayActionCreator( orderId, paymentResult ) );

    } // end of handleSuccessPayment()

    // once we pay for the order then the PayPal buttons in the Order Summary box disappear
    // and the error message that says: " Order has not been paid. " changes to
    // " Paid on 2021-03-28T00:44:05.606Z "

    // and after we pay for the order, the order in the database updates and now looks
    // like the following ( see below ) ( we see isPaid changes to true or
    // " isPaid: true " and we add paidAt to the database or
    // " paidAt: 2021-03-28T00:44:05.606+00:00 " and we add the paymentResult object 
    // to the database as well ):

    /*
        _id: ObjectId("605be610a98aeb495bfc55f7")
        shippingPrice: 0
        taxPrice: 499.49
        totalPrice: 3829.42
        isPaid: true
        isDelivered: false
        orderItems: Array
        shippingAddress: Object
        paymentMethod: "Credit Card"
        user: ObjectId("5ff504545a6a66457f0b0705")
        createdAt: 2021-03-25T01:23:28.556+00:00
        updatedAt: 2021-03-28T00:44:05.611+00:00
        __v: 0
        paidAt: 2021-03-28T00:44:05.606+00:00
        paymentResult: Object
            id: "5CF69406WR426481N"
            status: "COMPLETED"
            update_time: "2021-03-28T00:44:05Z"
            email_address: "sb-imwnc3507651@personal.example.com"
    */


    return (

        <div className="order-screen--order-summary">  

            { /* column 2 - subtotal box */ }
            <div className="order-screen--order-summary--subtotal">

                <span className="order-screen--order-summary--subtotal--title">
                    Order Summary
                </span>

                <div className="order-screen--order-summary--subtotal--description">
                    <div className="order-screen--order-summary--subtotal--description--1">
                        <span className="order-screen--order-summary--subtotal--description--1--a">
                            Unit total:
                        </span>                                            
                        <span className="order-screen--order-summary--subtotal--description--1--b">
                            { orderItemsCount } items
                        </span>
                    </div>
                    <div className="order-screen--order-summary--subtotal--description--2">
                        <span className="order-screen--order-summary--subtotal--description--2--a">
                            Subtotal:
                        </span>
                        <span className="order-screen--order-summary--subtotal--description--2--b">
                            ${ orderItemsPriceWithTwoDecimalsAndCommas }
                        </span>
                    </div>
                    <div className="order-screen--order-summary--subtotal--description--3">
                        <span className="order-screen--order-summary--subtotal--description--3--a">
                            Shipping:
                        </span>
                        <span className="order-screen--order-summary--subtotal--description--3--b">
                            ${ orderShippingPriceWithTwoDecimals }
                        </span>
                    </div>
                    <div className="order-screen--order-summary--subtotal--description--4">
                        <span className="order-screen--order-summary--subtotal--description--4--a">
                            Tax:
                        </span>
                        <span className="order-screen--order-summary--subtotal--description--4--b">
                            ${ orderTaxPriceWithTwoDecimalsAndCommas }
                        </span>
                    </div>
                    <div className="order-screen--order-summary--subtotal--description--5">
                        <span className="order-screen--order-summary--subtotal--description--5--a">
                            Total:
                        </span>
                        <span className="order-screen--order-summary--subtotal--description--5--b">
                            ${ orderTotalPriceWithTwoDecimalsAndCommas }
                        </span>
                    </div>
                </div>

                { /* add PayPal buttons if the order has not been paid */ }
                {
                    !order.isPaid && (

                        <div className="order-screen--order-summary--subtotal--paypal-buttons">

                            { /* check loadingPay */ }
                            { loadingPay && <Spinner /> }

                            { /* check sdkReady */ }
                            {
                                !sdkReady ? <Spinner /> : (

                                    <PayPalButton 
                                        amount={ order.totalPrice }
                                        onSuccess={ handleSuccessPayment }
                                    />

                                )
                            }

                        </div>

                    )
                }

            </div>

        </div>
        
    );

}


export default OrderScreenSummary;


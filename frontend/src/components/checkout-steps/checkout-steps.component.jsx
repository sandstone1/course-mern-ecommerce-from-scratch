
/*
// 1 -
import React from 'react';
// import in the Link component
import { Link } from 'react-router-dom';

import './checkout-steps.styles.scss';

// create 4 steps for the checkout process and if the steps evaluate to true then we highlight
// that step in the breadcrumbs and remember the steps have to be passed into the CheckoutSteps
// component as a prop in order to evaluate to true; otherwise, the steps will evaluate to false
const CheckoutSteps = ( { step1, step2, step3, step4 } ) => {

    return (

        <nav className="checkout-steps">

            <ul className="checkout-steps--ul">

                <li className="checkout-steps--ul--li">
                    {
                        step1 ? (

                            <Link to="/login">
                                <i className="fas fa-sign-in-alt"></i>&nbsp;&nbsp;Sign In
                            </Link>

                        ) : (

                            <a href="/login" className="disabled">
                                <i className="fas fa-sign-in-alt"></i>&nbsp;&nbsp;Sign In
                            </a>

                        )
                    }
                </li>
                <li className="checkout-steps--ul--li">
                    {
                        step2 ? (

                            <Link to="/shipping">
                                <i class="fas fa-truck"></i>&nbsp;&nbsp;Shipping
                            </Link>

                        ) : (

                            <a href="/shipping" className="disabled">
                                <i class="fas fa-truck"></i>&nbsp;&nbsp;Shipping
                            </a>

                        )
                    }
                </li>
                <li className="checkout-steps--ul--li">
                    {
                        step3 ? (

                            <Link to="/payment">
                                <i class="fas fa-credit-card"></i>&nbsp;&nbsp;Payment
                            </Link>

                        ) : (

                            <a href="/payment" className="disabled">
                                <i class="fas fa-credit-card"></i>&nbsp;&nbsp;Payment
                            </a>

                        )
                    }
                </li>
                <li className="checkout-steps--ul--li">
                    {
                        step4 ? (

                            <Link to="/placeorder">
                                <i class="fas fa-shopping-cart"></i>&nbsp;&nbsp;Place Order
                            </Link>

                        ) : (

                            <a href="/placeorder" className="disabled">
                                <i class="fas fa-shopping-cart"></i>&nbsp;&nbsp;Place Order
                            </a>

                        )
                    }
                </li>

            </ul>

        </nav>

    );

}


export default CheckoutSteps;

// now let's go to the shipping-screen.component.jsx 4 - file

// End of 1 -
*/


























// ===============================



























// at the beginning of lecture 53, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React from 'react';
// import in the Link component
import { Link } from 'react-router-dom';

import './checkout-steps.styles.scss';

// create 4 steps for the checkout process and if the steps evaluate to true then we highlight
// that step in the breadcrumbs and remember the steps have to be passed into the CheckoutSteps
// component as a prop in order to evaluate to true; otherwise, the steps will evaluate to false
const CheckoutSteps = ( { step1, step2, step3, step4 } ) => {

    return (

        <nav className="checkout-steps">

            <ul className="checkout-steps--ul">

                <li className="checkout-steps--ul--li">
                    {
                        step1 ? (

                            <Link to="/login">
                                Sign In
                            </Link>

                        ) : (

                            <a href="/login" className="disabled">
                                Sign In
                            </a>

                        )
                    }
                </li>
                <li className="checkout-steps--ul--li">
                    {
                        step2 ? (

                            <Link to="/shipping">
                                Shipping
                            </Link>

                        ) : (

                            <a href="/shipping" className="disabled">
                                Shipping
                            </a>

                        )
                    }
                </li>
                <li className="checkout-steps--ul--li">
                    {
                        step3 ? (

                            <Link to="/payment">
                                Payment
                            </Link>

                        ) : (

                            <a href="/payment" className="disabled">
                                Payment
                            </a>

                        )
                    }
                </li>
                <li className="checkout-steps--ul--li">
                    {
                        step4 ? (

                            <Link to="/placeorder">
                                Place Order
                            </Link>

                        ) : (

                            <a href="/placeorder" className="disabled">
                                Place Order
                            </a>

                        )
                    }
                </li>

            </ul>

        </nav>

    );

}


export default CheckoutSteps;


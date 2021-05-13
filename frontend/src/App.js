
/*
import React from 'react';

// 1 -
// coming from the footer.component.jsx file and let's import in the Header and
// Footer components
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

// now we will be using something called react bootstrap and react bootstrap makes
// things easier because you don't have to write a lot of css and let's go look at the site
// at " react-bootstrap.github.io " and with buttons, for example, we import buttons as a
// react component or " <Button variant="primary">Primary</Button>{' '} " and use this instead
// of creating a seperate style for each button

// and basically we can construct our entire UI using these bootstrap react components and
// there are other UI libraries as well like Material UI and the reason Brad chose to use
// react bootstrap is because he doesn't want to focus on css in this course

// and we are going to use something called Bootswatch and Bootswatch are free themes for
// Bootstrap and let's go to that file now or " bootswatch.com " and we will use a theme called
// " Lux " and let's download " bootstrap.min.css " and place it in my src folder and then
// let's import this file in the index.js file and let's go to the index.js 1 - file now

// End of 1 -


// 2 -
// wrap our main content with a container and I decided to not use react-bootstrap so
// let's now uninstall react bootstrap
// import { Container } from 'react-bootstrap';

// #6
// react-bootstrap: " Rogers-iMac:frontend Home$ npm uninstall react-bootstrap " and this will remove
// react-bootstrap in our frontend project folder
// lecture 5: React-Bootstrap Setup, Header & Footer Components

// I will use sass instead
import './App.styles.scss';

// had to import in and use BrowserRouter below in order to use the Link component
import { BrowserRouter } from 'react-router-dom';

// let's go back to the index.js 2 - file

// End of 2 -


const App = () => {
  
    return (

        <BrowserRouter>
        
            <div className="app">

                <Header />

                <main className="app--main">

                    <h1>Welcome to the ProShop</h1>

                </main>

                <Footer />

            </div>

        </BrowserRouter>

    );

}


export default App;
*/












// ===============================

















// at the beginning of lecture 6, given all the notes, I created a new file below without
// the notes so we are starting fresh


/*
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomeScreen from './screens/home-screen/home-screen.component';
import ProductScreen from './screens/product-screen/product-screen.component';

import './App.styles.scss';


// 3 -
// remember the BrowserRouter uses HTML5 History API and this API uses push state and replace
// state and let's create a second route for the products screen and let's first create a new
// folder called " product-screen " and inside this folder let's create 2 new files, one called
// product-screen.component.jsx and another called product-screen.styles.scss and let's import
// in the ProductScreen component and then create the route down below and remember that
// " :id " is a placeholder or route parameter or the id paramater and what this means is that
// the placeholder could be anything so we could have " product/anything " and in the next video
// we will learn how to access this id parameter

// we can test this out by going to the home page and clicking on one of the products or
// " http://localhost:3008/product/1 ", for example, and when we do we are taken to the product
// screen so everything is working as expected

// and let's gp to the product.component.jsx 2 - file now

// End of 3 -


const App = () => {
  
    return (

        <Router>
        
            <div className="app">

                <Header />

                <main className="app--main">

                    <Switch>

                        <Route
                            exact
                            path='/'
                            component={ HomeScreen }
                        />

                        <Route
                            exact
                            path='/product/:id'
                            component={ ProductScreen }
                        />

                    </Switch>

                </main>

                <Footer />

            </div>

        </Router>

    );

}


export default App;
*/




















// ===============================
















/*
// at the beginning of lecture 31, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomeScreen from './screens/home-screen/home-screen.component';
import ProductScreen from './screens/product-screen/product-screen.component';

import './App.styles.scss';


// 4 - 
import CartScreen from './screens/cart-screen/cart-screen.component';

// and then let's create a new route for our CartScreen component below and for path we want
// to add the " ? " or " path='/cart/:id?' " so that the id parameter is optional and the reason
// we do that is because if we press on the cart link in the header we are taken to the following
// URL " http://localhost:3008/cart " so in this case we don't need the id parameter

// in the next video, we will build the cart reducer and the add to cart action creator and the
// action creator will get the product details from the database for whatever product is in the
// cart and we will add items to the cart and save those items in local storage and then we will
// build out the cart screen and show all the items in the cart

// End of 4 -


const App = () => {
  
    return (

        <Router>
        
            <div className="app">

                <Header />

                <main className="app--main">

                    <Switch>

                        <Route
                            exact
                            path='/'
                            component={ HomeScreen }
                        />

                        <Route
                            exact
                            path='/product/:id'
                            component={ ProductScreen }
                        />

                        <Route
                            exact
                            path='/cart/:id?'
                            component={ CartScreen }
                        />

                    </Switch>

                </main>

                <Footer />

            </div>

        </Router>

    );

}


export default App;
*/

















// ===============================



















// at the beginning of lecture 32, given all the notes, I created a new file below without
// the notes so we are starting fresh

/*
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomeScreen from './screens/home-screen/home-screen.component';
import ProductScreen from './screens/product-screen/product-screen.component';
import CartScreen from './screens/cart-screen/cart-screen.component';

import './App.styles.scss';

// 5 -
// coming from the sign-in-screen.componnet.jsx 1 - file
// let's import in the SignInScreen component
import SignInScreen from './screens/sign-in-screen/sign-in-screen.component';

// let's create the Route for the SignInScreen component below


const App = () => {
  
    return (

        <Router>
        
            <div className="app">

                <Header />

                <main className="app--main">

                    <Switch>

                        <Route
                            exact
                            path='/'
                            component={ HomeScreen }
                        />

                        <Route
                            exact
                            path='/product/:id'
                            component={ ProductScreen }
                        />

                        <Route
                            exact
                            path='/cart/:id?'
                            component={ CartScreen }
                        />

                        <Route
                            exact
                            path='/login'
                            component={ SignInScreen }
                        />

                    </Switch>

                </main>

                <Footer />

            </div>

        </Router>

    );

}

// End of 5 -


export default App;
*/




















// ===============================





















// at the beginning of lecture 32, given all the notes, I created a new file below without
// the notes so we are starting fresh

/*
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomeScreen from './screens/home-screen/home-screen.component';
import ProductScreen from './screens/product-screen/product-screen.component';
import CartScreen from './screens/cart-screen/cart-screen.component';
import SignInScreen from './screens/sign-in-screen/sign-in-screen.component';


// 6 -
// import in the RegisterScreen component and then add the Register route below
import RegisterScreen from './screens/register/register-screen.component';

// End of 6 -


import './App.styles.scss';


const App = () => {
  
    return (

        <Router>
        
            <div className="app">

                <Header />

                <main className="app--main">

                    <Switch>

                        <Route
                            exact
                            path='/'
                            component={ HomeScreen }
                        />

                        <Route
                            exact
                            path='/product/:id'
                            component={ ProductScreen }
                        />

                        <Route
                            exact
                            path='/cart/:id?'
                            component={ CartScreen }
                        />

                        <Route
                            exact
                            path='/login'
                            component={ SignInScreen }
                        />

                        <Route
                            exact
                            path='/register'
                            component={ RegisterScreen }
                        />

                    </Switch>

                </main>

                <Footer />

            </div>

        </Router>

    );

}


export default App;
*/























// ===============================





















// at the beginning of lecture 47, given all the notes, I created a new file below without
// the notes so we are starting fresh

/*
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomeScreen from './screens/home-screen/home-screen.component';
import ProductScreen from './screens/product-screen/product-screen.component';
import CartScreen from './screens/cart-screen/cart-screen.component';
import SignInScreen from './screens/sign-in-screen/sign-in-screen.component';
import RegisterScreen from './screens/register/register-screen.component';

import './App.styles.scss';


// 7 -
// coming from the profile-screen.component.jsx 1 -
// add a route for our profile screen
import ProfileScreen from './screens/profile-screen/profile-screen.component';


const App = () => {
  
    return (

        <Router>
        
            <div className="app">

                <Header />

                <main className="app--main">

                    <Switch>

                        <Route
                            exact
                            path='/'
                            component={ HomeScreen }
                        />

                        <Route
                            exact
                            path='/product/:id'
                            component={ ProductScreen }
                        />

                        <Route
                            exact
                            path='/cart/:id?'
                            component={ CartScreen }
                        />

                        <Route
                            exact
                            path='/login'
                            component={ SignInScreen }
                        />

                        <Route
                            exact
                            path='/register'
                            component={ RegisterScreen }
                        />

                        <Route
                            exact
                            path='/profile'
                            component={ ProfileScreen }
                        />

                    </Switch>

                </main>

                <Footer />

            </div>

        </Router>

    );

}

// now let's go back to the profile-screen.component.jsx 2 - file

// End of 7 -


export default App;
*/

























// ===============================






















/*
// at the beginning of lecture 49, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomeScreen from './screens/home-screen/home-screen.component';
import ProductScreen from './screens/product-screen/product-screen.component';
import CartScreen from './screens/cart-screen/cart-screen.component';
import SignInScreen from './screens/sign-in-screen/sign-in-screen.component';
import RegisterScreen from './screens/register-screen/register-screen.component';
import ProfileScreen from './screens/profile-screen/profile-screen.component';

import './App.styles.scss';


// 8 -
// coming from the shipping-screen.component.jsx 1 - file
import ShippingScreen from './screens/shipping-screen/shipping-screen.component';

// and add the ShippingScreen component below and if I go to the shipping screen or
// " http://localhost:3008/shipping " I now see " Shipping " so everything is working
// as expected

// let's go back to the shipping-screen.component 2 - file now

// End of 8 -


const App = () => {
  
    return (

        <Router>
        
            <div className="app">

                <Header />

                <main className="app--main">

                    <Switch>

                        <Route
                            exact
                            path='/'
                            component={ HomeScreen }
                        />

                        <Route
                            exact
                            path='/product/:id'
                            component={ ProductScreen }
                        />

                        <Route
                            exact
                            path='/cart/:id?'
                            component={ CartScreen }
                        />

                        <Route
                            exact
                            path='/login'
                            component={ SignInScreen }
                        />

                        <Route
                            exact
                            path='/register'
                            component={ RegisterScreen }
                        />

                        <Route
                            exact
                            path='/profile'
                            component={ ProfileScreen }
                        />

                        <Route
                            exact
                            path='/shipping'
                            component={ ShippingScreen }
                        />

                    </Switch>

                </main>

                <Footer />

            </div>

        </Router>

    );

}


export default App;
*/


























// ===============================






















/*
// at the beginning of lecture 52, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomeScreen from './screens/home-screen/home-screen.component';
import ProductScreen from './screens/product-screen/product-screen.component';
import CartScreen from './screens/cart-screen/cart-screen.component';
import SignInScreen from './screens/sign-in-screen/sign-in-screen.component';
import RegisterScreen from './screens/register-screen/register-screen.component';
import ProfileScreen from './screens/profile-screen/profile-screen.component';
import ShippingScreen from './screens/shipping-screen/shipping-screen.component';

import './App.styles.scss';


// 9 -
// coming from the payment-screen.component.jsx 1 - file
import PaymentScreen from './screens/payment-screen/payment-screen.component';

// and add the PaymentScreen component below and if I go to the payment screen or
// " http://localhost:3008/payment " I now see " Payment Method " so everything is working
// as expected

// let's go back to the payment-screen.component 2 - file now

// End of 9 -


const App = () => {
  
    return (

        <Router>
        
            <div className="app">

                <Header />

                <main className="app--main">

                    <Switch>

                        <Route
                            exact
                            path='/'
                            component={ HomeScreen }
                        />

                        <Route
                            exact
                            path='/product/:id'
                            component={ ProductScreen }
                        />

                        <Route
                            exact
                            path='/cart/:id?'
                            component={ CartScreen }
                        />

                        <Route
                            exact
                            path='/login'
                            component={ SignInScreen }
                        />

                        <Route
                            exact
                            path='/register'
                            component={ RegisterScreen }
                        />

                        <Route
                            exact
                            path='/profile'
                            component={ ProfileScreen }
                        />

                        <Route
                            exact
                            path='/shipping'
                            component={ ShippingScreen }
                        />

                        <Route
                            exact
                            path='/payment'
                            component={ PaymentScreen }
                        />

                    </Switch>

                </main>

                <Footer />

            </div>

        </Router>

    );

}


export default App;
*/



























// ===============================






















/*
// at the beginning of lecture 54, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomeScreen from './screens/home-screen/home-screen.component';
import ProductScreen from './screens/product-screen/product-screen.component';
import CartScreen from './screens/cart-screen/cart-screen.component';
import SignInScreen from './screens/sign-in-screen/sign-in-screen.component';
import RegisterScreen from './screens/register-screen/register-screen.component';
import ProfileScreen from './screens/profile-screen/profile-screen.component';
import ShippingScreen from './screens/shipping-screen/shipping-screen.component';
import PaymentScreen from './screens/payment-screen/payment-screen.component';

import './App.styles.scss';


// 10 -
import PlaceOrderScreen from './screens/place-order/place-order-screen.component';

// add the PlaceOrderScreen route below

// End of 10 -


const App = () => {
  
    return (

        <Router>
        
            <div className="app">

                <Header />

                <main className="app--main">

                    <Switch>

                        <Route
                            exact
                            path='/'
                            component={ HomeScreen }
                        />

                        <Route
                            exact
                            path='/product/:id'
                            component={ ProductScreen }
                        />

                        <Route
                            exact
                            path='/cart/:id?'
                            component={ CartScreen }
                        />

                        <Route
                            exact
                            path='/login'
                            component={ SignInScreen }
                        />

                        <Route
                            exact
                            path='/register'
                            component={ RegisterScreen }
                        />

                        <Route
                            exact
                            path='/profile'
                            component={ ProfileScreen }
                        />

                        <Route
                            exact
                            path='/shipping'
                            component={ ShippingScreen }
                        />

                        <Route
                            exact
                            path='/payment'
                            component={ PaymentScreen }
                        />

                        <Route
                            exact
                            path='/placeorder'
                            component={ PlaceOrderScreen }
                        />

                    </Switch>

                </main>

                <Footer />

            </div>

        </Router>

    );

}


export default App;
*/




























// ===============================






















/*
// at the beginning of lecture 55, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomeScreen from './screens/home-screen/home-screen.component';
import ProductScreen from './screens/product-screen/product-screen.component';
import CartScreen from './screens/cart-screen/cart-screen.component';
import SignInScreen from './screens/sign-in-screen/sign-in-screen.component';
import RegisterScreen from './screens/register-screen/register-screen.component';
import ProfileScreen from './screens/profile-screen/profile-screen.component';
import ShippingScreen from './screens/shipping-screen/shipping-screen.component';
import PaymentScreen from './screens/payment-screen/payment-screen.component';
import PlaceOrderScreen from './screens/place-order-screen/place-order-screen.component';

import './App.styles.scss';


// 11 -
import OrderScreen from './screens/order-screen/order-screen.component';

// add the OrderScreen route below

// End of 11 -


const App = () => {
  
    return (

        <Router>
        
            <div className="app">

                <Header />

                <main className="app--main">

                    <Switch>

                        <Route
                            exact
                            path='/'
                            component={ HomeScreen }
                        />

                        <Route
                            exact
                            path='/product/:id'
                            component={ ProductScreen }
                        />

                        <Route
                            exact
                            path='/cart/:id?'
                            component={ CartScreen }
                        />

                        <Route
                            exact
                            path='/login'
                            component={ SignInScreen }
                        />

                        <Route
                            exact
                            path='/register'
                            component={ RegisterScreen }
                        />

                        <Route
                            exact
                            path='/profile'
                            component={ ProfileScreen }
                        />

                        <Route
                            exact
                            path='/shipping'
                            component={ ShippingScreen }
                        />

                        <Route
                            exact
                            path='/payment'
                            component={ PaymentScreen }
                        />

                        <Route
                            exact
                            path='/placeorder'
                            component={ PlaceOrderScreen }
                        />

                        <Route
                            exact
                            path='/order/:id'
                            component={ OrderScreen }
                        />

                    </Switch>

                </main>

                <Footer />

            </div>

        </Router>

    );

}


export default App;
*/



























// ===============================






















/*
// at the beginning of lecture 60, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomeScreen from './screens/home-screen/home-screen.component';
import ProductScreen from './screens/product-screen/product-screen.component';
import CartScreen from './screens/cart-screen/cart-screen.component';
import SignInScreen from './screens/sign-in-screen/sign-in-screen.component';
import RegisterScreen from './screens/register-screen/register-screen.component';
import ProfileScreen from './screens/profile-screen/profile-screen.component';
import ShippingScreen from './screens/shipping-screen/shipping-screen.component';
import PaymentScreen from './screens/payment-screen/payment-screen.component';
import PlaceOrderScreen from './screens/place-order-screen/place-order-screen.component';
import OrderScreen from './screens/order-screen/order-screen.component';

import './App.styles.scss';


// 12 -
import AdminUserListScreen from './screens/admin-user-list-screen/admin-user-list-screen.component';


// End of 12 -


const App = () => {

    return (

        <Router>
        
            <div className="app">

                <Header />

                <main className="app--main">

                    <Switch>

                        <Route
                            exact
                            path='/'
                            component={ HomeScreen }
                        />

                        <Route
                            exact
                            path='/product/:id'
                            component={ ProductScreen }
                        />

                        <Route
                            exact
                            path='/cart/:id?'
                            component={ CartScreen }
                        />

                        <Route
                            exact
                            path='/login'
                            component={ SignInScreen }
                        />

                        <Route
                            exact
                            path='/register'
                            component={ RegisterScreen }
                        />

                        <Route
                            exact
                            path='/profile'
                            component={ ProfileScreen }
                        />

                        <Route
                            exact
                            path='/shipping'
                            component={ ShippingScreen }
                        />

                        <Route
                            exact
                            path='/payment'
                            component={ PaymentScreen }
                        />

                        <Route
                            exact
                            path='/placeorder'
                            component={ PlaceOrderScreen }
                        />

                        <Route
                            exact
                            path='/order/:id'
                            component={ OrderScreen }
                        />

                        <Route
                            exact
                            path='/admin/userlist'
                            component={ AdminUserListScreen }
                        />

                    </Switch>

                </main>

                <Footer />

            </div>

        </Router>

    );

} // end of App


export default App;
*/


























// ===============================






















/*
// at the beginning of lecture 68, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomeScreen from './screens/home-screen/home-screen.component';
import ProductScreen from './screens/product-screen/product-screen.component';
import CartScreen from './screens/cart-screen/cart-screen.component';
import SignInScreen from './screens/sign-in-screen/sign-in-screen.component';
import RegisterScreen from './screens/register-screen/register-screen.component';
import ProfileScreen from './screens/profile-screen/profile-screen.component';
import ShippingScreen from './screens/shipping-screen/shipping-screen.component';
import PaymentScreen from './screens/payment-screen/payment-screen.component';
import PlaceOrderScreen from './screens/place-order-screen/place-order-screen.component';
import OrderScreen from './screens/order-screen/order-screen.component';
import AdminUserListScreen from './screens/admin-user-list-screen/admin-user-list-screen.component';

import './App.styles.scss';


// 13 -

import AdminUserEditScreen from './screens/admin-user-edit-screen/admin-user-edit-screen.component';



// End of 13 -


const App = () => {

    return (

        <Router>
        
            <div className="app">

                <Header />

                <main className="app--main">

                    <Switch>

                        <Route
                            exact
                            path='/'
                            component={ HomeScreen }
                        />

                        <Route
                            exact
                            path='/product/:id'
                            component={ ProductScreen }
                        />

                        <Route
                            exact
                            path='/cart/:id?'
                            component={ CartScreen }
                        />

                        <Route
                            exact
                            path='/login'
                            component={ SignInScreen }
                        />

                        <Route
                            exact
                            path='/register'
                            component={ RegisterScreen }
                        />

                        <Route
                            exact
                            path='/profile'
                            component={ ProfileScreen }
                        />

                        <Route
                            exact
                            path='/shipping'
                            component={ ShippingScreen }
                        />

                        <Route
                            exact
                            path='/payment'
                            component={ PaymentScreen }
                        />

                        <Route
                            exact
                            path='/placeorder'
                            component={ PlaceOrderScreen }
                        />

                        <Route
                            exact
                            path='/order/:id'
                            component={ OrderScreen }
                        />

                        <Route
                            exact
                            path='/admin/userlist'
                            component={ AdminUserListScreen }
                        />

                        <Route
                            exact
                            path='/admin/user/:id/edit'
                            component={ AdminUserEditScreen }
                        />

                    </Switch>

                </main>

                <Footer />

            </div>

        </Router>

    );

} // end of App


export default App;
*/

























// ===============================






















/*
// at the beginning of lecture 72, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomeScreen from './screens/home-screen/home-screen.component';
import ProductScreen from './screens/product-screen/product-screen.component';
import CartScreen from './screens/cart-screen/cart-screen.component';
import SignInScreen from './screens/sign-in-screen/sign-in-screen.component';
import RegisterScreen from './screens/register-screen/register-screen.component';
import ProfileScreen from './screens/profile-screen/profile-screen.component';
import ShippingScreen from './screens/shipping-screen/shipping-screen.component';
import PaymentMethodScreen from './screens/payment-method-screen/payment-method-screen.component';
import PlaceOrderScreen from './screens/place-order-screen/place-order-screen.component';
import OrderScreen from './screens/order-screen/order-screen.component';
import AdminUserListScreen from './screens/admin-user-list-screen/admin-user-list-screen.component';
import AdminUserEditScreen from './screens/admin-user-edit-screen/admin-user-edit-screen.component';

import './App.styles.scss';


// 14 -

import AdminProductListScreen from './screens/admin-product-list-screen/admin-product-list-screen.component';

// End of 14 -



const App = () => {

    return (

        <Router>
        
            <div className="app">

                <Header />

                <main className="app--main">

                    <Switch>

                        <Route
                            exact
                            path='/'
                            component={ HomeScreen }
                        />

                        <Route
                            exact
                            path='/product/:id'
                            component={ ProductScreen }
                        />

                        <Route
                            exact
                            path='/cart/:id?'
                            component={ CartScreen }
                        />

                        <Route
                            exact
                            path='/login'
                            component={ SignInScreen }
                        />

                        <Route
                            exact
                            path='/register'
                            component={ RegisterScreen }
                        />

                        <Route
                            exact
                            path='/profile'
                            component={ ProfileScreen }
                        />

                        <Route
                            exact
                            path='/shipping'
                            component={ ShippingScreen }
                        />

                        <Route
                            exact
                            path='/payment'
                            component={ PaymentMethodScreen }
                        />

                        <Route
                            exact
                            path='/placeorder'
                            component={ PlaceOrderScreen }
                        />

                        <Route
                            exact
                            path='/order/:id'
                            component={ OrderScreen }
                        />

                        <Route
                            exact
                            path='/admin/userlist'
                            component={ AdminUserListScreen }
                        />

                        <Route
                            exact
                            path='/admin/productlist'
                            component={ AdminProductListScreen }
                        />

                        <Route
                            exact
                            path='/admin/user/:id/edit'
                            component={ AdminUserEditScreen }
                        />

                    </Switch>

                </main>

                <Footer />

            </div>

        </Router>

    );

} // end of App


export default App;
*/
























// ===============================






















/*
// at the beginning of lecture 74, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomeScreen from './screens/home-screen/home-screen.component';
import ProductScreen from './screens/product-screen/product-screen.component';
import CartScreen from './screens/cart-screen/cart-screen.component';
import SignInScreen from './screens/sign-in-screen/sign-in-screen.component';
import RegisterScreen from './screens/register-screen/register-screen.component';
import ProfileScreen from './screens/profile-screen/profile-screen.component';
import ShippingScreen from './screens/shipping-screen/shipping-screen.component';
import PaymentMethodScreen from './screens/payment-method-screen/payment-method-screen.component';
import PlaceOrderScreen from './screens/place-order-screen/place-order-screen.component';
import OrderScreen from './screens/order-screen/order-screen.component';
import AdminUserListScreen from './screens/admin-user-list-screen/admin-user-list-screen.component';
import AdminUserEditScreen from './screens/admin-user-edit-screen/admin-user-edit-screen.component';
import AdminProductListScreen from './screens/admin-product-list-screen/admin-product-list-screen.component';

import './App.styles.scss';


// 15 -

import AdminProductEditScreen from './screens/admin-product-edit-screen/admin-product-edit-screen.component';

// End of 15 -


const App = () => {

    return (

        <Router>
        
            <div className="app">

                <Header />

                <main className="app--main">

                    <Switch>

                        <Route
                            exact
                            path='/'
                            component={ HomeScreen }
                        />

                        <Route
                            exact
                            path='/product/:id'
                            component={ ProductScreen }
                        />

                        <Route
                            exact
                            path='/cart/:id?'
                            component={ CartScreen }
                        />

                        <Route
                            exact
                            path='/login'
                            component={ SignInScreen }
                        />

                        <Route
                            exact
                            path='/register'
                            component={ RegisterScreen }
                        />

                        <Route
                            exact
                            path='/profile'
                            component={ ProfileScreen }
                        />

                        <Route
                            exact
                            path='/shipping'
                            component={ ShippingScreen }
                        />

                        <Route
                            exact
                            path='/payment'
                            component={ PaymentMethodScreen }
                        />

                        <Route
                            exact
                            path='/placeorder'
                            component={ PlaceOrderScreen }
                        />

                        <Route
                            exact
                            path='/order/:id'
                            component={ OrderScreen }
                        />

                        <Route
                            exact
                            path='/admin/userlist'
                            component={ AdminUserListScreen }
                        />

                        <Route
                            exact
                            path='/admin/user/:id/edit'
                            component={ AdminUserEditScreen }
                        />

                        <Route
                            exact
                            path='/admin/productlist'
                            component={ AdminProductListScreen }
                        />

                        <Route
                            exact
                            path='/admin/product/:id/edit'
                            component={ AdminProductEditScreen }
                        />

                    </Switch>

                </main>

                <Footer />

            </div>

        </Router>

    );

} // end of App


export default App;
*/























// ===============================






















/*
// at the beginning of lecture 78, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomeScreen from './screens/home-screen/home-screen.component';
import ProductScreen from './screens/product-screen/product-screen.component';
import CartScreen from './screens/cart-screen/cart-screen.component';
import SignInScreen from './screens/sign-in-screen/sign-in-screen.component';
import RegisterScreen from './screens/register-screen/register-screen.component';
import ProfileScreen from './screens/profile-screen/profile-screen.component';
import ShippingScreen from './screens/shipping-screen/shipping-screen.component';
import PaymentMethodScreen from './screens/payment-method-screen/payment-method-screen.component';
import PlaceOrderScreen from './screens/place-order-screen/place-order-screen.component';
import OrderScreen from './screens/order-screen/order-screen.component';
import AdminUserListScreen from './screens/admin-user-list-screen/admin-user-list-screen.component';
import AdminUserEditScreen from './screens/admin-user-edit-screen/admin-user-edit-screen.component';
import AdminProductListScreen from './screens/admin-product-list-screen/admin-product-list-screen.component';
import AdminProductEditScreen from './screens/admin-product-edit-screen/admin-product-edit-screen.component';

import './App.styles.scss';


// 16 -

import AdminOrderListScreen from './screens/admin-order-list-screen/admin-order-list-screen.component';

// End of 16 -


const App = () => {

    return (

        <Router>
        
            <div className="app">

                <Header />

                <main className="app--main">

                    <Switch>

                        <Route
                            exact
                            path='/'
                            component={ HomeScreen }
                        />

                        <Route
                            exact
                            path='/product/:id'
                            component={ ProductScreen }
                        />

                        <Route
                            exact
                            path='/cart/:id?'
                            component={ CartScreen }
                        />

                        <Route
                            exact
                            path='/login'
                            component={ SignInScreen }
                        />

                        <Route
                            exact
                            path='/register'
                            component={ RegisterScreen }
                        />

                        <Route
                            exact
                            path='/profile'
                            component={ ProfileScreen }
                        />

                        <Route
                            exact
                            path='/shipping'
                            component={ ShippingScreen }
                        />

                        <Route
                            exact
                            path='/payment'
                            component={ PaymentMethodScreen }
                        />

                        <Route
                            exact
                            path='/placeorder'
                            component={ PlaceOrderScreen }
                        />

                        <Route
                            exact
                            path='/order/:id'
                            component={ OrderScreen }
                        />

                        <Route
                            exact
                            path='/admin/userlist'
                            component={ AdminUserListScreen }
                        />

                        <Route
                            exact
                            path='/admin/user/:id/edit'
                            component={ AdminUserEditScreen }
                        />

                        <Route
                            exact
                            path='/admin/productlist'
                            component={ AdminProductListScreen }
                        />

                        <Route
                            exact
                            path='/admin/product/:id/edit'
                            component={ AdminProductEditScreen }
                        />

                        <Route
                            exact
                            path='/admin/orderlist'
                            component={ AdminOrderListScreen }
                        />

                    </Switch>

                </main>

                <Footer />

            </div>

        </Router>

    );

} // end of App


export default App;
*/






















// ===============================






















/*
// at the beginning of lecture 78, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomeScreen from './screens/home-screen/home-screen.component';
import ProductScreen from './screens/product-screen/product-screen.component';
import CartScreen from './screens/cart-screen/cart-screen.component';
import SignInScreen from './screens/sign-in-screen/sign-in-screen.component';
import RegisterScreen from './screens/register-screen/register-screen.component';
import ProfileScreen from './screens/profile-screen/profile-screen.component';
import ShippingScreen from './screens/shipping-screen/shipping-screen.component';
import PaymentMethodScreen from './screens/payment-method-screen/payment-method-screen.component';
import PlaceOrderScreen from './screens/place-order-screen/place-order-screen.component';
import OrderScreen from './screens/order-screen/order-screen.component';
import AdminUserListScreen from './screens/admin-user-list-screen/admin-user-list-screen.component';
import AdminUserEditScreen from './screens/admin-user-edit-screen/admin-user-edit-screen.component';
import AdminProductListScreen from './screens/admin-product-list-screen/admin-product-list-screen.component';
import AdminProductEditScreen from './screens/admin-product-edit-screen/admin-product-edit-screen.component';
import AdminOrderListScreen from './screens/admin-order-list-screen/admin-order-list-screen.component';

import './App.styles.scss';


// 17 -
// coming from the search-box.component.jsx 1 -

// add a new route below or 
/*
    <Route
        exact
        path='/search/:keyword'
        component={ HomeScreen }
    />
*/

// now let's go to the nav-bar.component.jsx 3 - file

// End of 17 -
/*

const App = () => {

    return (

        <Router>
        
            <div className="app">

                <Header />

                <main className="app--main">

                    <Switch>

                        <Route
                            exact
                            path='/'
                            component={ HomeScreen }
                        />

                        <Route
                            exact
                            path='/product/:id'
                            component={ ProductScreen }
                        />

                        <Route
                            exact
                            path='/cart/:id?'
                            component={ CartScreen }
                        />

                        <Route
                            exact
                            path='/login'
                            component={ SignInScreen }
                        />

                        <Route
                            exact
                            path='/register'
                            component={ RegisterScreen }
                        />

                        <Route
                            exact
                            path='/profile'
                            component={ ProfileScreen }
                        />

                        <Route
                            exact
                            path='/shipping'
                            component={ ShippingScreen }
                        />

                        <Route
                            exact
                            path='/payment'
                            component={ PaymentMethodScreen }
                        />

                        <Route
                            exact
                            path='/placeorder'
                            component={ PlaceOrderScreen }
                        />

                        <Route
                            exact
                            path='/order/:id'
                            component={ OrderScreen }
                        />

                        <Route
                            exact
                            path='/admin/userlist'
                            component={ AdminUserListScreen }
                        />

                        <Route
                            exact
                            path='/admin/user/:id/edit'
                            component={ AdminUserEditScreen }
                        />

                        <Route
                            exact
                            path='/admin/productlist'
                            component={ AdminProductListScreen }
                        />

                        <Route
                            exact
                            path='/admin/product/:id/edit'
                            component={ AdminProductEditScreen }
                        />

                        <Route
                            exact
                            path='/admin/orderlist'
                            component={ AdminOrderListScreen }
                        />

                        <Route
                            exact
                            path='/search/:keyword'
                            component={ HomeScreen }
                        />

                    </Switch>

                </main>

                <Footer />

            </div>

        </Router>

    );

} // end of App


export default App;
*/






















// ===============================






















/*
// at the beginning of lecture 86, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomeScreen from './screens/home-screen/home-screen.component';
import ProductScreen from './screens/product-screen/product-screen.component';
import CartScreen from './screens/cart-screen/cart-screen.component';
import SignInScreen from './screens/sign-in-screen/sign-in-screen.component';
import RegisterScreen from './screens/register-screen/register-screen.component';
import ProfileScreen from './screens/profile-screen/profile-screen.component';
import ShippingScreen from './screens/shipping-screen/shipping-screen.component';
import PaymentMethodScreen from './screens/payment-method-screen/payment-method-screen.component';
import PlaceOrderScreen from './screens/place-order-screen/place-order-screen.component';
import OrderScreen from './screens/order-screen/order-screen.component';
import AdminUserListScreen from './screens/admin-user-list-screen/admin-user-list-screen.component';
import AdminUserEditScreen from './screens/admin-user-edit-screen/admin-user-edit-screen.component';
import AdminProductListScreen from './screens/admin-product-list-screen/admin-product-list-screen.component';
import AdminProductEditScreen from './screens/admin-product-edit-screen/admin-product-edit-screen.component';
import AdminOrderListScreen from './screens/admin-order-list-screen/admin-order-list-screen.component';

import './App.styles.scss';


// 18 -
// coming from the product.reducers.js 9 - file

// add the following:

/*
    <Route
        exact
        path='/page/:pageNumber'
        component={ HomeScreen }
    />

    <Route
        exact
        path='/search/:keyword/page/:pageNumber'
        component={ HomeScreen }
    />
*/

// now let's go to the home-screen.component.jsx 9 - file

// End of 18 -


// 19 -
// coming from the admin-productlist-screen.component.jsx 2 - file

// add the following:

/*
    <Route
        exact
        path='/admin/productlist/page/:pageNumber'
        component={ AdminProductListScreen }
    />
*/

// now let's go to the home-screen.component.jsx 9 - file

// End of 19 -

/*
const App = () => {

    return (

        <Router>
        
            <div className="app">

                <Header />

                <main className="app--main">

                    <Switch>

                        <Route
                            exact
                            path='/'
                            component={ HomeScreen }
                        />

                        <Route
                            exact
                            path='/product/:id'
                            component={ ProductScreen }
                        />

                        <Route
                            exact
                            path='/cart/:id?'
                            component={ CartScreen }
                        />

                        <Route
                            exact
                            path='/login'
                            component={ SignInScreen }
                        />

                        <Route
                            exact
                            path='/register'
                            component={ RegisterScreen }
                        />

                        <Route
                            exact
                            path='/profile'
                            component={ ProfileScreen }
                        />

                        <Route
                            exact
                            path='/shipping'
                            component={ ShippingScreen }
                        />

                        <Route
                            exact
                            path='/payment'
                            component={ PaymentMethodScreen }
                        />

                        <Route
                            exact
                            path='/placeorder'
                            component={ PlaceOrderScreen }
                        />

                        <Route
                            exact
                            path='/order/:id'
                            component={ OrderScreen }
                        />

                        <Route
                            exact
                            path='/admin/userlist'
                            component={ AdminUserListScreen }
                        />

                        <Route
                            exact
                            path='/admin/user/:id/edit'
                            component={ AdminUserEditScreen }
                        />

                        <Route
                            exact
                            path='/admin/productlist'
                            component={ AdminProductListScreen }
                        />

                        <Route
                            exact
                            path='/admin/product/:id/edit'
                            component={ AdminProductEditScreen }
                        />

                        <Route
                            exact
                            path='/admin/orderlist'
                            component={ AdminOrderListScreen }
                        />

                        <Route
                            exact
                            path='/search/:keyword'
                            component={ HomeScreen }
                        />

                        <Route
                            exact
                            path='/page/:pageNumber'
                            component={ HomeScreen }
                        />

                        <Route
                            exact
                            path='/search/:keyword/page/:pageNumber'
                            component={ HomeScreen }
                        />

                        <Route
                            exact
                            path='/admin/productlist/page/:pageNumber'
                            component={ AdminProductListScreen }
                        />

                    </Switch>

                </main>

                <Footer />

            </div>

        </Router>

    );

} // end of App


export default App;
*/





















// ===============================























// at the beginning of lecture 87, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomeScreen from './screens/home-screen/home-screen.component';
import ProductScreen from './screens/product-screen/product-screen.component';
import CartScreen from './screens/cart-screen/cart-screen.component';
import SignInScreen from './screens/sign-in-screen/sign-in-screen.component';
import RegisterScreen from './screens/register-screen/register-screen.component';
import ProfileScreen from './screens/profile-screen/profile-screen.component';
import ShippingScreen from './screens/shipping-screen/shipping-screen.component';
import PaymentMethodScreen from './screens/payment-method-screen/payment-method-screen.component';
import PlaceOrderScreen from './screens/place-order-screen/place-order-screen.component';
import OrderScreen from './screens/order-screen/order-screen.component';
import AdminUserListScreen from './screens/admin-user-list-screen/admin-user-list-screen.component';
import AdminUserEditScreen from './screens/admin-user-edit-screen/admin-user-edit-screen.component';
import AdminProductListScreen from './screens/admin-product-list-screen/admin-product-list-screen.component';
import AdminProductEditScreen from './screens/admin-product-edit-screen/admin-product-edit-screen.component';
import AdminOrderListScreen from './screens/admin-order-list-screen/admin-order-list-screen.component';

import './App.styles.scss';


const App = () => {

    return (

        <Router>
        
            <div className="app">

                <Header />

                <main className="app--main">

                    <Switch>

                        <Route
                            exact
                            path='/'
                            component={ HomeScreen }
                        />

                        <Route
                            exact
                            path='/product/:id'
                            component={ ProductScreen }
                        />

                        <Route
                            exact
                            path='/cart/:id?'
                            component={ CartScreen }
                        />

                        <Route
                            exact
                            path='/login'
                            component={ SignInScreen }
                        />

                        <Route
                            exact
                            path='/register'
                            component={ RegisterScreen }
                        />

                        <Route
                            exact
                            path='/profile'
                            component={ ProfileScreen }
                        />

                        <Route
                            exact
                            path='/shipping'
                            component={ ShippingScreen }
                        />

                        <Route
                            exact
                            path='/payment'
                            component={ PaymentMethodScreen }
                        />

                        <Route
                            exact
                            path='/placeorder'
                            component={ PlaceOrderScreen }
                        />

                        <Route
                            exact
                            path='/order/:id'
                            component={ OrderScreen }
                        />

                        <Route
                            exact
                            path='/admin/userlist'
                            component={ AdminUserListScreen }
                        />

                        <Route
                            exact
                            path='/admin/user/:id/edit'
                            component={ AdminUserEditScreen }
                        />

                        <Route
                            exact
                            path='/admin/productlist'
                            component={ AdminProductListScreen }
                        />

                        <Route
                            exact
                            path='/admin/product/:id/edit'
                            component={ AdminProductEditScreen }
                        />

                        <Route
                            exact
                            path='/admin/orderlist'
                            component={ AdminOrderListScreen }
                        />

                        <Route
                            exact
                            path='/search/:keyword'
                            component={ HomeScreen }
                        />

                        <Route
                            exact
                            path='/page/:pageNumber'
                            component={ HomeScreen }
                        />

                        <Route
                            exact
                            path='/search/:keyword/page/:pageNumber'
                            component={ HomeScreen }
                        />

                        <Route
                            exact
                            path='/admin/productlist/page/:pageNumber'
                            component={ AdminProductListScreen }
                        />

                    </Switch>

                </main>

                <Footer />

            </div>

        </Router>

    );

} // end of App


export default App;


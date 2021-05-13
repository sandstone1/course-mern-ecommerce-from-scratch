
/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


// 1 -
// import in " bootstrap.min.css " and make sure to import it right above the index.css file
// and if we go look at our application we can see that the font has changed, etc. so our app
// is using bootstrap but it is also using the Lux theme

// and now let's install react bootstrap

// #5
// react-bootstrap: " Rogers-iMac:frontend Home$ npm i react-bootstrap " and this will include
// react-bootstrap in our frontend project folder
// lecture 5: React-Bootstrap Setup, Header & Footer Components

// and now let's go back to the app.js 2 - file now

// End of 1 -


// 2 -
// in the App.js file I removed react bootstrap and let's remove " bootstrap.min.css " above
// and now let's go to the footer.component.jsx 1 - file

// End of 2 -


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
*/















// ===============================

















// at the beginning of lecture 6, given all the notes, I created a new file below without
// the notes so we are starting fresh

/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


// 3 -
// we are coming from the store.js 1 - file
// and we want to add the store to our application and we do that through a Provider component 
import { Provider } from 'react-redux';
// import in the store and then pass the store to the Provider component
import store from './store'; 

// and then let's replace " <React.StrictMode> " with " <Provider store={ store }> " and
// " </React.StrictMode> " with " </Provider> " and remember we want to wrap the Provider
// component around the entire application because we want the entire application to have
// access to the store

// and now if I go to the inspector I can see the redux tab and I can see that redux dev
// tools is now working and although our store is empty right now our store is connected to
// our application

// in the next video, instead of fetching data right from the component by using the useEffect();
// hook we will fetch our backend data through an action and then pass that data to our reducer

// End of 3 -


ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);
*/




















// ===============================



















// at the beginning of lecture 27, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React from 'react';
import ReactDOM from 'react-dom';
// we want to add the store to our application and we do that through a Provider component 
import { Provider } from 'react-redux';
// import in the store and then pass the store to the Provider component
// and remember we want to wrap the Provider component around the entire application because
// we want the entire application to have access to the store
import store from './redux/store';
// import in our App component
import App from './App';


ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);


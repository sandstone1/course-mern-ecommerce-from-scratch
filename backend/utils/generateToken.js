
/*
// 1 -
// let's create json web token but first let's install jsonwebtoken

// #17
// jsonwebtoken: " Home@Rogers-iMac mern_ecommerce_from_scratch % npm i jsonwebtoken "
// and this will install jsonwebtoken in our application
// lecture 39: Generate a JSON Web Token

// import in jwt
import jwt from 'jsonwebtoken';

// let's create a function to generate a token and we will pass in the user id as the
// argument to the function and the user id will be the payload inside the token and remember
// to add JWT_SECRET to our .env file and we can also pass in an options object as the third
// argument to jwt.sign(); and we will include the following key value pair in the options
// object or " expiresIn : '30d' " and the " d " stands for days so our token will automatically
// expire in 30 days 
const generateToken = ( id ) => {

    return jwt.sign( { id : id }, process.env.JWT_SECRET, { expiresIn : '30d' } );

};


// and now let's export our generateToken(); function 
export default generateToken;

// and remember to restart the server since we added an environment variable and let's now
// go back to the user.controller.js 3 - file

// End of 1 -
*/


















// ===============================





















// at the beginning of lecture 40, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in jwt
import jwt from 'jsonwebtoken';

// let's create a function to generate a token and we will pass in the user id as the
// first argument to the function and the user id will be the token's payload
const generateToken = ( id ) => {

    return jwt.sign( { id : id }, process.env.JWT_SECRET, { expiresIn : '30d' } );

};


// and now let's export our generateToken(); function 
export default generateToken;

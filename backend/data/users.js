
// 2 -
import bcrypt from 'bcryptjs';

// and there are a few diiferent ways to hash our passwords and normally we want to do this
// asynchronously but since we are just importing in data let's use the hash sync method,
// which will hash the password synchronously and we will pass in a plain text password of
// " 123456 " as the first argument and the second argument is the number of rounds to use
// when generating a salt and in this case the higher the number the more secure the password
// so " bcrypt.hashSync( '123456', 10 ) " will hash the password of " 123456 "

// so now our products are all set and our users are all set and in the next video we will
// create our data seeder script

// End of 2 -


// 1 -
// let's create an array of 3 users with one of them being an admin user and remember these
// users have to have the same exact fields as we had in our user model otherwise Mongoose
// will not let us insert the users array into the database so we need name, email, password
// and isAdmin and for some reason we didn't need timestamps
const users = [

    {
        name     : 'Admin User',
        email    : 'admin@example.com',
        // remember the password has to be hashed and later on we will use bcrypt which is
        // a password-hashing function and we will use bcrypt to encrypt passwords but for now
        // let's just use " xxxx "
        password : bcrypt.hashSync( '123456', 10 ),
        isAdmin  : true
    },

    {
        name     : 'John Doe',
        email    : 'john@example.com',
        password : bcrypt.hashSync( '123456', 10 )
        // and we can get rid of isAdmin because this is false by default
        // isAdmin : false
    },

    {
        name     : 'Jane Doe',
        email    : 'jane@example.com',
        password : bcrypt.hashSync( '123456', 10 )
        // isAdmin : false
    }

];

// now to hash the passwords let install bcryptjs

// #14
// bcryptjs: " Rogers-iMac:mern_ecommerce_from_scratch Home$ npm i bcryptjs " and this will
// install bcryptjs in our application
// lecture 20: Preparing Sample Data

// and let's import bcryptjs in 2 - above

// End of 1 -


export default users;
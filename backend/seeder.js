
// remember this file is not connected to our application in any way

import mongoose from 'mongoose';
// we need access to the MONGO_URI and to get access to this environment variable we need
// to import in dotenv
import dotenv from 'dotenv';
// import in colors so that we can add some colors to the console
import colors from 'colors';
// since we are working in the backend don't forget " .js " whenever we import from a file
import users from './data/users.js';
import products from './data/products.mongodb.js';
// now we need to bring in all 3 models
import Order from './models/order.model.js';
import Product from './models/product.model.js';
import User from './models/user.model.js';
// import in our database connection file
import connectDB from './config/db.js';


// call config() on dotenv
dotenv.config();

// connect to the database
connectDB();

// now let's create 2 functions and these function will be asynchronous since we're dealing
// with mongoose
const importData = async () => {

    try {

        // let's delete everything in the order collection
        await Order.deleteMany();
        // let's delete everything in the product collection
        await Product.deleteMany();
        // let's delete everything in the user collection
        await User.deleteMany();

        // and the reason we are deleting everything is because we don't want to import
        // anything into the database with stuff already in the database

        // now let's import in the user data so let's take the User model and then add the
        // users data as the argument to the insertMany(); function

        // and let's set " await User.insertMany( users ); " equal to createdUsers and that
        // way we'll be able to pull out the adminUser and remember the adminUser is the first
        // user or the first user object in the users array in the users.js file
        const createdUsers = await User.insertMany( users );

        // now let's pull out the id for the admin user
        const adminUser = createdUsers[ 0 ]._id;

        // so now we need to map through the products and add the adminUser to each product and
        // this will make the adminUser the owner of all the products 
        const sampleProducts = products.map( ( product ) => {

            return {
                ...product,
                user : adminUser
            }

         } );

        // now let's import in the product data
        await Product.insertMany( sampleProducts );

        // add a message to the console
        console.log( 'Data Imported!'.green.inverse );

        // now let's exit from the process and this might just be a good coding practice
        process.exit();

    } catch( error ) {

        // if we can not connect to the database then log out an error message
        // and use the colors.js package at the end
        console.error( `Error: ${ error.message }`.red.inverse );

        // exit with an uncaught fatal exception
        process.exit( 1 );

    }

}


const destroyData = async () => {

    try {

        // let's delete everything in the order collection
        await Order.deleteMany();
        // let's delete everything in the product collection
        await Product.deleteMany();
        // let's delete everything in the user collection
        await User.deleteMany();

        // add a message to the console
        console.log( 'Data Destroyed!'.red.inverse );

        // now let's exit from the process and this might just be a good coding practice
        process.exit();

    } catch( error ) {

        // if we can not connect to the database then log out an error message
        // and use the colors.js package at the end
        console.error( `Error: ${ error.message }`.red.inverse );

        // exit with an uncaught fatal exception
        process.exit( 1 );

    }

}

// now the way we can call this seeder script is by doing:
// " Rogers-iMac:mern_ecommerce_from_scratch Home$ node backend/seeder " and this will
// import in the data and if we want to destroy the data in the database then we do:
// " Rogers-iMac:mern_ecommerce_from_scratch Home$ node backend/seeder -d "

// now to get the " -d " value above let's use process.argv[ 2 ] and the index 2 will
// point to " -d " and let's check this by doing the following:

/*
if ( process.argv[ 2 ] === '-d' ) {

    destroyData();

} else {

    importData();

}
*/

if ( process.argv[ 2 ] === '-d' ) {

    destroyData();

} else {

    importData();

}

// now the last thing to do is add 2 npm scripts so we don't have to run:
// " Rogers-iMac:mern_ecommerce_from_scratch Home$ node backend/seeder " so let's add
// " "data:import": "node backend/seeder" " and " "data:destroy": "node backend/seeder -d" "
// to our package.json file  

// now let's test this out but first make sure we log out of the application and then run
// " npm run data:import " in the integrated terminal and the result is:

/*
Rogers-iMac:mern_ecommerce_from_scratch Home$ npm run data:import

> mern_ecommerce_from_scratch@1.0.0 data:import /Applications/MAMP/htdocs/stoneburyhomes/misc/brad_traversy/mern_ecommerce_from_scratch
> node backend/seeder

MongoDB is connected: cluster1-shard-00-00.ygd2v.mongodb.net
Data Imported!
Rogers-iMac:mern_ecommerce_from_scratch Home$
*/

// and this is correct and now let's check our proshop database in MongoDB and when we do we
// see all of our imported data so everything is working as expected which is great

// so let's now destroy our data

/*
Rogers-iMac:mern_ecommerce_from_scratch Home$ npm run data:destroy

> mern_ecommerce_from_scratch@1.0.0 data:destroy /Applications/MAMP/htdocs/stoneburyhomes/misc/brad_traversy/mern_ecommerce_from_scratch
> node backend/seeder -d

MongoDB is connected: cluster1-shard-00-00.ygd2v.mongodb.net
Data Destroyed!
Rogers-iMac:mern_ecommerce_from_scratch Home$
*/

// and this is correct and now let's check our proshop database in MongoDB and when we do we
// see that all of our imported data is deleted and this is correct so everything is working as
// expected

// we may want to delete this script later so we don't have to worry about accidentally deleting
// our data

// in the next video we will start fetching data from the database

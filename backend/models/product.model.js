
import mongoose from 'mongoose';


// SCHEMA #1
// create the reviewSchema

// and this is an unexpected Schema and remember the reviewSchema will be an individual review
// or an individual review object whereas in the productSchema below " reviews " will be an array
// of review objects


// 1 -
// coming from the server.js 16 - file

// we need to associate a user with a review and this way we can check to make sure the user
// didn't already submit a review 

// End of 1 -


const reviewSchema = mongoose.Schema(

    {


        // 1 - continued

        // and remember this field will add a relationship or link between the review and the
        // user
        user : {
            // for type we need an ObjectID and from a blog: "When using a NoSQL database
            // like MongoDb, most of the time you'll have documents that contain all properties
            // by itself. But there are also scenarios where you might encounter the need for
            // a more relational approach and need to reference other documents by the ObjectIds. "
            type     : mongoose.Schema.Types.ObjectId,
            required : true,
            // and we need to reference a specific model for the ObjectId above and the
            // model we are referencing is " User "
            ref      : 'User'
        },

        // and now let's go to the product.controller.js 5 - file

        // End of 1 -


        name : {
            type     : String,
            required : true
        },

        rating : {
            type     : Number,
            required : true
        },

        comment : {
            type     : String,
            required : true
        }

    },

    {

        timestamps : true

    }

);


// SCHEMA #2
// create a product schema

// from https://mongoosejs.com/docs/schematypes.html: " You can think of a Mongoose schema as
// the configuration object for a Mongoose model. "
const productSchema = mongoose.Schema(

    // inside the object let's define the fields for a product
    {
        // first, we will create a user field because we want to know which admin created
        // which product

        // create a relationship between the user and the product by using the ObjectId

        // and remember this field will add a relationship or link between the product and the
        // user
        user : {
            // for type we need an ObjectID and from a blog: "When using a NoSQL database
            // like MongoDb, most of the time you'll have documents that contain all properties
            // by itself. But there are also scenarios where you might encounter the need for
            // a more relational approach and need to reference other documents by the ObjectIds. "
            type     : mongoose.Schema.Types.ObjectId,
            required : true,
            // and we need to reference a specific model for the ObjectId above and the
            // model we are referencing is " User "
            ref      : 'User'
        },

        name : {
            type     : String,
            required : true
        },

        image : {
            type     : String,
            required : true
        },

        description : {
            type     : String,
            required : true
        },

        brand : {
            type     : String,
            required : true
        },

        category : {
            type     : String,
            required : true
        },

        price : {
            type     : Number,
            required : true,
            default  : 0
        },

        countInStock : {
            type     : Number,
            required : true,
            default  : 0
        },

        rating : {
            type     : Number,
            required : true,
            default  : 0
        },

        numReviews : {
            type     : Number,
            required : true,
            default  : 0
        },

        // reviews will be an array of review objects or reviewSchema objects and then above
        // let's set the reviewSchema
        reviews : [ reviewSchema ]

    },

    // we also want to have a createdAt field and an updatedAt field and we can do that by
    // creating a second object inside mongoose.Schema(); and inside the second object we will
    // set the following key value pair: " timestamps : true " and this will create the
    // createdAt field and the updatedAt field automatically
    {

        timestamps : true

    }

);


// create a model by passing in the name of the model and the schema above

// and we will name the model in the first argument or " Product " and we will pass in the
// productSchema as the second argument to mongoose.model();

// and remember MongoDB will create a collection based on pluralizing the name of the first
// argument below so MongoDB will create a collection called " Products "
const Product = mongoose.model( 'Product', productSchema );

// export our model
export default Product;

// now let's go to the order.model.js file
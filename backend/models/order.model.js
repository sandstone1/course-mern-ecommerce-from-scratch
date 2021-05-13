
import mongoose from 'mongoose';

// create a order schema

// from https://mongoosejs.com/docs/schematypes.html: " You can think of a Mongoose schema as
// the configuration object for a Mongoose model. "
const orderSchema = mongoose.Schema(

    // inside the object let's define the fields for an order
    {
        // we will have a user connected to the order as well

        // create a relationship between the user and the order by using the ObjectId

        // and this will be the user that orders the product and remember this field will add
        // a relationship or link between the order and the user
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

        // we will have a field called orderItems and this will be an array of order items and
        // order items will have a name, a quantity, a price, etc. and remember we are setting
        // orderItems to an array or [] 
        orderItems : [

            {
                // the name of the product
                name : {
                    type     : String,
                    required : true
                },
                // quantity ordered
                quantity : {
                    type     : Number,
                    required : true
                },
                // count in stock
                count : {
                    type     : Number,
                    required : true
                },
                // image of product
                image : {
                    type     : String,
                    required : true
                },
                // price of product
                price : {
                    type     : Number,
                    required : true
                },

                // create a relationship between the product and the order by using the ObjectId

                // for product the type will equal the ObjectId and remember this field will
                // add a relationship or link between the order and the product
                product : {
                    type     : mongoose.Schema.Types.ObjectId,
                    required : true,
                    // and we need to reference a specific model for the ObjectId above and the
                    // model we are referencing is " Product "
                    ref      : 'Product'
                },
    
            }

        ],

        // shippingAddress will have a number of embedded objects
        shippingAddress : {

            address : {
                type     : String,
                required : true
            },

            city : {
                type     : String,
                required : true
            },

            postalCode : {
                type     : String,
                required : true
            },

            country : {
                type     : String,
                required : true
            }

        },

        // even though we are only setting up the paypal gateway, Brad wants to make the
        // paymentMethod scalable so we can easily add other types of payment methods like
        // stripe
        paymentMethod : {
            type     : String,
            required : true
        },

        // after paymentMethod we want the paymentResult and the fields inside paymentResult
        // will come from Paypal and when our payment is succesful we get some data back from
        // Paypal and we will include this data inside paymentResult
        paymentResult : {

            id : {
                type : String
            },

            // status tells us if the order was successfully processed or not
            status : {
                type : String
            },

            update_time : {
                type : String
            },

            // the email address will be the user's email address on file with Paypal
            email_address : {
                type : String
            },

        },

        shippingPrice : {
            type     : Number,
            required : true,
            default  : 0.0
        },

        taxPrice : {
            type     : Number,
            required : true,
            default  : 0.0
        },

        totalPrice : {
            type     : Number,
            required : true,
            default  : 0.0
        },

        // isPaid will tell us if the order has been paid for
        isPaid : {
            type     : Boolean,
            required : true,
            default  : false
        },

        // paidAt will be the date and time that the order was paid
        paidAt : {
            type : Date
        },

        isDelivered : {
            type     : Boolean,
            required : true,
            default  : false
        },

        // we also want a deliveredAt just like we had a paidAt and deliveredAt will be
        // the date and time the order was delivered
        deliveredAt : {
            type : Date
        }

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

// and we will name the model in the first argument or " Order " and we will pass in the
// orderSchema as the second argument to mongoose.model();

// and remember MongoDB will create a collection based on pluralizing the name of the first
// argument below so MongoEB will create a collection called " Orders "
const Order = mongoose.model( 'Order', orderSchema );

// export our model
export default Order;

// in the next video we are going to import the product.js data into the database and we
// will add some users to the database as well and then we will create a data seeder script
// to seed the database with our data  


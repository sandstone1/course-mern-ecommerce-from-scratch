
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

import './product.styles.scss';

// 1 -
// import in the Rating component
import Rating from '../rating/rating.component';

// let's create a rating folder and a rating component 

// End of 1 -


// 2 -
// let's change the Link so that it wraps the image and the product name and wraps them
// separately and then let's go to the product.styles.scss to charge the corresponding styles
// and in the next video we want to build the product screen

// End of 2 -


const Product = ( { product } ) => {

    return (

        <Fragment>

            <div className="product-card" >
 
                <Link
                    to={ `/product/${ product._id }` }
                    className="product-card--link"
                >

                    <img
                        src={ product.image }
                        alt=''
                        className="product-card--link--img"
                    />

                </Link>

                <Link
                    to={ `/product/${ product._id }` }
                    className="product-card--link"
                >

                    <div className="product-card--link--title">
                        <span>{ product.name }</span>
                    </div>

                </Link>

                <div className="product-card--rating">
                    <Rating
                        product={ product }
                    />
                </div>

                <div className="product-card--price">
                    <span>${ product.price }</span>
                </div>

            </div>
            
        </Fragment>

    );

}


export default Product;
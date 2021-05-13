
import React, { Fragment } from 'react'

import './rating.styles.scss';


const Rating = ( { product } ) => {

    const text = `${ product.numReviews } reviews`;

    return (

        <Fragment>

            <div className="rating" >
 
                <span>
                    <i 
                        className={
                        
                            product.rating >= 1.0
                            ? 'fas fa-star'
                            : product.rating >= 0.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'

                        }
                    >
                    </i>
                </span>
                <span>
                    <i 
                        className={
                        
                            product.rating >= 2.0
                            ? 'fas fa-star'
                            : product.rating >= 1.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'

                        }
                    >
                    </i>
                </span>
                <span>
                    <i 
                        className={
                        
                            product.rating >= 3.0
                            ? 'fas fa-star'
                            : product.rating >= 2.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'

                        }
                    >
                    </i>
                </span>
                <span>
                    <i 
                        className={
                        
                            product.rating >= 4.0
                            ? 'fas fa-star'
                            : product.rating >= 3.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'

                        }
                    >
                    </i>
                </span>
                <span>
                    <i 
                        className={
                        
                            product.rating >= 5.0
                            ? 'fas fa-star'
                            : product.rating >= 4.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'

                        }
                    >
                    </i>
                </span>

                <span
                    className="rating-text"
                >
                    { text && text }
                </span>

            </div>
            
        </Fragment>

    );

}


export default Rating;
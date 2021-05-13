
import React from 'react'

import './rating-review.styles.scss';


const RatingReview = ( { name, rating, date, comment } ) => {

    return (

        <div className="rating-review">

            <div className="rating-review--name">{ name }</div>

            <div className="rating-review--rating" >
 
                <span>
                    <i
                        className={
                        
                            rating >= 1.0
                            ? 'fas fa-star'
                            : rating >= 0.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'

                        }
                    >
                    </i>
                </span>
                <span>
                    <i
                        className={
                        
                            rating >= 2.0
                            ? 'fas fa-star'
                            : rating >= 1.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'

                        }
                    >
                    </i>
                </span>
                <span>
                    <i
                        className={
                        
                            rating >= 3.0
                            ? 'fas fa-star'
                            : rating >= 2.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'

                        }
                    >
                    </i>
                </span>
                <span>
                    <i
                        className={
                        
                            rating >= 4.0
                            ? 'fas fa-star'
                            : rating >= 3.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'

                        }
                    >
                    </i>
                </span>
                <span>
                    <i
                        className={
                        
                            rating >= 5.0
                            ? 'fas fa-star'
                            : rating >= 4.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'

                        }
                    >
                    </i>
                </span>

            </div>

            <div className="rating-review--date">{ date }</div>

            <div className="rating-review--comment">{ comment }</div>
            
        </div>

    );

}


export default RatingReview;
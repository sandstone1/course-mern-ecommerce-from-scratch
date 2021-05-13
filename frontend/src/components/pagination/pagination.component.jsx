
/*
// 1 -
import React from 'react';
// import in the Link component
import { Link } from 'react-router-dom';

import './pagination.styles.scss';


// we need to pass in 4 props: page, pages, keyword ( set to an empty string by default ),
// and isAdmin ( set to false by default )
const Pagination = ( { page, pages, keyword = '', isAdmin = false } ) => {

    // if pages is greater than 1 then we will return our pagination code; otherwise, we
    // will return nothing
    return pages > 1 && (

        // below we need to map through pages as an array so let's use the Array constructor
        // and then use the spread operator on the Array constructor and then pass in pages
        // as the argument and then add .keys() and then map through the newly created array
        // and remember
        // " [ ...Array( 10 ).keys() ] " give us [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ] " "
        <div className="pagination">

            {

                [ ...Array( pages ).keys() ].map( ( currentNumber ) => {

                    // add the active for the current page
                    const className = currentNumber + 1 === page ?
                        "pagination--a active" :
                        "pagination--a"

                    return (
                        <Link
                            key={ currentNumber + 1 }
                            to=
                            {
                                isAdmin ?

                                `/admin/productlist/page/${ currentNumber + 1 }` :

                                keyword ?
                                
                                `/search/${ keyword }/page/${ currentNumber + 1 }` :
                                
                                `/page/${ currentNumber + 1 }`                         
                        
                            }
                            className={ className }
                        >
                            <div
                                className="pagination--a--page-number"
                            >
                                { currentNumber + 1 }
                            </div>
                        </Link>

                    )

                } )

            }

        </div>

    );

}


export default Pagination;

// let's import this component into our home screen component so let's go to the
// home-screen.component.jsx 10 - file now

// let's now go to the admin-product-list-screen.component.jsx 2 - file

// End of 1 -
*/





















// ===============================























// at the beginning of lecture 87, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React from 'react';
// import in the Link component
import { Link } from 'react-router-dom';

import './pagination.styles.scss';


// we need to pass in 4 props: page, pages, keyword ( set to an empty string by default ),
// and isAdmin ( set to false by default )
const Pagination = ( { page, pages, keyword = '', isAdmin = false } ) => {

    // if pages is greater than 1 then we will return our pagination code; otherwise, we
    // will return nothing
    return pages > 1 && (

        // below we need to map through pages as an array so let's use the Array constructor
        // and then use the spread operator on the Array constructor and then pass in pages
        // as the argument and then add .keys() and then map through the newly created array
        // and remember
        // " [ ...Array( 10 ).keys() ] " give us [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ] " "
        <div className="pagination">

            {

                [ ...Array( pages ).keys() ].map( ( currentNumber ) => {

                    // add the active class for the current page
                    const className = currentNumber + 1 === page ?
                        "pagination--a active" :
                        "pagination--a"

                    return (
                        <Link
                            key={ currentNumber + 1 }
                            to=
                            {
                                isAdmin ?

                                `/admin/productlist/page/${ currentNumber + 1 }` :

                                keyword ?
                                
                                `/search/${ keyword }/page/${ currentNumber + 1 }` :
                                
                                `/page/${ currentNumber + 1 }`                         
                        
                            }
                            className={ className }
                        >
                            <div
                                className="pagination--a--page-number"
                            >
                                { currentNumber + 1 }
                            </div>
                        </Link>

                    )

                } )

            }

        </div>

    );

}


export default Pagination;



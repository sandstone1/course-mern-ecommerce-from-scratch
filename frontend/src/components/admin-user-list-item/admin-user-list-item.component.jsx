
/*
import React from 'react';
// import in the Link component
import { Link } from 'react-router-dom';

import './admin-user-list-item.styles.scss';


// 1 -
// coming from the user.actions.js 9 - file

// import in the useDispatch(); hook
import { useDispatch } from 'react-redux';

// import in our action creator
import { adminUserDeleteActionCreator } from '../../redux/actions/user.actions';

// End of 1 -


const AdminUserListItem = ( { user } ) => {

    // ==============================
    // Destructure user
    // ==============================

    // destructure " _id ", " name ", " email " and " isAdmin " off of user
    const { _id, name, email, isAdmin } = user;


    // 1 - continued

    // ==============================
    // Component State
    // ==============================

    // ==============================
    // USEDISPATCH();
    // ==============================

    // define dispatch
    const dispatch = useDispatch();

    // ==============================
    // handleDelete function
    // ==============================

    const handleDelete = ( _id ) => {

        // since we are deleting a user, let's create a confirm message and make the
        // admin user confirm that they want to delete the user, just to be safe
        if ( window.confirm( 'Are you sure you want to delete this user?' ) ) {

            // if the admin user pressing the OK button and confirms the user delete then
            // we will dispatch our action creator
            dispatch( adminUserDeleteActionCreator( _id ) );

        }

    } // end of handleDelete

    // now let's go to the admin-user-list-screen.component.jsx 3 - file

    // End of 1 -


    return (

        <div className="admin-user-list-item">

            { /* column 1  - id */ /* }
            <div className="admin-user-list-item--id">{ _id }</div>

            { /* column 2 - name */ /* }
            <div className="admin-user-list-item--name">{ name }</div>

            { /* column 3 - email */ /* }
            <div className="admin-user-list-item--email">
                <a href={ `mailto=${ email }` }>{ email }</a>
            </div>

            { /* column 4 - isAdmin */ /* }
            <div className="admin-user-list-item--is-admin">

                { isAdmin ? (

                    <i className="fas fa-check admin-user-list-item--is-admin--fa-check"></i>

                ) : (

                    <i className="fas fa-times admin-user-list-item--is-admin--fa-times"></i>

                ) }

            </div>

            { /* column 5 - edit user */ /* }
            <div className="admin-user-list-item--edit">

                <Link to={ `/user/${ _id }/edit` }>
                    Edit
                </Link>

            </div>

            { /* column 6 - delete user  */ /* }
            <div className="admin-user-list-item--delete">

                <i 
                    className="fas fa-trash admin-user-list-item--delete--fa-trash"
                    onClick={ () => handleDelete( _id ) }
                >
                </i>

            </div>

        </div>

    );

}


export default AdminUserListItem;
*/
























// ===============================























// at the beginning of lecture 70, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React from 'react';
// import in the useDispatch(); hook
import { useDispatch } from 'react-redux';
// import in the Link component
import { Link } from 'react-router-dom';
// import in our action creator
import { userDeleteAdminActionCreator } from '../../redux/actions/user.actions';

import './admin-user-list-item.styles.scss';


const AdminUserListItem = ( { user } ) => {

    // ==============================
    // Destructure user
    // ==============================

    // destructure " _id ", " name ", " email " and " isAdmin " off of user
    const { _id, name, email, isAdmin } = user;

    // ==============================
    // Component State
    // ==============================

    // ==============================
    // USEDISPATCH();
    // ==============================

    // define dispatch
    const dispatch = useDispatch();

    // ==============================
    // handleDelete function
    // ==============================

    const handleDelete = ( _id ) => {

        // since we are deleting a user, let's create a confirm message and make the
        // admin user confirm that they want to delete the user, just to be safe
        if ( window.confirm( 'Are you sure you want to delete this user?' ) ) {

            // if the admin user pressing the OK button and confirms the user delete then
            // we will dispatch our action creator
            dispatch( userDeleteAdminActionCreator( _id ) );

        }

    } // end of handleDelete


    return (

        <div className="admin-user-list-item">

            { /* column 1  - id */ }
            <div className="admin-user-list-item--id">{ _id }</div>

            { /* column 2 - name */ }
            <div className="admin-user-list-item--name">{ name }</div>

            { /* column 3 - email */ }
            <div className="admin-user-list-item--email">
                <a href={ `mailto=${ email }` }>{ email }</a>
            </div>

            { /* column 4 - isAdmin */ }
            <div className="admin-user-list-item--is-admin">

                { isAdmin ? (

                    <i className="fas fa-check admin-user-list-item--is-admin--fa-check"></i>

                ) : (

                    <i className="fas fa-times admin-user-list-item--is-admin--fa-times"></i>

                ) }

            </div>

            { /* column 5 - edit user */ }
            <div className="admin-user-list-item--edit">

                <Link to={ `/admin/user/${ _id }/edit` }>
                    Edit
                </Link>

            </div>

            { /* column 6 - delete user  */ }
            <div className="admin-user-list-item--delete">

                <i 
                    className="fas fa-trash admin-user-list-item--delete--fa-trash"
                    onClick={ () => handleDelete( _id ) }
                >
                </i>

            </div>

        </div>

    );

}


export default AdminUserListItem;

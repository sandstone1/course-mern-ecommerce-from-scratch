
import React, { Fragment } from 'react';
// let's create a new folder called " assets " and place our spinner.gif file in that folder
// and remember the spinner.gif file came from Brad's React Front To Back course
import spinner from '../../assets/spinner.gif';
import './spinner.styles.scss';

// and now let's go to the home-screen.component.jsx 5 - file

const Spinner = () => (

    <Fragment>
        <img
            src={ spinner }
            alt="Loading ..."
            className="spinner"
        />
    </Fragment>

);


export default Spinner;
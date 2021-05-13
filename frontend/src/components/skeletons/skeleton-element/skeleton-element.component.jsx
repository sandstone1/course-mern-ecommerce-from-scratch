
import React from 'react';

// remember " ./ " means look in the same directory  
import './skeleton-element.styles.scss';

// the className value below will ultimately determine what shape the skeleton element will
// be and we will get the className value from the props that come in so for example, if we
// want a skeleton element for the Articles component then we could pass in a prop to the
// SkeletonElement component that will create a skeleton element for the Articles component
// and to make this happen let's add in a prop called " type " and then create a const
// called classes and set classes equal to a template string

// now let's style the different types but first let's create a new file called
// " skeleton.css " and place that file inside the skeletons folder and now let's go to the
// skeleton.css file

const SkeletonElement = ( { type } ) => {

    const classes = `skeleton ${ type }`;

    return (

        <div className={ classes }></div>

    );

}

export default SkeletonElement;
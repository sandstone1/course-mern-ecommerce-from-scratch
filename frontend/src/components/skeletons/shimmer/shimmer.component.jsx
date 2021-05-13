
import React from 'react';
import './shimmer.styles.scss';

// after we create the Shimmer component, let's go to the skeletonArticle.component.jsx file 2 -
// and embed the Shimmer component in that file

const Shimmer = () => (

    <div className="shimmer-wrapper">

        <div className="shimmer"></div>
    
    </div>

);

export default Shimmer;
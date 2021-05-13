
import React from 'react';
import SkeletonElement from '../skeleton-element/skeleton-element.component';
import Shimmer from '../shimmer/shimmer.component';

import './skeleton-home-screen.styles.scss';


const SkeletonHomeScreen = () => {

    return (

        <div className="skeleton-wrapper">

            <div className="skeleton-home-screen">

                <SkeletonElement
                    type="thumbnail"
                />
                <SkeletonElement
                    type="title"
                />
                <SkeletonElement
                    type="title"
                />
                <SkeletonElement
                    type="title"
                />

            </div>

            <div className="skeleton-home-screen">

                <SkeletonElement
                    type="thumbnail"
                />
                <SkeletonElement
                    type="title"
                />
                <SkeletonElement
                    type="title"
                />
                <SkeletonElement
                    type="title"
                />

            </div>

            <div className="skeleton-home-screen">

                <SkeletonElement
                    type="thumbnail"
                />
                <SkeletonElement
                    type="title"
                />
                <SkeletonElement
                    type="title"
                />
                <SkeletonElement
                    type="title"
                />

            </div>

            <Shimmer />

        </div>

    );

};

export default SkeletonHomeScreen;

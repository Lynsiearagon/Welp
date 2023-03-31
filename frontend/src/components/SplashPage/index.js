import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RecentActivity from './RecentActivityList.js';
import SplashPageImage from './SplashPageImage.js';
import Categories from './Categories.js';
import ToRestoIndexButton from './ButtontoRestoIndex.js';
import * as restaurantActions from '../../store/restaurants';
import * as reviewActions from '../../store/reviews';


const SplashPage = () => {
    const dispatch = useDispatch();
    const reviews = useSelector(reviewActions.getReviews);
    
    useEffect(() => {
        dispatch(restaurantActions.fetchRestaurants());
        dispatch(reviewActions.fetchAllReviews());
    }, []);

    return (
        <main id="splashPageMain">
            <ToRestoIndexButton />
            <SplashPageImage />
            <RecentActivity />
            <Categories />
        </main>
    )
}

export default SplashPage;
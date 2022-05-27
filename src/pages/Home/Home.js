import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Products/>
            <BusinessSummary/>
        </div>
    );
};

export default Home;
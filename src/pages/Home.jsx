import React from 'react';
import Carousel from '../components/Carousel';
import FeaturedFoods from './FeaturedFoods';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <FeaturedFoods></FeaturedFoods>
        </div>
    );
};

export default Home;
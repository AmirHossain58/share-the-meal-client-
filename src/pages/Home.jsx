import React from 'react';
import Carousel from '../components/Carousel';
import FeaturedFoods from './FeaturedFoods';
import useAuth from '../hooks/useAuth';

const Home = () => {
    const{loading}=useAuth()
    if (loading){
        return <div className='flex justify-center items-center my-12'><span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span></div>
      }
    return (
        <div>
            <Carousel></Carousel>
            <FeaturedFoods></FeaturedFoods>
        </div>
    );
};

export default Home;
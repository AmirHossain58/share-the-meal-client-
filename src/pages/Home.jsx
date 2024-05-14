import React from 'react';
import Carousel from '../components/Carousel';
import FeaturedFoods from './FeaturedFoods';
import useAuth from '../hooks/useAuth';
import Donation from './Donation';
import FoodRight from './FoodRight';
import { Helmet } from "react-helmet-async";

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
              <Helmet>
            <title>Share the Meal | Home</title>
          </Helmet>
            <Carousel></Carousel>
            <FoodRight></FoodRight>
            <FeaturedFoods></FeaturedFoods>
            <Donation></Donation>
        </div>
    );
};

export default Home;
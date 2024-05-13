import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';
import { Link } from 'react-router-dom';

const FeaturedFoods = () => {
    const [foodData,setFoodData]=useState([])
    useEffect(() => {
        const getData = async () => {
          const { data } = await axios(
            `${
              import.meta.env.VITE_API_URL
            }/food`
          )
         setFoodData(data);
        }
        getData()
      }, [])
    return (
        <div className='container md:px-6 px-2 md:py-10 mx-auto'>
            <div className="text-center space-y-3 mb-8 my-14">
        <h1 className="text-4xl font-bold">Featured Foods section</h1>
        <p className='max-w-[800px] mx-auto'>
        Discover our handpicked selection of Featured Foods, carefully chosen to provide nourishment and delight. Each item represents a generous contribution towards combating hunger and fostering community support.
        </p>

      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 ">
        {foodData.slice(0,6).map((food, i) => (
          <FoodCard key={i} food={food}></FoodCard>
        ))}
      </div>
      <div className='text-center my-8'>
        <Link to={'/availableFoods'}>
        <button className="btn">Show All Foods</button>
        </Link>
        </div>
        </div>
    );
};

export default FeaturedFoods;
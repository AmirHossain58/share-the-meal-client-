import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';

const AvailableFoods = () => {
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 ">
        {foodData.slice(0,6).map((food, i) => (
          <FoodCard key={i} food={food}></FoodCard>
        ))}
      </div>
    );
};

export default AvailableFoods;
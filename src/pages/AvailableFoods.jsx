import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';

const AvailableFoods = () => {
    const [foodData,setFoodData]=useState([])
    const [searchText,setSearchText]=useState('')
    const [search,setSearch]=useState('')
    const [sort,setSort]=useState('')
    useEffect(() => {
        const getData = async () => {
          const { data } = await axios(
            `${
              import.meta.env.VITE_API_URL
            }/food?status=Available&search=${search}&sort=${sort}`
          )
         setFoodData(data);
        }
        getData()
        
      }, [search,sort])


      const handleSearch=(e)=>{
        e.preventDefault()
        setSearch(searchText)

      }
      const handleReset = () => {
        setSort('')
        setSearch('')
        setSearchText('')
      }
    return (<div className='my-10'>
      
      <div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-5 my-6'>
         
          <form onSubmit={handleSearch}>
            <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                onChange={e => setSearchText(e.target.value)}
                value={searchText}
                name='search'
                placeholder='Search By Food Name'
                aria-label='Search By Food Name'
              />

              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                Search
              </button>
            </div>
          </form>
          <div>
            <select
              onChange={e => {
                setSort(e.target.value)
              }}
              value={sort}
              name='sort'
              id='sort'
              className='border p-4 rounded-md focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'
            >
              <option value=''>Sort By Food Expire Date</option>
              <option value='dsc'>Descending Order</option>
              <option value='asc'>Ascending Order</option>
            </select>
          </div>
          <button onClick={handleReset} className='btn focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
            Reset
          </button>
        </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 ">
        {foodData?.map((food, i) => (
          <FoodCard key={i} food={food}></FoodCard>
        ))}
      </div>
    </div>
    );
};

export default AvailableFoods;
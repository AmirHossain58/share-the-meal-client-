import React from 'react';
import {useLoaderData, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker'
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import toast from 'react-hot-toast';

const UpdateFood = () => {
    const navigate =useNavigate()
    const {user}=useAuth()
     const food=useLoaderData()
     const {
        foodName,
        foodImage,
        foodQuantity,
        foodStatus,
        pickupLocation,
        _id,
        expiredTime,
        donator,
        additionalNotes
      } = food || {};
     const handleUpdateAFood= async(e)=>{
        e.preventDefault()
        const form = e.target
        const foodName = form.foodName.value
        const foodImage = form.foodImage.value
        const foodQuantity = form.foodQuantity.value
        const pickupLocation = form.pickupLocation.value
        const expiredTime = form.expiredTime.value
        const additionalNotes = form.additionalNotes.value
        const foodStatus = form.foodStatus.value
    const updateFoodData = {
      foodName,
      foodImage,
      foodQuantity,
      pickupLocation,
      expiredTime,
      additionalNotes,
      foodStatus,
    }
    try {
     
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/food/${_id}`,
        updateFoodData
      )
      toast.success('Food Request Added Successfully!')
      navigate('/manageMyFoods')
    } catch (err) {
      console.log(err)
    }

     }
    return (
        <div>
            <div className='flex container mx-auto justify-center items-center my-12'>
        <section className='md:w-2/3 p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
          <h2 className='text-lg font-semibold text-gray-700 capitalize '>
          Update The Food Information

          </h2>
  
          <form onSubmit={handleUpdateAFood}>
            <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
              <div>
                <label className='text-gray-700 ' htmlFor='foodName'>
                Food Name
                </label>
                <input
                  id='foodName'
                  name='foodName'
                  type='text'
                  defaultValue={foodName}
                  required
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div>
                <label className='text-gray-700 ' htmlFor='foodImage'>
                Food Image
                </label>
                <input
                  id='foodImage'
                  name='foodImage'
                  type='text'
                  defaultValue={foodImage}
                  required
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div>
                <label className='text-gray-700 ' htmlFor='foodQuantity'>
                Food Quantity
                </label>
                <input
                  id='foodQuantity'
                  name='foodQuantity'
                  type='text'
                  defaultValue={foodQuantity}
                  required
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div>
                <label className='text-gray-700 ' htmlFor='pickupLocation'>
                Pickup Location
                </label>
                <input
                  id='pickupLocation'
                  name='pickupLocation'
                  type='text'
                  defaultValue={pickupLocation}
                  required
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div className='flex flex-col gap-2 '>
                <label className='text-gray-700'>Expired Date/Time</label>
  
                {/* Date Picker Input Field */}
                <DatePicker
                  className='border w-full bg-white text-slate-950 p-2 rounded-md'
                  name='expiredTime'
                  selected={expiredTime}
                //   onChange={date => setExpiredDate(date)}
                />
              </div>
              <div className='flex flex-col gap-2 '>
              <label className='text-gray-700 ' htmlFor='foodStatus'>
              Food Status
              </label>
              <select
                name='foodStatus'
                id='foodStatus'
                defaultValue={foodStatus}
                className='border p-2 rounded-md'
              >
                <option value='Available'>Available</option>
                <option value='Requested'>Requested</option>
              </select>
            </div>
              <div>
                <label className='text-gray-700 ' htmlFor='additionalNotes'>
                Additional Notes
                </label>
                <input
                  id='additionalNotes'
                  name='additionalNotes'
                  type='text'
                  defaultValue={additionalNotes}
                  required
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
            </div>
         
            <div className='flex justify-end mt-6'>
              <button className='px-8 py-2.5 leading-5 text-white uppercase  transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
              Update 
              </button>
            </div>
          </form>
        </section>
      </div>
        </div>
    );
};

export default UpdateFood;
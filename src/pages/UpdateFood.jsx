import React, { useEffect, useState } from 'react';
import {useLoaderData, useNavigate, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker'
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import toast from 'react-hot-toast';
import useAxiosSecure from '../hooks/useAxiosSecure';
import {
  useQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
const UpdateFood = () => {
  const [food,setFood]=useState([])
    const navigate =useNavigate()
    const axiosSecure = useAxiosSecure();
    const {user}=useAuth()
     const {id}=useParams()
     const {mutateAsync}=useMutation({
      mutationFn:async({updateFoodData,_id})=>{
      await  axiosSecure.put(`/food/${_id}`,updateFoodData)
      },
      onSuccess:()=>{
        toast.success('Food Updated Successfully!')
        navigate('/manageMyFoods')
      }
    })
     useEffect(()=>{
      axiosSecure.get(`/details/${id}`)
      .then(res =>{
  setFood(res.data);
      })
    },[axiosSecure,id])
     const {
        foodName,
        foodImage,
        foodQuantity,
        foodStatus: foodStatus1,
        pickupLocation,
        _id,
        expiredTime,
        donator,
        additionalNotes
      } = food || {};
      console.log(food.foodStatus);
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
     
      // const { data } = await axios.put(
      //   `${import.meta.env.VITE_API_URL}/food/${_id}`,
      //   updateFoodData
      // )
      mutateAsync({updateFoodData,_id})
      // axiosSecure.put(`/food/${_id}`,updateFoodData)
      // .then(res =>{

      // })
      // toast.success('Food Updated Successfully!')
      // navigate('/manageMyFoods')
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
                
                className='border p-2 rounded-md'
              >
                <option value='Available'>{foodStatus1}</option>
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
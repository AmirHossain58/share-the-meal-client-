import React, { useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import useAuth from '../hooks/useAuth'
import useAxiosSecure from '../hooks/useAxiosSecure';
const AddFood = () => {
  const axiosSecure = useAxiosSecure();
    const { user } = useAuth()
  const navigate = useNavigate()

  const [expiredDate, setExpiredDate] = useState(new Date())

  const handleAddAFood = async e => {
    e.preventDefault()
    const form = e.target
    const foodName = form.foodName.value
    const foodImage = form.foodImage.value
    const foodQuantity = form.foodQuantity.value
    const pickupLocation = form.pickupLocation.value
    const expiredTime = expiredDate
    const additionalNotes = form.additionalNotes.value
    const foodStatus = 'Available'
    const foodData = {
      foodName: foodName,
      foodImage,
      foodQuantity,
      pickupLocation,
      expiredTime,
      additionalNotes,
      donator: {
        email:user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
      foodStatus,
    }
    try {
      axiosSecure.post('/addFood',foodData)
        .then(res =>{

        })
      // const { data } = await axios.post(
      //   `${import.meta.env.VITE_API_URL}/addFood`,
      //   foodData
      // )
      // console.log(data)
      toast.success('Food Added Successfully!')
    } catch (err) {
      console.log(err)
    }
    form.reset()
  }
    return (
        <div className='flex container mx-auto justify-center items-center my-12'>
        <section className='md:w-2/3 p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
          <h2 className='text-lg font-semibold text-gray-700 capitalize '>
            PLACE DONATE A FOOD
          </h2>
  
          <form onSubmit={handleAddAFood}>
            <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
              <div>
                <label className='text-gray-700 ' htmlFor='foodName'>
                Food Name
                </label>
                <input
                  id='foodName'
                  name='foodName'
                  type='text'
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
                  required
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div className='flex flex-col gap-2 '>
                <label className='text-gray-700'>Expired Date/Time</label>
  
                {/* Date Picker Input Field */}
                <DatePicker
                  className='border w-full bg-white text-slate-950 p-2 rounded-md'
                  selected={expiredDate}
                  onChange={date => setExpiredDate(date)}
                />
              </div>
              <div>
                <label className='text-gray-700 ' htmlFor='additionalNotes'>
                Additional Notes
                </label>
                <input
                  id='additionalNotes'
                  name='additionalNotes'
                  type='text'
                  required
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
            </div>
            <div className="mt-4">
     <span className="mx-1 text-lg mb-3  px-2  text-gray-600 dark:text-gray-300">Donator : </span>
            <div className="flex items-center">
                <div className=" px-2  flex items-center">
                    <img className="object-cover h-10 rounded-full" src={user.photoURL||"https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"} alt="Avatar"></img>
                   <div>
                   <p href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link"> Email: {user.email}</p>
                   <p href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">Name: {user.displayName}</p>
                   </div>
                </div>
               
            </div>
        </div>
         
            <div className='flex justify-end mt-6'>
              <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
               Add Food
              </button>
            </div>
          </form>
        </section>
      </div>
    );
};

export default AddFood;
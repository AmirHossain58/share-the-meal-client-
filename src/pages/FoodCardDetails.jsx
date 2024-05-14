import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import useAuth from './../hooks/useAuth';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import DatePicker from 'react-datepicker'
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const FoodCardDetails = () => {

  const{id}=useParams()
  const axiosSecure = useAxiosSecure();
  const navigate=useNavigate()
  const{user}=useAuth()
  // const [foodData,setFoodData]=useState([])

  const getData = async () => {
    const { data } = await axiosSecure.get(`/details/${id}`)
    return data
  }
    const { data: foodData = [], isLoading } = useQuery({
    queryFn: () => getData(),
    queryKey: ['food', user?.email],
  })
  useEffect(()=>{
    // axiosSecure.get(`/details/${id}`)
//     .then(res =>{
// setFoodData(res.data);
//     })
  },[])
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
  } = foodData || {};
  const status={
    foodStatus:'requested'
  }
  const handleAddAFood = async e => {
    e.preventDefault()
    const requestedFoodData = {
      foodName,
      foodImage,
      foodId:_id,
      donator,
      requesterEmail:user.email,
      requestDate:new Date(),
      pickupLocation,
      expiredTime,
      additionalNotes:e.target.additionalNotes.value,
      donation:e.target.donation.value,
    }
    try {
      const { data } = await axiosSecure.post(`/reqFood`,
        requestedFoodData
      )
      const { data2 } = await axiosSecure.put(
        `/food/${_id}`,
        status
      )
      toast.success('Food Request Added Successfully!')
      // setTimeout(navigate('/myFoodRequest'),1000)
      navigate('/availableFoods')
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <div>
      <div className="space-y-1 mt-5">
        <Typography variant="h3" color="blue-gray" className="font-bold">
          Donar Information:
        </Typography>
        <Typography variant="h4" color="blue-gray" className="font-bold">
          Donar Name: {donator?.name}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="">
          Food Pickup Location: {pickupLocation}
        </Typography>
      </div>
      <Card className="w-full min-h-[px] p-4  rounded">
        <CardHeader className="flex justify-center " floated={false}>
          <img className="w-2/3 m-4" src={foodImage} alt="ui/ux review check" />
        </CardHeader>
        <CardBody className="flex-grow">
          <div className="mb-3 mt-2 flex items-center justify-between">
            <Typography variant="h2" color="blue-gray" className="font-bold">
              Food Name: {foodName}
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-0.5 h-5 w-5 text-yellow-700"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              5.0
            </Typography>
          </div>
          <div className="flex flex-col md:flex-row justify-between px-2 text-lg font-semibold">
            <Typography color="gray">Food Quantity : {foodQuantity}</Typography>
            <Typography color="gray">
              Food Status :{" "}
              <span
                className={
                  foodStatus === "Available"
                    ? "text-green-500 "
                    : "text-red-500"
                }
              >
                {foodStatus}
              </span>
            </Typography>
          </div>
          <div className="flex flex-col md:flex-row justify-between px-2 text-lg font-semibold mt-2">
            <Typography className="" color="gray">
              Expired Time: {new Date(expiredTime).toLocaleDateString()}
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="py-3 flex justify-center my-5">
          {/* <button className="btn w-full font-bold">Food Request</button> */}
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
         disabled={foodStatus==='requested'}
            className="btn w-1/2 "
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
           Food Request
          </button>
          <dialog id="my_modal_4" className="modal w-full">
            <div className="modal-box  w-full">
              <form method="dialog my-4">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-md btn-circle btn-ghost absolute text-xl  right-2 top-2">
                  ✕
                </button>
              </form>
              <div className='flex container mt-4 mx-auto justify-center items-center'>
        <section className=' p-2  mx-auto bg-white rounded-md shadow-md '>
          <h2 className='text-lg font-semibold text-gray-700 capitalize '>
         Request  for Food 
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
                  value={foodName}
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
                  value={foodImage}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div>
                <label className='text-gray-700 ' htmlFor='foodId'>
                Food Id
                </label>
                <input
                  id='foodId'
                  name='foodId'
                  type='text'
                  required
                  value={_id}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div>
                <label className='text-gray-700 ' htmlFor='foodId'>
                Food Donator Email
                </label>
                <input
                  id='foodId'
                  name='foodId'
                  type='text'
                  value={donator?.email}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div>
                <label className='text-gray-700 ' htmlFor='foodId'>
                Food Donator Name
                </label>
                <input
                  id='foodId'
                  name='foodId'
                  type='text'
                  required
                  value={donator?.name}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div>
                <label className='text-gray-700 ' htmlFor='userEmail'>
                Your Email
                </label>
                <input
                  id='userEmail'
                  name='userEmail'
                  type='text'
                  value={user?.email}
                  required
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div className='flex flex-col gap-2 '>
                <label className='text-gray-700'>Request Date</label>
  
                {/* Date Picker Input Field */}
                <DatePicker
                  className='border w-full bg-white text-slate-950 p-2 rounded-md'
                  disabled
                  selected={new Date()}
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
                  value={pickupLocation}
                  required
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div className='flex flex-col gap-2 '>
                <label className='text-gray-700'>Expired Date</label>
  
                {/* Date Picker Input Field */}
                <DatePicker
                  className='border w-full bg-white text-slate-950 p-2 rounded-md'
                  disabled
                  selected={expiredTime}
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
                  defaultValue={additionalNotes}
                  required
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
            </div>
            <div>
                <label className='text-gray-700 ' htmlFor='donation'>
                Your Donation Amount
                </label>
                <input
                  id='donation'
                  name='donation'
                  type='number'
                  placeholder="Your Donation Amount"
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-yellow-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
         
            <div className='flex justify-end mt-6'>
              <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
              Food Request
              </button>
            </div>
          </form>
        </section>
      </div>
            </div>
          </dialog>
        </CardFooter>
      </Card>
    </div>
  );
};

export default FoodCardDetails;

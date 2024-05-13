import React from 'react';
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
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"


const FoodCard = ({food}) => {
    const {foodName,foodImage,foodQuantity,foodStatus,pickupLocation,_id,expiredTime
    }=food||{}
    return (
        <div>
          
        <Link to={`/food/${_id}`}>
        <Card className="w-full  max-w-[26rem] shadow-xl min-h-[px] md:p-4 hover:scale-105 rounded transition-all">
   <div floated={false}>
   <div className="mb-3 flex items-center justify-between">
       <Typography variant="h2" color="blue-gray" className="font-bold">
       {foodName}
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
    
   
   </div>
   <CardBody className='flex-grow'>
    <div>
    <img
     className=' mb-3 bg-cover  rounded-br-none rounded-[30%] rounded-tl-none overflow-hidden w-full max-h-[330px] min-h-[330px]'
       src={foodImage}
       alt="food image"
     />
    </div>
     <div className='flex flex-col md:flex-row justify-between px-2 text-lg font-semibold mb-2'>
     <Typography color="gray">
     Food Quantity :  {foodQuantity}
     </Typography>
     <Typography color="gray">
     Food Status : {foodStatus}
     </Typography>
     </div>
     <Typography className='px-2 ' color="gray">
     Food Pickup: {pickupLocation}
     </Typography>
     <Typography className='px-2 mt-2' color="gray">
     Expired Time: {new Date(expiredTime).toLocaleDateString()} {}
     </Typography>
     <div className="mt-4">
     <span className="mx-1 pb-2 text-xs px-2  text-gray-600 dark:text-gray-300">Donator:</span>
            <div className="flex items-center">
                <div className=" px-2  flex items-center">
                    <img className="object-cover h-10 rounded-full" src={food?.donator?.photo||"https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"} alt="Avatar"></img>
                    <p href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">{food?.donator?.name}</p>
                </div>
               
            </div>
        </div>
   </CardBody>
   <CardFooter className="py-3">
   <button className="btn w-full font-bold">View Details</button>
   </CardFooter>
          </Card>
        </Link> 
     </div>
    );
};

export default FoodCard;
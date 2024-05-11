import React from 'react';
import { useLoaderData } from 'react-router-dom';
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
const FoodCardDetails = () => {
    const foodData=useLoaderData()
    const {foodName,foodImage,foodQuantity,foodStatus,pickupLocation,_id,expiredTime,donator
    }=foodData||{}
    
    return (
        <div>
          <Card className="w-full min-h-[px] p-4  rounded">
   <CardHeader className='flex justify-center ' floated={false}>
     <img
     className='w-2/3 m-4'
       src={foodImage}
       alt="ui/ux review check"
     />
   
   </CardHeader>
   <CardBody className='flex-grow'>
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
     <div className='flex flex-col md:flex-row justify-between px-2 text-lg font-semibold'>
     <Typography color="gray">
     Food Quantity :  {foodQuantity}
     </Typography>
     <Typography color="gray">
     Food Status : {foodStatus}
     </Typography>
     </div><br />
     <div className='flex flex-col md:flex-row justify-between px-2 text-lg font-semibold'>
     <Typography className='' color="gray">
     Food Pickup: {pickupLocation}
     </Typography>
     <Typography className='' color="gray">
     Expired Time: {new Date(expiredTime).toLocaleDateString()}
     </Typography>
     </div>
     <span className="mx-1 text-xs px-2  text-gray-600 dark:text-gray-300">Donator:</span>
     <div className="mt-4">
            <div className="flex items-center">
                <div className="flex items-center">
                    <img className="object-cover h-10 rounded-full" src={donator?.photo||"https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"} alt="Avatar"></img>
                    <p href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">{donator?.name}</p>
                </div>
               
            </div>
        </div>
   </CardBody>
   <CardFooter className="py-3">
   <button className="btn w-full font-bold">View Details</button>
   </CardFooter>
          </Card>
        </div>
    );
};

export default FoodCardDetails;
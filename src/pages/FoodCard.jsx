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
        <div >
          
        
      <motion.div
        initial={{ opacity: 0, y: -70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        className="box"
      >
        <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    transition={{ duration: 1 }}
    
  >

        <Link to={`/food/${_id}`}>
        <Card className="w-full  max-w-[26rem] shadow-xl min-h-[px] md:p-4 rounded transition-all">
   <div floated={false}>
   <div className="mb-3 flex items-center justify-between">
       <Typography variant="h2" color="blue-gray" className="font-bold">
       {foodName}
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
     Status : {foodStatus}
     </Typography>
     </div>
     <Typography className='px-2  text-left' color="gray">
     Food Pickup: {pickupLocation}
     </Typography>
    <div className='text-left'>
    <Typography className='px-2 mt-2' color="gray">
     Expired Time: {new Date(expiredTime).toLocaleDateString()} {}
     </Typography>
    </div>
     <div className="mt-4">
     <div className='text-left'>
     <span className="mx-1 pb-2 text-xs px-2  text-gray-600 dark:text-gray-300">Donator:</span>
     </div>
            <div className="flex items-center">
                <div className=" px-2  flex items-center">
                    <img className="object-cover h-10 rounded-full" src={food?.donator?.photo||"https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"} alt="Avatar"></img>
                    <p href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">{food?.donator?.name}</p>
                </div>
               
            </div>
        </div>
   </CardBody>
   <CardFooter className="py-3">
   <button className="btn w-full text-black border-none bg-[#FCC429] hover:text-white font-bold">View Details</button>
   </CardFooter>
          </Card>
        </Link> 
  </motion.button>
        {/* Hello, Framer Motion! */}
      </motion.div>

     </div>
    );
};

export default FoodCard;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAxiosSecure from '../hooks/useAxiosSecure';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async';
const MyFood = () => {
  const{loading}=useAuth()
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [userAddData, setUseAddData] = useState([]);
  const getData = async () => {
    const { data } = await axiosSecure.get(`/reqFood?email=${user.email}`)
    return data
  }
  const queryClient = useQueryClient()
  const { data: food = [], isLoading } = useQuery({
    queryFn: () => getData(),
    queryKey: ['food', user?.email],
  })
  
  if (isLoading){
      return <div className='flex w-full mx-auto justify-center items-center my-12'><span className="loading loading-ball loading-xs"></span>
      <span className="loading loading-ball loading-sm"></span>
      <span className="loading loading-ball loading-md"></span>
      <span className="loading loading-ball loading-lg"></span></div>
    }
  return (
        <div className="container mx-auto gap-5 my-14">
               <Helmet>
            <title>Share the Meal | My Food Request</title>
          </Helmet>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Donar Name</th>
                <th>Pickup Location</th>
                <th>Expire Date</th>
                <th>Request Date</th>
                <th>Your Donation Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {food?.map((data, i) => (
                <tr key={data._id}>
                  <th>{i + 1}</th>
                  <td>{data?.donator?.name}</td>
                  <td>{data?.pickupLocation}</td>
                  <td>{new Date(data.expiredTime).toLocaleDateString()}</td>
                  <td>{new Date(data.requestDate).toLocaleDateString()}</td>
                  <td>$ {data?.donation}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyFood;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAxiosSecure from '../hooks/useAxiosSecure';

const MyFood = () => {
  const{loading}=useAuth()
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [userAddData, setUseAddData] = useState([]);
  useEffect(() => {
    // fetch(`${import.meta.env.VITE_API_URL}/reqFood?email=${user.email}`,{ withCredentials: true })
    // .then((res) => res.json())
    // .then((data) => {
    //   // setUseAddData(data);
    //   console.log(data)
    // });
    axiosSecure.get(`/reqFood?email=${user.email}`)
        .then(res => setUseAddData(res.data))
    
  }, [user]);
  if (loading){
      return <div className='flex justify-center items-center my-12'><span className="loading loading-ball loading-xs"></span>
      <span className="loading loading-ball loading-sm"></span>
      <span className="loading loading-ball loading-md"></span>
      <span className="loading loading-ball loading-lg"></span></div>
    }
  return (
        <div className="container mx-auto gap-5 my-14">
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
              {userAddData?.map((data, i) => (
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
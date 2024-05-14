import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';
import useAxiosSecure from '../hooks/useAxiosSecure';
import {
  useQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
const ManageMyFood = () => {
  const axiosSecure = useAxiosSecure();
  const{loading,user}=useAuth()
  const [userAddData, setUseAddData] = useState([]);
  // const [userAddData1, setUseAddData1] = useState([]);
  // const [userAddDataSort, setUseAddDataSort] = useState([]);
  const queryClient = useQueryClient()
  const getData = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/food?email=${user.email}`)
    return data
  }
  const { data: myFood = [], isLoading } = useQuery({
    queryFn: () => getData(),
    queryKey: ['food', user?.email],
  })
 
  const {mutateAsync}=useMutation({
    mutationFn:async({id})=>{
     await axiosSecure.delete(`/food/${id}`)
    }
  })
 
  const handleDelete = async(id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
       
          // axiosSecure.delete(`/food/${id}`)
           mutateAsync({id})
              Swal.fire(
                "Deleted!",
                "Food has been deleted.",
                "success"
              );
              const remaining = userAddData.filter(
                (data) => data._id !== id
              );
              setUseAddData(remaining);
         
         
      }
    });
  };
    return (
        <div className="container mx-auto gap-5 my-14">
               <Helmet>
            <title>Share the Meal | Manage My Foods</title>
          </Helmet>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Food Name</th>
                <th>Food Quantity</th>
                <th>Food Status</th>
                <th>Expired Time</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {myFood?.map((data, i) => (
                <tr key={data._id}>
                  <th>{i + 1}</th>
                  <td>
                    {data.foodName}
                  </td>
                  <td>{data.foodQuantity}</td>
                  <td>{data.foodStatus}</td>
                  <td>{new Date(data.expiredTime).toLocaleDateString()}</td>
                  <td>
                    <Link to={`/update/${data._id}`}>
                      <button className="btn ">
                        Update
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(data._id)}
                      className="btn "
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ManageMyFood;
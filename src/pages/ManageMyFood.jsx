import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';
import useAxiosSecure from '../hooks/useAxiosSecure';

const ManageMyFood = () => {
  const axiosSecure = useAxiosSecure();
  const{loading,user}=useAuth()
  const [userAddData, setUseAddData] = useState([]);
  const [userAddData1, setUseAddData1] = useState([]);
  const [userAddDataSort, setUseAddDataSort] = useState([]);
  // const {foodName,foodImage,foodQuantity,foodStatus,pickupLocation,_id,expiredTime
  // }=food||{}foodName
  // console.log(userAddDataSort);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/food`)
      .then((res) => res.json())
      .then((data) => {
        setUseAddData(data);
      });
    const remaining = userAddData.filter((data) => data.donator.email === user.email);
    setUseAddData1(remaining);
  }, [userAddData,user]);
  const handleDelete = (id) => {
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
        // fetch(`${import.meta.env.VITE_API_URL}/food/${id}`, {
        //   method: "DELETE",
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
          axiosSecure.delete(`/food/${id}`)
        .then(res =>{
           if (res.data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Food has been deleted.",
                "success"
              );
              const remaining = userAddDataSort.filter(
                (data) => data._id !== id
              );
              setUseAddDataSort(remaining);
            }
          });
      }
    });
  };
    if (loading){
        return <div className='flex justify-center items-center my-12 '><span className="loading loading-ball loading-xs"></span>
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
              {userAddData1?.map((data, i) => (
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
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const MyFood = () => {
    const { user } = useAuth();
    const [userAddData, setUseAddData] = useState([]);
    const [userAddData1, setUseAddData1] = useState([]);
    const [userAddDataSort, setUseAddDataSort] = useState([]);
    // console.log(userAddData);
    // const {foodName,foodImage,foodQuantity,foodStatus,pickupLocation,_id,expiredTime
    // }=food||{}foodName
    // console.log(userAddDataSort);
    useEffect(() => {
      fetch(`${import.meta.env.VITE_API_URL}/reqFood?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setUseAddData(data);
        });
      
    }, [user]);
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
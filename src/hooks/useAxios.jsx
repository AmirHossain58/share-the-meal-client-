import axios from 'axios';
import React from 'react';
const axiosCommon = axios.create({
    baseURL:import.meta.env.VITE_API_URL,
  })
const useAxios = () => {
    console.log(axiosCommon);
    console.log(import.meta.env.VITE_API_URL);
    return axiosCommon
};

export default useAxios;
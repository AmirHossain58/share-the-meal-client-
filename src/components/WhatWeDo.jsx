import React from "react";

const WhatWeDo = () => {
  return (
    <div className="my-14">
    <div className="flex justify-center">
    <h1 className="text-5xl text-center font-bold pb-2 border-[#EF4C28] border-b-4"> WHAT WE DO </h1>
    </div>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
     <div className="w-full  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <h1 className="text-3xl font-bold text-center mb-2 text-[#EF4C28] ">We Rescue Food</h1>
        <img
          className="object-cover p-10 w-full "
          src="https://foodrescue.us/wp-content/uploads/bb-plugin/cache/What-we-do-RESCUE-500-landscape-0bbf3cb9ab36435f7990b6f6ca56af43-60356a00eb583.jpg"
          alt="avatar"
        ></img>

        <div className="py-5 px-2 ">
          <p
        
            className="block text-2xl mb-1 font-medium text-gray-500 dark:text-white"
            role="link"
          >
        Using our web-based app, we engage volunteers to transfer fresh food surpluses from local businesses to social service agencies serving the food insecure.
          </p>
          <span className="text-xl font-bold text-[#EF4C28] dark:text-gray-200">
          BECOME A FOOD RESCUER
          </span>
        </div>
      </div>
     <div className="w-full  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <h1 className="text-3xl font-bold text-center uppercase mb-2 text-[#EF4C28] ">We Help The EnvironmenT</h1>
        <img
          className="object-cover p-10 w-full "
          src="https://foodrescue.us/wp-content/uploads/bb-plugin/cache/what-we-do-ENVIRONMENT-500-landscape-47b931d88e89a9c7d3ba174101f5bf11-60356a00eb58b.jpg"
          alt="avatar"
        ></img>

        <div className="py-5 px-2 ">
          <p
        
            className="block text-2xl mb-1 font-medium text-gray-500 dark:text-white"
            role="link"
          >
       Food waste remains one of the top solutions to global warming. Currently, food waste contributes 8 percent of total global greenhouse gas emissions.
          </p>
          <span className="text-xl font-bold uppercase text-[#EF4C28] dark:text-gray-200">
          BECOME A FOOD DONOR
          </span>
        </div>
      </div>
     <div className="w-full  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <h1 className="text-3xl font-bold uppercase text-center mb-2 text-[#EF4C28] ">We create community</h1>
        <img
          className="object-cover p-10 w-full "
          src="https://foodrescue.us/wp-content/uploads/bb-plugin/cache/what-we-do-COMMUNITY-061523-landscape-aadb1ca0384eb227004953afc8a69056-60356a00eb587.jpg"
          alt="avatar"
        ></img>

        <div className="py-5 px-2 ">
          <p
        
            className="block text-2xl mb-1 font-medium text-gray-500 dark:text-white"
            role="link"
          >
       Our model empowers communities to serve themselves with the support of our app. All food donors, rescuers, and agency partners are members of the communities where we operate.
          </p>
          <span className="text-xl font-bold uppercase text-[#EF4C28] dark:text-gray-200">
          START A FOOD RESCUE US SITE
          </span>
        </div>
      </div>
     </div>
    </div>
  );
};

export default WhatWeDo;

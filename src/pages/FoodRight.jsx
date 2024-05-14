import React from "react";
import Marquee from "react-fast-marquee";
const FoodRight = () => {
  return (
    <div className="min-h-[550px] flex flex-col justify-center md:px-10 px-2 text-black bg-[#f5b648] dark:bg-slate-900 dark:text-white md:pb-10">
      <div className="flex flex-col md:flex-row gap-4 justify-between md:py-24">
        <div className="flex-grow flex-1 space-y-2">
          <h1 className="text-2xl md:text-5xl font-black">FOOD IS A RIGHT. </h1>
          <h1 className="text-xl md:text-3xl font-bold">
            EVERYONE DESERVES ACCESS TO SAFE,
            <br /> HEALTHY FOOD.
          </h1>
        </div>
        <div className="flex-1">
          <p className="tracking-wide">
            Community Fridges TO is a Toronto-based mutual aid initiative
            created to nourish our communities and our neighbours. We firmly
            believe access to food is a right, not a privilege.{" "}
          </p>
          <br />
          <p className="tracking-wide">
            These refrigerators provide neighbours the opportunity to donate
            food as well as take what they need, ensuring accessible food 24/7.
          </p>
        </div>
      </div>
      <div>
        <Marquee speed={30} className="tracking-widest text-xl font-bold mt-4">
          IF YOU WOULDN'T EAT IT, DON'T LEAVE IT 〰️ IF YOU WOULDN'T EAT IT, DON'T
          LEAVE IT 〰️ IF YOU WOULDN'T EAT IT, DON'T
          LEAVE IT
        </Marquee>
      </div>
    </div>
  );
};

export default FoodRight;

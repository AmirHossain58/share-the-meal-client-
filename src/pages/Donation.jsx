import React, { useState } from "react";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import DonationCarousel from "../components/DonationCarousel";
import { Calendar } from 'fullcalendar'

document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar')
    const calendar = new Calendar(calendarEl, {
      initialView: 'dayGridMonth'
    })
    calendar.render()
  })
const Donation = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [donate, setDonate] = useState("BDT 1,020.00");
  const [meals, setMeals] = useState("15 meals");
  return (
    <div className="">
      <h1 className="text-4xl text-center  mb-14 font-black">Please: Give life-saving aid</h1>
      <div className="grid md:gap-12 grid-cols-1  md:grid-cols-12  ">
        <div className=" md:col-span-7">
          <div className="relative  border-2 max-w-[600px] min-h-[205px] mt-[10%] md:mt-[35%] rounded-lg">
            <div className="absolute  rounded-lg overflow-hidden    md:-top-[130%] -top-[40%] px-9 ">
              <img
              className="rounded-lg"
                src="https://images.ctfassets.net/z0x29akdg5eb/3rklXZNEizovsaQmrRhJVs/2edd5282e9f23ea55b1bbb5b15e231d5/WF1852903_AP3I1385.jpg?w=561&h=351&fit=fill&q=80&fm=avif"
                alt=""
              />
            </div>
           <div className="absolute  bottom-[18%] left-[8%] ">
            <div className="text-xl font-semibold text-slate-400">
            <p className="flex gap-2">
              <MdOutlineSupervisorAccount className="text-2xl" /> 
              703 supporters
            </p>
            <p className="text-[#007DBC]">21,457,779 meals</p>
            </div>
            </div>
          </div>
          <div className="border-2 p-9 rounded-xl my-12 font-bold bg-[#e0eff7]">
            <div className="flex justify-between mb-3">
                <p >5/22/2024</p>
                <p className="text-[#007DBC]">See All update</p>
            </div>
            <p className="text-[212529]">For the first time, three convoys crossed into Gaza city via the Erez crossing in mid-April. A total of 25 trucks carrying around 404 metric tons of food parcels and wheat flour went through which is enough for around 80,000 people.</p>
          </div>
          <div className="border-2 p-9 rounded-xl my-12 font-bold ">
            <h2 className="text-4xl font-bold">Overview</h2>
            <p>
              Shared meals will provide emergency food assistance to families in
              Palestine.
            </p><br />
            <p className="text-slate-400">
              With conflict escalating in October 2023, Palestine is facing an
              urgent humanitarian crisis. 1.8 million people are now food
              insecure, many of whom have lost their homes and are seeking
              safety in shelters. <br /><br />
              Despite challenging conditions, the World Food Programme (WFP) is
              on the ground providing life-saving aid to people in Palestine and
              those in shelters. Regular cash and food programmes are also
              continuing every day where possible. <br /><br />
              Until the end of the year, WFP plans to reach 1.1 million people
              in Gaza and the West Bank. Food support includes bread, canned
              chickpeas and beans.{" "}
            </p>
          </div>
          <DonationCarousel></DonationCarousel>
        </div>
        <div className="col-span-5 sticky top-0">
          <div className="p-8 border-2 rounded-lg">
            <Tabs>
              <div className="text-center text-xl font-black">
                <TabList>
                  <Tab>Once</Tab>
                  <Tab>Monthly </Tab>
                </TabList>
              </div>

              <TabPanel>
                <div className="text-center space-y-1 mb-2">
                  <h2 className="text-xl font-bold">Donate</h2>
                  <h1 className="text-3xl text-[#007DBC] font-black">
                    {donate}
                  </h1>
                  <p>{meals}</p>
                </div>
                <div className="grid md:grid-cols-3 gap-2 text-slate-100">
                  <button
                    onClick={() => {
                      setDonate("BDT 476.00");
                      setMeals("7 meals");
                    }}
                    className="btn text-slate-500 focus:bg-blue-400 focus:text-white"
                  >
                    BDT 476.00
                  </button>
                  <button
                    onClick={() => {
                      setDonate("BDT 1,020.00");
                      setMeals("15 meals");
                    }}
                   
                    className="btn text-slate-500 focus:bg-blue-400 focus:text-white"
                  >
                    BDT 1,020.00
                  </button>
                  <button
                    onClick={() => {
                      setDonate("BDT 2040.00");
                      setMeals("30 meals");
                    }}
                    className="btn text-slate-500 focus:bg-blue-400 focus:text-white"
                  >
                    BDT 2,040.00
                  </button>
                  <button
                    onClick={() => {
                      setDonate("BDT 3,400.00");
                      setMeals("50 meals");
                    }}
                    className="btn text-slate-500 focus:bg-blue-400 focus:text-white"
                  >
                    BDT BDT 3,400.00
                  </button>
                  <input
                    onChange={(e) => {
                      setDonate("BDT BDT " + e.target.value + ".00");
                      setMeals(Math.ceil(e.target.value / 68) + " meals");
                    }}
                    onClick={(e) => {
                      setDonate("BDT 68.00");
                      e.target.value = 68.0;
                      setMeals("1 meal");
                    }}
                    id="foodName"
                    name="foodName"
                    type="number"
                    placeholder="Other Amount"
                    className="block col-span-2 w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>
                <div className="flex gap-2 my-6 text-slate-400">
                   <div>
                   <input type="checkbox"  className="checkbox checkbox-info " />
                   </div>
                    <div>
                    <p>Yes, I’m happy to receive occasional marketing emails from ShareTheMeal (WFP) about emergencies, field updates and the impact of my donations.</p>
                    <button className="text-[#007DBC]">Read more</button>
                    </div>
                </div>
                <button
                  onClick={() => {
                    !user && navigate("/login");
                  }}
                  className="btn w-full my-3 bg-yellow-400"
                >
                  Continue
                </button>
               <div className="text-slate-400 text-center space-y-1">
               <p>
                  <span className="text-[#007DBC]">How is my donation used?</span> By donating you are agreeing to our
                  Privacy Policy<span className="text-[#007DBC]"> Privacy Policy</span> and Terms of Use.<span className="text-[#007DBC]">Terms of Use.</span>
                </p>
                <p>
                  Donations are tax-deductible in several countries. Find out
                  more in our<span className="text-[#007DBC]"> <Link to={'/faqs'}>FAQs.</Link></span>
                </p>
               </div>
              </TabPanel>
              <TabPanel>
                <div className="text-center space-y-1 mb-2">
                  <h2 className="text-xl font-bold">Donate monthly</h2>
                  <h1 className="text-3xl text-[#007DBC] font-black">
                    {donate}
                  </h1>
                  <p>{meals}</p>
                </div>
                <div className="grid md:grid-cols-3 gap-2 text-slate-100">
                  <button
                    onClick={() => {
                      setDonate("BDT 476.00");
                      setMeals("7 meals");
                    }}
                    className="btn text-slate-500 focus:bg-blue-400 focus:text-white"
                  >
                    BDT 476.00
                  </button>
                  <button
                    onClick={() => {
                      setDonate("BDT 1,020.00");
                      setMeals("15 meals");
                    }}
                    className="btn text-slate-500 focus:bg-blue-400 focus:text-white"
                  >
                    BDT 1,020.00
                  </button>
                  <button
                    onClick={() => {
                      setDonate("BDT 2040.00");
                      setMeals("30 meals");
                    }}
                    className="btn text-slate-500 focus:bg-blue-400 focus:text-white"
                  >
                    BDT 2,040.00
                  </button>
                  <button
                    onClick={() => {
                      setDonate("BDT 3,400.00");
                      setMeals("50 meals");
                    }}
                    className="btn text-slate-500 focus:bg-blue-400 focus:text-white"
                  >
                    BDT BDT 3,400.00
                  </button>
                  <input
                    onChange={(e) => {
                      setDonate("BDT BDT " + e.target.value + ".00");
                      setMeals(Math.ceil(e.target.value / 68) + " meals");
                    }}
                    onClick={(e) => {
                      setDonate("BDT 68.00");
                      e.target.value = 68.0;
                      setMeals("1 meal");
                    }}
                    id="foodName"
                    name="foodName"
                    type="number"
                    placeholder="Other Amount"
                    className="block col-span-2 w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>
                <button
                  onClick={() => {
                    !user && navigate("/login");
                  }}
                  className="btn w-full my-3 bg-yellow-400"
                >
                  Continue
                </button>
               <div className="text-slate-400 text-center space-y-1">
               <p>
                  <span className="text-blue-500">How is my donation used?</span> By donating you are agreeing to our
                  Privacy Policy<span className="text-blue-500"> Privacy Policy</span> and Terms of Use.<span className="text-blue-500">Terms of Use.</span>
                </p>
                <p>
                  Donations are tax-deductible in several countries. Find out
                  more in our<span className="text-blue-500"> <Link to={'/faqs'}>FAQs.</Link></span>
                </p>
               </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;

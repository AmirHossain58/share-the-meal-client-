import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash, FaGithub } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import loginImg  from '../../../public/login.svg'

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [show,setShow]=useState(false)
  const from = location.state || '/'
    const { user, logOut ,signIn, signInWithGoogle,signInWithGithub} = useAuth()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit =async data => {
        try{
            await signIn(data.email,data.password)
            toast.success('Signup Successful')
            navigate(from, { replace: true })
        } catch (err) {
          console.log(err)
          toast.error(err?.message)
        
      
    
           
        }
    };
    const handleSignInWithGithub= async()=>{
      
      try{
        await signInWithGithub()
        toast.success('Signup Successful')
        navigate(from, { replace: true })
    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    }
    }
    const handleSignInWithGoogle= async()=>{
      
      try{
        await signInWithGoogle()
        toast.success('Signup Successful')
        navigate(from, { replace: true })
    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    }
    }
    return (
        <div className='flex flex-col md:flex-row justify-center items-center min-h-[calc(100vh-306px)]'>
               <Helmet>
            <title>Share the Meal | Login</title>
          </Helmet>
          <div className='flex-'> 
            <img src={loginImg} alt="" />
            </div>
        <div className='flex  max-w-sm mx-auto overflow-hidden bg-white dark:bg-slate-800 rounded-lg shadow-xl sad  lg:max-w-4xl '>
  
          <div className='w-full px-6 py-8 md:px-8'>
            
            <div className='flex justify-center mx-auto'>
              <img
                className=' w-24 object-cover h-10 sm:h-8'
                src='/logo.png'
                alt=''
              />
            </div>
  
            <p className='mt-3 text-5xl font-bold text-center text-gray-600 '>
           Login Now  or  Create an account 
            </p>
  
            <div onClick={handleSignInWithGoogle} className='flex shadow-sm cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 '>
              <div className='px-4 py-2'>
                <svg className='w-6 h-6' viewBox='0 0 40 40'>
                  <path
                    d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                    fill='#FFC107'
                  />
                  <path
                    d='M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z'
                    fill='#FF3D00'
                  />
                  <path
                    d='M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z'
                    fill='#4CAF50'
                  />
                  <path
                    d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                    fill='#1976D2'
                  />
                </svg>
              </div>
  
              <span className='w-5/6 px-4 py-3 font-bold text-center'>
                Sign in with Google
              </span>
            </div>
            <div onClick={handleSignInWithGithub} className='flex shadow-sm cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 '>
              <div className='px-4 text-2xl py-2'>
                {/* <svg className='w-6 h-6' viewBox='0 0 40 40'>
                  <path
                    d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                    fill='#FFC107'
                  />
                  <path
                    d='M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z'
                    fill='#FF3D00'
                  />
                  <path
                    d='M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z'
                    fill='#4CAF50'
                  />
                  <path
                    d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                    fill='#1976D2'
                  />
                </svg> */}
                <FaGithub />

              </div>
  
              <span className='w-5/6 px-4 py-3 font-bold text-center'>
                Sign in with Github
              </span>
            </div>
  
            <div className='flex items-center justify-between mt-4'>
              <span className='w-1/5 border-b  lg:w-1/4'></span>
  
              <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
                or login with email
              </div>
  
              <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mt-4'>
                <label
                  className='block mb-2 text-sm font-medium text-gray-600 '
                  htmlFor='LoggingEmailAddress'
                >
                  Email Address
                </label>
                <input
                {...register("email", { required: true })}
                  id='LoggingEmailAddress'
                  autoComplete='email'
                  name='email'
                  className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                  type='email'
                />
                 {errors.email && <span className='text-red-500'>This field is required</span>}
              </div>
  
              <div className='mt-4 relative'>
                <div className='flex justify-between'>
                  <label
                    className='block mb-2 text-sm font-medium text-gray-600 '
                    htmlFor='loggingPassword'
                  >
                    Password
                  </label>
                </div>
  
                <input
                {...register("password", { required: true })}
                  id='loggingPassword'
                  autoComplete='current-password'
                  name='password'
                  className='block relative w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                  type={show?'text':'password'}
                />
                
                 {errors.password&& <span className='text-red-500'>This field is required</span>}
                 <div onClick={()=>{setShow(!show)}} className='absolute text-3xl right-4 top-[50%]'>
            
            {show?<FaEye />:<FaEyeSlash />}</div>
              </div>
              <div className='mt-6'>
                <button
                  type='submit'
                  className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                >
                  Sign In
                </button>
              </div>
            </form>
  
            <div className='flex items-center justify-between mt-4'>
              <span className='w-1/5 border-b  md:w-1/4'></span>
  
              <Link
                to='/registration'
                className=' text-gray-500 uppercase  hover:underline'
              >
                or registration
              </Link>
  
              <span className='w-1/5 border-b  md:w-1/4'></span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
const Navbar = () => {
  const { user, logOut, signIn } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
   // State to manage the current theme
   const [theme, setTheme] = useState(() => {
    // Check if theme preference is stored in local storage
    const storedTheme = localStorage.getItem('theme');
    // Return stored theme or 'light' if no preference is found
    return storedTheme ? storedTheme : 'light';
  });
  

  // Update the theme preference in local storage when it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.querySelector('html').setAttribute('data-theme', theme)
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
          setTheme('dim')
        } else {
          setTheme('light')
        }
   
  };
  const onSubmit = (data) => console.log(data);
  return (
    <div className="navbar bg-base-100 shadow-sm container px-4 mx-auto">
      <div className="flex-1">
        <Link to="/" className="flex gap-2 items-center">
          <img className="w-auto h-14" src={"/logo1.png"} alt="" />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal gap-2 px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/availableFoods">Available Foods</Link>
          </li>
          <li>
            <Link to="/addFood">Add Food</Link>
          </li>
          <li>
            <Link to="/manageMyFoods">Manage My Foods</Link>
          </li>
          <li>
            <Link to="/myFoodRequest"> My Food Request</Link>
          </li>

          {!user && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
        <div>  <label className='cursor-pointer grid place-items-center'>
          <input
            type='checkbox'
            onChange={handleToggle}
            className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2'
          />
          <svg
            className='col-start-1 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <circle cx='12' cy='12' r='5' />
            <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
          </svg>
          <svg
            className='col-start-2 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
          </svg>
        </label></div>
        {user && (
          <div className="flex">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div title={user?.displayName} className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>

            <div>
              <button
                onClick={logOut}
                className="btn block text-center"
              >
                Logout
              </button>
            </div>
          </div>
          // <div className='dropdown dropdown-end z-50'>

          //   <ul
          //     tabIndex={0}
          //     className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          //   >
          //     <li>
          //       <Link to='/add-job' className='justify-between'>
          //         Add Job
          //       </Link>
          //     </li>
          //     <li>
          //       <Link to='/my-posted-jobs'>My Posted Jobs</Link>
          //     </li>
          //     <li>
          //       <Link to='/my-bids'>My Bids</Link>
          //     </li>
          //     <li>
          //       <Link to='/bid-requests'>Bid Requests</Link>
          //     </li>
          //     <li className='mt-2'>

          //     </li>
          //   </ul>
          // </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

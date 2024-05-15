import axios from 'axios'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import {useLocation, useNavigate,} from 'react-router-dom'
import useAuth from './useAuth'
const axiosSecure = axios.create({
  baseURL:`${import.meta.env.VITE_API_URL}`,
  withCredentials: true,
})

const useAxiosSecure = () => {
  // const { logOut } = useAuth();
  // const navigate = useNavigate();
  useEffect(() => {
      axiosSecure.interceptors.response.use(res => {
          return res;
      }, error => {
          console.log('error tracked in the interceptor', error.response)
          if (error.response.status === 401 || error.response.status === 403) {
              console.log('logout the user')
              // logOut()
                  .then(() => { 
                      // navigate('/login')
                  })
                  .catch(error => console.log(error))
          }
      })
  }, [])














  // const { logOut } = useAuth()
  // const navigate = useNavigate()
  // interceptor
  const all =useContext(AuthContext)
  //   Response Interceptor
  axiosSecure.interceptors.response.use(
    res => {
      return res
    },
    async error => {
      // console.log('Error from axios interceptor', error.response)
      if (error.response.status === 401 || error.response.status === 403) {
        // await logOut()
        // navigate('/login')
      }
      return Promise.reject(error)
    }
  )


    // Request Interceptor
    // axios.interceptors.request

  return axiosSecure
}

export default useAxiosSecure
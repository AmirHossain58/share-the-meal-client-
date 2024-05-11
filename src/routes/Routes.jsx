import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Authentication/Login'
import Register from '../pages/Authentication/Register'
import ErrorPage from '../pages/ErrorPage'
import Main from '../roots/Main'
import AddFood from './../pages/AddFood';
import PrivateRoute from './PrivateRoute';
import ManageMyFood from '../pages/ManageMyFood'
import FoodCardDetails from '../pages/FoodCardDetails'
import AvailableFoods from '../pages/AvailableFoods'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/registration',
        element: <Register />,
      },
      {
        path: '/availableFoods',
        element: <AvailableFoods />,
      },
      {
        path: '/addFood',
        element: <PrivateRoute>
          <AddFood></AddFood>
          </PrivateRoute>,
      },
      {
        path: '/manageMyFoods',
        element: <PrivateRoute>
          <ManageMyFood></ManageMyFood>
          </PrivateRoute>,
      },
      {
        path: '/details/:id',
        element: <PrivateRoute>
          <FoodCardDetails></FoodCardDetails>
          </PrivateRoute>,
          loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/details/${params.id}`)
      },
      
      
    ],
  },
])

export default router
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Main = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Outlet */}
      <div className='container mx-auto min-h-[calc(100vh-578px)]'>
        <Outlet />
      </div>
      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default Main
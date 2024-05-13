import { Link } from 'react-router-dom'

const Slide = ({ image, text }) => {
  return (
    <div
      className='w-full bg-center  bg-cover h-[38rem]'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
        <div className='text-center'>
          <h1 className='text-xl md:text-3xl font-semibold text-white lg:text-4xl'>
            {text}
          </h1>
          <br />
          <Link
            to='/add-job'
            className='w-full px-5 py-4 mt-4 text-sm font-medium  capitalize transition-colors duration-300 transform text-slate-950 bg-[#FEC629] rounded-md lg:w-auto hover:bg-[#c2a043] focus:outline-none focus:bg-gray-500'
          >
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Slide
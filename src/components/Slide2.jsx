import React from 'react';

const Slide2 = ({image}) => {
    return (
        <div
        className='w-full bg-center  bg-cover h-[38rem]'
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
      
      </div>
    );
};

export default Slide2;
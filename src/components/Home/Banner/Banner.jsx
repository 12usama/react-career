import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-center align-middle lg:px-16 gap-2 lg:gap-4 mt-5'>
            <div className='w-[50%] lg:w-[60%] lg:ml-20 ml-5 mt-2 lg:mt-8'>
                <h2 className='text-2xl lg:text-4xl font-bold'>One Step <br />Closer To Your <br /><span className='text-blue-500'>Dream Job</span></h2>
                <p className='my-2 lg:my-5 text-xs lg:text-lg'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='bg-blue-500 text-white px-1 lg:px-3 py-1 lg:py-2 rounded-lg'>Get started</button>
            </div>
            <div>
                <img className='' src="https://i.ibb.co.com/N6PKqhb/Screenshot-2.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;
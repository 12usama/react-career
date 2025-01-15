import React from 'react';
import { BsCalculatorFill } from "react-icons/bs";
import { TbBulb } from "react-icons/tb";
import { SiAmazonrds } from "react-icons/si";
import { SiCircuitverse } from "react-icons/si";



const Categories = () => {
    return (
        <div>
           <h2 className='text-6xl font-bold text-center mt-8'>Job Category List</h2> 
           <p className='text-center mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
           <div className='grid lg:flex gap-4 justify-center lg:px-12 my-10'>
            <div className='border bg-blue-100 py-4 px-3 lg:w-[25%] rounded-xl'>
                <p className='text-4xl text-blue-400 border bg-blue-200 px-2 py-2 lg:w-[21%] rounded-xl'><BsCalculatorFill /></p>
                <h2 className='text-2xl font-bold mt-3'>Account & Finance</h2>
                <p className='mt-1'>300 Jobs Available</p>
            </div>
            <div className='border bg-blue-100 py-4 px-3 lg:w-[25%] rounded-xl'>
                <p className='text-4xl text-blue-400 border bg-blue-200 px-2 py-2 lg:w-[21%] rounded-xl'><TbBulb /></p>
                <h2 className='text-2xl font-bold mt-3'>Creative Design</h2>
                <p className='mt-1'>150 Jobs Available</p>
            </div>
            <div className='border bg-blue-100 py-4 px-3 lg:w-[25%] rounded-xl'>
                <p className='text-4xl text-blue-400 border bg-blue-200 px-2 py-2 lg:w-[21%] rounded-xl'><SiAmazonrds /></p>
                <h2 className='text-2xl font-bold mt-3'>Marketing & Sales</h2>
                <p className='mt-1'>100 Jobs Available</p>
            </div>
            <div className='border bg-blue-100 py-4 px-3 lg:w-[25%] rounded-xl'>
                <p className='text-4xl text-blue-400 border bg-blue-200 px-2 py-2 lg:w-[21%] rounded-xl'><SiCircuitverse /></p>
                <h2 className='text-2xl font-bold mt-3'>Engineering Job</h2>
                <p className='mt-1'>224 Jobs Available</p>
            </div>
           </div>
        </div>
    );
};

export default Categories;
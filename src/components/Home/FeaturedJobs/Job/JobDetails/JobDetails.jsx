import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams()
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    return (
        <div>
            <div className='bg-green-100 py-3 mb-8'>
            <h2 className='text-4xl font-extrabold text-center my-10'>Job Details</h2>
            </div>
            <div className='grid lg:flex justify-between gap-8 px-4 pb-8'>
                <div className=' col-span-2 gap-4 w-[70%]'>
                    <h2 className='mb-4'><span className='font-bold text-xl'>Job Description:</span> {job.job_description} </h2>
                    <h2 className='mb-4'><span className='font-bold text-xl'>Job Responsibility:</span> {job.job_responsibility} </h2>
                    <h2 className='mb-4'><span className='font-bold text-xl'>Educational Requirements:</span> {job.educational_requirements} </h2>
                    <h2 className='mb-4'><span className='font-bold text-xl'>Experiences:</span> {job.experiences} </h2>
                </div>
                <div>
                    <div className='border bg-blue-100 rounded-lg p-2'>
                        <h2 className='my-2 font-bold border-b-2 pb-1 border-white'>Job details</h2>
                        <p><span className='font-bold'>Salary: </span>{job.salary}</p>
                        <p><span className='font-bold '>Job Title: </span>{job.job_title}</p>
                        <h2 className='my-2 font-bold border-b-2 pb-1 border-white'>Contact Information</h2>
                        <p><span className='font-bold'>Phone: </span>{job.contact_information.phone}</p>
                        <p><span className='font-bold'>Email: </span>{job.contact_information.email}</p>
                        <p><span className='font-bold'>Address: </span>{job.contact_information.address}</p>
                    </div>
                    <button className='mt-4 w-full px-5 py-2 font-extrabold border rounded-lg bg-blue-500 text-white'>Apply Now</button>
                </div>
            </div>


        </div>
    );
};

export default JobDetails;
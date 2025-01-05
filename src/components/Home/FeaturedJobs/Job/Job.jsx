import React from 'react';

const Job = ({ job }) => {
    const { job_title,logo,company_name,remote_or_onsite,location,job_type} = job;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img className='h-20'
                        src={logo}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div className='flex gap-2'>
                        <button className='px-5 py-2 font-extrabold border rounded border-blue-500'>{remote_or_onsite}</button>
                        <button className='px-5 py-2 font-extrabold border rounded border-blue-500'>{job_type}</button>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;
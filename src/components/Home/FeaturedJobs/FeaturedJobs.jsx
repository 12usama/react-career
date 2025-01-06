import React, { useEffect, useState } from 'react';
import Job from './Job/Job';

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div>
                <h2 className='text-6xl text-center'>Featured Jobs {jobs.length} </h2>
                <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid lg:grid-cols-2 gap-6 lg:p-20 p-10'>
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }

                <div className= {dataLength === jobs.length && 'hidden'}>
                    <button
                        onClick={() => setDataLength(jobs.length)}
                        className='px-5 py-2 font-extrabold border rounded border-blue-500'>Show more</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;
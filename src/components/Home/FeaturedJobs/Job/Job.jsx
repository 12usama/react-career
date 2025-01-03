import React from 'react';

const Job = ({ job }) => {
    const { job_title, logo } = job;
    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={logo}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;
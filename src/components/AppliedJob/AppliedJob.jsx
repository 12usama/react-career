import React from "react";
import { Link } from "react-router-dom";

const AppliedJobs = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6">Applied Jobs</h1>
      <p className="text-gray-600 mb-8 text-center">
        You have not applied to any jobs yet.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        Browse Jobs
      </Link>
    </div>
  );
};

export default AppliedJobs;

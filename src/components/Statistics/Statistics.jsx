import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const jobsData = [
  { id: 1, company_name: "Google LLC", remote_or_onsite: "Remote" },
  { id: 2, company_name: "Netflix", remote_or_onsite: "Onsite" },
  { id: 3, company_name: "Tesla", remote_or_onsite: "Onsite" },
  { id: 4, company_name: "Google LLC", remote_or_onsite: "Onsite" },
  { id: 5, company_name: "Tesla", remote_or_onsite: "Remote" },
  { id: 6, company_name: "Netflix", remote_or_onsite: "Remote" },
];

// count jobs per company
const jobCountsByCompany = Object.values(
  jobsData.reduce((acc, job) => {
    acc[job.company_name] = acc[job.company_name] || { name: job.company_name, jobs: 0 };
    acc[job.company_name].jobs += 1;
    return acc;
  }, {})
);

// count jobs by remote or onsite
const jobCountsByLocation = Object.values(
  jobsData.reduce((acc, job) => {
    acc[job.remote_or_onsite] = acc[job.remote_or_onsite] || { name: job.remote_or_onsite, jobs: 0 };
    acc[job.remote_or_onsite].jobs += 1;
    return acc;
  }, {})
);

const COLORS = ["#4f46e5", "#a78bfa"];

const Statistics = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Job Statistics Dashboard</h2>

      <div className="mb-16">
        <h3 className="text-xl font-semibold mb-4">Jobs by Company</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={jobCountsByCompany} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Bar dataKey="jobs" fill="#4f46e5" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Jobs by Location Type</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={jobCountsByLocation}
              dataKey="jobs"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {jobCountsByLocation.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;

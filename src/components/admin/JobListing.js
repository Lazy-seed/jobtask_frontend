import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../../redux/jobs/jobActions';

const JobListing = () => {
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold">Jobs Listing</h2>
      <table className="min-w-full bg-white mt-4">
        <thead>
          <tr>
            <th className="py-2">Company</th>
            <th className="py-2">Position</th>
            <th className="py-2">Contract</th>
            <th className="py-2">Location</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job._id}>
              <td className="py-2">{job.company}</td>
              <td className="py-2">{job.position}</td>
              <td className="py-2">{job.contract}</td>
              <td className="py-2">{job.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobListing;

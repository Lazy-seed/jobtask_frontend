import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs, applyForJob } from '../../redux/jobs/jobActions';

const JobList = () => {
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const handleApply = (jobId) => {
    dispatch(applyForJob(jobId));
  };

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold">Available Jobs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {jobs.map((job) => (
          <div key={job._id} className="bg-white p-4 rounded shadow-md">
            <h3 className="text-md font-bold">{job.company}</h3>
            <p className="text-sm">{job.position}</p>
            <p className="text-sm">{job.contract}</p>
            <p className="text-sm">{job.location}</p>
            <button
              onClick={() => handleApply(job._id)}
              className="mt-2 bg-green-500 text-white py-1 px-2 rounded"
            >
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;

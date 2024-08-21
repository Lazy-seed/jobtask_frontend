import React, { useState } from 'react';
import axios from 'axios';
import { BASEURL } from '../../jwttoken';
import { useSelector } from 'react-redux';

const JobForm = () => {
  // const token = useSelector((state) => )
  const [job, setJob] = useState({
    company: '',
    position: '',
    contract: '',
    location: '',
  });

  const token = localStorage.getItem('token'); // Assuming token is stored in localStorage

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `${BASEURL}/api/jobs`,
        job,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert('Job posted successfully');
    } catch (error) {
      console.error('Error posting job:', error.response.data.message);
      alert('Error posting job');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold">Post a Job</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          placeholder="Company Name"
          value={job.company}
          onChange={(e) => setJob({ ...job, company: e.target.value })}
          className="w-full p-2 border rounded mt-2"
        />
        <input
          type="text"
          placeholder="Position"
          value={job.position}
          onChange={(e) => setJob({ ...job, position: e.target.value })}
          className="w-full p-2 border rounded mt-2"
        />
        <input
          type="text"
          placeholder="Contract Type"
          value={job.contract}
          onChange={(e) => setJob({ ...job, contract: e.target.value })}
          className="w-full p-2 border rounded mt-2"
        />
        <input
          type="text"
          placeholder="Location"
          value={job.location}
          onChange={(e) => setJob({ ...job, location: e.target.value })}
          className="w-full p-2 border rounded mt-2"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
          Post Job
        </button>
      </form>
    </div>
  );
};

export default JobForm;

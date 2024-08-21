import React from 'react';
import JobForm from '../components/admin/JobForm';
import JobListing from '../components/admin/JobListing';


const AdminPage = () => (
  <div className="container mx-auto p-6">
    <JobForm />
    <JobListing />
  </div>
);

export default AdminPage;

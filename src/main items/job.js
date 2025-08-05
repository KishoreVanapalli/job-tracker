import React, { useState } from 'react';
import "../all_in_one.css";

const JobItem = ({ id, title, company, status, onDelete, onUpdateStatus }) => {
  const getStatusColor = (currentStatus) => {
    switch (currentStatus.toLowerCase()) {
      case 'applied':
        return '#4f46e5'; // indigo-600
      case 'interview':
        return '#f97316'; // orange-500
      case 'offer':
        return '#22c55e'; // green-500
      case 'rejected':
        return '#ef4444'; // red-500
      default:
        return '#9ca3af'; // gray-400
    }
  };

  const getStatusBgColor = (currentStatus) => {
    switch (currentStatus.toLowerCase()) {
      case 'applied':
        return '#e0e7ff'; // indigo-100
      case 'interview':
        return '#fff7ed'; // orange-100
      case 'offer':
        return '#dcfce7'; // green-100
      case 'rejected':
        return '#fee2e2'; // red-100
      default:
        return '#f3f4f6'; // gray-100
    }
  };

  return (
    <div className="job-item">
      <div className="job-details">
        <h3 className="job-title">{title}</h3>
        <p className="job-company">{company}</p>
      </div>
      <div className="job-status-container">
        <select
          className="status-select"
          value={status}
          onChange={(e) => onUpdateStatus(id, e.target.value)}
          style={{ 
            backgroundColor: getStatusBgColor(status),
            color: getStatusColor(status)
          }}
        >
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
        <button className="delete-button" onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

const JobTracker = () => {
  const initialJobs = [
    { id: 1, title: "Frontend Developer", company: "Google", status: "Applied" },
    { id: 2, title: "Software Engineer", company: "Amazon", status: "Interview" },
    { id: 3, title: "UX Designer", company: "Apple", status: "Rejected" },
    { id: 4, title: "Data Scientist", company: "Meta", status: "Offer" },
  ];

  const [jobs, setJobs] = useState(initialJobs);
  const [newJobTitle, setNewJobTitle] = useState('');
  const [newCompany, setNewCompany] = useState('');

  const handleAddJob = (e) => {
    e.preventDefault();
    if (newJobTitle && newCompany) {
      const newJob = {
        id: jobs.length + 1,
        title: newJobTitle,
        company: newCompany,
        status: 'Applied',
      };
      setJobs([...jobs, newJob]);
      setNewJobTitle('');
      setNewCompany('');
    }
  };

  const handleDeleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };
  
  const handleUpdateStatus = (id, newStatus) => {
    setJobs(jobs.map(job => 
      job.id === id ? { ...job, status: newStatus } : job
    ));
  };

  return (
    <div className="job-list-container">
      <div className="list-header">
        <h2 className="list-title">My Job Applications</h2>
      </div>
      
      <form onSubmit={handleAddJob} className="add-job-form">
        <input
          type="text"
          placeholder="Job Title"
          value={newJobTitle}
          onChange={(e) => setNewJobTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company"
          value={newCompany}
          onChange={(e) => setNewCompany(e.target.value)}
        />
        <button type="submit">Add Job</button>
      </form>

      <div className="job-list">
        {jobs.map((job) => (
          <JobItem
            key={job.id}
            id={job.id}
            title={job.title}
            company={job.company}
            status={job.status}
            onDelete={handleDeleteJob}
            onUpdateStatus={handleUpdateStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default JobTracker;

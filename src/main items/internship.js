import React, { useState } from 'react';

const InternshipItem = ({ id, title, company, status, onDelete, onUpdateStatus }) => {
  const getStatusColor = (currentStatus) => {
    switch (currentStatus.toLowerCase()) {
      case 'applied':
        return '#4f46e5';
      case 'interview':
        return '#f97316';
      case 'offer':
        return '#22c55e';
      case 'rejected':
        return '#ef4444';
      default:
        return '#9ca3af';
    }
  };

  const getStatusBgColor = (currentStatus) => {
    switch (currentStatus.toLowerCase()) {
      case 'applied':
        return '#e0e7ff';
      case 'interview':
        return '#fff7ed';
      case 'offer':
        return '#dcfce7';
      case 'rejected':
        return '#fee2e2';
      default:
        return '#f3f4f6';
    }
  };

  return (
    <div className="internship-item">
      <div className="internship-details">
        <h3 className="internship-title">{title}</h3>
        <p className="internship-company">{company}</p>
      </div>
      <div className="internship-status-container">
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

const InternshipTracker = () => {
  const initialInternships = [
    { id: 1, title: "Summer Intern", company: "Google", status: "Applied" },
    { id: 2, title: "Design Intern", company: "Apple", status: "Interview" },
    { id: 3, title: "Frontend Intern", company: "Meta", status: "Offer" },
  ];

  const [internships, setInternships] = useState(initialInternships);
  const [newInternshipTitle, setNewInternshipTitle] = useState('');
  const [newInternshipCompany, setNewInternshipCompany] = useState('');

  const handleAddInternship = (e) => {
    e.preventDefault();
    if (newInternshipTitle && newInternshipCompany) {
      const newInternship = {
        id: internships.length + 1,
        title: newInternshipTitle,
        company: newInternshipCompany,
        status: 'Applied',
      };
      setInternships([...internships, newInternship]);
      setNewInternshipTitle('');
      setNewInternshipCompany('');
    }
  };

  const handleDeleteInternship = (id) => {
    setInternships(internships.filter(internship => internship.id !== id));
  };
  
  const handleUpdateStatus = (id, newStatus) => {
    setInternships(internships.map(internship => 
      internship.id === id ? { ...internship, status: newStatus } : internship
    ));
  };

  return (
    <div className="internship-list-container">
      <div className="list-header">
        <h2 className="list-title">My Internship Applications</h2>
      </div>
      
      <form onSubmit={handleAddInternship} className="add-internship-form">
        <input
          type="text"
          placeholder="Internship Title"
          value={newInternshipTitle}
          onChange={(e) => setNewInternshipTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company"
          value={newInternshipCompany}
          onChange={(e) => setNewInternshipCompany(e.target.value)}
        />
        <button type="submit">Add Internship</button>
      </form>

      <div className="internship-list">
        {internships.map((internship) => (
          <InternshipItem
            key={internship.id}
            id={internship.id}
            title={internship.title}
            company={internship.company}
            status={internship.status}
            onDelete={handleDeleteInternship}
            onUpdateStatus={handleUpdateStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default InternshipTracker;

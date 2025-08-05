import React, { useState } from 'react';

const ProjectItem = ({ id, title, status, onDelete, onUpdateStatus }) => {
  const getStatusColor = (currentStatus) => {
    switch (currentStatus.toLowerCase()) {
      case 'in progress':
        return '#f97316';
      case 'completed':
        return '#22c55e';
      case 'on hold':
        return '#ef4444';
      default:
        return '#9ca3af';
    }
  };

  const getStatusBgColor = (currentStatus) => {
    switch (currentStatus.toLowerCase()) {
      case 'in progress':
        return '#fff7ed';
      case 'completed':
        return '#dcfce7';
      case 'on hold':
        return '#fee2e2';
      default:
        return '#f3f4f6';
    }
  };

  return (
    <div className="project-item">
      <div className="project-details">
        <h3 className="project-title">{title}</h3>
      </div>
      <div className="project-status-container">
        <select
          className="status-select"
          value={status}
          onChange={(e) => onUpdateStatus(id, e.target.value)}
          style={{ 
            backgroundColor: getStatusBgColor(status),
            color: getStatusColor(status)
          }}
        >
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="On Hold">On Hold</option>
        </select>
        <button className="delete-button" onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

const ProjectTracker = () => {
  const initialProjects = [
    { id: 1, title: "Job Tracker Website", status: "In Progress" },
    { id: 2, title: "Portfolio Redesign", status: "Completed" },
    { id: 3, title: "E-commerce API", status: "On Hold" },
  ];

  const [projects, setProjects] = useState(initialProjects);
  const [newProjectTitle, setNewProjectTitle] = useState('');

  const handleAddProject = (e) => {
    e.preventDefault();
    if (newProjectTitle) {
      const newProject = {
        id: projects.length + 1,
        title: newProjectTitle,
        status: 'In Progress',
      };
      setProjects([...projects, newProject]);
      setNewProjectTitle('');
    }
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter(project => project.id !== id));
  };
  
  const handleUpdateStatus = (id, newStatus) => {
    setProjects(projects.map(project => 
      project.id === id ? { ...project, status: newStatus } : project
    ));
  };

  return (
    <div className="project-list-container">
      <div className="list-header">
        <h2 className="list-title">My Projects</h2>
      </div>
      
      <form onSubmit={handleAddProject} className="add-project-form">
        <input
          type="text"
          placeholder="Project Title"
          value={newProjectTitle}
          onChange={(e) => setNewProjectTitle(e.target.value)}
        />
        <button type="submit">Add Project</button>
      </form>

      <div className="project-list">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            id={project.id}
            title={project.title}
            status={project.status}
            onDelete={handleDeleteProject}
            onUpdateStatus={handleUpdateStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectTracker;

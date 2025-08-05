import React, { useState } from 'react';
import "../all_in_one.css";

const ResumeItem = ({ id, title, onDelete, fileName }) => {
  return (
    <div className="resume-item">
      <div className="resume-details">
        <h3 className="resume-title">{title}</h3>
        {fileName && (
          <a href={fileName} className="resume-file-name" onClick={(e) => e.preventDefault()}>
            {fileName}
          </a>
        )}
      </div>
      <div className="resume-status-container">
        <button className="delete-button" onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

const ResumeTracker = () => {
  const initialResumes = [
    { id: 1, title: "Software Engineer Resume", fileName: "software_engineer_resume.pdf" },
    { id: 2, title: "Data Scientist Resume", fileName: "data_scientist_resume.pdf" },
    { id: 3, title: "UX Designer Resume", fileName: "ux_designer_resume.pdf" },
  ];

  const [resumes, setResumes] = useState(initialResumes);
  const [newResumeTitle, setNewResumeTitle] = useState('');
  const [newResumeFile, setNewResumeFile] = useState(null);

  const handleAddResume = (e) => {
    e.preventDefault();
    if (newResumeTitle && newResumeFile) {
      const newResume = {
        id: resumes.length + 1,
        title: newResumeTitle,
        fileName: newResumeFile.name,
      };
      setResumes([...resumes, newResume]);
      setNewResumeTitle('');
      setNewResumeFile(null);
    }
  };

  const handleDeleteResume = (id) => {
    setResumes(resumes.filter(resume => resume.id !== id));
  };
  
  return (
    <div className="resume-list-container">
      <div className="list-header">
        <h2 className="list-title">My Resumes</h2>
      </div>

      <form onSubmit={handleAddResume} className="add-resume-form">
        <div className="form-inputs">
          <input
            type="text"
            placeholder="Resume Title"
            value={newResumeTitle}
            onChange={(e) => setNewResumeTitle(e.target.value)}
          />
          <input
            type="file"
            className="file-input"
            onChange={(e) => setNewResumeFile(e.target.files[0])}
          />
        </div>
        <button type="submit">Add Resume</button>
      </form>

      <div className="resume-list">
        {resumes.map((resume) => (
          <ResumeItem
            key={resume.id}
            id={resume.id}
            title={resume.title}
            onDelete={handleDeleteResume}
            fileName={resume.fileName}
          />
        ))}
      </div>
    </div>
  );
};

export default ResumeTracker;

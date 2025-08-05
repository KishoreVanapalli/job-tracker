import React, { useState } from 'react';
import "../all_in_one.css";

const CourseItem = ({ title, status, progress, id, onUpdateProgress, onResetProgress }) => {
  const getStatusColor = (currentStatus) => {
    switch (currentStatus.toLowerCase()) {
      case 'completed':
        return '#22c55e'; // green-500
      case 'in progress':
        return '#f97316'; // orange-500
      case 'not started':
        return '#ef4444'; // red-500
      default:
        return '#9ca3af'; // gray-400
    }
  };

  const getStatusBgColor = (currentStatus) => {
    switch (currentStatus.toLowerCase()) {
      case 'completed':
        return '#dcfce7'; // green-100
      case 'in progress':
        return '#fff7ed'; // orange-100
      case 'not started':
        return '#fee2e2'; // red-100
      default:
        return '#f3f4f6'; // gray-100
    }
  };

  const handleUpdateProgress = () => {
    if (progress < 100) {
      const newProgress = Math.min(progress + 10, 100);
      onUpdateProgress(id, newProgress);
    }
  };

  return (
    <div className="course-item">
      <div className="course-details">
        <span className="course-id">{id}.</span>
        <span className="course-title">{title}</span>
      </div>
      <div className="course-stats">
        {progress !== undefined && (
          <div className="progress-bar-container">
            <div 
              className="progress-bar" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}
        {progress !== undefined && <span className="progress-text">{progress}%</span>}
        {status && (
          <span
            className="status-badge"
            style={{ 
              backgroundColor: getStatusBgColor(status),
              color: getStatusColor(status)
            }}
          >
            {status}
          </span>
        )}
        <div className="action-buttons">
          <button 
            className="update-button" 
            onClick={handleUpdateProgress}
            disabled={progress >= 100}
          >
            Update
          </button>
          <button 
            className="reset-button"
            onClick={() => onResetProgress(id)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

const CourseList = () => {
  const initialCourses = [
    { id: 1, title: "Two Sum", progress: 0 },
    { id: 2, title: "Add Two Numbers", progress: 20 },
    { id: 3, title: "Longest Substring Without Repeating Characters", progress: 70 },
    { id: 4, title: "Median of Two Sorted Arrays", progress: 100 },
    { id: 5, title: "Longest Palindromic Substring", progress: 0 },
    { id: 6, title: "Zigzag Conversion", progress: 0 },
    { id: 7, title: "Reverse Integer", progress: 0 },
  ];

  const [courses, setCourses] = useState(initialCourses);

  const getStatusFromProgress = (progress) => {
    if (progress === 0) return 'Not Started';
    if (progress === 100) return 'Completed';
    return 'In Progress';
  };

  const updateProgress = (id, newProgress) => {
    setCourses(prevCourses =>
      prevCourses.map(course =>
        course.id === id ? { ...course, progress: newProgress } : course
      )
    );
  };
  
  const resetProgress = (id) => {
    setCourses(prevCourses =>
      prevCourses.map(course =>
        course.id === id ? { ...course, progress: 0 } : course
      )
    );
  };

  return (
    <div className="course-list-container">
      <div className="list-header">
        <h2 className="list-title">My Courses</h2>
      </div>
      <div className="course-list">
        {courses.map((course) => (
          <CourseItem
            key={course.id}
            id={course.id}
            title={course.title}
            progress={course.progress}
            status={getStatusFromProgress(course.progress)}
            onUpdateProgress={updateProgress}
            onResetProgress={resetProgress}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseList;

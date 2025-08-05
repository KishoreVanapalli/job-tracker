import React from 'react';
import "../all_in_one.css";

const Home = () => {
  return (
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Track Your Job Search. <br />
            Land Your Dream Job.
          </h1>
          <p className="hero-subtitle">
            Your all-in-one platform to organize, track, and manage your job applications, interviews, and follow-ups.
          </p>
          <button className="hero-button">
            Start Tracking Now
          </button>
        </div>
      </div>
  );
};

export default Home;

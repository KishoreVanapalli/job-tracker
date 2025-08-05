import React, { useState, useRef, useEffect } from "react";
import "./all_in_one.css";

const Nav = ({ value, setValue }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const dropdownRefs = {
    filter: useRef(null),
    edit: useRef(null),
    create: useRef(null),
    profile: useRef(null),
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !Object.values(dropdownRefs).some(
          (ref) => ref.current && ref.current.contains(event.target)
        )
      ) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setValue((prev) => !prev);
  };

  const toggleDropdown = (menuName) => {
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };

  return (
    <div id="nav">
      <div id="nav1">
        <div className="icons-box" id="menu-id" onClick={toggleMenu}>
          <i className="fa-solid fa-list center"></i>
        </div>
        <div id="input" className="hover">
          <i className="fa-solid fa-magnifying-glass center"></i>
          <input className="hover" placeholder="Search...." type="text" id="search" />
          <i className="fa-solid fa-microphone center"></i>
        </div>
      </div>

      <div id="nav2">
        {/* Filter Dropdown */}
        <div
          className={activeMenu === "filter" ? "menu-box-change" : "icons-box"}
          id="filter"
          ref={dropdownRefs.filter}
          onClick={() => toggleDropdown("filter")}
        >
          <i className="fa-solid fa-filter center"></i> Filter
          {activeMenu === "filter" && (
            <div className="dropdown-menu dropdown-menu-1">
              <div className="dropdown-item">📅 Filter by Date</div>
              <div className="dropdown-item">✅ Filter by Status</div>
              <div className="dropdown-item">🏢 Filter by Company</div>
              <div className="dropdown-item">📂 Filter by Project</div>
              <div className="dropdown-item">❌ Clear Filters</div>
            </div>
          )}
        </div>

        {/* Edit Dropdown */}
        <div
          className={activeMenu === "edit" ? "menu-box-change" : "icons-box"}
          id="edit"
          ref={dropdownRefs.edit}
          onClick={() => toggleDropdown("edit")}
        >
          <i className="fa-solid fa-file-pen center"></i> Edit
          {activeMenu === "edit" && (
            <div className="dropdown-menu dropdown-menu-2">
              <div className="dropdown-item">✏️ Edit Job Application</div>
              <div className="dropdown-item">📝 Edit Internship</div>
              <div className="dropdown-item">📂 Edit Project</div>
              <div className="dropdown-item">🔧 Edit Task</div>
              <div className="dropdown-item">📄 Edit Resume</div>
            </div>
          )}
        </div>

        {/* Create Dropdown */}
        <div
          className={activeMenu === "create" ? "menu-box-change" : "icons-box"}
          id="create"
          ref={dropdownRefs.create}
          onClick={() => toggleDropdown("create")}
        >
          <i className="fa-solid fa-square-plus center"></i> Create
          {activeMenu === "create" && (
            <div className="dropdown-menu dropdown-menu-3">
              <div className="dropdown-item">📝 New Job Application</div>
              <div className="dropdown-item">🎓 New Internship</div>
              <div className="dropdown-item">📂 New Project</div>
              <div className="dropdown-item">✅ New Task</div>
              <div className="dropdown-item">📄 Upload Resume</div>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div
          className={activeMenu === "profile" ? "menu-box-change" : "icons-box"}
          id="profile"
          ref={dropdownRefs.profile}
          onClick={() => toggleDropdown("profile")}
        >
          <i className="fa-solid fa-user center"></i> Profile
          {activeMenu === "profile" && (
            <div className="dropdown-menu dropdown-menu-4">
              <div className="dropdown-item">👤 View Profile</div>
              <div className="dropdown-item">⚙️ Settings</div>
              <div className="dropdown-item">🔄 Switch View</div>
              <div className="dropdown-item logout">🚪 Logout</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;

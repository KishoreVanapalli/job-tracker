import React from "react";
import "./all_in_one.css";
import Home from "./main items/home.js";
import Courses from "./main items/courses.js";
import Internship from "./main items/internship.js";
import Job from "./main items/job.js";
import Project from "./main items/project.js";
import Resume from "./main items/resume.js";
import Task from "./main items/task.js";

const Menu = ({ value, setValue }) => {
    // Page list with components
    const pageComponents = {
        'Home': Home,
        'Job Applications': Job,
        'Internship Applications': Internship,
        'Courses': Courses,
        'Projects Lists': Project,
        'Resume': Resume,
        'Tasks': Task,
    };

    return (
        <div id="menu">
            <ul id="options">
                {Object.entries(pageComponents).map(([key, PageComponent]) => (
                    <li
                        key={key}
                        id={key.replace(/\s/g, '')}
                        onClick={() => setValue(() => PageComponent)} // ✅ Store correct component
                    >
                        {key}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;

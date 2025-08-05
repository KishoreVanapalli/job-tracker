import React from "react";
import "./all_in_one.css";

const MenuTwo = () => {
    const appliedList = [
        "Applied Applications 1",
        "Applied Applications 2",
        "Applied Applications 3",
        "Applied Applications 4",
        "Applied Applications 5",
        "Applied Applications 6",
        "Applied Applications 7",
    ];

    return (
        <div id="menu">
            <h1>Applied Applications</h1>
            <ul id="options">
                {appliedList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default MenuTwo;

import React, { useState } from "react";
import Menu from "./menu.js";
import Menutwo from "./menu_two.js";
import Home from "./main items/home.js";
import "./all_in_one.css";



const MainInner = ({ value }) => {
    // Default page = Home
    const [Val, setVal] = useState(() => Home);

    return (
        <div id="home">
            {value ? (
                <Menu value={Val} setValue={setVal} />  
            ) : (
                <Menutwo />
            )}
            {/* Render selected component */}
            {Val ? <Val /> : <h2>No Page Selected</h2>}
            
            {/* Menu for changing pages */}
            
        </div>
    );
};


export default MainInner;

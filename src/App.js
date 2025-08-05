import React, { useState } from "react";
import MainInner from "./main inner.js";
import Nav from "./nav.js";
import "./all_in_one.css";

const App = () => {
    const [value, setValue] = useState(false);
    return (
        <div id="app">
            <Nav value={value} setValue={setValue}/>
            <MainInner value={value} /> {/* ✅ value only for menu toggle */}
        </div>
    );  
}

export default App;

import React from "react";
import "./style.css"

function Navbar() {
    return (
        <nav className="navbar fixed-top navbar-light bg-secondary">
            <h4>Score: </h4>{/* Score Here */}
            <h4>Highest Score: </h4>{/* Highest Score Here */}
        </nav>
    );
}

export default Navbar;

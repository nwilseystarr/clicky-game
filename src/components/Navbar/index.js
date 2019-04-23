import React from "react";
import "./style.css"

function Navbar(props) {
    return (
        <nav className="navbar fixed-top navbar-light bg-secondary">
            <h4>Score: {props.score}</h4>
            <h4>Highest Score: {props.highScore}</h4>
        </nav>
    );
}

export default Navbar;

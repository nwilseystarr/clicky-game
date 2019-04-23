import React from "react";
import "./style.css"

function Jumbotron(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Simpson's Memory Game</h1>
                <p className="lead">Click on your favorite characters, don't click twice or you lose!</p>
            </div>
        </div>
    );
}

export default Jumbotron;

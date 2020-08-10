import React from "react";
import './jumbotron.css';

function Jumbotron() {
    return (
        <div className="jumbotron bg-secondary text-light bg-img">
            <h1 className="text-center">Clicky Game!!</h1>
            <p className="lead text-center">Click on an image to earn points, but don't click on any more than once!</p>
        </div>
        )
}

export default Jumbotron;
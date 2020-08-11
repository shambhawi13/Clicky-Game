import React from "react";

function Header(props) {
    return (
        <nav className="navbar navbar-light bg-info">
            <span className="navbar-brand mb-0 h1">Clicky Game</span>
            <span>Click an image to begin!</span>
    <span>Score:{props.score} | Top Score:{props.topScore}</span>
        </nav>
    )
}

export default Header;
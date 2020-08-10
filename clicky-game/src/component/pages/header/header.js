import React from "react";

function Header() {
    return (
        <nav className="navbar navbar-light bg-info">
            <span className="navbar-brand mb-0 h1">Clicky Game</span>
            <span>Click an image to begin!</span>
            <span>Score:0 | Top Score:0</span>
        </nav>
    )
}

export default Header;
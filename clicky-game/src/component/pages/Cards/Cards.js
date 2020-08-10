import React from "react";
import './Cards.css';

function Cards(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    )
}

export default Cards;

import React from "react";
import './Cards.css';
import imageUtil from '../../../Util/ImageRandomizer'

function handleClick(indexClicked){
    console.log("Image clicked: ",indexClicked);
    console.log("Image randomized: ",imageUtil.ImageRandomizer());
    
}

function Cards(props) {
    return (
        <div className="card" onClick={()=>handleClick(props.name)}>
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    )
}

export default Cards;

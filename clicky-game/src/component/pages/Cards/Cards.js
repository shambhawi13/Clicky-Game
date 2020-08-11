import React from "react";
import './Cards.css';
import imageUtil from '../../../Util/ImageRandomizer'

function handleClick(indexClicked){
    console.log("Image clicked: ",indexClicked);
    console.log("Image randomized: ",imageUtil.ImageRandomizer());
}

function Cards(props) {
    handleClick = (imageClicked)=>{
        console.log("Image clicked: ",imageClicked);
        props.setScore(imageClicked)
        props.shuffleImages();
    }
    
    return (
        <div className="card" onClick={()=>handleClick(props.image)}>
            <div className="img-container">
                <img alt={props.name} src={'../Assets/'+props.image} />
                {/* src={props.image} */}
            </div>
        </div>
    )
}

export default Cards;

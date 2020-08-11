import React from "react";
import Cards from '../Cards/Cards';

function CardsContainer(props) {
    return (
        <div className="container">
            <div className="row">
                {
                    props.images.map(
                        (image, index) => <Cards image={image} key={index} name={index} setScore={props.setScore} shuffleImages={props.shuffleImages}></Cards>
                    )
                }
            </div>
        </div>
    )
}

export default CardsContainer;
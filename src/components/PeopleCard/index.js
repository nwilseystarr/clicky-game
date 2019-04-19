import React from "react";
import "./style.css"

function PeopleCard(props) {
    return (
        <div className="card">
            <div className="card img-container hover">
                <img alt={props.name} src={props.image} id={props.id}
                    // onClick={() => props.shuffleScoreCard(props.id)} className='shuffleScore' 
                    />
            </div>
        </div>
    );
}

export default PeopleCard;

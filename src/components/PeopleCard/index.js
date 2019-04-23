import React from "react";
import "./style.css"


function PeopleCard(props) {
    return (
        <div className="card" onClick={() => props.checkScore(props.id)}>
            <div className="img-container hover">
                <img className="image" alt={props.name} src={props.image} id={props.id} className='checkScore'/>
            </div>
        </div>
    );
}

export default PeopleCard;

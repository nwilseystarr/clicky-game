import React from "react";
import "./style.css"


function PeopleCard(props) {
    return (
        <div className="card">
            <div className="img-container hover">
                <img alt={props.name} src={props.image} id={props.id}
                    onClick={() => props.checkScore(props.id)} className='checkScore' 
                    />
            </div>
        </div>
    );
}

export default PeopleCard;

import React from 'react';

function Card(props) {
    return (
        <div className="text-center card">            
            <img className="img-fluid" src={`https://robohash.org/${props.id}`} alt=""></img>
            <h2>{props.name}</h2>
            <p>{props.email}</p>            
        </div>
    )
}

export default Card;
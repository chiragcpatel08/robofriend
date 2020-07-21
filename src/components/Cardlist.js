import React from 'react';
import Card from'./Card';

function Cardlist(props) {
    
    return (
        <div className="grid">
            {
                props.robots.map((robot) => {
                    return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email}/>
                })
            }            
        </div>
    )
}

export default Cardlist;

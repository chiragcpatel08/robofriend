import React from 'react';

function Scroll(props) {
    return (
        <div style={{overflowY:'scroll', border: '5px solid #09FFE3', height: '600px', padding: '20px'}}>
             {
                 props.children
             }         
        </div>
    )
}

export default Scroll;

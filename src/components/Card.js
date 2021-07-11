import React from 'react';

export function Card(props){
    return (
        <div className='card-container'>
            <div className='card'>
                <h2 className="card-title">{props.title}</h2>
                <p className="card-details">{props.detail}</p>
            </div>
        </div>
    )
}


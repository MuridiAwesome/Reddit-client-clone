import React from 'react';

export function Card(props){

    return (
        <div className='card-container'>
            <div className='card' style={{backgroundImage: `url(${props.photo})`}}>
                <h2 className="card-title">{props.title}</h2>
                <p className="card-details">{props.detail}</p>
                <p className="card-tag">{props.tag}</p>
            </div>
        </div>
    )
}


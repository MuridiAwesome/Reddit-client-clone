import React from 'react';

export function Threads(props){
    return (
        <div className="post-container">
            <div className="thread-extras">
                <div className="thread-info">
                    <p>Posted by: {props.name}</p>
                    <p>Time posted: {props.time}</p>
                </div>
                <button>Join</button>
            </div>
            <h3 className="thread-title">{props.title}</h3>
        </div>
    )
}
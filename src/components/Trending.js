import React, { useEffect, useState } from 'react';
import { Card } from './Card';


export function Trending(){
    let [title, setTitle] = useState('');

    useEffect(() =>{
        fetch('https://api.reddit.com')
            .then(res => res.json())
            .then(data => {
            setTitle(() => {
                title = data.data.children[0].title;
            })
              console.log(title)
            })
    })

    return (
        <div className="card-container">
            <h2>Trending today</h2>
            <div className="flex-trending">
                <Card 
                    title={title} 
                    detail={"Report: Pegasus Spyware Sold to Goverment"} 
                    tag={"r/iphone and more"}
                    photo={'../images/iphone.jpg'}
                    />
                <Card 
                    title={"UFOs"} 
                    detail={"A retired police officer named philip specencer took"}
                    tag={"r/Humanoidencounters and more"}
                    photo={'../images/ufo.jpg'}
                    />
                <Card 
                    title={"Giannis antetokounpo"} 
                    detail={"Just messing around, but if this doesn't give you chills"}
                    tag={"r/MkeBucks and more"}
                    photo={'../images/basketball-unsplash.jpg'}
                />
                <Card 
                    title={"Covid 19"} 
                    detail={"Covid 19 antibodies persist at least 9 months after"}
                    tag={"r/science and more"}
                    photo={'../images/doctor-gloves.jpg'}
                    />
            </div>
        </div>
    )
}
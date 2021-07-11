import React from 'react';
import { Card } from './Card';

export function Trending(){
    return (
        <div className="card-container">
            <h2>Trending today</h2>
            <div className="flex-trending">
                <Card title={'card1'} detail={'detail1'}/>
                <Card title={'card2'} detail={'detail2'}/>
                <Card title={'card3'} detail={'detail3'}/>
                <Card title={'card4'} detail={'detail4'}/>
            </div>
        </div>
    )
}
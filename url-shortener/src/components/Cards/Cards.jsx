import React, { useState } from 'react';

import { cards } from '../../data/cardData'
import './Cards.scss'
import Card from '../Card/Card';

const Cards = () => (

    <div className='cards' >
        <div className='cards-container' >
            <div className='cards-wrapper' >
                <h2>Advanced Statistics</h2>
                <p>Track how your links are performing across the web with <br />
                our advanced statistics dashboard.
            </p>
            </div>
        </div>
        <div className='cards-content' >
            {cards.map((card) => (
                <Card card={{ ...card }} />
            ))}
            <div className='card-connector' ></div>
        </div>
    </div>
)

export default Cards; 
import React from 'react'

const Card = ({ card }) => (
    <div className='card' key={card.id} >
        <div className='card-icon' >
            <img src={card.icon} alt='icon' />
        </div>
        <p className='card-title' > {card.title} </p>
        <p className='card-text' > {card.text} </p>
    </div>
)

export default Card; 
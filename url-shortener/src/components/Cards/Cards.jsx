import React, { useState } from 'react';

import iconBrand from '../../assets/icon-brand-recognition.svg'
import iconDetailed from '../../assets/icon-detailed-records.svg'
import iconCustom from '../../assets/icon-fully-customizable.svg'
import './Cards.scss'

const Cards = () => {
    const [cards] = useState([
        {
            id: 1,
            title: "Brand Recognition",
            text: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content",
            icon: iconBrand
        },
        {
            id: 2,
            title: 'Detailed Records',
            text: "Gain insights into who is clicking your links.Knowing when and where people engage with your content helps inform better decisions.",
            icon: iconDetailed
        },
        {
            id: 3,
            title: 'Fully Customizable',
            text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
            icon: iconCustom
        }
    ])

    return (
        <div className='cards-container' >
            <div className='cards-wrapper' >
                <h2>Advanced Statistics</h2>
                <p>Track how your links are performing across the web with <br />
                our advanced statistics dashboard.
            </p>
            </div>
        </div>
    )
}

export default Cards; 
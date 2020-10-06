import React from 'react';

import actionImg from '../../assets/illustration-working.svg'

import './ActionCall.scss'


const ActionCall = () => (
    <div className='action-call-container' >
        <div className='action-call' >
            <h1>More than just <br /> shorter links</h1>
            <p>Build your brand's recognition and get detailed <br />
            insights on how your links are performing.
            </p>
            <button>Get Started</button>
        </div>
        <div className="action-img" >
            <img src={actionImg} alt='working' />
        </div>
    </div>
)

export default ActionCall
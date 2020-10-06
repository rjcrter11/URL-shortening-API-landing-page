import React from 'react';

import './LinkForm.scss'
import Cards from '../Cards/Cards';

const LinkForm = () => {
    return (

        <div className='link-wrapper' >
            <div className='link-form-container' >
                <form>
                    <input placeholder='Shorten a link here...' />
                </form>
                <button>Shorten it!</button>
            </div>
            <Cards />
        </div>

    )
}

export default LinkForm; 
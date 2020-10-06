import React from 'react';

import './LinkForm.scss'

const LinkForm = () => {
    return (
        <div className='link-wrapper' >
            <div className='link-form-container' >
                <form>
                    <input placeholder='Shorten a link here...' />

                </form>
                <button>Shorten it!</button>
            </div>
        </div>
    )
}

export default LinkForm; 
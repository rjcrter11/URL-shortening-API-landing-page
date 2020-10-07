import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Dropdown = ({ url, idx, handleCopy }) => (
    <div className='url-dropdown' key={idx} >
        <div className='full-url' >
            <p> {url.url} </p>
        </div>
        <div className='divider' ></div>
        <div className="link-and-button" >
            <a className='short-url' href={url.shorten} > {url.shorten} </a>
            <CopyToClipboard text={url.shorten} >
                <button className={url.copied ? 'copied' : ''} onClick={() => handleCopy(idx)}> {url.copied ? 'Copied!' : 'Copy'} </button>
            </CopyToClipboard>
        </div>
    </div>
)

export default Dropdown; 
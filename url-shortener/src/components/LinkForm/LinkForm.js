import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard'

import './LinkForm.scss'
import Cards from '../Cards/Cards';

const LinkForm = () => {

    const [url, setUrl] = useState('');
    const [error, setError] = useState(false)
    const [savedUrls, setSavedUrls] = useState([])

    useEffect(() => {
        if (localStorage.getItem('link')) {
            let save = localStorage.getItem('link');
            save = JSON.parse(save)
            setSavedUrls(save)
        }
    }, [])

    const handleClick = () => {
        let regex = new RegExp('^(https?:\\/\\/)?' +
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
            '((\\d{1,3}\\.){3}\\d{1,3}))' +
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
            '(\\?[;&a-z\\d%_.~+=-]*)?' +
            '(\\#[-a-z\\d_]*)?$', 'i');

        let strippedUrl = url.trim()

        if (regex.test(strippedUrl) === false) {
            setError(true)
        } else {
            axios.post('https://rel.ink/api/links/', { "url": url })
                .then(res => {
                    console.log(res)
                    let tempArr = [...savedUrls]
                    let hash = res.data.hashid;
                    let shorten = 'https://rel.ink/' + hash;
                    let copied = false;
                    let newObj = { url, hash, shorten, copied }
                    tempArr.push(newObj);
                    setSavedUrls(tempArr)
                    setError(false)
                    localStorage.setItem('link', JSON.stringify(tempArr));
                    setUrl('')
                })
                .catch(err => console.log(err))
        }
    }

    const handleCopy = (idx) => {
        let array = [...savedUrls];
        let obj = array[idx];
        obj.copied = true
        setSavedUrls(array)
    }

    return (

        <div className='link-wrapper' >
            <div className='link-form-container' >
                <div className="link-input" >
                    <input onChange={(e) => setUrl(e.target.value)} className={error ? "url-error" : ''} placeholder='Shorten a link here...' />
                </div>
                <button onClick={handleClick} >Shorten it!</button>
                {
                    error ? (
                        <span className='error' >Please add a link</span>
                    ) : null
                }
            </div>
            <div className='urls-container' >
                {
                    savedUrls.map((url, idx) => {
                        return (
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
                    })
                }
            </div>
            <Cards />
        </div>

    )
}

export default LinkForm; 
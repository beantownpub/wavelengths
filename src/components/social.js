import React from 'react'
import { SocialIcon } from './icons'

const config = require('./../config.json')
const urls = config.wavelengths.urls

const iconStyle = {
	padding: '0 .25em',
    color: '#1f6696',
    fontSize: '3rem'
}

export const SocialNav = () => {
    return (
        <nav style={{margin: '1rem auto'}}>
            <a href={urls["facebook"]}><SocialIcon iconName="faFacebook" style={iconStyle} /></a>
        </nav>
    )
}

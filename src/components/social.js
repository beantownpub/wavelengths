import React from 'react'
import { SocialIcon } from './icons.js'
import { config } from '../utils/main.js'
const urls = config.urls

const iconStyle = {
	padding: '0 .25em',
    color: config.colors.blue,
    fontSize: '3rem'
}

export const SocialNav = () => {
    return (
        <nav style={{margin: '1rem auto'}}>
            <a href={urls["facebook"]}><SocialIcon iconName="faFacebook" style={iconStyle} /></a>
        </nav>
    )
}

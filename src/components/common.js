import React from 'react'
import { SocialNav } from './social'
import {
    StyledAnchor,
    StyledInfo,
    StyledLinkButton,
    StyledHero,
    StyledFooter } from './Styles'


export const InfoSection = (props) => {
    return (
        <StyledInfo
            color={props.bgColor}
            fontColor={props.fontColor}
            textAlign={props.textAlign}
            marginTop={props.marginTop}
            paddingTop={props.paddingTop}
            paddingBottom={props.paddingBottom}
            paddingLeft={props.paddingLeft}
            paddingRight={props.paddingRight}>{props.children}</StyledInfo>
    )
}

export const Title = (props) => {
    return (
        <h1>{props.children}</h1>
    )
}

export const LinkButton = (props) => {
    const goTo = () => {
        window.location.href=props.url
    }
    return (
        <StyledLinkButton buttonColor={props.color} fontColor={props.fontColor}>
            <button onClick={goTo} type="button">{props.children}</button>
        </StyledLinkButton>
    )
}

export const HeroHeader = () => {
    return (
        <StyledHero>
            <h1>Wavelenghts Salon</h1>
        </StyledHero>
    )
}

export const Anchor = (props) => {
    return (
        <StyledAnchor>
            <a href={props.target}>{props.text}</a>
        </StyledAnchor>
    )
}

export const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <StyledFooter fontColor="white" backgroundColor="black">
            <footer>
                <h4>Est. 1980</h4>
                <img src="/images/wavelengths_logo_white.png" alt="wavelengths logo" />
                <h3>1343 Beacon St. Brookline MA, 02446</h3>
                <h2>Call: 617-232-2116</h2>
                <h2>Stay Connected</h2>
                <SocialNav/>
                <h2>{'© ' + year} Wavelenghts Salon</h2>
            </footer>
        </StyledFooter>
    )
}

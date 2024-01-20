import React from "react"
import { ContentSection } from "@jalgraves/react-components-library"
import { SocialNav } from "./social.js"
import { config } from "../utils/main.js"
const COLORS = config.colors
const FONTS = config.fonts


export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <ContentSection
      ariaDetails="Footer"
      backgroundColor="transparent"
      borderRadius="4px"
      display="flex"
      flexFlow="column wrap"
      fontFamily={FONTS.content}
      h2Color={COLORS.white}
      h2FontFamily={FONTS.content}
      h2FontSize="1.5rem"
      h2FontWeight="600"
      h2LetterSpacing=".3rem"
      h2LineHeight="150%"
      h2TextTransform="uppercase"
      h2Margin="auto"
      h2Padding=".5rem"
      h3Padding="1rem"
      h3Margin="auto"
      h3Color={COLORS.blue}
      h3FontSize="2rem"
      h3FontWeight="900"
      h3LetterSpacing=".3rem"
      margin="3rem auto 1rem auto"
      maxWidth="80vw"
      outline={`.2rem solid ${COLORS.yellow}`}
      padding="2rem"
      textAlign="center"
      width="100vw"
    >
      <footer>
        <h3>Est. 1980</h3>
        <img src="/images/wavelengths_logo_white.png" alt="wavelengths logo" />
        <h2>1343 Beacon St. Brookline MA, 02446</h2>
        <h2>Call: 617-232-2116</h2>
        <h2>Stay Connected</h2>
        <SocialNav/>
        <h2>{'© ' + year} Wavelenghts Salon</h2>
      </footer>
    </ContentSection>
  )
}

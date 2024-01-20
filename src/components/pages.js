import React from 'react'
import { ContentSection } from "@jalgraves/react-components-library"
import { StyledTable } from "./Styles.js"
import { config } from "../utils/main.js"
const COLORS = config.colors
const FONTS = config.fonts

export const ContentContainer = (props) => {
  return (
    <ContentSection
      display="flex"
      flexFlow="column wrap"
      fontColor={COLORS.white}
      fontFamily={FONTS.content}
      h1Color={props.h1Color || COLORS.white}
      h1FontFamily={FONTS.headline}
      h1FontSize="2.5rem"
      h1FontWeight="bold"
      h1LetterSpacing=".2rem"
      h1LineHeight="150%"
      h1Margin="auto"
      h1Padding={props.h1Padding || "1rem 0"}
      h1TextAlign="center"
      h1TextTransform="uppercase"
      h2Color={props.h2Color || COLORS.green}
      h2FontFamily={FONTS.content}
      h2FontSize="2rem"
      h2Margin="auto"
      h2LineHeight="150%"
      h2TextAlign="center"
      h2TextTransform="uppercase"
      h3Color={props.h3Color || COLORS.white}
      h3FontFamily={FONTS.contents}
      h3FontSize="1.75rem"
      h3FontWeight="bold"
      h3LetterSpacing=".3rem"
      h3LineHeight="150%"
      h3Margin="auto"
      h3TextAlign="center"
      h3TextTransform="uppercase"
      headerImgMaxWidth="30rem"
      lineHeight="150%"
      margin={props.margin || "unset"}
      padding="2rem"
      width="100%"
    >
      {props.children}
    </ContentSection>
  )
}

export const MainInfo = () => {
  return (
    <ContentContainer margin="2rem auto 0 auto">
      <ContentContainer h1Color={COLORS.white} margin="1rem auto">
        <img style={{margin: "auto", padding: "1rem 0", maxWidth: "290px"}} src="/images/wavelengths_logo_white.png" alt="Wavelengths Hair Salon" />
        <h1 style={{color: COLORS.blue}}>EST. 1980</h1>
        <h1>1343 BEACON ST. BROOKLINE, MA 02446</h1>
        <h2>CONTACT</h2>
        <h3>(617) 232-2116</h3>
        <h2>APPOINTMENTS AND WALK-INS WELCOME</h2>
      </ContentContainer>
      <ContentContainer h1Color={COLORS.green} margin=".5rem auto">
        <h1>SALON HOURS</h1>
        <h3>CLOSED MONDAY</h3>
        <h3>TUESDAY - FRIDAY</h3>
        <h3>9:00 - 7:30</h3>
        <h3>SATURDAY</h3>
        <h3>9:00 - 5:00</h3>
        <h3>CLOSED SUNDAY</h3>
      </ContentContainer>
    </ContentContainer>
  )
}

export const Services = () => {
  return (
    <ContentContainer h1Color={COLORS.green} margin="1rem auto">
      <h1>SALON SERVICES</h1>
      <h3>ALL PRICES</h3>
      <StyledTable>
        <table>
          <tbody>
            <tr>
              <td>Wash &amp; Cut</td>
              <td>40.00 &amp; Up</td>
            </tr>
            <tr>
              <td>Wash, Cut, &amp; Blow Dry</td>
              <td>60.00 &amp; Up</td>
            </tr>
            <tr>
              <td>Wash, &amp; Blow Dry</td>
              <td>40.00 &amp; Up</td>
            </tr>
            <tr>
              <td>Up-Do</td>
              <td>55.00 &amp; Up</td>
            </tr>
            <tr>
              <td>One process color</td>
              <td>60.00 &amp; Up</td>
            </tr>
            <tr>
              <td>Balayage</td>
              <td>150.00 &amp; Up</td>
            </tr>
            <tr>
              <td>Foil Highlights</td>
              <td>100.00 &amp; Up</td>
            </tr>
            <tr>
              <td>Perm</td>
              <td>95.00 &amp; Up</td>
            </tr>
            <tr>
              <td>Keratin Coppola Complex</td>
              <td>300.00 &amp; Up</td>
            </tr>
            <tr>
              <td>Keratin Express</td>
              <td>125.00 &amp; Up</td>
            </tr>
            <tr>
              <td>Olaplex Treatment</td>
              <td>35.00 &amp; Up</td>
            </tr>
            <tr>
              <td>Conditioning Treatment</td>
              <td>35.00 &amp; Up</td>
            </tr>
            <tr>
              <td>Children Under 10 Years</td>
              <td>30.00 &amp; Up</td>
            </tr>
            <tr>
              <td>Eye Brow Wax</td>
              <td>18.00</td>
            </tr>
          </tbody>
        </table>
      </StyledTable>
      <h2>Student discounts available</h2>
    </ContentContainer>
  )
}

export const ContactInfo = () => {
    // const apiKey = process.env.GOOGLE_API_KEY
    return (
        <ContentContainer h1Color={COLORS.green} margin="1rem auto">
            <section>
                <h3>Call</h3>
                <h2>617-232-2116</h2>
                <h3>Mailing Address</h3>
                <h2>1343 Beacon Street<br />Brookline MA, 02446</h2>
            </section>
        </ContentContainer>
    )
}

export const ErrorPage = () => {
    return (
            <ContentContainer h1Color={COLORS.green} margin="1rem auto">
                <section>
                    <h1>Wavelengths Brookline</h1>
                    <h2>Something has gone awry</h2>
                    <h2>The site developer has made a mistake and apologizes in advance for the inconvenience</h2>
                </section>
            </ContentContainer>
    )
}

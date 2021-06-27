import React from 'react'
import { InfoSection } from './common'
import { Map } from './map'

const config = require('./../config.json')
const COLORS = config.wavelengths.colors

export const MainInfo = () => {
    return (
        <div>
            <InfoSection bgColor={COLORS.black} fontColor="white">
                <section>
                <img src="/images/wavelengths_logo_white.png" alt="Wavelengths Hair Salon" />
                <h1>EST. 1980</h1>
                <h1>1343 BEACON ST. BROOKLINE, MA 02446</h1>
                <h2><span>CONTACT</span></h2>
                <h2>(617) 232-2116</h2>
                <h2>APPOINTMENTS AND WALK-INS WELCOME</h2>
                    <div>
                        <h1><span>SALON HOURS</span></h1>
                        <h3>CLOSED MONDAY</h3>
                        <h3>TUESDAY - FRIDAY</h3>
                        <h3>9:00 - 7:30</h3>
                        <h3>SATURDAY</h3>
                        <h3>9:00 - 5:00</h3>
                        <h3>SUNDAY</h3>
                        <h3>11:00 - 4:00</h3>
                    </div>
                </section>
            </InfoSection>
        </div>
    )
}

export const Services = () => {
    return (
        <InfoSection bgColor="black" fontColor="white">
            <section>
                    <h1>SALON SERVICES</h1>
                    <h3>ALL PRICES FOR HAIR LENGTH ABOVE THE SHOULDER</h3>
                    <table>
                        <tbody>
                        <tr>
                        <td>Wash &amp; Cut</td>
                        <td>30.00 &amp; Up</td>
                        </tr>
                        <tr>
                        <td>Wash, Cut, &amp; Blow Dry</td>
                        <td>55.00 &amp; Up</td>
                        </tr>
                        <tr>
                        <td>Wash, &amp; Blow Dry</td>
                        <td>30.00 &amp; Up</td>
                        </tr>
                        <tr>
                        <td>Up-Do</td>
                        <td>55.00 &amp; Up</td>
                        </tr>
                        <tr>
                        <td>One process color</td>
                        <td>50.00 &amp; Up</td>
                        </tr>
                        <tr>
                        <td>Balayage</td>
                        <td>100.00 &amp; Up</td>
                        </tr>
                        <tr>
                        <td>Foil Highlights</td>
                        <td>90.00 &amp; Up</td>
                        </tr>
                        <tr>
                        <td>Perm</td>
                        <td>90.00 &amp; Up</td>
                        </tr>
                        <tr>
                        <td>Keratin Coppola Complex</td>
                        <td>275.00 &amp; Up</td>
                        </tr>
                        <tr>
                        <td>Keratin Express</td>
                        <td>100.00 &amp; Up</td>
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
                        <td>23.00 &amp; Up</td>
                        </tr>
                        <tr>
                        <td>Eye Brow Wax</td>
                        <td>12.00</td>
                        </tr>
                        </tbody>
                    </table>
                    <div id="student_discount">
                        <h1>Student Discounts Available</h1>
                    </div>
            </section>
        </InfoSection>
    )
}

export const ContactInfo = () => {
    const api_key = "AIzaSyAXB15L0ZUglrIv_DlWz7XrVSQ0g6lGiwI"
    return (
        <div>
        <InfoSection bgColor={COLORS.softGray}>
            <section>
                <h3>Call</h3>
                <h2>617-232-2116</h2>
                <h3>Mailing Address</h3>
                <h2>1343 Beacon Street<br />Brookline MA, 02446</h2>
            </section>
        </InfoSection>
        <InfoSection bgColor='#383838'>
            <Map
                isMarkerShown
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${api_key}&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `225px`, maxWidth: `80%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </InfoSection>
        </div>
    )
}

export const ErrorPage = () => {
    return (
        <div>
            <InfoSection bgColor={COLORS.softGray}>
                <section>
                    <h1>Wavelengths Brookline</h1>
                    <h2>Something has gone awry</h2>
                    <h2>The site developer has made a mistake and apologizes in advance for the inconvenience</h2>
                </section>
            </InfoSection>
        </div>
    )
}
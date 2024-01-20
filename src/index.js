import React from "react"
import { createRoot } from "react-dom/client"
import { MainMenuBar } from "@jalgraves/react-components-library"
import { MainInfo, Services } from "./components/pages.js"
import { Footer } from "./components/footer.js"
import { config } from "./utils/main.js"

const COLORS = config.colors
const FONTS = config.fonts
const PAGES = config.pages

const IMG_STYLES = {
  margin: ".5em auto",
  padding: "1em 0",
  maxWidth: "60vw",
  maxHeight: "4rem",
  position: "absolute",
  left: "4rem",
  top: "1rem"
}

const footerContainer = document.getElementById("footer")
const topBarContainer = document.getElementById("topBar")
const mainInfoContainer =  document.getElementById("mainInfo")
const servicesContainer =  document.getElementById("services")
const footer = createRoot(footerContainer)
const topBar = createRoot(topBarContainer)
const mainInfo = createRoot(mainInfoContainer)
const services = createRoot(servicesContainer)

const slideMenu = {
  backgroundColor: COLORS.darkGray,
  border: `.1rem solid ${COLORS.white}`,
  fontColor: COLORS.white,
  fontFamily: FONTS.content,
  footer: {
    text: `Est. 1980`,
    fontFamily: FONTS.content,
    fontColor: COLORS.blue,
    fontSize: "2rem",
    fontWeight: "900",
    textTransform: "uppercase"
  },

  linkList: {
    borderRadius: "4px",
    fontFamily: FONTS.content,
    fontColor: COLORS.black,
    fontSize: "1.5rem",
    fontWeight: "900",
    outline: `1px solid ${COLORS.white}`,
    margin: "2rem auto",
    pages: PAGES,
    position: "relative",
    hoverColor: COLORS.red,
    width: "100%",
    iconStyle: {
      color: COLORS.red,
      fontSize: "1em"
    }
  },
  header: {
    fontFamily: FONTS.content,
    imgSource: "/images/wavelengths_horizontal_logo.png"
  }
}

topBar.render(
  <MainMenuBar
    pages={PAGES}
    fontColor={COLORS.white}
    fontFamily={FONTS.content}
    barColor={COLORS.black}
    hamburgerBackground={COLORS.red}
    hoverColor={COLORS.red}
    navBarLogoImgStyles={IMG_STYLES}
    mainMenuBarBorderBottom={`1px solid ${COLORS.yellow}`}
    slideMenu={slideMenu}
    mainMenuBarImgSource={"/images/wavelengths_horizontal_logo.png"}
    mainMenuBarBoxShadow={`2px 2px 6px ${COLORS.darkGray}`}
  />
)

footer.render(
  <Footer/>
)

// if (contactInfo) {
//   contactInfo.render(
//     <ContactInfo/>
//   )
// }

if (mainInfo) {
  mainInfo.render(
    <MainInfo/>
  )
}

if (services) {
  services.render(
    <Services/>
  )
}

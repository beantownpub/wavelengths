import React from 'react'
import ReactDOM from 'react-dom'
import { MainInfo, ContactInfo, Services } from './components/pages'
import {  Footer } from './components/common'
import { TopMenuBar, LinkList, TopNavBar, linkProps } from './components/TopBar'
import { config } from './utils/main'

const PAGES = config.pages
const COLORS = config.colors

function topMenu() {
    return (
        <div >
            <img src={"/images/wavelengths_logo_white.png"}  alt="wavelengths salaon" />
        </div>
    )
}

function navBar() {
    return (
        <TopNavBar
            fontColor='white'
            hoverColor='red'
            props={linkProps(PAGES, 'top_menu')}
        />
    )
}

const menuList = <LinkList props={linkProps(PAGES, 'menu_list')} />

function navBarLogo() {
    var imgStyles = {position: 'absolute', padding: '.25em'}
    return (
        <a href="/">
            <img style={imgStyles} src={"/images/wavelengths_horizontal_logo.png"}  alt="wavelengths salaon" />
        </a>
    );
}

ReactDOM.render(
    <TopMenuBar
        bottomMenu=''
        fontColor='white'
        navBarLogo={navBarLogo()}
        topMenu={topMenu()}
        menuList={menuList}
        navBar={navBar()}
        barColor='black'
        menuColor={COLORS.darkGray} />,
    document.getElementById('topBar')
)

ReactDOM.render(
    <Footer/>,
    document.getElementById('footer')
)

// if (document.getElementById('heroHeader')) {
//     ReactDOM.render(
//         <HeroHeader/>,
//         document.getElementById('heroHeader')
//     )
// }

if (document.getElementById('contactInfo')) {
    ReactDOM.render(
        <ContactInfo/>,
        document.getElementById('contactInfo')
    )
}

if (document.getElementById('mainInfo')) {
    ReactDOM.render(
        <MainInfo/>,
        document.getElementById('mainInfo')
    )
}

if (document.getElementById('services')) {
    ReactDOM.render(
        <Services/>,
        document.getElementById('services')
    )
}

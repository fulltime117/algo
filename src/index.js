import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from './router'
import { ThemeProvider } from './contexts/ThemeContext'
import theme from './theme.json'

import headerOver from './assets/images/headerOver.png'
import headerLogo from './assets/images/logo-blue.png'
import headerTitle from './assets/images/header-title.png'
import homeBg from './assets/images/home-bg.png'
import stillBkg from './assets/images/still-bkg.png'
import copyrightBg from './assets/images/copyright-bg.png'
import welcomeBg from './assets/images/welcome-bg.png'
import alcBg from './assets/images/alc-section-back.png'
import alcBgMobile from './assets/images/alc-section-back-mobile.png'
import alcImg from './assets/images/alcLogo.png'
import sidebarOver from './assets/images/sideback.png';
import welcomeMobileBg from './assets/images/welcome-bg-mobile.png';
import blogBack from './assets/images/blogBack.png';
import blogBackMobile from './assets/images/blogBackMobile.png';
import dumiUser from './assets/dummies/dumiUser.png'
import partnerBack from './assets/images/partnerBack.png';
import teamListBack from './assets/images/teamBack.png';
import welcomeShape from './assets/images/welcome-shape.png'
import joinSection from './assets/images/join_section.png'
import joinTextBack from './assets/images/joinTextBack.png'

import menuWhite from './assets/icons/menuIcon-white.svg'
import menuBlue from './assets/icons/menuIcon-white.svg'
import twitterWhite from './assets/icons/twitter-white.svg'
import twitterBlue from './assets/icons/twitter-blue.svg'
import instagramWhite from './assets/icons/instagram-white.svg'
import instagramBlue from './assets/icons/instagram-blue.svg'
import facebookWhite from './assets/icons/facebook-white.svg'
import facebookBlue from './assets/icons/facebook-blue.svg'

/**
 * Theme images
 */
theme.images = {
  headerOver,
  headerLogo,
  headerTitle,
  homeBg,
  sidebarOver,
  stillBkg,
  copyrightBg,
  welcomeBg,
  welcomeMobileBg,
  welcomeShape,
  alcBg,
  alcBgMobile,
  blogBack,
  blogBackMobile,
  alcImg,
  partnerBack,
  teamListBack,
  joinSection,
  joinTextBack
}

theme.dummies = {
  dumiUser
}

theme.icons = {
  menuWhite,
  menuBlue,
  twitterWhite,
  twitterBlue,
  instagramWhite,
  instagramBlue,
  facebookWhite,
  facebookBlue,
}

const RouteApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}

const wrapper = document.getElementById('root')
ReactDOM.render(<RouteApp />, wrapper)
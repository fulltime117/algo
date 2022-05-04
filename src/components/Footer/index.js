import React from 'react'
import { useTheme } from 'styled-components'
import {
  FooterWrapper,
  FooterContent,
  SocialIcons,
  CopyRightText,
  BackOver
} from './styles'

export const Footer = (props) => {
  const theme = useTheme()

  return (
    <FooterWrapper>
      <FooterContent>
        <SocialIcons>
          <img src={theme.icons.instagramBlue} alt='' />
          <img src={theme.icons.twitterBlue} alt='' />
          <img src={theme.icons.facebookBlue} alt='' />
        </SocialIcons>
        <CopyRightText>
          <h5>COPYRIGHT 2022 ANTITY, LLC</h5>
        </CopyRightText>
      </FooterContent>
      <BackOver bgOver={theme.images.copyrightBg} />
    </FooterWrapper>
  )
}
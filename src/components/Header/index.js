import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { useWindowSize } from '../../hooks/useWindowSize'
import { Navbar } from '../Navbar'
import { MobilMenu } from '../MobilMenu'

import {
  HeaderWrapper,
  Container,
  HeaderLogo,
  TitleImg,
  BackOver,
  HeaderContent,
  NavWrapper,
  MobileMenuWrapper
} from './styles'

export const Header = (props) => {
  const theme = useTheme()
  const { width } = useWindowSize()

  const menuList = [
    { key: 'story', name: 'STORY' },
    { key: 'nets', name: 'NFTs' },
    { key: 'mission', name: 'MISSION' },
    { key: 'howto', name: 'HOW TO' },
    { key: 'about', name: 'ABOUT' }
  ]

  return (
    <HeaderWrapper>
      <Container>
        <HeaderContent>
          <Link to="/">
            <HeaderLogo src={theme.images.headerLogo} />
          </Link>
          <NavWrapper>
            <TitleImg>
              <span>.. CONNECT WALLET ..</span>
              <img src={theme.images.headerTitle} alt='' />
            </TitleImg>
            {width > 767 && (
              <Navbar menuList={menuList} />
            )}
          </NavWrapper>
          <MobileMenuWrapper>
            <MobilMenu menuList={menuList} />
          </MobileMenuWrapper>
        </HeaderContent>
        {width > 767 && (
          <BackOver bgOver={theme.images.headerOver} />
        )}
      </Container>
    </HeaderWrapper>
  )
}

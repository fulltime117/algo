import React, { useState, useEffect } from 'react'
import { useTheme } from 'styled-components'
import { useWindowSize } from '../../hooks/useWindowSize'
import {
  MenuWrapper,
  MobileMenu,
  SidebarContent,
  LinkWrapper,
  MenuLink,
  TextInfo,
  SideBarOver
} from './styles'

export const MobilMenu = (props) => {
  const { menuList } = props
  const theme = useTheme()
  const { width } = useWindowSize()
  const [isMenu, setIsMenu] = useState(false)
  const [pageName, setPageName] = useState('')

  const handleClickMenu = (index) => {
    if (!index) return
    const el = document.getElementById('root')
    const topPos = document.getElementById(index).offsetTop
    el.scroll({
      top: topPos - 110,
      left: 0,
      behavior: 'smooth'
    })
  }

  const handleMenuClick = () => {
    if (width > 768) return
    setIsMenu(!isMenu)
  }

  const handleClickSideMenu = (index) => {
    handleClickMenu(index)
    setIsMenu(false)
  }

  useEffect(() => {
    const el = document.getElementById('root')

    const handleScroll = () => {
      menuList.forEach(menu => {
        const windowTop = el.scrollTop
        const topPos = document.getElementById(menu.key).offsetTop

        if (Math.abs(windowTop - topPos) < 100) {
          setPageName(menu.key)
        }
      })

      if (el.scrollTop < 200) setPageName('')
    }



    el.addEventListener('scroll', handleScroll)
    return () => el.removeEventListener('scroll', handleScroll)
  }, [menuList])

  return (
    <MenuWrapper>
      <MobileMenu
        src={theme.icons.menuWhite}
        alt=''
        onClick={() => handleMenuClick()}
        aria-label='menu'
      />
      <SidebarContent
        id='sidebar_menu'
        style={{ width: (isMenu && width < 768) ? '150px' : '0px' }}
      >
        <LinkWrapper>
          {menuList && menuList.length > 0 && menuList.map((menu, i) => (
            <MenuLink
              key={i}
              onClick={() => handleClickSideMenu(menu.key)}
            >
              <TextInfo active={pageName === menu.key}>{menu?.name}</TextInfo>
            </MenuLink>
          ))}
        </LinkWrapper>
        <SideBarOver bgOver={theme.images.sidebarOver} />
      </SidebarContent>
    </MenuWrapper>
  )
}
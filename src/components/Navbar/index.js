import React, { useState, useEffect } from 'react'
import {
  Container,
  MenuLink
} from './styles'

export const Navbar = (props) => {
  const { menuList } = props
  const [pageName, setPageName] = useState('')

  const handleChangePage = (index) => {
    if (!index) return
    const el = document.getElementById('root')
    setPageName(index)
    const topPos = document.getElementById(index).offsetTop
    el.scroll({
      top: topPos - 110,
      left: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const el = document.getElementById('root')
    const handleScroll = () => {
      menuList.forEach(menu => {
        const windowTop = el.scrollTop
        const topPos = document.getElementById(menu.key).offsetTop
        if (Math.abs(windowTop - topPos) < 150) {
          setPageName(menu.key)
        }
      })
      if (el.scrollTop < 300) {
        setPageName('')
      }
    }
    el.addEventListener('scroll', handleScroll)
    return () => el.removeEventListener('scroll', handleScroll)
  }, [menuList])

  return (
    <Container>
      {menuList.map((menu, index) => (
        <MenuLink
          key={index}
          active={pageName === menu.key}
          onClick={() => handleChangePage(menu.key)}
          last={menuList.length === index + 1}
        >
          {menu.name}
        </MenuLink>
      ))}
    </Container>
  )
}

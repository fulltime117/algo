import React from 'react'
import styled, { css } from 'styled-components'

export const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  text-align: center;
  z-index: 10;
  background: radial-gradient(35.7% 300% at 50.03% 52.25%, #FFFBCC 0%, #FAF1BA 12%, #EFD98E 34%, #EED688 37%, #EBBB10 69%, rgba(195, 146, 46, 0.79) 100%);

  @media (min-width: 768px) {
    background: linear-gradient(90deg,  #262261 0%, #293181 14%, #2B388F 22%, #00ADEE 50%, #2B388F 83%, #2A3487 88%, #282B74 94%, #262261 99%);
  }
`

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  
  @media (min-width: 768px) {
    padding-top: 5px;
  }
`
export const HeaderContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  max-width: 1745px;
  height: 100%;
  z-index: 102;
  margin: 0 auto;
`

export const HeaderLogo = styled.img`
  margin-top: 10px;
  height: 40px;
  max-height: 100px;
  &:hover {
    transform: scale(1.03);
  }
  &:active {
    transform: scale(0.99);
  }
  @media (min-width: 480px) {
    height: 45px;
  }

  @media (min-width: 768px) {
    height: 65px;
  }

  @media (min-width: 1024px) {
    margin-left: 80%;
  }

  @media (min-width: 1200px) {
    height: 75px;
  }

  @media (min-width: 1600px) {
    height: 95px;
    margin-left: 45%;
  }
`

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    margin-left: 16%;
    width: 58%;
  }

 @media (min-width: 1024px) {
    height: 7.6vw;
    justify-content: space-around;
  }

  @media (min-width: 1600px) {
    height: 7vw;
    justify-content: space-between;
  }
`

export const TitleImg = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 200px;
  height: 33px;

  span {
    z-index: 2;
    color: #fff;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    width: 60%;
    margin-bottom: 1vw;
    span {
      font-size: 18px;
    }
  }

  
  @media (min-width: 1024px) {
    margin-bottom: 7px;
    height: 3.3vw;

    span {
      font-size: 1.8vw;
      font-weight: bold;
    }
  }

  @media (min-width: 1200px) {
    align-items: flex-start;
  }

  @media (min-width: 1600px) {
    height: 3vw;
    span {
      font-size: 30px;
    }
  }
`
export const MobilMenu = styled.img`
  position: absolute;
  right:70px;
  top: 30px;
  cursor: pointer;
  height: 50px;
`
export const BackOverStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;

  ${({ bgOver }) => bgOver && css`
    background-repeat: no-repeat, repeat;
    background-position: center center;
    background-size: 100% 100%;
  `}
`

export const BackOver = (props) => {
  return (
    <BackOverStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgOver})` }}
    >
      {props.children}
    </BackOverStyled>
  )
}



export const MobileMenuWrapper = styled.div`
  padding-bottom: 1.3vw;
`
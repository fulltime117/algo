import React from 'react'
import styled, { css } from 'styled-components'

export const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  z-index: 10;
  padding: 5px 5px 0;
`
export const FooterContent = styled.div`
  position: relative;
  display: flex;
  z-index: 2;
`
export const SocialIcons = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 5px;

  img {
    height: 25px;
    cursor: pointer;
    transition: 0.1s;
    &:hover {
      transform: scale(1.05);
    }
    &:active {
      transform: scale(0.98);
    }
  }

  @media (min-width: 480px) {
    height: 35px;

    img {
      height: 30px;
    }
  }

  @media (min-width: 768px) {
    height: 40px;

    img {
      height: 35px;
    }
  }

  @media (min-width: 1024px) {
    height: 50px;
    padding: 0 3vw;

    img {
      height: 45px;
    }
  }

  @media (min-width: 1200px) {
    height: 55px;

    img {
      height: 45px;
    }
  }

  @media (min-width: 1400px) {
    height: 60px;

    img {
      height: 55px;
    }
  }

  @media (min-width: 1600px) {
    height: 65px;
    padding: 0 5vw;
  }
`
export const CopyRightText = styled.div`
  display: flex;
  justify-content: center;
  width: 75%;
  align-items: flex-end;

  h5 {
    margin: 0;
    color: #041733;
  }

  @media (min-width: 480px) {
    h5 {
      font-size: 15px;
      margin-bottom: 2px;
    }
  }

  @media (min-width: 768px) {
    width: 60%;
    h5 {
      font-size: 17px;
      width: 100%;
    }
  }

  @media (min-width: 1400px) {
    h5 {
      font-size: 18px;
      margin-bottom: 7px;
    }
  }

  @media (min-width: 1600px) {
    h5 {
      font-size: 19px;
    }
  }
`

export const BackOverStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;

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

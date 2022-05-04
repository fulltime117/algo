import React from 'react'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 55px);
  margin-top: 55px;
  padding-bottom: 35px;
  color: #fff;

  @media (min-width: 768px) {
    height: calc(100vh - 83px);
    margin-top: 83px;
  }

  @media (min-width: 1200px) {
    height: calc(100vh - 94px);
    margin-top: 94px;
  }
`

export const HomeContentStyled = styled.div`
  width: 100%;
  overflow-y: auto;


  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: top center;
  `}
`

export const HomeContent = (props) => {
  return (
    <HomeContentStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </HomeContentStyled>
  )
}

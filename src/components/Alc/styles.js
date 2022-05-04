import React from 'react'
import styled, { css } from 'styled-components'

export const ContainerStyled = styled.div`
  display: flex;
  position: relative;
  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat;
    background-size: 100% 100%;
  `}
  min-height: 200px;
  margin: 0px 20px 50px;
  max-width: 1588px;

  @media (min-width: 768px) {
    margin: 0 4vw 50px;
  }

  @media (min-width: 1800px) {
    margin: 0 auto 5vw;
  }
`
export const Container = (props) => {
  return (
    <ContainerStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </ContainerStyled>
  )
}

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 2;

  @media (min-width: 480px) {
    flex-direction: row;
    align-items: flex-start;
    padding: 10px;
  }
`
export const LogoWrapper = styled.div`
  display: flex;
  width: 93%;
  img {
    width: 100%;
  }

  @media (min-width: 480px) {
    width: 36%;
    margin-bottom: 10px;
  }

  @media (min-width: 567px) {
    width: 35%;
    margin-bottom: 20px;
  }

  @media (min-width: 1600px) {
    width: 37%;
    display: flex;
    justify-content: center;
    padding: 3vw;

    img {
      max-height: 20vw;
      width: 20vw;
    }
  }
`
export const ALCtext = styled.div`
  display: flex;
  padding: 0 20px;
  padding-left: 33px;

  p {
    margin: 0;
    margin-bottom: 37px;
    line-height: 29px;
  }

  @media (min-width: 480px) {
    flex: 1;
    overflow-y: auto;

    p {
      margin-bottom: 0;
      margin-top: 10px;
      max-height: 167px;
      line-height: 27px;
    }
  }

  @media (min-width: 567px) {
    p {
      max-height: unset;
    }
  }

  @media (min-width: 650px) {
    p {
      line-height: 30px;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    height: 100%;

    p {
      margin-top: 0;
      margin-bottom: 15px;
      font-size: 2.6vw;
      line-height: unset;
    }
  }

  @media (min-width: 1024px) {
    p {
      line-height: 4vw;
    }
  }

  @media (min-width: 1200px) {
    p {
      line-height: 3.5vw;
      padding: 0 10px 0 0;
    }
  }

  @media (min-width: 1600px) {
    p {
      font-size: 30px;
      line-height: 44px;
      padding: 0 70px 0 0;
    }
  }
`

export const OverBack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 85%;
  height: 90%;
  top: 4%;
  left: 10%;
  background-color: #00a4ff47;
  filter: blur(15px);

  @media (min-width: 1200px) {
    width: 96%;
    height: 90%;
    top: 4%;
    left: 2%;
  }
`
import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  height: 56vw;
  margin-bottom: 20px;
  overflow: hidden;
`
export const Content = styled.div`
  position: absolute;
  left: 9%;
  width: 100%;
  height: 70%;
  top: 17%;
`
export const JinSection = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2vw;

  ${({ bgimage }) => bgimage && css`
    background-image: url(${props => props.bgimage});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  `}

  img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`
export const JoinTexts = styled.div`
  z-index: 2;
  position: absolute;
  left: 11%;
  top: 24%;

  h3 {
    margin: 0;
    width: 33vw;
    font-size: 5vw;
    text-align: center;
  }
`

export const JoinShape = styled.div`
  position: absolute;
  width: 33vw;
  height: 32.7vw;
  top: 2vw;

  ${({ bgimage }) => bgimage && css`
    background-image: url(${props => props.bgimage});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  `}
`
import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  position: relative;
  margin-bottom: 50px;

  @media (min-width: 480px) {
    padding: 20px;
  }

  @media (min-width: 768px) {
    padding: 4vw;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 35px;
  box-sizing: border-box; 
  z-index: 1;
  max-width: 1588px;

  ${({ bgimage }) => bgimage && css`
    background-image: url(${props => props.bgimage});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  `}

  h1{
    margin: 10px 0 0;
    text-align: center;
  }

  p {
    margin: 0;
    margin-bottom: 15px;
  }

  @media (min-width: 567px) {
    padding: 40px;
    p {
      padding: 0 20px;
    }
  }

  @media (min-width: 768px) {
    padding: 6.5vw 5vw;

    h1 {
      font-size: 4.5vw;
    }
    p {
      font-size: 2.3vw;
    }
  }

  @media (min-width: 1200px) {
    margin: 0 auto;
    padding: 6.5vw 8vw;

    p {
      font-size: 2vw;
      margin-right: 45px;
    }

    .odd {
      p {
        margin-right: 0;
        margin-left: 45px;
      }
    }
  }

  @media (min-width: 1400px) {
    padding: 6.5vw 11vw;
  }
`

export const Blog = styled.div`
  display: flex;
  &.odd {
    flex-direction: row-reverse;
  }

  @media (min-width: 768px) {
    align-items: center;
  }


`

export const BlogTexts = styled.div`
  width: 100%;
  
  @media (min-width: 1600px) {
    h1 {
      font-size: 73px;
      line-height: 108px;
    }

    p {
      font-size: 30px;
      line-height: 44px;
    }
  }
`
export const BlogImage = styled.div`
  width: 50%;
  img {
    width: 100%;
  }

  @media (min-width: 1200px) {
    width: 35%;
  }

`

export const OverBack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 80%;
  height: 88%;
  left: 10%;
  background-color: #00a4ff47;
  filter: blur(15px);

  @media (min-width: 1200px) {
    width: 85%;
    height: 85%;
    top: 7%;
    left: 8%;
  }

  @media (min-width: 1600px) {
    width: 80%;
    height: 85%;
    top: 8%;
    left: 10%;
  }
`
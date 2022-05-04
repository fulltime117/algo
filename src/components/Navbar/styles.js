import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;

  @media (min-width: 1200px) {
    width: 90%;
    margin: 0 auto;
  }

  @media (min-width: 1600px) {
    margin-bottom: 0.5vw;
  }


`

export const MenuLink = styled.span`
  color: white;
  font-weight: 700;
  font-size: 20px;
  text-decoration: none;
  margin-bottom: 5px;
  cursor:pointer;

  &:hover{
    color:#ff8100;
  }

  ${({ active }) => active && css`
    color: #ff8100;
  `}

  ${({ last }) => last && css`
    margin-right: 0px;
  `}

  @media (min-width: 1024px) {
    font-size: 2vw;
    margin: 0;
  }

  @media (min-width: 1600px) {
    font-size: 32px;
  }
`


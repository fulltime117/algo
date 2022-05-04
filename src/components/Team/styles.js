import styled, { css } from 'styled-components'

export const TeamsListsStyled = styled.div`
  position: relative;
  display: block;
  width: 100%;
  z-index: 2;

  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat,repeat;
    background-size: 221%;
    background-position: top left;
  `}

  @media (min-width: 400px) {
    background-size: 190%;
  }

  @media (min-width: 480px) {
    background-size: 125%;
  }

  @media (min-width: 567px) {
    background-size: 108%;
  }

  @media (min-width: 1024px) {
    background-size: 100%;
  }
`
export const TeamsLists = (props) => {
  return (
    <TeamsListsStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </TeamsListsStyled>
  )
}

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-around;

  @media (min-width: 1024px) {
    max-width: 80%;
    margin: 0 auto;
  }
`
export const Title = styled.div`
  padding-top: 15px;

  h1 {
    text-align: center;
    margin: 0;
    text-shadow: 6px 6px 0px rgba(0,0,0,0.2);
  }

  @media (min-width: 400px) {
    padding-top: 20px;
  }

  @media (min-width: 768px) {
    padding-top: 2vw;

    h1 {
      font-size: 5vw;
    }
  }
`
export const MemberCard = styled.div`
  text-align: center;
  margin-bottom: 10px;
  width: 33.3333%;

  @media (min-width: 768px) {
    margin-bottom: 3vw;
  }
`
export const ProfileImg = styled.div`
  width: 24vw;
  height: 24vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: #fff;
  margin: 0 auto;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
  }

  @media (min-width: 567px) {
    width: 18vw;
    height: 18vw;
  }

  @media (min-width: 768px) {
    width: 16vw;
    height: 16vw;
  }
`
export const UserName = styled.h4`
  margin: 0;
  margin-top: 10px;
  color: #C4C4C4;
  text-shadow: 0px 11px 4px rgba(0, 0, 0, 0.85);

  @media (min-width: 768px) {
    font-size: 2.6vw;
  }
`
export const UserJobTitle = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 20px;
  color: #FF9900;
  text-shadow: 0px 11px 4px rgba(0, 0, 0, 0.85);
  
  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 1024px) {
    font-size: 1.6vw;;
  }
`

export const EffectLight = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 70%;
  background: linear-gradient(90deg, rgba(14,22,58,0.5494572829131652) 15%, rgba(20,110,243,0.5438550420168067) 47%, rgba(14,22,58,0.5438550420168067) 80%);
  opacity: 0.5;
  filter: blur(16px);
`
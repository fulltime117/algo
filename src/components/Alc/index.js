import React from 'react'
import { useTheme } from 'styled-components'
import { useWindowSize } from '../../hooks/useWindowSize'
import {
  Container,
  Content,
  LogoWrapper,
  ALCtext,
  OverBack
} from './styles'

export const Alc = (props) => {
  const theme = useTheme()
  const { width } = useWindowSize()

  return (
    <Container bgimage={width < 480 ? theme.images.alcBgMobile : theme.images.alcBg} id='mission'>
      <Content>
        <LogoWrapper>
          <img src={theme.images.alcImg} alt='' />
        </LogoWrapper>
        <ALCtext>
          <p>$ALC is our ecosystem utility token which players can earn through both PvE and PvP game modes, as well through staking. The token can be traded through a traditional CEX/DEX and on Aurory's in-game marketplace. In the future, it will act as the governance token of Aurory, allowing holders to vote on important game-development decisions.</p>
        </ALCtext>
      </Content>
      <OverBack />
    </Container>
  )
}

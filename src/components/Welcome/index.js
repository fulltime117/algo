import React from 'react'
import { useTheme } from 'styled-components'
import { useWindowSize } from '../../hooks/useWindowSize'
import {
  Container,
  Content,
  OverBack
} from './styles'

export const Welcome = (props) => {
  const theme = useTheme()
  const { width } = useWindowSize()

  return (
    <Container id="story">
      <Content bgimage={width < 480 ? theme.images.welcomeMobileBg : theme.images.welcomeBg} >
        <h1>
          WELCOME TO THE
          {width > 480 && (<br />)}
          ALGO LEAGUES
        </h1>
        <p>
          Join us on epic battle NFT game built on the Algorand Blockchain. Where you choose to be a hero or a villain. Players get to play the role of any one of the Legends in the making. Where you fight to solve the blockworlds finacial crisis and game trilemma.
          As you discover the story that unfoldes.
        </p>
      </Content>
      <OverBack bgimage={width > 1024 && theme.images.welcomeShape} />
    </Container>
  )
}

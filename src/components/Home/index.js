import React from 'react'
import { useTheme } from 'styled-components'
import { HomeHero } from '../HomeHero'
import { Welcome } from '../Welcome'
import { Nfts } from '../Nfts'
import { Alc } from '../Alc'
import { HomeBlog } from '../HomeBlog'
import { Partners } from '../Partners'
import { Team } from '../Team'
import { JoinTeam } from '../JoinTeam'

import {
  Container,
  HomeContent
} from './styles'

export const Home = (props) => {
  const theme = useTheme()

  return (
    <Container>
      <HomeContent bgimage={theme.images.homeBg} id='homeContent'>
        <HomeHero />
        <Welcome />
        <Nfts />
        <Alc />
        <HomeBlog />
        <Partners />
        <Team />
        <JoinTeam />
      </HomeContent>
    </Container>
  )
}

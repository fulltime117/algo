import React from 'react'
import { useTheme } from 'styled-components'
import { useWindowSize } from '../../hooks/useWindowSize'
import {
  Container,
  Content,
  OverBack,
  Blog,
  BlogTexts,
  BlogImage
} from './styles'

export const HomeBlog = (props) => {
  const theme = useTheme()
  const { width } = useWindowSize()

  const BlogItems = [
    {
      title: 'WELCOME TO THE...',
      desc: 'Join us on epic battle NFT game built on the Algorand Blockchain. Where you choose to be a hero or a villain. Players get to play the role of any one of the Legends in the making. Where you fight to solve the blockworlds finacial crisis and game trilemma. As you discover the story that unfoldes.',
      img: theme.images.alcImg
    },
    {
      title: 'WELCOME TO THE...',
      desc: 'Join us on epic battle NFT game built on the Algorand Blockchain. Where you choose to be a hero or a villain. Players get to play the role of any one of the Legends in the making. Where you fight to solve the blockworlds finacial crisis and game trilemma. As you discover the story that unfoldes.',
      img: theme.images.alcImg
    },
    {
      title: 'WELCOME TO THE...',
      desc: 'Join us on epic battle NFT game built on the Algorand Blockchain. Where you choose to be a hero or a villain. Players get to play the role of any one of the Legends in the making. Where you fight to solve the blockworlds finacial crisis and game trilemma. As you discover the story that unfoldes.',
      img: theme.images.alcImg
    }
  ]

  return (
    <Container id='howto'>
      <Content bgimage={width < 480 ? theme.images.blogBackMobile : theme.images.blogBack} >
        {BlogItems && BlogItems.length > 0 && BlogItems.map((item, i) => (
          <Blog key={i} className={(Math.abs(i % 2) === 1) ? 'odd' : 'even'}>
            <BlogTexts>
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
            </BlogTexts>
            {width > 767 && (
              <BlogImage>
                <img src={item.img} alt='' />
              </BlogImage>
            )}
          </Blog>
        ))}
      </Content>
      <OverBack />
    </Container>
  )
}

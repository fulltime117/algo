import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import { useWindowSize } from '../../hooks/useWindowSize'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import {
  Container,
  NftItem
} from './styles'

SwiperCore.use([Navigation])

export const Nfts = (props) => {
  const { width } = useWindowSize()

  return (
    <Container id='nets'>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation={width > 767 ? true : false}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          "clickable": true
        }}
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          550: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          767: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }}
        className="nftSwiper"
      >
        {
          [...Array(24).keys()].map((index) => (
            <SwiperSlide key={index}>
              <NftItem>
                <img src={`images/NFT/nft (${index + 1}).gif`} alt='' />
              </NftItem>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Container>
  )
}

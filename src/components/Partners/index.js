import React from 'react'
import { useTheme } from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import { useWindowSize } from '../../hooks/useWindowSize'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import {
  Container,
  LogoImg
} from './styles'

SwiperCore.use([Navigation])

const partnerList = [
  { id: 1, photo: 'images/Partners/AGG_Logo.png' },
  { id: 2, photo: 'images/Partners/AoA_3X.png' },
  { id: 3, photo: 'images/Partners/BW_Coup_Logo.png' },
  { id: 4, photo: 'images/Partners/GoDrones.png' },
  { id: 5, photo: 'images/Partners/logo_transparent_background.png' }
]

export const Partners = (props) => {
  const theme = useTheme()
  const { width } = useWindowSize()

  return (
    <Container bgimage={theme.images?.partnerBack}>
      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        navigation={width > 767 ? true : false}
        pagination={{
          "clickable": true
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          300: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          550: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          769: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }}
        className="partnerSwiper"
      >
        {partnerList.map(logo => (
          <SwiperSlide key={logo.id}>
            <LogoImg
              src={logo.photo}
              alt=''
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

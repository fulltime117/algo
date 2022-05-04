import styled from 'styled-components'
export const Container = styled.div`
  padding: 50px 20px;
  overflow: hidden;
  width: 100%;
  display: inline-block;
  position: relative;

  .nftSwiper {
    max-width: 1600px;
  }
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: transparent;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: height 0.2s;
    border-top: 1px inset #ffffff;

  }

  @media (min-width: 768px) {
    padding: 3vw;
    overflow: auto;
    margin: 50px 0 70px;

    .swiper-wrapper {
      align-items: flex-end;
      height: 42.2vw;
    }

    .nftSwiper {
      .swiper-slide-next {
        img {
          height: 42vw;
          width: 110%;
          transform: translateX(-4%);
        }
      }
    }
  }

  @media (min-width: 1400px) {
    .swiper-wrapper {
      height: 38vw;
    }

    .nftSwiper {
      .swiper-slide img {
        border-top-right-radius: 2px;
        border-top-left-radius: 2px;
        height: 35vw;
        width: 100%;
        transform: translateX(0);
      }

      .swiper-slide-next {
        img {
          height: 36.5vw;
        }
      }
    }
  }
`
export const NftItem = styled.div`
`
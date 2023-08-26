import { memo } from 'react'
// Slick js
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './style.module.scss'
// MUI Icons
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'

function Carousel({ slides }) {
  const settings = {
    className: 'slider variable-width',
    dots: true,
    infinite: false,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Slider {...settings}>
      {slides?.map((slide) => (
        <div key={slide?.id} className={styles.slide}>
          {slide.render()}
        </div>
      ))}
    </Slider>
  )
}

function SampleNextArrow({ onClick }) {
  return (
    <div className={styles.slideNextBtn} onClick={onClick}>
      <ArrowForwardIosRoundedIcon fontSize="inherit" />
    </div>
  )
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className={styles.slidePrevBtn} onClick={onClick}>
      <ArrowBackIosRoundedIcon fontSize='inherit' />
    </div>
  )
}


export default memo(Carousel)

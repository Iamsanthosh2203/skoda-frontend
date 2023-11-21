import React from 'react'
import { Carousel } from 'react-bootstrap'
import image1 from '../assets/images/image (17).jpg'
import image111 from '../assets/images/image (10).jpg'
import image121 from '../assets/images/image (6).jpg'

function MyCarousel() {
  return (
    <div>
      <Carousel data-bs-theme="dark" style={{minWidth:'105%',zIndex:'-1'}}>
      <Carousel.Item>
      <img style={{ maxWidth: '70vw', minWidth: '105%' }} src={image1} />
      </Carousel.Item>
      <Carousel.Item>
      <img style={{ maxWidth: '70vw', minWidth: '105%' }} src={image111} />
      </Carousel.Item>
      <Carousel.Item>
      <img style={{ maxWidth: '70vw', minWidth: '105%' }} src={image121} />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default MyCarousel

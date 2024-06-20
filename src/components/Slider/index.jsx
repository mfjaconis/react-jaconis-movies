import { useNavigate } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'

import Card from '../Card'
import { Container, Button } from './styles'

function Slider({ info, title }) {
  const navigate = useNavigate()

  return (
    <>
      <Container>
        <h2>{title}</h2>
        <Swiper
          grabCursor
          spaceBetween={10}
          slidesPerView={'auto'}
          className="swiper-container "
        >
          {info.map((item, index) => (
            <SwiperSlide key={index}>
              <Button onClick={() => navigate(`/detalhe/${item.id}`)}>
                <Card item={item} />
              </Button>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  )
}

export default Slider

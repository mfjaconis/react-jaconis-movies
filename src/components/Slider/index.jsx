import { useNavigate } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'

import Card from '../Card'
import { Container, Button } from './styles'

function Slider({ info, title, isPeople }) {
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
              <Button
                onClick={() =>
                  isPeople
                    ? navigate(`/detalhe/${item.id}/people`)
                    : navigate(`/detalhe/${item.id}`)
                }
              >
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

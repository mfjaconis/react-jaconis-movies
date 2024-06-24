import React, { useState, useEffect } from 'react'

import Slider from '../../components/Slider'
import {
  seriesAiringToday,
  seriesOnTheAir,
  seriesMostPopular,
  seriesTopRated
} from '../../utils/getData'
import { Container } from './styles'

function Series({ info }) {
  const [airingToday, setAiringToday] = useState([])
  const [onTheAir, setOnTheAir] = useState([])
  const [mostPopular, setMostPopular] = useState([])
  const [topRated, setTopRated] = useState([])

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        seriesAiringToday(),
        seriesOnTheAir(),
        seriesMostPopular(),
        seriesTopRated()
      ])
        .then(([airing, air, popular, rated]) => {
          setAiringToday(airing)
          setOnTheAir(air)
          setMostPopular(popular)
          setTopRated(rated)
        })
        .catch((error) => console.log(error))
    }
    getAllData()
  }, [])

  return (
    <Container>
      {airingToday && (
        <Slider info={airingToday} title={'Exibida hoje na TV'} />
      )}
      {onTheAir && <Slider info={onTheAir} title={'No ar '} />}
      {mostPopular && <Slider info={mostPopular} title={'Populares '} />}
      {topRated && <Slider info={topRated} title={'Mais votadas '} />}
    </Container>
  )
}

export default Series

import React, { useState, useEffect } from 'react'

import Slider from '../../components/Slider'
import {
  moviesInTheater,
  moviesPopular,
  topMoviesRated,
  moviesShortly
} from '../../utils/getData'

function Movies({ info }) {
  const [moviesTheater, setMoviesTheater] = useState([])
  const [popular, setPopular] = useState([])
  const [topRated, setTopRated] = useState([])
  const [shortly, setShortly] = useState([])

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        moviesShortly(),
        moviesInTheater(),
        moviesPopular(),
        topMoviesRated()
      ])
        .then(([setShortlyMovies, theater, rated, allPopular]) => {
          setShortly(setShortlyMovies)
          setPopular(allPopular)
          setMoviesTheater(theater)
          setTopRated(rated)
        })
        .catch((error) => console.log(error))
    }
    getAllData()
  }, [])

  return (
    <div>
      {moviesTheater && (
        <Slider info={moviesTheater} title={'Atualmente nos cinemas'} />
      )}
      {popular && <Slider info={popular} title={'Populares'} />}
      {topRated && <Slider info={topRated} title={'Filmes mais votados'} />}
      {shortly && <Slider info={shortly} title={'Lançamentos em breve '} />}
    </div>
  )
}

export default Movies

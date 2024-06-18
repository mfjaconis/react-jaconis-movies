import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  getMovieCredits,
  getMovieSimilar,
  getMovieVideos,
  getMoviesById
} from '../../utils/getData'
import { Container } from './styles'

function Detail() {
  const { id } = useParams()
  const [movie, setMovie] = useState()
  const [movieVideos, setMovieVideos] = useState()
  const [movieCredit, setMovieCredit] = useState()
  const [movieSimilar, setMovieSimilar] = useState()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMoviesById(id),
        getMovieVideos(id),
        getMovieCredits(id),
        getMovieSimilar(id)
      ])
        .then(([movie, videos, credits, popularSeries, similar]) => {
          console.log({ movie, videos, credits, popularSeries, similar })
          setMovie(movie)
          setMovieVideos(videos)
          setMovieCredit(credits)
          setMovieSimilar(similar)
        })
        .catch((error) => console.error(error))
    }

    getAllData()
  }, [])
  return (
    <>
      <Container></Container>
    </>
  )
}

export default Detail

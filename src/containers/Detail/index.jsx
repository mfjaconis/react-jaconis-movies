import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Credits from '../../components/Credits'
import SpanGenres from '../../components/SpanGenres'
import {
  getMovieCredits,
  getMovieSimilar,
  getMovieVideos,
  getMoviesById
} from '../../utils/getData'
import { getImages } from './../../utils/getImages'
import { Container, Background, Cover, Info } from './styles'

function Detail() {
  const { id } = useParams()
  const [movie, setMovie] = useState()
  const [movieVideos, setMovieVideos] = useState()
  const [movieCredits, setMovieCredit] = useState()
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
      {movie && (
        <>
          <Background $image={getImages(movie.backdrop_path)} />
          <Container>
            <Cover>
              <img src={getImages(movie.poster_path)} />
            </Cover>
            <Info>
              <h2>{movie.title}</h2>
              <SpanGenres genres={movie.genres} />
              <p>{movie.overview}</p>
              <Credits credits={movieCredits} />
            </Info>
          </Container>
        </>
      )}
    </>
  )
}

export default Detail

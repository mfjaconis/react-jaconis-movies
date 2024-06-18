import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  getMovieCredits,
  getMovieSimilar,
  getMovieVideos,
  getMoviesById
} from '../../utils/getData'
import { getImages } from './../../utils/getImages'
import { Container, Background, Cover } from './styles'

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
      {movie && (
        <>
          <Background $image={getImages(movie.backdrop_path)} />
          <Container>
            <Cover>
              <img src={getImages(movie.poster_path)} />
            </Cover>
            <div>Detalhess</div>
          </Container>
        </>
      )}
    </>
  )
}

export default Detail

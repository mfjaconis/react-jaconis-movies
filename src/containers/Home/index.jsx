import { useState, useEffect } from 'react'

import Button from '../../components/Button'
import api from '../../services/api'
import { Background, Info, Poster, Container, ContainerButton } from './styles'

function Home() {
  const [movie, setMovie] = useState()
  const [topMovies, setTopMovies] = useState()

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results }
      } = await api.get('/movie/popular')

      setMovie(results[0])
    }

    getMovies()
  }, [])

  async function getMovies() {
    const {
      data: { results }
    } = await api.get('/movie/top_rated')

    // setTopMovies(results[0])
    console.log(results)
  }

  getMovies()

  return (
    <>
      {movie && (
        <Background
          img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        >
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButton>
                <Button red>Assista Agora</Button>
                <Button>Assista o Trailer</Button>
              </ContainerButton>
            </Info>
            <Poster>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt="capa do filme"
              />
            </Poster>
          </Container>
        </Background>
      )}
    </>
  )
}

export default Home

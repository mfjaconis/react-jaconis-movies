import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getMovieVideos, getInfoPopular } from '../../utils/getData'
import { getImages } from './../../utils/getImages'
import { Container, Background, Cover, Info } from './styles'

function DetailPeople({ item }) {
  const { id } = useParams()
  const [movie, setMovie] = useState()
  const [infoPopular, setInfoPopular] = useState()

  useEffect(() => {
    async function getAllData() {
      Promise.all([getMovieVideos(id), getInfoPopular(id)])
        .then(([movie, people, top]) => {
          setMovie(movie)
          setInfoPopular(people)
        })
        .catch((error) => console.error(error))
    }

    getAllData()
  })
  return (
    <>
      {movie && (
        <>
          <Background $image={getImages(infoPopular.profile_path)} />
          <Container>
            <Cover>
              <img src={getImages(infoPopular.profile_path)} />
            </Cover>
            <Info>
              <h2>{infoPopular.name}</h2>
              <p>{infoPopular.biography}</p>
            </Info>
          </Container>
        </>
      )}
    </>
  )
}

export default DetailPeople

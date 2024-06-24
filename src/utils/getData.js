import api from '../services/api'

export async function getMovies() {
  const {
    data: { results }
  } = await api.get('/movie/popular')

  return results[0]
}

export async function moviesPopular() {
  const {
    data: { results }
  } = await api.get('/movie/popular')

  return results
}

export async function moviesInTheater() {
  const {
    data: { results }
  } = await api.get('/movie/now_playing')

  return results
}

export async function seriesAiringToday() {
  const {
    data: { results }
  } = await api.get('/tv/airing_today')

  return results
}

export async function seriesOnTheAir() {
  const {
    data: { results }
  } = await api.get('/tv/on_the_air')

  return results
}

export async function seriesMostPopular() {
  const {
    data: { results }
  } = await api.get('/tv/popular')

  return results
}

export async function seriesTopRated() {
  const {
    data: { results }
  } = await api.get('/movie/top_rated')

  return results
}

export async function topMoviesRated() {
  const {
    data: { results }
  } = await api.get('/movie/top_rated')

  return results
}

export async function moviesShortly() {
  const {
    data: { results }
  } = await api.get('/movie/upcoming')

  return results
}

export async function getTopMovies() {
  const {
    data: { results }
  } = await api.get('/movie/top_rated')

  return results
}

export async function getTopSeries() {
  const {
    data: { results }
  } = await api.get('/tv/top_rated')

  return results
}

export async function getPopularSeries() {
  const {
    data: { results }
  } = await api.get('/tv/popular')

  return results
}

export async function getTopPeople() {
  const {
    data: { results }
  } = await api.get('/person/popular')

  return results
}

export async function getMovieVideos(movieId) {
  const {
    data: { results }
  } = await api.get(`/movie/${movieId}/videos`)

  return results
}

export async function getMovieCredits(movieId) {
  const {
    data: { cast }
  } = await api.get(`/movie/${movieId}/credits`)

  return cast
}

export async function getMovieSimilar(movieId) {
  const {
    data: { results }
  } = await api.get(`/movie/${movieId}/similar`)

  return results
}

export async function getMoviesById(movieId) {
  const { data } = await api.get(`/movie/${movieId}`)

  return data
}

export async function getInfoPopular(movieId) {
  const { data } = await api.get(`/person/${movieId}`)

  return data
}

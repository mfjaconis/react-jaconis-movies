import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '30d54230c7b4c3ccc718d83047ab8beb',
    adult: 'include_adult=false',
    language: 'pt-BR',
    page: 1
  }
})

export default api

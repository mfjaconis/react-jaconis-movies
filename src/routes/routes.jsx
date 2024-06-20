import { Route, Routes } from 'react-router-dom'

import Detail from '../containers/Detail'
import DetailPeople from '../containers/DetailPeople'
import DefaultLayout from '../layout/DefaultLayout'
import Home from './../containers/Home'
import Movies from './../containers/Movies'
import Series from './../containers/Series'

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/detalhe/:id" element={<Detail />} />
        <Route path="/detalhe/:id/people" element={<DetailPeople />} />
      </Route>
    </Routes>
  )
}

export default Router

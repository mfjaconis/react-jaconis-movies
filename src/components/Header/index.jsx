import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Logo from '../../assets/logo_jaconis_movies.png'
import { Container, Menu, Li } from './styles'

function Header() {
  const [changeBackground, setChangeBrackground] = useState(false)

  const { pathname } = useLocation()

  window.onscroll = () => {
    if (window.pageYOffset > 150) {
      setChangeBrackground(true)
    } else {
      setChangeBrackground(false)
    }
  }

  return (
    <>
      <Container $changeBackground={changeBackground}>
        <Link to="/">
          <img src={Logo} alt="logo-jaconis-movies" />
        </Link>

        <Menu>
          <Li $isActive={pathname === '/'}>
            <Link to="/">Home</Link>
          </Li>
          <Li $isActive={pathname.includes('filmes')}>
            <Link to="/filmes">Filmes</Link>
          </Li>
          <Li $isActive={pathname.includes('series')}>
            <Link to="/series">Series</Link>
          </Li>
        </Menu>
      </Container>
    </>
  )
}

export default Header

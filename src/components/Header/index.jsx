import { Link, useLocation } from 'react-router-dom'

import Logo from '../../assets/logo_jaconis_movies.png'
import { Container, Menu, Li } from './styles'

function Header() {
  const { pathname } = useLocation()

  return (
    <Container>
      <img src={Logo} alt="logo-jaconis-movies" />
      <nav>
        <Menu>
          <Li isActive={pathname === '/'}>
            <Link to="/">Home</Link>
          </Li>
          <Li isActive={pathname.includes('filmes')}>
            <Link to="/filmes">Filmes</Link>
          </Li>
          <Li isActive={pathname.includes('series')}>
            <Link to="/series">Series</Link>
          </Li>
        </Menu>
      </nav>
    </Container>
  )
}

export default Header

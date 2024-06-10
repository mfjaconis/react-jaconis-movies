import Logo from '../../assets/logo_jaconis_movies.png'

function Header() {
  return (
    <div>
      <img src={Logo} alt="logo-jaconis-movies" />
      <nav>
        <ul>
          <li>Header</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header

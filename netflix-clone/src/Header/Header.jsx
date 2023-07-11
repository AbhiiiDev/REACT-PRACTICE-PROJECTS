import { Link } from "react-router-dom"
import Logo from '../../src/logo.png'
import './Header.scss'
import { ImSearch } from "react-icons/im"


function Header() {

  return (
    <>
  <nav className="header">
    <img src={Logo} alt="logo"/>
    <div>

    <Link to='/tvshows'> Tv Shows </Link>

    <Link to='/Movies'> Movies </Link> 
    <Link to='/Recently Added'>  Recently Added</Link>
    <Link to='/My List'> My List </Link>
    </div>
<ImSearch/>
  </nav>
       
    </>
  )
}

export default Header

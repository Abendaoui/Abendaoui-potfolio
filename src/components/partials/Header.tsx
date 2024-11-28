import Logo from './Logo'
import NavBar from './NavBar'

const Header = () => {
  return (
    <header className='w-full md:flex justify-between items-center mb-10 hidden'>
      <Logo />
      <NavBar />
    </header>
  )
}

export default Header

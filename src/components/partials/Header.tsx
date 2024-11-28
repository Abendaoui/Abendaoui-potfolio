import Logo from './Logo'
import NavBar from './NavBar'

const Header = () => {
  return (
    <header className='w-full flex justify-between items-center mb-10'>
      <Logo />
      <NavBar />
    </header>
  )
}

export default Header

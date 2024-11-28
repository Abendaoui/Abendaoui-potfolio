import NavLink from './NavLink'
import ResumeDownloadButton from './ResumeDownloadButton'

const navBarLinks = [
  {
    id: 1,
    link: '#tech',
    label: 'Tech',
  },
  {
    id: 2,
    link: '#experience',
    label: 'Experience',
  },
  {
    id: 3,
    link: '#projects',
    label: 'Projects',
  },
  {
    id: 4,
    link: '#contact',
    label: 'Contact',
  },
]
const NavBar = () => {
  return (
    <nav className='flex items-center'>
      {navBarLinks.map((navLink) => {
        return (
          <NavLink
            key={navLink.id}
            link={navLink.link}
            label={navLink.label}
            id={navLink.id}
          />
        )
      })}
    <ResumeDownloadButton/>
    </nav>
  )
}

export default NavBar

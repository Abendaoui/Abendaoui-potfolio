const NavLink = ({ id, link, label }) => {
  return (
    <a href={link} className='nav-link'>
      <span className='text-indigo-600'>{`${id}. `}</span>
      {label}
    </a>
  )
}

export default NavLink

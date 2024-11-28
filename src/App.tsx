import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ThemeToggle from './components/ThemeToggle'
import HeroLanding from './components/HeroLanding'
import Tech from './components/About'

function App() {
  return (
    <div className='bg-white dark:bg-gray-900 min-h-screen'>
      <HeroLanding />
      <Tech />
      <Experience />
      <Projects />
      <Contact />
      <ThemeToggle />
    </div>
  )
}

export default App

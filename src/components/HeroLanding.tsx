import { motion } from 'framer-motion'
import Header from './partials/Header'
const HeroLanding = () => {
  return (
    <section className='min-h-screen relative overflow-hidden'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='flex flex-col justify-center max-w-7xl mx-auto pt-10 mb-20'
        >
          <Header />
          <main className='mt-20 dark:bg-gray-900'>
            <p className='text-highlight mb-4'>Hi, I am</p>
            <h1 className='text-6xl font-bold dark:text-white mb-4  '>
              Bendaoui Adil.
            </h1>
            <h2 className='text-5xl font-bold dark:text-gray-400 mb-4'>
              I build things for the web.
            </h2>
            <p className='text-gray-600 dark:text-gray-300 mb-8 max-w-lg'>
              I'm a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I'm focused
              on building accessible.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href='#contact'
              className='bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors dark:bg-transparent dark:border dark:border-indigo-400'
            >
              Get in Touch
            </motion.a>

            <div
              className='mt-20 mx-auto border border-indigo-400 rounded-full p-2 size-10 flex items-center justify-center
            animate-bounce dark:bg-transparent bg-indigo-600 text-white
            '
            >
              <a href='#tech'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3'
                  />
                </svg>
              </a>
            </div>
          </main>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroLanding

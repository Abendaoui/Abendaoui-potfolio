import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const contactLinks = [
  {
    id: 1,
    icon: <Github size={24} />,
    link: 'https://github.com/abendaoui',
  },
  {
    id: 2,
    icon: <Linkedin size={24} />,
    link: 'https://linkedin.com',
  },
  {
    id: 3,
    icon: <Mail size={24} />,
    link: 'mailto:bendaouiadil@gmail.com',
  },
]

export default function Hero() {
  return (
    <section className='min-h-screen flex flex-col justify-center relative overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10' />
      <div className='container mx-auto px-4 py-16 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center'
        >
          <h1 className='text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6'>
            Junior Web Developer
          </h1>
          <p className='text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto'>
            Building beautiful, responsive, and user-friendly web applications
            with modern technologies.
          </p>
          <div className='flex justify-center gap-4 mb-12'>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href='#contact'
              className='bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors'
            >
              Get in Touch
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href='#projects'
              className='bg-white text-gray-900 px-8 py-3 rounded-lg font-medium border border-gray-200 hover:border-gray-400 transition-colors dark:bg-gray-800 dark:text-white dark:border-gray-700'
            >
              View Projects
            </motion.a>
          </div>
          <div className='flex justify-center gap-6'>
            {contactLinks.map((link) => {
              return (
                <a
                  key={link.id}
                  href={link.link}
                  target='_blank'
                  className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                >
                  {link.icon}
                </a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

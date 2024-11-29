import { Github } from 'lucide-react'

export default function SocialButtons() {
  return (

      <a
        href='https://github.com/Abendaoui'
        target='_blank'
        className='fixed bottom-20 right-6 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all'
      >
        {<Github />}
      </a>
 
  )
}

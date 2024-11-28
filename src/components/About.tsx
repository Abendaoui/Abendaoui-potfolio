import { motion } from 'framer-motion'
import { Code2, Database, Layout, Server } from 'lucide-react'

const skills = [
  {
    category: 'Frontend',
    icon: <Layout className='w-6 h-6' />,
    items: ['JavaScript', 'React','Redux', 'TypeScript', 'Tailwind CSS','Boostrap'],
  },
  {
    category: 'Backend',
    icon: <Server className='w-6 h-6' />,
    items: ['Node.js', 'Express', 'PHP', 'Larvel','REST API'],
  },
  {
    category: 'Database',
    icon: <Database className='w-6 h-6' />,
    items: ['MySQL', 'MongoDB', 'PL/SQL'],
  },
  {
    category: 'Tools',
    icon: <Code2 className='w-6 h-6' />,
    items: ['Git','Github', 'Docker','Postman'],
  },
]

export default function Tech() {
  return (
    <section id='tech' className='py-20 bg-white dark:bg-gray-900'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='max-w-4xl mx-auto'
        >
          <h2 className='text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white'>
            Tech
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='p-6 rounded-lg bg-gray-50 dark:bg-gray-800'
              >
                <div className='flex items-center gap-3 mb-4'>
                  <span className='text-indigo-600 dark:text-indigo-400'>
                    {skill.icon}
                  </span>
                  <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                    {skill.category}
                  </h3>
                </div>
                <div className='flex flex-wrap gap-2'>
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className='px-3 py-1 text-sm bg-white dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300'
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

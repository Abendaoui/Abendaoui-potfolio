import { motion } from 'framer-motion'

import ProjectCard from './partials/ProjectCard'

const projects = [
  {
    title: 'Online Pharmacy',
    description:
      'Real-time task management application with team collaboration features.',
    image:
      'https://images.unsplash.com/photo-1603555501671-8f96b3fce8b5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['React', 'Tailwind CSS', 'Laravel', 'MySQL'],
    github: 'https://github.com/Abendaoui/Pharmacy-Fullstack-Application',
    demo: '',
    isDeployed: false,
  },
  {
    title: 'Book Store',
    description:
      'Real-time task management application with team collaboration features.',
    image:
      'https://images.unsplash.com/photo-1526199119161-4be1e3368d52?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['React', 'Laravel', 'Sanctum', 'Tailwind CSS', 'MySQL'],
    github: 'https://github.com/Abendaoui/bookstore',
    demo: '',
    isDeployed: false,
  },

  {
    title: 'Consommation Dashboard',
    description:
      'Real-time task management application with team collaboration features.',
    image:
      'https://plus.unsplash.com/premium_photo-1678891133915-2a5f0fbc7aaa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['React', 'JWT', 'Node.js', 'Express.js', 'MySQL'],
    github: 'https://github.com/Abendaoui/Consommation-Dashboard',
    demo: '',
    isDeployed: false,
  },
  {
    title: 'Dev Blog',
    description:
      'Real-time task management application with team collaboration features.',
    image:
      'https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['React', 'JWT', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/Abendaoui/CoderJS-Blog',
    demo: '',
    isDeployed: false,
  },
  {
    title: 'Tech Notes App',
    description:
      'A full-featured e-commerce platform built with Next.js, Stripe, and Prisma.',
    image:
      'https://plus.unsplash.com/premium_photo-1685136482569-a59b03025108?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['React', 'Redux', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/Abendaoui/technotes',
    demo: 'https://technotes-jc2r.onrender.com',
    isDeployed: true,
  },
  {
    title: 'Three.js Portfolio',
    description:
      'Real-time task management application with team collaboration features.',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['React', 'Tailwind CSS', 'three.js', 'animation'],
    github: 'https://github.com/Abendaoui/threejs-portfolio',
    demo: '',
    isDeployed: false,
  },
  {
    title: 'Online Comics Store',
    description:
      'Real-time task management application with team collaboration features.',
    image:
      'https://images.unsplash.com/photo-1588497859490-85d1c17db96d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Laravel', 'Tailwind CSS'],
    github: 'https://github.com/Abendaoui',
    demo: '',
    isDeployed: false,
  },
]

export default function Projects() {
  return (
    <section id='projects' className='py-20 bg-white dark:bg-gray-900'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='max-w-6xl mx-auto'
        >
          <h2 className='text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white'>
            Featured Projects
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map((project, index) => {
              return <ProjectCard key={index} project={project} />
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { Tilt } from 'react-tilt'
import { Github, ExternalLink } from 'lucide-react'
const ProjectCard = ({ project }) => {
  return (
    <Tilt
      options={{ max: 45, speed: 450, scale: 1 }}
      className='bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden'
    >
      <div className='relative aspect-video'>
        <img
          src={project.image}
          alt={project.title}
          className='object-cover w-full h-full'
        />
      </div>
      <div className='p-6'>
        <h3 className='text-xl font-semibold mb-2 text-gray-900 dark:text-white'>
          {project.title}
        </h3>
        <p className='text-gray-600 dark:text-gray-300 mb-4'>
          {project.description}
        </p>
        <div className='flex flex-wrap gap-2 mb-4'>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className='px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full'
            >
              {tag}
            </span>
          ))}
        </div>
        <div className='flex gap-4'>
          <a
            href={project.github}
            className='flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
          >
            <Github size={20} />
            <span>Code</span>
          </a>
          {project.isDeployed && (
            <a
              href={project.demo}
              className='flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
            >
              <ExternalLink size={20} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </Tilt>
  )
}

export default ProjectCard

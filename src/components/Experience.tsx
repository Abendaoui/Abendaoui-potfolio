import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Corp",
    date: "2021 - Present",
    description: "Led development of enterprise applications using React, Node.js, and AWS. Implemented CI/CD pipelines and mentored junior developers.",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Inc",
    date: "2019 - 2021",
    description: "Developed and maintained multiple client projects using React, Express, and MongoDB. Improved application performance by 40%.",
  },
  {
    title: "Frontend Developer",
    company: "Web Studio",
    date: "2018 - 2019",
    description: "Created responsive web applications using React and Redux. Collaborated with designers to implement pixel-perfect UIs.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Experience</h2>
          
          <VerticalTimeline lineColor="rgb(99 102 241)">
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element"
                contentStyle={{
                  background: 'rgb(255, 255, 255)',
                  color: '#1f2937',
                  boxShadow: '0 3px 0 rgb(99 102 241)',
                  padding: '2rem',
                }}
                contentArrowStyle={{ borderRight: '7px solid rgb(255, 255, 255)' }}
                date={experience.date}
                iconStyle={{ background: 'rgb(99 102 241)', color: '#fff' }}
                icon={<Briefcase />}
              >
                <h3 className="vertical-timeline-element-title font-bold text-xl">
                  {experience.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-indigo-600 mt-2">
                  {experience.company}
                </h4>
                <p className="text-gray-600 mt-4">
                  {experience.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </motion.div>
      </div>
    </section>
  );
}
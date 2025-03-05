import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store built with React and TypeScript",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Redux"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "Task Management App",
    description: "A beautiful and intuitive task manager with real-time updates",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Firebase", "Tailwind CSS", "React Query"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather application with beautiful visualizations",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "D3.js", "TypeScript", "API Integration"],
    github: "https://github.com",
    live: "https://example.com"
  }
];

export function Projects() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all hover:bg-gray-800/50"
        >
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-700/30 rounded-full text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Github size={20} />
                <span>Code</span>
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
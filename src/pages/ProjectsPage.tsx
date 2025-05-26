import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "stylefolk Streetwear",
    description:
      "A stylish online store for premium streetwear apparel. Explore bold designs, high-quality products, and seamless shopping powered by Printify.",
    image:
      "https://plus.unsplash.com/premium_photo-1721742733156-736e11c918bb?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN0cmVldHdlYXJ8ZW58MHx8MHx8fDA%3D",
    technologies: ["Next.js", "React", "TypeScript", "Printify API"],
    github: "https://github.com/benlaguroun/chichanova",
    live: "https://stylefolk.netlify.app/",
  },
  {
    title: "DentalCare Clinic Management System",
    description:
      "A modern and efficient clinic management system for DentalCare, providing seamless appointment scheduling, patient records management, and doctor-patient communication. Designed with a clean and user-friendly interface.",
    image:
      "https://get.pxhere.com/photo/dentist-dentistry-smile-patient-white-dental-young-female-teeth-clinic-woman-medical-treatment-whitening-care-health-professional-orthodontic-hygiene-equipment-happy-girl-person-healthy-portrait-adult-face-mouth-doctor-clean-background-health-care-visit-tool-clinical-oral-beautiful-perfect-procedure-people-office-caucasian-pretty-fresh-attractive-lifestyle-fun-looking-thinking-smiling-service-glasses-medical-assistant-vision-care-hospital-medical-glove-dental-assistant-medicine-research-child-dental-hygienist-medical-equipment-1446753.jpg",
    technologies: [
      "React",
      "Supabase",
      "Tailwind CSS",
      "React Query",
      "Framer Motion",
    ],
    github: "https://github.com/benlaguroun/dental-care",
    live: "https://dentalben.netlify.app/",
    featured: true,
  },
  {
    title: "POD website",
    description:
      "A full-featured online store built with React and TypeScript. Includes product management, cart functionality, and payment integration.",
    image:
      "https://images.unsplash.com/photo-1592492135673-55966d3b541a?q=80&w=1386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Redux", "Stripe"],
    github: "https://github.com/benlaguroun/PrintCraft",
    live: "https://printcraft.netlify.app/",
    featured: true,
  },

  {
    title: "StreamHub",
    description:
      "A Netflix-style streaming platform where users can explore movies, watch trailers, and enjoy live TV channels with a premium viewing experience.",
    image:
      "https://i.pinimg.com/736x/ae/98/af/ae98af3445fac498e63dded60625644c.jpg",
    technologies: ["React", "TypeScript", "Framer Motion"],
    github: "https://github.com/benlaguroun/StreamHub",
    live: "https://streamben.netlify.app/",
    featured: true,
  },

  {
    title: "French Learning App",
    description:
      "An interactive French learning application designed to help users master vocabulary, grammar, and pronunciation through engaging lessons and quizzes. Built with React, Supabase, and Tailwind CSS for a smooth learning experience.",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
    technologies: [
      "React",
      "JavaScript",
      "Next.js",
      "Supabase",
      "Tailwind CSS",
    ],
    github: "https://github.com/benlaguroun/french-learning-app",
    live: "https://french-learning-pwa.vercel.app/",
  },
];

export function ProjectsPage() {
  return (
    <section className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of my best work, showcasing my skills in frontend
            development and UI/UX design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-colors"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {project.featured && (
                  <div className="absolute top-2 right-2 px-3 py-1 bg-blue-500 rounded-full text-sm">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300"
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
      </div>
    </section>
  );
}

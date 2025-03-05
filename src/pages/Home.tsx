import { motion } from 'framer-motion';
import { Code2, Github, Linkedin, Mail, Sparkles, Terminal, Trophy, Laptop, Palette, Gauge, Blocks } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Skills } from '../components/Skills';
import { Contact } from '../components/Contact';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stats = [
  { icon: Trophy, label: 'Years Experience', value: '5+' },
  { icon: Code2, label: 'Projects Completed', value: '50+' },
  { icon: Github, label: 'Github Repos', value: '30+' },
  { icon: Terminal, label: 'Code Reviews', value: '200+' }
];

const services = [
  {
    icon: Laptop,
    title: 'Web Development',
    description: 'Building responsive and performant web applications using modern frameworks and best practices.',
    technologies: ['React', 'Next.js', 'TypeScript']
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating beautiful and intuitive user interfaces with a focus on user experience and accessibility.',
    technologies: ['Figma', 'Tailwind CSS', 'Framer Motion']
  },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    description: 'Optimizing web applications for speed, SEO, and core web vitals to ensure the best user experience.',
    technologies: ['Lighthouse', 'WebPageTest', 'Analytics']
  },
  {
    icon: Blocks,
    title: 'Architecture Design',
    description: 'Designing scalable and maintainable application architectures with modern development patterns.',
    technologies: ['Redux', 'React Query', 'Testing']
  }
];

export function Home() {
  return (
    <div className="min-h-screen font-outfit">
      {/* Hero Section */}
      <section className="min-h-screen pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-4 py-20 relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="font-space-grotesk text-7xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                Frontend
                <br />
                Engineer
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
                Crafting beautiful, responsive, and user-friendly web experiences with modern technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8 mb-16"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700"
              >
                <Code2 className="text-blue-400" size={24} />
                <span>Clean Code</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700"
              >
                <Terminal className="text-purple-400" size={24} />
                <span>Modern Stack</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700"
              >
                <Sparkles className="text-pink-400" size={24} />
                <span>Best Practices</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center gap-6 mb-20"
            >
              <Link
                to="/projects"
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors text-lg"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors text-lg"
              >
                Get in Touch
              </Link>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700"
                >
                  <stat.icon className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
                  <h3 className="text-3xl font-bold mb-2 font-space-grotesk">{stat.value}</h3>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center gap-6 mb-20"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-4 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-20 bg-gradient-to-b from-gray-900 to-gray-800"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-space-grotesk">
            What I Do
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all group"
              >
                <service.icon className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-semibold mb-4 font-space-grotesk group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700/30 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-20 bg-gradient-to-b from-gray-800 to-gray-900"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-space-grotesk">
            Skills & Expertise
          </h2>
          <Skills />
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-20 bg-gradient-to-b from-gray-900 to-gray-800"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-space-grotesk">
            Let's Connect
          </h2>
          <Contact />
        </div>
      </motion.section>
    </div>
  );
}
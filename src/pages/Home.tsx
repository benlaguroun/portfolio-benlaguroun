import { motion } from "framer-motion";
import {
  Code2,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Terminal,
  Trophy,
  Laptop,
  Palette,
  Gauge,
  Blocks,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Skills } from "../components/Skills";
import { Contact } from "../components/Contact";
import profileImage from "../images/profile.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stats = [
  { icon: Trophy, label: "Years Experience", value: "3+" },
  { icon: Code2, label: "Projects Completed", value: "50+" },
  { icon: Github, label: "Github Repos", value: "30+" },
  { icon: Terminal, label: "Code Reviews", value: "200+" },
];

const services = [
  {
    icon: Laptop,
    title: "Web Development",
    description:
      "Building responsive and performant web applications using modern frameworks and best practices.",
    technologies: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating beautiful and intuitive user interfaces with a focus on user experience and accessibility.",
    technologies: ["Figma", "Tailwind CSS", "Framer Motion"],
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description:
      "Optimizing web applications for speed, SEO, and core web vitals to ensure the best user experience.",
    technologies: ["Lighthouse", "WebPageTest", "Analytics"],
  },
  {
    icon: Blocks,
    title: "Architecture Design",
    description:
      "Designing scalable and maintainable application architectures with modern development patterns.",
    technologies: ["Redux", "React Query", "Testing"],
  },
];

const pricingPlans = [
  {
    name: "Basic",
    price: 999,
    features: ["Custom Design", "Responsive Layout", "Basic SEO Setup"],
  },
  {
    name: "Professional",
    price: 2499,
    features: [
      "Advanced Animations",
      "Performance Optimization",
      "E-commerce Integration",
    ],
    recommended: true,
  },
  {
    name: "Enterprise",
    price: 4999,
    features: ["Custom Features", "API Development", "24/7 Support"],
  },
];

export function Home() {
  return (
    <div className="min-h-screen font-outfit">
      {/* Hero Section */}
      <section className="min-h-screen pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-4 py-20 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-left"
            >
              <motion.h1
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-space-grotesk text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
              >
                Frontend
                <br />
                Engineer
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-400 mb-8"
              >
                I build clean, responsive websites that not only look great but
                also feel easy and intuitive to use—powered by the latest web
                technologies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4 mb-8"
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex gap-6"
              >
                <a
                  href="https://github.com/benlaguroun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamed-benlaguroun/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="benlaguroun@gmail.com"
                  className="p-4 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <div className="relative z-10 flex flex-col items-center">
                {/* Circular Image with Neon Animation & Dual-Color Shadow */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative w-52 h-52 rounded-full border-4 border-gray-700 overflow-hidden"
                >
                  {/* Glowing Shadow Behind Image */}
                  <div className="absolute w-60 h-60 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-75 blur-3xl"></div>

                  {/* Image */}
                  <img
                    src={profileImage} // Use the imported image
                    alt="Your Profile"
                    className="w-500px h-500px object-cover rounded-full relative"
                  />

                  {/* Neon Border Animation */}
                  <div className="absolute inset-0 animate-pulse border-[-1px] border-transparent rounded-full before:absolute before:inset-0 before:rounded-full before:border-[10px] before:border-blue-500 before:animate-spin-slow"></div>
                </motion.div>

                {/* Skill Badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="mt-6 flex gap-4 backdrop-blur-md bg-gray-800/50 p-4 rounded-2xl border border-gray-700/50"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 text-blue-400"
                  >
                    <Code2 size={24} />
                    <span>Clean Code</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 text-purple-400"
                  >
                    <Terminal size={24} />
                    <span>Modern Stack</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 text-pink-400"
                  >
                    <Sparkles size={24} />
                    <span>Best Practices</span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
                className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700"
              >
                <stat.icon className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
                <h3 className="text-3xl font-bold mb-2 font-space-grotesk text-center">
                  {stat.value}
                </h3>
                <p className="text-gray-400 text-center">{stat.label}</p>
              </motion.div>
            ))}
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
                <p className="text-gray-400 mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
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

      {/* Pricing Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-20 bg-gradient-to-b from-gray-900 to-gray-800"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-space-grotesk">
            Pricing Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border ${
                  plan.recommended ? "border-blue-500/50" : "border-gray-700/50"
                } relative`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                    Recommended
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-4">
                    <span className="text-2xl">$</span>
                    {plan.price}
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check
                        className="text-blue-400 flex-shrink-0"
                        size={20}
                      />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/pricing"
                  className={`block text-center py-3 px-6 rounded-lg transition-colors ${
                    plan.recommended
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/pricing"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 px-8 rounded-lg transition-colors"
            >
              View All Plans
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-20 bg-gradient-to-b from-gray-800 to-gray-900"
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

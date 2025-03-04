import { motion } from "framer-motion";
import { Code2, Sparkles, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <section className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 py-20">
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
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Frontend Engineer
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Crafting beautiful, responsive, and user-friendly web experiences
              with modern technologies.
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
            className="flex justify-center gap-6"
          >
            <Link
              to="/projects"
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>

          {/* <motion.img
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
            alt="Coding workspace"
            className="mt-20 rounded-2xl shadow-2xl mx-auto border border-gray-700"
          /> */}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Code2, Sparkles, Terminal, Globe, Rocket, Layers } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-16">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Frontend Engineer<span className="text-blue-600">.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Crafting beautiful, responsive, and user-friendly web experiences
            with modern technologies.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center gap-6 mb-12"
          >
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
              View My Work
            </button>
            <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
              Contact Me
            </button>
          </motion.div>
          {/* Skills Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 text-blue-600"
            >
              <Code2 size={28} />
              <span>Clean Code</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 text-blue-600"
            >
              <Terminal size={28} />
              <span>Modern Stack</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 text-blue-600"
            >
              <Sparkles size={28} />
              <span>Best Practices</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 text-blue-600"
            >
              <Globe size={28} />
              <span>Web Performance</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 text-blue-600"
            >
              <Rocket size={28} />
              <span>Scalable Apps</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 text-blue-600"
            >
              <Layers size={28} />
              <span>Component-Driven</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

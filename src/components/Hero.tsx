import { motion } from 'framer-motion';
import { Code2, Sparkles, Terminal } from 'lucide-react';

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
            Frontend Engineer
            <span className="text-blue-600">.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Crafting beautiful, responsive, and user-friendly web experiences with modern technologies.
          </p>
          <div className="flex justify-center gap-8 mb-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-blue-600"
            >
              <Code2 size={24} />
              <span>Clean Code</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-blue-600"
            >
              <Terminal size={24} />
              <span>Modern Stack</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-blue-600"
            >
              <Sparkles size={24} />
              <span>Best Practices</span>
            </motion.div>
          </div>
          <motion.img
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
            alt="Coding workspace"
            className="rounded-lg shadow-2xl mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
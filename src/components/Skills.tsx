import { motion } from 'framer-motion';

const skills = {
  "Frontend": [
    "React", "TypeScript", "JavaScript", "HTML5", "CSS3",
    "Tailwind CSS", "Redux", "Next.js"
  ],
  "Tools & Others": [
    "Git", "Webpack", "Vite", "Jest", "React Testing Library",
    "CI/CD", "Responsive Design", "Performance Optimization"
  ]
};

export function Skills() {
  return (
    <div className="grid md:grid-cols-2 gap-12">
      {Object.entries(skills).map(([category, items], categoryIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-white font-space-grotesk">{category}</h3>
          <div className="grid grid-cols-2 gap-4">
            {items.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-blue-500/50 transition-all hover:bg-gray-800/50 text-gray-300"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
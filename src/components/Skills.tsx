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
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-6">{category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {items.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
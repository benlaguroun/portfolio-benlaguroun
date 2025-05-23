import { motion } from "framer-motion";
import { Award, BookOpen, Coffee, Heart } from "lucide-react";

export function About() {
  const experiences = [
    {
      year: "2023 - Present",
      company: "Freelance / Personal Projects",
      role: "Full-Stack Developer",
      description:
        "Building scalable web applications using React, Node.js, and Supabase, with a strong focus on frontend development.",
    },
    {
      year: "2022 - 2023",
      company: "University / Internships",
      role: "Frontend Developer",
      description:
        "Developed interactive and responsive user interfaces using React, improving user experience and accessibility.",
    },
    {
      year: "2021 - 2022",
      company: "Self-Learning & Projects",
      role: "Junior Developer",
      description:
        "Gained hands-on experience in web development by working on projects using HTML, CSS, JavaScript, and React.",
    },
  ];

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
            About Me
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate about creating beautiful web experiences and solving
            complex problems through clean, efficient code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold mb-6">My Journey</h2>
            <p className="text-gray-400 leading-relaxed">
              With over 3 years of experience in frontend development, I've had
              the opportunity to work on diverse projects ranging from
              e-commerce platforms to complex web applications. I'm passionate
              about creating intuitive user interfaces and writing clean,
              maintainable code.
            </p>
            <div className="flex gap-8 mt-8">
              <div className="flex items-center gap-2">
                <Coffee className="text-blue-400" />
                <span>1000+ Commits</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="text-purple-400" />
                <span>50+ Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="text-pink-400" />
                <span>Always Learning</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=800&q=80"
              alt="Developer workspace"
              className="rounded-2xl shadow-xl border border-gray-700"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Experience
          </h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                className="flex gap-8 items-start"
              >
                <div className="flex-shrink-0 w-32 text-gray-400">
                  {exp.year}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{exp.company}</h3>
                  <div className="text-blue-400 mb-2">{exp.role}</div>
                  <p className="text-gray-400">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

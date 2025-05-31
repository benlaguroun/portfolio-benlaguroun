import { motion } from "framer-motion";
import { Award, BookOpen, Coffee, Heart } from "lucide-react";

export function About() {
  const experiences = [
    {
      year: "2024 - Present",
      company: "Freelance / Personal Projects",
      role: "Full-Stack Developer (Frontend Focused)",
      description:
        "Leading the development of full-stack web applications with a strong emphasis on modern frontend architecture. Built and deployed responsive, high-performance user interfaces using React, Next.js, and Tailwind CSS. Integrated backend services using Node.js, Supabase, and RESTful APIs, while focusing on code reusability, accessibility, and UX design best practices. Also implemented authentication, real-time features, and dashboard analytics for client and personal projects. Collaborated with designers and stakeholders in agile workflows, continually iterating based on user feedback and performance metrics.",
    },

    {
      year: "2023 - 2024",
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
              Over the past 3+ years, I’ve honed my skills as a frontend
              software engineer by contributing to a wide range of dynamic and
              high-impact web projects. My experience spans building responsive
              e-commerce platforms, data-driven dashboards, and scalable
              single-page applications using modern technologies like React,
              Next.js, and TypeScript.
              <br />
              <br />
              Throughout my career, I’ve developed a deep appreciation for
              user-centric design and performance optimization. I take pride in
              translating complex requirements into elegant, intuitive
              interfaces that enhance the user experience while maintaining
              clean, modular, and maintainable codebases.
              <br />
              <br />
              I'm highly collaborative and thrive in agile environments where
              communication and continuous learning are key. Whether working
              closely with designers to perfect UI/UX flows or partnering with
              backend teams to ensure seamless integration, I strive to deliver
              robust, accessible, and performant frontend solutions that drive
              real business value.
            </p>

            <div className="flex gap-8 mt-8">
              <div className="flex items-center gap-2">
                <Coffee className="text-blue-400" />
                <span>2000+ Commits</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="text-purple-400" />
                <span>60+ Projects</span>
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

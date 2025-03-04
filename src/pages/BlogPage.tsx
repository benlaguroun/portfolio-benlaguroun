import { motion } from 'framer-motion';
import { Calendar, Clock, User } from 'lucide-react';

const blogPosts = [
  {
    title: "The Future of Frontend Development",
    excerpt: "Exploring upcoming trends and technologies that will shape the future of web development.",
    date: "March 15, 2024",
    readTime: "5 min read",
    author: "John Doe",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Mastering React Performance",
    excerpt: "Advanced techniques and best practices for optimizing React applications.",
    date: "March 10, 2024",
    readTime: "8 min read",
    author: "John Doe",
    image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "The Art of Clean Code",
    excerpt: "Writing maintainable and scalable code that your future self will thank you for.",
    date: "March 5, 2024",
    readTime: "6 min read",
    author: "John Doe",
    image: "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?auto=format&fit=crop&w=800&q=80"
  }
];

export function BlogPage() {
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
            Blog
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about frontend development and web technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-colors"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <div className="grid md:grid-cols-2 gap-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
          <h3 className="text-2xl font-semibold mb-6 text-white font-space-grotesk">
            Contact Information
          </h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Mail className="text-blue-400" size={24} />
              </div>
              <div>
                <h4 className="font-medium text-gray-300">Email</h4>
                <p className="text-gray-400">benlaguroun@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-500/10 rounded-lg">
                <Phone className="text-purple-400" size={24} />
              </div>
              <div>
                <h4 className="font-medium text-gray-300">Phone</h4>
                <p className="text-gray-400">+212 (645) 53-94-38</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-pink-500/10 rounded-lg">
                <MapPin className="text-pink-400" size={24} />
              </div>
              <div>
                <h4 className="font-medium text-gray-300">Location</h4>
                <p className="text-gray-400">Chichaoua-Marrakech, Morocco</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 space-y-6"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
            placeholder="Tell me about your project..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition-colors"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  );
}

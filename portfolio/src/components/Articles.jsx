// src/components/Articles.jsx
import { articles } from "../data/articles";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Articles() {
  return (
    <section id="articles" className="px-6 md:px-12 py-24 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Artigos & Publicações</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full"></div>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {articles.map((art, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group p-6 rounded-xl glass border border-gray-700/50 hover:border-sky-500/50 transition-all duration-300 hover-card overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 to-cyan-500/0 group-hover:from-sky-500/5 group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none"></div>

              <div className="relative z-10">
                {/* Title and Event */}
                <h3 className="text-2xl font-semibold text-white group-hover:text-sky-300 transition-colors mb-2">
                  {art.title}
                </h3>
                <p className="text-sky-400 text-sm font-medium mb-4">{art.event}</p>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {art.description}
                </p>

                {/* Link */}
                <a
                  href={art.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors font-semibold text-sm group/link"
                >
                  Ler artigo
                  <svg
                    className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

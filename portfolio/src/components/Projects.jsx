import { motion } from "framer-motion";
import { projects } from "../data/projects";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  return (
    <section id="projects" className="px-6 md:px-12 py-24 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Projetos Destacados</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full"></div>
        </motion.div>

        {/* Grid of Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative p-6 rounded-xl glass border border-gray-700/50 hover:border-sky-500/50 transition-all duration-300 hover-card overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 to-cyan-500/0 group-hover:from-sky-500/5 group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none"></div>

              <div className="relative z-10">
                {/* Title and Category */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-white group-hover:text-sky-300 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-sky-400 text-sm mt-1 font-medium">
                      {proj.category}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {proj.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {proj.stack.map((tech, t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 bg-sky-500/10 text-sky-300 rounded-full border border-sky-500/30 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors font-semibold text-sm group/link"
                >
                  Ver no GitHub
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
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

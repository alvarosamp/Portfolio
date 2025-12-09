// src/components/Awards.jsx
import { awards } from "../data/awards";
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

export default function Awards() {
  return (
    <section id="awards" className="px-6 md:px-12 py-24 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Premiações & Reconhecimentos</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full"></div>
        </motion.div>

        {/* Awards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {awards.map((award, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group p-6 rounded-xl glass border border-gray-700/50 hover:border-amber-500/50 transition-all duration-300 hover-card overflow-hidden"
            >
              {/* Background gradient on hover - Golden tone for awards */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/5 group-hover:to-orange-500/5 transition-all duration-300 pointer-events-none"></div>

              <div className="relative z-10">
                {/* Award Icon */}
                <div className="inline-block mb-4 p-3 bg-amber-500/20 rounded-lg">
                  <span className="text-2xl">🏆</span>
                </div>

                {/* Title and Year */}
                <h3 className="text-2xl font-semibold text-white group-hover:text-amber-300 transition-colors mb-2">
                  {award.title}
                </h3>
                <p className="text-amber-400 text-sm font-bold mb-3">{award.year}</p>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {award.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// src/components/Skills.jsx
import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Backend & ML",
    skills: ["Python", "FastAPI", "TensorFlow", "PyTorch"],
  },
  {
    category: "DevOps & Infrastructure",
    skills: ["Docker", "CI/CD", "Airflow", "PostgreSQL"],
  },
  {
    category: "Data & MLOps",
    skills: ["Machine Learning", "MLOps", "Data Engineering", "Git/GitHub"],
  },
];

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
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 py-24 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Skills & Tecnologias</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full"></div>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-gray-200 mb-4">
                {category.category}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(14, 165, 233, 0.2)" }}
                    className="px-5 py-3 bg-gradient-to-br from-slate-800 to-slate-900 border border-sky-500/30 rounded-lg text-gray-200 hover:border-sky-400 transition-all cursor-default font-medium text-sm"
                  >
                    <span className="inline-block mr-2">⚡</span>
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// src/components/About.jsx
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function About() {
  return (
    <section id="about" className="px-6 md:px-12 py-24 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Sobre mim</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full"></div>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 leading-relaxed p-6 rounded-xl glass hover-card"
          >
            Sou engenheiro de IA & MLOps com foco em levar modelos de Machine Learning para produção usando pipelines robustos, testes automatizados, deploy eficiente e monitoramento contínuo. Já trabalhei com APIs de predição, detecção de data drift, automação de re-treino e integração de IA em produtos reais.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 leading-relaxed p-6 rounded-xl glass hover-card"
          >
            Minha experiência cobre desde engenharia de dados, modelagem, experimentação e infraestrutura, até práticas modernas de DevOps e MLOps. Meu foco é reduzir o atrito entre o protótipo e a produção, garantindo estabilidade, rastreabilidade e performance.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10"
          >
            {[
              { label: "Projetos Completos", value: "15+" },
              { label: "Modelos em Produção", value: "8+" },
              { label: "Anos de Experiência", value: "5+" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl glass text-center hover-card"
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

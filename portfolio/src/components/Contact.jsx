import { motion } from "framer-motion";
import { useState } from "react";

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

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const contactMethods = [
    {
      label: "Email",
      value: "alvaro@email.com",
      icon: "✉️",
      href: "mailto:alvaro@email.com",
    },
    {
      label: "LinkedIn",
      value: "@alvaro-sampaio",
      icon: "💼",
      href: "https://linkedin.com/in/alvaro-sampaio",
    },
    {
      label: "GitHub",
      value: "@alvarosamp",
      icon: "🐙",
      href: "https://github.com/alvarosamp",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setMessage("");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 className="section-title" variants={fadeInUp}>
            Vamos trabalhar juntos?
          </motion.h2>
          <motion.p className="section-description" variants={fadeInUp}>
            Estou aberto a novas oportunidades e colaborações
          </motion.p>
        </motion.div>

        <motion.div
          className="contact-methods"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {contactMethods.map((method, idx) => (
            <motion.a
              key={idx}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="method-icon">{method.icon}</span>
              <h3 className="method-label">{method.label}</h3>
              <p className="method-value">{method.value}</p>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="contact-form-wrapper"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h3 className="form-title">Envie uma mensagem</h3>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="form-status success"
            >
              <p>✓ Mensagem enviada com sucesso!</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <motion.div variants={fadeInUp}>
                <label className="form-label">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-input"
                  placeholder="seu.email@example.com"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label className="form-label">Mensagem</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows="5"
                  className="form-textarea"
                  placeholder="Conte-me sobre seu projeto..."
                />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="submit-btn"
              >
                Enviar Mensagem
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

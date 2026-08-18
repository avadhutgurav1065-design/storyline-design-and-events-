import { motion } from 'framer-motion';

export default function MaskedText({ text, delay = 0, className = '' }) {
  return (
    <span className="masked-text-container" style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>
      <motion.span
        initial={{ y: "110%", rotate: 3, opacity: 0 }}
        whileInView={{ y: 0, rotate: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          duration: 1, 
          delay: delay, 
          ease: [0.22, 1, 0.36, 1] // Custom spring-like easing
        }}
        className={className}
        style={{ display: 'inline-block' }}
      >
        {text}
      </motion.span>
    </span>
  );
}

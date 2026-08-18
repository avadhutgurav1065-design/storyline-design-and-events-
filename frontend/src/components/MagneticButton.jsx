import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function MagneticButton({ children, to, onClick, className, as = "button" }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  const commonProps = {
    ref,
    onMouseMove: handleMouse,
    onMouseLeave: reset,
    animate: { x, y },
    transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
    className: className || "",
    onClick
  };

  if (as === "link" && to) {
    return (
      <motion.div {...commonProps} style={{ display: 'inline-block' }}>
        <Link to={to} className={className} style={{ display: 'inline-block', width: '100%', height: '100%' }}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button {...commonProps}>
      {children}
    </motion.button>
  );
}

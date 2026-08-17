import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Check if we are hovering over an interactive element
      const interactiveElements = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT'];
      
      let target = e.target;
      let isInteractive = false;
      
      while (target && target !== document.body) {
        if (interactiveElements.includes(target.tagName) || 
            target.classList.contains('hover-tilt') || 
            target.classList.contains('portfolio-card')) {
          isInteractive = true;
          break;
        }
        target = target.parentElement;
      }
      
      setIsHovering(isInteractive);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      height: 20,
      width: 20,
      backgroundColor: 'transparent',
      border: '2px solid var(--rose-deeper)',
      mixBlendMode: 'normal',
      opacity: isHidden ? 0 : 1
    },
    hover: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      backgroundColor: 'var(--rose-light)',
      border: 'none',
      mixBlendMode: 'difference',
      opacity: isHidden ? 0 : 1
    }
  };

  return (
    <>
      <motion.div
        className="custom-cursor"
        variants={variants}
        animate={isHovering ? "hover" : "default"}
        transition={{ 
          type: 'spring', 
          stiffness: 500, 
          damping: 28,
          mass: 0.5
        }}
      />
      <style>{`
        body {
          cursor: none;
        }
        a, button, input, textarea, select {
          cursor: none; /* Let the custom cursor handle it */
        }
        .custom-cursor {
          position: fixed;
          top: 0;
          left: 0;
          border-radius: 50%;
          pointer-events: none;
          z-index: 10001; /* Above loader */
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 1024px) {
          .custom-cursor {
            display: none !important;
          }
          body, a, button, input, textarea, select {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
}
